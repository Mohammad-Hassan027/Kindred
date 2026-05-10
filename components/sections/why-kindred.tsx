"use client"

import * as React from "react"

const pillars = [
  {
    title: "Zero Platform Fees",
    description:
      "Every cent you donate goes directly to the cause. We cover our operational costs through grants — not your generosity.",
    icon: (
      <svg className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    accent: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Follow your donation from wallet to field. GPS-tagged milestones, quarterly photo reports, and live progress dashboards keep you in the loop.",
    icon: (
      <svg className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
      </svg>
    ),
    accent: "from-blue-500 to-indigo-500",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
  },
  {
    title: "Local Partnerships",
    description:
      "We work exclusively with vetted, on-the-ground NGOs who know their communities. No middlemen, no bureaucracy — just direct, lasting impact.",
    icon: (
      <svg className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    accent: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
  },
]

export function WhyKindred() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-kindred"
      aria-labelledby="why-kindred-heading"
      className="relative overflow-hidden bg-white dark:bg-stone-900"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" aria-hidden="true">
        <svg width="100%" height="100%"><defs><pattern id="wk-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#wk-grid)" /></svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-stone-100 px-4 py-1 text-xs font-semibold tracking-wider text-stone-700 uppercase dark:bg-stone-800 dark:text-stone-300">
            Our Promise
          </span>
          <h2
            id="why-kindred-heading"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl dark:text-stone-50"
          >
            Why Kindred?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg dark:text-stone-300">
            We built Kindred on three non-negotiable pillars that put donors and
            communities first.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group relative rounded-2xl border border-stone-200/80 bg-stone-50/50 p-8 shadow-sm transition-all duration-700 ease-out hover:border-stone-300 hover:shadow-lg dark:border-stone-800/80 dark:bg-stone-800/30 dark:hover:border-stone-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Gradient top accent */}
              <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${pillar.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className={`flex size-14 items-center justify-center rounded-xl ${pillar.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                {pillar.icon}
              </div>

              <h3 className="mt-6 font-heading text-xl font-bold text-stone-900 dark:text-stone-50">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
