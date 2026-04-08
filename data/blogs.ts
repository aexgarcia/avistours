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

export const legacyBlogPosts: BlogPost[] = [
    {
        slug: "guia-para-descubrir-cusco-con-calma",
        title: "Guia para descubrir Puerto Pizarro con calma",
        excerpt: "Una ruta pensada para disfrutar plazas, miradores y valles sagrados sin perder el ritmo elegante del viaje.",
        category: "Rutas culturales",
        location: "Puerto Pizarro, Tumbes",
        readTime: "6 min",
        date: "18 Mar 2026",
        author: "Equipo Avistours",
        image: "/images/promotions/promotions1.jpg",
        featured: true,
        highlights: [
            "Amanecer en San Blas y recorrido por el centro historico",
            "Visita pausada al Valle Sagrado con paradas gastronomicas",
            "Recomendaciones para aclimatacion y fotografia de viaje",
        ],
        body: [
            {
                type: "paragraph",
                text: "Puerto Pizarro se disfruta mejor cuando el paseo se coordina con calma, considerando clima, marea y el tiempo disponible para navegar por los manglares.",
            },
            {
                type: "paragraph",
                text: "La Plaza de Armas, la piedra de los doce angulos y los balcones coloniales funcionan como una bienvenida natural antes de salir hacia los paisajes abiertos del valle.",
            },
            {
                type: "image",
                src: "/images/hero/hero1.jpg",
                alt: "Vista panoramica de montanas durante un viaje cultural",
                caption: "Las primeras horas del dia ayudan a recorrer la ciudad con menos prisa y mejor luz.",
            },
            {
                type: "heading",
                text: "El Valle Sagrado como pausa de lujo",
            },
            {
                type: "paragraph",
                text: "Pisac, Urubamba y Ollantaytambo permiten construir una ruta con historia, artesania y cocina local. La clave es reservar tiempo para mirar, conversar y no convertir cada parada en una simple foto.",
            },
            {
                type: "quote",
                text: "La elegancia de un viaje no esta en correr mas, sino en elegir mejor donde detenerse.",
                author: "Equipo Avistours",
            },
            {
                type: "list",
                items: [
                    "Reserva la primera manana para aclimatarte antes de los tramos largos.",
                    "Lleva una capa ligera para cambios rapidos de temperatura.",
                    "Elige horarios tempranos para miradores, mercados y fotografias.",
                ],
            },
            {
                type: "heading",
                text: "Detalles que elevan el viaje",
            },
            {
                type: "paragraph",
                text: "Llevar capas ligeras, hidratarse con constancia y elegir horarios tempranos hace una diferencia real. Tambien conviene reservar los trayectos principales con anticipacion para mantener una experiencia fluida.",
            },
            {
                type: "paragraph",
                text: "Puerto Pizarro recompensa a quien viaja con atencion: aves, canales de manglar y la brisa del estero pueden quedarse tanto como la foto mas esperada.",
            },
        ],
    },
    {
        slug: "escapadas-costeras-para-un-fin-de-semana",
        title: "Escapadas costeras para un fin de semana",
        excerpt: "Ideas cercanas al mar para viajeros que buscan descanso, cocina fresca y atardeceres memorables.",
        category: "Playas",
        location: "Puerto Pizarro, Tumbes",
        readTime: "4 min",
        date: "21 Mar 2026",
        author: "Equipo Avistours",
        image: "/images/promotions/promotions2.jpg",
        highlights: [
            "Hospedajes con salida temprana hacia la playa",
            "Paradas para probar cocina marina local",
            "Consejos para viajar ligero y aprovechar el atardecer",
        ],
        body: [
            {
                type: "paragraph",
                text: "Una escapada costera no necesita muchos dias para dejar una sensacion de descanso profundo. Lo importante es elegir una base comoda, ordenar bien los traslados y no saturar el itinerario.",
            },
            {
                type: "image",
                src: "/images/hero/hero2.jpg",
                alt: "Costa tranquila para una escapada de fin de semana",
                caption: "Una ruta corta se siente mejor cuando deja espacio para caminar y mirar el atardecer.",
            },
            {
                type: "heading",
                text: "La mesa como parte del destino",
            },
            {
                type: "paragraph",
                text: "La cocina marina convierte cada parada en una experiencia. Ceviches, pescados a la parrilla y productos frescos dan identidad a la ruta sin necesidad de grandes ceremonias.",
            },
            {
                type: "list",
                items: [
                    "Viaja temprano para llegar sin perder la primera tarde.",
                    "Reserva restaurantes en horas de alta demanda.",
                    "Incluye una pausa libre antes del retorno para evitar regresar agotado.",
                ],
            },
            {
                type: "quote",
                text: "Menos equipaje, mejores horarios y una buena mesa: esa es la formula de un fin de semana bien viajado.",
            },
            {
                type: "heading",
                text: "Un equipaje mas inteligente",
            },
            {
                type: "paragraph",
                text: "Ropa ligera, proteccion solar, una casaca para la brisa y calzado facil de limpiar suelen ser suficientes. Menos carga significa mas libertad para moverse.",
            },
            {
                type: "paragraph",
                text: "La escapada ideal termina con una sensacion clara: haber salido de la rutina sin regresar agotado.",
            },
        ],
    },
    {
        slug: "selva-amazonica-confort-y-naturaleza",
        title: "Selva amazonica: confort y naturaleza",
        excerpt: "Como equilibrar exploracion, descanso y respeto por el entorno en una experiencia amazonica bien disenada.",
        category: "Naturaleza",
        location: "Puerto Pizarro, Tumbes",
        readTime: "7 min",
        date: "25 Mar 2026",
        author: "Equipo Avistours",
        image: "/images/promotions/promotions3.jpg",
        highlights: [
            "Lodges con recorridos guiados al amanecer",
            "Observacion de flora y fauna con grupos reducidos",
            "Buenas practicas para un viaje responsable",
        ],
        body: [
            {
                type: "paragraph",
                text: "En la selva, la agenda debe seguir la luz, la lluvia y los sonidos del entorno. Los mejores recorridos suelen empezar temprano, cuando la temperatura es mas amable y la vida silvestre se mueve con mayor claridad.",
            },
            {
                type: "heading",
                text: "Explorar sin invadir",
            },
            {
                type: "paragraph",
                text: "Viajar por los manglares exige atencion al impacto. Grupos pequenos, distancia respetuosa con la fauna y consumo local responsable hacen que el destino conserve su valor.",
            },
            {
                type: "image",
                src: "/images/hero/hero3.jpg",
                alt: "Paisaje natural para una experiencia amazonica",
                caption: "Un buen lodge ordena la experiencia con guias preparados, rutas seguras y descansos reales.",
            },
            {
                type: "quote",
                text: "La selva no es un escenario: es un sistema vivo que exige atencion, silencio y cuidado.",
                author: "Equipo Avistours",
            },
            {
                type: "heading",
                text: "Confort con sentido",
            },
            {
                type: "paragraph",
                text: "Elegir alojamientos con practicas sostenibles, energia responsable y gestion adecuada de residuos suma calidad al viaje. La elegancia aqui no es exceso, sino criterio.",
            },
            {
                type: "list",
                items: [
                    "Prioriza grupos reducidos y guias locales capacitados.",
                    "Evita alimentar fauna o alterar senderos marcados.",
                    "Lleva proteccion ligera, repelente y calzado firme para humedad.",
                ],
            },
            {
                type: "paragraph",
                text: "Una noche tranquila bajo el sonido del bosque puede ser el detalle mas memorable de todo el recorrido.",
            },
        ],
    },
]

export const blogPosts: BlogPost[] = [
    {
        slug: "mareas-en-puerto-pizarro",
        title: "Mareas en Puerto Pizarro: como elegir tu paseo",
        excerpt: "Una guia clara para entender por que la marea cambia la navegacion, las vistas del manglar y el mejor horario para zarpar.",
        category: "Mareas",
        location: "Puerto Pizarro, Tumbes",
        readTime: "5 min",
        date: "07 Abr 2026",
        author: "Equipo Avistours",
        image: "/images/promotions/promotions1.jpg",
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
                src: "/images/hero/hero1.jpg",
                alt: "Canales de manglar en Puerto Pizarro",
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
                author: "Equipo Avistours",
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
        author: "Equipo Avistours",
        image: "/images/promotions/promotions3.jpg",
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
                src: "/images/hero/hero2.jpg",
                alt: "Paseo turistico por islas de Puerto Pizarro",
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
        author: "Equipo Avistours",
        image: "/images/promotions/promotions4.jpg",
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
                src: "/images/hero/hero3.jpg",
                alt: "Manglares y aves en Tumbes",
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
