import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials.ts';
import { CLINIC_GALLERY } from '../data/gallery.ts';

interface ClinicAndReviewsProps {
  onOpenGallery: (index?: number) => void;
}

export const ClinicAndReviews: React.FC<ClinicAndReviewsProps> = ({ onOpenGallery }) => {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  const activeReview = TESTIMONIALS[currentReviewIdx];

  const handlePrevReview = () => {
    setCurrentReviewIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReviewIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white" id="klinik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Clinic Description Left Column */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-brand-muted uppercase block mb-1">
                KLİNİĞİMİZ
              </span>
              <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight leading-tight mb-3">
                Modern ve Konforlu <br />
                Bir Ortam
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed font-light mb-6">
                Gülüşünüz için en iyi tedaviyi sunarken, kliniğimizde kendinizi rahat ve güvende hissetmeniz için her detayı düşündük.
              </p>
            </div>
            <div>
              <button
                onClick={() => onOpenGallery(0)}
                className="inline-flex items-center gap-2 border border-brand-border hover:border-gray-400 bg-white text-brand-dark text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <span>Klinik Galerisi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Gallery Strip (3 Photos showing Reception/Lounge, Operatory, Sterilization) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {CLINIC_GALLERY.slice(0, 3).map((item, index) => (
              <button
                key={item.id}
                onClick={() => onOpenGallery(index)}
                className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 border border-brand-border relative group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-brand-burgundy/40"
              >
                <img
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.cropPosition} group-hover:scale-105 transition-transform duration-500`}
                  src="/assets/aistudio/Image_1_4400bc60.png"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <span className="text-[10px] text-white font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs truncate w-full">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Testimonial Section Right Column */}
          <div className="lg:col-span-4 flex flex-col justify-between pl-0 lg:pl-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-100">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-brand-muted uppercase block mb-1">
                HASTA YORUMLARI
              </span>
              <h3 className="text-xl font-bold text-brand-dark tracking-tight mb-4">
                Gülüşlerimiz Konuşuyor
              </h3>

              {/* Review Card */}
              <div className="bg-brand-surface rounded-xl p-5 border border-gray-200/70 shadow-2xs min-h-[140px] flex flex-col justify-between transition-all duration-300">
                <p className="text-xs text-gray-600 leading-relaxed font-light italic mb-2">
                  “{activeReview.quote}”
                </p>
                <span className="text-[10px] font-semibold text-brand-burgundy self-start">
                  Tedavi: {activeReview.treatment}
                </span>
              </div>
            </div>

            {/* Reviewer Info & Navigation */}
            <div className="flex items-center justify-between pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-brand-dark block">
                  {activeReview.name} <span className="text-gray-400 font-normal">• {activeReview.location}</span>
                </span>
                {/* Star Rating */}
                <div className="flex text-amber-500 text-xs mt-1 tracking-wider" aria-label={`${activeReview.rating} yıldız`}>
                  {'★'.repeat(activeReview.rating)}
                </div>
              </div>

              {/* Next/Prev Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevReview}
                  aria-label="Önceki Yorum"
                  className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-brand-dark hover:border-gray-500 transition-colors text-xs cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNextReview}
                  aria-label="Sonraki Yorum"
                  className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-brand-dark hover:border-gray-500 transition-colors text-xs cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
