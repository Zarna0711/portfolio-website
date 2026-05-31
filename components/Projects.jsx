'use client'

import FadeIn from './FadeIn'

const projects = [
  {
    title: 'Geospatial-to-Clinical Pipeline: Identifying Healthcare Deserts in Virginia',
    dates: 'Jan 2026 – May 2026',
    description: 'Designed an automated pipeline using HL7 FHIR standards to integrate SDOH data into clinical workflows, identifying healthcare deserts and high-uninsured regions across Virginia.',
    tag: 'HL7 FHIR',
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
          <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-3 text-center">
            Academic Projects
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Graduate-level informatics and data science projects spanning clinical AI, health systems, and population health.
          </p>
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
                <p className="text-gray-500 text-sm leading-relaxed mt-auto">
                  {proj.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
