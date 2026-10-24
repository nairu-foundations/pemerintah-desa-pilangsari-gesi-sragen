import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PemerintahanSection } from '../components/sections/PemerintahanSection';

export const PemerintahanPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        currentPageName="Pemerintahan Desa"
        kicker="STRUKTUR ORGANISASI & PAMONG"
        title="Pemerintahan Desa Pilangsari"
        subtitle="Jajaran aparatur pemerintah desa dan Badan Permusyawaratan Desa (BPD) yang berdedikasi melayani masyarakat dengan integritas, profesionalitas, dan transparansi."
      />

      <div className="py-2">
        <PemerintahanSection showHeader={false} />
      </div>
    </div>
  );
};
