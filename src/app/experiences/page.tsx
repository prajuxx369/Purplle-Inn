"use client";

import React from "react";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const experiencesList = [
  {
    title: "Signature Dining",
    description: "Embark on a culinary journey at our award-winning restaurants. From authentic local flavors to international gourmet delicacies, our master chefs curate menus that tantalize your taste buds. Enjoy intimate dinners, vibrant buffets, and handcrafted cocktails in settings that range from rooftop elegance to garden serenity.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    reverse: false,
  },
  {
    title: "Rejuvenating Wellness",
    description: "Reconnect with your inner self at our world-class spa. Offering a blend of ancient healing traditions and modern therapies, our wellness center is a sanctuary of peace. Indulge in signature massages, revitalizing facials, and yoga sessions tailored to restore balance and harmony to your mind, body, and soul.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    reverse: true,
  },
  {
    title: "Curated Local Tours",
    description: "Explore the city like a local with our guided tours. Whether you're interested in heritage walks through historic districts, food trails discovering hidden gems, or art excursions to contemporary galleries, our concierge team creates personalized itineraries that showcase the very best the destination has to offer.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1887&auto=format&fit=crop",
    reverse: false,
  },
  {
    title: "Events & Celebrations",
    description: "Host unforgettable events in our versatile venues. From grand weddings in our ballroom to sophisticated corporate meetings in state-of-the-art conference rooms, we provide the perfect backdrop. Our dedicated events team ensures every detail is meticulously planned and executed, allowing you to relax and enjoy the occasion.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
    reverse: true,
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-stone-950 transition-colors duration-300">
      <Header />
      <PageHero
        title="Unforgettable Experiences"
        subtitle="Curated moments designed to inspire and delight."
        image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2149&auto=format&fit=crop"
      />

      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          {experiencesList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-24 mb-24 last:mb-0`}
            >
              <div className="flex-1 w-full lg:w-1/2 relative group">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                {/* Decorative Element */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 -z-10 rounded-full blur-2xl opacity-60`} />
              </div>

              <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
                <span className="text-purple-800 dark:text-purple-400 uppercase tracking-widest text-xs font-bold mb-4 block">
                    Discover
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white mb-6">
                    {item.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-8">
                    {item.description}
                </p>
                <Button variant="outline" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white dark:border-stone-100 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900">
                    Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
