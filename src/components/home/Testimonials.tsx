"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Business Traveler",
    review: "The attention to detail at Purplle Inn is unmatched. From the seamless check-in to the exquisitely designed rooms, everything screams luxury.",
    stars: 5,
  },
  {
    name: "Michael & Emily",
    role: "Couple",
    review: "We celebrated our anniversary here and it was magical. The staff went above and beyond to make our stay memorable. Highly recommended!",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Architect",
    review: "As an architect, I appreciate the design language of this hotel. Modern yet timeless. A visual treat in every corner.",
    stars: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper className="bg-stone-50 py-24">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-8 text-purple-200"
        >
            <Quote size={64} fill="currentColor" />
        </motion.div>

        <div className="h-[300px] w-full relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Star size={20} fill="currentColor" />
                  </motion.span>
                ))}
              </div>
              <p className="text-2xl md:text-4xl font-serif text-stone-900 leading-tight mb-8">
                &quot;{testimonials[current].review}&quot;
              </p>
              <div>
                <h4 className="text-stone-900 font-bold uppercase tracking-wide">{testimonials[current].name}</h4>
                <span className="text-stone-500 text-sm">{testimonials[current].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-8">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-purple-900 w-8" : "bg-stone-300 hover:bg-stone-400"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
