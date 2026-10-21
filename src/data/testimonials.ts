export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'M. A.',
    location: 'Bursa',
    treatment: 'İmplant Tedavisi',
    quote: 'Hasan Bey\'e diş implantı tedavisi için geldim. Tüm süreç boyunca ilgili, açıklayıcı ve çok profesyoneldi. Sonuçtan çok memnunum. Kesinlikle tavsiye ederim.',
    rating: 5
  },
  {
    id: '2',
    name: 'S. K.',
    location: 'Nilüfer / Bursa',
    treatment: 'Porselen Lamina & Gülüş Tasarımı',
    quote: 'Gülüş tasarımı ve porselen lamina tedavisi yaptırdım. Kliniğin hijyeni, personelin ilgisi ve Hasan Bey\'in titizliği muazzamdı. Aynaya her baktığımda içtenlikle teşekkür ediyorum.',
    rating: 5
  },
  {
    id: '3',
    name: 'E. T.',
    location: 'Yıldırım / Bursa',
    treatment: 'Kanal Tedavisi & Estetik Dolgu',
    quote: 'Diş hekimi fobimi Hasan Bey sayesinde yendim. Kanal tedavisi ve estetik dolgu işlemlerinde sıfır acı hissettim. Klinik ortamı son derece modern, ferah ve huzurlu.',
    rating: 5
  },
  {
    id: '4',
    name: 'B. Y.',
    location: 'Osmangazi / Bursa',
    treatment: 'Masseter Botoksu & Gece Plağı',
    quote: 'Masseter botoksu ve gece plağı sayesinde yıllardır sabahları çektiğim çene kilitlenmesi ve şiddetli baş ağrılarım tamamen geçti. Çok isabetli bir teşhis ve tedavi oldu.',
    rating: 5
  }
];
