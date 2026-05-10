"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface Milestone {
  year: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: "2015",
    title: "Kindred Founded",
    description:
      "A group of 12 volunteers launched Kindred with the goal of connecting compassionate donors to community-driven programs.",
  },
  {
    year: "2016",
    title: "First Field Program",
    description:
      "Launched our inaugural clean-water initiative, bringing safe drinking water to 3 rural villages in East Africa.",
  },
  {
    year: "2018",
    title: "10,000 Lives Reached",
    description:
      "Crossed our first major milestone, impacting 10,000 individuals through education, health, and environmental programs.",
  },
  {
    year: "2020",
    title: "Pandemic Relief Fund",
    description:
      "Rapidly mobilized $250K in emergency relief, distributing food, PPE, and medical supplies to 15 countries.",
  },
  {
    year: "2022",
    title: "1 Million Trees Planted",
    description:
      "Our reforestation program reached a landmark goal, restoring ecosystems across South America and Southeast Asia.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Expanded operations to 50+ countries with 120+ active programs, establishing Kindred as a trusted global force for good.",
  },
]

export function JourneyTimeline() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      id="journey"
      aria-labelledby="journey-heading"
      className="bg-stone-50 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
            Our Journey
          </span>
          <h2
            id="journey-heading"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Milestones Along the Way
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-500 dark:text-stone-400">
            Every step forward is fueled by the generosity of our community.
          </p>
        </div>

        {/* Timeline — vertical */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div
            className="absolute top-0 left-4 hidden h-full w-px bg-gradient-to-b from-emerald-400/0 via-emerald-400/40 to-emerald-400/0 md:left-1/2 md:block"
            aria-hidden="true"
          />

          <ol className="relative space-y-10 md:space-y-16" aria-label="Timeline of milestones">
            {milestones.map((ms, i) => {
              const isEven = i % 2 === 0

              return (
                <li
                  key={ms.year}
                  className={`relative transition-all duration-700 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Mobile layout (always left-aligned) */}
                  <div className="flex gap-4 md:hidden">
                    {/* Dot */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex size-8 items-center justify-center rounded-full border-2 border-emerald-400 bg-stone-50 dark:bg-stone-950">
                        <div className="size-2.5 rounded-full bg-emerald-500" />
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="h-full w-px bg-emerald-400/30" aria-hidden="true" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                        {ms.year}
                      </span>
                      <h3 className="mt-1 font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">
                        {ms.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                        {ms.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop layout (alternating sides) */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
                    {/* Left content */}
                    <div
                      className={`flex flex-col ${
                        isEven
                          ? "items-end text-right"
                          : "items-start text-left opacity-0 pointer-events-none"
                      }`}
                    >
                      {isEven && (
                        <>
                          <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                            {ms.year}
                          </span>
                          <h3 className="mt-1 font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">
                            {ms.title}
                          </h3>
                          <p className="mt-1 max-w-sm text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            {ms.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 flex items-start justify-center">
                      <div className="flex size-10 items-center justify-center rounded-full border-2 border-emerald-400 bg-stone-50 shadow-sm shadow-emerald-200/40 dark:bg-stone-950 dark:shadow-emerald-900/20">
                        <div className="size-3 rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    {/* Right content */}
                    <div
                      className={`flex flex-col ${
                        !isEven
                          ? "items-start text-left"
                          : "items-end text-right opacity-0 pointer-events-none"
                      }`}
                    >
                      {!isEven && (
                        <>
                          <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                            {ms.year}
                          </span>
                          <h3 className="mt-1 font-heading text-lg font-semibold text-stone-900 dark:text-stone-50">
                            {ms.title}
                          </h3>
                          <p className="mt-1 max-w-sm text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            {ms.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
