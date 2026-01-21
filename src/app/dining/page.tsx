"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";

const menus = [
  {
    title: "Breakfast",
    time: "7:00 AM - 10:30 AM",
    description: "Start your day with our continental spread featuring fresh pastries, seasonal fruits, and made-to-order eggs.",
    image: "https://images.unsplash.com/photo-1533089862017-541e53283255?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Lunch",
    time: "12:00 PM - 3:00 PM",
    description: "A la carte menu offering a fusion of local flavors and international classics, perfect for business or leisure.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Dinner",
    time: "7:00 PM - 11:00 PM",
    description: "An elegant fine dining experience with candlelight, premium wines, and chef's signature dishes.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function DiningPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero */}
      <div className="relative h-[60vh] bg-stone-900 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-60">
             <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                alt="Dining Hero"
                fill
                className="object-cover"
             />
        </div>
        <div className="relative z-10 text-white">
            <span className="text-sm uppercase tracking-widest mb-4 block">Culinary Excellence</span>
            <AnimatedHeading text="The Royal Palate" as="h1" className="text-5xl md:text-7xl font-bold" />
        </div>
      </div>

      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xl md:text-2xl font-serif text-stone-800 leading-relaxed">
                &quot;Dining at Purplle Inn is not just a meal, it&apos;s a journey through flavors, textures, and aromas meticulously crafted to delight your senses.&quot;
            </p>
            <div className="w-24 h-1 bg-purple-900 mx-auto mt-8" />
        </div>

        <div className="space-y-20 md:space-y-32">
            {menus.map((menu, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl"
                    >
                         <Image
                            src={menu.image}
                            alt={menu.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                         />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-purple-800 font-bold tracking-widest text-sm mb-2 block">{menu.time}</span>
                        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">{menu.title}</h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8">
                            {menu.description}
                        </p>
                        <Button variant="outline">View Menu</Button>
                    </motion.div>
                </div>
            ))}
        </div>

        <div className="mt-32 p-12 bg-stone-900 rounded-2xl text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Private Dining & Events</h2>
                <p className="max-w-2xl mx-auto text-stone-300 mb-8">
                    Host your special occasions with us. From intimate gatherings to grand celebrations, we provide the perfect setting.
                </p>
                <Button variant="primary" className="bg-white text-stone-900 hover:bg-stone-200">
                    Contact Events Team
                </Button>
            </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
