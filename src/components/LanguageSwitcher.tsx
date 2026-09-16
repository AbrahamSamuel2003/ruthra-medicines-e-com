'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'pill' | 'toggle';
}

export default function LanguageSwitcher({ className = '', variant = 'toggle' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'toggle') {
    return (
      <button
        type="button"
        onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#16382B]/15 bg-white hover:bg-[#E8F1EB] text-xs font-bold text-[#16382B] transition-all duration-150 cursor-pointer shadow-2xs hover:border-[#C29043] ${className}`}
        title={`Switch to ${language === 'en' ? 'Tamil (தமிழ்)' : 'English'}`}
        aria-label="Toggle language"
      >
        <Globe className="w-3.5 h-3.5 text-[#C29043]" />
        <span>{language === 'en' ? 'தமிழ்' : 'Eng'}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 border border-[#C29043]/30 bg-[#FAF8F5] text-xs font-medium ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#16382B] text-white shadow-xs font-semibold'
            : 'text-[#264653] hover:text-[#16382B]'
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ta')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
          language === 'ta'
            ? 'bg-[#16382B] text-white shadow-xs font-semibold'
            : 'text-[#264653] hover:text-[#16382B]'
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
}
