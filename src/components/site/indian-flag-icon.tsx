import { cn } from "@/lib/utils";

const CHAKRA_SPOKES = Array.from({ length: 24 }, (_, index) => {
  const angle = (index * 15 * Math.PI) / 180;
  const radius = 7.5;
  const cx = 45;
  const cy = 30;

  return (
    <line
      key={index}
      x1={cx}
      y1={cy}
      x2={cx + radius * Math.cos(angle)}
      y2={cy + radius * Math.sin(angle)}
      stroke="#000080"
      strokeWidth="0.45"
    />
  );
});

type IndianFlagIconProps = {
  className?: string;
};

export function IndianFlagIcon({ className }: IndianFlagIconProps) {
  return (
    <span
      role="img"
      aria-label="India"
      title="India"
      className={cn(
        "inline-flex shrink-0 items-center align-middle transition-transform duration-200 ease-out hover:scale-[1.08] motion-reduce:transition-none motion-reduce:hover:scale-100",
        className,
      )}
    >
      <svg
        viewBox="0 0 90 60"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block h-[0.9em] w-[1.35em] align-middle"
        aria-hidden="true"
      >
        <rect width="90" height="20" fill="#FF9933" />
        <rect y="20" width="90" height="20" fill="#FFFFFF" />
        <rect y="40" width="90" height="20" fill="#138808" />
        <circle cx="45" cy="30" r="7.5" fill="none" stroke="#000080" strokeWidth="0.6" />
        {CHAKRA_SPOKES}
      </svg>
    </span>
  );
}
