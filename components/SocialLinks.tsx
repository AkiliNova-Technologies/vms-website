import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { socialLinks, type SocialPlatform } from "@/lib/site-data";

const icons = {
  facebook: IconBrandFacebook,
  instagram: IconBrandInstagram,
  youtube: IconBrandYoutube,
  twitter: IconBrandX,
  tiktok: IconBrandTiktok,
  linkedin: IconBrandLinkedin,
} satisfies Record<SocialPlatform, typeof IconBrandFacebook>;

interface SocialLinksProps {
  variant: "header" | "footer";
}

export default function SocialLinks({ variant }: SocialLinksProps) {
  const iconClassName = variant === "header" ? "h-3.5 w-3.5" : "h-4 w-4";
  const containerClassName =
    variant === "header" ? "flex items-center gap-3" : "mt-5 flex flex-wrap gap-3";
  const activeClassName =
    variant === "header"
      ? "hover:text-accent"
      : "rounded-full bg-primary-800 p-2 hover:text-accent";
  const inactiveClassName =
    variant === "header"
      ? "cursor-default text-primary-50/60"
      : "cursor-default rounded-full bg-primary-800 p-2 text-primary-300/60";

  return (
    <div
      className={containerClassName}
      role="group"
      aria-label="Victoria Montessori School social media"
    >
      {socialLinks.map((socialLink) => {
        const Icon = icons[socialLink.platform];

        if (socialLink.url) {
          return (
            <a
              key={socialLink.platform}
              href={socialLink.url}
              aria-label={socialLink.label}
              className={activeClassName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={iconClassName} />
            </a>
          );
        }

        return (
          <span
            key={socialLink.platform}
            role="img"
            aria-label={`${socialLink.label} link coming soon`}
            className={inactiveClassName}
            title={`Official ${socialLink.label} link coming soon`}
          >
            <Icon className={iconClassName} aria-hidden="true" />
          </span>
        );
      })}
    </div>
  );
}
