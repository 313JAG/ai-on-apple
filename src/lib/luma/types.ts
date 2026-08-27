export type EventLocation = {
  city: string | null;
  venue: string | null;
  fullAddress: string | null;
};

export type CommunityEvent = {
  id: string;
  slug: string;
  title: string;
  startAt: string;
  endAt: string | null;
  timezone: string;
  location: EventLocation;
  coverUrl: string | null;
  url: string;
  isFeatured: boolean;
};

export type CommunityEventsResult = {
  events: CommunityEvent[];
  error?: string;
};
