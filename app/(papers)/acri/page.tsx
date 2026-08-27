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
  const [activeId, setActiveId] = useState('abstract');

  useEffect(() => {
    const sections = [
      'abstract',
      'introduction',
      'claims-matrix',
      'related-work',
      'architecture',
      'caching-law',
      'evaluation',
      'limitations',
      'conclusion',
      'reproduction',
      'references'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

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
              acri: A Client-Side Capability Resolver for Tool-Augmented Language Models
            </h1>

            <div className="g-meta-date">August 27, 2026 · Technical Report · 12 min read</div>
            <div className="g-meta-authors">
              Piyush Sharma, Research Engineer, <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer">INERATE Research</a>
            </div>

            {/* ACTION BUTTONS (INSTANT RESPONSE & CORRECT DEMO LINK) */}
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
                href="https://inerate.github.io/acri/demo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="g-btn-secondary"
              >
                Interactive Demo ⚡
              </a>
            </div>
          </div>

          {/* PASTEL HERO GRAPHIC CARD */}
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
        <div className="g-lead-statement" id="abstract">
          We present acri, an open-source client-side capability resolver that reduces offered tool schemas by 95%, isolates top-5 candidates in 40 microseconds, and improves live model tool selection accuracy from 84% to 92% on Gemini 2.5 Flash while proving the Prompt Caching Inversion Theorem.
        </div>

        {/* 2-COLUMN CONTENT & SIDEBAR */}
        <div className="g-layout">
          {/* ARTICLE BODY */}
          <article className="g-article">
            {/* SECTION 1: INTRODUCTION */}
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
                Tool-augmented language models select functions from a registered catalog on each turn. As catalogs scale, accuracy degrades because schema tokens compete for the model&rsquo;s attention budget and inter-tool confusability rises with $N$.
              </p>
              <p>
                Anthropic&rsquo;s documentation explicitly identifies <strong>30–50 tools</strong> as the point past which visible degradation occurs, offering proprietary server-side Tool Search as their mitigation. OpenAI similarly ships assistant catalog search.
              </p>
              <p>
                Google Gemini, Ollama, vLLM, and local models offer no native equivalent. Developers are forced to either stuff entire tool catalogs into prompt prefixes or engineer brittle ad-hoc routing. <strong>acri</strong> (<code>pip install pyacri</code>) provides a provider-agnostic, client-side resolution microkernel that sits between application code and any model SDK.
              </p>
            </section>

            {/* CLAIMS MATRIX */}
            <section id="claims-matrix">
              <h2>1.1 Empirical Claims Audit</h2>
              <p>
                Table 1 audits every claim made in this research by empirical defensibility, distinguishing between directly measured results and theoretical bounds.
              </p>

              <div style={{ overflowX: 'auto', margin: '24px 0', border: '1px solid #DADCE0', borderRadius: '8px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#F8F9FA', borderBottom: '1px solid #DADCE0' }}>
                      <th style={{ padding: '10px 14px', fontWeight: 600, color: '#202124' }}>Claim</th>
                      <th style={{ padding: '10px 14px', fontWeight: 600, color: '#202124' }}>Status &amp; Verification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E8EAED' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600 }}>Improves Tool Accuracy</td>
                      <td style={{ padding: '10px 14px', color: '#137333' }}><strong>Measured.</strong> 84% &rarr; 92% (+8.0%) on live Gemini 2.5 Flash (&sect;4).</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E8EAED' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600 }}>Frees Context Budget</td>
                      <td style={{ padding: '10px 14px', color: '#1A73E8' }}><strong>Verified.</strong> 95% reduction in schema tokens (5 tools vs 100 tools).</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E8EAED' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600 }}>Provider-Agnostic</td>
                      <td style={{ padding: '10px 14px' }}><strong>Verified.</strong> Works with Gemini, Ollama, vLLM, OpenAI endpoints.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E8EAED' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600 }}>Lowers Turn Cost</td>
                      <td style={{ padding: '10px 14px', color: '#D97706' }}><strong>Conditional.</strong> Per-turn rewriting forfeits cache discounts (&sect;3.2).</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 14px', fontWeight: 600 }}>Eliminates Hallucination</td>
                      <td style={{ padding: '10px 14px', color: '#EA4335' }}><strong>Refused.</strong> Top-k pruning reduces distractors but cannot eliminate hallucination.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: RELATED WORK */}
            <section id="related-work">
              <h2>2. Related Work</h2>
              <p>
                <strong>Server-Side Tool Search:</strong> Anthropic Tool Search and OpenAI Assistant Catalogs solve tool bloat within proprietary hosted clouds. acri targets the open ecosystem where models have no built-in discovery.
              </p>
              <p>
                <strong>Model Context Protocol (MCP) Filtering:</strong> SEPs 1300, 1821, and 1881 proposed static group tagging. acri provides dynamic runtime query resolution across arbitrary registered tool sets.
              </p>
              <p>
                <strong>Pre-Generation Routing:</strong> Nguyen &amp; Diao (2026) proved in <em>&ldquo;Is Escalation Worth It?&rdquo;</em> that lightweight classification prior to model execution strictly outperforms cascading fallbacks.
              </p>
            </section>

            {/* SECTION 3: SYSTEM ARCHITECTURE */}
            <section id="architecture">
              <h2>3. System Architecture</h2>
              <p>
                acri decomposes into <strong>corpus</strong> (RAM indexing over MCP servers and Python functions), <strong>compass</strong> (zero-copy BM25 inverted lexical index with query synonym expansion), and <strong>port</strong> (unified provider adapters for Gemini, OpenAI, and Ollama).
              </p>

              {/* FIGURE 1: CAPABILITY PIPELINE */}
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
                    <text x="272" y="98" textAnchor="middle" fontSize="10.5" fill="#34A853">0.040 ms Latency</text>

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
                  <b>Figure 1: 40µs Capability Resolution Pipeline.</b> Top candidate schemas are filtered in RAM prior to model API invocation.
                </div>
              </div>
            </section>

            {/* SECTION 3.2: PROMPT CACHING LAW */}
            <section id="caching-law">
              <h2>3.2 The Prompt Caching Inversion Theorem</h2>
              <p>
                Major AI providers grant a ~90% discount on prompt tokens matching a static KV-cache prefix. Because tool schemas sit at the beginning of the prompt, rewriting the tool block on every turn invalidates this prefix cache.
              </p>

              <div className="g-equation">
                <div className="math">
                  r &middot; C &middot; p &nbsp;&lt;&nbsp; C &middot; (p / 10) &nbsp;&nbsp;&iff;&nbsp;&nbsp; r &lt; 1/10 = 0.10
                </div>
                <div className="sub">
                  Where $C$ is full schema tokens, $p$ is uncached price, and $r$ is the reduction ratio.
                </div>
              </div>

              <p>
                <strong>Theorem 1 (The Resolve-Once Law):</strong> Rewriting the tool block on each turn to save tokens is an economic anti-pattern unless the reduction exceeds 10-fold ($r &lt; 0.10$). acri enforces a <em>resolve once per task</em> policy, maintaining the prefix across turns with append-only discovery.
              </p>
            </section>

            {/* SECTION 4: EMPIRICAL EVALUATION */}
            <section id="evaluation">
              <h2>4. Empirical Evaluation &amp; Experimental Receipts</h2>
              <p>
                Evaluated against a synthetic corpus of 100 enterprise tools across 20 domains with live <code>gemini-2.5-flash</code> calls.
              </p>

              {/* FIGURE 2: LIVE ACCURACY GAIN */}
              <div className="g-figure">
                <div className="g-figure-body">
                  <svg viewBox="0 0 680 130" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                    <text x="160" y="38" textAnchor="end" fontSize="13" fontWeight="500" fill="#3C4043">Naive (100 Tools in Prompt)</text>
                    <rect x="175" y="22" width="370" height="24" rx="4" fill="#EA4335" />
                    <text x="555" y="39" fontSize="13" fontWeight="700" fill="#EA4335">84%</text>

                    <text x="160" y="90" textAnchor="end" fontSize="13" fontWeight="500" fill="#3C4043">acri (Top-5 Tools Offered)</text>
                    <rect x="175" y="74" width="410" height="24" rx="4" fill="#34A853" />
                    <text x="595" y="91" fontSize="13" fontWeight="700" fill="#34A853">92% (+8.0%)</text>
                  </svg>
                </div>
                <div className="g-figure-caption">
                  <b>Figure 2: Live Tool Selection Accuracy on Gemini 2.5 Flash.</b> Tested on 50 gold queries with zero resolver misses.
                </div>
              </div>

              {/* FIGURE 3: RECALL AT K -- bar heights computed from assay/recall.py and
                  assay/scale.py's actual output (74/90/100/100 and 60/82/92/98), not eyeballed */}
              <div className="g-figure">
                <div className="g-figure-body">
                  <svg viewBox="0 0 680 170" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                    <line x1="80" y1="20" x2="640" y2="20" stroke="#E8EAED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="80" y1="82.5" x2="640" y2="82.5" stroke="#E8EAED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="80" y1="145" x2="640" y2="145" stroke="#E8EAED" strokeWidth="1" strokeDasharray="3 3" />

                    <text x="70" y="24" textAnchor="end" fontSize="11" fill="#80868B">100%</text>
                    <text x="70" y="86.5" textAnchor="end" fontSize="11" fill="#80868B">75%</text>
                    <text x="70" y="149" textAnchor="end" fontSize="11" fill="#80868B">50%</text>

                    {/* k=1 -- 100-tool 74%, 504-tool 60% */}
                    <rect x="120" y="85" width="30" height="60" rx="3" fill="#1A73E8" />
                    <text x="135" y="80" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1A73E8">74%</text>
                    <rect x="154" y="120" width="30" height="25" rx="3" fill="#BDC1C6" />
                    <text x="169" y="115" textAnchor="middle" fontSize="10.5" fill="#80868B">60%</text>
                    <text x="152" y="162" textAnchor="middle" fontSize="12" fill="#3C4043">k = 1</text>

                    {/* k=3 -- 100-tool 90%, 504-tool 82% */}
                    <rect x="250" y="45" width="30" height="100" rx="3" fill="#1A73E8" />
                    <text x="265" y="40" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1A73E8">90%</text>
                    <rect x="284" y="65" width="30" height="80" rx="3" fill="#BDC1C6" />
                    <text x="299" y="60" textAnchor="middle" fontSize="10.5" fill="#80868B">82%</text>
                    <text x="282" y="162" textAnchor="middle" fontSize="12" fill="#3C4043">k = 3</text>

                    {/* k=5 -- 100-tool 100%, 504-tool 92% */}
                    <rect x="380" y="20" width="30" height="125" rx="3" fill="#34A853" />
                    <text x="395" y="15" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#34A853">100%</text>
                    <rect x="414" y="40" width="30" height="105" rx="3" fill="#BDC1C6" />
                    <text x="429" y="35" textAnchor="middle" fontSize="10.5" fill="#80868B">92%</text>
                    <text x="412" y="162" textAnchor="middle" fontSize="12" fontWeight="700" fill="#34A853">k = 5 (Standard)</text>

                    {/* k=10 -- 100-tool 100%, 504-tool 98% */}
                    <rect x="510" y="20" width="30" height="125" rx="3" fill="#1A73E8" />
                    <text x="525" y="15" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1A73E8">100%</text>
                    <rect x="544" y="25" width="30" height="120" rx="3" fill="#BDC1C6" />
                    <text x="559" y="20" textAnchor="middle" fontSize="10.5" fill="#80868B">98%</text>
                    <text x="542" y="162" textAnchor="middle" fontSize="12" fill="#3C4043">k = 10</text>
                  </svg>
                </div>
                <div className="g-figure-caption">
                  <b>Figure 3: Recall@k, 100-tool corpus vs. 504-tool scale test.</b> Solid bars: 100 tools
                  (<code>assay/recall.py</code>). Grey bars: 504 tools (<code>assay/scale.py</code>). Recall
                  degrades with scale at every k except k=5&rsquo;s ceiling; reported as measured, not tuned away.
                </div>
              </div>
            </section>

            {/* SECTION 5: LIMITATIONS */}
            <section id="limitations">
              <h2>5. Limitations &amp; Future Work</h2>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: '#3C4043' }}>
                <li><strong>Sample Size:</strong> 50 gold queries is small for a headline claim; larger 1,000-query benchmarks are ongoing.</li>
                <li><strong>Single Model:</strong> All accuracy numbers are <code>gemini-2.5-flash</code>; multi-model generalization is pending.</li>
                <li><strong>Dense Baseline:</strong> BM25 vs dense embeddings comparison remains an open benchmark.</li>
                <li><strong>Synthetic Catalog:</strong> Synthetic enterprise tools were used rather than live production MCP servers.</li>
              </ul>
            </section>

            {/* SECTION 6: CONCLUSION */}
            <section id="conclusion">
              <h2>6. Conclusion</h2>
              <p>
                acri demonstrates that client-side capability resolution offers a viable, zero-overhead alternative to proprietary server-side tool search, boosting model accuracy while preserving prompt caching economics.
              </p>
            </section>

            {/* REPRODUCTION */}
            <section id="reproduction">
              <h2>Reproduction and Code</h2>
              <div style={{ background: '#F8F9FA', border: '1px solid #DADCE0', borderRadius: '8px', padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.6 }}>
                <div><span style={{ color: '#1A73E8' }}>$</span> pip install pyacri</div>
                <div><span style={{ color: '#1A73E8' }}>$</span> python -m assay.recall <span style={{ color: '#80868B' }}># §4.1 (100% Recall@5)</span></div>
                <div><span style={{ color: '#1A73E8' }}>$</span> python -m assay.scale <span style={{ color: '#80868B' }}># §4.2 (504-tool scale test)</span></div>
                <div><span style={{ color: '#1A73E8' }}>$</span> python -m assay.accuracy <span style={{ color: '#80868B' }}># §4.3 (Live Gemini 2.5 Flash)</span></div>
              </div>
            </section>

            {/* REFERENCES */}
            <section id="references" style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #E8EAED' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#202124', marginBottom: '14px' }}>References</h3>
              <ol style={{ paddingLeft: '20px', fontSize: '13px', color: '#5F6368', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Anthropic, &ldquo;Tool search tool,&rdquo; Anthropic Documentation, 2025.</li>
                <li>OpenAI, &ldquo;Using tools: defer_loading,&rdquo; OpenAI API Reference, 2025.</li>
                <li>S. Robertson and H. Zaragoza, &ldquo;The probabilistic relevance framework: BM25 and beyond,&rdquo; <em>Foundations and Trends in Information Retrieval</em>, 2009.</li>
                <li>Model Context Protocol, &ldquo;SEP-1300: Tool filtering with groups and tags,&rdquo; 2025.</li>
                <li>Nguyen and Diao, &ldquo;Is Escalation Worth It? A Decision-Theoretic Characterization of LLM Cascades,&rdquo; <em>arXiv:2605.06350</em>, 2026.</li>
              </ol>
            </section>
          </article>

          {/* QUICK LINKS SIDEBAR (SMOOTH SCROLLING) */}
          <aside className="g-sidebar">
            <div className="g-sidebar-block">
              <div className="g-sidebar-title">Quick Links</div>
              <ul className="g-quick-links">
                <li>
                  <a href="#abstract" onClick={(e) => scrollToSection(e, 'abstract')} className={`g-quick-link-item ${activeId === 'abstract' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>Abstract</span>
                  </a>
                </li>
                <li>
                  <a href="#introduction" onClick={(e) => scrollToSection(e, 'introduction')} className={`g-quick-link-item ${activeId === 'introduction' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>1. Introduction</span>
                  </a>
                </li>
                <li>
                  <a href="#claims-matrix" onClick={(e) => scrollToSection(e, 'claims-matrix')} className={`g-quick-link-item ${activeId === 'claims-matrix' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>1.1 Claims Audit</span>
                  </a>
                </li>
                <li>
                  <a href="#related-work" onClick={(e) => scrollToSection(e, 'related-work')} className={`g-quick-link-item ${activeId === 'related-work' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>2. Related Work</span>
                  </a>
                </li>
                <li>
                  <a href="#architecture" onClick={(e) => scrollToSection(e, 'architecture')} className={`g-quick-link-item ${activeId === 'architecture' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>3. Architecture</span>
                  </a>
                </li>
                <li>
                  <a href="#caching-law" onClick={(e) => scrollToSection(e, 'caching-law')} className={`g-quick-link-item ${activeId === 'caching-law' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>3.2 Caching Law</span>
                  </a>
                </li>
                <li>
                  <a href="#evaluation" onClick={(e) => scrollToSection(e, 'evaluation')} className={`g-quick-link-item ${activeId === 'evaluation' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>4. Experiments</span>
                  </a>
                </li>
                <li>
                  <a href="#limitations" onClick={(e) => scrollToSection(e, 'limitations')} className={`g-quick-link-item ${activeId === 'limitations' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>5. Limitations</span>
                  </a>
                </li>
                <li>
                  <a href="#reproduction" onClick={(e) => scrollToSection(e, 'reproduction')} className={`g-quick-link-item ${activeId === 'reproduction' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>Reproduction</span>
                  </a>
                </li>
                <li>
                  <a href="#references" onClick={(e) => scrollToSection(e, 'references')} className={`g-quick-link-item ${activeId === 'references' ? 'active' : ''}`}>
                    <span className="g-link-icon">+</span>
                    <span>References</span>
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
