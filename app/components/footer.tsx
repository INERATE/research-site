import Link from 'next/link';

export function Footer() {
  return (
    <footer className="g-footer">
      <div className="research-container">
        <div className="g-footer-cols">
          <div>
            <div className="g-footer-col-title">INERATE Research</div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#5F6368', marginBottom: '14px' }}>
              Advancing deterministic AI agent architectures, capability addressing, and high-performance system runtimes.
            </p>
          </div>

          <div>
            <div className="g-footer-col-title">Research Topics</div>
            <div className="g-footer-links">
              <Link href="/acri">Capability Microkernels</Link>
              <Link href="/acri#caching-law">Prompt Caching Economics</Link>
              <Link href="/#forthcoming">Stateful Agent Workflows</Link>
              <Link href="/#forthcoming">Compiler &amp; Memory Compaction</Link>
            </div>
          </div>

          <div>
            <div className="g-footer-col-title">Ecosystem</div>
            <div className="g-footer-links">
              <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer">Inerate Forge Hub</a>
              <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer">Documentation Hub</a>
              <a href="https://tools.inerate.com" target="_blank" rel="noopener noreferrer">Developer Tools Suite</a>
            </div>
          </div>

          <div>
            <div className="g-footer-col-title">Publications &amp; Code</div>
            <div className="g-footer-links">
              <Link href="/acri">acri Technical Report (2026)</Link>
              <a href="https://github.com/INERATE/acri" target="_blank" rel="noopener noreferrer">GitHub: INERATE/acri</a>
              <a href="https://pypi.org/project/pyacri/" target="_blank" rel="noopener noreferrer">PyPI: pyacri v0.5.0</a>
            </div>
          </div>
        </div>

        <div className="g-footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 600, color: '#202124' }}>INERATE</span>
            <span>&copy; 2026 INERATE Group · Open Source Research (MIT License)</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer" style={{ color: '#5F6368', textDecoration: 'none' }}>GitHub</a>
            <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5F6368', textDecoration: 'none' }}>Forge</a>
            <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5F6368', textDecoration: 'none' }}>Docs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
