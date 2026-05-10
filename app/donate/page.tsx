import { Suspense } from "react"
import type { Metadata } from "next"
import { DonateFormClient } from "./donate-form-client"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Make a tax-deductible donation to Kindred and see the real impact of your generosity. Every dollar goes directly to community-driven programs.",
}

export default function DonatePage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-stone-200/60 bg-gradient-to-b from-emerald-50/60 via-stone-50 to-stone-50 dark:border-stone-800/60 dark:from-emerald-950/20 dark:via-stone-950 dark:to-stone-950">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
              Make a Difference
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
              Make an Impact Today
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-500 sm:text-lg dark:text-stone-400">
              Your generosity funds real programs, changes real lives, and
              builds a kinder world. Every dollar counts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form section ─────────────────────────────────────── */}
      <Suspense fallback={
        <div className="flex justify-center py-20">
          <div className="size-8 animate-spin rounded-full border-4 border-stone-200 border-t-emerald-500" />
        </div>
      }>
        <DonateFormClient />
      </Suspense>
    </>
  )
}
