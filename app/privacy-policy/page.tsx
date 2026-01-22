import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Azure Dunes Villa protects and uses guest information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-24">
        <div className="space-y-10 fade-up">
          <div className="space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
              Privacy Policy
            </p>
            <h1 className="font-display text-5xl leading-tight text-black md:text-7xl">
              Respecting your privacy.
            </h1>
          </div>
          <div className="space-y-8 rounded-[40px] bg-white p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)] border border-[#e2d1a8]">
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-black">Information Collection</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                We collect personal details such as your name, email, and travel 
                preferences through our inquiry forms solely to facilitate your 
                reservations and plan your stay. We prioritize the security of 
                your data and never share it with third parties for marketing purposes.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-black">Data Usage</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                Your information is used only as long as necessary to provide 
                hospitality services or comply with legal obligations. We may 
                occasionally send updates regarding your stay or requested services.
              </p>
            </div>
            <div className="space-y-4 border-t border-[#e2d1a8]/40 pt-8">
              <p className="text-sm text-zinc-400">
                If you have questions about your data or wish to request removal, 
                please reach out to our concierge team directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
