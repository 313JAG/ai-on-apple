import Image from "next/image";

import { formatEventDateTime } from "@/lib/luma/format";
import type { CommunityEvent } from "@/lib/luma/types";

import {
  FALLBACK_COVER,
  formatLocation,
  LUMA_URL,
  SLACK_URL,
} from "./constants";
import { SpectrumBars } from "./spectrum-ribbon";

const layoutClasses = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

const accents = [
  { surface: "bg-[#fffdf9]", ink: "text-[#1769d2]", marker: "bg-[#1769d2]" },
  { surface: "bg-[#f0b94d]", ink: "text-[#342304]", marker: "bg-[#342304]" },
  { surface: "bg-[#2f6f67]", ink: "text-white", marker: "bg-[#f2c15c]" },
  { surface: "bg-[#e5d9ef]", ink: "text-[#563476]", marker: "bg-[#8a55b2]" },
] as const;

function eventDateParts(event: CommunityEvent) {
  const date = new Date(event.startAt);
  const options = { timeZone: event.timezone || "UTC" };

  return {
    day: new Intl.DateTimeFormat("en-AU", { ...options, day: "2-digit" }).format(
      date,
    ),
    month: new Intl.DateTimeFormat("en-AU", {
      ...options,
      month: "short",
    })
      .format(date)
      .toUpperCase(),
  };
}

function EventTile({ event, index }: { event: CommunityEvent; index: number }) {
  const accent = accents[index % accents.length];
  const date = eventDateParts(event);
  const imageSrc = event.coverUrl || FALLBACK_COVER;
  const isMediaTile = index % 3 === 0;

  return (
    <article
      className={`group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-black/[0.08] shadow-[0_1px_0_rgba(255,255,255,0.5)] ${accent.surface} ${layoutClasses[index % layoutClasses.length]}`}
    >
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${event.title}, view on Luma`}
        className="flex h-full min-h-[19rem] min-w-0 flex-col rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769d2] sm:min-h-[21rem]"
      >
        {isMediaTile ? (
          <div className="relative min-h-44 flex-1 overflow-hidden bg-[#ddd8cf] sm:min-h-52">
            <Image
              src={imageSrc}
              alt=""
              fill
              unoptimized={Boolean(event.coverUrl?.includes("lumacdn"))}
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
              <time
                dateTime={event.startAt}
                className="text-[13px] font-semibold leading-relaxed text-white/75"
              >
                {formatEventDateTime(event)}
              </time>
              <h3 className="mt-2 max-w-xl text-[clamp(1.35rem,6vw,2rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                {event.title}
              </h3>
            </div>
          </div>
        ) : (
          <div className={`flex h-full flex-1 flex-col p-6 sm:p-8 ${accent.ink}`}>
            <div className="flex items-start justify-between gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] opacity-75">
                {event.isFeatured ? "Featured" : `Event ${String(index + 2).padStart(2, "0")}`}
              </span>
              <span className="text-right leading-none">
                <span className="block text-[3.25rem] font-semibold tracking-[-0.07em]">
                  {date.day}
                </span>
                <span className="mt-1 block text-[12px] font-bold tracking-[0.14em]">
                  {date.month}
                </span>
              </span>
            </div>
            <h3 className="mt-10 max-w-lg text-[clamp(1.5rem,7vw,2.35rem)] font-semibold leading-[1.04] tracking-[-0.045em]">
              {event.title}
            </h3>
            <time
              dateTime={event.startAt}
              className="mt-4 block text-[15px] font-medium leading-relaxed opacity-80"
            >
              {formatEventDateTime(event)}
            </time>
          </div>
        )}

        <div
          className={`flex min-w-0 items-center justify-between gap-4 border-t border-black/10 px-5 py-4 text-[15px] sm:px-7 ${isMediaTile ? "bg-[#fffdf9] text-[#3e3b37]" : accent.ink}`}
        >
          <span className="min-w-0 truncate">
            {formatLocation(event.location.city, event.location.venue)}
          </span>
          <span
            aria-hidden
            className={`size-2 shrink-0 rounded-full ${accent.marker}`}
          />
        </div>
      </a>
    </article>
  );
}

function CalendarTile({ hasEvents }: { hasEvents: boolean }) {
  return (
    <article className="flex min-h-[19rem] min-w-0 flex-col justify-between rounded-[1.75rem] border border-black/10 bg-[#fffdf9] p-6 lg:col-span-5 sm:p-8">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6b665f]">
            Full calendar
          </span>
          <SpectrumBars />
        </div>
        <h3 className="mt-10 max-w-sm text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-[2.2rem]">
          {hasEvents ? "Keep every gathering in view." : "Be first to see what lands next."}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-[#68645e]">
          Subscribe on Luma for new meetups, workshops and online sessions.
        </p>
      </div>
      <a
        href={LUMA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex min-h-11 w-fit items-center rounded-full bg-[#171717] px-5 text-[14px] font-semibold text-white hover:bg-[#353535] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769d2]"
      >
        Open Luma ↗
      </a>
    </article>
  );
}

export function EventsBento({
  events,
  totalCount,
  error,
}: {
  events: CommunityEvent[];
  totalCount: number;
  error?: string;
}) {
  return (
    <section
      id="openai-events"
      aria-labelledby="openai-events-title"
      className="scroll-mt-28 bg-[#ebe6dc] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#615d56]">
              The calendar
            </p>
            <h2
              id="openai-events-title"
              className="mt-3 text-[clamp(2.5rem,12vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#171717]"
            >
              Good people.
              <br />
              Useful rooms.
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-[#615d56] lg:col-span-4 lg:pb-1">
            Hands-on sessions and honest conversations for the people putting AI
            to work on Apple platforms.
          </p>
        </div>

        {error ? (
          <div
            role="status"
            className="mt-8 rounded-2xl border border-[#b77819]/25 bg-[#fff4d8] px-5 py-4 text-[15px] leading-relaxed text-[#694508]"
          >
            {error}. Check Luma for the latest schedule.
          </div>
        ) : null}

        {events.length === 0 ? (
          <div className="mt-10 rounded-[1.75rem] border border-black/10 bg-[#2f6f67] p-6 text-white sm:p-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/65">
              {totalCount > 0 ? "That’s the next one" : "Between sessions"}
            </p>
            <h3 className="mt-4 max-w-xl text-[1.7rem] font-semibold leading-tight tracking-[-0.035em] sm:text-[2.2rem]">
              {totalCount > 0
                ? "More dates are being put together."
                : "Nothing is scheduled right now, but the conversation keeps going."}
            </h3>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/75">
              Join Slack for announcements and calls for speakers.
            </p>
            <a
              href={SLACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-11 items-center rounded-full bg-white px-5 text-[14px] font-semibold text-[#214e49] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join Slack ↗
            </a>
          </div>
        ) : null}

        <div className="mt-10 grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-12">
          {events.map((event, index) => (
            <EventTile key={event.id} event={event} index={index} />
          ))}
          <CalendarTile hasEvents={totalCount > 0} />
        </div>
      </div>
    </section>
  );
}
