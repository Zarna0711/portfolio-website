'use client'

import { useState, useEffect } from 'react'
import FadeIn from './FadeIn'

const roles = [
  'Health Informatics Specialist',
  'Quality Compliance Analyst',
  'Data Analyst',
  'Dentist',
]

const stats = [
  '9+ Years Clinical Experience',
  '5+ Years Quality & Compliance',
  'MS Health Informatics',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 py-16 md:py-20">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <FadeIn delay={0}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-800 text-gray-900 leading-tight mb-4">
                Zarna Patel
              </h1>
              <p className="text-lg sm:text-xl text-sage-600 font-500 mb-6 leading-relaxed min-h-[2rem] transition-all duration-500">
                {roles[roleIndex]}
              </p>
              <p className="text-gray-600 text-base sm:text-lg italic leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                &ldquo;Bridging 9+ years of clinical expertise with data-driven health informatics to deliver compliant, measurable outcomes.&rdquo;
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
                <a
                  href="/Zarna_Patel_CV.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 bg-sage-500 text-white font-medium rounded-lg hover:bg-sage-600 transition-colors min-h-[44px]"
                >
                  Download CV
                </a>
                <a
                  href="/Zarna_Patel_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]"
                >
                  View Resume
                </a>
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center px-6 py-3 border border-sage-500 text-sage-600 font-medium rounded-lg hover:bg-sage-50 transition-colors min-h-[44px]"
                >
                  View My Work
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {stats.map((stat) => (
                  <span
                    key={stat}
                    className="px-3 py-1.5 bg-sage-50 text-sage-700 text-xs sm:text-sm font-medium rounded-full border border-sage-200"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Headshot placeholder */}
          <FadeIn delay={100} className="flex-shrink-0">
            <div className="relative">
              <img
                src="/headshot.jpg"
                alt="Zarna Patel"
                className="rounded-full object-cover border-4 border-sage-200"
                style={{ width: 220, height: 220 }}
              />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-sage-500 opacity-10" />
              <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-sage-400 opacity-15" />
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center pb-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1.5 h-3 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
