import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import Contact from './components/Contact'
import resume from './data/resume'

export default function App() {
  useEffect(() => {
    document.title = `${resume.name} — Resume`
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Expertise />
        <Works />
        <Testimonials />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
