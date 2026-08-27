import type { ReactNode } from "react";

import { accent, type AccentKey } from "@/components/claude/design-tokens";
import { cn } from "@/lib/utils";

/**
 * Eyebrow, hairline rule and title. The rule stretches to the right edge so
 * every section reads as a horizontal band rather than a centred block.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  accentKey,
  action,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  accentKey: AccentKey;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="size-2 shrink-0 rounded-full"
          style={{
            background: accent(accentKey, 1),
            boxShadow: `0 0 0 4px ${accent(accentKey, 0.16)}`,
          }}
        />
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
          {eyebrow}
        </span>
        <span
          aria-hidden
          className="h-px flex-1"
          style={{
            background: `linear-gradient(90deg, ${accent(accentKey, 0.5)}, rgb(0 0 0 / 0.08) 30%, rgb(0 0 0 / 0))`,
          }}
        />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="max-w-2xl">
          <h2
            id={id}
            className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f] sm:text-[2.25rem]"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73] sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
