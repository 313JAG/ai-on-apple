import type { CommunityEvent } from "@/lib/luma/types";

export const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";
export const LUMA_CALENDAR_URL = "https://luma.com/aionapple";
export const LINKEDIN_URL = "https://www.linkedin.com/company/ai-on-apple/";
export const LOGO_SRC = "/brand/logo.jpg";
export const FALLBACK_COVER = "/brand/cover.png";

export type AccentKey =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

/** Space-separated channels so alpha can be applied inline: rgb(var / 0.2). */
const ACCENT_CHANNELS: Record<AccentKey, string> = {
  red: "252 92 101",
  orange: "253 150 68",
  yellow: "254 211 48",
  green: "38 222 129",
  teal: "43 203 186",
  blue: "69 170 242",
  indigo: "75 123 236",
  purple: "165 94 234",
  pink: "253 121 168",
};

/** Darkened variants that stay legible as text on the near-white background. */
const ACCENT_INK: Record<AccentKey, string> = {
  red: "#c8384a",
  orange: "#b3651a",
  yellow: "#8a6800",
  green: "#0f7f49",
  teal: "#0d8073",
  blue: "#1a6cb5",
  indigo: "#3055c0",
  purple: "#7538bd",
  pink: "#bc3f76",
};

export function accent(key: AccentKey, alpha = 1): string {
  return `rgb(${ACCENT_CHANNELS[key]} / ${alpha})`;
}

export function accentInk(key: AccentKey): string {
  return ACCENT_INK[key];
}

/** Stripe order of the vintage six-colour Apple logo, top to bottom. */
export const VINTAGE_STRIPES: AccentKey[] = [
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
  "blue",
];

export const FULL_SPECTRUM: AccentKey[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
];

/** Stable accent per event so colours never shuffle between renders. */
export function accentForKey(value: string, palette: AccentKey[]): AccentKey {
  const sum = Array.from(value).reduce((total, ch) => total + ch.charCodeAt(0), 0);
  return palette[sum % palette.length];
}

export function eventLocationLabel(event: CommunityEvent): string {
  const parts = [event.location.venue, event.location.city].filter(Boolean);
  return parts.join(", ") || "Location to be announced";
}

/** Big day/month numerals for the compact event tiles. */
export function eventDayBadge(event: CommunityEvent): { day: string; month: string } {
  const start = new Date(event.startAt);
  const timeZone = event.timezone || "UTC";

  try {
    const parts = new Intl.DateTimeFormat("en-AU", {
      timeZone,
      day: "numeric",
      month: "short",
    }).formatToParts(start);

    return {
      day: parts.find((part) => part.type === "day")?.value ?? "",
      month: (parts.find((part) => part.type === "month")?.value ?? "").toUpperCase(),
    };
  } catch {
    return { day: "", month: "" };
  }
}
