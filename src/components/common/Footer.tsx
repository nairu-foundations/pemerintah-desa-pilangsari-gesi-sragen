import React from 'react';
import { LogoDesa } from './LogoDesa';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Clock, 
  MessageCircle,
  FolderOpen
} from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { setIsMediaManagerOpen } = useApp();
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t-4 border-[#FFE600] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <LogoDesa size={56} className="h-14 w-auto" />
              <div>
                <span className="font-heading font-extrabold text-sm sm:text-base text-white uppercase tracking-tight block">
                  PEMERINTAH DESA PILANGSARI
                </span>
                <span className="text-xs text-[#FFE600] font-medium block">
                  Kec. Gesi, Kab. Sragen, Jawa Tengah
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Portal pelayanan publik daring Pemerintah Desa Pilangsari. 
              Melayani dengan integritas, transparansi, dan gotong royong demi kemakmuran warga Bumi Sukowati.
            </p>

            <div className="pt-2 text-xs text-neutral-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E53935] shrink-0 mt-0.5" />
                <span>Jl. Raya Gesi - Tangen Km. 2, Pilangsari, Gesi, Sragen 57262</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2E9E3E] shrink-0" />
                <span>0812-3456-7890 (Layanan Warga)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2D8FD5] shrink-0" />
                <span>kontak@pilangsari-sragen.desa.id</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFE600] pb-2 border-b border-neutral-800">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><button onClick={() => navigateTo('beranda')} className="hover:text-white transition-colors cursor-pointer text-left">Beranda</button></li>
              <li><button onClick={() => navigateTo('profil')} className="hover:text-white transition-colors cursor-pointer text-left">Profil Desa</button></li>
              <li><button onClick={() => navigateTo('pemerintahan')} className="hover:text-white transition-colors cursor-pointer text-left">Pemerintahan</button></li>
              <li><button onClick={() => navigateTo('layanan', 'surat')} className="hover:text-white transition-colors cursor-pointer text-left">Layanan Surat</button></li>
              <li><button onClick={() => navigateTo('layanan', 'pengaduan')} className="hover:text-white transition-colors cursor-pointer text-left">Pengaduan Warga</button></li>
              <li><button onClick={() => navigateTo('informasi')} className="hover:text-white transition-colors cursor-pointer text-left">Warta & Berita</button></li>
              <li><button onClick={() => navigateTo('galeri')} className="hover:text-white transition-colors cursor-pointer text-left">Galeri Foto</button></li>
              <li><button onClick={() => navigateTo('kontak')} className="hover:text-white transition-colors cursor-pointer text-left">Peta & Kontak</button></li>
              <li className="pt-1 border-t border-neutral-800">
                <button 
                  onClick={() => setIsMediaManagerOpen(true)} 
                  className="hover:text-[#FFE600] text-yellow-300 font-semibold transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FolderOpen className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>Kelola Foto (1 Folder)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Media Sosial Minimalist */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFE600] pb-2 border-b border-neutral-800">
              Media Sosial Resmi
            </h4>
            <p className="text-xs text-neutral-400">
              Saluran publikasi resmi kegiatan dan dokumentasi kemasyarakatan:
            </p>

            {/* Minimalist Social Links */}
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                aria-label="Facebook Pemerintah Desa Pilangsari"
              >
                <span className="w-6 h-6 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center font-bold text-[11px] text-[#1877F2] group-hover:border-neutral-700">
                  f
                </span>
                <span>Facebook Desa</span>
                <ExternalLink className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 ml-auto" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                aria-label="Instagram Desa Pilangsari"
              >
                <span className="w-6 h-6 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center font-bold text-[10px] text-rose-400 group-hover:border-neutral-700">
                  IG
                </span>
                <span>Instagram @desapilangsari</span>
                <ExternalLink className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 ml-auto" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                aria-label="YouTube Desa Pilangsari"
              >
                <span className="w-6 h-6 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center font-bold text-[10px] text-red-500 group-hover:border-neutral-700">
                  ▶
                </span>
                <span>YouTube Desa</span>
                <ExternalLink className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 ml-auto" />
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                aria-label="WhatsApp Layanan Warga"
              >
                <span className="w-6 h-6 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 group-hover:border-neutral-700">
                  <MessageCircle className="w-3.5 h-3.5" />
                </span>
                <span>WhatsApp Pengaduan</span>
                <ExternalLink className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 ml-auto" />
              </a>
            </div>
          </div>

          {/* Jam Pelayanan & Tautan Instansi Terkait */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Jam Pelayanan Minimalist */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFE600] pb-2 border-b border-neutral-800">
                Jam Pelayanan Kantor
              </h4>
              <div className="text-xs text-neutral-300 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>Senin – Kamis : 08.00 – 15.00 WIB</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>Jumat : 08.00 – 11.30 & 13.00 – 14.30 WIB</span>
                </div>
                <p className="text-[11px] text-neutral-500 pt-0.5">Sabtu, Minggu & Hari Libur: Tutup</p>
              </div>
            </div>

            {/* Tautan Eksternal */}
            <div className="space-y-2 pt-2 border-t border-neutral-800">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Tautan Instansi
              </h5>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                <li>
                  <a href="https://sragenkab.go.id" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Portal Kab. Sragen</span>
                    <ExternalLink className="w-3 h-3 text-neutral-600" />
                  </a>
                </li>
                <li>
                  <a href="https://kemendesa.go.id" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Kementerian Desa PDTT</span>
                    <ExternalLink className="w-3 h-3 text-neutral-600" />
                  </a>
                </li>
                <li>
                  <a href="https://dispendukcapil.sragenkab.go.id" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>Disdukcapil Sragen</span>
                    <ExternalLink className="w-3 h-3 text-neutral-600" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()} Pemerintah Desa Pilangsari, Kecamatan Gesi, Kabupaten Sragen, Jawa Tengah.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-neutral-400">
            <span>Semboyan Sragen:</span>
            <strong className="text-[#FFE600]">"Bumi Sukowati Asri"</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};
