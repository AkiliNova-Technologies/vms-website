"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/site-data";

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const image = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (hasMultipleImages && event.key === "ArrowLeft") onPrevious();
      if (hasMultipleImages && event.key === "ArrowRight") onNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hasMultipleImages, onClose, onNext, onPrevious]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-900/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onMouseDown={onClose}
    >
      <div
        className="relative flex h-full w-full max-w-6xl items-center justify-center"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={1066}
          sizes="100vw"
          className="max-h-full w-auto max-w-full rounded-lg object-contain"
          priority
        />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-900/80 text-white transition hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Close image viewer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={onPrevious}
              className="absolute left-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-900/80 text-white transition hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-900/80 text-white transition hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </>
        )}

        {image.caption && (
          <p className="absolute bottom-0 max-w-[calc(100%-2rem)] rounded-md bg-primary-900/80 px-4 py-2 text-center text-sm text-white">
            {image.caption}
          </p>
        )}
      </div>
    </div>
  );
}
