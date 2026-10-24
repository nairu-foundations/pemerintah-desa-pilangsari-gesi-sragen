import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = 
  | 'beranda' 
  | 'profil' 
  | 'pemerintahan' 
  | 'layanan' 
  | 'informasi' 
  | 'galeri' 
  | 'kontak';

interface NavigationContextType {
  currentRoute: PageRoute;
  activeSubSection: string | null;
  navigateTo: (route: PageRoute, subSection?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getRouteFromHash = (): { route: PageRoute; subSection: string | null } => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const [path, sub] = hash.split('?tab=');
    const validRoutes: PageRoute[] = ['beranda', 'profil', 'pemerintahan', 'layanan', 'informasi', 'galeri', 'kontak'];
    
    const cleanPath = path ? (path.split('/')[0] as PageRoute) : 'beranda';
    const route = validRoutes.includes(cleanPath) ? cleanPath : 'beranda';
    return { route, subSection: sub || null };
  };

  const initial = getRouteFromHash();
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(initial.route);
  const [activeSubSection, setActiveSubSection] = useState<string | null>(initial.subSection);

  const scrollToTarget = (subSection: string) => {
    const idMap: Record<string, string> = {
      'demografi': 'demografi-desa',
      'sambutan': 'sambutan-kades',
      'visi-misi': 'visi-misi',
      'visi': 'visi-misi',
      'sejarah': 'sejarah',
      'geografis': 'geografis',
      'potensi': 'potensi',
      'surat': 'layanan',
      'pengaduan': 'layanan',
      'status': 'layanan',
      'berita': 'informasi',
      'pengumuman': 'informasi',
      'agenda': 'informasi',
      'pembangunan': 'galeri',
      'budaya': 'galeri',
      'pertanian': 'galeri',
      'kemasyarakatan': 'galeri'
    };

    const targetId = idMap[subSection] || subSection;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const { route, subSection } = getRouteFromHash();
      setCurrentRoute(route);
      setActiveSubSection(subSection);
      if (subSection) {
        setTimeout(() => scrollToTarget(subSection), 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute, subSection?: string) => {
    setCurrentRoute(route);
    setActiveSubSection(subSection || null);
    
    if (subSection) {
      window.location.hash = `#/${route}?tab=${subSection}`;
      // Schedule smooth scroll to sub-section element with sequential attempts to support mount transition
      setTimeout(() => scrollToTarget(subSection), 80);
      setTimeout(() => scrollToTarget(subSection), 260);
    } else {
      window.location.hash = `#/${route}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, activeSubSection, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
