'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ShoppingBag, X, Gift, Check, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CartToast() {
  const {
    toastNotification,
    toastMessage,
    dismissToast,
    openDrawer,
    openGiftModal,
    itemCount,
    paidItemCount,
    totalItemCount,
    freeSlotsEarned,
    totalFreeGiftsSelected,
    freeSlotsRemaining,
    nextMilestoneCount,
    itemsNeededForNextMilestone,
    progressPercent,
    freeGiftSavings
  } = useCart();

  const { language, t } = useLanguage();
  const [progress, setProgress] = useState(100);

  const isActive = Boolean(toastNotification || toastMessage);

  useEffect(() => {
    if (!isActive) return;

    setProgress(100);

    // 5.5s duration so customer has comfortable time to review their 5+1 offer progress and claim free gift
    const startTime = Date.now();
    const duration = 5500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (elapsed >= duration) {
        clearInterval(interval);
        dismissToast();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [toastNotification, toastMessage, dismissToast, isActive]);

  if (!isActive) return null;

  const handleViewCart = () => {
    dismissToast();
    openDrawer();
  };

  const handleChooseFreeGift = () => {
    dismissToast();
    openGiftModal();
  };

  return (
    <aside
      aria-label="Cart Notification & 5+1 Offer Status"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[80] w-[calc(100vw-32px)] sm:w-96 max-w-sm bg-white rounded-2xl shadow-2xl border border-[#16382B]/15 overflow-hidden transition-all duration-300 animate-in slide-in-from-top-3 fade-in"
    >
      {/* 1. Header Banner */}
      <div className="bg-[#16382B] text-white px-3.5 py-2 flex items-center justify-between border-b border-[#C29043]/30">
        <div className="flex items-center gap-2 text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-[#25D366] fill-[#16382B] stroke-white" />
          <span>{t('Added to Cart Successfully', 'கூடையில் சேர்க்கப்பட்டது')}</span>
        </div>
        <button
          type="button"
          onClick={dismissToast}
          className="w-6 h-6 rounded-md hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Main Body Content */}
      <div className="p-3.5 space-y-3 bg-[#FAF8F5]">
        {/* Added Product Snippet */}
        {toastNotification ? (
          <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-[#16382B]/10">
            <div className="relative w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 p-1 flex-shrink-0 overflow-hidden">
              <Image
                src={toastNotification.product.image || '/images/ruthra-icon.png'}
                alt={toastNotification.product.name}
                fill
                className="object-contain p-1"
                sizes="48px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B] truncate">
                {toastNotification.product.name}
              </h4>
              <p className="text-[10.5px] text-[#C29043] font-medium truncate">
                {language === 'ta' ? toastNotification.product.tamilName : toastNotification.product.formulation}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#3D5A68] mt-0.5">
                <span className="font-semibold text-[#16382B]">
                  ₹{toastNotification.product.price * toastNotification.quantity}
                </span>
                <span className="text-[10px] text-[#8A9B93]">
                  ({toastNotification.quantity} × ₹{toastNotification.product.price})
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xs font-semibold text-[#16382B] py-1">
            {toastMessage}
          </p>
        )}

        {/* 3. Integrated 5+1 & 10+2 Volume Scheme Offer Card */}
        <div className="bg-white p-3 rounded-xl border border-[#C29043]/30 space-y-2">
          {/* Milestone Header */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#16382B]">
              <Gift className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
              <span>{paidItemCount} {t('Items in cart', 'கூடையில்')}</span>
            </div>
            <span className="text-xs font-bold text-[#C29043]">
              {paidItemCount < 5 
                ? t('Next: 5 Items (Get 1 Free)', 'இலக்கு: 5 (1 இலவசம்)')
                : t(`Next: ${nextMilestoneCount} Items (Get ${nextMilestoneCount / 5} Free)`, `அடுத்த இலக்கு: ${nextMilestoneCount} (${nextMilestoneCount / 5} இலவசம்)`)}
            </span>
          </div>

          {/* Progress Bar & Subtitle */}
          <div className="space-y-1">
            <div className="w-full h-2 rounded-full bg-[#16382B]/10 overflow-hidden">
              <div
                className="h-full bg-[#16382B] rounded-full transition-all duration-300"
                style={{ width: `${paidItemCount < 5 ? (paidItemCount / 5) * 100 : progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-[#3D5A68]">
              <span>
                {paidItemCount < 5
                  ? t(`Add ${itemsNeededForNextMilestone} more for next free gift`, `அடுத்த இலவச மருந்துக்கு இன்னும் ${itemsNeededForNextMilestone} தேவை`)
                  : t(`Add ${itemsNeededForNextMilestone} more for next free gift`, `அடுத்த இலவச மருந்துக்கு இன்னும் ${itemsNeededForNextMilestone} தேவை`)}
              </span>
              <span className="font-bold text-[#16382B]">
                {paidItemCount < 5 ? Math.round((paidItemCount / 5) * 100) : progressPercent}%
              </span>
            </div>
          </div>

          {/* Free Gift Claim Trigger */}
          {freeSlotsEarned > 0 && (
            <div className="pt-1">
              {freeSlotsRemaining > 0 ? (
                <button
                  type="button"
                  onClick={handleChooseFreeGift}
                  className="w-full py-1.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                >
                  <Gift className="w-3.5 h-3.5" />
                  <span>
                    {t(
                      `Choose ${freeSlotsRemaining} Free Gift (₹0.00)`,
                      `${freeSlotsRemaining} இலவச மருந்தை தேர்வு செய்க (₹0.00)`
                    )}
                  </span>
                </button>
              ) : (
                <div className="flex items-center justify-between text-[10.5px] bg-emerald-50 text-emerald-800 px-2 py-1 rounded-md border border-emerald-200">
                  <span className="flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3 text-emerald-700" />
                    <span>{t(`Selected ${totalFreeGiftsSelected} Free Formulations!`, `${totalFreeGiftsSelected} இலவச மருந்துகள் தேர்வு செய்யப்பட்டன!`)}</span>
                  </span>
                  {freeGiftSavings > 0 && <span className="font-bold">₹{freeGiftSavings} saved</span>}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4. Primary Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <button
            type="button"
            onClick={handleViewCart}
            className="w-full py-2 px-3 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#DFB36C]" />
            <span>{t(`View Cart (${totalItemCount})`, `கூடை (${totalItemCount})`)}</span>
          </button>

          <button
            type="button"
            onClick={dismissToast}
            className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#E8F1EB] active:scale-[0.98] text-[#16382B] text-xs font-semibold border border-[#16382B]/15 transition-all cursor-pointer text-center"
          >
            <span>{t('Continue', 'தொடர்க')}</span>
          </button>
        </div>
      </div>

      {/* 5. Auto-Dismiss Progress Bar */}
      <div className="w-full bg-[#E8F1EB] h-1 overflow-hidden">
        <div
          className="bg-[#C29043] h-full transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </aside>
  );
}
