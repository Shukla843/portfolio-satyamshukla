import { useEffect, useState } from 'react'
import Cursor       from './components/Cursor'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Certificates from './components/Certificates'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

// Divider between sections
const Divider = () => (
  <div className="h-px mx-6 md:mx-14" style={{background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)'}} />
)

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const fn = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Certificates />
        <Divider />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  )
}
