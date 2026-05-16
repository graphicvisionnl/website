import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import { MeerDanEenWebsite, JouwIdeeOnsWerk, WebsitesDieKlantenOpleveren } from '../components/ContentSections'
import PortfolioPreview from '../components/PortfolioPreview'
import Process from '../components/Process'
import TrustSection from '../components/TrustSection'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <MeerDanEenWebsite />
      <JouwIdeeOnsWerk />
      <WebsitesDieKlantenOpleveren />
      <PortfolioPreview />
      <Process />
      <TrustSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
