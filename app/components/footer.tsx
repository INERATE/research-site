import Link from 'next/link';

export function Footer() {
  return (
    <footer className="g-footer">
      <div className="research-container">
        {/* SOCIAL ROW */}
        <div className="g-footer-social-row">
          <span style={{ color: '#202124', fontWeight: 500 }}>Follow us</span>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="g-footer-social-link" aria-label="X (Twitter)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer" className="g-footer-social-link" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.2.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
          </a>
        </div>

        {/* INITIATIVES HEADLINE */}
        <h2 className="g-footer-initiatives-title">
          Explore our other initiatives
        </h2>

        {/* 4 COLUMNS (MATCHES GOOGLE FOOTER EXACTLY) */}
        <div className="g-footer-cols">
          <div>
            <div className="g-footer-col-title">INERATE Research</div>
            <div className="g-footer-col-desc">
              Advancing deterministic AI agent architectures, capability addressing, and high-performance microkernels.
            </div>
            <div className="g-footer-links">
              <Link href="/acri">acri Microkernel</Link>
              <Link href="/acri#caching-law">Prompt Caching Economics</Link>
              <Link href="/acri#evaluation">Evaluation &amp; Receipts</Link>
              <Link href="/">Publications Index</Link>
            </div>
          </div>

          <div>
            <div className="g-footer-col-title">INERATE Forge</div>
            <div className="g-footer-col-desc">
              Developer platform, visual topology tracing, and local studio execution.
            </div>
            <div className="g-footer-links">
              <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer">Forge Hub</a>
              <a href="https://forge.inerate.com/acri" target="_blank" rel="noopener noreferrer">Interactive Studio</a>
              <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer">Documentation</a>
              <a href="https://tools.inerate.com" target="_blank" rel="noopener noreferrer">Developer Tools</a>
            </div>
          </div>

          <div>
            <div className="g-footer-col-title">INERATE Atelier</div>
            <div className="g-footer-col-desc">
              Craftsman framework for AI-built software and sandboxed agent runtime execution.
            </div>
            <div className="g-footer-links">
              <a href="https://forge.inerate.com/atelier" target="_blank" rel="noopener noreferrer">Atelier Framework</a>
              <a href="https://github.com/INERATE/atelier" target="_blank" rel="noopener noreferrer">Runtime Source</a>
              <a href="https://docs.inerate.com/atelier" target="_blank" rel="noopener noreferrer">Architecture Docs</a>
            </div>
          </div>

          <div>
            <div className="g-footer-col-title">Open Source Collective</div>
            <div className="g-footer-col-desc">
              Client-side tools and libraries released under the MIT Open Source license.
            </div>
            <div className="g-footer-links">
              <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer">GitHub Collective</a>
              <a href="https://pypi.org/project/pyacri/" target="_blank" rel="noopener noreferrer">PyPI: pyacri v0.5.0</a>
              <a href="https://inerate.github.io/acri/demo/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="g-footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontWeight: 700, fontSize: '18px', color: '#202124', letterSpacing: '-0.02em' }}>INERATE</span>
            <span style={{ color: '#5F6368', fontSize: '12px' }}>&copy; 2026 INERATE Group · Open Source Research</span>
          </div>

          <div style={{ display: 'flex', gap: '24px', fontSize: '13px' }}>
            <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer" style={{ color: '#5F6368', textDecoration: 'none' }}>About INERATE</a>
            <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5F6368', textDecoration: 'none' }}>Forge</a>
            <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5F6368', textDecoration: 'none' }}>Docs</a>
            <a href="https://github.com/INERATE/acri/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" style={{ color: '#5F6368', textDecoration: 'none' }}>License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
