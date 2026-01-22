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
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
            Rooms & Suites
          </p>
          <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
            A suite for every style of stay.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
            Each residence offers an immersive view of the coast, refined
            materials, and thoughtful privacy. Share your preferred suite, and
            we will curate your stay.
          </p>
          <div className="mt-4 h-0.5 w-12 bg-black" />
        </div>
        
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-24 relative overflow-hidden rounded-[40px] bg-white border border-[#e2d1a8] p-12 text-center text-black fade-up">
          <div className="relative z-10 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-black">Looking for a custom arrangement?</h2>
            <p className="mx-auto max-w-xl text-sm text-zinc-600">
              Our concierge is ready to assist with tailored itineraries, 
              extended stays, and specific privacy requests.
            </p>
            <Link
              href="/book-now"
              className="inline-flex rounded-full bg-black px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-zinc-800"
            >
              Start Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
