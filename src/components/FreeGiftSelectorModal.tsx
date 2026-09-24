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
  Tag,
  PackageCheck
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export default function FreeGiftSelectorModal() {
  const { 
    items,
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

  // Only products currently in the customer's cart are eligible for free bonus selection
  const eligibleProducts = useMemo(() => {
    const cartProducts = items.map(it => it.product);
    if (!searchQuery.trim()) return cartProducts;

    const q = searchQuery.toLowerCase().trim();
    return cartProducts.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchTa = p.tamilName?.toLowerCase().includes(q) || false;
      const matchForm = p.formulation?.toLowerCase().includes(q) || false;
      return matchName || matchTa || matchForm;
    });
  }, [items, searchQuery]);

  if (!isGiftModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-label="Select Free Formulation Modal"
    >
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={closeGiftModal} />

      {/* Modal / Bottom Sheet Box */}
      <div 
        className="relative z-10 w-full sm:max-w-xl bg-[#FAF8F5] rounded-t-[28px] sm:rounded-3xl shadow-2xl border-t sm:border border-[#16382B]/20 overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[85vh] animate-in slide-in-from-bottom-5 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Mobile Drag Pill Indicator */}
        <div className="sm:hidden pt-2.5 pb-1 flex justify-center bg-[#16382B]">
          <div className="w-10 h-1 rounded-full bg-white/30" />
        </div>

        {/* Modal Header */}
        <div className="bg-[#16382B] text-white px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between border-b border-[#C29043]/30 flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#C29043]/25 border border-[#C29043]/40 flex items-center justify-center text-[#DFB36C] flex-shrink-0">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif-brand text-sm sm:text-base md:text-lg font-bold tracking-wide truncate">
                {t('Select Free Formulation Bonus', 'இலவச மருந்தைத் தேர்வு செய்க')}
              </h3>
              <p className="text-[10.5px] sm:text-xs text-[#DFB36C] truncate">
                {t('Choose bonus units from your ordered medicines', 'வாங்கிய மருந்துகளிலிருந்தே கூடுதல் இலவச தேர்வு')}
              </p>
            </div>
          </div>

          <button
            onClick={closeGiftModal}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0 ml-2"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Slot Status Strip */}
        <div className="bg-[#E8F1EB] px-4 sm:px-5 py-2.5 border-b border-[#16382B]/10 flex items-center justify-between text-xs flex-shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-bold text-[#16382B] text-[11px] sm:text-xs">
              {t('Earned Slots:', 'தகுதி பெற்றவை:')}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#16382B] text-white font-bold text-[10.5px] sm:text-[11px]">
              {freeSlotsEarned} {t('Units', 'எண்ணிக்கை')}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[#3D5A68] text-[11px] sm:text-xs">
              {t('Remaining:', 'மீதம்:')}
            </span>
            <span className={`px-2 py-0.5 rounded-md font-bold text-[10.5px] sm:text-[11px] ${
              freeSlotsRemaining > 0 
                ? 'bg-[#C29043] text-white shadow-2xs' 
                : 'bg-emerald-700 text-white'
            }`}>
              {freeSlotsRemaining > 0 
                ? `${freeSlotsRemaining} ${t('Available', 'உள்ளது')}`
                : t('All Selected', 'முடிந்தது')
              }
            </span>
          </div>
        </div>

        {/* Information Notice */}
        <div className="px-4 sm:px-5 py-2 bg-[#FFF9F0] border-b border-[#C29043]/20 flex items-center gap-2 text-[11px] sm:text-xs text-[#8B5E14] flex-shrink-0">
          <PackageCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C29043] flex-shrink-0" />
          <span className="leading-tight">
            {t(
              'Free bonus medicines are selected directly from your cart items.',
              'உங்கள் கூடையில் உள்ள மருந்துகளிலிருந்தே கூடுதல் இலவச தேர்வு செய்யப்படுகிறது.'
            )}
          </span>
        </div>

        {/* Search Bar (if more than 2 items in cart) */}
        {items.length > 2 && (
          <div className="p-2.5 sm:p-3 bg-white border-b border-[#16382B]/10 flex-shrink-0">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#8A9B93] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t('Search from your ordered medicines...', 'கூடையில் உள்ள மருந்துகளில் தேடுக...')}
                className="w-full pl-8.5 pr-4 py-1.5 sm:py-2 text-xs bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-[#264653] placeholder-[#8A9B93] focus:outline-none focus:border-[#16382B]"
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
          </div>
        )}

        {/* Scrollable Product Card List (Mobile-Optimized Clean Rows) */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5 scrollbar-thin">
          {items.length === 0 ? (
            <div className="text-center py-10 px-4 text-[#8A9B93] text-xs space-y-2">
              <p>{t('Your cart is currently empty. Add products to earn free bonus formulations.', 'கூடையில் மருந்துகள் இல்லை. மருந்துகளை சேர்த்து இலவச பலனை பெறுங்கள்.')}</p>
            </div>
          ) : eligibleProducts.length === 0 ? (
            <div className="text-center py-10 px-4 text-[#8A9B93] text-xs">
              {t('No matching formulations found in your cart.', 'கூடையில் பொருந்தும் மருந்துகள் இல்லை.')}
            </div>
          ) : (
            eligibleProducts.map(product => {
              const cartItem = items.find(it => it.product.id === product.id);
              const purchasedQty = cartItem ? cartItem.quantity : 0;
              const selectedGift = freeGiftItems.find(g => g.product.id === product.id);
              const selectedCount = selectedGift ? selectedGift.quantity : 0;

              return (
                <div 
                  key={`gift-modal-${product.id}`}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all space-y-2 ${
                    selectedCount > 0 
                      ? 'bg-emerald-50/80 border-emerald-500 shadow-2xs' 
                      : 'bg-white border-[#16382B]/10 hover:border-[#C29043]/50 shadow-2xs'
                  }`}
                >
                  {/* Top Row: Thumbnail + Product Titles + Badges */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    {/* Thumbnail */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image || '/images/ruthra-icon.png'}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain max-h-12"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      {/* Badges strip */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-md bg-[#FAF8F5] border border-[#16382B]/10 text-[#16382B]">
                          {language === 'ta' ? product.formulationTa : product.formulation}
                        </span>
                        <span className="text-[9.5px] text-[#8A9B93]">
                          {language === 'ta' ? product.packSizeTa : product.packSize}
                        </span>
                        <span className="text-[9.5px] font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-1.5 py-0.2 rounded-md">
                          {t(`In Cart: ×${purchasedQty}`, `கூடையில்: ×${purchasedQty}`)}
                        </span>
                      </div>

                      <h4 className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B] leading-snug line-clamp-1">
                        {language === 'ta' ? product.tamilName : product.name}
                      </h4>
                      <p className="text-[10.5px] text-[#3D5A68] truncate leading-tight mt-0.5">
                        {language === 'ta' ? product.name : product.tamilName}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Row: Free Price Tag (Left) + Claim/Stepper Controls (Right) */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#16382B]/5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[10px] text-[#8A9B93] line-through">
                        ₹{product.price}
                      </span>
                      <span className="text-xs font-bold text-emerald-700">
                        {t('FREE (₹0.00)', 'இலவசம் (₹0.00)')}
                      </span>
                    </div>

                    <div>
                      {selectedCount > 0 ? (
                        <div className="flex items-center gap-1.5 bg-[#16382B] text-white px-2 py-1 rounded-xl text-xs font-bold shadow-2xs">
                          <button
                            type="button"
                            onClick={() => removeFreeGift(product.id)}
                            className="p-1 hover:bg-white/20 active:bg-white/30 rounded-lg transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-1.5 min-w-4 text-center font-bold">{selectedCount}</span>
                          <button
                            type="button"
                            onClick={() => addFreeGift(product)}
                            disabled={freeSlotsRemaining <= 0}
                            className={`p-1 rounded-lg transition-colors ${
                              freeSlotsRemaining > 0 
                                ? 'hover:bg-white/20 active:bg-white/30 cursor-pointer' 
                                : 'opacity-40 cursor-not-allowed'
                            }`}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addFreeGift(product)}
                          disabled={freeSlotsRemaining <= 0}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            freeSlotsRemaining > 0
                              ? 'bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white shadow-2xs'
                              : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                          }`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t('Claim Free', 'தேர்வு செய்க')}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Sticky Bottom Footer with Safe-Area insets */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#16382B]/10 flex items-center justify-between gap-3 pb-[max(env(safe-area-inset-bottom,0px),12px)] flex-shrink-0 shadow-lg">
          <div className="text-xs text-[#3D5A68]">
            {totalFreeGiftsSelected > 0 ? (
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-bold text-emerald-800 text-[11px] sm:text-xs">
                  {t(
                    `${totalFreeGiftsSelected} Free Bonus Unit(s) Selected`,
                    `${totalFreeGiftsSelected} இலவச மருந்துகள் தேர்வு`
                  )}
                </span>
              </div>
            ) : (
              <span className="text-[11px] text-[#8A9B93]">
                {t('Select your free formulation bonus.', 'இலவச மருந்தைத் தேர்வு செய்யவும்.')}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={closeGiftModal}
            className="px-6 py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:bg-[#112d22] active:scale-95 text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer"
          >
            {t('Done', 'முடிந்தது')}
          </button>
        </div>
      </div>
    </div>
  );
}
