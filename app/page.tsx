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
    <div className="bg-[#faf9f6]">
      <Hero
        title="A private coastal sanctuary."
        subtitle="Experience the perfect blend of modern luxury and serene coastal living. Our villa offers curated experiences, panoramic ocean views, and the ultimate in privacy."
        imageSrc="/images/hero-1.png"
        ctaLabel="Explore Our Villa"
        ctaHref="/about"
        secondaryLabel="View Rooms"
        secondaryHref="/rooms"
      />

      {/* Highlights Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="group rounded-[48px] bg-white p-12 border border-zinc-100/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] transition-all hover:border-[#e2d1a8]/60 fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="font-display text-3xl text-zinc-900">
                {highlight.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="bg-white py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-center gap-6 text-center mb-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
              Suites & Residences
            </p>
            <h2 className="font-display text-4xl leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Designed for slow, luxurious stays.
            </h2>
            <div className="mt-4 h-[1px] w-20 bg-[#c5a059]" />
          </div>
          
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-20 flex justify-center">
            <Link
              href="/rooms"
              className="group relative overflow-hidden rounded-full border border-zinc-900 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900 transition-all hover:text-white"
            >
              <span className="relative z-10">Discover All Spaces</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-zinc-900 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Amenities */}
      <section className="mx-auto w-full max-w-7xl px-6 py-32 md:px-8">
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10 fade-up">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
                Signature Amenities
              </p>
              <h2 className="font-display text-4xl leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Thoughtful details, from sunrise to starlight.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-zinc-600">
              Every detail has been considered for a seamless, indulgent stay.
              From private chefs to tranquil wellness rituals, our amenities are
              curated to elevate every moment of your journey.
            </p>
            <Link
              href="/amenities"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-white hover:text-zinc-900 border border-zinc-900"
            >
              <span className="relative z-10">Explore Amenities</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>
          
          <div className="grid gap-6 rounded-[48px] bg-white p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border border-zinc-100 fade-up [animation-delay:200ms]">
            {amenities.slice(0, 6).map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-6 border-b border-zinc-50 pb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 last:border-b-0"
              >
                <span className="h-[1px] w-6 bg-[#c5a059]" />
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Journey */}
      <section className="bg-white py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 text-center mb-20">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
            Visual Journey
          </p>
          <h2 className="font-display text-4xl text-zinc-900 md:text-6xl">
            A glimpse into coastal living.
          </h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <GalleryGrid images={galleryImages} />
          <div className="mt-20 flex justify-center">
            <Link
              href="/gallery"
              className="group relative overflow-hidden rounded-full border border-zinc-900 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900 transition-all hover:text-white"
            >
              <span className="relative z-10">View Full Gallery</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-zinc-900 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="mx-auto w-full max-w-7xl px-6 py-32 md:px-8">
        <div className="relative overflow-hidden rounded-[56px] bg-white border border-[#e2d1a8]/30 p-12 text-center shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] fade-up md:p-24">
          <div className="relative z-10 mx-auto max-w-2xl space-y-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
              Your Private Escape
            </p>
            <h2 className="font-display text-4xl leading-tight text-zinc-900 sm:text-6xl md:text-7xl">
              Ready to begin your stay?
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Share your dates and preferences, and our dedicated concierge will craft a
              tailored itinerary for your arrival at {siteConfig.name}.
            </p>
            <div className="flex flex-col items-center gap-8 pt-6">
              <Link
                href="/book-now"
                className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-zinc-900 px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-white hover:text-zinc-900 border border-zinc-900"
              >
                <span className="relative z-10">Start Your Inquiry</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
              <Link
                href="/contact"
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 transition hover:text-black"
              >
                Or speak with our concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
