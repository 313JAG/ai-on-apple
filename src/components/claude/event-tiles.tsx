import Image from "next/image";

import {
  accent,
  accentForKey,
  accentInk,
  eventDayBadge,
  eventLocationLabel,
  FALLBACK_COVER,
  FULL_SPECTRUM,
  LUMA_CALENDAR_URL,
  SLACK_INVITE_URL,
} from "@/components/claude/design-tokens";
import { PillLink } from "@/components/claude/pill-link";
import { PrismTile, TileLabel } from "@/components/claude/prism-tile";
import { SpectrumRule } from "@/components/claude/rainbow-marks";
import { formatEventDateTime } from "@/lib/luma/format";
import type { CommunityEvent } from "@/lib/luma/types";
import { cn } from "@/lib/utils";

function coverFor(event: CommunityEvent) {
  return {
    src: event.coverUrl || FALLBACK_COVER,
    unoptimized: Boolean(event.coverUrl?.includes("lumacdn")),
  };
}

/** Covers the whole tile so the entire surface is one link. */
function TileOverlayLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10 rounded-[26px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3]"
    >
      <span className="sr-only">{label}</span>
    </a>
  );
}

function ViewOnLuma({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className="inline-flex items-center gap-1 text-[14px] font-medium"
      style={{ color }}
    >
      View on Luma
      <span className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none">
        →
      </span>
    </span>
  );
}

/**
 * Hero companion tile: the next event, presented as a spatial card floating in
 * front of the abstract backdrop.
 */
export function SpotlightEventTile({
  event,
  className,
}: {
  event: CommunityEvent;
  className?: string;
}) {
  const accentKey = accentForKey(event.id, FULL_SPECTRUM);
  const cover = coverFor(event);

  return (
    <PrismTile
      as="article"
      accentKey={accentKey}
      className={cn("p-2", className)}
    >
      <TileOverlayLink href={event.url} label={`${event.title} — view on Luma`} />

      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#f1f1f4]">
        <Image
          src={cover.src}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 420px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
          unoptimized={cover.unoptimized}
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1d1d1f] shadow-sm backdrop-blur-md">
          <span
            aria-hidden
            className="size-1.5 rounded-full"
            style={{ background: accent(accentKey, 1) }}
          />
          {event.isFeatured ? "Featured" : "Next up"}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-5 sm:px-5 sm:pb-5">
        <time
          dateTime={event.startAt}
          className="text-[13px] font-medium"
          style={{ color: accentInk(accentKey) }}
        >
          {formatEventDateTime(event)}
        </time>
        <h3 className="mt-2 text-[19px] font-semibold leading-snug tracking-[-0.015em] text-[#1d1d1f]">
          {event.title}
        </h3>
        <p className="mt-1.5 text-[14px] text-[#6e6e73]">{eventLocationLabel(event)}</p>
        <div className="mt-auto pt-5">
          <ViewOnLuma color={accentInk(accentKey)} />
        </div>
      </div>
    </PrismTile>
  );
}

/** Wide bento tile: cover on the left, details on the right. */
export function WideEventTile({
  event,
  className,
}: {
  event: CommunityEvent;
  className?: string;
}) {
  const accentKey = accentForKey(event.id, FULL_SPECTRUM);
  const cover = coverFor(event);

  return (
    <PrismTile as="article" accentKey={accentKey} className={cn("sm:flex-row", className)}>
      <TileOverlayLink href={event.url} label={`${event.title} — view on Luma`} />

      <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-[#f1f1f4] sm:aspect-auto sm:w-[42%]">
        <Image
          src={cover.src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 340px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
          unoptimized={cover.unoptimized}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <TileLabel accentKey={accentKey}>
          {event.isFeatured ? "Featured" : "Upcoming"}
        </TileLabel>
        <h3 className="mt-4 text-[21px] font-semibold leading-snug tracking-[-0.02em] text-[#1d1d1f]">
          {event.title}
        </h3>
        <time
          dateTime={event.startAt}
          className="mt-2.5 block text-[14px] font-medium"
          style={{ color: accentInk(accentKey) }}
        >
          {formatEventDateTime(event)}
        </time>
        <p className="mt-1.5 text-[14px] text-[#6e6e73]">{eventLocationLabel(event)}</p>
        <div className="mt-auto pt-6">
          <ViewOnLuma color={accentInk(accentKey)} />
        </div>
      </div>
    </PrismTile>
  );
}

/** Compact bento tile: oversized date numerals instead of a cover image. */
export function CompactEventTile({
  event,
  className,
}: {
  event: CommunityEvent;
  className?: string;
}) {
  const accentKey = accentForKey(event.id, FULL_SPECTRUM);
  const badge = eventDayBadge(event);

  return (
    <PrismTile as="article" accentKey={accentKey} className={cn("p-6 sm:p-7", className)}>
      <TileOverlayLink href={event.url} label={`${event.title} — view on Luma`} />

      <div className="flex items-start gap-4">
        <div
          className="flex size-[58px] shrink-0 flex-col items-center justify-center rounded-2xl"
          style={{
            background: accent(accentKey, 0.14),
            border: `1px solid ${accent(accentKey, 0.3)}`,
            color: accentInk(accentKey),
          }}
        >
          <span className="text-[20px] font-semibold leading-none tracking-[-0.02em]">
            {badge.day}
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]">
            {badge.month}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.015em] text-[#1d1d1f]">
            {event.title}
          </h3>
          <p className="mt-1 text-[13px] text-[#6e6e73]">{eventLocationLabel(event)}</p>
        </div>
      </div>

      <time
        dateTime={event.startAt}
        className="mt-5 block text-[13px] font-medium text-[#6e6e73]"
      >
        {formatEventDateTime(event)}
      </time>

      <div className="mt-auto pt-5">
        <ViewOnLuma color={accentInk(accentKey)} />
      </div>
    </PrismTile>
  );
}

/** Always-present tile pointing at the full Luma calendar. */
export function CalendarTile({
  eventCount,
  className,
}: {
  eventCount: number;
  className?: string;
}) {
  return (
    <PrismTile accentKey="indigo" className={cn("justify-between p-6 sm:p-7", className)}>
      <div>
        <TileLabel accentKey="indigo">Calendar</TileLabel>
        <h3 className="mt-4 text-[19px] font-semibold leading-snug tracking-[-0.02em] text-[#1d1d1f]">
          Every session, one place
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">
          {eventCount > 0
            ? "Subscribe on Luma and new meetups, workshops and online sessions land in your calendar."
            : "Subscribe on Luma to be first to know when the next session is announced."}
        </p>
      </div>

      <div className="mt-6">
        <SpectrumRule className="mb-6 rounded-full opacity-80" />
        <PillLink href={LUMA_CALENDAR_URL} variant="glass" size="sm">
          Open Luma
          <span aria-hidden>↗</span>
        </PillLink>
      </div>
    </PrismTile>
  );
}

/** Companion tile that balances the mosaic and points back at Slack. */
export function AnnouncementTile({ className }: { className?: string }) {
  return (
    <PrismTile accentKey="pink" className={cn("justify-between p-6 sm:p-7", className)}>
      <div>
        <TileLabel accentKey="pink">Heard here first</TileLabel>
        <h3 className="mt-4 text-[19px] font-semibold leading-snug tracking-[-0.02em] text-[#1d1d1f]">
          New sessions start as a Slack message
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">
          Dates, venues and calls for speakers are shared in the community
          before they reach the calendar.
        </p>
      </div>

      <div className="mt-6">
        <PillLink href={SLACK_INVITE_URL} size="sm">
          Join on Slack
          <span aria-hidden>↗</span>
        </PillLink>
      </div>
    </PrismTile>
  );
}

/** Shown when the Luma calendar has nothing scheduled. */
export function NoEventsTile({ className }: { className?: string }) {
  return (
    <PrismTile accentKey="teal" still className={cn("p-7 sm:p-9", className)}>
      <TileLabel accentKey="teal">Between sessions</TileLabel>
      <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
        Nothing on the calendar right now
      </h3>
      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[#6e6e73]">
        The next meetup is usually announced in Slack first. Join the community
        or follow the Luma calendar so you do not miss it.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <PillLink href={SLACK_INVITE_URL} size="sm">
          Join on Slack
        </PillLink>
        <PillLink href={LUMA_CALENDAR_URL} variant="glass" size="sm">
          View Luma
        </PillLink>
      </div>
    </PrismTile>
  );
}
