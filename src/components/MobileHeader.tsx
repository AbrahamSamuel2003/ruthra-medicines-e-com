'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X, ChevronRight, MessageCircle, Tag, Grid, Layers, Sparkles, Leaf, Droplets } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { CONCERN_CATEGORIES, FORMULATION_CATEGORIES } from '@/data/products';
import { SIDDHA_NAV_CATEGORIES, AYURVEDA_NAV_CATEGORIES } from '@/data/categories';

export default function MobileHeader() {
  const rawPathname = usePathname();
  const pathname = rawPathname || '';
  const { itemCount, openDrawer, openSearch, closeDrawer, closeSearch } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
    closeDrawer();
    closeSearch();
  };

  return (
    <div className="md:hidden sticky top-0 z-40 bg-[#FAF8F5] border-b border-[#16382B]/10 w-full max-w-full overflow-hidden">
      {/* Mobile Top Announcement Strip */}
      <div className="bg-[#16382B] text-white text-[10.5px] px-3 py-1 flex items-center justify-between w-full overflow-hidden gap-2">
        <span className="truncate min-w-0 flex-1">
          {t('Authentic Siddha | Tamil Nadu Delivery', 'பாரம்பரிய சித்த மருந்துகள் | தமிழகம் முழுவதும்')}
        </span>
        <span className="text-[#DFB36C] font-semibold flex-shrink-0 text-[10px]">
          {t('Tirunelveli', 'திருநெல்வேலி')}
        </span>
      </div>

      {/* Compact 54px Header */}
      <div className="h-14 px-3 flex items-center justify-between gap-2 w-full max-w-full overflow-hidden">
        {/* Left: Menu Hamburger + Logo */}
        <div className="flex items-center gap-1.5 min-w-0">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-lg text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link href="/" className="flex items-center gap-2 min-w-0">
            <div className="h-8.5 w-auto px-1.5 py-0.5 rounded-lg bg-white border border-[#16382B]/10 shadow-2xs flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/ruthra-logo.png"
                alt="Ruthra Logo"
                width={52}
                height={30}
                className="h-7 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif-brand text-sm sm:text-base font-bold text-[#16382B] tracking-wider leading-none">
                RUTHRA
              </span>
              <span className={`text-[8px] text-[#C29043] font-semibold leading-tight ${language === 'ta' ? 'tracking-normal' : 'uppercase tracking-[0.16em]'}`}>
                {t('Siddha Medicine', 'சித்த மருத்துவம்')}
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Language Switch + Search + Cart */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
            className="px-2 py-1 rounded-md text-[11px] font-bold border border-[#C29043]/30 bg-white text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'தமிழ்' : 'Eng'}
          </button>

          <button
            onClick={openSearch}
            className="p-2 rounded-lg text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
            aria-label="Search products"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          <button
            onClick={openDrawer}
            className="relative p-2 rounded-lg bg-[#16382B] text-white hover:bg-[#204C3B] transition-colors cursor-pointer flex-shrink-0"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4.5 h-4.5 text-[#FAF8F5]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C29043] text-white text-[9px] font-bold flex items-center justify-center shadow-xs border border-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-4/5 max-w-xs bg-[#FAF8F5] h-full shadow-2xl flex flex-col border-r border-[#C29043]/30 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="p-4 bg-[#16382B] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-auto px-2 py-1 rounded-xl bg-white shadow-xs flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/ruthra-logo.png"
                    alt="Ruthra Logo"
                    width={60}
                    height={34}
                    className="h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <span className="font-serif-brand text-base font-bold tracking-wider block leading-tight">
                    RUTHRA MEDICINES
                  </span>
                  <span className="text-[10px] text-[#DFB36C] block mt-0.5">
                    {t('Tirunelveli, Tamil Nadu', 'திருநெல்வேலி, தமிழ்நாடு')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white/70 hover:text-white p-1"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Switcher strip */}
            <div className="p-3 bg-[#E8F1EB] border-b border-[#16382B]/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#16382B]">
                {t('Language / மொழி', 'மொழி தெரிவு')}
              </span>
              <LanguageSwitcher />
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="space-y-1">
                {/* Siddha Medicines Section */}
                <Link
                  href="/siddha"
                  onClick={handleMobileNavClick}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors ${
                    pathname.startsWith('/siddha')
                      ? 'font-bold text-[#16382B] bg-[#E8F1EB]'
                      : 'font-semibold text-[#16382B] hover:bg-[#E8F1EB]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#16382B]" />
                    <span>{t('Siddha Medicines (111)', 'சித்த மருந்துகள் (111)')}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#8C9E96]" />
                </Link>

                {/* Ayurveda Medicines Section */}
                <Link
                  href="/ayurveda"
                  onClick={handleMobileNavClick}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors ${
                    pathname.startsWith('/ayurveda')
                      ? 'font-bold text-[#16382B] bg-[#E8F1EB]'
                      : 'font-semibold text-[#16382B] hover:bg-[#E8F1EB]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-[#C29043]" />
                    <span>{t('Ayurveda Medicines (64)', 'ஆயுர்வேத மருந்துகள் (64)')}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#8C9E96]" />
                </Link>

                {/* Proprietary Range */}
                <Link
                  href="/proprietary"
                  onClick={handleMobileNavClick}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors ${
                    pathname.startsWith('/proprietary')
                      ? 'font-bold text-[#16382B] bg-[#E8F1EB]'
                      : 'font-semibold text-[#16382B] hover:bg-[#E8F1EB]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C29043]" />
                    <span>{t('Proprietary Formulations', 'பிரத்தியேக மருந்துகள்')}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#8C9E96]" />
                </Link>

                {/* Offers & Combos */}
                <Link
                  href="/offers"
                  onClick={handleMobileNavClick}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors ${
                    pathname === '/offers'
                      ? 'font-bold text-[#16382B] bg-[#E8F1EB]'
                      : 'font-semibold text-[#16382B] hover:bg-[#E8F1EB]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C29043]" />
                    {t('Special Offers & Value Combos', 'சிறப்பு சலுகைகள் & தொகுப்புகள்')}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#8C9E96]" />
                </Link>

                {/* Heritage */}
                <Link
                  href="/about"
                  onClick={handleMobileNavClick}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors ${
                    pathname === '/about'
                      ? 'font-bold text-[#16382B] bg-[#E8F1EB]'
                      : 'font-medium text-[#264653] hover:bg-[#E8F1EB]'
                  }`}
                >
                  <span>{t('About Ruthra Heritage', 'ருத்ரா பாரம்பரியம்')}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C9E96]" />
                </Link>

                {/* Contact & Support */}
                <Link
                  href="/contact"
                  onClick={handleMobileNavClick}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm transition-colors ${
                    pathname === '/contact'
                      ? 'font-bold text-[#16382B] bg-[#E8F1EB]'
                      : 'font-medium text-[#264653] hover:bg-[#E8F1EB]'
                  }`}
                >
                  <span>{t('Track Order & Support', 'ஆர்டர் நிலை & உதவி')}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C9E96]" />
                </Link>
              </div>

              {/* Siddha Dosage Forms Quick Links */}
              <div className="border-t border-[#16382B]/10 pt-3">
                <div className="flex items-center justify-between px-2 mb-2">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#16382B]">
                    {t('Siddha Forms (14)', 'சித்த மருந்து வடிவங்கள் (14)')}
                  </p>
                  <Link href="/siddha" onClick={handleMobileNavClick} className="text-[10px] font-bold text-[#C29043]">
                    {t('View All', 'அனைத்தும்')}
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto pr-1">
                  {SIDDHA_NAV_CATEGORIES.map(form => (
                    <Link
                      key={form.slug}
                      href={`/siddha/${form.slug}`}
                      onClick={handleMobileNavClick}
                      className="px-2 py-1.5 rounded-lg text-xs text-[#264653] hover:text-[#16382B] hover:bg-[#E8F1EB] transition-colors truncate flex items-center justify-between"
                    >
                      <span className="truncate">{language === 'ta' ? form.titleTa : form.title}</span>
                      <span className="text-[10px] text-[#8C9E96] font-medium ml-1">({form.count})</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ayurveda Dosage Forms Quick Links */}
              <div className="border-t border-[#16382B]/10 pt-3">
                <div className="flex items-center justify-between px-2 mb-2">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#C29043]">
                    {t('Ayurveda Forms (8)', 'ஆயுர்வேத மருந்து வடிவங்கள் (8)')}
                  </p>
                  <Link href="/ayurveda" onClick={handleMobileNavClick} className="text-[10px] font-bold text-[#16382B]">
                    {t('View All', 'அனைத்தும்')}
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto pr-1">
                  {AYURVEDA_NAV_CATEGORIES.map(form => (
                    <Link
                      key={form.slug}
                      href={`/ayurveda/${form.slug}`}
                      onClick={handleMobileNavClick}
                      className="px-2 py-1.5 rounded-lg text-xs text-[#264653] hover:text-[#16382B] hover:bg-[#E8F1EB] transition-colors truncate flex items-center justify-between"
                    >
                      <span className="truncate">{language === 'ta' ? form.titleTa : form.title}</span>
                      <span className="text-[10px] text-[#8C9E96] font-medium ml-1">({form.count})</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Support Link */}
            <div className="p-3 bg-white border-t border-[#16382B]/10 text-xs">
              <a
                href="https://wa.me/919171508042"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#E8F1EB] text-[#16382B] font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-[#16382B]" />
                <span>{t('Need Help Ordering? WhatsApp', 'வாட்ஸ்அப் உதவி')}</span>
              </a>
            </div>
          </div>

          <div className="flex-1" onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </div>
  );
}
