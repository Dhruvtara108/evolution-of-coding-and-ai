import type { AIDevelopmentStage } from '../../types/research'

interface Props { stages: AIDevelopmentStage[]; selectedIndex: number; onSelect: (index: number) => void }

export function AIEvolutionTimeline({ stages, selectedIndex, onSelect }: Props) {
  return <div className="ai-evolution-track" role="tablist" aria-label="Conceptual progression of AI-assisted software development">
    {stages.map((stage, index) => <div className="ai-evolution-item" key={stage.id}>
      <button className={`ai-evolution-node${selectedIndex === index ? ' is-selected' : ''}`} type="button" role="tab" aria-selected={selectedIndex === index} aria-label={`Explore ${stage.title}`} onClick={() => onSelect(index)}>
        <span>{String(index + 1).padStart(2, '0')}</span><b>{stage.title}</b>
      </button>
      {index < stages.length - 1 && <i aria-hidden="true">→</i>}
    </div>)}
  </div>
}
