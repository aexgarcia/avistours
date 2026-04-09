import promotions from "./promotions.json"

export type Tour = {
    id: number
    slug: string
    title: string
    location: string
    price: number
    groupPrice?: number
    minPeople?: number
    maxPeople?: number
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

function roundPrice(value: number) {
    return Number(value.toFixed(2))
}

export function formatPrice(value: number) {
    const safeValue = roundPrice(value)

    return `S/. ${Number.isInteger(safeValue) ? safeValue.toFixed(0) : safeValue.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")}`
}

export function getTourStartingPrice(tour: Tour) {
    if (tour.groupPrice && tour.maxPeople) {
        return roundPrice(tour.groupPrice / tour.maxPeople)
    }

    return roundPrice(tour.price)
}

export function hasGroupPricing(tour: Tour) {
    return Boolean(tour.groupPrice && tour.maxPeople && tour.maxPeople > 1)
}

export function getTourPricing(tour: Tour, people?: number) {
    if (hasGroupPricing(tour)) {
        const minPeople = tour.minPeople ?? 1
        const maxPeople = tour.maxPeople ?? 1
        const selectedPeople = Math.min(Math.max(people ?? maxPeople, minPeople), maxPeople)
        const totalPrice = roundPrice(tour.groupPrice!)
        const perPersonPrice = roundPrice(totalPrice / selectedPeople)

        return {
            isGroupPricing: true,
            minPeople,
            maxPeople,
            people: selectedPeople,
            totalPrice,
            perPersonPrice,
            startingPrice: roundPrice(totalPrice / maxPeople),
        }
    }

    const selectedPeople = Math.max(people ?? 1, 1)
    const perPersonPrice = roundPrice(tour.price)

    return {
        isGroupPricing: false,
        minPeople: 1,
        maxPeople: 1,
        people: selectedPeople,
        totalPrice: roundPrice(perPersonPrice * selectedPeople),
        perPersonPrice,
        startingPrice: perPersonPrice,
    }
}
