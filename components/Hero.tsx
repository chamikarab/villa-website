import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function Hero({
  title,
  subtitle,
  imageSrc,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: HeroProps) {
  return (
    <section className="relative h-[92vh] min-h-[700px] w-full overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="scale-105 object-cover opacity-70 transition-transform duration-[10000ms] ease-linear hover:scale-100"
          priority
          sizes="100vw"
        />
        {/* Gradients for Premium Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-8 text-center text-white">
        <div className="flex flex-col items-center gap-10 fade-up">
          <div className="space-y-6">
            <p className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.8em] text-[#e2d1a8]">
              <span className="h-[1px] w-8 bg-[#e2d1a8]/40" />
              Private Coastal Sanctuary
              <span className="h-[1px] w-8 bg-[#e2d1a8]/40" />
            </p>
            <h1 className="font-display text-6xl leading-[1.05] tracking-tight md:text-9xl">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-[#e2d1a8]" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </div>
          
          <p className="max-w-xl text-sm font-medium leading-relaxed tracking-wide text-zinc-300 md:text-lg">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            <Link
              href={ctaHref}
              className="group relative px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-black transition-transform active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-[#e2d1a8] transition-transform duration-300 group-hover:scale-105" />
              <span className="relative z-10">{ctaLabel}</span>
            </Link>
            
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-colors hover:text-[#e2d1a8]"
              >
                <span>{secondaryLabel}</span>
                <span className="h-[1px] w-12 bg-white/30 transition-all group-hover:w-16 group-hover:bg-[#e2d1a8]" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-4 opacity-40">
          <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white">Scroll</span>
        </div>
      </div>
    </section>
  );
}
