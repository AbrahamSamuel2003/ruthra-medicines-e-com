'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Tag,
  Gift,
  Zap,
  Percent,
  Truck,
  CheckCircle2,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { BUNDLES, PRODUCTS } from '@/data/products';

export default function OffersPage() {
  const { language, t } = useLanguage();
  const { addItem, applyCoupon, couponCode, openDrawer, showToast } = useCart();

  const handleAddBundle = (bundle: typeof BUNDLES[0]) => {
    // Add all products in the bundle
    const bundleProducts = PRODUCTS.filter(p => bundle.productSlugs.includes(p.slug));
    bundleProducts.forEach(prod => {
      addItem(prod, 1);
    });
    showToast(`Added ${bundle.title} combo to cart!`);
    openDrawer();
  };

  const handleCopyCoupon = (code: string) => {
    applyCoupon(code);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
  };

  const activeCoupons = [
    {
      code: 'RUTHRA10',
      titleEn: '10% Inaugural Siddha Discount',
      titleTa: '10% தொடக்க கால சிறப்பு தள்ளுபடி',
      descEn: 'Enjoy 10% instant discount across your entire cart on classical Siddha herbal formulations.',
      descTa: 'அனைத்து சித்த மருந்து ஆர்டர்களுக்கும் உடனடி 10% கட்டண தள்ளுபடி.',
      badgeEn: 'Best Value',
      badgeTa: 'சிறந்த சலுகை',
      minSpend: 'No minimum',
    },
    {
      code: 'SIDDHA25',
      titleEn: '₹25 Wellness Care Voucher',
      titleTa: '₹25 மூலிகை நல்வாழ்வு வவுச்சர்',
      descEn: 'Flat ₹25 off on your order. Perfect for trial of Chooranam sachets and classical Thailams.',
      descTa: 'உங்கள் மொத்த ஆர்டரில் ₹25 நேரடி தள்ளுபடி.',
      badgeEn: 'Flat Off',
      badgeTa: 'நேரடி தள்ளுபடி',
      minSpend: 'Min ₹200',
    },
    {
      code: 'TNEXPRESS',
      titleEn: 'Free Tamil Nadu Express Shipping',
      titleTa: 'இலவச தமிழ்நாடு விரைவு அஞ்சல்',
      descEn: 'Free doorstep courier dispatch from Tirunelveli across all districts in Tamil Nadu.',
      descTa: 'திருநெல்வேலியிலிருந்து தமிழகத்தின் அனைத்து மாவட்டங்களுக்கும் இலவச விரைவு அஞ்சல்.',
      badgeEn: 'Free Delivery',
      badgeTa: 'இலவச டெலிவரி',
      minSpend: 'All Orders',
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-20">
      {/* Top Hero Banner */}
      <section className="bg-[#16382B] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C29043_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29043]/40 text-[#DFB36C] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C29043]" />
            <span>{t('Authentic Siddha Savings • Tirunelveli', 'சித்த மருத்துவ சிறப்பு சலுகைகள்')}</span>
          </div>

          <h1 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('Special Offers & Value Bundles', 'சிறப்பு சலுகைகள் & மூலிகை தொகுப்புகள்')}
          </h1>

          <p className="text-sm sm:text-base text-[#DFB36C]/90 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Save on classical Chooranam sachets, Kudineer decoctions, and Thailam medicated oils with curated treatment kits and active promo coupons.',
              'பாரம்பரிய சூரணம், குடிநீர் மற்றும் தைலங்களை சிறப்பு தள்ளுபடி விலையிலும் ஒருங்கிணைந்த தொகுப்புகளாகவும் பெற்றிடுங்கள்.'
            )}
          </p>
        </div>
      </section>

      {/* 3 Core Value Props Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Percent className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('5% Multi-Pack Savings', '5% கூடுதல் சலுகை')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('Buy 2 or more of any item & save 5% automatically', '2 அல்லது அதற்கு மேற்பட்ட எண்ணிக்கையில் 5% சேமிப்பு')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('Free Tamil Nadu Shipping', 'இலவச அஞ்சல் விநியோகம்')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('Automatic free delivery on orders above ₹500', '₹500க்கு மேற்பட்ட ஆர்டர்களுக்கு இலவச டெலிவரி')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('Save up to 20% on Combos', 'தொகுப்புகளில் 20% வரை சேமிப்பு')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('Curated internal & external wellness bundles', 'உள் மற்றும் வெளிப்புற நலனுக்கான மருத்துவ சேர்க்கைகள்')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Section 1: Active Discount Coupon Codes */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#16382B]/10 pb-3">
            <div className="flex items-center gap-2.5">
              <Tag className="w-5 h-5 text-[#C29043]" />
              <h2 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                {t('Active Promo Codes & Vouchers', 'செயலில் உள்ள கூப்பன் குறியீடுகள்')}
              </h2>
            </div>
            <span className="text-xs text-[#8A9B93] hidden sm:inline">
              {t('Click coupon to apply instantly', 'உடனடியாக பயன்படுத்த கிளிக் செய்யவும்')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {activeCoupons.map((coupon, idx) => {
              const isApplied = couponCode === coupon.code;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between bg-white relative overflow-hidden ${
                    isApplied
                      ? 'border-[#25D366] ring-2 ring-[#25D366]/20 shadow-md'
                      : 'border-[#16382B]/15 hover:border-[#C29043] shadow-xs'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#E8F1EB] text-[#16382B]">
                        {language === 'ta' ? coupon.badgeTa : coupon.badgeEn}
                      </span>
                      <span className="text-[11px] font-semibold text-[#8A9B93]">
                        {coupon.minSpend}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-[#FAF8F5] p-2.5 rounded-xl border border-dashed border-[#16382B]/20">
                      <span className="font-mono font-bold text-base text-[#16382B] tracking-wider">
                        {coupon.code}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyCoupon(coupon.code)}
                        className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          isApplied
                            ? 'bg-[#25D366] text-white'
                            : 'bg-[#16382B] text-[#DFB36C] hover:bg-[#204C3B]'
                        }`}
                      >
                        {isApplied ? t('Applied ✓', 'சேர்க்கப்பட்டது ✓') : t('Apply Code', 'பயன்படுத்து')}
                      </button>
                    </div>

                    <h3 className="font-serif-brand font-bold text-sm text-[#16382B] pt-1">
                      {language === 'ta' ? coupon.titleTa : coupon.titleEn}
                    </h3>
                    <p className="text-xs text-[#3D5A68] leading-relaxed">
                      {language === 'ta' ? coupon.descTa : coupon.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Curated Wellness Combos & Regimens */}
        <section id="combos" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#16382B]/10 pb-3 gap-2">
            <div className="flex items-center gap-2.5">
              <Gift className="w-5 h-5 text-[#C29043]" />
              <div>
                <h2 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                  {t('Synergistic Wellness Combos', 'ஒருங்கிணைந்த மூலிகை தொகுப்புகள்')}
                </h2>
                <p className="text-xs text-[#3D5A68] mt-0.5">
                  {t('Formulated combinations delivering complete internal & external relief', 'முழுமையான நலம் தரும் பாரம்பரிய சித்த கூட்டு மருந்துகள்')}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-[#16382B] bg-[#E8F1EB] px-3 py-1 rounded-full self-start sm:self-auto">
              {t('Save up to ₹110 / kit', 'தொகுப்புக்கு ₹110 வரை சேமிப்பு')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUNDLES.map(bundle => {
              const bundleProducts = PRODUCTS.filter(p => bundle.productSlugs.includes(p.slug));
              return (
                <div
                  key={bundle.id}
                  className="p-6 rounded-3xl bg-white border border-[#16382B]/15 hover:border-[#C29043] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#E8F1EB] text-[#16382B]">
                        {bundle.badge}
                      </span>
                      <span className="text-xs font-bold text-[#16382B] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#16382B]/15">
                        {t(`Save ₹${bundle.savings}`, `₹${bundle.savings} சேமிப்பு`)}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                        {language === 'ta' ? bundle.titleTa : bundle.title}
                      </h3>
                      <p className="text-xs text-[#C29043] font-semibold mt-0.5">
                        {language === 'ta' ? bundle.subtitleTa : bundle.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#264653] leading-relaxed">
                      {language === 'ta' ? bundle.descriptionTa : bundle.description}
                    </p>

                    {/* Included Products List */}
                    <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#16382B]/10 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A9B93] block">
                        {t('Kit Contains Formulations:', 'தொகுப்பில் உள்ள மருந்துகள்:')}
                      </span>
                      <div className="space-y-1.5">
                        {bundleProducts.map(item => (
                          <Link
                            key={item.id}
                            href={`/product/${item.slug}`}
                            className="flex items-center justify-between text-xs text-[#16382B] hover:text-[#C29043] group/item py-0.5"
                          >
                            <span className="flex items-center gap-1.5 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C29043]" />
                              <span>{language === 'ta' ? item.tamilName : item.name}</span>
                              <span className="text-[10px] text-[#8A9B93]">({item.packSize})</span>
                            </span>
                            <span className="text-[11px] font-bold text-[#3D5A68]">
                              ₹{item.price}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart Action */}
                  <div className="pt-5 mt-5 border-t border-[#16382B]/10 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#16382B]">
                          ₹{bundle.bundlePrice}
                        </span>
                        <span className="text-sm line-through text-[#8A9B93]">
                          ₹{bundle.regularPrice}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#25D366] font-bold block">
                        {t(`Instant ${Math.round((bundle.savings / bundle.regularPrice) * 100)}% combo discount`, `உடனடி ${Math.round((bundle.savings / bundle.regularPrice) * 100)}% தள்ளுபடி`)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddBundle(bundle)}
                      className="px-4 py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-transform active:scale-95 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#DFB36C]" />
                      <span>{t('Add Combo to Cart', 'கூடையில் சேர்க்க')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Direct WhatsApp Bulk or Customized Care Order */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#E8F1EB] border border-[#16382B]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B]">
              {t('Need Custom Siddha Prescription or Bulk Quantities?', 'தனிப்பயன் மருந்து அல்லது மொத்த ஆர்டர் தேவையா?')}
            </h3>
            <p className="text-xs sm:text-sm text-[#3D5A68] max-w-xl leading-relaxed">
              {t(
                'Connect directly with our Tirunelveli dispatch desk for customized formulation packages, physician advice, and specialized volume pricing.',
                'மருத்துவ ஆலோசனை மற்றும் தனிப்பயன் மருந்து தொகுப்புகளுக்கு திருநெல்வேலி நேரடி உதவி எண்ணை தொடர்பு கொள்ளவும்.'
              )}
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=919171508042&text=Vanakkam%20Ruthra%20Medicines,%20I%20would%20like%20inquiry%20regarding%20custom%20Siddha%20bundles%20and%20offers."
            className="px-5 py-3 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 shadow-sm transition-colors flex-shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <Zap className="w-4 h-4 text-[#DFB36C]" />
            <span>{t('Chat with Dispatch Desk', 'வாட்ஸ்அப்பில் விசாரிக்க')}</span>
          </a>
        </section>
      </main>
    </div>
  );
}
