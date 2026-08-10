import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section id="admissions" className="py-16 sm:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl2 bg-primary-600">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="p-8 sm:p-12 lg:p-14">
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
                Entebbe or get in touch: +256 772 619 865 • vmontessori@yahoo.co.uk.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#" className="btn-outline">
                  <Download className="h-4 w-4" />
                  Download Prospectus
                </Link>
              </div>
            </div>

            <div className="relative h-64 lg:h-full">
              <Image
                src="/admissions-cta-2.jpeg"
                alt="Student smiling while heading to school"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/40 to-transparent lg:from-primary-600/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
