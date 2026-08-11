import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { topContact, officeHours } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | Victoria Montessori School",
  description:
    "Get in touch with Victoria Montessori School in Entebbe, Uganda — by phone, WhatsApp, email or in person.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    "Plot 60-66 Ssebugwawo Road, Entebbe, Uganda"
  );

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Contact Us"
          title="We'd Love to Hear From You"
          description="Reach out to learn more about our Montessori approach, or to schedule a visit to our campus."
          image="/hero-image.jpeg"
          breadcrumb="Contact"
        />

        <section className="py-16 sm:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-5 lg:gap-10">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <span className="eyebrow">Find Us</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                Visit or Reach Out
              </h2>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary-900">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {topContact.address}
                      <br />
                      {topContact.poBox}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary-900">
                      Telephone
                    </p>
                    <a
                      href={`tel:${topContact.phone}`}
                      className="mt-1 block text-sm text-muted hover:text-primary-700"
                    >
                      {topContact.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary-900">
                      WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${topContact.whatsapp.replace(/[^0-9]/g, "")}`}
                      className="mt-1 block text-sm text-muted hover:text-primary-700"
                    >
                      {topContact.whatsapp}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary-900">
                      Email
                    </p>
                    <a
                      href={`mailto:${topContact.email}`}
                      className="mt-1 block text-sm text-muted hover:text-primary-700"
                    >
                      {topContact.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary-900">
                      School Hours
                    </p>
                    <ul className="mt-1 space-y-0.5 text-sm text-muted">
                      {officeHours.map((item) => (
                        <li key={item.day}>
                          {item.day}: {item.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl2 border border-primary-100 p-8 shadow-card sm:p-10">
                <span className="eyebrow">Send a Message</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                  Send Us an Enquiry
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Fill in the form below and our admissions team will get
                  back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-16 sm:pb-24">
          <div className="container-page">
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <iframe
                title="Victoria Montessori School location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
