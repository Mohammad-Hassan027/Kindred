import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — Empowering change through compassion"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80&auto=format&fit=crop"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Gradient overlays for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-stone-950/30 to-transparent"
        aria-hidden="true"
      />

      {/* Decorative accent line */}
      <div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500/0 via-emerald-400/60 to-emerald-500/0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <span className="inline-block size-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-medium tracking-wide text-stone-100 uppercase">
            Building a kinder world
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Change,{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">
              One Donation
            </span>
          </span>{" "}
          at a Time
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg md:text-xl">
          Together we fund vital programs, uplift communities, and create
          lasting impact. Your generosity sparks real, measurable change
          in the lives of those who need it most.
        </p>

        {/* Dual CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/donate"
            id="hero-donate-cta"
            className={cn(
              buttonVariants({ size: "lg" }),
              "min-w-[180px] bg-emerald-700 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-900/40 hover:-translate-y-0.5 focus-visible:ring-emerald-400/50",
            )}
          >
            Donate Now
          </Link>

          <Link
            href="/programs"
            id="hero-programs-cta"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-w-[180px] border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:-translate-y-0.5 focus-visible:ring-white/30",
            )}
          >
            Explore Programs
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-400">
          <span className="flex items-center gap-1.5">
            <svg className="size-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            100% Transparent
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="size-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Tax Deductible
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="size-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Verified Impact
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
        aria-hidden="true"
      >
        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
