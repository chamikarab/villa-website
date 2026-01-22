import Image from "next/image";
import Link from "next/link";

type RoomCardProps = {
  slug: string;
  title: string;
  description: string;
  rate: string;
  image: string;
  details: string[];
};

export function RoomCard({
  slug,
  title,
  description,
  rate,
  image,
  details,
}: RoomCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] bg-white shadow-[0_16px_50px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-[#e2d1a8]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      </div>
      <div className="space-y-5 p-8">
        <div className="space-y-2">
          <h3 className="font-display text-2xl tracking-wide text-black">{title}</h3>
          <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-4 border-y border-[#e2d1a8]/50 py-4">
          {details.map((detail) => (
            <li key={detail} className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
              {detail}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-black">
            {rate}
          </p>
          <Link
            href={`/rooms/${slug}`}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a059] transition duration-300 hover:translate-x-1"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
