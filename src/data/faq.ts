export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'Randevu nasıl alabilirim? İlk muayenede neler yapılır?',
    answer: 'Web sitemiz üzerinden "Randevu Al" butonuna tıklayarak online randevu oluşturabilir veya +90 555 123 45 67 numaralı telefonumuzdan bize ulaşabilirsiniz. İlk muayenede kapsamlı ağız içi inceleme, dijital radyolojik kontroller yapılır ve size özel kişiselleştirilmiş tedavi planı hazırlanır.',
    category: 'Randevu & Klinik'
  },
  {
    id: '2',
    question: 'İmplant tedavisi ağrılı bir işlem midir?',
    answer: 'Hayır, implant operasyonu gelişmiş lokal anestezi altında uygulanır; bu sayede operasyon anında kesinlikle hiçbir ağrı veya acı hissetmezsiniz. İşlem sonrası için hekimimiz tarafından önerilen standart ağrı kesicilerle iyileşme süreci son derece konforlu geçer.',
    category: 'İmplant & Cerrahi'
  },
  {
    id: '3',
    question: 'Porselen Lamina (Yaprak Porselen) ile Zirkonyum Kaplama arasındaki fark nedir?',
    answer: 'Porselen Lamina tedavisinde dişin yalnızca ön yüzeyinden mikron düzeyinde (0.3-0.5 mm) minimal aşındırma yapılır veya vakanın durumuna göre hiç aşındırma yapılmaz. Zirkonyum kaplama ise dişin tüm çevresini kaplayan, daha yüksek mekanik dayanıklılık gerektiren arka bölgelerde ve aşırı madde kayıplı dişlerde tercih edilen estetik bir yöntemdir.',
    category: 'Estetik Diş Hekimliği'
  },
  {
    id: '4',
    question: 'Masseter Botoksu diş sıkma sorununu nasıl çözer?',
    answer: 'Masseter botoksu, çenenin yan taraflarında bulunan çiğneme kasının aşırı kasılmasını engelleyerek kası rahatlatır. Bu sayede gece diş gıcırdatması, diş kırılmaları, çene eklemi deformasyonu ve baş-boyun ağrıları büyük oranda ortadan kalkar. Çiğneme fonksiyonunuzu olumsuz etkilemez.',
    category: 'Çene Eklemi & Botoks'
  },
  {
    id: '5',
    question: 'Kanal tedavisi tek seansta biter mi?',
    answer: 'Vakaların büyük çoğunluğunda (dişte akut yaygın enfeksiyon yoksa) döner alet teknolojisi ve dijital apeks bulucu cihazlarımız sayesinde kanal tedavisi tek seansta yaklaşık 45-60 dakikada başarıyla tamamlanmaktadır.',
    category: 'Endodonti'
  },
  {
    id: '6',
    question: 'Kliniğinizin sterilizasyon standartları nelerdir?',
    answer: 'Kliniğimizde Avrupa standartlarında B Sınıfı vakumlu otoklav cihazları, tek kullanımlık bariyerler ve cerrahi sterilite protokolleri tavizsiz olarak uygulanır. Her hasta sonrasında tedavi ünitesi ve tüm temas yüzeyleri yüksek seviyeli tıbbi dezenfektanlarla sterilize edilir.',
    category: 'Hijyen & Güvenlik'
  }
];
