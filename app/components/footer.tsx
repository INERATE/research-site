import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', background: 'var(--bg-sunken)', padding: '60px 0 40px', color: 'var(--ink-muted)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink)', fontWeight: 700, fontSize: '15px', letterSpacing: '0.06em' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.75" strokeDasharray="2 3" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                <rect x="10" y="10" width="4" height="4" rx="1" fill="#25BE74" />
              </svg>
              INERATE RESEARCH
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '12px', color: 'var(--ink-muted)' }}>
              Advancing rigorous, client-side agent microkernels, capability addressing, and deterministic AI systems.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)' }}>Publications</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', fontSize: '13px' }}>
              <Link href="/acri" style={{ color: 'inherit', textDecoration: 'none' }}>acri Capability Microkernel (2026)</Link>
              <span style={{ color: 'var(--ink-dim)' }}>Atelier Runtime Framework (Coming Soon)</span>
              <span style={{ color: 'var(--ink-dim)' }}>Pre-Generation Intent Gating (Working Draft)</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)' }}>Ecosystem</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', fontSize: '13px' }}>
              <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Inerate Forge Hub</a>
              <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Documentation Hub</a>
              <a href="https://tools.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Developer Tools Suite</a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)' }}>Open Source</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px', fontSize: '13px' }}>
              <a href="https://github.com/INERATE/acri" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub: INERATE/acri</a>
              <a href="https://pypi.org/project/pyacri/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>PyPI: pyacri v0.4.3</a>
              <a href="https://github.com/ScienHAC" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Piyush Sharma (@ScienHAC)</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '12.5px' }}>
          <div>&copy; 2026 INERATE Group · Open Source Research & Engineering (MIT License)</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://github.com/INERATE" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>GitHub</a>
            <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Forge</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
