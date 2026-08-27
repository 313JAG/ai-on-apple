import {
  AnnouncementTile,
  CalendarTile,
  CompactEventTile,
  NoEventsTile,
  WideEventTile,
} from "@/components/claude/event-tiles";
import { LUMA_CALENDAR_URL } from "@/components/claude/design-tokens";
import { PillLink } from "@/components/claude/pill-link";
import { SectionHeading } from "@/components/claude/section-heading";
import type { CommunityEvent } from "@/lib/luma/types";
import { cn } from "@/lib/utils";

/** Column spans, written out so Tailwind keeps the classes. */
const SPAN_CLASS: Record<number, string> = {
  2: "sm:col-span-1 lg:col-span-2",
  3: "sm:col-span-1 lg:col-span-3",
  4: "sm:col-span-2 lg:col-span-4",
  6: "sm:col-span-2 lg:col-span-6",
};

/**
 * Rows always add up to six columns, so the mosaic stays asymmetric without
 * leaving holes for any number of events.
 */
const ROW_PATTERNS = [
  [4, 2],
  [2, 4],
  [3, 3],
  [2, 4],
] as const;

function spansFor(count: number): number[] {
  const spans: number[] = [];
  let row = 0;

  while (spans.length < count) {
    if (count - spans.length === 1) {
      spans.push(6);
      break;
    }
    spans.push(...ROW_PATTERNS[row % ROW_PATTERNS.length]);
    row += 1;
  }

  return spans.slice(0, count);
}

export function EventsMosaic({
  events,
  totalCount,
  error,
  className,
}: {
  events: CommunityEvent[];
  totalCount: number;
  error?: string;
  className?: string;
}) {
  // Two standing tiles (calendar + announcements) sit alongside the events, so
  // the mosaic is never a single lonely row.
  const spans = spansFor(events.length + 2);

  return (
    <section
      id="claude-events"
      aria-labelledby="claude-events-title"
      className={cn("px-5 py-20 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="claude-events-title"
          eyebrow="What's on"
          title="Gatherings across the region"
          description="Meetups, workshops and online sessions, pulled live from the community Luma calendar."
          accentKey="orange"
          action={
            <PillLink href={LUMA_CALENDAR_URL} variant="glass" size="sm">
              All events
              <span aria-hidden>↗</span>
            </PillLink>
          }
        />

        {error ? (
          <p
            role="status"
            className="mt-8 rounded-2xl border border-[#f0d9a8] bg-[#fdf6e7] px-4 py-3 text-[14px] text-[#7a5a12]"
          >
            {error}. Showing the latest information we could load.
          </p>
        ) : null}

        {totalCount === 0 ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            <NoEventsTile className="sm:col-span-2 lg:col-span-4" />
            <CalendarTile eventCount={0} className="sm:col-span-2 lg:col-span-2" />
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {events.map((event, index) => {
              const span = spans[index] ?? 3;
              const isWide = span >= 4;

              return isWide ? (
                <WideEventTile
                  key={event.id}
                  event={event}
                  className={cn(SPAN_CLASS[span], "lg:min-h-[16rem]")}
                />
              ) : (
                <CompactEventTile
                  key={event.id}
                  event={event}
                  className={SPAN_CLASS[span]}
                />
              );
            })}

            <CalendarTile
              eventCount={totalCount}
              className={SPAN_CLASS[spans[events.length] ?? 4]}
            />
            <AnnouncementTile
              className={SPAN_CLASS[spans[events.length + 1] ?? 2]}
            />
          </div>
        )}
      </div>
    </section>
  );
}
