import Image from "next/image";

import {
  LINKEDIN_URL,
  LOGO_SRC,
  LUMA_CALENDAR_URL,
  SLACK_INVITE_URL,
} from "@/components/claude/design-tokens";
import { SpectrumRule } from "@/components/claude/rainbow-marks";
import { cn } from "@/lib/utils";

const LINK_GROUPS = [
  {
    heading: "Community",
    links: [
      { href: SLACK_INVITE_URL, label: "Join the Slack" },
      { href: LINKEDIN_URL, label: "LinkedIn" },
    ],
  },
  {
    heading: "Events",
    links: [
      { href: LUMA_CALENDAR_URL, label: "Luma calendar" },
      { href: LUMA_CALENDAR_URL, label: "Subscribe" },
    ],
  },
] as const;

export function PrismFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("relative mt-6 overflow-hidden", className)}>
      <SpectrumRule />

      <div className="border-t border-black/[0.06] bg-white/60 px-5 pb-12 pt-14 backdrop-blur-xl sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_SRC}
                alt="AI on Apple"
                width={44}
                height={44}
                className="size-11 rounded-[14px] object-cover ring-1 ring-black/[0.06]"
              />
              <span className="text-[16px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                AI on Apple
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[#6e6e73]">
              An independent community exploring AI on Apple platforms across
              Australia and New Zealand.
            </p>
          </div>

          {LINK_GROUPS.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading} className="lg:col-span-3">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e6e73]">
                {heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-[14px] font-medium text-[#1d1d1f] transition-colors hover:text-[#6e6e73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#6e6e73]">
            © 2026 AI on Apple. All rights reserved.
          </p>
          <p className="text-[13px] text-[#86868b]">
            Made in Australia &amp; New Zealand.
          </p>
        </div>
      </div>
    </footer>
  );
}
