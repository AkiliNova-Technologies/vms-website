import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import NewsEventsListing from "@/components/news/NewsEventsListing";
import { getPublishedNewsEvents } from "@/lib/news-events-data";

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
          title="News & Events"
          description="Stay connected with the latest stories, announcements and upcoming activities from Victoria Montessori School."
          image="/hero-image.jpeg"
          breadcrumb="News & Events"
        />

        <section className="section-space">
          <div className="container-page">
            <NewsEventsListing items={getPublishedNewsEvents()} />
          </div>
        </section>

        <section className="bg-primary-900 py-14 text-center text-white sm:py-16 lg:py-20">
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
