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
      className="group fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0" />
      <WhatsAppIcon className="relative size-8" />
    </a>
  );
}
