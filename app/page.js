'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Publications from '../components/Publications'
import HonorsVolunteer from '../components/HonorsVolunteer'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <HonorsVolunteer />
      <Contact />
    </main>
  )
}
