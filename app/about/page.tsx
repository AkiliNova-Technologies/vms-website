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
  founderProfile,
  montessoriApproach,
  schoolIdentity,
  schoolJourney,
  schoolImages,
  wholeChildPillars,
  lifeSkills,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | Victoria Montessori School",
  description:
    "Discover the history, Montessori heritage and educational approach of Victoria Montessori School in Entebbe, Uganda.",
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
          description={schoolIdentity.programmeDescriptor}
          image={schoolImages.classroomLesson}
          imageAlt="Students seated at desks during a classroom lesson"
          breadcrumb="About Us"
        />

        {/* Founding story */}
        <section className="section-space">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <Image
                src="/about-image.jpeg"
                alt="Victoria Montessori School campus building"
                width={560}
                height={480}
                className="h-72 w-full object-cover sm:h-96 lg:h-[440px]"
              />
            </div>

            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Founded in 2001
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Victoria Montessori&apos;s Montessori outreach relationship began
                in the late 1990s. In 1999, Christine Olanya travelled to the
                United States for Montessori teacher training and an internship
                with North Shore Montessori Schools.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                She returned to Uganda in 2000 to plan a Montessori school in
                Entebbe. In 2001, Christine and her husband, Joseph Olanya,
                opened Victoria Montessori School for approximately 30
                preschool children. The school subsequently expanded its
                facilities and extended Montessori education into the primary
                years.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Today, Victoria Montessori is a mixed day and boarding school
                in Entebbe. {schoolIdentity.programmeDescriptor}
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="section-space bg-primary-50/60">
          <div className="container-page">
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow">Our Founder</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                {founderProfile.name}
              </h2>
              <p className="mt-2 font-display text-lg font-semibold text-primary-600">
                {founderProfile.title}
              </p>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                {founderProfile.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Montessori heritage and school journey */}
        <section className="section-space">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Montessori Heritage</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                A School Shaped by Montessori Collaboration
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Victoria Montessori&apos;s development has longstanding links with
                the international Montessori community. Its early years
                included Montessori teacher training and collaboration with
                North Shore Montessori Schools and other Montessori
                organisations in the United States. The school historically
                received affiliation from the American Montessori Society.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {schoolJourney.map((milestone) => (
                <div
                  key={milestone.year}
                  className="rounded-xl2 border border-primary-100 p-6 shadow-card"
                >
                  <span className="font-display text-xl font-bold text-primary-600">
                    {milestone.year}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-primary-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Montessori approach */}
        <section className="section-space bg-primary-50/60">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Our Montessori Approach</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Learning Through Discovery, Independence and Purpose
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Our Montessori-inspired approach recognises that children are
                active participants in their own development, learning through
                purposeful activity in a carefully prepared environment.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
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
        <section className="section-space">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Education for the Whole Child</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Three Interconnected Areas of Development
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:mt-12 lg:gap-6">
              {wholeChildPillars.map((pillar) => {
                const Icon = iconMap[pillar.icon] ?? Sparkles;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-xl2 border border-primary-100 p-6 text-center sm:p-8"
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

            <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted sm:mt-10">
              Together, these objectives form the foundation of our approach
              to all-round education helping children understand:
            </p>
            <blockquote className="mx-auto mt-6 max-w-2xl rounded-xl2 bg-primary-900 px-6 py-7 text-center font-display text-xl font-semibold italic text-white sm:px-8 sm:py-8 sm:text-2xl">
              &ldquo;I am a worthy person, a lovable person, a capable
              person.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* More than a classroom */}
        <section className="section-space bg-primary-50/60">
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

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {lifeSkills.map((skill) => {
                const Icon = iconMap[skill.icon] ?? CheckCircle2;
                return (
                  <div
                    key={skill.title}
                    className="flex items-start gap-4 rounded-xl2 bg-white p-5 shadow-card sm:p-6"
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

        {/* Mission, vision and motto */}
        <section className="section-space">
          <div className="container-page grid gap-5 lg:grid-cols-3 lg:gap-6">
            <div className="rounded-xl2 bg-primary-900 p-7 text-white sm:p-10">
              <span className="eyebrow text-accent">Our Mission</span>
              <p className="mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl">
                To lay a firm foundation of learning with all-round education
                through the Montessori approach of education for children with
                different abilities.
              </p>
            </div>
            <div className="rounded-xl2 border border-primary-100 bg-white p-7 sm:p-10">
              <span className="eyebrow">Our Vision</span>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-primary-900 sm:text-2xl">
                To develop honest, God-fearing, peaceful, confident,
                innovative and self-reliant individuals.
              </p>
            </div>
            <div className="rounded-xl2 border border-primary-100 bg-accent-light p-7 sm:p-10">
              <span className="eyebrow">Our Motto</span>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-primary-900 sm:text-2xl">
                {schoolIdentity.motto}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-900 py-14 text-center text-white sm:py-16 lg:py-20">
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
