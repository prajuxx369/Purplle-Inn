"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WaterWrapper } from "@/components/ui/WaterWrapper";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({ children, className, id, delay = 0 }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-32 px-4 md:px-8 overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <WaterWrapper
          imageUrl="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
          dropRadius={20}
          perturbance={0.02}
          resolution={512}
        >
          <div className="absolute inset-0 bg-stone-50/90 dark:bg-stone-900/90 pointer-events-none" />
        </WaterWrapper>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
