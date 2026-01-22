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
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden bg-black md:h-[92vh] md:min-h-[700px]">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="scale-105 object-cover opacity-70 transition-transform duration-[10000ms] ease-linear md:hover:scale-100"
          priority
          sizes="100vw"
        />
        {/* Gradients for Premium Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white md:px-8">
        <div className="flex w-full flex-col items-center gap-8 md:gap-10 fade-up">
          <div className="w-full space-y-4 md:space-y-6">
            <p className="flex items-center justify-center gap-3 text-[7px] font-bold uppercase tracking-[0.5em] text-[#e2d1a8] sm:text-[8px] md:gap-4 md:text-[10px] md:tracking-[0.8em]">
              <span className="h-[1px] w-5 bg-[#e2d1a8]/40 sm:w-8" />
              Private Coastal Sanctuary
              <span className="h-[1px] w-5 bg-[#e2d1a8]/40 sm:w-8" />
            </p>
            <h1 className="font-display text-3xl leading-[1.2] tracking-tight sm:text-5xl md:text-8xl md:leading-[1.05] lg:text-9xl">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-[#e2d1a8]" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </div>
          
          <p className="max-w-xl text-[10px] font-medium leading-relaxed tracking-wide text-zinc-300 sm:text-sm md:text-lg">
            {subtitle}
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-8">
            <Link
              href={ctaHref}
              className="group relative w-full px-10 py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-black transition-transform active:scale-95 sm:w-auto sm:px-12 sm:py-5 sm:text-[10px]"
            >
              <div className="absolute inset-0 rounded-full bg-[#e2d1a8] transition-transform duration-300 group-hover:scale-105" />
              <span className="relative z-10">{ctaLabel}</span>
            </Link>
            
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="group flex items-center justify-center gap-4 py-2 text-[9px] font-bold uppercase tracking-[0.4em] text-white transition-colors hover:text-[#e2d1a8] sm:text-[10px]"
              >
                <span>{secondaryLabel}</span>
                <span className="h-[1px] w-8 bg-white/30 transition-all group-hover:w-12 group-hover:bg-[#e2d1a8] md:w-16" />
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
