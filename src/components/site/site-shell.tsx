import { SiteFooter } from "@/components/site/site-footer";

import { SiteHeader } from "@/components/site/site-header";

import { SiteLogo } from "@/components/site/site-logo";

import { WhatsAppButton } from "@/components/site/whatsapp-button";



export function SiteShell({ children }: { children: React.ReactNode }) {

  return (

    <>

      <SiteHeader logo={<SiteLogo priority />} />

      <main className="flex-1">{children}</main>

      <SiteFooter />

      <WhatsAppButton />

    </>

  );

}

