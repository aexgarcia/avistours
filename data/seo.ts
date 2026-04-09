import type { BlogPost } from "./blogs"
import type { Tour } from "./promotions"

export const brandName = "AvisTours"

export const siteWideKeywords = [
    brandName,
    "Puerto Pizarro",
    "Tumbes",
    "manglares de Tumbes",
    "manglares de Puerto Pizarro",
    "tours en Puerto Pizarro",
    "tour Puerto Pizarro",
    "paseos en Puerto Pizarro",
    "paseo en bote Puerto Pizarro",
    "tours en Tumbes",
    "tour manglares Tumbes",
    "paquetes turisticos Puerto Pizarro",
    "tour Puerto Pizarro precio",
    "Isla de los Pajaros",
    "isla de los pajaros Tumbes",
    "zoocriadero de cocodrilos",
    "zoocriadero de cocodrilos Tumbes",
    "boca del mar Tumbes",
    "boca del mar Puerto Pizarro",
    "mareas en Puerto Pizarro",
    "que hacer en Puerto Pizarro",
    "como llegar a Puerto Pizarro",
    "mejor hora para visitar los manglares de Tumbes",
]

export const packagesKeywords = [
    ...siteWideKeywords,
    "tour isla de los pajaros Puerto Pizarro",
    "tour manglares y cocodrilos",
    "tour completo Puerto Pizarro",
    "visita a isla de los pajaros y manglares",
]

export const blogKeywords = [
    ...siteWideKeywords,
    "guia Puerto Pizarro",
    "blog Puerto Pizarro",
    "consejos para visitar Puerto Pizarro",
    "mareas y manglares en Tumbes",
]

export const contactKeywords = [
    brandName,
    "contacto tours Puerto Pizarro",
    "reservar tour Puerto Pizarro",
    "WhatsApp Puerto Pizarro",
    "consultar tour manglares Tumbes",
]

const tourAliasMap: Record<string, string[]> = {
    "puerto-pizarro-completo": [
        "tour completo Puerto Pizarro",
        "tour Puerto Pizarro completo",
        "tour Puerto Pizarro precio",
        "paquete completo Puerto Pizarro",
        "islas manglares cocodrilos boca del mar",
        "que hacer en Puerto Pizarro",
    ],
    "solo-ida-a-la-isla": [
        "solo ida a la isla",
        "traslado a la isla Puerto Pizarro",
        "paseo corto Puerto Pizarro",
        "ida a la isla en bote",
    ],
    "isla-pajaros-y-manglares": [
        "tour isla de los pajaros Puerto Pizarro",
        "isla de los pajaros Tumbes",
        "visita a isla de los pajaros y manglares",
        "avistamiento de aves Puerto Pizarro",
    ],
    "islas-manglares-cocodrilos": [
        "tour manglares y cocodrilos",
        "tour cocodrilos Puerto Pizarro",
        "manglares cocodrilos Puerto Pizarro",
        "zoocriadero de cocodrilos Tumbes",
    ],
    "pajaros-y-manglares": [
        "pajaros y manglares",
        "tour aves y manglares",
        "manglares de Puerto Pizarro",
        "tour naturaleza Puerto Pizarro",
    ],
    "manglares-y-cocodrilos": [
        "manglares y cocodrilo",
        "manglares y cocodrilos",
        "tour manglares Tumbes",
        "tour cocodrilos Tumbes",
        "zoocriadero de cocodrilos",
    ],
}

const blogAliasMap: Record<string, string[]> = {
    "mareas-en-puerto-pizarro": [
        "mareas en Puerto Pizarro",
        "mejor hora para visitar los manglares de Tumbes",
        "cuando visitar Puerto Pizarro",
        "horarios de marea Puerto Pizarro",
    ],
    "ruta-completa-islas-manglares-cocodrilos": [
        "tour completo Puerto Pizarro",
        "que hacer en Puerto Pizarro",
        "islas manglares cocodrilos",
        "paseos turisticos en Tumbes",
    ],
    "isla-de-los-pajaros-y-manglares": [
        "isla de los pajaros Tumbes",
        "visita a isla de los pajaros y manglares",
        "tour aves Puerto Pizarro",
        "manglares de Tumbes",
    ],
}

function uniqueTerms(values: string[]) {
    return Array.from(new Set(values.filter(Boolean)))
}

export function getTourSearchTerms(tour: Tour) {
    return uniqueTerms([
        ...packagesKeywords,
        ...(tourAliasMap[tour.slug] ?? []),
        tour.title,
        tour.location,
        tour.description,
        tour.duration,
        ...tour.features,
        ...tour.activities,
        ...tour.includes,
        ...tour.recommendations,
        ...tour.itinerary,
    ])
}

export function getBlogSearchTerms(post: BlogPost) {
    const paragraphTexts = post.body.flatMap((block) => {
        if (block.type === "paragraph" || block.type === "heading" || block.type === "quote") {
            return [block.text]
        }

        return []
    })

    return uniqueTerms([
        ...blogKeywords,
        ...(blogAliasMap[post.slug] ?? []),
        post.title,
        post.excerpt,
        post.category,
        post.location,
        post.author,
        ...post.highlights,
        ...paragraphTexts,
    ])
}
