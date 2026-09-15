'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ShippingPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <nav className="text-xs text-[#8A9B93] flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Shipping & Dispatch Policy', 'அஞ்சல் கொள்கை')}</span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#16382B]/10 shadow-xs space-y-6">
          <h1 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B]">
            Shipping & Dispatch Guidelines
          </h1>
          <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
            Ruthra Medicines takes exceptional care in packaging authentic botanical preparations. Every parcel is packed in moisture-barrier and tamper-evident materials directly at our fulfillment center in North Ariyanayagipuram, Petta, Tirunelveli.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-1">
              <span className="font-bold text-sm text-[#16382B] flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#C29043]" />
                Tamil Nadu Delivery
              </span>
              <p className="text-xs text-[#3D5A68]">
                2 to 3 Business Days. Dispatched via ST Courier, Professional Couriers, or India Post Speed Post.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-1">
              <span className="font-bold text-sm text-[#16382B] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#16382B]" />
                Free Shipping Threshold
              </span>
              <p className="text-xs text-[#3D5A68]">
                Free delivery across all Tamil Nadu districts on orders above ₹500. Standard ₹40 fee on smaller orders.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#3D5A68] leading-relaxed pt-4 border-t border-[#16382B]/10">
            <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
              Order Processing & Tracking
            </h3>
            <p>
              Orders placed before 2:00 PM are handed over to couriers the very same business day. Once your package is scanned, you will receive a tracking link via SMS / WhatsApp.
            </p>
            <p>
              For urgent delivery requirements or bulk wellness orders, please contact our Tirunelveli desk at <a href="tel:+919171508042" className="text-[#16382B] font-bold underline">+91 91715 08042</a> or <a href="tel:+918220190029" className="text-[#16382B] font-bold underline">+91 82201 90029</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
