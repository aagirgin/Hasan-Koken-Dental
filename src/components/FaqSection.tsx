import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/faq.ts';

interface FaqSectionProps {
  onOpenAppointment: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAppointment }) => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-brand-surface border-t border-b border-brand-border" id="sss">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Header left column */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-burgundy uppercase block mb-1">
              MERAK EDİLENLER
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-tight mb-4">
              Sıkça Sorulan <br />
              Sorular (S.S.S)
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed font-light mb-6">
              Diş hekimliği tedavileri, randevu süreci ve kliniğimiz hakkında aklınıza takılan en yaygın soruların yanıtları.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-brand-border space-y-3">
              <div className="flex items-center gap-2.5 text-brand-burgundy">
                <HelpCircle className="w-5 h-5 shrink-0" />
                <h4 className="text-xs font-bold text-gray-900">Başka Bir Sorunuz mu Var?</h4>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                Hekimimize veya asistanımıza doğrudan danışabilir, özel durumunuz için hızlı geri dönüş alabilirsiniz.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-brand-burgundy" />
                  <span>Bizi Arayın</span>
                </a>
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-full bg-brand-burgundy hover:bg-brand-burgundyHover text-white transition-colors cursor-pointer"
                >
                  Randevu Al
                </button>
              </div>
            </div>
          </div>

          {/* Accordion list */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-gray-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-burgundyLight text-brand-burgundy shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-brand-dark">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-brand-burgundy' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed font-light border-t border-gray-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
