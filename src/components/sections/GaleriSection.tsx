import React, { useState, useEffect, useCallback } from 'react';
import { Image, X, ChevronLeft, ChevronRight, Maximize2, Calendar, Tag } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useApp } from '../../context/AppContext';
import { GaleriItem } from '../../types';

interface GaleriSectionProps {
  defaultFilter?: string;
  showHeader?: boolean;
}

export const GaleriSection: React.FC<GaleriSectionProps> = ({ 
  defaultFilter = 'Semua',
  showHeader = true 
}) => {
  const { galeriList } = useApp();
  const [filter, setFilter] = useState<string>(defaultFilter);

  React.useEffect(() => {
    if (defaultFilter) {
      setFilter(defaultFilter);
    }
  }, [defaultFilter]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['Semua', 'Pembangunan', 'Budaya', 'Pertanian', 'Kemasyarakatan'];

  const filteredItems = filter === 'Semua'
    ? galeriList
    : galeriList.filter(item => item.kategori === filter);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section 
      id="galeri" 
      className={`bg-white relative ${showHeader ? 'py-20' : 'pt-4 pb-16'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeader && (
          <SectionHeader
            kicker="DOKUMENTASI DESA"
            title="Galeri Kegiatan & Potret Desa"
            subtitle="Potret gotong royong, dinamika kemasyarakatan, pembangunan infrastruktur, dan kekayaan alam Desa Pilangsari."
          />
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setLightboxIndex(null); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#111111] text-[#FFE600] shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-100 aspect-4/3 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-neutral-200"
            >
              <img
                src={item.gambarUrl}
                alt={item.judul}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="inline-block px-2 py-0.5 rounded bg-[#FFE600] text-[#111111] text-[10px] font-bold uppercase tracking-wider mb-1.5 w-max">
                  {item.kategori}
                </span>
                <h4 className="font-heading font-bold text-sm sm:text-base leading-snug text-white">
                  {item.judul}
                </h4>
                <p className="text-[11px] text-neutral-300 mt-1 line-clamp-2">
                  {item.deskripsi}
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#FFE600]" />
                    {item.tanggal}
                  </span>
                  <span className="flex items-center gap-1 text-[#FFE600] font-semibold">
                    <Maximize2 className="w-3 h-3" />
                    Perbesar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Tutup Galeri"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div 
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl max-h-[70vh] flex items-center justify-center bg-neutral-900">
              <img
                src={activeItem.gambarUrl}
                alt={activeItem.judul}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-white text-center max-w-2xl w-full">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-[#FFE600] text-[#111111] text-[10px] font-bold uppercase tracking-wider">
                  {activeItem.kategori}
                </span>
                <span className="text-xs text-neutral-400">· {activeItem.tanggal}</span>
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                {activeItem.judul}
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                {activeItem.deskripsi}
              </p>
              <div className="mt-2 text-[11px] text-neutral-500 font-mono">
                Foto {(lightboxIndex ?? 0) + 1} dari {filteredItems.length} (Gunakan tombol panah keyboard)
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
