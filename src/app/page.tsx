'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Leaf, 
  Trees, 
  Award, 
  Droplets, 
  Activity, 
  Wind, 
  Heart, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Truck, 
  CreditCard, 
  ShoppingBag, 
  Star, 
  Zap,
  Filter,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import StoreHeroCarousel from '@/components/StoreHeroCarousel';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CONCERN_CATEGORIES, FORMULATION_CATEGORIES, BUNDLES } from '@/data/products';

export default function HomePage() {
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<string>('all');

  // Helper to get category icons with vibrant accents
  const getConcernIcon = (slug: string) => {
    switch (slug) {
      case 'joint-mobility': return <Activity className="w-5 h-5 text-[#C29043]" />;
      case 'respiratory': return <Wind className="w-5 h-5 text-[#2A9D8F]" />;
      case 'womens-wellness': return <Heart className="w-5 h-5 text-[#E76F51]" />;
      case 'metabolic-wellness': return <ShieldCheck className="w-5 h-5 text-[#264653]" />;
      case 'digestive-wellness': return <Flame className="w-5 h-5 text-[#E63946]" />;
      case 'skin-hair': return <Droplets className="w-5 h-5 text-[#457B9D]" />;
      default: return <Layers className="w-5 h-5 text-[#C29043]" />;
    }
  };

  // Category Filtered Products for the Interactive Explorer (shows top 8)
  const filteredTabProducts = activeTab === 'all'
    ? PRODUCTS.filter(p => p.featured).slice(0, 8)
    : PRODUCTS.filter(p => p.concerns.includes(activeTab as any) || p.formulation.toLowerCase().includes(activeTab)).slice(0, 8);

  // Dedicated Category Aisles (Top 4 products per category shelf)
  const jointCareProducts = PRODUCTS.filter(p => p.concerns.includes('joint-mobility')).slice(0, 4);
  const totalJointCare = PRODUCTS.filter(p => p.concerns.includes('joint-mobility')).length;

  const respiratoryProducts = PRODUCTS.filter(p => p.concerns.includes('respiratory')).slice(0, 4);
  const totalRespiratory = PRODUCTS.filter(p => p.concerns.includes('respiratory')).length;

  const digestiveProducts = PRODUCTS.filter(p => p.concerns.includes('digestive-wellness')).slice(0, 4);
  const totalDigestive = PRODUCTS.filter(p => p.concerns.includes('digestive-wellness')).length;

  const womensCareProducts = PRODUCTS.filter(p => p.concerns.includes('womens-wellness')).slice(0, 4);
  const totalWomensCare = PRODUCTS.filter(p => p.concerns.includes('womens-wellness')).length;

  const skinHairProducts = PRODUCTS.filter(p => p.concerns.includes('skin-hair')).slice(0, 4);
  const totalSkinHair = PRODUCTS.filter(p => p.concerns.includes('skin-hair')).length;

  const metabolicProducts = PRODUCTS.filter(p => p.concerns.includes('metabolic-wellness')).slice(0, 4);
  const totalMetabolic = PRODUCTS.filter(p => p.concerns.includes('metabolic-wellness')).length;

  const TABS = [
    { id: 'all', nameEn: 'All Bestsellers', nameTa: 'பிரபல தயாரிப்புகள்' },
    { id: 'joint-mobility', nameEn: 'Joint & Pain Care', nameTa: 'மூட்டு & வலி நிவாரணம்' },
    { id: 'respiratory', nameEn: 'Breathing & Immunity', nameTa: 'சுவாச பாதுகாப்பு' },
    { id: 'digestive-wellness', nameEn: 'Digestion & Gut', nameTa: 'செரிமான ஆரோக்கியம்' },
    { id: 'womens-wellness', nameEn: 'Women’s Health', nameTa: 'பெண்கள் நலம்' },
    { id: 'skin-hair', nameEn: 'Hair & Skin Care', nameTa: 'கூந்தல் & தோல் நலம்' },
    { id: 'metabolic-wellness', nameEn: 'Vitality & Sugar', nameTa: 'சர்க்கரை & தாதுபலம்' },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden flex flex-col bg-[#FDFBF7]">
      {/* 1. STORE HERO FULL-BLEED DYNAMIC PROMOTIONAL CAROUSEL */}
      <StoreHeroCarousel />

      {/* 2. CRITICAL STORE TRUST STRIP (UPI, COD, WHATSAPP, TN DISPATCH) — Hidden on mobile */}
      <section className="hidden md:block w-full bg-[#16382B] text-white py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 shadow-sm border-b border-[#C29043]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center text-center sm:text-left">
          {/* Trust 1: Payment Options */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 sm:bg-transparent">
            <div className="w-9 h-9 rounded-xl bg-[#DFB36C] text-[#16382B] flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
              <CreditCard className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left">
              <p className="text-xs font-bold text-white leading-tight">
                {t('Instant UPI, Cards & COD', 'UPI, கார்டு & COD வசதி')}
              </p>
              <p className="text-[10.5px] text-white/70 leading-tight truncate">
                {t('100% Secure Checkout', 'பாதுகாப்பான கட்டணம்')}
              </p>
            </div>
          </div>

          {/* Trust 2: WhatsApp Desk */}
          <a
            href="https://wa.me/919171508042?text=Vanakkam%20Ruthra%20Medicines,%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 sm:bg-transparent hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-xs group-hover:scale-105 transition-transform">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
            <div className="min-w-0 text-left">
              <p className="text-xs font-bold text-white leading-tight group-hover:text-[#DFB36C] transition-colors">
                {t('WhatsApp Order Desk', 'வாட்ஸ்அப் ஆர்டர் உதவி')}
              </p>
              <p className="text-[10.5px] text-[#25D366] font-semibold leading-tight truncate">
                +91 91715 08042 / 9043434226
              </p>
            </div>
          </a>

          {/* Trust 3: Tamil Nadu Express Delivery */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 sm:bg-transparent">
            <div className="w-9 h-9 rounded-xl bg-[#DFB36C] text-[#16382B] flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
              <Truck className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left">
              <p className="text-xs font-bold text-white leading-tight">
                {t('All 38 TN Districts', '38 தமிழக மாவட்டங்கள்')}
              </p>
              <p className="text-[10.5px] text-white/70 leading-tight truncate">
                {t('Free Delivery on ₹500+', '₹500க்கு மேல் இலவச அஞ்சல்')}
              </p>
            </div>
          </div>

          {/* Trust 4: Classical Purity */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 sm:bg-transparent">
            <div className="w-9 h-9 rounded-xl bg-[#DFB36C] text-[#16382B] flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-left">
              <p className="text-xs font-bold text-white leading-tight">
                {t('Authentic Shodhana Purity', 'பாரம்பரிய சுத்தி தரம்')}
              </p>
              <p className="text-[10.5px] text-white/70 leading-tight truncate">
                {t('Tirunelveli Pharmacopeia', 'திருநெல்வேலி தயாரிப்பு')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL CATEGORY EXPLORATION TILES (Shop by Health Need) — Hidden on mobile */}
      <section className="hidden md:block py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#C29043] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('Browse By Concern', 'உபாதைகள் வாரியாக')}</span>
            </span>
            <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B] mt-0.5">
              {t('Explore Health Concerns', 'உடல் நல உபாதைகள் வாரியாக வாங்க')}
            </h2>
          </div>
          <Link
            href="/shop/concerns"
            className="text-xs sm:text-sm font-bold text-[#16382B] hover:text-[#C29043] flex items-center gap-1 transition-colors"
          >
            <span>{t('View All Categories', 'அனைத்து பிரிவுகள்')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid (2 col mobile, 3 col sm, 6 col desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CONCERN_CATEGORIES.map(category => (
            <Link
              key={category.slug}
              href={`/shop/concerns/${category.slug}`}
              className="group p-4 rounded-2xl bg-white border border-[#16382B]/10 hover:border-[#C29043] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E8F1EB] group-hover:bg-[#16382B] group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-colors">
                {getConcernIcon(category.slug)}
              </div>
              <h3 className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B] group-hover:text-[#C29043] transition-colors line-clamp-2">
                {language === 'ta' ? category.titleTa : category.title}
              </h3>
              <span className="mt-2 text-[10px] font-semibold text-[#8A9B93] bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#16382B]/5">
                {language === 'ta' ? category.herbalKeyTa : category.herbalKey}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE MULTI-CATEGORY STORE EXPLORER WITH TABS */}
      <section className="py-8 sm:py-12 bg-white border-y border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#C29043] flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>{t('Category-Wise Storefront', 'பிரிவுகள் வாரியாக')}</span>
              </span>
              <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B] mt-0.5">
                {t('Featured Formulations by Concern', 'முக்கிய பரிந்துரைக்கப்பட்ட மருந்துகள்')}
              </h2>
            </div>
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 max-w-full">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#16382B] text-white shadow-sm scale-102'
                      : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] hover:text-[#16382B] border border-[#16382B]/10'
                  }`}
                >
                  {language === 'ta' ? tab.nameTa : tab.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid: 2 col mobile, 3 col sm, 4 col desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredTabProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={activeTab === 'all' ? '/shop' : `/shop?concern=${activeTab}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-bold text-xs sm:text-sm border border-[#16382B]/15 shadow-2xs hover:shadow-xs transition-all"
            >
              <span>
                {activeTab === 'all'
                  ? t(`View Complete Pharmacopeia (${PRODUCTS.length} Formulations)`, `முழு மருந்துகள் பட்டியல் (${PRODUCTS.length})`)
                  : t('View More in this Category →', 'இப்பிரிவின் அனைத்து மருந்துகள் →')}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DEDICATED THEMATIC AISLE 1: JOINT MOBILITY & PAIN CARE */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 pb-3 border-b border-[#16382B]/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] text-[11px] font-bold mb-1">
              <Activity className="w-3.5 h-3.5 text-[#C29043]" />
              <span>{t('Vata Balance & Pain Relief', 'வாத நலம் & வலி நிவாரணம்')}</span>
            </div>
            <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B]">
              {t('Joint & Musculoskeletal Care', 'மூட்டு & எலும்பு நல மருந்துகள்')}
            </h2>
            <p className="text-xs text-[#3D5A68] mt-0.5">
              {t('Deep tissue penetration formulas for arthritic stiffness, knee mobility, sciatica, and backache.', 'மூட்டு வலி, இடுப்பு வலி, சியாட்டிகா மற்றும் தசை பிடிப்புகளுக்கு பாரம்பரிய மருந்துகள்.')}
            </p>
          </div>
          <Link
            href="/shop/concerns/joint-mobility"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C29043] hover:text-[#16382B] transition-colors"
          >
            <span>{t(`View All Joint Care (${totalJointCare})`, `அனைத்து மூட்டு மருந்துகள் (${totalJointCare})`)}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {jointCareProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/shop/concerns/joint-mobility"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] text-[#16382B] font-bold text-xs sm:text-sm border border-[#16382B]/15 shadow-2xs hover:shadow-xs transition-all group"
          >
            <span>{t(`View More Joint Care Products (${totalJointCare})`, `மேலும் மூட்டு நல மருந்துகள் பார்க்க (${totalJointCare})`)}</span>
            <ArrowRight className="w-4 h-4 text-[#C29043] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 6. DEDICATED THEMATIC AISLE 2: RESPIRATORY & IMMUNITY SHIELD */}
      <section className="py-10 sm:py-14 bg-[#FAF8F5] border-t border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 pb-3 border-b border-[#16382B]/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] text-[11px] font-bold mb-1">
                <Wind className="w-3.5 h-3.5 text-[#2A9D8F]" />
                <span>{t('Kapha Care & Viral Defense', 'கப சமநிலை & நோய் எதிர்ப்பு')}</span>
              </div>
              <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B]">
                {t('Respiratory Health & Flu Defense', 'சுவாச நலம் & சளி இருமல் மருந்துகள்')}
              </h2>
              <p className="text-xs text-[#3D5A68] mt-0.5">
                {t('Classical Kudineer decoctions, non-drowsy syrups, platelet boosters, and throat soothing formulations.', 'நிலவேம்பு குடிநீர், நொச்சி குடிநீர், சினோகாஃப் சிரப் மற்றும் ராமபாண கஷாயம்.')}
              </p>
            </div>
            <Link
              href="/shop/concerns/respiratory"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2A9D8F] hover:text-[#16382B] transition-colors"
            >
              <span>{t(`View All Respiratory (${totalRespiratory})`, `அனைத்து சுவாச மருந்துகள் (${totalRespiratory})`)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {respiratoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/shop/concerns/respiratory"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] text-[#16382B] font-bold text-xs sm:text-sm border border-[#16382B]/15 shadow-2xs hover:shadow-xs transition-all group"
            >
              <span>{t(`View More Respiratory Products (${totalRespiratory})`, `மேலும் சுவாச பாதுகாப்பு மருந்துகள் (${totalRespiratory})`)}</span>
              <ArrowRight className="w-4 h-4 text-[#2A9D8F] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DEDICATED THEMATIC AISLE 3: DIGESTIVE WELLNESS & GUT HEALTH */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 pb-3 border-b border-[#16382B]/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] text-[11px] font-bold mb-1">
              <Flame className="w-3.5 h-3.5 text-[#E63946]" />
              <span>{t('Pitta & Agni Balance', 'பித்த & செரிமான தீ சீராக்கம்')}</span>
            </div>
            <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B]">
              {t('Digestive Care & Gut Harmony', 'செரிமான & பித்த சமநிலை மருந்துகள்')}
            </h2>
            <p className="text-xs text-[#3D5A68] mt-0.5">
              {t('Processed Haritaki, gentle painless laxatives, and liver decongestants for GERD, gas, and bowel regularity.', 'மதுராதி சூரணம், பாவனாக்கடுக்காய், சுகபேதி மற்றும் மஞ்சள் நோய் குடிநீர்.')}
            </p>
          </div>
          <Link
            href="/shop/concerns/digestive-wellness"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E63946] hover:text-[#16382B] transition-colors"
          >
            <span>{t(`View All Digestive Care (${totalDigestive})`, `அனைத்து செரிமான மருந்துகள் (${totalDigestive})`)}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {digestiveProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/shop/concerns/digestive-wellness"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] text-[#16382B] font-bold text-xs sm:text-sm border border-[#16382B]/15 shadow-2xs hover:shadow-xs transition-all group"
          >
            <span>{t(`View More Digestive Products (${totalDigestive})`, `மேலும் செரிமான & கல்லீரல் மருந்துகள் (${totalDigestive})`)}</span>
            <ArrowRight className="w-4 h-4 text-[#E63946] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 8. DEDICATED THEMATIC AISLE 4: WOMEN'S WELLNESS & HORMONAL CARE */}
      <section className="py-10 sm:py-14 bg-[#FAF8F5] border-t border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 pb-3 border-b border-[#16382B]/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] text-[11px] font-bold mb-1">
                <Heart className="w-3.5 h-3.5 text-[#E76F51]" />
                <span>{t('Hormonal & Uterine Tone', 'கர்ப்பப்பை & மாதவிடாய் நலம்')}</span>
              </div>
              <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B]">
                {t('Women’s Wellness & Hormonal Care', 'பெண்கள் நலம் & கர்ப்பப்பை பராமரிப்பு')}
              </h2>
              <p className="text-xs text-[#3D5A68] mt-0.5">
                {t('Specialized Siddha remedies for PCOS/PCOD, irregular periods, fertility, and postpartum rejuvenation.', 'சூதகத்தை உடைக்கும் குடிநீர், மலட்டு கர்ப்ப குடிநீர், சந்திரகாந்தி மற்றும் தன்வந்தரம் 101.')}
              </p>
            </div>
            <Link
              href="/shop/concerns/womens-wellness"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E76F51] hover:text-[#16382B] transition-colors"
            >
              <span>{t(`View All Women’s Health (${totalWomensCare})`, `அனைத்து பெண்கள் நல மருந்துகள் (${totalWomensCare})`)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {womensCareProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/shop/concerns/womens-wellness"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] text-[#16382B] font-bold text-xs sm:text-sm border border-[#16382B]/15 shadow-2xs hover:shadow-xs transition-all group"
            >
              <span>{t(`View More Women’s Health Products (${totalWomensCare})`, `மேலும் பெண்கள் நல மருந்துகள் (${totalWomensCare})`)}</span>
              <ArrowRight className="w-4 h-4 text-[#E76F51] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. DEDICATED THEMATIC AISLE 5: SKIN, HAIR & WOUND HEALING */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 pb-3 border-b border-[#16382B]/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] text-[11px] font-bold mb-1">
              <Droplets className="w-3.5 h-3.5 text-[#457B9D]" />
              <span>{t('Radiance & Healing', 'சரும பொலிவு & புண் ஆற்றுதல்')}</span>
            </div>
            <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B]">
              {t('Skin, Hair & Wound Care', 'சருமம், கூந்தல் & புண் ஆற்றுதல்')}
            </h2>
            <p className="text-xs text-[#3D5A68] mt-0.5">
              {t('Pure herbal thailams, diabetic wound oils, anti-dandruff hair elixirs, and 100% soap-free bath scrubs.', 'நார்ஷிகா கூந்தல் தைலம், அல்சரா புண் தைலம், நால்பாமராதி மற்றும் நலங்கு மாவு.')}
            </p>
          </div>
          <Link
            href="/shop/concerns/skin-hair"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#457B9D] hover:text-[#16382B] transition-colors"
          >
            <span>{t(`View All Skin & Hair (${totalSkinHair})`, `அனைத்து சரும & கூந்தல் (${totalSkinHair})`)}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {skinHairProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/shop/concerns/skin-hair"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] text-[#16382B] font-bold text-xs sm:text-sm border border-[#16382B]/15 shadow-2xs hover:shadow-xs transition-all group"
          >
            <span>{t(`View More Skin & Hair Products (${totalSkinHair})`, `மேலும் சரும & கூந்தல் மருந்துகள் (${totalSkinHair})`)}</span>
            <ArrowRight className="w-4 h-4 text-[#457B9D] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 10. DEDICATED THEMATIC AISLE 6: METABOLIC, SUGAR & VITALITY */}
      <section className="py-10 sm:py-14 bg-[#FAF8F5] border-t border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3 pb-3 border-b border-[#16382B]/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] text-[11px] font-bold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#264653]" />
                <span>{t('Glycemic Balance & Lithiasis', 'சர்க்கரை கட்டுப்பாடு & சிறுநீரகம்')}</span>
              </div>
              <h2 className="font-serif-brand text-xl sm:text-2xl md:text-3xl font-bold text-[#16382B]">
                {t('Metabolic, Diabetes & Kidney Care', 'சர்க்கரை, சிறுநீரக கல் & தாது பலம்')}
              </h2>
              <p className="text-xs text-[#3D5A68] mt-0.5">
                {t('Classical bitter botanicals for Type-II Diabetes, kidney stone dissolution, and anemia recovery.', 'மதுரா சூரணம், கல்லடைப்பு குடிநீர், மேகசாந்தி மற்றும் மண்டூராதி குடிநீர்.')}
              </p>
            </div>
            <Link
              href="/shop/concerns/metabolic-wellness"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#264653] hover:text-[#16382B] transition-colors"
            >
              <span>{t(`View All Metabolic Care (${totalMetabolic})`, `அனைத்து சர்க்கரை & சிறுநீரக (${totalMetabolic})`)}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {metabolicProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/shop/concerns/metabolic-wellness"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-[#E8F1EB] text-[#16382B] font-bold text-xs sm:text-sm border border-[#16382B]/15 shadow-2xs hover:shadow-xs transition-all group"
            >
              <span>{t(`View More Metabolic Care Products (${totalMetabolic})`, `மேலும் சர்க்கரை & சிறுநீரக மருந்துகள் (${totalMetabolic})`)}</span>
              <ArrowRight className="w-4 h-4 text-[#264653] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. CATCHY VALUE COMBOS SPOTLIGHT (Save up to 20%) */}
      <section className="py-10 sm:py-14 bg-gradient-to-br from-[#16382B] to-[#0E251C] text-white border-y border-[#C29043]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9534F] text-white text-xs font-black uppercase tracking-wider mb-2 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span>{t('Special Apothecary Bundles', 'சிறப்பு காம்போ தள்ளுபடி')}</span>
              </div>
              <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {t('Curated Wellness Regimens (Save 20%)', 'ஒருங்கிணைந்த மூலிகை தொகுப்புகள்')}
              </h2>
            </div>
            <Link
              href="/shop#combos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DFB36C] hover:text-white transition-colors"
            >
              <span>{t('View All Combo Regimens', 'அனைத்து தொகுப்புகள்')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {BUNDLES.map(bundle => {
              const bundleProducts = PRODUCTS.filter(p => bundle.productSlugs.includes(p.slug));
              return (
                <div
                  key={bundle.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#DFB36C] shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#DFB36C] text-[#16382B] shadow-xs">
                        {bundle.badge}
                      </span>
                      <span className="text-xs font-extrabold text-[#25D366] bg-black/40 px-3 py-1 rounded-full border border-[#25D366]/30">
                        {t(`Save ₹${bundle.savings}`, `₹${bundle.savings} சேமிப்பு`)}
                      </span>
                    </div>

                    <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-white">
                      {language === 'ta' ? bundle.titleTa : bundle.title}
                    </h3>
                    <p className="text-xs text-[#DFB36C] font-medium mt-0.5">
                      {language === 'ta' ? bundle.subtitleTa : bundle.subtitle}
                    </p>
                    <p className="text-xs text-white/80 mt-2.5 leading-relaxed">
                      {language === 'ta' ? bundle.descriptionTa : bundle.description}
                    </p>

                    {/* Included Items pills */}
                    <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                      <p className="text-[10.5px] font-bold text-white/70 uppercase tracking-wider">
                        {t('Regimen Includes:', 'தொகுப்பில் உள்ளவை:')}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {bundleProducts.map(bp => (
                          <span
                            key={bp.id}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-white/10 text-white font-medium border border-white/10"
                          >
                            {language === 'ta' ? bp.tamilName : bp.name} ({bp.packSize})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs line-through text-white/50 mr-2 font-medium">
                        ₹{bundle.regularPrice}
                      </span>
                      <span className="font-serif-brand text-2xl font-black text-[#DFB36C]">
                        ₹{bundle.bundlePrice}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        bundleProducts.forEach(bp => addItem(bp, 1));
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#DFB36C] hover:bg-[#C29043] active:scale-95 text-[#16382B] text-xs font-black flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{t('Add Combo to Cart', 'தொகுப்பை வாங்கு')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. SHOP BY TRADITIONAL FORMULATION (Chooranam, Kudineer, Capsules, Thailam, Syrups, Personal Care) */}
      <section className="py-10 sm:py-14 bg-[#E8F1EB]/50 border-t border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#C29043]">
              {t('Classical Administration Forms', 'சித்த & ஆயுர்வேத மருந்து வடிவங்கள்')}
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B] mt-1">
              {t('Shop by Traditional Formulation', 'மருந்து வடிவங்கள் வாரியாக வாங்க')}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {FORMULATION_CATEGORIES.map(form => (
              <Link
                key={form.slug}
                href={`/shop/formulations/${form.slug}`}
                className="group p-5 rounded-2xl bg-white border border-[#16382B]/10 hover:border-[#C29043] transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between text-center"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#16382B] group-hover:text-white transition-colors">
                    <Layers className="w-6 h-6 text-[#C29043] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif-brand font-bold text-sm text-[#16382B] group-hover:text-[#C29043] transition-colors">
                    {language === 'ta' ? form.titleTa : form.title}
                  </h3>
                  <p className="text-[11px] text-[#3D5A68] mt-1 line-clamp-2">
                    {language === 'ta' ? form.taglineTa : form.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#16382B]/5">
                  <span className="text-[11px] font-bold text-[#C29043] group-hover:text-[#16382B] flex items-center justify-center gap-1">
                    <span>{t('Browse', 'பார்')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. POLYCLINIC & VAIDYA CONSULTATION BANNER */}
      <section className="py-12 sm:py-16 bg-[#16382B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#DFB36C] flex items-center justify-center md:justify-start gap-1 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('Free Vaidya Consultation', 'இலவச சித்த மருத்துவ ஆலோசனை')}</span>
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {t(
                'Need Expert Guidance on Your Health Concern?',
                'உங்கள் உடல் நலம் குறித்து சித்த மருத்துவரிடம் ஆலோசனை பெற வேண்டுமா?'
              )}
            </h2>
            <p className="text-sm text-white/80 mt-3 leading-relaxed">
              {t(
                'Consult directly with our experienced Siddha and Ayurvedic physicians for customized dosage recommendations, pulse diagnosis, and holistic dietary guidance.',
                'எங்கள் அனுபவம் வாய்ந்த சித்த மருத்துவர்களிடம் உங்கள் உபாதைகளுக்கு தகுந்த மருந்து பரிந்துரைகள் மற்றும் உணவு முறைகளை இலவசமாக பெற்றுக்கொள்ளுங்கள்.'
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
            <a
              href="https://wa.me/919043434226?text=Vanakkam%20Ruthra%20Medicines,%20I%20need%20a%20doctor%20consultation%20regarding%20my%20health."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t('WhatsApp Doctor Desk', 'வாட்ஸ்அப் ஆலோசனை')}</span>
            </a>
            <a
              href="tel:+919043434226"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#DFB36C]" />
              <span>+91 9043434226</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
