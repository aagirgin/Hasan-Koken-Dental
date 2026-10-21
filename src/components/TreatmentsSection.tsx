import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { TREATMENTS, Treatment } from '../data/treatments.ts';
import { TreatmentIcon } from './TreatmentIcons.tsx';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenAppointment: (treatmentId?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onOpenAppointment
}) => {
  return (
    <section className="py-20 bg-brand-surface border-t border-b border-brand-border" id="tedaviler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Treatment Overview Column */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-burgundy uppercase block mb-1">
              TEDAVİ ALANLARIMIZ
            </span>
            <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
              Size Özel Tedavi <br />
              Seçenekleri
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed font-light mb-6">
              İhtiyaçlarınıza göre planlanan tedavilerle, sağlıklı ve estetik bir gülüşe kavuşmanız için buradayız.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => onSelectTreatment(TREATMENTS[0])}
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-500 bg-white text-brand-dark text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <span>Tüm Tedaviler</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <p className="text-[11px] text-gray-400 font-light flex items-center gap-1.5 pt-1">
                <Info className="w-3 h-3 text-brand-burgundy shrink-0" />
                <span>Detaylar ve randevu için tedaviye tıklayın.</span>
              </p>
            </div>
          </div>

          {/* Treatment Icons Grid (4x3 layout from snapshot) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TREATMENTS.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectTreatment(item)}
                className="service-grid-card bg-white p-4 rounded-xl border border-gray-200/90 text-center flex flex-col items-center justify-center min-h-[115px] cursor-pointer group text-left relative focus:outline-none focus:ring-2 focus:ring-brand-burgundy/30"
              >
                <div className="text-gray-700 group-hover:text-brand-burgundy mb-2 transition-colors">
                  <TreatmentIcon type={item.iconType} className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-xs font-semibold text-gray-800 group-hover:text-brand-dark transition-colors text-center line-clamp-2">
                  {item.title}
                </span>
                <span className="text-[9px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  İncele →
                </span>
              </button>
            ))}
          </div>

          {/* Treatment Room Visual (matching reference photo right operatory view) */}
          <div className="lg:col-span-3 h-full">
            <div className="rounded-xl overflow-hidden border border-brand-border bg-white shadow-2xs h-full min-h-[380px] relative group">
              <img
                alt="Modern Diş Tedavi Odası"
                className="w-full h-full object-cover object-[88%_68%] absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                src="/assets/aistudio/Image_1_4400bc60.png"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-burgundy uppercase block mb-0.5">
                  İLERİ TEKNOLOJİ
                </span>
                <h4 className="text-sm font-bold text-white">Dijital Tedavi Standartları</h4>
                <p className="text-[11px] text-gray-300 font-light mt-1">
                  Ağrısız anestezi, 3D planlama ve steril operasyon üniteleri.
                </p>
                <button
                  onClick={() => onOpenAppointment()}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-brand-burgundy/90 hover:bg-brand-burgundy px-3.5 py-1.5 rounded-full transition-colors w-fit"
                >
                  Muayene Randevusu Al →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
