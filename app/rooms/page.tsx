import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RoomCard } from "@/components/RoomCard";
import { rooms } from "@/lib/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore our oceanfront suites, private residences, and serene garden pavilions.",
};

export default function RoomsPage() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/rooms-hero.png" // Updated image
          alt="Luxury Accommodations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div className="fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/80 sm:text-[11px]">
              The Collection
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl">
              Accommodations
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-4xl text-zinc-900 sm:text-5xl md:text-6xl">
            A suite for every style of stay.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            Each residence offers an immersive view of the coast, refined
            materials, and thoughtful privacy. Discover our carefully curated 
            spaces designed for absolute tranquility.
          </p>
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

        {/* Concierge CTA */}
        <div className="mt-32 relative overflow-hidden rounded-[48px] bg-white border border-[#e2d1a8]/40 p-12 text-center shadow-[0_40px_100px_-30px_rgba(0,0,0,0.03)] fade-up md:p-20">
          <div className="relative z-10 space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
              Bespoke Service
            </p>
            <h2 className="font-display text-4xl text-zinc-900 md:text-5xl lg:text-6xl">
              Looking for a custom arrangement?
            </h2>
            <p className="mx-auto max-w-xl text-zinc-600 md:text-lg">
              Our concierge is ready to assist with tailored itineraries, 
              extended stays, and specific privacy requests.
            </p>
            <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row sm:justify-center">
              <Link
                href="/book-now"
                className="group relative w-full sm:w-auto px-12 py-5 text-[11px] font-bold uppercase tracking-[0.4em] text-white overflow-hidden rounded-full bg-zinc-900 transition-all hover:bg-white hover:text-zinc-900 border border-zinc-900"
              >
                <span className="relative z-10">Start Inquiry</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
              <Link
                href="/contact"
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 transition hover:text-black"
              >
                Speak with a coordinator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
