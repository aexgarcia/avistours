export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://avistours.com").replace(/\/$/, "")

export const siteConfig = {
    name: "Avis Tours",
    legalName: "Avis Tours Operador Turistico E.I.R.L.",
    description: "Tours en Puerto Pizarro con guia local: manglares de Tumbes, Isla de los Pajaros, cocodrilos, islas y boca del mar con reserva por WhatsApp.",
    url: siteUrl,
    phone: "+51 951 654 443",
    email: "avistourssac@gmail.com",
    address: "Muelle turistico de Puerto Pizarro, Tumbes, Peru",
    social: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
}

export function absoluteUrl(path: string) {
    if (path.startsWith("http")) {
        return path
    }

    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}
