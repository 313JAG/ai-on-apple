import type { CommunityEvent } from "@/lib/luma/types";

import { CommunityBento } from "./community-bento";
import { EventsBento } from "./events-bento";
import { OpenAIFooter } from "./footer";
import { OpenAIHeader } from "./header";
import { EditorialHero } from "./hero";

export function OpenAIV2Home({
  events,
  error,
}: {
  events: CommunityEvent[];
  error?: string;
}) {
  const [featuredEvent, ...additionalEvents] = events;

  return (
    <div className="min-h-screen min-w-0 overflow-clip bg-[#f7f4ee] text-[#171717]">
      <OpenAIHeader />
      <main>
        <EditorialHero featuredEvent={featuredEvent} />
        <EventsBento
          events={additionalEvents}
          totalCount={events.length}
          error={error}
        />
        <CommunityBento />
      </main>
      <OpenAIFooter />
    </div>
  );
}
