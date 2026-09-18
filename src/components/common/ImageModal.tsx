import React, { useEffect } from 'react';
import { X, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  subtitle?: string;
  issuer?: string;
  verificationUrl?: string;
  credentialId?: string;
  skills?: string[];
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  title,
  image,
  subtitle,
  issuer,
  verificationUrl,
  credentialId,
  skills,
}) => {
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0d0f14] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b0e]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#004643]/30 border border-[#004643] flex items-center justify-center text-[#FB3640]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-sm sm:text-base font-semibold text-white">
                {title}
              </h3>
              {issuer && (
                <p className="text-xs text-neutral-400">
                  {issuer} {subtitle ? `• ${subtitle}` : ''}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview */}
        <div className="relative bg-[#050505] p-2 sm:p-4 overflow-y-auto max-h-[60vh] flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-h-[50vh] object-contain rounded-lg border border-white/5"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/og-image.jpg';
            }}
          />
        </div>

        {/* Footer info & verify button */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#090b0e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            {credentialId && (
              <p className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004643]" />
                <span className="text-neutral-500">Credential ID:</span> {credentialId}
              </p>
            )}
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skills.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {verificationUrl && (
              <Button
                variant="primary"
                size="sm"
                href={verificationUrl}
                external
                icon="external"
              >
                Verify Credential
              </Button>
            )}
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
