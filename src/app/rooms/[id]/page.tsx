import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Wifi, Tv, Coffee, User, Wind, Check } from "lucide-react";

// Mock data fetcher
const getRoom = (id: string) => {
  const rooms = [
    {
        id: "1",
        title: "Deluxe King",
        description: "Experience the epitome of comfort in our Deluxe King room. Featuring a plush king-size bed, a spacious work area, and floor-to-ceiling windows offering breathtaking city views. The modern bathroom is equipped with a rain shower and premium toiletries.",
        price: "$250",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
        category: "Deluxe",
        guests: 2,
        amenities: ["High-speed Wi-Fi", "42-inch Smart TV", "Coffee/Tea Maker", "Mini Bar", "In-room Safe", "24/7 Room Service", "Air Conditioning", "Daily Housekeeping"]
    },
    // Add other rooms if needed for demo, or handle "not found"
  ];
  return rooms.find(r => r.id === id) || rooms[0]; // Fallback for demo
};

export default async function RoomDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = getRoom(id);

  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <Header />

      {/* Hero */}
      <div className="relative h-[70vh] w-full">
         <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover"
         />
                         <div className="absolute inset-0 bg-black/30 dark:bg-black/50 transition-colors duration-300" />
         <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white bg-linear-to-t from-black/80 to-transparent">
             <div className="container mx-auto">
                 <span className="text-sm uppercase tracking-widest mb-2 block text-stone-300">{room.category} Room</span>
                 <AnimatedHeading text={room.title} as="h1" className="text-5xl md:text-7xl font-bold mb-4" />
                 <p className="text-2xl font-light">{room.price} <span className="text-base opacity-70">/ night</span></p>
             </div>
         </div>
      </div>

      <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                  <h2 className="text-2xl font-serif font-bold mb-6 dark:text-white">Description</h2>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-12 text-lg">
                      {room.description}
                  </p>

                  <h2 className="text-2xl font-serif font-bold mb-6 dark:text-white">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {room.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-stone-900 rounded-lg border border-stone-100 dark:border-stone-800">
                              <Check size={18} className="text-purple-800 dark:text-purple-400" />
                              <span className="text-stone-700 dark:text-stone-300">{amenity}</span>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-stone-900 p-8 rounded-xl shadow-lg border border-stone-100 dark:border-stone-800 sticky top-24 transition-colors duration-300">
                      <h3 className="text-xl font-serif font-bold mb-6 dark:text-white">Book Your Stay</h3>
                      <form className="space-y-4">
                          <div>
                              <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Check-in</label>
                              <input type="date" className="w-full p-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md focus:ring-1 focus:ring-purple-500 outline-none text-stone-700 dark:text-stone-200" />
                          </div>
                          <div>
                              <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Check-out</label>
                              <input type="date" className="w-full p-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md focus:ring-1 focus:ring-purple-500 outline-none text-stone-700 dark:text-stone-200" />
                          </div>
                          <div>
                              <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Guests</label>
                              <select className="w-full p-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md focus:ring-1 focus:ring-purple-500 outline-none text-stone-700 dark:text-stone-200">
                                  <option className="dark:bg-stone-900">1 Adult</option>
                                  <option className="dark:bg-stone-900">2 Adults</option>
                                  <option className="dark:bg-stone-900">2 Adults, 1 Child</option>
                              </select>
                          </div>

                          <div className="pt-4">
                            <Button className="w-full">Enquire Now</Button>
                            <p className="text-xs text-stone-400 text-center mt-3">You won&apos;t be charged yet</p>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
