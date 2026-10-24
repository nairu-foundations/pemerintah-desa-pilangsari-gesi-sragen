import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {kicker && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E53935] mb-2">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#111111] tracking-tight text-balance">
        {title}
      </h2>
      
      {/* Signature Yellow-to-Red Accent Line */}
      <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r from-[#FFE600] via-[#E53935] to-[#2E9E3E] my-3.5 ${
        centered ? 'mx-auto' : ''
      }`} />

      {subtitle && (
        <p className={`text-neutral-600 text-sm sm:text-base max-w-2xl text-balance ${
          centered ? 'mx-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
