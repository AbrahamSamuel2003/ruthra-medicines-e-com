'use client';

import React, { useState } from 'react';
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
  CheckCircle2
} from 'lucide-react';
import { useCart, getProductMRP } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/types/product';

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
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
              'Explore our 20 classical Siddha formulations prepared in Tirunelveli for everyday health and vital longevity.',
              'திருநெல்வேலி பாரம்பரிய முறைப்படி தயாரிக்கப்பட்ட ருத்ரா சித்த மருந்துகளை பார்வையிடுங்கள்.'
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

  // Formulation specific discount style mentions
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
    <div className="w-full bg-[#FAF8F5] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <nav className="text-xs text-[#8A9B93] mb-2 flex items-center gap-1.5 font-medium">
              <Link href="/" className="hover:text-[#16382B] transition-colors">{t('Home', 'முகப்பு')}</Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-[#16382B] transition-colors">{t('Shop', 'மருந்துகள்')}</Link>
              <span>/</span>
              <span className="text-[#16382B] font-semibold">{t('Cart', 'கூடை')}</span>
            </nav>

            <h1 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B]">
              {t('Your Wellness Cart', 'உங்கள் மருந்து கூடை')}
            </h1>
            <p className="text-xs sm:text-sm text-[#3D5A68] mt-1">
              {t(
                'Carefully packed in tamper-evident containers dispatched from Tirunelveli across Tamil Nadu.',
                'திருநெல்வேலியிலிருந்து தமிழ்நாடு முழுவதும் பாதுகாப்பான அஞ்சல் விநியோகம்.'
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-[#8A9B93] hover:text-[#D9534F] font-semibold underline cursor-pointer self-start sm:self-auto"
          >
            {t('Clear Cart', 'கூடையை காலியாக்கு')}
          </button>
        </div>

        {/* Free Shipping Progress Banner with Savings */}
        <div className="p-3.5 sm:p-4 bg-[#E8F1EB] rounded-2xl border border-[#16382B]/10 mb-6 sm:mb-8">
          <div className="flex items-center justify-between text-xs font-semibold text-[#16382B] mb-2">
            <span className="flex items-center gap-2">
              <Truck className={`w-4 h-4 ${subtotal >= freeShippingThreshold ? 'text-green-600' : 'text-[#C29043]'}`} />
              {amountNeededForFreeShipping === 0 ? (
                <span className="text-green-700 font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  {t('Unlocked FREE Delivery Across Tamil Nadu! (Saved ₹40)', 'தமிழ்நாடு முழுவதும் இலவச விநியோகம் தகுதி பெற்றுள்ளீர்கள்! (₹40 சேமிப்பு)')}
                </span>
              ) : (
                <span>
                  {t(`Add ₹${amountNeededForFreeShipping} more for FREE Tamil Nadu Delivery`, `இலவச விநியோகத்திற்கு இன்னும் ₹${amountNeededForFreeShipping} சேர்க்கவும்`)}
                </span>
              )}
            </span>
            <span className={`font-bold ${subtotal >= freeShippingThreshold ? 'text-green-700' : 'text-[#16382B]'}`}>
              {freeShippingProgress}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-white overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                subtotal >= freeShippingThreshold ? 'bg-green-600' : 'bg-[#16382B]'
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Main Cart Grid: Left Items + Right Sticky Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Cart Items List */}
          <div className="lg:col-span-8 bg-white p-4 sm:p-6 lg:p-7 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#16382B]/10 text-xs font-bold text-[#8A9B93] uppercase tracking-wider">
              <span>{t('Formulations in Order', 'மருந்துகள் பட்டியல்')} ({items.length})</span>
              <span>{t('Subtotal', 'தொகை')}</span>
            </div>

            {items.map(({ product, quantity }) => {
              const mrp = getProductMRP(product);
              const unitSavings = mrp - product.price;
              const totalItemSavings = unitSavings * quantity;
              const discountPercent = Math.round((unitSavings / mrp) * 100);
              const itemMultiPackDiscount = quantity >= 2 ? Math.round(product.price * quantity * 0.05) : 0;

              return (
                <div
                  key={product.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 hover:border-[#C29043]/40 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left: Thumbnail & Details */}
                    <div className="flex items-center gap-3.5 flex-1 min-w-0">
                      <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl bg-white p-2 border border-[#16382B]/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={70}
                          height={70}
                          className="object-contain max-h-16"
                        />
                        <span className="absolute bottom-1 left-1 text-[7px] font-bold uppercase tracking-wider px-1 py-0.2 rounded-sm bg-white/95 border border-[#C29043]/30 text-[#16382B]">
                          {product.formulation}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[10.5px] text-[#8A9B93]">
                          <span>{language === 'ta' ? product.packSizeTa : product.packSize}</span>
                          <span>•</span>
                          <span className="text-[#C29043] font-medium">Classical Siddha</span>
                        </div>

                        <Link
                          href={`/product/${product.slug}`}
                          className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B] hover:text-[#C29043] transition-colors block truncate mt-0.5"
                        >
                          {language === 'ta' ? product.tamilName : product.name}
                        </Link>

                        {/* Strikethrough MRP vs Special price badge */}
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="font-serif-brand font-bold text-base text-[#16382B]">
                            ₹{product.price * quantity}
                          </span>
                          <span className="text-xs text-[#8A9B93] line-through">
                            ₹{mrp * quantity}
                          </span>
                          <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                            {discountPercent}% OFF • Save ₹{totalItemSavings}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Quantity controls & Delete */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 border-t sm:border-t-0 border-[#16382B]/10 pt-2.5 sm:pt-0">
                      {/* Quantity Modifier */}
                      <div className="flex items-center border border-[#16382B]/20 rounded-xl bg-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-2 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-[#16382B]">{quantity}</span>
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
                        className="text-gray-400 hover:text-[#D9534F] p-1.5 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Specific Discount Mentions & Volume Tier Offer Banner */}
                  <div className="pt-2 border-t border-[#16382B]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    {/* Formulation Deal Mention */}
                    <div className="flex items-center gap-1.5 text-[11px] text-[#3D5A68]">
                      <Tag className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
                      <span>{getFormulationDiscountLabel(product)}</span>
                    </div>

                    {/* Volume Tier Mention */}
                    {quantity === 1 ? (
                      <div className="inline-flex items-center justify-between gap-2 px-2.5 py-1 rounded-lg bg-[#FFF9F0] border border-[#C29043]/30 text-[11px] text-[#8B5E14]">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3 text-[#C29043]" />
                          <span>{t('Add 1 more box to unlock 5% Duo Regimen Savings', 'இன்னொன்று எடுத்தால் 5% கூடுதல் சேமிப்பு')}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, 2)}
                          className="font-bold text-[#16382B] hover:text-[#C29043] underline cursor-pointer text-[10.5px] whitespace-nowrap"
                        >
                          {t('+ Add 1', '+1 சேர்')}
                        </button>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-50 border border-green-200 text-[11px] text-green-800 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                        <span>{t('5% Duo Regimen Volume Discount applied', '5% சிறப்பு இரட்டை சேமிப்பு கழிவு')} (-₹{itemMultiPackDiscount})</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Bottom Actions Row */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <Link
                href="/shop"
                className="font-semibold text-[#16382B] hover:text-[#C29043] flex items-center gap-1.5 transition-colors"
              >
                <span>← {t('Continue Shopping Formulations', 'தொடர்ந்து மருந்துகளை பார்க்க')}</span>
              </Link>

              <div className="flex items-center gap-2 text-[#8A9B93] text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C29043]" />
                <span>{t('Tamper-proof medical packaging from Tirunelveli', 'திருநெல்வேலி நேரடி அஞ்சல்')}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary Panel (Sticky on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-4">
              <h3 className="font-serif-brand text-lg font-bold text-[#16382B] pb-3 border-b border-[#16382B]/10">
                {t('Order Summary', 'ஆர்டர் விபரம்')}
              </h3>

              {/* Promo / Coupon Code Section */}
              <div className="space-y-2 pb-3 border-b border-[#16382B]/10">
                {couponCode ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-green-50 border border-green-200 text-xs text-green-800">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-green-600" />
                      <span className="font-bold tracking-wider">{couponCode}</span>
                      <span className="text-[11px] text-green-700 font-medium">
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
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={e => setCouponInput(e.target.value)}
                        placeholder={t('Promo Code (e.g. RUTHRA10)', 'கூப்பன் குறியீடு')}
                        className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] uppercase tracking-wider focus:outline-none focus:border-[#16382B]"
                      />
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon()}
                        className="py-2 px-3.5 rounded-xl bg-[#16382B] text-white text-xs font-semibold hover:bg-[#204C3B] cursor-pointer"
                      >
                        {t('Apply', 'பயன்படுத்து')}
                      </button>
                    </div>

                    {couponFeedback && !couponFeedback.success && (
                      <p className="text-[10.5px] text-red-600">{couponFeedback.message}</p>
                    )}

                    <div className="flex flex-wrap items-center gap-1.5 text-[10.5px] text-[#8A9B93]">
                      <span>{t('Try:', 'சலுகை:')}</span>
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon('RUTHRA10')}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer"
                      >
                        RUTHRA10 (10% OFF)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon('SIDDHA25')}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer"
                      >
                        SIDDHA25 (₹25 OFF)
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-2.5 text-xs sm:text-sm text-[#3D5A68]">
                <div className="flex justify-between">
                  <span>{t('Total Items MRP', 'மொத்த அசல் விலை')}</span>
                  <span className="line-through text-[#8A9B93]">₹{mrpSubtotal}</span>
                </div>

                <div className="flex justify-between text-green-700">
                  <span>{t('Pharmacopeia Direct Discount', 'சித்த நேரடி தள்ளுபடி')}</span>
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
                  <span>{t('Tamil Nadu Express Courier', 'அஞ்சல் கட்டணம் (தமிழகம்)')}</span>
                  <span className="font-semibold text-[#16382B]">
                    {shippingFee === 0 ? (
                      <span className="bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded font-bold text-xs">
                        {t('FREE', 'இலவசம்')}
                      </span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#16382B]/10 flex justify-between items-baseline text-base font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'மொத்த தொகை')}</span>
                  <span className="font-serif-brand text-2xl">₹{total}</span>
                </div>
              </div>

              {/* Total Savings Highlight Banner */}
              {totalSavings > 0 && (
                <div className="p-3 rounded-xl bg-[#E8F1EB] border border-green-200 text-xs text-green-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Tag className="w-4 h-4 text-[#C29043]" />
                    <span>{t(`You are saving ₹${totalSavings} on this order!`, `இந்த ஆர்டரில் மொத்தம் ₹${totalSavings} சேமிக்கிறீர்கள்!`)}</span>
                  </div>
                  <p className="text-[10.5px] text-green-700 pl-5 leading-tight">
                    {t(
                      'Includes authentic manufacturer discount, bundle savings, and delivery benefits.',
                      'நேரடி தயாரிப்பாளர் கழிவு மற்றும் இலவச அஞ்சல் சேமிப்பு உட்பட.'
                    )}
                  </p>
                </div>
              )}

              {/* Primary Checkout CTA */}
              <Link
                href="/checkout"
                className="w-full py-3.5 px-6 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-98 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>{t('Proceed to Checkout', 'செக்அவுட் செல்லவும்')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* E-Commerce Support & Delivery Card */}
            <div className="p-4 bg-[#E8F1EB] rounded-2xl border border-[#16382B]/10 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#16382B] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#C29043]" />
                <span>{t('Authentic Siddha Guarantee', '100% தூய சித்த மருந்துகள் உத்தரவாதம்')}</span>
              </div>
              <p className="text-[11px] text-[#3D5A68] leading-relaxed">
                {t(
                  'Small-batch prepared adhering to classical Agathiyar Gunavagadam standards. Dispatched securely with tracking within 24–48 hours.',
                  'அகத்தியர் குணவாகட முறைப்படி பாரம்பரியமாக தயாரிக்கப்பட்டு 24-48 மணி நேரத்திற்குள் அனுப்பப்படும்.'
                )}
              </p>
              <a
                href="https://wa.me/919171508042?text=Vanakkam,%20I%20have%20a%20question%20regarding%20my%20Ruthra%20cart%20order."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#16382B] font-bold underline hover:text-[#C29043]"
              >
                <span>{t('Need Help? Chat on WhatsApp Desk →', 'உதவி தேவையா? வாட்ஸ்அப் தொடர்பு →')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
