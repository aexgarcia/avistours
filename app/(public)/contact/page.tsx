import Image from "next/image"
import type { Metadata } from "next"
import { Anchor, Clock, FileText, Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import ContactWhatsAppForm from "@/components/contact/ContactWhatsAppForm"
import PackageGallery from "@/components/gallery/PackageGallery"
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink"
import { absoluteUrl } from "@/data/site"

const company = {
    name: "Avistours Operador Turistico E.I.R.L.",
    tradeName: "Avistours",
    ruc: "20612345678",
    address: "Muelle turistico de Puerto Pizarro, Tumbes, Peru",
    phone: "+51 999 000 000",
    whatsapp: "51999000000",
    email: "reservas@avistours.pe",
    schedule: "Lunes a domingo, 8:00 a.m. - 6:00 p.m.",
}

const contactGallery = [
    "/images/promotions/promotions1.jpg",
    "/images/hero/hero1.jpg",
    "/images/promotions/promotions2.jpg",
    "/images/hero/hero2.jpg",
    "/images/promotions/promotions3.jpg",
    "/images/hero/hero3.jpg",
    "/images/promotions/promotions4.jpg",
]

const contactCards = [
    {
        label: "Punto de encuentro",
        value: company.address,
        icon: MapPin,
    },
    {
        label: "WhatsApp",
        value: company.phone,
        icon: Phone,
    },
    {
        label: "Correo",
        value: company.email,
        icon: Mail,
    },
    {
        label: "Horario",
        value: company.schedule,
        icon: Clock,
    },
]

export const metadata: Metadata = {
    title: "Contacto | Avistours",
    description: "Contacta a Avistours para reservar paseos por Puerto Pizarro, Tumbes: manglares, islas, aves y cocodrilos.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contacto Avistours | Tours en Puerto Pizarro",
        description: "Consulta disponibilidad para paseos por manglares, islas, aves y cocodrilos en Puerto Pizarro, Tumbes.",
        url: "/contact",
        images: [
            {
                url: absoluteUrl("/images/hero/hero2.jpg"),
                width: 1200,
                height: 630,
                alt: "Contacto para paseos en Puerto Pizarro",
            },
        ],
    },
}

export default function ContactPage() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <Image
                    src="/images/hero/hero2.jpg"
                    alt="Paseo en Puerto Pizarro con Avistours"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950" />

                <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 md:pb-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300 backdrop-blur">
                            <Anchor size={14} />
                            Contacto Avistours
                        </span>
                        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                            Planifica tu paseo por Puerto Pizarro con guia local
                        </h1>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                            Coordinamos salidas por islas, manglares, Isla de los Pajaros, zoocriadero de cocodrilos y boca del mar, ajustando la experiencia segun marea y clima.
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur">
                        <p className="text-sm font-semibold text-green-300">
                            Empresa
                        </p>
                        <h2 className="mt-2 text-xl font-semibold">
                            {company.name}
                        </h2>
                        <div className="mt-4 grid gap-3 text-sm text-white/75">
                            <span className="inline-flex items-start gap-2">
                                <FileText size={17} className="mt-0.5 shrink-0 text-green-300" />
                                RUC referencial: {company.ruc}
                            </span>
                            <span className="inline-flex items-start gap-2">
                                <ShieldCheck size={17} className="mt-0.5 shrink-0 text-green-300" />
                                Operacion turistica local en Puerto Pizarro
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                                Informacion de contacto
                            </span>
                            <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                                Estamos cerca del muelle turistico
                            </h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                                Puedes escribirnos para consultar horarios, disponibilidad, recomendaciones por marea o armar una salida para grupos familiares, parejas y visitantes que llegan por primera vez a Tumbes.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {contactCards.map((card) => {
                                    const Icon = card.icon

                                    return (
                                        <div key={card.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-green-500 text-white">
                                                <Icon size={21} />
                                            </div>
                                            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                                                {card.label}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-700">
                                                {card.value}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-8 rounded-lg border border-green-100 bg-green-50 p-5">
                                <h3 className="text-lg font-semibold text-slate-900">
                                    Antes de reservar
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Los horarios pueden ajustarse por marea, clima y disponibilidad de embarcaciones. Confirmaremos la mejor ventana de salida antes de separar el paseo.
                                </p>
                                <WhatsAppLink
                                    number={company.whatsapp}
                                    message="Hola Avistours, quiero consultar disponibilidad para un paseo en Puerto Pizarro."
                                    className="mt-4 inline-flex rounded-md bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                                >
                                    Consultar disponibilidad
                                </WhatsAppLink>
                            </div>
                        </div>

                        <ContactWhatsAppForm />
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                            Galeria
                        </span>
                        <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                            Puerto Pizarro en imagenes
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
                            Referencias visuales de los paisajes que forman parte de la experiencia: esteros, manglares, islas y rutas en bote.
                        </p>
                    </div>

                    <PackageGallery images={contactGallery} title="Puerto Pizarro con Avistours" />
                </div>
            </section>
        </div>
    )
}
