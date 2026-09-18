import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { PROFILE_DATA } from '../../data/profile';
import { GraduationCap, MapPin, Flag, Award, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/8 relative bg-[#07080a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="A synthesis of computer science fundamentals, interface craft, and practical problem solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
              Engineering practical digital experiences with disciplined code and thoughtful design.
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              I view software development as both an engineering science and an aesthetic craft. Combining structural
              logic with visual clarity allows me to build applications that are not just technically sound, but
              delightful to interact with.
            </p>

            {/* Focus Pillars */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FB3640] mb-3">
                Core Focus Areas
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {PROFILE_DATA.interests.map((area) => (
                  <div
                    key={area}
                    className="p-2.5 rounded-lg bg-[#0e1117] border border-white/8 text-xs font-medium text-neutral-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004643]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative + Structured Academic Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-invert max-w-none text-neutral-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                I'm a Computer Science and Engineering student at{' '}
                <span className="text-white font-semibold">IUBAT</span> with a strong foundation in modern web
                development and a keen interest in design and emerging technologies. I enjoy solving algorithmic and
                architectural problems, adopting modern frameworks, and turning complex ideas into intuitive digital
                experiences.
              </p>
              <p>
                Beyond standard coursework, I continuously experiment with modern web frameworks, component architectures,
                and user experience patterns. My background in visual media and business operations has further honed my
                communication, resourcefulness, and dedication to high-quality project execution.
              </p>
            </div>

            {/* Personal & Academic Details Table / Cards */}
            <div className="rounded-xl bg-[#090b0f] border border-white/10 p-6 sm:p-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#FB3640]" />
                Academic & Geographic Profile
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                    University
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {PROFILE_DATA.details.university}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                    Degree Program
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {PROFILE_DATA.details.degree}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                    Cumulative GPA
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold font-mono text-white">
                      {PROFILE_DATA.details.cgpa}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">/ 4.00</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      High Standing
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                    Expected Graduation
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {PROFILE_DATA.details.expectedGraduation}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FB3640]" />
                    {PROFILE_DATA.details.location}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                    Nationality
                  </span>
                  <p className="text-sm font-semibold text-neutral-200 flex items-center gap-1.5">
                    <Flag className="w-3.5 h-3.5 text-[#004643]" />
                    {PROFILE_DATA.details.nationality}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
