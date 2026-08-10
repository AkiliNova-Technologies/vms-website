import { GraduationCap, Users, UserCheck, Trophy } from "lucide-react";
import { stats } from "@/lib/site-data";

const icons = { GraduationCap, Users, UserCheck, Trophy } as const;

export default function Stats() {
  return (
    <section className="bg-primary-700">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        {stats.map((stat) => {
          const Icon = icons[stat.icon as keyof typeof icons];
          return (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <span className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-primary-100 sm:text-sm">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
