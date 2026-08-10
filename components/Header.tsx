"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { nav, topContact } from "@/lib/site-data";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-primary-800 text-primary-50 md:block">
        <div className="container-page flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {topContact.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-accent" />
              {topContact.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-accent" />
              {topContact.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-accent">
              Parents
            </Link>
            <Link href="#" className="hover:text-accent">
              Students
            </Link>
            <Link href="#" className="hover:text-accent">
              Staff
            </Link>
            <span className="mx-1 h-3 w-px bg-primary-600" />
            <Link href="#" aria-label="Facebook" className="hover:text-accent">
              <Facebook className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-accent">
              <Instagram className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-accent">
              <Twitter className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white/95 shadow-sm backdrop-blur">
        <div className="container-page flex items-center justify-between py-3.5">
          <Link href="#home" className="flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="Victoria Montessori Logo" width={44} height={44} />
            <span className="leading-tight">
              <span className="block font-display text-base font-bold text-primary-800 sm:text-lg">
                VICTORIA MONTESSORI
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-xs">
                Montessori School
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  i === 0 ? "text-primary-600" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#admissions" className="btn-primary hidden sm:inline-flex">
              Apply Now
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary-100 text-primary-700 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="border-t border-primary-100 bg-white lg:hidden">
            <nav className="container-page flex flex-col gap-1 py-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="#admissions" className="btn-primary mt-2 justify-center">
                Apply Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
