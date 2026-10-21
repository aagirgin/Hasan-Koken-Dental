import React, { useState } from 'react';
import { Phone, MapPin, Mail, X } from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const [legalModalContent, setLegalModalContent] = useState<'kvkk' | 'privacy' | null>(null);

  return (
    <footer className="bg-brand-dark text-white border-t border-gray-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800/80">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white flex items-center justify-center font-bold tracking-tighter text-xl text-white">
                HK
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-[0.2em] uppercase text-white leading-none">
                  HASAN KÖKEN
                </span>
                <span className="text-[10px] tracking-[0.3em] font-medium text-gray-400 uppercase mt-1">
                  DİŞ KLİNİĞİ
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-light max-w-sm leading-relaxed">
              Bilimsel yaklaşımlar, ileri teknoloji ve samimi ortamımızla Bursa'da ağız ve diş sağlığınız için en yüksek standartları sunuyoruz.
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="lg:col-span-3 space-y-3 text-xs text-gray-300">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-burgundy shrink-0" />
              <a href="tel:+905551234567" className="hover:text-white transition-colors">
                +90 555 123 45 67
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-brand-burgundy shrink-0" />
              <span>Davutkadı Mah. Yıldırım / Bursa</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-burgundy shrink-0" />
              <a href="mailto:info@hasankoken.com" className="hover:text-white transition-colors">
                info@hasankoken.com
              </a>
            </div>
          </div>

          {/* Col 3: Fast Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Hızlı Linkler</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a className="hover:text-white transition-colors" href="#hero">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#hakkimda">
                  Hakkımda
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#tedaviler">
                  Tedaviler
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#klinik">
                  Klinik
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Other Links & Socials */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Diğer</h4>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              <li>
                <a className="hover:text-white transition-colors" href="#sss">
                  S.S.S
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#iletisim">
                  İletişim
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAppointment}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Randevu Al
                </button>
              </li>
            </ul>

            {/* Social Icons & Motto */}
            <div className="flex items-center gap-3 text-gray-400 mb-3">
              <a
                aria-label="Instagram"
                className="hover:text-white transition-colors p-1"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a
                aria-label="YouTube"
                className="hover:text-white transition-colors p-1"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <span className="text-[11px] text-gray-500 ml-2">Sağlıklı gülüşler için... HK</span>
            </div>
          </div>
        </div>

        {/* Legal Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
          <div>
            © 2026 Hasan Köken Diş Kliniği. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <button
              onClick={() => setLegalModalContent('kvkk')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              KVKK
            </button>
            <span>|</span>
            <button
              onClick={() => setLegalModalContent('privacy')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Gizlilik Politikası
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs text-gray-900 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-gray-900 mb-3">
              {legalModalContent === 'kvkk'
                ? 'KVKK Aydınlatma Metni'
                : 'Gizlilik ve Çerez Politikası'}
            </h3>
            <div className="text-xs text-gray-600 space-y-3 leading-relaxed font-light">
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, Dt. Hasan Köken Diş Kliniği olarak veri sorumlusu sıfatıyla, randevu formları veya doğrudan iletişim kanallarımız aracılığıyla elde edilen kişisel verileriniz (ad, soyad, telefon ve sağlık geçmişi notları) yalnızca sağlık hizmetlerinin sunulması ve randevu teyitlerinin gerçekleştirilmesi amacıyla işlenmektedir.
              </p>
              <p>
                Verileriniz yasal zorunluluklar haricinde üçüncü şahıslarla paylaşılmaz. İlgili kanun kapsamında verilerinizin silinmesini, düzeltilmesini veya bilgi verilmesini info@hasankoken.com adresine yazılı talepte bulunarak her zaman talep edebilirsiniz.
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 bg-brand-dark text-white rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors"
              >
                Anladım
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
