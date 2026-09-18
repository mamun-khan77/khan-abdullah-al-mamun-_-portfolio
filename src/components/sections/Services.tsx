import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { SERVICES_DATA } from '../../data/services';
import { Globe, Layout, Smartphone, Bug, Gauge, Wrench, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Globe className="w-5 h-5 text-[#FB3640]" />;
      case 1:
        return <Layout className="w-5 h-5 text-[#004643]" />;
      case 2:
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Bug className="w-5 h-5 text-amber-400" />;
      case 4:
        return <Gauge className="w-5 h-5 text-sky-400" />;
      case 5:
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/8 relative bg-[#07080a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          title="What I Can Do"
          subtitle="Practical technical capabilities, frontend implementations, and software services I offer for teams, projects, and internships."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            return (
              <div
                key={service.number}
                className="group rounded-xl bg-[#090b0f] border border-white/8 hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  {/* Top line with service number & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#101319] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(index)}
                    </div>
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-neutral-100 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/4 text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
