import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 border border-[#15709F]  transform -skew-x-6"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative w-[500px] h-[500px]">
              <Image
                src="/logo-hero.svg"
                alt="RBQ GYM"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="space-y-6 ">
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    EMPIEZA EL GYM
                    <br />
                    <span className="text-[#15709F] ">AHORA!</span>
                  </h2>
                  <p className="text-gray-400">
                    obtén 50% de descuento en las primeras tres clases en las
                    que te inscribas este mes cualquier membresia de GYM
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="nombre"
                      className="bg-transparent border-white/20 text-white placeholder:text-gray-500"
                    />
                    <Input
                      type="tel"
                      placeholder="numero"
                      className="bg-transparent border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="email"
                    className="bg-transparent border-white/20 text-white placeholder:text-gray-500"
                  />
                  <Button className="w-full md:w-auto bg-[#15709F] hover:bg-[#4fc1fa] /90 text-white">
                    INGRESA AHORA!
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
