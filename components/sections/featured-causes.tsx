"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ProgramCard } from "@/components/program-card"
import { programs } from "@/lib/programs-data"

export function FeaturedCauses() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLDivElement>(null)

  const featured = programs.filter((p) => p.featured).slice(0, 4)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="featured-causes"
      aria-labelledby="featured-causes-heading"
      className="bg-stone-50 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-800 uppercase dark:bg-emerald-950/40 dark:text-emerald-300">
            Featured Programs
          </span>
          <h2
            id="featured-causes-heading"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Causes That Need You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-300">
            Each program is vetted for maximum impact. Choose a cause that
            resonates with you and help us reach our funding goals.
          </p>
        </div>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="mt-14">
          {/* Desktop: 4-column grid */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {featured.map((program, i) => (
              <div
                key={program.id}
                className={`transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <ProgramCard program={program} />
              </div>
            ))}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
            {featured.map((program) => (
              <div
                key={program.id}
                className="w-[85vw] max-w-[320px] flex-shrink-0 snap-start"
              >
                <ProgramCard program={program} />
              </div>
            ))}
          </div>

          {/* Scroll hint for mobile */}
          <p className="mt-3 text-center text-xs text-stone-600 md:hidden dark:text-stone-300">
            Swipe to see more →
          </p>
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-stone-300 px-8 font-medium transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 dark:border-stone-700 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400",
            )}
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
