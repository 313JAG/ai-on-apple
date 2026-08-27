export const SLACK_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";
export const LUMA_URL = "https://luma.com/aionapple";
export const LINKEDIN_URL = "https://www.linkedin.com/company/ai-on-apple/";
export const LOGO_SRC = "/brand/logo.jpg";
export const FALLBACK_COVER = "/brand/cover.png";

export function formatLocation(city: string | null, venue: string | null) {
  return [venue, city].filter(Boolean).join(", ") || "Location to be announced";
}
