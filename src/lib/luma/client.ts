import "server-only";

const LUMA_PUBLIC_API = "https://api.lu.ma";
const LUMA_OFFICIAL_API = "https://public-api.luma.com";

const fetchOptions: RequestInit = {
  headers: { Accept: "application/json" },
  next: { revalidate: 1800 },
};

export async function fetchCalendarBySlug(slug: string) {
  try {
    const res = await fetch(`${LUMA_PUBLIC_API}/url?url=${slug}`, fetchOptions);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchCalendarEvents(calendarApiId: string) {
  try {
    const url = `${LUMA_PUBLIC_API}/calendar/get-items?calendar_api_id=${calendarApiId}&period=future`;
    const res = await fetch(url, fetchOptions);
    if (!res.ok) return [];
    const data = await res.json();
    return data.entries ?? [];
  } catch {
    return [];
  }
}

export async function fetchEventBySlug(slug: string) {
  try {
    const res = await fetch(
      `${LUMA_PUBLIC_API}/event/get?event_api_id=${slug}`,
      fetchOptions,
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchOfficialEvents(apiKey: string) {
  try {
    const url = `${LUMA_OFFICIAL_API}/v1/calendars/events/list?access=manage&access=view`;
    const res = await fetch(url, {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        "x-luma-api-key": apiKey,
      },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.entries ?? [];
  } catch {
    return [];
  }
}
