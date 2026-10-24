import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PermohonanSurat, 
  Pengaduan, 
  Berita, 
  Pengumuman, 
  Agenda, 
  GaleriItem, 
  PerangkatDesa
} from '../types';
import { 
  INITIAL_PERANGKAT_DESA, 
  INITIAL_BERITA, 
  INITIAL_PENGUMUMAN, 
  INITIAL_AGENDA, 
  INITIAL_GALERI, 
  INITIAL_SURAT_SAMPLES, 
  INITIAL_PENGADUAN_SAMPLES 
} from '../data/initialData';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface AppContextType {
  // Lists
  suratList: PermohonanSurat[];
  pengaduanList: Pengaduan[];
  beritaList: Berita[];
  pengumumanList: Pengumuman[];
  agendaList: Agenda[];
  galeriList: GaleriItem[];
  perangkatDesaList: PerangkatDesa[];
  
  // Public Citizen Actions
  tambahPermohonanSurat: (data: Omit<PermohonanSurat, 'id' | 'kodeTiket' | 'status' | 'tanggalDiajukan'>) => string;
  tambahPengaduan: (data: Omit<Pengaduan, 'id' | 'kodeTiket' | 'status' | 'tanggalLapor'>) => string;
  cariStatusTiket: (kode: string) => { tipe: 'surat' | 'pengaduan'; data: PermohonanSurat | Pengaduan } | null;
  
  // UI Dialogs
  selectedBerita: Berita | null;
  setSelectedBerita: (b: Berita | null) => void;
  printReceiptData: { tipe: 'surat' | 'pengaduan'; item: PermohonanSurat | Pengaduan } | null;
  setPrintReceiptData: (data: { tipe: 'surat' | 'pengaduan'; item: PermohonanSurat | Pengaduan } | null) => void;
  isMediaManagerOpen: boolean;
  setIsMediaManagerOpen: (open: boolean) => void;

  // Toast
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  dismissToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load from LocalStorage or initialize with authentic data
  const [suratList, setSuratList] = useState<PermohonanSurat[]>(() => {
    const saved = localStorage.getItem('pilangsari_surat_list');
    return saved ? JSON.parse(saved) : INITIAL_SURAT_SAMPLES;
  });

  const [pengaduanList, setPengaduanList] = useState<Pengaduan[]>(() => {
    const saved = localStorage.getItem('pilangsari_pengaduan_list');
    return saved ? JSON.parse(saved) : INITIAL_PENGADUAN_SAMPLES;
  });

  const [beritaList] = useState<Berita[]>(() => {
    const saved = localStorage.getItem('pilangsari_berita_list');
    return saved ? JSON.parse(saved) : INITIAL_BERITA;
  });

  const [pengumumanList] = useState<Pengumuman[]>(() => {
    const saved = localStorage.getItem('pilangsari_pengumuman_list');
    return saved ? JSON.parse(saved) : INITIAL_PENGUMUMAN;
  });

  const [agendaList] = useState<Agenda[]>(() => {
    const saved = localStorage.getItem('pilangsari_agenda_list');
    return saved ? JSON.parse(saved) : INITIAL_AGENDA;
  });

  const [galeriList] = useState<GaleriItem[]>(INITIAL_GALERI);
  const [perangkatDesaList] = useState<PerangkatDesa[]>(INITIAL_PERANGKAT_DESA);

  const [selectedBerita, setSelectedBerita] = useState<Berita | null>(null);
  const [printReceiptData, setPrintReceiptData] = useState<{ tipe: 'surat' | 'pengaduan'; item: PermohonanSurat | Pengaduan } | null>(null);
  const [isMediaManagerOpen, setIsMediaManagerOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('pilangsari_surat_list', JSON.stringify(suratList));
  }, [suratList]);

  useEffect(() => {
    localStorage.setItem('pilangsari_pengaduan_list', JSON.stringify(pengaduanList));
  }, [pengaduanList]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const tambahPermohonanSurat = (data: Omit<PermohonanSurat, 'id' | 'kodeTiket' | 'status' | 'tanggalDiajukan'>) => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const kodeTiket = `SRT-PLS-2026-${randomNum}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newSurat: PermohonanSurat = {
      ...data,
      id: `srt-${Date.now()}`,
      kodeTiket,
      status: 'Diterima',
      tanggalDiajukan: formattedDate,
      catatanPetugas: 'Permohonan berhasil didaftarkan. Sedang dalam antrean verifikasi berkas oleh pamong desa.',
      petugas: 'Sistem Layanan Mandiri Desa'
    };

    setSuratList(prev => [newSurat, ...prev]);
    showToast(`Permohonan surat berhasil dikirim! Kode Tiket: ${kodeTiket}`, 'success');
    return kodeTiket;
  };

  const tambahPengaduan = (data: Omit<Pengaduan, 'id' | 'kodeTiket' | 'status' | 'tanggalLapor'>) => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const kodeTiket = `PLS-2026-${randomNum}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newPengaduan: Pengaduan = {
      ...data,
      id: `pgd-${Date.now()}`,
      kodeTiket,
      status: 'Diterima',
      tanggalLapor: formattedDate,
      tanggapanPetugas: 'Aspirasi / pengaduan Anda telah tercatat dalam sistem desa dan segera didisposisikan ke instansi/perangkat terkait.',
      petugas: 'Sekretariat Desa'
    };

    setPengaduanList(prev => [newPengaduan, ...prev]);
    showToast(`Pengaduan berhasil disampaikan! Kode Tiket: ${kodeTiket}`, 'success');
    return kodeTiket;
  };

  const cariStatusTiket = (kode: string) => {
    const cleaned = kode.trim().toUpperCase();
    const foundSurat = suratList.find(s => s.kodeTiket.toUpperCase() === cleaned);
    if (foundSurat) {
      return { tipe: 'surat' as const, data: foundSurat };
    }
    const foundPengaduan = pengaduanList.find(p => p.kodeTiket.toUpperCase() === cleaned);
    if (foundPengaduan) {
      return { tipe: 'pengaduan' as const, data: foundPengaduan };
    }
    return null;
  };

  return (
    <AppContext.Provider value={{
      suratList,
      pengaduanList,
      beritaList,
      pengumumanList,
      agendaList,
      galeriList,
      perangkatDesaList,
      tambahPermohonanSurat,
      tambahPengaduan,
      cariStatusTiket,
      selectedBerita,
      setSelectedBerita,
      printReceiptData,
      setPrintReceiptData,
      isMediaManagerOpen,
      setIsMediaManagerOpen,
      toasts,
      showToast,
      dismissToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
