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
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/location-hero.png"
          alt="Coastal View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div className="fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/80 sm:text-[11px]">
              Southern Sanctuary
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl">
              Location
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div className="space-y-12 fade-up">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">
                Seclusion & Discovery
              </p>
              <h2 className="font-display text-4xl leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Secluded yet perfectly placed.
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-zinc-600">
              Azure Dunes is positioned along Sri Lanka&apos;s historic southern
              coastline, blending serene seclusion with easy access to Galle
              Fort, boutique dining, and curated excursions. It is a place where 
              the horizon feels within reach.
            </p>

            <div className="grid gap-6 rounded-[48px] bg-white p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border border-zinc-100">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Regional Highlights</p>
              {locationHighlights.map((item) => (
                <div key={item} className="flex items-center gap-6 border-b border-zinc-50 pb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 last:border-b-0">
                  <span className="h-[1px] w-6 bg-[#c5a059]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[48px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)] border border-[#e2d1a8]/30 fade-up [animation-delay:200ms]">
              <Image
                src="/images/experiences/villa-exterior-sunlit.png"
                alt="Villa Exterior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-[40px] bg-zinc-900 p-10 text-white shadow-sm fade-up [animation-delay:300ms]">
              <h3 className="font-display text-2xl mb-4">Galle Fort</h3>
              <p className="text-base opacity-70 leading-relaxed mb-6">
                Just a 15-minute drive away, the UNESCO World Heritage site of 
                Galle Fort offers a rich tapestry of history, boutique shopping, 
                and world-class dining.
              </p>
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-transform hover:translate-x-1"
              >
                Get Directions <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
