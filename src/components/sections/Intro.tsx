import { INTRO_TEXT } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Intro() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <AnimatedSection>
        <div className="md:ml-auto md:max-w-2xl">
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            {INTRO_TEXT}
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
