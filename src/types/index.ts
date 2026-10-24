export type SuratType = 
  | 'Surat Keterangan Tidak Mampu (SKTM)'
  | 'Surat Keterangan Usaha (SKU)'
  | 'Surat Pengantar SKCK'
  | 'Surat Keterangan Domisili'
  | 'Surat Pengantar KTP / KK'
  | 'Surat Keterangan Kelahiran / Kematian'
  | 'Surat Keterangan Belum Menikah'
  | 'Surat Keterangan Pindah';

export type StatusLayanan = 'Diterima' | 'Diproses' | 'Selesai' | 'Ditolak';

export interface PermohonanSurat {
  id: string;
  kodeTiket: string;
  namaLengkap: string;
  nik: string;
  noHp: string;
  jenisSurat: SuratType;
  keperluan: string;
  alamat: string;
  namaBerkas?: string;
  status: StatusLayanan;
  tanggalDiajukan: string;
  tanggalSelesai?: string;
  catatanPetugas?: string;
  petugas?: string;
}

export type KategoriPengaduan = 
  | 'Infrastruktur & Jalan'
  | 'Pelayanan Publik & Administrasi'
  | 'Bantuan Sosial (Bansos)'
  | 'Keamanan & Ketertiban'
  | 'Kesehatan & Lingkungan'
  | 'Lainnya';

export interface Pengaduan {
  id: string;
  kodeTiket: string;
  namaPelapor: string;
  isAnonim: boolean;
  nik?: string;
  noHp: string;
  kategori: KategoriPengaduan;
  lokasi: string;
  isiLaporan: string;
  namaLampiran?: string;
  status: StatusLayanan;
  tanggalLapor: string;
  tanggalTanggapan?: string;
  tanggapanPetugas?: string;
  petugas?: string;
}

export interface Berita {
  id: string;
  slug: string;
  judul: string;
  kategori: 'Pembangunan' | 'Pemerintahan' | 'Pertanian' | 'Sosial & Budaya' | 'Kesehatan';
  ringkasan: string;
  isiLengkap: string;
  gambarUrl: string;
  penulis: string;
  tanggal: string;
  dibaca: number;
}

export interface Pengumuman {
  id: string;
  judul: string;
  isi: string;
  tanggal: string;
  isPenting: boolean;
  lampiranNama?: string;
}

export interface Agenda {
  id: string;
  judul: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  penyelenggara: string;
  deskripsi: string;
  kategori: 'Musyawarah' | 'Kesehatan' | 'Pertanian' | 'Keagamaan' | 'Gotong Royong';
}

export interface GaleriItem {
  id: string;
  judul: string;
  kategori: 'Pembangunan' | 'Kemasyarakatan' | 'Pertanian' | 'Budaya';
  deskripsi: string;
  gambarUrl: string;
  tanggal: string;
}

export interface PerangkatDesa {
  id: string;
  nama: string;
  jabatan: string;
  nip?: string;
  fotoUrl: string;
  tugasPokok: string;
  kontak?: string;
  urutan: number;
}
