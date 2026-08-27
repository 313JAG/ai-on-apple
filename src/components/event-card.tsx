import Image from "next/image";

import type { EventLocation } from "@/lib/luma/types";
import { cn } from "@/lib/utils";

const FALLBACK_COVER = "/brand/cover.png";

function formatLocation(location: EventLocation): string {
  const parts = [location.venue, location.city].filter(Boolean);
  return parts.join(", ") || "Location TBA";
}

export type EventCardProps = {
  title: string;
  formattedDate: string;
  startAt?: string;
  location: EventLocation;
  coverUrl?: string | null;
  href: string;
  isFeatured?: boolean;
  className?: string;
};

export function EventCard({
  title,
  formattedDate,
  startAt,
  location,
  coverUrl,
  href,
  isFeatured = false,
  className,
}: EventCardProps) {
  const imageSrc = coverUrl || FALLBACK_COVER;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#f5f5f7]">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={Boolean(coverUrl?.includes("lumacdn"))}
        />
        {isFeatured ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#1d1d1f] px-3 py-1 text-xs font-medium text-white">
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <time
          {...(startAt ? { dateTime: startAt } : {})}
          className="text-sm font-medium text-[#6e6e73]"
        >
          {formattedDate}
        </time>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#1d1d1f]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[#6e6e73]">{formatLocation(location)}</p>

        <div className="mt-auto pt-5">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-[#007aff] transition-colors hover:text-[#0056b3]"
          >
            View on Luma
            <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
