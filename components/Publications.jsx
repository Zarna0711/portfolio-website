'use client'

import FadeIn from './FadeIn'

const publications = [
  {
    citation: 'Patel P, Bagda K, Attur K, Vachaani K, Patel Z, et al. (2024). Clinical Comparative Evaluation of LED and Diode Laser on Efficacy of 40% Hydrogen Peroxide on Tooth Whitening. Journal of Advanced Medical and Dental Sciences Research, 12(1): 31–35.',
    note: null,
  },
  {
    citation: 'Patel Z, Bagda K, et al. Respect the Bends: For Clinical Success. Int. J. Adv. Res. 8(05), 717–721. DOI: 10.21474/IJAR01/10980',
    note: null,
  },
  {
    citation: 'Four additional co-authored peer-reviewed publications (2018–2020); full list available upon request.',
    note: null,
    italic: true,
  },
]

const research = [
  {
    citation: 'Patel, Z., Bagda, K., & Attur, K. (2020). A clinical study to evaluate the influence of EndoVac, Passive Ultrasonic Irrigation, EndoActivator and Conventional Irrigation Technique… Unpublished master\'s thesis, Sankalchand Patel University.',
    note: 'Prospective RCT, n=60',
  },
]

const certifications = [
  'Responsible Conduct of Research (CITI Program)',
  'Good Clinical Practice / GCP (CITI Program)',
  'World of Medicare (CMS)',
  'Building a HIPAA-Compliant Program (LinkedIn Learning)',
  'CPR/AED for Professional Rescuers (American Red Cross)',
]

const memberships = [
  'HIMSS NCA Chapter (Active Member)',
  'Healthcare Informatics and AI Club (HIAC), George Mason University',
  'Indian Endodontic Society (Life Member)',
]

export default function Publications() {
  return (
    <section id="publications" className="bg-gray-50 section-padding">
      <div className="container-max">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-12 text-center">
            Publications &amp; Certifications
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Publications */}
          <FadeIn delay={100}>
            <div>
              <h3 className="font-600 text-gray-900 text-lg mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-sage-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-sage-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </span>
                Publications
              </h3>
              <div className="space-y-4">
                {publications.map((pub, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-100 hover:border-sage-200 transition-colors">
                    <p className={`text-sm text-gray-600 leading-relaxed ${pub.italic ? 'italic' : ''}`}>
                      {pub.citation}
                    </p>
                    {pub.note && (
                      <span className="mt-2 inline-block px-2 py-0.5 bg-sage-50 text-sage-600 text-xs rounded border border-sage-200">
                        {pub.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications + Memberships */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="font-600 text-gray-900 text-lg mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-sage-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-sage-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                      <svg className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-600 text-gray-900 text-lg mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-sage-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-sage-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </span>
                  Professional Memberships
                </h3>
                <ul className="space-y-3">
                  {memberships.map((m) => (
                    <li key={m} className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-sage-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-gray-600">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Research */}
        <FadeIn delay={300}>
          <div className="mt-10">
            <h3 className="font-600 text-gray-900 text-lg mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-sage-100 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-sage-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </span>
              Research
            </h3>
            <div className="space-y-4">
              {research.map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-gray-100 hover:border-sage-200 transition-colors">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.citation}</p>
                  {item.note && (
                    <span className="mt-2 inline-block px-2 py-0.5 bg-sage-50 text-sage-600 text-xs rounded border border-sage-200">
                      {item.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
