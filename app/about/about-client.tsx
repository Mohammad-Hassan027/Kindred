"use client"

import { MissionSection } from "./sections/mission"
import { JourneyTimeline } from "./sections/journey-timeline"
import { TransparencySection } from "./sections/transparency"
import { ImpactStories } from "./sections/impact-stories"
import { GlobalReach } from "./sections/global-reach"
import { AboutCTA } from "./sections/about-cta"

export function AboutPageClient() {
  return (
    <>
      <MissionSection />
      <JourneyTimeline />
      <TransparencySection />
      <ImpactStories />
      <GlobalReach />
      <AboutCTA />
    </>
  )
}
