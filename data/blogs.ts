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
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/galeria28.webp",
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
                src: "/images-optimized/galeria/galeria31.webp",
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
                author: "Equipo Avis Tours",
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
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/completo_galeria1.webp",
        highlights: [
            "Ideal para una primera visita a Puerto Pizarro",
            "Combina naturaleza, fauna y navegacion por esteros",
            "Recomendado para familias y grupo pequeños",
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
                src: "/images-optimized/galeria/completo_galeria8.webp",
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
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/pajaros_manglares_galeria1.webp",
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
                src: "/images-optimized/galeria/pajaros_manglares_galeria4.webp",
                alt: "Manglares y aves en Puerto Pizarro",
                caption: "La actividad de aves puede variar segun temporada, hora del dia y marea.",
            },
            {
                type: "quote",
                text: "Puerto Pizarro se disfruta mejor cuando el paseo deja tiempo para mirar el movimiento del estero.",
            },
        ],
    },
    {
        slug: "como-llegar-a-puerto-pizarro-desde-tumbes",
        title: "Como llegar a Puerto Pizarro desde Tumbes centro o aeropuerto",
        excerpt: "Una guia practica para ubicar el muelle turistico, calcular tiempos de traslado y llegar con margen suficiente antes de tu paseo.",
        category: "Planificacion",
        location: "Tumbes y Puerto Pizarro",
        readTime: "5 min",
        date: "10 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/galeria29.webp",
        highlights: [
            "Ruta util para quienes llegan por primera vez a Tumbes",
            "Ayuda a calcular el traslado desde centro o aeropuerto",
            "Permite llegar con tiempo para validar marea y embarcacion",
        ],
        body: [
            {
                type: "paragraph",
                text: "Si viajas por primera vez a Tumbes, conviene tener claro como llegar a Puerto Pizarro antes del dia del tour. El punto de referencia principal es el muelle turistico, desde donde salen muchas embarcaciones hacia manglares, islas y recorridos de naturaleza.",
            },
            {
                type: "heading",
                text: "Desde Tumbes centro",
            },
            {
                type: "paragraph",
                text: "Desde el centro de Tumbes, el traslado hacia Puerto Pizarro suele ser corto, pero puede variar segun hora, trafico y temporada. Lo ideal es salir con margen para llegar con calma, confirmar al operador y no depender del tiempo justo antes de zarpar.",
            },
            {
                type: "heading",
                text: "Desde el aeropuerto",
            },
            {
                type: "paragraph",
                text: "Si llegas en vuelo el mismo dia, lo mas recomendable es coordinar con anticipacion el traslado o consultar una hora de salida que deje espacio para equipaje, movilidad y cualquier ajuste por clima o marea. Eso evita perder una buena ventana de navegacion.",
            },
            {
                type: "image",
                src: "/images-optimized/galeria/galeria30.webp",
                alt: "Acceso hacia el muelle turistico de Puerto Pizarro",
                caption: "Llegar con anticipacion da margen para ubicar el muelle, validar tu reserva y salir con mas tranquilidad.",
            },
            {
                type: "list",
                items: [
                    "Guarda la ubicacion del muelle turistico antes de salir.",
                    "Pregunta al operador cuanto tiempo recomienda considerar ese dia.",
                    "Si viajas en feriado o fin de semana, sal con mas margen.",
                ],
            },
        ],
    },
    {
        slug: "que-llevar-a-un-tour-por-los-manglares-de-puerto-pizarro",
        title: "Que llevar a un tour por los manglares de Puerto Pizarro",
        excerpt: "Recomendaciones practicas para ir comodo al bote, protegerte del sol y disfrutar mejor la experiencia en manglares, islas y observacion de aves.",
        category: "Consejos",
        location: "Puerto Pizarro, Tumbes",
        readTime: "4 min",
        date: "10 Abr 2026",
        author: "Equipo Avis Tours",
        image: "/images-optimized/galeria/galeria27.webp",
        highlights: [
            "Lista simple para turistas que visitan Puerto Pizarro por primera vez",
            "Pensado para clima costero, sol y recorridos en bote",
            "Ayuda a disfrutar mejor fotos, aves y paradas del recorrido",
        ],
        body: [
            {
                type: "paragraph",
                text: "Un tour por los manglares de Puerto Pizarro se disfruta mas cuando llevas lo justo y util. No hace falta cargar demasiado, pero si conviene pensar en sol, brisa, desplazamiento en bote y tiempo al aire libre.",
            },
            {
                type: "heading",
                text: "Basicos recomendados",
            },
            {
                type: "list",
                items: [
                    "Protector solar y gorra o sombrero.",
                    "Agua para mantenerte hidratado.",
                    "Celular o camara con bateria suficiente.",
                    "Lentes de sol y ropa ligera.",
                    "Bolso pequeño o mochila comoda.",
                ],
            },
            {
                type: "paragraph",
                text: "Si tu ruta incluye Isla de los Pajaros, manglares o boca del mar, vale la pena llevar el celular listo para fotos y evitar equipaje innecesario. Mientras mas ligero viajes, mas comodo se vuelve subir, bajar y moverte durante el paseo.",
            },
            {
                type: "image",
                src: "/images-optimized/galeria/galeria26.webp",
                alt: "Turistas listos para un paseo por los manglares de Puerto Pizarro",
                caption: "La ropa comoda y una buena proteccion solar suelen marcar la diferencia durante el recorrido.",
            },
            {
                type: "quote",
                text: "Para un buen paseo por Puerto Pizarro no necesitas llevar mucho; necesitas llevar lo correcto.",
                author: "Equipo Avis Tours",
            },
        ],
    },
]

export function getBlogPost(slug: string) {
    return blogPosts.find((post) => post.slug === slug)
}
