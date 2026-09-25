"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MapPin, Newspaper } from "lucide-react";
import {
  formatSchoolDate,
  formatSchoolDateParts,
  sortEvents,
  sortNews,
  type NewsEventFilter,
  type NewsEventItem,
  type NewsItem,
  type SchoolEvent,
} from "@/lib/news-events-data";

interface NewsEventsListingProps {
  items: NewsEventItem[];
}

const filters: { label: string; value: NewsEventFilter }[] = [
  { label: "All", value: "all" },
  { label: "News", value: "news" },
  { label: "Events", value: "events" },
];

function EmptyState({
  illustration,
  illustrationHeight,
  title,
  description,
}: {
  illustration: string;
  illustrationHeight: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-xl2 bg-primary-50 px-5 py-8 text-center sm:min-h-80 sm:px-8 sm:py-10">
      <Image
        src={illustration}
        alt=""
        width={208}
        height={illustrationHeight}
        className="h-auto w-36 sm:w-44 lg:w-52"
      />
      <h3 className="mt-5 font-display text-xl font-bold text-primary-900 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-800 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function EventCard({ event }: { event: SchoolEvent }) {
  const date = formatSchoolDateParts(event.startDate);
  const statusLabel =
    event.status === "cancelled"
      ? "Cancelled event"
      : event.status === "completed"
        ? "Past event"
        : "Upcoming event";

  return (
    <article className="group relative flex gap-4 rounded-xl2 bg-white p-4 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-soft motion-reduce:transition-none sm:p-5">
      <div className="flex h-16 w-16 flex-none flex-col items-center justify-center rounded-xl bg-primary-900 text-white">
        <time dateTime={event.startDate} className="text-xl font-bold leading-none">
          {date.day}
        </time>
        <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.12em] text-accent">
          {date.month}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
          {statusLabel}
        </p>
        <h2 className="mt-1 font-display text-lg font-bold leading-snug text-primary-900">
          <Link
            href={`/news/${event.slug}`}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {event.title}
          </Link>
        </h2>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
          {event.excerpt}
        </p>
        {(event.time || event.location) && (
          <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-primary-700">
            {event.time && <span>{event.time}</span>}
            {event.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {event.location}
              </span>
            )}
          </p>
        )}
      </div>
      <ArrowRight className="mt-1 h-5 w-5 flex-none text-primary-600 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
    </article>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group overflow-hidden rounded-xl2 bg-white shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft motion-reduce:transition-none">
      {item.image ? (
        <div className="relative aspect-[3/2] overflow-hidden bg-primary-100">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>
      ) : (
        <div className="flex aspect-[3/2] items-center justify-center bg-primary-900 text-primary-100">
          <Newspaper className="h-8 w-8" aria-hidden="true" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
          {item.category ? `${item.category} · ` : ""}
          <time dateTime={item.publishedAt}>{formatSchoolDate(item.publishedAt)}</time>
        </p>
        <h2 className="mt-2 font-display text-xl font-bold leading-snug text-primary-900">
          <Link
            href={`/news/${item.slug}`}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
          >
            {item.title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{item.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
          Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

export default function NewsEventsListing({ items }: NewsEventsListingProps) {
  const [filter, setFilter] = useState<NewsEventFilter>("all");
  const news = sortNews(items.filter((item): item is NewsItem => item.type === "news"));
  const events = items.filter((item): item is SchoolEvent => item.type === "event");
  const upcomingEvents = sortEvents(events, "upcoming");
  const pastEvents = sortEvents(events, "completed");
  const showNews = filter === "all" || filter === "news";
  const showEvents = filter === "all" || filter === "events";

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter News & Events">
        {filters.map((option) => {
          const active = option.value === filter;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option.value)}
              className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                active
                  ? "bg-primary-900 text-white"
                  : "bg-primary-50 text-primary-800 hover:bg-primary-100"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-16">
        {showEvents && (
          <section aria-labelledby="upcoming-events-heading">
            <h2 id="upcoming-events-heading" className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
              Upcoming Events
            </h2>
            <div className="mt-5">
              {upcomingEvents.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">{upcomingEvents.map((event) => <EventCard key={event.slug} event={event} />)}</div>
              ) : (
                <EmptyState
                  illustration="/illustrations/no-upcoming-events.svg"
                  illustrationHeight={155}
                  title="No upcoming events yet"
                  description="New school activities and important dates will appear here once announced."
                />
              )}
            </div>
          </section>
        )}

        {showNews && (
          <section aria-labelledby="latest-news-heading">
            <h2 id="latest-news-heading" className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
              Latest News
            </h2>
            <div className="mt-5">
              {news.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{news.map((item) => <NewsCard key={item.slug} item={item} />)}</div>
              ) : (
                <EmptyState
                  illustration="/illustrations/no-news.svg"
                  illustrationHeight={163}
                  title="No news published yet"
                  description="Stories and updates from the Victoria Montessori community will appear here."
                />
              )}
            </div>
          </section>
        )}

        {showEvents && (
          <section aria-labelledby="past-events-heading">
            <h2 id="past-events-heading" className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
              Past Events
            </h2>
            <div className="mt-5">
              {pastEvents.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">{pastEvents.map((event) => <EventCard key={event.slug} event={event} />)}</div>
              ) : (
                <p className="rounded-xl2 bg-primary-50 px-5 py-4 text-sm leading-relaxed text-primary-800">
                  No past events have been published yet.
                </p>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
