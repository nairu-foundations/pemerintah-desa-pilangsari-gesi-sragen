import React, { useEffect } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { ProfilSection } from '../components/sections/ProfilSection';
import { useNavigation } from '../context/NavigationContext';

export const ProfilPage: React.FC = () => {
  const { activeSubSection } = useNavigation();

  useEffect(() => {
    if (!activeSubSection) return;

    let targetId = '';
    if (activeSubSection === 'sambutan') {
      targetId = 'sambutan-kades';
    } else if (activeSubSection === 'potensi') {
      targetId = 'potensi';
    } else if (activeSubSection === 'visi-misi' || activeSubSection === 'visi') {
      targetId = 'visi-misi';
    } else if (activeSubSection === 'sejarah') {
      targetId = 'sejarah';
    } else if (activeSubSection === 'demografi') {
      targetId = 'demografi-desa';
    } else if (activeSubSection === 'geografis') {
      targetId = 'geografis';
    }

    if (targetId) {
      const scrollToEl = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      const timer1 = setTimeout(scrollToEl, 60);
      const timer2 = setTimeout(scrollToEl, 250);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [activeSubSection]);

  return (
    <div className="bg-white min-h-screen">
      {/* Single Authoritative Page Header */}
      <PageHeader
        currentPageName="Profil Desa"
        kicker="IDENTITAS & SEJARAH DESA"
        title="Profil & Potensi Desa Pilangsari"
        subtitle="Mengenal visi pembangunan berlandaskan gotong royong, sambutan resmi Kepala Desa, riwayat sejarah luhur, demografi, serta potensi kekayaan alam Kecamatan Gesi, Kabupaten Sragen."
      />

      {/* One Unified Cohesive Profil Section */}
      <ProfilSection showHeader={false} />
    </div>
  );
};
