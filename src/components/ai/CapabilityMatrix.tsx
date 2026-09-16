import { useState } from 'react'
import type { AICapability } from '../../types/research'

export function CapabilityMatrix({ capabilities }: { capabilities: AICapability[] }) {
  const [selected, setSelected] = useState(capabilities[0]?.id ?? '')
  const current = capabilities.find((capability) => capability.id === selected) ?? capabilities[0]
  if (!current) return null
  return <div className="capability-matrix"><div className="capability-list" role="tablist" aria-label="AI capability model">{capabilities.map((capability) => <button type="button" role="tab" aria-selected={selected === capability.id} className={selected === capability.id ? 'is-selected' : ''} key={capability.id} onClick={() => setSelected(capability.id)}><span>{capability.name}</span><small>{capability.state}</small></button>)}</div><article className="capability-detail" role="tabpanel"><div className="ai-kicker">CAPABILITY STATE / QUALITATIVE</div><h3>{current.name}</h3><p>{current.description}</p><strong>{current.state}</strong><div><span>Context note</span><p>{current.caveat}</p></div></article></div>
}
