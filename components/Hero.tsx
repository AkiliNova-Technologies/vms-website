"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { heroSlides } from "@/lib/site-data";

const AUTO_ADVANCE_MS = 7000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [autoplayKey, setAutoplayKey] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isHovered || hasFocusWithin || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(interval);
  }, [autoplayKey, hasFocusWithin, isHovered, prefersReducedMotion]);

  function selectSlide(index: number, preserveFocusPause = false) {
    setActiveIndex(index);
    setAutoplayKey((key) => key + 1);
    if (!preserveFocusPause) setHasFocusWithin(false);
  }

  function showPreviousSlide(preserveFocusPause = false) {
    selectSlide(
      (activeIndex - 1 + heroSlides.length) % heroSlides.length,
      preserveFocusPause,
    );
  }

  function showNextSlide(preserveFocusPause = false) {
    selectSlide((activeIndex + 1) % heroSlides.length, preserveFocusPause);
  }

  const activeSlide = heroSlides[activeIndex];

  return (
    <section
      id="home"
      className="relative min-h-[72svh] overflow-hidden sm:min-h-[76svh] lg:min-h-[calc(100svh-4.5rem)] xl:min-h-[calc(100svh-6.5rem)]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Victoria Montessori School highlights"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHasFocusWithin(false);
        }
      }}>
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}>
            <Image
              src={slide.image}
              alt={index === activeIndex ? slide.imageAlt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={100}
              className={`object-cover transition-transform duration-700 motion-reduce:transition-none ${
                slide.imagePositionClassName ?? "object-center"
              } ${index === activeIndex ? "scale-[1.02]" : "scale-100"}`}
            />
          </div>
        ))}
        <div
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            activeSlide.overlayClassName ??
            "bg-gradient-to-r from-primary-900/90 via-primary-900/68 to-primary-900/20 sm:from-primary-900/85 sm:via-primary-900/50 sm:to-transparent"
          }`}
        />
      </div>

      <div className="container-page relative z-10 flex min-h-[72svh] flex-col justify-center py-14 sm:min-h-[76svh] sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:py-20 xl:min-h-[calc(100svh-6.5rem)]">
        <div
          key={activeSlide.id}
          className="max-w-xl animate-in fade-in-0 slide-in-from-bottom-2 duration-500 motion-reduce:animate-none">
          <span className="eyebrow text-white/80">{activeSlide.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            {activeSlide.title}
            {activeSlide.highlightedTitle && (
              <>
                <br />
                <span className="text-primary-200">
                  {activeSlide.highlightedTitle}
                </span>
              </>
            )}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            {activeSlide.description}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={activeSlide.primaryAction.href}
              className="btn-primary w-full sm:w-auto">
              {activeSlide.primaryAction.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {activeSlide.secondaryAction && (
              <Link
                href={activeSlide.secondaryAction.href}
                className="btn-outline w-full sm:w-auto">
                {activeSlide.secondaryAction.label}
              </Link>
            )}
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:mt-12 lg:absolute lg:bottom-12 lg:left-8 lg:mt-0 lg:justify-start xl:bottom-16"
          role="group"
          aria-label="Carousel controls">
          <button
            type="button"
            onClick={(event) => showPreviousSlide(event.detail === 0)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Previous slide">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-current={index === activeIndex ? "true" : undefined}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                onClick={(event) => selectSlide(index, event.detail === 0)}
                className={`inline-flex h-11border items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  index === activeIndex
                    ? "text-accent"
                    : "text-white/65 hover:text-white"
                }`}>
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    index === activeIndex ? "w-6 bg-accent" : "w-2 bg-current"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={(event) => showNextSlide(event.detail === 0)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Next slide">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
