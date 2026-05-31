'use client'

import FadeIn from './FadeIn'

const skillGroups = [
  {
    category: 'Clinical Research & Compliance',
    icon: '🔬',
    skills: [
      'IRB Protocol Management', 'Good Clinical Practice (GCP)', 'CITI Human Subjects Protection',
      'Informed Consent', 'Patient Recruitment', 'Case Report Forms',
      'Adverse Event Documentation', 'HIPAA/ePHI', 'Source Documentation', 'Regulatory Binders',
    ],
    technical: true,
  },
  {
    category: 'Data Analytics & Programming',
    icon: '💻',
    skills: [
      'SQL (MS SQL Server)', 'Python (Pandas · NumPy · Scikit-learn)', 'Matplotlib · Seaborn · PyTorch',
      'R / R Studio', 'MATLAB', 'Weka', 'Protege', 'ETL Pipelines',
      'Predictive Modeling', 'Data Mining', 'Statistical Analysis', 'Power BI', 'Tableau',
      'Advanced Excel', 'CAPA Analysis',
    ],
    technical: true,
  },
  {
    category: 'Health Informatics & Interoperability',
    icon: '🏥',
    skills: [
      'HL7/FHIR', 'ICD-9/10-CM/PCS', 'CPT', 'HCPCS', 'SNOMED CT', 'UMLS',
      'PACS/DICOM', 'EHR Systems', 'RAMP', 'CDI', 'Geospatial Data Analysis', 'RadNet',
    ],
    technical: true,
  },
  {
    category: 'Regulatory & Quality',
    icon: '📋',
    skills: [
      'NABH Accreditation Management', 'OSHA', 'CDC', 'CMS', 'Joint Commission Readiness',
      'Internal/External Auditing', 'SOP Development', 'Root Cause Analysis', 'CAPA',
      'Privacy Impact Assessment', 'Information Governance',
    ],
    technical: false,
  },
  {
    category: 'Healthcare Operations & Leadership',
    icon: '🤝',
    skills: [
      'Multi-site Clinic Management', 'Staff Mentorship & Training', 'Project Management',
      'Accreditation Lifecycle Management', 'Procurement & Vendor Management',
      'Clinical Workflow Optimization', 'Stakeholder Communication',
    ],
    technical: false,
  },
  {
    category: 'Software & Tools',
    icon: '🛠️',
    skills: [
      'Microsoft Office Suite', 'MS Project', 'JIRA', 'Agile/Scrum',
      'Salesforce/HubSpot (CRM)', 'Tableau', 'Power BI', 'XML',
      'English (Fluent)', 'Hindi (Fluent)', 'Gujarati (Native)',
    ],
    technical: false,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white section-padding">
      <div className="container-max">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-700 text-gray-900 mb-3 text-center">
            Skills &amp; Technical Proficiencies
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            A comprehensive overview of clinical, technical, and operational competencies.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-sage-200 transition-colors h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl" role="img" aria-hidden="true">{group.icon}</span>
                  <h3 className="font-600 text-gray-900 text-sm sm:text-base">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-400 rounded-full border transition-colors ${
                        group.technical
                          ? 'bg-sage-50 text-sage-700 border-sage-200 hover:bg-sage-100'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
