'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { PdfViewerModal } from './components/pdf-viewer-modal';

export default function ResearchHubPage() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'microkernels' | 'caching' | 'systems'>('all');

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--ink)' }}>
      <Header />

      {/* HUB HERO */}
      <section style={{ padding: '80px 0 50px', borderBottom: '1px solid var(--hairline)', background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg) 100%)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: 'var(--r-pill)', background: 'var(--accent-glow)', border: '1px solid rgba(167,139,250,0.3)', color: 'var(--accent)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
            Open Source AI Research Collective
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', color: 'var(--ink)', maxWidth: '900px', marginBottom: '20px' }}>
            Advancing AI Systems, Capability Microkernels &amp; Deterministic Architecture.
          </h1>

          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--ink-secondary)', lineHeight: 1.6, maxWidth: '780px' }}>
            Empirical technical reports, mathematical proofs, and client-side systems designed for discipline, microsecond performance, and verified reproducibility.
          </p>

          {/* Topic Filters */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '36px', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              onClick={() => setActiveTab('all')}
              className={`action-btn ${activeTab === 'all' ? 'btn-pdf' : 'btn-secondary'}`}
            >
              All Publications
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('microkernels')}
              className={`action-btn ${activeTab === 'microkernels' ? 'btn-pdf' : 'btn-secondary'}`}
            >
              Capability Microkernels
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('caching')}
              className={`action-btn ${activeTab === 'caching' ? 'btn-pdf' : 'btn-secondary'}`}
            >
              Prompt Caching Economics
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('systems')}
              className={`action-btn ${activeTab === 'systems' ? 'btn-pdf' : 'btn-secondary'}`}
            >
              Agent Architectures
            </button>
          </div>
        </div>
      </section>

      {/* PAPERS INDEX */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
              Featured Publications
            </h2>
            <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>Showing 1 of 1 peer-reviewed preprints</span>
          </div>

          {/* FEATURED FLAGSHIP PAPER CARD: ACRI */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', transition: 'border-color 0.2s', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span className="venue-pill">Featured Paper · IEEE Format</span>
                  <span style={{ fontSize: '12px', color: 'var(--ink-dim)', fontFamily: 'var(--font-mono)' }}>August 2026</span>
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '14px' }}>
                  <Link href="/acri" style={{ color: 'inherit', textDecoration: 'none' }}>
                    acri: A Client-Side Capability Resolver for Tool-Augmented Language Models
                  </Link>
                </h3>

                <p style={{ fontSize: '14.5px', color: 'var(--ink-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                  Resolving the exact top-k tools in 40 microseconds, eliminating prompt context bloat by 95%, and proving why dynamic per-turn tool rewriting is an economic anti-pattern under modern prompt caching regimes.
                </p>

                <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: 'var(--ink-muted)', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div><strong>Author:</strong> Piyush Sharma (@ScienHAC)</div>
                  <div><strong>Accuracy:</strong> 84% &rarr; 92% (+8.0%)</div>
                  <div><strong>Latency:</strong> 0.040 ms (40µs)</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/acri" className="action-btn btn-pdf">
                  Read Full Paper Article &rarr;
                </Link>

                <button 
                  type="button" 
                  onClick={() => setIsPdfOpen(true)}
                  className="action-btn btn-secondary"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  Read PDF
                </button>
              </div>
            </div>

            {/* PREVIEW VISUAL */}
            <div style={{ background: 'var(--bg-sunken)', borderLeft: '1px solid var(--hairline)', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '100%', maxWidth: '380px', background: 'var(--bg-surface)', border: '1px solid var(--hairline)', borderRadius: '12px', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  Key Empirical Receipts
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--hairline)', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>p50 Resolver Latency</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>0.040 ms</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--hairline)', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>Recall@5 on 100 Tools</span>
                    <span style={{ color: 'var(--emerald)', fontWeight: 700 }}>100%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--hairline)', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>Gemini 2.5 Flash Accuracy</span>
                    <span style={{ color: 'var(--emerald)', fontWeight: 700 }}>92% (vs 84%)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--ink-muted)' }}>Prompt Token Reduction</span>
                    <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORTHCOMING RESEARCH PIPELINE */}
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Forthcoming Preprints &amp; Technical Reports
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--amber)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>In Development</span>
                  <span style={{ fontSize: '11px', color: 'var(--ink-dim)', fontFamily: 'var(--font-mono)' }}>Q4 2026</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                  Atelier: Deterministic Runtime Isolation for Craftsman AI Agents
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
                  A zero-dependency TypeScript/Python framework for stateful workflows, sandboxed execution, and multi-agent coordination.
                </p>
              </div>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--amber)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Working Draft</span>
                  <span style={{ fontSize: '11px', color: 'var(--ink-dim)', fontFamily: 'var(--font-mono)' }}>Q4 2026</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                  Pre-Generation Intent Gating vs. Cascade Escalation in LLM Ensembles
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>
                  Empirical analysis of classification vs model cascade handoffs across 1,000+ real-world reasoning tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* PDF VIEWER MODAL */}
      <PdfViewerModal 
        isOpen={isPdfOpen} 
        onClose={() => setIsPdfOpen(false)}
        pdfUrl="/assets/acri_capability_resolver_paper.pdf"
      />
    </div>
  );
}
