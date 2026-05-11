"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { ProjectMilestone } from "@/lib/programs-data"

interface TrackProjectProps {
  programTitle: string
  milestones: ProjectMilestone[]
}

export function TrackProject({ programTitle, milestones }: TrackProjectProps) {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState("")
  const [expandedMilestone, setExpandedMilestone] = React.useState<number | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="mt-12 rounded-2xl border border-stone-200/80 bg-white shadow-sm dark:border-stone-800/80 dark:bg-stone-900 overflow-hidden">
      {/* Header */}
      <div className="border-b border-stone-100 px-4 py-4 sm:px-6 sm:py-5 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
            </svg>
          </span>
          <div>
            <h2 className="font-heading text-lg font-bold text-stone-900 dark:text-stone-50">Track This Project</h2>
            <p className="text-xs text-stone-400 dark:text-stone-500">Quarterly updates with photos &amp; GPS-tagged milestones</p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Email signup */}
        <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-4 sm:p-5 dark:from-blue-950/20 dark:to-indigo-950/10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-3 py-2 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </span>
                <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">You&apos;re subscribed!</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">You&apos;ll receive quarterly updates for &ldquo;{programTitle}&rdquo; with photos and GPS-tagged milestones.</p>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="size-4 shrink-0 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  <label htmlFor="track-email" className="text-sm font-semibold text-stone-700 dark:text-stone-300">Sign up for quarterly email updates</label>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input id="track-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="h-10 flex-1 rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-blue-500 dark:focus:ring-blue-900/40" />
                  <button type="submit" id="track-project-submit" className="h-10 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 dark:bg-blue-500 dark:hover:bg-blue-600">Subscribe</button>
                </div>
                {error && <p className="text-xs font-medium text-red-500">{error}</p>}
                <p className="text-[11px] text-stone-400 dark:text-stone-500">We&apos;ll send you a quarterly report with photos, progress updates, and GPS coordinates of project milestones. Unsubscribe anytime.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Milestones timeline */}
        <div className="mt-6">
          <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">Project Milestones</h3>
          <div className="relative space-y-0">
            <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
            {milestones.map((m, i) => (
              <motion.div key={m.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }} className="relative pb-6 last:pb-0">
                <div className="flex items-start gap-4">
                  <div className={`relative z-10 mt-0.5 flex size-[36px] shrink-0 items-center justify-center rounded-full border-2 ${m.completed ? "border-emerald-500 bg-emerald-100 text-emerald-600 dark:border-emerald-400 dark:bg-emerald-950/60 dark:text-emerald-400" : "border-stone-300 bg-stone-100 text-stone-400 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-500"}`}>
                    {m.completed ? (
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    ) : (
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <button type="button" onClick={() => setExpandedMilestone(expandedMilestone === m.id ? null : m.id)} className="w-full text-left" aria-expanded={expandedMilestone === m.id}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">{m.title}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <span className="text-xs text-stone-400 dark:text-stone-500">{new Date(m.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${m.completed ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"}`}>{m.completed ? "Completed" : "Upcoming"}</span>
                          </div>
                        </div>
                        <motion.span animate={{ rotate: expandedMilestone === m.id ? 180 : 0 }} transition={{ duration: 0.2 }} className="mt-1 shrink-0 text-stone-400 dark:text-stone-500">
                          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </motion.span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedMilestone === m.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="mt-3 space-y-3">
                            <div className="relative h-36 overflow-hidden rounded-lg border border-stone-200/80 bg-stone-100 dark:border-stone-800/80 dark:bg-stone-800 sm:h-44">
                              <Image src={m.image} alt={m.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                            <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-400">{m.description}</p>
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium text-stone-500 dark:bg-stone-800 dark:text-stone-400">
                              <svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" /></svg>
                              GPS: {m.lat.toFixed(4)}°, {m.lng.toFixed(4)}°
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
