import React from 'react';
import { ArrowRight, Download, Sparkles, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/profile';
import { SmartImage } from '../common/SmartImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Atmospheric Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#004643]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FB3640]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status / Field Label */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#004643]/30 border border-[#004643]/60 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </span>
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                COMPUTER SCIENCE & ENGINEERING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Khan Abdullah <br />
              <span className="text-neutral-100">Al Mamun</span>
            </h1>

            {/* Dynamic Role Line */}
            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-medium text-neutral-300 mb-6">
              <span className="text-[#FB3640] font-semibold">Developer</span>
              <span className="text-white/20">•</span>
              <span className="text-neutral-200">Designer</span>
              <span className="text-white/20">•</span>
              <span className="text-[#FB3640] font-semibold">Problem Solver</span>
            </div>

            {/* Concise Bio */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              I'm a Computer Science and Engineering student at{' '}
              <strong className="text-white font-medium">IUBAT</strong> with a strong foundation in modern web
              development, UI/UX design, problem solving, and emerging technologies. I enjoy engineering practical,
              accessible digital products while continuously learning and refining my craft.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FB3640] text-white text-sm font-semibold tracking-wide hover:bg-[#e02b35] transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(251,54,64,0.35)] active:translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.cvPath}
                download="Khan-Abdullah-Al-Mamun-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#111317] text-neutral-200 hover:text-white border border-white/10 hover:border-white/20 hover:bg-[#181b22] text-sm font-medium transition-all duration-200 active:translate-y-0.5"
              >
                <Download className="w-4 h-4 text-neutral-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-400 hover:text-[#FB3640] transition-colors group"
              >
                <span>Let's Connect</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/8 w-full grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block text-xl font-bold font-mono text-white">3.67</span>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  CGPA @ IUBAT
                </span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">2026</span>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Graduation
                </span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">Dhaka</span>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Bangladesh
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Asymmetric Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Accent Red Line (Top-Right Angle) */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#FB3640] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#004643] z-20 pointer-events-none" />

              {/* Main Portrait Box with Asymmetric Clipping & Border */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0c10] border border-white/10 shadow-2xl shadow-black/80">
                <SmartImage
                  src={PROFILE_DATA.profileImage}
                  alt={PROFILE_DATA.fullName}
                  aspectRatio="aspect-[4/5]"
                  className="w-full object-cover object-top hover:scale-[1.02] transition-all duration-700"
                  fallbackTitle="Khan Abdullah Al Mamun"
                />

                {/* Subtle Gradient Scrim at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent pointer-events-none opacity-80" />

                {/* Bottom Floating Metadata Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0d0f14]/90 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#004643]/40 border border-[#004643] flex items-center justify-center text-teal-300">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">B.Sc in CSE</p>
                        <p className="text-[11px] text-neutral-400 font-mono">IUBAT • Expected 2026</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-300">
                        <MapPin className="w-3 h-3 text-[#FB3640]" />
                        Dhaka
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal floating tech chip */}
              <div className="hidden sm:flex absolute -top-4 -left-6 px-3 py-1.5 rounded-lg bg-[#12151b] border border-white/10 shadow-md items-center gap-2 text-xs font-mono text-neutral-300 z-20">
                <Sparkles className="w-3.5 h-3.5 text-[#FB3640]" />
                <span>Web Dev & UI/UX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
