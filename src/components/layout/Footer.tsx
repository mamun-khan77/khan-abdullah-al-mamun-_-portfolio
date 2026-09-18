import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { PROFILE_DATA, SOCIAL_LINKS } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-white/8 bg-[#050505] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#FB3640] text-white flex items-center justify-center font-mono text-xs font-bold">
                {PROFILE_DATA.monogram}
              </div>
              <span className="text-white font-semibold text-sm tracking-tight">
                {PROFILE_DATA.fullName}
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono max-w-sm">
              CSE Student • Developer • Designer • Problem Solver
            </p>
            <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
              International University of Business Agriculture and Technology (IUBAT). Available for internships, web engineering roles, and innovative digital collaborations.
            </p>
            <div className="flex items-center gap-4 text-neutral-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#004643]" />
                Dhaka, Bangladesh
              </span>
              <a
                href={`mailto:${PROFILE_DATA.details.email}`}
                className="flex items-center gap-1.5 text-neutral-300 hover:text-[#FB3640] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FB3640]" />
                {PROFILE_DATA.details.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Work', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-400 hover:text-[#FB3640] transition-colors group"
                >
                  <span className="p-1 rounded bg-white/5 group-hover:bg-white/10 text-neutral-300 group-hover:text-white transition-colors">
                    {getSocialIcon(link.name)}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 font-mono text-[11px]">
            © 2026 Khan Abdullah Al Mamun. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
