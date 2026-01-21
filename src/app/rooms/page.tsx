"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Wifi, Tv, Coffee, User } from "lucide-react";

// Mock data
const rooms = [
  {
    id: 1,
    title: "Deluxe King",
    description: "Spacious room with city views and king-size bed.",
    price: "$250",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
    category: "Deluxe",
    guests: 2,
  },
  {
    id: 2,
    title: "Executive Suite",
    description: "Separate living area, premium amenities, and lounge access.",
    price: "$450",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    category: "Suite",
    guests: 2,
  },
  {
    id: 3,
    title: "Family Room",
    description: "Two queen beds, perfect for families or groups.",
    price: "$350",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
    category: "Family",
    guests: 4,
  },
  {
    id: 4,
    title: "Presidential Suite",
    description: "The ultimate luxury experience with panoramic views.",
    price: "$850",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    category: "Suite",
    guests: 3,
  },
  {
    id: 5,
    title: "Standard Queen",
    description: "Cozy and comfortable, ideal for solo travelers or couples.",
    price: "$180",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    category: "Standard",
    guests: 2,
  },
    {
    id: 6,
    title: "Junior Suite",
    description: "Open plan suite with sitting area and modern decor.",
    price: "$400",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    category: "Suite",
    guests: 2,
  },
];

const categories = ["All", "Standard", "Deluxe", "Suite", "Family"];

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRooms = activeCategory === "All"
    ? rooms
    : rooms.filter(room => room.category === activeCategory);

  return (
    <main className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <div className="relative h-[60vh] bg-stone-900 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-50">
             <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                alt="Rooms Hero"
                fill
                className="object-cover"
             />
        </div>
        <div className="relative z-10 text-white">
            <span className="text-sm uppercase tracking-widest mb-4 block">Accommodations</span>
            <AnimatedHeading text="Stay at Purplle Inn" as="h1" className="text-5xl md:text-7xl font-bold" />
        </div>
      </div>

      <SectionWrapper>
        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-transparent text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={room.id}
                    className="bg-white group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                            src={room.image}
                            alt={room.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase rounded-md shadow-sm">
                            {room.category}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="text-xl font-serif font-bold text-stone-900">{room.title}</h3>
                             <span className="text-lg font-medium text-stone-900">{room.price}</span>
                        </div>
                        <div className="flex items-center gap-4 text-stone-500 text-xs mb-4">
                            <span className="flex items-center gap-1"><User size={14} /> {room.guests} Guests</span>
                            <span className="flex items-center gap-1"><Wifi size={14} /> Free Wifi</span>
                            <span className="flex items-center gap-1"><Tv size={14} /> TV</span>
                        </div>
                        <p className="text-stone-600 text-sm mb-6 line-clamp-2">{room.description}</p>

                        <Button href={`/rooms/${room.id}`} variant="outline" className="w-full">
                            View Details
                        </Button>
                    </div>
                </motion.div>
            ))}
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
