import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  breadcrumb: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[38svh] min-h-[300px] w-full sm:min-h-[340px] lg:h-[42vh]">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/65 to-primary-900/30" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container-page">
          <div className="max-w-2xl py-8 text-white sm:py-10">
            <div className="flex items-center gap-1.5 text-xs font-medium text-white/70">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{breadcrumb}</span>
            </div>

            <span className="eyebrow mt-5 inline-block text-accent">
              {eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-xl leading-relaxed text-white/90">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
