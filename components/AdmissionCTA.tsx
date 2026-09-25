import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section id="admissions" className="section-space">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl2 bg-primary-600">
          <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
            <div className="p-7 sm:p-10 lg:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Admissions
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Give Your Child the Best Start
                <br />
                at Victoria Montessori
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-50">
                Admissions are open. Visit us at Plot 60–66 Ssebugwawo Road,
                Entebbe or get in touch: +256 772 619 865 •
                vmontessori@yahoo.co.uk.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link href="/admissions" className="btn-primary w-full sm:w-auto">
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative h-64 lg:h-full">
              <Image
                src="/admissions-cta-2.jpeg"
                alt="Student smiling while heading to school"
                fill
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/40 to-transparent lg:from-primary-600/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
