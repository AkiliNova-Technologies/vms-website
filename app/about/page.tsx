import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Target,
  Palette,
  BrainCircuit,
  HandHeart,
  HeartHandshake,
  BookOpenCheck,
  Users,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  montessoriApproach,
  wholeChildPillars,
  lifeSkills,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Victoria Montessori School",
  description:
    "Founded in 2001, Victoria Montessori School provides Montessori-based education for children aged 2–12 in Entebbe, Uganda.",
};

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Sparkles,
  Target,
  Palette,
  BrainCircuit,
  HandHeart,
  HeartHandshake,
  BookOpenCheck,
  Users,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="About Us"
          title="Nurturing Curious Minds. Building Confident Individuals."
          description="Montessori-based education for children aged 2–12, in a safe, peaceful and nurturing environment in Entebbe, Uganda."
          image="/hero-image.jpeg"
          breadcrumb="About Us"
        />

        {/* Founding story */}
        <section className="py-16 sm:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <Image
                src="/about-image.jpeg"
                alt="Victoria Montessori School campus building"
                width={560}
                height={480}
                className="h-[440px] w-full object-cover"
              />
            </div>

            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Founded in 2001
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Victoria Montessori School was established to meet the
                community&apos;s need for exceptional education within a
                safe, peaceful, and nurturing learning environment. For more
                than two decades, we have provided Montessori-based education
                for children during some of the most important stages of
                their development.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Today, we welcome children from 2 to 12 years, offering
                education across preschool and primary levels. As a full-day,
                mixed day and boarding school, we provide families with
                flexible options that support different educational and
                family needs — with school transport available for families
                within designated areas around Entebbe and its surrounding
                communities.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Our school community welcomes children and staff from diverse
                backgrounds, regardless of tribe, race, religion, colour,
                nationality, or ethnicity. We believe every child deserves to
                be valued, respected, and given the opportunity to reach
                their potential.
              </p>
            </div>
          </div>
        </section>

        {/* Montessori approach */}
        <section className="bg-primary-50/60 py-16 sm:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Our Montessori Approach</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Learning Through Discovery, Independence and Purpose
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Guided by the principles of the American Montessori Society
                and accredited by the Ministry of Education and Sports, we
                recognise that children are active participants in their own
                development.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {montessoriApproach.map((item) => {
                const Icon = iconMap[item.icon] ?? Sparkles;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl2 bg-white p-6 shadow-card"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-primary-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education for the whole child */}
        <section className="py-16 sm:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Education for the Whole Child</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Three Interconnected Areas of Development
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {wholeChildPillars.map((pillar) => {
                const Icon = iconMap[pillar.icon] ?? Sparkles;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-xl2 border border-primary-100 p-8 text-center"
                  >
                    <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-800 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-primary-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted">
              Together, these objectives form the foundation of our approach
              to all-round education — helping children understand:
            </p>
            <blockquote className="mx-auto mt-6 max-w-2xl rounded-xl2 bg-primary-900 px-8 py-8 text-center font-display text-xl font-semibold italic text-white sm:text-2xl">
              &ldquo;I am a worthy person, a lovable person, a capable
              person.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* More than a classroom */}
        <section className="bg-primary-50/60 py-16 sm:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">More Than a Classroom</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Developing Skills for Life
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Children need opportunities to develop the practical and
                social abilities that allow them to navigate the world with
                confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {lifeSkills.map((skill) => {
                const Icon = iconMap[skill.icon] ?? CheckCircle2;
                return (
                  <div
                    key={skill.title}
                    className="flex items-start gap-4 rounded-xl2 bg-white p-6 shadow-card"
                  >
                    <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent-light text-primary-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-primary-900">
                        {skill.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & vision */}
        <section className="py-16 sm:py-24">
          <div className="container-page grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl2 bg-primary-900 p-10 text-white">
              <span className="eyebrow text-accent">Our Mission</span>
              <p className="mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl">
                To lay a firm foundation of learning with all-round education
                through the Montessori approach of education to all children
                with different abilities.
              </p>
            </div>
            <div className="rounded-xl2 border border-primary-100 bg-white p-10">
              <span className="eyebrow">Our Vision</span>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-primary-900 sm:text-2xl">
                To produce an honest, God-fearing, peaceful, confident,
                innovative and self-reliant individual.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-900 py-16 text-center text-white sm:py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Learn. Explore. Grow. Become.
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/85">
              We invite you to discover what Victoria Montessori School has
              to offer your child, from their earliest years through primary
              education.
            </p>
            <Link href="/admissions" className="btn-primary mt-7">
              Begin the Admissions Process
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
