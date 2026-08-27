import { cn } from "@/lib/utils";

const SLACK_INVITE_URL =
  "https://join.slack.com/t/ai-on-apple/shared_invite/zt-466vj3u3b-yLsuaPMjQJ~AD9AykPFQ9Q";

const highlights = [
  "Connect with builders, educators, and enterprise leaders across ANZ",
  "Share experiments, workflows, and lessons learned with Apple Intelligence and on-device AI",
  "Get early notice of meetups, workshops, and community sessions",
  "Ask questions, find collaborators, and stay close to what is happening locally",
] as const;

export function SlackCta({ className }: { className?: string }) {
  return (
    <section
      id="slack"
      className={cn("bg-[#fafafa] px-6 py-20 sm:py-24", className)}
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6e6e73]">
            Community
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Join the conversation on Slack
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#6e6e73]">
            AI on Apple is a welcoming space to explore what is possible on Apple
            platforms — from Foundation Models and Core ML to practical workflows
            for teams, classrooms, and studios.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-[#1d1d1f]"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[#007aff]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333336]"
            >
              Join on Slack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
