"use client";

import { STATS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

function AnimatedStat({
  numericValue,
  prefix = "",
  suffix = "",
  decimal = false,
  label,
}: {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  decimal?: boolean;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => {
    if (decimal) {
      return v.toFixed(1);
    }
    return Math.round(v).toString();
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, numericValue, {
        duration: 1.5,
        ease: "easeOut",
      });
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="flex items-baseline justify-center md:justify-start gap-2">
        <span className="font-[var(--font-heading)] text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight leading-none">
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </span>
      </div>
      <p className="text-neutral-400 text-sm uppercase tracking-wider mt-2">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <AnimatedSection>
        <div className="flex flex-col gap-12 md:gap-16 items-center md:items-start">
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              numericValue={stat.numericValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimal={stat.decimal}
              label={stat.label}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
