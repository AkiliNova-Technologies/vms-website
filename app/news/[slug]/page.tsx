import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  formatSchoolDate,
  getNewsEventBySlug,
  getPublishedNewsEvents,
  type SchoolEvent,
} from "@/lib/news-events-data";

interface NewsEventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPublishedNewsEvents().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: NewsEventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsEventBySlug(slug);

  if (!item) return {};

  return {
    title: `${item.title} | Victoria Montessori School`,
    description: item.excerpt,
  };
}

function EventDetails({ event }: { event: SchoolEvent }) {
  const statusLabel =
    event.status === "cancelled"
      ? "Cancelled event"
      : event.status === "completed"
        ? "Past event"
        : "Upcoming event";

  return (
    <aside className="rounded-xl2 bg-primary-50 p-5 sm:p-6" aria-label="Event details">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
        {statusLabel}
      </p>
      <dl className="mt-4 space-y-4 text-sm text-primary-900">
        <div className="flex gap-3">
          <CalendarDays className="mt-0.5 h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
          <div>
            <dt className="font-semibold">Date</dt>
            <dd className="mt-0.5 text-muted">
              <time dateTime={event.startDate}>{formatSchoolDate(event.startDate, true)}</time>
              {event.endDate && (
                <>
                  {" – "}
                  <time dateTime={event.endDate}>{formatSchoolDate(event.endDate)}</time>
                </>
              )}
            </dd>
          </div>
        </div>
        {event.time && (
          <div className="flex gap-3">
            <Clock3 className="mt-0.5 h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
            <div>
              <dt className="font-semibold">Time</dt>
              <dd className="mt-0.5 text-muted">{event.time}</dd>
            </div>
          </div>
        )}
        {event.location && (
          <div className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
            <div>
              <dt className="font-semibold">Location</dt>
              <dd className="mt-0.5 text-muted">{event.location}</dd>
            </div>
          </div>
        )}
      </dl>
    </aside>
  );
}

export default async function NewsEventDetailPage({
  params,
}: NewsEventDetailPageProps) {
  const { slug } = await params;
  const item = getNewsEventBySlug(slug);

  if (!item) notFound();

  const isEvent = item.type === "event";
  const content = item.content ?? [item.excerpt];

  return (
    <>
      <Header />
      <main>
        <article className="section-space">
          <div className="container-page">
            <Link
              href="/news"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to News &amp; Events
            </Link>

            <header className="mt-7 max-w-3xl">
              <p className="eyebrow">{isEvent ? "Event" : item.category ?? "School News"}</p>
              <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
                {item.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{item.excerpt}</p>
            </header>

            {item.image && (
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl2 bg-primary-100 sm:mt-10">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  fill
                  priority
                  sizes="(min-width: 1280px) 72rem, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(16rem,1fr)] lg:items-start lg:gap-12">
              <div className="max-w-3xl text-base leading-8 text-ink sm:text-lg sm:leading-8">
                {content.map((paragraph) => (
                  <p key={paragraph} className="mt-0 first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </div>
              {isEvent ? <EventDetails event={item} /> : (
                <div className="rounded-xl2 bg-primary-50 p-5 text-sm text-primary-800">
                  <time dateTime={item.publishedAt}>{formatSchoolDate(item.publishedAt)}</time>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
