import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { SKILL_CATEGORIES } from '../../data/skills';
import { Code2, Palette, FileText, Users, Sparkles, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'development':
        return <Code2 className="w-4 h-4 text-[#FB3640]" />;
      case 'design':
        return <Palette className="w-4 h-4 text-[#004643]" />;
      case 'productivity':
        return <FileText className="w-4 h-4 text-amber-400" />;
      case 'professional':
        return <Users className="w-4 h-4 text-sky-400" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          title="Skills & Technologies"
          subtitle="A disciplined technical stack and collaborative toolset applied across software engineering and product design."
        />

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-white text-black font-semibold shadow-xs'
                : 'bg-[#101217] text-neutral-400 hover:text-white hover:bg-[#181b22] border border-white/8'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'bg-[#101217] text-neutral-400 hover:text-white hover:bg-[#181b22] border border-white/8'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const isTechnical = category.id === 'development' || category.id === 'design';

            return (
              <div
                key={category.id}
                className={`rounded-xl bg-[#090b0f] border transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between ${
                  isTechnical
                    ? 'border-white/12 hover:border-white/25 shadow-lg'
                    : 'border-white/8 bg-[#08090d]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#12151b] border border-white/10 flex items-center justify-center">
                        {getCategoryIcon(category.id)}
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                    </div>
                    {isTechnical && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#FB3640]/10 text-[#FB3640] border border-[#FB3640]/20 font-semibold">
                        Core Focus
                      </span>
                    )}
                  </div>

                  {category.description && (
                    <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                  )}

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      if (skill.highlight) {
                        return (
                          <div
                            key={skill.name}
                            className="group px-3.5 py-2 rounded-lg bg-[#11141b] border border-white/12 text-xs font-mono font-medium text-white flex items-center gap-2 hover:border-[#FB3640] hover:bg-[#161a24] transition-all"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FB3640] group-hover:scale-125 transition-transform" />
                            <span>{skill.name}</span>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={skill.name}
                          className="px-3 py-1.5 rounded-md bg-white/4 border border-white/6 text-xs font-mono text-neutral-400 hover:text-neutral-200 hover:border-white/10 transition-colors"
                        >
                          {skill.name}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footnote for category */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-neutral-400">Production verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
