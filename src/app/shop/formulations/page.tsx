'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FORMULATION_CATEGORIES, PRODUCTS } from '@/data/products';

export default function FormulationsHubPage() {
  const { language, t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-[#8A9B93] mb-3 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#16382B]">{t('Shop', 'மருந்துகள்')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Formulations', 'மருந்து வடிவங்கள்')}</span>
        </nav>

        <div className="mb-10 max-w-2xl">
          <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#16382B]">
            {t('Traditional Siddha Formulation Types', 'பாரம்பரிய மருந்து வடிவங்கள்')}
          </h1>
          <p className="text-sm text-[#3D5A68] mt-2">
            {t(
              'Understand the science behind classical Chooranam powders, boiled Kudineer decoctions, wood-fired Thailam medicated oils, syrups, and aromatic drops.',
              'சித்த மருத்துவத்தில் ஒவ்வொரு வகை மருந்தும் குறிப்பிட்ட உடற்கூறு முறைப்படி செயல்பட வடிவமைக்கப்பட்டுள்ளது.'
            )}
          </p>
        </div>

        <div className="space-y-6">
          {FORMULATION_CATEGORIES.map(form => {
            const productsInForm = PRODUCTS.filter(p => p.formulation === form.formulation);
            return (
              <div
                key={form.slug}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#16382B]/10 hover:border-[#C29043] transition-all shadow-xs"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-3xl space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center font-serif-brand font-bold text-lg">
                        {form.title[0]}
                      </span>
                      <div>
                        <h2 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                          {language === 'ta' ? form.titleTa : form.title}
                        </h2>
                        <span className="text-xs text-[#C29043] font-semibold">
                          {language === 'ta' ? form.taglineTa : form.tagline}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed pt-1">
                      {language === 'ta' ? form.descriptionTa : form.description}
                    </p>

                    <div className="p-3 bg-[#FAF8F5] rounded-xl text-xs text-[#264653] border border-[#16382B]/5 flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-[#C29043] flex-shrink-0 mt-0.5" />
                      <span>{language === 'ta' ? form.classicalContextTa : form.classicalContext}</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-3">
                    <span className="text-xs font-bold text-[#16382B] bg-[#E8F1EB] px-3 py-1.5 rounded-full">
                      {productsInForm.length} {t('Products Available', 'மருந்துகள் உள்ளன')}
                    </span>

                    <Link
                      href={`/shop/formulations/${form.slug}`}
                      className="px-5 py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
                    >
                      <span>{t('Browse Formulations', 'பிரிவை பார்க்க')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
