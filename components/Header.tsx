import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e2d1a8]/30 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-10 px-8 py-6">
        {/* Branding */}
        <Link
          href="/"
          className="group flex flex-col items-center gap-1 text-center transition-opacity hover:opacity-80"
        >
          <span className="font-display text-2xl uppercase tracking-[0.4em] text-black">
            {siteConfig.name.split(' ')[0]}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.8em] text-[#c5a059]">
            {siteConfig.name.split(' ').slice(1).join(' ')}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-black/60 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-[#c5a059] after:transition-all hover:text-black hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Link
            href="/book-now"
            className="group relative overflow-hidden rounded-full border border-black bg-black px-8 py-3 text-[9px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-transparent hover:text-black"
          >
            <span className="relative z-10">Reserve Stay</span>
            <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </header>
  );
}
