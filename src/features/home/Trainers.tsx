'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Trainers() {
  const trainers = [
    {
      name: "Carlos Martinez",
      image: "https://generated.vusercontent.net/placeholder.svg",
      rating: 5,
    },
    {
      name: "Ana Silva",
      image: "https://generated.vusercontent.net/placeholder.svg",
      rating: 5,
    },
    {
      name: "Diego Ruiz",
      image: "https://generated.vusercontent.net/placeholder.svg",
      rating: 5,
    },
    {
      name: "Laura Torres",
      image: "https://generated.vusercontent.net/placeholder.svg",
      rating: 5,
    },
  ]

  return (
    <section id='trainers' className="bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NUESTROS ENTRENADORES
            <br />
            <span className="text-[#15709F] ">PROFECIONALES</span>
          </h2>
          <p className="text-gray-400">
            los profecionales que necesitas para lograr tu cambio físico
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-full"
          >
            {trainers.map((trainer, index) => (
              <SwiperSlide key={index}>
                <div className="relative group border border-[#15709F] /20 rounded-lg overflow-hidden bg-[#121212]">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {trainer.name}
                    </h3>
                    <p className="text-gray-400 mb-2">Rate Trainer:</p>
                    <div className="flex justify-center text-yellow-400">
                      {"★".repeat(trainer.rating)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
