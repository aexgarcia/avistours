import HeroCarousel from "@/components/home/Hero"
import SearchBar from '../../components/home/SearchBar';
import PromotionsSection from "@/components/home/PromotionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import TidesSection from "@/components/home/TidesSection";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { brandName, siteWideKeywords } from "@/data/seo";
import { absoluteUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: "Tours en Puerto Pizarro, manglares de Tumbes e Isla de los Pajaros",
    description: `Reserva paseos en bote por Puerto Pizarro con ${brandName}: manglares de Tumbes, Isla de los Pajaros, cocodrilos, islas y boca del mar.`,
    keywords: siteWideKeywords,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: `Tours en Puerto Pizarro y manglares de Tumbes | ${brandName}`,
        description: "Paseos turisticos por manglares, islas, aves, cocodrilos y boca del mar en Puerto Pizarro, Tumbes.",
        url: "/",
        images: [
            {
                url: absoluteUrl("/images/hero/hero1.jpg"),
                width: 1200,
                height: 630,
                alt: "Manglares de Tumbes en Puerto Pizarro",
            },
        ],
    },
}

export default function HomePage() {
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
                        image: absoluteUrl("/images/hero/hero1.jpg"),
                        telephone: siteConfig.phone,
                        email: siteConfig.email,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Muelle turistico de Puerto Pizarro",
                            addressLocality: "Puerto Pizarro",
                            addressRegion: "Tumbes",
                            addressCountry: "PE",
                        },
                        areaServed: ["Puerto Pizarro", "Tumbes", "Manglares de Tumbes"],
                        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
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
                ]}
            />
            <HeroCarousel />
            <SearchBar />
            <TidesSection />
            <PromotionsSection />
            <TestimonialsSection />
            <BlogSection />
        </>
    )
}
