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
import { Team } from '../sections/Team'

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="liquid-orb -left-24 top-24 h-72 w-72 bg-indigo-400/35" />
      <div className="liquid-orb right-10 top-[420px] h-80 w-80 bg-cyan-300/25" />
      <div className="liquid-orb -bottom-8 left-1/3 h-64 w-64 bg-fuchsia-300/20" />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Team />
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
