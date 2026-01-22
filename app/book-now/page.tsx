import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Submit a private inquiry for your stay at Azure Dunes Villa.",
};

export default function BookNowPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center mb-12 md:mb-16 md:gap-6 fade-up">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[11px] md:tracking-[0.4em]">
            Reservations
          </p>
          <h1 className="font-display text-4xl leading-tight text-black sm:text-5xl md:text-7xl">
            Begin your journey.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Share your preferred dates and travel details. Our concierge will respond
            within 24 hours with availability and curated stay options.
          </p>
          <div className="mt-2 h-0.5 w-10 bg-black md:mt-4 md:w-12" />
        </div>

        <form className="grid gap-8 rounded-[32px] bg-white p-8 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border border-[#e2d1a8] fade-up [animation-delay:200ms] md:gap-10 md:rounded-[40px] md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-[11px]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c5a059] md:rounded-2xl md:px-5 md:py-4"
                required
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-[11px]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c5a059] md:rounded-2xl md:px-5 md:py-4"
                required
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-[11px]">
                Arrival Date
              </label>
              <input
                type="date"
                name="arrival"
                className="w-full rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c5a059] md:rounded-2xl md:px-5 md:py-4"
                required
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-[11px]">
                Departure Date
              </label>
              <input
                type="date"
                name="departure"
                className="w-full rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c5a059] md:rounded-2xl md:px-5 md:py-4"
                required
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-[11px]">
                Guests
              </label>
              <input
                type="number"
                name="guests"
                min={1}
                placeholder="Number of guests"
                className="w-full rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c5a059] md:rounded-2xl md:px-5 md:py-4"
                required
              />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-[11px]">
                Preferred Suite
              </label>
              <select
                name="suite"
                className="w-full rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c5a059] md:rounded-2xl md:px-5 md:py-4"
              >
                <option>Horizon Suite</option>
                <option>Cove Residence</option>
                <option>Garden Pavilion</option>
                <option>Open to suggestions</option>
              </select>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-[11px]">
              Special Requests
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your stay preferences..."
              className="w-full rounded-2xl border border-zinc-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c5a059] md:rounded-3xl md:px-5 md:py-4 md:rows-5"
            />
          </div>
          <div className="flex flex-col items-center gap-4 pt-4 md:gap-6">
            <button
              type="submit"
              className="w-full rounded-full bg-black py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition hover:bg-zinc-800 md:w-fit md:px-12 md:py-5 md:text-[11px]"
            >
              Send Inquiry
            </button>
            <p className="max-w-xs text-center text-[9px] uppercase tracking-[0.1em] text-zinc-400 md:text-[10px]">
              By submitting, you agree to our privacy policy and terms of stay.
            </p>
          </div>
        </form>

        <div className="mt-12 flex flex-col items-center gap-2 text-xs text-zinc-600 md:mt-16 md:text-sm">
          <p>Prefer direct contact?</p>
          <div className="flex flex-wrap justify-center gap-3 font-bold text-black md:gap-4">
            <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
            <span className="hidden text-zinc-200 sm:block">|</span>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:underline">{siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
