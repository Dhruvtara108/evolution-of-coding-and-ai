import { useRef } from 'react'
import { timelineEras } from '../../data/timeline'
import { usePointerPosition } from '../../hooks/usePointerPosition'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { useTimelineProgress } from '../../hooks/useTimelineProgress'
import { EraDetail } from './EraDetail'
import { TimelineNode } from './TimelineNode'

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([])
  const reducedMotion = useReducedMotion()
  const pointer = usePointerPosition(!reducedMotion)
  const { progress, activeIndex } = useTimelineProgress(sectionRef, timelineEras.length)
  const currentIndex = activeIndex

  const selectEra = (index: number) => {
    const section = sectionRef.current
    if (!section || timelineEras.length <= 1) return
    const bounds = section.getBoundingClientRect()
    const scrollableDistance = Math.max(0, bounds.height - window.innerHeight)
    const targetProgress = index / (timelineEras.length - 1)
    const targetY = window.scrollY + bounds.top + targetProgress * scrollableDistance
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
    nodeRefs.current[index]?.querySelector('button')?.focus({ preventScroll: true })
  }

  const onNodeKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowRight' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = Math.min(timelineEras.length - 1, Math.max(0, index + direction))
    selectEra(nextIndex)
    nodeRefs.current[nextIndex]?.querySelector('button')?.focus()
  }

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="timeline-experience"
      aria-labelledby="timeline-title"
      style={{ '--timeline-progress': progress } as React.CSSProperties}
    >
      <div className="section-frame timeline-intro">
        <div className="section-index">02 / THE JOURNEY</div>
        <div className="timeline-heading">
          <h2 id="timeline-title">An evolving definition of the work</h2>
          <p>Scroll to move through the eras. Select a node to focus it, then use arrow keys to continue the journey.</p>
        </div>
      </div>
      <div className="timeline-stage section-frame">
        <div className="timeline-atmosphere" aria-hidden="true"><span /><span /><span /></div>
        <div className="timeline-sticky">
          <div className="timeline-visual">
            <div className="timeline-visual-label">ABSTRACTION / WORKFLOW / OUTCOME</div>
            <div className="timeline-visual-core">
              <span className="core-ring ring-one" />
              <span className="core-ring ring-two" />
              <span className="core-ring ring-three" />
              <span className="core-center">{String(currentIndex + 1).padStart(2, '0')}</span>
            </div>
            <div className="timeline-visual-caption">{timelineEras[currentIndex].technologicalShift}</div>
          </div>
          <div className="timeline-progress" aria-hidden="true"><span /></div>
          <div className="timeline-nodes" role="tablist" aria-label="Timeline eras">
            {timelineEras.map((era, index) => (
              <div
                key={era.id}
                ref={(element) => { nodeRefs.current[index] = element }}
                onKeyDown={(event) => onNodeKeyDown(event, index)}
              >
                <TimelineNode era={era} index={index} active={index === currentIndex} onSelect={selectEra} />
              </div>
            ))}
          </div>
        </div>
        <div className="timeline-details">
          {timelineEras.map((era, index) => (
            <EraDetail
              key={era.id}
              era={era}
              index={index}
              active={index === currentIndex}
              pointerX={pointer.x}
              pointerY={pointer.y}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
