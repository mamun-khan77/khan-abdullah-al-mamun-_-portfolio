import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { CERTIFICATIONS_DATA } from '../../data/certifications';
import { CertificationItem } from '../../types';
import { SmartImage } from '../common/SmartImage';
import { ImageModal } from '../common/ImageModal';
import { Award, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          title="Certifications & Credentials"
          subtitle="Accredited technical specializations in full-stack web development, frontend engineering, and computer systems support."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert) => {
            return (
              <div
                key={cert.id}
                className="group rounded-xl bg-[#090b0f] border border-white/10 hover:border-white/20 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md"
              >
                <div>
                  {/* Certificate Image Thumbnail with Preview Trigger */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/10] overflow-hidden bg-[#0d0f14] cursor-pointer"
                  >
                    <SmartImage
                      src={cert.image}
                      alt={cert.title}
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      fallbackTitle={cert.title}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        Preview Certificate
                      </span>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-[#050505]/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-neutral-300">
                      {cert.year}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-xs font-mono text-[#FB3640] mb-1 font-semibold uppercase tracking-wider">
                      {cert.issuer}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neutral-100 transition-colors">
                      {cert.title}
                    </h3>

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/4 text-neutral-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </button>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FB3640] hover:text-[#e02b35] transition-colors"
                  >
                    <span>Verify Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for viewing certificate details */}
        {selectedCert && (
          <ImageModal
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            title={selectedCert.title}
            issuer={selectedCert.issuer}
            subtitle={`Year: ${selectedCert.year}`}
            image={selectedCert.image}
            verificationUrl={selectedCert.verificationUrl}
            credentialId={selectedCert.credentialId}
            skills={selectedCert.skills}
          />
        )}
      </div>
    </section>
  );
};
