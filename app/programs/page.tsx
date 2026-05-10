import type { Metadata } from "next"
import { programs, categories } from "@/lib/programs-data"
import { ProgramsListingClient } from "./programs-listing-client"

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Kindred's programs across education, healthcare, environment, and more. Filter by category, search by name, and find a cause you care about.",
}

export default function ProgramsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-stone-200/60 bg-gradient-to-b from-emerald-50/50 via-stone-50 to-stone-50 dark:border-stone-800/60 dark:from-emerald-950/20 dark:via-stone-950 dark:to-stone-950">
        {/* Decorative dot pattern */}
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
              Our Programs
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
              Find a Cause You Care About
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-500 sm:text-lg dark:text-stone-400">
              Every program is community-driven and vetted for maximum impact.
              Explore our initiatives and make a difference today.
            </p>
          </div>
        </div>
      </section>

      {/* Client-side filtering / search / grid */}
      <ProgramsListingClient
        programs={programs}
        categories={categories}
      />
    </>
  )
}
