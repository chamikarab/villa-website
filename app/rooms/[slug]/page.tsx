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
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden sm:h-[80vh]">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#faf9f6] to-transparent h-32" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/90 sm:text-[11px]">
              The Collection
            </p>
            <h1 className="font-display text-5xl text-white sm:text-7xl md:text-8xl">
              {room.title}
            </h1>
          </div>
        </div>

        {/* Floating Back Button */}
        <div className="absolute left-6 top-8 z-10 md:left-12 md:top-12">
          <Link
            href="/rooms"
            className="group flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
          >
            <i className="fa-solid fa-arrow-left text-[12px] transition-transform group-hover:-translate-x-1" />
            Back to Collection
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative z-10 -mt-20 mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-24">
          
          {/* Main Content */}
          <div className="space-y-16">
            <div className="rounded-[40px] bg-white p-8 shadow-sm border border-zinc-100/50 md:p-12 fade-up">
              <div className="mb-12 flex flex-wrap items-center gap-8 border-b border-zinc-100 pb-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059]">
                <span className="flex items-center gap-3">
                  <i className="fa-solid fa-expand text-xs" />
                  {room.size}
                </span>
                <span className="flex items-center gap-3 text-zinc-400">•</span>
                <span className="flex items-center gap-3 text-zinc-900">
                  <i className="fa-solid fa-user-group text-xs" />
                  {room.capacity}
                </span>
                <span className="flex items-center gap-3 text-zinc-400">•</span>
                <span className="flex items-center gap-3 text-zinc-900">
                  <i className="fa-solid fa-bed text-xs" />
                  {room.bedType}
                </span>
              </div>

              <div className="space-y-8">
                <h2 className="font-display text-3xl text-zinc-900 sm:text-4xl">
                  Refined Coastal Living
                </h2>
                <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
                  {room.longDescription}
                </p>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="space-y-12">
              <div className="flex items-end justify-between">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">
                    Gallery
                  </p>
                  <h3 className="font-display text-3xl text-zinc-900 sm:text-4xl">
                    Interior Narratives
                  </h3>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {room.gallery.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-[32px] border border-zinc-200/50 group ${
                      index === 0 ? "aspect-[4/5]" : "aspect-[4/5] md:translate-y-12"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${room.title} detail ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-32 h-fit space-y-8">
            <div className="rounded-[40px] bg-white p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-[#e2d1a8]/30 fade-up [animation-delay:200ms]">
              <div className="mb-8 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Nightly Rate</p>
                <p className="font-display text-4xl text-zinc-900">{room.rate}</p>
              </div>

              <div className="mb-10 space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">In-Suite Amenities</p>
                <ul className="space-y-5">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 transition-colors hover:text-black">
                      <span className="h-[1px] w-4 bg-[#c5a059]" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/book-now"
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-zinc-900 py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-white hover:text-zinc-900 border border-zinc-900"
              >
                <span className="relative z-10">Reserve This Experience</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
              
              <p className="mt-6 text-center text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-400">
                Inquiry Response within 12 hours
              </p>
            </div>

            {/* Support Card */}
            <div className="rounded-[40px] bg-[#c5a059] p-10 text-white fade-up [animation-delay:300ms]">
              <h4 className="mb-4 font-display text-2xl">Concierge Service</h4>
              <p className="mb-8 text-xs leading-relaxed opacity-90">
                Need assistance with your booking or have special requests? Our dedicated villa concierge is available 24/7.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-transform hover:translate-x-1"
              >
                Connect with us <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </aside>

        </div>
      </section>

      {/* Bottom CTA / Next Room Suggestion */}
      <section className="border-t border-zinc-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
            Beyond This Suite
          </p>
          <h2 className="mb-12 font-display text-4xl text-zinc-900 md:text-6xl lg:text-7xl">
            Explore more of the estate.
          </h2>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-900 transition-colors hover:text-[#c5a059]"
          >
            All Accommodations <i className="fa-solid fa-chevron-right text-[10px]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
