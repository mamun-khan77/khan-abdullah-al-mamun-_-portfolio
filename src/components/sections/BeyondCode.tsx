import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { INTERESTS_DATA } from '../../data/interests';
import { Camera, Film, CalendarDays, Mic, Compass, Sparkles } from 'lucide-react';

export const BeyondCode: React.FC = () => {
  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'cinematography':
        return <Film className="w-5 h-5 text-[#FB3640]" />;
      case 'photography':
        return <Camera className="w-5 h-5 text-[#004643]" />;
      case 'event-management':
        return <CalendarDays className="w-5 h-5 text-amber-400" />;
      case 'public-speaking':
        return <Mic className="w-5 h-5 text-sky-400" />;
      case 'travelling':
        return <Compass className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="beyond-code" className="py-20 md:py-28 border-t border-white/8 relative bg-[#07080a]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          title="Beyond Code"
          subtitle="Creative disciplines and leadership pursuits that shape my perspective, optical judgment, and collaborative stamina."
        />

        {/* Horizontal Card Reel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS_DATA.map((item, index) => {
            return (
              <div
                key={item.id}
                className="group relative rounded-xl bg-[#090b0f] border border-white/8 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 overflow-hidden"
              >
                {/* Subtle corner light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-bl-full pointer-events-none group-hover:bg-[#FB3640]/5 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#11141a] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getInterestIcon(item.id)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-white/5">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight group-hover:text-neutral-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[#FB3640] mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Interest #{index + 1}</span>
                  <span className="text-neutral-400">Creative Domain</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
