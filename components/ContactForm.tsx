"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your email service or API route.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="mt-8 flex items-start gap-3 rounded-xl2 bg-primary-50 p-6">
        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary-600" />
        <div>
          <p className="font-display text-sm font-semibold text-primary-900">
            Message sent
          </p>
          <p className="mt-1 text-sm text-muted">
            Thank you for reaching out. Our admissions team will be in touch
            shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-wide text-muted"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-primary-100 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-xs font-semibold uppercase tracking-wide text-muted"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-primary-100 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary-500"
            placeholder="+256 7XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-wide text-muted"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-primary-100 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="text-xs font-semibold uppercase tracking-wide text-muted"
        >
          I&apos;m Enquiring About
        </label>
        <select
          id="subject"
          name="subject"
          className="mt-2 w-full rounded-lg border border-primary-100 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary-500"
          defaultValue="Admissions"
        >
          <option>Admissions</option>
          <option>Academics</option>
          <option>Fees</option>
          <option>General Enquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-wide text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-primary-100 px-4 py-2.5 text-sm text-ink outline-none focus:border-primary-500"
          placeholder="Tell us about your child and how we can help..."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
