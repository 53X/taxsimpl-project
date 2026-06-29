"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { faqItems } from "@/lib/home-content";

export function FaqSection() {
  return (
    <section
      className="border-t-2 border-border bg-card section-padding"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto min-w-0 max-w-3xl">
        <Reveal className="text-center">
          <p className="section-eyebrow">FAQ</p>
          <h2 id="faq-heading" className="heading-section">
            Questions, answered.
          </h2>
        </Reveal>

        <Accordion className="mt-10 space-y-3 overflow-x-clip">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 50}>
              <AccordionItem
                value={`faq-${index}`}
                className="surface-card-compact overflow-hidden border-b-0 bg-background not-last:border-b-0"
              >
                <AccordionTrigger className="flex min-h-11 w-full min-w-0 items-center justify-between gap-4 rounded-none border-0 px-5 py-4 text-center text-base font-medium text-foreground hover:bg-muted/30 hover:no-underline focus-visible:ring-inset [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-muted-foreground">
                  <span className="min-w-0 flex-1 break-words text-center">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="border-t border-border px-5 py-4 text-left text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
