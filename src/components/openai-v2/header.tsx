"use client";

import Image from "next/image";
import type { MouseEvent } from "react";

import { LOGO_SRC, SLACK_URL } from "./constants";
import { SpectrumBars } from "./spectrum-ribbon";

const NAV_LINKS = [
  { href: "#openai-events", label: "Events" },
  { href: "#openai-slack", label: "Slack" },
  { href: "#openai-about", label: "About" },
] as const;

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769d2]";

export function OpenAIHeader() {
  function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
    <header className="sticky top-[52px] z-50 border-b border-black/10 bg-[#f7f4ee]/88 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-[60px] max-w-6xl min-w-0 items-center gap-2 px-3 sm:h-16 sm:px-6">
        <a
          href="#openai-top"
          aria-label="AI on Apple, back to top"
          className={`flex min-h-11 min-w-0 shrink items-center gap-2.5 rounded-lg ${focus}`}
        >
          <Image
            src={LOGO_SRC}
            alt=""
            width={38}
            height={38}
            priority
            className="size-[38px] shrink-0 rounded-[11px] object-cover ring-1 ring-black/10"
          />
          <span className="hidden truncate text-[15px] font-semibold tracking-[-0.02em] min-[390px]:block">
            AI on Apple
          </span>
          <SpectrumBars className="hidden sm:inline-grid" />
        </a>

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-11 items-center rounded-full px-4 text-[14px] font-medium text-[#5d5b57] transition-colors hover:bg-black/[0.05] hover:text-[#171717] ${focus}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={SLACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`ml-auto inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#171717] px-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#353535] sm:px-5 md:ml-2 ${focus}`}
        >
          Join Slack
        </a>

        <details className="group relative shrink-0 md:hidden">
          <summary
            className={`flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#171717] [&::-webkit-details-marker]:hidden ${focus}`}
            aria-label="Open navigation menu"
          >
            <span className="flex w-[17px] flex-col gap-[4px]" aria-hidden>
              <span className="h-px w-full bg-current transition-transform group-open:translate-y-[2.5px] group-open:rotate-45 motion-reduce:transition-none" />
              <span className="h-px w-full bg-current transition-transform group-open:-translate-y-[2.5px] group-open:-rotate-45 motion-reduce:transition-none" />
            </span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[calc(100%+8px)] w-44 overflow-hidden rounded-2xl border border-black/10 bg-[#fffefb] p-1.5 shadow-[0_18px_50px_rgba(30,25,18,0.16)]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`flex min-h-11 items-center rounded-xl px-4 text-[15px] font-medium hover:bg-black/[0.05] ${focus}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
