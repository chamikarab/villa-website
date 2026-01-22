import type { Metadata } from "next";
import Image from "next/image";
import { locationHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find Azure Dunes Villa on Sri Lanka's southern coast, minutes from Galle Fort.",
};

export default function LocationPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-8 md:space-y-10 fade-up">
            <div className="space-y-3 md:space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[11px] md:tracking-[0.4em]">
                Location
              </p>
              <h1 className="font-display text-4xl leading-tight text-black sm:text-5xl md:text-7xl">
                Secluded yet perfectly placed.
              </h1>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
              Azure Dunes is positioned along Sri Lanka&apos;s historic southern
              coastline, blending serene seclusion with easy access to Galle
              Fort, boutique dining, and curated excursions.
            </p>
            <div className="grid gap-3 rounded-[32px] bg-white p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] border border-[#e2d1a8] md:gap-4 md:rounded-[40px] md:p-10">
              {locationHighlights.map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-[#e2d1a8]/40 pb-3 text-xs font-medium text-zinc-600 last:border-b-0 md:gap-4 md:pb-4 md:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] fade-up [animation-delay:200ms] border border-[#e2d1a8] md:rounded-[40px]">
            <Image
              src="/images/experiences/infinity-pool-dusk.png"
              alt="Map showing the villa location"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
