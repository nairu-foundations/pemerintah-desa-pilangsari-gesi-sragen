import React, { useState } from 'react';
import { Users, Phone, Award, Shield, UserCheck, ChevronRight, X } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useApp } from '../../context/AppContext';
import { PerangkatDesa } from '../../types';

interface PemerintahanSectionProps {
  showHeader?: boolean;
}

export const PemerintahanSection: React.FC<PemerintahanSectionProps> = ({ showHeader = true }) => {
  const { perangkatDesaList } = useApp();
  const [selectedPerangkat, setSelectedPerangkat] = useState<PerangkatDesa | null>(null);

  // Group by role hierarchy
  const kades = perangkatDesaList.find(p => p.jabatan.includes('Kepala Desa'));
  const sekdes = perangkatDesaList.find(p => p.jabatan.includes('Sekretaris Desa'));
  const pamongLain = perangkatDesaList.filter(p => !p.jabatan.includes('Kepala Desa') && !p.jabatan.includes('Sekretaris Desa'));

  return (
    <section 
      id="pemerintahan" 
      className={`bg-[#FFFBE6]/40 relative border-b border-yellow-100 ${
        showHeader ? 'py-20' : 'pt-4 pb-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeader && (
          <SectionHeader
            kicker="STRUKTUR ORGANISASI & TATA KERJA"
            title="Pemerintahan & Pamong Desa Pilangsari"
            subtitle="Aparatur penyelenggara pemerintahan desa yang siap melayani dengan integritas, profesionalisme, dan ketulusan."
          />
        )}

        {/* Visual Hierarchy Diagram / Bagan Ringkas */}
        <div className="mb-14 p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
            <div>
              <h3 className="font-heading font-bold text-base text-[#111111]">
                Bagan Hierarki Tata Kelola Desa
              </h3>
              <p className="text-xs text-neutral-500">Struktur Pemerintahan Desa Pilangsari Periode Berjalan</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#2E9E3E] text-xs font-semibold border border-emerald-200">
              <Shield className="w-3.5 h-3.5" />
              <span>SOTK Terstandarisasi</span>
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {/* Top Node: Kades */}
            {kades && (
              <div 
                onClick={() => setSelectedPerangkat(kades)}
                className="cursor-pointer group flex items-center gap-3.5 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl shadow-md transition-all duration-200 border-2 border-[#FFE600] w-full max-w-md justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={kades.fotoUrl}
                    alt={kades.nama}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FFE600]"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-[#FFE600] uppercase tracking-wider block">
                      {kades.jabatan}
                    </span>
                    <h4 className="font-heading font-bold text-sm sm:text-base">
                      {kades.nama}
                    </h4>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </div>
            )}

            {/* Vertical connector line */}
            <div className="w-0.5 h-6 bg-neutral-300" />

            {/* Node: Sekdes */}
            {sekdes && (
              <div 
                onClick={() => setSelectedPerangkat(sekdes)}
                className="cursor-pointer group flex items-center gap-3.5 px-5 py-3 bg-white hover:bg-neutral-50 text-neutral-900 rounded-xl shadow-xs transition-all duration-200 border-2 border-neutral-300 hover:border-[#2D8FD5] w-full max-w-sm justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={sekdes.fotoUrl}
                    alt={sekdes.nama}
                    className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#2D8FD5] uppercase tracking-wider block">
                      {sekdes.jabatan}
                    </span>
                    <h4 className="font-heading font-semibold text-sm">
                      {sekdes.nama}
                    </h4>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-transform" />
              </div>
            )}

            {/* Branching indicator */}
            <div className="w-full max-w-xl h-0.5 bg-neutral-200 mt-2 hidden sm:block" />
          </div>
        </div>

        {/* Grid Kartu Perangkat Desa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perangkatDesaList.map((perangkat) => (
            <div
              key={perangkat.id}
              onClick={() => setSelectedPerangkat(perangkat)}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-lg hover:border-yellow-400 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo with subtle hover zoom */}
                <div className="relative h-56 bg-neutral-100 overflow-hidden">
                  <img
                    src={perangkat.fotoUrl}
                    alt={perangkat.nama}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  
                  {/* Jabatan Pill in photo */}
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#FFE600] text-[#111111] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {perangkat.jabatan}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h4 className="font-heading font-bold text-base text-[#111111] group-hover:text-[#E53935] transition-colors leading-tight">
                    {perangkat.nama}
                  </h4>
                  {perangkat.nip && perangkat.nip !== '-' && (
                    <p className="text-[11px] text-neutral-400 mt-1">
                      NIP. {perangkat.nip}
                    </p>
                  )}
                  <p className="text-xs text-neutral-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {perangkat.tugasPokok}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between text-xs text-neutral-500">
                <span className="text-[11px] text-neutral-400">Klik rincian tugas</span>
                <span className="text-[#E53935] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Profil <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Detail View Perangkat */}
      {selectedPerangkat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200">
            <div className="relative h-48 bg-neutral-900">
              <img
                src={selectedPerangkat.fotoUrl}
                alt={selectedPerangkat.nama}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedPerangkat(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-5 text-white">
                <span className="px-2 py-0.5 rounded bg-[#FFE600] text-[#111111] text-[11px] font-bold uppercase tracking-wider">
                  {selectedPerangkat.jabatan}
                </span>
                <h3 className="text-xl font-heading font-bold mt-1 text-white">
                  {selectedPerangkat.nama}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {selectedPerangkat.nip && selectedPerangkat.nip !== '-' && (
                <div className="p-3 bg-neutral-50 rounded-lg text-xs">
                  <span className="text-neutral-500 block">Nomor Induk Pegawai (NIP):</span>
                  <span className="font-mono font-semibold text-neutral-800">{selectedPerangkat.nip}</span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Tugas Pokok & Tanggung Jawab
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed bg-yellow-50/60 p-3.5 rounded-xl border border-yellow-200">
                  {selectedPerangkat.tugasPokok}
                </p>
              </div>

              {selectedPerangkat.kontak && (
                <div className="flex items-center gap-2 text-xs text-neutral-600 pt-2">
                  <Phone className="w-4 h-4 text-[#2E9E3E]" />
                  <span>Kontak Pelayanan: <strong>{selectedPerangkat.kontak}</strong></span>
                </div>
              )}

              <div className="pt-4 border-t border-neutral-100 flex justify-end">
                <button
                  onClick={() => setSelectedPerangkat(null)}
                  className="px-5 py-2 rounded-lg text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
