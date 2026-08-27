'use client';

import { useEffect } from 'react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  title?: string;
}

export function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl = '/assets/acri_capability_resolver_paper.pdf',
  title = 'acri: A Client-Side Capability Resolver for Tool-Augmented Language Models (IEEE Format PDF)'
}: PdfModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="pdf-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pdf-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* MODAL HEADER */}
        <div className="pdf-modal-bar">
          <div className="pdf-modal-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '600px' }}>
              {title}
            </span>
          </div>

          <div className="pdf-modal-actions">
            <a 
              href={pdfUrl} 
              download="acri_capability_resolver_paper.pdf" 
              className="action-btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>

            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Full Tab
            </a>

            <button 
              type="button" 
              onClick={onClose} 
              className="action-btn btn-secondary"
              style={{ padding: '6px 10px', fontSize: '14px', borderRadius: '50%' }}
              aria-label="Close PDF Viewer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* EMBEDDED PDF VIEWER */}
        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
          className="pdf-frame"
          title={title}
        />
      </div>
    </div>
  );
}
