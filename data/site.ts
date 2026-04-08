export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://avitours.pe").replace(/\/$/, "")

export const siteConfig = {
    name: "AviTours",
    legalName: "AviTours Operador Turistico E.I.R.L.",
    description: "Paseos turisticos por Puerto Pizarro, manglares de Tumbes, Isla de los Pajaros, cocodrilos y boca del mar.",
    url: siteUrl,
    phone: "+51 999 000 000",
    email: "reservas@avitours.pe",
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
