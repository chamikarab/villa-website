import type { Metadata } from "next";
import Image from "next/image";
import { amenities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Discover the villa amenities designed for restorative, elevated stays.",
};

export default function AmenitiesPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-10 fade-up">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Amenities
              </p>
              <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
                Elevated comforts, curated for you.
              </h1>
            </div>
            <p className="text-base leading-relaxed text-zinc-600">
              Whether you prefer mornings by the infinity pool or evenings with a 
              private chef, our amenities make every stay effortless and indulgent.
            </p>
            <div className="grid gap-4 rounded-[40px] bg-white p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] border border-[#e2d1a8]">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-4 border-b border-[#e2d1a8]/40 pb-4 text-sm font-medium text-zinc-600 last:border-b-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] fade-up [animation-delay:200ms] border border-[#e2d1a8]">
            <Image
              src="/images/experiences/spa-wellness-pavilion.png"
              alt="Spa and wellness pavilion"
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
