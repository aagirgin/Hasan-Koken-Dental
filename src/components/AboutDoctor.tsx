import React from 'react';

export const AboutDoctor: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="hakkimda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Doctor Image (matching reference photo crop) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-sm bg-gray-100 border border-brand-border">
              <img
                alt="Dt. Hasan Köken"
                className="w-full h-full object-cover object-[15%_50%]"
                src="/assets/clinic-placeholder.svg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Doctor Bio and Signature */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-muted uppercase mb-1">
              HAKKIMDA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight mb-5">
              Dt. Hasan Köken
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4 text-justify">
              2024 yılında Bezmialem Vakıf Üniversitesi Diş Hekimliği Fakültesi'nden mezun oldum. Mesleğimi, insan odaklı ve bilimsel temellere dayalı bir yaklaşımla icra etmeyi ilke edindim. Amacım, her hastanın ihtiyacına özel, sağlıklı ve estetik gülüşlere kavuşmasını sağlamak.
            </p>

            {/* Signature Display */}
            <div className="mt-4 pt-2">
              <div className="font-script text-3xl sm:text-4xl text-brand-dark tracking-normal select-none">
                Hasan Köken
              </div>
              <span className="text-[10px] tracking-[0.25em] font-semibold text-gray-400 uppercase block -mt-1">
                DİŞ HEKİMİ
              </span>
            </div>
          </div>

          {/* Doctor Credentials / Quote Box */}
          <div className="lg:col-span-3 bg-[#FAFBFB] border border-gray-200/80 rounded-xl p-6 shadow-xs">
            {/* Quote Header */}
            <div className="border-b border-gray-100 pb-5 mb-5">
              <p className="text-xs font-medium text-gray-700 italic leading-relaxed">
                “Sağlıklı bir gülüş, sadece estetik değil, aynı zamanda özgüven demektir.”
              </p>
            </div>

            {/* Specs / Details */}
            <div className="space-y-4">
              {/* Education */}
              <div className="flex items-start gap-3">
                <div className="text-gray-400 mt-0.5 shrink-0">
                  <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-900 leading-none">Lisans</h5>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Bezmialem Vakıf Üniversitesi<br />
                    Diş Hekimliği Fakültesi (2024)
                  </p>
                </div>
              </div>

              {/* Specialization */}
              <div className="flex items-start gap-3">
                <div className="text-gray-400 mt-0.5 shrink-0">
                  <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-900 leading-none">Uzmanlık Alanları</h5>
                  <p className="text-[11px] text-gray-500 mt-1">Genel Diş Hekimliği</p>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-start gap-3">
                <div className="text-gray-400 mt-0.5 shrink-0">
                  <svg className="w-4 h-4 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-900 leading-none">Diller</h5>
                  <p className="text-[11px] text-gray-500 mt-1">Türkçe • İngilizce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
