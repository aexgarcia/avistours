import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, BookOpen, CalendarDays, MapPin, Search, ShipWheel } from "lucide-react"
import TourCard from "@/components/home/TourCard"
import SiteSearch from "@/components/search/SiteSearch"
import { blogPosts } from "@/data/blogs"
import { tours } from "@/data/promotions"
import { absoluteUrl } from "@/data/site"
import { applyTourRating, getTourRatingSummaries } from "@/services/testimonials"

type PackagesPageProps = {
    searchParams: Promise<{ q?: string | string[] }>
}

export const metadata: Metadata = {
    title: "Tours en Puerto Pizarro | AviTours",
    description: "Busca paquetes, promociones y guias de AviTours para paseos en Puerto Pizarro, Tumbes.",
    alternates: {
        canonical: "/packages",
    },
    openGraph: {
        title: "Tours en Puerto Pizarro y manglares de Tumbes | AviTours",
        description: "Paquetes por islas, manglares, Isla de los Pajaros, cocodrilos y boca del mar en Puerto Pizarro.",
        url: "/packages",
        images: [
            {
                url: absoluteUrl("/images/promotions/promotions1.jpg"),
                width: 1200,
                height: 630,
                alt: "Paquetes turisticos por Puerto Pizarro y manglares de Tumbes",
            },
        ],
    },
}

function normalize(value: string) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

function includesTerm(values: string[], query: string) {
    if (!query) {
        return true
    }

    const term = normalize(query)
    return normalize(values.join(" ")).includes(term)
}

export default async function PackagesPage({ searchParams }: PackagesPageProps) {
    const { q } = await searchParams
    const query = (Array.isArray(q) ? q[0] : q ?? "").trim()
    const ratingSummaries = await getTourRatingSummaries()
    const toursWithRatings = tours.map((tour) => applyTourRating(tour, ratingSummaries))

    const filteredTours = toursWithRatings.filter((tour) =>
        includesTerm(
            [
                tour.title,
                tour.location,
                tour.description,
                tour.duration,
                ...tour.features,
                ...tour.activities,
                ...tour.includes,
                ...tour.recommendations,
            ],
            query,
        ),
    )

    const filteredPosts = blogPosts.filter((post) =>
        includesTerm(
            [
                post.title,
                post.excerpt,
                post.category,
                post.location,
                ...post.highlights,
            ],
            query,
        ),
    )

    const hasQuery = query.length > 0
    const totalResults = filteredTours.length + filteredPosts.length

    return (
        <div className="bg-white">
            <section className="relative overflow-hidden bg-slate-950 pt-32 text-white md:pt-40">
                <Image
                    src="/images/hero/hero1.jpg"
                    alt="Manglares de Puerto Pizarro"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950" />

                <div className="relative mx-auto max-w-6xl px-4 pb-16 md:pb-20">
                    <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300 backdrop-blur">
                        <ShipWheel size={14} />
                        Tours AviTours
                    </span>
                    <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                        Paquetes y guias para navegar Puerto Pizarro
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                        Encuentra rutas por islas, manglares, aves, cocodrilos y articulos utiles para elegir mejor tu salida segun la marea.
                    </p>

                    <SiteSearch
                        initialQuery={query}
                        className="mt-8 max-w-4xl text-slate-900"
                        placeholder="Busca por manglares, cocodrilos, marea o Isla de los Pajaros"
                    />
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                                {hasQuery ? "Resultados de busqueda" : "Paquetes disponibles"}
                            </span>
                            <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                                {hasQuery ? `Resultados para "${query}"` : "Elige tu paseo por Puerto Pizarro"}
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                                {hasQuery
                                    ? `${totalResults} resultado(s) entre paquetes y entradas del blog.`
                                    : "Opciones pensadas para distintos tiempos de viaje, desde traslados cortos hasta el recorrido completo."}
                            </p>
                        </div>

                        {hasQuery && (
                            <Link
                                href="/packages"
                                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-green-600"
                            >
                                Limpiar busqueda
                                <Search size={16} />
                            </Link>
                        )}
                    </div>

                    {filteredTours.length > 0 ? (
                        <div className="grid gap-5 lg:grid-cols-2">
                            {filteredTours.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
                            <h3 className="text-lg font-semibold text-slate-900">
                                No encontramos paquetes con esa busqueda
                            </h3>
                            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
                                Prueba con: islas, manglares, pajaros, cocodrilos o marea.
                            </p>
                        </div>
                    )}

                    <div className="mt-16">
                        <div className="mb-7 flex items-end justify-between gap-4">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-500">
                                    Guia local
                                </span>
                                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                                    Entradas de blog relacionadas
                                </h2>
                            </div>
                            <Link
                                href="/blog"
                                className="hidden items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-green-600 sm:inline-flex"
                            >
                                Ver blog
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        {filteredPosts.length > 0 ? (
                            <div className="grid gap-5 md:grid-cols-3">
                                {filteredPosts.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                                    >
                                        <Link href={`/blog/${post.slug}`} className="relative block h-56 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(min-width: 768px) 33vw, 100vw"
                                                className="object-cover transition duration-700 group-hover:scale-105"
                                            />
                                            <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded bg-white/90 px-3 py-1 text-xs font-semibold text-green-600">
                                                <BookOpen size={13} />
                                                {post.category}
                                            </span>
                                        </Link>
                                        <div className="p-5">
                                            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                                                <span className="inline-flex items-center gap-1">
                                                    <CalendarDays size={14} className="text-green-500" />
                                                    {post.date}
                                                </span>
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin size={14} className="text-green-500" />
                                                    {post.location}
                                                </span>
                                            </div>
                                            <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                                                <Link href={`/blog/${post.slug}`} className="transition hover:text-green-600">
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
                                No hay entradas del blog relacionadas con esta busqueda.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
