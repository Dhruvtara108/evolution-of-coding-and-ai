import { useState } from 'react'
import type { ProductivityDimension } from '../../types/research'

interface DimensionModelProps {
  dimensions: ProductivityDimension[]
}

export function DimensionModel({ dimensions }: DimensionModelProps) {
  const [selectedId, setSelectedId] = useState(dimensions[0]?.id ?? '')
  const selected = dimensions.find((dimension) => dimension.id === selectedId) ?? dimensions[0]
  if (!selected) return null

  return (
    <div className="dimension-model">
      <div className="dimension-orbit" aria-hidden="true">
        <span className="orbit-line orbit-line-one" />
        <span className="orbit-line orbit-line-two" />
        <span className="orbit-core">PRODUCTIVITY<br /><small>NO SINGLE SCORE</small></span>
        {dimensions.map((dimension, index) => (
          <button
            className={`dimension-node node-${index}${dimension.id === selected.id ? ' is-selected' : ''}`}
            type="button"
            key={dimension.id}
            aria-label={`Explore ${dimension.name}`}
            onClick={() => setSelectedId(dimension.id)}
          >
            <span>{dimension.shortLabel}</span>
          </button>
        ))}
      </div>
      <article className="dimension-detail" aria-live="polite">
        <div className="metric-detail-index">DIMENSION / {selected.shortLabel}</div>
        <h3>{selected.name}</h3>
        <p>{selected.description}</p>
        <div className="dimension-examples">{selected.examples.map((example) => <span key={example}>{example}</span>)}</div>
        <div className="metric-detail-columns">
          <div><span className="detail-label">Measurement consideration</span><p>{selected.measurementConsiderations}</p></div>
          <div><span className="detail-label">Limitation</span><p>{selected.limitations}</p></div>
        </div>
      </article>
    </div>
  )
}
