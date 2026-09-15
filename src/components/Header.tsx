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
  Activity,
  Wind,
  Heart,
  ShieldCheck,
  Flame,
  Layers
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { CONCERN_CATEGORIES, FORMULATION_CATEGORIES } from '@/data/products';

export default function Header() {
  const pathname = usePathname();
  const { itemCount, openDrawer, openSearch, isDrawerOpen, closeDrawer, isSearchOpen, closeSearch } = useCart();
  const { language, t } = useLanguage();

  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = () => {
    if (isDrawerOpen) closeDrawer();
    if (isSearchOpen) closeSearch();
    setShopDropdownOpen(false);
  };

  // Smooth hover open/close with small tolerance delay
  const handleShopEnter = () => {
    if (shopTimeoutRef.current) clearTimeout(shopTimeoutRef.current);
    setShopDropdownOpen(true);
  };
  const handleShopLeave = () => {
    shopTimeoutRef.current = setTimeout(() => setShopDropdownOpen(false), 150);
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

  const isHomeActive = pathname === '/';
  const isShopActive = pathname === '/shop' || pathname.startsWith('/shop/');
  const isOffersActive = pathname === '/offers';
  const isAboutActive = pathname === '/about';
  const isContactActive = pathname === '/contact';

  // Helper for concern icon
  const getConcernIcon = (slug: string) => {
    switch (slug) {
      case 'joint-mobility': return <Activity className="w-3.5 h-3.5" />;
      case 'respiratory': return <Wind className="w-3.5 h-3.5" />;
      case 'womens-wellness': return <Heart className="w-3.5 h-3.5" />;
      case 'metabolic-wellness': return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'digestive-wellness': return <Flame className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <header className="hidden md:block w-full bg-[#FAF8F5]/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#16382B]/10">
      {/* Top Announcement Strip */}
      <div className="bg-[#16382B] text-[#FAF8F5] py-1.5 px-4 text-xs tracking-wider border-b border-[#C29043]/30">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-0 sm:px-2 lg:px-4">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29043] animate-pulse" />
            <span className="font-medium whitespace-nowrap">
              {t(
                'Authentic Siddha Formulations | Delivery Across Tamil Nadu',
                'பாரம்பரிய சித்த மருந்துகள் | தமிழ்நாடு முழுவதும் அஞ்சல் விநியோகம்'
              )}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#DFB36C] whitespace-nowrap">
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              {t('Tirunelveli Heritage Since 1994', 'திருநெல்வேலி பாரம்பரியம்')}
            </span>
            <span className="text-white/30">|</span>
            <a
              href="tel:+919171508042"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>+91 91715 08042</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Desktop Header — Production-Grade Balanced Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-8 w-full">
        {/* Left: Brand Logo & Lineage */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 group flex-shrink-0">
            <div className="h-11 w-auto px-2.5 py-1 rounded-xl bg-white border border-[#16382B]/10 shadow-xs group-hover:scale-105 transition-transform flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/ruthra-logo.png"
                alt="Ruthra Siddha Medicines Logo"
                width={70}
                height={40}
                className="h-8 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif-brand text-2xl font-bold text-[#16382B] tracking-wider leading-none">
                RUTHRA
              </span>
              <span className={`text-[9.5px] text-[#C29043] font-semibold mt-1 whitespace-nowrap ${language === 'ta' ? 'tracking-normal' : 'uppercase tracking-[0.22em]'}`}>
                {t('Siddha Medicines • Tirunelveli', 'சித்த மருத்துவ இல்லம்')}
              </span>
            </div>
          </Link>

          {/* Subtle Vertical Heritage Divider */}
          <div className="hidden 2xl:block h-7 w-px bg-[#16382B]/15" />
        </div>

        {/* Center: Primary Navigation Links */}
        <nav className="flex items-center justify-center gap-1.5 lg:gap-3 text-sm font-medium flex-1 mx-2 lg:mx-6">
          {/* 1. SHOP & CATEGORIES DROPDOWN */}
          <div
            className="relative flex items-center"
            onMouseEnter={handleShopEnter}
            onMouseLeave={handleShopLeave}
          >
            <Link
              href="/shop"
              onClick={handleNavClick}
              className={`h-10 flex items-center gap-1.5 px-3.5 rounded-xl text-xs sm:text-[13.5px] font-semibold transition-all whitespace-nowrap ${
                isShopActive
                  ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                  : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
              }`}
            >
              <span>{t('Shop Formulations', 'சித்த மருந்துகள்')}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#8C9E96] transition-transform duration-200 ${
                  shopDropdownOpen ? 'rotate-180 text-[#C29043]' : ''
                }`}
              />
            </Link>

            {/* Mega Dropdown Menu for Categories — Centered below trigger */}
            {shopDropdownOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[620px] bg-white rounded-2xl shadow-2xl border border-[#16382B]/10 p-6 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150"
                onMouseEnter={handleShopEnter}
                onMouseLeave={handleShopLeave}
              >
                <div className="grid grid-cols-2 gap-6">
                  {/* Column 1: By Wellness Concern */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#16382B]/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C29043]">
                        {t('By Wellness Concern', 'உபாதைகள் வாரியாக')}
                      </span>
                      <Link
                        href="/shop/concerns"
                        onClick={handleNavClick}
                        className="text-[11px] font-semibold text-[#16382B] hover:text-[#C29043] flex items-center gap-0.5"
                      >
                        <span>{t('View All', 'அனைத்தும்')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {CONCERN_CATEGORIES.map(cat => (
                        <Link
                          key={cat.slug}
                          href={`/shop/concerns/${cat.slug}`}
                          onClick={handleNavClick}
                          className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors group/item"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#E8F1EB] group-hover/item:bg-[#16382B] group-hover/item:text-[#C29043] flex items-center justify-center text-[#16382B] transition-colors flex-shrink-0">
                            {getConcernIcon(cat.slug)}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#16382B] group-hover/item:text-[#C29043] leading-tight">
                              {language === 'ta' ? cat.titleTa : cat.title}
                            </p>
                            <p className="text-[10px] text-[#8A9B93] leading-tight mt-0.5">
                              {language === 'ta' ? cat.herbalKeyTa : cat.herbalKey}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: By Formulation Type */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#16382B]/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C29043]">
                        {t('By Traditional Form', 'மருந்து வடிவங்கள்')}
                      </span>
                      <Link
                        href="/shop/formulations"
                        onClick={handleNavClick}
                        className="text-[11px] font-semibold text-[#16382B] hover:text-[#C29043] flex items-center gap-0.5"
                      >
                        <span>{t('View All', 'அனைத்தும்')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {FORMULATION_CATEGORIES.map(form => (
                        <Link
                          key={form.slug}
                          href={`/shop/formulations/${form.slug}`}
                          onClick={handleNavClick}
                          className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#FAF8F5] transition-colors group/item"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#E8F1EB] group-hover/item:bg-[#16382B] group-hover/item:text-[#C29043] flex items-center justify-center text-[#16382B] font-serif-brand font-bold text-xs transition-colors flex-shrink-0">
                            {form.title[0]}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#16382B] group-hover/item:text-[#C29043] leading-tight">
                              {language === 'ta' ? form.titleTa : form.title}
                            </p>
                            <p className="text-[10px] text-[#8A9B93] leading-tight mt-0.5">
                              {language === 'ta' ? form.taglineTa : form.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Strip: Direct link to all 20 products */}
                <div className="mt-4 pt-3 border-t border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5] -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="flex items-center gap-2 text-xs text-[#3D5A68]">
                    <ShieldCheck className="w-4 h-4 text-[#C29043]" />
                    <span>
                      {t('20 Verified Classical Siddha Formulations', '20 சரிபார்க்கப்பட்ட சித்த மருந்துகள்')}
                    </span>
                  </div>
                  <Link
                    href="/shop"
                    onClick={handleNavClick}
                    className="text-xs font-bold text-[#16382B] hover:text-[#C29043] flex items-center gap-1"
                  >
                    <span>{t('Browse Entire Catalog', 'முழு பட்டியல் பார்க்க')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. VALUE COMBOS & OFFERS */}
          <Link
            href="/offers"
            onClick={handleNavClick}
            className={`h-10 flex items-center gap-1.5 px-3.5 rounded-xl text-xs sm:text-[13.5px] font-semibold transition-all whitespace-nowrap ${
              isOffersActive
                ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29043]" />
            <span>{t('Offers & Combos', 'சிறப்பு சலுகைகள்')}</span>
          </Link>

          {/* 3. ABOUT HERITAGE */}
          <Link
            href="/about"
            onClick={handleNavClick}
            className={`h-10 flex items-center gap-1.5 px-3.5 rounded-xl text-xs sm:text-[13.5px] font-semibold transition-all whitespace-nowrap ${
              isAboutActive
                ? 'text-[#16382B] font-bold bg-[#E8F1EB]'
                : 'text-[#264653] hover:text-[#16382B] hover:bg-white/80'
            }`}
          >
            <span>{t('About Heritage', 'பாரம்பரியம்')}</span>
          </Link>

          {/* 4. CUSTOMER SUPPORT & ORDER DESK */}
          <Link
            href="/contact"
            onClick={handleNavClick}
            className={`h-9 px-3.5 rounded-full border border-[#16382B]/15 flex items-center gap-1.5 whitespace-nowrap transition-all text-xs font-semibold ${
              isContactActive
                ? 'bg-[#16382B] text-white shadow-xs'
                : 'bg-[#E8F1EB] hover:bg-[#16382B] hover:text-white text-[#16382B]'
            }`}
          >
            <PhoneCall className="w-3 h-3 text-[#C29043]" />
            <span>{t('Help & Support', 'உதவி மையம்')}</span>
          </Link>
        </nav>

        {/* Right Action Controls: Search, Language Switcher, Cart */}
        <div className="flex items-center justify-end gap-2.5 lg:gap-3 flex-shrink-0 justify-self-end">
          {/* Compact Predictive Search Button */}
          <button
            onClick={openSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#E8F1EB] hover:bg-white border border-[#16382B]/15 text-xs text-[#264653] transition-all hover:border-[#C29043] cursor-pointer whitespace-nowrap"
            title="Search formulations, concerns, ingredients (Press / or Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#16382B]" />
            <span className="text-[#8C9E96] hidden xl:inline">
              {language === 'ta' ? 'தேடுங்கள்...' : 'Search products...'}
            </span>
            <span className="text-[#8C9E96] xl:hidden">
              {language === 'ta' ? 'தேடல்' : 'Search'}
            </span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] bg-white rounded border border-[#16382B]/20 text-[#8C9E96]">
              /
            </kbd>
          </button>

          {/* Bilingual Language Switcher */}
          <LanguageSwitcher />

          {/* Cart Icon & Badge */}
          <button
            onClick={openDrawer}
            className="relative p-2.5 rounded-xl bg-[#16382B] text-white hover:bg-[#204C3B] transition-all active:scale-95 shadow-xs flex items-center justify-center cursor-pointer flex-shrink-0"
            aria-label={`Open Cart with ${itemCount} items`}
          >
            <ShoppingBag className="w-5 h-5 text-[#FAF8F5]" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#C29043] text-white text-[10px] font-bold flex items-center justify-center shadow-xs border-2 border-[#FAF8F5]">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
