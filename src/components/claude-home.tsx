import { AboutBento } from "@/components/claude/about-bento";
import { CommunityBento } from "@/components/claude/community-bento";
import { EventsMosaic } from "@/components/claude/events-mosaic";
import { IslandHeader } from "@/components/claude/island-header";
import { PrismFooter } from "@/components/claude/prism-footer";
import { PrismHero } from "@/components/claude/prism-hero";
import { getCommunityEvents } from "@/lib/luma/get-events";
import { cn } from "@/lib/utils";

/**
 * Claude variant of the AI on Apple landing page — an alternate visual take
 * kept entirely separate from the current OpenAI-authored components.
 *
 * Renders the full page surface, header through footer, and loads the live
 * Luma calendar on the server.
 */
export async function ClaudeHome({ className }: { className?: string } = {}) {
  const { events, error } = await getCommunityEvents();
  const [nextEvent, ...remainingEvents] = events;

  return (
    <div className={cn("relative min-h-screen bg-[#fafafa] text-[#1d1d1f]", className)}>
      <IslandHeader />
      <main>
        <PrismHero featuredEvent={nextEvent} eventCount={events.length} />
        <EventsMosaic
          events={remainingEvents}
          totalCount={events.length}
          error={error}
        />
        <CommunityBento />
        <AboutBento />
      </main>
      <PrismFooter />
    </div>
  );
}

export default ClaudeHome;
