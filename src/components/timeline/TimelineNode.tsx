import type { TimelineEra } from '../../types/research'

interface TimelineNodeProps {
  era: TimelineEra
  index: number
  active: boolean
  onSelect: (index: number) => void
}

export function TimelineNode({ era, index, active, onSelect }: TimelineNodeProps) {
  return (
    <button
      className={`timeline-node${active ? ' is-active' : ''}`}
      type="button"
      aria-current={active ? 'step' : undefined}
      aria-label={`View era ${index + 1}: ${era.title}`}
      onClick={() => onSelect(index)}
    >
      <span className="timeline-node-dot" />
      <span className="timeline-node-copy">
        <span className="timeline-node-number">0{index + 1}</span>
        <span className="timeline-node-title">{era.title}</span>
      </span>
    </button>
  )
}
