import React, { useState, useEffect, useRef } from 'react';
import { 
  History, 
  Target, 
  MapPin, 
  Wheat, 
  Users, 
  CheckCircle2, 
  Quote, 
  Award, 
  HeartHandshake,
  Compass,
  ArrowRight,
  Sparkles,
  RotateCcw,
  UserCheck,
  TrendingUp,
  Building2,
  Briefcase,
  PieChart,
  Layers,
  ShieldCheck,
  Baby,
  PersonStanding,
  UserPlus
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { LogoDesa } from '../common/LogoDesa';
import { PROFIL_DESA } from '../../data/initialData';
import { DESA_IMAGES } from '../../constants/images';

interface ProfilSectionProps {
  showHeader?: boolean;
}

export const ProfilSection: React.FC<ProfilSectionProps> = ({ 
  showHeader = true 
}) => {
  const [countersStarted, setCountersStarted] = useState(false);
  const [activeCensusTab, setActiveCensusTab] = useState<'ringkasan' | 'gender-usia' | 'profesi' | 'wilayah'>('ringkasan');
  const sectionRef = useRef<HTMLDivElement>(null);
  const censusRef = useRef<HTMLDivElement>(null);

  // Animated counters state (starts with target values as initial fallback, re-animates upon view)
  const targetPenduduk = PROFIL_DESA.demografi.totalPenduduk;
  const targetKK = PROFIL_DESA.demografi.kepalaKeluarga;
  const targetDusun = PROFIL_DESA.demografi.jumlahDusun;
  const targetRT = PROFIL_DESA.demografi.jumlahRT;

  const [counts, setCounts] = useState({
    penduduk: targetPenduduk,
    kk: targetKK,
    dusun: targetDusun,
    rt: targetRT
  });

  const runCounterAnimation = () => {
    const duration = 1400;
    const steps = 35;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        penduduk: Math.round(targetPenduduk * ease),
        kk: Math.round(targetKK * ease),
        dusun: Math.round(targetDusun * ease),
        rt: Math.round(targetRT * ease)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts({
          penduduk: targetPenduduk,
          kk: targetKK,
          dusun: targetDusun,
          rt: targetRT
        });
      }
    }, stepTime);
  };

  useEffect(() => {
    // Dedicated observer on the census element itself so it triggers when user actually scrolls to demografi
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
          runCounterAnimation();
        }
      },
      { threshold: 0.15, rootMargin: '40px' }
    );

    if (censusRef.current) {
      observer.observe(censusRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  return (
    <section 
      id="profil-desa" 
      ref={sectionRef} 
      className={`bg-white relative ${showHeader ? 'py-16 sm:py-20' : 'pt-2 pb-20'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {showHeader && (
          <SectionHeader
            kicker="MENGENAL LEBIH DEKAT"
            title="Profil & Potensi Desa Pilangsari"
            subtitle="Karakteristik kewilayahan, sambutan resmi Kepala Desa, visi misi pembangunan, riwayat sejarah luhur, demografi, serta potensi kekayaan alam Kecamatan Gesi, Kabupaten Sragen."
          />
        )}

        {/* ============================================================ */}
        {/* BAGIAN 1: SAMBUTAN KEPALA DESA                               */}
        {/* ============================================================ */}
        <div id="sambutan-kades" className="scroll-mt-28">
          <div className="bg-[#FFFBE6]/50 rounded-3xl border border-yellow-200/80 overflow-hidden shadow-xs relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Foto Kades */}
              <div className="lg:col-span-5 relative bg-gradient-to-b from-neutral-200 to-neutral-300 min-h-[380px] lg:min-h-full overflow-hidden flex flex-col justify-end">
                <img
                  src={DESA_IMAGES.profil.kades}
                  alt="Supriyadi, S.Sos. - Kepala Desa Pilangsari"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
                    Kepala Desa Pilangsari
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                    Supriyadi, S.Sos.
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    Masa Bakti: 2020 – Sekarang · Kecamatan Gesi, Sragen
                  </p>
                </div>
              </div>

              {/* Naskah Sambutan */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-[#E53935] mb-4">
                    <Quote className="w-8 h-8 fill-current opacity-25" />
                    <span className="text-sm font-semibold tracking-wide text-neutral-800 italic">
                      "Guyub Rukun Mbangun Desa, Makmur Wargane"
                    </span>
                  </div>

                  <div className="space-y-3.5 text-neutral-700 text-sm sm:text-base leading-relaxed font-body">
                    <p className="font-semibold text-neutral-900">
                      Assalamu’alaikum Warahmatullahi Wabarakatuh,
                    </p>
                    <p>
                      Puji syukur kehadirat Allah SWT atas rahmat dan karunia-Nya. Selamat datang di portal resmi Pemerintah Desa Pilangsari, Kecamatan Gesi, Kabupaten Sragen, Jawa Tengah.
                    </p>
                    <p>
                      Website ini didedikasikan sebagai media komunikasi publik, transparansi penyelenggaraan pemerintahan, dan sarana pelayanan digital prima bagi seluruh warga Pilangsari—baik yang tinggal di desa maupun kaum perantau di manapun berada.
                    </p>
                    <p>
                      Kami berkomitmen memajukan sektor pertanian, memperkuat infrastruktur jalan dan irigasi, serta menjaga keluhuran adat gotong royong Sukowati demi kemakmuran bersama.
                    </p>
                  </div>
                </div>

                {/* 3 Komitmen Layanan */}
                <div className="pt-6 border-t border-yellow-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-yellow-100 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#2E9E3E] shrink-0" />
                    <span className="text-xs text-neutral-800 font-semibold">Layanan Cepat & Akurat</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-yellow-100 shadow-2xs">
                    <Award className="w-4 h-4 text-[#2D8FD5] shrink-0" />
                    <span className="text-xs text-neutral-800 font-semibold">Transparansi Penuh</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-yellow-100 shadow-2xs">
                    <HeartHandshake className="w-4 h-4 text-[#E53935] shrink-0" />
                    <span className="text-xs text-neutral-800 font-semibold">Semangat Guyub Rukun</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 2: STATISTIK & DEMOGRAFI DESA                         */}
        {/* ============================================================ */}
        <div id="demografi-desa" ref={censusRef} className="scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#E53935] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E53935]" />
              <span>DATA STATISTIK RESMI PEMERINTAH DESA</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#111111]">
              Demografi Penduduk & Kewilayahan Pilangsari
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
              Data sensus pemutakhiran registrasi kependudukan dan kewilayahan Semester I Tahun 2026.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] text-neutral-500">
              <span className="px-2.5 py-0.5 rounded bg-neutral-100 border border-neutral-200 font-medium">
                Terverifikasi SIAK & Disdukcapil Kab. Sragen
              </span>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Status: Pemutakhiran Aktif Semester I 2026
              </span>
              <button
                onClick={runCounterAnimation}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-yellow-100 hover:bg-[#FFE600] text-neutral-900 border border-yellow-300 font-bold transition-colors cursor-pointer text-[11px]"
                title="Putar ulang animasi hitung cepat data sensus"
              >
                <RotateCcw className="w-3 h-3 text-neutral-800" />
                <span>Animasi Hitung Ulang</span>
              </button>
            </div>
          </div>

          {/* Census Interactive Menu Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 p-1.5 bg-neutral-100 rounded-2xl max-w-3xl mx-auto border border-neutral-200 shadow-2xs">
            <button
              onClick={() => setActiveCensusTab('ringkasan')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCensusTab === 'ringkasan'
                  ? 'bg-white text-[#111111] shadow-xs border border-neutral-200'
                  : 'text-neutral-600 hover:text-black hover:bg-white/60'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-[#E53935]" />
              <span>Ringkasan Utama</span>
            </button>

            <button
              onClick={() => setActiveCensusTab('gender-usia')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCensusTab === 'gender-usia'
                  ? 'bg-white text-[#111111] shadow-xs border border-neutral-200'
                  : 'text-neutral-600 hover:text-black hover:bg-white/60'
              }`}
            >
              <PieChart className="w-3.5 h-3.5 text-[#2D8FD5]" />
              <span>Gender & Kelompok Usia</span>
            </button>

            <button
              onClick={() => setActiveCensusTab('profesi')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCensusTab === 'profesi'
                  ? 'bg-white text-[#111111] shadow-xs border border-neutral-200'
                  : 'text-neutral-600 hover:text-black hover:bg-white/60'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#2E9E3E]" />
              <span>Mata Pencaharian</span>
            </button>

            <button
              onClick={() => setActiveCensusTab('wilayah')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCensusTab === 'wilayah'
                  ? 'bg-white text-[#111111] shadow-xs border border-neutral-200'
                  : 'text-neutral-600 hover:text-black hover:bg-white/60'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Sebaran 4 Dusun</span>
            </button>
          </div>

          {/* TAB 1: RINGKASAN UTAMA */}
          {activeCensusTab === 'ringkasan' && (
            <div className="space-y-6 animate-fadeIn">
              {/* 4 Individual Glowing Stat Cards (Fixed layout for mobile, tablet & desktop) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* 1. Total Penduduk */}
                <div className="bg-neutral-900 border border-neutral-800 hover:border-yellow-400 rounded-2xl p-4 sm:p-6 text-center card-interactive transition-all shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-[#FFE600] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-[#FFE600]" />
                  </div>
                  <span className="block text-2xl sm:text-4xl font-extrabold font-heading text-[#FFE600] tabular-nums tracking-tight">
                    {counts.penduduk.toLocaleString('id-ID')}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-semibold mt-1 block">
                    Total Penduduk Jiwa
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 block mt-0.5">
                    Data Semester I 2026
                  </span>
                </div>

                {/* 2. Kepala Keluarga */}
                <div className="bg-neutral-900 border border-neutral-800 hover:border-emerald-400 rounded-2xl p-4 sm:p-6 text-center card-interactive transition-all shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-[#2E9E3E] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-5 h-5 text-[#2E9E3E]" />
                  </div>
                  <span className="block text-2xl sm:text-4xl font-extrabold font-heading text-[#2E9E3E] tabular-nums tracking-tight">
                    {counts.kk.toLocaleString('id-ID')}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-semibold mt-1 block">
                    Kepala Keluarga (KK)
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 block mt-0.5">
                    Rata-rata 3.5 jiwa/KK
                  </span>
                </div>

                {/* 3. Wilayah Dusun */}
                <div className="bg-neutral-900 border border-neutral-800 hover:border-blue-400 rounded-2xl p-4 sm:p-6 text-center card-interactive transition-all shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/20 text-[#2D8FD5] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5 text-[#2D8FD5]" />
                  </div>
                  <span className="block text-2xl sm:text-4xl font-extrabold font-heading text-[#2D8FD5] tabular-nums tracking-tight">
                    {counts.dusun}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-semibold mt-1 block">
                    Kebayanan / Dusun
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 block mt-0.5">
                    Pilang, Jetis, Kd.Rejo, W.Sari
                  </span>
                </div>

                {/* 4. Rukun Tetangga (RT) */}
                <div className="bg-neutral-900 border border-neutral-800 hover:border-rose-400 rounded-2xl p-4 sm:p-6 text-center card-interactive transition-all shadow-sm group">
                  <div className="w-10 h-10 rounded-xl bg-rose-400/10 border border-rose-400/20 text-[#E53935] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5 text-[#E53935]" />
                  </div>
                  <span className="block text-2xl sm:text-4xl font-extrabold font-heading text-[#E53935] tabular-nums tracking-tight">
                    {counts.rt}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-semibold mt-1 block">
                    Rukun Tetangga (RT)
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 block mt-0.5">
                    Terbagi dalam 4 Dusun
                  </span>
                </div>
              </div>

              {/* 3 Secondary Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center gap-3.5 card-interactive">
                  <div className="w-9 h-9 rounded-lg bg-yellow-100 text-neutral-900 flex items-center justify-center font-bold text-xs shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#E53935]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-medium block">Kepadatan Penduduk</span>
                    <strong className="text-sm font-heading text-neutral-900">386 Jiwa / km²</strong>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center gap-3.5 card-interactive">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                    <Users className="w-4 h-4 text-[#2D8FD5]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-medium block">Rasio Jenis Kelamin</span>
                    <strong className="text-sm font-heading text-neutral-900">99.6 L per 100 P</strong>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center gap-3.5 card-interactive">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                    <Wheat className="w-4 h-4 text-[#2E9E3E]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-medium block">Sektor Domisili Utama</span>
                    <strong className="text-sm font-heading text-neutral-900">Agraris / Pedesaan 100%</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DISTRIBUSI GENDER & PIRAMIDA USIA */}
          {activeCensusTab === 'gender-usia' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Gender Split Visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 card-interactive shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
                        <PersonStanding className="w-4 h-4 text-blue-600" />
                        <span>Penduduk Laki-Laki</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-bold">
                        49.9%
                      </span>
                    </div>
                    <div className="text-3xl font-extrabold font-heading text-neutral-900 my-2">
                      {PROFIL_DESA.demografi.lakiLaki.toLocaleString('id-ID')} <span className="text-sm font-normal text-neutral-500">Jiwa</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Sebagian besar berada dalam rentang usia kerja produktif sektor pertanian, pertukangan, serta perantauan Sukowati.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-200/60">
                    <div className="w-full bg-blue-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '49.9%' }} />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 card-interactive shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                        <PersonStanding className="w-4 h-4 text-rose-600" />
                        <span>Penduduk Perempuan</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-xs font-bold">
                        50.1%
                      </span>
                    </div>
                    <div className="text-3xl font-extrabold font-heading text-neutral-900 my-2">
                      {PROFIL_DESA.demografi.perempuan.toLocaleString('id-ID')} <span className="text-sm font-normal text-neutral-500">Jiwa</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Memiliki peran kunci dalam kelompok wanita tani (KWT), PKK desa, posyandu terpadu, dan UMKM olahan pangan lokal.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-rose-200/60">
                    <div className="w-full bg-rose-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-rose-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '50.1%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Age Bracket Distribution */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-[#2D8FD5]" />
                  <span>Komposisi Kelompok Usia Penduduk Pilangsari</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 card-interactive">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-amber-800 flex items-center gap-1">
                        <Baby className="w-3.5 h-3.5 text-amber-600" />
                        <span>Usia Anak (0-14 Th)</span>
                      </span>
                      <span className="text-xs font-bold text-amber-900">18.0%</span>
                    </div>
                    <span className="text-xl font-bold font-heading text-neutral-900 block">775 Jiwa</span>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Generasi pelajar PAUD, SD, & SMP</span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 card-interactive">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                        <UserPlus className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Usia Produktif (15-64 Th)</span>
                      </span>
                      <span className="text-xs font-bold text-emerald-900">68.0%</span>
                    </div>
                    <span className="text-xl font-bold font-heading text-neutral-900 block">2.927 Jiwa</span>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Bonus demografi tenaga kerja aktif</span>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 card-interactive">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-purple-800 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-purple-600" />
                        <span>Lansia (65+ Th)</span>
                      </span>
                      <span className="text-xs font-bold text-purple-900">14.0%</span>
                    </div>
                    <span className="text-xl font-bold font-heading text-neutral-900 block">602 Jiwa</span>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">Mendapat pendampingan posyandu lansia</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MATA PENCAHARIAN & PROFESI */}
          {activeCensusTab === 'profesi' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-4">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#111111] uppercase tracking-wider">
                      Struktur Pekerjaan & Sektor Ekonomi Warga
                    </h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Hasil pemutakhiran registrasi penduduk produktif Desa Pilangsari Tahun 2026.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    Mayoritas Agraris
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Pertanian */}
                  <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-100 card-interactive">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Wheat className="w-4 h-4 text-[#2E9E3E]" />
                        <span className="text-xs font-bold text-neutral-900">Pertanian & Peternakan Rakyat</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-800">68% (1.990 Jiwa)</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                      <div className="bg-[#2E9E3E] h-2 rounded-full" style={{ width: '68%' }} />
                    </div>
                    <p className="text-[11px] text-neutral-600">
                      Petani padi irigasi teknis, jagung hibrida, palawija, peternak sapi potong Sukowati, dan kambing perah.
                    </p>
                  </div>

                  {/* Wiraswasta */}
                  <div className="p-4 rounded-xl bg-yellow-50/40 border border-yellow-100 card-interactive">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold text-neutral-900">Perdagangan, Warung & UMKM Olahan</span>
                      </div>
                      <span className="text-xs font-bold text-amber-800">15% (439 Jiwa)</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                      <div className="bg-[#FFE600] h-2 rounded-full" style={{ width: '15%' }} />
                    </div>
                    <p className="text-[11px] text-neutral-600">
                      Pedagang pasar desa, warung kelontong, kuliner tradisional, dan sentra kerajinan anyaman bambu.
                    </p>
                  </div>

                  {/* Karyawan Swasta */}
                  <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 card-interactive">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#2D8FD5]" />
                        <span className="text-xs font-bold text-neutral-900">Karyawan Swasta & Buruh Jasa</span>
                      </div>
                      <span className="text-xs font-bold text-blue-800">11% (322 Jiwa)</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                      <div className="bg-[#2D8FD5] h-2 rounded-full" style={{ width: '11%' }} />
                    </div>
                    <p className="text-[11px] text-neutral-600">
                      Bekerja di kawasan industri Sragen, perbengkelan, logistik ekspedisi, serta usaha konstruksi.
                    </p>
                  </div>

                  {/* ASN & Lainnya */}
                  <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-100 card-interactive">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#E53935]" />
                        <span className="text-xs font-bold text-neutral-900">Aparatur Negara (ASN/TNI/POLRI) & Guru</span>
                      </div>
                      <span className="text-xs font-bold text-rose-800">6% (176 Jiwa)</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                      <div className="bg-[#E53935] h-2 rounded-full" style={{ width: '6%' }} />
                    </div>
                    <p className="text-[11px] text-neutral-600">
                      Pamong desa, tenaga pendidik guru SD/SMP di Gesi, tenaga medis puskesmas, dan abdi negara.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SEBARAN 4 DUSUN */}
          {activeCensusTab === 'wilayah' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Dusun 1 */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 card-interactive shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-900 text-[10px] font-bold uppercase tracking-wider border border-yellow-300">
                        Kebayanan I
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-heading">4 RT</span>
                    </div>
                    <h4 className="text-base font-heading font-bold text-[#111111]">
                      Dusun Pilangsari
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      Pusat pemerintahan desa, balai warga, dan fasilitas pelayanan utama.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1 text-xs">
                    <div className="flex justify-between text-neutral-700">
                      <span>Penduduk:</span>
                      <strong className="font-heading">1.150 Jiwa</strong>
                    </div>
                    <div className="flex justify-between text-neutral-700">
                      <span>Kepala Keluarga:</span>
                      <strong className="font-heading">335 KK</strong>
                    </div>
                  </div>
                </div>

                {/* Dusun 2 */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 card-interactive shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider border border-blue-300">
                        Kebayanan II
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-heading">3 RT</span>
                    </div>
                    <h4 className="text-base font-heading font-bold text-[#111111]">
                      Dusun Jetis
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      Kawasan lumbung padi organik dan hamparan pertanian sawah beririgasi.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1 text-xs">
                    <div className="flex justify-between text-neutral-700">
                      <span>Penduduk:</span>
                      <strong className="font-heading">1.080 Jiwa</strong>
                    </div>
                    <div className="flex justify-between text-neutral-700">
                      <span>Kepala Keluarga:</span>
                      <strong className="font-heading">310 KK</strong>
                    </div>
                  </div>
                </div>

                {/* Dusun 3 */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 card-interactive shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-wider border border-emerald-300">
                        Kebayanan III
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-heading">3 RT</span>
                    </div>
                    <h4 className="text-base font-heading font-bold text-[#111111]">
                      Dusun Kedungrejo
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      Sentra peternakan sapi potong dan kelompok tani hortikultura.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1 text-xs">
                    <div className="flex justify-between text-neutral-700">
                      <span>Penduduk:</span>
                      <strong className="font-heading">1.040 Jiwa</strong>
                    </div>
                    <div className="flex justify-between text-neutral-700">
                      <span>Kepala Keluarga:</span>
                      <strong className="font-heading">305 KK</strong>
                    </div>
                  </div>
                </div>

                {/* Dusun 4 */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 card-interactive shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-[10px] font-bold uppercase tracking-wider border border-rose-300">
                        Kebayanan IV
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-heading">2 RT</span>
                    </div>
                    <h4 className="text-base font-heading font-bold text-[#111111]">
                      Dusun Wonosari
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      Kawasan perkebunan palawija, anyaman bambu, dan kearifan seni gamelan.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1 text-xs">
                    <div className="flex justify-between text-neutral-700">
                      <span>Penduduk:</span>
                      <strong className="font-heading">1.034 Jiwa</strong>
                    </div>
                    <div className="flex justify-between text-neutral-700">
                      <span>Kepala Keluarga:</span>
                      <strong className="font-heading">290 KK</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 3: VISI & 5 MISI PEMBANGUNAN                          */}
        {/* ============================================================ */}
        <div id="visi-misi" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visi Banner */}
            <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFE600] flex items-center gap-1.5 mb-3">
                  <Target className="w-4 h-4 text-[#FFE600]" />
                  <span>Visi Pembangunan Desa</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white leading-snug">
                  "{PROFIL_DESA.visi}"
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
                  Visi jangka panjang ini memadukan kemandirian lumbung pangan lokal, penguatan ekonomi gotong royong, dan transformasi pelayanan digital desa.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-3">
                <LogoDesa size={24} className="h-6 w-auto inline-block" />
                <div>
                  <p className="text-xs font-bold text-white">Pemerintah Desa Pilangsari</p>
                  <p className="text-[11px] text-neutral-400">Kecamatan Gesi, Kabupaten Sragen</p>
                </div>
              </div>
            </div>

            {/* 5 Butir Misi */}
            <div className="lg:col-span-7 bg-[#FFFBE6]/40 rounded-3xl p-6 sm:p-8 border border-yellow-200/80 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-yellow-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E53935]">
                  5 Butir Misi Strategis
                </span>
                <span className="text-xs text-neutral-500 font-medium">Periode 2020 – 2026</span>
              </div>

              <div className="space-y-3">
                {PROFIL_DESA.misi.map((misi, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl border border-neutral-200/70 shadow-2xs hover:shadow-md hover:border-yellow-300 hover:-translate-y-0.5 transition-all duration-200 card-interactive"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#FFE600] text-[#111111] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-heading">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 4: RIWAYAT SEJARAH & KEARIFAN SUKOWATI                */}
        {/* ============================================================ */}
        <div id="sejarah" className="scroll-mt-28">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xs">
            {/* Top: Asal-Usul Nama & Riwayat Desa (Rata Kiri-Kanan Justify) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#2D8FD5] mb-1">
                <History className="w-5 h-5 text-[#2D8FD5]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  HISTORI & ASAL-USUL
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#111111]">
                Asal-Usul Nama & Riwayat Desa Pilangsari
              </h3>

              <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed font-body">
                <p className="text-justify">
                  {PROFIL_DESA.sejarah}
                </p>
                <p className="text-justify">
                  Masyarakat Desa Pilangsari senantiasa memelihara kearifan lokal berlandaskan tradisi <em>sambatan</em> dan <em>gotong royong</em>. Tradisi merti desa (bersih desa) dan nyadran rutin digelar setiap tahun sebagai simbol kerukunan antarwarga dan rasa syukur atas hasil bumi yang melimpah. Nilai-nilai luhur ini terus diwariskan dari generasi ke generasi sebagai fondasi persatuan dalam membangun kemakmuran desa.
                </p>
              </div>
            </div>

            {/* Bottom: Kronologi Perkembangan Desa (Diletakkan di Bagian Bawahnya) */}
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-[#E53935] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-[#E53935]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#111111] uppercase tracking-wider">
                      Kronologi Perkembangan Desa Pilangsari
                    </h4>
                    <span className="text-xs text-neutral-500">
                      Garis waktu transformasi peradaban dan administrasi desa
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-neutral-400">
                  Kecamatan Gesi, Sragen
                </span>
              </div>

              {/* 3 Chronology Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Era Sukowati */}
                <div className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200 card-interactive hover:shadow-lg hover:border-red-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-red-100 text-[#E53935] text-[10px] font-bold uppercase tracking-wider border border-red-200">
                        Era Sukowati
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-heading">Fase 1</span>
                    </div>
                    <h5 className="font-heading font-bold text-sm text-[#111111] mb-1.5">
                      Pos Singgah & Lumbung Pangan
                    </h5>
                    <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                      Kawasan ini bermula sebagai pos persinggahan dan lumbung pertanian dataran Bengawan Solo bagian utara bagi para saudagar dan petani hasil bumi.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-[#E53935]">
                    Cikal Bakal Wilayah Adat
                  </div>
                </div>

                {/* 2. Tahun 1952 */}
                <div className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200 card-interactive hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-blue-100 text-[#2D8FD5] text-[10px] font-bold uppercase tracking-wider border border-blue-200">
                        Tahun 1952
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-heading">Fase 2</span>
                    </div>
                    <h5 className="font-heading font-bold text-sm text-[#111111] mb-1.5">
                      Penyatuan Administratif Resmi
                    </h5>
                    <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                      Penggabungan beberapa pedukuhan adat menjadi satu kesatuan administratif Pemerintahan Desa Pilangsari yang diakui secara resmi oleh negara.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-[#2D8FD5]">
                    Lahirnya Desa Pilangsari
                  </div>
                </div>

                {/* 3. Era Modern */}
                <div className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200 card-interactive hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-[#2E9E3E] text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                        Era Modern
                      </span>
                      <span className="text-xs font-bold text-neutral-400 font-heading">Fase 3</span>
                    </div>
                    <h5 className="font-heading font-bold text-sm text-[#111111] mb-1.5">
                      Modernisasi & Digitalisasi Desa
                    </h5>
                    <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                      Pembangunan sarana irigasi teknis modern, rabat beton jalan usaha tani, penguatan UMKM, posyandu terpadu, dan portal pelayanan publik mandiri.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-[#2E9E3E]">
                    Desa Berdaya & Transparan
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 5: GEOGRAFIS & BATAS WILAYAH                          */}
        {/* ============================================================ */}
        <div id="geografis" className="scroll-mt-28">
          <div className="bg-neutral-50/70 rounded-3xl p-6 sm:p-10 border border-neutral-200">
            <div className="flex items-center gap-2.5 text-[#2E9E3E] mb-2">
              <MapPin className="w-5 h-5 text-[#2E9E3E]" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                WILAYAH ADMINISTRATIF
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#111111] mb-6">
              Karakteristik Wilayah & Batas Administratif
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <span className="text-xs text-neutral-400 block font-medium">Batas Utara</span>
                <strong className="text-sm font-heading text-neutral-900 block mt-1">
                  {PROFIL_DESA.geografis.batasUtara}
                </strong>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <span className="text-xs text-neutral-400 block font-medium">Batas Selatan</span>
                <strong className="text-sm font-heading text-neutral-900 block mt-1">
                  {PROFIL_DESA.geografis.batasSelatan}
                </strong>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <span className="text-xs text-neutral-400 block font-medium">Batas Timur</span>
                <strong className="text-sm font-heading text-neutral-900 block mt-1">
                  {PROFIL_DESA.geografis.batasTimur}
                </strong>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <span className="text-xs text-neutral-400 block font-medium">Batas Barat</span>
                <strong className="text-sm font-heading text-neutral-900 block mt-1">
                  {PROFIL_DESA.geografis.batasBarat}
                </strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-700">
              <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <strong className="block text-neutral-900 text-sm mb-1 font-heading">Luas & Ketinggian:</strong>
                <span>Total luas wilayah <strong>{PROFIL_DESA.geografis.luasWilayah}</strong> pada elevasi 85 – 120 meter di atas permukaan laut (mdpl).</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                <strong className="block text-neutral-900 text-sm mb-1 font-heading">Karakter Topografi:</strong>
                <span>{PROFIL_DESA.geografis.topografi} dengan curah hujan rata-rata 1.800 mm per tahun.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BAGIAN 6: POTENSI KOMODITAS UNGGULAN DESA                    */}
        {/* ============================================================ */}
        <div id="potensi" className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFE600] text-amber-600 block mb-1">
              SUMBER DAYA EKONOMI
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#111111]">
              Potensi Unggulan & Komoditas Desa
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Kekayaan agraris, kerajinan tradisional, peternakan rakyat, dan sentra olahan hasil bumi Desa Pilangsari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFIL_DESA.potensi.map((pot, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between card-interactive"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#FFFBE6] text-[#111111] text-[10px] font-bold uppercase tracking-wider border border-yellow-200">
                      {pot.kategori}
                    </span>
                    <span className="text-xs font-bold text-neutral-400 font-heading">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-heading font-bold text-[#111111] mb-2">
                    {pot.nama}
                  </h4>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {pot.deskripsi}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center text-xs font-semibold text-[#2D8FD5]">
                  <span>Komoditas Unggulan</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
