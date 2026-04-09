import { MessageCircle } from "lucide-react"
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink"

const whatsappNumber = "51951654443"
const whatsappMessage = "Hola Avistours, quiero informacion sobre los paseos en Puerto Pizarro."

export default function FloatingWhatsApp() {
    return (
        <WhatsAppLink
            number={whatsappNumber}
            message={whatsappMessage}
            aria-label="Consultar por WhatsApp"
            className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] flex items-center justify-center hover:bg-green-600 transition md:h-14 md:w-14"
        >
            <MessageCircle size={24} />
        </WhatsAppLink>
    )
}
