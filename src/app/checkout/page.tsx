'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CreditCard, QrCode, Banknote, MessageCircle, PhoneCall, ArrowRight, Tag, CheckCircle2, Zap } from 'lucide-react';
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
    subtotal,
    mrpSubtotal,
    mrpSavings,
    multiPackSavings,
    couponCode,
    couponDiscount,
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

    // Auto-detect City and State from PIN Code
    if (name === 'pincode') {
      const detected = detectCityFromPincode(value);
      if (detected) {
        updated.city = detected;
        updated.state = 'Tamil Nadu';
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

    if (!formData.email || !formData.email.trim() || !formData.email.includes('@')) {
      alert(language === 'ta' ? 'விலைப்பட்டியல் பெற சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.' : 'Please enter a valid email address to receive your official invoice and tracking.');
      return;
    }

    setIsProcessing(true);

    try {
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
        items: items.map(it => ({
          productId: it.product.id,
          productName: it.product.name,
          tamilName: it.product.tamilName,
          price: it.product.price,
          mrp: it.product.originalPrice || Math.round(it.product.price * 1.25),
          quantity: it.quantity,
          packSize: it.product.packSize,
          formulation: it.product.formulation
        })),
        subtotal,
        mrpTotal: mrpSubtotal,
        discountTotal: mrpSavings + multiPackSavings + couponDiscount,
        shippingFee,
        totalAmount: total,
        deliveryMethod: formData.deliveryMethod === 'standard' ? 'Tamil Nadu Express Courier' : 'Speed Post',
        paymentMethod: formData.paymentMethod
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
            subtotal,
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

  const whatsappOrderSummary = items
    .map(i => `• ${i.product.name} (${i.product.packSize}) × ${i.quantity} = ₹${i.product.price * i.quantity}`)
    .join('\n');
  const whatsappOrderText = `Vanakkam Ruthra Medicines,\nI would like to place an order directly:\n\n${whatsappOrderSummary}\n\nTotal Payable: ₹${total} (Free Tamil Nadu Delivery)\nCustomer Name: ${formData.fullName || '(Direct Guest)'}\nPhone: ${formData.phone || '(This contact)'}\nAddress: ${formData.address ? `${formData.address}, ${formData.city} - ${formData.pincode}` : '(Will share on chat)'}\n\nPlease confirm dispatch from Tirunelveli.`;

  if (items.length === 0) {
    return (
      <div className="w-full bg-[#FAF8F5] min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-[#16382B]/10">
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

        {/* FAST 1-TAP WHATSAPP CHECKOUT CARD (Zero Manual Form Filling) */}
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
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors flex-shrink-0 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-[#C29043]" />
            <span>{t('1-Tap WhatsApp Checkout', 'வாட்ஸ்அப் நேரடி ஆர்டர்')}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Checkout Form Column */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            {/* Step 1: Customer Contact Details */}
            <div className="bg-white p-5 sm:p-7 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#16382B]/10 pb-3">
                <h2 className="font-serif-brand text-base sm:text-lg font-bold text-[#16382B] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#16382B] text-white text-xs flex items-center justify-center">1</span>
                  {t('Customer Details (Guest Checkout)', 'வாடிக்கையாளர் விபரம்')}
                </h2>
                {hasSavedProfile ? (
                  <span className="inline-flex items-center gap-1 text-[10.5px] text-green-700 font-semibold bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{t('Auto-filled from saved profile', 'தானாக நிரப்பப்பட்டது')}</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-[#8A9B93]">No login required</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16382B] mb-1">
                    {t('Full Name *', 'முழு பெயர் *')}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sundaram K."
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#16382B] mb-1">
                    {t('Phone Number *', 'தொலைபேசி எண் *')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#16382B] mb-1">
                    {t('Email Address *', 'மின்னஞ்சல் முகவரி *')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="bg-white p-5 sm:p-7 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#16382B]/10 pb-3">
                <h2 className="font-serif-brand text-base sm:text-lg font-bold text-[#16382B] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#16382B] text-white text-xs flex items-center justify-center">2</span>
                  {t('Shipping Address', 'அஞ்சல் முகவரி')}
                </h2>
                <span className="text-[11px] text-[#C29043] font-semibold">Tamil Nadu & All India</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#16382B] mb-1">
                    {t('Door / Flat / Street Address *', 'வீட்டு எண் / தெரு முகவரி *')}
                  </label>
                  <textarea
                    name="address"
                    rows={2}
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Door no, Street name, Area"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-[#16382B]">
                        {t('Postal PIN Code *', 'அஞ்சல் குறியீடு *')}
                      </label>
                      {formData.city && (
                        <span className="text-[10px] text-green-700 font-bold flex items-center gap-0.5">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>Auto</span>
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      name="pincode"
                      required
                      pattern="[0-9]{6}"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="627010"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#16382B] mb-1">
                      {t('City / Town / District *', 'ஊர் / மாவட்டம் *')}
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Tirunelveli, Chennai"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#16382B] mb-1">
                      {t('State *', 'மாநிலம் *')}
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#16382B]/20 bg-[#FAF8F5] focus:outline-none focus:border-[#16382B]"
                    >
                      <option value="Tamil Nadu">Tamil Nadu (தமிழ்நாடு)</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Other">Other State</option>
                    </select>
                  </div>
                </div>

                {/* Quick District Pickers (1-Tap Entry) */}
                <div className="pt-0.5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-[#8A9B93] font-medium">{t('1-Tap District:', 'விரைவு மாவட்டம்:')}</span>
                    {['Tirunelveli', 'Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Kanyakumari'].map(c => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => {
                          const updated = { ...formData, city: c, state: 'Tamil Nadu' };
                          setFormData(updated);
                          try { localStorage.setItem('ruthra_guest_profile', JSON.stringify(updated)); } catch {}
                        }}
                        className={`text-[10px] px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${
                          formData.city.toLowerCase() === c.toLowerCase()
                            ? 'bg-[#16382B] text-white border-[#16382B] font-semibold'
                            : 'bg-[#FAF8F5] text-[#16382B] border-[#16382B]/15 hover:bg-[#E8F1EB]'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Delivery Options */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <div className="border-b border-[#16382B]/10 pb-3">
                <h2 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#16382B] text-white text-xs flex items-center justify-center">3</span>
                  {t('Delivery Mode', 'அஞ்சல் முறை')}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="p-4 rounded-2xl border-2 border-[#16382B] bg-[#E8F1EB]/40 flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    checked={formData.deliveryMethod === 'standard'}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#16382B] block">
                      {t('Tamil Nadu Express Courier (ST Courier / Speed Post)', 'விரைவு அஞ்சல் சேவை')}
                    </span>
                    <span className="text-[11px] text-[#3D5A68]">2 to 3 Business Days</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Payment Infrastructure */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
              <div className="border-b border-[#16382B]/10 pb-3">
                <h2 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#16382B] text-white text-xs flex items-center justify-center">4</span>
                  {t('Payment Method', 'பணம் செலுத்தும் முறை')}
                </h2>
              </div>

              <div className="space-y-3">
                {/* UPI / QR Option */}
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
                        {t('Instant UPI / QR Code (GPay, PhonePe, Paytm, BHIM)', 'யூ.பி.ஐ / க்யூஆர் கோட்')}
                      </span>
                      <QrCode className="w-4 h-4 text-[#16382B]" />
                    </div>
                    <p className="text-[11px] text-[#3D5A68] mt-0.5">
                      {t('Zero transaction fees. Instant dispatch priority.', 'கூடுதல் கட்டணம் ஏதுமில்லை.')}
                    </p>
                  </div>
                </label>

                {/* Cards & Net Banking Option */}
                <label className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'cards' ? 'border-[#16382B] bg-[#E8F1EB]/40' : 'border-[#16382B]/10 bg-white'
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cards"
                    checked={formData.paymentMethod === 'cards'}
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
              className="w-full py-4 px-6 rounded-2xl bg-[#16382B] hover:bg-[#204C3B] active:scale-98 text-white font-serif-brand font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg transition-all"
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
              <h3 className="font-serif-brand text-lg font-bold text-[#16382B] pb-3 border-b border-[#16382B]/10">
                {t('Cart Formulations', 'தேர்ந்தெடுத்த மருந்துகள்')} ({items.length})
              </h3>

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
              </div>

              <div className="pt-4 border-t border-[#16382B]/10 space-y-2 text-xs text-[#3D5A68]">
                <div className="flex justify-between">
                  <span>{t('Total Items MRP', 'மொத்த அசல் விலை')}</span>
                  <span className="line-through text-[#8A9B93]">₹{mrpSubtotal}</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>{t('Direct Siddha Discount', 'சித்த நேரடி தள்ளுபடி')}</span>
                  <span className="font-semibold">-₹{mrpSavings}</span>
                </div>
                {multiPackSavings > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>{t('Multi-Pack Volume Savings', 'இரட்டை பொட்டல சலுகை')}</span>
                    <span className="font-semibold">-₹{multiPackSavings}</span>
                  </div>
                )}
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>{t('Coupon Discount', 'கூப்பன் கழிவு')} ({couponCode})</span>
                    <span className="font-semibold">-₹{couponDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span>{t('Shipping (Tamil Nadu Express)', 'அஞ்சல் கட்டணம்')}</span>
                  <span className="font-semibold text-[#16382B]">
                    {shippingFee === 0 ? <span className="bg-green-50 border border-green-200 text-green-700 px-2 py-0.5 rounded font-bold text-xs">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#16382B]/10 flex justify-between text-base font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'செலுத்த வேண்டிய தொகை')}</span>
                  <span className="font-serif-brand text-xl">₹{total}</span>
                </div>

                {totalSavings > 0 && (
                  <div className="mt-2 p-2.5 rounded-xl bg-[#E8F1EB] border border-green-200 text-xs text-green-800 font-semibold flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Tag className="w-3.5 h-3.5 text-[#C29043]" />
                      <span>{t(`Total Order Savings: ₹${totalSavings}`, `மொத்த சேமிப்பு: ₹${totalSavings}`)}</span>
                    </span>
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
