import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Normalize path if needed (e.g. ensure starts with /)
  const normalizedSrc = src.startsWith('http') || src.startsWith('/') ? src : `/${src}`;

  return (
    <div className={`relative overflow-hidden bg-[#0a0c10] ${aspectRatio} ${className}`}>
      {/* Skeleton / Ambient background while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#111317] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#FB3640]/30 border-t-[#FB3640] rounded-full animate-spin" />
        </div>
      )}

      {/* Main Image */}
      {!hasError ? (
        <img
          src={normalizedSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
          loading="lazy"
          {...props}
        />
      ) : (
        /* Bespoke Editorial Fallback Placeholder if user hasn't put the image yet */
        <div className="absolute inset-0 bg-[#0c0e12] border border-white/5 flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FB3640_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#004643]/30 border border-[#004643] flex items-center justify-center text-[#FB3640] font-mono text-xs font-bold">
              KAM
            </div>
            <span className="text-xs font-mono tracking-wider text-neutral-300 font-medium uppercase">
              {fallbackTitle || alt}
            </span>
            <span className="text-[10px] font-mono text-neutral-500">
              Path: {src}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
