import { marqueeItems } from "@/lib/home-content";

export function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-track overflow-x-clip border-y border-border bg-primary py-3.5">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-4 text-[0.75rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase after:text-[0.5rem] after:text-primary-foreground/50 after:content-['◆']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
