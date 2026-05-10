"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function AboutCTA() {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <section
      ref={ref}
      id="about-cta"
      aria-labelledby="about-cta-heading"
      className="bg-stone-50 dark:bg-stone-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div
          className={`relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 p-8 text-center shadow-xl shadow-emerald-900/20 sm:p-12 lg:p-16 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Decorative elements */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-24 -right-24 size-48 rounded-full bg-emerald-400/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 size-48 rounded-full bg-emerald-300/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-100 uppercase backdrop-blur-sm">
              Join the Movement
            </span>

            <h2
              id="about-cta-heading"
              className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Be Part of Something{" "}
              <span className="italic">Greater</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-100/90 sm:text-lg">
              Every dollar you contribute goes directly to programs that
              change lives. Join thousands of donors who have chosen
              compassion, transparency, and impact.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/donate"
                id="about-cta-donate"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "min-w-[180px] bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:bg-emerald-50 hover:shadow-xl hover:-translate-y-0.5",
                )}
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                id="about-cta-programs"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "min-w-[180px] border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:-translate-y-0.5",
                )}
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
