'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { PdfViewerModal } from '@/app/components/pdf-viewer-modal';
import { BibtexModal } from '@/app/components/bibtex-modal';

export default function AcriPaperPage() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isBibtexOpen, setIsBibtexOpen] = useState(false);
  const [activeId, setActiveId] = useState('how-it-works');

  useEffect(() => {
    const sections = [
      'how-it-works',
      'caching-law',
      'experiments-results',
      'looking-ahead',
      'reproduction'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', color: '#1F1F1F' }}>
      <Header />

      <main className="container">
        {/* BREADCRUMBS */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <Link href="/">Publications</Link>
          <span>&gt;</span>
          <span>Capability Microkernels</span>
        </div>

        {/* HERO SECTION */}
        <section className="article-hero">
          <div className="hero-grid">
            <div>
              <h1 className="article-title">
                acri: Redefining AI capability resolution with 40µs microkernels
              </h1>

              <div className="article-meta">
                <div className="date">August 27, 2026</div>
                <div className="authors">
                  Piyush Sharma, Research Scientist, <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer">INERATE Research</a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons-row">
                <button 
                  type="button" 
                  onClick={() => setIsPdfOpen(true)}
                  className="google-btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  Read Paper (PDF)
                </button>

                <button 
                  type="button" 
                  onClick={() => setIsBibtexOpen(true)}
                  className="google-btn-secondary"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                  Cite (BibTeX)
                </button>

                <a 
                  href="https://github.com/INERATE/acri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="google-btn-secondary"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.2.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                  </svg>
                  GitHub
                </a>

                <a 
                  href="https://forge.inerate.com/acri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="google-btn-secondary"
                >
                  Interactive Demo ⚡
                </a>
              </div>
            </div>

            {/* HERO GRAPHIC CARD */}
            <div className="hero-graphic-card">
              <div className="hero-graphic-grid">
                <div className="cell" style={{ background: '#34A853' }} />
                <div className="cell" style={{ background: '#FBBC04' }} />
                <div className="cell" style={{ background: '#1A73E8' }} />
                <div className="cell" style={{ background: '#EA4335' }} />
                <div className="cell" style={{ background: '#7C3AED' }} />
                <div className="cell" style={{ background: '#25BE74' }} />
                <div className="cell" style={{ background: '#1A73E8' }} />
                <div className="cell" style={{ background: '#34A853' }} />
                <div className="cell" style={{ background: '#FBBC04' }} />
              </div>
            </div>
          </div>
        </section>

        {/* LEAD STATEMENT */}
        <div className="lead-statement">
          We introduce a client-side capability resolver that enables massive 95% prompt token reduction and improves live model tool selection accuracy from 84% to 92% on Gemini 2.5 Flash.
        </div>

        {/* 2-COLUMN CONTENT & QUICK LINKS */}
        <div className="content-grid">
          {/* ARTICLE TEXT */}
          <article className="article-text">
            <p>
              <a href="#how-it-works">Tool calling</a> is the fundamental mechanism through which autonomous language models interact with external environments. Small tool catalogs function reliably, but as registered capabilities scale past 30 to 50 tools—Anthropic&rsquo;s documented degradation threshold—models suffer sharp drops in tool selection accuracy because schema tokens compete for attention and confuse lexical boundaries.
            </p>
            <p>
              While closed platforms (Anthropic Tool Search, OpenAI Assistant Catalog) deploy proprietary server-side search, open ecosystems (Google Gemini, Ollama, vLLM, and local models) provide zero native mitigations. We present <strong>acri</strong> (<code>pip install pyacri</code>), an open-source capability resolver that operates client-side to isolate the exact top-k candidates in <strong>40 microseconds</strong>.
            </p>

            {/* SECTION 1: HOW IT WORKS */}
            <section id="how-it-works">
              <h2>How acri works</h2>
              <p>
                acri indexes tool declarations into an in-memory BM25 inverted index with query-side synonym expansion. Instead of scanning tools linearly across tokens, it hashes terms into $O(1)$ postings lists.
              </p>

              {/* FIGURE 1: PIPELINE */}
              <div className="google-figure">
                <div className="google-figure-body">
                  <svg viewBox="0 0 720 180" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                    {/* Node 1 */}
                    <rect x="15" y="45" width="150" height="90" rx="8" fill="#FFFFFF" stroke="#E0E2E0" strokeWidth="1.5" />
                    <text x="90" y="75" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F1F1F">corpus.index()</text>
                    <text x="90" y="98" textAnchor="middle" fontSize="11.5" fill="#5F6368">100+ MCP Tools</text>
                    <text x="90" y="116" textAnchor="middle" fontSize="11" fill="#1A73E8">RAM POSTINGS</text>

                    {/* Arrow 1 */}
                    <line x1="165" y1="90" x2="200" y2="90" stroke="#BDC1C6" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Node 2 */}
                    <rect x="205" y="45" width="165" height="90" rx="8" fill="#FFFFFF" stroke="#1A73E8" strokeWidth="1.5" />
                    <text x="287" y="75" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1A73E8">compass.resolve()</text>
                    <text x="287" y="98" textAnchor="middle" fontSize="11.5" fill="#5F6368">In-Memory BM25</text>
                    <text x="287" y="116" textAnchor="middle" fontSize="11" fill="#34A853">0.038 ms Latency</text>

                    {/* Arrow 2 */}
                    <line x1="370" y1="90" x2="405" y2="90" stroke="#BDC1C6" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Node 3 */}
                    <rect x="410" y="45" width="145" height="90" rx="8" fill="#FFFFFF" stroke="#34A853" strokeWidth="1.5" />
                    <text x="482" y="75" textAnchor="middle" fontSize="13" fontWeight="700" fill="#34A853">Top-5 Candidates</text>
                    <text x="482" y="98" textAnchor="middle" fontSize="11.5" fill="#5F6368">95% Fewer Tokens</text>
                    <text x="482" y="116" textAnchor="middle" fontSize="11" fill="#34A853">100% Recall@5</text>

                    {/* Arrow 3 */}
                    <line x1="555" y1="90" x2="590" y2="90" stroke="#BDC1C6" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Node 4 */}
                    <rect x="595" y="45" width="115" height="90" rx="8" fill="#F8F9FA" stroke="#E0E2E0" strokeWidth="1.5" />
                    <text x="652" y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F1F1F">LLM Call</text>
                    <text x="652" y="103" textAnchor="middle" fontSize="11.5" fill="#5F6368">Zero Lag</text>
                  </svg>
                </div>
                <div className="google-figure-caption">
                  <b>Figure 1: Capability Resolution Pipeline.</b> On each user turn, <code>compass.resolve()</code> filters 100+ schemas to the top 5 candidates in 38 microseconds before prompt generation.
                </div>
              </div>
            </section>

            {/* SECTION 2: CACHING LAW */}
            <section id="caching-law">
              <h2>The Prompt Caching Law</h2>
              <p>
                Major AI providers grant a ~90% discount on prompt tokens matching a static KV-cache prefix. Because tool schemas sit at the beginning of the prompt, rewriting the tool block on every conversational turn invalidates prefix caching.
              </p>

              {/* EQUATION CALLOUT */}
              <div className="google-equation">
                <div className="math">
                  r &middot; C &middot; p &nbsp;&lt;&nbsp; C &middot; (p / 10) &nbsp;&nbsp;&iff;&nbsp;&nbsp; r &lt; 1/10
                </div>
                <div className="sub">
                  Where C is full tool tokens, p is uncached price, and r is the reduction ratio.
                </div>
              </div>

              <p>
                <strong>The Resolve-Once Law:</strong> Pruning a tool schema block by less than tenfold while forfeiting cache discounts constitutes a net cost regression. acri enforces a resolve-once policy, writing the tool schema prefix once and maintaining it across turns.
              </p>
            </section>

            {/* SECTION 3: EXPERIMENTS & RESULTS */}
            <section id="experiments-results">
              <h2>Experiments and results</h2>
              <p>
                Evaluations were conducted against a 100-tool synthetic enterprise corpus across 20 domains with live <code>gemini-2.5-flash</code> invocations.
              </p>

              {/* FIGURE 2: HORIZONTAL ACCURACY BARS */}
              <div className="google-figure">
                <div className="google-figure-body">
                  <svg viewBox="0 0 680 160" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                    {/* Bar 1 */}
                    <text x="170" y="45" textAnchor="end" fontSize="13" fontWeight="500" fill="#3C4043">Naive (100 Tools in Prompt)</text>
                    <rect x="185" y="28" width="370" height="26" rx="4" fill="#EA4335" />
                    <text x="565" y="46" fontSize="13" fontWeight="700" fill="#EA4335">84%</text>

                    {/* Bar 2 */}
                    <text x="170" y="105" textAnchor="end" fontSize="13" fontWeight="500" fill="#3C4043">acri (Top-5 Tools Offered)</text>
                    <rect x="185" y="88" width="410" height="26" rx="4" fill="#34A853" />
                    <text x="605" y="106" fontSize="13" fontWeight="700" fill="#34A853">92% (+8.0%)</text>
                  </svg>
                </div>
                <div className="google-figure-caption">
                  <b>Figure 2: Live Tool Selection Accuracy on Gemini 2.5 Flash.</b> Tested on 50 gold queries. acri improves tool selection accuracy from 84% to 92%, with zero resolver misses.
                </div>
              </div>

              {/* FIGURE 3: RECALL AT K */}
              <div className="google-figure">
                <div className="google-figure-body">
                  <svg viewBox="0 0 680 180" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                    {/* Y lines */}
                    <line x1="80" y1="30" x2="640" y2="30" stroke="#E8EAED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="80" y1="75" x2="640" y2="75" stroke="#E8EAED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="80" y1="120" x2="640" y2="120" stroke="#E8EAED" strokeWidth="1" strokeDasharray="3 3" />

                    <text x="70" y="34" textAnchor="end" fontSize="11" fill="#80868B">100%</text>
                    <text x="70" y="79" textAnchor="end" fontSize="11" fill="#80868B">90%</text>
                    <text x="70" y="124" textAnchor="end" fontSize="11" fill="#80868B">80%</text>

                    {/* Bars k=1 */}
                    <rect x="120" y="54" width="30" height="80" rx="3" fill="#1A73E8" />
                    <rect x="154" y="80" width="30" height="54" rx="3" fill="#BDC1C6" />
                    <text x="152" y="152" textAnchor="middle" fontSize="12" fill="#3C4043">k = 1</text>

                    {/* Bars k=3 */}
                    <rect x="250" y="36" width="30" height="98" rx="3" fill="#1A73E8" />
                    <rect x="284" y="52" width="30" height="82" rx="3" fill="#BDC1C6" />
                    <text x="282" y="152" textAnchor="middle" fontSize="12" fill="#3C4043">k = 3</text>

                    {/* Bars k=5 */}
                    <rect x="380" y="24" width="30" height="110" rx="3" fill="#34A853" />
                    <rect x="414" y="40" width="30" height="94" rx="3" fill="#BDC1C6" />
                    <text x="412" y="152" textAnchor="middle" fontSize="12" fontWeight="700" fill="#34A853">k = 5 (Standard)</text>

                    {/* Bars k=10 */}
                    <rect x="510" y="24" width="30" height="110" rx="3" fill="#1A73E8" />
                    <rect x="544" y="28" width="30" height="106" rx="3" fill="#BDC1C6" />
                    <text x="542" y="152" textAnchor="middle" fontSize="12" fill="#3C4043">k = 10</text>
                  </svg>
                </div>
                <div className="google-figure-caption">
                  <b>Figure 3: Recall@k across 100 Tools vs 504 Tools.</b> Blue/Green bars indicate 100-tool corpus (100% recall at k=5); grey bars show 504-tool scale test (92% recall at k=5).
                </div>
              </div>
            </section>

            {/* SECTION 4: LOOKING AHEAD */}
            <section id="looking-ahead">
              <h2>Looking ahead</h2>
              <p>
                Future work includes expanding benchmark evaluations to n=1,000+ queries across multi-model ensembles (Claude 3.7, GPT-4o, LLaMA-3.3) and benchmarking hybrid lexical-dense embedding indices.
              </p>
            </section>

            {/* SECTION 5: REPRODUCTION */}
            <section id="reproduction">
              <h2>Reproduction and code</h2>
              <p>
                All numbers are reproducible via the open-source <code>assay/</code> test suite:
              </p>
              <div style={{ background: '#F8F9FA', border: '1px solid #E0E2E0', borderRadius: '8px', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.6 }}>
                <div><span style={{ color: '#1A73E8' }}>$</span> pip install pyacri</div>
                <div><span style={{ color: '#1A73E8' }}>$</span> python -m assay.recall <span style={{ color: '#80868B' }}># §4.1 (100% Recall@5)</span></div>
                <div><span style={{ color: '#1A73E8' }}>$</span> python -m assay.scale <span style={{ color: '#80868B' }}># §4.2 (504-tool scale test)</span></div>
                <div><span style={{ color: '#1A73E8' }}>$</span> python -m assay.accuracy <span style={{ color: '#80868B' }}># §4.3 (Live Gemini 2.5 Flash)</span></div>
              </div>
            </section>
          </article>

          {/* QUICK LINKS RAIL (RIGHT) */}
          <aside className="quick-links-rail">
            <div className="quick-links-box">
              <div className="quick-links-title">Quick Links</div>
              <ul className="quick-links-list">
                <li>
                  <a href="#how-it-works" className={`quick-link-item ${activeId === 'how-it-works' ? 'active' : ''}`}>
                    <span className="quick-link-icon">+</span>
                    <span>How acri works</span>
                  </a>
                </li>
                <li>
                  <a href="#caching-law" className={`quick-link-item ${activeId === 'caching-law' ? 'active' : ''}`}>
                    <span className="quick-link-icon">+</span>
                    <span>The Caching Law</span>
                  </a>
                </li>
                <li>
                  <a href="#experiments-results" className={`quick-link-item ${activeId === 'experiments-results' ? 'active' : ''}`}>
                    <span className="quick-link-icon">+</span>
                    <span>Experiments &amp; results</span>
                  </a>
                </li>
                <li>
                  <a href="#looking-ahead" className={`quick-link-item ${activeId === 'looking-ahead' ? 'active' : ''}`}>
                    <span className="quick-link-icon">+</span>
                    <span>Looking ahead</span>
                  </a>
                </li>
                <li>
                  <a href="#reproduction" className={`quick-link-item ${activeId === 'reproduction' ? 'active' : ''}`}>
                    <span className="quick-link-icon">+</span>
                    <span>Reproduction &amp; code</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Actions Box */}
            <div className="quick-links-box">
              <div className="quick-links-title">Paper Artifacts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setIsPdfOpen(true)}
                  className="google-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Read Paper (PDF)
                </button>

                <button 
                  type="button" 
                  onClick={() => setIsBibtexOpen(true)}
                  className="google-btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Cite BibTeX
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* OTHER POSTS OF INTEREST */}
        <section className="related-posts-section">
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1F1F1F', letterSpacing: '-0.02em' }}>
            Other posts of interest
          </h3>

          <div className="related-posts-grid">
            <a href="https://forge.inerate.com/atelier" target="_blank" rel="noopener noreferrer" className="related-card">
              <div className="related-card-img">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="8" y="8" width="48" height="48" rx="8" stroke="#34A853" strokeWidth="2" />
                  <rect x="22" y="22" width="20" height="20" rx="3" fill="#34A853" />
                </svg>
              </div>
              <div className="related-card-content">
                <div className="related-card-title">Atelier: Deterministic Runtime Isolation for AI Agents</div>
                <div className="related-card-desc">Zero-bloat agent framework designed for production reliability and sandboxed execution.</div>
              </div>
            </a>

            <a href="https://forge.inerate.com/acri" target="_blank" rel="noopener noreferrer" className="related-card">
              <div className="related-card-img">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="24" stroke="#1A73E8" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="32" cy="32" r="10" stroke="#1A73E8" strokeWidth="2" />
                </svg>
              </div>
              <div className="related-card-content">
                <div className="related-card-title">acri studio: Real-Time Local Trace Observability</div>
                <div className="related-card-desc">Zero-telemetry visualizer streaming capability resolution traces on port 8099.</div>
              </div>
            </a>

            <Link href="/" className="related-card">
              <div className="related-card-img">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="12" y="16" width="40" height="32" rx="6" stroke="#EA4335" strokeWidth="2" />
                  <line x1="20" y1="26" x2="44" y2="26" stroke="#EA4335" strokeWidth="2" />
                  <line x1="20" y1="36" x2="36" y2="36" stroke="#EA4335" strokeWidth="2" />
                </svg>
              </div>
              <div className="related-card-content">
                <div className="related-card-title">Pre-Generation Intent Gating vs Cascades</div>
                <div className="related-card-desc">Why lightweight routing outperforms cascade fallbacks in multi-tier LLM ensembles.</div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* PDF MODAL */}
      <PdfViewerModal 
        isOpen={isPdfOpen} 
        onClose={() => setIsPdfOpen(false)}
        pdfUrl="/assets/acri_capability_resolver_paper.pdf"
      />

      {/* BIBTEX MODAL */}
      <BibtexModal 
        isOpen={isBibtexOpen} 
        onClose={() => setIsBibtexOpen(false)} 
      />
    </div>
  );
}
