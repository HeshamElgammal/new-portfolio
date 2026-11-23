import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Projects'
import Services from '@/components/Services'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SeoIdentityBlock from '@/components/SeoIdentityBlock'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-screen bg-dark-950">
        <Hero />
        <Experience />
        <Services />
        <About />
        <Skills />
        <Contact />
        <SeoIdentityBlock />
      </main>
      <Footer />
    </>
  )
}
