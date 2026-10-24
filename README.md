# Website Resmi Pemerintah Desa Pilangsari
**Kecamatan Gesi, Kabupaten Sragen, Provinsi Jawa Tengah**

Website resmi berbasis *Landing Page* interaktif dengan portal pelayanan surat online, aspirasi & pengaduan masyarakat, transparansi APBDes, profil desa, struktur pamong desa, warta informasi, dan integrasi peta lokasi.

---

## 🎨 Palet Warna & Identitas Visual
Diadopsi dari lambang resmi Kabupaten Sragen "Bumi Sukowati":
- **Primary (Kuning Logo)**: `#FFE600` (Aksen, tombol utama, highlight)
- **Secondary (Merah Tepi Logo)**: `#E53935` (Border, badge, tombol sekunder)
- **Success / Alam (Hijau Pohon)**: `#2E9E3E` (Ikon layanan, status selesai)
- **Water (Biru Sungai)**: `#2D8FD5` (Link, status diproses, peta)
- **Neutral Gelap (Hitam)**: `#111111` (Teks heading, dark footer)
- **Background**: Putih `#FFFFFF` & Krem Lembut `#FFFBE6`

---

## 🚀 Fitur Unggulan
1. **Layanan Surat Mandiri Online**:
   - Pengajuan SKTM, SKU, Pengantar SKCK, Domisili, KTP/KK, dan Kelahiran/Kematian.
   - Otomatis membuat kode tiket unik (contoh: `SRT-PLS-2026-0001`).
   - Fitur cetak bukti pendaftaran resmi (*tanda terima loket*).
2. **Pengaduan & Aspirasi Warga (Lapor Desa)**:
   - Dukungan pelaporan terbuka atau Anonim.
   - Kategori infrastruktur jalan, bansos, keamanan, lingkungan, dan pelayanan publik.
   - Otomatis menghasilkan kode tiket pengaduan (contoh: `PLS-2026-0001`).
3. **Cek Status Pelayanan & Pengaduan**:
   - Pelacakan mandiri menggunakan kode tiket.
   - *Interactive 4-Stage Visual Timeline* dengan badge warna (Diterima, Verifikasi, Diproses, Selesai/Ditolak).
   - Menampilkan catatan dan tanggapan resmi dari petugas pamong desa.
4. **Profil & Potensi Desa**:
   - Sejarah desa, visi & 5 misi pembangunan, kondisi geografis, dan demografi penduduk.
   - Counter statistik animasi saat masuk ke viewport.
   - Potensi pertanian padi & palawija, olahan gula kelapa, peternakan rakyat, dan kerajinan bambu.
5. **Struktur Organisasi Pemerintahan Desa**:
   - Bagan hierarki SOTK (Kades, Sekdes, Kaur, Kasi, Kadus, BPD).
   - Kartu perangkat desa dengan efek interaktif dan dialog profil.
6. **Warta & Informasi Publik**:
   - Berita desa dengan modal baca lengkap dan tombol bagikan ke WhatsApp.
   - Pengumuman penting dengan indikator prioritas.
   - Agenda kegiatan desa dengan tampilan kalender dan penanda agenda terdekat.
7. **Galeri Dokumentasi**:
   - Grid foto dengan filter kategori (Pertanian, Kemasyarakatan, Pembangunan, Budaya).
   - Lightbox interaktif (zoom, tombol previous/next, dan navigasi keyboard).
8. **Peta Lokasi Kantor Desa**:
   - Peta responsif lokasi Balai Desa Pilangsari di Kecamatan Gesi, Kabupaten Sragen.
   - Tombol satu-klik "Petunjuk Arah" menuju Google Maps.
   - Jam pelayanan operasional dan daftar nomor darurat desa 24 jam.
9. **Panel Admin Pamong Desa**:
   - Pengelolaan permohonan surat masuk (ubah status, tambah catatan/petugas).
   - Pengelolaan pengaduan warga (kirim tanggapan resmi).
   - Publikasi berita baru, pengumuman, dan agenda.
   - *PIN default demo*: `pilangsari2026`

---

## 🛠️ Instalasi & Menjalankan Lokal

### 1. Prasyarat
- Node.js versi 18 ke atas
- npm atau pnpm atau yarn

### 2. Langkah Instalasi
```bash
# Clone repository
git clone <url-repository>
cd desa-pilangsari

# Install dependensi
npm install

# Jalankan development server
npm run dev
```
Buka browser di `http://localhost:3000` (atau port yang tertera di terminal).

---

## 🌐 Konfigurasi Lingkungan (.env)
Salin berkas `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Variabel yang dapat dikonfigurasi:
- `VITE_APP_URL`: URL domain aplikasi saat di-*host*.

---

## 📦 Panduan Deploy

### Deploy ke Vercel:
1. Hubungkan repository GitHub Anda ke [Vercel](https://vercel.com).
2. Konfigurasi proyek:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Klik **Deploy**.

### Deploy ke Netlify:
1. Hubungkan repository ke [Netlify](https://netlify.com).
2. Konfigurasi build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Klik **Deploy Site**.
