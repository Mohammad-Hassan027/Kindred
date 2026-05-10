"use client"

import * as React from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface FundSlice {
  label: string
  percent: number
  color: string
  darkColor: string
}

const fundBreakdown: FundSlice[] = [
  { label: "Field Programs", percent: 85, color: "#059669", darkColor: "#34d399" },
  { label: "Fundraising", percent: 10, color: "#0d9488", darkColor: "#5eead4" },
  { label: "Administration", percent: 5, color: "#a3a3a3", darkColor: "#737373" },
]

/** Build SVG donut arc path using polar-to-cartesian math */
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
): string {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

  return [
    "M", start.x, start.y,
    "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
  ].join(" ")
}

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  }
}

function DonutChart() {
  const { ref, isVisible } = useScrollReveal(0.3)
  const size = 220
  const stroke = 28
  const radius = (size - stroke) / 2
  const cx = size / 2
  const cy = size / 2

  let cumulativeAngle = 0

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* SVG donut chart */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-sm"
        role="img"
        aria-label="Fund allocation: 85% Field Programs, 10% Fundraising, 5% Administration"
      >
        <title>Fund allocation breakdown</title>
        {fundBreakdown.map((slice, i) => {
          const sliceAngle = (slice.percent / 100) * 360
          // Small gap between slices
          const gap = 2
          const startAngle = cumulativeAngle + gap / 2
          const endAngle = cumulativeAngle + sliceAngle - gap / 2
          cumulativeAngle += sliceAngle

          return (
            <path
              key={slice.label}
              d={describeArc(cx, cy, radius, startAngle, endAngle)}
              fill="none"
              className="transition-all duration-1000 ease-out"
              stroke={slice.color}
              strokeWidth={stroke}
              strokeLinecap="round"
              style={{
                opacity: isVisible ? 1 : 0,
                strokeDasharray: isVisible ? "none" : "0 1000",
                transitionDelay: `${i * 200}ms`,
              }}
            />
          )
        })}
        {/* Center text */}
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          className="fill-stone-900 font-heading text-2xl font-bold dark:fill-stone-50"
        >
          85%
        </text>
        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          className="fill-stone-500 text-xs dark:fill-stone-400"
        >
          to programs
        </text>
      </svg>

      {/* Legend */}
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Chart legend">
        {fundBreakdown.map((slice) => (
          <li key={slice.label} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
            <span
              className="inline-block size-3 rounded-full"
              style={{ backgroundColor: slice.color }}
              aria-hidden="true"
            />
            {slice.label} — {slice.percent}%
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TransparencySection() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section
      ref={ref}
      id="transparency"
      aria-labelledby="transparency-heading"
      className="relative overflow-hidden border-y border-stone-200/60 bg-stone-100/50 dark:border-stone-800/60 dark:bg-stone-900/50"
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase dark:bg-emerald-950/40 dark:text-emerald-400">
            Trust & Transparency
          </span>
          <h2
            id="transparency-heading"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50"
          >
            Where Your Money Goes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-500 dark:text-stone-400">
            We believe every donor deserves to know exactly how their
            contribution is used. Here&apos;s a transparent breakdown of our fund
            allocation.
          </p>
        </div>

        {/* Chart + commitment */}
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          {/* Donut chart */}
          <div
            className={`transition-all delay-200 duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <DonutChart />
          </div>

          {/* Commitment text */}
          <div
            className={`transition-all delay-400 duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="font-heading text-xl font-semibold text-stone-900 dark:text-stone-50">
              Our Commitment to Accountability
            </h3>
            <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-400">
              At Kindred, transparency isn&apos;t a buzzword — it&apos;s our
              foundation. We publish annual audited financial reports,
              maintain a public dashboard of program outcomes, and ensure
              that <strong className="text-emerald-700 dark:text-emerald-400">85 cents of every dollar</strong> goes
              directly to the communities we serve.
            </p>

            {/* Progress bars for extra clarity */}
            <div className="mt-8 space-y-5">
              {fundBreakdown.map((slice) => (
                <div key={slice.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-stone-700 dark:text-stone-300">
                      {slice.label}
                    </span>
                    <span className="font-bold text-stone-900 dark:text-stone-50">
                      {slice.percent}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${slice.percent}%` : "0%",
                        backgroundColor: slice.color,
                      }}
                      role="progressbar"
                      aria-valuenow={slice.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${slice.label}: ${slice.percent}%`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Audited Annually", "Public Reports", "4-Star Rated"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
                  >
                    <svg
                      className="size-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {badge}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
