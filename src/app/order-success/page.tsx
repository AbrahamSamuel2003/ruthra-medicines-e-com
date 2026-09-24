'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircle2, 
  Truck, 
  MessageCircle, 
  ArrowRight, 
  FileText, 
  Download, 
  Mail, 
  Clock, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/types/product';

interface OrderItem {
  product: Product;
  quantity: number;
}

interface OrderData {
  orderId: string;
  invoiceNumber?: string;
  formData?: {
    fullName: string;
    phone: string;
    email?: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  paymentMethod?: string;
  createdAt?: string;
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'RM-2026-1001';
  const { t } = useLanguage();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  React.useEffect(() => {
    try {
      const saved = sessionStorage.getItem('ruthra_last_order');
      if (saved) {
        setOrderData(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const isCod = orderData?.paymentMethod === 'cod';
  const customerEmail = orderData?.formData?.email;
  const formattedInvoiceNumber = orderId.startsWith('RM-') 
    ? `INV-${orderId.slice(3)}` 
    : `INV-${orderId}`;
  const invoiceNumber = orderData?.invoiceNumber || formattedInvoiceNumber;

  const handleDownloadInvoice = async () => {
    setIsDownloading(true);
    try {
      const res = await fetch(`/api/orders/${orderId}/invoice`);
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Invoice_${orderId}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        // Fallback to window print or alert
        window.open(`/api/orders/${orderId}/invoice`, '_blank');
      }
    } catch {
      window.open(`/api/orders/${orderId}/invoice`, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#16382B]/10 shadow-md space-y-6">
          
          {/* Top Success Badge */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/20 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C29043]">
                {t('Order Successfully Confirmed', 'ஆர்டர் வெற்றிகரமாக உறுதிசெய்யப்பட்டது')}
              </span>
              <h1 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B] mt-1">
                {t('Nandri! Your Wellness Order is Received', 'நன்றி! உங்கள் ஆர்டர் பதிவு செய்யப்பட்டது')}
              </h1>
              <p className="text-xs sm:text-sm text-[#3D5A68] mt-1.5 flex items-center justify-center gap-2 flex-wrap">
                <span>{t('Order Number:', 'ஆர்டர் எண்:')}</span>
                <span className="font-mono font-bold text-[#16382B] px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#16382B]/10">
                  {orderId}
                </span>
                <span>•</span>
                <span className="text-[#8A9B93] font-mono text-xs">{invoiceNumber}</span>
              </p>
            </div>
          </div>

          {/* Payment & Invoice Status Card */}
          <div className={`p-4 sm:p-5 rounded-2xl border ${
            isCod 
              ? 'bg-amber-50/80 border-amber-300/80 text-amber-950' 
              : 'bg-emerald-50/80 border-emerald-300/80 text-emerald-950'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isCod ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {isCod 
                      ? t('Cash on Delivery (Payment Due)', 'டெலிவரியின் போது பணம் செலுத்தவும்') 
                      : t('Online Payment Verified & Confirmed', 'ஆன்லைன் கட்டணம் உறுதிசெய்யப்பட்டது')}
                  </span>
                </div>
                <p className="text-xs text-stone-700">
                  {isCod 
                    ? `Please keep ₹${orderData?.total || 'the order amount'} ready in cash at the time of doorstep courier arrival.` 
                    : `Payment of ₹${orderData?.total || ''} received in full. Your official Tax Invoice is generated.`}
                </p>
                {customerEmail && (
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 pt-1">
                    <Mail className="w-3.5 h-3.5 text-[#16382B]" />
                    <span>{t('Tax invoice & order confirmation sent to:', 'வரி விலைப்பட்டியல் அனுப்பப்பட்டது:')} <strong>{customerEmail}</strong></span>
                  </div>
                )}
              </div>

              {/* 1-Click PDF Download Button */}
              <button
                type="button"
                onClick={handleDownloadInvoice}
                disabled={isDownloading}
                className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 border border-[#16382B]/20 text-[#16382B] text-xs font-bold flex items-center gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex-shrink-0"
              >
                <FileText className="w-4 h-4 text-[#C29043]" />
                <span>{isDownloading ? t('Generating PDF...', 'தயாராகிறது...') : t('Download Invoice (PDF)', 'விலைப்பட்டியல் பதிவிறக்க')}</span>
                <Download className="w-3.5 h-3.5 text-[#16382B]" />
              </button>
            </div>
          </div>

          {/* Dispatch Step Timeline */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 text-left space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#16382B] uppercase tracking-wider">
              <Truck className="w-4 h-4 text-[#C29043]" />
              <span>{t('Dispatch & Delivery Timeline', 'அஞ்சல் காலவரிசை')}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-[#16382B]/10">
                <span className="font-bold text-[#16382B] block">1. Preparation & Sealing</span>
                <span className="text-[#8A9B93]">Tamper-evident herb pack in Tirunelveli</span>
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
          {orderData?.items && orderData.items.length > 0 && (
            <div className="text-left border-t border-[#16382B]/10 pt-4 space-y-2.5">
              <span className="text-xs font-bold text-[#16382B] uppercase tracking-wider block">
                {t('Ordered Formulations', 'ஆர்டர் செய்யப்பட்டவை')}
              </span>
              <div className="divide-y divide-[#16382B]/10 text-xs">
                {orderData.items.map((it, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-[#16382B]">
                        {it.product.name}
                      </span>
                      <span className="text-[#8A9B93] block text-[11px]">
                        {it.product.packSize} • Qty: {it.quantity}
                      </span>
                    </div>
                    <span className="font-bold text-[#16382B]">
                      ₹{it.product.price * it.quantity}
                    </span>
                  </div>
                ))}
                <div className="pt-3 flex justify-between font-bold text-sm text-[#16382B]">
                  <span>{isCod ? 'Total Payable on Delivery (COD)' : 'Total Amount Paid'}</span>
                  <span className="text-base text-[#16382B]">₹{orderData.total}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 border-t border-[#16382B]/10">
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
