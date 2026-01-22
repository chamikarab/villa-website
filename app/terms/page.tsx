import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Stay",
  description: "Review the villa stay terms and guest guidelines.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <div className="space-y-10 fade-up">
          <div className="space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
              Terms of Stay
            </p>
            <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
              Designed for care.
            </h1>
          </div>
          <div className="space-y-8 rounded-[40px] bg-white p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)] border border-[#e2d1a8]">
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-black">Reservations & Deposits</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                Reservations are formally confirmed upon receipt of a deposit and 
                written confirmation from our concierge team. Payment schedules and 
                cancellation policies are tailored to each stay and will be 
                detailed during the inquiry process.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-black">Check-in & Conduct</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                Check-in is welcomed from 2:00 PM and check-out is by 11:00 AM. 
                We kindly request that all guests respect the tranquility and 
                privacy of the estate and surrounding neighbors.
              </p>
            </div>
            <div className="space-y-4 border-t border-[#e2d1a8]/40 pt-8">
              <p className="text-sm text-zinc-400">
                Additional services, curated experiences, and special requests are 
                subject to availability and separate terms shared upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
