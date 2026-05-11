"use client"

import * as React from "react"
import Link from "next/link"
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiLeafLine,
  RiLinkedinFill,
} from "@remixicon/react"

const footerLinks = {
  programs: [
    { label: "Education", href: "/programs?category=Education" },
    { label: "Clean Water", href: "/programs?category=Water+%26+Sanitation" },
    { label: "Healthcare", href: "/programs?category=Healthcare" },
    { label: "Environment", href: "/programs?category=Environment" },
    { label: "All Programs", href: "/programs" },
  ],
  organization: [
    { label: "About & Impact", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "Press & Media", href: "/about#press" },
    { label: "Contact Us", href: "/about#contact" },
  ],
  legal: [
    { label: "Financial Reports", href: "/about#financials" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Donor Rights", href: "/donor-rights" },
  ],
}

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: RiFacebookFill },
  { label: "Twitter / X", href: "https://x.com", Icon: RiTwitterXFill },
  { label: "Instagram", href: "https://instagram.com", Icon: RiInstagramLine },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: RiLinkedinFill },
]

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSubscribed(true)
  }

  return (
    <footer
      className="bg-stone-900 text-stone-300 dark:bg-stone-950"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ── Newsletter band ─────────────────────────────────────── */}
      <div className="border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Get Impact Updates
              </h2>
              <p className="mt-1 max-w-md text-sm text-stone-300">
                Join 12,000+ changemakers receiving quarterly stories, GPS-tagged progress reports, and behind-the-scenes photos from the field.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full bg-emerald-900/40 px-6 py-3 text-sm font-semibold text-emerald-300">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                You&apos;re subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
                <label htmlFor="footer-newsletter" className="sr-only">Email address</label>
                <input
                  id="footer-newsletter"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 flex-1 rounded-lg border border-stone-700 bg-stone-800/60 px-4 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
                <button
                  type="submit"
                  id="footer-newsletter-submit"
                  className="h-12 rounded-lg bg-emerald-800 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Main footer grid ────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group flex w-fit items-center gap-2 text-white transition-opacity hover:opacity-80"
              aria-label="Kindred — go to homepage"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm transition-transform group-hover:scale-105">
                <RiLeafLine className="size-4" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                Kindred
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-300">
              Building a kinder world through community-driven programs,
              compassion, and shared humanity. Every donation is tracked,
              transparent, and tax-deductible.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-2 text-sm text-stone-300">
              <a href="mailto:hello@kindred.org" className="flex items-center gap-2 transition-colors hover:text-emerald-400">
                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                hello@kindred.org
              </a>
              <p className="flex items-center gap-2">
                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                +1 (888) 555-KIND
              </p>
              <p className="flex items-center gap-2">
                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" /></svg>
                1234 Impact Drive, Portland, OR 97201
              </p>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="flex size-9 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-colors hover:border-emerald-500 hover:bg-emerald-950/30 hover:text-emerald-400"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <nav aria-label="Programs navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-300">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerLinks.programs.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-300 transition-colors hover:text-emerald-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Organization */}
          <nav aria-label="Organization navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              Organization
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerLinks.organization.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-300 transition-colors hover:text-emerald-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              Transparency
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-stone-300 transition-colors hover:text-emerald-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────── */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-xs text-stone-300 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <p>© 2026 Kindred Foundation. All rights reserved.</p>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <p>EIN: 84-2941073</p>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <p>501(c)(3) Registered Charity</p>
            </div>
            <p className="flex items-center gap-1">
              Made with
              <span aria-label="love" role="img" className="text-red-400">♥</span>
              for a kinder world
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
