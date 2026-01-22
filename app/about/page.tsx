import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Villa",
  description:
    "Discover the story, design philosophy, and signature experiences of Azure Dunes Villa.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8 fade-up">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Our Story
              </p>
              <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
                A modern villa shaped by coastal light.
              </h1>
            </div>
            <p className="text-base leading-relaxed text-zinc-600">
              {siteConfig.name} blends contemporary architecture with the
              natural rhythm of the southern coast. Designed for privacy and
              ease, every space is oriented toward the sea with flowing indoor
              and outdoor living.
            </p>
            <p className="text-base leading-relaxed text-zinc-600">
              From hand-finished stone to warm timber accents, our interiors
              celebrate craft and quiet luxury. Guests arrive for the ocean, and
              stay for the effortless hospitality.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] fade-up [animation-delay:200ms] border border-[#e2d1a8]">
            <Image
              src="/images/experiences/villa-exterior-sunlit.png"
              alt="Villa lounge interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Design Philosophy",
              text: "Soft silhouettes, neutral palettes, and generous light define every suite and pavilion.",
            },
            {
              title: "Tailored Service",
              text: "A dedicated villa host and concierge ensure every request feels effortless.",
            },
            {
              title: "Celebrated Location",
              text: "Minutes from Galle Fort, yet serenely tucked away from the coastal bustle.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="card-glass rounded-[32px] p-10 fade-up border-[#e2d1a8]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h2 className="font-display text-2xl tracking-wide text-black">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
