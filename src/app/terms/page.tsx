'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <nav className="text-xs text-[#8A9B93] flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Terms of Service', 'விதிமுறைகள்')}</span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#16382B]/10 shadow-xs space-y-6">
          <h1 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B]">
            Terms of Service & Product Disclaimer
          </h1>

          <div className="space-y-4 text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              1. Nature of Information
            </h3>
            <p>
              The product information, traditional uses, and herbal descriptions provided on this website are drawn from classical Tamil Siddha literature and pharmacopeia standards of Ruthra Siddha Herbals. They are intended for educational and wellness support.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              2. Individual Variations
            </h3>
            <p>
              Individual biological responses to herbal preparations vary depending on your Prakriti (constitution), dietary habits, and adherence to dosage. Always follow product labels and safety notices carefully.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              3. Jurisdiction
            </h3>
            <p>
              All transactions, inquiries, and legal matters are governed by the laws of India, subject to the jurisdiction of the courts in Tirunelveli, Tamil Nadu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
