import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Heart, Globe2 } from "lucide-react";
import { aboutPoints } from "@/lib/site-data";


export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-xl2 shadow-soft">
            <Image
              src="/about-image.jpeg"
              alt="Victoria Montessori School campus building"
              width={560}
              height={480}
              className="h-[440px] w-full object-cover sm:h-[440px]"
            />
          </div>

        </div>

        <div>
          <span className="eyebrow">About Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Nurturing Curious Minds.
            <br />
            Building Confident Individuals.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Founded in 2001, Victoria Montessori School provides Montessori-based
            education for children aged 2 to 12. We are a mixed day and boarding
            school where children discover their abilities, develop
            self-confidence, and cultivate a lifelong love for learning.
          </p>

          <ul className="mt-6 space-y-3">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-ink">
                <CheckCircle2 className="h-5 w-5 flex-none text-primary-500" />
                {point}
              </li>
            ))}
          </ul>

          <Link href="#academics" className="btn-primary mt-8">
            Read More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-primary-100 pt-6">
            <div className="flex items-center gap-2.5">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-ink">
                Caring, values-led community
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-ink">
                Globally minded curriculum
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
