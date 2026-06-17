import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { CtaSection } from "@/components/site/cta-section";
import { FaqSection } from "@/components/site/faq-section";
import { HeroSection } from "@/components/site/hero-section";
import { IndustriesSection } from "@/components/site/industries-section";
import { JsonLd } from "@/components/site/json-ld";
import { ProcessSection } from "@/components/site/process-section";
import { ServicesSection } from "@/components/site/services-section";
import { ShiftSection } from "@/components/site/shift-section";
import { WhySection } from "@/components/site/why-section";
import { faqItems } from "@/lib/home-content";
import {
  buildFaqPageSchema,
  buildPageMetadata,
  buildProfessionalServiceSchema,
  defaultTitle,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: defaultTitle,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[buildProfessionalServiceSchema(), buildFaqPageSchema(faqItems)]}
      />
      <HeroSection />
      <ShiftSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <IndustriesSection />
      <WhySection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
