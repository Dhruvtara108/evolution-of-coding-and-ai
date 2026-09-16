export type ResearchStatus = 'verified' | 'partially-verified' | 'unverified' | 'needs-verification' | 'synthesis'
export type ResearchCategory = 'historical' | 'productivity' | 'framework' | 'ai-development' | 'ai-product' | 'ai-productivity' | 'ai-quality' | 'ai-workflow' | 'methodology'
export type EvidenceType = 'controlled-experiment' | 'observational-study' | 'survey' | 'case-study' | 'benchmark' | 'industry-report' | 'vendor-report' | 'literature-review' | 'other'

export interface ResearchSource {
  id: string
  title: string
  authors: string[]
  year?: number
  type: 'paper' | 'book' | 'official-framework' | 'industry-study' | 'survey'
  status: ResearchStatus
  category: ResearchCategory
  venue?: string
  url?: string
  doi?: string
  publisher?: string
  abstract?: string
  verified?: boolean
  verificationNotes?: string
  accessedAt?: string
  note?: string
}

export interface ResearchClaim {
  id: string
  statement: string
  sourceId: string
  evidenceType: EvidenceType
  category: ResearchCategory
  context: string
  population?: string
  task?: string
  finding: string
  limitations: string
  verificationStatus: ResearchStatus
  lastVerified?: string
}

export interface TimelineEra {
  id: string
  title: string
  period: string
  description: string
  technologicalShift: string
  productivityConcept: string
  technologies?: string[]
  developmentPractice?: string
  visualState?: 'machine' | 'structured' | 'abstract' | 'collaborative' | 'automated' | 'assisted'
  tags: string[]
  sourceIds: string[]
}

export interface ProductivityFramework {
  id: string
  name: string
  description: string
  dimensions: string[]
  sourceIds: string[]
}

export type ProductivityMetricCategory = 'activity' | 'output' | 'outcome'

export interface ProductivityMetric {
  id: string
  name: string
  category: ProductivityMetricCategory
  description: string
  whatItMeasures: string
  whatItCannotTellUs: string
  limitations: string
  sourceIds: string[]
}

export interface ProductivityDimension {
  id: string
  name: string
  shortLabel: string
  description: string
  examples: string[]
  measurementConsiderations: string
  limitations: string
  sourceIds: string[]
}

export interface ProductivityFrameworkDetail {
  id: string
  name: string
  description: string
  measurementContext: string
  limitations: string
  status: ResearchStatus
  dimensions: ProductivityDimension[]
  sourceIds: string[]
}

export interface AIDevelopmentStage {
  id: string
  title: string
  description: string
  humanWork: string
  aiWork: string
  uncertainty: string
  verification: string
  capabilityLevel: 'limited' | 'moderate' | 'expanded' | 'context-dependent'
  status: ResearchStatus
}

export interface AICapability {
  id: string
  name: string
  description: string
  state: 'limited' | 'moderate' | 'expanded' | 'context-dependent'
  caveat: string
}

export interface AIEvidence {
  id: string
  title: string
  sourceId: string
  claim: string
  context: string
  studyType: EvidenceType
  population: string
  task: string
  finding: string
  limitations: string
  verificationStatus: ResearchStatus
}
