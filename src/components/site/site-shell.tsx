import { SiteFooter } from "@/components/site/site-footer";

import { SiteHeader } from "@/components/site/site-header";

import { WhatsAppButton } from "@/components/site/whatsapp-button";



export function SiteShell({ children }: { children: React.ReactNode }) {

  return (

    <>

      <SiteHeader />

      <main className="flex-1">{children}</main>

      <SiteFooter />

      <WhatsAppButton />

    </>

  );

}

