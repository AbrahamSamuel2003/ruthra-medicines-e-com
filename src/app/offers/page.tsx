'use client';

import React from 'react';
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
  Percent,
  PackageCheck
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

export default function OffersPage() {
  const { language, t } = useLanguage();
  const { openDrawer } = useCart();

  const schemeTiers = [
    {
      tier: '5+1 Scheme (10% OFF)',
      tierTa: '5+1 திட்டம் (10% தள்ளுபடி)',
      range: '5 – 29 Items',
      rangeTa: '5 – 29 மருந்துகள்',
      discount: '10% OFF Subtotal',
      discountTa: '10% கூடுதல் தள்ளுபடி',
      freeCount: '1 to 5 Free Formulations',
      freeCountTa: '1 முதல் 5 இலவச மருந்துகள்',
      badge: 'Popular',
      badgeTa: 'பிரபலமானது',
      descEn: 'Order 5 to 29 units to receive 10% direct order discount + 1 Free bonus medicine for every 5 items ordered.',
      descTa: '5 முதல் 29 மருந்துகள் வாங்கும் போது 10% நேரடி தள்ளுபடியுடன், ஒவ்வொரு 5 மருந்துகளுக்கும் 1 இலவச மருந்து கிடைக்கும்.'
    },
    {
      tier: '30+ Bulk Tier (20% OFF)',
      tierTa: '30+ மொத்த திட்டம் (20% தள்ளுபடி)',
      range: '30 – 49 Items',
      rangeTa: '30 – 49 மருந்துகள்',
      discount: '20% OFF Subtotal',
      discountTa: '20% மொத்த தள்ளுபடி',
      freeCount: '6 to 9 Free Formulations',
      freeCountTa: '6 முதல் 9 இலவச மருந்துகள்',
      badge: 'Bulk Savings',
      badgeTa: 'சேமிப்பு திட்டம்',
      descEn: 'Order 30 to 49 units to unlock 20% discount on entire bill (10% base + 10% extra) plus 6 to 9 free medicines.',
      descTa: '30 முதல் 49 மருந்துகள் வாங்கும் போது 20% மொத்த தள்ளுபடியுடன் 6 முதல் 9 இலவச மருந்துகள் பெறலாம்.'
    },
    {
      tier: '50+ Wholesale Mega Tier',
      tierTa: '50+ மெகா சலுகை திட்டம்',
      range: '50+ Items',
      rangeTa: '50+ மருந்துகள்',
      discount: '20% OFF Subtotal',
      discountTa: '20% மொத்த தள்ளுபடி',
      freeCount: '15+ Free Formulations',
      freeCountTa: '15+ இலவச மருந்துகள்',
      badge: 'Maximum Value',
      badgeTa: 'அதிகபட்ச பலன்',
      descEn: 'Order 50 or more units for 20% bill discount + 15 Free medicines at 50 items (scaling +1 per 5 items).',
      descTa: '50 அல்லது அதற்கு மேற்பட்ட மருந்துகள் வாங்கும் போது 20% தள்ளுபடியுடன், 50-க்கு 15 இலவச மருந்துகள் கிடைக்கும்.'
    }
  ];

  const policyTable = [
    { qty: '1 – 4 Items', qtyTa: '1 – 4 மருந்துகள்', discount: '0%', free: '0', shipping: 'FREE (₹0)', note: 'Standard Direct Pricing', noteTa: 'வழக்கமான விலை' },
    { qty: '5 – 9 Items', qtyTa: '5 – 9 மருந்துகள்', discount: '10% OFF', free: '+1 Free Formulation', shipping: 'FREE (₹0)', note: '5+1 Scheme Applied', noteTa: '5+1 திட்டம்' },
    { qty: '10 – 14 Items', qtyTa: '10 – 14 மருந்துகள்', discount: '10% OFF', free: '+2 Free Formulations', shipping: 'FREE (₹0)', note: '10+2 Scheme Applied', noteTa: '10+2 திட்டம்' },
    { qty: '15 – 29 Items', qtyTa: '15 – 29 மருந்துகள்', discount: '10% OFF', free: '+3 to +5 Free Formulations', shipping: 'FREE (₹0)', note: '1 Free per 5 Items', noteTa: 'ஒவ்வொரு 5-க்கும் 1 இலவசம்' },
    { qty: '30 – 49 Items', qtyTa: '30 – 49 மருந்துகள்', discount: '20% OFF', free: '+6 to +9 Free Formulations', shipping: 'FREE (₹0)', note: '10% Base + 10% Extra Volume Discount', noteTa: '20% கூடுதல் தள்ளுபடி' },
    { qty: '50 Items', qtyTa: '50 மருந்துகள்', discount: '20% OFF', free: '+15 Free Formulations', shipping: 'FREE (₹0)', note: 'Mega Tier Bonus', noteTa: 'மெகா சலுகை பலன்' },
    { qty: '60 Items', qtyTa: '60 மருந்துகள்', discount: '20% OFF', free: '+18 Free Formulations', shipping: 'FREE (₹0)', note: 'Mega Tier Bonus (+3/10 units)', noteTa: 'மெகா சலுகை பலன்' },
    { qty: '70 Items', qtyTa: '70 மருந்துகள்', discount: '20% OFF', free: '+21 Free Formulations', shipping: 'FREE (₹0)', note: 'Mega Tier Bonus (+3/10 units)', noteTa: 'மெகா சலுகை பலன்' },
    { qty: '100 Items', qtyTa: '100 மருந்துகள்', discount: '20% OFF', free: '+30 Free Formulations', shipping: 'FREE (₹0)', note: 'Mega Tier Bonus (30 Free Total)', noteTa: 'மொத்தம் 30 இலவச மருந்துகள்' }
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-20">
      {/* 1. Hero Showcase Banner */}
      <section className="bg-[#16382B] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C29043_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C29043]/40 text-[#DFB36C] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C29043]" />
            <span>{t('Universal Customer Benefits • Tirunelveli Pharmacopeia', 'பாரம்பரிய சித்த மருந்து சலுகை திட்டம்')}</span>
          </div>

          <h1 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('Volume Discounts & Free Formulation Scheme', '10% – 20% தள்ளுபடி & இலவச மருந்து திட்டம்')}
          </h1>

          <p className="text-sm sm:text-base text-[#DFB36C]/90 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Enjoy 10% to 20% direct bill discounts and claim free bonus formulations directly from the medicines in your order with 100% free delivery across Tamil Nadu.',
              '5 அல்லது அதற்கு மேற்பட்ட மருந்துகளை வாங்கும் போது 10% முதல் 20% தள்ளுபடியும், வாங்கிய மருந்துகளிலிருந்தே கூடுதல் இலவச மருந்துகளும், தமிழ்நாடு முழுவதும் இலவச அஞ்சல் சேவையும் பெறுங்கள்.'
            )}
          </p>
        </div>
      </section>

      {/* 2. Core Program Pillars Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4.5 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Percent className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('10% & 20% Volume Discounts', '10% & 20% நேரடி தள்ளுபடி')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('10% OFF for 5–29 units, 20% OFF for 30+ units automatically', '5-29க்கு 10% மற்றும் 30+க்கு 20% தானாக கழிக்கப்படும்')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('Free Formulation Bonus', 'இலவச மருந்து பலன்கள்')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('1 free per 5 units (5-49), 15 free at 50 units from your cart', 'கூடையில் உள்ள மருந்துகளிலிருந்தே இலவச தேர்வு')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#16382B]">
                {t('100% Free Tamil Nadu Delivery', 'தமிழ்நாடு முழுவதும் இலவச டெலிவரி')}
              </h4>
              <p className="text-[11px] text-[#3D5A68]">
                {t('₹0 transportation fee across all 38 districts of Tamil Nadu', 'அனைத்து மாவட்டங்களுக்கும் ₹0 கட்டணமில்லா அஞ்சல் சேவை')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Section 1: Tier Cards */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#16382B]/10 pb-3">
            <div className="flex items-center gap-2.5">
              <Gift className="w-5 h-5 text-[#C29043]" />
              <h2 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                {t('Scheme Tiers & Benefits', 'சலுகை நிலைகள் & பலன்கள்')}
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
                className="p-6 rounded-3xl bg-white border border-[#16382B]/15 hover:border-[#C29043] transition-all shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#E8F1EB] text-[#16382B]">
                      {language === 'ta' ? tier.badgeTa : tier.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {language === 'ta' ? tier.rangeTa : tier.range}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-brand text-xl font-bold text-[#16382B]">
                      {language === 'ta' ? tier.tierTa : tier.tier}
                    </h3>
                    <p className="text-xs text-[#C29043] font-bold mt-1">
                      {language === 'ta' ? tier.discountTa : tier.discount} • {language === 'ta' ? tier.freeCountTa : tier.freeCount}
                    </p>
                  </div>

                  <p className="text-xs text-[#3D5A68] leading-relaxed">
                    {language === 'ta' ? tier.descTa : tier.descEn}
                  </p>

                  <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#16382B]/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8A9B93]">{t('Order Quantity Range:', 'வாங்கும் அளவு:')}</span>
                      <span className="font-bold text-[#16382B]">{language === 'ta' ? tier.rangeTa : tier.range}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-700 font-medium">{t('Discount Percentage:', 'தள்ளுபடி சதவீதம்:')}</span>
                      <span className="font-bold text-emerald-700">{language === 'ta' ? tier.discountTa : tier.discount}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[#16382B]/10">
                      <span className="text-[#16382B] font-bold">{t('Free Medicines:', 'இலவச மருந்துகள்:')}</span>
                      <span className="font-bold text-emerald-800">{language === 'ta' ? tier.freeCountTa : tier.freeCount}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#16382B]/10">
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

        {/* Section 2: Transparent Benefit Breakdown Matrix Table */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/15 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-[#16382B]/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
                <PackageCheck className="w-5 h-5 text-[#C29043]" />
              </div>
              <div>
                <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B]">
                  {t('Comprehensive Benefits & Savings Table', 'முழுமையான சலுகை விபர அட்டவணை')}
                </h3>
                <p className="text-xs text-[#3D5A68] mt-0.5">
                  {t('Free formulation bonus is selected directly from the authentic Siddha medicines in your order.', 'இலவச மருந்துகள் உங்கள் கூடையில் உள்ள மருந்துகளிலிருந்தே நேரடியாக தேர்வு செய்யப்படுகிறது.')}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B]">
                  <th className="py-3 px-4 font-bold">{t('Order Quantity', 'வாங்கும் அளவு')}</th>
                  <th className="py-3 px-4 font-bold">{t('Bill Discount', 'தள்ளுபடி')}</th>
                  <th className="py-3 px-4 font-bold text-emerald-800">{t('Free Bonus Medicines', 'இலவச மருந்துகள்')}</th>
                  <th className="py-3 px-4 font-bold">{t('Delivery Charge', 'அஞ்சல் கட்டணம்')}</th>
                  <th className="py-3 px-4 font-bold text-[#8A9B93] hidden md:table-cell">{t('Scheme Notes', 'குறிப்பு')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#16382B]/10 text-[#3D5A68]">
                {policyTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#16382B]">
                      {language === 'ta' ? row.qtyTa : row.qty}
                    </td>
                    <td className="py-3 px-4 font-bold text-emerald-700">
                      {row.discount}
                    </td>
                    <td className="py-3 px-4 font-bold text-emerald-900">
                      {row.free}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {row.shipping}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#8A9B93] hidden md:table-cell">
                      {language === 'ta' ? row.noteTa : row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-[#E8F1EB] border border-green-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-green-900">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>
                {t(
                  'All discounts and free formulations calculate with 0 latency right inside your cart & checkout.',
                  'அனைத்து தள்ளுபடிகளும் இலவச மருந்துகளும் உங்கள் கூடையில் தானாகவே உடனுக்குடன் கணக்கிடப்படும்.'
                )}
              </span>
            </div>
            <Link
              href="/shop"
              className="px-4 py-2 rounded-xl bg-[#16382B] text-white font-bold hover:bg-[#204C3B] transition-colors flex-shrink-0 cursor-pointer text-center"
            >
              {t('Explore Store', 'ஷாப்பிங் செய்ய')}
            </Link>
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
