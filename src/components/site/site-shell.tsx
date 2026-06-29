import { SiteFooter } from "@/components/site/site-footer";

import { SiteHeader } from "@/components/site/site-header";

import { SiteLogo } from "@/components/site/site-logo";

import { WhatsAppButton } from "@/components/site/whatsapp-button";



export function SiteShell({ children }: { children: React.ReactNode }) {

  return (

    <>

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader logo={<SiteLogo priority />} />

      <main id="main-content" className="flex-1">{children}</main>

      <SiteFooter />

      <WhatsAppButton />

    </>

  );

}

