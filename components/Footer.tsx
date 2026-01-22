import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-[#c5a059]/20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-16 md:gap-24">
          {/* Brand & Intro */}
          <div className="w-full lg:w-1/3 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h2 className="font-display text-3xl uppercase tracking-[0.3em] text-white md:text-4xl">
                  {siteConfig.name}
                </h2>
              </Link>
              <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#c5a059] md:text-[10px] md:tracking-[0.6em]">
                COASTAL LUXURY
              </p>
            </div>
            <p className="max-w-md text-xs font-medium leading-relaxed text-zinc-500 tracking-wide md:text-sm">
              {siteConfig.description}
            </p>
            <div className="flex gap-8 pt-2 md:gap-10 md:pt-4">
              <a 
                href={siteConfig.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[18px] text-zinc-400 hover:text-[#c5a059] transition-all hover:-translate-y-1 duration-300 md:text-[20px]"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[18px] text-zinc-400 hover:text-[#c5a059] transition-all hover:-translate-y-1 duration-300 md:text-[20px]"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 lg:justify-end">
            <div className="space-y-6 md:space-y-10">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white md:text-[10px] md:tracking-[0.5em]">Navigate</p>
              <div className="flex flex-col gap-4 md:gap-5">
                {navItems.map(item => (
                  <Link key={item.href} href={item.href} className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors md:text-[10px] md:tracking-[0.3em]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-6 md:space-y-10">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white md:text-[10px] md:tracking-[0.5em]">Resort</p>
              <div className="flex flex-col gap-4 md:gap-5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-[10px] md:tracking-[0.3em]">
                <Link href="/rooms" className="hover:text-white transition-colors">Accommodations</Link>
                <Link href="/amenities" className="hover:text-white transition-colors">Curated Services</Link>
                <Link href="/gallery" className="hover:text-white transition-colors">Visual Story</Link>
                <Link href="/location" className="hover:text-white transition-colors">The Locale</Link>
              </div>
            </div>

            <div className="space-y-6 md:space-y-10">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white md:text-[10px] md:tracking-[0.5em]">Inquiries</p>
              <div className="flex flex-col gap-4 md:gap-5 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-[10px] md:tracking-[0.3em]">
                <p className="leading-relaxed text-zinc-600">{siteConfig.address}</p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
                <Link href="/book-now" className="text-[#c5a059] hover:text-white transition-colors underline decoration-[#c5a059]/30 underline-offset-8">Reserve Stay</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:mt-32 md:pt-16 md:flex-row items-center justify-between gap-8 md:gap-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-700 md:text-[10px] md:tracking-[0.4em]">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          
          <div className="group flex items-center gap-4 md:gap-6">
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-600 group-hover:text-zinc-400 transition-colors md:text-[9px] md:tracking-[0.6em]">
              Crafted by <a href="https://chamikarabandara.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 group-hover:text-white transition-colors ml-2 hover:underline underline-offset-4 decoration-[#c5a059]/40">Chamikara Bandara</a>
            </span>
            <div className="h-[1px] w-8 bg-zinc-800 group-hover:w-16 group-hover:bg-[#c5a059] transition-all duration-500 md:w-12 md:group-hover:w-20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
