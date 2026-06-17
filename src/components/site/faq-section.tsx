"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { faqItems } from "@/lib/home-content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t-2 border-border bg-card section-padding">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="heading-section">Questions, answered.</h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 50}>
                <div className="overflow-hidden rounded-xl border-2 border-border bg-background shadow-[0_4px_16px_rgba(6,50,34,0.07)]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 ease-out hover:bg-muted/30"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
