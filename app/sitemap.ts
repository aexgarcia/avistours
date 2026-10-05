import type { MetadataRoute } from "next"
import { blogPosts, getLocalizedBlogPost } from "@/data/blogs"
import { getBlogPublicationDate } from "@/data/blog-dates"
import { tours } from "@/data/promotions"
import { absoluteUrl } from "@/data/site"
import { appLocales, type AppLocale } from "@/i18n/locales"
import { getLocalizedPath } from "@/i18n/urls"

const contentLastModified = "2026-08-03"
type SitemapRoute = "/" | "/packages" | "/blog" | "/blog/[slug]" | "/contact" | "/promociones/[slug]"
type SitemapOptions = Omit<MetadataRoute.Sitemap[number], "url" | "alternates">
export default function sitemap(): MetadataRoute.Sitemap {
    const localizedRoute = (
        pathname: SitemapRoute,
        options: SitemapOptions | ((locale: AppLocale) => SitemapOptions),
        params?: { slug: string },
        locales: AppLocale[] = appLocales,
    ): MetadataRoute.Sitemap => {
        const languages = Object.fromEntries(
            locales.map((locale) => [
                locale,
                absoluteUrl(getLocalizedPath(locale, pathname, params)),
            ]),
        )

        return locales.map((locale: AppLocale) => ({
            url: languages[locale],
            alternates: { languages },
            ...(typeof options === "function" ? options(locale) : options),
        }))
    }

    const staticRoutes = [
        ...localizedRoute("/", { lastModified: "2026-10-05", changeFrequency: "weekly", priority: 1 }),
        ...localizedRoute("/packages", { lastModified: contentLastModified, changeFrequency: "weekly", priority: 0.9 }),
        ...localizedRoute("/blog", { lastModified: "2026-10-05", changeFrequency: "weekly", priority: 0.8 }),
        ...localizedRoute("/contact", { lastModified: contentLastModified, changeFrequency: "monthly", priority: 0.7 }),
    ]

    const tourRoutes = tours.flatMap((tour) =>
        localizedRoute("/promociones/[slug]", {
            lastModified: contentLastModified,
            changeFrequency: "weekly",
            priority: 0.85,
            images: [absoluteUrl(tour.image), ...tour.gallery.map(absoluteUrl)],
        }, { slug: tour.slug }),
    )

    const blogRoutes = blogPosts.flatMap((post) =>
        localizedRoute("/blog/[slug]", (locale) => ({
            lastModified: getLocalizedBlogPost(post, locale)?.updatedAt ?? getBlogPublicationDate(post.date),
            changeFrequency: "monthly",
            priority: post.featured ? 0.85 : 0.75,
            images: [absoluteUrl(post.image)],
        }), { slug: post.slug }, appLocales.filter((locale) => Boolean(getLocalizedBlogPost(post, locale)))),
    )

    return [...staticRoutes, ...tourRoutes, ...blogRoutes]
}
