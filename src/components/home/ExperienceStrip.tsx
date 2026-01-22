"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Fine Dining",
    description: "Savor exquisite culinary delights prepared by world-class chefs.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    color: "from-purple-900/80 to-stone-900/80",
  },
  {
    title: "Prime Location",
    description: "Nestled in the city's vibrant heart, moments from culture and commerce.",
    image: "https://images.unsplash.com/photo-1449824913929-2b3a3e3dbaf0?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-900/80 to-stone-900/80",
  },
  {
    title: "Cozy Ambience",
    description: "Unwind in spaces designed for tranquility and understated luxury.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    color: "from-stone-900/80 to-stone-900/90",
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
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
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
