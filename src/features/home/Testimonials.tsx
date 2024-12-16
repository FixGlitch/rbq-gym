"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Roberto García",
      text: "Estoy extremadamente agradecido por el impacto positivo que el entrenamiento en el gimnasio ha tenido en mi vida; a través de un entrenamiento constante, la orientación experta de los entrenadores y el acceso a instalaciones de primer nivel, he sido testigo de una transformación notable en la fuerza, la resistencia y los niveles generales de condición física.",
      image: "https://generated.vusercontent.net/placeholder.svg",
      rating: 5,
    },
    {
      name: "María López",
      text: "El ambiente profesional y motivador del gimnasio ha sido fundamental en mi journey fitness. Los entrenadores son excepcionales y el equipamiento es de primera calidad.",
      image: "https://generated.vusercontent.net/placeholder.svg",
      rating: 5,
    },
  ];

  return (
    <section className="relative bg-[#121212] py-20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#121212]/80"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          QUE <span className="text-[#15709F] ">OPINAN</span> DE NOSOTROS
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {testimonials[currentSlide].text}
            </p>
            <div className="flex justify-center text-yellow-400 text-2xl">
              {"★".repeat(testimonials[currentSlide].rating)}
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <h3 className="text-white text-2xl font-bold">
                {testimonials[currentSlide].name}
              </h3>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-[#15709F] " : "bg-gray-600"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-[#15709F]  transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-[#15709F]  transition-colors"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
}
