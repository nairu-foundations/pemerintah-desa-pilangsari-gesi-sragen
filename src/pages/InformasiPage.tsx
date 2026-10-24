import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { InformasiSection } from '../components/sections/InformasiSection';
import { useNavigation } from '../context/NavigationContext';

export const InformasiPage: React.FC = () => {
  const { activeSubSection } = useNavigation();

  const tab = activeSubSection === 'pengumuman' 
    ? 'pengumuman' 
    : activeSubSection === 'agenda' 
    ? 'agenda' 
    : 'berita';

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        currentPageName="Informasi Desa"
        kicker="WARTA & TRANSPARANSI PUBLIK"
        title="Pusat Informasi & Agenda Desa"
        subtitle="Warta pembangunan desa, program bantuan sosial, pengumuman penting bagi warga, dan kalender agenda kegiatan kemasyarakatan Desa Pilangsari."
      />

      <div className="py-2">
        <InformasiSection defaultTab={tab} showHeader={false} />
      </div>
    </div>
  );
};
