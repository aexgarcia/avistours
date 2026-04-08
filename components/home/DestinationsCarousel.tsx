"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import Image from "next/image"

const data = [
    { id: 1, title: "Manglares de Tumbes", image: "/images/promotions/promotions1.jpg" },
    { id: 2, title: "Isla de los Pajaros", image: "/images/promotions/promotions2.jpg" },
    { id: 3, title: "Zoocriadero de cocodrilos", image: "/images/promotions/promotions3.jpg" },
    { id: 4, title: "Boca del mar", image: "/images/promotions/promotions4.jpg" },
]

/*
const oldData = [
    { id: 1, title: "Cancún", image: "/images/d1.jpg" },
    { id: 2, title: "Isla de los Pajaros", image: "/images/promotions/promotions2.jpg" },
    { id: 3, title: "Máncora", image: "/images/d3.jpg" },
    { id: 4, title: "Puerto Pizarro", image: "/images/d4.jpg" },
]
*/

export default function DestinationsCarousel() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Lugares de Puerto Pizarro
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative h-80 rounded-xl overflow-hidden group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
