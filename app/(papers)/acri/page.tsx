'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { PdfViewerModal } from '@/app/components/pdf-viewer-modal';
import { BibtexModal } from '@/app/components/bibtex-modal';

export default function AcriPaperPage() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isBibtexOpen, setIsBibtexOpen] = useState(false);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', color: '#202124' }}>
      <Header />

      <main className="research-container">
        {/* BREADCRUMBS */}
        <div className="g-breadcrumbs">
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <Link href="/">Publications</Link>
          <span>&gt;</span>
          <span>Capability Microkernels</span>
        </div>

        {/* HERO SECTION */}
        <section className="g-hero">
          <div>
            <h1 className="g-title">
              acri: Redefining AI capability resolution with 40µs microkernels
            </h1>

            <div className="g-meta-date">August 27, 2026</div>
            <div className="g-meta-authors">
              Piyush Sharma, Research Engineer, <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer">INERATE Research</a>
            </div>

            {/* Google Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
              <button 
                type="button" 
                onClick={() => setIsPdfOpen(true)}
                className="g-btn-primary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Read Paper (PDF)
              </button>

              <button 
                type="button" 
                onClick={() => setIsBibtexOpen(true)}
                className="g-btn-secondary"
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
                className="g-btn-secondary"
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
                className="g-btn-secondary"
              >
                Demo ⚡
              </a>
            </div>
          </div>

          {/* HERO PASTEL GRAPHIC CARD */}
          <div className="g-hero-card">
            <div className="g-hero-grid-preview">
              <div className="dot" style={{ background: '#34A853' }} />
              <div className="dot" style={{ background: '#FBBC04' }} />
              <div className="dot" style={{ background: '#1A73E8' }} />
              <div className="dot" style={{ background: '#EA4335' }} />
              <div className="dot" style={{ background: '#7C3AED' }} />
              <div className="dot" style={{ background: '#25BE74' }} />
              <div className="dot" style={{ background: '#1A73E8' }} />
              <div className="dot" style={{ background: '#34A853' }} />
              <div className="dot" style={{ background: '#FBBC04' }} />
            </div>
          </div>
        </section>

        {/* LEAD STATEMENT */}
        <div className="g-lead-statement">
          We introduce a client-side capability resolver that enables 95% prompt token reduction and improves live model tool selection accuracy from 84% to 92% on Gemini 2.5 Flash.
        </div>

        {/* 2-COLUMN CONTENT & SIDEBAR */}
        <div className="g-layout">
          {/* ARTICLE BODY */}
          <article className="g-article">
            <p>
              As tools exposed to a language model grow past 30–50 tools, accuracy degrades because schemas compete for attention. While closed providers ship proprietary server-side search, open models (Gemini, Ollama, vLLM) have no native equivalent.
            </p>
            <p>
              <strong>acri</strong> (<code>pip install pyacri</code>) solves this client-side: an in-memory BM25 index that resolves the exact top-5 candidate tools in <strong>40 microseconds</strong> before the prompt is sent.
            </p>

            {/* FIGURE 1 */}
            <h2>How acri works</h2>
            <div className="g-figure">
              <div className="g-figure-body">
                <svg viewBox="0 0 680 150" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                  <rect x="10" y="30" width="145" height="85" rx="8" fill="#FFFFFF" stroke="#DADCE0" strokeWidth="1.5" />
                  <text x="82" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill="#202124">corpus.index()</text>
                  <text x="82" y="82" textAnchor="middle" fontSize="11" fill="#5F6368">100+ MCP Tools</text>
                  <text x="82" y="98" textAnchor="middle" fontSize="10.5" fill="#1A73E8">RAM POSTINGS</text>

                  <line x1="155" y1="72" x2="190" y2="72" stroke="#BDC1C6" strokeWidth="1.5" strokeDasharray="3 3" />

                  <rect x="195" y="30" width="155" height="85" rx="8" fill="#FFFFFF" stroke="#1A73E8" strokeWidth="1.5" />
                  <text x="272" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1A73E8">compass.resolve()</text>
                  <text x="272" y="82" textAnchor="middle" fontSize="11" fill="#5F6368">In-Memory BM25</text>
                  <text x="272" y="98" textAnchor="middle" fontSize="10.5" fill="#34A853">0.038 ms Latency</text>

                  <line x1="350" y1="72" x2="385" y2="72" stroke="#BDC1C6" strokeWidth="1.5" strokeDasharray="3 3" />

                  <rect x="390" y="30" width="140" height="85" rx="8" fill="#FFFFFF" stroke="#34A853" strokeWidth="1.5" />
                  <text x="460" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill="#34A853">Top-5 Tools</text>
                  <text x="460" y="82" textAnchor="middle" fontSize="11" fill="#5F6368">95% Fewer Tokens</text>
                  <text x="460" y="98" textAnchor="middle" fontSize="10.5" fill="#34A853">100% Recall@5</text>

                  <line x1="530" y1="72" x2="565" y2="72" stroke="#BDC1C6" strokeWidth="1.5" strokeDasharray="3 3" />

                  <rect x="570" y="30" width="105" height="85" rx="8" fill="#F8F9FA" stroke="#DADCE0" strokeWidth="1.5" />
                  <text x="622" y="65" textAnchor="middle" fontSize="13" fontWeight="700" fill="#202124">LLM Call</text>
                  <text x="622" y="88" textAnchor="middle" fontSize="11" fill="#5F6368">Zero Lag</text>
                </svg>
              </div>
              <div className="g-figure-caption">
                <b>Figure 1: 40µs Capability Resolution Pipeline.</b> Top candidates isolated in RAM before model invocation.
              </div>
            </div>

            {/* THE PROMPT CACHING LAW */}
            <h2>The Prompt Caching Law</h2>
            <p>
              Providers discount cached prompt prefixes by ~90%. Rewriting the tool block on every turn invalidates this cache. Dynamic per-turn re-resolution is cheaper only when the token cut exceeds tenfold:
            </p>

            <div className="g-equation">
              <div className="math">
                r &middot; C &middot; p &nbsp;&lt;&nbsp; C &middot; (p / 10) &nbsp;&nbsp;&iff;&nbsp;&nbsp; r &lt; 1/10
              </div>
              <div className="sub">
                acri enforces <em>resolve once per task</em> to preserve KV prefix caching across turns.
              </div>
            </div>

            {/* EXPERIMENTS */}
            <h2>Experiments and results</h2>
            <p>
              Evaluated on 50 gold queries across 100 enterprise tools with live Gemini 2.5 Flash invocations:
            </p>

            {/* FIGURE 2 */}
            <div className="g-figure">
              <div className="g-figure-body">
                <svg viewBox="0 0 680 130" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                  <text x="160" y="38" textAnchor="end" fontSize="13" fontWeight="500" fill="#3C4043">Naive (100 Tools)</text>
                  <rect x="175" y="22" width="370" height="24" rx="4" fill="#EA4335" />
                  <text x="555" y="39" fontSize="13" fontWeight="700" fill="#EA4335">84%</text>

                  <text x="160" y="90" textAnchor="end" fontSize="13" fontWeight="500" fill="#3C4043">acri (Top-5 Tools)</text>
                  <rect x="175" y="74" width="410" height="24" rx="4" fill="#34A853" />
                  <text x="595" y="91" fontSize="13" fontWeight="700" fill="#34A853">92% (+8.0%)</text>
                </svg>
              </div>
              <div className="g-figure-caption">
                <b>Figure 2: Tool Selection Accuracy on Gemini 2.5 Flash.</b> Tested on 50 gold queries with zero resolver misses.
              </div>
            </div>

            {/* REPRODUCTION */}
            <h2>Reproduction and code</h2>
            <div style={{ background: '#F8F9FA', border: '1px solid #DADCE0', borderRadius: '8px', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.6 }}>
              <div><span style={{ color: '#1A73E8' }}>$</span> pip install pyacri</div>
              <div><span style={{ color: '#1A73E8' }}>$</span> python -m assay.accuracy <span style={{ color: '#80868B' }}># Reproduce live accuracy receipts</span></div>
            </div>
          </article>

          {/* QUICK LINKS SIDEBAR */}
          <aside className="g-sidebar">
            <div className="g-sidebar-block">
              <div className="g-sidebar-title">Quick Links</div>
              <ul className="g-quick-links">
                <li>
                  <a href="#how-it-works" className="g-quick-link-item">
                    <span className="g-link-icon">+</span>
                    <span>How acri works</span>
                  </a>
                </li>
                <li>
                  <a href="#caching-law" className="g-quick-link-item">
                    <span className="g-link-icon">+</span>
                    <span>The Caching Law</span>
                  </a>
                </li>
                <li>
                  <a href="#experiments-results" className="g-quick-link-item">
                    <span className="g-link-icon">+</span>
                    <span>Experiments &amp; results</span>
                  </a>
                </li>
                <li>
                  <a href="#reproduction" className="g-quick-link-item">
                    <span className="g-link-icon">+</span>
                    <span>Reproduction &amp; code</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="g-sidebar-block">
              <div className="g-sidebar-title">Paper Artifacts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setIsPdfOpen(true)}
                  className="g-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Read Paper (PDF)
                </button>

                <button 
                  type="button" 
                  onClick={() => setIsBibtexOpen(true)}
                  className="g-btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Cite BibTeX
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* OTHER POSTS OF INTEREST */}
        <section className="g-related-section">
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#202124', marginBottom: '20px' }}>
            Other research from INERATE
          </h3>

          <div className="g-related-grid">
            <a href="https://forge.inerate.com/atelier" target="_blank" rel="noopener noreferrer" className="g-related-card">
              <div className="g-related-img">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                  <rect x="8" y="8" width="48" height="48" rx="8" stroke="#34A853" strokeWidth="2" />
                  <rect x="22" y="22" width="20" height="20" rx="3" fill="#34A853" />
                </svg>
              </div>
              <div className="g-related-body">
                <div className="g-related-title">Atelier: Agent Runtime Isolation</div>
                <div className="g-related-desc">Zero-bloat deterministic agent framework for sandboxed production execution.</div>
              </div>
            </a>

            <a href="https://forge.inerate.com/acri" target="_blank" rel="noopener noreferrer" className="g-related-card">
              <div className="g-related-img">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="24" stroke="#1A73E8" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="32" cy="32" r="10" stroke="#1A73E8" strokeWidth="2" />
                </svg>
              </div>
              <div className="g-related-body">
                <div className="g-related-title">acri studio: Real-Time Trace Mesh</div>
                <div className="g-related-desc">Zero-telemetry visualizer streaming capability resolution on port 8099.</div>
              </div>
            </a>
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
