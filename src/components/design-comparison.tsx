"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Design = "openai" | "claude";

type DesignComparisonProps = {
  initialDesign: Design;
  openAI: ReactNode;
  claude: ReactNode;
};

const choices: Array<{ id: Design; label: string; dot: string }> = [
  { id: "openai", label: "OpenAI", dot: "bg-[#10a37f]" },
  { id: "claude", label: "Claude", dot: "bg-[#d97757]" },
];

export function DesignComparison({
  initialDesign,
  openAI,
  claude,
}: DesignComparisonProps) {
  const [design, setDesign] = useState<Design>(initialDesign);

  function selectDesign(nextDesign: Design) {
    if (nextDesign === design) return;

    setDesign(nextDesign);

    const url = new URL(window.location.href);
    url.searchParams.set("design", nextDesign);
    window.history.replaceState(null, "", url);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <>
      <div className="sticky top-0 z-[100] flex h-[52px] items-center border-b border-black/[0.07] bg-[#f5f5f7]/90 px-4 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <p className="hidden text-xs font-medium text-[#6e6e73] sm:block">
            Compare the two design directions
          </p>

          <div
            className="mx-auto flex rounded-full bg-black/[0.06] p-0.5 sm:mx-0"
            role="group"
            aria-label="Choose a landing page design"
          >
            {choices.map((choice) => {
              const isActive = design === choice.id;

              return (
                <button
                  key={choice.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectDesign(choice.id)}
                  className={cn(
                    "flex h-11 min-w-28 items-center justify-center gap-2 rounded-full px-4 text-xs font-semibold transition-all",
                    isActive
                      ? "bg-white text-[#1d1d1f] shadow-sm ring-1 ring-black/[0.04]"
                      : "text-[#6e6e73] hover:text-[#1d1d1f]",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn("size-2 rounded-full", choice.dot)}
                  />
                  {choice.label}
                </button>
              );
            })}
          </div>

          <p className="hidden text-xs font-medium text-[#86868b] sm:block">
            Live comparison
          </p>
        </div>
      </div>

      <div aria-live="polite" className="sr-only">
        Showing the {design === "openai" ? "OpenAI" : "Claude"} design
      </div>

      {design === "openai" ? openAI : claude}
    </>
  );
}
