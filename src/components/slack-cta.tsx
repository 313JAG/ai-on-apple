import { cn } from "@/lib/utils";

const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";

const highlights = [
  {
    title: "Meet the community",
    body: "Builders, educators, and enterprise leaders across Australia and New Zealand.",
    accent: "tile-blue",
    dot: "var(--rainbow-blue)",
  },
  {
    title: "Share what you learn",
    body: "Experiments, workflows, and lessons from Apple Intelligence and on-device AI.",
    accent: "tile-pink",
    dot: "var(--rainbow-pink)",
  },
  {
    title: "Hear about events first",
    body: "Early notice of meetups, workshops, and community sessions.",
    accent: "tile-orange",
    dot: "var(--rainbow-orange)",
  },
  {
    title: "Find collaborators",
    body: "Ask questions and stay close to what is happening locally.",
    accent: "tile-green",
    dot: "var(--rainbow-green)",
  },
] as const;

export function SlackCta({ className }: { className?: string }) {
  return (
    <section id="slack" className={cn("px-6 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="bento-grid">
          <div className="bento-tile tile-wash tile-purple p-8 sm:col-span-2 lg:col-span-3 sm:p-10">
            <div className="tile-content flex h-full flex-col">
              <p className="text-sm font-medium uppercase tracking-wide text-[#6e6e73]">
                Community
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
                Join the conversation on Slack
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#6e6e73]">
                A welcoming space to explore what is possible on Apple platforms
                — from Foundation Models and Core ML to practical workflows for
                teams, classrooms, and studios.
              </p>
              <div className="mt-auto pt-8">
                <a
                  href={SLACK_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#333336]"
                >
                  Join on Slack
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-3">
            {highlights.map(({ title, body, accent, dot }) => (
              <div
                key={title}
                className={cn("bento-tile tile-wash p-6", accent)}
              >
                <div className="tile-content">
                  <span
                    className="block size-2.5 rounded-full"
                    style={{ background: dot }}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-base font-semibold text-[#1d1d1f]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
