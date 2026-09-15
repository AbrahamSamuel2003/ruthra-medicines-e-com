'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Trees, Award, Droplets, Activity, Wind, Heart, ShieldCheck, Flame, Layers, Calendar, CheckCircle2, MessageCircle, Truck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import TrustBar from '@/components/TrustBar';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CONCERN_CATEGORIES, FORMULATION_CATEGORIES, BUNDLES } from '@/data/products';

export default function HomePage() {
  const { language, t } = useLanguage();
  const { addItem } = useCart();

  // Pick 8 featured signature formulations for balanced 4-col desktop grid
  const featuredProducts = PRODUCTS.slice(0, 8);

  // Helper to get category icons
  const getConcernIcon = (slug: string) => {
    switch (slug) {
      case 'joint-mobility': return <Activity className="w-4 h-4 text-[#C29043]" />;
      case 'respiratory': return <Wind className="w-4 h-4 text-[#C29043]" />;
      case 'womens-wellness': return <Heart className="w-4 h-4 text-[#C29043]" />;
      case 'metabolic-wellness': return <ShieldCheck className="w-4 h-4 text-[#C29043]" />;
      case 'digestive-wellness': return <Flame className="w-4 h-4 text-[#C29043]" />;
      case 'skin-hair': return <Droplets className="w-4 h-4 text-[#C29043]" />;
      default: return <Layers className="w-4 h-4 text-[#C29043]" />;
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden flex flex-col bg-[#FAF8F5]">
      {/* 1. HERO SECTION — REFINED TOP PADDING, AUTHENTIC SIDDHA BACKGROUND, TRUE CENTERED */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-[#16382B]/10">
        {/* Authentic Siddha Botanical Background — Richly Visible with Natural Depth */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-siddha-herbs.jpg"
            alt="Authentic Siddha Botanicals & Brass Mortar"
            fill
            priority
            className="object-cover object-center opacity-85 sm:opacity-90 filter saturate-115 contrast-105"
          />
          {/* Balanced soft veil preserving clear botanical visibility & rich contrast */}
          <div className="absolute inset-0 bg-[#FAF8F5]/65 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/40 via-transparent to-[#FAF8F5]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-7">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#16382B]/20 text-[#16382B] text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C29043] animate-pulse" />
              <span>
                {t(
                  'Authentic Siddha Pharmacopeia • Tirunelveli, Tamil Nadu',
                  'பாரம்பரிய சித்த மருத்துவ இல்லம் • திருநெல்வேலி, தமிழ்நாடு'
                )}
              </span>
            </div>

            {/* Grand Headline (Strictly 2 lines across all viewports) */}
            <h1 className="font-serif-brand font-bold text-[#16382B] tracking-tight drop-shadow-xs">
              {language === 'ta' ? (
                <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-[1.25] block">
                  <span className="block">பழமையான சித்த அறிவு,</span>
                  <span className="text-[#C29043] font-normal block mt-0.5 sm:mt-1">நவீன வாழ்வியலுக்காக.</span>
                </span>
              ) : (
                <span className="text-[22px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-[1.16] block">
                  <span className="block">Classical Siddha Wisdom,</span>
                  <span className="text-[#C29043] italic font-normal block mt-0.5 sm:mt-1">Crafted for Modern Living.</span>
                </span>
              )}
            </h1>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#16382B]/95 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-2xs">
              {t(
                "Rooted in the ancient healing lineage of southern Tamil Nadu. 20 time-honored formulations prepared with pure hand-selected botanicals, authentic Shodhana purification, and strict botanical quality discipline.",
                'தென் தமிழகத்தின் பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி முறைப்படி பக்குவம் செய்யப்பட்ட 20 உன்னத மருந்துகள் — சூரணம், குடிநீர், மற்றும் மூலிகை தைலங்கள்.'
              )}
            </p>

            {/* Dual Action Buttons — Stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 w-full max-w-md sm:max-w-none mx-auto">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-98 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all border border-transparent hover:border-[#C29043]"
              >
                <span>{t('Shop All 20 Formulations', 'அனைத்து மருந்துகளையும் வாங்க')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/shop#combos"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-[#E8F1EB] text-[#16382B] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#16382B]/20 shadow-2xs hover:shadow-xs transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#C29043]" />
                <span>{t('Explore Value Combos (Save 20%)', 'சிறப்பு தொகுப்புகள் (20% சேமிப்பு)')}</span>
              </Link>
            </div>

            {/* 3 Core Authenticity Highlights */}
            <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 max-w-3xl mx-auto text-left">
              <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#16382B]/15 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0 font-serif-brand font-bold text-xs sm:text-sm">
                  20
                </div>
                <div>
                  <p className="text-xs font-bold text-[#16382B] leading-tight">
                    {t('Verified Formulations', 'சரிபார்க்கப்பட்டவை')}
                  </p>
                  <p className="text-[10.5px] text-[#3D5A68] mt-0.5 leading-tight">
                    {t('Chooranam, Kudineer, Thailam', 'சூரணம், குடிநீர், தைலம்')}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#16382B]/15 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E8F1EB] text-[#C29043] flex items-center justify-center flex-shrink-0">
                  <Trees className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#16382B] leading-tight">
                    {t('Tirunelveli Heritage', 'திருநெல்வேலி மரபு')}
                  </p>
                  <p className="text-[10.5px] text-[#3D5A68] mt-0.5 leading-tight">
                    {t('Western Ghats Botanicals', 'மேற்கு தொடர்ச்சி மலை மூலிகைகள்')}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#16382B]/15 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#16382B] leading-tight">
                    {t('All 38 TN Districts', '38 மாவட்ட அஞ்சல்')}
                  </p>
                  <p className="text-[10.5px] text-[#3D5A68] mt-0.5 leading-tight">
                    {t('Direct Secure Dispatch', 'நேரடி பாதுகாப்பான விநியோகம்')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustBar />

      {/* 2.1 APP-STYLE QUICK CATEGORY SCROLLER (Native Mobile Pill Row) */}
      <div className="w-full bg-white border-b border-[#16382B]/10 py-2.5 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
            <Link
              href="/shop"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#16382B] text-white flex-shrink-0 flex items-center gap-1.5 shadow-2xs hover:bg-[#204C3B] transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#C29043]" />
              <span>{t('All 20 Formulations', 'அனைத்து மருந்துகள்')}</span>
            </Link>

            {CONCERN_CATEGORIES.map(cat => (
              <Link
                key={cat.slug}
                href={`/shop/concerns/${cat.slug}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF8F5] text-[#264653] hover:text-[#16382B] hover:bg-[#E8F1EB] border border-[#16382B]/10 flex-shrink-0 flex items-center gap-1.5 transition-colors"
              >
                <span>{getConcernIcon(cat.slug)}</span>
                <span>{language === 'ta' ? cat.titleTa : cat.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 2.2 FAST TN SHIPPING & VALUE COMBOS STRIP (Pure E-Commerce Trust) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full pt-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#E8F1EB]/90 border border-[#16382B]/10 flex flex-col sm:flex-row items-center justify-between gap-3.5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16382B] text-[#C29043] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B]">
                {t('Direct Apothecary Dispatch across all 38 Tamil Nadu Districts', 'தமிழ்நாட்டின் 38 மாவட்டங்களுக்கும் நேரடி விரைவு விநியோகம்')}
              </h3>
              <p className="text-[11px] text-[#3D5A68] mt-0.5">
                {t('Free tracked courier on orders above ₹500. Handcrafted in small batches & dispatched within 24–48 hours.', '₹500க்கு மேற்பட்ட ஆர்டர்களுக்கு கட்டணமில்லா விநியோகம். 24–48 மணி நேரத்தில் அனுப்பப்படும்.')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/shop#combos"
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#16382B] text-white text-xs font-semibold text-center hover:bg-[#204C3B] transition-colors"
            >
              {t('Explore Combos (Save 20%)', 'காம்போ சலுகைகள்')}
            </Link>
            <a
              href="https://wa.me/919171508042?text=Vanakkam,%20I%20would%20like%20to%20place%20an%20order%20for%20Ruthra%20Siddha%20formulations."
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-white text-[#16382B] border border-[#16382B]/20 text-xs font-semibold text-center hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-700" />
              <span>{t('WhatsApp Desk', 'வாட்ஸ்அப் உதவி')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. SHOP BY CONCERN */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#C29043]">
              {t('Targeted Botanical Care', 'உபாதைகள் வாரியாக')}
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B] mt-1">
              {t('Explore by Wellness Concern', 'உபாதைகள் வாரியாக ஆராயுங்கள்')}
            </h2>
          </div>
          <Link
            href="/shop/concerns"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16382B] hover:text-[#C29043] transition-colors"
          >
            <span>{t('View All Concerns', 'அனைத்து உபாதைகள்')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CONCERN_CATEGORIES.map(category => (
            <Link
              key={category.slug}
              href={`/shop/concerns/${category.slug}`}
              className="group p-6 rounded-2xl bg-[#E8F1EB]/50 border border-[#16382B]/10 hover:border-[#C29043]/60 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white text-[#16382B] flex items-center justify-center shadow-xs border border-[#16382B]/10 group-hover:scale-105 transition-transform">
                    {getConcernIcon(category.slug)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8A9B93] bg-white px-2.5 py-1 rounded-full border border-[#16382B]/10">
                    {language === 'ta' ? category.herbalKeyTa : category.herbalKey}
                  </span>
                </div>

                <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B] group-hover:text-[#C29043] transition-colors">
                  {language === 'ta' ? category.titleTa : category.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3D5A68] mt-2 leading-relaxed">
                  {language === 'ta' ? category.taglineTa : category.tagline}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#16382B]/10 flex items-center justify-between text-xs font-semibold text-[#16382B] group-hover:text-[#C29043]">
                <span>{t('View Formulations', 'மருந்துகளை பார்க்க')}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (SIGNATURE FORMULATIONS) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F5] border-t border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#C29043]">
                {t('Time-Honored Siddha Pharmacopeia', 'பாரம்பரிய சித்த மருந்துகள்')}
              </span>
              <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B] mt-1">
                {t('Signature Formulations', 'சிறப்பு சித்த தயாரிப்புகள்')}
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16382B] hover:text-[#C29043] transition-colors"
            >
              <span>{t('Browse All 20 Products', 'அனைத்து 20 மருந்துகளையும் பார்க்க')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Grid: 2 col mobile, 2 col sm, 3 col md, 4 col lg */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#16382B] text-white font-semibold text-sm hover:bg-[#204C3B] shadow-md transition-all"
            >
              <span>{t('Explore Full Catalog', 'முழு பட்டியல் பார்க்க')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SHOP BY FORMULATION (TRADITIONAL FORMS) */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#C29043]">
            {t('Classical Administration Paths', 'சித்த மருந்து வடிவங்கள்')}
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B] mt-1">
            {t('Explore Traditional Forms', 'பாரம்பரிய மருந்து வடிவங்கள்')}
          </h2>
          <p className="text-sm text-[#3D5A68] mt-2">
            {t(
              'Siddha wisdom selects distinct carriers and processing methods to optimize bio-availability and targeted absorption.',
              'சூரணம், குடிநீர், தைலம் என ஒவ்வொரு வகைக்கும் உரிய உன்னத மருத்துவ நன்மைகள்.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {FORMULATION_CATEGORIES.map(form => (
            <Link
              key={form.slug}
              href={`/shop/formulations/${form.slug}`}
              className="group p-5 rounded-2xl bg-white border border-[#16382B]/10 hover:border-[#C29043] transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between text-center h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#16382B] group-hover:text-white transition-colors">
                  <span className="font-serif-brand text-lg font-bold">
                    {form.title[0]}
                  </span>
                </div>
                <h3 className="font-serif-brand font-bold text-base text-[#16382B] group-hover:text-[#C29043] transition-colors">
                  {language === 'ta' ? form.titleTa : form.title}
                </h3>
                <p className="text-xs text-[#8A9B93] font-medium mt-1">
                  {language === 'ta' ? form.taglineTa : form.tagline}
                </p>
                <p className="text-[11px] text-[#3D5A68] mt-2.5 line-clamp-3 leading-relaxed text-left">
                  {language === 'ta' ? form.classicalContextTa : form.classicalContext}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#16382B]/5 text-xs font-semibold text-[#16382B] flex items-center justify-center gap-1 group-hover:text-[#C29043]">
                <span>{t('Browse', 'பார்')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. SIDDHA HERITAGE SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#16382B] text-white overflow-hidden relative border-y border-[#C29043]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#C29043]/40 p-2 bg-white/5 backdrop-blur-xs">
                <div className="aspect-4/3 relative rounded-xl overflow-hidden bg-[#0E251C]">
                  <Image
                    src="/images/siddha-grinding-heritage.jpg"
                    alt="Siddha Botanical Grinding Heritage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFB36C] text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{t('Tirunelveli Medical Heritage', 'திருநெல்வேலி பாரம்பரியம்')}</span>
              </div>

              <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t(
                  'Rooted in Tradition. Designed for Today.',
                  'மரபில் வேரூன்றி, இன்றைய வாழ்விற்கு ஏற்ப.'
                )}
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {t(
                  "Siddha medicine is one of the world's most ancient codified healthcare philosophies, originating thousands of years ago in Tamilakam under the stewardship of traditional Siddhars like Agathiyar and Theraiyar. It places equal emphasis on Mukkutram (Vatham, Pittham, Kabam) balance, pure dietary conduct, and botanical alchemy.",
                  'அகத்தியர் உள்ளிட்ட சித்தர்களின் வழிகாட்டுதலின்படி, வாதம், பித்தம், கபம் ஆகிய முக்குற்றங்களை சமன் செய்து ஆரோக்கியத்தை நிலைநிறுத்தும் முறை சித்த மருத்துவம்.'
                )}
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {t(
                  'At Ruthra, every chooranam powder is meticulously purified through traditional Shodhana to eliminate natural mucosal irritants, and every thailam oil is slow-cooked over wood fire in brass and iron vessels until the exact medicinal Pakam is achieved.',
                  'ருத்ரா மருந்துகளில் ஒவ்வொரு சூரணமும் சுத்தி முறைகள் தவறாமல் பக்குவம் செய்யப்பட்டு, தைலங்கள் பாரம்பரிய பாத்திரங்களில் வடிக்கப்படுகின்றன.'
                )}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-[#C29043] hover:bg-[#DFB36C] text-[#16382B] font-bold text-sm transition-colors shadow-md"
                >
                  {t('Read Our Full Heritage', 'எங்கள் முழு வரலாறு')}
                </Link>
                <Link
                  href="/shop"
                  className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  {t('Browse Best Sellers', 'பிரபலமான மருந்துகள்')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CURATED BUNDLES SECTION */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#C29043]">
              {t('Complementary Regimens', 'ஒருங்கிணைந்த தொகுப்புகள்')}
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B] mt-1">
              {t('Featured Wellness Collections', 'சிறப்பு மூலிகை தொகுப்புகள்')}
            </h2>
          </div>
          <p className="text-xs text-[#8A9B93] max-w-sm">
            {t(
              'Synergistic herbal combinations designed for structured daily care.',
              'உள் மற்றும் வெளிப்புற நலனுக்கான பாரம்பரிய மூலிகை சேர்க்கைகள்.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUNDLES.map(bundle => {
            const bundleProducts = PRODUCTS.filter(p => bundle.productSlugs.includes(p.slug));
            return (
              <div
                key={bundle.id}
                className="p-6 rounded-2xl bg-white border border-[#16382B]/15 hover:border-[#C29043] shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#E8F1EB] text-[#16382B]">
                      {bundle.badge}
                    </span>
                    <span className="text-xs font-bold text-[#16382B] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#16382B]/10">
                      {t(`Save ₹${bundle.savings}`, `₹${bundle.savings} சேமிப்பு`)}
                    </span>
                  </div>

                  <h3 className="font-serif-brand text-xl font-bold text-[#16382B]">
                    {language === 'ta' ? bundle.titleTa : bundle.title}
                  </h3>
                  <p className="text-xs text-[#3D5A68] mt-1">
                    {language === 'ta' ? bundle.subtitleTa : bundle.subtitle}
                  </p>

                  <p className="text-xs text-[#264653] mt-3 leading-relaxed">
                    {language === 'ta' ? bundle.descriptionTa : bundle.description}
                  </p>

                  {/* Included Items pills */}
                  <div className="mt-4 pt-3 border-t border-[#16382B]/10 space-y-1.5">
                    <p className="text-[11px] font-semibold text-[#8A9B93] uppercase tracking-wider">
                      {t('Includes:', 'தொகுப்பில் உள்ளவை:')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {bundleProducts.map(bp => (
                        <span
                          key={bp.id}
                          className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 text-[#16382B] font-medium"
                        >
                          {language === 'ta' ? bp.tamilName : bp.name} ({bp.packSize})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#16382B]/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs line-through text-gray-400 mr-2">
                      ₹{bundle.regularPrice}
                    </span>
                    <span className="font-serif-brand text-xl font-bold text-[#16382B]">
                      ₹{bundle.bundlePrice}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      bundleProducts.forEach(bp => addItem(bp, 1));
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-95 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>{t('Add Bundle to Cart', 'தொகுப்பை சேர்க்க')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. VERIFIED CUSTOMER REVIEWS & E-COMMERCE TRUST (AyushBuy style) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#E8F1EB]/60 border-t border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C29043]">
              {t('Verified Customer Experiences', 'வாடிக்கையாளர் கருத்துகள்')}
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B]">
              {t('Loved by Families Across Tamil Nadu', 'தமிழக குடும்பங்களின் நன்மதிப்பு')}
            </h2>
            <p className="text-xs sm:text-sm text-[#3D5A68]">
              {t(
                'Real feedback from customers using classical Ruthra formulations for joint wellness, respiratory care, and daily vitality.',
                'மூட்டு நலம், சுவாச ஆரோக்கியம் மற்றும் பாரம்பரிய நலனுக்காக எங்கள் மருந்துகளைப் பயன்படுத்திய வாடிக்கையாளர்களின் அனுபவம்.'
              )}
            </p>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#16382B]/10 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C29043]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#264653] leading-relaxed italic">
                  &ldquo;{t(
                    'The Rej-Viyan Pain Oil gave significant relief for my mother’s chronic knee stiffness within a week. Delivered to Madurai in just 2 days. 100% genuine formulation!',
                    'ரெஜ்-வியான் தைலம் என் தாயாரின் மூட்டு வலிக்கு ஒரு வாரத்திலேயே நல்ல பலன் தந்தது. 2 நாட்களில் மதுரைக்கு டெலிவரி செய்யப்பட்டது. மிகவும் அருமை!'
                  )}&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#16382B]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#16382B]">S. Meenakshi Sundaram</h4>
                  <p className="text-[10.5px] text-[#8A9B93]">Madurai • {t('Verified Buyer', 'சரிபார்க்கப்பட்ட வாடிக்கையாளர்')}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-semibold">
                  Rej-Viyan Oil
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#16382B]/10 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C29043]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#264653] leading-relaxed italic">
                  &ldquo;{t(
                    'Ruthra Madhuradhi Chooranam and Pirandai sachets have become a daily staple at our home. Pure botanicals without unnecessary sugars. Prompt WhatsApp tracking.',
                    'மதுராதி சூரணம் மற்றும் பிரண்டை சூரணம் எங்கள் வீட்டில் தினமும் பயன்படுத்துகிறோம். தூய மூலிகைகள். வாட்ஸ்அப் ஆர்டர் சேவை மிக விரைவாக இருந்தது.'
                  )}&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#16382B]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#16382B]">K. Revathi</h4>
                  <p className="text-[10.5px] text-[#8A9B93]">Chennai • {t('Verified Buyer', 'சரிபார்க்கப்பட்ட வாடிக்கையாளர்')}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-semibold">
                  Madhuradhi Chooranam
                </span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#16382B]/10 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C29043]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#264653] leading-relaxed italic">
                  &ldquo;{t(
                    'Authentic Tirunelveli Siddha pharmacopeia standard. The Nochi Kudineer works wonders for seasonal cough and cold. The combo pack saved us 20% too!',
                    'திருநெல்வேலி பாரம்பரிய சித்த மருத்துவ தரம். நொச்சி குடிநீர் சளி மற்றும் இருமலுக்கு அருமையான நிவாரணம். சிறப்பு காம்போ பேக்கில் சேமிப்பும் கிடைத்தது!'
                  )}&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#16382B]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#16382B]">T. Arumugam</h4>
                  <p className="text-[10.5px] text-[#8A9B93]">Coimbatore • {t('Verified Buyer', 'சரிபார்க்கப்பட்ட வாடிக்கையாளர்')}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-semibold">
                  Nochi Kudineer
                </span>
              </div>
            </div>
          </div>

          {/* E-Commerce Trust Banner */}
          <div className="bg-gradient-to-br from-white to-[#FAF8F5] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#16382B]/12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F1EB] text-[#16382B] text-[11px] font-bold mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C29043] animate-pulse" />
                <span>{t('Tirunelveli Direct Pharmacopeia', 'திருநெல்வேலி நேரடி அஞ்சல்')}</span>
              </div>
              <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B] leading-tight">
                {t('Ready to Experience Authentic Siddha Healing?', 'பாரம்பரிய சித்த நலம் பெற தயாரா?')}
              </h3>
              <p className="text-xs sm:text-sm text-[#3D5A68] leading-relaxed">
                {t(
                  'Free delivery across Tamil Nadu on ₹500+ • Direct Tirunelveli dispatch • Easy WhatsApp assistance',
                  '₹500க்கு மேல் தமிழகம் முழுவதும் இலவச டெலிவரி • திருநெல்வேலி நேரடி அஞ்சல் • வாட்ஸ்அப் உதவி'
                )}
              </p>
            </div>

            {/* Production-Grade Responsive Action Buttons */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>{t('Shop All Formulations', 'அனைத்து மருந்துகள் வாங்க')}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
              <a
                href="https://wa.me/919171508042?text=Vanakkam%20Ruthra%20Medicines,%20I%20would%20like%20to%20inquire%20and%20order%20formulations."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
                <span>{t('Order on WhatsApp', 'வாட்ஸ்அப்பில் ஆர்டர்')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
