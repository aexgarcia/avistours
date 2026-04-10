import type { BlogPost } from "./blogs"
import type { Tour } from "./promotions"

export const brandName = "Avis Tours"

export const siteWideKeywords = [
    brandName,
    "AvisTours",
    "Avis Tours",
    "Puerto Pizarro",
    "Tumbes",
    "tour manglares Puerto Pizarro",
    "tour manglares de Puerto Pizarro y sus islas",
    "manglares de Puerto Pizarro y sus islas",
    "manglares de Tumbes",
    "manglares de Puerto Pizarro",
    "tours en Puerto Pizarro",
    "tour Puerto Pizarro",
    "precio tour Puerto Pizarro",
    "reserva tour Puerto Pizarro",
    "paseos en Puerto Pizarro",
    "paseo en bote Puerto Pizarro",
    "islas de Puerto Pizarro",
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
    "tours Puerto Pizarro precios",
    "tour a los manglares de Puerto Pizarro",
    "reserva paseo en bote Puerto Pizarro",
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
    "como visitar los manglares de Puerto Pizarro",
    "que hacer en Tumbes y Puerto Pizarro",
]

export const contactKeywords = [
    brandName,
    "contacto tours Puerto Pizarro",
    "reservar tour Puerto Pizarro",
    "whatsapp tours Puerto Pizarro",
    "WhatsApp Puerto Pizarro",
    "consultar tour manglares Tumbes",
]

export const homeFaqs = [
    {
        question: "Cual es el mejor horario para visitar los manglares de Puerto Pizarro?",
        answer:
            "El mejor horario depende de la marea del dia. En Avis Tours confirmamos la ventana recomendada antes de zarpar para que el recorrido por manglares, islas o cocodrilos se adapte mejor al estero.",
    },
    {
        question: "Que incluye un tour por Puerto Pizarro?",
        answer:
            "Segun el paquete, puedes visitar manglares, Isla de los Pajaros, zoocriadero de cocodrilos, islas cercanas y la boca del mar. Cada tour detalla actividades, tiempo estimado e incluidos.",
    },
    {
        question: "Hay tours cortos y tambien recorrido completo?",
        answer:
            "Si. Tenemos opciones breves para visitar isla o manglares y tambien el tour completo por Puerto Pizarro para quienes quieren aprovechar mas paradas en una sola salida.",
    },
    {
        question: "Como reservar un paseo en Puerto Pizarro?",
        answer:
            "Puedes reservar por WhatsApp o desde la pagina de contacto. Lo ideal es escribir con fecha tentativa, numero de personas y el tour que te interesa para confirmar disponibilidad y marea.",
    },
]

export const packagesFaqs = [
    {
        question: "Cuanto cuesta un tour por los manglares de Puerto Pizarro?",
        answer:
            "El precio varia segun la ruta y la cantidad de personas. En los paquetes mostramos el valor base y, cuando aplica, el calculo por persona para grupos de hasta 10 viajeros.",
    },
    {
        question: "Que diferencia hay entre el tour completo y los paseos cortos?",
        answer:
            "El tour completo recorre mas paradas, como islas, manglares, cocodrilos y boca del mar. Los paseos cortos se enfocan en una combinacion puntual, por ejemplo Isla de los Pajaros y manglares.",
    },
    {
        question: "Los tours en Puerto Pizarro son aptos para familias?",
        answer:
            "Si. Muchas rutas son ideales para familias, parejas o grupos pequeños. La mejor opcion depende del tiempo disponible, la edad de los viajeros y el tipo de experiencia que buscan.",
    },
    {
        question: "Se puede reservar el tour por WhatsApp?",
        answer:
            "Si. Todas las rutas de Avis Tours tienen acceso rapido por WhatsApp para consultar disponibilidad, horarios, marea y coordinacion del punto de encuentro.",
    },
]

export const contactFaqs = [
    {
        question: "Donde esta el punto de encuentro para los tours?",
        answer:
            "Coordinamos cerca del muelle turistico de Puerto Pizarro. Antes de la salida confirmamos la ubicacion exacta y la hora recomendada segun marea y clima.",
    },
    {
        question: "Con cuanta anticipacion debo reservar?",
        answer:
            "Para fines de semana o feriados conviene reservar con anticipacion. Si viajas entre semana, aun asi es recomendable escribir antes para confirmar embarcacion y horario.",
    },
    {
        question: "Atienden todos los dias?",
        answer:
            "Si. Atendemos todos los dias, pero los horarios de salida pueden variar de acuerdo con la marea, el clima y la disponibilidad del recorrido.",
    },
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
    "como-llegar-a-puerto-pizarro-desde-tumbes": [
        "como llegar a Puerto Pizarro",
        "como llegar a Puerto Pizarro desde Tumbes",
        "muelle turistico Puerto Pizarro",
        "como ir a los manglares de Puerto Pizarro",
    ],
    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": [
        "que llevar a Puerto Pizarro",
        "que llevar a un tour por los manglares",
        "recomendaciones para visitar Puerto Pizarro",
        "ropa para tour en manglares",
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
