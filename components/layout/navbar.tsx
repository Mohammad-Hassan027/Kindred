"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiMenuLine, RiCloseLine, RiLeafLine } from "@remixicon/react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About & Impact", href: "/about" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Close drawer when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md dark:border-stone-800/80 dark:bg-stone-950/90"
        role="banner"
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-stone-900 transition-opacity hover:opacity-80 dark:text-stone-50"
            aria-label="Kindred — go to homepage"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm transition-transform group-hover:scale-105">
              <RiLeafLine className="size-4" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-bold tracking-tight">
              Kindred
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul
            className="hidden items-center gap-1 md:flex"
            role="list"
            aria-label="Site pages"
          >
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === href
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
                  )}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/donate"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 focus-visible:ring-emerald-500/50"
              )}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex size-9 items-center justify-center rounded-lg text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-stone-300 dark:hover:bg-stone-800 md:hidden"
          >
            {isOpen ? (
              <RiCloseLine className="size-5" aria-hidden="true" />
            ) : (
              <RiMenuLine className="size-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-stone-50 transition-all duration-300 ease-in-out dark:bg-stone-950 md:hidden",
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        {/* Spacer for the sticky header height */}
        <div className="h-16 shrink-0" aria-hidden="true" />

        <div className="flex flex-1 flex-col overflow-y-auto px-4 pb-8 pt-6">
          <ul className="flex flex-col gap-1" role="list" aria-label="Site pages">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === href
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                      : "text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
                  )}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-stone-200 pt-6 dark:border-stone-800">
            <Link
              href="/donate"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-emerald-500/50"
              )}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
