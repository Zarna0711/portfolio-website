'use client'

import FadeIn from './FadeIn'

const contactLinks = [
  {
    label: 'zarna0711@gmail.com',
    href: 'mailto:zarna0711@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: '571-839-9740',
    href: 'tel:5718399740',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Fairfax, VA',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-700 mb-3">Get In Touch</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Open to roles in health informatics, clinical research operations, and healthcare data analytics.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {contactLinks.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex items-center gap-2 text-gray-300 hover:text-sage-400 transition-colors text-sm"
                >
                  <span className="text-sage-400">{item.icon}</span>
                  {item.label}
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="text-sage-400">{item.icon}</span>
                  {item.label}
                </div>
              )
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="text-center mb-10">
            {/* Place Zarna_Patel_CV.pdf in the /public directory */}
            <a
              href="/Zarna_Patel_CV.pdf"
              download
              className="inline-flex items-center justify-center px-7 py-3 bg-sage-500 text-white font-medium rounded-lg hover:bg-sage-600 transition-colors min-h-[44px]"
            >
              Download CV
            </a>
          </div>
        </FadeIn>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2026 Zarna N. Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
