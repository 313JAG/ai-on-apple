import { EventCard } from "@/components/event-card";
import { formatEventDateTime } from "@/lib/luma/format";
import { getCommunityEvents } from "@/lib/luma/get-events";
import { cn } from "@/lib/utils";

const LUMA_CALENDAR_URL = "https://luma.com/aionapple";
const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";

export async function EventsSection({ className }: { className?: string }) {
  const { events, error } = await getCommunityEvents();

  return (
    <section
      id="events"
      className={cn("px-6 py-20 sm:py-24", className)}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-[#6e6e73]">
              Upcoming
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
              Events
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-[#6e6e73]">
              Meetups, workshops, and community sessions across Australia and New
              Zealand.
            </p>
          </div>
          <a
            href={LUMA_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-[#1d1d1f] shadow-sm transition-colors hover:bg-black/[0.03]"
          >
            See all on Luma
          </a>
        </div>

        {error ? (
          <div
            role="status"
            className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
          >
            {error}. Showing the latest information we could load.
          </div>
        ) : null}

        {events.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                formattedDate={formatEventDateTime(event)}
                location={event.location}
                coverUrl={event.coverUrl}
                href={event.url}
                isFeatured={event.isFeatured}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-black/[0.06] bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-medium text-[#1d1d1f]">
              No upcoming events yet
            </p>
            <p className="mt-2 text-[#6e6e73]">
              Join Slack for announcements, or check Luma for the full calendar.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333336]"
              >
                Join on Slack
              </a>
              <a
                href={LUMA_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-[#1d1d1f] transition-colors hover:bg-black/[0.03]"
              >
                View on Luma
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
