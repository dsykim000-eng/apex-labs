import { EXPERIENCE } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Experience() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <AnimatedSection>
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-24 border-t border-neutral-800 pt-12">
          <p className="text-sm uppercase tracking-wider text-neutral-500">
            Work experience
          </p>

          <div className="space-y-0">
            {EXPERIENCE.map((item, i) => (
              <div
                key={item.company}
                className={`py-6 ${i < EXPERIENCE.length - 1 ? "border-b border-neutral-800" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {item.company}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">{item.role}</p>
                  </div>
                  <span className="text-neutral-500 text-sm whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
