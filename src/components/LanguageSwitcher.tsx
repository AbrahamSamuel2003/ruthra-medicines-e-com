'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

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
            ? 'bg-[#16382B] text-white shadow-sm font-semibold'
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
            ? 'bg-[#16382B] text-white shadow-sm font-semibold'
            : 'text-[#264653] hover:text-[#16382B]'
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
}
