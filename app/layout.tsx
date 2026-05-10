import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: "Kindred — Building a Kinder World",
    template: "%s | Kindred",
  },
  description:
    "Kindred is a social impact platform dedicated to community-driven programs, compassion, and shared humanity.",
}

/** Sans-serif body font — Geist */
const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

/** Monospace font */
const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/** Heading / UI font — Inter */
const fontHeading = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

/** Serif display font — Playfair Display */
const fontSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        fontHeading.variable,
        fontSerif.variable,
      )}
    >
      <body className="flex min-h-screen flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-50">
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
