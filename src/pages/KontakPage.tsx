import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { PetaKontakSection } from '../components/sections/PetaKontakSection';

export const KontakPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        currentPageName="Kontak & Lokasi"
        kicker="PUSAT KANTOR & KEDARURATAN"
        title="Kontak & Lokasi Balai Desa Pilangsari"
        subtitle="Alamat resmi, koordinat geografis kantor desa, jam operasional loket pelayanan, dan kontak darurat 24 jam ambulans desa & aparat kewilayahan."
      />

      <div className="py-2">
        <PetaKontakSection showHeader={false} />
      </div>
    </div>
  );
};
