'use client';

import { useState } from 'react';

interface BibtexModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BIBTEX_CODE = `@article{sharma2026acri,
  title={acri: A Client-Side Capability Resolver for Tool-Augmented Language Models},
  author={Sharma, Piyush},
  journal={INERATE Research Technical Report},
  year={2026},
  url={https://research.inerate.com/acri},
  publisher={INERATE Open Source Collective}
}`;

export function BibtexModal({ isOpen, onClose }: BibtexModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pdf-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="pdf-modal-window" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '640px', height: 'auto', maxHeight: '80vh' }}
      >
        <div className="pdf-modal-bar">
          <div className="pdf-modal-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span>BibTeX Citation</span>
          </div>

          <button 
            type="button" 
            onClick={onClose} 
            className="action-btn btn-secondary"
            style={{ padding: '6px 10px', fontSize: '14px', borderRadius: '50%' }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', marginBottom: '16px' }}>
            Cite this paper in your academic research, conference submission, or technical report:
          </p>

          <div className="bibtex-preview" style={{ padding: '16px', fontSize: '12.5px', borderRadius: '8px', background: 'var(--bg-sunken)' }}>
            {BIBTEX_CODE}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', gap: '10px' }}>
            <button 
              type="button" 
              onClick={handleCopy} 
              className="action-btn btn-pdf"
              style={{ width: '100%', justifyContent: 'center', padding: '10px 20px' }}
            >
              {copied ? '✓ Copied to Clipboard!' : 'Copy BibTeX to Clipboard'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
