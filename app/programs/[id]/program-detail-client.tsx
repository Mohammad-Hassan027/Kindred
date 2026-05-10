"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProgramDetailClientProps {
  gallery: string[]
  title: string
}

export function ProgramDetailClient({
  gallery,
  title,
}: ProgramDetailClientProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  if (gallery.length === 0) return null

  return (
    <div className="mt-12">
      <h2 className="font-heading text-2xl font-bold text-stone-900 dark:text-stone-50">
        Gallery
      </h2>

      {/* Main image */}
      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100 dark:border-stone-800/80 dark:bg-stone-800">
        <Image
          src={gallery[activeIndex]}
          alt={`${title} — photo ${activeIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />

        {/* Navigation arrows */}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? gallery.length - 1 : prev - 1,
                )
              }
              className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              aria-label="Previous image"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === gallery.length - 1 ? 0 : prev + 1,
                )
              }
              className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              aria-label="Next image"
            >
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}

        {/* Slide indicator */}
        {gallery.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View photo ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {gallery.length > 1 && (
        <div className="mt-3 flex gap-2">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View photo ${i + 1}`}
              className={cn(
                "relative h-16 flex-1 overflow-hidden rounded-lg border-2 transition-all sm:h-20",
                i === activeIndex
                  ? "border-emerald-500 shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-90",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="20vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
