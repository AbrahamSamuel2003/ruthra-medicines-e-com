'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Tag,
  Check,
  Gift,
  Sparkles,
  PackageCheck
} from 'lucide-react';
import { useCart, getProductMRP } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/types/product';

export default function CartDrawer() {
  const pathname = usePathname();
  const {
    items,
    freeGiftItems,
    removeFreeGift,
    freeSlotsEarned,
    totalFreeGiftsSelected,
    freeSlotsRemaining,
    itemsNeededForNextMilestone,
    nextMilestoneCount,
    progressPercent,
    freeGiftSavings,
    openGiftModal,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    itemCount,
    paidItemCount,
    subtotal,
    mrpSubtotal,
    mrpSavings,
    totalSavings,
    shippingFee,
    total,
    freeShippingThreshold,
    amountNeededForFreeShipping
  } = useCart();

  const { language, t } = useLanguage();

  // Automatically close cart overlay whenever pathname/route changes
  useEffect(() => {
    if (isDrawerOpen) {
      closeDrawer();
    }
  }, [pathname]);

  if (!isDrawerOpen) return null;

  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div
      className="fixed inset-0 z-[70] flex justify-end bg-black/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
    >
      {/* Backdrop click to close */}
      <div className="flex-1" onClick={closeDrawer} />

      {/* Slide-out Drawer Panel */}
      <div
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col border-l border-[#C29043]/30 animate-in slide-in-from-right duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* 1. COMPACT DRAWER HEADER */}
        <div className="p-3.5 sm:p-4 bg-white border-b border-[#16382B]/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#E8F1EB] text-[#16382B]">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif-brand text-base sm:text-lg font-bold text-[#16382B]">
                  {t('Your Wellness Cart', 'உங்கள் மருந்து கூடை')}
                </h2>
                {itemCount > 0 && (
                  <span className="px-2 py-0.2 rounded-full bg-[#16382B] text-white text-[10px] font-bold">
                    {itemCount}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#8A9B93]">
                {paidItemCount} {t('paid item(s)', 'வாங்கியவை')} {totalFreeGiftsSelected > 0 && `• ${totalFreeGiftsSelected} ${t('free bonus', 'இலவசம்')}`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            className="p-1.5 rounded-lg text-gray-400 hover:text-[#16382B] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. 5+1 & 10+2 VOLUME SCHEME HEADER BAR */}
        {items.length > 0 && (
          <div className="px-3.5 py-2.5 bg-[#E8F1EB]/90 border-b border-[#16382B]/10 flex-shrink-0">
            <div className="flex items-center justify-between text-xs mb-1 font-semibold text-[#16382B]">
              <span className="flex items-center gap-1.5 text-[11.5px] truncate">
                <Gift className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
                <span>
                  {freeSlotsEarned > 0
                    ? t(`${paidItemCount} Items in cart • ${freeSlotsEarned} FREE Gift Unlocked`, `${paidItemCount} மருந்துகள் • ${freeSlotsEarned} இலவசம்`)
                    : t(`${paidItemCount} Items in cart`, `${paidItemCount} மருந்துகள் கூடையில்`)}
                </span>
              </span>
              <span className="font-bold text-xs text-[#16382B]">
                {paidItemCount < 5 
                  ? t(`Next: 5 Items (Get 1 Free)`, `இலக்கு: 5 (1 இலவசம்)`)
                  : t(`Next: ${nextMilestoneCount} Items (Get ${nextMilestoneCount / 5} Free)`, `அடுத்த இலக்கு: ${nextMilestoneCount} (${nextMilestoneCount / 5} இலவசம்)`)}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white overflow-hidden">
              <div
                className="h-full rounded-full bg-[#16382B] transition-all duration-300"
                style={{ width: `${paidItemCount < 5 ? (paidItemCount / 5) * 100 : progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* 3. SCROLLABLE CONTENT AREA (Cart Items + Free Gift Selector + Order Breakdown) */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3 scrollbar-thin">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-14 h-14 rounded-full bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="w-7 h-7 opacity-60" />
              </div>
              <h3 className="font-serif-brand text-base font-bold text-[#16382B]">
                {t('Your cart is empty', 'உங்கள் கூடை காலியாக உள்ளது')}
              </h3>
              <p className="text-xs text-[#3D5A68] mt-1 max-w-xs mx-auto leading-relaxed">
                {t(
                  'Explore Ruthra’s 176 authentic classical formulations across Siddha, Ayurveda, and Proprietary healthcare.',
                  'திருநெல்வேலியில் பாரம்பரிய முறைப்படி தயாரிக்கப்படும் 176 ருத்ரா மருந்துகளை ஆராயுங்கள்.'
                )}
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="px-5 py-2 rounded-full bg-[#16382B] text-white text-xs font-semibold hover:bg-[#C29043] transition-colors shadow-xs cursor-pointer"
                >
                  {t('Explore Formulations', 'மருந்துகளை பார்க்க')}
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* FREE GIFT CLAIM BANNER (When slots unlocked & available) */}
              {freeSlotsRemaining > 0 && (
                <div className="p-3 bg-emerald-50/85 rounded-xl border border-emerald-300 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center flex-shrink-0">
                        <Gift className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif-brand font-bold text-xs text-[#16382B]">
                          {t('5+1 Free Formulation Unlocked', '5+1 இலவச மருந்து தகுதி')}
                        </h4>
                        <p className="text-[10.5px] text-emerald-800">
                          {t(
                            `You have ${freeSlotsRemaining} unclaimed Free Medicine slot!`,
                            `உங்களுக்கு ${freeSlotsRemaining} இலவச மருந்து தேர்வு செய்ய வாய்ப்புள்ளது!`
                          )}
                        </p>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex-shrink-0">
                      {freeSlotsRemaining} {t('Available', 'உள்ளது')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={openGiftModal}
                    className="w-full py-2 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Gift className="w-3.5 h-3.5 text-[#DFB36C]" />
                    <span>
                      {t(
                        `Select Your Free Formulation (${freeSlotsRemaining} Available)`,
                        `இலவச மருந்தைத் தேர்வு செய்க (${freeSlotsRemaining} உள்ளது)`
                      )}
                    </span>
                  </button>
                </div>
              )}

              {/* SELECTED FREE GIFTS SECTION */}
              {freeGiftItems.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <PackageCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{t('Selected Free Bonus Formulations', 'தேர்வு செய்யப்பட்ட இலவச மருந்துகள்')}</span>
                    </span>
                    <button
                      type="button"
                      onClick={openGiftModal}
                      className="text-[10px] font-bold text-[#16382B] hover:text-[#C29043] underline cursor-pointer"
                    >
                      {t('Change / Add', 'மாற்றுக')}
                    </button>
                  </div>

                  {freeGiftItems.map(({ product, quantity }) => (
                    <div
                      key={`gift-${product.id}`}
                      className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-300/80 shadow-2xs flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-12 h-12 relative flex-shrink-0 bg-white rounded-lg p-1 border border-emerald-200 flex items-center justify-center overflow-hidden">
                          <Image
                            src={product.image || '/images/ruthra-icon.png'}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="object-contain max-h-10"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-emerald-700 text-white">
                              {t('100% Free Gift', 'இலவச பரிசு')}
                            </span>
                            <span className="text-[10px] text-[#8A9B93]">
                              {language === 'ta' ? product.packSizeTa : product.packSize}
                            </span>
                          </div>
                          <h4 className="font-serif-brand font-bold text-xs text-[#16382B] truncate mt-0.5">
                            {language === 'ta' ? product.tamilName : product.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-gray-400 line-through">
                              ₹{product.price * quantity}
                            </span>
                            <span className="text-xs font-bold text-emerald-800">
                              ₹0.00 {quantity > 1 && `(×${quantity})`}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFreeGift(product.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                        title={t('Remove gift', 'இலவச மருந்தை நீக்கு')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* CART ITEMS LIST */}
              <div className="space-y-2.5">
                <div className="px-1 text-[11px] font-bold uppercase tracking-wider text-[#16382B]">
                  {t('Purchased Formulations', 'வாங்கும் மருந்துகள்')}
                </div>

                {items.map(({ product, quantity }) => {
                  const mrp = getProductMRP(product);
                  const unitSavings = mrp - product.price;
                  const totalItemSavings = unitSavings * quantity;
                  const discountPercent = Math.round((unitSavings / mrp) * 100);

                  return (
                    <div
                      key={product.id}
                      className="p-3 bg-white rounded-xl border border-[#16382B]/10 shadow-2xs space-y-2 hover:border-[#C29043]/40 transition-all"
                    >
                      <div className="flex items-start gap-2.5">
                        {/* Product Image Thumbnail */}
                        <Link
                          href={`/product/${product.slug}`}
                          onClick={closeDrawer}
                          className="w-14 h-14 relative flex-shrink-0 bg-[#FAF8F5] rounded-lg p-1 border border-[#16382B]/10 flex items-center justify-center overflow-hidden hover:bg-[#F4EFEA] transition-colors"
                        >
                          <Image
                            src={product.image || '/images/ruthra-icon.png'}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="object-contain max-h-11"
                          />
                          <span className="absolute bottom-0.5 left-0.5 text-[7px] font-bold uppercase tracking-wider px-1 rounded-xs bg-white/95 border border-[#C29043]/30 text-[#16382B]">
                            {product.formulation}
                          </span>
                        </Link>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <Link
                              href={`/product/${product.slug}`}
                              onClick={closeDrawer}
                              className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B] hover:text-[#C29043] transition-colors line-clamp-1 leading-tight"
                            >
                              {language === 'ta' ? product.tamilName : product.name}
                            </Link>
                            <button
                              type="button"
                              onClick={() => removeItem(product.id)}
                              className="text-gray-400 hover:text-[#D9534F] p-0.5 transition-colors cursor-pointer"
                              title={t('Remove', 'நீக்கு')}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="text-[10px] text-[#8A9B93]">
                            {language === 'ta' ? product.packSizeTa : product.packSize}
                          </p>

                          {/* Price Row with Strikethrough & Discount Tag */}
                          <div className="flex flex-wrap items-baseline gap-1.5 mt-0.5">
                            <span className="font-bold text-xs sm:text-sm text-[#16382B]">
                              ₹{product.price * quantity}
                            </span>
                            <span className="text-[10px] text-[#8A9B93] line-through">
                              ₹{mrp * quantity}
                            </span>
                            <span className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-200 px-1 py-0.2 rounded">
                              {discountPercent}% OFF • Save ₹{totalItemSavings}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Modifier Row */}
                      <div className="flex items-center justify-between pt-1 border-t border-[#16382B]/5">
                        <span className="text-[10px] text-[#8A9B93]">
                          ₹{product.price} × {quantity}
                        </span>

                        <div className="flex items-center border border-[#16382B]/20 rounded-md overflow-hidden bg-[#FAF8F5]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="px-2 py-0.5 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-[#16382B]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="px-2 py-0.5 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ITEMIZED FINANCIAL BREAKDOWN */}
              <div className="p-3 bg-white rounded-xl border border-[#16382B]/10 space-y-1.5 text-xs text-[#3D5A68]">
                <div className="flex justify-between font-bold text-[#16382B] pb-1 border-b border-[#16382B]/10 text-[11px] uppercase tracking-wider">
                  <span>{t('Bill Details', 'கட்டண விபரம்')}</span>
                  <span className="text-[#8A9B93] font-normal normal-case">
                    {paidItemCount} {t('Paid', 'வாங்கியவை')} {totalFreeGiftsSelected > 0 && `+ ${totalFreeGiftsSelected} ${t('Free', 'இலவசம்')}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>{t('Items MRP Total', 'மொத்த அசல் விலை')}</span>
                  <span className="line-through text-[#8A9B93]">₹{mrpSubtotal}</span>
                </div>

                <div className="flex justify-between text-green-700">
                  <span>{t('Direct Catalog Savings', 'நேரடி தயாரிப்பு தள்ளுபடி')}</span>
                  <span className="font-semibold">-₹{mrpSavings}</span>
                </div>

                {freeGiftSavings > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold bg-emerald-50/80 px-2 py-1 rounded-md">
                    <span className="flex items-center gap-1">
                      <Gift className="w-3 h-3 text-emerald-700" />
                      <span>{t('5+1 Free Formulation Bonus', '5+1 இலவச மருந்து மதிப்பு')}</span>
                    </span>
                    <span>-₹{freeGiftSavings} (FREE)</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>{t('Express Courier (Tamil Nadu)', 'விரைவு அஞ்சல் கட்டணம்')}</span>
                  <span className="font-semibold text-[#16382B]">
                    ₹{shippingFee}
                  </span>
                </div>

                <div className="border-t border-[#16382B]/10 pt-1.5 flex justify-between text-xs sm:text-sm font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'செலுத்த வேண்டிய தொகை')}</span>
                  <span className="font-serif-brand text-base sm:text-lg">₹{total}</span>
                </div>
              </div>

              {/* TOTAL SAVINGS CARD */}
              {totalSavings > 0 && (
                <div className="p-2.5 rounded-xl bg-[#E8F1EB] border border-green-200 flex items-center justify-between text-xs text-green-800">
                  <span className="flex items-center gap-1.5 font-bold text-[11px]">
                    <Tag className="w-3.5 h-3.5 text-[#C29043]" />
                    <span>{t(`You are saving ₹${totalSavings} on this order!`, `இந்த ஆர்டரில் மொத்தம் ₹${totalSavings} சேமிக்கிறீர்கள்!`)}</span>
                  </span>
                  <ShieldCheck className="w-4 h-4 text-green-700 flex-shrink-0" />
                </div>
              )}

              <div className="text-center pt-1 pb-2">
                <p className="text-[10px] text-[#8A9B93] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C29043]" />
                  <span>{t('100% Authentic Classical Formulations • Tirunelveli', 'திருநெல்வேலி நேரடி அஞ்சல்')}</span>
                </p>
              </div>
            </>
          )}
        </div>

        {/* 4. COMPACT STICKY BOTTOM CHECKOUT ACTION BAR */}
        {items.length > 0 && (
          <div className="p-3 sm:p-4 pb-[max(env(safe-area-inset-bottom,0px),16px)] bg-white border-t border-[#16382B]/10 space-y-2.5 flex-shrink-0 shadow-lg relative z-10">
            {/* Price & Checkout Row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-[9.5px] uppercase font-bold text-[#8A9B93] block leading-none">
                    {t('Payable', 'தொகை')}:
                  </span>
                  <span className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B]">
                    ₹{total}
                  </span>
                </div>
                {totalSavings > 0 && (
                  <span className="text-[10.5px] text-green-700 font-semibold block leading-tight mt-0.5">
                    {t(`Save ₹${totalSavings}`, `₹${totalSavings} சேமிப்பு`)}
                  </span>
                )}
              </div>

              {/* Primary Checkout CTA */}
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="flex-1 py-3 px-4 sm:px-5 rounded-xl bg-[#16382B] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#204C3B] active:bg-[#112d22] shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>{t('Proceed to Checkout', 'செக்அவுட் செல்லவும்')}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>

            {/* Quick Links Row */}
            <div className="flex items-center justify-between gap-2 pt-0.5 text-[11px]">
              <Link
                href="/cart"
                onClick={closeDrawer}
                className="flex-1 py-1.5 text-center font-semibold text-[#16382B] border border-[#16382B]/20 rounded-lg hover:bg-[#FAF8F5] transition-colors"
              >
                {t('View Full Cart', 'முழு கூடை')}
              </Link>
              <button
                type="button"
                onClick={closeDrawer}
                className="flex-1 py-1.5 text-center font-semibold text-[#3D5A68] hover:text-[#16382B] transition-colors cursor-pointer"
              >
                {t('Continue Shopping', 'தொடர்ந்து வாங்க')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
