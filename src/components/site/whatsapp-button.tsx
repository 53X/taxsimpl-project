import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { getWhatsAppUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TaxSimpl on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full bg-whatsapp text-white shadow-whatsapp outline-none transition-transform duration-300 hover:scale-110 focus-visible:ring-3 focus-visible:ring-whatsapp/50 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 sm:right-6 sm:bottom-6"
    >
      <span className="whatsapp-fab-ping absolute inset-0 rounded-full bg-whatsapp opacity-40 animate-ping group-hover:opacity-0 motion-reduce:hidden" />
      <WhatsAppIcon className="relative size-8" />
    </a>
  );
}
