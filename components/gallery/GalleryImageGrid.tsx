"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/site-data";
import GalleryLightbox from "./GalleryLightbox";

interface GalleryImageGridProps {
  images: GalleryImage[];
}

export default function GalleryImageGrid({ images }: GalleryImageGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function closeLightbox() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl2 bg-primary-100 text-left shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
            aria-label={`Open image: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-105"
            />
            {image.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-primary-900/70 px-4 py-3 text-sm text-white">
                {image.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          images={images}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
}
