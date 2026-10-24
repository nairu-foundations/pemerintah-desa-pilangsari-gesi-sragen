import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigation, PageRoute } from '../../context/NavigationContext';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  kicker: string;
  currentPageName: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  kicker,
  currentPageName
}) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-gradient-to-b from-[#111111] via-neutral-900 to-[#111111] text-white pt-10 pb-12 border-b border-yellow-500/30 relative overflow-hidden">
      {/* Subtle theme accents based on Sragen crest colors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFE600]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-4" aria-label="Breadcrumb">
          <button
            onClick={() => navigateTo('beranda')}
            className="flex items-center gap-1 hover:text-[#FFE600] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-[#FFE600] font-medium">{currentPageName}</span>
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          <span className="inline-block px-2.5 py-0.5 rounded bg-[#FFE600]/15 text-[#FFE600] text-[11px] font-bold uppercase tracking-wider border border-[#FFE600]/30 mb-2.5">
            {kicker}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>

      </div>
    </div>
  );
};
