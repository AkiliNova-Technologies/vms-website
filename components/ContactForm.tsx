"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { topContact } from "@/lib/site-data";

const fieldLabel = "text-xs font-semibold uppercase tracking-wide text-muted";

const fieldControl =
  "h-11 rounded-lg border-primary-100 focus-visible:border-primary-500 focus-visible:ring-primary-500/60";

export default function ContactForm() {
  const [showFallback, setShowFallback] = useState(false);
  const [subject, setSubject] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Keep the form ready for a future delivery service without claiming it sent.
    setShowFallback(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="full-name" className={fieldLabel}>
            Full Name
          </Label>

          <Input
            id="full-name"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            className={fieldControl}
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone" className={fieldLabel}>
            Phone Number
          </Label>

          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+256 700 000 000"
            className={fieldControl}
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className={fieldLabel}>
          Email Address
        </Label>

        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={fieldControl}
        />
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject" className={fieldLabel}>
          I&apos;m Enquiring About
        </Label>

        <Select
          name="subject"
          value={subject}
          onValueChange={(value) => setSubject(value ?? "Admissions")}>
          <SelectTrigger id="subject" className={`w-full data-placeholder:text-muted-foreground ${fieldControl}`}>
            <SelectValue placeholder="Select a subject"/>
          </SelectTrigger>

          <SelectContent className="rounded-lg border-primary-100 p-2">
            <SelectItem className="rounded-md h-10" value="Admissions">Admissions</SelectItem>
            <SelectItem className="rounded-md h-10" value="Academics">Academics</SelectItem>
            <SelectItem className="rounded-md h-10" value="Fees">Fees</SelectItem>
            <SelectItem className="rounded-md h-10" value="General Enquiry">General Enquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className={fieldLabel}>
          Message
        </Label>

        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your child and how we can help..."
          className="min-h-32 resize-none rounded-lg border-primary-100 focus-visible:border-primary-500 focus-visible:ring-primary-500/40"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="h-11 w-full min-w-0 rounded-full bg-accent font-semibold text-primary-900 shadow-soft hover:bg-accent hover:brightness-105 active:brightness-95 sm:w-auto">
        Send Message
      </Button>

      {showFallback && (
        <div className="rounded-xl2 border border-primary-100 bg-primary-50/60 p-5 text-sm leading-relaxed text-muted">
          <p className="font-medium text-primary-900">
            Online form delivery is not available yet.
          </p>
          <p className="mt-1">
            Please contact the school directly by{" "}
            <a
              href={`https://wa.me/${topContact.whatsapp.replace(/[^0-9]/g, "")}`}
              className="font-semibold text-primary-700 hover:underline"
            >
              WhatsApp
            </a>
            ,{" "}
            <a
              href={`tel:${topContact.phone}`}
              className="font-semibold text-primary-700 hover:underline"
            >
              phone
            </a>
            , or{" "}
            <a
              href={`mailto:${topContact.email}`}
              className="font-semibold text-primary-700 hover:underline"
            >
              email
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
