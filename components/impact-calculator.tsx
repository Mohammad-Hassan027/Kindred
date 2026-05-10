"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import type { ProgramCategory } from "@/lib/programs-data"

// ─── Impact mapping ────────────────────────────────────────────────────────
// Each impact item defines a cost-per-unit and a human-readable template.

interface ImpactItem {
  icon: React.ReactNode
  costPerUnit: number
  unit: string
  singular: string
  color: string
}

const impactItems: ImpactItem[] = [
  {
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12" />
      </svg>
    ),
    costPerUnit: 5,
    unit: "meals",
    singular: "meal",
    color: "text-amber-500",
  },
  {
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    costPerUnit: 10,
    unit: "days of education",
    singular: "day of education",
    color: "text-blue-500",
  },
  {
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    costPerUnit: 25,
    unit: "medical checkups",
    singular: "medical checkup",
    color: "text-rose-500",
  },
  {
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
      </svg>
    ),
    costPerUnit: 15,
    unit: "liters of clean water",
    singular: "liter of clean water",
    color: "text-cyan-500",
  },
  {
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    costPerUnit: 2,
    unit: "trees planted",
    singular: "tree planted",
    color: "text-emerald-500",
  },
]

interface ImpactCalculatorProps {
  amount: number
  isMonthly: boolean
  className?: string
  category?: ProgramCategory
}

export function ImpactCalculator({
  amount,
  isMonthly,
  className,
  category,
}: ImpactCalculatorProps) {
  const effectiveAmount = amount || 0
  const annualAmount = isMonthly ? effectiveAmount * 12 : effectiveAmount
  const displayAmount = isMonthly ? effectiveAmount : effectiveAmount

  const prioritizedItems = React.useMemo(() => {
    if (!category) return impactItems

    return [...impactItems].sort((a, b) => {
      // Helper to check if an item is prioritized for a category
      const isPrioritized = (item: ImpactItem, cat: ProgramCategory) => {
        if (cat === "Education" && (item.unit === "days of education" || item.unit === "school supplies")) return true
        if (cat === "Healthcare" && (item.unit === "medical checkups" || item.unit === "medicine")) return true
        if (cat === "Environment" && (item.unit === "trees planted" || item.unit === "liters of clean water")) return true
        return false
      }

      const aPriority = isPrioritized(a, category)
      const bPriority = isPrioritized(b, category)

      if (aPriority && !bPriority) return -1
      if (!aPriority && bPriority) return 1
      return 0
    })
  }, [category])

  if (effectiveAmount <= 0) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-dashed border-stone-300 bg-stone-100/50 p-6 text-center dark:border-stone-700 dark:bg-stone-800/30",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-stone-200 dark:bg-stone-700">
          <svg className="size-6 text-stone-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
          </svg>
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Select an amount to see your impact
        </p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 p-6 dark:border-emerald-900/40 dark:from-emerald-950/30 dark:via-stone-900 dark:to-emerald-950/20",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-label="Impact calculator results"
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
          <svg className="size-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </span>
        <h3 className="font-heading text-sm font-semibold text-stone-800 dark:text-stone-200">
          Your Impact{isMonthly ? " Every Month" : ""}
        </h3>
      </div>

      {/* Impact items */}
      <div className="space-y-3">
        {prioritizedItems.map((item) => {
          const count = Math.floor(displayAmount / item.costPerUnit)
          if (count <= 0) return null

          return (
            <div
              key={item.unit}
              className="flex items-start gap-3 rounded-xl bg-white/70 p-3 shadow-sm transition-all duration-300 dark:bg-stone-800/50"
            >
              <span
                className={cn(
                  "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-stone-800",
                  item.color,
                )}
              >
                {item.icon}
              </span>
              <div>
                <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
                  <span className="text-lg font-bold tabular-nums">
                    {count.toLocaleString()}
                  </span>{" "}
                  {count === 1 ? item.singular : item.unit}
                </p>
                <p className="text-xs text-stone-400 dark:text-stone-500">
                  at ${item.costPerUnit} each
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Monthly multiplier callout */}
      {isMonthly && effectiveAmount > 0 && (
        <div className="mt-4 rounded-xl border border-emerald-200/50 bg-emerald-50/50 px-4 py-3 dark:border-emerald-800/30 dark:bg-emerald-950/20">
          <p className="text-xs text-emerald-700 dark:text-emerald-400">
            <span className="font-semibold">Annual impact:</span> That&apos;s{" "}
            <span className="font-bold">
              ${annualAmount.toLocaleString()}
            </span>{" "}
            per year — multiplying your impact 12×!
          </p>
        </div>
      )}
    </div>
  )
}
