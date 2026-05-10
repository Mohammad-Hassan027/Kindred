"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface Story {
  name: string
  location: string
  quote: string
  image: string
  program: string
}

const stories: Story[] = [
  {
    name: "Amara Osei",
    location: "Accra, Ghana",
    quote:
      "The clean water well changed everything for our village. My children can go to school now instead of walking hours to collect water. Kindred didn't just give us water — they gave us a future.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&q=80&fit=crop&crop=face",
    program: "Clean Water Initiative",
  },
  {
    name: "Carlos Mendoza",
    location: "Medellín, Colombia",
    quote:
      "Through the reforestation program, I went from unemployed to leading a team of 20 planters. It's not just about trees — it's about restoring dignity and hope for our community.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&fit=crop&crop=face",
    program: "Reforestation Program",
  },
  {
    name: "Priya Sharma",
    location: "Jaipur, India",
    quote:
      "The scholarship gave me the chance to become the first person in my family to attend university. Today I'm studying to be a doctor so I can give back to my community.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80&fit=crop&crop=face",
    program: "Education Access",
  },
]

export function ImpactStories() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      id="impact-stories"
      aria-labelledby="stories-heading"
      className="bg-stone-50 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
            Real Stories
          </span>
          <h2
            id="stories-heading"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Lives Transformed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-500 dark:text-stone-400">
            Behind every number is a person. These are the stories of real
            people whose lives have been changed through our programs.
          </p>
        </div>

        {/* Stories grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {stories.map((story, i) => (
            <article
              key={story.name}
              className={`group relative flex flex-col rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:shadow-md hover:-translate-y-1 dark:border-stone-800/80 dark:bg-stone-900/60 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Quote icon */}
              <svg
                className="mb-4 size-8 text-emerald-400/40 dark:text-emerald-500/30"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-stone-600 italic dark:text-stone-400">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              {/* Program tag */}
              <span className="mt-4 inline-block self-start rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                {story.program}
              </span>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-5 dark:border-stone-800">
                <Image
                  src={story.image}
                  alt={`Portrait of ${story.name}`}
                  width={44}
                  height={44}
                  className="rounded-full object-cover ring-2 ring-emerald-100 dark:ring-emerald-900/40"
                />
                <div>
                  <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                    {story.name}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-500">
                    {story.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
