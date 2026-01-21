"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />

      <div className="pt-32 pb-12 px-4 text-center">
          <span className="text-sm uppercase tracking-widest mb-4 block text-purple-800 font-bold">Get in Touch</span>
          <AnimatedHeading text="Contact Us" as="h1" className="text-5xl md:text-6xl font-bold text-stone-900" />
      </div>

      <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Contact Info */}
              <div>
                  <p className="text-xl text-stone-600 mb-12 leading-relaxed">
                      We are here to assist you with your reservations, event planning, or any other inquiries. Reach out to us using the form or the details below.
                  </p>

                  <div className="space-y-8">
                      <div className="flex items-start gap-6">
                          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-900 shrink-0">
                              <MapPin size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-stone-900 mb-1">Address</h3>
                              <p className="text-stone-600">123 Luxury Avenue,<br />Metropolis, Country 560001</p>
                          </div>
                      </div>

                      <div className="flex items-start gap-6">
                          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-900 shrink-0">
                              <Phone size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-stone-900 mb-1">Phone</h3>
                              <p className="text-stone-600">+1 (234) 567-890</p>
                              <p className="text-stone-600">+1 (987) 654-321</p>
                          </div>
                      </div>

                      <div className="flex items-start gap-6">
                          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-900 shrink-0">
                              <Mail size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-stone-900 mb-1">Email</h3>
                              <p className="text-stone-600">reservations@purplleinn.com</p>
                              <p className="text-stone-600">events@purplleinn.com</p>
                          </div>
                      </div>

                      <div className="flex items-start gap-6">
                          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-900 shrink-0">
                              <Clock size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-stone-900 mb-1">Reception Hours</h3>
                              <p className="text-stone-600">24 Hours / 7 Days a week</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-stone-100"
              >
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-xs uppercase tracking-wider text-stone-500 font-bold">First Name</label>
                              <input type="text" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-xs uppercase tracking-wider text-stone-500 font-bold">Last Name</label>
                              <input type="text" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-stone-500 font-bold">Email</label>
                          <input type="email" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
                      </div>

                      <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-stone-500 font-bold">Subject</label>
                          <select className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-1 focus:ring-purple-500 outline-none transition-all">
                              <option>Room Reservation</option>
                              <option>Dining Inquiry</option>
                              <option>Event Hosting</option>
                              <option>Other</option>
                          </select>
                      </div>

                      <div className="space-y-2">
                          <label className="text-xs uppercase tracking-wider text-stone-500 font-bold">Message</label>
                          <textarea rows={4} className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
                      </div>

                      <Button className="w-full justify-center">Send Message</Button>
                  </form>
              </motion.div>
          </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
