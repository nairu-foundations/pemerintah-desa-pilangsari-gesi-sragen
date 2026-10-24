import React, { useState } from 'react';
import { 
  Newspaper, 
  Bell, 
  Calendar, 
  Clock, 
  MapPin, 
  Eye, 
  ArrowRight, 
  Share2, 
  AlertTriangle,
  FileDown,
  CalendarCheck
} from 'lucide-react';
import { LogoDesa } from '../common/LogoDesa';
import { SectionHeader } from '../common/SectionHeader';
import { useApp } from '../../context/AppContext';
import { Berita } from '../../types';

interface InformasiSectionProps {
  defaultTab?: 'berita' | 'pengumuman' | 'agenda';
  showHeader?: boolean;
}

export const InformasiSection: React.FC<InformasiSectionProps> = ({ 
  defaultTab = 'berita',
  showHeader = true 
}) => {
  const { beritaList, pengumumanList, agendaList, setSelectedBerita } = useApp();
  const [activeTab, setActiveTab] = useState<'berita' | 'pengumuman' | 'agenda'>(defaultTab);

  React.useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);
  const [kategoriBerita, setKategoriBerita] = useState<string>('Semua');

  const filteredBerita = kategoriBerita === 'Semua' 
    ? beritaList 
    : beritaList.filter(b => b.kategori === kategoriBerita);

  return (
    <section 
      id="informasi" 
      className={`bg-[#FFFBE6]/40 relative border-b border-yellow-100 ${
        showHeader ? 'py-20' : 'pt-4 pb-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeader && (
          <SectionHeader
            kicker="KABAR & TRANSPARANSI PUBLIK"
            title="Pusat Informasi & Kegiatan Desa"
            subtitle="Dapatkan warta terbaru pembangunan desa, pengumuman penting bagi warga, serta jadwal agenda kemasyarakatan."
          />
        )}

        {/* 3 Information Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 bg-neutral-200/70 rounded-xl max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab('berita')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'berita'
                ? 'bg-white text-[#111111] shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Newspaper className="w-4 h-4 text-[#2D8FD5]" />
            <span>Warta Berita ({beritaList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('pengumuman')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'pengumuman'
                ? 'bg-white text-[#111111] shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Bell className="w-4 h-4 text-[#E53935]" />
            <span>Pengumuman ({pengumumanList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('agenda')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'agenda'
                ? 'bg-white text-[#111111] shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#2E9E3E]" />
            <span>Agenda Desa ({agendaList.length})</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: BERITA DESA                                           */}
        {/* ============================================================ */}
        {activeTab === 'berita' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Category Filter for News */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs text-neutral-500 font-semibold mr-1">Kategori:</span>
              {['Semua', 'Pertanian', 'Pemerintahan', 'Kesehatan', 'Sosial & Budaya'].map((kat) => (
                <button
                  key={kat}
                  onClick={() => setKategoriBerita(kat)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    kategoriBerita === kat
                      ? 'bg-[#111111] text-[#FFE600]'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBerita.map((berita) => (
                <article
                  key={berita.id}
                  onClick={() => setSelectedBerita(berita)}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-xl hover:border-yellow-400 -translate-y-0 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between card-interactive"
                >
                  <div>
                    {/* Image with smooth zoom micro-interaction */}
                    <div className="relative h-48 bg-neutral-100 overflow-hidden">
                      <img
                        src={berita.gambarUrl}
                        alt={berita.judul}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#111111]/85 backdrop-blur-xs text-[#FFE600] text-[11px] font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                        {berita.kategori}
                      </span>
                    </div>

                    {/* Metadata & Headline */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2.5">
                        <span>{berita.tanggal}</span>
                        <span aria-hidden="true">·</span>
                        <span>{berita.penulis.split(' ')[0]}</span>
                      </div>

                      <h3 className="text-base font-heading font-bold text-[#111111] group-hover:text-[#E53935] transition-colors leading-snug line-clamp-2">
                        {berita.judul}
                      </h3>

                      <p className="text-xs text-neutral-600 mt-2.5 line-clamp-3 leading-relaxed">
                        {berita.ringkasan}
                      </p>
                    </div>
                  </div>

                  {/* Footer Card */}
                  <div className="p-5 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{berita.dibaca} kali</span>
                    </span>
                    <span className="text-[#2D8FD5] font-semibold flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                      Baca Lengkap <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: PENGUMUMAN PENTING                                    */}
        {/* ============================================================ */}
        {activeTab === 'pengumuman' && (
          <div className="max-w-4xl mx-auto space-y-4 animate-fadeIn">
            {pengumumanList.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-2xl bg-white border border-l-4 transition-all duration-300 card-interactive hover:-translate-y-1 hover:shadow-lg ${
                  item.isPenting 
                    ? 'border-neutral-200 border-l-[#E53935] shadow-xs bg-gradient-to-r from-red-50/30 via-white to-white' 
                    : 'border-neutral-200 border-l-[#2D8FD5] hover:border-l-blue-600'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {item.isPenting && (
                      <span className="px-2.5 py-0.5 rounded bg-[#E53935] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 animate-pulseSubtle">
                        <AlertTriangle className="w-3 h-3" />
                        PENTING
                      </span>
                    )}
                    <span className="text-xs text-neutral-500">
                      Dipublikasikan: {item.tanggal}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    Sekretariat Pemdes Pilangsari
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-[#111111]">
                  {item.judul}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mt-2">
                  {item.isi}
                </p>

                {item.lampiranNama && (
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-neutral-600 flex items-center gap-1.5 font-medium">
                      <FileDown className="w-4 h-4 text-[#2D8FD5]" />
                      <span>Lampiran: {item.lampiranNama}</span>
                    </span>
                    <button
                      onClick={() => alert(`Mengunduh dokumen: ${item.lampiranNama}`)}
                      className="px-3 py-1 rounded-md bg-neutral-100 hover:bg-[#FFE600] hover:text-[#111111] text-xs font-semibold text-neutral-800 transition-colors cursor-pointer"
                    >
                      Unduh PDF
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: AGENDA KEGIATAN DESA                                  */}
        {/* ============================================================ */}
        {activeTab === 'agenda' && (
          <div className="max-w-4xl mx-auto space-y-4 animate-fadeIn">
            {/* Highlight Nearest Event */}
            {agendaList.length > 0 && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white shadow-md hover:shadow-xl border border-neutral-800 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 card-interactive transition-all duration-300 group">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFE600] text-[#111111] text-xs font-bold uppercase tracking-wider mb-2">
                    <LogoDesa size={16} className="h-4 w-auto inline-block" />
                    <span>Agenda Terdekat</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#FFE600] transition-colors">
                    {agendaList[0].judul}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 mt-2">
                    <span className="flex items-center gap-1 text-[#FFE600]">
                      <Calendar className="w-3.5 h-3.5" />
                      {agendaList[0].tanggal}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {agendaList[0].waktu}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {agendaList[0].lokasi}
                    </span>
                  </div>
                </div>

                <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center shrink-0">
                  <span className="text-[10px] text-neutral-300 uppercase tracking-wider block">Status</span>
                  <span className="text-xs font-bold text-[#FFE600]">Terjadwal Resmi</span>
                </div>
              </div>
            )}

            {/* Full Agenda Timeline List */}
            <div className="space-y-4">
              {agendaList.map((agenda) => (
                <div
                  key={agenda.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:shadow-lg hover:border-yellow-400 card-interactive transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Date Block */}
                    <div className="w-14 h-16 rounded-xl bg-[#FFFBE6] border border-yellow-200 group-hover:bg-[#FFE600] group-hover:border-yellow-400 group-hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center text-center shrink-0">
                      <span className="text-[10px] uppercase font-bold text-[#E53935] group-hover:text-neutral-900 transition-colors">
                        {agenda.tanggal.split(' ')[1]?.slice(0, 3)}
                      </span>
                      <span className="text-lg font-heading font-extrabold text-[#111111] leading-none">
                        {agenda.tanggal.split(' ')[0]}
                      </span>
                    </div>

                    {/* Details */}
                    <div>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] font-bold uppercase tracking-wider mb-1 inline-block">
                        {agenda.kategori}
                      </span>
                      <h4 className="text-base font-heading font-bold text-[#111111] group-hover:text-[#E53935] transition-colors">
                        {agenda.judul}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {agenda.deskripsi}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 mt-2.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          {agenda.waktu}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#2D8FD5]" />
                          {agenda.lokasi}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right text-xs text-neutral-400 shrink-0 self-end sm:self-center">
                    <span>Penyelenggara:</span>
                    <p className="font-semibold text-neutral-700">{agenda.penyelenggara}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
