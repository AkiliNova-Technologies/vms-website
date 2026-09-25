import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  GraduationCap,
  PenTool,
  FlaskConical,
  HandHeart,
  BrainCircuit,
  BookOpenCheck,
  Compass,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  academicLevels,
  academicApproachPoints,
  academicSkillAreas,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Academics | Victoria Montessori School",
  description:
    "Explore Montessori-inspired education from early childhood through Primary Seven at Victoria Montessori School, Entebbe.",
};

const iconMap: Record<string, LucideIcon> = {
  Baby,
  GraduationCap,
  PenTool,
  FlaskConical,
  HandHeart,
  BrainCircuit,
  BookOpenCheck,
  Compass,
  Target,
  Sparkles,
};

export default function AcademicsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Academics"
          title="Learning from the Early Years to Primary"
          description="A Montessori-inspired programme from early childhood through Primary Seven."
          image="/hero-image.jpeg"
          breadcrumb="Academics"
        />

        {/* Levels */}
        <section className="section-space">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Our Programme</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                One School, Every Stage of Growth
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Children grow within a familiar educational environment as
                they progress from our Early Years classes through to
                Primary 7, allowing for a consistent Montessori approach
                across every stage.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
              {academicLevels.map((level) => {
                const Icon = iconMap[level.icon] ?? GraduationCap;
                return (
                  <div
                    key={level.title}
                    className="flex gap-4 rounded-xl2 border border-primary-100 p-5 shadow-card sm:gap-5 sm:p-7"
                  >
                    <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary-800 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                        {level.stage} · {level.ageRange}
                      </span>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-primary-900">
                        {level.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {level.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Teaching philosophy */}
        <section className="section-space bg-primary-50/60">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="eyebrow">Our Teaching Philosophy</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Hands On, Child Led Learning
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Our Montessori programme seeks to develop each child&apos;s
                intellectual, creative, and academic potential while
                providing the freedom and guidance necessary for meaningful
                exploration, within a stimulating and ordered learning
                environment.
              </p>

              <ul className="mt-6 space-y-3">
                {academicApproachPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-ink"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {academicSkillAreas.map((area) => {
                const Icon = iconMap[area.icon] ?? Sparkles;
                return (
                  <div
                    key={area.title}
                    className="rounded-xl2 bg-white p-5 shadow-card"
                  >
                    <Icon className="h-5 w-5 text-primary-600" />
                    <p className="mt-3 text-sm font-medium leading-snug text-ink">
                      {area.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Balance callout */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-page">
            <div className="rounded-xl2 bg-primary-900 px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:px-16">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                A Healthy Balance of Work, Exploration and Play
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/85">
                We aim to create a stimulating and ordered learning
                environment where children can discover the joy of learning
                building problem solving abilities, decision-making, and the
                confidence to think for themselves.
              </p>
              <Link href="/admissions" className="btn-primary mt-7">
                Apply to Victoria Montessori
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
