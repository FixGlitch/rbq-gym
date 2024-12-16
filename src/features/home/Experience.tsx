import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Experience() {
  return (
    <section id="about-us" className="bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              TENEMOS MUCHA
              <br />
              <span className="text-[#15709F] ">EXPERIENCIA</span>
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                Con más de una década de experiencia, nuestro gimnasio se ha
                convertido en un referente en acondicionamiento físico y
                bienestar. Contamos con entrenadores altamente calificados que
                aplican las últimas metodologías para garantizar resultados
                efectivos. Más allá del ejercicio, promovemos un estilo de vida
                saludable que incluye orientación en nutrición y hábitos
                sostenibles.
              </p>

              <p className="leading-relaxed">
                Nuestro objetivo es ofrecer un ambiente motivador y seguro,
                ayudando a nuestros clientes a alcanzar sus metas con confianza
                y respaldo profesional.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="mt-8 bg-transparent border-[#15709F] text-[#15709F] hover:bg-[#4fc1fa] hover:text-white transition-colors"
            >
              SOBRE NOSOTROS
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#15709F]  rounded-lg"></div>

            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/expertice.svg"
                alt="Atleta entrenando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
