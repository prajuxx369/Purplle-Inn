"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="font-serif text-3xl text-white font-bold block mb-4">
              Purplle Inn
            </Link>
            <p className="text-stone-400 font-light leading-relaxed">
              Modern Comfort. Timeless Hospitality. Experience luxury in the heart of the city with our premium rooms and exceptional service.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#fff" }}
                  className="p-2 bg-stone-800 rounded-full hover:bg-purple-900 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About Us", "Rooms & Suites", "Dining", "Offers", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                     <span className="w-0 group-hover:w-2 h-[1px] bg-purple-500 transition-all duration-300" />
                     {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1 text-purple-400" size={18} />
                <span>123 Luxury Avenue, Metropolis, Country 560001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-purple-400" size={18} />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-purple-400" size={18} />
                <span>reservations@purplleinn.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-bold mb-6">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Subscribe to receive exclusive offers and news.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-stone-800 border-none p-3 text-stone-200 focus:ring-1 focus:ring-purple-500 outline-none w-full"
              />
              <button className="bg-purple-900 text-white py-3 uppercase text-xs tracking-widest hover:bg-purple-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Purplle Inn. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-stone-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-stone-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
