import Link from "next/link";
import { BookOpen, PenLine, FlaskConical, Trophy, ArrowRight } from "lucide-react";
import { programs } from "@/lib/site-data";

const icons = { BookOpen, PenLine, FlaskConical, Trophy } as const;

export default function Programs() {
  return (
    <section id="academics" className="bg-primary-50/60 py-16 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Our Programs</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Montessori Programmes
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A Montessori curriculum focused on independence, exploration, and
            whole-child development for early years and primary learners.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = icons[program.icon as keyof typeof icons];
            return (
              <div
                key={program.title}
                className="group rounded-2xl bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-wide text-accent">
                  {program.grade}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-primary-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {program.description}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="#" className="btn-outline-dark">
            View All Programs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
