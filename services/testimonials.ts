import "server-only"

import type { Document, WithId } from "mongodb"
import { unstable_cache } from "next/cache"
import { fallbackTestimonials, type PublicTestimonial } from "@/data/testimonials"
import { getMongoDb, isMongoConfigured } from "@/services/mongodb"

export type TestimonialStatus = "pending" | "approved" | "rejected"

export type TestimonialDocument = {
    clientName: string
    clientOrigin: string
    tourSlug: string
    tourTitle: string
    rating: number
    comment: string
    visitDate?: string
    status: TestimonialStatus
    displayImage: string
    createdAt: Date
    approvedAt?: Date
    source?: string
}

export type TourRatingSummary = {
    rating: number
    reviews: number
}

function mapPublicTestimonial(document: WithId<TestimonialDocument & Document>): PublicTestimonial {
    return {
        id: document._id.toString(),
        text: document.comment,
        name: document.clientName,
        role: document.clientOrigin,
        image: document.displayImage,
        rating: document.rating,
        tourTitle: document.tourTitle,
    }
}

export async function getApprovedTestimonials(limit = 8): Promise<PublicTestimonial[]> {
    if (!isMongoConfigured()) {
        return fallbackTestimonials
    }

    try {
        const db = await getMongoDb()
        const documents = await db
            .collection<TestimonialDocument>("testimonials")
            .find({ status: "approved" })
            .sort({ approvedAt: -1, createdAt: -1 })
            .limit(limit)
            .toArray()

        return documents.length > 0 ? documents.map(mapPublicTestimonial) : fallbackTestimonials
    } catch (error) {
        console.error("Could not load testimonials", error)
        return fallbackTestimonials
    }
}

export async function createTestimonial(input: Omit<TestimonialDocument, "createdAt" | "status" | "displayImage">) {
    const db = await getMongoDb()
    const autoApprove = process.env.AUTO_APPROVE_TESTIMONIALS === "true"
    const now = new Date()

    return db.collection<TestimonialDocument>("testimonials").insertOne({
        ...input,
        status: autoApprove ? "approved" : "pending",
        displayImage: "/images/clients/client1.png",
        createdAt: now,
        approvedAt: autoApprove ? now : undefined,
        source: "feedback-page",
    })
}

export async function getTourRatingSummaries(): Promise<Record<string, TourRatingSummary>> {
    if (!isMongoConfigured()) {
        return {}
    }

    try {
        const summaries = await getCachedTourRatingSummaries()

        return summaries.reduce<Record<string, TourRatingSummary>>((accumulator, item) => {
            accumulator[item._id] = {
                rating: Number(item.rating.toFixed(1)),
                reviews: item.reviews,
            }

            return accumulator
        }, {})
    } catch (error) {
        console.error("Could not load tour rating summaries", error)
        return {}
    }
}

const getCachedTourRatingSummaries = unstable_cache(
    async () => {
        const db = await getMongoDb()

        return db
            .collection<TestimonialDocument>("testimonials")
            .aggregate<{ _id: string; rating: number; reviews: number }>([
                { $match: { status: "approved" } },
                {
                    $group: {
                        _id: "$tourSlug",
                        rating: { $avg: "$rating" },
                        reviews: { $sum: 1 },
                    },
                },
            ])
            .toArray()
    },
    ["tour-rating-summaries"],
    { revalidate: 300 },
)

export function applyTourRating<T extends { slug: string; rating: number; reviews: number }>(
    tour: T,
    summaries: Record<string, TourRatingSummary>,
) {
    const summary = summaries[tour.slug]

    if (!summary) {
        return tour
    }

    return {
        ...tour,
        rating: summary.rating,
        reviews: summary.reviews,
    }
}
