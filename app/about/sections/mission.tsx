"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function MissionSection() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section
      ref={ref}
      id="mission"
      aria-labelledby="mission-heading"
      className="relative overflow-hidden border-b border-stone-200/60 bg-gradient-to-b from-emerald-50/60 via-stone-50 to-stone-50 dark:border-stone-800/60 dark:from-emerald-950/20 dark:via-stone-950 dark:to-stone-950"
    >
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

      {/* Decorative accent line */}
      <div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500/0 via-emerald-400/60 to-emerald-500/0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
            Our Mission
          </span>

          {/* Mission statement */}
          <h1
            id="mission-heading"
            className="mt-6 font-serif text-2xl font-bold leading-snug tracking-tight text-stone-900 sm:text-3xl md:text-4xl lg:text-[3.25rem] dark:text-stone-50"
          >
            To build a world where{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-300">
              compassion
            </span>{" "}
            is the foundation of every community.
          </h1>

          {/* Decorative divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="h-px w-12 bg-emerald-400/40" />
            <div className="size-1.5 rounded-full bg-emerald-400/60" />
            <div className="h-px w-12 bg-emerald-400/40" />
          </div>

          {/* Our Story */}
          <div
            className={`mt-8 transition-all delay-300 duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h2 className="font-heading text-sm font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
              Our Story
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg dark:text-stone-400">
              Kindred was born from a simple belief: that every person deserves
              dignity, opportunity, and belonging. What started as a small
              group of volunteers in 2015 has grown into a global movement —
              connecting donors, communities, and changemakers to tackle the
              world&apos;s most pressing challenges with empathy and
              accountability.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-500 sm:text-lg dark:text-stone-500">
              We don&apos;t just fund programs — we build lasting relationships
              rooted in trust, transparency, and shared humanity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
