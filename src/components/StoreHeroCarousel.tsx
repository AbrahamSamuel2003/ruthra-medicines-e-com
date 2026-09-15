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
    id: 'banner-siddha-medicines-v2',
    imageSrc: '/images/banners/ruthra_hero_siddha_v2.jpg',
    altText: 'Ruthra Siddha Medicines - Classical Siddha Pharmacopeia - Natural Care, Healthy Life',
    link: '/shop'
  },
  {
    id: 'banner-rej-viyan-pain-oil-v2',
    imageSrc: '/images/banners/ruthra_hero_pain_relief_v2.jpg',
    altText: 'Rej-Viyan Pain Relief Oil - Instant Knee, Back & Joint Care',
    link: '/shop/concerns/joint-mobility'
  },
  {
    id: 'banner-family-hair-cough-v2',
    imageSrc: '/images/banners/ruthra_hero_family_wellness_v2.jpg',
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
      className="relative w-full overflow-hidden bg-[#FAF8F5]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional Hero Banners"
    >
      {/* Sleek Top Notice Strip */}
      <div className="w-full bg-gradient-to-r from-[#C29043] via-[#DFB36C] to-[#C29043] text-[#16382B] py-1 px-3 text-center font-bold text-[10px] sm:text-[11.5px] flex items-center justify-center gap-2 sm:gap-3.5 shadow-inner">
        <span className="flex items-center gap-1">
          <Truck className="w-3 h-3 flex-shrink-0" />
          <span>{t('FREE Delivery Across Tamil Nadu on ₹500+', 'தமிழகம் முழுவதும் ₹500க்கு மேல் இலவச டெலிவரி')}</span>
        </span>
        <span className="hidden md:inline text-[#16382B]/40">•</span>
        <span className="hidden md:flex items-center gap-1">
          <CreditCard className="w-3 h-3 flex-shrink-0" />
          <span>{t('Instant UPI, Cards & COD Available', 'UPI, கார்டுகள் & COD வசதி உண்டு')}</span>
        </span>
        <span className="hidden sm:inline text-[#16382B]/40">•</span>
        <span className="flex items-center gap-1 font-extrabold text-[#0D261C]">
          <Percent className="w-3 h-3 flex-shrink-0" />
          <span>{t('Use Code RUTHRA10 for 10% Off', 'RUTHRA10 குறியீட்டில் 10% தள்ளுபடி')}</span>
        </span>
      </div>

      {/* Production-Grade Full-Bleed Panoramic Hero Banner (Exact 1024x434 Aspect Ratio, Zero Cropping) */}
      <div className="relative w-full overflow-hidden group">
        <Link 
          href={slide.link}
          className="block relative w-full aspect-[1024/434] overflow-hidden"
        >
          <Image
            src={slide.imageSrc}
            alt={slide.altText}
            fill
            priority
            unoptimized
            className="object-contain sm:object-cover object-center w-full h-full transform transition-transform duration-500 group-hover:scale-[1.006]"
            sizes="100vw"
          />
        </Link>

        {/* Compact Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/35 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center border border-white/20 transition-all z-20 cursor-pointer shadow-md opacity-80 hover:opacity-100"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/35 hover:bg-black/75 text-white backdrop-blur-xs flex items-center justify-center border border-white/20 transition-all z-20 cursor-pointer shadow-md opacity-80 hover:opacity-100"
          aria-label="Next banner"
        >
          <ChevronRight className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>

        {/* Minimalist Pagination Indicator Dots */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {BANNER_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(idx);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer shadow-xs ${
                idx === currentSlide ? 'w-5 sm:w-7 h-1.5 bg-[#16382B] border border-white/50' : 'w-1.5 h-1.5 bg-black/40 hover:bg-black/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
