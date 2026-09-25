export type NewsItem = {
  type: "news";
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  featured?: boolean;
  published?: boolean;
};

export type SchoolEvent = {
  type: "event";
  slug: string;
  title: string;
  excerpt: string;
  content?: string[];
  startDate: string;
  endDate?: string;
  time?: string;
  location?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  published?: boolean;
  status?: "upcoming" | "completed" | "cancelled";
};

export type NewsEventItem = NewsItem | SchoolEvent;
export type NewsEventFilter = "all" | "news" | "events";

// Only confirmed school updates belong here. This local dataset can be
// replaced by a CMS adapter later without changing the presentation layer.
export const newsEvents: NewsEventItem[] = [
  {
    type: "event",
    slug: "victoria-montessori-celebrates-25-years",
    title: "Victoria Montessori Celebrates 25 Years",
    excerpt:
      "On 25 April 2026, Victoria Montessori School marked 25 years since its founding in 2001.",
    content: [
      "On 25 April 2026, Victoria Montessori School marked 25 years since its founding in 2001.",
      "The milestone reflects generations of children, families and educators who have been part of the Victoria Montessori community in Entebbe.",
    ],
    startDate: "2026-04-25",
    image: "/vms-25th-anniversary.webp",
    imageAlt: "Victoria Montessori School 25th Anniversary, April 25, 2026",
    status: "completed",
    published: true,
  },
];

export function getPublishedNewsEvents() {
  return newsEvents.filter((item) => item.published !== false);
}

export function getNewsEventBySlug(slug: string) {
  return getPublishedNewsEvents().find((item) => item.slug === slug);
}

export function formatSchoolDate(date: string, includeWeekday = false) {
  return new Intl.DateTimeFormat("en-UG", {
    weekday: includeWeekday ? "long" : undefined,
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function formatSchoolDateParts(date: string) {
  const formatted = new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).formatToParts(new Date(`${date}T12:00:00Z`));

  return {
    day: formatted.find((part) => part.type === "day")?.value ?? "",
    month: formatted.find((part) => part.type === "month")?.value.toUpperCase() ?? "",
  };
}

export function sortNews(items: NewsItem[]) {
  return [...items].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}

export function sortEvents(items: SchoolEvent[], status: "upcoming" | "completed") {
  return [...items]
    .filter((item) => item.status === status)
    .sort((a, b) => {
      const difference = Date.parse(a.startDate) - Date.parse(b.startDate);
      return status === "upcoming" ? difference : -difference;
    });
}
