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
      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <div className="flex flex-col items-center gap-6 text-center mb-16 fade-up">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
            Reservations
          </p>
          <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
            Begin your journey.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
            Share your preferred dates and travel details. Our concierge will respond
            within 24 hours with availability and curated stay options.
          </p>
          <div className="mt-4 h-0.5 w-12 bg-black" />
        </div>

        <form className="grid gap-10 rounded-[40px] bg-white p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border border-[#e2d1a8] fade-up [animation-delay:200ms]">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Arrival Date
              </label>
              <input
                type="date"
                name="arrival"
                className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Departure Date
              </label>
              <input
                type="date"
                name="departure"
                className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Guests
              </label>
              <input
                type="number"
                name="guests"
                min={1}
                placeholder="Number of guests"
                className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Preferred Suite
              </label>
              <select
                name="suite"
                className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
              >
                <option>Horizon Suite</option>
                <option>Cove Residence</option>
                <option>Garden Pavilion</option>
                <option>Open to suggestions</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Special Requests
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your stay preferences..."
              className="w-full rounded-3xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
            />
          </div>
          <div className="flex flex-col items-center gap-6 pt-4">
            <button
              type="submit"
              className="w-full rounded-full bg-black py-5 text-[11px] font-bold uppercase tracking-[0.4em] text-white transition hover:bg-zinc-800 md:w-fit md:px-12"
            >
              Send Inquiry
            </button>
            <p className="max-w-xs text-center text-[10px] uppercase tracking-[0.1em] text-zinc-400">
              By submitting, you agree to our privacy policy and terms of stay.
            </p>
          </div>
        </form>

        <div className="mt-16 flex flex-col items-center gap-2 text-sm text-zinc-600">
          <p>Prefer direct contact?</p>
          <div className="flex gap-4 font-bold text-black">
            <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
            <span className="text-zinc-200">|</span>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:underline">{siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
