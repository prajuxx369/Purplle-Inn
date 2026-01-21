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
    <SectionWrapper className="py-20 bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 group"
          >
            <div className="mb-6 p-4 bg-purple-50 rounded-full w-fit group-hover:bg-purple-100 transition-colors">
              <usp.icon size={24} className="text-purple-900" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-stone-900">{usp.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{usp.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
