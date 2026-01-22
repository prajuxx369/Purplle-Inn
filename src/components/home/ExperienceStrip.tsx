"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { WaterWrapper } from "@/components/ui/WaterWrapper";

const experiences = [
  {
    title: "Epicurean Journey",
    description: "A symphony of flavors crafted by our Michelin-starred culinary team.",
    image: "https://images.unsplash.com/photo-1550966842-28df54889c2c?q=80&w=2070&auto=format&fit=crop",
    color: "from-stone-900/40 to-stone-900/80",
  },
  {
    title: "Skyline Serenity",
    description: "Find your peace amidst the urban rush in our rooftop sanctuary.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop",
    color: "from-stone-900/40 to-stone-900/80",
  },
  {
    title: "Grand Atrium",
    description: "Experience the majestic architecture of our iconic light-filled lobby.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2070&auto=format&fit=crop",
    color: "from-stone-900/40 to-stone-900/80",
  },
];

export function ExperienceStrip() {
  return (
    <section className="bg-stone-900 text-white">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 1 }}
            className="relative flex-1 group overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0 min-h-[400px]"
          >
            <div className="absolute inset-0">
                <WaterWrapper
                  imageUrl={exp.image}
                  dropRadius={25}
                  perturbance={0.04}
                  resolution={512}
                >
                  <div className="absolute inset-0 bg-transparent pointer-events-none" />
                </WaterWrapper>
            </div>

            {/* Overlay */}
            <div className={cn("absolute inset-0 bg-linear-to-b transition-opacity duration-500 opacity-60 group-hover:opacity-80", exp.color)} />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs uppercase tracking-widest text-white/70 mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Experience</span>
                    <h3 className="text-3xl font-serif font-bold mb-4">{exp.title}</h3>
                    <p className="text-stone-300 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                        {exp.description}
                    </p>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
