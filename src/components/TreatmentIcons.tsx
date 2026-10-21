import React from 'react';

interface IconProps {
  className?: string;
}

export const TreatmentIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case 'filling': // Diş Dolgusu
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M12 2C8 2 6 4.5 6 8c0 3.5 1.5 6 3 10 .8 2.1 1.8 4 3 4s2.2-1.9 3-4c1.5-4 3-6.5 3-10 0-3.5-2-6-6-6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 9.5c1.5-.8 3.5-.8 5 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'canal': // Kanal Tedavisi
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M9 3v18M15 3v18M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'extraction': // Çekim
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M12 4v16m-4-8h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'prosthesis': // Protez
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'implant': // İmplant
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M12 3v6m-3-3h6m-5 6h4m-3 3h2m-2 3h2m-1 3v2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'allon4': // All-on-4
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="8" cy="8" r="4" />
          <path d="M16 12v6m-3-3h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'ortho': // Ortodonti
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
          <line x1="11" x2="13" y1="12" y2="12" strokeLinecap="round" />
        </svg>
      );
    case 'aesthetic': // Estetik Diş Hekimliği
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'botox': // Botoks
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'splint': // Diş Sıkma Aparatı
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M12 7c-3.5 0-6 2.5-6 6v3c0 2 2.5 3 6 3s6-1 6-3v-3c0-3.5-2.5-6-6-6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'nightguard': // Gece Plağı
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'lamina': // Porselen Lamina
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};
