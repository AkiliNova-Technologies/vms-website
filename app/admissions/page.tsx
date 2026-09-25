import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Bus,
  GraduationCap,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Waves,
  Music,
  MapPinned,
  Shirt,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  admissionSteps,
  applicationRequirements,
  admissionsInfo,
  topContact,
  admissionFee,
  tuitionFees,
  boardingFee,
  optionalActivities,
  transportRates,
  uniformFees,
  paymentBanks,
  feesPledge,
  schoolImages,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Admissions & Fees | Victoria Montessori School",
  description:
    "Find out how to apply to Victoria Montessori School, what's required, and how to enquire about our fee structure.",
};

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Bus,
  GraduationCap,
};

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Admissions & Fees"
          title="A Partnership with Families"
          description="A child&apos;s education works best when the school and family work together. Here&apos;s how to begin."
          image="/admissions-cta.jpeg"
          breadcrumb="Admissions"
        />

        {/* Info strip */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {admissionsInfo.map((item) => {
              const Icon = iconMap[item.icon] ?? Building2;
              return (
                <div
                  key={item.title}
                  className="rounded-xl2 border border-primary-100 p-7"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-primary-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Admissions process */}
        <section className="section-space bg-primary-50/60">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">How to Apply</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Our Admissions Process
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 xl:grid-cols-5">
              {admissionSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl2 bg-white p-6 text-center shadow-card"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-primary-900">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-sm font-semibold text-primary-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements + image */}
        <section className="section-space">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <Image
                src={schoolImages.listeningInClass}
                alt="Students listening attentively during a classroom lesson"
                width={560}
                height={480}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-72 w-full object-cover sm:h-96 lg:h-[440px]"
              />
            </div>

            <div>
              <span className="eyebrow">What You&apos;ll Need</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Application Requirements
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Our admissions process seeks to understand the child, their
                family background, educational history, health
                considerations, transportation needs, and the people
                responsible for their care.
              </p>

              <ul className="mt-6 space-y-3">
                {applicationRequirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 text-sm text-ink"
                  >
                    <FileText className="mt-0.5 h-5 w-5 flex-none text-primary-500" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Fees */}
        <section className="section-space bg-primary-50/60">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Fees</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                Fee Structure
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                School fees include breakfast and lunch for all children,
                and snacks for nursery children. All amounts are per term,
                in Uganda Shillings.
              </p>
            </div>

            {/* Admission fee callout */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 rounded-xl2 bg-primary-900 px-6 py-6 text-white sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-accent text-primary-900">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">
                    Admission Fee
                  </p>
                  <p className="text-xs text-white/75">
                    {admissionFee.note}
                  </p>
                </div>
              </div>
              <p className="font-display text-2xl font-bold text-accent">
                {admissionFee.amount}
              </p>
            </div>

            {/* Tuition table */}
            <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-xl2 border border-primary-100 bg-white shadow-card sm:mt-10">
              <div className="overflow-x-auto overscroll-contain" tabIndex={0} aria-label="Tuition fee table. Scroll horizontally to view all columns.">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <thead>
                    <tr className="bg-primary-900 text-white">
                        <th className="px-4 py-4 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">
                        Class
                      </th>
                        <th className="px-4 py-4 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">
                        Entry Term Fee
                      </th>
                        <th className="px-4 py-4 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">
                        Term II
                      </th>
                        <th className="px-4 py-4 font-display text-xs font-semibold uppercase tracking-wide sm:px-6">
                        Term III
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionFees.map((row, i) => (
                      <tr
                        key={row.className}
                        className={i % 2 === 0 ? "bg-white" : "bg-primary-50/60"}
                      >
                        <td className="px-4 py-4 sm:px-6">
                          <p className="font-medium text-primary-900">
                            {row.className}
                          </p>
                          <p className="text-xs text-muted">{row.note}</p>
                        </td>
                        <td className="px-4 py-4 text-ink sm:px-6">{row.entryTerm}</td>
                        <td className="px-4 py-4 text-ink sm:px-6">{row.termTwo}</td>
                        <td className="px-4 py-4 text-ink sm:px-6">{row.termThree}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-start gap-4 border-t border-primary-100 bg-accent-light px-5 py-5 sm:items-center sm:px-6">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-800 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="text-sm text-primary-900">
                  <span className="font-semibold">Boarding: </span>
                  add <span className="font-semibold">{boardingFee.amount}</span>{" "}
                  to school fees each term. {boardingFee.note}
                </p>
              </div>
            </div>

            {/* Optional activities */}
            <div className="mx-auto mt-8 max-w-5xl sm:mt-10">
              <h3 className="font-display text-lg font-semibold text-primary-900">
                Optional Activities
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {optionalActivities.map((activity, i) => {
                  const icons = [Waves, Music, MapPinned];
                  const Icon = icons[i] ?? Sparkles;
                  return (
                    <div
                      key={activity.name}
                      className="flex items-start gap-3 rounded-xl2 bg-white p-5 shadow-card"
                    >
                      <Icon className="mt-0.5 h-5 w-5 flex-none text-primary-600" />
                      <div>
                        <p className="text-sm font-medium text-primary-900">
                          {activity.name}
                        </p>
                        <p className="mt-1 text-sm text-muted">
                          {activity.fee}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Transport */}
            <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-xl2 border border-primary-100 bg-white shadow-card sm:mt-10">
              <div className="flex items-center gap-3 border-b border-primary-100 px-6 py-5">
                <Bus className="h-5 w-5 text-primary-700" />
                <h3 className="font-display text-lg font-semibold text-primary-900">
                  Transport Rates by Distance
                </h3>
              </div>
              <div className="overflow-x-auto overscroll-contain" tabIndex={0} aria-label="Transport rates table. Scroll horizontally to view all columns.">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="bg-primary-50">
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700 sm:px-6">
                        Route / Area
                      </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700 sm:px-6">
                        One Way (per term)
                      </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700 sm:px-6">
                        Two Ways (per term)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transportRates.map((row, i) => (
                      <tr
                        key={row.zone}
                        className={i % 2 === 0 ? "bg-white" : "bg-primary-50/60"}
                      >
                        <td className="px-4 py-4 text-ink sm:px-6">{row.zone}</td>
                        <td className="px-4 py-4 font-medium text-primary-900 sm:px-6">
                          {row.oneWay}
                        </td>
                        <td className="px-4 py-4 font-medium text-primary-900 sm:px-6">
                          {row.twoWay}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="border-t border-primary-100 px-5 py-4 text-xs font-medium text-muted sm:px-6">
                Note: Transport rates are not negotiable.
              </p>
            </div>

            {/* Uniforms */}
            <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-xl2 border border-primary-100 bg-white shadow-card sm:mt-10">
              <div className="flex items-center gap-3 border-b border-primary-100 px-6 py-5">
                <Shirt className="h-5 w-5 text-primary-700" />
                <h3 className="font-display text-lg font-semibold text-primary-900">
                  School Uniforms
                </h3>
              </div>
              <div className="overflow-x-auto overscroll-contain" tabIndex={0} aria-label="School uniform fee table. Scroll horizontally to view all columns.">
                <table className="w-full min-w-[440px] text-left text-sm">
                  <thead>
                    <tr className="bg-primary-50">
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700 sm:px-6">
                        Section
                      </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700 sm:px-6">
                        Girl
                      </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary-700 sm:px-6">
                        Boy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {uniformFees.map((row, i) => (
                      <tr
                        key={row.section}
                        className={i % 2 === 0 ? "bg-white" : "bg-primary-50/60"}
                      >
                        <td className="px-4 py-4 text-ink sm:px-6">{row.section}</td>
                        <td className="px-4 py-4 font-medium text-primary-900 sm:px-6">
                          {row.girl}
                        </td>
                        <td className="px-4 py-4 font-medium text-primary-900 sm:px-6">
                          {row.boy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="border-t border-primary-100 px-5 py-4 text-xs text-muted sm:px-6">
                Uniforms are available at the school. Cost is inclusive of
                labelling.
              </p>
            </div>

            {/* Payment info */}
            <div className="mx-auto mt-8 max-w-5xl sm:mt-10">
              <h3 className="font-display text-lg font-semibold text-primary-900">
                How to Pay
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                School fees are paid in half (50%) or in full at the
                beginning of each term, through any of the banks below.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {paymentBanks.map((bank) => (
                  <div
                    key={bank.bank}
                    className="rounded-xl2 border border-primary-100 bg-white p-5"
                  >
                    <div className="flex items-center gap-2.5">
                      <Landmark className="h-4 w-4 text-primary-600" />
                      <p className="font-display text-sm font-semibold text-primary-900">
                        {bank.bank}
                      </p>
                    </div>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                      Account Number
                    </p>
                    <p className="mt-0.5 font-mono text-sm text-ink">
                      {bank.account}
                    </p>
                    <p className="mt-3 text-xs text-muted">{bank.charge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pledge + call for clarification */}
            <div className="mx-auto mt-8 max-w-3xl rounded-xl2 bg-primary-900 px-6 py-7 text-center text-white sm:mt-10 sm:px-8 sm:py-8">
              <p className="font-display text-lg font-semibold italic leading-snug sm:text-xl">
                &ldquo;{feesPledge}&rdquo;
              </p>
              <p className="mx-auto mt-5 max-w-md text-sm text-white/80">
                Have questions about which fees apply to your child? Call us
                for further clarification.
              </p>
              <a
                href={`tel:${topContact.phone}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <Phone className="h-4 w-4" />
                {topContact.phone}
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 text-center sm:py-16 lg:py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
              Ready to Begin the Admissions Process?
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">
              Reach out to our admissions team, or visit us to see the
              Victoria Montessori environment for yourself.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              <Mail className="h-4 w-4" />
              Contact Admissions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
