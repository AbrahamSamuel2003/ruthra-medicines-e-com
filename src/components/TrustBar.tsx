'use client';

import React from 'react';
import { Shield, Leaf, FileText, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TrustBar() {
  const { language } = useLanguage();

  const trustItems = [
    {
      icon: Shield,
      titleEn: 'Authentic Formulations',
      titleTa: 'பாரம்பரிய முறைப்படி தயாரிப்பு',
      descEn: 'Prepared strictly per classical Siddha pharmacopeia standards',
      descTa: 'பழமையான சித்த மருத்துவ விதிகளின்படி தூய்மையாக தயாரிக்கப்படுகிறது'
    },
    {
      icon: Leaf,
      titleEn: 'Carefully Prepared',
      titleTa: 'பக்குவமான சுத்தி முறைகள்',
      descEn: 'Traditional hand-processed botanicals from Tamil Nadu',
      descTa: 'தென் தமிழக மூலிகைகள் பாரம்பரிய முறையில் பக்குவப்படுத்தப்படுகின்றன'
    },
    {
      icon: FileText,
      titleEn: 'Clear Product Information',
      titleTa: 'வெளிப்படையான மூலிகை விபரம்',
      descEn: 'Full botanical ingredients, safety guidelines and dosages',
      descTa: 'முழுமையான மூலிகை சேர்க்கை, அளவு மற்றும் பாதுகாப்பு விபரங்கள்'
    },
    {
      icon: Lock,
      titleEn: 'Secure Ordering & Dispatch',
      titleTa: 'பாதுகாப்பான அஞ்சல் விநியோகம்',
      descEn: 'Carefully sealed packages dispatched directly from Tirunelveli',
      descTa: 'திருநெல்வேலியிலிருந்து தமிழ்நாடு முழுவதும் நேரடி அஞ்சல் சேவை'
    }
  ];

  return (
    <section className="w-full bg-[#E8F1EB] border-y border-[#16382B]/10 py-4 sm:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 w-full">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center sm:items-start gap-2 sm:gap-3 min-w-0 overflow-hidden bg-white/50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white text-[#16382B] shadow-2xs flex-shrink-0 border border-[#16382B]/10">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#16382B]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-serif-brand font-bold text-[11px] sm:text-sm text-[#16382B] leading-tight break-words">
                    {language === 'ta' ? item.titleTa : item.titleEn}
                  </h4>
                  <p className="hidden sm:block text-[11px] sm:text-xs text-[#3D5A68] mt-1 leading-snug break-words">
                    {language === 'ta' ? item.descTa : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
