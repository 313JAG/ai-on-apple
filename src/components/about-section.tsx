import { cn } from "@/lib/utils";

const LINKEDIN_URL = "https://www.linkedin.com/company/ai-on-apple/";

const valueCards = [
  {
    title: "Build",
    description:
      "Ship prototypes, apps, and workflows on Apple platforms with practical guidance from people doing the work.",
    accent: "tile-blue",
  },
  {
    title: "Learn",
    description:
      "Stay current on Apple Intelligence, on-device models, and the tools that help teams move from idea to production.",
    accent: "tile-orange",
  },
  {
    title: "Connect",
    description:
      "Meet builders, educators, and enterprise leaders across ANZ exploring what AI makes possible on Apple hardware.",
    accent: "tile-green",
  },
] as const;

export function AboutSection({ className }: { className?: string }) {
  return (
    <section id="about" className={cn("px-6 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6e6e73]">
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            A community for Apple and AI in ANZ
          </h2>
        </div>

        <div className="bento-grid mt-10">
          <div className="bento-tile tile-wash tile-purple p-8 lg:col-span-4">
            <div className="tile-content">
              <h3 className="text-xl font-semibold text-[#1d1d1f]">
                Who it&apos;s for
              </h3>
              <p className="mt-3 leading-relaxed text-[#6e6e73]">
                Developers, designers, educators, researchers, and enterprise
                leaders who want to explore AI on Apple platforms — from indie
                builders to teams rolling out Apple Intelligence across their
                organisations.
              </p>
            </div>
          </div>

          <div className="bento-tile tile-wash tile-teal p-8 lg:col-span-2">
            <div className="tile-content flex h-full flex-col">
              <h3 className="text-xl font-semibold text-[#1d1d1f]">
                What to expect
              </h3>
              <p className="mt-3 leading-relaxed text-[#6e6e73]">
                Slack discussions, in-person and online events, hands-on
                sessions, and honest conversations about what works.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-5 inline-flex items-center text-sm font-medium text-[#007aff] transition-colors hover:text-[#0056b3]"
              >
                Follow on LinkedIn
                <span aria-hidden className="ml-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {valueCards.map(({ title, description, accent }) => (
            <div
              key={title}
              className={cn("bento-tile tile-wash p-6 lg:col-span-2", accent)}
            >
              <div className="tile-content">
                <h3 className="text-lg font-semibold text-[#1d1d1f]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
