"use client";

import Footer from "@/features/home/Footer";
import Header from "@/features/home/Header";
import WhatsAppButton from "@/features/home/WhatsappButton";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white min-h-screen flex flex-col overflow-auto">
        <Header />
        <main className="flex-1 relative flex flex-col overflow-y-auto no-scrollbar">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
