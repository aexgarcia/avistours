import Link from "next/link"
import {
    ChevronRight,
    ChevronUp,
    Facebook,
    Heart,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Send,
    ShoppingCart,
} from "lucide-react"
import NewsletterForm from "@/components/newsletter/NewsletterForm"

const companyLinks = [
    { label: "AviTours", href: "#" },
    { label: "Tours", href: "#" },
    { label: "Mareas", href: "#" },
    { label: "Manglares", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "#" },
]

const socialLinks = [
    { label: "Shop", icon: ShoppingCart },
    { label: "Facebook", icon: Facebook },
    { label: "Instagram", icon: Instagram },
    { label: "Email", icon: Mail },
]

export default function Footer() {
    return (
        <footer className="relative bg-[#10182b] text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 lg:py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_0.8fr_1.05fr]">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold">
                            <Send size={18} className="text-green-500" />
                            AviTours
                        </Link>
                        <p className="text-sm text-white/75 leading-6 mt-5 max-w-xs">
                            Informacion y paseos turisticos por Puerto Pizarro: manglares, islas, aves y cocodrilos en Tumbes.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            {socialLinks.map((item) => {
                                const Icon = item.icon

                                return (
                                    <Link
                                        key={item.label}
                                        href="#"
                                        aria-label={item.label}
                                        className="h-8 w-8 rounded-md border border-white/10 text-white/65 flex items-center justify-center hover:text-white hover:border-green-500 hover:bg-green-500 transition"
                                    >
                                        <Icon size={14} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold tracking-wide">
                            Oficina
                        </h2>
                        <div className="mt-5 space-y-4 text-sm text-white/75">
                            <p className="font-medium text-white">
                                AviTours Puerto Pizarro
                            </p>
                            <div className="flex gap-3 leading-6">
                                <MapPin size={16} className="text-green-500 mt-1 shrink-0" />
                                <span>Muelle turistico de Puerto Pizarro<br />Tumbes, Peru</span>
                            </div>
                            <Link href="mailto:contact@example.com" className="flex items-center gap-3 hover:text-white transition">
                                <Mail size={16} className="text-green-500" />
                                reservas@puertopizarro.pe
                            </Link>
                            <Link href="tel:+152534468854" className="flex items-center gap-3 hover:text-white transition">
                                <Phone size={16} className="text-green-500" />
                                +51 999 000 000
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold tracking-wide">
                            Informacion
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm text-white/75">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="inline-flex items-center gap-2 hover:text-white transition">
                                        <ChevronRight size={14} />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-semibold tracking-wide">
                            Novedades
                        </h2>
                        <p className="text-sm text-white/75 leading-6 mt-5">
                            Recibe tips sobre mareas, horarios y paseos con AviTours.
                        </p>
                        <NewsletterForm />
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-4 py-5 text-center text-sm text-white/80">
                    (c) 2026 AviTours. Hecho con{" "}
                    <Heart size={13} fill="currentColor" className="inline text-green-500 mx-1" />
                    para viajeros del norte peruano.
                </div>
            </div>

            <Link
                href="#top"
                aria-label="Volver arriba"
                className="absolute right-5 bottom-5 h-8 w-8 rounded-md bg-green-500/20 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
                <ChevronUp size={16} />
            </Link>
        </footer>
    )
}
