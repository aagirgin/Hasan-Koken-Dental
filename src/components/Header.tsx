import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenAppointment: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ana Sayfa', href: '#hero', id: 'hero' },
    { label: 'Hakkımda', href: '#hakkimda', id: 'hakkimda' },
    { label: 'Tedaviler', href: '#tedaviler', id: 'tedaviler' },
    { label: 'Klinik', href: '#klinik', id: 'klinik' },
    { label: 'S.S.S', href: '#sss', id: 'sss' },
    { label: 'İletişim', href: '#iletisim', id: 'iletisim' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-border/80 transition-all duration-200 ${
        isScrolled ? 'shadow-xs py-1' : 'py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Clinic Brand Identity */}
        <a href="#hero" className="flex items-center gap-3.5 group shrink-0">
          <div className="w-10 h-10 border-2 border-brand-dark flex items-center justify-center font-bold tracking-tighter text-xl text-brand-dark group-hover:border-brand-burgundy group-hover:text-brand-burgundy transition-colors">
            HK
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-[0.2em] uppercase text-brand-dark leading-none">
              HASAN KÖKEN
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-brand-muted uppercase mt-1">
              DİŞ KLİNİĞİ
            </span>
          </div>
        </a>

        {/* Zone 2: Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-gray-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative pb-1 transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-brand-burgundy after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-burgundy'
                    : 'text-gray-700 hover:text-brand-burgundy'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Appointment CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+905551234567"
            className="hidden lg:flex items-center gap-1.5 text-xs text-gray-600 hover:text-brand-dark font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-burgundy" />
            <span>+90 555 123 45 67</span>
          </a>

          <button
            onClick={onOpenAppointment}
            className="inline-flex items-center gap-2 bg-brand-burgundy hover:bg-brand-burgundyHover text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Randevu Al</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-brand-dark"
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 text-sm font-semibold rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-brand-burgundy bg-brand-burgundyLight/50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:+905551234567"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-gray-700 bg-gray-50 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-brand-burgundy" />
              +90 555 123 45 67
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 bg-brand-burgundy text-white text-xs font-semibold py-2.5 rounded-full shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Online Randevu Al</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
