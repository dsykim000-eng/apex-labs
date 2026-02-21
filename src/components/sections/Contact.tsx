"use client";

import { SITE } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Copy, Check, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
      <AnimatedSection>
        <div className="md:ml-auto md:max-w-2xl">
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
            Ready to work together? Let&apos;s talk about freelance projects,
            collaborations, and full-time roles.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
            >
              <Mail size={16} />
              Contact me
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:text-white hover:border-neutral-400 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
