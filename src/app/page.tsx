import Contact from "@/features/home/Contact";
import Experience from "@/features/home/Experience";
import Features from "@/features/home/Features";
import HomeHero from "@/features/home/HomeHero";
import Testimonials from "@/features/home/Testimonials";
import Trainers from "@/features/home/Trainers";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Features />
      <Experience />
      <Trainers />
      <Testimonials />
      <Contact />
    </div>
  );
}
