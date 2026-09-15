'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ReturnsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <nav className="text-xs text-[#8A9B93] flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Returns & Refunds', 'ரீஃபண்ட் கொள்கை')}</span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#16382B]/10 shadow-xs space-y-6">
          <h1 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B]">
            Returns, Replacements & Refund Policy
          </h1>

          <div className="space-y-4 text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              1. Damaged or Tampered in Transit
            </h3>
            <p>
              Due to the medicinal and hygienic nature of Siddha classical products, open consumables cannot be returned for resale. However, if your order arrives damaged, leaking, or with a broken seal, please notify us within 48 hours of delivery with a photograph. We will immediately dispatch a free replacement.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              2. Wrong Item Delivered
            </h3>
            <p>
              In the unlikely event that you receive an incorrect product, our Tirunelveli center will arrange a complimentary pickup and immediately dispatch the correct product at zero additional charge.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              3. Refund Processing
            </h3>
            <p>
              Approved refunds are credited back to the original source (UPI / Netbanking / Debit Card) within 3-5 business days.
            </p>

            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              4. Support Contact
            </h3>
            <p>
              For return requests, message our care desk at <a href="mailto:care@ruthramedicos.com" className="text-[#16382B] underline">care@ruthramedicos.com</a> or WhatsApp <a href="https://wa.me/919171508042" className="text-[#16382B] underline font-bold">+91 91715 08042</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
