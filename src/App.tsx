import { ArrowDown, BookOpen, Menu, MoveRight, X } from 'lucide-react'
import { useState } from 'react'
import { AIEraExperience } from './components/ai/AIEraExperience'
import { ProductivityExperience } from './components/productivity/ProductivityExperience'
import { Timeline } from './components/timeline/Timeline'
import './styles/index.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Evolution of Coding and AI home"><span className="wordmark-mark">E/AI</span><span>Evolution of Coding &amp; AI</span></a>
        <nav id="primary-navigation" className={`desktop-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation" onKeyDown={(event) => { if (event.key === 'Escape') closeMenu() }}><a href="#timeline" onClick={closeMenu}>Timeline</a><a href="#productivity" onClick={closeMenu}>Productivity</a><a href="#ai-era" onClick={closeMenu}>AI era</a><a href="#questions" onClick={closeMenu}>Questions</a></nav>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
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
        <Timeline />
        <ProductivityExperience />
        <AIEraExperience />
        <section id="questions" className="questions-section section-frame" aria-labelledby="questions-title"><div className="section-index">05 / OPEN QUESTIONS</div><div className="question-layout"><h2 id="questions-title">The useful conclusion is still a question.</h2><div><p>How should engineering teams measure quality, learning, flow, and outcomes when AI performs part of the implementation?</p><a className="text-link" href="#ai-era">Follow the evidence <BookOpen size={16} /></a></div></div><div className="scroll-cue" aria-hidden="true"><ArrowDown size={16} /> Continue exploring</div></section>
      </main>
      <footer className="footer section-frame"><span>Evolution of Coding &amp; AI</span><span>Research status: foundation phase</span></footer>
    </div>
  )
}

export default App
