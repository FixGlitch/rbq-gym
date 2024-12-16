import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#121212] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/background.svg"
          alt="Gym Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="absolute right-0 top-20 md:top-40 text-[120px] md:text-[180px] font-bold leading-none tracking-tight opacity-20">
            <div
              className="text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent whitespace-nowrap"
              style={{ WebkitTextStroke: "2px white" }}
            >
              LEVEL
            </div>
            <div
              className="text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent whitespace-nowrap"
              style={{ WebkitTextStroke: "2px white" }}
            >
              UP
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            LISTO PARA ENTRENAR
            <br />
            <span className="text-[#15709F]">TU CUERPO?</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
            El entrenamiento en gimnasio es un enfoque estructurado y
            disciplinado del ejercicio físico que se centra en la fuerza, la
            resistencia y la mejora general del estado físico.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-[#15709F] text-[#15709F] hover:bg-[#4fc1fa] hover:text-white transition-colors"
          >
            ÚNETE AHORA
          </Button>
          <div className="grid grid-cols-5 gap-8 mt-20 max-w-3xl pt-8 items-center">
            <div>
              <div className="text-[#15709F] text-4xl md:text-5xl font-bold mb-2">
                20+
              </div>
              <div className="text-gray-400 text-sm">años de experiencia</div>
            </div>
            <div className="h-full flex justify-center">
              <div className="border-r border-white/20 h-full"></div>
            </div>
            <div>
              <div className="text-[#15709F] text-4xl md:text-5xl font-bold mb-2">
                50+
              </div>
              <div className="text-gray-400 text-sm">miembros del gym</div>
            </div>
            <div className="h-full flex justify-center">
              <div className="border-r border-white/20 h-full"></div>
            </div>
            <div>
              <div className="text-[#15709F] text-4xl md:text-5xl font-bold mb-2">
                60+
              </div>
              <div className="text-gray-400 text-sm">recomendaciones</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 -right-40 w-[620px] h-[605px] ">
          <Image
            src="/logo-hero.svg"
            alt="RBQ GYM Logo"
            fill
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
}
