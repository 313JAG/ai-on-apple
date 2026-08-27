import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "glass" | "onDark";
  size?: "sm" | "md";
  className?: string;
};

const VARIANTS: Record<NonNullable<PillLinkProps["variant"]>, string> = {
  solid:
    "bg-[#1d1d1f] text-white shadow-[0_10px_24px_-12px_rgb(0_0_0/0.5)] hover:bg-[#33333a]",
  glass:
    "border border-black/[0.09] bg-white/70 text-[#1d1d1f] shadow-[0_1px_2px_rgb(0_0_0/0.04)] backdrop-blur-xl hover:border-black/[0.14] hover:bg-white",
  onDark: "bg-white text-[#1d1d1f] hover:bg-white/90",
};

const SIZES: Record<NonNullable<PillLinkProps["size"]>, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-[14px]",
};

/** External link styled as a pill. Always opens safely in a new tab. */
export function PillLink({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
}: PillLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Inline text link with a nudging arrow, tinted by the caller. */
export function ArrowLink({
  href,
  children,
  color,
  className,
}: {
  href: string;
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/link inline-flex min-h-11 items-center gap-1 text-[14px] font-medium transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]",
        className,
      )}
      style={color ? { color } : undefined}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover/link:translate-x-0.5 motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}
