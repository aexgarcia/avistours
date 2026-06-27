export const companyProfile = {
    brandName: "Avis Tours",
    legalName: "Avis Tours Operador Turistico E.I.R.L.",
    tradeName: "Avis Tours",
    ruc: "20605149082",
    phone: "+51 959 828 235",
    whatsapp: "51959828235",
    email: "avistourssac@gmail.com",
    address: "Muelle turistico de Puerto Pizarro, Tumbes, Peru",
    streetAddress: "Muelle turistico de Puerto Pizarro",
    locality: "Puerto Pizarro",
    region: "Tumbes",
    country: "PE",
    schedule: "Lunes a domingo, 8:00 a.m. - 5:00 p.m.",
    serviceArea: ["Puerto Pizarro", "Tumbes", "Manglares de Tumbes"],
    social: {
        facebook: "",
        instagram: "",
    },
    trustHighlights: [
        "Atencion directa por WhatsApp antes de reservar.",
        "Coordinacion de salidas segun marea y clima.",
        "Punto de encuentro cerca del muelle turistico de Puerto Pizarro.",
    ],
} as const

export function getCompanySameAs() {
    return Object.values(companyProfile.social).filter(Boolean)
}
