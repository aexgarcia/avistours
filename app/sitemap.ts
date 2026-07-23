import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blogs"
import { tours } from "@/data/promotions"
import { absoluteUrl } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: absoluteUrl("/"),
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: absoluteUrl("/packages"),
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: absoluteUrl("/blog"),
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: absoluteUrl("/contact"),
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ]

    const tourRoutes: MetadataRoute.Sitemap = tours.map((tour) => ({
        url: absoluteUrl(`/promociones/${tour.slug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
        images: [absoluteUrl(tour.image), ...tour.gallery.map(absoluteUrl)],
    }))

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: absoluteUrl(`/blog/${post.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: post.featured ? 0.85 : 0.75,
        images: [absoluteUrl(post.image)],
    }))

    return [...staticRoutes, ...tourRoutes, ...blogRoutes]
}
