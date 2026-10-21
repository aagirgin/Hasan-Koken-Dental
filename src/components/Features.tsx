import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="border-b border-brand-border bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center px-3 pt-4 sm:pt-0">
            <div className="text-brand-dark mb-3">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8 2 6 4.5 6 8c0 3.5 1.5 6 3 10 .8 2.1 1.8 4 3 4s2.2-1.9 3-4c1.5-4 3-6.5 3-10 0-3.5-2-6-6-6z" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9 10c1.5-1 4.5-1 6 0" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xs font-bold text-gray-900 tracking-tight mb-1">Geniş Tedavi Yelpazesi</h4>
            <p className="text-[11px] leading-relaxed text-gray-500 max-w-[170px]">
              Ağız ve diş sağlığınız için tüm ihtiyaçlarınız tek çatı altında.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center px-3 pt-4 sm:pt-0">
            <div className="text-brand-dark mb-3">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xs font-bold text-gray-900 tracking-tight mb-1">Modern Teknoloji</h4>
            <p className="text-[11px] leading-relaxed text-gray-500 max-w-[170px]">
              Daha hızlı, daha konforlu ve daha başarılı tedaviler.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center px-3 pt-4 sm:pt-0">
            <div className="text-brand-dark mb-3">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xs font-bold text-gray-900 tracking-tight mb-1">Deneyimli Hekim Kadrosu</h4>
            <p className="text-[11px] leading-relaxed text-gray-500 max-w-[170px]">
              Güvenilir ve kişiye özel tedavi planları.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center px-3 pt-4 sm:pt-0">
            <div className="text-brand-dark mb-3">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xs font-bold text-gray-900 tracking-tight mb-1">Konforlu Klinik Ortamı</h4>
            <p className="text-[11px] leading-relaxed text-gray-500 max-w-[170px]">
              Rahat ve huzurlu bir muayene deneyimi.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center px-3 pt-4 sm:pt-0">
            <div className="text-brand-dark mb-3">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-xs font-bold text-gray-900 tracking-tight mb-1">Hijyen ve Sterilizasyon</h4>
            <p className="text-[11px] leading-relaxed text-gray-500 max-w-[170px]">
              En yüksek sterilizasyon standartları.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
