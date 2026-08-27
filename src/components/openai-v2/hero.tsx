import Image from "next/image";

import { formatEventDateTime } from "@/lib/luma/format";
import type { CommunityEvent } from "@/lib/luma/types";

import {
  FALLBACK_COVER,
  formatLocation,
  LUMA_URL,
  SLACK_URL,
} from "./constants";
import { SpectrumBars, SpectrumRibbon } from "./spectrum-ribbon";

const buttonFocus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769d2]";

function FeaturedEvent({ event }: { event: CommunityEvent }) {
  const cover = event.coverUrl || FALLBACK_COVER;

  return (
    <article className="relative min-w-0 overflow-hidden rounded-[1.75rem] bg-[#171717] text-white shadow-[0_30px_80px_-36px_rgba(30,24,17,0.7)] sm:rounded-[2rem]">
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block min-w-0 rounded-[inherit] ${buttonFocus}`}
        aria-label={`${event.title}, view event on Luma`}
      >
        <div className="relative aspect-[16/9] min-h-40 overflow-hidden bg-[#292929]">
          <Image
            src={cover}
            alt=""
            fill
            priority
            unoptimized={Boolean(event.coverUrl?.includes("lumacdn"))}
            sizes="(max-width: 1024px) 100vw, 430px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          <span className="absolute left-4 top-4 inline-flex min-h-8 items-center gap-2 rounded-full bg-black/65 px-3 text-[12px] font-semibold backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-[#70d67e]" aria-hidden />
            Next on Luma
          </span>
          <span className="absolute bottom-4 right-4 text-[12px] font-medium text-white/80">
            01 / LIVE CALENDAR
          </span>
        </div>

        <div className="p-5 sm:p-7">
          <time
            dateTime={event.startAt}
            className="block text-[13px] font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#f3bc5c]"
          >
            {formatEventDateTime(event)}
          </time>
          <h2 className="mt-3 text-[clamp(1.4rem,7vw,2rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
            {event.title}
          </h2>
          <div className="mt-5 flex min-w-0 items-end justify-between gap-4 border-t border-white/15 pt-4">
            <p className="min-w-0 text-[15px] leading-snug text-white/65">
              {formatLocation(event.location.city, event.location.venue)}
            </p>
            <span
              aria-hidden
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-xl text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
            >
              ↗
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

function EmptyEvent() {
  return (
    <div className="rounded-[1.75rem] bg-[#171717] p-6 text-white shadow-[0_30px_80px_-36px_rgba(30,24,17,0.7)] sm:rounded-[2rem] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#f3bc5c]">
          Calendar
        </span>
        <SpectrumBars />
      </div>
      <h2 className="mt-14 text-[clamp(1.6rem,8vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
        The next gathering is taking shape.
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-white/65">
        Follow the calendar or join Slack to hear when the next session lands.
      </p>
      <a
        href={LUMA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex min-h-11 items-center rounded-full bg-white px-5 text-[14px] font-semibold text-black ${buttonFocus}`}
      >
        Follow on Luma ↗
      </a>
    </div>
  );
}

export function EditorialHero({
  featuredEvent,
}: {
  featuredEvent?: CommunityEvent;
}) {
  return (
    <section
      id="openai-top"
      aria-labelledby="openai-hero-title"
      className="relative isolate scroll-mt-28 overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24"
    >
      <SpectrumRibbon />
      <div className="mx-auto grid max-w-6xl min-w-0 gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="min-w-0 lg:col-span-7 lg:pr-6">
          <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#4f4b45]">
            <SpectrumBars />
            Australia · New Zealand
          </p>
          <h1
            id="openai-hero-title"
            className="mt-6 max-w-[9ch] text-[clamp(3.15rem,15.7vw,5.8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#171717] sm:mt-8 sm:max-w-[8ch] lg:text-[6.5rem]"
          >
            AI, made for Apple people.
          </h1>
          <p className="mt-8 max-w-[34rem] text-[clamp(1.05rem,4.7vw,1.35rem)] font-medium leading-[1.45] tracking-[-0.015em] text-[#34322f]">
            A community for people building, teaching and shipping AI across
            Apple platforms.
          </p>
          <p className="mt-3 max-w-[32rem] text-[15px] leading-relaxed text-[#68645e] sm:text-[17px]">
            Meet the builders, educators and leaders moving on-device
            intelligence from a good idea to real products across ANZ.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href={SLACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[#1769d2] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#0d57b7] ${buttonFocus}`}
            >
              Join the community
            </a>
            <a
              href="#openai-events"
              className={`inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 bg-white/50 px-6 text-[15px] font-semibold text-[#171717] backdrop-blur-md transition-colors hover:bg-white/80 ${buttonFocus}`}
            >
              See what&apos;s on ↓
            </a>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <p className="mb-3 flex items-center justify-between px-1 text-[12px] font-semibold uppercase tracking-[0.11em] text-[#59554f]">
            <span>Now showing</span>
            <span>{featuredEvent ? "Upcoming" : "Stand by"}</span>
          </p>
          {featuredEvent ? <FeaturedEvent event={featuredEvent} /> : <EmptyEvent />}
        </div>
      </div>
    </section>
  );
}
