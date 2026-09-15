'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, Search, ShoppingBag, Tag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

export default function MobileBottomNav() {
  const rawPathname = usePathname();
  const pathname = rawPathname || '';
  const { itemCount, openDrawer, openSearch } = useCart();
  const { t } = useLanguage();

  // On product detail and checkout pages, yield bottom space to primary action buttons
  if (pathname.startsWith('/product/') || pathname === '/checkout') {
    return null;
  }

  const isHome = pathname === '/';
  const isShop = pathname.startsWith('/shop');

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#16382B]/10 shadow-[0_-4px_24px_rgba(22,56,43,0.06)] pb-[max(env(safe-area-inset-bottom,0px),8px)] pt-1.5 w-full max-w-full overflow-hidden transition-all select-none"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="grid grid-cols-5 h-[52px] px-1.5 items-center">
        {/* 1. Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 ${
            isHome
              ? 'text-[#16382B] font-bold bg-[#E8F1EB]/80'
              : 'text-[#8A9B93] hover:text-[#16382B]'
          }`}
        >
          <div className="relative">
            <Home className={`w-5 h-5 transition-transform ${isHome ? 'scale-105 stroke-[2.4]' : 'stroke-[1.8]'}`} />
            {isHome && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#16382B]" />
            )}
          </div>
          <span className="text-[9.5px] font-medium leading-tight truncate max-w-full mt-0.5">
            {t('Home', 'முகப்பு')}
          </span>
        </Link>

        {/* 2. Shop (Active highlight when on /shop) */}
        <Link
          href="/shop"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 ${
            isShop
              ? 'text-[#16382B] font-bold bg-[#E8F1EB]/80'
              : 'text-[#8A9B93] hover:text-[#16382B]'
          }`}
        >
          <div className="relative">
            <Grid className={`w-5 h-5 transition-transform ${isShop ? 'scale-105 stroke-[2.4]' : 'stroke-[1.8]'}`} />
            {isShop && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#16382B]" />
            )}
          </div>
          <span className="text-[9.5px] font-medium leading-tight truncate max-w-full mt-0.5">
            {t('Shop', 'மருந்துகள்')}
          </span>
        </Link>

        {/* 3. Search */}
        <button
          type="button"
          onClick={openSearch}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#8A9B93] hover:text-[#16382B] transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Search formulations"
        >
          <Search className="w-5 h-5 stroke-[1.8]" />
          <span className="text-[9.5px] font-medium leading-tight truncate max-w-full mt-0.5">
            {t('Search', 'தேடல்')}
          </span>
        </button>

        {/* 4. Combos & Offers */}
        <Link
          href="/shop#combos"
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 text-[#8A9B93] hover:text-[#16382B]`}
        >
          <div className="relative">
            <Tag className="w-5 h-5 stroke-[1.8]" />
          </div>
          <span className="text-[9.5px] font-medium leading-tight truncate max-w-full mt-0.5">
            {t('Offers', 'சலுகைகள்')}
          </span>
        </Link>

        {/* 5. Cart */}
        <button
          type="button"
          onClick={openDrawer}
          className="relative flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#8A9B93] hover:text-[#16382B] transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Open cart"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[17px] h-[17px] px-1 rounded-full bg-[#C29043] text-white text-[9px] font-bold flex items-center justify-center shadow-xs border border-white">
                {itemCount}
              </span>
            )}
          </div>
          <span className="text-[9.5px] font-medium leading-tight truncate max-w-full mt-0.5">
            {t('Cart', 'கூடை')}
          </span>
        </button>
      </div>
    </nav>
  );
}
