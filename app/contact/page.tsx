import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with our villa concierge for any inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/experiences/villa-exterior-sunlit.png"
          alt="Contact Azure Dunes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div className="fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-white/80 sm:text-[11px]">
              Connect With Us
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
          
          {/* Info Column */}
          <div className="space-y-16 fade-up">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">
                Concierge Service
              </p>
              <h2 className="font-display text-4xl leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Here to curate your stay.
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Our Sanctuary</p>
                <p className="text-xl font-medium leading-relaxed text-zinc-800">
                  {siteConfig.address}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Direct Contact</p>
                <div className="flex flex-col gap-4">
                  <a 
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} 
                    className="group flex items-center gap-4 text-2xl font-display text-zinc-900 transition-colors hover:text-[#c5a059]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm shadow-sm transition-transform group-hover:scale-110">
                      <i className="fa-solid fa-phone" />
                    </span>
                    {siteConfig.phone}
                  </a>
                  <a 
                    href={`mailto:${siteConfig.email}`} 
                    className="group flex items-center gap-4 text-2xl font-display text-zinc-900 transition-colors hover:text-[#c5a059]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm shadow-sm transition-transform group-hover:scale-110">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="rounded-[40px] bg-white border border-[#e2d1a8]/30 p-10 text-zinc-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]">
                <p className="font-display text-2xl mb-4">Concierge Hours</p>
                <p className="text-base text-zinc-600 leading-relaxed">
                  Our dedicated team is available daily from 8:00 AM to 10:00 PM (GMT+5:30) 
                  to assist with bespoke reservations and travel planning.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="rounded-[48px] bg-white p-10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border border-zinc-100 fade-up [animation-delay:200ms] md:p-16">
            <p className="mb-12 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Send an Inquiry</p>
            
            <form className="grid gap-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Full Name</label>
                  <input
                    type="text"
                    placeholder="E.g. James Smith"
                    className="w-full rounded-2xl border border-zinc-100 bg-[#faf9f6] px-6 py-4 text-sm outline-none transition focus:border-[#c5a059] focus:bg-white"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Email Address</label>
                  <input
                    type="email"
                    placeholder="james@example.com"
                    className="w-full rounded-2xl border border-zinc-100 bg-[#faf9f6] px-6 py-4 text-sm outline-none transition focus:border-[#c5a059] focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Subject</label>
                <input
                  type="text"
                  placeholder="How can we assist you?"
                  className="w-full rounded-2xl border border-zinc-100 bg-[#faf9f6] px-6 py-4 text-sm outline-none transition focus:border-[#c5a059] focus:bg-white"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-[32px] border border-zinc-100 bg-[#faf9f6] px-8 py-6 text-sm outline-none transition focus:border-[#c5a059] focus:bg-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full bg-zinc-900 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-white hover:text-zinc-900 border border-zinc-900 md:w-fit md:px-16"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
