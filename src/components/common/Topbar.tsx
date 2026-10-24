import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const Topbar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-[#111111] text-xs text-slate-300 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Operating Hours & Direct Contacts */}
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#FFE600]" />
            <span>Jam Pelayanan: Sen – Kam 08.00 – 15.00 | Jum 08.00 – 14.30 WIB</span>
          </div>

          <a 
            href="tel:081234567890" 
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#FFE600] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#2E9E3E]" />
            <span>0812-3456-7890 (Layanan Warga)</span>
          </a>

          <a 
            href="mailto:kontak@pilangsari-sragen.desa.id" 
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#FFE600] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#2D8FD5]" />
            <span>kontak@pilangsari-sragen.desa.id</span>
          </a>
        </div>

        {/* Right: Location */}
        <div className="flex items-center gap-1.5 text-slate-300 text-xs">
          <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
          <span>Balai Desa Pilangsari, Kec. Gesi, Kab. Sragen 57262</span>
        </div>
      </div>
    </div>
  );
};
