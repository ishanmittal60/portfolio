import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-darker text-slate-100 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
