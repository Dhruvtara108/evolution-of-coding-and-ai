import { useState } from 'react'
import { aiWorkflowSteps } from '../../data/ai-era'

export function AIWorkflow() {
  const [selected, setSelected] = useState(0)
  const details = [
    ['Requirements, intent, constraints, and responsibility.', 'AI receives a task representation.', 'Requirements may be incomplete or ambiguous.'],
    ['Reviewing and shaping the proposed output.', 'Proposes code or a transformation.', 'Plausible output is not proof of correctness.'],
    ['Checking behavior, context, and maintainability.', 'Can explain or revise a proposal.', 'Hidden assumptions may remain.'],
    ['Defining meaningful checks and interpreting results.', 'May draft or suggest tests.', 'Test presence does not establish coverage.'],
    ['Investigating failures and system behavior.', 'May suggest hypotheses or edits.', 'Debugging requires runtime and domain context.'],
    ['Comparing results against the original intent.', 'Can iterate on feedback.', 'Each iteration can introduce new errors.'],
    ['Approving and operating the change responsibly.', 'May assist with preparation where permitted.', 'Deployment authority and accountability remain contextual.'],
  ][selected]
  return <div className="ai-workflow">
    <div className="workflow-path" role="tablist" aria-label="Human and AI workflow">
      {aiWorkflowSteps.map((step, index) => <button type="button" role="tab" aria-selected={selected === index} className={selected === index ? 'is-selected' : ''} key={step} onClick={() => setSelected(index)}><span>{String(index + 1).padStart(2, '0')}</span>{step}</button>)}
    </div>
    <article className="workflow-detail" role="tabpanel"><div className="ai-kicker">WORKFLOW BOUNDARY / {String(selected + 1).padStart(2, '0')}</div><h3>{aiWorkflowSteps[selected]}</h3><div className="workflow-columns"><div><b>Human does</b><p>{details[0]}</p></div><div><b>AI may do</b><p>{details[1]}</p></div><div><b>Uncertainty</b><p>{details[2]}</p></div></div></article>
  </div>
}
