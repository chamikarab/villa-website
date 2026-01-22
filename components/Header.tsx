"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e2d1a8]/30 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-6">
        {/* Branding */}
        <Link
          href="/"
          className="group flex flex-col items-start gap-0.5 transition-opacity hover:opacity-80 md:items-center md:text-center"
        >
          <span className="font-display text-lg uppercase tracking-[0.3em] text-black sm:text-xl md:text-2xl md:tracking-[0.4em]">
            {siteConfig.name.split(" ")[0]}
          </span>
          <span className="text-[6px] font-bold uppercase tracking-[0.6em] text-[#c5a059] sm:text-[7px] md:text-[9px] md:tracking-[0.8em]">
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
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

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link
            href="/book-now"
            className="group relative hidden overflow-hidden rounded-full border border-black bg-black px-6 py-2.5 text-[9px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-transparent hover:text-black sm:block md:px-8 md:py-3"
          >
            <span className="relative z-10">Reserve Stay</span>
            <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[1px] w-6 bg-black transition-all duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1px] w-6 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1px] w-6 bg-black transition-all duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute left-0 top-full w-full bg-white transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[80vh] border-b border-[#e2d1a8]/30 py-12 opacity-100 shadow-xl"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-black/60 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book-now"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full rounded-full bg-black py-4 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-white sm:hidden"
          >
            Reserve Stay
          </Link>
        </nav>
      </div>
    </header>
  );
}
