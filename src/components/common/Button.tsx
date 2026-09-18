import React from 'react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'download' | 'external' | 'none';
  href?: string;
  external?: boolean;
  download?: boolean | string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'none',
  href,
  external,
  download,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FB3640]/50 focus:ring-offset-2 focus:ring-offset-[#050505] disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5 tracking-wide',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2 tracking-normal',
    lg: 'text-base px-6 py-3 rounded-lg gap-2.5 tracking-normal',
  };

  const variantStyles = {
    primary:
      'bg-[#FB3640] text-white hover:bg-[#e02b35] active:bg-[#c9202a] shadow-sm hover:shadow-[0_0_20px_rgba(251,54,64,0.3)]',
    secondary:
      'bg-[#121418] text-neutral-200 border border-white/10 hover:border-white/20 hover:bg-[#181b21] hover:text-white',
    teal:
      'bg-[#004643] text-white hover:bg-[#005a56] border border-[#004643] hover:border-[#0b6b66]',
    outline:
      'bg-transparent text-neutral-300 border border-white/15 hover:border-[#FB3640] hover:text-white hover:bg-[#FB3640]/5',
    ghost:
      'bg-transparent text-neutral-400 hover:text-white hover:bg-white/5',
  };

  const content = (
    <>
      <span>{children}</span>
      {icon === 'arrow' && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
      {icon === 'download' && (
        <Download className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
      )}
      {icon === 'external' && (
        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        className={combinedClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
