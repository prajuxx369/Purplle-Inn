"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Briefcase, Clock } from "lucide-react";
import { WaterWrapper } from "@/components/ui/WaterWrapper";

const usps = [
  {
    icon: MapPin,
    title: "Central Location",
    description: "Heart of the city, minutes away from major attractions.",
    image: "https://images.unsplash.com/photo-1449824913929-2b3a3e3dbaf0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Star,
    title: "Boutique Rooms",
    description: "Elegantly designed spaces for ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Briefcase,
    title: "Business Ready",
    description: "High-speed Wi-Fi and conference facilities.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Clock,
    title: "24x7 Service",
    description: "Round-the-clock concierge and room service.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },
];

export function USPs() {
  return (
    <section className="relative h-full w-full overflow-hidden">
        <WaterWrapper
            imageUrl="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
            dropRadius={20}
            perturbance={0.02}
            resolution={512}
            className="py-24"
        >
            <div className="absolute inset-0 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-[2px]" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {usps.map((usp, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="group relative p-8 bg-white/40 dark:bg-stone-800/40 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden min-h-[300px] flex flex-col justify-center"
                    >
                        {/* Background Hover Image */}
                        <div 
                          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center scale-110 group-hover:scale-100"
                          style={{ backgroundImage: `url('${usp.image}')` }}
                        />
                        <div className="absolute inset-0 z-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 z-10 bg-linear-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        <div className="relative z-20 flex flex-col items-center text-center">
                            <div className="mb-6 p-5 bg-linear-to-br from-white to-purple-50 dark:from-stone-700 dark:to-stone-800 rounded-2xl shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <usp.icon size={32} className="text-stone-700 dark:text-stone-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                            </div>
                            
                            <h3 className="text-xl font-serif font-bold mb-3 text-stone-900 dark:text-white group-hover:text-white transition-colors duration-300">
                                {usp.title}
                            </h3>
                            
                            <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-300">
                                {usp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
                </div>
            </div>
      </WaterWrapper>
    </section>
  );
}
