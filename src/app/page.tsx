'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Trees, Award, Droplets, Activity, Wind, Heart, ShieldCheck, Flame, Layers, Sparkles, CheckCircle2, MessageCircle, Truck, CreditCard, ShoppingBag, Star, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import StoreHeroCarousel from '@/components/StoreHeroCarousel';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CONCERN_CATEGORIES, FORMULATION_CATEGORIES, BUNDLES } from '@/data/products';

export default function HomePage() {
  const { language, t } = useLanguage();
  const { addItem } = useCart();

  // Signature formulations for store shelves
  const bestSellerProducts = PRODUCTS.slice(0, 8);
  const wellnessEssentials = PRODUCTS.slice(8, 16);

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

  return (
    <div className="w-full max-w-full overflow-x-hidden flex flex-col bg-[#FDFBF7]">
      {/* 1. STORE HERO DYNAMIC PROMOTIONAL CAROUSEL */}
      <StoreHeroCarousel />

      {/* 2. CRITICAL STORE TRUST STRIP (UPI, COD, WHATSAPP, TN DISPATCH) */}
      <section className="w-full bg-[#16382B] text-white py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 shadow-sm border-b border-[#C29043]/30">
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
                +91 91715 08042
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

      {/* 3. VISUAL CATEGORY EXPLORATION TILES (Shop by Health Need) */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between mb-6">
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
            <span>{t('View All', 'அனைத்தும்')}</span>
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
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#E8F1EB] group-hover:bg-[#16382B] group-hover:text-white flex items-center justify-center mb-3 shadow-xs transition-colors">
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

      {/* 4. CATCHY COMBO DEALS SPOTLIGHT (Patanjali / AyushBuy Store Style) */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-[#16382B] to-[#0E251C] text-white border-y border-[#C29043]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9534F] text-white text-xs font-black uppercase tracking-wider mb-2 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span>{t('Limited Period Value Deals', 'சிறப்பு காம்போ தள்ளுபடி')}</span>
              </div>
              <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {t('Featured Wellness Combos (Save Up to 20%)', 'சிறப்பு மூலிகை தொகுப்புகள் (20% சேமிப்பு)')}
              </h2>
            </div>
            <Link
              href="/shop#combos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DFB36C] hover:text-white transition-colors"
            >
              <span>{t('View All Combo Packs', 'அனைத்து தொகுப்புகள்')}</span>
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

      {/* 5. STORE BESTSELLERS SHELF (Primary Product Showcase) */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#C29043] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('Top Rated by Vaidyars', 'பிரபலமான மருந்துகள்')}</span>
            </span>
            <h2 className="font-serif-brand text-2xl sm:text-3xl md:text-4xl font-bold text-[#16382B] mt-0.5">
              {t('Bestselling Classical Formulations', 'அதிகம் விற்கப்படும் பாரம்பரிய மருந்துகள்')}
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#16382B] hover:text-[#C29043] transition-colors"
          >
            <span>{t('Browse Full Store Catalog', 'அனைத்து மருந்துகள்')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid: 2 col mobile, 3 col sm, 4 col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {bestSellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>{t('Explore All Classical Medicines', 'முழு பட்டியல் பார்க்க')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. SHOP BY TRADITIONAL FORMULATION (Chooranam, Kudineer, Thailam, Lehyam) */}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {FORMULATION_CATEGORIES.map(form => (
              <Link
                key={form.slug}
                href={`/shop/formulations/${form.slug}`}
                className="group p-5 rounded-2xl bg-white border border-[#16382B]/10 hover:border-[#C29043] transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between text-center"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#16382B] group-hover:text-white transition-colors">
                    <span className="font-serif-brand text-lg font-bold">
                      {form.title[0]}
                    </span>
                  </div>
                  <h3 className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B] group-hover:text-[#C29043] transition-colors">
                    {language === 'ta' ? form.titleTa : form.title}
                  </h3>
                  <p className="text-[11px] text-[#8A9B93] font-medium mt-1">
                    {language === 'ta' ? form.taglineTa : form.tagline}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#16382B]/5 text-xs font-bold text-[#16382B] flex items-center justify-center gap-1 group-hover:text-[#C29043]">
                  <span>{t('Browse', 'பார்')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VERIFIED STORE REVIEWS & REPUTATION (AyushBuy / E-Commerce Style) */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
          <span className="text-xs uppercase tracking-wider font-extrabold text-[#C29043]">
            {t('Real Customer Reviews', 'வாடிக்கையாளர் நன்மதிப்பு')}
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            {t('Trusted Across Tamil Nadu', 'தமிழக குடும்பங்களின் நம்பிக்கை')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Review 1 */}
          <div className="bg-white p-5 rounded-2xl border border-[#16382B]/10 shadow-xs flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center gap-1 text-[#C29043]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C29043]" />
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
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-bold">
                Rej-Viyan Oil
              </span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-5 rounded-2xl border border-[#16382B]/10 shadow-xs flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center gap-1 text-[#C29043]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C29043]" />
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
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-bold">
                Madhuradhi Chooranam
              </span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-5 rounded-2xl border border-[#16382B]/10 shadow-xs flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center gap-1 text-[#C29043]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C29043]" />
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
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-bold">
                Nochi Kudineer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAST CONVERSION CTA BANNER */}
      <section className="bg-[#16382B] text-white py-10 sm:py-12 border-t border-[#C29043]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1.5">
              <span className="text-xs font-bold text-[#DFB36C] uppercase tracking-wider">
                {t('Direct Apothecary Dispatch', 'திருநெல்வேலி நேரடி அஞ்சல்')}
              </span>
              <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-white">
                {t('Need Assistance or Ready to Place an Order?', 'மருந்து தேர்வு அல்லது நேரடி ஆர்டருக்கு')}
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                {t('Free shipping across Tamil Nadu on ₹500+ • Direct UPI, COD & WhatsApp support', '₹500க்கு மேல் இலவச டெலிவரி • நேரடி UPI, COD மற்றும் வாட்ஸ்அப் உதவி')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#DFB36C] hover:bg-[#C29043] text-[#16382B] font-extrabold text-xs sm:text-sm shadow-md transition-all text-center"
              >
                <span>{t('Browse Full Store', 'கடைக்கு செல்ல')}</span>
              </Link>
              <a
                href="https://wa.me/919171508042?text=Vanakkam%20Ruthra%20Medicines,%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t('WhatsApp: +91 91715 08042', 'வாட்ஸ்அப்: +91 91715 08042')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
