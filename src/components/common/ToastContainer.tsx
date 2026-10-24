import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto p-4 rounded-xl shadow-xl border flex items-start gap-3 animate-slideInRight text-xs font-medium ${
            toast.type === 'success'
              ? 'bg-neutral-900 text-white border-emerald-500'
              : toast.type === 'error'
              ? 'bg-red-950 text-white border-red-500'
              : 'bg-neutral-900 text-white border-blue-500'
          }`}
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-[#2D8FD5] shrink-0 mt-0.5" />}

          <div className="flex-1 leading-relaxed">
            {toast.message}
          </div>

          <button
            onClick={() => dismissToast(toast.id)}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
