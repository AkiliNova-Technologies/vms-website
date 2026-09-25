import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import type { GalleryCollection } from "@/lib/site-data";

interface GalleryCollectionGridProps {
  collections: GalleryCollection[];
}

export default function GalleryCollectionGrid({
  collections,
}: GalleryCollectionGridProps) {
  const publishedCollections = collections.filter(
    (collection) => collection.images.length > 0,
  );

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
      {publishedCollections.map((collection) => {
        const coverImage =
          collection.images.find((image) => image.src === collection.coverImage) ??
          collection.images[0];

        return (
          <Link
            key={collection.slug}
            href={`/gallery/${collection.slug}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl2 bg-primary-900 shadow-card transition-[transform,box-shadow] duration-300 ease-out hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600 motion-reduce:transition-none"
          >
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-primary-900/50 via-45% to-transparent transition-colors duration-300 group-hover:from-primary-900/100 group-hover:via-primary-900/60 motion-reduce:transition-none"
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h2 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                {collection.title}
              </h2>

              {collection.description && (
                <p className="mt-2 line-clamp-2 max-w-[34rem] text-sm leading-relaxed text-white/80">
                  {collection.description}
                </p>
              )}

              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
                  <Images className="h-3.5 w-3.5" aria-hidden="true" />
                  {collection.images.length} {collection.images.length === 1 ? "photo" : "photos"}
                </span>
                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/20 bg-white/10 text-accent transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">View {collection.title}</span>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
