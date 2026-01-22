import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { RoomCard } from "@/components/RoomCard";
import { rooms } from "@/lib/rooms";
import {
  amenities,
  galleryImages,
  highlights,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <Hero
        title="A private coastal sanctuary."
        subtitle="Experience the perfect blend of modern luxury and serene coastal living. Our villa offers curated experiences, panoramic ocean views, and the ultimate in privacy."
        imageSrc="/images/hero-1.png"
        ctaLabel="Explore Our Villa"
        ctaHref="/about"
        secondaryLabel="View Rooms"
        secondaryHref="/rooms"
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="card-glass rounded-[32px] p-8 fade-up border-[#e2d1a8] md:rounded-[36px] md:p-10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="font-display text-xl tracking-wide text-black md:text-2xl">
                {highlight.title}
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-zinc-600 md:text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-col items-center gap-4 text-center md:gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[11px] md:tracking-[0.4em]">
              Suites & Residences
            </p>
            <h2 className="font-display text-3xl leading-tight text-black sm:text-4xl md:text-5xl">
              Designed for slow, luxurious stays.
            </h2>
            <div className="mt-2 h-0.5 w-10 bg-black md:mt-4 md:w-12" />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16 md:gap-10">
            {rooms.map((room) => (
              <RoomCard 
                key={room.slug} 
                slug={room.slug}
                title={room.title}
                description={room.shortDescription}
                rate={room.rate}
                image={room.image}
                details={room.details}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center md:mt-16">
            <Link
              href="/rooms"
              className="rounded-full border border-black px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition hover:bg-black hover:text-white md:px-10 md:py-4 md:text-[11px]"
            >
              Discover All Spaces
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="space-y-6 md:space-y-8 fade-up">
            <div className="space-y-3 md:space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[11px] md:tracking-[0.4em]">
                Signature Amenities
              </p>
              <h2 className="font-display text-3xl leading-tight text-black sm:text-4xl md:text-5xl">
                Thoughtful details, from sunrise to starlight.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
              Every detail has been considered for a seamless, indulgent stay.
              From private chefs to tranquil wellness rituals, our amenities are
              curated to elevate every moment of your journey.
            </p>
            <Link
              href="/amenities"
              className="inline-flex rounded-full bg-black px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-zinc-800 md:py-4 md:text-[11px]"
            >
              Explore Amenities
            </Link>
          </div>
          <div className="card-glass grid gap-4 rounded-[32px] p-8 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border-[#e2d1a8] fade-up [animation-delay:200ms] md:rounded-[40px] md:p-10 md:gap-5">
            {amenities.slice(0, 6).map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-3 border-b border-[#e2d1a8]/40 pb-3 text-xs font-medium text-zinc-600 last:border-b-0 md:gap-4 md:pb-4 md:text-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" />
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16 md:gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[11px] md:tracking-[0.4em]">
              Visual Journey
            </p>
            <h2 className="font-display text-3xl leading-tight text-black sm:text-4xl md:text-5xl">
              A glimpse into serene coastal living.
            </h2>
          </div>
          <GalleryGrid images={galleryImages} />
          <div className="mt-12 flex justify-center md:mt-16">
            <Link
              href="/gallery"
              className="rounded-full border border-black px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition hover:bg-black hover:text-white md:px-10 md:py-4 md:text-[11px]"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[32px] bg-white border border-[#e2d1a8] p-10 text-center shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] fade-up md:rounded-[48px] md:p-16">
          <div className="relative z-10 mx-auto max-w-2xl space-y-6 md:space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 md:text-[11px] md:tracking-[0.5em]">
              Your Private Escape
            </p>
            <h2 className="font-display text-3xl leading-tight text-black sm:text-4xl md:text-6xl">
              Ready to begin your bespoke stay?
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 md:text-lg">
              Share your dates and preferences, and our dedicated concierge will craft a
              tailored itinerary for your arrival at {siteConfig.name}.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 md:gap-6">
              <Link
                href="/book-now"
                className="w-full rounded-full bg-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-zinc-800 sm:w-auto md:py-5 md:text-[11px]"
              >
                Start Your Inquiry
              </Link>
              <Link
                href="/contact"
                className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-400 transition hover:text-black md:text-[10px] md:tracking-[0.3em]"
              >
                Or speak with our concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
