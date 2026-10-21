import React from 'react';
import { X, Clock, ShieldCheck, Check, Calendar } from 'lucide-react';
import { Treatment } from '../data/treatments.ts';
import { TreatmentIcon } from './TreatmentIcons.tsx';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookAppointment: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookAppointment
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 bg-brand-surface border-b border-brand-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-burgundy shadow-2xs">
              <TreatmentIcon type={treatment.iconType} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-burgundy uppercase">TEDAVİ DETAYI</span>
              <h3 className="text-lg font-extrabold text-brand-dark leading-tight">{treatment.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-gray-700">
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5">Tedavi Hakkında</h4>
            <p className="text-xs leading-relaxed text-gray-600 font-light">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-3 bg-brand-surface p-3.5 rounded-xl border border-brand-border">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase block">İşlem Süresi</span>
                <span className="text-xs font-semibold text-gray-900">{treatment.duration}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase block">İyileşme / Süreç</span>
                <span className="text-xs font-semibold text-gray-900">{treatment.recovery}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">Öne Çıkan Avantajlar</h4>
            <ul className="space-y-2">
              {treatment.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                  <div className="w-4 h-4 rounded-full bg-brand-burgundyLight text-brand-burgundy flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-gray-50 border-t border-brand-border flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="text-xs font-medium text-gray-500 hover:text-gray-800 px-4 py-2 transition-colors"
          >
            Vazgeç
          </button>
          <button
            onClick={() => {
              onClose();
              onBookAppointment(treatment.id);
            }}
            className="inline-flex items-center gap-2 bg-brand-burgundy hover:bg-brand-burgundyHover text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Bu Tedavi İçin Randevu Al</span>
          </button>
        </div>
      </div>
    </div>
  );
};
