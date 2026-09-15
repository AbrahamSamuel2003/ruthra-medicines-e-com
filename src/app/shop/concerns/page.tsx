'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Wind, Heart, ShieldCheck, Flame, Droplets, Leaf } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CONCERN_CATEGORIES, PRODUCTS } from '@/data/products';

export default function ConcernsHubPage() {
  const { language, t } = useLanguage();

  const getConcernIcon = (slug: string) => {
    switch (slug) {
      case 'joint-mobility': return <Activity className="w-6 h-6 text-[#C29043]" />;
      case 'respiratory': return <Wind className="w-6 h-6 text-[#C29043]" />;
      case 'womens-wellness': return <Heart className="w-6 h-6 text-[#C29043]" />;
      case 'metabolic-wellness': return <ShieldCheck className="w-6 h-6 text-[#C29043]" />;
      case 'digestive-wellness': return <Flame className="w-6 h-6 text-[#C29043]" />;
      case 'skin-hair': return <Droplets className="w-6 h-6 text-[#C29043]" />;
      default: return <Leaf className="w-6 h-6 text-[#C29043]" />;
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-[#8A9B93] mb-3 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#16382B]">{t('Shop', 'மருந்துகள்')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Concerns', 'உபாதைகள்')}</span>
        </nav>

        <div className="mb-10 max-w-2xl">
          <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#16382B]">
            {t('Explore by Wellness Concern', 'உபாதைகள் வாரியாக மருந்துகள்')}
          </h1>
          <p className="text-sm text-[#3D5A68] mt-2">
            {t(
              'Targeted classical Siddha formulations selected to restore balance across specific body systems and doshas.',
              'முக்குற்ற சமநிலையின்மையால் ஏற்படும் உபாதைகளுக்கான பாரம்பரிய சித்த மருத்துவ தீர்வுகள்.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONCERN_CATEGORIES.map(category => {
            const count = PRODUCTS.filter(p => p.concerns.includes(category.slug)).length;
            return (
              <div
                key={category.slug}
                className="p-6 rounded-2xl bg-white border border-[#16382B]/10 hover:border-[#C29043] transition-all shadow-xs hover:shadow-md flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F1EB] flex items-center justify-center border border-[#16382B]/10">
                      {getConcernIcon(category.slug)}
                    </div>
                    <span className="text-xs font-bold text-[#16382B] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#16382B]/10">
                      {count} {t('Formulations', 'மருந்துகள்')}
                    </span>
                  </div>

                  <h2 className="font-serif-brand text-xl font-bold text-[#16382B]">
                    {language === 'ta' ? category.titleTa : category.title}
                  </h2>
                  <p className="text-xs font-semibold text-[#C29043] mt-1">
                    {language === 'ta' ? category.herbalKeyTa : category.herbalKey}
                  </p>
                  <p className="text-xs text-[#3D5A68] mt-2.5 leading-relaxed">
                    {language === 'ta' ? category.descriptionTa : category.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#16382B]/10">
                  <Link
                    href={`/shop/concerns/${category.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#E8F1EB] hover:bg-[#16382B] text-[#16382B] hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{t('View Category Products', 'பிரிவு மருந்துகளை பார்க்க')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
