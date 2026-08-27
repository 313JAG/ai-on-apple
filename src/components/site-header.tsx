import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";

const navLinks = [
  { href: "#events", label: "Events" },
  { href: "#about", label: "About" },
  { href: "#slack", label: "Slack" },
] as const;

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-black/[0.06] bg-[#fafafa]/80 backdrop-blur-xl backdrop-saturate-150",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-[#1d1d1f] transition-opacity hover:opacity-80"
        >
          <Image
            src="/brand/logo.jpg"
            alt="AI on Apple"
            width={40}
            height={40}
            className="rounded-xl object-cover"
            priority
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            AI on Apple
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#6e6e73] transition-colors hover:bg-black/[0.04] hover:text-[#1d1d1f]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={SLACK_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#333336]"
        >
          Join Slack
        </a>
      </div>
    </header>
  );
}
