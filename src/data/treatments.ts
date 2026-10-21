export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  recovery: string;
  highlights: string[];
  iconType: 'filling' | 'canal' | 'extraction' | 'prosthesis' | 'implant' | 'allon4' | 'ortho' | 'aesthetic' | 'botox' | 'splint' | 'nightguard' | 'lamina';
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'dis-dolgusu',
    title: 'Diş Dolgusu',
    shortDesc: 'Kompozit ve estetik dolgularla çürük tedavisi ve form restorasyonu.',
    fullDesc: 'Çürük veya kırık nedeniyle hasar görmüş diş dokusunun temizlenerek, dişin doğal rengine ve anatomisine birebir uyumlu nano-kompozit veya seramik dolgu malzemeleriyle restore edilmesidir.',
    duration: '30 - 45 dakika',
    recovery: 'Aynı gün normal beslenmeye dönüş',
    highlights: [
      'Doğal diş renginde estetik görünüm',
      'Minimal doku kaybı ile koruyucu yaklaşım',
      'Tek seansta tamamlanan konforlu işlem',
      'Yüksek dayanıklılık ve çiğneme direnci'
    ],
    iconType: 'filling'
  },
  {
    id: 'kanal-tedavisi',
    title: 'Kanal Tedavisi',
    shortDesc: 'Endodontik tedavi ile doğal dişinizi koruma ve ağrıyı sonlandırma.',
    fullDesc: 'Derin çürük veya travma sebebiyle iltihaplanan pulpa (sinir-damar paketi) dokusunun döner alet sistemleriyle hassas biçimde temizlenip dezenfekte edilerek biyouyumlu materyallerle doldurulması işlemidir.',
    duration: '45 - 60 dakika (1-2 seans)',
    recovery: 'Hafif hassasiyet 24-48 saatte geçer',
    highlights: [
      'Doğal dişi çekilmekten kurtarma',
      'Dijital apex locator ile milimetrik hassasiyet',
      'Lokal anestezi altında tamamen ağrısız',
      'Uzun yıllar fonksiyonel çiğneme sağlığı'
    ],
    iconType: 'canal'
  },
  {
    id: 'cekim',
    title: 'Çekim',
    shortDesc: 'Konforlu cerrahi tekniklerle rutin ve 20\'lik diş çekimleri.',
    fullDesc: 'Kurtarılamayacak durumdaki ileri derece çürük, travmalı veya gömülü 20 yaş dişlerinin çevre kemik dokusuna zarar vermeden, minimal invaziv cerrahi tekniklerle çekilmesidir.',
    duration: '20 - 40 dakika',
    recovery: '2 - 3 gün iyileşme periyodu',
    highlights: [
      'Minimal invaziv atraumatik cerrahi',
      'Lokal anestezi ile ağrısız operasyon',
      'Çene kemiğini koruyucu çekim yaklaşımı',
      'Gömülü ve yarı gömülü dişlerde uzman müdahale'
    ],
    iconType: 'extraction'
  },
  {
    id: 'protez',
    title: 'Protez',
    shortDesc: 'Sabit ve hareketli protezler, zirkonyum kaplamalar ve köprüler.',
    fullDesc: 'Kaybedilen dişlerin ve fonksiyonel eksikliklerin zirkonyum kaplamalar, hassas tutuculu protezler veya tam protezlerle hem estetik hem de çiğneme fonksiyonunu kazandıracak şekilde yeniden yapılmasıdır.',
    duration: '2 - 4 seans',
    recovery: 'Hızlı doku adaptasyonu',
    highlights: [
      'Işık geçirgenliği yüksek zirkonyum altyapı',
      'Yüz oranına özel estetik gülüş uyumu',
      'Yüksek biyouyumluluk ve diş eti dostu',
      'Doğal çiğneme ve konuşma konforu'
    ],
    iconType: 'prosthesis'
  },
  {
    id: 'implant',
    title: 'İmplant',
    shortDesc: 'Biyouyumlu titanyum implantlarla eksik dişlerin kalıcı tedavisi.',
    fullDesc: 'Eksik dişlerin kök fonksiyonunu üstlenmek üzere çene kemiğine yerleştirilen saf titanyum vidalar ve üzerine uygulanan estetik porselen/zirkonyum kuronlarla kalıcı diş kazandırma yöntemidir.',
    duration: '30 - 60 dakika (Cerrahi seans)',
    recovery: 'Kemik kaynaması (Osteointegrasyon): 2-3 ay',
    highlights: [
      'Komşu sağlam dişleri kesmeden eksik dişi tamamlama',
      'Kemik erimesini engelleyen kök desteği',
      'Ömür boyu dayanıklı titanyum teknoloji',
      'Gerçek dişe en yakın çiğneme hissi ve estetik'
    ],
    iconType: 'implant'
  },
  {
    id: 'all-on-4',
    title: 'All-on-4',
    shortDesc: 'Tam dişsizlikte 4 implant üzerine aynı gün sabit protez konsepti.',
    fullDesc: 'Tam dişsiz veya tüm dişlerini kaybetmek üzere olan hastalarda, açılı olarak yerleştirilen 4 adet implant üzerine aynı gün sabit hibrit protezin vidalanmasını sağlayan ileri cerrahi tekniktir.',
    duration: 'Tek günde cerrahi ve geçici sabit diş',
    recovery: 'Aynı gün fonksiyon ve çiğneme',
    highlights: [
      'İleri kemik grefti/sinüs lifting ihtiyacını azaltır',
      'Aynı gün sabit geçici dişlerle klinikten ayrılma',
      'Damaksız tasarım sayesinde maksimum tat ve konfor',
      'Ekonomik ve hızlı tam çene restorasyonu'
    ],
    iconType: 'allon4'
  },
  {
    id: 'ortodonti',
    title: 'Ortodonti',
    shortDesc: 'Şeffaf plaklar (telsiz ortodonti) ve estetik braket sistemleri.',
    fullDesc: 'Çapraşık dişlerin, çene kapanış bozukluklarının ve dişler arası aralıkların şeffaf plaklar (Invisalign vb.) veya seramik/metal braketlerle ideal anatomik hizaya getirilmesidir.',
    duration: '6 - 18 ay (Vakaya göre)',
    recovery: 'Günlük hayatta konforlu ve görünmez',
    highlights: [
      'Şeffaf plaklarla neredeyse görünmeyen tedavi',
      'Yemek yerken çıkarılabilen kullanım kolaylığı',
      'Dijital 3D simülasyonla tedavi sonunu önceden görme',
      'Hem çocuklarda hem yetişkinlerde uygulanabilir'
    ],
    iconType: 'ortho'
  },
  {
    id: 'estetik-dis',
    title: 'Estetik Diş Hekimliği',
    shortDesc: 'Kişiye özel gülüş tasarımı, diş beyazlatma ve diş eti şekillendirme.',
    fullDesc: 'Yüz hatları, dudak formu, ten rengi ve cinsiyet gibi faktörler analiz edilerek altın oran prensipleriyle kişiye özel gülüş tasarımı, ofis tipi diş beyazlatma (bleaching) ve pembe estetik uygulamalarıdır.',
    duration: '1 - 3 seans',
    recovery: 'Anında görünür estetik değişim',
    highlights: [
      'Dijital gülüş tasarımı (Digital Smile Design)',
      'Ofis tipi diş beyazlatma ile 3-4 ton açılma',
      'Diş eti seviyeleme ve simetri düzenleme',
      'Doğal, canlı ve ışıltılı beyazlık'
    ],
    iconType: 'aesthetic'
  },
  {
    id: 'botoks',
    title: 'Botoks',
    shortDesc: 'Masseter botoksu ile çene kası gevşetme ve diş sıkma tedavisi.',
    fullDesc: 'Aşırı gelişmiş masseter (çiğneme) kasına uygulanan botulinum toksin enjeksiyonu ile kas tonusunu azaltarak diş sıkma (bruksizm), diş aşınması ve şakak-baş ağrılarını ortadan kaldıran medikal tedavidir.',
    duration: '10 - 15 dakika',
    recovery: 'Hemen sosyal yaşama dönüş, 7-14 günde tam etki',
    highlights: [
      'Diş sıkma ve gıcırdatmayı belirgin şekilde durdurur',
      'Çene eklemi (TME) ağrılarını ve baş ağrılarını dindirir',
      'Yüz ovalini incelterek V-line estetiği sağlar',
      'Cerrahi kesi olmadan, acısız mikro enjeksiyon'
    ],
    iconType: 'botox'
  },
  {
    id: 'dis-sikma',
    title: 'Diş Sıkma Aparatı',
    shortDesc: 'Bruksizm ve çene eklemi koruması için özel anatomik aparatlar.',
    fullDesc: 'Gece veya gündüz kontrolsüz diş sıkma alışkanlığı olan bireylerde çene eklemine binen yükü dengeleyen ve dişlerin aşınmasını önleyen kişiye özel sert/yarı sert stabilizasyon aparatlarıdır.',
    duration: '2 seans (Ölçü + Teslimat)',
    recovery: 'Hızlı kullanım alışkanlığı',
    highlights: [
      'Çene eklemi diskini ve eklem başını korur',
      'Mine çatlaklarını ve dolgu kırılmalarını önler',
      'Ağız içi dijital tarama ile tam uyumlu üretim',
      'Kolay temizlenebilir dayanıklı materyal'
    ],
    iconType: 'splint'
  },
  {
    id: 'gece-plagi',
    title: 'Gece Plağı',
    shortDesc: 'Uyku esnasında diş aşınmalarını önleyen koruyucu şeffaf plaklar.',
    fullDesc: 'Uyku esnasında istem dışı gerçekleşen diş gıcırdatma hareketlerinin diş minesine verdiği zararı absorbe eden, kişiye özel vakumla şekillendirilmiş şeffaf koruyucu plaklardır.',
    duration: '2 iş günü içinde teslim',
    recovery: 'İlk geceden itibaren rahatlama',
    highlights: [
      'Sabahları çene ve boyun gerginliğini azaltır',
      'İnce ve şeffaf yapısıyla uyku kalitesini bozmaz',
      'Porselen ve estetik restorasyonları korur',
      'Bireysel diş kavisine özel milimetrik uyum'
    ],
    iconType: 'nightguard'
  },
  {
    id: 'porselen-lamina',
    title: 'Porselen Lamina',
    shortDesc: 'Minimum aşındırma ile mükemmel estetik yaprak porselenler.',
    fullDesc: 'Dişin yalnızca ön yüzeyinden mikron düzeyinde (0.3 - 0.5 mm) minimal aşındırma yapılarak veya hiç aşındırma yapılmadan hazırlanan, son derece dayanıklı ve ışık geçirgen yaprak seramik kaplamalardır.',
    duration: '2 - 3 seans (5-7 gün)',
    recovery: 'Kalıcı ve leke tutmayan parlak yüzey',
    highlights: [
      'Minimum diş dokusu kaybı (koruyucu estetik)',
      'Doğal diş minesiyle ayırt edilemeyen şeffaflık',
      'Kahve, çay veya sigara ile renk değiştirmeyen yapı',
      'Hollywood Smile ve estetik gülüşün altın standardı'
    ],
    iconType: 'lamina'
  }
];
