import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-black py-32 border-t border-[#c5a059]/20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-24">
          {/* Brand & Intro */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h2 className="font-display text-4xl uppercase tracking-[0.3em] text-white">
                  {siteConfig.name}
                </h2>
              </Link>
              <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#c5a059]">
                COASTAL LUXURY
              </p>
            </div>
            <p className="text-sm font-medium leading-relaxed text-zinc-500 tracking-wide">
              {siteConfig.description}
            </p>
            <div className="flex gap-6 pt-4">
              <a 
                href={siteConfig.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[20px] text-zinc-400 hover:text-[#c5a059] transition-all hover:-translate-y-1 duration-300"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[20px] text-zinc-400 hover:text-[#c5a059] transition-all hover:-translate-y-1 duration-300"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-16 lg:justify-end">
            <div className="space-y-10">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Navigate</p>
              <div className="flex flex-col gap-5">
                {navItems.map(item => (
                  <Link key={item.href} href={item.href} className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-10">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Resort</p>
              <div className="flex flex-col gap-5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                <Link href="/rooms" className="hover:text-white transition-colors">Accommodations</Link>
                <Link href="/amenities" className="hover:text-white transition-colors">Curated Services</Link>
                <Link href="/gallery" className="hover:text-white transition-colors">Visual Story</Link>
                <Link href="/location" className="hover:text-white transition-colors">The Locale</Link>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-10">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Inquiries</p>
              <div className="flex flex-col gap-5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                <p className="leading-loose text-zinc-600">{siteConfig.address}</p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
                <Link href="/book-now" className="text-[#c5a059] hover:text-white transition-colors underline decoration-[#c5a059]/30 underline-offset-8">Reserve Stay</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-700">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          
          <div className="group flex items-center gap-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
              Crafted by <a href="https://chamikarabandara.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 group-hover:text-white transition-colors ml-2 hover:underline underline-offset-4 decoration-[#c5a059]/40">Chamikara Bandara</a>
            </span>
            <div className="h-[1px] w-12 bg-zinc-800 group-hover:w-20 group-hover:bg-[#c5a059] transition-all duration-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
