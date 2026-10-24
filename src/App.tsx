/**
 * Website Resmi Pemerintah Desa Pilangsari
 * Kecamatan Gesi, Kabupaten Sragen, Jawa Tengah
 *
 * Dedicated multi-page sections with sub-section navigation
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Topbar } from './components/common/Topbar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ProfilPage } from './pages/ProfilPage';
import { PemerintahanPage } from './pages/PemerintahanPage';
import { LayananPage } from './pages/LayananPage';
import { InformasiPage } from './pages/InformasiPage';
import { GaleriPage } from './pages/GaleriPage';
import { KontakPage } from './pages/KontakPage';
import { NewsDetailModal } from './components/modals/NewsDetailModal';
import { TicketPrintModal } from './components/modals/TicketPrintModal';
import { MediaManagerModal } from './components/modals/MediaManagerModal';
import { ToastContainer } from './components/common/ToastContainer';

const AppContent: React.FC = () => {
  const { currentRoute } = useNavigation();
  const { isMediaManagerOpen, setIsMediaManagerOpen } = useApp();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'profil':
        return <ProfilPage />;
      case 'pemerintahan':
        return <PemerintahanPage />;
      case 'layanan':
        return <LayananPage />;
      case 'informasi':
        return <InformasiPage />;
      case 'galeri':
        return <GaleriPage />;
      case 'kontak':
        return <KontakPage />;
      case 'beranda':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111] font-body selection:bg-[#FFE600] selection:text-[#111111]">
      {/* 1. Topbar */}
      <Topbar />

      {/* 2. Interactive Navbar with Sub-Sections */}
      <Navbar />

      {/* 3. Dedicated Page Component */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 4. Footer with Minimalist Social Media */}
      <Footer />

      {/* Interactive Global Modals */}
      <NewsDetailModal />
      <TicketPrintModal />
      <MediaManagerModal 
        isOpen={isMediaManagerOpen} 
        onClose={() => setIsMediaManagerOpen(false)} 
      />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </AppProvider>
  );
}
