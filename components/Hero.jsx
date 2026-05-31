'use client'

import FadeIn from './FadeIn'

const stats = [
  '9+ Years Clinical Experience',
  '5+ Years Quality & Compliance',
  'GPA 3.97 · MS Health Informatics',
]

export default function Hero() {
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
              <p className="text-sage-600 font-medium text-sm tracking-widest uppercase mb-4">
                Health Informatics Specialist
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-800 text-gray-900 leading-tight mb-4">
                Zarna N. Patel
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 font-400 mb-6 leading-relaxed">
                Health Informatics Specialist&nbsp;·&nbsp;Clinical Researcher&nbsp;·&nbsp;Data Analyst
              </p>
              <p className="text-gray-600 text-base sm:text-lg italic leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                &ldquo;Bridging 9+ years of clinical expertise with data-driven health informatics to deliver compliant, measurable outcomes.&rdquo;
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
                {/* Place Zarna_Patel_CV.pdf in the /public directory */}
                <a
                  href="/Zarna_Patel_CV.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 bg-sage-500 text-white font-medium rounded-lg hover:bg-sage-600 transition-colors min-h-[44px]"
                >
                  Download CV
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
                alt="Zarna N. Patel"
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
