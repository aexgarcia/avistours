import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import AvisToursAssistant from "@/components/assistant/AvisToursAssistant"

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div id="top">
            <TopBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <AvisToursAssistant />
            <FloatingWhatsApp />
        </div>
    )
}
