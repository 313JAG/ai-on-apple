import {
  accent,
  FULL_SPECTRUM,
  VINTAGE_STRIPES,
} from "@/components/claude/design-tokens";
import { cn } from "@/lib/utils";

/** Six vertical bars in the vintage Apple logo order. */
export function StripeMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("flex items-end gap-[2px]", className)}>
      {VINTAGE_STRIPES.map((key, index) => (
        <span
          key={key}
          className="w-[3px] rounded-full"
          style={{
            background: accent(key, 0.95),
            height: `${8 + (index % 3) * 2}px`,
          }}
        />
      ))}
    </span>
  );
}

/** Full-bleed spectrum rule built from discrete segments rather than a blend. */
export function SpectrumRule({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex h-[3px] w-full overflow-hidden", className)}>
      {FULL_SPECTRUM.map((key) => (
        <span key={key} className="h-full flex-1" style={{ background: accent(key, 0.9) }} />
      ))}
    </div>
  );
}
