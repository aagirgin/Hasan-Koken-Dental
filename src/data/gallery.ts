export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cropPosition: string; // for object-position
}

export const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: 'lounge',
    title: 'Danışma ve Bekleme Salonu',
    subtitle: 'Huzurlu ve Ferah Karşılama Alanı',
    description: 'Hastalarımızın muayene öncesinde kendilerini ev konforunda hissetmeleri için tasarlanmış ferah, havalandırmalı ve huzurlu bekleme alanı.',
    cropPosition: 'object-[32%_84%]'
  },
  {
    id: 'operatory',
    title: 'Modern Tedavi Ünitesi',
    subtitle: 'İleri Teknoloji Diş Hekimliği Koltuğu',
    description: 'Ergonomik hasta koltukları, sessiz mikromotorlar, intraoral kamera sistemleri ve dijital monitörlerle donatılmış hijyenik tedavi odası.',
    cropPosition: 'object-[46%_84%]'
  },
  {
    id: 'sterilization',
    title: 'Sterilizasyon ve Laboratuvar Alanı',
    subtitle: 'En Yüksek Hijyen Protokolleri',
    description: 'Avrupa B Sınıfı fraksiyonel vakumlu otoklavlar ve ultraviyole steril depolama alanlarıyla donatılmış sterilizasyon merkezi.',
    cropPosition: 'object-[58%_84%]'
  },
  {
    id: 'consultation',
    title: 'Hekim Görüşme ve Planlama Odası',
    subtitle: 'Birebir İletişim ve Detaylı Bilgilendirme',
    description: 'Tedavi planlamanızın dijital radyografi ve 3D simülasyonlar eşliğinde hekimimizle detaylıca değerlendirildiği görüşme alanı.',
    cropPosition: 'object-[70%_15%]'
  }
];
