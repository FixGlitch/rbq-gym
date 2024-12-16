import Link from "next/link";

export default function Footer() {
  const navigation = [
    { name: "INICIO", href: "#", current: true },
    { name: "SERVICIOS", href: "#", current: false },
    { name: "ENTRENADORES", href: "#", current: false },
    { name: "MEMBRESIAS", href: "#", current: false },
    { name: "CONTACTANOS", href: "#", current: false },
  ];

  return (
    <footer className="bg-[#121212]">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm ${
                item.current
                  ? "text-[#15709F] "
                  : "text-white hover:text-[#15709F] "
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-[#15709F] ">
                Privacy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#15709F] ">
                Terms and condition
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              © 2023 All rights reserved. RBQGYM Company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
