import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:h-[620px]">
          {/* Hero Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center py-12 lg:py-0 lg:pr-8 z-10">
            {/* Accent Top Tagline with Vertical Accent Line */}
            <div className="flex items-start gap-3 mb-6">
              <div className="w-[3px] h-14 bg-brand-burgundy shrink-0 mt-1"></div>
              <div>
                <span className="text-[11px] font-bold tracking-[0.22em] text-gray-300 uppercase block mb-1">
                  SAĞLIKLI GÜLÜŞLER, DAHA İYİ BİR YARIN
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
                  Size ALİALİALİ Özel, Modern <br />
                  <span className="text-brand-burgundy">Diş Hekimliği</span>
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8 max-w-md">
              Estetik, fonksiyon ve sağlığı bir araya getiren modern diş hekimliği yaklaşımımızla, gülüşünüzü yeniden tasarlıyoruz.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 bg-brand-burgundy hover:bg-brand-burgundyHover text-white text-xs font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Al</span>
              </button>

              <a
                href="#tedaviler"
                className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white text-xs font-medium px-5 py-3 rounded-full transition-all duration-200 hover:bg-white/5 whitespace-nowrap"
              >
                <span>Tedavi Alanlarımız</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Hero Clinic Visual Backdrop (matching reference layout) */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
            <div className="absolute inset-0">
              <img
                alt="HK Hasan Köken Diş Kliniği Danışma ve Giriş Alanı"
                className="w-full h-full object-cover object-[70%_15%]"
                src={`${import.meta.env.BASE_URL}assets/clinic-placeholder.svg`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent lg:block hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent lg:hidden block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
