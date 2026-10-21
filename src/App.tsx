/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { AboutDoctor } from './components/AboutDoctor.tsx';
import { TreatmentsSection } from './components/TreatmentsSection.tsx';
import { ClinicAndReviews } from './components/ClinicAndReviews.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { TreatmentDetailModal } from './components/TreatmentDetailModal.tsx';
import { GalleryModal } from './components/GalleryModal.tsx';
import { Treatment } from './data/treatments.ts';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentTreatmentId, setAppointmentTreatmentId] = useState<string | undefined>(undefined);
  const [selectedDetailTreatment, setSelectedDetailTreatment] = useState<Treatment | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'hakkimda', 'tedaviler', 'klinik', 'sss', 'iletisim'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAppointment = (treatmentId?: string) => {
    setAppointmentTreatmentId(treatmentId);
    setIsAppointmentOpen(true);
  };

  const handleSelectTreatmentDetail = (treatment: Treatment) => {
    setSelectedDetailTreatment(treatment);
  };

  const handleOpenGallery = (index: number = 0) => {
    setGalleryStartIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark antialiased">
      {/* Top Header */}
      <Header
        activeSection={activeSection}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* 2. 5 Features Strip */}
        <Features />

        {/* 3. About Dt. Hasan Köken */}
        <AboutDoctor />

        {/* 4. Treatment Options Grid */}
        <TreatmentsSection
          onSelectTreatment={handleSelectTreatmentDetail}
          onOpenAppointment={handleOpenAppointment}
        />

        {/* 5. Clinic Environment & Patient Reviews */}
        <ClinicAndReviews onOpenGallery={handleOpenGallery} />

        {/* 6. FAQ (S.S.S) */}
        <FaqSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 7. Contact & Location */}
        <ContactSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Floating Fast WhatsApp Action */}
      <aside aria-label="Hızlı WhatsApp İletişim">
        <a
          href="https://wa.me/905551234567?text=Merhaba,%20klini%C4%9Finizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp İletişim Hattı"
          className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
            WhatsApp Hattı
          </span>
        </a>
      </aside>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialTreatmentId={appointmentTreatmentId}
      />

      {/* Treatment Detail Information Modal */}
      <TreatmentDetailModal
        treatment={selectedDetailTreatment}
        onClose={() => setSelectedDetailTreatment(null)}
        onBookAppointment={(treatmentId) => handleOpenAppointment(treatmentId)}
      />

      {/* Fullscreen Clinic Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={galleryStartIndex}
      />
    </div>
  );
}
