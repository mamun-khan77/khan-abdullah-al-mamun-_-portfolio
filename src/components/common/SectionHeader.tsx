import React from 'react';

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {number && (
        <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="font-mono text-xs font-semibold tracking-widest text-[#FB3640] uppercase">
            {number}
          </span>
          <span className="w-8 h-px bg-white/10" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
