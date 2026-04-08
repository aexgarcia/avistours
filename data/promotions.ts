import promotions from "./promotions.json"

export type Tour = {
    id: number
    slug: string
    title: string
    location: string
    price: number
    image: string
    gallery: string[]
    rating: number
    reviews: number
    duration: string
    description: string
    features: string[]
    activities: string[]
    includes: string[]
    recommendations: string[]
    itinerary: string[]
    discount?: string
}

export const tours = promotions as Tour[]

export function getTour(slug: string) {
    return tours.find((tour) => tour.slug === slug)
}
