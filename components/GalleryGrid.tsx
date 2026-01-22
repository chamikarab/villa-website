import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`group relative overflow-hidden rounded-[32px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.04)] fade-up border border-[#e2d1a8]`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="absolute bottom-6 left-6 translate-y-4 text-xs font-bold uppercase tracking-[0.3em] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {image.alt}
          </div>
        </div>
      ))}
    </div>
  );
}
