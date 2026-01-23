import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the villa through curated imagery and coastal moments.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/gallery-hero.png"
          alt="Azure Dunes Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div className="fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/80 sm:text-[11px]">
              A Visual Narrative
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl">
              The Gallery
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center mb-20 fade-up">
          <h2 className="font-display text-4xl text-zinc-900 sm:text-5xl md:text-6xl">
            Visual stories from Azure Dunes.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            A curated glimpse of our suites, oceanfront spaces, and quiet
            moments by the sea. Each frame captures the essence of refined 
            coastal living.
          </p>
          <div className="mt-4 h-[1px] w-20 bg-[#c5a059]" />
        </div>
        
        <div className="fade-up [animation-delay:200ms]">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Experience CTA */}
      <section className="bg-white py-32 border-t border-zinc-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="font-display text-3xl md:text-5xl text-zinc-900 mb-12 leading-tight">
            Captured moments are just the beginning. 
            Come and experience the light for yourself.
          </h3>
          <div className="flex flex-col items-center gap-8">
            <a 
              href="/book-now" 
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-white hover:text-zinc-900 border border-zinc-900"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
