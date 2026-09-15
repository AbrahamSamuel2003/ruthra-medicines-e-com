'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <nav className="text-xs text-[#8A9B93] flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Privacy Policy', 'தனியுரிமை கொள்கை')}</span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#16382B]/10 shadow-xs space-y-6">
          <h1 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B]">
            Privacy Policy
          </h1>

          <div className="space-y-4 text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
            <p>
              At Ruthra Medicines, we honor the privacy and confidentiality of your customer records and orders. We never sell, rent, or trade your personal information to third-party marketing companies.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              Information We Collect
            </h3>
            <p>
              We only collect your name, contact phone number, shipping address, and email solely to fulfill, dispatch, and track your herbal orders.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              Security & Payment Protection
            </h3>
            <p>
              All online transactions are encrypted via industry-standard SSL encryption and processed through accredited Indian payment gateways. Ruthra Medicines does not store your card CVVs or net banking passwords.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              Questions & Data Requests
            </h3>
            <p>
              You may request modification or erasure of your customer records by contacting us at care@ruthramedicos.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
