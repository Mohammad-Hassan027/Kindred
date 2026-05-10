import Link from "next/link"
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiLeafLine,
} from "@remixicon/react"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Donate", href: "/donate" },
  { label: "About", href: "/about" },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: RiFacebookFill,
  },
  {
    label: "Twitter / X",
    href: "https://x.com",
    Icon: RiTwitterXFill,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: RiInstagramLine,
  },
]

export function Footer() {
  return (
    <footer
      className="border-t border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="group flex w-fit items-center gap-2 text-stone-900 transition-opacity hover:opacity-80 dark:text-stone-50"
              aria-label="Kindred — go to homepage"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm transition-transform group-hover:scale-105">
                <RiLeafLine className="size-4" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                Kindred
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              Building a kinder world through community-driven programs,
              compassion, and shared humanity.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2" role="list">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-700 dark:text-stone-400 dark:hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social & acknowledgement */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Follow Us
            </h2>
            <ul className="flex gap-3" role="list" aria-label="Social media links">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="flex size-9 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition-colors hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-stone-700 dark:text-stone-400 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-2 text-xs text-stone-600 dark:text-stone-400">
              A project supported by{" "}
              <span className="font-semibold text-stone-700 dark:text-stone-300">
                Crowdera Foundation
              </span>
              {" "}as part of the Social Impact Hackathon.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-stone-200 pt-8 sm:flex-row dark:border-stone-800">
          <p className="text-xs text-stone-600 dark:text-stone-400">
            © 2026 Kindred. All rights reserved.
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-400">
            Made with{" "}
            <span aria-label="love" role="img">
              ♥
            </span>{" "}
            for a kinder world
          </p>
        </div>
      </div>
    </footer>
  )
}
