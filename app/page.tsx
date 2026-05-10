import { Hero } from "@/components/sections/hero"
import { ImpactTicker } from "@/components/sections/impact-ticker"
import { FeaturedCauses } from "@/components/sections/featured-causes"
import { WhyKindred } from "@/components/sections/why-kindred"
import { DonorStories } from "@/components/sections/donor-stories"
import { Partners } from "@/components/sections/partners"

export default function Page() {
  return (
    <>
      <Hero />
      <ImpactTicker />
      <FeaturedCauses />
      <WhyKindred />
      <DonorStories />
      <Partners />
    </>
  )
}
