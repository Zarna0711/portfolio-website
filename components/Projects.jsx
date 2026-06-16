'use client'

import FadeIn from './FadeIn'

const projects = [
  {
    title: 'Geospatial-to-Clinical Pipeline: Identifying Healthcare Deserts in Virginia',
    dates: 'Jan 2026 – May 2026',
    description: 'Designed an automated pipeline using HL7 FHIR standards to integrate SDOH data into clinical workflows, identifying healthcare deserts and high-uninsured regions across Virginia.',
    tag: 'HL7 FHIR',
    github: 'https://github.com/Zarna0711/Capstone',
    poster: '/capstone-poster.jpg',
    photo: '/capstone-photo.jpg',
  },
  {
    title: 'RadFlow: Radiology Operations & Infrastructure Modeling',
    dates: 'Jan 2026 – May 2026',
    description: 'Simulated end-to-end radiology workflows for 112k+ studies to identify bottlenecks; designed a MATLAB-based HSM framework demonstrating 70–85% potential reduction in PACS storage costs.',
    tag: 'MATLAB',
  },
  {
    title: 'Fraudulent Activity Detection in Healthcare Insurance Claims',
    dates: 'Mar 2025 – Present',
    description: 'Engineered a Python data mining framework analyzing 66,494 healthcare claims using CBLOF, ECOD, and Isolation Forest models to detect fraud patterns with high confidence.',
    tag: 'Python · ML',
  },
  {
    title: 'ICD-9 to ICD-10 Conversion & HL7 Integration System',
    dates: 'Jan 2025 – May 2025',
    description: 'Designed a full-cycle data modernization system mapping ICD-9 to ICD-10 using GEMs and an HL7 v2.x messaging engine for XML-based clinical data conversion.',
    tag: 'HL7 · ICD',
  },
  {
    title: 'Automated Brain Tumor MRI Classification',
    dates: 'Oct 2025 – Dec 2025',
    description: 'Developed PyTorch-based deep learning models (baseline CNN and ResNet-50 transfer learning) achieving up to 94% validation accuracy classifying MRI scans into four clinical categories.',
    tag: 'PyTorch · Deep Learning',
  },
  {
    title: 'Clinical Decision Support: Predicting Diabetes Onset',
    dates: 'Aug 2025 – Oct 2025',
    description: 'Compared Logistic Regression, SVM, and Random Forest models for diabetes onset prediction; reduced False Negatives by ~50% vs. baseline using balanced class weights.',
    tag: 'R · Scikit-learn',
  },
  {
    title: 'Predictive Modeling of Child Health Outcomes',
    dates: 'Jan 2025 – Apr 2025',
    description: 'Built regression models in R using 2021 NSCH data with multiple imputation; identified 38% variance in child health conditions attributable to caregiver education and employment status.',
    tag: 'R Studio',
  },
  {
    title: 'Predictive Model for Mortality Analysis',
    dates: 'Oct 2024 – Dec 2024',
    description: 'Developed a SQL-based predictive model analyzing ICD codes and likelihood ratios to assess diagnosis patterns associated with mortality risk.',
    tag: 'SQL',
  },
  {
    title: 'Clinical Inventory Forecasting & Optimization',
    dates: 'May 2025 – Dec 2025',
    description: 'Validated an R-based predictive model targeting a 15% reduction in supply waste through improved 60-day demand forecasting across clinic branches.',
    tag: 'R',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 section-padding">
      <div className="container-max">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-12 text-center">
            Projects
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <FadeIn key={i} delay={i * 40}>
              <article className="bg-white rounded-xl p-5 border border-gray-100 hover:border-sage-300 hover:shadow-md transition-all duration-200 flex flex-col h-full group">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="inline-block px-2.5 py-1 bg-sage-500 text-white text-xs font-500 rounded-full">
                    {proj.tag}
                  </span>
                  <span className="text-xs text-gray-400 text-right flex-shrink-0">{proj.dates}</span>
                </div>
                <h3 className="font-600 text-gray-900 text-sm sm:text-base leading-snug mb-3 group-hover:text-sage-700 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {proj.description}
                </p>
                {(proj.github || proj.poster || proj.photo) && (
                  <div className="mt-auto space-y-3">
                    {(proj.poster || proj.photo) && (
                      <div className="grid grid-cols-2 gap-2">
                        {proj.poster && (
                          <a href={proj.poster} target="_blank" rel="noopener noreferrer">
                            <img src={proj.poster} alt="Project poster" className="rounded-lg w-full h-24 object-cover border border-gray-100 hover:border-sage-300 transition-colors" />
                          </a>
                        )}
                        {proj.photo && (
                          <a href={proj.photo} target="_blank" rel="noopener noreferrer">
                            <img src={proj.photo} alt="Project photo" className="rounded-lg w-full h-24 object-cover border border-gray-100 hover:border-sage-300 transition-colors" />
                          </a>
                        )}
                      </div>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-sage-600 hover:text-sage-800 font-medium transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
