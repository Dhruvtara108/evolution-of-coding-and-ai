import { useRef } from 'react'
import { productivityDimensions, productivityMetrics } from '../../data/productivity'
import { productivityFrameworks } from '../../data/frameworks'
import { useProductivityStage } from '../../hooks/useProductivityStage'
import { DimensionModel } from './DimensionModel'
import { FrameworkExplorer } from './FrameworkExplorer'
import { MetricExplorer } from './MetricExplorer'

export function ProductivityExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const stage = useProductivityStage(sectionRef, 4)

  return (
    <section id="productivity" className="productivity-experience" ref={sectionRef} aria-labelledby="productivity-title">
      <div className="section-frame productivity-intro">
        <div className="section-index">03 / THE MEASUREMENT PROBLEM</div>
        <div className="productivity-heading"><h2 id="productivity-title">What does productivity mean?</h2><p>Software work creates decisions, designs, code, tests, reviews, deployments, and outcomes. Its most visible traces are not the whole system.</p></div>
      </div>
      <div className="productivity-story section-frame">
        <aside className="productivity-story-nav" aria-label="Productivity narrative stages">
          {['Simple signals', 'Activity → output → outcome', 'Multiple dimensions', 'Framework lenses'].map((label, index) => <div className={index === stage ? 'is-active' : ''} key={label}><span>0{index + 1}</span>{label}</div>)}
        </aside>
        <div className="productivity-story-content">
          <div className="productivity-block">
            <div className="block-kicker">01 / EASILY OBSERVABLE ACTIVITY</div>
            <h3>Signals are useful. They are not the whole story.</h3>
            <p className="block-lede">Select a visible metric to inspect what it can show, what it leaves out, and why context matters.</p>
            <MetricExplorer metrics={productivityMetrics} />
          </div>
          <div className="productivity-block flow-block">
            <div className="block-kicker">02 / FROM ACTIVITY TO OUTCOME</div>
            <h3>Activity, output, outcome.</h3>
            <div className="flow-path"><div><b>Activity</b><span>commits · reviews · coding signals</span></div><i>→</i><div><b>Output</b><span>features · changes · releases</span></div><i>→</i><div><b>Outcome</b><span>reliability · value · sustainable delivery</span></div></div>
            <p className="flow-note">These layers are connected, but they are not interchangeable—and outcomes are not automatically attributable to one developer.</p>
          </div>
          <div className="productivity-block">
            <div className="block-kicker">03 / A MULTIDIMENSIONAL VIEW</div>
            <h3>No single number can hold the system.</h3>
            <p className="block-lede">These dimensions are a project synthesis of commonly discussed concerns. Their precise definitions and measures require source-specific interpretation.</p>
            <DimensionModel dimensions={productivityDimensions} />
          </div>
          <div className="productivity-block framework-block">
            <div className="block-kicker">04 / FRAMEWORK LENSES</div>
            <h3>From proxies toward richer questions.</h3>
            <p className="block-lede">DORA and SPACE are presented as distinct lenses with distinct contexts—not as competing scores or replacements.</p>
            <FrameworkExplorer frameworks={productivityFrameworks} />
          </div>
        </div>
      </div>
    </section>
  )
}
