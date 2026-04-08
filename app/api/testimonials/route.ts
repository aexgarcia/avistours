import { NextResponse } from "next/server"
import { tours } from "@/data/promotions"
import { getApprovedTestimonials, createTestimonial } from "@/services/testimonials"

export async function GET() {
    const testimonials = await getApprovedTestimonials()

    return NextResponse.json({ testimonials })
}

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const clientName = cleanText(body.clientName, 70)
        const clientOrigin = cleanText(body.clientOrigin, 80)
        const tourSlug = cleanText(body.tourSlug, 80)
        const comment = cleanText(body.comment, 700)
        const visitDate = cleanText(body.visitDate, 30)
        const rating = Number(body.rating)
        const selectedTour = tours.find((tour) => tour.slug === tourSlug)

        if (!clientName || !clientOrigin || !selectedTour || !comment || !Number.isInteger(rating) || rating < 1 || rating > 5) {
            return NextResponse.json(
                { message: "Completa nombre, origen, tour, comentario y rating valido." },
                { status: 400 },
            )
        }

        await createTestimonial({
            clientName,
            clientOrigin,
            tourSlug: selectedTour.slug,
            tourTitle: selectedTour.title,
            rating,
            comment,
            visitDate,
        })

        return NextResponse.json({
            message: "Gracias por compartir tu experiencia. La publicaremos luego de revisarla.",
        })
    } catch (error) {
        console.error("Could not create testimonial", error)

        return NextResponse.json(
            { message: "No pudimos guardar tu comentario. Intentalo nuevamente." },
            { status: 500 },
        )
    }
}

function cleanText(value: unknown, maxLength: number) {
    if (typeof value !== "string") {
        return ""
    }

    return value.trim().replace(/\s+/g, " ").slice(0, maxLength)
}
