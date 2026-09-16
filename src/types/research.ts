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

export interface AIDevelopmentStage {
  id: string
  title: string
  description: string
  humanWork: string
  aiWork: string
  status: ResearchStatus
}
