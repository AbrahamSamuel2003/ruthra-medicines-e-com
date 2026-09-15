'use client';

import React, { useState, useEffect } from 'react';
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
  CheckCircle2
} from 'lucide-react';
import { useCart, getProductMRP } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/types/product';

export default function CartDrawer() {
  const pathname = usePathname();
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    itemCount,
    subtotal,
    mrpSubtotal,
    mrpSavings,
    multiPackSavings,
    couponCode,
    couponDiscount,
    applyCoupon,
    removeCoupon,
    totalSavings,
    shippingFee,
    total,
    freeShippingThreshold,
    amountNeededForFreeShipping
  } = useCart();

  const { language, t } = useLanguage();
  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  // Automatically close cart overlay whenever pathname/route changes
  useEffect(() => {
    if (isDrawerOpen) {
      closeDrawer();
    }
  }, [pathname]);

  if (!isDrawerOpen) return null;

  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (codeToApply?: string) => {
    const code = codeToApply || couponInput;
    if (!code.trim()) return;
    const res = applyCoupon(code);
    setCouponFeedback(res);
    if (res.success) {
      setCouponInput('');
    }
  };

  // Helper for formulation-based discount label
  const getFormulationDiscountLabel = (product: Product) => {
    switch (product.formulation) {
      case 'Chooranam':
        return language === 'ta' ? 'பாரம்பரிய சூரணம் • நேரடி தயாரிப்பு சலுகை' : 'Siddha Sachet Deal • Direct Apothecary Savings';
      case 'Kudineer':
        return language === 'ta' ? 'சுத்தி முறை குடிநீர் • பிரத்யேக தள்ளுபடி' : 'Shodhana Kudineer • Pure Decoction Deal';
      case 'Thailam':
        return language === 'ta' ? 'செக்கில் காய்ச்சிய தைலம் • தயாரிப்பாளர் விலை' : 'Cold-Pressed Medicated Oil • Maker Direct';
      case 'Syrups':
        return language === 'ta' ? 'அடர்ந்த கஷாயம் • குடும்ப ஆரோக்கிய சலுகை' : 'Concentrated Kashayam • Vitality Offer';
      case 'Drops':
        return language === 'ta' ? 'நறுமண துளி மருந்து • சிறப்பு சலுகை' : 'Volatile Steam Inhalant • Direct Deal';
      default:
        return language === 'ta' ? 'சித்த மருந்தக சலுகை' : 'Siddha Pharmacopeia Deal';
    }
  };

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
                {itemCount} {t('formulation(s) selected', 'மருந்துகள் சேர்க்கப்பட்டுள்ளன')}
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

        {/* 2. FREE DELIVERY PROGRESS BAR */}
        <div className="px-3.5 py-2.5 bg-[#E8F1EB]/80 border-b border-[#16382B]/10 flex-shrink-0">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium text-[#16382B]">
            <span className="flex items-center gap-1.5 text-[11.5px] truncate mr-2">
              <Truck className={`w-3.5 h-3.5 flex-shrink-0 ${subtotal >= freeShippingThreshold ? 'text-green-600' : 'text-[#C29043]'}`} />
              {amountNeededForFreeShipping === 0 ? (
                <span className="text-green-700 font-bold flex items-center gap-1 truncate">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{t('Unlocked FREE Tamil Nadu Delivery! (Saved ₹40)', 'இலவச அஞ்சல் தகுதி! (₹40 சேமிப்பு)')}</span>
                </span>
              ) : (
                <span className="truncate">
                  {t(`Add ₹${amountNeededForFreeShipping} more for Free Delivery`, `இலவச அஞ்சலுக்கு இன்னும் ₹${amountNeededForFreeShipping} சேர்க்கவும்`)}
                </span>
              )}
            </span>
            <span className={`font-bold text-xs ${subtotal >= freeShippingThreshold ? 'text-green-700' : 'text-[#16382B]'}`}>
              {freeShippingProgress}%
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                subtotal >= freeShippingThreshold ? 'bg-green-600' : 'bg-[#16382B]'
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* 3. SCROLLABLE CONTENT AREA (Cart Items + Promo Code + Order Breakdown) */}
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
                  'Explore Ruthra’s authentic Siddha formulations formulated in Tirunelveli.',
                  'திருநெல்வேலியில் பாரம்பரிய முறைப்படி தயாரிக்கப்படும் ருத்ரா சித்த மருந்துகளை ஆராயுங்கள்.'
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
              {/* CART ITEMS LIST */}
              <div className="space-y-2.5">
                {items.map(({ product, quantity }) => {
                  const mrp = getProductMRP(product);
                  const unitSavings = mrp - product.price;
                  const totalItemSavings = unitSavings * quantity;
                  const discountPercent = Math.round((unitSavings / mrp) * 100);
                  const itemMultiPackDiscount = quantity >= 2 ? Math.round(product.price * quantity * 0.05) : 0;

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
                            src={product.image}
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

                      {/* Product-Specific Deal & Duo Volume Mentions */}
                      <div className="pt-1.5 border-t border-[#16382B]/5 space-y-1">
                        {/* Formulation Deal Tag */}
                        <div className="flex items-center gap-1 text-[9.5px] text-[#3D5A68] bg-[#FAF8F5] px-2 py-0.5 rounded-md">
                          <Tag className="w-2.5 h-2.5 text-[#C29043] flex-shrink-0" />
                          <span className="truncate">{getFormulationDiscountLabel(product)}</span>
                        </div>

                        {/* Multi-Pack Volume Savings Notice */}
                        {quantity === 1 ? (
                          <div className="flex items-center justify-between text-[10px] bg-[#FFF9F0] border border-[#C29043]/30 px-2 py-0.5 rounded-md">
                            <span className="text-[#8B5E14] flex items-center gap-1 truncate">
                              <Tag className="w-2.5 h-2.5 text-[#C29043] flex-shrink-0" />
                              <span>{t('Add 1 more for extra 5% Duo Savings', 'இன்னொன்று எடுத்தால் 5% கூடுதல் சேமிப்பு')}</span>
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, 2)}
                              className="font-bold text-[#16382B] hover:text-[#C29043] underline cursor-pointer text-[9.5px] whitespace-nowrap ml-1.5"
                            >
                              {t('+ Add 1', '+1 சேர்')}
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between text-[10px] bg-green-50/90 border border-green-200 px-2 py-0.5 rounded-md text-green-800">
                            <span className="flex items-center gap-1 font-medium truncate">
                              <CheckCircle2 className="w-2.5 h-2.5 text-green-600 flex-shrink-0" />
                              <span>{t('5% Duo Savings Applied', '5% கூடுதல் சேமிப்பு')}</span>
                            </span>
                            <span className="font-bold text-green-700 whitespace-nowrap ml-1">
                              -₹{itemMultiPackDiscount}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Quantity Modifier Row */}
                      <div className="flex items-center justify-between pt-0.5">
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

              {/* PROMO CODE SECTION (Placed inside scrollable view) */}
              <div className="p-3 bg-white rounded-xl border border-[#16382B]/10 space-y-2 mt-3">
                {couponCode ? (
                  <div className="flex items-center justify-between p-2 rounded-lg bg-green-50 border border-green-200 text-xs text-green-800">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-green-600" />
                      <span className="font-bold tracking-wider">{couponCode}</span>
                      <span className="text-[10px] text-green-700 font-medium">
                        ({couponCode === 'RUTHRA10' ? '10% OFF' : couponCode === 'SIDDHA25' ? '₹25 OFF' : 'Free Shipping'})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
                    >
                      {t('Remove', 'நீக்கு')}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={e => setCouponInput(e.target.value)}
                        placeholder={t('Promo Code (e.g. RUTHRA10)', 'கூப்பன் குறியீடு')}
                        className="flex-1 px-2.5 py-1.5 text-xs rounded-lg border border-[#16382B]/20 bg-[#FAF8F5] uppercase tracking-wider focus:outline-none focus:border-[#16382B]"
                      />
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon()}
                        className="py-1.5 px-3 rounded-lg bg-[#16382B] text-white text-xs font-semibold hover:bg-[#204C3B] cursor-pointer"
                      >
                        {t('Apply', 'பயன்படுத்து')}
                      </button>
                    </div>

                    {couponFeedback && !couponFeedback.success && (
                      <p className="text-[10px] text-red-600">{couponFeedback.message}</p>
                    )}

                    <div className="flex items-center gap-1.5 text-[9.5px] text-[#8A9B93]">
                      <span>{t('Try:', 'சலுகை:')}</span>
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon('RUTHRA10')}
                        className="px-1.5 py-0.5 rounded bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer"
                      >
                        RUTHRA10 (10% OFF)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon('SIDDHA25')}
                        className="px-1.5 py-0.5 rounded bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer"
                      >
                        SIDDHA25 (₹25 OFF)
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* ITEMIZED FINANCIAL BREAKDOWN (In scrollable area) */}
              <div className="p-3 bg-white rounded-xl border border-[#16382B]/10 space-y-1.5 text-xs text-[#3D5A68]">
                <div className="flex justify-between font-bold text-[#16382B] pb-1 border-b border-[#16382B]/10 text-[11px] uppercase tracking-wider">
                  <span>{t('Bill Details', 'கட்டண விபரம்')}</span>
                  <span className="text-[#8A9B93] font-normal normal-case">{itemCount} items</span>
                </div>

                <div className="flex justify-between">
                  <span>{t('Items MRP Total', 'மொத்த அசல் விலை')}</span>
                  <span className="line-through text-[#8A9B93]">₹{mrpSubtotal}</span>
                </div>

                <div className="flex justify-between text-green-700">
                  <span>{t('Direct Siddha Discount', 'சித்த நேரடி தள்ளுபடி')}</span>
                  <span className="font-semibold">-₹{mrpSavings}</span>
                </div>

                {multiPackSavings > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>{t('Multi-Pack Duo Savings (5%)', 'இரட்டை பொட்டல சலுகை')}</span>
                    <span className="font-semibold">-₹{multiPackSavings}</span>
                  </div>
                )}

                {couponDiscount > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>{t('Coupon Discount', 'கூப்பன் கழிவு')}</span>
                    <span className="font-semibold">-₹{couponDiscount}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>{t('Estimated Shipping (Tamil Nadu)', 'அஞ்சல் கட்டணம்')}</span>
                  <span className="font-semibold text-[#16382B]">
                    {shippingFee === 0 ? (
                      <span className="text-green-700 font-bold uppercase text-[10px] bg-green-50 border border-green-200 px-1.5 py-0.2 rounded">
                        {t('FREE', 'இலவசம்')}
                      </span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="border-t border-[#16382B]/10 pt-1.5 flex justify-between text-xs sm:text-sm font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'செலுத்த வேண்டிய தொகை')}</span>
                  <span className="font-serif-brand text-base sm:text-lg">₹{total}</span>
                </div>
              </div>

              {/* TOTAL SAVINGS CARD (In scrollable view) */}
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
                  <span>{t('100% Authentic Siddha Pharmacopeia • Tirunelveli', 'திருநெல்வேலி நேரடி அஞ்சல்')}</span>
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
