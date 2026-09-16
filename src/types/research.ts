export type ResearchStatus = 'verified' | 'needs-verification' | 'synthesis'

export interface ResearchSource {
  id: string
  title: string
  authors: string[]
  year?: number
  type: 'paper' | 'book' | 'official-framework' | 'industry-study' | 'survey'
  status: ResearchStatus
  url?: string
  note?: string
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
  status: ResearchStatus
}
