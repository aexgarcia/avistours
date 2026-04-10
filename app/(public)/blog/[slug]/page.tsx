import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, MapPin, Quote, UserRound } from "lucide-react"
import AdSlot from "@/components/ads/AdSlot"
import JsonLd from "@/components/seo/JsonLd"
import { blogPosts, getBlogPost, type BlogContentBlock } from "@/data/blogs"
import { brandName, getBlogSearchTerms } from "@/data/seo"
import { absoluteUrl, siteConfig } from "@/data/site"

type BlogDetailPageProps = {
    params: Promise<{ slug: string }>
}

function renderContentBlock(block: BlogContentBlock, index: number) {
    if (block.type === "heading") {
        return (
            <h2 key={`${block.type}-${index}`} className="text-xl md:text-2xl font-semibold text-gray-900 mt-10 mb-4 leading-tight">
                {block.text}
            </h2>
        )
    }

    if (block.type === "paragraph") {
        return (
            <p key={`${block.type}-${index}`} className="text-[15px] md:text-base leading-7 md:leading-8 text-gray-600 mb-5">
                {block.text}
            </p>
        )
    }

    if (block.type === "image") {
        return (
            <figure key={`${block.type}-${index}`} className="my-8">
                <div className="relative h-[260px] md:h-[360px] overflow-hidden rounded-lg">
                    <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        sizes="(min-width: 1024px) 760px, 100vw"
                        className="object-cover"
                    />
                </div>
                {block.caption && (
                    <figcaption className="mt-3 text-sm text-gray-500 border-l-2 border-green-500 pl-3">
                        {block.caption}
                    </figcaption>
                )}
            </figure>
        )
    }

    if (block.type === "quote") {
        return (
            <blockquote key={`${block.type}-${index}`} className="my-8 rounded-lg bg-slate-50 border border-slate-200 p-5 md:p-6">
                <Quote size={24} className="text-green-500 mb-3" />
                <p className="text-lg md:text-xl leading-8 text-gray-800 font-medium">
                    {block.text}
                </p>
                {block.author && (
                    <cite className="block not-italic text-sm text-gray-500 mt-4">
                        {block.author}
                    </cite>
                )}
            </blockquote>
        )
    }

    return (
        <ul key={`${block.type}-${index}`} className="my-7 space-y-3">
            {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] md:text-base leading-7 text-gray-600">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        return {
            title: `Articulo no encontrado | ${brandName}`,
        }
    }

    return {
        title: `${post.title} | Guia de Puerto Pizarro | ${brandName}`,
        description: `${post.excerpt} Consejos utiles para planificar tu visita a los manglares de Puerto Pizarro y Tumbes.`,
        keywords: getBlogSearchTerms(post),
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            title: `${post.title} | Guia de Puerto Pizarro | ${brandName}`,
            description: `${post.excerpt} Guia local para viajar mejor por Puerto Pizarro.`,
            url: `/blog/${post.slug}`,
            images: [
                {
                    url: absoluteUrl(post.image),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${post.title} | Guia de Puerto Pizarro | ${brandName}`,
            description: `${post.excerpt} Guia local para visitar manglares y rutas en Tumbes.`,
            images: [absoluteUrl(post.image)],
        },
    }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2)
    const metaItems = [
        { label: post.author, icon: UserRound },
        { label: post.date, icon: CalendarDays },
        { label: post.readTime, icon: Clock },
        { label: post.location, icon: MapPin },
    ]

    return (
        <article className="bg-white">
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: post.title,
                        description: post.excerpt,
                        image: absoluteUrl(post.image),
                        author: {
                            "@type": "Organization",
                            name: siteConfig.name,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: siteConfig.name,
                            url: siteConfig.url,
                        },
                        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
                        about: ["Puerto Pizarro", "Manglares de Tumbes", post.category],
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
                                name: "Blog",
                                item: absoluteUrl("/blog"),
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: post.title,
                                item: absoluteUrl(`/blog/${post.slug}`),
                            },
                        ],
                    },
                ]}
            />
            <section className="relative min-h-[520px] flex items-end pt-28 overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

                <div className="relative max-w-5xl mx-auto px-4 pb-20 text-white">
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                        <Link href="/blog" className="inline-flex h-8 items-center gap-2 text-sm text-white/75 hover:text-white transition">
                            <ArrowLeft size={16} />
                            Volver al blog
                        </Link>
                        <span className="inline-flex h-8 items-center bg-green-500 text-white text-xs font-semibold px-3 rounded">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 leading-tight max-w-4xl">
                        {post.title}
                    </h1>
                    <p className="text-base text-white/75 mt-5 max-w-3xl leading-7">
                        {post.excerpt}
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-[minmax(0,1fr)_330px] gap-10 items-start">
                        <div className="bg-white rounded-lg shadow-[0_24px_70px_rgba(15,23,42,0.10)] border border-slate-100 p-6 md:p-9 lg:p-10 -mt-12 relative z-10">
                            <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-6 mb-8">
                                {metaItems.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <span
                                            key={item.label}
                                            className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-gray-600"
                                        >
                                            <Icon size={15} className="text-green-500" />
                                            {item.label}
                                        </span>
                                    )
                                })}
                            </div>

                            <div className="max-w-[720px]">
                                <div className="mb-8 rounded-lg border border-green-100 bg-green-50/60 px-5 py-4">
                                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-green-600">
                                        Resumen
                                    </span>
                                    <p className="mt-2 text-[15px] md:text-base leading-7 text-gray-700">
                                        {post.excerpt}
                                    </p>
                                </div>
                                {post.body.map(renderContentBlock)}
                            </div>
                        </div>

                        <aside className="space-y-6 lg:sticky lg:top-24">
                            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Lo esencial del recorrido
                                </h2>
                                <div className="mt-5 space-y-4">
                                    {post.highlights.map((highlight) => (
                                        <div key={highlight} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-green-500 shrink-0" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-lg border border-slate-200 bg-white p-6">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Tambien puedes leer
                                </h2>
                                <div className="mt-5 space-y-5">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="group grid grid-cols-[82px_1fr] gap-4"
                                        >
                                            <span className="relative h-20 overflow-hidden rounded-lg">
                                                <Image
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    fill
                                                    sizes="82px"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </span>
                                            <span>
                                                <span className="text-xs text-green-500 font-semibold">
                                                    {relatedPost.category}
                                                </span>
                                                <span className="block text-sm font-semibold text-gray-800 leading-snug mt-1 group-hover:text-green-500 transition">
                                                    {relatedPost.title}
                                                </span>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <AdSlot label="Anuncio lateral para articulos de Puerto Pizarro" slot="blog-sidebar" />
                        </aside>
                    </div>
                </div>
            </section>
        </article>
    )
}
