import type { AIDevelopmentStage } from '../types/research'

export const aiDevelopmentStages: AIDevelopmentStage[] = [
  {
    id: 'autocomplete',
    title: 'Autocomplete',
    description: 'Suggestions appear within an existing coding workflow.',
    humanWork: 'Intent, selection, review, and integration',
    aiWork: 'Candidate text generation',
    status: 'synthesis',
  },
  {
    id: 'agentic-workflows',
    title: 'Agentic workflows',
    description: 'TODO: VERIFY CAPABILITIES AND RESEARCH EVIDENCE for this evolving category.',
    humanWork: 'Goal setting, oversight, validation, and responsibility',
    aiWork: 'Potentially multi-step task execution',
    status: 'needs-verification',
  },
]
