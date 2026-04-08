import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"
import { blogPosts } from "@/data/blogs"
import { absoluteUrl } from "@/data/site"

export const metadata: Metadata = {
    title: "Guia de Puerto Pizarro | AviTours",
    description: "Articulos informativos de AviTours sobre mareas, manglares y paseos en Puerto Pizarro, Tumbes.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Guia de Puerto Pizarro, mareas y manglares | AviTours",
        description: "Aprende sobre mareas, manglares y rutas turisticas por Puerto Pizarro, Tumbes.",
        url: "/blog",
        images: [
            {
                url: absoluteUrl("/images/promotions/promotions1.jpg"),
                width: 1200,
                height: 630,
                alt: "Guia turistica de Puerto Pizarro y manglares de Tumbes",
            },
        ],
    },
}

export default function BlogPage() {
    const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]
    const regularPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug)

    return (
        <div className="bg-white">
            <section className="relative min-h-[430px] flex items-center pt-28 overflow-hidden">
                <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/75" />
                <div className="relative max-w-6xl mx-auto px-4 py-24 text-white">
                    <span className="inline-flex bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded">
                        Guia AviTours
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-semibold mt-5 max-w-3xl leading-tight">
                        Mareas, manglares y rutas por Tumbes
                    </h1>
                    <p className="text-white/75 mt-5 max-w-2xl leading-relaxed">
                        Informacion clara para planificar paseos por Puerto Pizarro, elegir horarios y conocer mejor el estero antes de zarpar.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <article className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center mb-14">
                        <Link href={`/blog/${featuredPost.slug}`} className="relative h-[420px] rounded-lg overflow-hidden group">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </Link>

                        <div>
                            <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                                Guia destacada
                            </span>
                            <h2 className="text-3xl font-semibold text-gray-800 mt-4 leading-tight">
                                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-green-500 transition">
                                    {featuredPost.title}
                                </Link>
                            </h2>
                            <p className="text-gray-500 leading-relaxed mt-4">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-5">
                                <span className="flex items-center gap-2">
                                    <CalendarDays size={16} className="text-green-500" />
                                    {featuredPost.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={16} className="text-green-500" />
                                    {featuredPost.readTime}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin size={16} className="text-green-500" />
                                    {featuredPost.location}
                                </span>
                            </div>
                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="inline-flex items-center gap-2 mt-8 bg-green-500 text-white px-5 py-3 rounded-md font-medium hover:bg-green-600 transition"
                            >
                                Leer articulo
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </article>

                    <div className="grid gap-6 md:grid-cols-2">
                        {regularPosts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
                                <Link href={`/blog/${post.slug}`} className="relative block h-64 overflow-hidden group">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </Link>
                                <div className="p-6">
                                    <span className="text-green-500 text-xs font-semibold uppercase tracking-[0.16em]">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-semibold text-gray-800 mt-3">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-green-500 transition">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-gray-700 hover:text-green-500 transition">
                                        Leer mas
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
