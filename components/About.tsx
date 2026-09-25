import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { aboutPoints, schoolIdentity } from "@/lib/site-data";


export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-xl2 shadow-soft">
            <Image
              src="/about-image.jpeg"
              alt="Victoria Montessori School campus building"
              width={560}
              height={480}
              className="h-72 w-full object-cover sm:h-96 lg:h-[440px]"
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
            Founded in 2001, Victoria Montessori School provides {schoolIdentity.programmeDescriptor.replace("Providing ", "")} We are a mixed day and boarding
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

          <Link href="/about" className="btn-primary mt-8">
            Read More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </div>
    </section>
  );
}
