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
    <div style={{ background: '#FAFAFA', minHeight: '100vh', color: '#202124' }}>
      <Header />

      {/* HUB HERO */}
      <section style={{ padding: '60px 0 40px', borderBottom: '1px solid #E8EAED', background: '#FAFAFA' }}>
        <div className="research-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '9999px', background: '#E8F0FE', border: '1px solid #1A73E8', color: '#1A73E8', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '16px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1A73E8' }} />
            Open Source AI Research Collective
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.035em', color: '#202124', maxWidth: '900px', marginBottom: '16px' }}>
            Capability Microkernels &amp; Deterministic Architecture.
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: '#3C4043', lineHeight: 1.6, maxWidth: '780px' }}>
            Empirical technical reports, mathematical proofs, and client-side systems designed for discipline, microsecond performance, and verified reproducibility.
          </p>

          {/* Clean Google Filter Chips */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              onClick={() => setActiveTab('all')}
              className={`google-filter-pill ${activeTab === 'all' ? 'active' : ''}`}
            >
              All Publications
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('microkernels')}
              className={`google-filter-pill ${activeTab === 'microkernels' ? 'active' : ''}`}
            >
              Capability Microkernels
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('caching')}
              className={`google-filter-pill ${activeTab === 'caching' ? 'active' : ''}`}
            >
              Prompt Caching Economics
            </button>
            <button 
              type="button" 
              onClick={() => setActiveTab('systems')}
              className={`google-filter-pill ${activeTab === 'systems' ? 'active' : ''}`}
            >
              Agent Architectures
            </button>
          </div>
        </div>
      </section>

      {/* PAPERS INDEX */}
      <section id="publications" style={{ padding: '50px 0 80px', scrollMarginTop: '80px' }}>
        <div className="research-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#202124', letterSpacing: '-0.02em' }}>
              Featured Publications
            </h2>
            <span style={{ fontSize: '13px', color: '#5F6368' }}>Showing 1 of 1 published papers</span>
          </div>

          {/* FEATURED FLAGSHIP PAPER CARD: ACRI */}
          <div style={{ background: '#FFFFFF', border: '1px solid #DADCE0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 600, padding: '3px 10px', borderRadius: '9999px', background: '#E6F4EA', color: '#137333', border: '1px solid #CEEAD6' }}>
                    Featured Paper · Preprint
                  </span>
                  <span style={{ fontSize: '12.5px', color: '#5F6368', fontFamily: 'var(--font-mono)' }}>August 2026</span>
                </div>

                <h3 style={{ fontSize: '23px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em', color: '#202124', marginBottom: '14px' }}>
                  <Link href="/acri" style={{ color: 'inherit', textDecoration: 'none' }}>
                    acri: A Client-Side Capability Resolver for Tool-Augmented Language Models
                  </Link>
                </h3>

                <p style={{ fontSize: '14.5px', color: '#3C4043', lineHeight: 1.65, marginBottom: '20px' }}>
                  Resolving the exact top-k tools in 40 microseconds, eliminating prompt context bloat by 95%, and proving why dynamic per-turn tool rewriting is an economic anti-pattern under modern prompt caching regimes.
                </p>

                <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#5F6368', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <div><strong>Author:</strong> Piyush Sharma (@ScienHAC)</div>
                  <div><strong>Accuracy:</strong> 84% &rarr; 92% (+8.0%)</div>
                  <div><strong>Latency:</strong> 0.040 ms (40µs)</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/acri" className="g-btn-primary">
                  Read Full Paper Article &rarr;
                </Link>

                <button 
                  type="button" 
                  onClick={() => setIsPdfOpen(true)}
                  className="g-btn-secondary"
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
            <div style={{ background: '#F8F9FA', borderLeft: '1px solid #DADCE0', padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '100%', maxWidth: '360px', background: '#FFFFFF', border: '1px solid #DADCE0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '11px', color: '#1A73E8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Key Empirical Receipts
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F3F4', paddingBottom: '6px' }}>
                    <span style={{ color: '#5F6368' }}>p50 Resolver Latency</span>
                    <span style={{ color: '#1A73E8', fontWeight: 700 }}>0.040 ms</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F3F4', paddingBottom: '6px' }}>
                    <span style={{ color: '#5F6368' }}>Recall@5 on 100 Tools</span>
                    <span style={{ color: '#137333', fontWeight: 700 }}>100%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F3F4', paddingBottom: '6px' }}>
                    <span style={{ color: '#5F6368' }}>Gemini 2.5 Flash Accuracy</span>
                    <span style={{ color: '#137333', fontWeight: 700 }}>92% (vs 84%)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#5F6368' }}>Prompt Token Reduction</span>
                    <span style={{ color: '#1A73E8', fontWeight: 700 }}>95%</span>
                  </div>
                </div>
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
