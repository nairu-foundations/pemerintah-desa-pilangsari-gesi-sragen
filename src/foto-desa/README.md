# 📸 Panduan Struktur 1 Folder Media & Foto Desa Pilangsari (Terproteksi & Aman Hosting)

Folder ini adalah **SATU-SATUNYA PUSAT FOTO TERSTRUKTUR (`src/foto-desa/`)** untuk seluruh tampilan website resmi Pemerintah Desa Pilangsari, Kecamatan Gesi, Kabupaten Sragen.

> **🛡️ Catatan Keamanan Hosting & Publikasi:**
> Foto sengaja **dipisahkan dan dikeluarkan dari folder `public/`** menuju `src/foto-desa/`.
> Pada saat website di-hosting ke internet (cPanel, Vercel, Netlify, VPS Nginx/Apache):
> - Folder `public/` rentan terhadap *directory browsing/crawling* terbuka oleh publik atau bot scanner jika web server tidak dikonfigurasi ketat.
> - Dengan menaruh foto di `src/foto-desa/`, Vite Bundler akan secara otomatis mengamankan, meng-optimasi, dan memberi hash unik pada aset saat proses *build* (`npm run build`). Struktur folder mentah tidak akan pernah terekspos secara terbuka di internet!

---

## 🗂️ Struktur Sub-Folder & Daftar Berkas (`src/foto-desa/`)

```text
src/foto-desa/
│
├── 📂 brand/
│   ├── logo-desa.png                  # Lambang resmi Desa / Pemkab Sragen (Format PNG transparan, disarankan 512x512 px)
│   └── logo-kabupaten-sragen.png      # Lambang Kabupaten Sragen untuk kop surat & dokumen resmi
│
├── 📂 hero/
│   └── hero-utama.jpg                 # Foto pemandangan bentang alam utama di bagian paling atas Beranda (Landscape 1920x1080 px)
│
├── 📂 profil/
│   ├── kepala-desa.jpg                # Foto resmi Kepala Desa berseragam dinas (Portrait 800x1000 px)
│   ├── kantor-balai-desa.jpg          # Foto depan Gedung Balai Desa Pilangsari (Landscape 1200x800 px)
│   └── peta-wilayah.jpg               # Peta batas administrasi wilayah desa (Landscape 1200x800 px)
│
├── 📂 perangkat/
│   ├── kades.jpg                      # Kepala Desa (Supriyadi, S.Sos.)
│   ├── sekdes.jpg                     # Sekretaris Desa (Budi Santoso, S.AP.)
│   ├── kaur-keuangan.jpg              # Kaur Keuangan / Bendahara (Sri Wahyuni, S.E.)
│   ├── kaur-tu.jpg                    # Kaur Tata Usaha & Perencanaan (Hendra Gunawan, S.Kom.)
│   ├── kasi-pemerintahan.jpg          # Kasi Pemerintahan (Joko Prasetyo)
│   ├── kasi-pelayanan.jpg             # Kasi Kesejahteraan & Pelayanan (Siti Rahmawati, S.Pd.)
│   ├── kadus-pilang.jpg               # Kepala Dusun I Pilang (Wahyudi Siswanto)
│   └── bpd.jpg                        # Ketua BPD Pilangsari (Drs. Slamet Riyadi)
│                                      (Semua foto perangkat disarankan pasfoto resmi rasio 4:5 atau 1:1, 400x500 px)
│
├── 📂 berita/
│   ├── berita-1.jpg                   # Warta 1: Panen Raya Padi Dusun Guwo (Rasio 16:9, 800x450 px)
│   ├── berita-2.jpg                   # Warta 2: Penyaluran BLT Dana Desa (Rasio 16:9, 800x450 px)
│   ├── berita-3.jpg                   # Warta 3: Posyandu Integrasi Layanan Primer (Rasio 16:9, 800x450 px)
│   └── berita-4.jpg                   # Warta 4: Pelatihan Anyaman Bambu UMKM (Rasio 16:9, 800x450 px)
│
├── 📂 galeri/
│   ├── galeri-1.jpg                   # Dokumentasi: Panen Raya MT I (800x600 px)
│   ├── galeri-2.jpg                   # Dokumentasi: Pelayanan Kantor Desa (800x600 px)
│   ├── galeri-3.jpg                   # Dokumentasi: Panorama Alam Persawahan (800x600 px)
│   ├── galeri-4.jpg                   # Dokumentasi: Pemeriksaan Kesehatan Posyandu (800x600 px)
│   ├── galeri-5.jpg                   # Dokumentasi: Pembangunan Rabat Beton Jalan Usaha Tani (800x600 px)
│   ├── galeri-6.jpg                   # Dokumentasi: Seni Karawitan Gamelan Pemuda Desa (800x600 px)
│   ├── galeri-7.jpg                   # Dokumentasi: Saluran Drainase & Talud Desa (800x600 px)
│   └── galeri-8.jpg                   # Dokumentasi: Upacara Bersih Desa (Nyadran) (800x600 px)
│
└── 📂 umkm/
    ├── umkm-gula-kelapa.jpg           # Potensi Komoditas: Gula Kelapa Asli (600x450 px)
    ├── umkm-anyaman-bambu.jpg         # Potensi Kerajinan: Anyaman Bambu & Besek (600x450 px)
    └── umkm-peternakan.jpg            # Potensi Ternak: Peternakan Sapi & Kambing Rakyat (600x450 px)
```

---

## 💡 Cara Mengganti Foto (Sangat Mudah & Terproteksi)

### Metode 1: Timpa Berkas Langsung (Direkomendasikan)
1. Siapkan foto baru Anda dari kamera atau HP.
2. Ubah nama berkasnya menjadi sama persis dengan nama berkas di atas (contoh: `kepala-desa.jpg`).
3. Salin/timpa (*overwrite*) berkas di dalam subfolder terkait (contoh: `src/foto-desa/profil/kepala-desa.jpg`).
4. Saat di-build atau di-deploy, sistem otomatis meng-bundle foto terbaru secara aman!

### Metode 2: Lewat Menu "Panduan & Pengelola Foto" di Website
Website ini dilengkapi modul interaktif **"Kelola Foto Desa"** di bilah navigasi atas (topbar), tombol navbar, dan footer. Anda dapat melihat pratinjau seluruh foto, melihat path berkas `src/foto-desa/`, dan mengunduh/menyalin panduan ukuran rekomendasi.

### Metode 3: Menggunakan Registri `src/constants/images.ts`
Seluruh foto terdaftar di `src/constants/images.ts`. Jika Anda ingin menambahkan kategori baru atau mengimpor aset tambahan, cukup sesuaikan registri tersebut.
