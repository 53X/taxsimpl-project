import { SiteFooter } from "@/components/site/site-footer";
import { RouteFocus } from "@/components/site/route-focus";
import { SiteHeader } from "@/components/site/site-header";
import { SiteLogo } from "@/components/site/site-logo";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteFocus />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader logo={<SiteLogo priority />} />

      <main
        id="main-content"
        tabIndex={-1}
        className="w-full min-w-0 flex-1 overflow-x-clip pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] outline-none"
      >
        {children}
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
