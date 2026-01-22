import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with our villa concierge for any inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-12 fade-up">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Contact Us
              </p>
              <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
                We are here to curate your stay.
              </h1>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Location</p>
                <p className="text-sm font-medium leading-relaxed text-zinc-600">{siteConfig.address}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Inquiries</p>
                <div className="flex flex-col gap-1 text-sm font-bold text-black">
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:underline transition">{siteConfig.phone}</a>
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline transition">{siteConfig.email}</a>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-zinc-100 p-10 text-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]">
              <p className="font-display text-2xl tracking-wide">Concierge Hours</p>
              <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                Our team is available daily from 8:00 AM to 10:00 PM (GMT+5:30) to 
                assist with reservations and planning.
              </p>
            </div>
          </div>

          <form className="grid gap-10 rounded-[40px] bg-white p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] border border-[#e2d1a8] fade-up [animation-delay:200ms]">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                  required
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                className="w-full rounded-2xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">Message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Share your request..."
                className="w-full rounded-3xl border border-zinc-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#c5a059]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-black py-5 text-[11px] font-bold uppercase tracking-[0.4em] text-white transition hover:bg-zinc-800 md:w-fit md:px-12"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
