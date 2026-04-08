import { Poppins } from "next/font/google"
import type { Metadata } from "next"
import GoogleScripts, { GoogleTagManagerNoScript } from "@/components/analytics/GoogleScripts"
import { absoluteUrl, siteConfig } from "@/data/site"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AvisTours | Tours en Puerto Pizarro y manglares de Tumbes",
    template: "%s | AvisTours",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "AvisTours",
    "Puerto Pizarro",
    "manglares de Tumbes",
    "tours en Tumbes",
    "Isla de los Pajaros",
    "zoocriadero de cocodrilos",
    "paseos en bote Puerto Pizarro",
    "boca del mar Tumbes",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: siteConfig.name,
    title: "AvisTours | Tours en Puerto Pizarro y manglares de Tumbes",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: absoluteUrl("/images/hero/hero1.jpg"),
        width: 1200,
        height: 630,
        alt: "Paseo turistico por manglares de Puerto Pizarro en Tumbes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AvisTours | Tours en Puerto Pizarro y manglares de Tumbes",
    description: siteConfig.description,
    images: [absoluteUrl("/images/hero/hero1.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="light">
      <body className={poppins.className}>
        <GoogleScripts />
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  )
}
