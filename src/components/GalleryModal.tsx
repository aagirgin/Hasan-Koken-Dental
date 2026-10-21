import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLINIC_GALLERY } from '../data/gallery.ts';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  initialIndex = 0
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  React.useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const currentItem = CLINIC_GALLERY[activeIndex] || CLINIC_GALLERY[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CLINIC_GALLERY.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === CLINIC_GALLERY.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-brand-dark rounded-2xl overflow-hidden border border-gray-800 flex flex-col text-white shadow-2xl">
        {/* Top bar */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-800">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-burgundy uppercase block">KLİNİK GALERİSİ</span>
            <h3 className="text-base font-bold text-white">{currentItem.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image view with fallback */}
        <div className="relative h-[340px] sm:h-[460px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/assets/aistudio/Image_1_4400bc60.png"
            alt={currentItem.title}
            className={`w-full h-full object-cover ${currentItem.cropPosition} transition-all duration-300`}
            referrerPolicy="no-referrer"
          />

          {/* Navigation overlay buttons */}
          <button
            onClick={handlePrev}
            aria-label="Önceki Fotoğraf"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-brand-burgundy text-white flex items-center justify-center transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Sonraki Fotoğraf"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-brand-burgundy text-white flex items-center justify-center transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom bar with description and thumbnail selector */}
        <div className="p-6 bg-brand-darker border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-lg">
            <h4 className="text-xs font-semibold text-gray-200">{currentItem.subtitle}</h4>
            <p className="text-xs text-gray-400 font-light mt-1 leading-relaxed">
              {currentItem.description}
            </p>
          </div>

          {/* Mini thumbnails */}
          <div className="flex items-center gap-2">
            {CLINIC_GALLERY.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  index === activeIndex ? 'border-brand-burgundy scale-105' : 'border-gray-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src="/assets/aistudio/Image_1_4400bc60.png"
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.cropPosition}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
