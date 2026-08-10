import { GraduationCap, Users, Globe2, ShieldCheck } from "lucide-react";
import { heroHighlights } from "@/lib/site-data";

const icons = {
  GraduationCap,
  Users,
  Globe2,
  ShieldCheck,
} as const;

export default function HighlightsBar() {
  return (
    <section className="relative z-10">
      <div className="container-page -mt-10 sm:-mt-12">
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-card sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {heroHighlights.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <div key={item.title} className="flex items-start gap-3.5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-primary-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
