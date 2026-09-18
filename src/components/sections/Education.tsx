import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { EDUCATION_DATA } from '../../data/education';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          title="Academic Education"
          subtitle="Formal foundations in computer science theory, algorithms, engineering principles, and physical sciences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((item, index) => {
            const isBSc = index === 0;

            return (
              <div
                key={item.id}
                className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isBSc
                    ? 'bg-[#090c11] border-2 border-white/20 shadow-xl ring-1 ring-[#FB3640]/20'
                    : 'bg-[#08090d] border border-white/8 hover:border-white/15'
                }`}
              >
                <div>
                  {/* Top Bar with Badge & Period */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded font-bold ${
                        isBSc
                          ? 'bg-[#FB3640] text-white'
                          : 'bg-white/5 text-neutral-400 border border-white/8'
                      }`}
                    >
                      {isBSc ? 'Undergraduate Degree' : 'Secondary Education'}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm font-semibold text-neutral-300 mb-4">
                    {item.institution}
                  </p>

                  {/* GPA / Score Display */}
                  <div className="p-3.5 rounded-lg bg-[#050608] border border-white/6 mb-6 flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400">Score / Standing:</span>
                    <span className="font-mono text-sm font-bold text-white">
                      {item.grade}
                    </span>
                  </div>

                  {/* Academic Highlights */}
                  {item.highlights && (
                    <ul className="space-y-2 mb-6">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#004643] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer Location */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FB3640]" />
                    {item.location}
                  </span>
                  <span>{item.field}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
