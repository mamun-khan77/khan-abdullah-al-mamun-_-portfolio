import React from 'react';
import { Github, ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projects';
import { Project } from '../../types';
import { SectionHeader } from '../common/SectionHeader';
import { SmartImage } from '../common/SmartImage';
import { Button } from '../common/Button';

export const FeaturedProject: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative rounded-2xl bg-[#090b0f] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden mb-10 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Project Visual Area */}
        <div className="lg:col-span-7 overflow-hidden relative">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0e1117]">
            <SmartImage
              src={project.image}
              alt={project.title}
              aspectRatio="aspect-[16/10]"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              fallbackTitle={project.title}
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b0f] via-transparent to-transparent opacity-60 lg:hidden" />
          </div>

          {/* Number Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#050505]/80 backdrop-blur-md border border-white/10 font-mono text-xs font-bold text-[#FB3640]">
            PROJECT {project.number} • FEATURED
          </div>
        </div>

        {/* Project Content Area */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-6 lg:pr-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#004643]" />
            <span>{project.subtitle || 'Featured Showcase'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Core Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FB3640] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href={project.liveUrl}
              external
              icon="external"
            >
              Live Demo
            </Button>
            <Button
              variant="secondary"
              size="sm"
              href={project.githubUrl}
              external
            >
              <Github className="w-4 h-4 mr-1.5" />
              Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<{ project: Project; isWide?: boolean }> = ({
  project,
  isWide = false,
}) => {
  return (
    <div
      className={`group relative rounded-xl bg-[#090b0f] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isWide ? 'lg:col-span-2' : 'col-span-1'
      }`}
    >
      <div>
        {/* Project Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0e1117]">
          <SmartImage
            src={project.image}
            alt={project.title}
            aspectRatio="aspect-[16/10]"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            fallbackTitle={project.title}
          />
          {/* Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050505]/80 backdrop-blur-md border border-white/10 font-mono text-[11px] font-semibold text-neutral-300">
            {project.number}
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="text-xs font-mono text-neutral-400 mb-1.5">
            {project.subtitle}
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Features list */}
          <ul className="space-y-1.5 mb-5">
            {project.features.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FB3640]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons in card footer */}
      <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-[#FB3640] transition-colors"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const featured = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => p.id !== featured.id);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          title="Selected Work"
          subtitle="Things I've built, designed, and experimented with across web technologies and user interfaces."
        />

        {/* Featured Project Showcase (Large) */}
        <FeaturedProject project={featured} />

        {/* Editorial Secondary Grid (Two side-by-side, then one full/wide) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => {
            // Give the travel app UI a wide span or distinct presence
            const isWide = idx === secondaryProjects.length - 1 && secondaryProjects.length % 2 !== 0;
            return <ProjectCard key={project.id} project={project} isWide={isWide} />;
          })}
        </div>

        {/* GitHub archive note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500 font-mono">
            More experimental scripts and coursework repositories available on{' '}
            <a
              href="https://github.com/mamun-khan77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline underline-offset-4 hover:text-[#FB3640] transition-colors"
            >
              GitHub @mamun-khan77
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
