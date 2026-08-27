import { cn } from "@/lib/utils";

const LINKEDIN_URL = "https://www.linkedin.com/company/ai-on-apple/";

const valueCards = [
  {
    title: "Build",
    description:
      "Ship prototypes, apps, and workflows on Apple platforms with practical guidance from people doing the work.",
  },
  {
    title: "Learn",
    description:
      "Stay current on Apple Intelligence, on-device models, and the tools that help teams move from idea to production.",
  },
  {
    title: "Connect",
    description:
      "Meet builders, educators, and enterprise leaders across ANZ who are exploring what AI makes possible on Apple hardware.",
  },
] as const;

export function AboutSection({ className }: { className?: string }) {
  return (
    <section
      id="about"
      className={cn("bg-[#fafafa] px-6 py-20 sm:py-24", className)}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6e6e73]">
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            A community for Apple and AI in ANZ
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1d1d1f]">Who it&apos;s for</h3>
            <p className="mt-3 leading-relaxed text-[#6e6e73]">
              Developers, designers, educators, researchers, and enterprise leaders
              who want to explore AI on Apple platforms — from indie builders to
              teams rolling out Apple Intelligence across their organisations.
            </p>
          </div>

          <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1d1d1f]">What to expect</h3>
            <p className="mt-3 leading-relaxed text-[#6e6e73]">
              Community Slack discussions, in-person and online events, hands-on
              sessions, and honest conversations about what works — and what is
              still being figured out — with AI on Apple devices.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center text-sm font-medium text-[#007aff] transition-colors hover:text-[#0056b3]"
            >
              Follow on LinkedIn
              <span aria-hidden className="ml-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {valueCards.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
