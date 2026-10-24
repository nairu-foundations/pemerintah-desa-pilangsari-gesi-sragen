import { 
  PermohonanSurat, 
  Pengaduan, 
  Berita, 
  Pengumuman, 
  Agenda, 
  GaleriItem, 
  PerangkatDesa 
} from '../types';
import { DESA_IMAGES } from '../constants/images';

export const PROFIL_DESA = {
  nama: 'Desa Pilangsari',
  kecamatan: 'Gesi',
  kabupaten: 'Sragen',
  provinsi: 'Jawa Tengah',
  kodePos: '57262',
  semboyan: 'Pilangsari Guyub Rukun, Maju, lan Berdaya',
  visi: 'Terwujudnya Desa Pilangsari yang Maju, Transparan, Berdaya Saing, dan Sejahtera Berlandaskan Gotong Royong.',
  misi: [
    'Meningkatkan tata kelola pemerintahan desa yang bersih, cepat, transparan, dan berbasis teknologi digital.',
    'Meningkatkan kualitas sarana dan prasarana infrastruktur jalan desa, irigasi pertanian, dan fasilitas publik.',
    'Memperkuat ekonomi pedesaan berbasis pertanian modern, peternakan rakyat, dan pemberdayaan UMKM lokal.',
    'Meningkatkan mutu pelayanan kesehatan ibu-anak, pencegahan stunting, serta pendidikan usia dini dan keagamaan.',
    'Menjaga dan melestarikan kearifan lokal, budaya gotong royong, serta kelestarian lingkungan hidup.'
  ],
  sejarah: 'Nama "Pilangsari" berasal dari kata "Pilang" yang merujuk pada pohon pilang rindang yang dahulu banyak tumbuh di perbukitan wilayah utara Bengawan Solo di Kecamatan Gesi, serta kata "Sari" yang melambangkan keindahan, kemakmuran, dan keasrian alam. Menurut para sesepuh desa, perkampungan ini mulai berkembang sejak era Kadipaten Sukowati sebagai pos singgah para petani dan pedagang hasil bumi. Pada masa kemerdekaan, gabungan beberapa pedukuhan disatukan secara resmi menjadi Pemerintahan Desa Pilangsari, yang hingga kini tumbuh menjadi salah satu sentra ketahanan pangan dan lumbung pertanian padi di Kecamatan Gesi, Kabupaten Sragen.',
  geografis: {
    luasWilayah: '412,85 Hektar',
    batasUtara: 'Desa Tanggan, Kec. Gesi',
    batasSelatan: 'Desa Slendro & Sungai Bengawan Solo',
    batasTimur: 'Desa Poleng, Kec. Gesi',
    batasBarat: 'Desa Srawung, Kec. Gesi',
    topografi: 'Dataran berombak hingga perbukitan kapur subur dengan ketinggian 85 - 120 mdpl',
    iklim: 'Tropis dengan curah hujan rata-rata 1.800 mm/tahun'
  },
  demografi: {
    totalPenduduk: 3428,
    lakiLaki: 1712,
    perempuan: 1716,
    kepalaKeluarga: 1154,
    jumlahDusun: 4,
    jumlahRW: 6,
    jumlahRT: 18,
    mataPencaharianUtama: 'Petani & Buruh Tani (68%), Wiraswasta/UMKM (14%), Buruh Industri & Jasa (12%), ASN/TNI/Polri (6%)'
  },
  potensi: [
    {
      nama: 'Pertanian Padi & Palawija Unggul',
      deskripsi: 'Lebih dari 245 hektar lahan persawahan dengan sistem irigasi teknis menghasilkan padi varietas Ciherang dan Inpari dengan produktivitas tinggi, serta sentra tanaman jagung & kacang tanah.',
      kategori: 'Pertanian'
    },
    {
      nama: 'Industri Olahan Gula Kelapa Jawa',
      deskripsi: 'Sentra perajin gula kelapa tradisional asli tanpa bahan kimia di Dusun Guwo yang dipasok ke berbagai pasar tradisional di Solo Raya dan sekitarnya.',
      kategori: 'UMKM'
    },
    {
      nama: 'Peternakan Rakyat Sapi & Kambing',
      deskripsi: 'Kawasan peternakan terpadu berbasis kelompok ternak warga yang memanfaatkan limbah jerami padi sebagai pakan silase berkualitas.',
      kategori: 'Peternakan'
    },
    {
      nama: 'Kerajinan Anyaman Bambu & Besek',
      deskripsi: 'Kelompok usaha wanita tani yang memproduksi aneka perkakas rumah tangga ramah lingkungan dari bambu apus khas lereng bukit Gesi.',
      kategori: 'Kerajinan'
    }
  ],
  transparansiAPBDes: {
    tahun: 2026,
    pendapatan: 'Rp 1.845.620.000',
    belanja: 'Rp 1.812.350.000',
    surplus: 'Rp 33.270.000',
    bidang: [
      { nama: 'Penyelenggaraan Pemerintahan Desa', persentase: 34, anggaran: 'Rp 616.200.000' },
      { nama: 'Pelaksanaan Pembangunan Desa', persentase: 42, anggaran: 'Rp 761.187.000' },
      { nama: 'Pembinaan Kemasyarakatan', persentase: 11, anggaran: 'Rp 199.358.000' },
      { nama: 'Pemberdayaan Masyarakat Desa', persentase: 9, anggaran: 'Rp 163.111.000' },
      { nama: 'Penanggulangan Bencana & Mendesak', persentase: 4, anggaran: 'Rp 72.494.000' }
    ]
  }
};

export const INITIAL_PERANGKAT_DESA: PerangkatDesa[] = [
  {
    id: 'perangkat-1',
    nama: 'Supriyadi, S.Sos.',
    jabatan: 'Kepala Desa',
    nip: '19760812 200501 1 004',
    fotoUrl: DESA_IMAGES.perangkat.kades,
    tugasPokok: 'Memimpin penyelenggaraan pemerintahan desa, pembinaan kemasyarakatan, serta pemberdayaan warga.',
    kontak: '0812-3456-7890',
    urutan: 1
  },
  {
    id: 'perangkat-2',
    nama: 'Budi Santoso, S.AP.',
    jabatan: 'Sekretaris Desa',
    nip: '19820415 201001 1 012',
    fotoUrl: DESA_IMAGES.perangkat.sekdes,
    tugasPokok: 'Mengkoordinasikan urusan ketatausahaan, administrasi umum, perencanaan, dan pelaporan keuangan desa.',
    kontak: '0813-8822-1190',
    urutan: 2
  },
  {
    id: 'perangkat-3',
    nama: 'Sri Wahyuni, S.E.',
    jabatan: 'Kaur Keuangan (Bendahara)',
    nip: '19861120 201402 2 003',
    fotoUrl: DESA_IMAGES.perangkat.kaurKeuangan,
    tugasPokok: 'Pengelolaan kas desa, penatausahaan penerimaan, dan pengeluaran APBDes secara transparan dan akuntabel.',
    kontak: '0815-9921-3444',
    urutan: 3
  },
  {
    id: 'perangkat-4',
    nama: 'Hendra Gunawan, S.Kom.',
    jabatan: 'Kaur Tata Usaha & Perencanaan',
    nip: '19900305 201605 1 008',
    fotoUrl: DESA_IMAGES.perangkat.kaurTu,
    tugasPokok: 'Menyusun dokumen perencanaan desa (RPJMDes, RKPDes) serta inventarisasi aset dan digitalisasi desa.',
    kontak: '0857-4412-8877',
    urutan: 4
  },
  {
    id: 'perangkat-5',
    nama: 'Joko Prasetyo',
    jabatan: 'Kasi Pemerintahan',
    nip: '19790610 200801 1 015',
    fotoUrl: DESA_IMAGES.perangkat.kasiPemerintahan,
    tugasPokok: 'Melayani urusan kependudukan, pertanahan, ketertiban umum, dan pembinaan kelembagaan RT/RW.',
    kontak: '0812-9901-2233',
    urutan: 5
  },
  {
    id: 'perangkat-6',
    nama: 'Siti Rahmawati, S.Pd.',
    jabatan: 'Kasi Kesejahteraan & Pelayanan',
    nip: '19881214 201503 2 007',
    fotoUrl: DESA_IMAGES.perangkat.kasiPelayanan,
    tugasPokok: 'Pembangunan sarana prasarana, program bantuan sosial (Bansos), kesehatan masyarakat, dan posyandu.',
    kontak: '0821-6677-4321',
    urutan: 6
  },
  {
    id: 'perangkat-7',
    nama: 'Wahyudi Siswanto',
    jabatan: 'Kepala Dusun (Kadus) I Pilang',
    nip: '-',
    fotoUrl: DESA_IMAGES.perangkat.kadus,
    tugasPokok: 'Membantu Kades dalam pelaksanaan tugas wilayah kemasyarakatan di Dusun Pilang dan sekitarnya.',
    kontak: '0813-7722-1980',
    urutan: 7
  },
  {
    id: 'perangkat-8',
    nama: 'Drs. Slamet Riyadi',
    jabatan: 'Ketua BPD Pilangsari',
    nip: '-',
    fotoUrl: DESA_IMAGES.perangkat.bpd,
    tugasPokok: 'Membahas dan menyepakati rancangan peraturan desa bersama Kepala Desa serta menampung aspirasi warga.',
    kontak: '0812-6655-4433',
    urutan: 8
  }
];

export const INITIAL_BERITA: Berita[] = [
  {
    id: 'berita-1',
    slug: 'panen-raya-padi-organik-dan-peningkatan-irigasi-dusun-guwo',
    judul: 'Panen Raya Padi Dusun Guwo Catat Produktivitas 7,8 Ton per Hektar',
    kategori: 'Pertanian',
    ringkasan: 'Kelompok Tani Makmur Dusun Guwo Desa Pilangsari sukses menggelar panen raya musim tanam I dengan hasil melimpah berkat optimalisasi saluran irigasi embung desa.',
    isiLengkap: `Pemerintah Desa Pilangsari bersama Kelompok Tani "Tani Makmur" Dusun Guwo merayakan panen raya padi pada Jumat pagi. Pada musim tanam kali ini, produktivitas gabah kering panen (GKP) tercatat mencapai 7,8 ton per hektar, melampaui rata-rata kecamatan sebesar 6,5 ton per hektar.

Kepala Desa Pilangsari, Supriyadi, S.Sos., yang turun langsung ke persawahan menyampaikan bahwa hasil gemilang ini adalah buah dari kerja keras petani yang didukung oleh normalisasi saluran irigasi dan bantuan bibit unggul varietas Inpari 32 dari Dinas Pertanian dan Ketahanan Pangan Kabupaten Sragen.

"Kami terus berkomitmen memastikan petani Desa Pilangsari tidak kesulitan air saat fase bunting dan pengisian bulir. Ke depan, Pemdes akan mengalokasikan Dana Desa untuk pengadaan pompa air tenaga surya guna menekan biaya operasional bahan bakar minyak para petani," jelas Supriyadi.

Kegiatan panen raya ini turut dihadiri perwakilan BPP Kecamatan Gesi, Babinsa, Bhabinkamtibmas, serta tokoh masyarakat setempat. Warga berharap harga gabah tetap stabil dan menguntungkan para petani desa.`,
    gambarUrl: DESA_IMAGES.berita.panenRaya,
    penulis: 'Hendra Gunawan (Pamong Desa)',
    tanggal: '20 Oktober 2026',
    dibaca: 342
  },
  {
    id: 'berita-2',
    slug: 'penyaluran-blt-dana-desa-tahap-iii-tepat-sasaran-pilangsari',
    judul: 'Penyaluran BLT Dana Desa Tahap III Tahun 2026 Berjalan Tertib dan Transparan',
    kategori: 'Pemerintahan',
    ringkasan: 'Sebanyak 75 Keluarga Penerima Manfaat (KPM) di Desa Pilangsari menerima bantuan langsung tunai dengan pendampingan langsung BPD dan aparat kewilayahan.',
    isiLengkap: `Bertempat di Balai Desa Pilangsari, Pemerintah Desa kembali menyalurkan Bantuan Langsung Tunai Dana Desa (BLT-DD) Tahap III Tahun Anggaran 2026. Penyaluran disaksikan oleh Badan Permusyawaratan Desa (BPD), Pendamping Desa, serta Bhabinkamtibmas Polsek Gesi.

Setiap KPM menerima bantuan uang tunai sebesar Rp 300.000 per bulan yang disalurkan secara transparan tanpa potongan apapun. Kasi Kesejahteraan Desa Pilangsari, Siti Rahmawati, menerangkan bahwa seluruh daftar penerima telah melalui mekanisme verifikasi faktual dan Musyawarah Desa Khusus (Musdesus).

"Penerima diprioritaskan bagi keluarga lansia tunggal, penyandang disabilitas berat, dan warga yang kehilangan mata pencaharian. Kami juga menyediakan layanan jemput bola dengan mengantarkan langsung ke rumah warga lansia yang tidak memungkinkan hadir di balai desa," terang Siti.`,
    gambarUrl: DESA_IMAGES.berita.kantorPelayanan,
    penulis: 'Siti Rahmawati, S.Pd.',
    tanggal: '16 Oktober 2026',
    dibaca: 289
  },
  {
    id: 'berita-3',
    slug: 'posyandu-integrasi-layanan-primer-pilangsari-cegah-stunting',
    judul: 'Luncurkan Posyandu ILP: Desa Pilangsari Targetkan Zero Stunting',
    kategori: 'Kesehatan',
    ringkasan: 'Kader posyandu terpadu bersama Bidan Desa menggelar penimbangan serentak, penyuluhan gizi seimbang, dan pemberian makanan tambahan bergizi bagi balita & ibu hamil.',
    isiLengkap: `Sebagai wujud kepedulian terhadap masa depan generasi penerus, Pemdes Pilangsari menggelar gebyar Posyandu Integrasi Layanan Primer (ILP) di Gedung Serbaguna Desa.

Acara meliputi pemeriksaan antropometri digital (tinggi dan berat badan balita), pemberian vitamin A dan imunisasi lengkap, serta konseling gizi bagi ibu hamil. Kader posyandu juga membagikan paket PMT (Pemberian Makanan Tambahan) berupa olahan telur, abon lele lokal, dan bubur kacang hijau.

Bidan Desa Pilangsari menuturkan bahwa angka kasus risiko stunting di Desa Pilangsari telah turun signifikan hingga di bawah 3% berkat kolaborasi aktif pemerintah desa, bidan desa, dan dasawisma RT.`,
    gambarUrl: DESA_IMAGES.berita.posyandu,
    penulis: 'Tim Kesehatan Desa',
    tanggal: '12 Oktober 2026',
    dibaca: 415
  },
  {
    id: 'berita-4',
    slug: 'pemberdayaan-umkm-anyaman-bambu-sukowati-tembus-pasar-digital',
    judul: 'Pelatihan Kemasan & Pemasaran Digital bagi Pengrajin Anyaman Bambu Desa',
    kategori: 'Sosial & Budaya',
    ringkasan: 'Bekerja sama dengan Balai Latihan Kerja Sragen, 30 ibu-ibu pengrajin anyaman bambu Dusun Karanganyar dilatih teknik finishing modern dan foto produk marketplace.',
    isiLengkap: `Kerajinan anyaman bambu yang telah menjadi warisan turun-temurun warga Dusun Karanganyar Desa Pilangsari kini mendapat sentuhan modern. Melalui program Pemberdayaan Masyarakat Desa 2026, digelar pelatihan pembuatan keranjang hantaran estetis dan pemasaran online.

Para peserta diajarkan teknik pengawetan bambu alami menggunakan rebusan garam serta teknik pewarnaan ramah lingkungan. Diharapkan nilai jual produk meningkat hingga tiga kali lipat dibanding hanya menjual besek polos mentah.`,
    gambarUrl: DESA_IMAGES.berita.anyamanBambu,
    penulis: 'Hendra Gunawan',
    tanggal: '05 Oktober 2026',
    dibaca: 210
  }
];

export const INITIAL_PENGUMUMAN: Pengumuman[] = [
  {
    id: 'pengumuman-1',
    judul: 'Jadwal Pelayanan Keliling Perekaman KTP-el & Akta Kelahiran oleh Disdukcapil Sragen di Balai Desa',
    isi: 'Diberitahukan kepada seluruh warga Desa Pilangsari, Disdukcapil Kabupaten Sragen akan membuka layanan jemput bola perekaman KTP Elektronik, pembuatan Kartu Identitas Anak (KIA), dan revisi Kartu Keluarga pada hari Selasa, 27 Oktober 2026 pukul 08.30 - 14.00 WIB di Pendopo Balai Desa Pilangsari. Mohon membawa fotokopi KK dan akta kelahiran.',
    tanggal: '22 Oktober 2026',
    isPenting: true,
    lampiranNama: 'Surat_Edaran_Kependudukan_2026.pdf'
  },
  {
    id: 'pengumuman-2',
    judul: 'Pemutakhiran Data Calon Penerima Alokasi Pupuk Bersubsidi e-RDKK Tahun 2027',
    isi: 'Para anggota Kelompok Tani dimohon segera menyetorkan fotokopi SPPT PBB tahun 2026 dan fotokopi KTP/KK kepada ketua kelompok tani masing-masing dusun paling lambat 30 Oktober 2026 guna penginputan sistem e-Alokasi pupuk bersubsidi.',
    tanggal: '18 Oktober 2026',
    isPenting: true,
    lampiranNama: 'Formulir_eRDKK_Pupuk_2027.pdf'
  },
  {
    id: 'pengumuman-3',
    judul: 'Kerja Bakti Serentak & Pemberantasan Sarang Nyamuk (PSN) Menjelang Musim Penghujan',
    isi: 'Menghadapi datangnya musim hujan, seluruh warga diwajibkan mengikuti kerja bakti kebersihan lingkungan, pembersihan saluran drainase, serta gerakan 3M Plus pada Minggu pagi pukul 06.30 WIB di wilayah RT masing-masing.',
    tanggal: '14 Oktober 2026',
    isPenting: false
  }
];

export const INITIAL_AGENDA: Agenda[] = [
  {
    id: 'agenda-1',
    judul: 'Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) RKPDes 2027',
    tanggal: '28 Oktober 2026',
    waktu: '09.00 - 13.00 WIB',
    lokasi: 'Pendopo Balai Desa Pilangsari',
    penyelenggara: 'BPD & Pemerintah Desa Pilangsari',
    deskripsi: 'Pembahasan usulan prioritas pembangunan fisik, pemberdayaan ekonomi, dan bantuan sosial dari masing-masing dusun untuk anggaran tahun 2027.',
    kategori: 'Musyawarah'
  },
  {
    id: 'agenda-2',
    judul: 'Pelayanan Posyandu Balita & Lansia Rutin Dusun Pilang',
    tanggal: '03 November 2026',
    waktu: '08.00 - 11.30 WIB',
    lokasi: 'Poskesdes Dusun Pilang RT 04',
    penyelenggara: 'Kader Kesehatan Desa & Bidan Desa',
    deskripsi: 'Pemeriksaan kesehatan gratis, penimbangan balita, imunisasi dasar, pemeriksaan tensi darah, dan pembagian makanan tambahan gizi.',
    kategori: 'Kesehatan'
  },
  {
    id: 'agenda-3',
    judul: 'Rembug Tani Persiapan Musim Tanam II (MT II) Bersama Gapoktan',
    tanggal: '08 November 2026',
    waktu: '19.30 - 22.00 WIB',
    lokasi: 'Rumah Ketua Gapoktan Dusun Guwo',
    penyelenggara: 'Gabungan Kelompok Tani Desa Pilangsari',
    deskripsi: 'Penyusunan jadwal pola tanam serentak, pembagian giliran air irigasi, serta antisipasi serangan hama tikus dan wereng.',
    kategori: 'Pertanian'
  },
  {
    id: 'agenda-4',
    judul: 'Pengajian Akbar & Doa Bersama HUT Desa Pilangsari',
    tanggal: '15 November 2026',
    waktu: '19.30 WIB - Selesai',
    lokasi: 'Halaman Masjid Jami’ Baiturrahman Pilangsari',
    penyelenggara: 'Takmir Masjid & Karang Taruna Desa',
    deskripsi: 'Peringatan hari jadi Desa Pilangsari dengan doa bersama untuk kemakmuran, keselamatan, dan keberkahan seluruh warga desa.',
    kategori: 'Keagamaan'
  }
];

export const INITIAL_GALERI: GaleriItem[] = [
  {
    id: 'galeri-1',
    judul: 'Panen Raya Musim Tanam Padi Dusun Guwo',
    kategori: 'Pertanian',
    deskripsi: 'Kegiatan panen raya padi varietas unggul Inpari 32 bersama kelompok tani dan perangkat desa.',
    gambarUrl: DESA_IMAGES.galeri.panenRaya,
    tanggal: '20 Oktober 2026'
  },
  {
    id: 'galeri-2',
    judul: 'Pelayanan Terpadu di Kantor Balai Desa Pilangsari',
    kategori: 'Kemasyarakatan',
    deskripsi: 'Suasana pelayanan administrasi kependudukan dan surat menyurat yang ramah dan cepat.',
    gambarUrl: DESA_IMAGES.galeri.pelayananKantor,
    tanggal: '18 Oktober 2026'
  },
  {
    id: 'galeri-3',
    judul: 'Panorama Hamparan Persawahan & Perbukitan Gesi',
    kategori: 'Pertanian',
    deskripsi: 'Bentang alam persawahan hijau asri di pagi hari yang menyejukkan mata warga Desa Pilangsari.',
    gambarUrl: DESA_IMAGES.galeri.panoramaAlam,
    tanggal: '15 Oktober 2026'
  },
  {
    id: 'galeri-4',
    judul: 'Pemeriksaan Kesehatan Berkala Lansia di Posyandu',
    kategori: 'Kemasyarakatan',
    deskripsi: 'Pemeriksaan tensi darah dan gula darah gratis bagi para sesepuh desa oleh tenaga medis.',
    gambarUrl: DESA_IMAGES.galeri.posyanduLansia,
    tanggal: '10 Oktober 2026'
  },
  {
    id: 'galeri-5',
    judul: 'Pembangunan Rabat Beton Jalan Usaha Tani Dusun Karanganyar',
    kategori: 'Pembangunan',
    deskripsi: 'Pengerjaan jalan usaha tani sepanjang 450 meter dengan dana swakelola padat karya tunai desa.',
    gambarUrl: DESA_IMAGES.galeri.pembangunanJalan,
    tanggal: '02 Oktober 2026'
  },
  {
    id: 'galeri-6',
    judul: 'Latihan Seni Karawitan & Tari Tradisional Karang Taruna',
    kategori: 'Budaya',
    deskripsi: 'Generasi muda Desa Pilangsari aktif melestarikan seni gamelan Jawa di pendopo desa setiap akhir pekan.',
    gambarUrl: DESA_IMAGES.galeri.seniBudaya,
    tanggal: '27 September 2026'
  },
  {
    id: 'galeri-7',
    judul: 'Pembangunan Saluran Drainase & Talud Penahan Longsor',
    kategori: 'Pembangunan',
    deskripsi: 'Pembangunan infrastruktur saluran drainase air pemukiman guna mencegah genangan dan erosi tebing jalan.',
    gambarUrl: DESA_IMAGES.galeri.pembangunanDrainase,
    tanggal: '19 September 2026'
  },
  {
    id: 'galeri-8',
    judul: 'Upacara Tradisi Bersih Desa (Nyadran) Pilangsari',
    kategori: 'Budaya',
    deskripsi: 'Warga desa bergotong royong membawa tumpeng kenduri sebagai ungkapan rasa syukur dan kerukunan warga Sukowati.',
    gambarUrl: DESA_IMAGES.galeri.bersihDesaNyadran,
    tanggal: '10 September 2026'
  }
];

export const INITIAL_SURAT_SAMPLES: PermohonanSurat[] = [
  {
    id: 'srt-1',
    kodeTiket: 'SRT-PLS-2026-0001',
    namaLengkap: 'Bambang Triyono',
    nik: '3314051208850002',
    noHp: '081234567811',
    jenisSurat: 'Surat Keterangan Usaha (SKU)',
    keperluan: 'Persyaratan pengajuan Kredit Usaha Rakyat (KUR) BRI Unit Gesi untuk usaha perbengkelan motor',
    alamat: 'Dusun Pilang RT 02 / RW 01, Desa Pilangsari',
    namaBerkas: 'KTP_dan_Foto_Bengkel.pdf',
    status: 'Selesai',
    tanggalDiajukan: '2026-10-21 09:15',
    tanggalSelesai: '2026-10-21 13:40',
    catatanPetugas: 'Surat keterangan usaha telah ditandatangani Kepala Desa dan dibubuhi stempel basah. Silakan diambil di loket pelayanan pada jam kerja atau unduh salinan digital.',
    petugas: 'Joko Prasetyo (Kasi Pemerintahan)'
  },
  {
    id: 'srt-2',
    kodeTiket: 'SRT-PLS-2026-0002',
    namaLengkap: 'Rina Wijayanti',
    nik: '3314055403980004',
    noHp: '085722334455',
    jenisSurat: 'Surat Keterangan Tidak Mampu (SKTM)',
    keperluan: 'Permohonan keringanan biaya UKT perkuliahan di Universitas Sebelas Maret (UNS)',
    alamat: 'Dusun Guwo RT 05 / RW 02, Desa Pilangsari',
    namaBerkas: 'KTP_KK_Kartu_Mahasiswa.pdf',
    status: 'Diproses',
    tanggalDiajukan: '2026-10-22 11:20',
    catatanPetugas: 'Berkas telah diverifikasi lengkap oleh Kasi Kesejahteraan. Saat ini sedang dalam tahap penomoran registrasi dan tanda tangan elektronik Kades.',
    petugas: 'Siti Rahmawati, S.Pd.'
  },
  {
    id: 'srt-3',
    kodeTiket: 'SRT-PLS-2026-0003',
    namaLengkap: 'Danang Prasetyo',
    nik: '3314052309990001',
    noHp: '082199887766',
    jenisSurat: 'Surat Pengantar SKCK',
    keperluan: 'Pendaftaran seleksi Calon Pegawai Negeri Sipil (CPNS) Kementerian Pertanian',
    alamat: 'Dusun Tegalrejo RT 12 / RW 04, Desa Pilangsari',
    namaBerkas: 'Foto_KTP_KK_Pasfoto.jpg',
    status: 'Diterima',
    tanggalDiajukan: '2026-10-23 08:05',
    catatanPetugas: 'Permohonan telah masuk dalam sistem antrean pelayanan mandiri. Menunggu giliran verifikasi berkas oleh petugas loket.',
    petugas: 'Budi Santoso, S.AP.'
  }
];

export const INITIAL_PENGADUAN_SAMPLES: Pengaduan[] = [
  {
    id: 'pgd-1',
    kodeTiket: 'PLS-2026-0001',
    namaPelapor: 'Warga Peduli Lingkungan',
    isAnonim: true,
    noHp: '081399882233',
    kategori: 'Infrastruktur & Jalan',
    lokasi: 'Jalan Penghubung Dusun Guwo menuju Dusun Karanganyar RT 06',
    isiLaporan: 'Lampu penerangan jalan umum (PJU) nomor tiang 14 mati sudah tiga hari, menyebabkan jalanan gelap dan rawan kecelakaan pada malam hari bagi pengendara sepeda motor warga tani.',
    namaLampiran: 'Foto_PJU_Padam.jpg',
    status: 'Diproses',
    tanggalLapor: '2026-10-21 19:45',
    tanggalTanggapan: '2026-10-22 08:30',
    tanggapanPetugas: 'Terima kasih atas laporannya. Tim Kaur Umum Desa Pilangsari telah berkoordinasi dengan petugas teknis PLN rayon Tangen / Sragen, jadwal perbaikan bohlam & ballast dijadwalkan Kamis sore ini.',
    petugas: 'Hendra Gunawan (Kaur Umum)'
  },
  {
    id: 'pgd-2',
    kodeTiket: 'PLS-2026-0002',
    namaPelapor: 'Sutrisno',
    isAnonim: false,
    nik: '3314051004750003',
    noHp: '082233445566',
    kategori: 'Kesehatan & Lingkungan',
    lokasi: 'Saluran Tersier Blok Sawah Lor Dusun Pilang',
    isiLaporan: 'Terdapat tumpukan sampah plastik dan batang bambu yang menyumbat pintu pembagi air saluran irigasi, mohon bantuan pembersihan bersama dinas terkait sebelum musim tanam.',
    namaLampiran: 'Foto_Sumbatan_Saluran.jpg',
    status: 'Selesai',
    tanggalLapor: '2026-10-18 10:12',
    tanggalTanggapan: '2026-10-19 14:00',
    tanggapanPetugas: 'Laporan telah ditindaklanjuti. Pemdes bersama Poktan Dusun Pilang telah melaksanakan kerja bakti pembersihan saluran pada Minggu pagi kemarin, aliran air sudah kembali lancar tanpa hambatan.',
    petugas: 'Joko Prasetyo (Kasi Pemerintahan)'
  }
];
