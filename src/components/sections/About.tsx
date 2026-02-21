import { ABOUT_BIO } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Photo placeholder */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center">
            <div className="text-neutral-700 text-sm">Photo</div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-8">
              ( About me )
            </p>
            <div className="space-y-6">
              {ABOUT_BIO.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-neutral-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
