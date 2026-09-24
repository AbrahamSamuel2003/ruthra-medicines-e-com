'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ShoppingBag,
  Zap,
  Plus,
  Minus,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  Clock,
  HelpCircle,
  Share2,
  Check,
  Truck,
  Leaf,
  Tag,
  Flame,
  Droplets,
  Layers,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Maximize2,
  MessageCircle,
  X,
  Gift
} from 'lucide-react';
import { Product } from '@/types/product';
import { useCart, getProductMRP, calculateDiscountPercent, calculateFreeGiftsEarned } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import WhatsAppAssistance from '@/components/WhatsAppAssistance';
import PincodeDeliveryEstimator from '@/components/PincodeDeliveryEstimator';
import ProductCard from '@/components/ProductCard';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const router = useRouter();
  const { addItem, openDrawer, openGiftModal, freeSlotsEarned, freeSlotsRemaining } = useCart();
  const { language, t } = useLanguage();

  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'howToUse' | 'dosage' | 'safety' | 'storage' | 'faq'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const isComingSoon = Boolean(product.isComingSoon);
  const stockCount = product.stock !== undefined ? product.stock : 20;
  const isOutOfStock = !isComingSoon && (!product.inStock || stockCount <= 0);
  const isLowStock = !isComingSoon && !isOutOfStock && stockCount <= 10;
  const maxQuantity = Math.max(1, Math.min(stockCount > 0 ? stockCount : 1, 10));

  const fallbackImg = '/images/ruthra-icon.png';
  // Cache-busting version so new AI packaging graphics are never superseded by stale Next.js cache
  const CACHE_VERSION = 'v=ruthra-20260916-2';
  const getBustedUrl = (url?: string | null) => {
    if (!url || !url.trim()) return fallbackImg;
    if (url.startsWith('data:') || url.startsWith('blob:') || url.startsWith('http')) return url;
    return url.includes('?') ? `${url}&${CACHE_VERSION}` : `${url}?${CACHE_VERSION}`;
  };
  const rawList = (product.images && product.images.length > 0
    ? product.images
    : product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image || fallbackImg])
    .filter(Boolean)
    .map(getBustedUrl);

  const galleryImages = rawList.length >= 3
    ? rawList.slice(0, 3)
    : [rawList[0] || fallbackImg, rawList[1] || rawList[0] || fallbackImg, rawList[2] || rawList[0] || fallbackImg];

  const activeImage = galleryImages[selectedImageIndex] || galleryImages[0] || fallbackImg;

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product.id, product.slug]);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNextImage();
    } else if (diff < -45) {
      handlePrevImage();
    }
    setTouchStart(null);
  };

  // Mobile Expandable Accordions state
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    overview: true,
    ingredients: false,
    howToUse: false,
    dosage: false,
    safety: false,
    storage: false,
    faq: false,
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Trigger floating bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    addItem(product, quantity);
    openDrawer();
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Pricing & Value Calculations
  const mrp = getProductMRP(product);
  const unitSavings = Math.max(0, mrp - product.price);
  const discountPercent = Math.round((unitSavings / mrp) * 100);
  const volumeDiscountPercent = calculateDiscountPercent(quantity);
  const potentialFreeGifts = calculateFreeGiftsEarned(quantity);

  const tabs = [
    { id: 'overview' as const, labelEn: 'Overview', labelTa: 'கண்ணோட்டம்', icon: Leaf },
    { id: 'ingredients' as const, labelEn: 'Ingredients & Shodhana', labelTa: 'மூலிகைகள் & சுத்தி', icon: Droplets },
    { id: 'howToUse' as const, labelEn: 'How to Use', labelTa: 'பயன்பாடு', icon: Flame },
    { id: 'dosage' as const, labelEn: 'Dosage & Vehicle', labelTa: 'அளவு & துணைப்பொருள்', icon: Layers },
    { id: 'safety' as const, labelEn: 'Safety Guidance', labelTa: 'பாதுகாப்பு', icon: AlertTriangle },
    { id: 'storage' as const, labelEn: 'Storage & Shelf Life', labelTa: 'சேமிப்பு & காலம்', icon: Clock },
    { id: 'faq' as const, labelEn: 'Product FAQs', labelTa: 'கேள்வி பதில்', icon: HelpCircle },
  ];

  // Helper to render content for any given tab/accordion panel
  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case 'overview':
        return (
          <div className="space-y-4 max-w-3xl">
            <h3 className="font-serif-brand text-base sm:text-xl font-bold text-[#16382B]">
              {t('Detailed Botanical Formulation Profile', 'விரிவான சித்த தயாரிப்பு கண்ணோட்டம்')}
            </h3>
            <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
              {language === 'ta' ? product.descriptionTa : product.description}
            </p>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#C29043]">
                {t('Classical Siddha Context', 'பாரம்பரிய சித்த மருத்துவ பின்னணி')}
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#16382B] leading-relaxed">
                {language === 'ta' ? product.traditionalRoleTa : product.traditionalRole}
              </p>
            </div>
          </div>
        );

      case 'ingredients':
        return (
          <div className="space-y-5">
            <div>
              <h3 className="font-serif-brand text-base sm:text-xl font-bold text-[#16382B]">
                {t('Botanical Ingredients & Traditional Roles', 'மூலிகை சேர்க்கை மற்றும் பாரம்பரிய இயல்பு')}
              </h3>
              <p className="text-xs text-[#8A9B93] mt-1">
                {t(
                  'Ruthra maintains strict botanical transparency. Every botanical is ethically wildcrafted, cleaned, and purified per Shodhana.',
                  'எந்தவித ரசாயன கலப்பும் இன்றி பாரம்பரிய நெறிமுறைகளின்படி சுத்தி செய்யப்பட்ட இயற்கை மூலிகைகள்.'
                )}
              </p>
            </div>

            {/* Visual Botanical Percentage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {product.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-[#16382B]">
                        {language === 'ta' ? ing.tamilName : ing.name}
                      </span>
                      {ing.amount && (
                        <span className="text-[9.5px] font-bold text-[#C29043] bg-white px-2 py-0.5 rounded-md border border-[#C29043]/30">
                          {ing.amount}
                        </span>
                      )}
                    </div>

                    {ing.botanicalName && (
                      <p className="text-[10px] italic text-[#8A9B93] font-serif mt-0.5">
                        {ing.botanicalName}
                      </p>
                    )}

                    <p className="text-[11px] text-[#3D5A68] mt-1.5 leading-snug">
                      {language === 'ta' ? ing.roleTa : ing.role}
                    </p>
                  </div>

                  {ing.amount && (
                    <div className="w-full h-1.5 rounded-full bg-[#16382B]/10 overflow-hidden mt-2">
                      <div
                        className="h-full bg-[#C29043] rounded-full"
                        style={{ width: ing.amount }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Complete Tabular Transparency Grid */}
            <div className="overflow-x-auto border border-[#16382B]/10 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#16382B]/10 bg-[#FAF8F5]">
                    <th className="py-2.5 px-3 font-bold text-[#16382B]">{t('Ingredient', 'மூலிகை')}</th>
                    <th className="py-2.5 px-3 font-bold text-[#16382B]">{t('Botanical Binomial', 'தாவரவியல் பெயர்')}</th>
                    <th className="py-2.5 px-3 font-bold text-[#16382B]">{t('Traditional Role in Siddha', 'பாரம்பரிய குணம்')}</th>
                    <th className="py-2.5 px-3 font-bold text-[#16382B] text-right">{t('Proportion', 'அளவு')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#16382B]/5">
                  {product.ingredients.map((ing, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F5]/50 transition-colors">
                      <td className="py-2 px-3 font-semibold text-[#16382B]">
                        {language === 'ta' ? ing.tamilName : ing.name}
                      </td>
                      <td className="py-2 px-3 italic text-[#8A9B93] font-serif">
                        {ing.botanicalName || '—'}
                      </td>
                      <td className="py-2 px-3 text-[#3D5A68]">
                        {language === 'ta' ? ing.roleTa : ing.role}
                      </td>
                      <td className="py-2 px-3 text-right font-bold text-[#C29043]">
                        {ing.amount || 'Q.S.'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'howToUse':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-serif-brand text-base sm:text-xl font-bold text-[#16382B]">
                {t('Step-by-Step Preparation & Intake', 'பயன்படுத்தும் முறை வழிகாட்டல்')}
              </h3>
              <p className="text-xs text-[#8A9B93] mt-1">
                {t(
                  'Follow these simple classical preparation steps for maximum herbal bio-availability.',
                  'மூலிகையின் முழுமையான பலனைப் பெற முறைப்படி பின்பற்றவும்.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {product.howToUse.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-2 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#16382B] text-[#C29043] font-serif-brand font-bold text-xs flex items-center justify-center shadow-2xs">
                        {step.step}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-[#8A9B93] tracking-wider">
                        Step {idx + 1}
                      </span>
                    </div>

                    <h4 className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B]">
                      {language === 'ta' ? step.titleTa : step.title}
                    </h4>

                    <p className="text-xs text-[#3D5A68] mt-1 leading-relaxed">
                      {language === 'ta' ? step.instructionTa : step.instruction}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#16382B]/5 text-[10px] text-[#C29043] font-semibold flex items-center gap-1">
                    <span>{t('Classical Standard', 'முறைப்படி அருந்துக')}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'dosage':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-serif-brand text-base sm:text-xl font-bold text-[#16382B]">
                {t('Dosage, Timing & Recommended Vehicle (Anupanam)', 'மருந்து அளவு மற்றும் துணைப்பொருள்')}
              </h3>
              <p className="text-xs text-[#8A9B93] mt-1">
                {t(
                  'In Siddha, the Anupanam acts as an escort fluid driving the medicinal actives to target tissues.',
                  'சித்த மருத்துவத்தில் துணைப்பொருள் மருந்தின் குணத்தை உடலில் கொண்டு சேர்க்கும் முக்கிய ஊடகமாகும்.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 space-y-0.5">
                <span className="text-[9px] uppercase font-bold text-[#8A9B93] tracking-wider block">
                  {t('Recommended Dose', 'பரிந்துரைக்கப்படும் அளவு')}
                </span>
                <p className="font-serif-brand font-bold text-xs sm:text-base text-[#16382B]">
                  {language === 'ta' ? product.dosage.amountTa : product.dosage.amount}
                </p>
                <p className="text-[9.5px] text-[#8C9E96]">Per single administration</p>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 space-y-0.5">
                <span className="text-[9px] uppercase font-bold text-[#8A9B93] tracking-wider block">
                  {t('Frequency', 'எடுத்துக்கொள்ளும் முறை')}
                </span>
                <p className="font-serif-brand font-bold text-xs sm:text-base text-[#16382B]">
                  {language === 'ta' ? product.dosage.frequencyTa : product.dosage.frequency}
                </p>
                <p className="text-[9.5px] text-[#8C9E96]">Daily regimen</p>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 space-y-0.5">
                <span className="text-[9px] uppercase font-bold text-[#8A9B93] tracking-wider block">
                  {t('Timing with Meals', 'உணவு இடைவெளி')}
                </span>
                <p className="font-serif-brand font-bold text-xs sm:text-base text-[#16382B]">
                  {language === 'ta' ? product.dosage.timingTa : product.dosage.timing}
                </p>
                <p className="text-[9.5px] text-[#8C9E96]">For optimum absorption</p>
              </div>

              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 space-y-0.5">
                <span className="text-[9px] uppercase font-bold text-[#8A9B93] tracking-wider block">
                  {t('Carrier / Anupanam', 'துணைப்பொருள்')}
                </span>
                <p className="font-serif-brand font-bold text-xs sm:text-base text-[#16382B]">
                  {language === 'ta' ? product.dosage.vehicleTa : product.dosage.vehicle}
                </p>
                <p className="text-[9.5px] text-[#8C9E96]">Traditional escort medium</p>
              </div>
            </div>
          </div>
        );

      case 'safety':
        return (
          <div className="space-y-3.5 max-w-3xl">
            <div className="flex items-center gap-2 text-[#D9534F]">
              <AlertTriangle className="w-4 h-4" />
              <h3 className="font-serif-brand text-base sm:text-xl font-bold text-[#D9534F]">
                {t('Safety Precautions & Usage Guidance', 'பாதுகாப்பு மற்றும் வழிகாட்டுதல்கள்')}
              </h3>
            </div>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-[#FDF2F2] border border-[#D9534F]/30 text-xs text-[#782623]">
                <span className="font-bold block text-[#D9534F]">{t('Pregnancy & Lactation:', 'கர்ப்ப காலம் & பாலூட்டுதல்:')}</span>
                <p className="mt-0.5 leading-relaxed">{language === 'ta' ? product.safety.pregnancyTa : product.safety.pregnancy}</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs text-[#264653]">
                <span className="font-bold block text-[#16382B]">{t("Children's Use:", 'குழந்தைகள் பயன்பாடு:')}</span>
                <p className="mt-0.5 leading-relaxed">{language === 'ta' ? product.safety.childrenTa : product.safety.children}</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs text-[#264653]">
                <span className="font-bold block text-[#16382B]">{t('Medicine Intervals:', 'பிற மருந்துகளுடன் இடைவெளி:')}</span>
                <p className="mt-0.5 leading-relaxed">{language === 'ta' ? product.safety.interactionsTa : product.safety.interactions}</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#16382B]/15 text-xs space-y-1">
                <span className="font-bold block text-[#16382B]">{t('General Precautions:', 'பொதுவான குறிப்புகள்:')}</span>
                <ul className="list-disc pl-5 space-y-0.5 text-[#3D5A68]">
                  {(Array.isArray(language === 'ta' ? product.safety?.precautionsTa : product.safety?.precautions)
                    ? (language === 'ta' ? product.safety?.precautionsTa : product.safety?.precautions) as string[]
                    : [(language === 'ta' ? product.safety?.precautionsTa : product.safety?.precautions) as string].filter(Boolean)
                  ).map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'storage':
        return (
          <div className="space-y-4 max-w-3xl">
            <h3 className="font-serif-brand text-base sm:text-xl font-bold text-[#16382B]">
              {t('Storage Guidelines & Shelf Life', 'சேமிப்பு மற்றும் காலாவதி விபரம்')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C29043] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8A9B93] tracking-wider block">
                    {t('Shelf Life', 'பயன்பாட்டு காலம்')}
                  </span>
                  <p className="font-bold text-xs sm:text-base text-[#16382B] mt-0.5">
                    {language === 'ta' ? product.storage.shelfLifeTa : product.storage.shelfLife}
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#16382B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8A9B93] tracking-wider block">
                    {t('Storage Conditions', 'பாதுகாக்க வேண்டிய சூழல்')}
                  </span>
                  <p className="font-medium text-xs text-[#3D5A68] mt-0.5">
                    {language === 'ta' ? product.storage.conditionsTa : product.storage.conditions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-3 max-w-3xl">
            <h3 className="font-serif-brand text-base sm:text-xl font-bold text-[#16382B]">
              {t('Frequently Asked Questions', 'அடிக்கடி கேட்கப்படும் கேள்விகள்')}
            </h3>

            {product.faqs.map((faq, idx) => (
              <div key={idx} className="p-3 sm:p-4 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 space-y-1">
                <h4 className="font-semibold text-xs sm:text-sm text-[#16382B] flex items-center gap-2">
                  <HelpCircle className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
                  <span>{language === 'ta' ? faq.questionTa : faq.question}</span>
                </h4>
                <p className="text-xs text-[#3D5A68] pl-5.5 leading-relaxed">
                  {language === 'ta' ? faq.answerTa : faq.answer}
                </p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] pb-24 md:pb-14 pt-3 sm:pt-6">
      {/* 1. DESKTOP STICKY FLOATING PURCHASE BAR */}
      {showStickyBar && (
        <div className="hidden md:flex fixed top-[69px] left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#16382B]/15 shadow-md py-2 transition-all duration-300 animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] p-1 border border-[#16382B]/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src={getBustedUrl(product.image)}
                  alt={product.name}
                  width={32}
                  height={32}
                  unoptimized
                  className="object-contain max-h-7"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B] truncate max-w-xs lg:max-w-sm leading-tight">
                  {language === 'ta' ? product.tamilName : product.name}
                </p>
                <p className="text-[10px] text-[#8C9E96] truncate">
                  {language === 'ta' ? product.packSizeTa : product.packSize} • {language === 'ta' ? product.formulationTa : product.formulation}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="text-right">
                <span className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B]">
                  {product.price > 0 ? `₹${product.price * quantity}` : t('Price on Request', 'விலை விபரம் கோரலாம்')}
                </span>
                {mrp > product.price && (
                  <span className="text-[10px] text-[#8A9B93] line-through ml-1.5">
                    ₹{mrp * quantity}
                  </span>
                )}
              </div>

              {isComingSoon || isOutOfStock ? (
                <a
                  href={`https://wa.me/919171508042?text=${encodeURIComponent(
                    isComingSoon
                      ? `Hello Ruthra Siddha Medicines, I want to enquire about when ${product.name} (${product.tamilName}) will be available.`
                      : `Hello Ruthra Siddha Medicines, please notify me when ${product.name} (${product.tamilName}) is back in stock.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isComingSoon ? t('Coming Soon - Enquire', 'தயாரிப்பில் - விசாரிக்க') : t('Out of Stock - Enquire', 'கையிருப்பில்லை - அறிய')}</span>
                </a>
              ) : (
                <>
                  <div className="flex items-center border border-[#16382B]/20 rounded-lg overflow-hidden bg-[#FAF8F5]">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-xs font-semibold text-[#16382B]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                      className="p-1.5 text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="py-2 px-3.5 rounded-lg bg-[#16382B] hover:bg-[#204C3B] active:scale-95 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{t('Add to Cart', 'சேர்க்க')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="py-2 px-3.5 rounded-lg bg-[#C29043] hover:bg-[#DFB36C] active:scale-95 text-[#16382B] text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{t('Buy Now', 'வாங்க')}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Compact Breadcrumbs */}
        <nav className="text-[11px] text-[#8A9B93] mb-2.5 sm:mb-4 flex items-center gap-1.5 flex-wrap font-medium">
          <Link href="/" className="hover:text-[#16382B] transition-colors">{t('Home', 'முகப்பு')}</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#16382B] transition-colors">{t('Shop', 'மருந்துகள்')}</Link>
          <span>/</span>
          <Link href={`/shop/formulations/${product.formulation.toLowerCase()}`} className="hover:text-[#16382B] transition-colors">
            {language === 'ta' ? product.formulationTa : product.formulation}
          </Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold truncate max-w-xs">
            {language === 'ta' ? product.tamilName : product.name}
          </span>
        </nav>

        {/* PRIMARY SHOWCASE CARD (NATIVE MOBILE TOUCH FEEL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-7 items-start bg-white p-3.5 sm:p-6 lg:p-7 rounded-2xl border border-[#16382B]/10 shadow-xs">
          
          {/* Left Column: Image Showcase with Reference 3-Image Gallery */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-3">
            <div
              className="relative aspect-square sm:aspect-[4/3] max-h-[390px] w-full rounded-2xl bg-white border border-[#16382B]/10 flex items-center justify-center overflow-hidden group select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Badges (Top Left) */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/95 border border-[#C29043]/50 text-[#16382B] shadow-2xs">
                  {language === 'ta' && product.badgeTa ? product.badgeTa : product.badge || 'Classical Siddha'}
                </span>
              </div>

              {/* Counter & Fullscreen Controls (Top Right) */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs shadow-2xs">
                  {selectedImageIndex + 1}/{galleryImages.length}
                </span>
                <button
                  type="button"
                  onClick={() => setIsFullscreenOpen(true)}
                  className="p-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#16382B]/15 text-[#16382B] hover:text-[#C29043] transition-colors shadow-2xs cursor-pointer active:scale-95"
                  title="Expand image"
                  aria-label="View fullscreen image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Main Active Product Artwork with Soft Ground Shadow */}
              <div className="relative w-full h-full flex items-center justify-center p-3">
                <div className="relative w-full h-full max-h-[340px] transition-transform duration-300">
                  <Image
                    key={activeImage}
                    src={activeImage}
                    alt={`${product.name} - View ${selectedImageIndex + 1}`}
                    fill
                    unoptimized
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>
              </div>

              {/* Navigation Arrows (< and >) */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#16382B] border border-[#16382B]/15 flex items-center justify-center shadow-md transition-all opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#16382B] border border-[#16382B]/15 flex items-center justify-center shadow-md transition-all opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Pagination Dots (Bottom Left) */}
              {galleryImages.length > 1 && (
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10 bg-white/80 backdrop-blur-xs px-2 py-1 rounded-full border border-[#16382B]/10">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`transition-all rounded-full cursor-pointer ${
                        idx === selectedImageIndex
                          ? 'w-4 h-1.5 bg-[#C29043]'
                          : 'w-1.5 h-1.5 bg-[#16382B]/30 hover:bg-[#16382B]/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Share button (Bottom Right) */}
              <button
                type="button"
                onClick={handleShare}
                className="absolute bottom-3 right-3 p-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#16382B]/15 text-[#16382B] hover:text-[#C29043] transition-colors shadow-2xs cursor-pointer active:scale-95 z-10"
                title="Share link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* 3 THUMBNAILS ROW */}
            <div className="grid grid-cols-3 gap-2.5 pt-0.5">
              {galleryImages.slice(0, 3).map((imgUrl, idx) => {
                const isSelected = idx === selectedImageIndex;
                const angleLabels = [
                  { en: 'Front View', ta: 'முன்புற தோற்றம்' },
                  { en: 'Angle View', ta: 'பக்கவாட்டு தோற்றம்' },
                  { en: 'Info & Back', ta: 'தகவல் / பின்புறம்' }
                ];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-square rounded-2xl overflow-hidden bg-white border transition-all cursor-pointer p-1.5 flex flex-col items-center justify-between ${
                      isSelected
                        ? 'border-[#C29043] ring-2 ring-[#C29043] shadow-xs'
                        : 'border-[#16382B]/15 hover:border-[#16382B]/40 opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`View ${angleLabels[idx]?.en || `view ${idx + 1}`}`}
                  >
                    <div className="relative w-full flex-1 max-h-[80%]">
                      <Image
                        src={imgUrl}
                        alt={`${product.name} view ${idx + 1}`}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                    <span className={`text-[8.5px] font-semibold block truncate w-full text-center mt-1 ${
                      isSelected ? 'text-[#C29043] font-bold' : 'text-[#8A9B93]'
                    }`}>
                      {language === 'ta' ? angleLabels[idx]?.ta : angleLabels[idx]?.en}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* FULLSCREEN LIGHTBOX MODAL */}
            {isFullscreenOpen && (
              <div
                className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
                onClick={() => setIsFullscreenOpen(false)}
              >
                <div
                  className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-full flex items-center justify-between pb-3 border-b border-[#16382B]/10">
                    <div>
                      <h3 className="font-serif-brand font-bold text-base text-[#16382B]">
                        {language === 'ta' ? product.tamilName : product.name}
                      </h3>
                      <span className="text-xs text-[#8A9B93]">
                        {t(`Image ${selectedImageIndex + 1} of ${galleryImages.length}`, `படம் ${selectedImageIndex + 1} / ${galleryImages.length}`)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsFullscreenOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="relative w-full h-[60vh] my-4 flex items-center justify-center">
                    <Image
                      src={activeImage}
                      alt={product.name}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {galleryImages.length > 1 && (
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>{t('Previous', 'முந்தைய')}</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNextImage}
                        className="px-4 py-2 rounded-xl bg-[#16382B] text-white hover:bg-[#204C3B] text-sm font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <span>{t('Next', 'அடுத்தது')}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Compact Horizontal Trust Micro-Strip */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[9.5px] sm:text-[10px] text-[#3D5A68]">
              <div className="p-2 bg-[#FAF8F5] rounded-xl border border-[#16382B]/5">
                <span className="font-bold block text-[#16382B] truncate">{t('Tirunelveli House', 'திருநெல்வேலி')}</span>
                <span className="text-[#8A9B93] block truncate text-[9px]">{t('Authentic Sourcing', 'பாரம்பரிய மூலம்')}</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] rounded-xl border border-[#16382B]/5">
                <span className="font-bold block text-[#16382B] truncate">{t('Pure Shodhana', 'சுத்தி முறை')}</span>
                <span className="text-[#8A9B93] block truncate text-[9px]">{t('100% Traditional', 'தூய மூலிகைகள்')}</span>
              </div>
              <div className="p-2 bg-[#FAF8F5] rounded-xl border border-[#16382B]/5">
                <span className="font-bold block text-[#16382B] truncate">{t('38 Districts', '38 மாவட்டங்கள்')}</span>
                <span className="text-[#8A9B93] block truncate text-[9px]">{t('Express Courier', 'விரைவு அஞ்சல்')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial & Product Information */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-3 sm:space-y-3.5">
            
            {/* Title & Metadata */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9.5px] sm:text-[10px] uppercase font-bold tracking-wider text-[#C29043]">
                  {language === 'ta' ? 'பாரம்பரிய சித்த மருந்து' : 'Classical Siddha Pharmacopeia'}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-[10.5px] sm:text-[11px] font-semibold text-[#8A9B93]">
                  {language === 'ta' ? product.packSizeTa : product.packSize}
                </span>
              </div>

              <h1 className="font-serif-brand text-xl sm:text-2xl lg:text-3xl font-bold text-[#16382B] leading-snug">
                {language === 'ta' ? product.tamilName : product.name}
              </h1>

              <p className="font-serif-brand text-sm sm:text-base text-[#C29043] font-medium mt-0.5">
                {language === 'ta' ? product.name : product.tamilName}
              </p>

              <p className="text-xs text-[#264653] mt-1.5 leading-relaxed line-clamp-2">
                {language === 'ta' ? product.shortDescriptionTa : product.shortDescription}
              </p>
            </div>

            {/* Quick-Fact Clinical Benefit Chips */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-xl bg-[#E8F1EB]/70 border border-[#16382B]/10 flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-[#16382B] flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-[9px] uppercase font-bold text-[#16382B] block truncate">
                    {t('Hero Botanicals', 'முக்கிய மூலிகைகள்')}
                  </span>
                  <span className="text-[10px] sm:text-[10.5px] text-[#3D5A68] truncate block font-medium">
                    {product.ingredients.slice(0, 2).map(i => language === 'ta' ? i.tamilName : i.name.split(' ')[0]).join(' & ')}
                  </span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#E8F1EB]/70 border border-[#16382B]/10 flex items-center gap-2">
                <Droplets className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-[9px] uppercase font-bold text-[#16382B] block truncate">
                    {t('Carrier / Anupanam', 'துணைப்பொருள்')}
                  </span>
                  <span className="text-[10px] sm:text-[10.5px] text-[#3D5A68] truncate block font-medium">
                    {language === 'ta' ? product.dosage.vehicleTa : product.dosage.vehicle}
                  </span>
                </div>
              </div>
            </div>

            {/* Price Box with Strikethrough MRP, Discount Badge, and Multi-Pack Savings or Coming Soon */}
            {product.isComingSoon ? (
              <div className="p-4 sm:p-5 bg-[#FFFDF9] rounded-2xl border border-[#C29043]/40 shadow-xs space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300/60">
                      <Clock className="w-3.5 h-3.5 text-amber-800" />
                      <span>{t('Artisanal Preparation In Progress', 'பாரம்பரிய தயாரிப்பு முறையில் உள்ளது')}</span>
                    </span>
                    <div className="mt-2">
                      <span className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
                        {product.price > 0 ? `Est. ₹${product.price}` : t('Price on Request', 'விலை விபரம் கோரலாம்')}
                      </span>
                      <p className="text-xs text-[#8A9B93] mt-0.5">
                        {t('Classical formulation crafted in seasonal artisanal batches per Shodhana.', 'சுத்தி முறைப்படி குறிப்பிட்ட பருவத்தில் தயாரிக்கப்படும் உன்னத மருந்து.')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 text-xs text-[#264653] space-y-1">
                  <p className="font-semibold text-[#16382B]">
                    {t('Direct WhatsApp Order & Availability Desk:', 'நேரடி வாட்ஸ்அப் பதிவு & இருப்பு தகவல்:')}
                  </p>
                  <p className="text-[#3D5A68]">
                    {t(
                      'You can enquire about batch readiness, reserve stock, or consult our Siddha desk for clinical guidance.',
                      'மருந்து தயாராகும் தேதி அறிய அல்லது முன்பதிவு செய்ய எங்கள் மருத்துவ உதவியாளரை தொடர்பு கொள்ளவும்.'
                    )}
                  </p>
                </div>

                <a
                  href={`https://wa.me/919171508042?text=${encodeURIComponent(`Hello Ruthra Siddha Medicines, I want to enquire/reserve: ${product.name} (${product.tamilName}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('Enquire / Reserve on WhatsApp', 'வாட்ஸ்அப்பில் முன்பதிவு செய்ய / விசாரிக்க')}</span>
                </a>
              </div>
            ) : (
              <div className="p-3 sm:p-4 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#8A9B93] tracking-wider block leading-none">
                      {t('Price (Inclusive of all taxes)', 'விலை (வரிகள் உட்பட)')}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2 mt-0.5">
                      <span className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
                        ₹{product.price}
                      </span>
                      <span className="text-xs sm:text-sm text-[#8A9B93] line-through">
                        ₹{mrp}
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded">
                        {discountPercent}% OFF • {t(`Save ₹${unitSavings}`, `₹${unitSavings} சேமிப்பு`)}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    {isOutOfStock ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-[10.5px] sm:text-[11px] font-bold border border-red-200">
                        <AlertCircle className="w-3 h-3 text-red-600" />
                        {t('Out of Stock', 'கையிருப்பு இல்லை')}
                      </span>
                    ) : isLowStock ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10.5px] sm:text-[11px] font-bold">
                        <AlertCircle className="w-3 h-3 text-amber-700" />
                        {t(`Only ${stockCount} left in stock - order soon!`, `${stockCount} மட்டுமே கையிருப்பில் உள்ளது!`)}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] text-[10.5px] sm:text-[11px] font-bold">
                        <Check className="w-3 h-3 text-emerald-600" />
                        {t(`In Stock (${stockCount} units available)`, `கையிருப்பில் உள்ளது (${stockCount} பாக்கெட்டுகள்)`)}
                      </span>
                    )}
                    <p className="text-[10px] text-[#8A9B93] mt-1 flex items-center justify-end gap-1">
                      <Truck className="w-3 h-3 text-[#C29043]" />
                      {isOutOfStock ? t('Restocking soon', 'விரைவில் புதிய தயாரிப்பு') : t('Dispatched in 24-48h', '24-48 மணிநேரத்தில் அஞ்சல்')}
                    </p>
                  </div>
                </div>

                {/* Volume Incentive & Free Formulation Scheme */}
                {!isOutOfStock && (
                  <div className="space-y-2">
                    <div className={`p-2.5 rounded-xl border text-xs transition-all ${
                      volumeDiscountPercent > 0 || potentialFreeGifts > 0 
                        ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950' 
                        : 'bg-[#FFF9F0] border-[#C29043]/30 text-[#8B5E14]'
                    }`}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            volumeDiscountPercent > 0 || potentialFreeGifts > 0 ? 'bg-emerald-600 text-white' : 'bg-[#C29043] text-white'
                          }`}>
                            <Gift className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-bold text-[11px] block">
                              {volumeDiscountPercent > 0
                                ? t(
                                    `${volumeDiscountPercent}% Order Discount Active • ${potentialFreeGifts} FREE Medicine(s) Unlocked!`,
                                    `${volumeDiscountPercent}% தள்ளுபடி & ${potentialFreeGifts} இலவச மருந்து தேர்வு தகுதி!`
                                  )
                                : t('10%–20% Discount & Free Formulation Scheme', '10%–20% தள்ளுபடி & இலவச மருந்து திட்டம்')}
                            </span>
                            <span className="text-[10px] opacity-85 block">
                              {volumeDiscountPercent > 0
                                ? t(
                                    `Select ${potentialFreeGifts} free formulation(s) from your ordered medicines in cart at ₹0.00.`,
                                    `கூடையில் ${potentialFreeGifts} இலவச மருந்துகளை ₹0.00-க்கு தேர்வு செய்யலாம்.`
                                  )
                                : t(
                                    `Order 5 or more units to unlock 10% discount and 1 FREE formulation bonus.`,
                                    `5 அல்லது அதற்கு மேற்பட்ட அலகுகளை தேர்வு செய்தால் 10% தள்ளுபடி & 1 இலவச மருந்து பெறலாம்.`
                                  )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Quantity Milestone Selector Pills */}
                    <div className="grid grid-cols-4 gap-1.5 pt-0.5">
                      <button
                        type="button"
                        onClick={() => setQuantity(1)}
                        className={`py-1.5 px-1.5 rounded-lg text-[10.5px] font-bold border transition-all cursor-pointer text-center ${
                          quantity === 1
                            ? 'bg-[#16382B] text-white border-[#16382B] shadow-2xs'
                            : 'bg-white text-[#16382B] border-[#16382B]/15 hover:border-[#C29043]'
                        }`}
                      >
                        1 {language === 'ta' ? 'அலகு' : 'Unit'}
                      </button>

                      {stockCount >= 5 && (
                        <button
                          type="button"
                          onClick={() => setQuantity(5)}
                          className={`py-1.5 px-1 rounded-lg text-[10.5px] font-bold border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                            quantity === 5
                              ? 'bg-[#16382B] text-white border-[#16382B] shadow-2xs'
                              : 'bg-emerald-50/70 text-emerald-900 border-emerald-200 hover:border-emerald-400'
                          }`}
                        >
                          <span>5 {language === 'ta' ? 'அலகுகள்' : 'Units'}</span>
                          <span className={`text-[8px] font-bold ${quantity === 5 ? 'text-[#DFB36C]' : 'text-emerald-700'}`}>
                            10% + 1 Free
                          </span>
                        </button>
                      )}

                      {stockCount >= 10 && (
                        <button
                          type="button"
                          onClick={() => setQuantity(10)}
                          className={`py-1.5 px-1 rounded-lg text-[10.5px] font-bold border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                            quantity === 10
                              ? 'bg-[#16382B] text-white border-[#16382B] shadow-2xs'
                              : 'bg-emerald-50/70 text-emerald-900 border-emerald-200 hover:border-emerald-400'
                          }`}
                        >
                          <span>10 {language === 'ta' ? 'அலகுகள்' : 'Units'}</span>
                          <span className={`text-[8px] font-bold ${quantity === 10 ? 'text-[#DFB36C]' : 'text-emerald-700'}`}>
                            10% + 2 Free
                          </span>
                        </button>
                      )}

                      {stockCount >= 30 && (
                        <button
                          type="button"
                          onClick={() => setQuantity(30)}
                          className={`py-1.5 px-1 rounded-lg text-[10.5px] font-bold border transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                            quantity === 30
                              ? 'bg-[#16382B] text-white border-[#16382B] shadow-2xs'
                              : 'bg-emerald-50/70 text-emerald-900 border-emerald-200 hover:border-emerald-400'
                          }`}
                        >
                          <span>30 {language === 'ta' ? 'அலகுகள்' : 'Units'}</span>
                          <span className={`text-[8px] font-bold ${quantity === 30 ? 'text-[#DFB36C]' : 'text-emerald-700'}`}>
                            20% + 6 Free
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* 100% Free Shipping Anywhere in Tamil Nadu */}
                <div className="pt-2 border-t border-[#16382B]/10">
                  <div className="flex items-center justify-between bg-emerald-50/90 border border-emerald-200/90 px-3 py-2 rounded-xl text-[11px] sm:text-[11.5px]">
                    <span className="text-emerald-950 font-bold flex items-center gap-1.5 truncate">
                      <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">
                        {t('100% Free Delivery Anywhere in Tamil Nadu', 'தமிழ்நாடு முழுவதும் 100% இலவச டெலிவரி')}
                      </span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-md border border-emerald-300 shadow-2xs flex-shrink-0">
                      {t('₹0 Shipping', 'இலவசம்')}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Out of Stock Notice & Restock Notification Button */}
            {isOutOfStock && !product.isComingSoon && (
              <div className="space-y-2.5 pt-0.5">
                <div className="p-3 bg-red-50 rounded-xl border border-red-200 text-xs text-red-900 space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-red-800">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    {t('Currently Out of Stock', 'தற்போது கையிருப்பில் இல்லை')}
                  </p>
                  <p className="text-[#3D5A68]">
                    {t(
                      'This herbal batch is currently being prepared. You can enquire with our pharmacy desk to get notified when fresh stock arrives.',
                      'இந்த மருந்து தற்போது பாரம்பரிய சுத்தி முறையில் தயாரிக்கப்படுகிறது. புதிய கையிருப்பு தயாரானதும் தகவல் பெற தொடர்பு கொள்ளவும்.'
                    )}
                  </p>
                </div>
                <a
                  href={`https://wa.me/919171508042?text=${encodeURIComponent(`Hello Ruthra Siddha Medicines, please notify me when ${product.name} (${product.tamilName}) is back in stock.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('Enquire Availability & Restock on WhatsApp', 'வாட்ஸ்அப்பில் இருப்பு விபரம் அறிய')}</span>
                </a>
              </div>
            )}

            {/* Quantity Selector & Primary Actions for Available Stock */}
            {!product.isComingSoon && !isOutOfStock && (
              <div className="space-y-2.5 pt-0.5">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Quantity Stepper */}
                  <div className="h-11 flex items-center border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] overflow-hidden flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 h-full text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2.5 text-xs font-bold text-[#16382B]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                      className="px-2.5 h-full text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="h-11 flex-1 px-3 sm:px-4 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t('Add to Cart', 'கூடையில் சேர்க்க')}</span>
                  </button>

                  {/* Buy Now */}
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="h-11 flex-1 px-3 sm:px-4 rounded-xl bg-[#C29043] hover:bg-[#DFB36C] active:scale-[0.98] text-[#16382B] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <Zap className="w-4 h-4" />
                    <span>{t('Buy Now', 'உடனடியாக வாங்க')}</span>
                  </button>
                </div>
              </div>
            )}


            {/* Pincode & Delivery Estimator Component (All 38 TN Districts) */}
            <PincodeDeliveryEstimator />

            {/* WhatsApp & Consultation row */}
            <div className="pt-2 border-t border-[#16382B]/10 flex items-center justify-between text-xs">
              <WhatsAppAssistance
                productName={product.name}
                packSize={product.packSize}
                price={product.price}
              />
              <span className="text-[11px] text-[#16382B] font-semibold flex items-center gap-1.5 bg-[#E8F1EB] px-2.5 py-1 rounded-full border border-[#16382B]/10">
                <Truck className="w-3.5 h-3.5 text-[#C29043]" />
                {t('Free TN Delivery on ₹500+', '₹500+ ஆர்டருக்கு இலவச டெலிவரி')}
              </span>
            </div>

            {/* Safety Banner */}
            <div className="p-2.5 rounded-xl bg-[#FDF2F2] border border-[#D9534F]/30 text-[11px] text-[#782623] flex items-start gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D9534F] flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <span className="font-bold text-[#D9534F] mr-1">
                  {t('Safety Guidance:', 'பாதுகாப்பு குறிப்பு:')}
                </span>
                <span className="leading-snug">
                  {language === 'ta' ? product.safety.pregnancyTa : product.safety.pregnancy}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SPECIFICATIONS: DESKTOP TABS + MOBILE NATIVE ACCORDIONS */}
        <div className="mt-7 sm:mt-10 bg-white rounded-2xl border border-[#16382B]/10 shadow-xs overflow-hidden">
          
          {/* DESKTOP 7-TAB NAVIGATION (Preserved for Desktop) */}
          <div className="hidden md:flex border-b border-[#16382B]/10 bg-[#FAF8F5] overflow-x-auto scrollbar-none">
            {tabs.map(tab => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-[#16382B] text-[#16382B] bg-white shadow-2xs font-bold'
                      : 'border-transparent text-[#8A9B93] hover:text-[#16382B]'
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-[#C29043]' : 'text-gray-400'}`} />
                  <span>{language === 'ta' ? tab.labelTa : tab.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* DESKTOP TAB CONTENT PANEL (Preserved for Desktop) */}
          <div className="hidden md:block p-6 lg:p-8">
            {renderTabContent(activeTab)}
          </div>

          {/* MOBILE NATIVE ACCORDION STACK (Perfect App-Like UX) */}
          <div className="md:hidden divide-y divide-[#16382B]/10">
            {tabs.map(tab => {
              const TabIcon = tab.icon;
              const isOpen = openAccordions[tab.id];

              return (
                <div key={tab.id}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(tab.id)}
                    className="w-full py-3.5 px-4 flex items-center justify-between text-left font-semibold text-xs sm:text-sm text-[#16382B] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <TabIcon className="w-4 h-4 text-[#C29043] flex-shrink-0" />
                      <span>{language === 'ta' ? tab.labelTa : tab.labelEn}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8A9B93] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#16382B]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 animate-in fade-in-50 duration-150">
                      {renderTabContent(tab.id)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. RELATED FORMULATIONS (NATIVE 2-COL MOBILE GRID) */}
        {relatedProducts.length > 0 && (
          <div className="mt-8 sm:mt-12">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="font-serif-brand text-lg sm:text-2xl font-bold text-[#16382B]">
                {t('Related Classical Formulations', 'தொடர்புடைய சித்த மருந்துகள்')}
              </h3>
              <Link
                href="/shop"
                className="text-xs font-semibold text-[#16382B] hover:text-[#C29043] flex items-center gap-0.5"
              >
                <span>{t('All Formulations', 'அனைத்தும்')}</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-5">
              {relatedProducts.slice(0, 4).map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. MOBILE STICKY PURCHASE BAR (Flush with iOS safe area) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md px-3.5 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] border-t border-[#16382B]/10 flex items-center justify-between gap-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div>
          <span className="text-[9px] uppercase font-bold text-[#8A9B93] block leading-none">
            {language === 'ta' ? product.packSizeTa : product.packSize}
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            {product.isComingSoon ? (
              <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                {product.price > 0 ? `Est. ₹${product.price}` : t('Coming Soon', 'தயாரிப்பில்')}
              </span>
            ) : (
              <>
                <span className="font-serif-brand font-bold text-base text-[#16382B]">
                  ₹{product.price * quantity}
                </span>
                <span className="text-[10px] text-[#8A9B93] line-through">
                  ₹{mrp * quantity}
                </span>
                <span className="text-[8.5px] font-bold text-green-700 bg-green-50 px-1 rounded">
                  {discountPercent}% OFF
                </span>
              </>
            )}
          </div>
        </div>

        {product.isComingSoon ? (
          <a
            href={`https://wa.me/919171508042?text=${encodeURIComponent(`Hello Ruthra Siddha Medicines, I want to enquire about: ${product.name} (${product.tamilName}).`)}`}
            target="_blank"
            rel="noreferrer"
            className="h-10 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('Enquire WhatsApp', 'விசாரிக்க')}</span>
          </a>
        ) : (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleAddToCart}
              className="h-10 px-3 rounded-xl bg-[#16382B] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t('Add to Cart', 'சேர்க்க')}</span>
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="h-10 px-3 rounded-xl bg-[#C29043] text-[#16382B] text-xs font-bold cursor-pointer active:scale-95 transition-all shadow-xs flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{t('Buy Now', 'வாங்க')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

