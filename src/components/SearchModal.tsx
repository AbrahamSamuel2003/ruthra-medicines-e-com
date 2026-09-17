'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, X, ArrowRight, ShoppingBag, Tag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS } from '@/data/products';

export default function SearchModal() {
  const pathname = usePathname();
  const { isSearchOpen, closeSearch, addItem } = useCart();
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  // Automatically close search modal whenever pathname changes
  useEffect(() => {
    if (isSearchOpen) {
      closeSearch();
    }
  }, [pathname]);

  // Derive results cleanly using useMemo without effect setState
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

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

  if (!isSearchOpen) return null;

  const quickSearches = [
    { labelEn: 'Joint Pain', labelTa: 'மூட்டு வலி', query: 'joint pain' },
    { labelEn: 'Cough & Cold', labelTa: 'சளி இருமல்', query: 'cough' },
    { labelEn: 'Pirandai', labelTa: 'பிரண்டை', query: 'pirandai' },
    { labelEn: 'Chooranam', labelTa: 'சூரணம்', query: 'chooranam' },
    { labelEn: 'Thailam Oil', labelTa: 'தைலம்', query: 'thailam' },
    { labelEn: 'Sinus Relief', labelTa: 'சைனஸ்', query: 'sinus' }
  ];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center pt-4 sm:pt-20 px-3 bg-black/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Product Search"
    >
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#C29043]/30 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#16382B]/10 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#16382B]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={
              language === 'ta'
                ? 'தயாரிப்பு, உபாதை, மூலிகை அல்லது வடிவம் தேடுங்கள்... (எ.கா: சளி, மூட்டு வலி, பிரண்டை)'
                : 'Search products, symptoms, herbs, or forms... (e.g. cough, pirandai, joint pain)'
            }
            className="flex-1 bg-transparent text-[#264653] placeholder-[#8C9E96] text-sm sm:text-base outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-gray-400 hover:text-[#16382B]"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => {
              setQuery('');
              closeSearch();
            }}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#E8F1EB] text-[#16382B] hover:bg-[#16382B] hover:text-white transition-colors"
          >
            {t('Esc / Close', 'மூடுக')}
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        {!query && (
          <div className="p-4 bg-[#FAF8F5] border-b border-[#16382B]/5">
            <p className="text-xs uppercase font-semibold tracking-wider text-[#8A9B93] mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#C29043]" />
              {t('Popular Searches', 'பிரபலமான தேடல்கள்')}
            </p>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(item.query)}
                  className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#E8F1EB] text-[#16382B] hover:border-[#C29043] hover:bg-[#E8F1EB] transition-colors"
                >
                  {language === 'ta' ? item.labelTa : item.labelEn}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {query && results.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 rounded-full bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif-brand text-lg font-semibold text-[#16382B]">
                {t('No matching formulations found', 'பொருந்தும் சித்த மருந்துகள் காணப்படவில்லை')}
              </h3>
              <p className="text-sm text-[#3D5A68] mt-1 max-w-md mx-auto">
                {t(
                  `We couldn't find matches for "${query}". Try searching for symptoms like "cough", "joint pain" or traditional forms like "chooranam", "kudineer".`,
                  `"${query}" என்ற சொல்லுக்கு மருந்துகள் இல்லை. "சளி", "மூட்டு வலி", அல்லது "குடிநீர்", "சூரணம்" என தேடிப் பாருங்கள்.`
                )}
              </p>
              <div className="mt-4">
                <Link
                  href="/shop"
                  onClick={closeSearch}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16382B] underline"
                >
                  {t('Browse all 20 formulations in catalog', 'அனைத்து 20 மருந்துகளையும் பார்க்க')}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2.5">
              <p className="text-xs text-[#8A9B93] px-1 font-medium">
                {t(`Found ${results.length} authentic Siddha formulation(s)`, `${results.length} சித்த மருந்துகள் கண்டறியப்பட்டுள்ளன`)}
              </p>
              {results.map(prod => (
                <div
                  key={prod.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E8F1EB] hover:border-[#C29043]/50 transition-all gap-3 group"
                >
                  <Link
                    href={`/product/${prod.slug}`}
                    onClick={closeSearch}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <div className="w-14 h-14 relative flex-shrink-0 bg-[#FAF8F5] rounded-lg p-1 border border-[#E8F1EB] flex items-center justify-center">
                      <Image
                        src={prod.image || '/images/ruthra-icon.png'}
                        alt={prod.name}
                        width={48}
                        height={48}
                        className="object-contain max-h-12"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#E8F1EB] text-[#16382B]">
                          {language === 'ta' ? prod.formulationTa : prod.formulation}
                        </span>
                        <span className="text-[11px] text-[#8C9E96]">
                          {language === 'ta' ? prod.packSizeTa : prod.packSize}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm text-[#16382B] truncate mt-0.5 group-hover:text-[#C29043] transition-colors">
                        {language === 'ta' ? prod.tamilName : prod.name}
                      </h4>
                      <p className="text-xs text-[#3D5A68] truncate mt-0.5">
                        {language === 'ta' ? prod.traditionalRoleTa : prod.traditionalRole}
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-bold text-sm text-[#16382B]">₹{prod.price}</span>
                    <button
                      onClick={() => addItem(prod, 1)}
                      className="p-2 rounded-lg bg-[#16382B] text-white hover:bg-[#C29043] transition-colors"
                      title={t('Add to Cart', 'கூடையில் சேர்க்க')}
                      aria-label={`Add ${prod.name} to cart`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Footer info strip */}
        <div className="p-3 bg-[#E8F1EB]/50 border-t border-[#16382B]/10 flex items-center justify-between text-xs text-[#3D5A68]">
          <span>
            {t('Delivery Across Tamil Nadu | Authentic Siddha', 'தமிழ்நாடு முழுவதும் விநியோகம் | தூய சித்த மருந்துகள்')}
          </span>
          <Link
            href="/search"
            onClick={closeSearch}
            className="text-[#16382B] font-semibold hover:underline flex items-center gap-1"
          >
            {t('Full Search Page', 'முழு தேடல் பக்கம்')}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
