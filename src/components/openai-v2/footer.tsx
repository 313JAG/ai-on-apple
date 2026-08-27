import Image from "next/image";

import { LINKEDIN_URL, LOGO_SRC, LUMA_URL, SLACK_URL } from "./constants";
import { SpectrumBars } from "./spectrum-ribbon";

const links = [
  { label: "Slack", href: SLACK_URL },
  { label: "Luma", href: LUMA_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
] as const;

export function OpenAIFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#fffdf9] px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#openai-top"
          className="flex min-h-11 w-fit items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769d2]"
        >
          <Image
            src={LOGO_SRC}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-[10px] object-cover ring-1 ring-black/10"
          />
          <span className="text-[15px] font-semibold tracking-[-0.02em]">
            AI on Apple
          </span>
          <SpectrumBars />
        </a>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-[14px] font-medium text-[#5f5b55] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769d2]"
            >
              {link.label} ↗
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
