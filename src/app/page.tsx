import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { USPs } from "@/components/home/USPs";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { ExperienceStrip } from "@/components/home/ExperienceStrip";
import { Offers } from "@/components/home/Offers";
import { Testimonials } from "@/components/home/Testimonials";
import { Location } from "@/components/home/Location";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <USPs />
      <FeaturedRooms />
      <ExperienceStrip />
      <Offers />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
