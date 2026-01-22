import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

const offers = [
  {
    title: "Weekend Getaway",
    description: "Escape the city bustle with our tailored weekend package. Includes complimentary breakfast, late checkout till 4 PM, and a 20% discount on spa services.",
    validity: "Valid till Dec 31, 2024",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    code: "WKND20",
  },
  {
    title: "Long Stay Offer",
    description: "Stay for 3 nights or more and get 25% off on your total booking. Perfect for extended business trips or leisurely vacations.",
    validity: "Valid all year round",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    code: "STAY3",
  },
  {
    title: "Early Bird Special",
    description: "Plan ahead and save. Book at least 30 days in advance to enjoy exclusive rates starting from $150 per night.",
    validity: "Valid for advance bookings",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
    code: "EARLY30",
  },
  {
    title: "Honeymoon Bliss",
    description: "Celebrate love with champagne on arrival, a romantic dinner for two, and a special room decoration setup.",
    validity: "Valid for couples",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    code: "LOVE24",
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <Header />

      <PageHero 
        title="Offers & Packages"
        subtitle="Exclusive deals and curated packages for an unforgettable stay."
        image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
      />

      <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offers.map((offer, index) => (
                  <div key={index} className="bg-white dark:bg-stone-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-stone-800 flex flex-col">
                      <div className="relative h-64 w-full">
                          <Image
                             src={offer.image}
                             alt={offer.title}
                             fill
                             sizes="(max-width: 768px) 100vw, 50vw"
                             className="object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-purple-900 dark:bg-purple-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                              {offer.code}
                          </div>
                      </div>
                       <div className="p-8 flex flex-col grow">
                          <span className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">{offer.validity}</span>
                          <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-4">{offer.title}</h3>
                          <p className="text-stone-600 dark:text-stone-400 mb-8 grow">
                              {offer.description}
                          </p>
                          <Button className="w-full justify-center">Book Now</Button>
                      </div>
                  </div>
              ))}
          </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
