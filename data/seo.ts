import type { BlogPost } from "./blogs"
import type { Tour } from "./promotions"

export const brandName = "Avis Tours"

export const siteWideKeywords = [
    brandName,
    "Avis Tours",
    "AvisTours",
    "Puerto Pizarro",
    "Tumbes"
]

export const homeKeywords = [
    "tours en Puerto Pizarro",
    "manglares de Tumbes",
    "tour Puerto Pizarro",
    "paseos en Puerto Pizarro"
]

export const packagesKeywords = [
    "tours en Puerto Pizarro precios",
    "tour a los manglares de Puerto Pizarro",
    "paquetes turisticos Puerto Pizarro",
    "tour isla de los pajaros Puerto Pizarro",
    "tour manglares y cocodrilos",
    "tour completo Puerto Pizarro",
    "visita a isla de los pajaros y manglares",
]

export const blogKeywords = [
    "guia Puerto Pizarro",
    "consejos para visitar Puerto Pizarro",
    "que hacer en Puerto Pizarro",
    "como llegar a Puerto Pizarro",
    "mareas en Puerto Pizarro",
    "mejor hora manglares Tumbes"
]

export const contactKeywords = [
    brandName,
    "contacto tours Puerto Pizarro",
    "reservar tour Puerto Pizarro",
    "whatsapp tours Puerto Pizarro",
    "consultar tour manglares Tumbes",
]

export const primaryKeywords = {
    home: "tours en Puerto Pizarro",
    packages: "tours en Puerto Pizarro precios",
    blog: "que hacer en Puerto Pizarro",
}

export const primaryTourKeywords: Record<string, string> = {
    "puerto-pizarro-completo": "tour completo en Puerto Pizarro",
    "solo-visita-a-la-isla": "tour a la isla en Puerto Pizarro",
    "isla-pajaros-manglares": "tour isla de los pajaros Puerto Pizarro",
    "islas-manglares-cocodrilos": "tour islas manglares y cocodrilos Puerto Pizarro",
    "pajaros-y-manglares": "tour pajaros y manglares Puerto Pizarro",
    "manglares-y-cocodrilos": "tour manglares y cocodrilos Puerto Pizarro",
}

export const primaryBlogKeywords: Record<string, string> = {
    "mareas-en-puerto-pizarro": "mareas en Puerto Pizarro",
    "ruta-completa-islas-manglares-cocodrilos": "tour completo en Puerto Pizarro",
    "isla-de-los-pajaros-y-manglares": "isla de los pajaros Tumbes",
    "como-llegar-a-puerto-pizarro-desde-tumbes": "como llegar a Puerto Pizarro desde Tumbes",
    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": "que llevar a un tour por los manglares de Puerto Pizarro",
}

type SeoTarget = {
    intro: string
    secondaryKeyword: string
    intent: string
}

export const tourSeoTargets: Record<string, SeoTarget> = {
    "puerto-pizarro-completo": {
        intro: "Este tour completo en Puerto Pizarro es la mejor opcion si quieres recorrer islas, manglares, cocodrilos y la boca del mar en una sola salida bien aprovechada.",
        secondaryKeyword: "precio tour Puerto Pizarro",
        intent: "comparar el recorrido mas completo antes de reservar",
    },
    "solo-visita-a-la-isla": {
        intro: "Este tour a la isla en Puerto Pizarro es ideal si buscas un paseo corto, facil de coordinar y con tiempo libre para disfrutar el entorno a tu ritmo.",
        secondaryKeyword: "paseo corto Puerto Pizarro",
        intent: "elegir una salida breve y facil de coordinar",
    },
    "isla-pajaros-manglares": {
        intro: "Este tour a la Isla de los Pajaros en Puerto Pizarro combina navegacion por manglares, observacion de aves y una ruta natural muy buscada en Tumbes.",
        secondaryKeyword: "visita a isla de los pajaros y manglares",
        intent: "reservar una ruta natural con aves y manglar",
    },
    "islas-manglares-cocodrilos": {
        intro: "Este tour por islas, manglares y cocodrilos en Puerto Pizarro funciona muy bien si quieres una ruta variada con naturaleza, fauna y paseo en lancha.",
        secondaryKeyword: "tour cocodrilos Puerto Pizarro",
        intent: "evaluar una ruta variada con fauna y esteros",
    },
    "pajaros-y-manglares": {
        intro: "Este tour de pajaros y manglares en Puerto Pizarro es una opcion corta y tranquila para observar aves y conocer el ecosistema del manglar sin dedicar muchas horas.",
        secondaryKeyword: "manglares de Puerto Pizarro",
        intent: "encontrar un paseo tranquilo centrado en naturaleza",
    },
    "manglares-y-cocodrilos": {
        intro: "Este tour de manglares y cocodrilos en Puerto Pizarro es perfecto si quieres una primera experiencia con navegacion por esteros y visita al zoocriadero.",
        secondaryKeyword: "zoocriadero de cocodrilos Tumbes",
        intent: "escoger un tour con manglares y fauna local",
    },
}

export const blogSeoTargets: Record<string, SeoTarget> = {
    "mareas-en-puerto-pizarro": {
        intro: "Si estas revisando las mareas en Puerto Pizarro, esta guia te ayuda a entender cual es la mejor hora para visitar los manglares de Tumbes y aprovechar mejor tu tour.",
        secondaryKeyword: "mejor hora para visitar los manglares de Tumbes",
        intent: "entender cuando conviene salir segun la marea",
    },
    "ruta-completa-islas-manglares-cocodrilos": {
        intro: "Si quieres saber que hacer en Puerto Pizarro en una sola salida, aqui te mostramos por que el tour completo suele ser la opcion mas recomendada para quienes visitan Tumbes.",
        secondaryKeyword: "que hacer en Puerto Pizarro",
        intent: "comparar si el tour completo encaja con tu viaje",
    },
    "isla-de-los-pajaros-y-manglares": {
        intro: "Si te interesa la Isla de los Pajaros en Tumbes, esta guia resume que ver, como es el recorrido y por que este paseo destaca entre los tours naturales de Puerto Pizarro.",
        secondaryKeyword: "tour aves Puerto Pizarro",
        intent: "descubrir que ver en la Isla de los Pajaros",
    },
    "como-llegar-a-puerto-pizarro-desde-tumbes": {
        intro: "Si necesitas saber como llegar a Puerto Pizarro desde Tumbes o desde el aeropuerto, aqui tienes una guia clara para ubicar el muelle turistico y organizar mejor tu visita.",
        secondaryKeyword: "muelle turistico Puerto Pizarro",
        intent: "resolver como llegar sin perder tiempo",
    },
    "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro": {
        intro: "Si te preguntas que llevar a un tour por los manglares de Puerto Pizarro, esta guia te ayuda a preparar ropa, accesorios y detalles practicos antes de salir.",
        secondaryKeyword: "recomendaciones para visitar Puerto Pizarro",
        intent: "prepararte mejor antes de tu paseo en manglares",
    },
}

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
    "solo-visita-a-la-isla": [
        "solo ida a la isla",
        "traslado a la isla Puerto Pizarro",
        "paseo corto Puerto Pizarro",
        "ida a la isla en bote",
    ],
    "isla-pajaros-manglares": [
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

export function getPrimaryTourKeyword(tour: Tour) {
    return primaryTourKeywords[tour.slug] ?? tour.title
}

export function getPrimaryBlogKeyword(post: BlogPost) {
    return primaryBlogKeywords[post.slug] ?? post.title
}

export function getTourSeoTarget(tour: Tour) {
    const target = tourSeoTargets[tour.slug]

    return {
        intro: target?.intro ?? tour.description,
        primaryKeyword: getPrimaryTourKeyword(tour),
        secondaryKeyword: target?.secondaryKeyword ?? tour.location,
        intent: target?.intent ?? "resolver si este tour encaja con tu visita",
    }
}

export function getBlogSeoTarget(post: BlogPost) {
    const target = blogSeoTargets[post.slug]

    return {
        intro: target?.intro ?? post.excerpt,
        primaryKeyword: getPrimaryBlogKeyword(post),
        secondaryKeyword: target?.secondaryKeyword ?? post.category,
        intent: target?.intent ?? "resolver una duda util antes de viajar",
    }
}

export function getTourSearchTerms(tour: Tour) {
    const seoTarget = getTourSeoTarget(tour)

    return uniqueTerms([
        seoTarget.primaryKeyword,
        seoTarget.secondaryKeyword,
        ...siteWideKeywords,
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

    const seoTarget = getBlogSeoTarget(post)

    return uniqueTerms([
        seoTarget.primaryKeyword,
        seoTarget.secondaryKeyword,
        ...siteWideKeywords,
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
