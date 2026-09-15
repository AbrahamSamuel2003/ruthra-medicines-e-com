'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface WhatsAppAssistanceProps {
  productName?: string;
  packSize?: string;
  price?: number;
}

export default function WhatsAppAssistance({ productName, packSize, price }: WhatsAppAssistanceProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [place, setPlace] = useState('');
  const [customMsg, setCustomMsg] = useState('');

  // Ruthra Medicines Tirunelveli support phone
  const supportPhone = '919171508042'; // Direct Tirunelveli helpline

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Vanakkam Ruthra Medicines,\n`;
    if (productName) {
      text += `I would like to order: ${productName} (${packSize || ''}) - ₹${price || ''}\n`;
    } else {
      text += `I would like assistance with ordering authentic Siddha medicines.\n`;
    }
    if (customerName) text += `My Name: ${customerName}\n`;
    if (place) text += `Location: ${place}\n`;
    if (customMsg) text += `Query: ${customMsg}\n`;

    const encoded = encodeURIComponent(text);
    const cleanPhone = supportPhone.replace(/[^0-9]/g, '');
    const mobileUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}`;
    
    if (typeof window !== 'undefined') {
      window.location.href = mobileUrl;
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Discreet Bottom Bar Assistance Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#16382B] hover:text-[#C29043] transition-colors py-1.5 px-3 rounded-full border border-[#16382B]/20 bg-[#E8F1EB]/60 hover:bg-[#E8F1EB]"
      >
        <MessageCircle className="w-4 h-4 text-[#16382B]" />
        <span>{t('Need help ordering? Talk to Ruthra', 'ஆர்டர் செய்ய உதவியா? ருத்ராவை தொடர்பு கொள்ளவும்')}</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#C29043]/30 overflow-hidden">
            {/* Header */}
            <div className="bg-[#16382B] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#C29043]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-base font-semibold">
                    {t('Talk to Ruthra Medicines', 'ருத்ரா மருத்துவ இல்லம் தொடர்பு')}
                  </h3>
                  <p className="text-[11px] text-[#DFB36C]">
                    {t('Tirunelveli Order Assistance & Support', 'திருநெல்வேலி நேரடி உதவி')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSend} className="p-5 space-y-3.5">
              {productName && (
                <div className="p-3 bg-[#E8F1EB] rounded-xl border border-[#16382B]/10 text-xs">
                  <span className="text-[#8A9B93] uppercase font-bold text-[10px] tracking-wider block">
                    {t('Selected Formulation', 'தேர்ந்தெடுக்கப்பட்ட மருந்து')}
                  </span>
                  <span className="font-semibold text-[#16382B] text-sm block mt-0.5">
                    {productName} {packSize && `(${packSize})`}
                  </span>
                  {price && <span className="font-bold text-[#16382B]">₹{price}</span>}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#16382B] mb-1">
                  {t('Your Name', 'உங்கள் பெயர்')}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder={t('e.g. Sundararajan / Priya', 'எ.கா: சுந்தரராஜன்')}
                  required
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#16382B]/20 bg-white focus:outline-none focus:border-[#16382B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#16382B] mb-1">
                  {t('City / Town (Tamil Nadu / India)', 'ஊர் / நகரம்')}
                </label>
                <input
                  type="text"
                  value={place}
                  onChange={e => setPlace(e.target.value)}
                  placeholder={t('e.g. Tirunelveli, Madurai, Chennai', 'எ.கா: திருநெல்வேலி, சென்னை')}
                  required
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#16382B]/20 bg-white focus:outline-none focus:border-[#16382B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#16382B] mb-1">
                  {t('Message / Questions (Optional)', 'கூடுதல் குறிப்பு (விருப்பப்பட்டால்)')}
                </label>
                <textarea
                  value={customMsg}
                  onChange={e => setCustomMsg(e.target.value)}
                  rows={2}
                  placeholder={t('Enter quantity or delivery queries...', 'எண்ணிக்கை அல்லது அஞ்சல் விபரம்...')}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#16382B]/20 bg-white focus:outline-none focus:border-[#16382B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-4 h-4 text-[#C29043]" />
                  <span>{t('Send via WhatsApp', 'வாட்ஸ்அப் மூலம் அனுப்பவும்')}</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href="tel:+919171508042"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#3D5A68] hover:text-[#16382B]"
                >
                  <PhoneCall className="w-3 h-3 text-[#C29043]" />
                  <span>{t('Direct Support Line: +91 91715 08042 (10 AM - 7 PM)', 'நேரடி அழைப்பு: +91 91715 08042')}</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
