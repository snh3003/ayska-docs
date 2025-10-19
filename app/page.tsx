import { AyskaUnifiedHeader } from '@/components/layout/AyskaUnifiedHeaderComponent'
import { AyskaHero } from '@/components/landing/AyskaHeroComponent'
import { AyskaFeatures } from '@/components/landing/AyskaFeaturesComponent'
import { AyskaCTA } from '@/components/landing/AyskaCTAComponent'

export default function Home() {
  return (
    <>
      <AyskaUnifiedHeader />
      <AyskaHero />
      <AyskaFeatures />
      <AyskaCTA />
    </>
  )
}
