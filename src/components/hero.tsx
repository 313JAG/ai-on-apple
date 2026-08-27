import { cn } from "@/lib/utils";

const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";
const LUMA_CALENDAR_URL = "https://luma.com/aionapple";

export function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#fafafa] px-6 pb-20 pt-16 sm:pb-28 sm:pt-24",
        className,
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div
          className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#ff375f] via-[#ff9500] via-[#34c759] via-[#007aff] to-[#af52de]"
          aria-hidden
        />

        <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl sm:leading-[1.05]">
          AI on Apple
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73] sm:text-xl">
          Exploring AI on Apple platforms for builders, professionals, educators,
          and enterprise leaders across Australia and New Zealand.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={SLACK_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333336] sm:w-auto"
          >
            Join on Slack
          </a>
          <a
            href={LUMA_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1d1d1f] shadow-sm transition-colors hover:bg-black/[0.03] sm:w-auto"
          >
            View events on Luma
          </a>
        </div>
      </div>
    </section>
  );
}
