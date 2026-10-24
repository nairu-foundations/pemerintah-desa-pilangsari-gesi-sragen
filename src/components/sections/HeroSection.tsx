import React from 'react';
import { ArrowRight, FileText, Compass, Users, Home, MapPin, Layers } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { DESA_IMAGES } from '../../constants/images';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section id="beranda" className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-neutral-950 text-white">
      {/* Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={DESA_IMAGES.hero.landscape}
          alt={DESA_IMAGES.hero.alt}
          className="w-full h-full object-cover object-center"
        />
        {/* Measured scrim for high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/50" />
      </div>

      {/* Hero Content Container - Strictly Left-Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-14 w-full flex-1 flex flex-col justify-center items-start text-left">
        <div className="max-w-2xl text-left">
          
          {/* Minimalist Text Kicker (No Logo) */}
          <div className="inline-block px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-[#FFE600] text-xs font-bold tracking-widest uppercase mb-6 text-left">
            Pemerintah Desa Pilangsari
          </div>

          {/* Main Title - Left-Aligned */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15] text-left">
            Selamat Datang di{' '}
            <span className="text-[#FFE600] block mt-1">Desa Pilangsari</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-200 font-medium text-left">
            Kecamatan Gesi, Kabupaten Sragen, Provinsi Jawa Tengah
          </p>

          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl text-left">
            Mewujudkan tata kelola desa yang <strong className="text-white font-semibold">Maju, Mandiri, Transparan, dan Sejahtera</strong>. 
            Layanan pengurusan surat online praktis, penyampaian aspirasi masyarakat, dan informasi pembangunan desa secara terbuka.
          </p>

          {/* Dual CTAs - Left-Aligned */}
          <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
            <button
              onClick={() => navigateTo('layanan', 'surat')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#111111] bg-[#FFE600] hover:bg-[#F2DA00] active:scale-95 shadow-md shadow-yellow-500/10 border border-yellow-300 transition-all duration-150 cursor-pointer group"
            >
              <FileText className="w-4 h-4 text-[#111111]" />
              <span>Layanan Surat Mandiri</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => navigateTo('profil')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#FFE600]" />
              <span>Jelajahi Profil Desa</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Key Statistics Strip at Bottom of Hero - Left-Aligned Grid */}
      <div className="relative z-10 w-full bg-neutral-950/85 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-left">
            
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#FFE600]/15 border border-[#FFE600]/30 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#FFE600]" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold font-heading text-white tabular-nums">
                  3.428 <span className="text-xs text-[#FFE600] font-normal">Jiwa</span>
                </p>
                <p className="text-xs text-neutral-400">Jumlah Penduduk</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#2E9E3E]/15 border border-[#2E9E3E]/30 flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-[#2E9E3E]" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold font-heading text-white tabular-nums">
                  1.154 <span className="text-xs text-[#2E9E3E] font-normal">KK</span>
                </p>
                <p className="text-xs text-neutral-400">Kepala Keluarga</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#2D8FD5]/15 border border-[#2D8FD5]/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#2D8FD5]" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold font-heading text-white tabular-nums">
                  4 <span className="text-xs text-[#2D8FD5] font-normal">Dusun</span>
                </p>
                <p className="text-xs text-neutral-400">18 RT · 6 RW</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#E53935]/15 border border-[#E53935]/30 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-[#E53935]" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold font-heading text-white tabular-nums">
                  412,85 <span className="text-xs text-[#E53935] font-normal">Ha</span>
                </p>
                <p className="text-xs text-neutral-400">Luas Wilayah</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
