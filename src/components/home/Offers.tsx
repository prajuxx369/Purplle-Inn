"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";

const offers = [
  {
    title: "Weekend Getaway",
    description: "Enjoy a relaxing weekend with complimentary breakfast and late checkout.",
    discount: "20% OFF",
    bg: "bg-purple-100 dark:bg-purple-900/40",
  },
  {
    title: "Corporate Stay",
    description: "Tailored for business travelers. Includes Wi-Fi, workspace, and meeting room access.",
    discount: "Special Rate",
    bg: "bg-stone-100 dark:bg-stone-800/60",
  },
];

function CardOffer({ title, description, discount, bg }: { title: string, description: string, discount: string, bg: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full p-8 md:p-12 rounded-2xl ${bg} overflow-hidden cursor-pointer h-[400px] flex flex-col justify-between`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        <span className="inline-block px-4 py-1 bg-stone-900 text-white text-xs uppercase tracking-widest rounded-full mb-6">
            {discount}
        </span>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white mb-4">
            {title}
        </h3>
        <p className="text-stone-600 dark:text-stone-300 max-w-sm">
            {description}
        </p>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="flex justify-end">
          <div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-full flex items-center justify-center shadow-lg text-stone-900 dark:text-white">
             <span className="text-2xl">→</span>
          </div>
      </div>
    </motion.div>
  );
}

export function Offers() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
           <span className="text-purple-800 dark:text-purple-400 uppercase tracking-widest text-xs font-bold mb-2 block">Exclusive Deals</span>
           <AnimatedHeading text="Offers & Packages" className="text-4xl md:text-5xl text-stone-900 dark:text-white" />
        </div>
        <Button href="/offers" variant="outline">View All Offers</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
        {offers.map((offer, index) => (
            <div key={index} className="perspective-container" style={{ perspective: "1000px" }}>
                <CardOffer {...offer} />
            </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
