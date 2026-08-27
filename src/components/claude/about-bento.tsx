import {
  accent,
  accentInk,
  type AccentKey,
} from "@/components/claude/design-tokens";
import { PrismTile, TileLabel } from "@/components/claude/prism-tile";
import { SectionHeading } from "@/components/claude/section-heading";
import { cn } from "@/lib/utils";

const PILLARS: {
  index: string;
  title: string;
  body: string;
  accentKey: AccentKey;
}[] = [
  {
    index: "01",
    title: "Build",
    body: "Prototypes, apps and workflows on Apple platforms, with practical guidance from people already doing the work.",
    accentKey: "red",
  },
  {
    index: "02",
    title: "Learn",
    body: "Keep pace with Apple Intelligence, on-device models and the tooling that moves an idea into production.",
    accentKey: "yellow",
  },
  {
    index: "03",
    title: "Connect",
    body: "Meet builders, educators and enterprise leaders exploring what AI makes possible on Apple hardware.",
    accentKey: "teal",
  },
];

/** Quarter arcs echoing the hero geometry, tucked into a tile corner. */
function CornerArcs({ accentKey }: { accentKey: AccentKey }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute -bottom-14 -right-14 -z-10 size-40"
    >
      {[1, 0.72, 0.46].map((scale, index) => (
        <span
          key={scale}
          className="absolute bottom-0 right-0 rounded-full"
          style={{
            width: `${10 * scale}rem`,
            height: `${10 * scale}rem`,
            border: `1.5px solid ${accent(accentKey, 0.34 - index * 0.06)}`,
          }}
        />
      ))}
    </span>
  );
}

export function AboutBento({ className }: { className?: string }) {
  return (
    <section
      id="claude-about"
      aria-labelledby="claude-about-title"
      className={cn("px-5 py-20 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="claude-about-title"
          eyebrow="About"
          title="Built by the people using it"
          description="AI on Apple ANZ is an independent community for anyone working with AI on Apple platforms — in a studio, a classroom, a startup or an enterprise."
          accentKey="purple"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          <PrismTile
            accentKey="purple"
            still
            className="p-7 sm:col-span-2 sm:p-9 lg:col-span-4"
          >
            <TileLabel accentKey="purple">Who it&apos;s for</TileLabel>
            <p className="mt-5 max-w-2xl text-[19px] font-medium leading-[1.5] tracking-[-0.015em] text-[#1d1d1f] sm:text-[22px]">
              Developers, designers, educators, researchers and enterprise
              leaders — from indie builders shipping their first on-device
              feature to teams rolling out Apple Intelligence across an
              organisation.
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#6e6e73]">
              No sales pitches, no gatekeeping. Just people comparing notes on
              what works, what does not, and what is worth trying next.
            </p>
            <CornerArcs accentKey="purple" />
          </PrismTile>

          <PrismTile
            accentKey="blue"
            still
            className="p-7 sm:col-span-2 lg:col-span-2"
          >
            <TileLabel accentKey="blue">What to expect</TileLabel>
            <ul className="mt-5 space-y-4">
              {[
                "Slack discussion, all week",
                "In-person meetups and online sessions",
                "Hands-on demos and teardowns",
                "Honest conversations about what shipped",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-[#1d1d1f]">
                  <span
                    aria-hidden
                    className="mt-[7px] size-1.5 shrink-0 rounded-full"
                    style={{ background: accent("blue", 0.9) }}
                  />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </PrismTile>

          {PILLARS.map(({ index, title, body, accentKey }) => (
            <PrismTile
              key={title}
              accentKey={accentKey}
              still
              className="p-6 sm:col-span-1 sm:p-7 lg:col-span-2"
            >
              <span
                className="text-[12px] font-semibold tracking-[0.16em]"
                style={{ color: accentInk(accentKey) }}
              >
                {index}
              </span>
              <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                {title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#6e6e73]">
                {body}
              </p>
              <CornerArcs accentKey={accentKey} />
            </PrismTile>
          ))}
        </div>
      </div>
    </section>
  );
}
