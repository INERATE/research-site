'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="google-header">
      <div className="container google-nav-inner">
        <Link href="/" className="google-brand">
          <div className="mark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: '6px' }}>
              <circle cx="12" cy="12" r="9.5" stroke="#1A73E8" strokeWidth="1.75" strokeDasharray="2 3" />
              <circle cx="12" cy="12" r="5" stroke="#EA4335" strokeWidth="1.5" />
              <rect x="10" y="10" width="4" height="4" rx="1" fill="#34A853" />
            </svg>
          </div>
          <span className="name">INERATE</span>
          <span className="sub">Research</span>
        </Link>

        <nav className="google-nav-links">
          <Link href="/" className="google-nav-link">Research</Link>
          <Link href="/acri" className="google-nav-link active">Publications</Link>
          <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer" className="google-nav-link">Forge</a>
          <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer" className="google-nav-link">Docs</a>
          <a href="https://github.com/INERATE/acri" target="_blank" rel="noopener noreferrer" className="google-nav-link">GitHub</a>
          
          <button type="button" className="google-search-btn" aria-label="Search Research">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span>Search</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
