"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandYoutube } from '@tabler/icons-react';
import { footerLinks, topContact } from "@/lib/site-data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-900 text-primary-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="#home" className="flex items-center gap-2.5">
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
          <p className="mt-4 text-sm leading-relaxed text-primary-200">
            Nurturing curious minds and building confident individuals.
            <br />
            Montessori education for children aged 2–12.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
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
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.resources.map((link) => (
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

          <div className="mt-5 flex gap-3">
            <Link href="#" aria-label="Facebook" className="rounded-full bg-primary-800 p-2 hover:text-accent">
              <IconBrandFacebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="rounded-full bg-primary-800 p-2 hover:text-accent">
              <IconBrandInstagram className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="YouTube" className="rounded-full bg-primary-800 p-2 hover:text-accent">
              <IconBrandYoutube className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="rounded-full bg-primary-800 p-2 hover:text-accent">
              <IconBrandLinkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="TikTok" className="rounded-full bg-primary-800 p-2 hover:text-accent">
              <IconBrandTiktok className="h-4 w-4" />
            </Link>
          </div>
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
