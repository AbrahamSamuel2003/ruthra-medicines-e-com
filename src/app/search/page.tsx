'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function SearchPage() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return PRODUCTS;
    }

    return PRODUCTS.filter(prod => {
      if (prod.name.toLowerCase().includes(trimmed)) return true;
      if (prod.tamilName.includes(trimmed)) return true;
      if (prod.formulation.toLowerCase().includes(trimmed)) return true;
      if (prod.formulationTa.includes(trimmed)) return true;
      if (prod.searchKeywords.some(k => k.toLowerCase().includes(trimmed))) return true;
      if (prod.tamilKeywords.some(k => k.toLowerCase().includes(trimmed))) return true;
      if (prod.ingredients.some(ing => 
        ing.name.toLowerCase().includes(trimmed) || 
        ing.tamilName.includes(trimmed) || 
        (ing.botanicalName && ing.botanicalName.toLowerCase().includes(trimmed))
      )) return true;
      if (prod.traditionalRole.toLowerCase().includes(trimmed)) return true;
      if (prod.traditionalRoleTa.includes(trimmed)) return true;
      return false;
    });
  }, [query]);

  const quickChips = [
    { en: 'Cough & Throat', ta: 'சளி இருமல்', q: 'cough' },
    { en: 'Joint Pain & Vata', ta: 'மூட்டு வலி', q: 'joint pain' },
    { en: 'Pirandai', ta: 'பிரண்டை', q: 'pirandai' },
    { en: 'Chooranam', ta: 'சூரணம்', q: 'chooranam' },
    { en: 'Kudineer Decoctions', ta: 'குடிநீர்', q: 'kudineer' },
    { en: 'Thailam Medicated Oils', ta: 'தைலம்', q: 'thailam' },
    { en: 'Hair Oil', ta: 'கூந்தல் தைலம்', q: 'hair oil' },
    { en: 'Metabolic & Sugar', ta: 'சர்க்கரை', q: 'sugar' },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="text-xs text-[#8A9B93] mb-4 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Search Formulations', 'மருந்துகள் தேடல்')}</span>
        </nav>

        <div className="max-w-3xl mb-8">
          <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#16382B]">
            {t('Predictive Siddha Search', 'சித்த மருந்துகள் தேடுதல்')}
          </h1>
          <p className="text-sm text-[#3D5A68] mt-1.5">
            {t(
              'Search across symptoms, formulation names, botanical ingredients, and phonetic terms in English or தமிழ்.',
              'இருமல், மூட்டு வலி, பிரண்டை போன்ற தமிழ் அல்லது ஆங்கில சொற்கள் கொண்டு தேடலாம்.'
            )}
          </p>
        </div>

        {/* Search Input Box */}
        <div className="bg-white p-4 rounded-2xl border border-[#16382B]/15 shadow-sm max-w-3xl mb-6">
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-[#16382B]" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={
                language === 'ta'
                  ? 'தேடுங்கள்: சளி, மூட்டு வலி, பிரண்டை, தைலம்...'
                  : 'Search by symptom, herb or formulation (e.g. cough, pirandai, pain oil)...'
              }
              className="flex-1 text-base sm:text-lg text-[#264653] placeholder-[#8A9B93] outline-none"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1.5 rounded-full text-gray-400 hover:text-[#16382B]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Filter Chips */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-[#8A9B93] uppercase tracking-wider block mb-2">
            {t('Quick Filters & Common Searches', 'விரைவு தேடல் தலைப்புகள்')}
          </span>
          <div className="flex flex-wrap gap-2">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(chip.q)}
                className={`text-xs px-3.5 py-2 rounded-full border transition-colors ${
                  query === chip.q
                    ? 'bg-[#16382B] text-white border-[#16382B]'
                    : 'bg-white border-[#16382B]/10 text-[#264653] hover:border-[#C29043]'
                }`}
              >
                {language === 'ta' ? chip.ta : chip.en}
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between text-xs text-[#8A9B93] mb-4 pb-2 border-b border-[#16382B]/10">
          <span>
            {query
              ? t(`Found ${results.length} formulation(s) for "${query}"`, `"${query}" - ${results.length} சித்த மருந்துகள் கண்டறியப்பட்டுள்ளன`)
              : t(`Showing all 20 classical formulations in catalog`, 'அனைத்து 20 சித்த மருந்துகளும் காட்டப்படுகின்றன')}
          </span>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-semibold text-[#C29043] hover:underline"
            >
              {t('Clear Search', 'தேடலை நீக்கு')}
            </button>
          )}
        </div>

        {/* Results Grid */}
        {results.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#16382B]/10 p-8 max-w-lg mx-auto">
            <h3 className="font-serif-brand text-xl font-bold text-[#16382B]">
              {t('No Matching Formulations Found', 'பொருந்தும் மருந்துகள் எதுவும் இல்லை')}
            </h3>
            <p className="text-xs sm:text-sm text-[#3D5A68] mt-2">
              {t(
                `Try searching with broad traditional terms such as "chooranam", "kudineer", "joint", or "respiratory".`,
                `"சூரணம்", "குடிநீர்", "தைலம்" அல்லது "சளி" போன்ற சொற்களை பயன்படுத்தி பார்க்கவும்.`
              )}
            </p>
            <button
              onClick={() => setQuery('')}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#16382B] text-white text-xs font-semibold"
            >
              {t('View Full Catalog', 'அனைத்து மருந்துகளையும் பார்க்க')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
