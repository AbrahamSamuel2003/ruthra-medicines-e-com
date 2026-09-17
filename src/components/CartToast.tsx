'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ShoppingBag, X, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CartToast() {
  const { toastNotification, toastMessage, dismissToast, openDrawer, itemCount } = useCart();
  const { language, t } = useLanguage();
  const [progress, setProgress] = useState(100);

  const isActive = Boolean(toastNotification || toastMessage);

  useEffect(() => {
    if (!isActive) return;

    setProgress(100);

    // Smooth timer interval for progress bar
    const startTime = Date.now();
    const duration = 3800;

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

  return (
    <aside
      aria-label="Cart Notification"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[80] w-[calc(100vw-32px)] sm:w-96 max-w-sm bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-[#16382B]/15 overflow-hidden transition-all duration-300 animate-in slide-in-from-top-3 fade-in"
    >
      {/* Top Banner */}
      <div className="bg-[#E8F1EB] px-3.5 py-2 flex items-center justify-between border-b border-[#16382B]/10">
        <div className="flex items-center gap-2 text-xs font-bold text-[#16382B]">
          <CheckCircle2 className="w-4 h-4 text-[#25D366] fill-[#16382B] stroke-white" />
          <span>{t('Added to Cart Successfully', 'கூடையில் சேர்க்கப்பட்டது')}</span>
        </div>
        <button
          type="button"
          onClick={dismissToast}
          className="w-6 h-6 rounded-full hover:bg-black/5 flex items-center justify-center text-[#8A9B93] hover:text-[#16382B] transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Details */}
      <div className="p-3.5 space-y-3">
        {toastNotification ? (
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 p-1 flex-shrink-0 overflow-hidden">
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
              <p className="text-[11px] text-[#C29043] font-medium truncate">
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

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={handleViewCart}
            className="w-full py-2 px-3 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t(`View Cart (${itemCount})`, `கூடை (${itemCount})`)}</span>
          </button>

          <button
            type="button"
            onClick={dismissToast}
            className="w-full py-2 px-3 rounded-xl bg-[#FAF8F5] hover:bg-[#E8F1EB] active:scale-[0.98] text-[#16382B] text-xs font-semibold border border-[#16382B]/15 transition-all cursor-pointer text-center"
          >
            <span>{t('Continue', 'தொடர்க')}</span>
          </button>
        </div>
      </div>

      {/* Auto-Dismiss Progress Bar */}
      <div className="w-full bg-[#E8F1EB] h-1 overflow-hidden">
        <div
          className="bg-[#C29043] h-full transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </aside>
  );
}
