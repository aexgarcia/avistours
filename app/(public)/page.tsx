import Link from "next/link"
import HeroCarousel from "@/components/home/Hero"
import SearchBar from '../../components/home/SearchBar';
import PromotionsSection from "@/components/home/PromotionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import TidesSection from "@/components/home/TidesSection";
import type { Metadata } from "next";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { companyProfile, getCompanySameAs } from "@/data/company";
import { brandName, homeFaqs, homeKeywords, primaryKeywords, siteWideKeywords } from "@/data/seo";
import { absoluteUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: `${primaryKeywords.home} y manglares de Tumbes | Avis Tours`,
    description: `Vive tours en Puerto Pizarro con ${brandName}: manglares de Tumbes, Isla de los Pajaros, cocodrilos, islas y boca del mar con guia local y reserva por WhatsApp.`,
    keywords: [...siteWideKeywords, ...homeKeywords],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: `Tours en Puerto Pizarro y manglares de Tumbes | ${brandName}`,
        description: "Paseos turisticos por manglares, islas, aves, cocodrilos y boca del mar en Puerto Pizarro, Tumbes.",
        url: "/",
        images: [
            {
                url: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"),
                width: 1200,
                height: 630,
                alt: "Manglares de Tumbes en Puerto Pizarro",
            },
        ],
    },
}

const homeTrustPillars = [
    {
        title: "Guias y coordinacion local",
        description: "Organizamos salidas en Puerto Pizarro con informacion clara antes de reservar y recomendaciones segun tu tipo de viaje.",
    },
    {
        title: "Horarios segun marea",
        description: "Ajustamos la salida para que tu paseo por manglares, islas o cocodrilos tenga una mejor ventana de navegacion.",
    },
    {
        title: "Reserva rapida por WhatsApp",
        description: "Confirmas fecha tentativa, numero de personas y tour de interes desde un canal directo con el operador.",
    },
]

export default function HomePage() {
    const sameAs = getCompanySameAs()

    return (
        <>
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        name: siteConfig.name,
                        legalName: siteConfig.legalName,
                        url: siteConfig.url,
                        image: absoluteUrl("/images-optimized/hero/bg_inicio2.webp"),
                        telephone: siteConfig.phone,
                        email: siteConfig.email,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: companyProfile.streetAddress,
                            addressLocality: companyProfile.locality,
                            addressRegion: companyProfile.region,
                            addressCountry: companyProfile.country,
                        },
                        areaServed: companyProfile.serviceArea,
                        sameAs,
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: siteConfig.name,
                        url: siteConfig.url,
                        potentialAction: {
                            "@type": "SearchAction",
                            target: `${siteConfig.url}/packages?q={search_term_string}`,
                            "query-input": "required name=search_term_string",
                        },
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: homeFaqs.map((item) => ({
                            "@type": "Question",
                            name: item.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: item.answer,
                            },
                        })),
                    },
                ]}
            />
            <HeroCarousel />
            <SearchBar />
            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                            Tours en Puerto Pizarro
                        </span>
                        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                            Manglares de Tumbes, islas, aves y cocodrilos con atencion local
                        </h2>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                            Vive los mejores tours en Puerto Pizarro con {brandName}. Recorre los manglares de Tumbes, visita la Isla de los Pajaros, el zoocriadero de cocodrilos y disfruta experiencias coordinadas con guia local y salida recomendada segun marea.
                        </p>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                            Esta web esta pensada para ayudarte a comparar rutas, revisar precios base, entender que incluye cada paseo y resolver dudas antes de reservar. Si buscas que hacer en Puerto Pizarro o cual tour elegir en Tumbes, aqui encuentras una base clara para decidir mejor.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                            <Link href="/packages" className="rounded-md bg-green-500 px-5 py-3 text-white transition hover:bg-green-600">
                                Ver tours disponibles
                            </Link>
                            <Link href="/operador-turistico" className="rounded-md border border-slate-200 px-5 py-3 text-slate-700 transition hover:border-green-500 hover:text-green-600">
                                Conoce al operador
                            </Link>
                            <Link href="/blog" className="rounded-md border border-slate-200 px-5 py-3 text-slate-700 transition hover:border-green-500 hover:text-green-600">
                                Leer guia local
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {homeTrustPillars.map((pillar) => (
                            <article key={pillar.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {pillar.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {pillar.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <TidesSection />
            <PromotionsSection />
            <TestimonialsSection />
            <BlogSection />
            <FaqSection
                eyebrow="Preguntas frecuentes"
                title="Lo que mas consultan antes de reservar"
                description="Resolvemos dudas comunes sobre marea, horarios, tipos de paseo y reserva para que tu visita a Puerto Pizarro llegue mejor encaminada."
                items={homeFaqs}
            />
        </>
    )
}
