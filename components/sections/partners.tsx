"use client"

import * as React from "react"

// On-the-ground NGO partners — using text-based logos for reliability
const partners = [
  { name: "WaterAid Kenya", category: "Water & Sanitation" },
  { name: "African Education Trust", category: "Education" },
  { name: "BRAC Bangladesh", category: "Community" },
  { name: "Médicos Sin Fronteras MX", category: "Healthcare" },
  { name: "Amazon Conservation Assoc.", category: "Environment" },
  { name: "GreenAfrica Foundation", category: "Agriculture" },
  { name: "IFRC Relief Network", category: "Emergency" },
  { name: "YouthBuild International", category: "Youth" },
]

export function Partners() {
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
      id="partners"
      aria-labelledby="partners-heading"
      className="border-y border-stone-200/60 bg-white dark:border-stone-800/60 dark:bg-stone-900"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="partners-heading"
            className="font-heading text-sm font-semibold uppercase tracking-widest text-stone-600 dark:text-stone-300"
          >
            Trusted On-the-Ground Partners
          </h2>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-300">
            Every program is delivered by vetted, locally-embedded NGOs who know their communities.
          </p>
        </div>

        {/* Logo grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className={`group flex flex-col items-center justify-center gap-2 rounded-xl border border-stone-100 bg-stone-50/50 px-4 py-6 transition-all duration-700 ease-out hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-sm dark:border-stone-800 dark:bg-stone-800/30 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Logo placeholder — using initials in a styled container */}
              <div className="flex size-12 items-center justify-center rounded-full bg-stone-200/80 font-heading text-lg font-bold text-stone-500 transition-colors group-hover:bg-emerald-100 group-hover:text-emerald-600 dark:bg-stone-700 dark:text-stone-400 dark:group-hover:bg-emerald-950/50 dark:group-hover:text-emerald-400">
                {partner.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <p className="text-center text-sm font-semibold text-stone-700 dark:text-stone-300">
                {partner.name}
              </p>
              <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
