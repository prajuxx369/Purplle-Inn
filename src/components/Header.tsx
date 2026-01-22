"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "Offers", href: "/offers" },
  { name: "Experiences", href: "/experiences" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md py-4 border-b border-stone-200 dark:border-stone-800" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="z-50 relative">
            <span className={cn(
                "font-serif text-2xl font-bold tracking-tighter transition-colors duration-300", 
                scrolled ? "text-stone-900 dark:text-white" : "text-white"
            )}>
              Purplle Inn
            </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors relative group",
                scrolled 
                  ? "text-stone-800 dark:text-stone-200 hover:text-purple-700 dark:hover:text-purple-400" 
                  : "text-white hover:text-white/80",
                pathname === link.href && (scrolled ? "text-purple-800 dark:text-purple-400 font-bold" : "text-white font-bold")
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                scrolled ? "bg-purple-800 dark:bg-purple-400" : "bg-white"
              )} />
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/rooms"
            className={cn(
                "px-6 py-2 text-sm uppercase tracking-widest transition-all",
                scrolled 
                    ? "bg-stone-900 text-stone-50 hover:bg-stone-800" 
                    : "bg-white text-stone-900 hover:bg-white/90"
            )}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden z-50 relative p-2 transition-colors",
            scrolled ? "text-stone-900 dark:text-white" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-stone-50 dark:bg-stone-950 z-40 flex flex-col items-center justify-center gap-8 transition-colors duration-300"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-3xl text-stone-900 dark:text-white hover:text-purple-800 dark:hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/rooms"
                className="mt-8 px-8 py-3 bg-stone-900 dark:bg-purple-900 text-stone-50 text-lg uppercase tracking-widest hover:bg-stone-800 dark:hover:bg-purple-800 transition-all"
              >
                Book Your Stay
              </Link>
              <ThemeToggle />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
