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
  ChevronDown
} from 'lucide-react';
import { Product } from '@/types/product';
import { useCart, getProductMRP } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import WhatsAppAssistance from '@/components/WhatsAppAssistance';
import ProductCard from '@/components/ProductCard';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const router = useRouter();
  const { addItem, openDrawer } = useCart();
  const { language, t } = useLanguage();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'howToUse' | 'dosage' | 'safety' | 'storage' | 'faq'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

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
  const duoSavings = Math.round(product.price * 2 * 0.05);

  // Dynamic Free Shipping Calculation based on selected quantity
  const currentTotal = product.price * quantity;
  const freeShippingThreshold = 500;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - currentTotal);
  const freeShippingProgress = Math.min(100, Math.round((currentTotal / freeShippingThreshold) * 100));
  const qualifiesForFreeShipping = currentTotal >= freeShippingThreshold;

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
                  {(language === 'ta' ? product.safety.precautionsTa : product.safety.precautions).map((p, i) => (
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
                  src={product.image}
                  alt={product.name}
                  width={32}
                  height={32}
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
                  ₹{product.price * quantity}
                </span>
                <span className="text-[10px] text-[#8A9B93] line-through ml-1.5">
                  ₹{mrp * quantity}
                </span>
              </div>

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
                  onClick={() => setQuantity(quantity + 1)}
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
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-2.5 sm:space-y-3">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[340px] sm:max-h-[360px] w-full rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
              {/* Badges */}
              <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                <span className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/95 border border-[#C29043]/50 text-[#16382B] shadow-2xs">
                  {language === 'ta' && product.badgeTa ? product.badgeTa : product.badge || 'Classical Siddha'}
                </span>
              </div>

              <span className="absolute top-2.5 right-2.5 text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] z-10">
                {language === 'ta' ? product.formulationTa : product.formulation}
              </span>

              {/* Product Artwork */}
              <div className="w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  className="object-contain max-h-48 sm:max-h-60 w-auto"
                  priority
                />
              </div>

              {/* Share button */}
              <button
                type="button"
                onClick={handleShare}
                className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-white/95 backdrop-blur-xs border border-[#16382B]/15 text-[#16382B] hover:text-[#C29043] transition-colors shadow-2xs cursor-pointer active:scale-95"
                title="Share link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              </button>
            </div>

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

            {/* Price Box with Strikethrough MRP, Discount Badge, and Multi-Pack Savings */}
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
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] text-[10.5px] sm:text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16382B]" />
                    {t('In Stock', 'இருப்பில் உள்ளது')}
                  </span>
                  <p className="text-[10px] text-[#8A9B93] mt-1 flex items-center justify-end gap-1">
                    <Truck className="w-3 h-3 text-[#C29043]" />
                    {t('Dispatched in 24-48h', '24-48 மணிநேரத்தில் அஞ்சல்')}
                  </p>
                </div>
              </div>

              {/* Duo Pack Volume Incentive */}
              <div className="flex items-center justify-between text-[10.5px] bg-[#FFF9F0] border border-[#C29043]/30 px-2.5 py-1.5 rounded-lg text-[#8B5E14]">
                <span className="flex items-center gap-1.5 truncate">
                  <Tag className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
                  <span className="truncate">
                    {t(`Select 2+ boxes for extra 5% Duo Savings (Save ₹${duoSavings})`, `2 பெட்டிகள் எடுத்தால் 5% கூடுதல் தள்ளுபடி (₹${duoSavings} சேமிப்பு)`)}
                  </span>
                </span>
                {quantity === 1 && (
                  <button
                    type="button"
                    onClick={() => setQuantity(2)}
                    className="font-bold text-[#16382B] hover:text-[#C29043] underline cursor-pointer text-[10px] whitespace-nowrap ml-1.5"
                  >
                    {t('+ Make it 2', '+2 ஆக்கு')}
                  </button>
                )}
              </div>

              {/* Free Tamil Nadu Shipping Meter */}
              <div className="pt-2 border-t border-[#16382B]/10">
                <div className="flex items-center justify-between text-[10.5px] sm:text-[11px] mb-1">
                  <span className="text-[#3D5A68] font-medium flex items-center gap-1.5 truncate">
                    <Truck className={`w-3.5 h-3.5 flex-shrink-0 ${qualifiesForFreeShipping ? 'text-green-600' : 'text-[#C29043]'}`} />
                    {qualifiesForFreeShipping ? (
                      <span className="text-green-700 font-bold flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 flex-shrink-0" />
                        {t('FREE Delivery across Tamil Nadu Unlocked! (Saved ₹40)', 'தமிழ்நாடு முழுவதும் இலவச அஞ்சல் தகுதி! (₹40 சேமிப்பு)')}
                      </span>
                    ) : (
                      <span className="truncate">
                        {t(`Add ₹${amountToFreeShipping} more for FREE Delivery`, `இலவச அஞ்சலுக்கு இன்னும் ₹${amountToFreeShipping} சேர்க்கவும்`)}
                      </span>
                    )}
                  </span>
                  <span className={`font-bold ml-1.5 ${qualifiesForFreeShipping ? 'text-green-700' : 'text-[#16382B]'}`}>
                    {freeShippingProgress}%
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-[#16382B]/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      qualifiesForFreeShipping ? 'bg-green-600' : 'bg-[#16382B]'
                    }`}
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quantity Selector & Primary Actions */}
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
                    onClick={() => setQuantity(quantity + 1)}
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
            <span className="font-serif-brand font-bold text-base text-[#16382B]">
              ₹{product.price * quantity}
            </span>
            <span className="text-[10px] text-[#8A9B93] line-through">
              ₹{mrp * quantity}
            </span>
            <span className="text-[8.5px] font-bold text-green-700 bg-green-50 px-1 rounded">
              {discountPercent}% OFF
            </span>
          </div>
        </div>

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
      </div>
    </div>
  );
}
