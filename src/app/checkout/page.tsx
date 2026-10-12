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
  Landmark, 
  Zap,
  Gift, 
  PackageCheck,
  ShieldCheck,
  Percent,
  AlertCircle
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateShippingFee, getDeliveryEstimate } from '@/utils/deliveryEstimator';

// Dynamically loads Razorpay checkout.js SDK
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const INDIAN_STATES = [
  'Tamil Nadu',
  'Puducherry',
  'Karnataka',
  'Kerala',
  'Andhra Pradesh',
  'Telangana',
  'Maharashtra',
  'Delhi',
  'Gujarat',
  'Goa',
  'West Bengal',
  'Rajasthan',
  'Uttar Pradesh',
  'Madhya Pradesh',
  'Punjab',
  'Haryana',
  'Odisha',
  'Bihar',
  'Assam',
  'Jharkhand',
  'Chhattisgarh',
  'Uttarakhand',
  'Himachal Pradesh',
  'Other State in India'
];

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
    discountedSubtotal,
    mrpSubtotal,
    mrpSavings,
    freeGiftSavings,
    totalSavings,
    clearCart
  } = useCart();
  const { language, t } = useLanguage();

  // Initialize form states cleanly
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    landmark: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    paymentMethod: 'razorpay',
    deliveryMethod: 'standard'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [hasSavedProfile, setHasSavedProfile] = useState(false);

  // Load saved guest profile from localStorage strictly on client mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('ruthra_guest_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({
          ...prev,
          fullName: parsed.fullName || '',
          phone: parsed.phone || '',
          email: parsed.email || '',
          address: parsed.address || '',
          landmark: parsed.landmark || '',
          city: parsed.city || '',
          state: parsed.state || 'Tamil Nadu',
          pincode: parsed.pincode || '',
        }));
        if (parsed.fullName || parsed.phone) {
          setHasSavedProfile(true);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };

    // If pincode entered is 6 digits, auto-fill city and state
    if (name === 'pincode' && value.trim().length === 6) {
      const estimate = getDeliveryEstimate(value.trim());
      if (estimate) {
        if (estimate.district && estimate.district !== 'All-India Speed Dispatch') {
          updated.city = estimate.district;
        }
        if (estimate.state === 'Tamil Nadu') {
          updated.state = 'Tamil Nadu';
        }
      } else {
        const autoCity = detectCityFromPincode(value.trim());
        if (autoCity) {
          updated.city = autoCity;
          updated.state = 'Tamil Nadu';
        }
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

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim() || !formData.pincode.trim()) {
      alert(language === 'ta' ? 'அனைத்து விவரங்களையும் பூர்த்தி செய்யவும்.' : 'Please fill in all shipping details (Name, Phone, Address, and Pincode).');
      return;
    }

    setIsProcessing(true);

    try {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert(language === 'ta' ? 'கட்டண நுழைவாயிலை ஏற்றுவதில் பிழை. இணைய இணைப்பை சரிபார்க்கவும்.' : 'Unable to load Razorpay payment gateway. Please check your internet connection.');
        setIsProcessing(false);
        return;
      }

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

      // Calculate exact shipping for order payload
      const currentShipping = calculateShippingFee(
        discountedSubtotal,
        formData.state,
        formData.pincode
      );
      const checkoutShippingFee = items.length > 0 ? currentShipping.fee : 0;
      const checkoutTotal = discountedSubtotal + checkoutShippingFee;

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
        shippingFee: checkoutShippingFee,
        totalAmount: checkoutTotal,
        deliveryMethod: formData.deliveryMethod === 'standard' ? 'Express Courier' : 'Speed Post',
        paymentMethod: 'razorpay',
        notes: discountPercent > 0 ? `${discountPercent}% Volume Discount Applied` : undefined
      };

      // 1. Initialize order on server (amount recalculated server-side from catalog)
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(it => ({ productId: it.product.id, quantity: it.quantity })),
          state: formData.state,
          pincode: formData.pincode,
          customerName: formData.fullName,
          customerPhone: formData.phone
        })
      });

      const orderData = await orderRes.json();
      if (!orderData.success) {
        alert(orderData.error || 'Failed to initialize payment gateway.');
        setIsProcessing(false);
        return;
      }

      // 2. Open official Razorpay modal
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'Ruthra Medicines',
        description: 'Authentic Siddha & Ayurveda Formulations',
        image: '/images/ruthra-logo.png',
        order_id: orderData.orderId,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          city: formData.city,
          pincode: formData.pincode
        },
        theme: {
          color: '#16382B'
        },
        handler: async function (response: any) {
          try {
            // 3. Cryptographically verify signature and save paid order with server-recalculated catalog items
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
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
                items: items.map(it => ({ productId: it.product.id, quantity: it.quantity })),
                freeGiftItems,
                deliveryMethod: formData.deliveryMethod === 'standard' ? 'Express Courier' : 'Speed Post',
                notes: discountPercent > 0 ? `${discountPercent}% Volume Discount Applied` : undefined
              })
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              const confirmedOrderNumber = verifyData.orderNumber || verifyData.orderId;
              try {
                sessionStorage.setItem(
                  'ruthra_last_order',
                  JSON.stringify({
                    orderId: confirmedOrderNumber,
                    invoiceNumber: verifyData.invoiceNumber || `INV-${confirmedOrderNumber}`,
                    formData,
                    items,
                    freeGiftItems,
                    subtotal,
                    discountPercent,
                    discountAmount,
                    shippingFee: checkoutShippingFee,
                    total: checkoutTotal,
                    paymentMethod: 'razorpay',
                    transactionRef: response.razorpay_payment_id,
                    createdAt: new Date().toISOString()
                  })
                );
              } catch {}

              clearCart();
              router.push(`/order-success?orderId=${confirmedOrderNumber}`);
            } else {
              alert(verifyData.error || 'Payment verification failed. Please contact customer care.');
              setIsProcessing(false);
            }
          } catch (verifyErr) {
            console.error('Payment verification error:', verifyErr);
            alert('An error occurred confirming your order.');
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (resp: any) {
        console.error('Razorpay payment failed:', resp);
        alert(resp?.error?.description || 'Payment was unsuccessful. Please try again.');
        setIsProcessing(false);
      });
      rzp.open();
    } catch (err: any) {
      console.error('Order submission error:', err);
      alert(err?.message || 'Payment initiation failed.');
      setIsProcessing(false);
    }
  };

  // Dynamic shipping calculation for checkout view
  const checkoutShipping = calculateShippingFee(
    discountedSubtotal,
    formData.state,
    formData.pincode
  );
  const checkoutShippingFee = items.length > 0 ? checkoutShipping.fee : 0;
  const checkoutTotal = discountedSubtotal + checkoutShippingFee;

  const whatsappPurchasedSummary = items
    .map(i => `• ${i.product.name} (${i.product.packSize}) × ${i.quantity} = ₹${i.product.price * i.quantity}`)
    .join('\n');
  const whatsappDiscountSummary = discountAmount > 0
    ? `\n\n• Volume Discount (${discountPercent}% OFF): -₹${discountAmount}`
    : '';
  const whatsappGiftSummary = freeGiftItems.length > 0
    ? '\n\nFree Formulation Bonus (Cart Items Selection):\n' + freeGiftItems.map(g => `• [FREE] ${g.product.name} (${g.product.packSize}) × ${g.quantity}`).join('\n')
    : '';
  const whatsappShippingSummary = checkoutShippingFee === 0
    ? `\n\n• Delivery Charges (${checkoutShipping.regionLabelEn}): FREE (₹0)`
    : `\n\n• Delivery Charges (${checkoutShipping.regionLabelEn}): ₹${checkoutShippingFee}`;

  const whatsappOrderText = `Vanakkam Ruthra Medicines,\nI would like to place an order directly:\n\n${whatsappPurchasedSummary}${whatsappDiscountSummary}${whatsappGiftSummary}${whatsappShippingSummary}\n\nTotal Payable: ₹${checkoutTotal}\nCustomer Name: ${formData.fullName || '(Direct Guest)'}\nPhone: ${formData.phone || '(This contact)'}\nAddress: ${formData.address ? `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}` : '(Will share on chat)'}\n\nPlease confirm dispatch and tracking details.`;

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
                {t('Send your cart items directly. Our dispatch desk will confirm order details and tracking immediately.', 'உங்கள் கூடை விபரங்களை நேரடியாக அனுப்பி வாட்ஸ்அப்பில் முடிக்கலாம்.')}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/919043434226?text=${encodeURIComponent(whatsappOrderText)}`}
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
                    {t('State', 'மாநிலம்')} *
                  </label>
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16382B]/15 rounded-xl text-xs sm:text-sm text-[#264653] font-medium focus:outline-none focus:border-[#16382B]"
                  >
                    {INDIAN_STATES.map(st => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
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
                  Official Direct Merchant Settlement
                </p>
              </div>

              <div className="space-y-3">
                {/* Razorpay Unified Online Payment Banner */}
                <div className="p-4 sm:p-5 rounded-2xl border-2 border-emerald-700/60 bg-emerald-50/50 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#16382B] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                        ₹
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-[#16382B]">
                          {t('Razorpay Secure Payment Gateway', 'ரேசர்பே பாதுகாப்பான கட்டண முறை')}
                        </h3>
                        <p className="text-[11px] text-[#5C7368]">
                          {t('Instant UPI, Debit/Credit Cards & Net Banking', 'உடனடி UPI, கார்டுகள் மற்றும் வங்கி பரிவர்த்தனை')}
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      100% Secure
                    </span>
                  </div>

                  {/* Badges of supported payment modes */}
                  <div className="pt-2 border-t border-emerald-200/60 grid grid-cols-3 gap-2 text-center text-[10.5px] font-semibold text-[#16382B]">
                    <div className="p-2 rounded-xl bg-white border border-emerald-100 flex flex-col items-center gap-1 shadow-2xs">
                      <QrCode className="w-4 h-4 text-emerald-700" />
                      <span>UPI / GPay / PhonePe</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-emerald-100 flex flex-col items-center gap-1 shadow-2xs">
                      <CreditCard className="w-4 h-4 text-emerald-700" />
                      <span>Cards (RuPay, Visa, MC)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-emerald-100 flex flex-col items-center gap-1 shadow-2xs">
                      <Landmark className="w-4 h-4 text-emerald-700" />
                      <span>50+ Net Banking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 rounded-2xl bg-[#16382B] hover:bg-[#204C3B] active:scale-98 text-white font-serif-brand font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              {isProcessing ? (
                <span>{t('Opening Razorpay Gateway...', 'ரேசர்பே திறக்கப்படுகிறது...')}</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5 text-[#C29043]" />
                  <span>{t(`Pay Securely via Razorpay — ₹${checkoutTotal}`, `பாதுகாப்பாக பணம் செலுத்துங்கள் — ₹${checkoutTotal}`)}</span>
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
                  <span>
                    {t(`Delivery Charges (${checkoutShipping.regionLabelEn})`, `அஞ்சல் கட்டணம் (${checkoutShipping.regionLabelTa})`)}
                  </span>
                  {checkoutShippingFee === 0 ? (
                    <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md text-xs">
                      {t('FREE (₹0)', 'இலவசம் (₹0)')}
                    </span>
                  ) : (
                    <span className="font-bold text-[#16382B] text-xs sm:text-sm">
                      ₹{checkoutShippingFee}
                    </span>
                  )}
                </div>

                <div className="pt-2.5 border-t border-[#16382B]/10 flex justify-between items-center text-base font-bold text-[#16382B]">
                  <span>{t('Total Payable', 'செலுத்த வேண்டிய தொகை')}</span>
                  <span className="font-serif-brand text-xl text-[#16382B]">₹{checkoutTotal}</span>
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
                  'Our support team can process your order directly. Simply message us your delivery address.',
                  'எங்கள் மருத்துவ இல்லத்திற்கு நேரடியாக வாட்ஸ்அப்பில் முகவரியை அனுப்பி ஆர்டர் செய்யலாம்.'
                )}
              </p>
              <a
                href={`https://wa.me/919043434226?text=${encodeURIComponent(whatsappOrderText)}`}
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
