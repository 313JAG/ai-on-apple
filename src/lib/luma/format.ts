import type { CommunityEvent } from "./types";

function getTimezoneAbbreviation(date: Date, timezone: string): string {
  try {
    const parts = new Intl.DateTimeFormat("en-AU", {
      timeZone: timezone,
      timeZoneName: "short",
    }).formatToParts(date);
    return parts.find((part) => part.type === "timeZoneName")?.value ?? "";
  } catch {
    return "";
  }
}

function formatDatePart(date: Date, timezone: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  const year = parts.find((part) => part.type === "year")?.value ?? "";

  return `${weekday} ${day} ${month} ${year}`;
}

function formatTime(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .toLowerCase();
}

export function formatEventDateTime(event: CommunityEvent): string {
  const start = new Date(event.startAt);
  const timezone = event.timezone || "UTC";
  const datePart = formatDatePart(start, timezone);
  const tz = getTimezoneAbbreviation(start, timezone);

  if (!event.endAt) {
    const time = formatTime(start, timezone);
    return `${datePart} · ${time}${tz ? ` ${tz}` : ""}`;
  }

  const end = new Date(event.endAt);
  const startTime = formatTime(start, timezone);
  const endTime = formatTime(end, timezone);

  return `${datePart} · ${startTime}–${endTime}${tz ? ` ${tz}` : ""}`;
}
