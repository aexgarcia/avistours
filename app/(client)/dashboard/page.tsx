import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Panel cliente | AvisTours",
    robots: {
        index: false,
        follow: false,
    },
}

export default function DashboardPage() {
    return (
        <section>
            <h1 className="text-2xl font-semibold text-gray-900">
                Panel de cliente
            </h1>
            <p className="mt-2 text-sm text-gray-600">
                Aqui se mostraran reservas, mensajes y seguimiento de experiencias de AvisTours.
            </p>
        </section>
    )
}
