"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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

const fieldLabel = "text-xs font-semibold uppercase tracking-wide text-muted";

const fieldControl =
  "h-11 rounded-lg border-primary-100 focus-visible:border-primary-500 focus-visible:ring-primary-500/60";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [subject, setSubject] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: Wire this up to your email service or API route.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl2 border border-primary-100 bg-white px-6 py-12 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
          <CheckCircle2 className="h-7 w-7 text-primary-700" />
        </div>

        <h3 className="font-display text-xl font-semibold text-primary-900">
          Message sent
        </h3>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Thank you for reaching out. Our admissions team will be in touch
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 mt-6">
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
        className="min-w-xs h-11 rounded-full bg-accent font-semibold text-primary-900 shadow-soft hover:bg-accent hover:brightness-105 active:brightness-95 sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
