'use client'

import FadeIn from './FadeIn'

const contactItems = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'zarna0711@gmail.com',
    href: 'mailto:zarna0711@gmail.com',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: '571-839-9740',
    href: 'tel:5718399740',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Fairfax, VA',
    href: null,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn Profile',
    href: '#',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container-max">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-12 text-center">
            About Me
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Bio */}
          <FadeIn delay={100}>
            <div className="space-y-5">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Versatile healthcare professional with 9+ years of clinical experience and 5+ years in quality compliance and regulatory auditing. Proven track record across multi-site clinical environments, including full accreditation lifecycle management, clinical systems configuration, IRB federal compliance, and geospatial data analysis.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Currently completing an MS in Health Informatics (Data Analytics concentration) at George Mason University (GPA: 3.97), I am uniquely positioned to bridge direct patient care expertise with graduate-level informatics training — delivering compliant, data-driven solutions across clinical and operational healthcare environments.
              </p>

              {/* Contact block */}
              <div className="pt-4 grid sm:grid-cols-2 gap-3">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-sage-500 flex-shrink-0">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 text-sm hover:text-sage-600 transition-colors break-all"
                        aria-label={item.label}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-gray-600 text-sm">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Decorative card */}
          <FadeIn delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Sage accent shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage-100 rounded-bl-full opacity-60" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-sage-50 rounded-tr-full opacity-80" />

              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-xs font-600 text-sage-600 tracking-widest uppercase mb-1">Current</p>
                  <p className="font-semibold text-gray-900">MS Health Informatics</p>
                  <p className="text-gray-500 text-sm">George Mason University · GPA 3.97</p>
                </div>
                <div className="h-px bg-gray-100" />
                <div>
                  <p className="text-xs font-600 text-sage-600 tracking-widest uppercase mb-1">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Clinical Research', 'Data Analytics', 'Health Informatics', 'IRB Compliance', 'Geospatial Analysis'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-sage-50 text-sage-700 text-xs rounded-full border border-sage-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[['9+', 'Years Clinical'], ['700+', 'IRB Protocols'], ['3', 'Accreditations Led']].map(([num, label]) => (
                    <div key={label}>
                      <p className="text-2xl font-700 text-sage-600">{num}</p>
                      <p className="text-xs text-gray-500 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
