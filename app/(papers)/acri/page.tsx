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
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

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
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--ink)' }}>
      <Header />

      {/* EDITORIAL HERO SECTION */}
      <section className="paper-hero">
        <div className="container">
          <div className="venue-meta">
            <span className="venue-pill">IEEE Technical Report · Open Source Research</span>
            <span className="date-text">Published August 27, 2026 · 12 min read</span>
          </div>

          <h1 className="paper-title">
            acri: A Client-Side Capability Resolver for Tool-Augmented Language Models
          </h1>

          <p className="paper-subhead">
            Resolving the exact top-k tools in 40 microseconds, reducing prompt bloat by 95%, and proving the Prompt Caching Inversion Theorem for AI agents.
          </p>

          {/* Author & Action Bar */}
          <div className="author-bar">
            <div className="author-chip">
              <div className="author-avatar">PS</div>
              <div>
                <div className="author-name">Piyush Sharma</div>
                <div className="author-affiliation">INERATE Engineering Collective · @ScienHAC</div>
              </div>
            </div>

            <div className="quick-actions">
              <button 
                type="button" 
                onClick={() => setIsPdfOpen(true)} 
                className="action-btn btn-pdf"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Read Paper PDF
              </button>

              <button 
                type="button" 
                onClick={() => setIsBibtexOpen(true)} 
                className="action-btn btn-secondary"
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
                className="action-btn btn-secondary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.2.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                </svg>
                GitHub ⭐
              </a>

              <a 
                href="https://forge.inerate.com/acri" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="action-btn btn-secondary"
              >
                Interactive Studio ⚡
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2-COLUMN ARTICLE & STICKY RESEARCH RAIL */}
      <div className="container">
        <div className="paper-layout">
          {/* ARTICLE BODY */}
          <article className="article-body">
            {/* ABSTRACT */}
            <div className="abstract-box" id="abstract">
              <strong>Abstract</strong>
              As the number of tools exposed to a language model grows past a small threshold, tool-selection accuracy degrades—Anthropic’s own documentation places the performance cliff at 30–50 tools. Anthropic and OpenAI ship proprietary server-side tool search to address this; open providers (Google Gemini, Ollama, vLLM, and locally-hosted models) have no native equivalent. We present <strong>acri</strong>, a client-side, provider-agnostic capability resolver: given a query and a registered tool corpus, it isolates the top-k relevant tools using an in-memory BM25 lexical inverted index with zero model training and zero external dependencies. On a 50-query, 100-tool benchmark, acri improves live tool selection accuracy on <code>gemini-2.5-flash</code> from <strong>84% to 92%</strong> (top-5 shown), with zero resolver misses. We further prove that a naive &ldquo;send fewer tokens&rdquo; assumption is economically wrong once provider prompt caching is accounted for: rewriting tool prefixes across turns invalidates cache discounts unless token reduction exceeds roughly tenfold.
            </div>

            {/* SECTION 1: INTRODUCTION */}
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
                Tool-augmented language models select one function from a registered catalog on each turn. As that catalog expands, the model’s task—reading N schemas and picking the exact right one—degrades in accuracy for a well-documented reason: schema tokens compete for the same attention budget as conversation context, and confusability between similarly-named tools rises with N.
              </p>
              <p>
                Anthropic’s own tool-use documentation names <strong>30–50 tools</strong> as the point past which degradation becomes visible in practice, shipping server-side Tool Search as their mitigation. OpenAI ships a similar assistant catalog.
              </p>
              <p>
                Gemini does not. Ollama does not. vLLM does not. A locally-hosted 8B model does not. Developers building against these endpoints do not get this mitigation for free, and re-implementing server-side retrieval per provider is an unreasonable burden.
              </p>
              <p>
                <strong>acri</strong> is that layer, implemented once, client-side: <code>pip install pyacri</code>, <code>import acri</code>. It sits between application code and whichever provider SDK is in use, deciding per-task which k of the registered tools the model actually sees in 40 microseconds.
              </p>
            </section>

            {/* CLAIMS MATRIX */}
            <section id="claims-matrix">
              <h2>1.1 Empirical Claims Audit</h2>
              <p>
                Early drafts of AI framework projects often accumulate unsupportable claims. Table 1 audits every claim made in this work by empirical defensibility. We explicitly state what we refuse to claim.
              </p>

              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th style={{ width: '35%' }}>Hypothesized Claim</th>
                      <th>Empirical Audit Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Improves Tool-Selection Accuracy</strong></td>
                      <td><span style={{ color: 'var(--emerald)', fontWeight: 600 }}>Measured.</span> Naive 84% &rarr; acri 92% on live <code>gemini-2.5-flash</code> calls (&sect;4.3).</td>
                    </tr>
                    <tr>
                      <td><strong>Frees Context-Window Capacity</strong></td>
                      <td><span style={{ color: 'var(--accent)', fontWeight: 600 }}>Verified.</span> 95% reduction in offered schema tokens (5 tools vs 100 tools in active context).</td>
                    </tr>
                    <tr>
                      <td><strong>Provider-Agnostic Operation</strong></td>
                      <td><span style={{ color: 'var(--ink)', fontWeight: 600 }}>Architectural Fact.</span> Works client-side across Gemini, Ollama, vLLM, OpenAI endpoints.</td>
                    </tr>
                    <tr>
                      <td><strong>Lowers Turn-by-Turn Cost</strong></td>
                      <td><span style={{ color: 'var(--amber)', fontWeight: 600 }}>Conditional / False.</span> Rewriting tool prefixes every turn forfeits cache discounts (&sect;3.2).</td>
                    </tr>
                    <tr>
                      <td><strong>Faster End-to-End Latency</strong></td>
                      <td><span style={{ color: 'var(--ink-muted)' }}>Indirect.</span> Resolver latency (0.040ms) is negligible; savings come from fewer retry turns.</td>
                    </tr>
                    <tr>
                      <td><strong>Eliminates All Hallucinations</strong></td>
                      <td><span style={{ color: '#EF4444', fontWeight: 600 }}>Not Claimable.</span> Top-k pruning minimizes distractors but cannot mathematically guarantee compliance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: RELATED WORK */}
            <section id="related-work">
              <h2>2. Related Work</h2>
              <p>
                <strong>Server-side tool search (Anthropic, OpenAI):</strong> Solves the identical problem for closed provider clouds. acri targets the complement—every provider and self-hosted model that does not ship native search.
              </p>
              <p>
                <strong>Model Context Protocol (MCP) Filtering Proposals:</strong> SEP-1300, SEP-1821, and SEP-1881 proposed static group tags. While static tagging allows operators to categorize tools ahead of time, acri performs <em>query-aware runtime retrieval</em>, where relevance dynamically adapts per user intent.
              </p>
              <p>
                <strong>Pre-Generation Routing vs Cascades:</strong> RouteLLM pioneered model tier selection. Recent findings by Nguyen &amp; Diao (2026) in <em>&ldquo;Is Escalation Worth It?&rdquo;</em> prove that lightweight pre-generation routing strictly outperforms cascade fallbacks because cascades always pay the cheap model&rsquo;s latency and cost before escalating.
              </p>
            </section>

            {/* SECTION 3: SYSTEM ARCHITECTURE */}
            <section id="architecture">
              <h2>3. System Architecture</h2>
              <p>
                acri decomposes into three foundational components: <strong>corpus</strong> (in-memory index over MCP servers, OpenAPI specs, and Python callables), <strong>compass</strong> (zero-copy BM25 inverted lexical resolver with query-side synonym expansion), and <strong>port</strong> (unified provider adapters for Gemini, OpenAI, and Ollama). Decisions are logged to an immutable local ledger (<code>.acri/ledger.jsonl</code>).
              </p>

              {/* FIGURE 1: ARCHITECTURE FLOW */}
              <div className="figure-container">
                <div className="figure-header">
                  <span className="figure-badge">Figure 1: Capability Resolution Pipeline</span>
                  <span>40µs IN-MEMORY FLOW</span>
                </div>
                <div className="figure-body">
                  <svg viewBox="0 0 740 200" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                    {/* Node 1: Corpus */}
                    <rect x="10" y="55" width="150" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--accent)" strokeWidth="1.5" />
                    <text x="85" y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--accent)">corpus.index()</text>
                    <text x="85" y="107" textAnchor="middle" fontSize="11" fill="var(--ink-muted)">100+ MCP Tools</text>
                    <text x="85" y="125" textAnchor="middle" fontSize="10.5" fill="var(--ink-dim)">Indexed in RAM</text>

                    {/* Arrow 1 */}
                    <line x1="160" y1="100" x2="195" y2="100" stroke="var(--ink-dim)" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Node 2: Compass */}
                    <rect x="200" y="55" width="165" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--cyan)" strokeWidth="1.5" />
                    <text x="282" y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--cyan)">compass.resolve()</text>
                    <text x="282" y="107" textAnchor="middle" fontSize="11" fill="var(--ink-muted)">In-Memory BM25</text>
                    <text x="282" y="125" textAnchor="middle" fontSize="10.5" fill="var(--cyan)">0.038 ms Latency</text>

                    {/* Arrow 2 */}
                    <line x1="365" y1="100" x2="400" y2="100" stroke="var(--ink-dim)" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Node 3: Top-5 */}
                    <rect x="405" y="55" width="150" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--emerald)" strokeWidth="1.5" />
                    <text x="480" y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--emerald)">Top-5 Candidates</text>
                    <text x="480" y="107" textAnchor="middle" fontSize="11" fill="var(--ink-muted)">95% Fewer Tokens</text>
                    <text x="480" y="125" textAnchor="middle" fontSize="10.5" fill="var(--emerald)">100% Recall@5</text>

                    {/* Arrow 3 */}
                    <line x1="555" y1="100" x2="590" y2="100" stroke="var(--ink-dim)" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Node 4: Provider */}
                    <rect x="595" y="55" width="135" height="90" rx="8" fill="var(--bg-surface)" stroke="var(--ink-secondary)" strokeWidth="1.5" />
                    <text x="662" y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--ink)">port.gemini</text>
                    <text x="662" y="107" textAnchor="middle" fontSize="11" fill="var(--ink-muted)">1 Direct LLM Call</text>
                    <text x="662" y="125" textAnchor="middle" fontSize="10.5" fill="var(--ink-dim)">Zero Gateway Lag</text>
                  </svg>
                </div>
                <div className="figure-caption">
                  <b>Figure 1: Client-Side Capability Resolution Pipeline.</b> The registered catalog is tokenized once into RAM. On each turn, <code>compass.resolve()</code> filters the catalog to top-5 candidates in 38 microseconds before provider invocation.
                </div>
              </div>
            </section>

            {/* SECTION 3.2: PROMPT CACHING LAW */}
            <section id="caching-law">
              <h2>3.2 The Prompt Caching Inversion Theorem</h2>
              <p>
                A core theoretical insight of this paper is proving why dynamic, per-turn tool re-resolution is an economic anti-pattern under modern provider pricing.
              </p>
              <p>
                Major LLM providers grant a ~90% discount on prompt tokens matching a cached prefix. Tool schemas sit at the beginning of the prompt. Rewriting the tool block on every turn invalidates the KV-cache prefix, forcing the caller to pay full price for a slightly smaller prompt.
              </p>

              {/* EQUATION 1 CARD */}
              <div className="equation-card">
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-dim)', fontWeight: 700 }}>
                  Equation 1: The Prompt Caching Inversion Inequality
                </div>
                <div className="equation-math">
                  r &middot; C &middot; p &nbsp;&lt;&nbsp; C &middot; (p / 10) &nbsp;&nbsp;&iff;&nbsp;&nbsp; r &lt; 1/10
                </div>
                <p className="equation-desc">
                  Where <code>C</code> is full tool schema tokens, <code>p</code> is uncached price, and <code>r</code> is the reduction ratio.
                </p>
              </div>

              <p>
                <strong>Theorem 1 (The Resolve-Once Law):</strong> Pruning a tool schema prefix by less than 10-fold while forfeiting cache discounts constitutes a <em>net economic regression</em>. Therefore, acri enforces a <strong>resolve once per task</strong> policy, writing the tool schema prefix once and maintaining it across conversational turns. Mid-task tool discovery is handled via the append-only <code>find_more_tools</code> escape hatch.
              </p>
            </section>

            {/* SECTION 4: EMPIRICAL EVALUATION */}
            <section id="evaluation">
              <h2>4. Empirical Evaluation &amp; Experimental Receipts</h2>
              <p>
                All experimental figures originate from automated harness scripts in the <code>assay/</code> test suite, evaluated on a synthetic corpus of 100 enterprise tools spanning 20 distinct domains with high cross-domain confusability.
              </p>

              {/* FIGURE 2: RECALL & SCALE BAR CHART */}
              <div className="figure-container">
                <div className="figure-header">
                  <span className="figure-badge">Figure 2: Empirical Recall@k &amp; Scale Stress</span>
                  <span>100 VS 504 TOOLS</span>
                </div>
                <div className="figure-body">
                  <svg viewBox="0 0 740 220" width="100%" height="100%" style={{ fontFamily: 'var(--font-sans)' }}>
                    {/* Y Axis Grid */}
                    <line x1="120" y1="30" x2="700" y2="30" stroke="var(--hairline)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="120" y1="75" x2="700" y2="75" stroke="var(--hairline)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="120" y1="120" x2="700" y2="120" stroke="var(--hairline)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="120" y1="165" x2="700" y2="165" stroke="var(--hairline)" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Labels */}
                    <text x="110" y="34" textAnchor="end" fontSize="11" fill="var(--ink-dim)">100%</text>
                    <text x="110" y="79" textAnchor="end" fontSize="11" fill="var(--ink-dim)">90%</text>
                    <text x="110" y="124" textAnchor="end" fontSize="11" fill="var(--ink-dim)">80%</text>
                    <text x="110" y="169" textAnchor="end" fontSize="11" fill="var(--ink-dim)">70%</text>

                    {/* Bar Group 1: k=1 */}
                    <rect x="160" y="69" width="36" height="96" rx="4" fill="var(--accent)" />
                    <rect x="202" y="93" width="36" height="72" rx="4" fill="rgba(167,139,250,0.4)" />
                    <text x="199" y="190" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--ink)">k = 1</text>

                    {/* Bar Group 2: k=3 */}
                    <rect x="290" y="45" width="36" height="120" rx="4" fill="var(--accent)" />
                    <rect x="332" y="57" width="36" height="108" rx="4" fill="rgba(167,139,250,0.4)" />
                    <text x="329" y="190" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--ink)">k = 3</text>

                    {/* Bar Group 3: k=5 */}
                    <rect x="420" y="30" width="36" height="135" rx="4" fill="var(--emerald)" />
                    <rect x="462" y="42" width="36" height="123" rx="4" fill="rgba(37,190,116,0.4)" />
                    <text x="459" y="190" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--emerald)">k = 5 (Standard)</text>

                    {/* Bar Group 4: k=10 */}
                    <rect x="550" y="30" width="36" height="135" rx="4" fill="var(--accent)" />
                    <rect x="592" y="33" width="36" height="132" rx="4" fill="rgba(167,139,250,0.4)" />
                    <text x="589" y="190" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--ink)">k = 10</text>
                  </svg>
                </div>
                <div className="figure-caption">
                  <b>Figure 2: Recall@k Accuracy across 100 Tools vs 504 Tools.</b> Solid bars show 100-tool corpus (100% at k=5); translucent bars show 504-tool scale stress test (92% at k=5). Latency scales sub-linearly to 0.179 ms at 504 tools.
                </div>
              </div>

              {/* FIGURE 3: LIVE ACCURACY BAR */}
              <div className="figure-container">
                <div className="figure-header">
                  <span className="figure-badge">Figure 3: Live LLM Tool Selection Accuracy</span>
                  <span>GEMINI 2.5 FLASH (n=50)</span>
                </div>
                <div className="figure-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '32px 20px', flexWrap: 'wrap', gap: '20px' }}>
                  <div style={{ textAlign: 'center', padding: '20px 30px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--hairline)', minWidth: '220px' }}>
                    <div style={{ fontSize: '13px', color: 'var(--ink-muted)', marginBottom: '6px' }}>Naive (100 Tools in Prompt)</div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--ink-dim)' }}>84%</div>
                    <div style={{ fontSize: '11.5px', color: '#EF4444', marginTop: '4px' }}>Attention degradation &amp; confusion</div>
                  </div>

                  <div style={{ fontSize: '2rem', color: 'var(--accent)', fontWeight: 700 }}>&rarr;</div>

                  <div style={{ textAlign: 'center', padding: '20px 30px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid rgba(37,190,116,0.3)', minWidth: '220px', boxShadow: '0 8px 24px rgba(37,190,116,0.1)' }}>
                    <div style={{ fontSize: '13px', color: 'var(--emerald)', fontWeight: 600, marginBottom: '6px' }}>acri (Top-5 Tools Offered)</div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--emerald)' }}>92%</div>
                    <div style={{ fontSize: '11.5px', color: 'var(--emerald)', marginTop: '4px' }}>+8.0% gain (resolver_miss = 0)</div>
                  </div>
                </div>
                <div className="figure-caption">
                  <b>Figure 3: Live Model Tool Selection Accuracy.</b> Measured on 50 natural language queries on live <code>gemini-2.5-flash</code>. Diagnosis with <code>assay/diagnose.py</code> confirms zero resolver misses.
                </div>
              </div>
            </section>

            {/* SECTION 5: LIMITATIONS */}
            <section id="limitations">
              <h2>5. Limitations &amp; Unresolved Gaps</h2>
              <p>
                Stated as explicit gaps to close before peer review at a flagship venue:
              </p>
              <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--ink-secondary)' }}>
                <li><strong>Sample Size:</strong> 50–52 gold queries is small for a headline claim. A ~2-point noise floor exists; bootstrap confidence intervals are uncalculated.</li>
                <li><strong>Single Model:</strong> All accuracy numbers are <code>gemini-2.5-flash</code> only; cross-family generalization (Claude 3.7, GPT-4o, LLaMA-3) is unmeasured.</li>
                <li><strong>No Dense Embedding Baseline:</strong> BM25 vs dense embeddings on tool descriptions is an open question requiring comparative assay runs.</li>
                <li><strong>Synthetic Corpus:</strong> The catalog was generated, not sourced from in-production enterprise MCP deployments.</li>
                <li><strong>Re-Resolution Triggers:</strong> Policies for autonomously triggering <code>find_more_tools</code> without extra model inference remain unformalized.</li>
              </ol>
            </section>

            {/* SECTION 6: CONCLUSION */}
            <section id="conclusion">
              <h2>6. Conclusion</h2>
              <p>
                We have presented <strong>acri</strong>, an open-source capability resolver for language models without native tool search. By resolving capability sets in 40 microseconds and proving the Prompt Caching Inversion Law, acri eliminates context bloat, boosts model selection accuracy by 8%, and provides cross-language parity across Python, Rust, and TypeScript.
              </p>
            </section>

            {/* REPRODUCTION CODE */}
            <section id="reproduction" style={{ marginTop: '40px' }}>
              <h2>Reproduction &amp; Code</h2>
              <p>
                Reproduce all empirical receipts locally with the <code>assay/</code> test suite:
              </p>

              <div style={{ background: 'var(--bg-sunken)', border: '1px solid var(--hairline)', borderRadius: '12px', padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.6 }}>
                <div style={{ color: 'var(--ink-dim)' }}># 1. Install pyacri with dev harness:</div>
                <div style={{ color: 'var(--accent)' }}>$ pip install -e &quot;.[dev]&quot;</div>
                <br />
                <div style={{ color: 'var(--ink-dim)' }}># 2. Run Recall@k and Scale benchmarks:</div>
                <div style={{ color: 'var(--ink)' }}>$ python -m assay.recall <span style={{ color: 'var(--ink-dim)' }}># &sect;4.1</span></div>
                <div style={{ color: 'var(--ink)' }}>$ python -m assay.scale <span style={{ color: 'var(--ink-dim)' }}># &sect;4.2 (504-tool test)</span></div>
                <br />
                <div style={{ color: 'var(--ink-dim)' }}># 3. Run Live LLM Accuracy Evaluation:</div>
                <div style={{ color: 'var(--ink)' }}>$ python -m assay.accuracy <span style={{ color: 'var(--ink-dim)' }}># &sect;4.3 (requires GEMINI_API_KEY)</span></div>
                <div style={{ color: 'var(--ink)' }}>$ python -m assay.diagnose <span style={{ color: 'var(--ink-dim)' }}># Error decomposition</span></div>
              </div>
            </section>

            {/* OTHER RESEARCH CARDS */}
            <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--hairline)' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '16px' }}>
                Other Research from INERATE
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--hairline)', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--emerald)', fontWeight: 600, textTransform: 'uppercase' }}>Framework Architecture</div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, margin: '8px 0 6px', color: 'var(--ink)' }}>Atelier: Craftsman AI Agent Framework</h4>
                  <p style={{ fontSize: '13px', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                    Zero-bloat deterministic agent framework designed for production reliability.
                  </p>
                  <a href="https://forge.inerate.com/atelier" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12.5px', color: 'var(--accent)', fontWeight: 600, display: 'inline-block', marginTop: '10px' }}>
                    View Atelier &rarr;
                  </a>
                </div>

                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--hairline)', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--cyan)', fontWeight: 600, textTransform: 'uppercase' }}>Observability</div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, margin: '8px 0 6px', color: 'var(--ink)' }}>acri studio: Real-Time Trace Mesh</h4>
                  <p style={{ fontSize: '13px', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                    Local visualizer on port 8099 streaming capability resolution traces with zero telemetry leaks.
                  </p>
                  <a href="https://forge.inerate.com/acri" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12.5px', color: 'var(--cyan)', fontWeight: 600, display: 'inline-block', marginTop: '10px' }}>
                    Launch Studio &rarr;
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* STICKY RESEARCH RAIL (DESKTOP RIGHT) */}
          <aside className="sticky-rail">
            {/* Table of Contents */}
            <div className="rail-card">
              <div className="rail-title">Contents</div>
              <ul className="toc-list">
                <li><a href="#abstract" className={`toc-link ${activeId === 'abstract' ? 'active' : ''}`}>Abstract</a></li>
                <li><a href="#introduction" className={`toc-link ${activeId === 'introduction' ? 'active' : ''}`}>1. Introduction</a></li>
                <li><a href="#claims-matrix" className={`toc-link ${activeId === 'claims-matrix' ? 'active' : ''}`}>1.1 Claims Matrix</a></li>
                <li><a href="#related-work" className={`toc-link ${activeId === 'related-work' ? 'active' : ''}`}>2. Related Work</a></li>
                <li><a href="#architecture" className={`toc-link ${activeId === 'architecture' ? 'active' : ''}`}>3. Architecture</a></li>
                <li><a href="#caching-law" className={`toc-link ${activeId === 'caching-law' ? 'active' : ''}`}>3.2 Caching Theorem</a></li>
                <li><a href="#evaluation" className={`toc-link ${activeId === 'evaluation' ? 'active' : ''}`}>4. Empirical Evaluation</a></li>
                <li><a href="#limitations" className={`toc-link ${activeId === 'limitations' ? 'active' : ''}`}>5. Limitations</a></li>
                <li><a href="#conclusion" className={`toc-link ${activeId === 'conclusion' ? 'active' : ''}`}>6. Conclusion</a></li>
                <li><a href="#reproduction" className={`toc-link ${activeId === 'reproduction' ? 'active' : ''}`}>Reproduction</a></li>
              </ul>
            </div>

            {/* PDF Reader Trigger Card */}
            <div className="rail-card" style={{ background: 'linear-gradient(180deg, var(--bg-surface) 0%, rgba(167, 139, 250, 0.05) 100%)', border: '1px solid rgba(167,139,250,0.2)' }}>
              <div className="rail-title" style={{ color: 'var(--accent)' }}>Full IEEE Paper</div>
              <p style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', marginBottom: '14px', lineHeight: 1.5 }}>
                Read the compiled 4-page IEEE conference format PDF with native TikZ vector graphics.
              </p>
              <button 
                type="button" 
                onClick={() => setIsPdfOpen(true)} 
                className="action-btn btn-pdf"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                Read in PDF Viewer
              </button>
            </div>

            {/* BibTeX Card */}
            <div className="rail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div className="rail-title" style={{ margin: 0 }}>Cite</div>
                <button 
                  type="button" 
                  onClick={() => setIsBibtexOpen(true)}
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '11px', cursor: 'pointer', fontWeight: 600 }}
                >
                  Expand
                </button>
              </div>
              <div className="bibtex-preview" style={{ maxHeight: '110px' }}>
                {`@article{sharma2026acri,
  title={acri: A Client-Side Capability Resolver...},
  author={Sharma, Piyush},
  year={2026}
}`}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />

      {/* PDF MODAL OVERLAY */}
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

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
