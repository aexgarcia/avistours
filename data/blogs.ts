export type BlogContentBlock =
    | {
        type: "heading"
        text: string
    }
    | {
        type: "paragraph"
        text: string
    }
    | {
        type: "image"
        src: string
        alt: string
        caption?: string
    }
    | {
        type: "quote"
        text: string
        author?: string
    }
    | {
        type: "list"
        items: string[]
    }

export type BlogPost = {
    slug: string
    title: string
    excerpt: string
    category: string
    location: string
    readTime: string
    date: string
    author: string
    image: string
    featured?: boolean
    highlights: string[]
    body: BlogContentBlock[]
}

export const blogPosts: BlogPost[] = [
    {
        slug: "mareas-en-puerto-pizarro",
        title: "Mareas en Puerto Pizarro: como elegir tu paseo",
        excerpt: "Una guia clara para entender por que la marea cambia la navegacion, las vistas del manglar y el mejor horario para zarpar.",
        category: "Mareas",
        location: "Puerto Pizarro, Tumbes",
        readTime: "5 min",
        date: "07 Abr 2026",
        author: "Equipo AvisTours",
        image: "/images/galeria/galeria28.jpg",
        featured: true,
        highlights: [
            "La marea influye en el ingreso a canales y zonas de manglar",
            "El horario ideal se confirma antes de zarpar",
            "Marea alta y baja ofrecen experiencias visuales distintas",
        ],
        body: [
            {
                type: "paragraph",
                text: "En Puerto Pizarro, la marea no es un detalle menor: marca el ritmo de la navegacion, el acceso a ciertos canales y la forma en que se aprecia el manglar. Por eso un paseo bien organizado siempre toma en cuenta el nivel del agua.",
            },
            {
                type: "heading",
                text: "Por que importa antes de reservar",
            },
            {
                type: "paragraph",
                text: "Con marea alta, algunos trayectos se sienten mas fluidos y comodos para navegar. Con marea baja, el paisaje revela raices, orillas y zonas donde las aves suelen alimentarse. Ninguna es necesariamente mejor: depende del tipo de experiencia que buscas.",
            },
            {
                type: "image",
                src: "/images/galeria/galeria31.jpg",
                alt: "Canales de manglar en Puerto Pizarro durante una salida en bote",
                caption: "Los horarios exactos de marea cambian cada dia; conviene confirmarlos al coordinar el tour.",
            },
            {
                type: "list",
                items: [
                    "Si quieres una navegacion mas suave, pregunta por horarios cercanos a marea alta.",
                    "Si prefieres observar raices y aves, consulta opciones con marea mas baja.",
                    "Evita fijar una hora sin validar clima, marea y disponibilidad de bote.",
                ],
            },
            {
                type: "quote",
                text: "La mejor hora para salir no siempre es la mas temprana; muchas veces es la que conversa mejor con la marea.",
                author: "Equipo AvisTours",
            },
        ],
    },
    {
        slug: "ruta-completa-islas-manglares-cocodrilos",
        title: "Ruta completa: islas, manglares y cocodrilos",
        excerpt: "El paseo mas completo para conocer Isla de los Pajaros, canales de manglar, zoocriadero de cocodrilos y la boca del mar.",
        category: "Tours",
        location: "Puerto Pizarro, Tumbes",
        readTime: "6 min",
        date: "07 Abr 2026",
        author: "Equipo AvisTours",
        image: "/images/galeria/completo_galeria1.jpg",
        highlights: [
            "Ideal para una primera visita a Puerto Pizarro",
            "Combina naturaleza, fauna y navegacion por esteros",
            "Recomendado para familias y grupos pequenos",
        ],
        body: [
            {
                type: "paragraph",
                text: "Si es tu primera vez en Puerto Pizarro, la ruta completa es la forma mas ordenada de entender el destino. Une islas, manglares, observacion de aves, cocodrilos y el encuentro visual con la boca del mar.",
            },
            {
                type: "heading",
                text: "Que incluye el recorrido",
            },
            {
                type: "list",
                items: [
                    "Navegacion por canales de manglar.",
                    "Paso por Isla de los Pajaros para observacion de aves.",
                    "Visita al zoocriadero de cocodrilos.",
                    "Avistamiento de la entrada o boca del mar.",
                ],
            },
            {
                type: "image",
                src: "/images/galeria/completo_galeria8.jpg",
                alt: "Paseo turistico por islas y manglares de Puerto Pizarro",
                caption: "La ruta se ajusta segun marea, clima y condiciones del estero.",
            },
            {
                type: "paragraph",
                text: "Es un paseo atractivo porque no se queda en una sola parada. Permite mirar el manglar desde el agua, reconocer aves del entorno y tener una experiencia variada sin salir de Puerto Pizarro.",
            },
        ],
    },
    {
        slug: "isla-de-los-pajaros-y-manglares",
        title: "Isla de los Pajaros y manglares: una salida esencial",
        excerpt: "Una alternativa equilibrada para quienes buscan aves, paisaje verde y navegacion tranquila sin tomar el paquete completo.",
        category: "Naturaleza",
        location: "Manglares de Tumbes",
        readTime: "4 min",
        date: "07 Abr 2026",
        author: "Equipo AvisTours",
        image: "/images/galeria/pajaros_manglares_galeria1.jpg",
        highlights: [
            "Buena opcion para viajes cortos",
            "Enfocada en aves y canales de manglar",
            "Puede combinarse con tiempo libre en la isla",
        ],
        body: [
            {
                type: "paragraph",
                text: "La salida hacia Isla de los Pajaros y manglares es perfecta si quieres una experiencia directa, visual y natural. El recorrido se centra en el paisaje del estero y en la observacion de aves.",
            },
            {
                type: "heading",
                text: "Para quien conviene",
            },
            {
                type: "paragraph",
                text: "Conviene para visitantes con menos tiempo, familias que prefieren una ruta sin demasiadas paradas o viajeros que quieren priorizar naturaleza y fotografia.",
            },
            {
                type: "image",
                src: "/images/galeria/pajaros_manglares_galeria4.jpeg",
                alt: "Manglares y aves en Puerto Pizarro",
                caption: "La actividad de aves puede variar segun temporada, hora del dia y marea.",
            },
            {
                type: "quote",
                text: "Puerto Pizarro se disfruta mejor cuando el paseo deja tiempo para mirar el movimiento del estero.",
            },
        ],
    },
]

export function getBlogPost(slug: string) {
    return blogPosts.find((post) => post.slug === slug)
}
