"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { FundAllocation } from "@/lib/programs-data"

interface ImpactBreakdownProps {
  allocations: FundAllocation[]
}

// ─── SVG Donut Chart ───────────────────────────────────────────────────────

function DonutChart({
  allocations,
  hoveredIndex,
  setHoveredIndex,
}: {
  allocations: FundAllocation[]
  hoveredIndex: number | null
  setHoveredIndex: (i: number | null) => void
}) {
  const size = 220
  const strokeWidth = 32
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2

  // Calculate cumulative offsets for each segment
  let cumulativePercentage = 0
  const segments = allocations.map((alloc, i) => {
    const segmentLength = (alloc.percentage / 100) * circumference
    const gapLength = circumference - segmentLength
    const offset = -(cumulativePercentage / 100) * circumference
    cumulativePercentage += alloc.percentage
    return { ...alloc, segmentLength, gapLength, offset, index: i }
  })

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
        role="img"
        aria-label="Fund allocation donut chart"
      >
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-stone-200 dark:text-stone-800"
          strokeWidth={strokeWidth}
        />
        {/* Segments */}
        {segments.map((seg) => (
          <motion.circle
            key={seg.label}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={
              hoveredIndex === seg.index ? strokeWidth + 6 : strokeWidth
            }
            strokeDasharray={`${seg.segmentLength} ${seg.gapLength}`}
            strokeDashoffset={seg.offset}
            strokeLinecap="butt"
            className="cursor-pointer transition-all duration-300"
            style={{
              transformOrigin: "center",
              transform: "rotate(-90deg)",
              filter:
                hoveredIndex !== null && hoveredIndex !== seg.index
                  ? "opacity(0.4)"
                  : "opacity(1)",
            }}
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{
              strokeDasharray: `${seg.segmentLength} ${seg.gapLength}`,
            }}
            transition={{ duration: 1, delay: seg.index * 0.15, ease: "easeOut" }}
            onMouseEnter={() => setHoveredIndex(seg.index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </svg>
      {/* Center label */}
      <div className="absolute flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {hoveredIndex !== null ? (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                {allocations[hoveredIndex].percentage}%
              </span>
              <span className="max-w-[100px] text-center text-[11px] font-medium leading-tight text-stone-500 dark:text-stone-400">
                {allocations[hoveredIndex].label}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <span className="text-lg font-bold text-stone-900 dark:text-stone-50">
                100%
              </span>
              <span className="text-[11px] font-medium text-stone-400 dark:text-stone-500">
                Allocated
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Legend ─────────────────────────────────────────────────────────────────

function Legend({
  allocations,
  hoveredIndex,
  setHoveredIndex,
}: {
  allocations: FundAllocation[]
  hoveredIndex: number | null
  setHoveredIndex: (i: number | null) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      {allocations.map((alloc, i) => (
        <div
          key={alloc.label}
          className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800/60"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.4 : 1,
            transition: "opacity 0.3s",
          }}
        >
          <span
            className="inline-block size-3.5 shrink-0 rounded-full shadow-sm"
            style={{ backgroundColor: alloc.color }}
          />
          <div className="flex flex-1 items-center justify-between">
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              {alloc.label}
            </span>
            <span className="ml-3 text-sm font-bold tabular-nums text-stone-900 dark:text-stone-50">
              {alloc.percentage}%
            </span>
          </div>
          {/* Animated bar */}
          <div className="hidden w-20 sm:block">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: alloc.color }}
                initial={{ width: 0 }}
                animate={{ width: `${alloc.percentage}%` }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────

export function ImpactBreakdown({ allocations }: ImpactBreakdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <div className="mt-12">
      {/* Accordion trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        id="impact-breakdown-toggle"
        className="group flex w-full items-center justify-between rounded-xl border border-stone-200/80 bg-white px-5 py-4 text-left shadow-sm transition-all hover:border-emerald-300 hover:shadow-md dark:border-stone-800/80 dark:bg-stone-900 dark:hover:border-emerald-800"
        aria-expanded={isOpen}
        aria-controls="impact-breakdown-content"
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
          <span className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
          </span>
          <div>
            <h2 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-50">
              Impact Breakdown
            </h2>
            <p className="text-xs text-stone-400 dark:text-stone-500">
              See exactly where your donation goes
            </p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex size-7 items-center justify-center rounded-full bg-stone-100 text-stone-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 dark:bg-stone-800 dark:text-stone-400 dark:group-hover:bg-emerald-950/40 dark:group-hover:text-emerald-400"
        >
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="impact-breakdown-content"
            role="region"
            aria-labelledby="impact-breakdown-toggle"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-1 rounded-xl border border-stone-200/80 bg-white p-6 shadow-sm dark:border-stone-800/80 dark:bg-stone-900">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
                {/* Donut chart */}
                <div className="shrink-0">
                  <DonutChart
                    allocations={allocations}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                </div>
                {/* Legend */}
                <div className="w-full flex-1">
                  <Legend
                    allocations={allocations}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                  <p className="mt-5 rounded-lg bg-emerald-50/60 px-3 py-2.5 text-xs leading-relaxed text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-300">
                    <strong>Transparency note:</strong> Our operational overhead
                    is kept below industry benchmarks. Every dollar is tracked
                    end-to-end, from donation to on-the-ground delivery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
