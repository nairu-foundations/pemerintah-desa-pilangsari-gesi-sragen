import React from 'react';
import { X, Printer, CheckCircle, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LogoDesa } from '../common/LogoDesa';
import { PermohonanSurat, Pengaduan } from '../../types';

export const TicketPrintModal: React.FC = () => {
  const { printReceiptData, setPrintReceiptData } = useApp();

  if (!printReceiptData) return null;

  const { tipe, item } = printReceiptData;
  const isSurat = tipe === 'surat';
  const suratItem = isSurat ? (item as PermohonanSurat) : null;
  const pengaduanItem = !isSurat ? (item as Pengaduan) : null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={() => setPrintReceiptData(null)}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-300 my-6 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar (Hidden on print) */}
        <div className="no-print flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Pratinjau Struk Cetak
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#FFE600]" />
              <span>Cetak Sekarang</span>
            </button>
            <button
              onClick={() => setPrintReceiptData(null)}
              className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-500 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Receipt Body */}
        <div className="printable-receipt border-2 border-neutral-800 p-6 sm:p-8 rounded-xl bg-white text-neutral-900">
          
          {/* Kop Surat Resmi */}
          <div className="flex items-center justify-between border-b-4 border-double border-neutral-900 pb-4 mb-6">
            <LogoDesa size={70} className="h-16 w-auto shrink-0" />
            <div className="text-center flex-1 px-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                Pemerintah Kabupaten Sragen · Kecamatan Gesi
              </h4>
              <h2 className="text-lg sm:text-xl font-heading font-black text-black uppercase tracking-tight">
                PEMERINTAH DESA PILANGSARI
              </h2>
              <p className="text-[11px] text-neutral-600 mt-0.5">
                Jl. Raya Gesi - Tangen Km. 2, Pilangsari, Sragen 57262 · Telp: 0812-3456-7890
              </p>
            </div>
            <div className="w-16 h-16 shrink-0 hidden sm:flex items-center justify-center border border-dashed border-neutral-300 text-[10px] text-neutral-400 font-mono text-center">
              PARAF LOKET
            </div>
          </div>

          {/* Receipt Title */}
          <div className="text-center mb-6">
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider underline">
              {isSurat ? 'TANDA TERIMA PENDAFTARAN SURAT MANDIRI' : 'BUKTI REGISTRASI PENGADUAN WARGA'}
            </h3>
            <span className="text-xs font-mono text-neutral-500 block mt-0.5">
              Nomor Registrasi: <strong>{item.kodeTiket}</strong>
            </span>
          </div>

          {/* Details Table */}
          <div className="space-y-2.5 text-xs border border-neutral-300 p-4 rounded-lg bg-neutral-50/50">
            <div className="grid grid-cols-3 gap-2">
              <span className="text-neutral-600">Kode Tiket</span>
              <span className="col-span-2 font-mono font-bold text-neutral-900">: {item.kodeTiket}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <span className="text-neutral-600">Nama Pemohon / Pelapor</span>
              <span className="col-span-2 font-bold text-neutral-900">
                : {isSurat ? suratItem?.namaLengkap : pengaduanItem?.namaPelapor}
              </span>
            </div>

            {isSurat && suratItem?.nik && (
              <div className="grid grid-cols-3 gap-2">
                <span className="text-neutral-600">NIK (KTP)</span>
                <span className="col-span-2 font-mono text-neutral-900">: {suratItem.nik}</span>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2">
              <span className="text-neutral-600">Jenis Layanan</span>
              <span className="col-span-2 font-semibold text-neutral-900">
                : {isSurat ? suratItem?.jenisSurat : pengaduanItem?.kategori}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <span className="text-neutral-600">Waktu Pengajuan</span>
              <span className="col-span-2 text-neutral-900">
                : {isSurat ? suratItem?.tanggalDiajukan : pengaduanItem?.tanggalLapor} WIB
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <span className="text-neutral-600">Status Saat Ini</span>
              <span className="col-span-2 font-bold text-neutral-900">
                : <span className="uppercase text-[#2E9E3E]">{item.status}</span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <span className="text-neutral-600">Perihal / Keperluan</span>
              <span className="col-span-2 text-neutral-800">
                : {isSurat ? suratItem?.keperluan : pengaduanItem?.isiLaporan}
              </span>
            </div>
          </div>

          {/* Verification Barcode & QR Simulation */}
          <div className="mt-6 pt-4 border-t border-neutral-300 flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-mono tracking-widest text-xs font-bold text-neutral-800">
                ||| | ||||| |||| || |||||| | ||| ||
              </div>
              <span className="text-[10px] text-neutral-500 block font-mono">
                AUTORISASI SISTEM INFORMASI DESA PILANGSARI
              </span>
            </div>

            <div className="text-center text-xs">
              <p className="text-[11px] text-neutral-500">Pilangsari, {new Date().toLocaleDateString('id-ID')}</p>
              <p className="font-bold text-neutral-800 mt-0.5">Petugas Pelayanan Loket</p>
              <div className="h-10 flex items-center justify-center">
                <span className="text-[10px] italic text-[#2E9E3E] font-medium border border-[#2E9E3E] px-2 py-0.5 rounded">
                  [ TERVERIFIKASI SISTEM ]
                </span>
              </div>
              <p className="text-[11px] font-semibold text-neutral-700">
                {item.petugas || 'Pamong Desa Pilangsari'}
              </p>
            </div>
          </div>

          <p className="mt-4 text-[10px] text-neutral-400 text-center italic border-t border-neutral-200 pt-2">
            *Struk ini merupakan bukti resmi pendaftaran online dan dapat dibawa saat pengambilan berkas asli di Balai Desa.
          </p>

        </div>

      </div>
    </div>
  );
};
