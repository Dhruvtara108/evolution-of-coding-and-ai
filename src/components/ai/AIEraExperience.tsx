import { useState } from 'react'
import { aiCapabilities, aiDevelopmentStages, aiEvidence } from '../../data/ai-era'
import { AIEvidenceCard } from './AIEvidenceCard'
import { AIEvolutionTimeline } from './AIEvolutionTimeline'
import { AIWorkflow } from './AIWorkflow'
import { CapabilityMatrix } from './CapabilityMatrix'

export function AIEraExperience() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = aiDevelopmentStages[selectedIndex]
  return <section id="ai-era" className="ai-era-experience" aria-labelledby="ai-title">
    <div className="section-frame ai-era-intro"><div className="section-index">04 / AI-ASSISTED DEVELOPMENT</div><div className="ai-era-heading"><h2 id="ai-title">When the implementation becomes a collaboration.</h2><p>A conceptual progression—not a universally accepted historical taxonomy—of systems participating in software work.</p></div></div>
    <div className="section-frame ai-era-content">
      <div className="ai-evolution-label">CONCEPTUAL PROGRESSION OF AI-ASSISTED SOFTWARE DEVELOPMENT</div>
      <AIEvolutionTimeline stages={aiDevelopmentStages} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
      <article className="ai-stage-focus"><div className="ai-kicker">STAGE {String(selectedIndex + 1).padStart(2, '0')} / {selected.status.replace('-', ' ')}</div><h3>{selected.title}</h3><p>{selected.description}</p><div className="stage-focus-grid"><div><b>Human work</b><p>{selected.humanWork}</p></div><div><b>AI work</b><p>{selected.aiWork}</p></div><div><b>Uncertainty</b><p>{selected.uncertainty}</p></div><div><b>Verification</b><p>{selected.verification}</p></div></div></article>
      <div className="ai-subsection"><div className="ai-kicker">01 / HUMAN + AI WORKFLOW</div><h3>Intent still needs a loop.</h3><p className="ai-lede">AI-assisted development changes where proposals appear in the workflow. It does not remove the need to review, test, debug, and decide.</p><AIWorkflow /></div>
      <div className="ai-subsection"><div className="ai-kicker">02 / CAPABILITY MODEL</div><h3>Capability depends on context.</h3><p className="ai-lede">Qualitative states make room for system configuration, permissions, task type, and verification conditions.</p><CapabilityMatrix capabilities={aiCapabilities} /></div>
      <div className="ai-subsection ai-measurement"><div className="ai-kicker">03 / PRODUCTIVITY TENSION</div><h3>What should measurement capture now?</h3><div className="measurement-tension"><span>Generated output</span><i>↔</i><span>Review · verification · debugging · experience</span></div><p className="ai-lede">An increase in one observable signal does not automatically establish an increase in overall developer productivity. This is a project synthesis and an open research question.</p></div>
      <div className="ai-subsection"><div className="ai-kicker">04 / EVIDENCE ARCHITECTURE</div><h3>Separate capability from evidence.</h3><p className="ai-lede">Research cards are structured to keep method, context, finding, and limitations visible.</p><div className="ai-evidence-grid">{aiEvidence.map((evidence) => <AIEvidenceCard evidence={evidence} key={evidence.id} />)}</div></div>
    </div>
  </section>
}
