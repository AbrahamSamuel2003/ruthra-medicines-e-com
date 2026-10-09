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
  Gift,
  PackageCheck,
  Percent
} from 'lucide-react';
import { 
  useCart, 
  getProductMRP, 
  calculateItemDiscountPercent, 
  calculateItemFreeGifts,
  getItemNextMilestone 
} from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CartPage() {
  const {
    items,
    freeGiftItems,
    paidItemCount,
    totalFreeGiftsSelected,
    freeSlotsEarned,
    freeSlotsRemaining,
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
              'Explore our authentic classical formulations prepared in Tirunelveli for everyday health and vital longevity.',
              'திருநெல்வேலி பாரம்பரிய முறைப்படி தயாரிக்கப்பட்ட ருத்ரா மருந்துகளை பார்வையிடுங்கள்.'
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
        <div className="p-4 bg-[#E8F1EB] rounded-2xl border border-[#16382B]/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[#16382B]">
            <span className="flex items-center gap-2">
              {discountAmount > 0 ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-700 text-white text-xs font-bold">
                  <Percent className="w-3 h-3" />
                  {discountPercent}% {t('Volume Discount Applied', 'தள்ளுபடி உண்டு')}
                </span>
              ) : (
                <Gift className="w-4 h-4 text-[#C29043]" />
              )}
              <span>
                {freeSlotsEarned > 0
                  ? t(`${paidItemCount} Items in cart • ${freeSlotsEarned} FREE Formulation(s) Unlocked!`, `${paidItemCount} மருந்துகள் கூடையில் • ${freeSlotsEarned} இலவச மருந்து தேர்வு தகுதி!`)
                  : t('Buy 5+ of any formulation for 10% OFF + 1 FREE Bonus Medicine', '5 அல்லது அதற்கு மேல் வாங்கினால் 10% + 1 இலவசம்')}
              </span>
            </span>

            {freeSlotsEarned > 0 && (
              <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-200">
                <span>{t('Offer Active', 'சலுகை செயல்படுகிறது')}</span>
              </span>
            )}
          </div>

          <p className="text-[11px] text-[#4A6357]">
            {t(
              'Per-product bulk savings: 5–29 units = 10% OFF + 1–5 Free Bonus | 30+ units = 20% OFF + 6+ Free Bonus | 50+ units = 20% OFF + 15+ Free Bonus',
              'ஒவ்வொரு மருந்தின் எண்ணிக்கைக்கும்: 5-29 = 10% தள்ளுபடி + 1-5 இலவசம் | 30+ = 20% தள்ளுபடி + 6+ இலவசம் | 50+ = 20% தள்ளுபடி + 15+ இலவசம்'
            )}
          </p>
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
              type="button"
              onClick={openGiftModal}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer flex-shrink-0"
            >
              <Gift className="w-4 h-4 text-[#DFB36C]" />
              <span>
                {t(
                  `Claim ${freeSlotsRemaining} Free Medicine(s)`,
                  `${freeSlotsRemaining} இலவச மருந்தை தேர்வு செய்க`
                )}
              </span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {/* CLAIMED FREE BONUS ITEMS */}
            {freeGiftItems.length > 0 && (
              <div className="bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-300 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                  <div className="flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-emerald-700" />
                    <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                      {t('Selected Free Bonus Medicines', 'தேர்வு செய்யப்பட்ட இலவச மருந்துகள்')}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={openGiftModal}
                    className="text-xs font-bold text-[#16382B] hover:text-[#C29043] underline cursor-pointer"
                  >
                    {t('Change Selection', 'தேர்வை மாற்றுக')}
                  </button>
                </div>

                <div className="divide-y divide-emerald-200/50">
                  {freeGiftItems.map(({ product, quantity }) => (
                    <div key={`page-gift-${product.id}`} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-14 h-14 relative bg-white rounded-xl p-1 border border-emerald-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <Image
                            src={product.image || '/images/ruthra-icon.png'}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="object-contain max-h-12"
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-700 text-white">
                            {t('100% Free Bonus', 'இலவச பரிசு')}
                          </span>
                          <h4 className="font-serif-brand font-bold text-sm text-[#16382B] truncate mt-1">
                            {language === 'ta' ? product.tamilName : product.name}
                          </h4>
                          <span className="text-xs font-bold text-emerald-800 block mt-0.5">
                            ₹0.00 {quantity > 1 && `(×${quantity} units)`}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFreeGift(product.id)}
                        className="text-gray-400 hover:text-red-600 p-2 transition-colors cursor-pointer"
                        title={t('Remove gift', 'இலவச மருந்தை நீக்கு')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAID CART ITEMS */}
            <div className="bg-white rounded-2xl border border-[#16382B]/10 shadow-xs divide-y divide-[#16382B]/10 overflow-hidden">
              {items.map(({ product, quantity }) => {
                const mrp = getProductMRP(product);
                const itemDiscountPercent = calculateItemDiscountPercent(quantity);
                const itemFreeGifts = calculateItemFreeGifts(quantity);
                const itemMilestone = getItemNextMilestone(quantity);
                
                const lineTotalBeforeDiscount = product.price * quantity;
                const itemDiscountAmt = Math.round((lineTotalBeforeDiscount * itemDiscountPercent) / 100);
                const finalLineTotal = lineTotalBeforeDiscount - itemDiscountAmt;

                return (
                  <div key={product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#FAF8F5]/50 transition-colors">
                    <div className="flex items-center gap-4 min-w-0">
                      <Link
                        href={`/product/${product.slug}`}
                        className="w-16 h-16 sm:w-20 sm:h-20 relative bg-[#FAF8F5] rounded-xl p-2 border border-[#16382B]/10 flex-shrink-0 flex items-center justify-center overflow-hidden group"
                      >
                        <Image
                          src={product.image || '/images/ruthra-icon.png'}
                          alt={product.name}
                          width={64}
                          height={64}
                          className="object-contain max-h-16 group-hover:scale-105 transition-transform"
                        />
                      </Link>

                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-[#8A9B93]">
                          {product.formulation} • {language === 'ta' ? product.packSizeTa : product.packSize}
                        </span>
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B] hover:text-[#C29043] transition-colors truncate">
                            {language === 'ta' ? product.tamilName : product.name}
                          </h3>
                        </Link>
                        
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B]">
                            ₹{finalLineTotal}
                          </span>
                          {itemDiscountAmt > 0 && (
                            <span className="text-xs text-[#8A9B93] line-through">
                              ₹{lineTotalBeforeDiscount}
                            </span>
                          )}
                          {itemDiscountPercent > 0 && (
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                              {itemDiscountPercent}% OFF • Save ₹{itemDiscountAmt}
                            </span>
                          )}
                        </div>

                        {/* Item-Level Buying Progress Structure (Matching Screenshot) */}
                        <div className="mt-2.5 p-2.5 rounded-xl bg-[#E8F1EB]/80 border border-[#16382B]/10 space-y-1.5 max-w-md">
                          {/* Top Status Row */}
                          <div className="flex items-center justify-between gap-1 text-[11px] leading-tight">
                            <div className="flex items-center gap-1.5 min-w-0">
                              {itemDiscountPercent > 0 ? (
                                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-sm bg-emerald-800 text-white font-bold text-[9.5px] flex-shrink-0">
                                  <Percent className="w-2.5 h-2.5" />
                                  <span>{itemDiscountPercent}% OFF</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-gray-200 text-gray-700 font-bold text-[9.5px] flex-shrink-0">
                                  <span>0% OFF</span>
                                </span>
                              )}
                              <span className="font-bold text-[#16382B] truncate">
                                {itemFreeGifts > 0 
                                  ? t(`${itemFreeGifts} FREE Bonus Medicine(s) Unlocked`, `${itemFreeGifts} இலவச மருந்து தகுதி`)
                                  : t('1 FREE Bonus Medicine Unlocked at 5+', '5+ இல் 1 இலவச மருந்து')}
                              </span>
                            </div>

                            <span className="text-[#3D5A68] text-[10px] font-medium whitespace-nowrap flex-shrink-0">
                              {quantity < 30 ? 'Next: 30 Items (20% OFF)' : quantity < 50 ? 'Next: 50 Items (15 FREE)' : 'Mega Bulk Active'}
                            </span>
                          </div>

                          {/* Progress Bar Track */}
                          <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-[#16382B]/10">
                            <div 
                              className="h-full bg-[#16382B] rounded-full transition-all duration-300"
                              style={{
                                width: `${
                                  quantity < 5 
                                    ? Math.round((quantity / 5) * 100) 
                                    : quantity < 30 
                                      ? Math.min(100, Math.round((quantity / 30) * 100))
                                      : quantity < 50
                                        ? Math.min(100, Math.round((quantity / 50) * 100))
                                        : 100
                                }%`
                              }}
                            />
                          </div>

                          {/* Bottom Context Row */}
                          <div className="flex items-center justify-between text-[10.5px] text-[#3D5A68]">
                            <span className="truncate">
                              {quantity < 5 
                                ? t(`Add ${5 - quantity} more for 10% bulk discount`, `இன்னும் ${5 - quantity} சேர்த்தால் 10% தள்ளுபடி`)
                                : quantity < 30
                                  ? t(`Add ${30 - quantity} more for 20% bulk discount`, `இன்னும் ${30 - quantity} சேர்த்தால் 20% தள்ளுபடி`)
                                  : quantity < 50
                                    ? t(`Add ${50 - quantity} more for Mega Bulk (15 FREE)`, `இன்னும் ${50 - quantity} சேர்த்தால் 15 இலவசம்`)
                                    : t('Mega Bulk Tier Active • +1 Free / 5 Units', 'மெகா பல்க் தகுதி')}
                            </span>
                            <span className="font-bold text-[#16382B] ml-1 flex-shrink-0">
                              {quantity < 5 ? '10%' : quantity < 30 ? '20%' : quantity < 50 ? '20%' : 'MAX'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#16382B]/10">
                      <div className="flex items-center border border-[#16382B]/20 rounded-xl overflow-hidden bg-[#FAF8F5]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-2 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs sm:text-sm font-semibold text-[#16382B]">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-2 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="text-gray-400 hover:text-[#D9534F] p-2 transition-colors cursor-pointer"
                        title={t('Remove from cart', 'நீக்கு')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Order Summary & Checkout Action */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-4">
              <h2 className="font-serif-brand font-bold text-base text-[#16382B] border-b border-[#16382B]/10 pb-3">
                {t('Order Summary', 'கட்டண விவரம்')}
              </h2>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#3D5A68]">
                <div className="flex justify-between items-center">
                  <span>{t('Items Subtotal', 'பொருட்களின் தொகை')} ({paidItemCount} items)</span>
                  <span className="font-semibold text-[#16382B]">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between items-center text-emerald-800 font-bold bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                    <span className="flex items-center gap-1.5">
                      <Percent className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{t('Volume Scheme Discount', 'சிறப்பு தள்ளுபடி')}</span>
                    </span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>{t('Express Courier (Tamil Nadu)', 'விரைவு அஞ்சல் கட்டணம்')}</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs border border-emerald-200">
                    {t('FREE (₹0)', 'இலவசம் (₹0)')}
                  </span>
                </div>

                <div className="border-t border-[#16382B]/10 pt-3 flex justify-between items-center text-base sm:text-lg font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'செலுத்த வேண்டிய தொகை')}</span>
                  <span className="font-serif-brand text-xl text-[#16382B]">₹{total}</span>
                </div>
              </div>

              {totalSavings > 0 && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-semibold space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <Tag className="w-4 h-4 text-[#C29043]" />
                      <span>{t(`Total Savings: ₹${totalSavings}`, `மொத்த சேமிப்பு: ₹${totalSavings}`)}</span>
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                </div>
              )}

              <Link
                href="/checkout"
                className="w-full py-3.5 px-6 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:bg-[#112d22] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>{t('Proceed to Checkout', 'செக்அவுட் செல்லவும்')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#8A9B93] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C29043]" />
                  <span>{t('100% Authentic Classical Formulations • Tirunelveli', 'திருநெல்வேலி நேரடி அஞ்சல்')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
