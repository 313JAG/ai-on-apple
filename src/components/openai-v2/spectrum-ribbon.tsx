import { cn } from "@/lib/utils";

const STRIPES = [
  { color: "#F15B5A", offset: 0 },
  { color: "#F59D3D", offset: 12 },
  { color: "#F5CD4B", offset: 24 },
  { color: "#54A968", offset: 36 },
  { color: "#48AEB3", offset: 48 },
  { color: "#477ED8", offset: 60 },
  { color: "#9964C8", offset: 72 },
] as const;

export function SpectrumRibbon() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] overflow-hidden sm:h-[42rem] lg:h-[48rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.96),transparent_32%),linear-gradient(145deg,#f5f1e9_18%,#ebe5d9_64%,#f6f4ef)]" />
      <svg
        viewBox="0 0 1200 700"
        fill="none"
        className="absolute -right-48 -top-8 h-[36rem] w-[62rem] max-w-none rotate-[-5deg] opacity-90 sm:-right-28 sm:h-[44rem] sm:w-[74rem] lg:-right-12 lg:h-[51rem] lg:w-[88rem]"
      >
        {STRIPES.map(({ color, offset }) => (
          <path
            key={color}
            d={`M1200 ${120 + offset}C930 ${44 + offset} 834 ${94 + offset} 710 ${
              220 + offset
            }C570 ${360 + offset} 446 ${378 + offset} 0 ${260 + offset}`}
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.86"
          />
        ))}
      </svg>
      <div className="absolute -right-28 top-28 size-[23rem] rounded-full border border-white/60 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_40px_100px_rgba(82,63,42,0.12)] backdrop-blur-2xl sm:right-[5%] sm:size-[30rem]" />
    </div>
  );
}

export function SpectrumBars({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-grid h-4 grid-cols-7 overflow-hidden rounded-[2px]",
        className,
      )}
    >
      {STRIPES.map(({ color }) => (
        <span key={color} className="w-[3px]" style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}
