import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 flex w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="RBQ GYM"
              width={120}
              height={40}
              className="h-10"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-300 hover:text-[#15709F]">
              INICIO
            </Link>
            <Link
              href="#services"
              className="text-gray-300 hover:text-[#15709F]"
            >
              SERVICIOS
            </Link>
            <Link
              href="#trainers"
              className="text-gray-300 hover:text-[#15709F]"
            >
              ENTRENADORES
            </Link>
            <Link
              href="#about-us"
              className="text-gray-300 hover:text-[#15709F]"
            >
              NOSOTROS
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-[#15709F]">
              CONTACTO
            </Link>
          </nav>
          <button className="bg-[#15709F] text-white px-6 py-2 rounded-md hover:bg-[#4fc1fa]">
            EMPEZAR AHORA
          </button>
        </div>
      </div>
    </header>
  );
}
