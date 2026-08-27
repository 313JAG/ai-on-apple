import { accent, type AccentKey } from "@/components/claude/design-tokens";
import { cn } from "@/lib/utils";

/**
 * Concentric rainbow arcs, echoing the curvature of the six-colour Apple logo.
 * Ordered outside in so the smallest ring paints last.
 */
const ARCS: { size: number; accentKey: AccentKey; alpha: number }[] = [
  { size: 82, accentKey: "blue", alpha: 0.4 },
  { size: 71, accentKey: "purple", alpha: 0.42 },
  { size: 61, accentKey: "red", alpha: 0.4 },
  { size: 52, accentKey: "orange", alpha: 0.46 },
  { size: 44, accentKey: "yellow", alpha: 0.6 },
  { size: 37, accentKey: "green", alpha: 0.5 },
  { size: 31, accentKey: "teal", alpha: 0.46 },
];

/**
 * Abstract hero backdrop: iridescent glass orbs floating over blurred colour
 * fields, cut through by concentric rainbow arcs and a fine dot lattice.
 */
export function PrismField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      {/* Cool spectral field sweeping in from the top right */}
      <div
        className="absolute -top-[20rem] right-[-20rem] size-[56rem] rounded-full opacity-45 blur-[100px] sm:right-[-14rem] sm:opacity-55 lg:right-[-8rem] lg:opacity-[0.62]"
        style={{
          background: `conic-gradient(from 200deg, ${accent("blue", 0.8)}, ${accent(
            "indigo",
            0.6,
          )}, ${accent("purple", 0.72)}, ${accent("pink", 0.62)}, ${accent(
            "orange",
            0.5,
          )}, ${accent("yellow", 0.46)}, ${accent("green", 0.58)}, ${accent(
            "teal",
            0.7,
          )}, ${accent("blue", 0.8)})`,
        }}
      />

      {/* Cyan pool on the left */}
      <div
        className="absolute -left-[18rem] top-[14rem] size-[40rem] rounded-full opacity-40 blur-[100px] sm:opacity-55 lg:opacity-60"
        style={{
          background: `radial-gradient(circle at 44% 42%, ${accent(
            "teal",
            0.62,
          )}, ${accent("indigo", 0.4)} 46%, transparent 72%)`,
        }}
      />

      {/* Warm field carrying colour through the lower half of the hero */}
      <div
        className="absolute left-[6%] top-[28rem] size-[34rem] rounded-full opacity-30 blur-[96px] sm:left-[20%] sm:opacity-45 lg:top-[26rem]"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent(
            "orange",
            0.4,
          )}, ${accent("pink", 0.34)} 44%, ${accent("yellow", 0.22)} 68%, transparent 82%)`,
        }}
      />

      {/* Concentric rainbow arcs sweeping up from the lower right */}
      <div className="absolute right-[-13rem] top-[19rem] origin-top-right scale-[0.5] sm:right-[-9rem] sm:top-[22rem] sm:scale-[0.8] lg:right-[-6rem] lg:top-[16rem] lg:scale-100">
        {ARCS.map(({ size, accentKey, alpha }) => (
          <div
            key={size}
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${size}rem`,
              height: `${size}rem`,
              border: `1.5px solid ${accent(accentKey, alpha)}`,
            }}
          />
        ))}
      </div>

      {/* Dot lattice, masked to a soft ellipse over the type */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgb(0 0 0 / 0.085) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(66% 62% at 30% 40%, black, transparent 100%)",
          WebkitMaskImage: "radial-gradient(66% 62% at 30% 40%, black, transparent 100%)",
        }}
      />

      {/* Iridescent glass orbs */}
      <GlassOrb className="right-[4%] top-[5.5rem] size-20 sm:top-[4.5rem] sm:size-28 lg:right-[7%] lg:top-[5rem]" />
      <GlassOrb
        className="left-[56%] top-[30rem] hidden size-24 sm:block lg:left-[50%] lg:top-[33rem]"
        flipped
      />
      <GlassOrb className="left-[5%] top-[36rem] hidden size-16 sm:block lg:top-[34rem]" />

      {/* Fade into the page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgb(250 250 250 / 0), rgb(250 250 250 / 0.85) 62%, rgb(250 250 250 / 1))",
        }}
      />
    </div>
  );
}

/** A single frosted sphere with a spectral rim and a specular highlight. */
function GlassOrb({
  className,
  flipped = false,
}: {
  className?: string;
  flipped?: boolean;
}) {
  return (
    <div className={cn("absolute rounded-full", className)}>
      <div
        className="absolute inset-0 rounded-full border border-white/70 backdrop-blur-md"
        style={{
          background: flipped
            ? `radial-gradient(circle at 68% 74%, rgb(255 255 255 / 0.85), ${accent(
                "pink",
                0.3,
              )} 52%, ${accent("indigo", 0.36)} 100%)`
            : `radial-gradient(circle at 32% 26%, rgb(255 255 255 / 0.92), ${accent(
                "teal",
                0.26,
              )} 48%, ${accent("purple", 0.34)} 100%)`,
          boxShadow: `inset 0 1px 8px rgb(255 255 255 / 0.7), 0 20px 44px -18px ${accent(
            "indigo",
            0.5,
          )}`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full mix-blend-screen"
        style={{
          background: `conic-gradient(from ${flipped ? 220 : 40}deg, ${accent(
            "red",
            0.34,
          )}, ${accent("yellow", 0.32)}, ${accent("green", 0.3)}, ${accent(
            "blue",
            0.34,
          )}, ${accent("purple", 0.32)}, ${accent("red", 0.34)})`,
          opacity: 0.55,
          maskImage: "radial-gradient(circle at 50% 50%, transparent 56%, black 92%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 56%, black 92%)",
        }}
      />
    </div>
  );
}
