import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Calendar } from 'lucide-react';

interface ContactSectionProps {
  onOpenAppointment: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-20 bg-white" id="iletisim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-brand-burgundy uppercase block mb-1">
            İLETİŞİM & ULAŞIM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Kliniğimize Kolayca Ulaşın
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light mt-2">
            Bursa Yıldırım Davutkadı'da merkezi ve kolay ulaşılabilir konumumuzda sizleri ağırlamaktan mutluluk duyuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-burgundy shrink-0 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">TELEFON</span>
                <a
                  href="tel:+905551234567"
                  className="text-sm font-bold text-brand-dark hover:text-brand-burgundy transition-colors"
                >
                  +90 555 123 45 67
                </a>
                <p className="text-[11px] text-gray-500 mt-0.5">Randevu, bilgi ve acil diş durumları için arayabilirsiniz.</p>
              </div>
            </div>

            {/* Address */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-burgundy shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">ADRES</span>
                <p className="text-sm font-bold text-brand-dark">Davutkadı Mah. Yıldırım / Bursa</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Toplu taşıma duraklarına yürüme mesafesinde ve otopark alanı mevcuttur.</p>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-burgundy shrink-0 shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">ÇALIŞMA SAATLERİ</span>
                <p className="text-xs font-semibold text-brand-dark">
                  Pazartesi – Cumartesi: <span className="font-bold">09:00 – 19:00</span>
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">Pazar: Randevulu acil vakalar</p>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-burgundy shrink-0 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">E-POSTA</span>
                <a
                  href="mailto:info@hasankoken.com"
                  className="text-sm font-bold text-brand-dark hover:text-brand-burgundy transition-colors"
                >
                  info@hasankoken.com
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map card & Direct Action Box */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-brand-surface rounded-2xl p-6 border border-brand-border shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
                <div>
                  <h3 className="text-base font-extrabold text-brand-dark">Dt. Hasan Köken Diş Kliniği Harita Konumu</h3>
                  <p className="text-xs text-gray-500 font-light mt-0.5">Yıldırım, Bursa • Yol tarifi alarak kolayca ulaşın</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Davutkadi+Yildirim+Bursa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:border-gray-500 text-xs font-semibold px-4 py-2 rounded-full transition-all text-gray-800 shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-burgundy" />
                  <span>Google Haritalarda Aç</span>
                </a>
              </div>

              {/* Styled Map Preview Canvas */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-brand-border bg-slate-100 flex items-center justify-center">
                {/* Visual Map graphic */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8B1826_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Central pin marker */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-burgundy text-white flex items-center justify-center shadow-lg ring-4 ring-white animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-2 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-gray-200 shadow-md">
                    <span className="text-xs font-bold text-brand-dark">HK Diş Kliniği • Bursa</span>
                  </div>
                </div>

                {/* Sub corner labels */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                  Davutkadı Mah. Yıldırım
                </div>
              </div>

              {/* Dual fast action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/905551234567?text=Merhaba,%20klini%C4%9Finizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ile Hızlı Mesaj</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-brand-burgundyHover text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Online Randevu Oluştur</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
