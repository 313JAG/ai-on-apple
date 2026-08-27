import { cn } from "@/lib/utils";

const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";
const LUMA_CALENDAR_URL = "https://luma.com/aionapple";
const LINKEDIN_URL = "https://www.linkedin.com/company/ai-on-apple/";

const footerLinks = [
  { href: SLACK_INVITE_URL, label: "Slack" },
  { href: LUMA_CALENDAR_URL, label: "Luma" },
  { href: LINKEDIN_URL, label: "LinkedIn" },
] as const;

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "border-t border-black/[0.06] bg-[#fafafa] px-6 py-10",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-[#6e6e73]">
          © 2026 AI on Apple. All rights reserved.
        </p>

        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer"
        >
          {footerLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#1d1d1f] transition-colors hover:text-[#6e6e73]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
