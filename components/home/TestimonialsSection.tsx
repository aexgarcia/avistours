import TestimonialsCarousel from "@/components/home/TestimonialsCarousel"
import { getApprovedTestimonials } from "@/services/testimonials"

export default async function TestimonialsSection() {
    const testimonials = await getApprovedTestimonials()

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-green-500 font-semibold text-sm uppercase tracking-[0.18em]">
                    Experiencias
                </span>

                {/* TITLE */}
                <h2 className="text-3xl font-semibold text-gray-800">
                    Viajeros que ya navegaron Puerto Pizarro
                </h2>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Opiniones de visitantes que recorrieron islas, manglares y la boca del mar en Tumbes.
                </p>

                <TestimonialsCarousel testimonials={testimonials} />

            </div>
        </section>
    )
}
