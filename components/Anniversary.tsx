"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PartyPopper,
  ArrowRight,
  Camera,
} from "lucide-react";

export default function Anniversary() {

  return (
    <section className="relative isolate overflow-hidden bg-[#071b4a] py-14 text-white sm:py-20 lg:py-24">
      {/* Anniversary image */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[65%] bottom-10">
        <Image
          src="/vms-25th-anniversary.webp"
          alt="Victoria Montessori School 25th Anniversary"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* Gradient that hides the image on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b4a] via-[#071b4a]/20 via-5% to-[#071b4a]/10 to-100%" />

        {/* Slight overall darkening */}
        <div className="absolute inset-0 bg-[#071b4a]/20" />
      </div>

      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[15%] bottom-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-page relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: retrospective announcement */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
            <PartyPopper className="h-3.5 w-3.5" />
            25th Anniversary
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
            We Celebrated 25 Years of {" "}
            <span className="text-primary-200">
              Nurturing Curious Minds.
            </span>
          </h2>

          <p className="mt-5 max-w-lg leading-relaxed text-white/85">
            On April 25, 2026, we marked 25 years since our founding in
            2001 a milestone made possible by the generations of children,
            families and staff who have been part of the Victoria Montessori
            community. Thank you to everyone who joined us in celebrating.
          </p>


          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/gallery" className="btn-primary w-full sm:w-auto">
              <Camera className="h-4 w-4" />
              See Celebration Photos
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Our Story Since 2001
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
