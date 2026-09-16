import type { ProductivityFrameworkDetail } from '../types/research'

export const productivityFrameworks: ProductivityFrameworkDetail[] = [
  {
    id: 'space',
    name: 'SPACE',
    description: 'A framework for discussing developer productivity across multiple dimensions rather than reducing it to a single score.',
    measurementContext: 'A multidimensional framework for reasoning about developer productivity. It should not be collapsed into one score.',
    limitations: 'TODO: VERIFY SOURCE — add the framework authors’ detailed measurement guidance and limitations from the primary paper.',
    status: 'needs-verification',
    dimensions: [
      { id: 'satisfaction', name: 'Satisfaction and well-being', shortLabel: 'S', description: 'How developers experience their work and well-being.', examples: ['Satisfaction', 'Well-being', 'Motivation'], measurementConsiderations: 'TODO: VERIFY SOURCE — connect measurement approaches to the primary framework paper.', limitations: 'Experience is contextual and should not be inferred from activity counts.', sourceIds: ['space-paper'] },
      { id: 'performance', name: 'Performance', shortLabel: 'P', description: 'The outcomes and impact of a system or team’s work.', examples: ['Quality', 'Impact', 'System outcomes'], measurementConsiderations: 'TODO: VERIFY SOURCE — confirm the framework’s precise performance examples.', limitations: 'Outcomes are difficult to attribute to one individual developer.', sourceIds: ['space-paper'] },
      { id: 'activity', name: 'Activity', shortLabel: 'A', description: 'Observable actions and outputs in the development system.', examples: ['Commits', 'Reviews', 'Changes'], measurementConsiderations: 'Interpret activity as a signal in context rather than as productivity itself.', limitations: 'Visible activity can omit important cognitive and collaborative work.', sourceIds: ['space-paper'] },
      { id: 'communication', name: 'Communication and collaboration', shortLabel: 'C', description: 'The ways people coordinate, share information, and work together.', examples: ['Reviews', 'Coordination', 'Knowledge sharing'], measurementConsiderations: 'TODO: VERIFY SOURCE — confirm suitable measures and examples from the primary paper.', limitations: 'Communication volume alone does not establish effectiveness.', sourceIds: ['space-paper'] },
      { id: 'efficiency', name: 'Efficiency and flow', shortLabel: 'E', description: 'The ability to make progress with manageable friction and interruption.', examples: ['Focus', 'Flow', 'Friction'], measurementConsiderations: 'Use direct developer feedback and contextual workflow signals.', limitations: 'Flow is situational and can be harmed by optimizing for speed alone.', sourceIds: ['space-paper'] },
    ],
    sourceIds: ['space-paper'],
  },
  {
    id: 'dora',
    name: 'DORA',
    description: 'A research program focused on software delivery performance and the capabilities that drive it.',
    measurementContext: 'Software delivery performance at the system or service level. This is not a direct measure of individual developer productivity.',
    limitations: 'Definitions, metric guidance, and current terminology must be checked against the authoritative DORA research source before publication.',
    status: 'needs-verification',
    dimensions: [],
    sourceIds: ['dora-research'],
  },
]
