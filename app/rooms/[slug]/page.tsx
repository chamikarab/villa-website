import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoomBySlug, rooms } from "@/lib/rooms";
import { siteConfig } from "@/lib/site";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) return {};

  return {
    title: `${room.title} | ${siteConfig.name}`,
    description: room.shortDescription,
  };
}

export default async function RoomDetailsPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-8 pt-12">
        <Link
          href="/rooms"
          className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-black"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to all rooms
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Content Column */}
          <div className="space-y-12 fade-up">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
                  {room.capacity} • {room.size}
                </p>
                <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
                  {room.title}
                </h1>
              </div>
              <p className="text-lg font-bold text-black">{room.rate}</p>
              <p className="max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
                {room.longDescription}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {room.gallery.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-[32px] border border-[#e2d1a8]/40"
                >
                  <Image
                    src={img}
                    alt={`${room.title} detail ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              ))}
            </div>

            {/* Bed Type & Capacity Table */}
            <div className="grid grid-cols-2 gap-8 border-y border-zinc-100 py-10">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Bed Configuration</p>
                <p className="font-display text-2xl text-black">{room.bedType}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Guest Capacity</p>
                <p className="font-display text-2xl text-black">{room.capacity}</p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-32 h-fit space-y-10">
            {/* Hero Image in Sidebar or Main */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] border border-[#e2d1a8] fade-up [animation-delay:200ms]">
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Amenities Card */}
            <div className="rounded-[40px] bg-white p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#e2d1a8]/30 fade-up [animation-delay:300ms]">
              <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">Suite Amenities</p>
              <ul className="grid gap-4">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
                    <span className="h-1 w-1 rounded-full bg-[#c5a059]" />
                    {amenity}
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-10 border-t border-zinc-100">
                <Link
                  href="/book-now"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full border border-black bg-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-transparent hover:text-black"
                >
                  <span className="relative z-10">Reserve Stay</span>
                  <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
