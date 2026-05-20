import { CasesSection } from '../components/CasesSection'
import { ConsultationPopup } from '../components/ConsultationPopup'
import { Benefits } from '../sections/Benefits'
import { Faq } from '../sections/Faq'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Numbers } from '../sections/Numbers'
import { OurServices } from '../sections/OurServices'
import { Services } from '../sections/Services'

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        <OurServices />
        <Services />
        <CasesSection />
        <Benefits />
        <Numbers />
        <Faq />
      </main>
      <Footer />
      <ConsultationPopup />
    </div>
  )
}
