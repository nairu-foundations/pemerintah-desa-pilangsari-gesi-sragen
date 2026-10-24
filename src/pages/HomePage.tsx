import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { SambutanKades } from '../components/sections/SambutanKades';
import { FileText, MessageSquare, Search, Newspaper, Users, ArrowRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useApp } from '../context/AppContext';
import { PROFIL_DESA } from '../data/initialData';

export const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { beritaList, pengumumanList, agendaList, setSelectedBerita } = useApp();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Services Navigation Banner */}
      <section className="bg-white py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* 1. Layanan Surat */}
            <div 
              onClick={() => navigateTo('layanan', 'surat')}
              className="p-5 rounded-2xl bg-neutral-50 hover:bg-[#FFFBE6] border border-neutral-200 hover:border-yellow-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between card-interactive"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FFE600] text-[#111111] flex items-center justify-center font-bold mb-3.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#E53935] transition-colors">
                  Permohonan Surat Online
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Ajukan SKTM, SKU, Domisili, dan pengantar KTP tanpa antre di balai desa.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#111111] flex items-center gap-1 mt-4 group-hover:translate-x-1.5 transition-transform duration-200">
                Buka Formulir <ArrowRight className="w-3.5 h-3.5 text-[#E53935]" />
              </span>
            </div>

            {/* 2. Pengaduan Lapor */}
            <div 
              onClick={() => navigateTo('layanan', 'pengaduan')}
              className="p-5 rounded-2xl bg-neutral-50 hover:bg-[#FFFBE6] border border-neutral-200 hover:border-yellow-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between card-interactive"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E53935] text-white flex items-center justify-center font-bold mb-3.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#E53935] transition-colors">
                  Aspirasi & Pengaduan Warga
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Sampaikan keluhan infrastruktur, bansos, atau pelayanan terbuka maupun anonim.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#111111] flex items-center gap-1 mt-4 group-hover:translate-x-1.5 transition-transform duration-200">
                Tulis Laporan <ArrowRight className="w-3.5 h-3.5 text-[#E53935]" />
              </span>
            </div>

            {/* 3. Cek Status */}
            <div 
              onClick={() => navigateTo('layanan', 'status')}
              className="p-5 rounded-2xl bg-neutral-50 hover:bg-[#FFFBE6] border border-neutral-200 hover:border-yellow-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between card-interactive"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2D8FD5] text-white flex items-center justify-center font-bold mb-3.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#E53935] transition-colors">
                  Cek Status Tiket Pelayanan
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Lacak progres verifikasi berkas dan cetak struk tanda terima permohonan.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#111111] flex items-center gap-1 mt-4 group-hover:translate-x-1.5 transition-transform duration-200">
                Lacak Sekarang <ArrowRight className="w-3.5 h-3.5 text-[#E53935]" />
              </span>
            </div>

            {/* 4. Berita & Warta */}
            <div 
              onClick={() => navigateTo('informasi')}
              className="p-5 rounded-2xl bg-neutral-50 hover:bg-[#FFFBE6] border border-neutral-200 hover:border-yellow-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between card-interactive"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2E9E3E] text-white flex items-center justify-center font-bold mb-3.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Newspaper className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#E53935] transition-colors">
                  Warta & Berita Desa
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Kabar pembangunan, transparansi bantuan desa, dan jadwal agenda terkini.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#111111] flex items-center gap-1 mt-4 group-hover:translate-x-1.5 transition-transform duration-200">
                Baca Informasi <ArrowRight className="w-3.5 h-3.5 text-[#E53935]" />
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Sambutan Kepala Desa Section */}
      <SambutanKades />

      {/* Warta Berita & Agenda Terkini Preview */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E53935]">
                KABAR TERKINI DESA
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111111] mt-1">
                Warta & Pengumuman Terbaru
              </h2>
            </div>
            <button
              onClick={() => navigateTo('informasi')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#E53935] transition-colors cursor-pointer"
            >
              <span>Lihat Semua Informasi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beritaList.slice(0, 3).map((berita) => (
              <article
                key={berita.id}
                onClick={() => setSelectedBerita(berita)}
                className="bg-neutral-50 hover:bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group card-interactive"
              >
                <div>
                  <div className="relative h-44 bg-neutral-200 overflow-hidden">
                    <img
                      src={berita.gambarUrl}
                      alt={berita.judul}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#111111]/85 text-[#FFE600] text-[10px] font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                      {berita.kategori}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-[11px] text-neutral-400">{berita.tanggal}</span>
                    <h4 className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#E53935] transition-colors mt-1 line-clamp-2">
                      {berita.judul}
                    </h4>
                    <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                      {berita.ringkasan}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 text-[11px] font-semibold text-[#2D8FD5] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                  Baca Selengkapnya <ArrowRight className="w-3 h-3" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip to Explore Village Services */}
      <section className="py-14 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Butuh Surat Administrasi Desa Tanpa Menunggu?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              Gunakan sistem permohonan surat online mandiri Pemerintah Desa Pilangsari. Cepat, transparan, dan bebas biaya retribusi.
            </p>
          </div>
          <button
            onClick={() => navigateTo('layanan', 'surat')}
            className="px-6 py-3 rounded-xl bg-[#FFE600] hover:bg-yellow-400 text-[#111111] font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all shrink-0 cursor-pointer"
          >
            Ajukan Surat Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};
