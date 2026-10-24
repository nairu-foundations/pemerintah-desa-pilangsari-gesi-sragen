import React, { useState } from 'react';
import { 
  FileText, 
  MessageSquare, 
  Search, 
  CheckCircle2, 
  Clock, 
  Upload, 
  Printer, 
  ArrowRight, 
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Check,
  XCircle,
  FileCheck
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useApp } from '../../context/AppContext';
import { SuratType, KategoriPengaduan, PermohonanSurat, Pengaduan } from '../../types';

interface LayananSectionProps {
  defaultTab?: 'surat' | 'pengaduan' | 'cek-status';
  showHeader?: boolean;
}

export const LayananSection: React.FC<LayananSectionProps> = ({ 
  defaultTab = 'surat',
  showHeader = true
}) => {
  const { 
    tambahPermohonanSurat, 
    tambahPengaduan, 
    cariStatusTiket, 
    setPrintReceiptData 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'surat' | 'pengaduan' | 'cek-status'>(defaultTab);

  React.useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  // FORM 1: Permohonan Surat State
  const [suratForm, setSuratForm] = useState({
    namaLengkap: '',
    nik: '',
    noHp: '',
    jenisSurat: 'Surat Keterangan Usaha (SKU)' as SuratType,
    keperluan: '',
    alamat: 'Dusun Pilang, RT 01 / RW 01',
    namaBerkas: '',
    honeypot: '',
    mathAnswer: ''
  });
  const [isSubmittingSurat, setIsSubmittingSurat] = useState(false);
  const [createdSuratTiket, setCreatedSuratTiket] = useState<string | null>(null);

  // FORM 2: Pengaduan State
  const [pengaduanForm, setPengaduanForm] = useState({
    namaPelapor: '',
    isAnonim: false,
    nik: '',
    noHp: '',
    kategori: 'Infrastruktur & Jalan' as KategoriPengaduan,
    lokasi: '',
    isiLaporan: '',
    namaLampiran: '',
    honeypot: '',
    mathAnswer: ''
  });
  const [isSubmittingPengaduan, setIsSubmittingPengaduan] = useState(false);
  const [createdPengaduanTiket, setCreatedPengaduanTiket] = useState<string | null>(null);

  // FORM 3: Cek Status State
  const [searchCode, setSearchCode] = useState('');
  const [searchResult, setSearchResult] = useState<{
    tipe: 'surat' | 'pengaduan';
    data: PermohonanSurat | Pengaduan;
  } | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Submit Surat Handler
  const handleSuratSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suratForm.honeypot) return; // spam bot detected
    if (suratForm.mathAnswer.trim() !== '7') {
      alert('Pertanyaan keamanan salah. Berapakah 4 + 3? Jawaban: 7');
      return;
    }
    if (suratForm.nik.length !== 16 || !/^\d+$/.test(suratForm.nik)) {
      alert('Nomor Induk Kependudukan (NIK) harus tepat 16 digit angka!');
      return;
    }

    setIsSubmittingSurat(true);
    setTimeout(() => {
      const tiket = tambahPermohonanSurat({
        namaLengkap: suratForm.namaLengkap,
        nik: suratForm.nik,
        noHp: suratForm.noHp,
        jenisSurat: suratForm.jenisSurat,
        keperluan: suratForm.keperluan,
        alamat: suratForm.alamat,
        namaBerkas: suratForm.namaBerkas || 'Dokumen_Persyaratan_Pemohon.pdf'
      });
      setCreatedSuratTiket(tiket);
      setIsSubmittingSurat(false);
      setSuratForm({
        namaLengkap: '',
        nik: '',
        noHp: '',
        jenisSurat: 'Surat Keterangan Usaha (SKU)',
        keperluan: '',
        alamat: 'Dusun Pilang, RT 01 / RW 01',
        namaBerkas: '',
        honeypot: '',
        mathAnswer: ''
      });
    }, 700);
  };

  // Submit Pengaduan Handler
  const handlePengaduanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pengaduanForm.honeypot) return;
    if (pengaduanForm.mathAnswer.trim() !== '8') {
      alert('Pertanyaan keamanan salah. Berapakah 5 + 3? Jawaban: 8');
      return;
    }

    setIsSubmittingPengaduan(true);
    setTimeout(() => {
      const tiket = tambahPengaduan({
        namaPelapor: pengaduanForm.isAnonim ? 'Warga Anonim' : pengaduanForm.namaPelapor,
        isAnonim: pengaduanForm.isAnonim,
        nik: pengaduanForm.isAnonim ? undefined : pengaduanForm.nik,
        noHp: pengaduanForm.noHp,
        kategori: pengaduanForm.kategori,
        lokasi: pengaduanForm.lokasi,
        isiLaporan: pengaduanForm.isiLaporan,
        namaLampiran: pengaduanForm.namaLampiran || (pengaduanForm.isiLaporan ? 'Bukti_Foto_Kejadian.jpg' : undefined)
      });
      setCreatedPengaduanTiket(tiket);
      setIsSubmittingPengaduan(false);
      setPengaduanForm({
        namaPelapor: '',
        isAnonim: false,
        nik: '',
        noHp: '',
        kategori: 'Infrastruktur & Jalan',
        lokasi: '',
        isiLaporan: '',
        namaLampiran: '',
        honeypot: '',
        mathAnswer: ''
      });
    }, 700);
  };

  // Search Ticket Handler
  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode.trim()) return;
    const res = cariStatusTiket(searchCode);
    setSearchResult(res);
    setHasSearched(true);
  };

  return (
    <section 
      id="layanan" 
      className={`bg-white relative ${showHeader ? 'py-20' : 'pt-4 pb-16'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeader && (
          <SectionHeader
            kicker="PELAYANAN PUBLIK DIGITAL TERPADU"
            title="Layanan Mandiri Warga Pilangsari"
            subtitle="Permohonan surat pengantar online, pengaduan aspirasi masyarakat, serta pelacakan status dokumen secara transparan dan mudah."
          />
        )}

        {/* 3 Main Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          
          <button
            onClick={() => { setActiveTab('surat'); setCreatedSuratTiket(null); }}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm tracking-wide transition-all ${
              activeTab === 'surat'
                ? 'bg-[#111111] text-[#FFE600] shadow-md border-2 border-[#111111]'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border-2 border-transparent'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Permohonan Surat Online</span>
          </button>

          <button
            onClick={() => { setActiveTab('pengaduan'); setCreatedPengaduanTiket(null); }}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm tracking-wide transition-all ${
              activeTab === 'pengaduan'
                ? 'bg-[#111111] text-[#FFE600] shadow-md border-2 border-[#111111]'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border-2 border-transparent'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pengaduan & Aspirasi Warga</span>
          </button>

          <button
            onClick={() => setActiveTab('cek-status')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm tracking-wide transition-all ${
              activeTab === 'cek-status'
                ? 'bg-[#111111] text-[#FFE600] shadow-md border-2 border-[#111111]'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border-2 border-transparent'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Cek Status Tiket / Layanan</span>
          </button>

        </div>

        {/* ============================================================ */}
        {/* TAB 1: FORM PERMOHONAN SURAT ONLINE                         */}
        {/* ============================================================ */}
        {activeTab === 'surat' && (
          <div className="max-w-4xl mx-auto bg-neutral-50 rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm animate-fadeIn">
            
            {createdSuratTiket ? (
              <div className="bg-white rounded-xl p-8 border-2 border-emerald-500 text-center space-y-5 animate-scaleUp">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2E9E3E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2E9E3E]">
                    Permohonan Berhasil Dikirimkan
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#111111]">
                    Kode Tiket Registrasi Surat Anda:
                  </h3>
                  <div className="inline-block px-5 py-2.5 bg-yellow-100 border-2 border-yellow-400 rounded-lg text-xl sm:text-2xl font-mono font-extrabold text-[#111111] tracking-wider select-all">
                    {createdSuratTiket}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
                  Harap simpan atau catat kode tiket di atas. Anda dapat menggunakan kode tersebut pada tab <strong>"Cek Status Tiket"</strong> untuk memantau proses verifikasi dan penyelesaian surat oleh pamong desa.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      const res = cariStatusTiket(createdSuratTiket);
                      if (res) setPrintReceiptData({ tipe: res.tipe, item: res.data });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Printer className="w-4 h-4 text-[#FFE600]" />
                    <span>Cetak Tanda Terima</span>
                  </button>

                  <button
                    onClick={() => {
                      setSearchCode(createdSuratTiket);
                      setActiveTab('cek-status');
                      const res = cariStatusTiket(createdSuratTiket);
                      setSearchResult(res);
                      setHasSearched(true);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFE600] text-[#111111] hover:bg-yellow-400 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    <span>Pantau Langsung Status</span>
                  </button>

                  <button
                    onClick={() => setCreatedSuratTiket(null)}
                    className="px-4 py-2.5 rounded-lg border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    Buat Surat Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSuratSubmit} className="space-y-6">
                
                <div className="border-b border-neutral-200 pb-4">
                  <h3 className="text-lg font-heading font-bold text-[#111111]">
                    Formulir Permohonan Surat Keterangan / Pengantar
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Isi data sesuai dokumen KTP & Kartu Keluarga asli. Pelayanan ini <strong>GRATIS (Rp 0,-)</strong> tanpa dipungut biaya apapun.
                  </p>
                </div>

                {/* Honeypot for spam bots */}
                <input
                  type="text"
                  name="website_url"
                  value={suratForm.honeypot}
                  onChange={(e) => setSuratForm({ ...suratForm, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Nama Lengkap (Sesuai KTP) <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Joko Winarno"
                      value={suratForm.namaLengkap}
                      onChange={(e) => setSuratForm({ ...suratForm, namaLengkap: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5] focus:ring-1 focus:ring-[#2D8FD5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Nomor Induk Kependudukan (NIK 16 Digit) <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={16}
                      placeholder="331405xxxxxxxxxx"
                      value={suratForm.nik}
                      onChange={(e) => setSuratForm({ ...suratForm, nik: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm font-mono text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5] focus:ring-1 focus:ring-[#2D8FD5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Nomor WhatsApp Aktif <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxxx"
                      value={suratForm.noHp}
                      onChange={(e) => setSuratForm({ ...suratForm, noHp: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5] focus:ring-1 focus:ring-[#2D8FD5]"
                    />
                    <span className="text-[11px] text-neutral-500 mt-1 block">
                      Notifikasi status akan diinfokan via WhatsApp / sistem portal.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Jenis Surat yang Dibutuhkan <span className="text-[#E53935]">*</span>
                    </label>
                    <select
                      value={suratForm.jenisSurat}
                      onChange={(e) => setSuratForm({ ...suratForm, jenisSurat: e.target.value as SuratType })}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5] focus:ring-1 focus:ring-[#2D8FD5]"
                    >
                      <option value="Surat Keterangan Usaha (SKU)">Surat Keterangan Usaha (SKU)</option>
                      <option value="Surat Keterangan Tidak Mampu (SKTM)">Surat Keterangan Tidak Mampu (SKTM)</option>
                      <option value="Surat Pengantar SKCK">Surat Pengantar SKCK Polsek/Polres</option>
                      <option value="Surat Keterangan Domisili">Surat Keterangan Domisili Tempat Tinggal</option>
                      <option value="Surat Pengantar KTP / KK">Surat Pengantar Pembuatan KTP / KK Baru</option>
                      <option value="Surat Keterangan Kelahiran / Kematian">Surat Keterangan Kelahiran / Kematian</option>
                      <option value="Surat Keterangan Belum Menikah">Surat Keterangan Belum Pernah Menikah</option>
                      <option value="Surat Keterangan Pindah">Surat Pengantar Pindah Penduduk</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Alamat / Dusun Pemohon di Pilangsari <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Dusun Guwo RT 04 / RW 02, Pilangsari"
                    value={suratForm.alamat}
                    onChange={(e) => setSuratForm({ ...suratForm, alamat: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5] focus:ring-1 focus:ring-[#2D8FD5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Keperluan Pengajuan Surat <span className="text-[#E53935]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Jelaskan secara rinci tujuan permohonan surat (contoh: Syarat administrasi beasiswa kuliah / pengajuan KUR Bank BRI / melamar pekerjaan)"
                    value={suratForm.keperluan}
                    onChange={(e) => setSuratForm({ ...suratForm, keperluan: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5] focus:ring-1 focus:ring-[#2D8FD5]"
                  />
                </div>

                {/* File Upload Simulation */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Unggah Lampiran Berkas (KTP / KK / Surat Pengantar RT)
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 hover:border-neutral-400 rounded-xl p-4 text-center bg-white">
                    <Upload className="w-6 h-6 text-neutral-400 mx-auto mb-1.5" />
                    <span className="text-xs text-neutral-700 font-medium block">
                      {suratForm.namaBerkas ? `Berkas terpilih: ${suratForm.namaBerkas}` : 'Klik untuk memilih file foto atau PDF (Maks. 5 MB)'}
                    </span>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSuratForm({ ...suratForm, namaBerkas: e.target.files[0].name });
                        }
                      }}
                      className="mt-2 text-xs text-neutral-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Security Anti-spam Captcha Question */}
                <div className="p-4 bg-yellow-50/80 rounded-xl border border-yellow-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#2E9E3E]" />
                    <span className="text-xs font-bold text-neutral-800">
                      Uji Keamanan Manusia: Berapakah 4 + 3?
                    </span>
                  </div>
                  <div className="w-24">
                    <input
                      type="text"
                      required
                      placeholder="Jawaban"
                      value={suratForm.mathAnswer}
                      onChange={(e) => setSuratForm({ ...suratForm, mathAnswer: e.target.value })}
                      className="w-full px-3 py-1.5 text-center bg-white border border-neutral-300 rounded-lg text-sm font-bold focus:border-[#E53935]"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmittingSurat}
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-[#111111] bg-[#FFE600] hover:bg-[#F2DA00] active:scale-98 shadow-md border border-yellow-400 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmittingSurat ? (
                    <span>Mendaftarkan Permohonan ke Server...</span>
                  ) : (
                    <>
                      <FileCheck className="w-4 h-4" />
                      <span>Kirim Permohonan Surat Online</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: FORM PENGADUAN & ASPIRASI WARGA                       */}
        {/* ============================================================ */}
        {activeTab === 'pengaduan' && (
          <div className="max-w-4xl mx-auto bg-neutral-50 rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-sm animate-fadeIn">
            
            {createdPengaduanTiket ? (
              <div className="bg-white rounded-xl p-8 border-2 border-emerald-500 text-center space-y-5 animate-scaleUp">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2E9E3E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2E9E3E]">
                    Aspirasi / Laporan Telah Diterima
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#111111]">
                    Kode Tiket Pengaduan Anda:
                  </h3>
                  <div className="inline-block px-5 py-2.5 bg-blue-50 border-2 border-[#2D8FD5] rounded-lg text-xl sm:text-2xl font-mono font-extrabold text-[#2D8FD5] tracking-wider select-all">
                    {createdPengaduanTiket}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
                  Laporan Anda telah tercatat dan akan ditinjau langsung oleh pimpinan Pemerintah Desa Pilangsari. Tindak lanjut dan tanggapan resmi petugas akan muncul pada status tiket ini.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchCode(createdPengaduanTiket);
                      setActiveTab('cek-status');
                      const res = cariStatusTiket(createdPengaduanTiket);
                      setSearchResult(res);
                      setHasSearched(true);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2D8FD5] text-white hover:bg-blue-600 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    <span>Lihat Status Pengaduan</span>
                  </button>

                  <button
                    onClick={() => setCreatedPengaduanTiket(null)}
                    className="px-4 py-2.5 rounded-lg border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    Kirim Aspirasi Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePengaduanSubmit} className="space-y-6">
                
                <div className="border-b border-neutral-200 pb-4">
                  <h3 className="text-lg font-heading font-bold text-[#111111]">
                    Layanan Pengaduan, Saran, & Aspirasi Warga (Lapor Desa)
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Sampaikan masukan terkait jalan rusak, saluran irigasi, bantuan sosial, atau pelayanan publik. Identitas Anda dapat dirahasiakan (Anonim).
                  </p>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="user_website"
                  value={pengaduanForm.honeypot}
                  onChange={(e) => setPengaduanForm({ ...pengaduanForm, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Anonymous Toggle */}
                <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-neutral-900 block">
                      Kirim Sebagai Laporan Anonim?
                    </span>
                    <span className="text-xs text-neutral-500">
                      Nama dan data pribadi Anda tidak akan dipublikasikan ke umum.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pengaduanForm.isAnonim}
                      onChange={(e) => setPengaduanForm({ ...pengaduanForm, isAnonim: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2E9E3E]"></div>
                  </label>
                </div>

                {!pengaduanForm.isAnonim && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Nama Lengkap Pelapor <span className="text-[#E53935]">*</span>
                      </label>
                      <input
                        type="text"
                        required={!pengaduanForm.isAnonim}
                        placeholder="Nama Anda"
                        value={pengaduanForm.namaPelapor}
                        onChange={(e) => setPengaduanForm({ ...pengaduanForm, namaPelapor: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        NIK (Opsional)
                      </label>
                      <input
                        type="text"
                        maxLength={16}
                        placeholder="331405xxxxxxxxxx"
                        value={pengaduanForm.nik}
                        onChange={(e) => setPengaduanForm({ ...pengaduanForm, nik: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm font-mono text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5]"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Nomor HP / WhatsApp Aktif <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08xxxxxxxxxx"
                      value={pengaduanForm.noHp}
                      onChange={(e) => setPengaduanForm({ ...pengaduanForm, noHp: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Kategori Laporan <span className="text-[#E53935]">*</span>
                    </label>
                    <select
                      value={pengaduanForm.kategori}
                      onChange={(e) => setPengaduanForm({ ...pengaduanForm, kategori: e.target.value as KategoriPengaduan })}
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5]"
                    >
                      <option value="Infrastruktur & Jalan">Infrastruktur & Jalan Desa</option>
                      <option value="Pelayanan Publik & Administrasi">Pelayanan Publik & Administrasi</option>
                      <option value="Bantuan Sosial (Bansos)">Bantuan Sosial (Bansos / BLT)</option>
                      <option value="Keamanan & Ketertiban">Keamanan & Ketertiban Lingkungan</option>
                      <option value="Kesehatan & Lingkungan">Kesehatan, Sampah, & Lingkungan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Lokasi Spesifik Kejadian / Dusun <span className="text-[#E53935]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Tikungan jalan barat Dusun Guwo RT 05 dekat embung"
                    value={pengaduanForm.lokasi}
                    onChange={(e) => setPengaduanForm({ ...pengaduanForm, lokasi: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Uraian Isi Pengaduan / Masukan <span className="text-[#E53935]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan secara jelas pokok keluhan, waktu kejadian, dan dampak yang dirasakan warga..."
                    value={pengaduanForm.isiLaporan}
                    onChange={(e) => setPengaduanForm({ ...pengaduanForm, isiLaporan: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-hidden focus:border-[#2D8FD5]"
                  />
                </div>

                {/* Upload Foto Bukti */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Unggah Foto Bukti / Lampiran (Opsional)
                  </label>
                  <div className="border border-neutral-300 rounded-xl p-3 bg-white flex items-center justify-between">
                    <span className="text-xs text-neutral-600 truncate">
                      {pengaduanForm.namaLampiran || 'Pilih foto lokasi kejadian (JPG / PNG)'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setPengaduanForm({ ...pengaduanForm, namaLampiran: e.target.files[0].name });
                        }
                      }}
                      className="text-xs text-neutral-500"
                    />
                  </div>
                </div>

                {/* Captcha 5 + 3 = 8 */}
                <div className="p-4 bg-yellow-50/80 rounded-xl border border-yellow-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#2E9E3E]" />
                    <span className="text-xs font-bold text-neutral-800">
                      Uji Keamanan Manusia: Berapakah 5 + 3?
                    </span>
                  </div>
                  <div className="w-24">
                    <input
                      type="text"
                      required
                      placeholder="Jawaban"
                      value={pengaduanForm.mathAnswer}
                      onChange={(e) => setPengaduanForm({ ...pengaduanForm, mathAnswer: e.target.value })}
                      className="w-full px-3 py-1.5 text-center bg-white border border-neutral-300 rounded-lg text-sm font-bold focus:border-[#E53935]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingPengaduan}
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-white bg-[#E53935] hover:bg-red-700 active:scale-98 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmittingPengaduan ? (
                    <span>Mengirimkan Laporan Aspirasi...</span>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" />
                      <span>Kirim Pengaduan ke Pamong Desa</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: CEK STATUS PELAYANAN & PENGADUAN                      */}
        {/* ============================================================ */}
        {activeTab === 'cek-status' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Search Box */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h3 className="text-base font-heading font-bold text-[#111111] mb-2">
                Lacak Status Permohonan Surat / Pengaduan Anda
              </h3>
              <p className="text-xs text-neutral-500 mb-5">
                Ketikkan kode tiket registrasi yang Anda dapatkan saat mendaftar (contoh: <strong>SRT-PLS-2026-0001</strong> atau <strong>PLS-2026-0001</strong>).
              </p>

              <form onSubmit={handleSearchTicket} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Masukkan Kode Tiket (misal: SRT-PLS-2026-0001)"
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-neutral-300 rounded-xl text-sm font-mono text-neutral-900 uppercase focus:outline-hidden focus:border-[#2D8FD5] focus:ring-1 focus:ring-[#2D8FD5]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-[#111111] bg-[#FFE600] hover:bg-yellow-400 shadow-sm border border-yellow-400 transition-colors shrink-0"
                >
                  Cari Status
                </button>
              </form>

              {/* Sample Ticket Code Hints */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-neutral-500">
                <span>Coba kode contoh demo:</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchCode('SRT-PLS-2026-0001');
                    const res = cariStatusTiket('SRT-PLS-2026-0001');
                    setSearchResult(res);
                    setHasSearched(true);
                  }}
                  className="px-2 py-0.5 bg-neutral-200/80 hover:bg-neutral-300 rounded font-mono text-neutral-800 transition-colors"
                >
                  SRT-PLS-2026-0001 (Surat SKU Selesai)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchCode('PLS-2026-0001');
                    const res = cariStatusTiket('PLS-2026-0001');
                    setSearchResult(res);
                    setHasSearched(true);
                  }}
                  className="px-2 py-0.5 bg-neutral-200/80 hover:bg-neutral-300 rounded font-mono text-neutral-800 transition-colors"
                >
                  PLS-2026-0001 (Pengaduan PJU)
                </button>
              </div>
            </div>

            {/* Search Result Display */}
            {hasSearched && (
              searchResult ? (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6 animate-scaleUp">
                  
                  {/* Top Header of Ticket */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-neutral-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                          searchResult.tipe === 'surat'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-blue-100 text-blue-900 border border-blue-300'
                        }`}>
                          {searchResult.tipe === 'surat' ? 'Permohonan Surat' : 'Pengaduan Warga'}
                        </span>
                        <span className="text-xs text-neutral-400">·</span>
                        <span className="text-xs text-neutral-500 font-mono">
                          ID: {searchResult.data.kodeTiket}
                        </span>
                      </div>

                      <h4 className="text-xl font-heading font-bold text-[#111111] mt-1.5">
                        {searchResult.tipe === 'surat'
                          ? (searchResult.data as PermohonanSurat).jenisSurat
                          : (searchResult.data as Pengaduan).kategori}
                      </h4>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
                        searchResult.data.status === 'Selesai'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : searchResult.data.status === 'Diproses'
                          ? 'bg-blue-100 text-blue-800 border border-blue-300'
                          : searchResult.data.status === 'Ditolak'
                          ? 'bg-red-100 text-red-800 border border-red-300'
                          : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                      }`}>
                        ● Status: {searchResult.data.status}
                      </span>
                    </div>
                  </div>

                  {/* 4-Step Interactive Visual Timeline */}
                  <div className="py-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-6">
                      Tahapan Alur Pelayanan Desa:
                    </span>
                    
                    <div className="grid grid-cols-4 gap-2 relative">
                      {/* Timeline Bar Line behind */}
                      <div className="absolute top-4 left-6 right-6 h-1 bg-neutral-200 z-0" />
                      
                      {/* Step 1: Diterima */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 mt-2">Diterima</span>
                        <span className="text-[10px] text-neutral-500 hidden sm:block">Sistem Terdaftar</span>
                      </div>

                      {/* Step 2: Verifikasi Berkas */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
                          searchResult.data.status !== 'Diterima' 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-yellow-400 text-[#111111]'
                        }`}>
                          {searchResult.data.status !== 'Diterima' ? <Check className="w-4 h-4" /> : '2'}
                        </div>
                        <span className="text-xs font-bold text-neutral-900 mt-2">Verifikasi</span>
                        <span className="text-[10px] text-neutral-500 hidden sm:block">Pemeriksaan Berkas</span>
                      </div>

                      {/* Step 3: Diproses / Ttd Kades */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
                          searchResult.data.status === 'Selesai' 
                            ? 'bg-emerald-500 text-white' 
                            : searchResult.data.status === 'Diproses'
                            ? 'bg-[#2D8FD5] text-white'
                            : 'bg-neutral-200 text-neutral-500'
                        }`}>
                          {searchResult.data.status === 'Selesai' ? <Check className="w-4 h-4" /> : '3'}
                        </div>
                        <span className="text-xs font-bold text-neutral-900 mt-2">Diproses</span>
                        <span className="text-[10px] text-neutral-500 hidden sm:block">Legalitas / Koordinasi</span>
                      </div>

                      {/* Step 4: Selesai */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
                          searchResult.data.status === 'Selesai' 
                            ? 'bg-[#2E9E3E] text-white ring-4 ring-emerald-100' 
                            : searchResult.data.status === 'Ditolak'
                            ? 'bg-[#E53935] text-white'
                            : 'bg-neutral-200 text-neutral-500'
                        }`}>
                          {searchResult.data.status === 'Selesai' ? (
                            <Check className="w-4 h-4" />
                          ) : searchResult.data.status === 'Ditolak' ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            '4'
                          )}
                        </div>
                        <span className="text-xs font-bold text-neutral-900 mt-2">
                          {searchResult.data.status === 'Ditolak' ? 'Ditolak' : 'Selesai'}
                        </span>
                        <span className="text-[10px] text-neutral-500 hidden sm:block">
                          {searchResult.data.status === 'Ditolak' ? 'Berkas Kurang' : 'Siap Diambil'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-3 text-xs">
                    {searchResult.tipe === 'surat' ? (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <span className="text-neutral-500 block">Nama Pemohon:</span>
                            <span className="font-semibold text-neutral-900">
                              {(searchResult.data as PermohonanSurat).namaLengkap}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">NIK:</span>
                            <span className="font-mono font-semibold text-neutral-900">
                              {(searchResult.data as PermohonanSurat).nik}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">Tanggal Diajukan:</span>
                            <span className="text-neutral-800">
                              {(searchResult.data as PermohonanSurat).tanggalDiajukan}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">Alamat Pemohon:</span>
                            <span className="text-neutral-800">
                              {(searchResult.data as PermohonanSurat).alamat}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-neutral-200">
                          <span className="text-neutral-500 block">Keperluan:</span>
                          <span className="text-neutral-800 font-medium">
                            {(searchResult.data as PermohonanSurat).keperluan}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <span className="text-neutral-500 block">Pelapor:</span>
                            <span className="font-semibold text-neutral-900">
                              {(searchResult.data as Pengaduan).namaPelapor}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">Lokasi Kejadian:</span>
                            <span className="text-neutral-800">
                              {(searchResult.data as Pengaduan).lokasi}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">Tanggal Lapor:</span>
                            <span className="text-neutral-800">
                              {(searchResult.data as Pengaduan).tanggalLapor}
                            </span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">Lampiran:</span>
                            <span className="text-neutral-800 font-mono">
                              {(searchResult.data as Pengaduan).namaLampiran || 'Tidak ada'}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-neutral-200">
                          <span className="text-neutral-500 block">Isi Laporan:</span>
                          <span className="text-neutral-800 font-medium">
                            {(searchResult.data as Pengaduan).isiLaporan}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Petugas Notes / Response */}
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-blue-900 text-xs font-bold">
                      <Clock className="w-4 h-4 text-[#2D8FD5]" />
                      <span>Catatan & Tanggapan Pamong Desa:</span>
                    </div>
                    <p className="text-xs text-blue-950 leading-relaxed font-medium">
                      {searchResult.tipe === 'surat'
                        ? (searchResult.data as PermohonanSurat).catatanPetugas || 'Dalam antrean verifikasi petugas loket desa.'
                        : (searchResult.data as Pengaduan).tanggapanPetugas || 'Laporan telah diterima dan segera ditindaklanjuti.'}
                    </p>
                    <div className="text-[11px] text-blue-700/80 pt-1">
                      Petugas Pemeriksa: <strong>{searchResult.data.petugas || 'Pamong Desa Pilangsari'}</strong>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setPrintReceiptData({ tipe: searchResult.tipe, item: searchResult.data })}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Printer className="w-4 h-4 text-[#FFE600]" />
                      <span>Cetak Bukti / Tanda Terima Resmi</span>
                    </button>

                    <button
                      onClick={() => {
                        setSearchResult(null);
                        setHasSearched(false);
                        setSearchCode('');
                      }}
                      className="text-xs text-neutral-500 hover:text-neutral-800 underline"
                    >
                      Cek Tiket Lain
                    </button>
                  </div>

                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center space-y-3">
                  <AlertCircle className="w-10 h-10 text-[#E53935] mx-auto" />
                  <h4 className="text-base font-bold text-neutral-900">
                    Kode Tiket Tidak Ditemukan
                  </h4>
                  <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                    Periksa kembali penulisan kode tiket Anda. Pastikan huruf besar dan tanda hubung sesuai, contoh: <strong>SRT-PLS-2026-0001</strong> atau <strong>PLS-2026-0001</strong>.
                  </p>
                </div>
              )
            )}

          </div>
        )}

      </div>
    </section>
  );
};
