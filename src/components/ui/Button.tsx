"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, variant = "primary", children, className, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest";

  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800",
    outline: "border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white",
    ghost: "text-stone-900 hover:bg-stone-100",
  };

  const content = (
    <>
      <span className="mr-2">{children}</span>
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowRight size={16} />
      </motion.span>
    </>
  );

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileTap={{ scale: 0.98 }}
      {...props as any}
    >
      {content}
    </motion.button>
  );
}
