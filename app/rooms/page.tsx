import type { Metadata } from "next";
import Link from "next/link";
import { RoomCard } from "@/components/RoomCard";
import { rooms } from "@/lib/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore our oceanfront suites, private residences, and serene garden pavilions.",
};

export default function RoomsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-center gap-5 text-center md:gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
            Rooms & Suites
          </p>
          <h1 className="font-display text-4xl leading-tight text-black sm:text-5xl md:text-7xl">
            A suite for every style of stay.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Each residence offers an immersive view of the coast, refined
            materials, and thoughtful privacy. Share your preferred suite, and
            we will curate your stay.
          </p>
          <div className="mt-3 h-0.5 w-12 bg-black md:mt-4" />
        </div>
        
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:mt-20 md:gap-10">
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

        <div className="mt-20 relative overflow-hidden rounded-[40px] bg-white border border-[#e2d1a8] p-10 text-center text-black fade-up md:mt-24 md:rounded-[40px] md:p-12">
          <div className="relative z-10 space-y-6 md:space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-black">Looking for a custom arrangement?</h2>
            <p className="mx-auto max-w-xl text-sm text-zinc-600 md:text-sm">
              Our concierge is ready to assist with tailored itineraries, 
              extended stays, and specific privacy requests.
            </p>
            <Link
              href="/book-now"
              className="w-full sm:w-auto inline-flex justify-center rounded-full bg-black px-12 py-5 text-[11px] font-bold uppercase tracking-[0.4em] text-white transition hover:bg-zinc-800"
            >
              Start Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
