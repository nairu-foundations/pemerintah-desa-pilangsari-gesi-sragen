import React from 'react';
import { Quote, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { DESA_IMAGES } from '../../constants/images';

interface SambutanKadesProps {
  showHeader?: boolean;
}

export const SambutanKades: React.FC<SambutanKadesProps> = ({ showHeader = true }) => {
  return (
    <section 
      id="sambutan-kades" 
      className={`bg-[#FFFBE6]/50 relative overflow-hidden border-b border-yellow-100 ${
        showHeader ? 'py-20' : 'pt-2 pb-14'
      }`}
    >
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE600]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E53935]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {showHeader && (
          <SectionHeader
            kicker="KATA SAMBUTAN PEMERINTAH DESA"
            title="Sambutan Kepala Desa Pilangsari"
            subtitle="Mewujudkan pelayanan prima, transparansi pembangunan, dan guyub rukun warga desa."
          />
        )}

        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Kades Portrait Photo */}
            <div className="lg:col-span-5 relative bg-gradient-to-b from-neutral-100 to-neutral-200 flex flex-col justify-end overflow-hidden min-h-[380px] lg:min-h-full">
              <img
                src={DESA_IMAGES.profil.kades}
                alt="Supriyadi, S.Sos. - Kepala Desa Pilangsari Kec. Gesi Kab. Sragen"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider mb-2">
                  Kepala Desa
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Supriyadi, S.Sos.
                </h3>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Masa Bakti: 2020 – Sekarang · Pemdes Pilangsari
                </p>
              </div>
            </div>

            {/* Right: Message & Commitments */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[#E53935] mb-4">
                  <Quote className="w-8 h-8 fill-current opacity-25" />
                  <span className="text-sm font-semibold tracking-wide text-neutral-700 italic">
                    "Guyub Rukun Mbangun Desa, Makmur Wargane"
                  </span>
                </div>

                <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Assalamu’alaikum Warahmatullahi Wabarakatuh,</strong>
                  </p>
                  <p>
                    Puji syukur kita panjatkan ke hadirat Allah SWT atas rahmat dan karunia-Nya. 
                    Selamat datang di website resmi Pemerintah Desa Pilangsari, Kecamatan Gesi, Kabupaten Sragen, Jawa Tengah.
                  </p>
                  <p>
                    Website ini kami dedikasikan sebagai jembatan komunikasi, sarana transparansi publik, dan pusat layanan digital 
                    bagi seluruh warga Desa Pilangsari—baik yang berdomisili di kampung halaman maupun saudara-saudara kami para 
                    kaum boro (perantau) di berbagai penjuru tanah air.
                  </p>
                  <p>
                    Melalui portal ini, bapak/ibu dapat mengurus permohonan surat administrasi kependudukan dari mana saja tanpa antre panjang, 
                    memantau alokasi Dana Desa secara terbuka, serta menyampaikan aspirasi dan pengaduan pembangunan secara langsung ke meja kami.
                  </p>
                </div>

                {/* 3 Pillars */}
                <div className="mt-6 pt-6 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E9E3E] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-800 font-medium">Layanan Cepat & Tanpa Pungli</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-[#2D8FD5] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-800 font-medium">Transparansi Dana APBDes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-800 font-medium">Semangat Gotong Royong</span>
                  </div>
                </div>
              </div>

              {/* Digital Signature & Footer Greeting */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Tertanda,</p>
                  <p className="text-base font-bold font-heading text-[#111111] mt-0.5">
                    Supriyadi, S.Sos.
                  </p>
                  <p className="text-xs text-neutral-600">Kepala Desa Pilangsari, Gesi, Sragen</p>
                </div>

                <div className="px-4 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-right">
                  <span className="text-[11px] text-neutral-500 block">Semboyan Sragen:</span>
                  <span className="text-xs font-bold text-[#E53935]">"Bumi Sukowati Asri"</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
