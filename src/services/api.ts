import type { AICapability, AIDevelopmentStage, AIEvidence, ProductivityDimension, ProductivityFrameworkDetail, ProductivityMetric, ResearchClaim, ResearchSource } from '../types/research'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api'

export interface ResearchApiSnapshot {
  sources: ResearchSource[]
  claims: ResearchClaim[]
  metrics: ProductivityMetric[]
  dimensions: ProductivityDimension[]
  frameworks: ProductivityFrameworkDetail[]
  aiStages: AIDevelopmentStage[]
  aiCapabilities: AICapability[]
  aiEvidence: AIEvidence[]
}

export async function requestResearch<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`)
  if (!response.ok) throw new Error(`Research API request failed: ${response.status}`)
  return response.json() as Promise<T>
}

export const researchApi = {
  sources: () => requestResearch<ResearchSource[]>('/research'),
  claims: () => requestResearch<ResearchClaim[]>('/research/claims'),
  metrics: () => requestResearch<ProductivityMetric[]>('/productivity/metrics'),
  dimensions: () => requestResearch<ProductivityDimension[]>('/productivity/dimensions'),
  frameworks: () => requestResearch<ProductivityFrameworkDetail[]>('/productivity/frameworks'),
  aiStages: () => requestResearch<AIDevelopmentStage[]>('/ai/stages'),
  aiCapabilities: () => requestResearch<AICapability[]>('/ai/capabilities'),
  aiEvidence: () => requestResearch<AIEvidence[]>('/ai/evidence'),
}
