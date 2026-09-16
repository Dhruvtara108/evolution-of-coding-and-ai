import type { TimelineEra } from '../../types/research'

interface EraDetailProps {
  era: TimelineEra
  index: number
  active: boolean
  pointerX: number
  pointerY: number
}

export function EraDetail({ era, index, active, pointerX, pointerY }: EraDetailProps) {
  return (
    <article
      className={`timeline-detail${active ? ' is-active' : ''}`}
      aria-hidden={!active}
      style={{
        '--detail-shift-x': `${active ? pointerX * -3 : 0}px`,
        '--detail-shift-y': `${active ? pointerY * -2 : 0}px`,
      } as React.CSSProperties}
    >
      <div className="timeline-detail-kicker">
        <span>Era 0{index + 1}</span>
        <span>{era.period}</span>
      </div>
      <h3>{era.title}</h3>
      <p className="timeline-detail-description">{era.description}</p>
      <div className="timeline-detail-grid">
        <div>
          <span className="detail-label">Technological shift</span>
          <p>{era.technologicalShift}</p>
        </div>
        <div>
          <span className="detail-label">Productivity lens</span>
          <p>{era.productivityConcept}</p>
        </div>
        <div>
          <span className="detail-label">Development practice</span>
          <p>{era.developmentPractice ?? 'TODO: VERIFY SOURCE'}</p>
        </div>
        <div>
          <span className="detail-label">Technologies / concepts</span>
          <p>{era.technologies?.join(' · ') ?? 'TODO: VERIFY SOURCE'}</p>
        </div>
      </div>
      <div className="timeline-detail-footer">
        <span className={`visual-state state-${era.visualState ?? 'machine'}`} />
        <span>Visual language: {era.visualState ?? 'TODO: VERIFY SOURCE'}</span>
        <span className="source-status">Source links pending verification</span>
      </div>
    </article>
  )
}
