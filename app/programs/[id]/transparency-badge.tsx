"use client"

import { motion } from "framer-motion"
import type { TransparencyInfo } from "@/lib/programs-data"

interface TransparencyBadgeProps {
  transparency: TransparencyInfo
  verifiedBy: string
}

export function TransparencyBadge({ transparency, verifiedBy }: TransparencyBadgeProps) {
  const scoreWidth = `${transparency.score}%`

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-green-50 p-5 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/30 dark:to-green-950/20"
    >
      {/* Badge header */}
      <div className="flex items-center gap-3">
        {/* Grade circle */}
        <div className="relative flex size-14 shrink-0 items-center justify-center">
          {/* Outer ring */}
          <svg className="absolute inset-0 size-full" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-200 dark:text-emerald-800" />
            <motion.circle
              cx="28" cy="28" r="25" fill="none" stroke="currentColor" strokeWidth="2.5"
              className="text-emerald-500 dark:text-emerald-400"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 25}`}
              strokeDashoffset={`${2 * Math.PI * 25 * (1 - transparency.score / 100)}`}
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
              initial={{ strokeDashoffset: 2 * Math.PI * 25 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 25 * (1 - transparency.score / 100) }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            />
          </svg>
          <span className="relative text-lg font-extrabold text-emerald-700 dark:text-emerald-300">
            {transparency.grade}
          </span>
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="font-heading text-sm font-bold text-stone-900 dark:text-stone-50">
              Transparency Grade
            </p>
            {/* Verified checkmark */}
            <svg className="size-4 text-emerald-500 dark:text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-label="Verified">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
            Verified by{" "}
            <a href={transparency.evaluatorUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-600 underline decoration-emerald-300 underline-offset-2 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:decoration-emerald-700 dark:hover:text-emerald-300">
              {transparency.evaluator}
            </a>
          </p>
        </div>
      </div>

      {/* Score bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-stone-500 dark:text-stone-400">Accountability Score</span>
          <span className="font-bold text-emerald-700 dark:text-emerald-300">{transparency.score}/100</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950/40">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 dark:from-emerald-400 dark:to-green-500"
            initial={{ width: 0 }}
            animate={{ width: scoreWidth }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-3 flex flex-col items-start gap-1.5 border-t border-emerald-200/60 pt-3 sm:flex-row sm:items-center sm:justify-between dark:border-emerald-800/40">
        <div className="flex items-center gap-1.5 text-[11px] text-stone-400 dark:text-stone-500">
          <svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
          Field-verified by {verifiedBy}
        </div>
        <span className="text-[11px] text-stone-400 dark:text-stone-500">
          Last audit: {transparency.lastAudit}
        </span>
      </div>
    </motion.div>
  )
}
