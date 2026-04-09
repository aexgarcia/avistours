"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

import Image from "next/image"
import Link from "next/link"

const slides = [
    { id: 1, image: "/images/hero/bg_inicio.webp" },
    { id: 2, image: "/images/hero/bg_inicio2.webp" },
    { id: 3, image: "/images/hero/bg_inicio3.webp" },
    { id: 4, image: "/images/hero/bg_inicio4.webp" },
    { id: 5, image: "/images/hero/bg_inicio5.webp" },
]

export default function Hero() {
    return (
        <section className="h-[100svh] min-h-[560px] md:h-[calc(100vh-43px)] w-full">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 4000 }}
                speed={2000}
                loop
                className="h-full bg-slate-950"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="!h-full">
                        <div className="relative h-full w-full">

                            <Image
                                src={slide.image}
                                alt="Paseo en bote por los manglares de Puerto Pizarro en Tumbes"
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-slate-900/70" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pt-20 md:pt-12">
                                <Image
                                    className="mx-auto w-40 sm:w-56 md:w-72 h-auto"
                                    alt=""
                                    src="/images/hero/line_cocodrile1.webp"
                                    width={400}
                                    height={150}
                                />

                                <h1 className="font-semibold text-white leading-tight text-3xl sm:text-4xl lg:text-6xl mb-4 md:mb-6 mt-5 max-w-4xl">
                                    Descubre Puerto Pizarro <br /> entre manglares e islas
                                </h1>

                                <p className="mt-2 md:mt-4 max-w-xl text-sm sm:text-base text-gray-200 leading-7">
                                    Paseos en bote por Tumbes, Isla de los Pajaros, zoocriadero de cocodrilos y la boca del mar.
                                </p>

                                <Link href="/packages" className="mt-6 mb-10 md:mb-20 btn border-green-500 text-white bg-green-500">
                                    Ver tours
                                </Link>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
