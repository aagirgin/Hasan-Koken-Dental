import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, User, MessageSquare, ArrowRight } from 'lucide-react';
import { TREATMENTS } from '../data/treatments.ts';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: string;
}

const TIME_SLOTS = [
  '09:30', '10:30', '11:30', '13:30', '14:30', '15:30', '16:30', '17:30'
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialTreatmentId
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState(initialTreatmentId || 'implant');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('10:30');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  // Update selected treatment if initialTreatmentId changes
  React.useEffect(() => {
    if (initialTreatmentId) {
      setSelectedTreatment(initialTreatmentId);
    }
  }, [initialTreatmentId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const generatedRef = 'HK-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const currentTreatmentObj = TREATMENTS.find(t => t.id === selectedTreatment);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-brand-dark text-white flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white flex items-center justify-center font-bold tracking-tighter text-sm text-white">
              HK
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight text-white uppercase">Online Randevu Talebi</h3>
              <p className="text-[11px] text-gray-400">Dt. Hasan Köken Diş Kliniği • Bursa</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Randevu Talebiniz Alındı</h4>
                <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
                  En kısa sürede asistanımız tarafından randevu teyidi için aranacaksınız.
                </p>
              </div>

              {/* Summary ticket */}
              <div className="bg-brand-surface rounded-xl p-4 border border-brand-border text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Takip Kodu:</span>
                  <span className="font-mono font-bold text-brand-burgundy">{refCode}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Hasta:</span>
                  <span className="font-semibold text-gray-800">{name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Tedavi:</span>
                  <span className="font-semibold text-gray-800">{currentTreatmentObj?.title || 'Genel Muayene'}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Tarih & Saat:</span>
                  <span className="font-semibold text-gray-800">{date} • {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Konum:</span>
                  <span className="font-semibold text-gray-800">Davutkadı Mah. Yıldırım / Bursa</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba, web sitenizden ${refCode} kodlu ${currentTreatmentObj?.title} için ${date} ${time} tarihine randevu talebi oluşturdum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
                >
                  WhatsApp ile Doğrula
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center text-xs font-semibold px-5 py-2.5 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 transition-all"
                >
                  Tamamla ve Kapat
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Treatment selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  1. İlgilendiğiniz Tedavi
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full text-xs font-medium border border-gray-300 rounded-lg px-3 py-2.5 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 focus:border-brand-burgundy"
                >
                  {TREATMENTS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title} ({item.shortDesc})
                    </option>
                  ))}
                  <option value="diger">Diğer / Genel Kontrol ve Muayene</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-burgundy" /> 2. Tercih Edilen Gün
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-xs font-medium border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 focus:border-brand-burgundy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-burgundy" /> 3. Tercih Edilen Saat
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full text-xs font-medium border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 focus:border-brand-burgundy"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-burgundy" /> Adınız ve Soyadınız
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ahmet Yılmaz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs font-medium border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 focus:border-brand-burgundy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-burgundy" /> Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs font-medium border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 focus:border-brand-burgundy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-brand-burgundy" /> Belirtmek İstediğiniz Şikayet / Not (Opsiyonel)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Varsa özel şikayetinizi, ağrı durumunu veya isteklerinizi yazabilirsiniz..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full text-xs font-medium border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20 focus:border-brand-burgundy resize-none"
                  />
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-burgundy hover:bg-brand-burgundyHover text-white text-xs font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Randevu Talebini Onayla</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-2">
                  Bilgileriniz KVKK kapsamında gizli tutulur ve yalnızca randevu organizasyonu için kullanılır.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
