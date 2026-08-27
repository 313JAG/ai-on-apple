import Image from "next/image";

import {
  accent,
  accentInk,
  LINKEDIN_URL,
  LOGO_SRC,
  LUMA_CALENDAR_URL,
  SLACK_INVITE_URL,
} from "@/components/claude/design-tokens";
import { SpotlightEventTile } from "@/components/claude/event-tiles";
import { ArrowLink, PillLink } from "@/components/claude/pill-link";
import { PrismField } from "@/components/claude/prism-field";
import { PrismTile, TileLabel } from "@/components/claude/prism-tile";
import { StripeMark } from "@/components/claude/rainbow-marks";
import type { CommunityEvent } from "@/lib/luma/types";

const FACTS = [
  { label: "Free to join", accentKey: "green" as const },
  { label: "Slack + in person", accentKey: "blue" as const },
  { label: "Australia & New Zealand", accentKey: "purple" as const },
];

/**
 * Asymmetric hero: type on the left, the next live event floating on the right,
 * both sitting over the abstract prism backdrop.
 */
export function PrismHero({
  featuredEvent,
  eventCount,
}: {
  featuredEvent?: CommunityEvent;
  eventCount: number;
}) {
  return (
    <section
      id="claude-top"
      aria-labelledby="claude-hero-title"
      className="relative isolate overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28"
    >
      <PrismField />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <Image
              src={LOGO_SRC}
              alt="AI on Apple community logo"
              width={72}
              height={72}
              className="size-[64px] rounded-[20px] object-cover shadow-[0_1px_2px_rgb(0_0_0/0.06),0_18px_36px_-18px_rgb(0_0_0/0.4)] ring-1 ring-black/[0.06] sm:size-[72px] sm:rounded-[22px]"
              priority
            />
            <span className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/70 px-3.5 py-2 text-[12px] font-medium text-[#1d1d1f] shadow-[inset_0_1px_0_rgb(255_255_255/0.9)] backdrop-blur-xl">
              <StripeMark />
              ANZ community
            </span>
          </div>

          <h1
            id="claude-hero-title"
            className="mt-8 text-[2.9rem] font-semibold leading-[1.03] tracking-[-0.045em] text-[#1d1d1f] sm:text-[4rem] lg:text-[4.5rem]"
          >
            AI on{" "}
            <span className="relative whitespace-nowrap">
              Apple
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full sm:-bottom-1.5 sm:h-[7px]"
                style={{
                  background: `linear-gradient(90deg, ${accent("red", 0.9)}, ${accent(
                    "orange",
                    0.9,
                  )}, ${accent("yellow", 0.95)}, ${accent("green", 0.9)}, ${accent(
                    "teal",
                    0.9,
                  )}, ${accent("blue", 0.9)}, ${accent("purple", 0.9)})`,
                }}
              />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[17px] font-medium leading-relaxed text-[#1d1d1f] sm:text-[19px]">
            A community for people building, teaching and shipping AI on Apple
            platforms.
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#6e6e73] sm:text-[17px]">
            Builders, professionals, educators and enterprise leaders across
            Australia and New Zealand — swapping notes on Apple Intelligence,
            on-device models and the work of getting things into production.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PillLink href={SLACK_INVITE_URL} className="w-full sm:w-auto">
              Join the Slack
              <span aria-hidden>↗</span>
            </PillLink>
            <PillLink
              href={LUMA_CALENDAR_URL}
              variant="glass"
              className="w-full sm:w-auto"
            >
              Browse events
            </PillLink>
            <ArrowLink
              href={LINKEDIN_URL}
              className="justify-center py-2 text-[#1d1d1f] sm:ml-2 sm:justify-start"
            >
              LinkedIn
            </ArrowLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/[0.07] pt-6">
            {FACTS.map(({ label, accentKey }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[13px] font-medium text-[#6e6e73]"
              >
                <span
                  aria-hidden
                  className="size-1.5 rounded-full"
                  style={{ background: accent(accentKey, 1) }}
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            {/* Layered card peeking out behind the spotlight tile */}
            <div
              aria-hidden
              className="absolute -right-4 -top-5 hidden h-full w-full rounded-[26px] border border-white/70 shadow-[0_20px_50px_-34px_rgb(0_0_0/0.35)] backdrop-blur-sm sm:block"
              style={{
                background: `linear-gradient(135deg, ${accent("blue", 0.16)}, ${accent(
                  "purple",
                  0.14,
                )} 48%, ${accent("pink", 0.12)})`,
              }}
            />
            {featuredEvent ? (
              <SpotlightEventTile event={featuredEvent} className="relative" />
            ) : (
              <PrismTile accentKey="teal" still className="relative p-7">
                <TileLabel accentKey="teal">Next up</TileLabel>
                <h2 className="mt-4 text-[20px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                  The calendar is warming up
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">
                  New sessions are posted on Luma and announced in Slack first.
                </p>
                <div className="mt-6">
                  <PillLink href={LUMA_CALENDAR_URL} variant="glass" size="sm">
                    Follow on Luma
                  </PillLink>
                </div>
              </PrismTile>
            )}

            {eventCount > 1 ? (
              <a
                href="#claude-events"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-full border border-black/[0.07] bg-white/70 px-5 py-3 text-[13px] font-medium text-[#1d1d1f] shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_1px_2px_rgb(0_0_0/0.04)] backdrop-blur-xl transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]"
              >
                <span style={{ color: accentInk("indigo") }}>
                  {eventCount} events on the calendar
                </span>
                <span aria-hidden className="text-[#6e6e73]">
                  ↓
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
