import Image from "next/image";

import { cn } from "@/lib/utils";

const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";
const LUMA_CALENDAR_URL = "https://luma.com/aionapple";

export function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden px-6 pb-24 pt-20 sm:pb-32 sm:pt-28",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="hero-aurora absolute -inset-x-24 -top-32 h-[42rem]" />
        <div className="hero-grid absolute inset-0" />
        <div className="hero-fade absolute inset-x-0 bottom-0 h-64" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-4 py-1.5 text-xs font-medium text-[#1d1d1f] shadow-sm backdrop-blur">
          <span className="rainbow-dot size-2" aria-hidden />
          Australia &amp; New Zealand
        </span>

        <Image
          src="/brand/logo.jpg"
          alt="AI on Apple"
          width={88}
          height={88}
          className="mt-8 rounded-3xl shadow-lg shadow-black/5"
          priority
        />

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-7xl sm:leading-[1.02]">
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
            className="inline-flex w-full items-center justify-center rounded-full bg-[#1d1d1f] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#333336] sm:w-auto"
          >
            Join on Slack
          </a>
          <a
            href={LUMA_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white/80 px-7 py-3.5 text-sm font-medium text-[#1d1d1f] shadow-sm backdrop-blur transition-colors hover:bg-white sm:w-auto"
          >
            View events on Luma
          </a>
        </div>

        <div className="rainbow-line mt-14 w-40 opacity-80" aria-hidden />
      </div>
    </section>
  );
}
