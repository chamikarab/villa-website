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
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/amenities-hero.png"
          alt="Luxury Amenities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div className="fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/80 sm:text-[11px]">
              Services & Comforts
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl">
              Amenities
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div className="space-y-12 fade-up">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">
                Tailored for Indulgence
              </p>
              <h2 className="font-display text-4xl leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Elevated comforts, curated for you.
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-zinc-600">
              Whether you prefer mornings by the infinity pool or evenings with a 
              private chef, our amenities make every stay effortless and indulgent.
              We believe luxury lies in the details that allow you to truly exhale.
            </p>

            <div className="grid gap-6 rounded-[48px] bg-white p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border border-zinc-100">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-6 border-b border-zinc-50 pb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 last:border-b-0">
                  <span className="h-[1px] w-6 bg-[#c5a059]" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[48px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)] border border-[#e2d1a8]/30 fade-up [animation-delay:200ms]">
              <Image
                src="/images/experiences/infinity-pool-dusk.png"
                alt="Infinity Pool"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-[40px] bg-white p-10 border border-zinc-100 shadow-sm fade-up [animation-delay:300ms]">
              <h3 className="font-display text-2xl mb-4">Wellness & Recovery</h3>
              <p className="text-base text-zinc-600 leading-relaxed">
                Complement your stay with private yoga sessions, on-site spa treatments, 
                and a curated selection of organic bath products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
