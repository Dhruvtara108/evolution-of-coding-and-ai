import type { ResearchSource } from '../types/research'

export const researchSources: ResearchSource[] = [
  {
    id: 'space-paper',
    title: 'The SPACE of Developer Productivity',
    authors: ['TODO: VERIFY AUTHORS'],
    year: 2021,
    type: 'paper',
    status: 'needs-verification',
    url: 'https://arxiv.org/abs/2108.10252',
    note: 'Primary source URL identified; author metadata and detailed claims require verification before publication.',
  },
  {
    id: 'dora-research',
    title: 'DORA Research',
    authors: ['DORA'],
    type: 'official-framework',
    status: 'needs-verification',
    url: 'https://dora.dev/research/',
    note: 'Use the authoritative DORA research material to verify definitions and current terminology.',
  },
]
