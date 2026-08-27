import Image from "next/image";

import {
  LOGO_SRC,
  SLACK_INVITE_URL,
} from "@/components/claude/design-tokens";
import { StripeMark } from "@/components/claude/rainbow-marks";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#claude-events", label: "Events" },
  { href: "#claude-slack", label: "Slack" },
  { href: "#claude-about", label: "About" },
] as const;

/**
 * Floating capsule nav that hovers over the hero instead of sitting flush
 * against the top edge.
 */
export function IslandHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-[52px] z-50 px-4 pt-4 sm:px-6 sm:pt-5",
        className,
      )}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 rounded-full border border-black/[0.07] bg-white/72 p-1 pl-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_10px_30px_-16px_rgb(0_0_0/0.28)] backdrop-blur-2xl backdrop-saturate-150 sm:gap-3 sm:pl-2.5">
        <a
          href="#claude-top"
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2.5 rounded-full pr-1 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3] sm:min-w-0"
        >
          <Image
            src={LOGO_SRC}
            alt="AI on Apple"
            width={34}
            height={34}
            className="size-[34px] rounded-full object-cover ring-1 ring-black/[0.06]"
            priority
          />
          <span className="hidden text-[14px] font-semibold tracking-[-0.01em] text-[#1d1d1f] sm:inline">
            AI on Apple
          </span>
        </a>

        <StripeMark className="hidden shrink-0 lg:flex" />

        <nav
          aria-label="Sections"
          className="flex flex-1 items-center justify-center gap-0 sm:gap-1"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-11 items-center rounded-full px-2.5 py-2 text-[13px] font-medium text-[#6e6e73] transition-colors hover:bg-black/[0.045] hover:text-[#1d1d1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3] sm:px-3.5"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={SLACK_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#33333a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]"
        >
          Join
          <span className="hidden sm:ml-1 sm:inline">Slack</span>
        </a>
      </div>
    </header>
  );
}
