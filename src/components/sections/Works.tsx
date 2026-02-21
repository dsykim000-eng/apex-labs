"use client";

import { PROJECTS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export function Works() {
  return (
    <section id="works" className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <AnimatedSection>
        <div className="space-y-16">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-medium">{project.name}</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full border border-neutral-700 text-xs text-neutral-300">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-neutral-700 text-xs text-neutral-300">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/10] md:aspect-[16/9] max-w-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-rose-200 to-orange-100 flex items-center justify-center">
                <div className="text-neutral-800/30 text-sm">
                  {project.description || project.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
