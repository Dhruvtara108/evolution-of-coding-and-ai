import type { AIEvidence } from '../../types/research'

export function AIEvidenceCard({ evidence }: { evidence: AIEvidence }) {
  return <article className="ai-evidence-card"><div className="ai-kicker">RESEARCH CARD / {evidence.studyType.replace('-', ' ')}</div><h3>{evidence.title}</h3><dl><div><dt>Question / claim</dt><dd>{evidence.claim}</dd></div><div><dt>Context</dt><dd>{evidence.context}</dd></div><div><dt>Finding</dt><dd>{evidence.finding}</dd></div><div><dt>Limitations</dt><dd>{evidence.limitations}</dd></div></dl><span className="ai-status">{evidence.verificationStatus.replace('-', ' ')}</span></article>
}
