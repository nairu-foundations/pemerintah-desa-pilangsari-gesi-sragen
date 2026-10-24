/**
 * =======================================================================
 * PUSAT REGISTRI 1 FOLDER MEDIA & FOTO DESA PILANGSARI (TERPROTEKSI & TERKONSOLIDASI)
 * Lokasi Fisik Folder Sumber: /src/foto-desa/
 * =======================================================================
 * 
 * Seluruh foto dan media website dipisahkan dari folder `public/` dan
 * dipusatkan ke dalam 1 folder tunggal di `src/foto-desa/`.
 * 
 * KEUNGGULAN KEAMANAN & PRODUKSI (MENGAPA DI src/foto-desa/):
 * 1. Aman dari Intip Direktori (Anti-Directory Listing):
 *    Folder `public/` langsung diekspos oleh web server hosting (Apache, Nginx, Vercel, dll).
 *    Dengan memindahkannya ke `src/foto-desa/`, folder tidak dapat di-crawl atau di-scrape sembarangan.
 * 2. Vite Asset Bundling & Caching:
 *    Semua aset foto diproses dan di-hash otomatis saat build (`npm run build`).
 * 3. Struktur 1 Pintu yang Rapi:
 *    Admin / pengurus desa cukup membuka `src/foto-desa/<kategori>` untuk mengganti foto
 *    dengan nama file yang sama.
 */

// 1. Identitas & Brand Desa
import logoDesa from '../foto-desa/brand/logo-desa.png';
import logoKabupaten from '../foto-desa/brand/logo-kabupaten-sragen.png';

// 2. Hero Banner Utama
import heroUtama from '../foto-desa/hero/hero-utama.jpg';

// 3. Profil & Gedung Balai Desa
import kadesProfil from '../foto-desa/profil/kepala-desa.jpg';
import kantorBalaiDesa from '../foto-desa/profil/kantor-balai-desa.jpg';
import petaWilayah from '../foto-desa/profil/peta-wilayah.jpg';

// 4. Pamong & Aparatur Pemerintah Desa
import kadesPerangkat from '../foto-desa/perangkat/kades.jpg';
import sekdes from '../foto-desa/perangkat/sekdes.jpg';
import kaurKeuangan from '../foto-desa/perangkat/kaur-keuangan.jpg';
import kaurTu from '../foto-desa/perangkat/kaur-tu.jpg';
import kasiPemerintahan from '../foto-desa/perangkat/kasi-pemerintahan.jpg';
import kasiPelayanan from '../foto-desa/perangkat/kasi-pelayanan.jpg';
import kadusPilang from '../foto-desa/perangkat/kadus-pilang.jpg';
import bpd from '../foto-desa/perangkat/bpd.jpg';

// 5. Berita & Publikasi Warta Desa
import beritaPanenRaya from '../foto-desa/berita/berita-1.jpg';
import beritaPelayanan from '../foto-desa/berita/berita-2.jpg';
import beritaPosyandu from '../foto-desa/berita/berita-3.jpg';
import beritaAnyamanBambu from '../foto-desa/berita/berita-4.jpg';

// 6. Galeri Dokumentasi Kegiatan Desa
import galeri1 from '../foto-desa/galeri/galeri-1.jpg';
import galeri2 from '../foto-desa/galeri/galeri-2.jpg';
import galeri3 from '../foto-desa/galeri/galeri-3.jpg';
import galeri4 from '../foto-desa/galeri/galeri-4.jpg';
import galeri5 from '../foto-desa/galeri/galeri-5.jpg';
import galeri6 from '../foto-desa/galeri/galeri-6.jpg';
import galeri7 from '../foto-desa/galeri/galeri-7.jpg';
import galeri8 from '../foto-desa/galeri/galeri-8.jpg';

// 7. Potensi Komoditas Unggulan & UMKM
import umkmGulaKelapa from '../foto-desa/umkm/umkm-gula-kelapa.jpg';
import umkmAnyamanBambu from '../foto-desa/umkm/umkm-anyaman-bambu.jpg';
import umkmPeternakan from '../foto-desa/umkm/umkm-peternakan.jpg';

export interface FotoDesaItem {
  id: string;
  kategori: 'brand' | 'hero' | 'profil' | 'perangkat' | 'berita' | 'galeri' | 'umkm';
  nama: string;
  lokasiFolder: string;
  namaBerkas: string;
  urlWeb: string;
  resolusi: string;
  keterangan: string;
}

export const DESA_IMAGES = {
  // 1. Identitas & Lambang Resmi (src/foto-desa/brand/)
  brand: {
    logoSvg: logoDesa,
    logoPng: logoDesa,
    logoKabupaten: logoKabupaten,
  },

  // 2. Hero Banner Utama (src/foto-desa/hero/)
  hero: {
    landscape: heroUtama,
    alt: 'Bentang Alam Persawahan & Perbukitan Desa Pilangsari, Kec. Gesi, Kab. Sragen',
  },

  // 3. Profil & Gedung Balai Desa (src/foto-desa/profil/)
  profil: {
    kades: kadesProfil,
    kadesNama: 'Supriyadi, S.Sos.',
    kantorDesa: kantorBalaiDesa,
    petaWilayah: petaWilayah,
  },

  // 4. Pamong & Aparatur Pemerintah Desa (src/foto-desa/perangkat/)
  perangkat: {
    kades: kadesPerangkat,
    sekdes: sekdes,
    kaurKeuangan: kaurKeuangan,
    kaurTu: kaurTu,
    kasiPemerintahan: kasiPemerintahan,
    kasiPelayanan: kasiPelayanan,
    kadus: kadusPilang,
    bpd: bpd,
  },

  // 5. Warta & Publikasi Berita Desa (src/foto-desa/berita/)
  berita: {
    panenRaya: beritaPanenRaya,
    kantorPelayanan: beritaPelayanan,
    posyandu: beritaPosyandu,
    anyamanBambu: beritaAnyamanBambu,
  },

  // 6. Dokumentasi Galeri Desa (src/foto-desa/galeri/)
  galeri: {
    panenRaya: galeri1,
    pelayananKantor: galeri2,
    panoramaAlam: galeri3,
    posyanduLansia: galeri4,
    pembangunanJalan: galeri5,
    seniBudaya: galeri6,
    pembangunanDrainase: galeri7,
    bersihDesaNyadran: galeri8,
  },

  // 7. Potensi Komoditas Unggulan & UMKM (src/foto-desa/umkm/)
  umkm: {
    gulaKelapa: umkmGulaKelapa,
    anyamanBambu: umkmAnyamanBambu,
    peternakan: umkmPeternakan,
  }
};

/**
 * Katalog Struktur 1 Folder Media Desa Pilangsari
 * Berguna untuk panduan interaktif penggantian foto di panel web
 */
export const FOTO_DESA_CATALOG: FotoDesaItem[] = [
  // Brand
  {
    id: 'brand-logo',
    kategori: 'brand',
    nama: 'Logo Resmi Desa Pilangsari / Kab. Sragen',
    lokasiFolder: 'src/foto-desa/brand/',
    namaBerkas: 'logo-desa.png',
    urlWeb: DESA_IMAGES.brand.logoPng,
    resolusi: '512 x 512 px (PNG Transparan)',
    keterangan: 'Tampil di Header Navbar, Footer, Struk Pelayanan Mandiri, dan Kop Dokumen Resmi.'
  },
  {
    id: 'brand-kabupaten',
    kategori: 'brand',
    nama: 'Logo Kabupaten Sragen (Kop Dokumen)',
    lokasiFolder: 'src/foto-desa/brand/',
    namaBerkas: 'logo-kabupaten-sragen.png',
    urlWeb: DESA_IMAGES.brand.logoKabupaten,
    resolusi: '512 x 512 px (PNG Transparan)',
    keterangan: 'Digunakan pada stempel dan kop persuratan resmi pemerintahan desa.'
  },

  // Hero
  {
    id: 'hero-utama',
    kategori: 'hero',
    nama: 'Foto Panorama Utama (Hero Banner)',
    lokasiFolder: 'src/foto-desa/hero/',
    namaBerkas: 'hero-utama.jpg',
    urlWeb: DESA_IMAGES.hero.landscape,
    resolusi: '1920 x 1080 px (Landscape 16:9)',
    keterangan: 'Foto lanskap pemandangan utama paling atas saat membuka beranda website.'
  },

  // Profil
  {
    id: 'profil-kades',
    kategori: 'profil',
    nama: 'Foto Resmi Kepala Desa (Sambutan & Profil)',
    lokasiFolder: 'src/foto-desa/profil/',
    namaBerkas: 'kepala-desa.jpg',
    urlWeb: DESA_IMAGES.profil.kades,
    resolusi: '800 x 1000 px (Portrait 4:5)',
    keterangan: 'Foto resmi Kepala Desa Supriyadi, S.Sos. berseragam dinas aparatur.'
  },
  {
    id: 'profil-balai',
    kategori: 'profil',
    nama: 'Gedung Balai Kantor Desa Pilangsari',
    lokasiFolder: 'src/foto-desa/profil/',
    namaBerkas: 'kantor-balai-desa.jpg',
    urlWeb: DESA_IMAGES.profil.kantorDesa,
    resolusi: '1200 x 800 px (Landscape 3:2)',
    keterangan: 'Foto tampak depan balai desa di Jl. Raya Pilangsari No. 01 Gesi.'
  },
  {
    id: 'profil-peta',
    kategori: 'profil',
    nama: 'Peta Wilayah & Administrasi Desa',
    lokasiFolder: 'src/foto-desa/profil/',
    namaBerkas: 'peta-wilayah.jpg',
    urlWeb: DESA_IMAGES.profil.petaWilayah,
    resolusi: '1200 x 800 px (Landscape 3:2)',
    keterangan: 'Peta batas desa, pembagian dusun, dan topografi wilayah pertanian desa.'
  },

  // Perangkat Desa
  {
    id: 'perangkat-kades',
    kategori: 'perangkat',
    nama: 'Pamong: Kepala Desa (Supriyadi, S.Sos.)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'kades.jpg',
    urlWeb: DESA_IMAGES.perangkat.kades,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto bagan struktur organisasi jabatan Kepala Desa.'
  },
  {
    id: 'perangkat-sekdes',
    kategori: 'perangkat',
    nama: 'Pamong: Sekretaris Desa (Budi Santoso, S.AP.)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'sekdes.jpg',
    urlWeb: DESA_IMAGES.perangkat.sekdes,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto bagan struktur organisasi jabatan Sekretaris Desa.'
  },
  {
    id: 'perangkat-kaur-keuangan',
    kategori: 'perangkat',
    nama: 'Pamong: Kaur Keuangan (Sri Wahyuni, S.E.)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'kaur-keuangan.jpg',
    urlWeb: DESA_IMAGES.perangkat.kaurKeuangan,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto bagan struktur organisasi bendahara / kaur keuangan desa.'
  },
  {
    id: 'perangkat-kaur-tu',
    kategori: 'perangkat',
    nama: 'Pamong: Kaur TU & Perencanaan (Hendra Gunawan)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'kaur-tu.jpg',
    urlWeb: DESA_IMAGES.perangkat.kaurTu,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto bagan struktur organisasi kaur ketatausahaan dan perencanaan desa.'
  },
  {
    id: 'perangkat-kasi-pem',
    kategori: 'perangkat',
    nama: 'Pamong: Kasi Pemerintahan (Joko Prasetyo)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'kasi-pemerintahan.jpg',
    urlWeb: DESA_IMAGES.perangkat.kasiPemerintahan,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto bagan struktur organisasi kepala seksi urusan pemerintahan.'
  },
  {
    id: 'perangkat-kasi-pel',
    kategori: 'perangkat',
    nama: 'Pamong: Kasi Pelayanan (Siti Rahmawati, S.Pd.)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'kasi-pelayanan.jpg',
    urlWeb: DESA_IMAGES.perangkat.kasiPelayanan,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto bagan struktur organisasi kepala seksi kesejahteraan & pelayanan.'
  },
  {
    id: 'perangkat-kadus',
    kategori: 'perangkat',
    nama: 'Pamong: Kadus I Pilang (Wahyudi Siswanto)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'kadus-pilang.jpg',
    urlWeb: DESA_IMAGES.perangkat.kadus,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto pelaksana kewilayahan kepala dusun Pilang.'
  },
  {
    id: 'perangkat-bpd',
    kategori: 'perangkat',
    nama: 'BPD: Ketua BPD (Drs. Slamet Riyadi)',
    lokasiFolder: 'src/foto-desa/perangkat/',
    namaBerkas: 'bpd.jpg',
    urlWeb: DESA_IMAGES.perangkat.bpd,
    resolusi: '400 x 500 px (Portrait)',
    keterangan: 'Foto pimpinan Badan Permusyawaratan Desa Pilangsari.'
  },

  // Berita
  {
    id: 'berita-1',
    kategori: 'berita',
    nama: 'Berita 1: Panen Raya Padi Dusun Guwo',
    lokasiFolder: 'src/foto-desa/berita/',
    namaBerkas: 'berita-1.jpg',
    urlWeb: DESA_IMAGES.berita.panenRaya,
    resolusi: '800 x 450 px (16:9)',
    keterangan: 'Foto artikel berita warta panen raya padi varietas Inpari 32.'
  },
  {
    id: 'berita-2',
    kategori: 'berita',
    nama: 'Berita 2: Penyaluran BLT Dana Desa',
    lokasiFolder: 'src/foto-desa/berita/',
    namaBerkas: 'berita-2.jpg',
    urlWeb: DESA_IMAGES.berita.kantorPelayanan,
    resolusi: '800 x 450 px (16:9)',
    keterangan: 'Foto dokumentasi penyaluran bantuan langsung tunai di balai desa.'
  },
  {
    id: 'berita-3',
    kategori: 'berita',
    nama: 'Berita 3: Posyandu Integrasi Layanan Primer',
    lokasiFolder: 'src/foto-desa/berita/',
    namaBerkas: 'berita-3.jpg',
    urlWeb: DESA_IMAGES.berita.posyandu,
    resolusi: '800 x 450 px (16:9)',
    keterangan: 'Foto kegiatan pemeriksaan kesehatan dan gizi balita cegah stunting.'
  },
  {
    id: 'berita-4',
    kategori: 'berita',
    nama: 'Berita 4: Pelatihan Pengrajin Anyaman Bambu',
    lokasiFolder: 'src/foto-desa/berita/',
    namaBerkas: 'berita-4.jpg',
    urlWeb: DESA_IMAGES.berita.anyamanBambu,
    resolusi: '800 x 450 px (16:9)',
    keterangan: 'Foto pelatihan diversifikasi produk anyaman bambu warga.'
  },

  // Galeri
  {
    id: 'galeri-1',
    kategori: 'galeri',
    nama: 'Galeri 1: Panen Raya MT I',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-1.jpg',
    urlWeb: DESA_IMAGES.galeri.panenRaya,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi kegiatan pertanian panen raya.'
  },
  {
    id: 'galeri-2',
    kategori: 'galeri',
    nama: 'Galeri 2: Pelayanan Administrasi Balai Desa',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-2.jpg',
    urlWeb: DESA_IMAGES.galeri.pelayananKantor,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi suasana ruang pelayanan masyarakat terpadu.'
  },
  {
    id: 'galeri-3',
    kategori: 'galeri',
    nama: 'Galeri 3: Panorama Alam Persawahan',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-3.jpg',
    urlWeb: DESA_IMAGES.galeri.panoramaAlam,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi lanskap alam perbukitan dan persawahan Gesi.'
  },
  {
    id: 'galeri-4',
    kategori: 'galeri',
    nama: 'Galeri 4: Posyandu Lansia & Balita',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-4.jpg',
    urlWeb: DESA_IMAGES.galeri.posyanduLansia,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi kegiatan posyandu dan pemeriksaan kesehatan.'
  },
  {
    id: 'galeri-5',
    kategori: 'galeri',
    nama: 'Galeri 5: Rabat Beton Jalan Usaha Tani',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-5.jpg',
    urlWeb: DESA_IMAGES.galeri.pembangunanJalan,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi pembangunan infrastruktur jalan pertanian desa.'
  },
  {
    id: 'galeri-6',
    kategori: 'galeri',
    nama: 'Galeri 6: Seni Karawitan Karang Taruna',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-6.jpg',
    urlWeb: DESA_IMAGES.galeri.seniBudaya,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi pelestarian seni gamelan dan tari tradisional.'
  },
  {
    id: 'galeri-7',
    kategori: 'galeri',
    nama: 'Galeri 7: Pembangunan Saluran Drainase',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-7.jpg',
    urlWeb: DESA_IMAGES.galeri.pembangunanDrainase,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi proyek talud dan saluran irigasi pemukiman.'
  },
  {
    id: 'galeri-8',
    kategori: 'galeri',
    nama: 'Galeri 8: Tradisi Bersih Desa Nyadran',
    lokasiFolder: 'src/foto-desa/galeri/',
    namaBerkas: 'galeri-8.jpg',
    urlWeb: DESA_IMAGES.galeri.bersihDesaNyadran,
    resolusi: '800 x 600 px (4:3)',
    keterangan: 'Dokumentasi upacara tradisi kenduri dan kerukunan warga.'
  },

  // UMKM
  {
    id: 'umkm-gula',
    kategori: 'umkm',
    nama: 'UMKM: Industri Gula Kelapa Jawa',
    lokasiFolder: 'src/foto-desa/umkm/',
    namaBerkas: 'umkm-gula-kelapa.jpg',
    urlWeb: DESA_IMAGES.umkm.gulaKelapa,
    resolusi: '600 x 450 px (4:3)',
    keterangan: 'Foto komoditas olahan gula kelapa asli Dusun Guwo.'
  },
  {
    id: 'umkm-bambu',
    kategori: 'umkm',
    nama: 'UMKM: Kerajinan Anyaman Bambu & Besek',
    lokasiFolder: 'src/foto-desa/umkm/',
    namaBerkas: 'umkm-anyaman-bambu.jpg',
    urlWeb: DESA_IMAGES.umkm.anyamanBambu,
    resolusi: '600 x 450 px (4:3)',
    keterangan: 'Foto kerajinan tangan besek ramah lingkungan Dusun Karanganyar.'
  },
  {
    id: 'umkm-ternak',
    kategori: 'umkm',
    nama: 'UMKM: Peternakan Rakyat Sapi & Kambing',
    lokasiFolder: 'src/foto-desa/umkm/',
    namaBerkas: 'umkm-peternakan.jpg',
    urlWeb: DESA_IMAGES.umkm.peternakan,
    resolusi: '600 x 450 px (4:3)',
    keterangan: 'Foto sentra kelompok peternakan rakyat Desa Pilangsari.'
  }
];

export default DESA_IMAGES;
