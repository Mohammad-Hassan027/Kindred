"use client"

import * as React from "react"
import Image from "next/image"

const donors = [
  {
    name: "Sarah Mitchell",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1616776005756-4dca36124bf9?w=200&q=80&auto=format&fit=crop&crop=face",
    quote:
      "I funded a well in Turkana County through Kindred. Six months later, I received a photo of 600 people lining up for clean water for the first time. That image changed my life.",
    impact: "Funded 1 well serving 600 people",
    amount: "$2,400",
    program: "Clean Water Initiative",
  },
  {
    name: "Arjun Patel",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop&crop=face",
    quote:
      "My monthly $50 donation covers school supplies for 12 kids. Kindred sends me their report cards every quarter — three of them made the honor roll this year.",
    impact: "12 children sponsored through school",
    amount: "$50/month",
    program: "Education for Every Child",
  },
  {
    name: "Diana Okafor",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop&crop=face",
    quote:
      "I gave a micro-loan to a woman named Fatima in Dhaka. She started a tailoring business and now employs three other women. The ripple effect is extraordinary.",
    impact: "1 micro-loan → 4 jobs created",
    amount: "$500",
    program: "Women's Empowerment Hub",
  },
]

export function DonorStories() {
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
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="donor-stories"
      aria-labelledby="donor-stories-heading"
      className="bg-stone-50 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold tracking-wider text-amber-800 uppercase dark:bg-amber-950/40 dark:text-amber-300">
            Real Impact
          </span>
          <h2
            id="donor-stories-heading"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl dark:text-stone-50"
          >
            Donor Stories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg dark:text-stone-300">
            Hear from real donors who turned generosity into measurable,
            life-changing impact.
          </p>
        </div>

        <div className="mt-14">
          {/* Desktop grid */}
          <div className="hidden gap-8 md:grid md:grid-cols-3">
            {donors.map((donor, i) => (
              <div
                key={donor.name}
                className={`group relative flex flex-col rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:shadow-lg dark:border-stone-800/80 dark:bg-stone-900 dark:hover:border-stone-700 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
              {/* Quote */}
              <svg
                className="mb-4 size-8 text-emerald-200 dark:text-emerald-800"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <p className="flex-1 text-sm leading-relaxed text-stone-700 italic dark:text-stone-300">
                &ldquo;{donor.quote}&rdquo;
              </p>

              {/* Impact badge */}
              <div className="mt-5 flex items-center gap-2 rounded-lg bg-emerald-50/80 px-3 py-2 dark:bg-emerald-950/20">
                <svg
                  className="size-4 shrink-0 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {donor.impact}
                </span>
              </div>

              {/* Donor info */}
              <div className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-5 dark:border-stone-800">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-stone-200 dark:border-stone-700">
                  <Image
                    src={donor.image}
                    alt={donor.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                    {donor.name}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    {donor.location}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {donor.amount}
                  </p>
                  <p className="text-[10px] text-stone-600 dark:text-stone-400">
                    {donor.program}
                  </p>
                </div>
              </div>
              </div>
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
            {donors.map((donor) => (
              <div
                key={donor.name}
                className="w-[85vw] max-w-[340px] flex-shrink-0 snap-start"
              >
                <div className="group relative flex h-full flex-col rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm dark:border-stone-800/80 dark:bg-stone-900">
                  {/* Quote */}
                  <svg
                    className="mb-3 size-7 text-emerald-200 dark:text-emerald-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>

                  <p className="flex-1 text-sm leading-relaxed text-stone-700 italic dark:text-stone-300">
                    &ldquo;{donor.quote}&rdquo;
                  </p>

                  {/* Impact badge */}
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50/80 px-3 py-2 dark:bg-emerald-950/20">
                    <svg
                      className="size-4 shrink-0 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      {donor.impact}
                    </span>
                  </div>

                  {/* Donor info */}
                  <div className="mt-4 flex items-center gap-3 border-t border-stone-100 pt-4 dark:border-stone-800">
                    <div className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-stone-200 dark:border-stone-700">
                      <Image
                        src={donor.image}
                        alt={donor.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                        {donor.name}
                      </p>
                      <p className="text-xs text-stone-600 dark:text-stone-400">
                        {donor.location}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {donor.amount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-stone-600 md:hidden dark:text-stone-300">
            Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  )
}
