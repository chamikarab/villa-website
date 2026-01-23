import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Villa",
  description:
    "Discover the story, design philosophy, and signature experiences of Azure Dunes Villa.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/about-hero.png"
          alt="Azure Dunes Villa"
          fill
          className="object-cover object-bottom" // Aligned to bottom
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div className="fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/80 sm:text-[11px]">
              Our Heritage
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl">
              The Story
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-12 fade-up">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">
                Coastal Light & Design
              </p>
              <h2 className="font-display text-4xl leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
                A modern villa shaped by the ocean.
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
                {siteConfig.name} blends contemporary architecture with the
                natural rhythm of the southern coast. Designed for privacy and
                ease, every space is oriented toward the sea with flowing indoor
                and outdoor living.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                From hand-finished stone to warm timber accents, our interiors
                celebrate craft and quiet luxury. Guests arrive for the ocean, and
                stay for the effortless hospitality that has become our hallmark.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-8 items-center border-t border-zinc-100">
              <div className="space-y-1">
                <p className="font-display text-3xl text-zinc-900">85%</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Ocean View Area</p>
              </div>
              <div className="h-8 w-[1px] bg-zinc-100" />
              <div className="space-y-1">
                <p className="font-display text-3xl text-zinc-900">24/7</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Personal Service</p>
              </div>
              <div className="h-8 w-[1px] bg-zinc-100" />
              <div className="space-y-1">
                <p className="font-display text-3xl text-zinc-900">03</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Signature Suites</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[48px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)] border border-[#e2d1a8]/30 fade-up [animation-delay:200ms]">
            <Image
              src="/images/experiences/elegant-dining.png"
              alt="Villa Experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 text-center mb-20">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">Our Values</p>
          <h2 className="font-display text-4xl text-zinc-900 md:text-6xl">Philosophy of Place</h2>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Design Philosophy",
                icon: "fa-pencil-ruler",
                text: "Soft silhouettes, neutral palettes, and generous light define every suite and pavilion.",
              },
              {
                title: "Tailored Service",
                icon: "fa-bell-concierge",
                text: "A dedicated villa host and concierge ensure every request feels effortless.",
              },
              {
                title: "Celebrated Location",
                icon: "fa-map-location-dot",
                text: "Minutes from Galle Fort, yet serenely tucked away from the coastal bustle.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[48px] bg-[#faf9f6] p-12 border border-zinc-100 transition-all hover:border-[#e2d1a8] hover:shadow-xl hover:shadow-zinc-200/50 fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-xl text-[#c5a059] shadow-sm transition-transform group-hover:scale-110">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <h3 className="font-display text-2xl text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center border-t border-zinc-100">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-900 transition-colors hover:text-[#c5a059]"
        >
          Discover our spaces <i className="fa-solid fa-arrow-right" />
        </Link>
      </section>
    </div>
  );
}
