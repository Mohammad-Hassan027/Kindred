"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  type Program,
  formatCurrency,
  getPercentage,
} from "@/lib/programs-data"

interface ProgramCardProps {
  program: Program
  /** Render a wider card variant for listing pages */
  variant?: "compact" | "full"
}

export function ProgramCard({ program, variant = "compact" }: ProgramCardProps) {
  const percentage = getPercentage(program.raised, program.goal)
  const [tooltipVisible, setTooltipVisible] = React.useState(false)

  return (
    <article
      id={`program-card-${program.id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:border-stone-800/80 dark:bg-stone-900",
        variant === "full" && "sm:flex-row",
      )}
    >
      {/* ── Image container ─────────────────────────────────────────────── */}
      <div
        className={cn(
          "relative overflow-hidden",
          variant === "compact"
            ? "aspect-[16/10]"
            : "aspect-[16/10] sm:aspect-auto sm:w-2/5",
        )}
        style={{ borderRadius: "8px 8px 0 0" }}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {/* Documentary photo with 5% brightness boost on hover */}
        <Image
          src={program.image}
          alt={program.title}
          fill
          className={cn(
            "object-cover transition-all duration-500",
            "group-hover:scale-[1.03] group-hover:brightness-[1.05]",
          )}
          sizes={
            variant === "full"
              ? "(max-width: 640px) 100vw, 40vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />

        {/* Warm golden-hour gradient overlay at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
          aria-hidden="true"
        />

        {/* ── Category badge — top left ──────────────────────────────── */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700 shadow-sm backdrop-blur-sm dark:bg-stone-900/90 dark:text-stone-300">
            {program.category}
          </span>
        </div>

        {/* ── Urgency indicator — top right ─────────────────────────── */}
        {program.urgency !== "normal" && (
          <div className="absolute top-3 right-3">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm",
                program.urgency === "critical"
                  ? "bg-red-500/90 text-white"
                  : "bg-amber-400/90 text-amber-950",
              )}
            >
              <span
                className={cn(
                  "inline-block size-1.5 animate-pulse rounded-full",
                  program.urgency === "critical" ? "bg-white" : "bg-amber-800",
                )}
              />
              {program.urgency === "critical" ? "Urgent" : "High Need"}
            </span>
          </div>
        )}

        {/* ── Verified NGO badge — bottom left ──────────────────────── */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/95 px-2.5 py-1 text-[10px] font-semibold text-white shadow-md backdrop-blur-sm">
            {/* Shield-check icon */}
            <svg
              className="size-3 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            Verified by {program.verifiedBy}
          </span>
        </div>
      </div>

      {/* ── Card content ────────────────────────────────────────────────── */}
      <div className={cn("flex flex-1 flex-col p-5", variant === "full" && "sm:p-6")}>
        <h3
          className={cn(
            "font-heading font-semibold leading-snug text-stone-900 dark:text-stone-50",
            variant === "full" ? "text-xl" : "text-lg",
          )}
        >
          {program.title}
        </h3>

        <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          {program.tagline}
        </p>

        <p
          className={cn(
            "mt-2 flex-1 text-sm leading-relaxed text-stone-500 dark:text-stone-400",
            variant === "compact" && "line-clamp-3",
          )}
        >
          {program.description}
        </p>

        {/* Meta row */}
        <div className="mt-4 flex items-center gap-4 text-xs text-stone-400 dark:text-stone-500">
          <span className="flex items-center gap-1">
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
            </svg>
            {program.location}
          </span>
          <span className="flex items-center gap-1">
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            {program.donors} donors
          </span>
          {program.daysLeft <= 30 && (
            <span className="flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {program.daysLeft}d left
            </span>
          )}
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="mb-2 flex items-end justify-between">
            <span className="text-sm font-semibold text-stone-800 dark:text-stone-200">
              {formatCurrency(program.raised)}
              <span className="ml-1 text-xs font-normal text-stone-400 dark:text-stone-500">
                raised
              </span>
            </span>
            <span className="text-xs font-medium text-stone-400 dark:text-stone-500">
              {percentage}% of {formatCurrency(program.goal)}
            </span>
          </div>
          <Progress value={percentage} aria-label={`Funding progress for ${program.title}`} />
        </div>

        {/* CTA */}
        <Link
          href={`/programs/${program.id}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-5 w-full justify-center border-stone-200 font-medium transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 dark:border-stone-700 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400",
          )}
        >
          <span>Learn More <span className="sr-only">about {program.title}</span></span>
          <svg
            className="ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}
