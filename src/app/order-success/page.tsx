'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/types/product';

interface OrderItem {
  product: Product;
  quantity: number;
}

interface OrderData {
  orderId: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'RUTHRA-849201';
  const { t } = useLanguage();

  const [orderData] = useState<OrderData | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem('ruthra_last_order');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // ignore
      }
    }
    return null;
  });

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#16382B]/10 shadow-md text-center space-y-6">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10 text-[#16382B]" />
          </div>

          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C29043]">
              {t('Order Confirmed', 'ஆர்டர் உறுதிசெய்யப்பட்டது')}
            </span>
            <h1 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B] mt-1">
              {t('Nandri! Your Wellness Order is Received', 'நன்றி! உங்கள் ஆர்டர் பதிவு செய்யப்பட்டது')}
            </h1>
            <p className="text-sm text-[#3D5A68] mt-2">
              {t('Order ID:', 'ஆர்டர் எண்:')}{' '}
              <span className="font-mono font-bold text-[#16382B] px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#16382B]/10">
                {orderId}
              </span>
            </p>
          </div>

          {/* Dispatch Step Timeline */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 text-left space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#16382B] uppercase tracking-wider">
              <Truck className="w-4 h-4 text-[#C29043]" />
              <span>{t('Dispatch & Delivery Timeline', 'அஞ்சல் காலவரிசை')}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-[#16382B]/10">
                <span className="font-bold text-[#16382B] block">1. Preparation</span>
                <span className="text-[#8A9B93]">Tamper-evident sealing in Tirunelveli</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#16382B]/10">
                <span className="font-bold text-[#16382B] block">2. Express Courier</span>
                <span className="text-[#8A9B93]">Direct courier handoff within 24 hours</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#16382B]/10">
                <span className="font-bold text-[#16382B] block">3. Doorstep Arrival</span>
                <span className="text-[#8A9B93]">2-3 days across Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Order items preview if available */}
          {orderData?.items && (
            <div className="text-left border-t border-[#16382B]/10 pt-4 space-y-2">
              <span className="text-xs font-bold text-[#16382B] uppercase tracking-wider block">
                {t('Ordered Formulations', 'ஆர்டர் செய்யப்பட்டவை')}
              </span>
              <div className="divide-y divide-[#16382B]/10 text-xs">
                {orderData.items.map((it, idx) => (
                  <div key={idx} className="py-2 flex justify-between items-center">
                    <span>
                      {it.product.name} ({it.product.packSize}) × {it.quantity}
                    </span>
                    <span className="font-bold text-[#16382B]">
                      ₹{it.product.price * it.quantity}
                    </span>
                  </div>
                ))}
                <div className="pt-2 flex justify-between font-bold text-sm text-[#16382B]">
                  <span>Total Amount Paid / Payable</span>
                  <span>₹{orderData.total}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>{t('Continue Browsing Formulations', 'மேலும் மருந்துகளை பார்க்க')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/919171508042?text=Vanakkam%20Ruthra,%20I%20have%20placed%20order%20${orderId}.%20Please%20confirm%20tracking.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E8F1EB] hover:bg-white border border-[#16382B]/20 text-[#16382B] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#16382B]" />
              <span>{t('Receive Tracking via WhatsApp', 'வாட்ஸ்அப் மூலம் டிராக்கிங் பெற')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-[#16382B]">Loading confirmation...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
