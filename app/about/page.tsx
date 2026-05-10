import type { Metadata } from "next"
import { AboutPageClient } from "./about-client"

export const metadata: Metadata = {
  title: "About & Impact",
  description:
    "Discover Kindred's mission, journey, and the measurable impact of our community-driven programs. Full financial transparency and real stories of change.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
