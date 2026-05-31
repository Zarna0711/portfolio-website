'use client'

import FadeIn from './FadeIn'

const honors = [
  {
    title: 'Richard Law Award 2014 (Undergraduate Category)',
    org: "King's College London & Global Child Development Fund",
    desc: 'Awarded for outstanding achievement in a global undergraduate essay writing competition.',
  },
  {
    title: '2nd Prize, National Level Essay Writing Competition',
    org: 'Indian Association of Public Health Dentistry (2014)',
    desc: null,
  },
  {
    title: 'Captain, College Volleyball Team (2010–2015, 2017)',
    org: null,
    desc: '1st Prize in Javelin Throw, College Sports Meet (2017)',
  },
  {
    title: 'Adani Marathon Participant (2022, 2023)',
    org: null,
    desc: 'Run for Soldiers charity event',
  },
]

const volunteer = [
  {
    title: 'NIH-Funded HEAL Study Annotator',
    org: 'George Mason University',
    desc: 'Applied information extraction techniques to motivational interviewing transcripts from chronic pain patients to support clinical AI research.',
  },
  {
    title: 'Free Dental Check-up Camps',
    org: 'Multiple sites, Gujarat',
    desc: 'Kukrana Village, Patan district (2022); salt factory workers, Little Rann of Kutch (2019); Maktupur Higher Secondary School (2019, 2020).',
  },
  {
    title: 'Community Health Awareness',
    org: null,
    desc: 'Tobacco-Free Campus Rally and World AIDS Day awareness campaign (2015).',
  },
]

export default function HonorsVolunteer() {
  return (
    <section id="honors" className="bg-white section-padding">
      <div className="container-max">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-12 text-center">
            Honors &amp; Community
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Honors */}
          <FadeIn delay={100}>
            <div>
              <h3 className="font-600 text-gray-900 text-lg mb-5 flex items-center gap-2">
                <span className="text-sage-500 text-xl" aria-hidden="true">🏆</span>
                Honors &amp; Awards
              </h3>
              <div className="space-y-4">
                {honors.map((h, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-sage-200 transition-colors">
                    <p className="font-600 text-gray-900 text-sm">{h.title}</p>
                    {h.org && <p className="text-sage-600 text-xs mt-0.5 italic">{h.org}</p>}
                    {h.desc && <p className="text-gray-500 text-xs mt-1">{h.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Volunteer */}
          <FadeIn delay={200}>
            <div>
              <h3 className="font-600 text-gray-900 text-lg mb-5 flex items-center gap-2">
                <span className="text-sage-500 text-xl" aria-hidden="true">🌱</span>
                Volunteer &amp; Community Engagement
              </h3>
              <div className="space-y-4">
                {volunteer.map((v, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-sage-200 transition-colors">
                    <p className="font-600 text-gray-900 text-sm">{v.title}</p>
                    {v.org && <p className="text-sage-600 text-xs mt-0.5 italic">{v.org}</p>}
                    {v.desc && <p className="text-gray-500 text-xs mt-1 leading-relaxed">{v.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
