'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  X, 
  Search, 
  Gift, 
  Check, 
  Plus, 
  Minus,
  Sparkles,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCTS } from '@/data/products';
import { Product, MedicalSystem } from '@/types/product';

export default function FreeGiftSelectorModal() {
  const { 
    isGiftModalOpen, 
    closeGiftModal, 
    freeSlotsEarned, 
    totalFreeGiftsSelected, 
    freeSlotsRemaining, 
    freeGiftItems,
    addFreeGift,
    removeFreeGift
  } = useCart();
  const { language, t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState<string>('all');

  // Filtered product catalog
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Filter out coming soon or out of stock items
      if (p.isComingSoon || (p.inStock === false)) return false;

      // Filter by Medical System
      if (selectedSystem !== 'all' && p.medicalSystem !== selectedSystem) {
        return false;
      }

      // Filter by Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q);
        const matchTa = p.tamilName.includes(q);
        const matchForm = p.formulation.toLowerCase().includes(q);
        return matchName || matchTa || matchForm;
      }

      return true;
    });
  }, [searchQuery, selectedSystem]);

  if (!isGiftModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#16382B]/15 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#16382B] text-white px-5 py-4 flex items-center justify-between border-b border-[#C29043]/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C29043]/20 border border-[#C29043]/40 flex items-center justify-center text-[#DFB36C]">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-brand text-lg font-bold tracking-wide">
                {t('Select Your Free Formulation', 'இலவச மருந்தைத் தேர்வு செய்க')}
              </h3>
              <p className="text-xs text-[#DFB36C]">
                {t('Classical 5+1 & 10+2 Volume Reward Scheme', '5+1 & 10+2 சிறப்பு சலுகை திட்டம்')}
              </p>
            </div>
          </div>

          <button
            onClick={closeGiftModal}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Slot Status Strip */}
        <div className="bg-[#E8F1EB] px-5 py-2.5 border-b border-[#16382B]/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#16382B]">
              {t('Earned Free Slots:', 'தகுதி பெற்ற இலவச எண்ணிக்கை:')}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#16382B] text-white font-bold text-[11px]">
              {freeSlotsEarned} {t('Units', 'எண்ணிக்கை')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#3D5A68]">
              {t('Slots Remaining:', 'மீதமுள்ள தெரிவுகள்:')}
            </span>
            <span className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${
              freeSlotsRemaining > 0 
                ? 'bg-[#C29043] text-white' 
                : 'bg-emerald-700 text-white'
            }`}>
              {freeSlotsRemaining > 0 
                ? `${freeSlotsRemaining} ${t('Remaining', 'மீதம்')}`
                : t('All Claimed', 'அனைத்தும் தேர்வு செய்யப்பட்டது')
              }
            </span>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 bg-white border-b border-[#16382B]/10 space-y-3">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8A9B93] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('Search from all 176 master formulations...', '176 மருந்துகளில் தேடுக...')}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-[#264653] placeholder-[#8A9B93] focus:outline-none focus:border-[#16382B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A9B93] hover:text-[#264653]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Medical System Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedSystem('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedSystem === 'all'
                  ? 'bg-[#16382B] text-white font-semibold'
                  : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
              }`}
            >
              {t('All Systems (176)', 'அனைத்து மருந்துகள் (176)')}
            </button>
            <button
              onClick={() => setSelectedSystem('siddha')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedSystem === 'siddha'
                  ? 'bg-[#16382B] text-white font-semibold'
                  : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
              }`}
            >
              {t('Siddha (111)', 'சித்த மருந்துகள் (111)')}
            </button>
            <button
              onClick={() => setSelectedSystem('ayurveda')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedSystem === 'ayurveda'
                  ? 'bg-[#16382B] text-white font-semibold'
                  : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
              }`}
            >
              {t('Ayurveda (55)', 'ஆயுர்வேதம் (55)')}
            </button>
            <button
              onClick={() => setSelectedSystem('proprietary')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedSystem === 'proprietary'
                  ? 'bg-[#16382B] text-white font-semibold'
                  : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
              }`}
            >
              {t('Proprietary (10)', 'பிரத்தியேக தயாரிப்பு (10)')}
            </button>
          </div>
        </div>

        {/* Product Grid List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-[#8A9B93] text-xs">
              {t('No formulations matched your search query.', 'தேடலுக்குரிய மருந்துகள் கிடைக்கவில்லை.')}
            </div>
          ) : (
            filteredProducts.map(product => {
              const selectedGift = freeGiftItems.find(g => g.product.id === product.id);
              const selectedCount = selectedGift ? selectedGift.quantity : 0;

              return (
                <div 
                  key={product.id}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    selectedCount > 0 
                      ? 'bg-[#E8F1EB]/50 border-emerald-600 shadow-2xs' 
                      : 'bg-white border-[#16382B]/10 hover:border-[#C29043]/50'
                  }`}
                >
                  {/* Left: Product info */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image || '/images/ruthra-icon.png'}
                        alt={product.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#FAF8F5] border border-[#16382B]/10 text-[#16382B]">
                          {language === 'ta' ? product.formulationTa : product.formulation}
                        </span>
                        <span className="text-[10px] text-[#8A9B93]">
                          {language === 'ta' ? product.packSizeTa : product.packSize}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#16382B] truncate mt-0.5">
                        {language === 'ta' ? product.tamilName : product.name}
                      </h4>
                      <p className="text-[11px] text-[#3D5A68] truncate">
                        {language === 'ta' ? product.name : product.tamilName}
                      </p>
                    </div>
                  </div>

                  {/* Right: Value Badge & Selection Button */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 line-through block">
                        ₹{product.price}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 block">
                        {t('FREE (₹0)', 'இலவசம் (₹0)')}
                      </span>
                    </div>

                    {selectedCount > 0 ? (
                      <div className="flex items-center gap-1.5 bg-[#16382B] text-white px-2 py-1 rounded-lg text-xs font-bold">
                        <button
                          onClick={() => removeFreeGift(product.id)}
                          className="p-1 hover:bg-white/20 rounded transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-1">{selectedCount}</span>
                        <button
                          onClick={() => addFreeGift(product)}
                          disabled={freeSlotsRemaining <= 0}
                          className={`p-1 rounded transition-colors ${
                            freeSlotsRemaining > 0 
                              ? 'hover:bg-white/20' 
                              : 'opacity-40 cursor-not-allowed'
                          }`}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addFreeGift(product)}
                        disabled={freeSlotsRemaining <= 0}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                          freeSlotsRemaining > 0
                            ? 'bg-[#16382B] text-white hover:bg-[#204C3B] shadow-2xs'
                            : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{t('Claim Free', 'தேர்வு செய்க')}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF8F5] border-t border-[#16382B]/10 flex items-center justify-between gap-3">
          <div className="text-xs text-[#3D5A68]">
            {totalFreeGiftsSelected > 0 ? (
              <span className="font-semibold text-emerald-800">
                {t(
                  `${totalFreeGiftsSelected} Free Formulation(s) Claimed`,
                  `${totalFreeGiftsSelected} இலவச மருந்துகள் தேர்வு செய்யப்பட்டது`
                )}
              </span>
            ) : (
              <span>{t('Please select your free formulation bonus.', 'உங்கள் இலவச மருந்தைத் தேர்வு செய்யவும்.')}</span>
            )}
          </div>

          <button
            onClick={closeGiftModal}
            className="px-5 py-2 rounded-xl bg-[#16382B] text-white text-xs font-bold hover:bg-[#204C3B] transition-colors shadow-xs"
          >
            {t('Done', 'முடிந்தது')}
          </button>
        </div>
      </div>
    </div>
  );
}
