import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  programs,
  getProgramById,
  formatCurrency,
  getPercentage,
} from "@/lib/programs-data"
import { ProgramDetailClient } from "./program-detail-client"
import { ShareProgram } from "./share-program"

// ─── Static params for ISR / SSG ────────────────────────────────────────────

export function generateStaticParams() {
  return programs.map((p) => ({ id: String(p.id) }))
}

// ─── Dynamic metadata ──────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params
  const program = getProgramById(Number(id))
  if (!program) return { title: "Program Not Found" }

  return {
    title: program.title,
    description: program.description,
  }
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function ProgramDetailPage({ params }: PageProps) {
  const { id } = await params
  const program = getProgramById(Number(id))

  if (!program) notFound()

  const percentage = getPercentage(program.raised, program.goal)

  return (
    <>
      {/* ── Hero image ───────────────────────────────────────────── */}
      <section className="relative h-[40vh] min-h-[320px] sm:h-[50vh] lg:h-[55vh]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-stone-950/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-4 text-sm text-stone-300"
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/programs"
                    className="transition-colors hover:text-white"
                  >
                    Programs
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-white" aria-current="page">
                  {program.title}
                </li>
              </ol>
            </nav>

            {/* Badges */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {program.category}
              </span>
              {program.urgency !== "normal" && (
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                    program.urgency === "critical"
                      ? "bg-red-500/90 text-white"
                      : "bg-amber-400/90 text-amber-950",
                  )}
                >
                  <span
                    className={cn(
                      "inline-block size-1.5 animate-pulse rounded-full",
                      program.urgency === "critical"
                        ? "bg-white"
                        : "bg-amber-800",
                    )}
                  />
                  {program.urgency === "critical" ? "Urgent" : "High Need"}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {program.title}
            </h1>
            <p className="mt-2 max-w-2xl text-base text-stone-300 sm:text-lg">
              {program.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────── */}
      <section className="bg-stone-50 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* ── Left: description + impact ─────────────────────── */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="prose prose-stone max-w-none dark:prose-invert">
                <h2 className="font-heading text-2xl font-bold text-stone-900 dark:text-stone-50">
                  About This Program
                </h2>
                {program.longDescription
                  .split("\n\n")
                  .map((para, i) => (
                    <p
                      key={i}
                      className="text-stone-600 leading-relaxed dark:text-stone-400"
                    >
                      {para}
                    </p>
                  ))}
              </div>

              {/* Gallery */}
              <ProgramDetailClient gallery={program.gallery} title={program.title} />

              {/* Impact stats */}
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-bold text-stone-900 dark:text-stone-50">
                  Our Impact
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {program.impact.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center rounded-xl border border-stone-200/80 bg-white p-5 text-center shadow-sm dark:border-stone-800/80 dark:bg-stone-900"
                    >
                      <span className="font-heading text-2xl font-bold text-emerald-600 sm:text-3xl dark:text-emerald-400">
                        {item.stat}
                      </span>
                      <span className="mt-1 text-xs font-medium text-stone-500 dark:text-stone-400">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic testimonial */}
              <blockquote className="mt-12 rounded-2xl border border-emerald-200/60 bg-emerald-50/50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20">
                <svg
                  className="mb-3 size-8 text-emerald-300 dark:text-emerald-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-base leading-relaxed text-stone-700 italic dark:text-stone-300">
                  &ldquo;{program.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-stone-500 dark:text-stone-400">
                  \u2014 {program.testimonial.author}, {program.testimonial.role}
                </footer>
              </blockquote>
            </div>

            {/* ── Right: sidebar ─────────────────────────────────── */}
            <aside className="lg:col-span-1" aria-label="Donation sidebar">
              <div className="sticky top-20 space-y-6">
                {/* Funding card */}
                <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm dark:border-stone-800/80 dark:bg-stone-900">
                  <h3 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">
                    Funding Progress
                  </h3>

                  <div className="mt-5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold text-stone-900 dark:text-stone-50">
                        {formatCurrency(program.raised)}
                      </span>
                      <span className="text-sm text-stone-400 dark:text-stone-500">
                        of {formatCurrency(program.goal)}
                      </span>
                    </div>
                    <div className="mt-3">
                      <Progress value={percentage} />
                    </div>
                    <p className="mt-2 text-right text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {percentage}% funded
                    </p>
                  </div>

                  {/* Quick stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-stone-100 pt-5 dark:border-stone-800">
                    <div className="text-center">
                      <span className="block text-xl font-bold text-stone-800 dark:text-stone-200">
                        {program.donors}
                      </span>
                      <span className="text-xs text-stone-400 dark:text-stone-500">
                        Donors
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="block text-xl font-bold text-stone-800 dark:text-stone-200">
                        {program.daysLeft}
                      </span>
                      <span className="text-xs text-stone-400 dark:text-stone-500">
                        Days Left
                      </span>
                    </div>
                  </div>

                  {/* Donate CTA */}
                  <Link
                    href={`/donate?program=${program.id}`}
                    id="detail-donate-cta"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-6 w-full bg-emerald-600 text-base font-semibold text-white shadow-md shadow-emerald-900/20 transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-0.5 focus-visible:ring-emerald-400/50",
                    )}
                  >
                    Donate to This Cause
                  </Link>

                  <p className="mt-3 text-center text-xs text-stone-400 dark:text-stone-500">
                    100% of donations go directly to this program
                  </p>
                </div>

                {/* Location card */}
                <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm dark:border-stone-800/80 dark:bg-stone-900">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                      <svg
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-medium text-stone-400 uppercase dark:text-stone-500">
                        Operating In
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-stone-700 dark:text-stone-300">
                        {program.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Donors Placeholder */}
                <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm dark:border-stone-800/80 dark:bg-stone-900">
                  <h3 className="font-heading text-sm font-semibold text-stone-900 dark:text-stone-50">
                    Recent Donors
                  </h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { name: "Sarah M.", amount: 100, time: "2 hours ago" },
                      { name: "David K.", amount: 50, time: "5 hours ago" },
                      { name: "Anonymous", amount: 250, time: "1 day ago" },
                    ].map((donor, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-stone-100 pb-3 last:border-0 last:pb-0 dark:border-stone-800">
                        <div className="flex items-center gap-3">
                          <div className="flex size-8 items-center justify-center rounded-full bg-stone-100 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                            {donor.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                              {donor.name}
                            </p>
                            <p className="text-xs text-stone-400 dark:text-stone-500">
                              {donor.time}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                          ${donor.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-center text-xs text-stone-400 dark:text-stone-500">
                    Join {program.donors} others in supporting this cause.
                  </p>
                </div>

                {/* Share */}
                <ShareProgram title={program.title} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
