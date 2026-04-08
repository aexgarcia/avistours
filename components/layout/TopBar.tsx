"use client"

import { Clock, MapPin, Mail, Facebook, Instagram, Twitter, Phone } from "lucide-react"

export default function TopBar() {
    return (
        <div className="hidden md:block w-full bg-[#0b132b] text-white/70 text-[13px]">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* LEFT */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-green-500" />
                        <span>Todos los dias: 8am a 5pm</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-500" />
                        <span>Puerto Pizarro, Tumbes</span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6">

                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-green-500" />
                        <span>reservas@puertopizarro.pe</span>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        <Facebook size={16} className="cursor-pointer hover:text-white transition" />
                        <Instagram size={16} className="cursor-pointer hover:text-white transition" />
                        <Twitter size={16} className="cursor-pointer hover:text-white transition" />
                        <Phone size={16} className="cursor-pointer hover:text-white transition" />
                    </div>

                </div>

            </div>
        </div>
    )
}
