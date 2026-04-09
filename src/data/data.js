// src/data/data.js

// ===============================
// EXPERIENCE
// ===============================
export const experience = [
  {
    company: 'The Cigna Group | Evernorth',
    role: 'Analytics Advisor – Data Infrastructure (SIU)',
    period: '2019 — Present',
    highlights: [
      'Designed distributed ETL and ELT pipelines integrating healthcare claims data across Teradata, Oracle, SQL Server, Databricks, and AWS environments.',
      'Modernized legacy reporting workflows to support near real-time investigative analytics and stronger operational visibility.',
      'Delivered self-service dashboards, telemetry, and model-ready datasets supporting fraud analytics, reporting efficiency, and platform reliability.',
    ],
    tags: ['Python', 'SQL', 'Databricks', 'Spark', 'AWS', 'Healthcare Claims'],
  },
  
  {
    company: 'Mercy Hospital',
    role: 'Data Analyst III – Pharmacy Administration',
    period: '2015 — 2019',
    highlights: [
      'Built analytics datasets and reporting solutions supporting pharmacy operations, pricing analysis, and financial modeling.',
      'Developed forecasting datasets to evaluate pharmacy proposals and support business strategy.',
      'Improved reporting and workflow efficiency through automation and standardized operational processes.',
    ],
    tags: ['Pharmacy', 'Forecasting', 'Reporting', 'Analytics', 'Operations'],
  },

  {
    company: 'Express Scripts',
    role: 'Various Roles – Data Governance, Analytics, and DOD Reporting',
    period: '2004 - 2015',
    highlights: [
      'Led data discovery initiatives mapping sources, ownership, and lineage across complex healthcare systems.',
      'Designed governance frameworks for validation, QA, metadata, and business sign-off to improve trust in analytics outputs.',
      'Operationalized analytics-ready datasets through scalable ingestion, transformation, and enrichment pipelines.',
    ],
    tags: ['Data Governance', 'Lineage', 'Metadata', 'QA', 'Regulatory Reporting'],
  },
];

// ===============================
// PROJECTS (CASE STUDY STYLE)
// ===============================
export const projects = [
  {
   // number: '01',
    badge: 'ANALYTICS · HEALTHCARE · GENAI',
    yearCompany: '2025',
    title: 'Healthcare Data Governance Framework',
    description:
      'Designed a governance-forward analytics framework covering data ownership, lineage, validation, QA review, and business sign-off for high-stakes healthcare reporting environments. Built a more trusted foundation for scalable reporting, operational analytics, and decision support.',
    stats: [
      { value: '1M+', label: 'Events / day' },
      { value: '45%', label: 'Manual Effort Reduction' },
      { value: '65%', label: 'Defects Reduction' },
      { value: '99.5%', label: 'Data Reliability' },
    ],
    tags: ['Governance', 'Lineage', 'Validation', 'QA', 'Reporting', 'Healthcare'],
  },
];

// ===============================
// INSIGHTS (THOUGHT LEADERSHIP)
// ===============================
export const insights = [
  {
    title: 'Why Trust Is the Real Foundation of Analytics',
    type: 'Point of View',
    summary:
      'Analytics programs fail not because dashboards are missing, but because stakeholders do not trust the data, definitions, or process behind them.',
  },
  {
    title: 'Modernization Without Governance Creates New Risk',
    type: 'Strategy',
    summary:
      'Cloud and AI initiatives only deliver value when data quality, ownership, and validation are embedded into the system from the start.',
  },
  {
    title: 'Executive Reporting Should Reduce Uncertainty',
    type: 'Leadership Lens',
    summary:
      'The best reporting environments create shared understanding and enable faster, more confident decisions.',
  },
];

// ===============================
// CAREER HIGHLIGHTS
// ===============================
export const highlights = [
  {
    title: 'Governance-Driven Analytics Leadership',
    summary:
      'Built structured frameworks for validation, ownership, lineage, and QA that improve trust and scalability of analytics systems.',
  },
  {
    title: 'Enterprise Reporting Modernization',
    summary:
      'Transformed legacy reporting into scalable, decision-ready analytics aligned with business KPIs.',
  },
  {
    title: 'Healthcare Data Platform Expertise',
    summary:
      'Deep experience across healthcare analytics, fraud detection, regulatory reporting, and distributed data platforms.',
  },
];

// ===============================
// METRICS (HERO SECTION)
// ===============================
export const metrics = [
  { value: '15+ Years', label: 'Experience' },
  { value: '1M+', label: 'Events' },
  { value: '$1.3B+', label: 'Analytics Impact' },
  { value: 'Petabyte-scale', label: 'Healthcare Data Platforms' },
];

// ===============================
// PRINCIPLES
// ===============================

export const principles = [
  {
    icon: 'database',
    title: 'Data Foundations',
    body: 'Modern analytics starts with trustworthy structures, clear definitions, and resilient pipelines.',
  },
  {
    icon: 'governance',
    title: 'Governance by Design',
    body: 'Governance should not slow teams down. It should make analytics safer, clearer, and easier to scale.',
  },
  {
    icon: 'analytics',
    title: 'Business-Centered Insight',
    body: 'Dashboards and models matter only when decision-makers can use them with confidence.',
  },
  {
    icon: 'platform',
    title: 'Modernization with Purpose',
    body: 'Cloud, AI, and automation are most valuable when paired with structure, usability, and trust.',
  },
];

export const expertise = [
  {
    icon: 'platform',
    title: 'Clinical Data Platform & Pipeline Architecture',
    body:
      'Designed distributed pipelines and analytics infrastructure that integrate complex healthcare datasets across enterprise systems and support scalable downstream use.',
  },
  {
    icon: 'analytics',
    title: 'Reporting and Analytics Modernization',
    body:
      'Transformed legacy reporting workflows into governed, decision-ready analytics experiences with stronger KPI alignment, usability, and operational value.',
  },
  {
    icon: 'governance',
    title: 'Governance, Lineage, and Data Discovery',
    body:
      'Improved trust in analytics through data discovery, ownership mapping, validation design, metadata practices, and governed access across distributed platforms.',
  },
  {
    icon: 'database',
    title: 'Fraud, ML, and Operational Enablement',
    body:
      'Supported investigative analytics and machine learning through model-ready datasets, telemetry, feature pipelines, and monitoring frameworks that strengthen platform reliability.',
  },
];