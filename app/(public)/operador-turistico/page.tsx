import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { BadgeCheck, Clock3, MapPin, MessageCircleMore, ShieldCheck } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { companyProfile, getCompanySameAs } from "@/data/company"
import { absoluteUrl, siteConfig } from "@/data/site"

const operatorHeroImage = "/images-optimized/galeria/completo_galeria1.webp"

const credibilityItems = [
    {
        title: "Atencion directa",
        description: "Respondemos consultas por WhatsApp y coordinamos la mejor ventana de salida antes de reservar.",
        icon: MessageCircleMore,
    },
    {
        title: "Operacion local",
        description: "Trabajamos cerca del muelle turistico de Puerto Pizarro y orientamos el paseo segun marea y clima.",
        icon: MapPin,
    },
    {
        title: "Informacion clara",
        description: "Mostramos rutas, recomendaciones, precios base y contenido util para que el visitante llegue mejor informado.",
        icon: ShieldCheck,
    },
]

export const metadata: Metadata = {
    title: `Operador turistico en Puerto Pizarro | ${siteConfig.name}`,
    description: `Conoce a ${siteConfig.name}, operador turistico en Puerto Pizarro con atencion local, coordinacion por marea y reserva directa para tours en manglares de Tumbes.`,
    alternates: {
        canonical: "/operador-turistico",
    },
    openGraph: {
        title: `Operador turistico en Puerto Pizarro | ${siteConfig.name}`,
        description: `Informacion institucional de ${siteConfig.name}: contacto, zona de servicio, horarios y experiencia local en Puerto Pizarro.`,
        url: "/operador-turistico",
        images: [
            {
                url: absoluteUrl(operatorHeroImage),
                width: 1200,
                height: 630,
                alt: "Operador turistico en Puerto Pizarro",
            },
        ],
    },
}

export default function OperatorPage() {
    const sameAs = getCompanySameAs()

    return (
        <div className="bg-white">
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        name: companyProfile.tradeName,
                        legalName: companyProfile.legalName,
                        url: siteConfig.url,
                        image: absoluteUrl(operatorHeroImage),
                        telephone: companyProfile.phone,
                        email: companyProfile.email,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: companyProfile.streetAddress,
                            addressLocality: companyProfile.locality,
                            addressRegion: companyProfile.region,
                            addressCountry: companyProfile.country,
                        },
                        openingHours: "Mo-Su 08:00-17:00",
                        areaServed: companyProfile.serviceArea,
                        sameAs,
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Inicio",
                                item: absoluteUrl("/"),
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Operador turistico",
                                item: absoluteUrl("/operador-turistico"),
                            },
                        ],
                    },
                ]}
            />

            <section className="relative overflow-hidden bg-slate-900 pt-32 text-white md:pt-40">
                <Image
                    src={operatorHeroImage}
                    alt="Lancha y recorrido turistico en Puerto Pizarro"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300 backdrop-blur">
                        <BadgeCheck size={14} />
                        Operador turistico
                    </span>
                    <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                        Avis Tours, operador turistico en Puerto Pizarro
                    </h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
                        Esta pagina centraliza la informacion institucional de {siteConfig.name} para viajeros que buscan reservar tours en Puerto Pizarro con datos claros de contacto, ubicacion, horarios y cobertura local.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                            Quienes somos
                        </span>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                            Informacion oficial para viajeros y buscadores
                        </h2>
                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                            <p>
                                {siteConfig.name} trabaja con enfoque local en Puerto Pizarro, Tumbes. Nuestra web busca ayudar a quienes comparan tours, revisan rutas por manglares y quieren saber con quien estan coordinando antes de reservar.
                            </p>
                            <p>
                                Priorizamos una comunicacion directa para resolver dudas sobre marea, disponibilidad, tipo de paseo, punto de encuentro y recomendaciones antes del viaje. Esto mejora la experiencia del visitante y tambien transmite una entidad de negocio mas clara para Google.
                            </p>
                            <p>
                                Si estas buscando tours en Puerto Pizarro, manglares de Tumbes, Isla de los Pajaros o rutas con cocodrilos, aqui puedes validar nuestros datos base y luego pasar a las paginas de tours o al formulario de contacto.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {credibilityItems.map((item) => {
                                const Icon = item.icon

                                return (
                                    <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-green-500 text-white">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            {item.description}
                                        </p>
                                    </article>
                                )
                            })}
                        </div>
                    </div>

                    <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
                        <h2 className="text-lg font-semibold text-slate-900">
                            Datos de referencia
                        </h2>
                        <div className="mt-5 space-y-4 text-sm text-slate-600">
                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                                    Razon social
                                </span>
                                <p className="mt-1">{companyProfile.legalName}</p>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                                    RUC
                                </span>
                                <p className="mt-1">{companyProfile.ruc}</p>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                                    Punto de encuentro
                                </span>
                                <p className="mt-1">{companyProfile.address}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock3 size={18} className="mt-1 shrink-0 text-green-500" />
                                <p>{companyProfile.schedule}</p>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 text-sm font-medium">
                            <Link href="/contact" className="rounded-md bg-green-500 px-4 py-3 text-center text-white transition hover:bg-green-600">
                                Ir a contacto
                            </Link>
                            <Link href="/packages" className="rounded-md border border-slate-200 px-4 py-3 text-center text-slate-700 transition hover:border-green-500 hover:text-green-600">
                                Ver tours
                            </Link>
                            <Link href="/blog" className="rounded-md border border-slate-200 px-4 py-3 text-center text-slate-700 transition hover:border-green-500 hover:text-green-600">
                                Leer guia local
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    )
}
