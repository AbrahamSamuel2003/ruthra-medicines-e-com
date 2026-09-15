'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Percent, Truck, MessageCircle, CreditCard } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Slide {
  id: string;
  taglineEn: string;
  taglineTa: string;
  titleEn: string;
  titleTa: string;
  highlightEn: string;
  highlightTa: string;
  descEn: string;
  descTa: string;
  badgeEn: string;
  badgeTa: string;
  discountBadge: string;
  ctaTextEn: string;
  ctaTextTa: string;
  ctaLink: string;
  secondaryCtaEn: string;
  secondaryCtaTa: string;
  secondaryCtaLink: string;
  bgGradient: string;
  accentColor: string;
  imageSrc: string;
}

const SLIDES: Slide[] = [
  {
    id: 'slide-combos',
    taglineEn: '✨ Special Apothecary Offer',
    taglineTa: '✨ சிறப்பு மூலிகை சலுகை',
    titleEn: 'Classical Healing Combos',
    titleTa: 'சித்த & ஆயுர்வேத சிறப்பு தொகுப்புகள்',
    highlightEn: 'Save Up to 20% Off',
    highlightTa: '20% வரை நேரடி சேமிப்பு',
    descEn: 'Synergistic joint care, respiratory shield, and vitality packages prepared with authentic Shodhana purification.',
    descTa: 'மூட்டு நலம், சுவாச பாதுகாப்பு மற்றும் முழு உடல் தேஜஸுக்கான பாரம்பரிய முறைப்படி தயாரிக்கப்பட்ட தொகுப்புகள்.',
    badgeEn: 'Best Value Combos',
    badgeTa: 'சிறப்பு சேமிப்பு பேக்குகள்',
    discountBadge: 'FLAT 20% OFF',
    ctaTextEn: 'Shop Value Combos',
    ctaTextTa: 'காம்போ சலுகைகள் வாங்க',
    ctaLink: '/shop#combos',
    secondaryCtaEn: 'View Full Catalog',
    secondaryCtaTa: 'அனைத்து மருந்துகள்',
    secondaryCtaLink: '/shop',
    bgGradient: 'from-[#0F2D21] via-[#16382B] to-[#1E4D3B]',
    accentColor: '#DFB36C',
    imageSrc: '/images/hero-siddha-herbs.jpg',
  },
  {
    id: 'slide-pain-relief',
    taglineEn: '🌿 Proven Herbal Efficacy',
    taglineTa: '🌿 பாரம்பரிய வலி நிவாரணம்',
    titleEn: 'Instant Joint & Muscle Care',
    titleTa: 'மூட்டு & தசை வலி நிவாரண தைலங்கள்',
    highlightEn: 'Pure Wood-Fired Thailams',
    highlightTa: 'மரச்செக்கு மூலிகை தைலங்கள்',
    descEn: 'Rej-Viyan Pain Oil & Mudakathan Legiyam — deep penetration formula for arthritis, stiffness, and backache.',
    descTa: 'ரெஜ்-வியான் தைலம் மற்றும் முடக்கத்தான் இலேகியம் — மூட்டு தேய்மானம், இடுப்பு வலிக்கு உடனடி நிவாரணம்.',
    badgeEn: 'Top Rated in Tamil Nadu',
    badgeTa: 'தமிழகத்தின் நன்மதிப்பு பெற்றது',
    discountBadge: 'POPULAR CHOICE',
    ctaTextEn: 'Explore Pain Relief',
    ctaTextTa: 'வலி நிவாரண மருந்துகள்',
    ctaLink: '/shop/concerns/joint-mobility',
    secondaryCtaEn: 'Order on WhatsApp',
    secondaryCtaTa: 'வாட்ஸ்அப் ஆர்டர்',
    secondaryCtaLink: 'https://wa.me/919171508042?text=Vanakkam%2C%20I%20want%20to%20order%20Ruthra%20Joint%20Pain%20Relief%20formulations.',
    bgGradient: 'from-[#1A2E26] via-[#16382B] to-[#234A38]',
    accentColor: '#FFB703',
    imageSrc: '/images/siddha-grinding-heritage.jpg',
  },
  {
    id: 'slide-delivery',
    taglineEn: '🚚 Direct Apothecary Dispatch',
    taglineTa: '🚚 திருநெல்வேலி நேரடி அஞ்சல்',
    titleEn: 'Free Express TN Shipping',
    titleTa: 'தமிழ்நாடு முழுவதும் விரைவு விநியோகம்',
    highlightEn: 'On All Orders Above ₹500',
    highlightTa: '₹500க்கு மேல் இலவச டெலிவரி',
    descEn: 'Directly dispatched from Tirunelveli across all 38 Tamil Nadu districts. Packed in tamper-evident sealed containers.',
    descTa: 'சென்னை, மதுரை, கோவை உட்பட 38 மாவட்டங்களுக்கும் 24–48 மணி நேரத்தில் நேரடி பாதுகாப்பான அஞ்சல்.',
    badgeEn: 'Fast & Tracked Courier',
    badgeTa: 'நேரடி பாதுகாப்பான விநியோகம்',
    discountBadge: 'FREE SHIPPING',
    ctaTextEn: 'Start Shopping',
    ctaTextTa: 'இப்போதே வாங்க',
    ctaLink: '/shop',
    secondaryCtaEn: 'Check Pincode Delivery',
    secondaryCtaTa: 'பின்கோடு டெலிவரி பார்க்க',
    secondaryCtaLink: '/shipping',
    bgGradient: 'from-[#0C241B] via-[#16382B] to-[#174836]',
    accentColor: '#E9C46A',
    imageSrc: '/images/hero-siddha-herbs.jpg',
  }
];

export default function StoreHeroCarousel() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  return (
    <div 
      className="relative w-full overflow-hidden bg-[#0F2D21]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Notice Marquee Banner */}
      <div className="bg-gradient-to-r from-[#C29043] via-[#DFB36C] to-[#C29043] text-[#16382B] py-1.5 px-4 text-center font-bold text-[11px] sm:text-xs flex items-center justify-center gap-2 sm:gap-4 shadow-inner">
        <span className="flex items-center gap-1">
          <Truck className="w-3.5 h-3.5" />
          <span>{t('FREE Delivery across all 38 Tamil Nadu Districts on ₹500+', 'தமிழகம் முழுவதும் ₹500க்கு மேல் இலவச டெலிவரி')}</span>
        </span>
        <span className="hidden md:inline text-[#16382B]/40">•</span>
        <span className="hidden md:flex items-center gap-1">
          <CreditCard className="w-3.5 h-3.5" />
          <span>{t('Instant UPI, Cards & COD Available', 'UPI, கார்டுகள் & COD வசதி உண்டு')}</span>
        </span>
        <span className="hidden sm:inline text-[#16382B]/40">•</span>
        <span className="flex items-center gap-1 font-extrabold text-[#0D261C]">
          <Percent className="w-3.5 h-3.5" />
          <span>{t('Use Code RUTHRA10 for 10% Off First Order', 'RUTHRA10 குறியீட்டில் 10% தள்ளுபடி')}</span>
        </span>
      </div>

      {/* Main Banner Slide Container */}
      <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Layered Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src={slide.imageSrc}
            alt="Ruthra Classical Apothecary"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity filter blur-[0.5px] transition-all duration-1000 transform scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90 transition-colors duration-1000`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text / CTAs */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Tagline & Discount Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#DFB36C] text-xs font-bold border border-white/20 shadow-xs">
                <span>{language === 'ta' ? slide.taglineTa : slide.taglineEn}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D9534F] text-white text-xs font-black tracking-wider uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slide.discountBadge}</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-brand font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight sm:leading-[1.15] tracking-tight">
              <span className="block">{language === 'ta' ? slide.titleTa : slide.titleEn}</span>
              <span className="block text-[#DFB36C] drop-shadow-md mt-0.5">
                {language === 'ta' ? slide.highlightTa : slide.highlightEn}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/90 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-xs">
              {language === 'ta' ? slide.descTa : slide.descEn}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-md mx-auto lg:mx-0">
              <Link
                href={slide.ctaLink}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#DFB36C] hover:bg-[#C29043] active:scale-[0.98] text-[#16382B] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all border border-amber-300"
              >
                <span>{language === 'ta' ? slide.ctaTextTa : slide.ctaTextEn}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>

              {slide.secondaryCtaLink.startsWith('http') ? (
                <a
                  href={slide.secondaryCtaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 backdrop-blur-md border border-white/25 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span>{language === 'ta' ? slide.secondaryCtaTa : slide.secondaryCtaEn}</span>
                </a>
              ) : (
                <Link
                  href={slide.secondaryCtaLink}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 backdrop-blur-md border border-white/25 shadow-sm transition-all"
                >
                  <span>{language === 'ta' ? slide.secondaryCtaTa : slide.secondaryCtaEn}</span>
                </Link>
              )}
            </div>
          </div>

          {/* Right Highlight Box / Mini Promo Card (Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="w-full max-w-sm p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#DFB36C] bg-black/30 px-3 py-1 rounded-full border border-[#DFB36C]/30">
                  {language === 'ta' ? slide.badgeTa : slide.badgeEn}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
              </div>

              <div className="space-y-2 border-b border-white/10 pb-4">
                <h4 className="font-serif-brand font-bold text-lg text-white">
                  {t('Direct from Tirunelveli', 'திருநெல்வேலி நேரடி ஆலை')}
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {t('Authentic Siddha & Ayurveda Pharmacopeia with pure Shodhana purification.', 'பாரம்பரிய சுத்தி முறைகளுடன் பக்குவம் செய்யப்பட்ட சுத்தமான மூலிகைகள்.')}
                </p>
              </div>

              {/* Instant Trust Perks */}
              <div className="space-y-2 text-xs text-white/90">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#DFB36C] flex-shrink-0" />
                  <span>{t('100% Classical Shodhana Standard', '100% பாரம்பரிய சுத்தி முறை')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#DFB36C] flex-shrink-0" />
                  <span>{t('24–48 Hr Dispatch across 38 TN Districts', '38 மாவட்டங்களுக்கும் 24-48 மணி நேர விரைவு அஞ்சல்')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span>{t('WhatsApp Help: +91 91715 08042', 'வாட்ஸ்அப் உதவி: +91 91715 08042')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentSlide ? 'w-8 h-2.5 bg-[#DFB36C]' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
