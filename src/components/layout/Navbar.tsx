"use client";

import { NAV_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-neutral-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:text-white hover:border-neutral-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
