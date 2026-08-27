import { LINKEDIN_URL, SLACK_URL } from "./constants";
import { SpectrumBars } from "./spectrum-ribbon";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769d2]";

export function CommunityBento() {
  return (
    <>
      <section
        id="openai-slack"
        aria-labelledby="openai-slack-title"
        className="scroll-mt-28 bg-[#f7f4ee] px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-12 md:gap-5">
          <div className="relative isolate min-h-[30rem] overflow-hidden rounded-[1.9rem] bg-[#171717] p-6 text-white md:col-span-8 sm:p-10">
            <div
              aria-hidden
              className="absolute -right-24 -top-20 -z-10 size-[25rem] rounded-full border-[46px] border-[#477ed8] opacity-80"
            />
            <div
              aria-hidden
              className="absolute -right-8 top-10 -z-10 size-[19rem] rounded-full border-[34px] border-[#9964c8] opacity-75"
            />
            <div
              aria-hidden
              className="absolute bottom-0 right-0 -z-10 h-2 w-1/2 bg-[linear-gradient(90deg,#f15b5a_0_14%,#f59d3d_14%_28%,#f5cd4b_28%_42%,#54a968_42%_56%,#48aeb3_56%_70%,#477ed8_70%_84%,#9964c8_84%)]"
            />

            <div className="flex h-full min-h-[26rem] flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">
                  Community channel
                </p>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[12px] font-semibold backdrop-blur-md">
                  Free to join
                </span>
              </div>
              <div className="mt-20 max-w-2xl">
                <h2
                  id="openai-slack-title"
                  className="text-[clamp(2.75rem,13vw,5.75rem)] font-semibold leading-[0.9] tracking-[-0.065em]"
                >
                  The useful bit happens in Slack.
                </h2>
                <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/68 sm:text-[18px]">
                  Meet peers, trade practical notes, find collaborators and hear
                  about the next session before it fills up.
                </p>
                <a
                  href={SLACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-[15px] font-semibold text-black transition-transform hover:-translate-y-0.5 motion-reduce:transform-none ${focus}`}
                >
                  Open the invite <span aria-hidden className="ml-2">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-4 md:grid-rows-2 md:gap-5">
            <article className="flex min-h-52 flex-col justify-between rounded-[1.9rem] bg-[#f0b94d] p-6 text-[#302004] sm:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] opacity-65">
                Made nearby
              </p>
              <div>
                <p className="text-[clamp(3.7rem,19vw,6rem)] font-semibold leading-none tracking-[-0.08em]">
                  ANZ
                </p>
                <p className="mt-3 text-[15px] font-medium leading-relaxed">
                  Australia and New Zealand, online and in person.
                </p>
              </div>
            </article>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex min-h-52 flex-col justify-between rounded-[1.9rem] border border-[#0a66c2]/15 bg-[#dceafa] p-6 text-[#174a7a] transition-transform hover:-translate-y-0.5 motion-reduce:transform-none sm:p-8 ${focus}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] opacity-65">
                  LinkedIn
                </p>
                <span
                  aria-hidden
                  className="flex size-8 items-center justify-center rounded-lg bg-[#0a66c2] text-[15px] font-bold text-white"
                >
                  in
                </span>
              </div>
              <div>
                <p className="max-w-[13ch] text-[clamp(1.65rem,8vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.045em]">
                  Follow AI on Apple.
                </p>
                <p className="mt-3 text-[14px] font-medium opacity-75">
                  Updates, event recaps and community highlights.
                </p>
                <span className="mt-5 inline-flex min-h-11 items-center text-[14px] font-semibold">
                  Open LinkedIn
                  <span
                    aria-hidden
                    className="ml-2 transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        id="openai-about"
        aria-labelledby="openai-about-title"
        className="scroll-mt-28 bg-[#fffdf9] px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#65615b]">
              <SpectrumBars />
              About the community
            </p>
            <h2
              id="openai-about-title"
              className="mt-5 text-[clamp(2.75rem,13vw,5rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-[#171717]"
            >
              Serious work. Open table.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-[clamp(1.25rem,5.5vw,1.8rem)] font-medium leading-[1.35] tracking-[-0.025em] text-[#302e2b]">
              AI on Apple brings together builders, professionals, educators and
              enterprise leaders working where artificial intelligence meets
              Apple&apos;s ecosystem.
            </p>
            <div className="mt-8 grid gap-5 border-t border-black/10 pt-8 sm:grid-cols-2">
              <p className="text-[15px] leading-relaxed text-[#68645e]">
                We make room for technical depth, practical demos and the candid
                stories behind products that actually shipped.
              </p>
              <p className="text-[15px] leading-relaxed text-[#68645e]">
                From Apple Intelligence and local models to product design,
                privacy and deployment, curiosity is the only prerequisite.
              </p>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-9 inline-flex min-h-12 items-center rounded-full border border-black/15 bg-white px-6 text-[15px] font-semibold text-[#171717] shadow-sm transition-colors hover:bg-[#f5f1e9] ${focus}`}
            >
              Follow on LinkedIn <span aria-hidden className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
