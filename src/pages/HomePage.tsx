import { CasesSection } from '../components/CasesSection'
import { About } from '../sections/About'
import { Benefits } from '../sections/Benefits'
import { Contact } from '../sections/Contact'
import { Faq } from '../sections/Faq'
import { FinalReviews } from '../sections/FinalReviews'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Numbers } from '../sections/Numbers'
import { Reviews } from '../sections/Reviews'
import { Services } from '../sections/Services'

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <CasesSection />
        <Benefits />
        <Numbers />
        <Reviews />
        <Faq />
        <Contact />
        <FinalReviews />
      </main>
      <Footer />
    </div>
  )
}
