import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the villa through curated imagery and coastal moments.",
};

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center mb-12 md:mb-20 md:gap-6 fade-up">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[11px] md:tracking-[0.4em]">
            Gallery
          </p>
          <h1 className="font-display text-4xl leading-tight text-black sm:text-5xl md:text-7xl">
            Visual stories from Azure Dunes.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            A curated glimpse of our suites, oceanfront spaces, and quiet
            moments by the sea.
          </p>
          <div className="mt-2 h-0.5 w-10 bg-black md:mt-4 md:w-12" />
        </div>
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
