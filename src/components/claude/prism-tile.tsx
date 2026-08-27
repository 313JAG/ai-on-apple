import type { ReactNode } from "react";

import { accent, type AccentKey } from "@/components/claude/design-tokens";
import { cn } from "@/lib/utils";

type PrismTileProps = {
  as?: "div" | "article" | "section";
  accentKey?: AccentKey;
  tone?: "light" | "dark";
  /** Removes the hover lift for tiles that are not links. */
  still?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Bento surface for the Claude variant: frosted panel, edge-lit top hairline in
 * the tile accent, and a soft bloom bleeding in from a corner.
 */
export function PrismTile({
  as: Tag = "div",
  accentKey = "blue",
  tone = "light",
  still = false,
  className,
  children,
}: PrismTileProps) {
  const isDark = tone === "dark";

  return (
    <Tag
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-[26px] transition duration-500 ease-out",
        isDark
          ? "border border-white/10 bg-[#101013] text-white shadow-[0_1px_2px_rgb(0_0_0/0.28),0_28px_64px_-34px_rgb(0_0_0/0.55)]"
          : "border border-black/[0.07] bg-white/85 shadow-[inset_0_1px_0_rgb(255_255_255/0.8),0_1px_2px_rgb(0_0_0/0.04),0_20px_44px_-30px_rgb(0_0_0/0.28)] backdrop-blur-xl",
        !still &&
          "hover:-translate-y-[3px] motion-reduce:transform-none motion-reduce:hover:translate-y-0",
        !still &&
          (isDark
            ? "hover:shadow-[0_1px_2px_rgb(0_0_0/0.28),0_40px_86px_-38px_rgb(0_0_0/0.62)]"
            : "hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.8),0_1px_2px_rgb(0_0_0/0.04),0_30px_60px_-30px_rgb(0_0_0/0.32)]"),
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent(
            accentKey,
            isDark ? 0.95 : 0.85,
          )} 24%, ${accent(accentKey, 0.22)} 66%, transparent)`,
        }}
      />

      {isDark ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-28 -z-10 size-72 rounded-full blur-[64px]"
          style={{
            background: `conic-gradient(from 140deg, ${accent("blue", 0.75)}, ${accent(
              "purple",
              0.7,
            )}, ${accent("pink", 0.6)}, ${accent("orange", 0.5)}, ${accent(
              "green",
              0.55,
            )}, ${accent("blue", 0.75)})`,
            opacity: 0.55,
          }}
        />
      ) : (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-20 -z-10 size-56 rounded-full opacity-60 blur-[60px] transition-opacity duration-500 group-hover:opacity-90"
          style={{ background: accent(accentKey, 0.26) }}
        />
      )}

      {children}
    </Tag>
  );
}

/** Small uppercase label used inside tiles, tinted with the tile accent. */
export function TileLabel({
  children,
  accentKey,
  tone = "light",
  className,
}: {
  children: ReactNode;
  accentKey: AccentKey;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em]",
        tone === "dark" ? "text-white/60" : "text-[#6e6e73]",
        className,
      )}
    >
      <span
        aria-hidden
        className="size-1.5 rounded-full"
        style={{ background: accent(accentKey, 0.95) }}
      />
      {children}
    </span>
  );
}
