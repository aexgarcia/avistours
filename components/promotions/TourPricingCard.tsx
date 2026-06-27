"use client"

import { useMemo, useState } from "react"
import { MessageCircle } from "lucide-react"
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink"
import { formatPrice, getTourPricing, type Tour } from "@/data/promotions"

type TourPricingCardProps = {
    tour: Tour
    number: string
}

export default function TourPricingCard({ tour, number }: TourPricingCardProps) {
    const defaultPeople = tour.maxPeople ?? 1
    const [people, setPeople] = useState(defaultPeople)

    const pricing = useMemo(() => getTourPricing(tour, people), [tour, people])

    const message = pricing.isGroupPricing
        ? `Hola AviTours, quiero consultar por el paquete ${tour.title} para ${pricing.people} persona(s). Entiendo que la tarifa total es ${formatPrice(pricing.totalPrice)}.`
        : `Hola AviTours, quiero consultar por el paquete ${tour.title} para ${pricing.people} persona(s).`

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <span className="text-sm font-semibold text-green-500">
                {pricing.isGroupPricing ? "Tarifa desde" : "Precio por persona"}
            </span>

            <div className="mt-2">
                <div className="text-4xl font-semibold text-gray-900">
                    {formatPrice(pricing.startingPrice)}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                    {pricing.isGroupPricing
                        ? `por persona en grupos de hasta ${pricing.maxPeople}`
                        : "por persona"}
                </p>
            </div>

            {pricing.isGroupPricing && (
                <div className="mt-6 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Cantidad de personas
                        </span>
                        <select
                            value={people}
                            onChange={(event) => setPeople(Number(event.target.value))}
                            className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-green-400"
                        >
                            {Array.from({ length: pricing.maxPeople }, (_, index) => index + 1).map((value) => (
                                <option key={value} value={value}>
                                    {value} {value === 1 ? "persona" : "personas"}
                                </option>
                            ))}
                        </select>
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-md border border-slate-200 bg-white px-3 py-3">
                            <span className="block text-xs text-slate-500">Total del grupo</span>
                            <strong className="mt-1 block text-base text-slate-900">
                                {formatPrice(pricing.totalPrice)}
                            </strong>
                        </div>
                        <div className="rounded-md border border-slate-200 bg-white px-3 py-3">
                            <span className="block text-xs text-slate-500">Equivale a</span>
                            <strong className="mt-1 block text-base text-slate-900">
                                {formatPrice(pricing.perPersonPrice)}
                            </strong>
                            <span className="block text-xs text-slate-500">por pers.</span>
                        </div>
                    </div>

                    <p className="text-xs leading-5 text-slate-500">
                        La tarifa base del recorrido se mantiene en {formatPrice(pricing.totalPrice)}. El valor por persona se calcula segun la cantidad seleccionada.
                    </p>
                </div>
            )}

            <WhatsAppLink
                number={number}
                message={message}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
                <MessageCircle size={18} aria-hidden="true" />
                Consultar por WhatsApp
            </WhatsAppLink>
        </div>
    )
}
