import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { LayananSection } from '../components/sections/LayananSection';
import { useNavigation } from '../context/NavigationContext';

export const LayananPage: React.FC = () => {
  const { activeSubSection } = useNavigation();

  const tab = activeSubSection === 'pengaduan' 
    ? 'pengaduan' 
    : activeSubSection === 'status' 
    ? 'cek-status' 
    : 'surat';

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        currentPageName="Layanan Desa"
        kicker="PELAYANAN MANDIRI ONLINE"
        title="Layanan Digital Warga Pilangsari"
        subtitle="Permohonan surat pengantar administrasi, penyampaian aspirasi warga secara transparan, serta pelacakan status dokumen berbasis kode tiket mandiri."
      />

      <div className="py-2">
        <LayananSection defaultTab={tab} showHeader={false} />
      </div>
    </div>
  );
};
