import React, { useState } from 'react';
import { 
  X, 
  Folder, 
  Copy, 
  Check, 
  Image as ImageIcon, 
  Info, 
  Sparkles, 
  Layers,
  Search,
  Eye,
  CheckCircle2,
  FolderOpen,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { FOTO_DESA_CATALOG, FotoDesaItem } from '../../constants/images';

interface MediaManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaManagerModal: React.FC<MediaManagerModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<FotoDesaItem | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Semua Foto', count: FOTO_DESA_CATALOG.length },
    { id: 'brand', label: '1. Brand / Logo', count: FOTO_DESA_CATALOG.filter(i => i.kategori === 'brand').length },
    { id: 'hero', label: '2. Hero Banner', count: FOTO_DESA_CATALOG.filter(i => i.kategori === 'hero').length },
    { id: 'profil', label: '3. Profil & Balai', count: FOTO_DESA_CATALOG.filter(i => i.kategori === 'profil').length },
    { id: 'perangkat', label: '4. Pamong Desa', count: FOTO_DESA_CATALOG.filter(i => i.kategori === 'perangkat').length },
    { id: 'berita', label: '5. Warta Berita', count: FOTO_DESA_CATALOG.filter(i => i.kategori === 'berita').length },
    { id: 'galeri', label: '6. Galeri Kegiatan', count: FOTO_DESA_CATALOG.filter(i => i.kategori === 'galeri').length },
    { id: 'umkm', label: '7. Produk UMKM', count: FOTO_DESA_CATALOG.filter(i => i.kategori === 'umkm').length },
  ];

  const filteredItems = FOTO_DESA_CATALOG.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.kategori === selectedCategory;
    const matchesQuery = 
      item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.namaBerkas.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lokasiFolder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keterangan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleCopy = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-neutral-300 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-5 sm:p-6 flex items-start justify-between border-b border-neutral-700">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFE600] text-neutral-900 text-xs font-extrabold uppercase tracking-wider">
                <FolderOpen className="w-3.5 h-3.5" />
                Pusat 1 Folder Terproteksi
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Terisolasi dari Public (Aman Hosting)
              </span>
              <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                src/foto-desa/
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              Struktur & Panduan Ganti Foto Desa
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              Seluruh foto dipusatkan di <strong>1 folder tunggal: <code className="text-[#FFE600]">src/foto-desa/</code></strong>. Foto aman dari intip publik saat online karena di-bundle & di-hash oleh Vite.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Petunjuk Praktis & Security Banner */}
        <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-3 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-emerald-950">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Keamanan Hosting Aktif:</strong> Foto sudah <strong>dipisahkan dari folder public</strong>. Ganti foto di folder 
              <code className="mx-1 px-1.5 py-0.5 bg-emerald-100/90 rounded font-mono font-bold text-emerald-900 border border-emerald-300">
                src/foto-desa/
              </code>
              dengan nama berkas yang sama, lalu compile / deploy dengan aman.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-emerald-800 font-medium">Total: <strong>{FOTO_DESA_CATALOG.length} Titik Foto</strong></span>
          </div>
        </div>

        {/* Filter & Pencarian Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 bg-neutral-50 space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama foto / nama berkas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-neutral-300 text-xs text-neutral-800 focus:outline-hidden focus:border-[#E53935] focus:ring-1 focus:ring-[#E53935]"
              />
            </div>

            {/* Category tabs scrollable */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0 scrollbar-thin">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-neutral-900 text-[#FFE600] shadow-xs'
                      : 'bg-white text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Daftar Foto Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <ImageIcon className="w-12 h-12 mx-auto text-neutral-300 mb-2" />
              <p className="text-sm font-semibold">Tidak ada foto yang cocok dengan pencarian.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl border border-neutral-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
                >
                  {/* Image Preview Box */}
                  <div className="relative h-44 bg-neutral-100 overflow-hidden border-b border-neutral-100 flex items-center justify-center">
                    <img 
                      src={item.urlWeb} 
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80';
                      }}
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[#FFE600] text-[10px] font-mono font-bold uppercase">
                      {item.kategori}
                    </div>
                    <button
                      onClick={() => setPreviewItem(item)}
                      className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-white/90 hover:bg-white text-neutral-800 shadow-xs text-xs font-semibold flex items-center gap-1 transition-opacity cursor-pointer"
                      title="Lihat Pratinjau Penuh"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Lihat</span>
                    </button>
                  </div>

                  {/* Details Card */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="font-heading font-bold text-sm text-neutral-900 leading-snug">
                        {item.nama}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                        {item.keterangan}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-neutral-100">
                      {/* Target File Path */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
                          <span className="font-semibold flex items-center gap-1">
                            <Folder className="w-3 h-3 text-[#E53935]" />
                            Letak File di Folder Project:
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-neutral-100 px-2.5 py-1.5 rounded-lg border border-neutral-200">
                          <span className="text-xs font-mono font-semibold text-neutral-800 truncate select-all">
                            {item.lokasiFolder}{item.namaBerkas}
                          </span>
                          <button
                            onClick={() => handleCopy(`${item.lokasiFolder}${item.namaBerkas}`)}
                            className="ml-2 p-1 text-neutral-500 hover:text-[#E53935] hover:bg-white rounded transition-colors shrink-0 cursor-pointer"
                            title="Salin Jalur File"
                          >
                            {copiedPath === `${item.lokasiFolder}${item.namaBerkas}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Recommended Resolution Badge */}
                      <div className="flex items-center justify-between text-[11px] bg-yellow-50 px-2.5 py-1.5 rounded-lg border border-yellow-200/80">
                        <span className="text-neutral-600 font-medium">Resolusi Rekomendasi:</span>
                        <strong className="text-neutral-900 font-bold font-mono text-[10px] sm:text-[11px]">
                          {item.resolusi}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Modal */}
        <div className="p-4 sm:p-5 bg-neutral-100 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Dokumentasi lengkap tersimpan di berkas <strong>src/foto-desa/README.md</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCopy('src/foto-desa/')}
              className="px-3 py-1.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold cursor-pointer flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Path Root (src/foto-desa/)</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>

      {/* Modal Single Photo Preview Overlay */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="bg-neutral-950 rounded-2xl max-w-3xl w-full p-4 border border-neutral-800 text-white space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div>
                <h3 className="font-bold text-base text-white">{previewItem.nama}</h3>
                <p className="text-xs text-neutral-400 font-mono">{previewItem.lokasiFolder}{previewItem.namaBerkas}</p>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[65vh] flex items-center justify-center bg-black/60 rounded-xl overflow-hidden p-2">
              <img 
                src={previewItem.urlWeb} 
                alt={previewItem.nama} 
                className="max-h-[60vh] max-w-full object-contain rounded"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-neutral-800">
              <span>Resolusi Ideal: <strong className="text-[#FFE600]">{previewItem.resolusi}</strong></span>
              <button
                onClick={() => handleCopy(`${previewItem.lokasiFolder}${previewItem.namaBerkas}`)}
                className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5"
              >
                <Copy className="w-3 h-3" />
                <span>Salin Path File</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
