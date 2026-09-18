'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  ShoppingBag, 
  PhoneCall, 
  Award, 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Leaf,
  Droplets,
  Heart,
  FlaskConical,
  Activity,
  Wind,
  Flame
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { 
  SIDDHA_NAV_CATEGORIES, 
  AYURVEDA_NAV_CATEGORIES, 
  CONCERN_NAV_ITEMS as RAW_CONCERN_NAV_ITEMS 
} from '@/data/categories';

export { SIDDHA_NAV_CATEGORIES, AYURVEDA_NAV_CATEGORIES };

// Health Indication Categories with Icons for Header navigation
export const CONCERN_NAV_ITEMS = RAW_CONCERN_NAV_ITEMS.map(item => {
  let icon = Activity;
  if (item.slug === 'respiratory') icon = Wind;
  if (item.slug === 'digestive-wellness') icon = Flame;
  if (item.slug === 'womens-wellness') icon = Heart;
  if (item.slug === 'skin-hair') icon = Droplets;
  if (item.slug === 'metabolic-wellness') icon = Sparkles;
  return { ...item, icon };
});

export default function Header() {
  const pathname = usePathname();
  const { itemCount, openDrawer, openSearch, isDrawerOpen, closeDrawer, isSearchOpen, closeSearch } = useCart();
  const { language, t } = useLanguage();

  const [siddhaDropdownOpen, setSiddhaDropdownOpen] = useState(false);
  const [ayurvedaDropdownOpen, setAyurvedaDropdownOpen] = useState(false);
  const [healthDropdownOpen, setHealthDropdownOpen] = useState(false);
  
  const siddhaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const ayurvedaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const healthTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = () => {
    if (isDrawerOpen) closeDrawer();
    if (isSearchOpen) closeSearch();
    setSiddhaDropdownOpen(false);
    setAyurvedaDropdownOpen(false);
    setHealthDropdownOpen(false);
  };

  const handleSiddhaEnter = () => {
    if (siddhaTimeoutRef.current) clearTimeout(siddhaTimeoutRef.current);
    if (ayurvedaTimeoutRef.current) clearTimeout(ayurvedaTimeoutRef.current);
    if (healthTimeoutRef.current) clearTimeout(healthTimeoutRef.current);
    setAyurvedaDropdownOpen(false);
    setHealthDropdownOpen(false);
    setSiddhaDropdownOpen(true);
  };
  const handleSiddhaLeave = () => {
    siddhaTimeoutRef.current = setTimeout(() => setSiddhaDropdownOpen(false), 180);
  };

  const handleAyurvedaEnter = () => {
    if (ayurvedaTimeoutRef.current) clearTimeout(ayurvedaTimeoutRef.current);
    if (siddhaTimeoutRef.current) clearTimeout(siddhaTimeoutRef.current);
    if (healthTimeoutRef.current) clearTimeout(healthTimeoutRef.current);
    setSiddhaDropdownOpen(false);
    setHealthDropdownOpen(false);
    setAyurvedaDropdownOpen(true);
  };
  const handleAyurvedaLeave = () => {
    ayurvedaTimeoutRef.current = setTimeout(() => setAyurvedaDropdownOpen(false), 180);
  };

  const handleHealthEnter = () => {
    if (healthTimeoutRef.current) clearTimeout(healthTimeoutRef.current);
    if (siddhaTimeoutRef.current) clearTimeout(siddhaTimeoutRef.current);
    if (ayurvedaTimeoutRef.current) clearTimeout(ayurvedaTimeoutRef.current);
    setSiddhaDropdownOpen(false);
    setAyurvedaDropdownOpen(false);
    setHealthDropdownOpen(true);
  };
  const handleHealthLeave = () => {
    healthTimeoutRef.current = setTimeout(() => setHealthDropdownOpen(false), 180);
  };

  // Global keyboard shortcut to open search modal (Cmd+K, Ctrl+K, or '/')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === 'k' && (e.metaKey || e.ctrlKey)) ||
        (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')
      ) {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openSearch]);

  const isSiddhaActive = pathname.startsWith('/siddha');
  const isAyurvedaActive = pathname.startsWith('/ayurveda');
  const isHealthActive = pathname.startsWith('/shop/concerns');
  const isProprietaryActive = pathname.startsWith('/proprietary');
  const isOffersActive = pathname === '/offers';
  const isAboutActive = pathname === '/about';
  const isContactActive = pathname === '/contact';

  return (
    <header className="hidden md:block w-full bg-[#FAF8F5]/98 backdrop-blur-md sticky top-0 z-40 border-b border-[#16382B]/10">
      {/* Top Announcement Strip */}
      <div className="bg-[#16382B] text-[#FAF8F5] py-1 px-4 text-xs tracking-wider border-b border-[#C29043]/30">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between px-2 sm:px-4">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29043]" />
            <span className="font-medium whitespace-nowrap">
              {t(
                'Authentic Siddha (111 SKUs), Ayurveda (55 SKUs) & Proprietary (10 SKUs) | Postal Delivery Across Tamil Nadu',
                '111 சித்த மருந்துகள், 55 ஆயுர்வேத மருந்துகள் & 10 சிறப்பு தயாரிப்புகள் | தமிழ்நாடு முழுவதும் அஞ்சல் விநியோகம்'
              )}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#DFB36C] whitespace-nowrap">
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              {t('Tirunelveli Heritage Since 1994', 'திருநெல்வேலி பாரம்பரியம்')}
            </span>
            <span className="text-white/30">|</span>
            <a
              href="tel:+919171508042"
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <PhoneCall className="w-3 h-3" />
              <span>+91 91715 08042</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Desktop Header — Ultra-Responsive Zero-Wrap Layout */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 h-17 flex items-center justify-between gap-1.5 lg:gap-2 xl:gap-3 w-full">
        
        {/* 1. Left: Brand Logo & Lineage */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Link href="/" onClick={handleNavClick} className="flex items-center gap-1.5 group flex-shrink-0">
            <div className="h-8.5 xl:h-9.5 w-auto px-1.5 py-0.5 rounded-xl bg-white border border-[#16382B]/10 shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center">
              <Image
                src="/images/ruthra-logo.png"
                alt="Ruthra Logo"
                width={60}
                height={35}
                className="h-6 xl:h-7 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif-brand text-base xl:text-lg font-bold text-[#16382B] tracking-wider leading-none">
                RUTHRA
              </span>
              <span className={`text-[7.5px] xl:text-[8.5px] text-[#C29043] font-semibold mt-0.5 whitespace-nowrap ${language === 'ta' ? 'tracking-normal' : 'uppercase tracking-[0.12em]'}`}>
                {t('Siddha & Ayurveda', 'சித்த & ஆயுர்வேதம்')}
              </span>
            </div>
          </Link>
        </div>

        {/* 2. Center: Primary Navigation Links */}
        <nav className="flex items-center justify-center gap-0.5 xl:gap-1 2xl:gap-1.5 font-medium flex-1 min-w-0">
          
          {/* Siddha Mega-Dropdown */}
          <div
            className="relative flex items-center flex-shrink-0"
            onMouseEnter={handleSiddhaEnter}
            onMouseLeave={handleSiddhaLeave}
          >
            <Link
              href="/siddha"
              onClick={handleNavClick}
              className={`h-8.5 flex items-center gap-1 px-1.5 2xl:px-2.5 rounded-xl text-xs 2xl:text-[13px] font-bold transition-all whitespace-nowrap ${
                isSiddhaActive
                  ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                  : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-[#16382B] flex-shrink-0" />
              <span className="hidden 2xl:inline">{t('Siddha Medicines', 'சித்த மருந்துகள்')}</span>
              <span className="2xl:hidden">{t('Siddha', 'சித்தம்')}</span>
              <ChevronDown
                className={`w-3 h-3 text-[#8C9E96] transition-transform duration-200 ${
                  siddhaDropdownOpen ? 'rotate-180 text-[#C29043]' : ''
                }`}
              />
            </Link>

            {/* Siddha Mega Menu */}
            {siddhaDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-[680px] bg-white rounded-2xl shadow-2xl border border-[#16382B]/10 p-5 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150"
                onMouseEnter={handleSiddhaEnter}
                onMouseLeave={handleSiddhaLeave}
              >
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#16382B]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#16382B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16382B]">
                      {t('14 Classical Siddha Dosage Forms (111 Master Products)', '14 வகை பாரம்பரிய சித்த மருந்துகள் (111 தயாரிப்புகள்)')}
                    </span>
                  </div>
                  <Link
                    href="/siddha"
                    onClick={handleNavClick}
                    className="text-xs font-bold text-[#C29043] hover:text-[#16382B] flex items-center gap-1"
                  >
                    <span>{t('All Siddha (111)', 'அனைத்தும்')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {SIDDHA_NAV_CATEGORIES.map(cat => (
                    <Link
                      key={cat.slug}
                      href={`/siddha/${cat.slug}`}
                      onClick={handleNavClick}
                      className="p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors border border-transparent hover:border-[#16382B]/10 group/item flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-[#16382B] group-hover/item:text-[#C29043] leading-tight">
                          {language === 'ta' ? cat.titleTa : cat.title}
                        </p>
                        <span className="text-[10px] px-1.5 py-0.2 bg-[#E8F1EB] rounded-full text-[#16382B] font-semibold">
                          {cat.count}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#8A9B93] leading-tight mt-1 truncate">
                        {cat.desc}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5] -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <div className="flex items-center gap-2 text-xs text-[#3D5A68]">
                    <ShieldCheck className="w-4 h-4 text-[#C29043]" />
                    <span>{t('Prepared per Siddha Pharmacopeia of India', 'இந்திய சித்த பார்மகோபியா முறைப்படி தயாரிக்கப்பட்டது')}</span>
                  </div>
                  <Link
                    href="/siddha"
                    onClick={handleNavClick}
                    className="text-xs font-bold text-[#16382B] hover:text-[#C29043] flex items-center gap-1"
                  >
                    <span>{t('Explore Master Siddha Catalog', 'முழு சித்த பட்டியல்')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Ayurveda Mega-Dropdown */}
          <div
            className="relative flex items-center flex-shrink-0"
            onMouseEnter={handleAyurvedaEnter}
            onMouseLeave={handleAyurvedaLeave}
          >
            <Link
              href="/ayurveda"
              onClick={handleNavClick}
              className={`h-8.5 flex items-center gap-1 px-1.5 2xl:px-2.5 rounded-xl text-xs 2xl:text-[13px] font-bold transition-all whitespace-nowrap ${
                isAyurvedaActive
                  ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                  : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
              <span className="hidden 2xl:inline">{t('Ayurveda Medicines', 'ஆயுர்வேத மருந்துகள்')}</span>
              <span className="2xl:hidden">{t('Ayurveda', 'ஆயுர்வேதம்')}</span>
              <ChevronDown
                className={`w-3 h-3 text-[#8C9E96] transition-transform duration-200 ${
                  ayurvedaDropdownOpen ? 'rotate-180 text-[#C29043]' : ''
                }`}
              />
            </Link>

            {/* Ayurveda Mega Menu */}
            {ayurvedaDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-[620px] bg-white rounded-2xl shadow-2xl border border-[#16382B]/10 p-5 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150"
                onMouseEnter={handleAyurvedaEnter}
                onMouseLeave={handleAyurvedaLeave}
              >
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#16382B]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C29043]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16382B]">
                      {t('7 Classical Ayurveda Dosage Forms (55 Master Products)', '7 வகை பாரம்பரிய ஆயுர்வேத மருந்துகள் (55 தயாரிப்புகள்)')}
                    </span>
                  </div>
                  <Link
                    href="/ayurveda"
                    onClick={handleNavClick}
                    className="text-xs font-bold text-[#C29043] hover:text-[#16382B] flex items-center gap-1"
                  >
                    <span>{t('All Ayurveda (55)', 'அனைத்தும்')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {AYURVEDA_NAV_CATEGORIES.map(cat => (
                    <Link
                      key={cat.slug}
                      href={`/ayurveda/${cat.slug}`}
                      onClick={handleNavClick}
                      className="p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors border border-transparent hover:border-[#16382B]/10 group/item flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-[#16382B] group-hover/item:text-[#C29043] leading-tight">
                          {language === 'ta' ? cat.titleTa : cat.title}
                        </p>
                        <span className="text-[10px] px-1.5 py-0.2 bg-[#E8F1EB] rounded-full text-[#16382B] font-semibold">
                          {cat.count}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#8A9B93] leading-tight mt-1 truncate">
                        {cat.desc}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5] -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                  <div className="flex items-center gap-2 text-xs text-[#3D5A68]">
                    <ShieldCheck className="w-4 h-4 text-[#C29043]" />
                    <span>{t('Prepared per Ayurvedic Formulary of India (AFI)', 'இந்திய ஆயுர்வேத பார்முலரி (AFI) முறைப்படி')}</span>
                  </div>
                  <Link
                    href="/ayurveda"
                    onClick={handleNavClick}
                    className="text-xs font-bold text-[#16382B] hover:text-[#C29043] flex items-center gap-1"
                  >
                    <span>{t('Explore Master Ayurveda Catalog', 'முழு ஆயுர்வேத பட்டியல்')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Health Indication Mega-Dropdown */}
          <div
            className="relative flex items-center flex-shrink-0"
            onMouseEnter={handleHealthEnter}
            onMouseLeave={handleHealthLeave}
          >
            <Link
              href="/shop/concerns"
              onClick={handleNavClick}
              className={`h-8.5 flex items-center gap-1 px-1.5 2xl:px-2.5 rounded-xl text-xs 2xl:text-[13px] font-bold transition-all whitespace-nowrap ${
                isHealthActive
                  ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                  : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
              <span className="hidden 2xl:inline">{t('Health Indication', 'உடல் நலம்')}</span>
              <span className="2xl:hidden">{t('Health', 'நலம்')}</span>
              <ChevronDown
                className={`w-3 h-3 text-[#8C9E96] transition-transform duration-200 ${
                  healthDropdownOpen ? 'rotate-180 text-[#C29043]' : ''
                }`}
              />
            </Link>

            {/* Health Indication Dropdown Menu */}
            {healthDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-[580px] bg-white rounded-2xl shadow-2xl border border-[#16382B]/10 p-4.5 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150"
                onMouseEnter={handleHealthEnter}
                onMouseLeave={handleHealthLeave}
              >
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#16382B]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#16382B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16382B]">
                      {t('Shop by Health Indication / Therapeutic Need', 'உடல் உபாதைகளுக்கான பாரம்பரிய தீர்வுகள்')}
                    </span>
                  </div>
                  <Link
                    href="/shop/concerns"
                    onClick={handleNavClick}
                    className="text-xs font-bold text-[#C29043] hover:text-[#16382B] flex items-center gap-1"
                  >
                    <span>{t('All Concerns', 'அனைத்தும்')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {CONCERN_NAV_ITEMS.map(con => {
                    const Icon = con.icon;
                    return (
                      <Link
                        key={con.slug}
                        href={`/shop/concerns/${con.slug}`}
                        onClick={handleNavClick}
                        className="p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors border border-transparent hover:border-[#16382B]/10 group/item flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#E8F1EB] group-hover/item:bg-[#16382B] flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon className="w-4 h-4 text-[#16382B] group-hover/item:text-[#DFB36C] transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-[#16382B] group-hover/item:text-[#C29043] truncate">
                              {language === 'ta' ? con.titleTa : con.title}
                            </p>
                          </div>
                          <p className="text-[10px] text-[#8A9B93] leading-tight truncate mt-0.5">
                            {con.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Proprietary Formulations */}
          <Link
            href="/proprietary"
            onClick={handleNavClick}
            className={`h-8.5 flex items-center gap-1 px-1.5 2xl:px-2.5 rounded-xl text-xs 2xl:text-[13px] font-bold transition-all whitespace-nowrap flex-shrink-0 ${
              isProprietaryActive
                ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
            <span className="hidden 2xl:inline">{t('Proprietary Range', 'பிரத்தியேக மருந்துகள்')}</span>
            <span className="2xl:hidden">{t('Proprietary', 'பிரத்தியேகம்')}</span>
          </Link>

          {/* Offers */}
          <Link
            href="/offers"
            onClick={handleNavClick}
            className={`h-8.5 flex items-center gap-1 px-1.5 2xl:px-2 rounded-xl text-xs 2xl:text-[13px] font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
              isOffersActive
                ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C29043] flex-shrink-0" />
            <span>{t('Offers', 'சலுகைகள்')}</span>
          </Link>

          {/* Heritage */}
          <Link
            href="/about"
            onClick={handleNavClick}
            className={`h-8.5 flex items-center gap-1 px-1.5 2xl:px-2 rounded-xl text-xs 2xl:text-[13px] font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
              isAboutActive
                ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
            }`}
          >
            <span>{t('Heritage', 'பாரம்பரியம்')}</span>
          </Link>

          {/* Support */}
          <Link
            href="/contact"
            onClick={handleNavClick}
            className={`h-8 px-2 2xl:px-2.5 rounded-full border border-[#16382B]/15 flex items-center gap-1 whitespace-nowrap transition-all text-xs font-semibold flex-shrink-0 ${
              isContactActive
                ? 'bg-[#16382B] text-white shadow-xs'
                : 'bg-[#E8F1EB] hover:bg-[#16382B] hover:text-white text-[#16382B]'
            }`}
          >
            <PhoneCall className="w-3 h-3 text-[#C29043] flex-shrink-0" />
            <span className="whitespace-nowrap">{t('Support', 'உதவி')}</span>
          </Link>
        </nav>

        {/* 3. Right Action Controls: Search, Language Switcher, Cart */}
        <div className="flex items-center justify-end gap-1.5 xl:gap-2 flex-shrink-0">
          
          {/* Predictive Search Button */}
          <button
            onClick={openSearch}
            className="h-8.5 px-2 2xl:px-2.5 rounded-xl bg-[#E8F1EB] hover:bg-white border border-[#16382B]/15 text-xs text-[#264653] transition-all hover:border-[#C29043] cursor-pointer flex items-center gap-1.5 flex-shrink-0"
            title="Search formulations (Press / or Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#16382B]" />
            <span className="text-[#8C9E96] hidden 2xl:inline text-xs">
              {language === 'ta' ? 'தேடல்' : 'Search'}
            </span>
            <kbd className="hidden 2xl:inline-block px-1.5 py-0.2 text-[9px] bg-white rounded border border-[#16382B]/20 text-[#8C9E96]">
              /
            </kbd>
          </button>

          {/* Bilingual 1-Tap Toggle Language Switcher */}
          <LanguageSwitcher variant="toggle" className="flex-shrink-0" />

          {/* Shopping Bag Cart Icon with Item Counter */}
          <button
            onClick={openDrawer}
            className="relative h-8.5 w-8.5 xl:h-9 xl:w-9 rounded-xl bg-[#16382B] text-white hover:bg-[#204C3B] transition-all active:scale-95 shadow-xs flex items-center justify-center cursor-pointer flex-shrink-0"
            aria-label={`Open Cart with ${itemCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-[#FAF8F5]" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#C29043] text-white text-[9.5px] font-bold flex items-center justify-center shadow-xs border-2 border-[#FAF8F5]">
                {itemCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
