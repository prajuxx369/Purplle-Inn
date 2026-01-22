"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Train, Navigation } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";

const nearby = [
  { icon: Plane, label: "Airport", distance: "15 km" },
  { icon: Train, label: "Central Station", distance: "2 km" },
  { icon: Navigation, label: "City Center", distance: "0.5 km" },
];

export function Location() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')" }}
      />
      {/* Dark Overlays (Gradient) */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-stone-900 via-stone-900/80 to-stone-900/40 dark:from-black dark:via-black/90 dark:to-transparent" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
            <span className="text-purple-400 uppercase tracking-widest text-xs font-bold mb-2 block">Location</span>
            <AnimatedHeading text="In the Heart of It All" className="text-4xl md:text-5xl text-white mb-6" />
            <p className="text-stone-300 mb-8 leading-relaxed max-w-lg">
                Purplle Inn is strategically located to give you the best of the city. Whether you&apos;re here for business or leisure, everything you need is just a stone&apos;s throw away.
            </p>

            <div className="space-y-6 mb-10">
                {nearby.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex items-center gap-4 group"
                    >
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:border-purple-500 transition-all">
                            <item.icon size={20} />
                        </div>
                        <div>
                            <span className="block text-white font-bold">{item.label}</span>
                            <span className="text-stone-400 text-sm">{item.distance}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="bg-white text-stone-900 hover:bg-stone-200 border-none">Get Directions</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-stone-900">Contact Us</Button>
            </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
                {/* Simple Map Placeholder */}
                <div className="absolute inset-0 bg-stone-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645520846067!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) invert(0%) contrast(80%)" }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Custom Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <MapPin size={48} className="text-purple-500 drop-shadow-lg" fill="currentColor" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
