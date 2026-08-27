import {
  accent,
  accentInk,
  LINKEDIN_URL,
  SLACK_INVITE_URL,
  type AccentKey,
} from "@/components/claude/design-tokens";
import { ArrowLink, PillLink } from "@/components/claude/pill-link";
import { PrismTile, TileLabel } from "@/components/claude/prism-tile";
import { cn } from "@/lib/utils";

const TOPICS: { label: string; accentKey: AccentKey }[] = [
  { label: "Apple Intelligence", accentKey: "blue" },
  { label: "On-device models", accentKey: "green" },
  { label: "Foundation Models", accentKey: "purple" },
  { label: "Core ML & MLX", accentKey: "orange" },
  { label: "Shipping to production", accentKey: "pink" },
];

const THREAD_ROWS: { accentKey: AccentKey; widths: [string, string] }[] = [
  { accentKey: "green", widths: ["64%", "34%"] },
  { accentKey: "orange", widths: ["44%", "52%"] },
  { accentKey: "purple", widths: ["72%", "22%"] },
];

/** Abstract stand-in for a Slack thread: avatar dot plus two message bars. */
function ThreadSketch() {
  return (
    <div
      aria-hidden
      className="mt-8 space-y-3 rounded-[20px] border border-white/10 bg-white/[0.04] p-4 sm:p-5"
    >
      {THREAD_ROWS.map(({ accentKey, widths }) => (
        <div key={accentKey} className="flex items-center gap-3">
          <span
            className="size-6 shrink-0 rounded-lg"
            style={{
              background: `linear-gradient(140deg, ${accent(accentKey, 0.95)}, ${accent(
                accentKey,
                0.45,
              )})`,
            }}
          />
          <span className="flex flex-1 items-center gap-2">
            <span
              className="h-2.5 rounded-full bg-white/16"
              style={{ width: widths[0] }}
            />
            <span
              className="h-2.5 rounded-full bg-white/10"
              style={{ width: widths[1] }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

/** Slack invite as the loudest tile on the page, balanced by two quiet tiles. */
export function CommunityBento({ className }: { className?: string }) {
  return (
    <section
      id="claude-slack"
      aria-labelledby="claude-slack-title"
      className={cn("px-5 py-4 sm:px-8", className)}
    >
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        <PrismTile
          tone="dark"
          accentKey="pink"
          still
          className="p-7 sm:col-span-2 sm:p-10 lg:col-span-4"
        >
          <TileLabel accentKey="pink" tone="dark">
            The Slack
          </TileLabel>

          <h2
            id="claude-slack-title"
            className="mt-5 max-w-lg text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.25rem]"
          >
            Where the conversation actually happens
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-[16px]">
            Ask a question, share a build, post a paper, find a collaborator.
            A welcoming room for anyone curious about what Apple platforms make
            possible — from first prototype to enterprise rollout.
          </p>

          <ThreadSketch />

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {TOPICS.map(({ label, accentKey }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-white/80"
              >
                <span
                  aria-hidden
                  className="size-1.5 rounded-full"
                  style={{ background: accent(accentKey, 1) }}
                />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-9">
            <PillLink href={SLACK_INVITE_URL} variant="onDark">
              Join on Slack
              <span aria-hidden>↗</span>
            </PillLink>
          </div>
        </PrismTile>

        <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1 lg:gap-5">
          <PrismTile accentKey="green" still className="justify-between p-6 sm:p-7">
            <div>
              <TileLabel accentKey="green">Open door</TileLabel>
              <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                Free, and no gatekeeping
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">
                Students, indie developers, designers, educators and enterprise
                teams all share the same room.
              </p>
            </div>
            <p
              className="mt-6 text-[13px] font-medium"
              style={{ color: accentInk("green") }}
            >
              Everyone welcome
            </p>
          </PrismTile>

          <PrismTile accentKey="indigo" className="justify-between p-6 sm:p-7">
            <div>
              <TileLabel accentKey="indigo">LinkedIn</TileLabel>
              <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                Follow the community page
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">
                Event recaps, announcements and highlights from across the
                region.
              </p>
            </div>
            <ArrowLink
              href={LINKEDIN_URL}
              color={accentInk("indigo")}
              className="mt-6"
            >
              Follow on LinkedIn
            </ArrowLink>
          </PrismTile>
        </div>
      </div>
    </section>
  );
}
