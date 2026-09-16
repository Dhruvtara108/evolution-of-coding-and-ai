import type { ResearchSource } from '../../types/research'

export function Citation({ source }: { source: ResearchSource | undefined }) {
  if (!source) return <span className="citation citation-missing">Source metadata unavailable</span>
  return (
    <span className="citation">
      <span>{source.authors.join(', ')}{source.year ? ` · ${source.year}` : ''}</span>
      {source.url ? <a href={source.url} target="_blank" rel="noreferrer">Open source</a> : <span>URL pending verification</span>}
    </span>
  )
}
