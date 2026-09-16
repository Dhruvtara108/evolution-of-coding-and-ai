import type { AIDevelopmentStage } from '../../types/research'

interface Props { stages: AIDevelopmentStage[]; selectedIndex: number; onSelect: (index: number) => void }

export function AIEvolutionTimeline({ stages, selectedIndex, onSelect }: Props) {
  const moveSelection = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    onSelect(event.key === 'ArrowRight' ? (index + 1) % stages.length : (index - 1 + stages.length) % stages.length)
  }
  return <div className="ai-evolution-track" role="tablist" aria-label="Conceptual progression of AI-assisted software development">
    {stages.map((stage, index) => <div className="ai-evolution-item" key={stage.id}>
      <button className={`ai-evolution-node${selectedIndex === index ? ' is-selected' : ''}`} type="button" role="tab" aria-selected={selectedIndex === index} aria-label={`Explore ${stage.title}`} onClick={() => onSelect(index)} onKeyDown={(event) => moveSelection(event, index)}>
        <span>{String(index + 1).padStart(2, '0')}</span><b>{stage.title}</b>
      </button>
      {index < stages.length - 1 && <i aria-hidden="true">→</i>}
    </div>)}
  </div>
}
