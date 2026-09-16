import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Experience from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SeoIdentityBlock from '@/components/SeoIdentityBlock'

export default function Home() {
  return (
    <main className="min-h-screen bg-page">
      <Header />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <SeoIdentityBlock />
      <Footer />
    </main>
  )
}
