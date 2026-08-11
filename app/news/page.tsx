import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { newsItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "News & Events | Victoria Montessori School",
  description:
    "Stay up to date with the latest news, events and announcements from Victoria Montessori School.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="News & Events"
          title="What's Happening at Victoria Montessori"
          description="Announcements, upcoming events, and updates from around our school community."
          image="/hero-image.jpeg"
          breadcrumb="News & Events"
        />

        <section className="py-16 sm:py-24">
          <div className="container-page">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-xl2 border border-primary-100 shadow-card transition hover:shadow-soft"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-900">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-primary-500">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-primary-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Placeholder-content notice: remove once real posts are added */}
            <p className="mt-10 text-center text-xs text-muted">
              Dates for upcoming events will be published here as they are
              confirmed. Follow us on social media for the latest updates.
            </p>
          </div>
        </section>

        <section className="bg-primary-900 py-16 text-center text-white sm:py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Never Miss an Update
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/85">
              Reach out to the school office to be added to our parent
              communication list, or follow us on social media for the
              latest news and event announcements.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              <Mail className="h-4 w-4" />
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
