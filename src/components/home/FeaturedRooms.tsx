"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

// Sample data
const rooms = [
  {
    id: 1,
    title: "Heritage King Room",
    description: "Classic elegance meets modern comfort in our signature king-size retreat.",
    price: "$299",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2048&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Azure Marina Suite",
    description: "Expansive suites offering breathtaking views and private lounge access.",
    price: "$550",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sanctuary Family Villa",
    description: "A private haven for the family, featuring interconnected rooms and gardens.",
    price: "$450",
    image: "https://images.unsplash.com/photo-1566115328231-af4245644cb8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Royal Penthouse",
    description: "The pinnacle of urban luxury with a private terrace and 360° city views.",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9759678?q=80&w=2070&auto=format&fit=crop",
  },
];

export function FeaturedRooms() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <div className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <span className="text-purple-800 uppercase tracking-widest text-xs font-bold mb-2 block">Accommodations</span>
           <AnimatedHeading text="Curated Spaces" className="text-4xl md:text-5xl text-stone-900" />
        </div>
        <div className="hidden md:block">
            <Button href="/rooms" variant="outline">View All Rooms</Button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full pl-4 md:pl-8">
        <div
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
            ref={containerRef}
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center group relative cursor-pointer"
            >
              <div className="relative aspect-4/5 md:aspect-3/4 overflow-hidden rounded-lg mb-6">
                 <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors z-10" />
                 <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="block text-xs uppercase tracking-widest text-stone-500 mb-1">Starting from</span>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-serif font-bold text-stone-900">{room.price} <span className="text-sm font-sans font-normal text-stone-600">/ night</span></span>
                            <span className="p-2 bg-stone-900 rounded-full text-white">
                                <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                 </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-purple-900 transition-colors">{room.title}</h3>
              <p className="text-stone-600 line-clamp-2">{room.description}</p>
            </motion.div>
          ))}

          {/* Spacer for end of scroll */}
          <div className="w-8 shrink-0" />
        </div>
      </div>

      <div className="md:hidden px-4 mt-8">
        <Button href="/rooms" variant="outline" className="w-full">View All Rooms</Button>
      </div>
    </div>
  );
}
