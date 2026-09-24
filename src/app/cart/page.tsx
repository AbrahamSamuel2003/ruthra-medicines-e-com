'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Tag,
  Check,
  Gift,
  PackageCheck,
  Percent
} from 'lucide-react';
import { useCart, getProductMRP } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CartPage() {
  const {
    items,
    freeGiftItems,
    paidItemCount,
    totalFreeGiftsSelected,
    freeSlotsEarned,
    freeSlotsRemaining,
    itemsNeededForNextMilestone,
    nextMilestoneCount,
    progressPercent,
    discountPercent,
    discountAmount,
    freeGiftSavings,
    openGiftModal,
    removeFreeGift,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    mrpSubtotal,
    mrpSavings,
    totalSavings,
    shippingFee,
    total
  } = useCart();

  const { language, t } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="w-full bg-[#FAF8F5] min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md bg-white p-8 sm:p-12 rounded-3xl border border-[#16382B]/10 shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8 opacity-60" />
          </div>
          <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            {t('Your Cart is Empty', 'உங்கள் கூடை காலியாக உள்ளது')}
          </h1>
          <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed max-w-xs mx-auto">
            {t(
              'Explore our 176 authentic classical formulations prepared in Tirunelveli for everyday health and vital longevity.',
              'திருநெல்வேலி பாரம்பரிய முறைப்படி தயாரிக்கப்பட்ட 176 ருத்ரா மருந்துகளை பார்வையிடுங்கள்.'
            )}
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#16382B] text-white text-xs sm:text-sm font-semibold hover:bg-[#C29043] shadow-sm transition-all cursor-pointer"
            >
              <span>{t('Explore All Formulations', 'அனைத்து மருந்துகளை பார்க்க')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Breadcrumb & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#16382B]/10 pb-6">
          <div>
            <nav className="text-xs text-[#8A9B93] mb-2 flex items-center gap-1.5">
              <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
              <span>/</span>
              <span className="text-[#16382B] font-semibold">{t('Shopping Cart', 'மருந்து கூடை')}</span>
            </nav>
            <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
              {t('Your Wellness Cart', 'உங்கள் மருந்து கூடை')}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearCart}
              className="text-xs font-semibold text-[#8A9B93] hover:text-[#D9534F] transition-colors cursor-pointer"
            >
              {t('Clear Cart', 'கூடையை காலி செய்')}
            </button>
            <Link
              href="/shop"
              className="px-4 py-2 rounded-xl border border-[#16382B]/20 text-[#16382B] hover:bg-[#E8F1EB] text-xs font-bold transition-colors"
            >
              {t('Continue Shopping', 'தொடர்ந்து வாங்க')}
            </Link>
          </div>
        </div>

        {/* Volume Scheme & Discount Progress Strip */}
        <div className="p-4 bg-[#E8F1EB] rounded-2xl border border-[#16382B]/10 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-semibold text-[#16382B]">
            <span className="flex items-center gap-2">
              {discountPercent > 0 ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-700 text-white text-xs font-bold">
                  <Percent className="w-3 h-3" />
                  {discountPercent}% OFF APPLIED
                </span>
              ) : (
                <Gift className="w-4 h-4 text-[#C29043]" />
              )}
              <span>
                {freeSlotsEarned > 0
                  ? t(`${paidItemCount} Items in cart • ${freeSlotsEarned} FREE Formulation(s) Unlocked!`, `${paidItemCount} மருந்துகள் கூடையில் • ${freeSlotsEarned} இலவச மருந்து தேர்வு தகுதி!`)
                  : t(`${paidItemCount} Items in cart`, `${paidItemCount} மருந்துகள் கூடையில்`)}
              </span>
            </span>

            <span className="font-bold text-xs text-[#16382B]">
              {paidItemCount < 5 && t(`Next: 5 Items (10% OFF + 1 Free)`, `இலக்கு: 5 (10% + 1 இலவசம்)`)}
              {paidItemCount >= 5 && paidItemCount < 30 && t(`Next: 30 Items (20% Bulk OFF)`, `இலக்கு: 30 (20% தள்ளுபடி)`)}
              {paidItemCount >= 30 && paidItemCount < 50 && t(`Next: 50 Items (15 FREE Medicines!)`, `இலக்கு: 50 (15 இலவசம்!)`)}
              {paidItemCount >= 50 && t(`Next Milestone: ${nextMilestoneCount} Items`, `அடுத்த இலக்கு: ${nextMilestoneCount}`)}
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-white overflow-hidden">
            <div
              className="h-full bg-[#16382B] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] text-[#3D5A68]">
            <span>
              {paidItemCount < 5 && t(`Add ${itemsNeededForNextMilestone} more item(s) to unlock 10% OFF and 1 FREE medicine`, `இன்னும் ${itemsNeededForNextMilestone} மருந்து சேர்த்தால் 10% தள்ளுபடி & 1 இலவச மருந்து பெறலாம்`)}
              {paidItemCount >= 5 && paidItemCount < 30 && t(`Add ${itemsNeededForNextMilestone} more for 20% bulk order discount`, `இன்னும் ${itemsNeededForNextMilestone} சேர்த்தால் 20% கூடுதல் தள்ளுபடி`)}
              {paidItemCount >= 30 && paidItemCount < 50 && t(`Add ${itemsNeededForNextMilestone} more to unlock 15 FREE bonus medicines!`, `இன்னும் ${itemsNeededForNextMilestone} சேர்த்தால் 15 இலவச மருந்துகள்!`)}
              {paidItemCount >= 50 && t(`Add ${itemsNeededForNextMilestone} more for next free formulation bonus`, `அடுத்த இலவச மருந்துக்கு இன்னும் ${itemsNeededForNextMilestone} சேர்க்கவும்`)}
            </span>
            <span className="font-bold text-[#16382B]">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* FREE FORMULATION CLAIM BANNER (Only when unclaimed slots exist) */}
        {freeSlotsRemaining > 0 && (
          <div className="p-4 bg-emerald-50/90 rounded-2xl border border-emerald-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-brand font-bold text-sm text-[#16382B]">
                  {t('Free Formulation Bonus Unlocked', 'இலவச மருந்து தகுதி')}
                </h3>
                <p className="text-xs text-emerald-800 mt-0.5">
                  {t(
                    `You have ${freeSlotsRemaining} unclaimed Free Medicine slot(s)! Choose from your purchased formulations for ₹0.00.`,
                    `உங்களுக்கு ${freeSlotsRemaining} இலவச மருந்து தேர்வு செய்ய வாய்ப்புள்ளது! வாங்கிய மருந்துகளிலிருந்தே ₹0.00-க்கு தேர்வு செய்யலாம்.`
                  )}
                </p>
              </div>
            </div>

            <button
              onClick={openGiftModal}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-[#DFB36C]" />
              <span>
                {t(
                  `Select Your Free Formulation (${freeSlotsRemaining} Available)`,
                  `இலவச மருந்தைத் தேர்வு செய்க (${freeSlotsRemaining} உள்ளது)`
                )}
              </span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Items List */}
          <div className="lg:col-span-8 space-y-4">
            {/* Selected Free Gifts */}
            {freeGiftItems.length > 0 && (
              <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-300 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-emerald-700" />
                    <span>{t('Selected Free Bonus Formulations', 'தேர்வு செய்யப்பட்ட இலவச மருந்துகள்')}</span>
                  </span>
                  <button
                    onClick={openGiftModal}
                    className="text-xs font-bold text-emerald-800 underline hover:text-[#16382B] cursor-pointer"
                  >
                    {t('Change / Add', 'மாற்றுக')}
                  </button>
                </div>

                <div className="space-y-2">
                  {freeGiftItems.map(({ product, quantity }) => (
                    <div key={`page-gift-${product.id}`} className="flex items-center justify-between p-3 bg-white rounded-xl border border-emerald-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] p-1 border border-emerald-100 flex items-center justify-center overflow-hidden">
                          <Image
                            src={product.image || '/images/ruthra-icon.png'}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="object-contain max-h-10"
                          />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-emerald-700 text-white">
                            {t('100% Free Bonus', 'இலவச பரிசு')}
                          </span>
                          <h4 className="font-bold text-xs sm:text-sm text-[#16382B] mt-0.5">
                            {language === 'ta' ? product.tamilName : product.name}
                          </h4>
                          <span className="text-[11px] text-[#8A9B93]">
                            {language === 'ta' ? product.packSizeTa : product.packSize}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-emerald-800">
                          ₹0.00 {quantity > 1 && `(×${quantity})`}
                        </span>
                        <button
                          onClick={() => removeFreeGift(product.id)}
                          className="text-gray-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                          title="Remove gift"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Purchased Items List */}
            <div className="bg-white rounded-3xl border border-[#16382B]/10 overflow-hidden shadow-xs">
              <div className="p-4 sm:p-5 border-b border-[#16382B]/10 flex items-center justify-between">
                <span className="font-serif-brand text-sm sm:text-base font-bold text-[#16382B]">
                  {t('Purchased Formulations', 'வாங்கும் மருந்துகள்')} ({paidItemCount})
                </span>
                <span className="text-xs text-[#8A9B93]">Tirunelveli Heritage Batch</span>
              </div>

              <div className="divide-y divide-[#16382B]/10">
                {items.map(({ product, quantity }) => {
                  const mrp = getProductMRP(product);
                  const unitSavings = mrp - product.price;
                  const totalItemSavings = unitSavings * quantity;
                  const discountPercentUnit = Math.round((unitSavings / mrp) * 100);

                  return (
                    <div key={product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        <Link
                          href={`/product/${product.slug}`}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FAF8F5] p-2 border border-[#16382B]/10 flex items-center justify-center flex-shrink-0 overflow-hidden"
                        >
                          <Image
                            src={product.image || '/images/ruthra-icon.png'}
                            alt={product.name}
                            width={64}
                            height={64}
                            className="object-contain max-h-16"
                          />
                        </Link>
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#16382B]/10 text-[#16382B]">
                            {product.formulation}
                          </span>
                          <h3 className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B] truncate mt-1">
                            {language === 'ta' ? product.tamilName : product.name}
                          </h3>
                          <p className="text-xs text-[#8A9B93]">{product.packSize}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-bold text-sm text-[#16382B]">₹{product.price}</span>
                            <span className="text-xs text-[#8A9B93] line-through">₹{mrp}</span>
                            <span className="text-[10px] font-bold text-green-700 bg-green-50 px-1.5 py-0.2 rounded">
                              {discountPercentUnit}% OFF
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#16382B]/5">
                        <div className="flex items-center border border-[#16382B]/20 rounded-xl overflow-hidden bg-[#FAF8F5]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="p-2 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-[#16382B]">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="p-2 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right min-w-20">
                          <span className="font-bold text-sm sm:text-base text-[#16382B] block">
                            ₹{product.price * quantity}
                          </span>
                          <span className="text-[10px] text-green-700 block">
                            Save ₹{totalItemSavings}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(product.id)}
                          className="text-gray-400 hover:text-red-600 p-1.5 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Financial Breakdown & Checkout CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <h3 className="font-serif-brand text-base font-bold text-[#16382B] pb-3 border-b border-[#16382B]/10">
                {t('Order Summary', 'ஆர்டர் விபரம்')}
              </h3>

              <div className="space-y-2.5 text-xs text-[#3D5A68]">
                <div className="flex justify-between items-center">
                  <span>{t('Items Subtotal', 'பொருட்களின் மொத்த தொகை')}</span>
                  <span className="font-semibold text-[#16382B]">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between items-center text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                    <span className="flex items-center gap-1.5">
                      <Percent className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{t(`${discountPercent}% Volume Discount`, `${discountPercent}% சிறப்பு தள்ளுபடி`)}</span>
                    </span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>{t('Express Delivery (Tamil Nadu)', 'அஞ்சல் கட்டணம்')}</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs border border-emerald-200">
                    {t('FREE (₹0)', 'இலவசம் (₹0)')}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#16382B]/10 flex justify-between items-center text-base font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'செலுத்த வேண்டிய தொகை')}</span>
                  <span className="font-serif-brand text-xl text-[#16382B]">₹{total}</span>
                </div>
              </div>

              {totalSavings > 0 && (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-semibold space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <Tag className="w-3.5 h-3.5 text-[#C29043]" />
                      <span>{t(`Total Savings: ₹${totalSavings}`, `மொத்த சேமிப்பு: ₹${totalSavings}`)}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                      {t('Best Value', 'சிறந்த சேமிப்பு')}
                    </span>
                  </div>
                  {totalFreeGiftsSelected > 0 && (
                    <p className="text-[11px] text-emerald-800 font-medium pt-1 border-t border-emerald-200/60 flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span>{t(`Includes ${totalFreeGiftsSelected} Free Bonus Medicine(s)`, `${totalFreeGiftsSelected} இலவச சித்த மருந்துகள் சேர்க்கப்பட்டுள்ளன`)}</span>
                    </p>
                  )}
                </div>
              )}

              <Link
                href="/checkout"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#16382B] hover:bg-[#204C3B] text-white font-serif-brand font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>{t('Proceed to Checkout', 'செக்அவுட் செல்லவும்')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
