"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-5 md:px-8 pt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-[var(--font-heading)] text-[clamp(4rem,15vw,13rem)] font-bold uppercase tracking-tighter leading-[0.85] text-white text-center w-full"
      >
        APEX LABS
      </motion.h1>
    </section>
  );
}
