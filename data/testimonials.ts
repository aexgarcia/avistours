export type PublicTestimonial = {
    id: string
    text: string
    name: string
    role: string
    image: string
    rating: number
    tourTitle?: string
}

export const fallbackTestimonials: PublicTestimonial[] = [
    {
        id: "fallback-1",
        text: "El paseo por los manglares fue tranquilo y muy bien explicado. La parada en la Isla de los Pajaros fue lo mejor del dia.",
        name: "Mariana Rojas",
        role: "Visitante de Lima",
        image: "/images/clients/client1.png",
        rating: 5,
        tourTitle: "Puerto Pizarro completo",
    },
    {
        id: "fallback-2",
        text: "Nos ayudaron a elegir el horario segun la marea y el recorrido salio perfecto para viajar con ninos.",
        name: "Carlos Medina",
        role: "Familia viajera",
        image: "/images/clients/client2.png",
        rating: 5,
        tourTitle: "Islas, manglares y cocodrilos",
    },
    {
        id: "fallback-3",
        text: "La ruta completa por islas, cocodrilos y boca del mar fue clara, segura y muy bonita para fotos.",
        name: "Lucia Torres",
        role: "Viajera de Piura",
        image: "/images/clients/client4.png",
        rating: 5,
        tourTitle: "Puerto Pizarro completo",
    },
    {
        id: "fallback-4",
        text: "Puerto Pizarro tiene un paisaje distinto. El guia nos conto sobre aves, manglares y la vida del estero.",
        name: "Diego Salazar",
        role: "Viajero nacional",
        image: "/images/clients/client5.png",
        rating: 5,
        tourTitle: "Isla, pajaros y manglares",
    },
    {
        id: "fallback-5",
        text: "Tomamos solo la ida a la isla y fue una opcion practica para pasar la tarde con calma.",
        name: "Andrea Cruz",
        role: "Visitante de Tumbes",
        image: "/images/clients/client2.png",
        rating: 5,
        tourTitle: "Solo ida a la isla",
    },
    {
        id: "fallback-6",
        text: "Buena coordinacion, precio claro y una experiencia muy recomendable para conocer los manglares.",
        name: "Rafael Cueva",
        role: "Viajero de Ecuador",
        image: "/images/clients/client6.png",
        rating: 5,
        tourTitle: "Islas, manglares y cocodrilos",
    },
]
