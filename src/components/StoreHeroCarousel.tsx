'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Truck, CreditCard, Percent } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface BannerSlide {
  id: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'banner-siddha-medicines',
    imageSrc: '/images/banners/hero_banner_1_combos.jpg',
    altText: 'Ruthra Siddha Medicines - Natural Care, Healthy Life',
    link: '/shop'
  },
  {
    id: 'banner-rej-viyan-pain-oil',
    imageSrc: '/images/banners/hero_banner_2_pain_relief.jpg',
    altText: 'Rej-Viyan Pain Relief Oil - Instant Knee, Back & Joint Care - Flat 15% Off',
    link: '/shop/concerns/joint-mobility'
  },
  {
    id: 'banner-family-hair-cough',
    imageSrc: '/images/banners/hero_banner_3_family_wellness.jpg',
    altText: 'Daily Family Health & Hair Care - Harshika Hair Oil & Sinocof Cough Syrup',
    link: '/shop'
  }
];

export default function StoreHeroCarousel() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = BANNER_SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#16382B]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional Hero Banners"
    >
      {/* Top Notice Marquee Banner */}
      <div className="w-full bg-gradient-to-r from-[#C29043] via-[#DFB36C] to-[#C29043] text-[#16382B] py-1.5 px-4 text-center font-bold text-[11px] sm:text-xs flex items-center justify-center gap-2 sm:gap-4 shadow-inner">
        <span className="flex items-center gap-1">
          <Truck className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{t('FREE Delivery across all 38 Tamil Nadu Districts on ₹500+', 'தமிழகம் முழுவதும் ₹500க்கு மேல் இலவச டெலிவரி')}</span>
        </span>
        <span className="hidden md:inline text-[#16382B]/40">•</span>
        <span className="hidden md:flex items-center gap-1">
          <CreditCard className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{t('Instant UPI, Cards & COD Available', 'UPI, கார்டுகள் & COD வசதி உண்டு')}</span>
        </span>
        <span className="hidden sm:inline text-[#16382B]/40">•</span>
        <span className="flex items-center gap-1 font-extrabold text-[#0D261C]">
          <Percent className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{t('Use Code RUTHRA10 for 10% Off', 'RUTHRA10 குறியீட்டில் 10% தள்ளுபடி')}</span>
        </span>
      </div>

      {/* 100% Full-Bleed Edge-to-Edge Hero Banner (Image IS the Entire Hero Section) */}
      <div className="relative w-full overflow-hidden">
        <Link 
          href={slide.link}
          className="block relative w-full aspect-[1024/571] w-full"
        >
          <Image
            src={slide.imageSrc}
            alt={slide.altText}
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
        </Link>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
          }}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all z-20 cursor-pointer shadow-lg"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
          }}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all z-20 cursor-pointer shadow-lg"
          aria-label="Next banner"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Pagination Indicator Dots */}
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20">
          {BANNER_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(idx);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer shadow-xs ${
                idx === currentSlide ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-[#DFB36C]' : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
