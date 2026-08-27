'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('inerate-research-theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('inerate-research-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.75" strokeDasharray="2 3" />
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="10" y="10" width="4" height="4" rx="1" fill="#25BE74" />
          </svg>
          <span>INERATE</span>
          <span className="brand-badge">RESEARCH</span>
        </Link>

        <nav className="nav-links">
          <Link href="/" className="nav-link">Overview</Link>
          <Link href="/acri" className="nav-link active">Papers</Link>
          <a href="https://forge.inerate.com" target="_blank" rel="noopener noreferrer" className="nav-link">Forge</a>
          <a href="https://docs.inerate.com" target="_blank" rel="noopener noreferrer" className="nav-link">Docs</a>
          <a href="https://github.com/INERATE/acri" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          
          <button 
            type="button" 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                <span>Light</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                <span>Dark</span>
              </>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
