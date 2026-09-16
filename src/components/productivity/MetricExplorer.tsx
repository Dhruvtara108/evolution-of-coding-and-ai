import { useState } from 'react'
import type { ProductivityMetric } from '../../types/research'
import { researchSources } from '../../data/sources'
import { Citation } from '../research/Citation'

interface MetricExplorerProps {
  metrics: ProductivityMetric[]
}

export function MetricExplorer({ metrics }: MetricExplorerProps) {
  const [selectedId, setSelectedId] = useState(metrics[0]?.id ?? '')
  const selected = metrics.find((metric) => metric.id === selectedId) ?? metrics[0]
  if (!selected) return null

  return (
    <div className="metric-lab">
      <div className="metric-list" role="tablist" aria-label="Observable productivity metrics">
        {metrics.map((metric) => (
          <button
            className={`metric-tab${metric.id === selected.id ? ' is-selected' : ''}`}
            type="button"
            role="tab"
            aria-selected={metric.id === selected.id}
            key={metric.id}
            onClick={() => setSelectedId(metric.id)}
          >
            <span>{metric.name}</span>
            <small>{metric.category}</small>
          </button>
        ))}
      </div>
      <article className="metric-detail" role="tabpanel">
        <div className="metric-detail-index">SELECTED PROXY / {selected.category}</div>
        <h3>{selected.name}</h3>
        <p>{selected.description}</p>
        <div className="metric-detail-columns">
          <div><span className="detail-label">What it measures</span><p>{selected.whatItMeasures}</p></div>
          <div><span className="detail-label">What it cannot tell us</span><p>{selected.whatItCannotTellUs}</p></div>
        </div>
        <div className="limitation-note"><span>Context required</span><p>{selected.limitations}</p></div>
        <Citation source={researchSources.find((source) => source.id === selected.sourceIds[0])} />
      </article>
    </div>
  )
}
