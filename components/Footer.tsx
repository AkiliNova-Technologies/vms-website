"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { footerLinks, topContact } from "@/lib/site-data";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-900 text-primary-100">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 sm:py-14 xl:grid-cols-4 xl:gap-12">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="Victoria Montessori Logo" width={44} height={44} className="rounded-full" />
            <span className="leading-tight">
              <span className="block font-display text-base font-bold text-white">
                VICTORIA MONTESSORI
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-300">
                Montessori School
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-200">
            Nurturing curious minds and building confident individuals.
            <br />
            Montessori-inspired education from early childhood through Primary Seven.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Resources
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-primary-200">
            Parent and student portal access is coming soon.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
              {topContact.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 flex-none text-accent" />
              {topContact.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 flex-none text-accent" />
              {topContact.email}
            </li>
          </ul>
          <SocialLinks variant="footer" />
        </div>
      </div>

      <div className="border-t border-primary-800 py-5">
        <p className="container-page text-center text-xs text-primary-300">
          © {new Date().getFullYear()} Victoria Montessori School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
