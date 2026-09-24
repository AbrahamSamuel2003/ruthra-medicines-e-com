'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Gift,
  Zap,
  Truck,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Calculator,
  Plus,
  Minus
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

export default function OffersPage() {
  const { language, t } = useLanguage();
  const { openDrawer } = useCart();

  // Interactive Scheme Simulator state
  const [simulatedQty, setSimulatedQty] = useState(5);

  const freeGiftsEarned = Math.floor(simulatedQty / 5);
  const itemsNeededForNext = 5 - (simulatedQty % 5 === 0 ? 5 : simulatedQty % 5);
  const nextTarget = (Math.floor(simulatedQty / 5) + 1) * 5;
  const progressPercent = ((simulatedQty % 5) / 5) * 100;

  const schemeTiers = [
    {
      tier: '5 + 1 Scheme',
      tierTa: '5 + 1 திட்டம்',
      paidCount: 5,
      freeCount: 1,
      totalCount: 6,
      badge: 'Popular',
      badgeTa: 'பிரபலமானது',
      descEn: 'Purchase any 5 formulations in a single order and unlock 1 Free Formulation of your direct choice.',
      descTa: 'எந்தவொரு 5 மருந்துகளை வாங்கும் போதும் உங்களுக்கு விருப்பமான 1 மருந்து முற்றிலும் இலவசமாக கிடைக்கும்.'
    },
    {
      tier: '10 + 2 Scheme',
      tierTa: '10 + 2 திட்டம்',
      paidCount: 10,
      freeCount: 2,
      totalCount: 12,
      badge: 'Double Value',
      badgeTa: 'இரு மடங்கு பலன்',
      descEn: 'Purchase any 10 formulations and unlock 2 Free Formulations across our entire 176 pharmacopeia.',
      descTa: '10 மருந்துகளை வாங்கும் போது 176 மருந்துகளிலிருந்து 2 மருந்துகளை முற்றிலும் இலவசமாக தேர்வு செய்யலாம்.'
    },
    {
      tier: '15 + 3 Scheme',
      tierTa: '15 + 3 திட்டம்',
      paidCount: 15,
      freeCount: 3,
      totalCount: 18,
      badge: 'Family Regimen',
      badgeTa: 'குடும்ப நலன்',
      descEn: 'Purchase 15 items for complete multi-month family healthcare and claim 3 Free Formulations.',
      descTa: '15 மருந்துகள் வாங்கும் போது 3 இலவச மருந்துகள் பெற்று குடும்ப முழுமை நலம் பேணிடுங்கள்.'
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-20">
      {/* 1. Hero Showcase Banner */}
      <section className="bg-[#16382B] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C29043_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29043]/40 text-[#DFB36C] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C29043]" />
            <span>{t('Volume Benefits Program • Tirunelveli Pharmacopeia', 'பாரம்பரிய சித்த மருந்து சலுகை திட்டம்')}</span>
          </div>

          <h1 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('5+1 & 10+2 Classical Formulation Scheme', '5+1 & 10+2 இலவச சித்த மருந்து திட்டம்')}
          </h1>

          <p className="text-sm sm:text-base text-[#DFB36C]/90 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Order 5 or more units and select authentic bonus formulations of your choice from our 176-item catalog for ₹0.00.',
              '5 அல்லது அதற்கு மேற்பட்ட மருந்துகளை வாங்கும் போது, எங்களின் 176 மருந்துகளிலிருந்து உங்கள் விருப்ப மருந்தை முற்றிலும் இலவசமாக தேர்வு செய்யுங்கள்.'
            )}
          </p>
        </div>
      </section>

      {/* 2. Core Program Pillars Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4.5 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('Customer-Choice Free Gifts', 'வாடிக்கையாளர் விருப்ப இலவச மருந்து')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('Choose any item from 176 formulations with zero price restrictions', 'விலை வரம்பின்றி 176 மருந்துகளிலிருந்து தேர்வு')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('Tamil Nadu Express Courier', 'தமிழ்நாடு விரைவு அஞ்சல்')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('Direct parcel dispatch from Tirunelveli across all 38 districts', 'திருநெல்வேலியிலிருந்து அனைத்து மாவட்டங்களுக்கும் நேரடி அஞ்சல்')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('100% Shodhana Pure', '100% தூய சித்த மருந்துகள்')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('Compounded in Tirunelveli adhering strictly to classical standards', 'திருநெல்வேலியில் முறைப்படி சுத்தி செய்யப்பட்டவை')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Section 1: Tier Cards */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#16382B]/10 pb-3">
            <div className="flex items-center gap-2.5">
              <Gift className="w-5 h-5 text-[#C29043]" />
              <h2 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                {t('Volume Scheme Milestones', 'இலவச மருந்து திட்ட அளவுகோல்கள்')}
              </h2>
            </div>
            <span className="text-xs text-[#8A9B93] hidden sm:inline">
              {t('Automatically applied at checkout', 'கூடையில் தானாக கணக்கிடப்படும்')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {schemeTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#16382B]/15 hover:border-[#C29043] transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#E8F1EB] text-[#16382B]">
                      {language === 'ta' ? tier.badgeTa : tier.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      +{tier.freeCount} {t('FREE Gift', 'இலவசம்')}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-brand text-2xl font-bold text-[#16382B]">
                      {language === 'ta' ? tier.tierTa : tier.tier}
                    </h3>
                    <p className="text-xs text-[#C29043] font-bold mt-1">
                      {t(`Buy ${tier.paidCount} Units → Get ${tier.freeCount} FREE (${tier.totalCount} Total Delivered)`, `${tier.paidCount} வாங்கினால் → ${tier.freeCount} இலவசம் (மொத்தம் ${tier.totalCount} அனுப்பப்படும்)`)}
                    </p>
                  </div>

                  <p className="text-xs text-[#3D5A68] leading-relaxed">
                    {language === 'ta' ? tier.descTa : tier.descEn}
                  </p>

                  <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#16382B]/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8A9B93]">{t('Paid Formulations:', 'வாங்கும் மருந்துகள்:')}</span>
                      <span className="font-bold text-[#16382B]">{tier.paidCount} {t('Items', 'எண்ணிக்கை')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-700 font-medium">{t('Free Bonus Medicines:', 'இலவச மருந்துகள்:')}</span>
                      <span className="font-bold text-emerald-700">{tier.freeCount} {t('Item (₹0.00)', 'மருந்து (₹0.00)')}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[#16382B]/10">
                      <span className="text-[#16382B] font-bold">{t('Total in Parcel:', 'மொத்த பார்சல்:')}</span>
                      <span className="font-bold text-[#16382B]">{tier.totalCount} {t('Bottles / Sachets', 'பாக்கெட்டுகள்')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#16382B]/10">
                  <Link
                    href="/shop"
                    className="w-full py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t('Shop Formulations', 'மருந்துகள் பார்க்க')}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DFB36C]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Interactive Milestone Simulator */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/15 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#16382B]/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
                <Calculator className="w-5 h-5 text-[#C29043]" />
              </div>
              <div>
                <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                  {t('Interactive 5+1 Benefit Calculator', 'ஊடாடும் 5+1 பலன் கால்குலேட்டர்')}
                </h3>
                <p className="text-xs text-[#3D5A68] mt-0.5">
                  {t('Adjust the quantity below to see the exact free gifts unlocked in real time.', 'எண்ணிக்கையை மாற்றி உங்களுக்கு கிடைக்கும் இலவச பரிசுகளை உடனுக்குடன் காணுங்கள்.')}
                </p>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-semibold text-[#8A9B93] mr-1">
                {t('Paid Items in Cart:', 'கூடையில் உள்ளவை:')}
              </span>
              <div className="h-10 flex items-center border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setSimulatedQty(Math.max(1, simulatedQty - 1))}
                  className="px-3 h-full text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-bold text-[#16382B]">
                  {simulatedQty}
                </span>
                <button
                  type="button"
                  onClick={() => setSimulatedQty(Math.min(25, simulatedQty + 1))}
                  className="px-3 h-full text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Calculator Output Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Result Card */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#16382B] uppercase tracking-wider">
                    {t('Current Status & Milestone', 'தற்போதைய நிலை')}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-md">
                    {freeGiftsEarned > 0
                      ? t(`${freeGiftsEarned} FREE Gifts Unlocked`, `${freeGiftsEarned} இலவச மருந்துகள் தகுதி`)
                      : t('Add more to unlock free gift', 'இலவச மருந்துக்கு இன்னும் சேர்க்கவும்')}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#3D5A68]">
                    <span>
                      {freeGiftsEarned > 0
                        ? t(`Next Free Gift at ${nextTarget} items (Need ${itemsNeededForNext} more)`, `அடுத்த இலவச மருந்துக்கு இன்னும் ${itemsNeededForNext} தேவை`)
                        : t(`Add ${itemsNeededForNext} more to reach 5 items for 1 FREE Gift`, `1 இலவச மருந்து பெற இன்னும் ${itemsNeededForNext} சேர்க்கவும்`)}
                    </span>
                    <span className="font-bold text-[#16382B]">{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#16382B]/10 overflow-hidden">
                    <div
                      className="h-full bg-[#16382B] rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 text-xs text-[#264653] leading-relaxed">
                  {freeGiftsEarned > 0 ? (
                    <p className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        {t(
                          `You will pay for ${simulatedQty} formulations and receive ${simulatedQty + freeGiftsEarned} formulations total in your parcel.`,
                          `நீங்கள் ${simulatedQty} மருந்துகளுக்கு மட்டும் பணம் செலுத்தி, மொத்தம் ${simulatedQty + freeGiftsEarned} மருந்துகளை பார்சலில் பெறுவீர்கள்.`
                        )}
                      </span>
                    </p>
                  ) : (
                    <p className="text-[#8A9B93]">
                      {t(
                        `Add ${itemsNeededForNext} more formulation(s) to unlock your first 100% free medicine.`,
                        `இன்னும் ${itemsNeededForNext} மருந்துகள் சேர்த்தால் முதல் இலவச மருந்து தேர்வு செய்யலாம்.`
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Summary Metrics */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#E8F1EB] border border-[#16382B]/10 text-center space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#8A9B93] tracking-wider block">
                  {t('Paid Items', 'கட்டண மருந்துகள்')}
                </span>
                <span className="font-serif-brand text-3xl font-bold text-[#16382B] block">
                  {simulatedQty}
                </span>
                <span className="text-[10px] text-[#3D5A68] block">{t('Standard Price', 'வழக்கமான விலை')}</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider block">
                  {t('Free Medicines', 'இலவச மருந்துகள்')}
                </span>
                <span className="font-serif-brand text-3xl font-bold text-emerald-700 block">
                  +{freeGiftsEarned}
                </span>
                <span className="text-[10px] text-emerald-800 font-semibold block">{t('₹0.00 in Cart', '₹0.00 கட்டணம்')}</span>
              </div>
            </div>
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
            target="_blank"
            rel="noreferrer"
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
