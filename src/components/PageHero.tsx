"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <AnimatedHeading
          text={title}
          as="h1"
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/90 font-light tracking-wide"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
