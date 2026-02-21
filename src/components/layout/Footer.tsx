import { SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="py-8 flex items-center justify-between">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              {link.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>

        <div className="pb-12 pt-4 overflow-hidden">
          <h2
            className="font-[var(--font-heading)] text-[clamp(3rem,13vw,11rem)] font-bold uppercase tracking-tighter leading-none text-white"
          >
            APEX LABS
          </h2>
        </div>
      </div>
    </footer>
  );
}
