import Image from "next/image";
import Link from "next/link";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Image Container - set height here */}
      <div className="absolute inset-x-0 top-0 z-0 h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src="/hero-image.jpeg"
          alt="Victoria Montessori School background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/40 to-transparent" />
      </div>

      {/* Content - remove min-h-screen, use padding to control height */}
      <div className="container-page relative z-10 grid gap-10 px-4 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:py-24" style={{ minHeight: '40vh' }}>
        <div className="text-white">
          <span className="eyebrow text-white/80">Welcome to Victoria Montessori School</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.4rem]">
            Nurturing Curious Minds.
            <br />
            <span className="text-primary-200">Building Confident Individuals.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/90">
            A Montessori-based school for children aged 2–12, nurturing
            curiosity, independence, and a lifelong love of learning.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#academics" className="btn-primary">
              Discover Our School
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              <PlayCircle className="h-4 w-4" />
              Watch Video
            </Link>
          </div>
        </div>

        {/* Optional: Add a subtle glass-morphism card on the right side */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}