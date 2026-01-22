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
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-10 fade-up">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Location
              </p>
              <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
                Secluded yet perfectly placed.
              </h1>
            </div>
            <p className="text-base leading-relaxed text-zinc-600">
              Azure Dunes is positioned along Sri Lanka&apos;s historic southern
              coastline, blending serene seclusion with easy access to Galle
              Fort, boutique dining, and curated excursions.
            </p>
            <div className="grid gap-4 rounded-[40px] bg-white p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] border border-[#e2d1a8]">
              {locationHighlights.map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-[#e2d1a8]/40 pb-4 text-sm font-medium text-zinc-600 last:border-b-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] fade-up [animation-delay:200ms] border border-[#e2d1a8]">
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
