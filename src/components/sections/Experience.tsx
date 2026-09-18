import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { EXPERIENCE_DATA } from '../../data/experience';
import { Briefcase, Camera, TrendingUp, PenTool, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'creative':
        return <Camera className="w-4 h-4 text-[#FB3640]" />;
      case 'entrepreneurial':
        return <TrendingUp className="w-4 h-4 text-[#004643]" />;
      case 'professional':
        return <PenTool className="w-4 h-4 text-neutral-300" />;
      default:
        return <Briefcase className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/8 relative bg-[#07080a]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          title="Experience & Roles"
          subtitle="Real-world leadership, creative direction, and operational execution across diverse endeavors."
        />

        {/* Chronological Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {EXPERIENCE_DATA.map((item, index) => {
            const isPresent = item.period.toLowerCase().includes('present');

            return (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    isPresent
                      ? 'bg-[#FB3640] border-[#050505] ring-4 ring-[#FB3640]/20'
                      : 'bg-[#12151b] border-white/20 group-hover:border-white/50'
                  }`}
                />

                {/* Left Date column on desktop */}
                <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-neutral-400 mb-2 md:mb-0 md:text-right md:w-28">
                  <span className="flex items-center md:justify-end gap-1.5">
                    <Calendar className="w-3 h-3 text-neutral-500" />
                    {item.period}
                  </span>
                </div>

                {/* Content Box */}
                <div className="rounded-xl bg-[#090b0f] border border-white/10 hover:border-white/20 transition-all duration-200 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#11141a] border border-white/8 flex items-center justify-center">
                        {getExperienceIcon(item.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-neutral-300">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isPresent && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#004643]/30 text-teal-300 border border-[#004643]/60">
                          Active
                        </span>
                      )}
                      {item.location && (
                        <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mt-4 mb-5">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-4 border-t border-white/5">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs font-mono text-neutral-400"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#004643] shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
