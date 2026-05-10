"use client"

import * as React from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface StatBlock {
  value: string
  label: string
  icon: React.ReactNode
}

const stats: StatBlock[] = [
  {
    value: "50+",
    label: "Countries Reached",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    value: "1M+",
    label: "Trees Planted",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    value: "500K+",
    label: "Students Supported",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84 51.39 51.39 0 00-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    value: "120+",
    label: "Active Programs",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    value: "$1.2M+",
    label: "Funds Deployed",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "15K+",
    label: "Lives Changed",
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export function GlobalReach() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      id="global-reach"
      aria-labelledby="global-reach-heading"
      className="relative overflow-hidden border-y border-stone-200/60 bg-stone-100/50 dark:border-stone-800/60 dark:bg-stone-900/50"
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

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
            Our Reach
          </span>
          <h2
            id="global-reach-heading"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Impact by the Numbers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-500 dark:text-stone-400">
            Quantifiable proof that compassion, combined with accountability,
            creates real change.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group flex flex-col items-center rounded-2xl border border-stone-200/60 bg-white p-6 text-center shadow-sm transition-all duration-700 ease-out hover:shadow-md hover:-translate-y-1 dark:border-stone-800/60 dark:bg-stone-900/60 sm:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400">
                {stat.icon}
              </div>

              {/* Value */}
              <span className="mt-4 font-heading text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
                {stat.value}
              </span>

              {/* Label */}
              <span className="mt-1 text-sm font-medium text-stone-500 dark:text-stone-400">
                {stat.label}
              </span>

              {/* Decorative underline */}
              <div className="mt-3 h-0.5 w-8 rounded-full bg-emerald-400/50 transition-all duration-500 group-hover:w-12 group-hover:bg-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
