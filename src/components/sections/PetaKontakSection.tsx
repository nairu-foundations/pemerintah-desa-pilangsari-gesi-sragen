import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Ambulance, 
  ShieldAlert, 
  HeartHandshake, 
  ExternalLink,
  PhoneCall,
  MessageCircle,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface PetaKontakSectionProps {
  showHeader?: boolean;
}

export const PetaKontakSection: React.FC<PetaKontakSectionProps> = ({ showHeader = true }) => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Kantor+Desa+Pilangsari+Gesi+Sragen";

  return (
    <section 
      id="kontak" 
      className={`bg-[#FFFBE6]/40 relative border-b border-yellow-100 ${
        showHeader ? 'py-16 sm:py-20' : 'pt-2 pb-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {showHeader && (
          <SectionHeader
            kicker="LOKASI & PUSAT KEDARURATAN"
            title="Lokasi Kantor & Kontak Pemerintah Desa"
            subtitle="Kunjungi Balai Desa Pilangsari atau hubungi saluran resmi kami untuk layanan konsultasi, administrasi, dan kedaruratan warga 24 jam."
          />
        )}

        {/* ============================================================ */}
        {/* FULL-WIDTH HERO-STYLE MAP BANNER (TIDAK TERLALU BESAR)       */}
        {/* ============================================================ */}
        <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
          
          {/* Map Top Bar */}
          <div className="p-4 sm:p-5 border-b border-neutral-100 flex flex-wrap items-center justify-between gap-3 bg-neutral-50/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E53935]/10 text-[#E53935] flex items-center justify-center shrink-0 border border-red-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#111111]">
                    Peta Wilayah Kantor Balai Desa Pilangsari
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Titik Terverifikasi
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Jl. Raya Gesi - Tangen Km. 2, Pilangsari, Kec. Gesi, Kab. Sragen, Jawa Tengah 57262
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2D8FD5] hover:bg-blue-600 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </div>
          </div>

          {/* Embedded Full Map Container */}
          <div className="relative w-full h-[340px] sm:h-[390px] lg:h-[420px] bg-neutral-100">
            <iframe
              title="Peta Lokasi Kantor Desa Pilangsari Sragen"
              src="https://maps.google.com/maps?q=Kantor%20Desa%20Pilangsari%20Gesi%20Sragen%20Jawa%20Tengah&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Map Footer Bar with Geo-coordinates & App Link */}
          <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-100 flex flex-wrap items-center justify-between text-xs text-neutral-600 gap-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E53935]" />
              <span className="font-mono text-neutral-800">Koordinat GPS: 7°22'30.7"S 111°02'09.8"E</span>
              <span className="text-neutral-400 hidden sm:inline">| Ketinggian: 98 mdpl</span>
            </span>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#2D8FD5] font-semibold hover:underline flex items-center gap-1 text-xs"
            >
              <span>Buka di Aplikasi Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DUA KARTU SEJAJAR: PELAYANAN & DARURAT 24 JAM                 */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* KARTU 1: PUSAT PELAYANAN ADMINISTRASI DESA */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-800 flex items-center justify-center font-bold">
                    <Building2 className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#111111] uppercase tracking-wide">
                      Pusat Pelayanan Administrasi Desa
                    </h4>
                    <p className="text-[11px] text-neutral-500">Loket Pelayanan Terpadu Balai Desa</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Layanan Buka
                </span>
              </div>

              <div className="space-y-4 text-xs text-neutral-700">
                {/* Alamat */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Alamat Kantor:</strong>
                    <span className="leading-relaxed">
                      Kompleks Balai Desa Pilangsari, Jl. Raya Gesi - Tangen Km. 2, Kec. Gesi, Kab. Sragen, Jawa Tengah 57262
                    </span>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="block text-neutral-900 font-semibold">Jam Operasional Pelayanan:</strong>
                    <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 space-y-0.5">
                      <div className="flex justify-between font-medium">
                        <span>Senin – Kamis</span>
                        <span className="text-neutral-900 font-bold">08.00 – 15.00 WIB</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Jumat</span>
                        <span className="text-neutral-900 font-bold">08.00 – 11.30 & 13.00 – 14.30 WIB</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 pt-1 border-t border-neutral-200/60 mt-1">
                        Sabtu, Minggu & Hari Libur Nasional : Tutup
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp & Telepon */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2E9E3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Saluran WhatsApp & Telepon:</strong>
                    <a 
                      href="https://wa.me/6281234567890?text=Halo%20Admin%20Desa%20Pilangsari%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20desa"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#2E9E3E] font-bold hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>0812-3456-7890 (Layanan Warga WhatsApp)</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2D8FD5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-semibold mb-0.5">Email Resmi Desa:</strong>
                    <a 
                      href="mailto:kontak@pilangsari-sragen.desa.id"
                      className="text-[#2D8FD5] font-semibold hover:underline"
                    >
                      kontak@pilangsari-sragen.desa.id
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quick Action */}
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-neutral-500">Kebutuhan pengurusan surat online:</span>
              <a 
                href="#/layanan"
                className="font-bold text-[#111111] hover:text-[#E53935] inline-flex items-center gap-1"
              >
                <span>Ajukan Surat Mandiri</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* KARTU 2: KONTAK DARURAT DESA (24 JAM) */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 text-white rounded-2xl p-6 sm:p-7 border border-neutral-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-800">
                <div className="flex items-center gap-2.5 text-[#FFE600]">
                  <div className="w-8 h-8 rounded-lg bg-red-950/80 text-[#E53935] flex items-center justify-center font-bold border border-red-800/80">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase text-white">
                      Kontak Darurat Desa (24 Jam)
                    </h4>
                    <p className="text-[11px] text-neutral-400">Saluran Kedaruratan Medis & Keamanan</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-800/80 font-bold shrink-0">
                  Siaga 24/7
                </span>
              </div>

              {/* 4 Emergency Tiles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                {/* Ambulans Siaga Desa */}
                <div className="p-3.5 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#2E9E3E] font-bold mb-1">
                      <Ambulance className="w-4 h-4" />
                      <span>Ambulans Siaga Desa</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mb-2">Penjemputan pasien gawat darurat & rujukan RS</p>
                  </div>
                  <a 
                    href="tel:081329001122" 
                    className="inline-flex items-center gap-1.5 font-mono text-neutral-100 hover:text-[#FFE600] font-bold text-xs bg-white/10 px-2.5 py-1.5 rounded-lg w-fit"
                  >
                    <PhoneCall className="w-3 h-3 text-[#2E9E3E]" />
                    <span>0813-2900-1122</span>
                  </a>
                </div>

                {/* Bidan Desa */}
                <div className="p-3.5 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
                      <HeartHandshake className="w-4 h-4" />
                      <span>Bidan Desa (Poskesdes)</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mb-2">Persalinan darurat & penanganan ibu-anak</p>
                  </div>
                  <a 
                    href="tel:085733118899" 
                    className="inline-flex items-center gap-1.5 font-mono text-neutral-100 hover:text-[#FFE600] font-bold text-xs bg-white/10 px-2.5 py-1.5 rounded-lg w-fit"
                  >
                    <PhoneCall className="w-3 h-3 text-rose-400" />
                    <span>0857-3311-8899</span>
                  </a>
                </div>

                {/* Bhabinkamtibmas */}
                <div className="p-3.5 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Bhabinkamtibmas Polsek</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mb-2">Keamanan, ketertiban & mediasi konflik warga</p>
                  </div>
                  <a 
                    href="tel:081222334455" 
                    className="inline-flex items-center gap-1.5 font-mono text-neutral-100 hover:text-[#FFE600] font-bold text-xs bg-white/10 px-2.5 py-1.5 rounded-lg w-fit"
                  >
                    <PhoneCall className="w-3 h-3 text-blue-400" />
                    <span>0812-2233-4455</span>
                  </a>
                </div>

                {/* Babinsa Koramil */}
                <div className="p-3.5 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Babinsa Koramil Gesi</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mb-2">Penanganan bencana & koordinasi kewilayahan</p>
                  </div>
                  <a 
                    href="tel:081344556677" 
                    className="inline-flex items-center gap-1.5 font-mono text-neutral-100 hover:text-[#FFE600] font-bold text-xs bg-white/10 px-2.5 py-1.5 rounded-lg w-fit"
                  >
                    <PhoneCall className="w-3 h-3 text-emerald-400" />
                    <span>0813-4455-6677</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Note & Info */}
            <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
              <span>Seluruh panggilan darurat tidak dipungut biaya retribusi.</span>
              <span className="text-[#FFE600] font-bold font-mono">Sragen Tanggap</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
