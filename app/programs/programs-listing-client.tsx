"use client"

import * as React from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { ProgramCard } from "@/components/program-card"
import type { Program, ProgramCategory, ProgramUrgency } from "@/lib/programs-data"

interface ProgramsListingClientProps {
  programs: Program[]
  categories: ProgramCategory[]
}

const urgencyOptions: { value: ProgramUrgency | "all"; label: string }[] = [
  { value: "all", label: "All Urgency" },
  { value: "critical", label: "Critical" },
  { value: "high", label: "High Need" },
  { value: "normal", label: "Normal" },
]

const sortOptions = [
  { value: "newest", label: "Newly Added" },
  { value: "urgent", label: "Most Urgent" },
  { value: "goal", label: "Funding Goal (Low to High)" },
]

export function ProgramsListingClient({
  programs,
  categories,
}: ProgramsListingClientProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [search, setSearch] = React.useState(searchParams.get("search") || "")
  const [activeCategory, setActiveCategory] = React.useState<
    ProgramCategory | "all"
  >((searchParams.get("category") as ProgramCategory | null) || "all")
  const [activeUrgency, setActiveUrgency] = React.useState<
    ProgramUrgency | "all"
  >((searchParams.get("urgency") as ProgramUrgency | null) || "all")
  const [activeSort, setActiveSort] = React.useState(searchParams.get("sort") || "newest")
  
  const [isFiltering, setIsFiltering] = React.useState(false)

  // Sync state to URL and trigger artificial skeleton load
  React.useEffect(() => {
    setIsFiltering(true)
    const timer = setTimeout(() => setIsFiltering(false), 400) // artificial delay for perceived loading

    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (activeCategory !== "all") params.set("category", activeCategory)
    if (activeUrgency !== "all") params.set("urgency", activeUrgency)
    if (activeSort !== "newest") params.set("sort", activeSort)

    const query = params.toString()
    router.replace(`${pathname}${query ? `?${query}` : ""}`, { scroll: false })

    return () => clearTimeout(timer)
  }, [search, activeCategory, activeUrgency, activeSort, pathname, router])

  const filtered = React.useMemo(() => {
    const result = programs.filter((p) => {
      const matchesSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory

      const matchesUrgency =
        activeUrgency === "all" || p.urgency === activeUrgency

      return matchesSearch && matchesCategory && matchesUrgency
    })

    return result.sort((a, b) => {
      if (activeSort === "urgent") {
        const uMap = { critical: 3, high: 2, normal: 1 }
        return uMap[b.urgency] - uMap[a.urgency]
      } else if (activeSort === "goal") {
        return a.goal - b.goal
      } else {
        // newest
        return b.id - a.id
      }
    })
  }, [programs, search, activeCategory, activeUrgency, activeSort])

  return (
    <section
      id="programs-listing"
      aria-label="Programs listing with filters"
      className="bg-stone-50 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* ── Toolbar ────────────────────────────────────────────── */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative w-full md:max-w-sm">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              id="program-search"
              type="search"
              placeholder="Search programs…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-stone-200 bg-white pl-10 pr-4 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
              aria-label="Search programs by name or category"
            />
          </div>

          {/* Filters dropdowns */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Urgency dropdown */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="urgency-filter"
                className="text-xs font-medium text-stone-500 dark:text-stone-400"
              >
                Urgency:
              </label>
              <select
                id="urgency-filter"
                value={activeUrgency}
                onChange={(e) =>
                  setActiveUrgency(
                    e.target.value as ProgramUrgency | "all",
                  )
                }
                className="h-9 rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-700 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
              >
                {urgencyOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort dropdown */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort-filter"
                className="text-xs font-medium text-stone-500 dark:text-stone-400"
              >
                Sort By:
              </label>
              <select
                id="sort-filter"
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="h-9 rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-700 outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── Category pills ─────────────────────────────────────── */}
        <div
          className="mt-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by category"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
              activeCategory === "all"
                ? "bg-emerald-700 text-white shadow-sm"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700",
            )}
            aria-pressed={activeCategory === "all"}
          >
            All Programs
          </button>
          {categories.map((cat) => {
            const count = programs.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700",
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">({count})</span>
              </button>
            )
          })}
        </div>

        {/* ── Results count ───────────────────────────────────────── */}
        <p className="mt-6 text-sm text-stone-400 dark:text-stone-500">
          Showing{" "}
          <span className="font-semibold text-stone-600 dark:text-stone-300">
            {filtered.length}
          </span>{" "}
          {filtered.length === 1 ? "program" : "programs"}
          {activeCategory !== "all" && (
            <>
              {" "}
              in{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {activeCategory}
              </span>
            </>
          )}
          {search.trim() !== "" && (
            <>
              {" "}
              matching &ldquo;
              <span className="font-semibold text-stone-600 dark:text-stone-300">
                {search}
              </span>
              &rdquo;
            </>
          )}
        </p>

        {/* ── Grid ────────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isFiltering
              ? Array.from({ length: Math.min(filtered.length, 6) }).map((_, i) => (
                  <ProgramCardSkeleton key={`skel-${i}`} />
                ))
              : filtered.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-3 py-12 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800">
              <svg
                className="size-7 text-stone-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-semibold text-stone-700 dark:text-stone-300">
              No programs found
            </h3>
            <p className="max-w-xs text-sm text-stone-400 dark:text-stone-500">
              Try adjusting your search or filter to find what you&apos;re
              looking for.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("")
                setActiveCategory("all")
                setActiveUrgency("all")
                setActiveSort("newest")
              }}
              className="mt-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProgramCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm dark:border-stone-800/80 dark:bg-stone-900 animate-pulse">
      <div className="aspect-[4/3] w-full bg-stone-200 dark:bg-stone-800" />
      <div className="flex flex-1 flex-col p-5">
        <div className="h-6 w-3/4 rounded bg-stone-200 dark:bg-stone-800" />
        <div className="mt-2 h-4 w-1/2 rounded bg-stone-200 dark:bg-stone-800" />
        <div className="mt-4 space-y-2 flex-1">
          <div className="h-4 w-full rounded bg-stone-200 dark:bg-stone-800" />
          <div className="h-4 w-full rounded bg-stone-200 dark:bg-stone-800" />
          <div className="h-4 w-2/3 rounded bg-stone-200 dark:bg-stone-800" />
        </div>
        <div className="mt-auto pt-4">
          <div className="mb-4 flex gap-4">
            <div className="h-3 w-16 rounded bg-stone-200 dark:bg-stone-800" />
            <div className="h-3 w-16 rounded bg-stone-200 dark:bg-stone-800" />
          </div>
          <div className="mb-2 h-4 w-full rounded bg-stone-200 dark:bg-stone-800" />
          <div className="h-2 w-full rounded-full bg-stone-200 dark:bg-stone-800" />
          <div className="mt-5 h-9 w-full rounded-md bg-stone-200 dark:bg-stone-800" />
        </div>
      </div>
    </div>
  )
}
