import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, FileText, ChevronDown, Search, PhoneCall, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoDesa } from './LogoDesa';
import { useNavigation, PageRoute } from '../../context/NavigationContext';
import { useApp } from '../../context/AppContext';

interface SubMenuItem {
  title: string;
  subSectionKey?: string;
  description?: string;
}

interface MenuItem {
  name: string;
  route: PageRoute;
  subItems?: SubMenuItem[];
}

const MENU_ITEMS: MenuItem[] = [
  { 
    name: 'Beranda', 
    route: 'beranda' 
  },
  { 
    name: 'Profil', 
    route: 'profil',
    subItems: [
      { title: 'Data Sensus & Demografi 2026', subSectionKey: 'demografi', description: 'Registrasi kependudukan dan kewilayahan Semester I Tahun 2026' },
      { title: 'Sambutan Kepala Desa', subSectionKey: 'sambutan', description: 'Pesan resmi Kepala Desa Supriyadi, S.Sos.' },
      { title: 'Visi & 5 Misi Pembangunan', subSectionKey: 'visi-misi', description: 'Arah dan sasaran strategis Desa Pilangsari' },
      { title: 'Sejarah & Asal-Usul Desa', subSectionKey: 'sejarah', description: 'Histori luhur dan kearifan lokal Sukowati' },
      { title: 'Batas Wilayah & Geografis', subSectionKey: 'geografis', description: 'Luas, batas administratif, dan topografi' },
      { title: 'Potensi Komoditas Desa', subSectionKey: 'potensi', description: 'Pertanian, UMKM, dan sumber daya alam' }
    ]
  },
  { 
    name: 'Pemerintahan', 
    route: 'pemerintahan'
  },
  { 
    name: 'Layanan', 
    route: 'layanan',
    subItems: [
      { title: 'Permohonan Surat Online', subSectionKey: 'surat', description: 'SKTM, SKU, Domisili, dan pengantar KTP' },
      { title: 'Pengaduan Warga (Lapor)', subSectionKey: 'pengaduan', description: 'Sampaikan aspirasi dan keluhan fasilitas umum' },
      { title: 'Cek Status Tiket & Dokumen', subSectionKey: 'status', description: 'Lacak proses verifikasi dan cetak tanda terima' }
    ]
  },
  { 
    name: 'Informasi', 
    route: 'informasi',
    subItems: [
      { title: 'Warta Berita Desa', subSectionKey: 'berita', description: 'Kabar pembangunan dan kegiatan masyarakat' },
      { title: 'Pengumuman Resmi', subSectionKey: 'pengumuman', description: 'Surat edaran, bantuan sosial, dan agenda publik' },
      { title: 'Agenda Kegiatan Desa', subSectionKey: 'agenda', description: 'Jadwal musyawarah, posyandu, dan rembug tani' }
    ]
  },
  { 
    name: 'Galeri', 
    route: 'galeri',
    subItems: [
      { title: 'Pembangunan & Fasilitas', subSectionKey: 'pembangunan', description: 'Infrastruktur jalan tani, talud, dan sarana umum' },
      { title: 'Seni & Budaya Tradisional', subSectionKey: 'budaya', description: 'Karawitan, tradisi bersih desa, dan kearifan lokal' },
      { title: 'Pertanian & Alam Desa', subSectionKey: 'pertanian', description: 'Panen raya dan panorama persawahan' },
      { title: 'Kemasyarakatan & Warga', subSectionKey: 'kemasyarakatan', description: 'Gotong royong, posyandu, dan pertemuan RT' }
    ]
  },
  { 
    name: 'Kontak', 
    route: 'kontak'
  },
];

export const Navbar: React.FC = () => {
  const { currentRoute, navigateTo } = useNavigation();
  const { setIsMediaManagerOpen } = useApp();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when mobile/tablet menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleItemClick = (route: PageRoute, subSection?: string) => {
    navigateTo(route, subSection);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 
        Solid, Fixed/Sticky Navbar:
        - Permanent solid white background ('bg-white') with subtle border and shadow
        - No transparency change or scroll-driven background jitter
        - Pinned securely at top-0 z-50
      */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-3">
            
            {/* Left: Authentic Logo & Official Brand Lockup */}
            <div 
              onClick={() => handleItemClick('beranda')}
              className="flex items-center gap-3 group shrink-0 cursor-pointer select-none"
            >
              <div className="transition-transform duration-200 group-hover:scale-105 shrink-0">
                <LogoDesa size={48} className="h-11 sm:h-12 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base tracking-tight text-[#111111] leading-tight uppercase group-hover:text-[#E53935] transition-colors">
                  PEMERINTAH DESA PILANGSARI
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-500 font-medium leading-tight mt-0.5">
                  Kec. Gesi, Kab. Sragen, Jawa Tengah
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links (Visible on desktop: >= 1280px / xl) */}
            <nav className="hidden xl:flex items-center gap-1">
              {MENU_ITEMS.map((item) => {
                const isActive = currentRoute === item.route;
                const hasSub = Boolean(item.subItems && item.subItems.length > 0);
                const isDropdownOpen = openDropdown === item.name;

                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasSub && handleMouseEnter(item.name)}
                    onMouseLeave={() => hasSub && handleMouseLeave()}
                  >
                    <button
                      onClick={() => handleItemClick(item.route)}
                      className={`flex items-center gap-1 px-3 py-2 text-xs font-bold rounded-lg transition-all duration-150 cursor-pointer ${
                        isActive 
                          ? 'text-[#111111] bg-yellow-50/90 border border-yellow-300 font-extrabold shadow-2xs' 
                          : 'text-neutral-700 hover:text-[#111111] hover:bg-neutral-100/80 border border-transparent'
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasSub && (
                        <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-neutral-900' : ''
                        }`} />
                      )}
                    </button>

                    {/* Desktop Dropdown Menu */}
                    <AnimatePresence>
                      {hasSub && isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute left-0 top-full pt-1.5 w-64 z-50"
                        >
                          <div className="bg-white rounded-xl shadow-lg border border-neutral-200 py-1.5 px-1 overflow-hidden">
                            {item.subItems?.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleItemClick(item.route, sub.subSectionKey);
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#FFFBE6] transition-colors group cursor-pointer block"
                              >
                                <span className="font-heading font-semibold text-xs text-[#111111] group-hover:text-[#E53935] transition-colors block">
                                  {sub.title}
                                </span>
                                {sub.description && (
                                  <span className="text-[11px] text-neutral-500 line-clamp-1 block mt-0.5">
                                    {sub.description}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: CTA Button on Desktop & Tablet */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => handleItemClick('layanan', 'surat')}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#FFE600] hover:bg-[#F2DA00] active:scale-95 shadow-xs border border-yellow-400 transition-all duration-150 whitespace-nowrap cursor-pointer group"
              >
                <FileText className="w-3.5 h-3.5 text-[#111111]" />
                <span>Ajukan Layanan</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Tablet & Mobile Hamburger / Close Toggle Button - Fixed geometry to prevent layout shift */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`xl:hidden w-10 h-10 rounded-lg border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                  isMobileMenuOpen
                    ? 'border-red-300 bg-red-50 text-[#E53935] hover:bg-red-100 shadow-xs'
                    : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-800'
                }`}
                aria-label={isMobileMenuOpen ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#E53935]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Full-Screen Drawer + Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-20 bg-black/50 backdrop-blur-xs z-40 xl:hidden"
            />

            {/* Slide-down Drawer Menu with dynamic viewport height and smooth scrolling */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed left-0 right-0 top-20 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white border-b border-neutral-200 shadow-2xl z-50 xl:hidden overscroll-contain"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
                
                {/* Top Header in Drawer */}
                <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
                  <LogoDesa size={20} className="h-5 w-auto inline-block" />
                  <div>
                    <span className="text-xs font-heading font-extrabold text-[#111111] uppercase tracking-wider block">
                      Menu Navigasi Desa
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      Website Resmi Desa Pilangsari
                    </span>
                  </div>
                </div>
                
                {/* Navigation Links Grid for Tablet & Single Column for Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-2.5">
                  {MENU_ITEMS.map((item) => {
                    const isActive = currentRoute === item.route;
                    const hasSub = Boolean(item.subItems && item.subItems.length > 0);
                    const isExpanded = mobileExpanded === item.name;

                    return (
                      <div 
                        key={item.name} 
                        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                          isActive 
                            ? 'border-yellow-400 bg-yellow-50/70 shadow-2xs' 
                            : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between p-1.5">
                          <button
                            onClick={() => {
                              if (hasSub) {
                                setMobileExpanded(isExpanded ? null : item.name);
                              } else {
                                handleItemClick(item.route);
                              }
                            }}
                            className={`flex-1 text-left px-3 py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-between ${
                              isActive 
                                ? 'text-[#111111] font-extrabold' 
                                : 'text-neutral-800 hover:text-black'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                              )}
                              <span>{item.name}</span>
                            </span>

                            {hasSub && (
                              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-[#E53935]' : ''
                              }`} />
                            )}
                          </button>
                        </div>

                        {/* Collapsible Sub-Items */}
                        {hasSub && isExpanded && (
                          <div className="px-2.5 pb-2.5 pt-1 border-t border-neutral-200/80 space-y-1 bg-white">
                            {/* Main Page Shortcut */}
                            <button
                              onClick={() => handleItemClick(item.route)}
                              className="w-full text-left py-2 px-3 rounded-lg text-xs font-bold text-neutral-900 bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 transition-colors cursor-pointer flex items-center justify-between"
                            >
                              <span>Lihat Halaman {item.name} Lengkap</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#E53935]" />
                            </button>

                            {item.subItems?.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleItemClick(item.route, sub.subSectionKey)}
                                className="w-full text-left py-2 px-3 rounded-lg text-xs text-neutral-700 hover:text-[#111111] hover:bg-[#FFFBE6] transition-colors cursor-pointer block font-medium border border-transparent hover:border-yellow-200 group"
                              >
                                <span className="block font-semibold group-hover:text-[#E53935] transition-colors">
                                  • {sub.title}
                                </span>
                                {sub.description && (
                                  <span className="block text-[11px] text-neutral-500 pl-3 line-clamp-1 mt-0.5">
                                    {sub.description}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Quick Action CTAs */}
                <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => handleItemClick('layanan', 'surat')}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#FFE600] hover:bg-yellow-400 active:scale-98 shadow-sm font-heading cursor-pointer border border-yellow-400"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Ajukan Layanan Surat</span>
                  </button>

                  <button
                    onClick={() => handleItemClick('layanan', 'status')}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-800 bg-neutral-100 hover:bg-neutral-200 active:scale-98 font-heading cursor-pointer border border-neutral-300"
                  >
                    <Search className="w-4 h-4" />
                    <span>Cek Status Tiket</span>
                  </button>
                </div>

                {/* Media Manager in Mobile/Tablet Drawer */}
                <div className="pt-1">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMediaManagerOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-neutral-800 bg-yellow-50 hover:bg-yellow-100 border border-yellow-300 transition-colors cursor-pointer"
                  >
                    <FolderOpen className="w-4 h-4 text-[#E53935]" />
                    <span>Struktur & Panduan Ganti Foto Desa (1 Folder src/foto-desa/)</span>
                  </button>
                </div>

                {/* Hotline Info in Drawer */}
                <div className="pt-2 pb-1 text-center text-[11px] text-neutral-500 flex items-center justify-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-[#2E9E3E]" />
                  <span>Hotline Pelayanan: 0812-3456-7890 (Senin - Jumat 08.00 - 15.00 WIB)</span>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
