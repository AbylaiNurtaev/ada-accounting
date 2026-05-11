import { CasesSection } from '../components/CasesSection'
import { Benefits } from '../sections/Benefits'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Numbers } from '../sections/Numbers'
import { Services } from '../sections/Services'

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <CasesSection />
        <Benefits />
        <Numbers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
