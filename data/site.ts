export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://avistours.com").replace(/\/$/, "")

export const siteConfig = {
    name: "Avistours",
    legalName: "Avistours Operador Turistico E.I.R.L.",
    description: "Paseos turisticos por Puerto Pizarro, manglares de Tumbes, Isla de los Pajaros, cocodrilos y boca del mar.",
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
