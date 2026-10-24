import React, { useEffect } from 'react';
import { X, User, Eye, MessageCircle, Copy, Check, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NewsDetailModal: React.FC = () => {
  const { selectedBerita, setSelectedBerita, beritaList, showToast } = useApp();
  const [isCopied, setIsCopied] = React.useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBerita) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedBerita]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedBerita) {
        setSelectedBerita(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedBerita, setSelectedBerita]);

  if (!selectedBerita) return null;

  const relatedNews = beritaList
    .filter(b => b.id !== selectedBerita.id)
    .slice(0, 2);

  const handleCopyLink = () => {
    const url = window.location.href.split('#')[0] + `#berita/${selectedBerita.slug}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    showToast('Tautan berita berhasil disalin ke clipboard!', 'success');
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleShareWA = () => {
    const text = encodeURIComponent(
      `*${selectedBerita.judul}*\n\nBaca warta resmi Pemerintah Desa Pilangsari, Kec. Gesi, Kab. Sragen di website resmi desa.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-2xs flex sm:items-center justify-center p-0 sm:p-4 overflow-y-auto overscroll-contain animate-fadeIn"
      onClick={() => setSelectedBerita(null)}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white w-full sm:rounded-2xl max-w-2xl min-h-screen sm:min-h-0 sm:max-h-[90vh] overflow-y-auto shadow-2xl border-0 sm:border border-neutral-200 sm:my-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimalist Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-neutral-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2.5 py-0.5 rounded bg-[#FFE600] text-[#111111] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shrink-0">
              {selectedBerita.kategori}
            </span>
            <span className="text-xs text-neutral-400">·</span>
            <span className="text-xs text-neutral-500 truncate">{selectedBerita.tanggal}</span>
          </div>

          <button
            onClick={() => setSelectedBerita(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-neutral-800 text-xs font-bold transition-colors cursor-pointer shrink-0"
            aria-label="Tutup Rincian Berita"
          >
            <X className="w-4 h-4 text-neutral-700" />
            <span>Tutup</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-7 space-y-5 flex-1">
          {/* Headline */}
          <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-[#111111] leading-snug">
            {selectedBerita.judul}
          </h2>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-neutral-500 pb-3 border-b border-neutral-100">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span>Oleh: <strong className="text-neutral-700">{selectedBerita.penulis}</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span>{selectedBerita.dibaca} kali dibaca</span>
            </span>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden bg-neutral-100 aspect-16/9 border border-neutral-200/60 shadow-2xs">
            <img
              src={selectedBerita.gambarUrl}
              alt={selectedBerita.judul}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Article Full Text */}
          <div className="text-neutral-800 text-sm sm:text-base leading-relaxed space-y-3.5 whitespace-pre-line font-body pt-1">
            {selectedBerita.isiLengkap}
          </div>

          {/* Minimalist Social Share Strip */}
          <div className="pt-5 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Bagikan Kabar Desa:
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShareWA}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs font-semibold shadow-2xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 active:scale-98 text-neutral-800 text-xs font-semibold border border-neutral-200 transition-all cursor-pointer"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{isCopied ? 'Tersalin' : 'Salin Tautan'}</span>
              </button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedNews.length > 0 && (
            <div className="pt-5 border-t border-neutral-200 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-600">
                Warta Desa Terkait Lainnya:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedNews.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => setSelectedBerita(rel)}
                    className="p-3 rounded-xl border border-neutral-200 hover:border-yellow-400 cursor-pointer transition-all bg-neutral-50/60 hover:bg-yellow-50/20 active:scale-99"
                  >
                    <span className="text-[10px] font-bold text-[#E53935] uppercase tracking-wider">{rel.kategori}</span>
                    <h5 className="font-heading font-bold text-xs text-neutral-900 mt-1 line-clamp-2 leading-snug">
                      {rel.judul}
                    </h5>
                    <span className="text-[11px] text-neutral-400 mt-1 block">{rel.tanggal}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Button on Mobile */}
          <div className="pt-3 pb-2 sm:hidden">
            <button
              onClick={() => setSelectedBerita(null)}
              className="w-full py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Warta Berita</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
