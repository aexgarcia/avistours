import type { MetadataRoute } from "next"
import { absoluteUrl, siteConfig } from "@/data/site"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/feedback", "/admin", "/dashboard"],
            },
        ],
        sitemap: absoluteUrl("/sitemap.xml"),
        host: siteConfig.url,
    }
}
