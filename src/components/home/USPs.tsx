"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Briefcase, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const usps = [
  {
    icon: MapPin,
    title: "Central Location",
    description: "Heart of the city, minutes away from major attractions.",
  },
  {
    icon: Star,
    title: "Boutique Rooms",
    description: "Elegantly designed spaces for ultimate relaxation.",
  },
  {
    icon: Briefcase,
    title: "Business Ready",
    description: "High-speed Wi-Fi and conference facilities.",
  },
  {
    icon: Clock,
    title: "24x7 Service",
    description: "Round-the-clock concierge and room service.",
  },
];

export function USPs() {
  return (
    <section className="relative py-24 bg-stone-50 dark:bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm border border-stone-100 dark:border-stone-700 rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-stone-950/50 transition-all duration-500"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white dark:bg-stone-800 rounded-full shadow-sm group-hover:scale-110 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-all duration-300">
                  <usp.icon size={28} className="text-stone-700 dark:text-stone-300 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-3 text-stone-900 dark:text-stone-100 group-hover:text-purple-900 dark:group-hover:text-purple-300 transition-colors duration-300">
                  {usp.title}
                </h3>
                
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-[200px]">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
