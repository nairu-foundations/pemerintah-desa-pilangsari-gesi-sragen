import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { GaleriSection } from '../components/sections/GaleriSection';
import { useNavigation } from '../context/NavigationContext';

export const GaleriPage: React.FC = () => {
  const { activeSubSection } = useNavigation();

  const filter = activeSubSection === 'pertanian'
    ? 'Pertanian'
    : activeSubSection === 'kemasyarakatan'
    ? 'Kemasyarakatan'
    : activeSubSection === 'pembangunan'
    ? 'Pembangunan'
    : activeSubSection === 'budaya'
    ? 'Budaya'
    : 'Semua';

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        currentPageName="Galeri Dokumentasi"
        kicker="POTRET KEGIATAN & PEMBANGUNAN"
        title="Galeri Dokumentasi Desa Pilangsari"
        subtitle="Dokumentasi visual gotong royong, pembangunan jalan & sarana pertanian, pelayanan posyandu, dan pelestarian budaya tradisional di Desa Pilangsari."
      />

      <div className="py-2">
        <GaleriSection defaultFilter={filter} showHeader={false} />
      </div>
    </div>
  );
};
