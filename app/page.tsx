import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Founder from '@/components/Founder'
import Process from '@/components/Process'
import Tiers from '@/components/Tiers'
import Drops from '@/components/Drops'
import Order from '@/components/Order'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollEffects from '@/components/ScrollEffects'

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Nav />
      <main>
        <Hero />
        <div className="holoRule" />
        <About />
        <div className="holoRule" />
        <Founder />
        <div className="holoRule" />
        <Process />
        <div className="holoRule" />
        <Tiers />
        <div className="holoRule" />
        <Drops />
        <div className="holoRule" />
        <Order />
        <Gallery />
        <FAQ />
        <div className="holoRule" />
      </main>
      <Footer />
    </>
  )
}
