import { ArrowDown, BookOpen, Menu, MoveRight } from 'lucide-react'
import { aiDevelopmentStages } from './data/ai-era'
import { productivityFrameworks } from './data/frameworks'
import { timelineEras } from './data/timeline'
import './styles/index.css'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Evolution of Coding and AI home"><span className="wordmark-mark">E/AI</span><span>Evolution of Coding &amp; AI</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#timeline">Timeline</a><a href="#productivity">Productivity</a><a href="#ai-era">AI era</a><a href="#questions">Questions</a></nav>
        <button className="menu-button" type="button" aria-label="Open navigation"><Menu size={20} /></button>
      </header>
      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="eyebrow">An interactive research story · 01</div>
          <h1 id="hero-title">Evolution of <em>Coding</em> &amp; AI</h1>
          <p className="hero-lede">From writing instructions for machines to collaborating with intelligent systems. Explore how the tools, workflows, and meaning of developer productivity changed along the way.</p>
          <a className="primary-button" href="#timeline">Explore the evolution <MoveRight size={17} /></a>
          <div className="hero-signal" aria-hidden="true"><span>intent</span><i /><span>abstraction</span><i /><span>collaboration</span></div>
        </section>
        <section className="question-section section-frame" aria-labelledby="question-title">
          <div className="section-index">01 / THE BIG QUESTION</div>
          <div className="question-layout"><h2 id="question-title">What changes when the boundary between describing software and generating it begins to move?</h2><p>This is not a story about software simply becoming faster. It is a story about changing abstraction levels, practices, feedback loops, and the ways we attempt to understand engineering work.</p></div>
        </section>
        <section id="timeline" className="timeline-section section-frame" aria-labelledby="timeline-title">
          <div className="section-heading"><div><div className="section-index">02 / THE JOURNEY</div><h2 id="timeline-title">An evolving definition of the work</h2></div><p>Each era is a lens, not a finish line. Claims are separated from interpretation.</p></div>
          <div className="timeline-grid">{timelineEras.map((era, index) => <article className="era-card" key={era.id}><div className="era-number">0{index + 1}</div><div className="era-period">{era.period}</div><h3>{era.title}</h3><p>{era.description}</p><dl><div><dt>Shift</dt><dd>{era.technologicalShift}</dd></div><div><dt>Productivity</dt><dd>{era.productivityConcept}</dd></div></dl></article>)}</div>
        </section>
        <section id="productivity" className="dark-section" aria-labelledby="productivity-title"><div className="section-frame"><div className="section-index">03 / MEASUREMENT</div><h2 id="productivity-title">Productivity is not a single number.</h2><p className="section-intro">The project treats frameworks as ways to ask better questions—not as universal scores.</p><div className="framework-grid">{productivityFrameworks.map((framework) => <article className="framework-card" key={framework.id}><div className="framework-label">{framework.name}</div><p>{framework.description}</p>{framework.dimensions.length > 0 && <ul>{framework.dimensions.map((dimension) => <li key={dimension}>{dimension}</li>)}</ul>}</article>)}</div></div></section>
        <section id="ai-era" className="ai-section section-frame" aria-labelledby="ai-title"><div className="section-heading"><div><div className="section-index">04 / AI-ASSISTED DEVELOPMENT</div><h2 id="ai-title">The developer remains in the loop.</h2></div><p>Capabilities and claims in this section will be tied to evidence as the research layer grows.</p></div><div className="ai-flow">{aiDevelopmentStages.map((stage, index) => <div className="ai-stage" key={stage.id}><span className="stage-index">0{index + 1}</span><h3>{stage.title}</h3><p>{stage.description}</p><span className={`status status-${stage.status}`}>{stage.status.replace('-', ' ')}</span></div>)}</div></section>
        <section id="questions" className="questions-section section-frame" aria-labelledby="questions-title"><div className="section-index">05 / OPEN QUESTIONS</div><div className="question-layout"><h2 id="questions-title">The useful conclusion is still a question.</h2><div><p>How should engineering teams measure quality, learning, flow, and outcomes when AI performs part of the implementation?</p><a className="text-link" href="mailto:research@example.com">Follow the evidence <BookOpen size={16} /></a></div></div><div className="scroll-cue" aria-hidden="true"><ArrowDown size={16} /> Continue exploring</div></section>
      </main>
      <footer className="footer section-frame"><span>Evolution of Coding &amp; AI</span><span>Research status: foundation phase</span></footer>
    </div>
  )
}

export default App
