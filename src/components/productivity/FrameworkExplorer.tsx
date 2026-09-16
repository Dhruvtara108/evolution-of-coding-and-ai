import { useState } from 'react'
import type { ProductivityFrameworkDetail } from '../../types/research'
import { researchSources } from '../../data/sources'
import { Citation } from '../research/Citation'

interface FrameworkExplorerProps {
  frameworks: ProductivityFrameworkDetail[]
}

export function FrameworkExplorer({ frameworks }: FrameworkExplorerProps) {
  const [selectedId, setSelectedId] = useState(frameworks[0]?.id ?? '')
  const selected = frameworks.find((framework) => framework.id === selectedId) ?? frameworks[0]
  if (!selected) return null

  return (
    <div className="framework-explorer">
      <div className="framework-switcher" role="tablist" aria-label="Productivity frameworks">
        {frameworks.map((framework) => (
          <button
            className={`framework-switch${framework.id === selected.id ? ' is-selected' : ''}`}
            type="button"
            role="tab"
            aria-selected={framework.id === selected.id}
            key={framework.id}
            onClick={() => setSelectedId(framework.id)}
          >
            <span>{framework.name}</span>
            <small>{framework.status === 'verified' ? 'structured' : 'verification pending'}</small>
          </button>
        ))}
      </div>
      <article className="framework-detail" role="tabpanel">
        <div className="framework-detail-top"><span className="framework-label">{selected.name}</span><span className="source-status">{selected.status.replace('-', ' ')}</span></div>
        <h3>{selected.description}</h3>
        <p className="framework-context"><span className="detail-label">Measurement context</span>{selected.measurementContext}</p>
        {selected.dimensions.length > 0 ? (
          <div className="space-dimensions">{selected.dimensions.map((dimension) => <div key={dimension.id}><b>{dimension.shortLabel}</b><span>{dimension.name}</span></div>)}</div>
        ) : (
          <div className="verification-callout"><span>DORA software delivery performance metrics</span><p>Change Lead Time · Deployment Frequency · Failed Deployment Recovery Time · Change Fail Rate · Deployment Rework Rate</p><small>Applied at application/service context; this is not an individual productivity score.</small></div>
        )}
        <div className="framework-limitations"><span className="detail-label">Limitations / source status</span><p>{selected.limitations}</p></div>
        <Citation source={researchSources.find((source) => source.id === selected.sourceIds[0])} />
      </article>
    </div>
  )
}
