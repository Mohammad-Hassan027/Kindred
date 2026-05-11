"use client"

import * as React from "react"

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: "$1.2M+", label: "Raised for Communities" },
  { value: "15,000+", label: "Lives Touched" },
  { value: "120+", label: "Programs Funded" },
  { value: "45", label: "Partner Organizations" },
]

export function ImpactTicker() {
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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="impact-ticker"
      aria-label="Our cumulative impact"
      className="relative overflow-hidden border-y border-stone-200/60 bg-stone-100/50 dark:border-stone-800/60 dark:bg-stone-900/50"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Section label */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
            Our Impact
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group flex flex-col items-center text-center transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="font-heading text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl lg:text-5xl dark:text-stone-50">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium text-stone-500 dark:text-stone-400">
                {stat.label}
              </span>

              {/* Decorative underline */}
              <div className="mt-3 h-0.5 w-8 rounded-full bg-emerald-400/60 transition-all duration-500 group-hover:w-12 group-hover:bg-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
