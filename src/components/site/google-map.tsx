import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

import { formatAddress, getGoogleMapsUrl, getMapEmbedUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

interface GoogleMapProps {
  className?: string;
  title?: string;
  showHeader?: boolean;
}

export function GoogleMap({
  className,
  title = "TaxSimpl office location on Google Maps",
  showHeader = true,
}: GoogleMapProps) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-[0_4px_20px_rgba(45,109,163,0.08)]">
      {showHeader ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-border px-5 py-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-foreground">Find us on Google Maps</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{formatAddress()}</p>
            </div>
          </div>
          <Link
            href={getGoogleMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary hover:text-foreground"
          >
            Open in Google Maps
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      ) : null}
      <iframe
        title={title}
        src={getMapEmbedUrl()}
        className={cn("h-full w-full border-0", className)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
