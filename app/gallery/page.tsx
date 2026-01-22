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
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center gap-6 text-center mb-20 fade-up">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
            Gallery
          </p>
          <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
            Visual stories from Azure Dunes.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
            A curated glimpse of our suites, oceanfront spaces, and quiet
            moments by the sea.
          </p>
          <div className="mt-4 h-0.5 w-12 bg-black" />
        </div>
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
