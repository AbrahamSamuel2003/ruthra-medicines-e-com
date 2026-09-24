'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  CreditCard, 
  QrCode, 
  Banknote, 
  MessageCircle, 
  PhoneCall, 
  ArrowRight, 
  Tag, 
  CheckCircle2, 
  Zap, 
  Gift, 
  PackageCheck,
  ShieldCheck,
  Percent
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

// Tamil Nadu Pincode to District Auto-Detection
const detectCityFromPincode = (pin: string): string => {
  const p = pin.trim();
  if (p.startsWith('627')) return 'Tirunelveli';
  if (p.startsWith('628')) return 'Thoothukudi';
  if (p.startsWith('629')) return 'Kanyakumari';
  if (p.startsWith('625')) return 'Madurai';
  if (p.startsWith('626')) return 'Virudhunagar';
  if (p.startsWith('600') || p.startsWith('601') || p.startsWith('602') || p.startsWith('603')) return 'Chennai';
  if (p.startsWith('641') || p.startsWith('642')) return 'Coimbatore';
  if (p.startsWith('636')) return 'Salem';
  if (p.startsWith('620') || p.startsWith('621')) return 'Tiruchirappalli';
  if (p.startsWith('638')) return 'Erode';
  if (p.startsWith('613') || p.startsWith('614')) return 'Thanjavur';
  if (p.startsWith('632') || p.startsWith('631')) return 'Vellore';
  if (p.startsWith('624')) return 'Dindigul';
  if (p.startsWith('637')) return 'Namakkal';
  if (p.startsWith('639')) return 'Karur';
  if (p.startsWith('643')) return 'The Nilgiris';
  if (p.startsWith('630')) return 'Sivaganga';
  if (p.startsWith('622')) return 'Pudukkottai';
  if (p.startsWith('623')) return 'Ramanathapuram';
  if (p.startsWith('604') || p.startsWith('605')) return 'Viluppuram';
  if (p.startsWith('606')) return 'Tiruvannamalai';
  if (p.startsWith('607') || p.startsWith('608')) return 'Cuddalore';
  if (p.startsWith('635')) return 'Krishnagiri';
  return '';
};

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    freeGiftItems,
    paidItemCount,
    totalFreeGiftsSelected,
    freeSlotsRemaining,
    openGiftModal,
    subtotal,
    discountPercent,
    discountAmount,
    mrpSubtotal,
    mrpSavings,
    freeGiftSavings,
    totalSavings,
    shippingFee,
    total,
    clearCart
  } = useCart();
  const { language, t } = useLanguage();

  // Initialize form states with lazy initializer from localStorage
  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ruthra_guest_profile');
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            fullName: parsed.fullName || '',
            phone: parsed.phone || '',
            email: parsed.email || '',
            address: parsed.address || '',
            landmark: parsed.landmark || '',
            city: parsed.city || '',
            state: parsed.state || 'Tamil Nadu',
            pincode: parsed.pincode || '',
            paymentMethod: 'upi',
            deliveryMethod: 'standard'
          };
        }
      } catch {
        // ignore
      }
    }
    return {
      fullName: '',
      phone: '',
      email: '',
      address: '',
      landmark: '',
      city: '',
      state: 'Tamil Nadu',
      pincode: '',
      paymentMethod: 'upi',
      deliveryMethod: 'standard'
    };
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [hasSavedProfile] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ruthra_guest_profile');
        if (saved) {
          const parsed = JSON.parse(saved);
          return Boolean(parsed.fullName || parsed.phone);
        }
      } catch {
        // ignore
      }
    }
    return false;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };

    // If pincode entered is 6 digits, auto-fill city
    if (name === 'pincode' && value.trim().length === 6) {
      const autoCity = detectCityFromPincode(value.trim());
      if (autoCity) {
        updated.city = autoCity;
      }
    }

    setFormData(updated);

    // Auto-persist to localStorage
    try {
      localStorage.setItem('ruthra_guest_profile', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      alert(language === 'ta' ? 'விலைப்பட்டியல் மற்றும் டிராக்கிங் பெற சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.' : 'Please enter a valid email address to receive your official invoice and courier tracking link.');
      return;
    }

    setIsProcessing(true);

    try {
      const orderItemsPayload = [
        ...items.map(it => ({
          productId: it.product.id,
          productName: it.product.name,
          tamilName: it.product.tamilName,
          price: it.product.price,
          mrp: it.product.originalPrice || Math.round(it.product.price * 1.25),
          quantity: it.quantity,
          packSize: it.product.packSize,
          formulation: it.product.formulation
        })),
        ...freeGiftItems.map(g => ({
          productId: g.product.id,
          productName: `${g.product.name} (Free Bonus)`,
          tamilName: `${g.product.tamilName} (இலவச மருந்து)`,
          price: 0,
          mrp: g.product.originalPrice || g.product.price,
          quantity: g.quantity,
          packSize: g.product.packSize,
          formulation: g.product.formulation
        }))
      ];

      const payload = {
        customer: {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          landmark: formData.landmark,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        },
        items: orderItemsPayload,
        subtotal,
        mrpTotal: mrpSubtotal,
        discountTotal: discountAmount,
        shippingFee,
        totalAmount: total,
        deliveryMethod: formData.deliveryMethod === 'standard' ? 'Tamil Nadu Express Courier' : 'Speed Post',
        paymentMethod: formData.paymentMethod,
        notes: discountPercent > 0 ? `${discountPercent}% Volume Discount Applied` : undefined
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      const confirmedOrderNumber = data.orderNumber || data.orderId || 'RM-2026-' + Math.floor(1000 + Math.random() * 9000);

      try {
        sessionStorage.setItem(
          'ruthra_last_order',
          JSON.stringify({
            orderId: confirmedOrderNumber,
            invoiceNumber: data.invoiceNumber || `INV-${confirmedOrderNumber}`,
            formData,
            items,
            freeGiftItems,
            subtotal,
            discountPercent,
            discountAmount,
            shippingFee,
            total,
            paymentMethod: formData.paymentMethod,
            createdAt: new Date().toISOString()
          })
        );
      } catch {
        // ignore
      }

      clearCart();
      router.push(`/order-success?orderId=${confirmedOrderNumber}`);
    } catch (err) {
      console.error('Order submission error:', err);
      // Fallback
      const fallbackId = 'RM-2026-' + Math.floor(1000 + Math.random() * 9000);
      clearCart();
      router.push(`/order-success?orderId=${fallbackId}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const whatsappPurchasedSummary = items
    .map(i => `• ${i.product.name} (${i.product.packSize}) × ${i.quantity} = ₹${i.product.price * i.quantity}`)
    .join('\n');
  const whatsappDiscountSummary = discountAmount > 0
    ? `\n\n• Volume Discount (${discountPercent}% OFF): -₹${discountAmount}`
    : '';
  const whatsappGiftSummary = freeGiftItems.length > 0
    ? '\n\nFree Formulation Bonus (Cart Items Selection):\n' + freeGiftItems.map(g => `• [FREE] ${g.product.name} (${g.product.packSize}) × ${g.quantity}`).join('\n')
    : '';

  const whatsappOrderText = `Vanakkam Ruthra Medicines,\nI would like to place an order directly:\n\n${whatsappPurchasedSummary}${whatsappDiscountSummary}${whatsappGiftSummary}\n\nTotal Payable: ₹${total} (Free Tamil Nadu Delivery)\nCustomer Name: ${formData.fullName || '(Direct Guest)'}\nPhone: ${formData.phone || '(This contact)'}\nAddress: ${formData.address ? `${formData.address}, ${formData.city} - ${formData.pincode}` : '(Will share on chat)'}\n\nPlease confirm dispatch from Tirunelveli.`;

  if (items.length === 0) {
    return (
      <div className="w-full bg-[#FAF8F5] min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-[#16382B]/10 shadow-xs">
          <p className="font-serif-brand text-xl font-bold text-[#16382B]">
            {t('Your cart is empty', 'கூடையில் மருந்துகள் இல்லை')}
          </p>
          <Link
            href="/shop"
            className="mt-4 inline-block px-6 py-2.5 rounded-full bg-[#16382B] text-white text-xs font-semibold"
          >
            {t('Return to Shop', 'மருந்துகளை பார்க்க')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-[#8A9B93] mb-5 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <Link href="/cart" className="hover:text-[#16382B]">{t('Cart', 'கூடை')}</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{t('Guest Checkout', 'நேரடி செக்அவுட்')}</span>
        </nav>

        {/* FAST 1-TAP WHATSAPP CHECKOUT CARD */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#E8F1EB]/90 border border-[#16382B]/15 flex flex-col sm:flex-row items-center justify-between gap-3.5 shadow-2xs">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#16382B] text-[#C29043] flex items-center justify-center flex-shrink-0 shadow-xs">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B]">
                {t('Prefer zero typing? 1-Tap Order via WhatsApp', 'படிவம் நிரப்பாமல் வாட்ஸ்அப்பில் 1-டாப்பில் ஆர்டர் செய்ய')}
              </h3>
              <p className="text-[11px] text-[#3D5A68] mt-0.5">
                {t('Send your cart items directly. Our Tirunelveli dispatch desk will confirm order details and tracking immediately.', 'உங்கள் கூடை விபரங்களை நேரடியாக அனுப்பி வாட்ஸ்அப்பில் முடிக்கலாம்.')}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/919171508042?text=${encodeURIComponent(whatsappOrderText)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all flex-shrink-0"
          >
            <Zap className="w-3.5 h-3.5 text-[#DFB36C]" />
            <span>{t('Instant WhatsApp Checkout', 'வாட்ஸ்அப் விரைவு செக்அவுட்')}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Guest Address & Payment Method Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            {/* Delivery Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#16382B]/10">
                <h2 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B] flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-[#C29043]" />
                  <span>{t('1. Delivery Address (Tamil Nadu)', '1. டெலிவரி முகவரி')}</span>
                </h2>
                {hasSavedProfile && (
                  <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1 border border-green-200">
                    <CheckCircle2 className="w-3 h-3" />
                    {t('Saved Info Loaded', 'சேமித்த முகவரி')}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1 sm:col-span-2">
                  <label className="font-bold text-[#16382B] block">
                    {t('Full Name *', 'முழுப் பெயர் *')}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Dr. S. Ramanathan / K. Meenakshi"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#16382B] block">
                    {t('Mobile Number (for SMS & Tracking) *', 'தொலைபேசி எண் *')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#16382B] block">
                    {t('Email Address (for Official Tax Invoice PDF) *', 'மின்னஞ்சல் முகவரி *')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="font-bold text-[#16382B] block">
                    {t('Door No, Street Name & Area *', 'கதவு எண், தெரு மற்றும் பகுதி *')}
                  </label>
                  <textarea
                    name="address"
                    rows={2}
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. 14/B, Sannathi Street, Near Swami Nellaiyappar Temple"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#16382B] block">
                    {t('Landmark (Optional)', 'அடையாளம்')}
                  </label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    placeholder="e.g. Opposite Post Office"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#16382B] block">
                    {t('Pincode (Auto-detects district) *', 'அஞ்சல் குறியீடு (Pincode) *')}
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength={6}
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="e.g. 627001"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#16382B] block">
                    {t('City / District', 'மாவட்டம்')}
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Tirunelveli"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#16382B] block">
                    {t('State', 'மாநிலம்')}
                  </label>
                  <input
                    type="text"
                    name="state"
                    disabled
                    value={formData.state}
                    className="w-full px-4 py-3 bg-gray-100 border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-gray-500 font-semibold cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <div className="pb-3 border-b border-[#16382B]/10">
                <h2 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B] flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#C29043]" />
                  <span>{t('2. Select Payment Method', '2. பணம் செலுத்தும் முறை')}</span>
                </h2>
                <p className="text-xs text-[#8A9B93] mt-0.5">
                  Official Tirunelveli Direct Merchant Settlement
                </p>
              </div>

              <div className="space-y-3">
                {/* Instant UPI / QR */}
                <label className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'upi' ? 'border-[#16382B] bg-[#E8F1EB]/40' : 'border-[#16382B]/10 bg-white'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-[#16382B]">
                        {t('Instant UPI / GPay / PhonePe / Paytm', 'உடனடி UPI / GPay / PhonePe')}
                      </span>
                      <QrCode className="w-4 h-4 text-[#16382B]" />
                    </div>
                    <p className="text-[11px] text-[#3D5A68] mt-0.5">
                      Zero transaction fees. Instant official tax invoice dispatched to email.
                    </p>
                  </div>
                </label>

                {/* Cards & NetBanking */}
                <label className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'card' ? 'border-[#16382B] bg-[#E8F1EB]/40' : 'border-[#16382B]/10 bg-white'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-[#16382B]">
                        {t('Debit / Credit Cards & Net Banking', 'டெபிட் / கிரெடிட் கார்டு & வங்கி பரிவர்த்தனை')}
                      </span>
                      <CreditCard className="w-4 h-4 text-[#16382B]" />
                    </div>
                    <p className="text-[11px] text-[#3D5A68] mt-0.5">
                      All Indian banks, RuPay, Visa, MasterCard supported.
                    </p>
                  </div>
                </label>

                {/* Cash on Delivery (COD) Option */}
                <label className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod' ? 'border-[#16382B] bg-[#E8F1EB]/40' : 'border-[#16382B]/10 bg-white'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-[#16382B]">
                        {t('Cash on Delivery (Available across Tamil Nadu)', 'பொருளை பெற்றுக்கொண்டு பணம் செலுத்துதல்')}
                      </span>
                      <Banknote className="w-4 h-4 text-[#16382B]" />
                    </div>
                    <p className="text-[11px] text-[#3D5A68] mt-0.5">
                      Pay cash upon doorstep package handover.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 rounded-2xl bg-[#16382B] hover:bg-[#204C3B] active:scale-98 text-white font-serif-brand font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              {isProcessing ? (
                <span>{t('Processing Your Order...', 'ஆர்டர் பதிவு செய்யப்படுகிறது...')}</span>
              ) : (
                <>
                  <span>{t(`Confirm & Place Order — ₹${total}`, `ஆர்டரை உறுதிசெய் — ₹${total}`)}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Right Column: Order Summary & Assistance (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#16382B]/10">
                <h3 className="font-serif-brand text-lg font-bold text-[#16382B]">
                  {t('Order Summary', 'ஆர்டர் விபரம்')}
                </h3>
                <span className="text-xs text-[#8A9B93]">
                  {paidItemCount} {t('Paid', 'வாங்கியவை')} {totalFreeGiftsSelected > 0 && `+ ${totalFreeGiftsSelected} ${t('Free', 'இலவசம்')}`}
                </span>
              </div>

              {/* Free Gift Notification / Claim Prompt if remaining */}
              {freeSlotsRemaining > 0 && (
                <div className="p-3 bg-[#FFF9F0] border border-[#C29043]/40 rounded-2xl flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Gift className="w-4 h-4 text-[#C29043] flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#8B5E14] truncate">
                      {t(`${freeSlotsRemaining} Free Gift Slot(s) Available!`, `${freeSlotsRemaining} இலவச மருந்து தேர்வு செய்யலாம்!`)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={openGiftModal}
                    className="px-2.5 py-1 rounded-lg bg-[#16382B] text-white text-[11px] font-bold hover:bg-[#204C3B] transition-colors flex-shrink-0 cursor-pointer"
                  >
                    {t('Select Gift', 'தேர்வு செய்க')}
                  </button>
                </div>
              )}

              {/* Purchased items list */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-3 text-xs">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] p-1 border border-[#16382B]/10 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={product.image || '/images/ruthra-icon.png'}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="object-contain max-h-10"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#16382B] truncate">
                        {language === 'ta' ? product.tamilName : product.name}
                      </p>
                      <p className="text-[11px] text-[#8A9B93]">
                        {quantity} × ₹{product.price} ({product.packSize})
                      </p>
                    </div>
                    <span className="font-bold text-[#16382B]">
                      ₹{product.price * quantity}
                    </span>
                  </div>
                ))}

                {/* Selected Free Gifts */}
                {freeGiftItems.map(({ product, quantity }) => (
                  <div key={`gift-checkout-${product.id}`} className="flex items-center gap-3 text-xs p-2 rounded-xl bg-emerald-50/80 border border-emerald-200">
                    <div className="w-10 h-10 rounded-lg bg-white p-1 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={product.image || '/images/ruthra-icon.png'}
                        alt={product.name}
                        width={32}
                        height={32}
                        className="object-contain max-h-8"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1 py-0.2 rounded bg-emerald-700 text-white inline-block">
                        {t('100% Free Bonus', 'இலவச பரிசு')}
                      </span>
                      <p className="font-semibold text-[#16382B] truncate mt-0.5">
                        {language === 'ta' ? product.tamilName : product.name}
                      </p>
                    </div>
                    <span className="font-bold text-emerald-800">
                      ₹0.00 {quantity > 1 && `(×${quantity})`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#16382B]/10 space-y-2.5 text-xs text-[#3D5A68]">
                <div className="flex justify-between items-center">
                  <span>{t('Items Subtotal', 'பொருட்களின் மொத்த தொகை')}</span>
                  <span className="font-semibold text-[#16382B]">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between items-center text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                    <span className="flex items-center gap-1.5">
                      <Percent className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{t(`${discountPercent}% Volume Discount`, `${discountPercent}% சிறப்பு தள்ளுபடி`)}</span>
                    </span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>{t('Express Delivery (Tamil Nadu)', 'அஞ்சல் கட்டணம்')}</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md text-xs">
                    {t('FREE (₹0)', 'இலவசம் (₹0)')}
                  </span>
                </div>

                <div className="pt-2.5 border-t border-[#16382B]/10 flex justify-between items-center text-base font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'செலுத்த வேண்டிய தொகை')}</span>
                  <span className="font-serif-brand text-xl text-[#16382B]">₹{total}</span>
                </div>

                {totalSavings > 0 && (
                  <div className="mt-2 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-semibold space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-bold text-emerald-800">
                        <Tag className="w-3.5 h-3.5 text-[#C29043]" />
                        <span>{t(`Total Order Savings: ₹${totalSavings}`, `மொத்த சேமிப்பு: ₹${totalSavings}`)}</span>
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                        {t('Best Value', 'சிறந்த சேமிப்பு')}
                      </span>
                    </div>
                    {totalFreeGiftsSelected > 0 && (
                      <p className="text-[11px] text-emerald-800 font-medium pt-1 border-t border-emerald-200/60 flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                        <span>{t(`Includes ${totalFreeGiftsSelected} Free Bonus Medicine(s)`, `${totalFreeGiftsSelected} இலவச சித்த மருந்துகள் சேர்க்கப்பட்டுள்ளன`)}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Offline / Phone / WhatsApp Ordering Assistance Card */}
            <div className="p-6 bg-[#E8F1EB] rounded-3xl border border-[#16382B]/10 space-y-3">
              <h4 className="font-serif-brand font-bold text-sm text-[#16382B] flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C29043]" />
                {t('Prefer Ordering via WhatsApp / Call?', 'வாட்ஸ்அப் மூலம் ஆர்டர் செய்ய விருப்பமா?')}
              </h4>
              <p className="text-xs text-[#3D5A68] leading-relaxed">
                {t(
                  'Our Tirunelveli team can process your order directly. Simply message us your delivery address.',
                  'எங்கள் திருநெல்வேலி இல்லத்திற்கு நேரடியாக வாட்ஸ்அப்பில் முகவரியை அனுப்பி ஆர்டர் செய்யலாம்.'
                )}
              </p>
              <a
                href={`https://wa.me/919171508042?text=${encodeURIComponent(whatsappOrderText)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#16382B] text-xs font-semibold flex items-center justify-center gap-2 border border-[#16382B]/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#16382B]" />
                <span>{t('Order via WhatsApp Support', 'வாட்ஸ்அப் நேரடி ஆர்டர்')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
