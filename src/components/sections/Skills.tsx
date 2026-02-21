"use client";

import { SKILLS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <AnimatedSection>
        <div className="md:ml-auto md:max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-12">
            What I do
          </p>
          <div>
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="border-b border-neutral-800 py-4 md:py-5 flex items-center justify-between cursor-default group"
              >
                <span
                  className={`font-[var(--font-heading)] text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-all duration-300 ${
                    hoveredIndex === null || hoveredIndex === i
                      ? "text-white"
                      : "text-neutral-700"
                  } ${hoveredIndex === i ? "translate-x-2" : ""}`}
                >
                  {skill}
                </span>
                <Plus
                  size={20}
                  className={`transition-all duration-300 ${
                    hoveredIndex === null || hoveredIndex === i
                      ? "text-neutral-400"
                      : "text-neutral-800"
                  } ${hoveredIndex === i ? "rotate-45" : ""}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
