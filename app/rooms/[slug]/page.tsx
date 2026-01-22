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
      <div className="mx-auto max-w-7xl px-6 pt-8 md:px-8 md:pt-12">
        <Link
          href="/rooms"
          className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-black md:text-[10px]"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to all rooms
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Content Column */}
          <div className="flex-1 space-y-10 md:space-y-12 fade-up">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#c5a059] md:text-[11px] md:tracking-[0.5em]">
                  {room.capacity} • {room.size}
                </p>
                <h1 className="font-display text-4xl leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
                  {room.title}
                </h1>
              </div>
              <p className="text-base font-bold text-black md:text-lg">{room.rate}</p>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg">
                {room.longDescription}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {room.gallery.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-[24px] border border-[#e2d1a8]/40 md:rounded-[32px]"
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
            <div className="grid grid-cols-2 gap-6 border-y border-zinc-100 py-8 md:gap-8 md:py-10">
              <div className="space-y-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[10px]">Bed Configuration</p>
                <p className="font-display text-xl text-black md:text-2xl">{room.bedType}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[10px]">Guest Capacity</p>
                <p className="font-display text-xl text-black md:text-2xl">{room.capacity}</p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full space-y-8 lg:sticky lg:top-32 lg:w-[380px] xl:w-[420px]">
            {/* Hero Image in Sidebar or Main */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] border border-[#e2d1a8] fade-up [animation-delay:200ms] md:rounded-[40px]">
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
            <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#e2d1a8]/30 fade-up [animation-delay:300ms] md:rounded-[40px] md:p-10">
              <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.4em] text-[#c5a059] md:mb-8 md:text-[10px]">Suite Amenities</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 md:gap-4">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-600 md:gap-4 md:text-xs md:tracking-[0.2em]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#c5a059]" />
                    {amenity}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-zinc-100 md:mt-10 md:pt-10">
                <Link
                  href="/book-now"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full border border-black bg-black py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-transparent hover:text-black md:py-5 md:text-[10px]"
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
