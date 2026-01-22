"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { WaterWrapper } from "@/components/ui/WaterWrapper";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      {/* Background Image with Parallax & Water Effect */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <WaterWrapper
            imageUrl="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
            dropRadius={35}
            perturbance={0.12}
            resolution={2048}
        >
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </WaterWrapper>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-16 text-white max-w-7xl mx-auto">
        <div className="flex-1 text-center md:text-left">
            <AnimatedHeading
                text="Purplle Inn"
                as="h1"
                className="text-5xl md:text-8xl lg:text-9xl font-bold mb-6 text-white"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-2xl font-light tracking-wide mb-10 max-w-2xl"
            >
              Modern Comfort. Timeless Hospitality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 justify-center md:justify-start"
            >
                <Button href="/rooms" variant="primary" className="bg-white text-stone-900 hover:bg-stone-200">
                    Book a Stay
                </Button>
                <Button href="/rooms" variant="outline" className="text-white border-white hover:bg-white hover:text-stone-900">
                    View Rooms
                </Button>
            </motion.div>
        </div>

        {/* Front Image with Water Effect */}
        <motion.div
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            className="hidden lg:block flex-1 relative aspect-square max-w-md"
        >
            <div className="absolute inset-0 border-2 border-white/20 -translate-x-4 translate-y-4 rounded-2xl z-0" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
                <WaterWrapper
                    imageUrl="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2070&auto=format&fit=crop"
                    dropRadius={25}
                    perturbance={0.05}
                    resolution={512}
                >
                    <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
                </WaterWrapper>
            </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-12 bg-white/50"
        />
      </motion.div>
    </div>
  );
}
