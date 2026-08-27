import "server-only";

import {
  fetchCalendarBySlug,
  fetchCalendarEvents,
  fetchEventBySlug,
  fetchOfficialEvents,
} from "./client";
import type { CommunityEvent, CommunityEventsResult } from "./types";

type RawGeo = {
  city?: string | null;
  address?: string | null;
  full_address?: string | null;
  short_address?: string | null;
};

type RawEvent = {
  api_id?: string;
  id?: string;
  name?: string;
  start_at?: string;
  end_at?: string | null;
  timezone?: string;
  cover_url?: string | null;
  url?: string;
  geo_address_info?: RawGeo | null;
  geo_address_json?: RawGeo | null;
};

function mapLocation(geo?: RawGeo | null) {
  return {
    city: geo?.city ?? null,
    venue: geo?.address ?? geo?.short_address ?? null,
    fullAddress: geo?.full_address ?? geo?.short_address ?? null,
  };
}

function mapRawEvent(raw: RawEvent, isFeatured = false): CommunityEvent | null {
  if (!raw.name || !raw.start_at || !raw.url) return null;

  const geo = raw.geo_address_info ?? raw.geo_address_json;

  return {
    id: raw.api_id ?? raw.id ?? raw.url,
    slug: raw.url,
    title: raw.name,
    startAt: raw.start_at,
    endAt: raw.end_at ?? null,
    timezone: raw.timezone ?? "UTC",
    location: mapLocation(geo),
    coverUrl: raw.cover_url ?? null,
    url: `https://luma.com/${raw.url}`,
    isFeatured,
  };
}

function extractEventFromEntry(entry: Record<string, unknown>): RawEvent | null {
  if (entry.event && typeof entry.event === "object") {
    return entry.event as RawEvent;
  }

  if (entry.name && entry.start_at) {
    return entry as RawEvent;
  }

  return null;
}

function mapOfficialEntry(entry: Record<string, unknown>): CommunityEvent | null {
  return mapRawEvent(extractEventFromEntry(entry) ?? (entry as RawEvent));
}

function mapPublicEventResponse(data: Record<string, unknown>): CommunityEvent | null {
  const nested = data.data as Record<string, unknown> | undefined;
  const event = (nested?.event ?? data.event ?? data) as RawEvent;
  return mapRawEvent(event);
}

function addEvent(
  eventsBySlug: Map<string, CommunityEvent>,
  event: CommunityEvent | null,
) {
  if (event) {
    eventsBySlug.set(event.slug, event);
  }
}

export async function getCommunityEvents(): Promise<CommunityEventsResult> {
  const calendarSlug = process.env.LUMA_CALENDAR_SLUG ?? "aionapple";
  const featuredSlugs = (process.env.LUMA_FEATURED_EVENT_SLUGS ?? "ney2wxnz")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);
  const apiKey = process.env.LUMA_API_KEY;

  const eventsBySlug = new Map<string, CommunityEvent>();
  let error: string | undefined;

  try {
    const calendarData = await fetchCalendarBySlug(calendarSlug);
    const calendarApiId =
      calendarData?.data?.calendar?.api_id ??
      calendarData?.calendar?.api_id ??
      "cal-Fpea8SymY3WKJlB";

    const entries = await fetchCalendarEvents(calendarApiId);
    for (const entry of entries) {
      addEvent(
        eventsBySlug,
        mapRawEvent(extractEventFromEntry(entry as Record<string, unknown>) ?? {}),
      );
    }

    if (apiKey) {
      const officialEntries = await fetchOfficialEvents(apiKey);
      for (const entry of officialEntries) {
        addEvent(eventsBySlug, mapOfficialEntry(entry as Record<string, unknown>));
      }
    }

    for (const slug of featuredSlugs) {
      const data = await fetchEventBySlug(slug);
      if (!data) continue;

      const mapped = mapPublicEventResponse(data as Record<string, unknown>);
      if (mapped) {
        eventsBySlug.set(mapped.slug, { ...mapped, isFeatured: true });
      }
    }
  } catch {
    error = "Events may be out of date";
  }

  const events = Array.from(eventsBySlug.values()).sort(
    (a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime(),
  );

  if (events.length === 0 && featuredSlugs.length > 0 && !error) {
    error = "Could not load events";
  }

  return { events, error };
}
