'use client'

import FadeIn from './FadeIn'

const experiences = [
  {
    title: 'Data Analyst Intern',
    org: 'National Health IT Collaborative for the Underserved (NHIT)',
    location: 'Arlington, VA',
    dates: 'Jan 2026 – May 2026',
    bullets: [
      'Engineered end-to-end ETL pipelines using SQL & Python (Pandas, NumPy) to ingest, wrangle, and standardize 100+ large-scale public health datasets with millions of tract-level rows, performing missing value imputation, deduplication, and schema normalization.',
      'Developed static geospatial maps and Python-based visualizations (Matplotlib, Seaborn) using FIPS codes to identify healthcare deserts across 120 Virginia and 20 Maryland counties.',
      'Researched CMS federal funding opportunities and assessed 6 partner organizations, delivering data-driven strategy reports for rural healthcare expansion under the Rural Health Transformation program.',
    ],
  },
  {
    title: 'Clinical Systems Analyst & IRB Administrator',
    org: 'Office of Research Integrity and Assurance (ORIA), George Mason University',
    location: 'Fairfax, VA',
    dates: 'Jan 2025 – May 2026',
    bullets: [
      'Led university-wide migration from IRBNet to the RAMP research management platform, reducing protocol processing time by 35% and improving system reliability across 70+ Principal Investigators and 700+ active research studies.',
      'Managed and audited a database of 700+ active IRB protocols, ensuring federal regulatory compliance (GCP, CITI), data privacy standards, and user access controls.',
      'Guided 35+ investigators through IRB documentation lifecycles, reviewing submissions for completeness, accuracy, and compliance.',
    ],
  },
  {
    title: 'Graduate Research & Administrative Assistant',
    org: 'George Mason University',
    location: 'Fairfax, VA',
    dates: 'Jan 2025 – May 2026',
    bullets: [
      'Contributed to end-to-end development of a department AI chatbot, gathering, cleaning, and structuring data using NLP data preparation techniques.',
      'Administered the Commuter Choice Program (CCC) for ~200 participants monthly while completing the MS Health Informatics program full-time.',
    ],
  },
  {
    title: 'Healthcare Operations Manager & Endodontist',
    org: 'Shubham Dental & Implant Clinic',
    location: 'Ahmedabad, India',
    dates: 'Oct 2023 – Jul 2024',
    bullets: [
      'Established and enforced SOPs for infection control and staff safety aligned with OSHA and CDC guidelines, delivering monthly compliance training for 25+ personnel and reducing sterilization-related safety incidents by 85%.',
      'Implemented CAPA protocols; audited 1,000+ health records quarterly, achieving a 45% improvement in audit readiness scores.',
      'Handled procurement for clinic expansion using data analytics to design inventory systems and negotiate vendor contracts.',
    ],
  },
  {
    title: 'Quality Compliance Analyst & Endodontist',
    org: '32 Pearls Multispecialty Dental Clinics & Implant Centres (3 Locations)',
    location: 'Ahmedabad, India',
    dates: 'Jan 2021 – Jun 2023',
    bullets: [
      'Spearheaded the first-ever NABH accreditation (equivalent to US Joint Commission) across 3 clinic locations, leading the full 9-month accreditation lifecycle including gap assessments, policy authorship, and post-survey CAPA actions.',
      'Reduced reaccreditation preparation time from 9 months to 3 months through standardized compliance frameworks and 50+ internal audits.',
      'Reviewed 1,200+ medical records monthly and trained 75+ staff across clinical, administrative, and operational functions.',
    ],
  },
  {
    title: 'Clinical Consultant in Endodontics (Pro Bono)',
    org: 'Seth Vadilal Sarabhai General Hospital & Sheth Chinai Maternity Home',
    location: 'Ahmedabad, India',
    dates: 'Nov 2021 – Nov 2022',
    bullets: [
      'Provided specialized endodontic consultations in a multidisciplinary hospital environment, managing complex workflows and maintaining clinical documentation with strict data integrity.',
    ],
  },
  {
    title: 'Residency in Conservative Dentistry & Endodontics',
    org: 'Narsinhbhai Patel Dental College & Hospital',
    location: 'Visnagar, India',
    dates: 'Jun 2017 – Nov 2020',
    bullets: [
      'Conducted IRB-regulated clinical research from concept to publication, consenting 100+ patients across multiple study groups.',
      'Managed 500+ complex patients with a 95% clinical success rate; instructed and supervised 75+ undergraduate students.',
      'Authored 1 peer-reviewed manuscript; supported 5+ additional research projects.',
    ],
  },
  {
    title: 'General Dentist & Clinic Manager',
    org: 'Omkar Dental Clinic and Implant Centre',
    location: 'Ahmedabad, India',
    dates: 'Oct 2015 – May 2017',
    bullets: [
      'Oversaw clinical and administrative operations; developed individualized patient treatment plans and community outreach initiatives.',
    ],
  },
]

const education = [
  {
    degree: 'MS in Health Informatics, Concentration in Data Analytics',
    school: 'George Mason University, College of Public Health',
    dates: 'Aug 2024 – May 2026',
    gpa: '3.97/4.00',
    location: 'Fairfax, VA',
  },
  {
    degree: 'Master of Dental Surgery (MDS), Conservative Dentistry & Endodontics',
    school: 'Sankalchand Patel University / Narsinhbhai Patel Dental College & Hospital',
    dates: 'Jun 2017 – Jul 2020',
    gpa: '3.93/4.00',
    location: 'Gujarat, India',
  },
  {
    degree: 'Bachelor of Dental Surgery (BDS)',
    school: 'Hemchandracharya North Gujarat University / Narsinhbhai Patel Dental College & Hospital',
    dates: 'Jun 2010 – Sep 2015',
    gpa: '3.87/4.00',
    location: 'Gujarat, India',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white section-padding">
      <div className="container-max">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-12 text-center">
            Professional Experience
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-sage-200 hidden sm:block" aria-hidden="true" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 sm:left-3.5 top-5 w-5 h-5 rounded-full bg-sage-500 border-4 border-white shadow-sm hidden sm:block" aria-hidden="true" />

                  <article className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-sage-200 hover:shadow-sm transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                      <div>
                        <h3 className="font-700 text-gray-900 text-base sm:text-lg leading-snug">{exp.title}</h3>
                        <p className="text-sage-600 font-500 text-sm mt-0.5 italic">{exp.org}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{exp.location}</p>
                      </div>
                      <span className="flex-shrink-0 text-xs font-500 text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full h-fit">
                        {exp.dates}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                          <span className="text-sage-400 mt-1.5 flex-shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn delay={100}>
          <h3 className="text-2xl sm:text-3xl font-700 text-gray-900 mt-20 mb-8 text-center">
            Education
          </h3>
        </FadeIn>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 80}>
              <article className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-sage-200 hover:shadow-sm transition-all duration-200 h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-500 text-sage-600 bg-sage-50 border border-sage-200 px-2 py-0.5 rounded-full">
                      {edu.dates}
                    </span>
                  </div>
                </div>
                <h4 className="font-600 text-gray-900 text-sm leading-snug mb-1">{edu.degree}</h4>
                <p className="text-gray-500 text-xs italic mb-2">{edu.school}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{edu.location}</span>
                  <span className="text-xs font-600 text-sage-600 bg-sage-50 px-2 py-0.5 rounded">GPA {edu.gpa}</span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
