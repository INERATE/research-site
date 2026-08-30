'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let prev = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 120 && y > prev) setHidden(true);
      else if (y < prev) setHidden(false);
      prev = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`g-header${scrolled ? ' scrolled' : ''}${hidden ? ' nav-hidden' : ''}`}>
      <div className="research-container g-nav-inner">
        <Link href="/" className="g-brand">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginRight: '6px' }}>
              <circle cx="12" cy="12" r="9.5" stroke="#1A73E8" strokeWidth="1.75" strokeDasharray="2 3" />
              <circle cx="12" cy="12" r="5" stroke="#EA4335" strokeWidth="1.5" />
              <rect x="10" y="10" width="4" height="4" rx="1" fill="#34A853" />
            </svg>
          </div>
          <span style={{ fontWeight: 600, color: '#202124' }}>INERATE</span>
          <span style={{ color: '#5F6368', fontWeight: 400, marginLeft: '2px' }}>Research</span>
        </Link>

        <nav className="g-nav-links">
          <Link href="/" className={`g-nav-link${onHome ? ' active' : ''}`}>Research</Link>
          <Link href="/#publications" className={`g-nav-link${onHome ? '' : ' active'}`}>Publications</Link>
          <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer" className="g-nav-link">Forge</a>
          <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer" className="g-nav-link">Docs</a>
          <a href="https://github.com/INERATE/acri" target="_blank" rel="noopener noreferrer" className="g-nav-link">GitHub</a>
          
          <button type="button" className="g-search-btn" aria-label="Search Research">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
