'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart, getProductMRP } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { language, t } = useLanguage();

  const mrp = getProductMRP(product);
  const discountPercent = Math.round(((mrp - product.price) / mrp) * 100);

  const formulationText = language === 'ta' ? product.formulationTa : product.formulation;
  const packSizeText = language === 'ta' ? product.packSizeTa : product.packSize;
  const titleText = language === 'ta' ? product.tamilName : product.name;

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl border border-[#16382B]/10 hover:border-[#C29043]/50 transition-all duration-300 hover:shadow-md flex flex-col overflow-hidden h-full">
      {/* Product Image Area — Balanced mobile square / desktop 4:3 */}
      <Link
        href={`/product/${product.slug}`}
        className="relative block w-full aspect-square sm:aspect-[4/3] bg-[#FAF8F5] overflow-hidden border-b border-[#16382B]/5 group-hover:bg-[#F4EFEA] transition-colors"
      >
        {/* Top-Left: High-Contrast Discount Badge (Never collides with right pill) */}
        {discountPercent > 0 && (
          <span className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] font-bold text-emerald-800 bg-emerald-100/95 backdrop-blur-xs px-1.5 py-0.5 rounded-md border border-emerald-300/60 shadow-2xs">
            {discountPercent}% OFF
          </span>
        )}

        {/* Top-Right: Formulation Pill */}
        <span className={`absolute top-2 right-2 z-10 text-[8.5px] sm:text-[9.5px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-md bg-white/95 text-[#16382B] border border-[#16382B]/10 shadow-2xs max-w-[95px] truncate ${language === 'ta' ? 'tracking-normal' : 'uppercase tracking-wider'}`}>
          {formulationText}
        </span>

        {/* Product SVG Graphic — Full Fill */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Pack size & Classical Siddha meta */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#8A9B93] mb-1">
            <span className="truncate font-medium">{packSizeText}</span>
            <span className="text-[#C29043] font-medium text-[9px] sm:text-[10.5px] flex-shrink-0 ml-1">
              {language === 'ta' ? 'சித்த தயாரிப்பு' : 'Classical'}
            </span>
          </div>

          {/* Product Name — Fixed 2.8rem height so 1-line and 2-line titles align perfectly across all columns */}
          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-serif-brand font-bold text-[13.5px] sm:text-base text-[#16382B] group-hover:text-[#C29043] transition-colors leading-[1.3] line-clamp-2 h-[2.7rem] sm:h-[2.85rem] flex items-center">
              {titleText}
            </h3>
          </Link>
        </div>

        {/* Price & Purchase Controls — Clean, un-crammed layout */}
        <div className="pt-2 sm:pt-2.5 mt-2 sm:mt-2.5 border-t border-[#16382B]/10 flex items-center justify-between gap-1">
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-baseline gap-1">
              <span className="font-serif-brand font-bold text-xs sm:text-base md:text-lg text-[#16382B]">
                ₹{product.price}
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#8A9B93] line-through">
                ₹{mrp}
              </span>
            </div>
            <span className="text-[8.5px] sm:text-[10px] font-semibold text-emerald-700 truncate">
              {t(`Save ₹${mrp - product.price}`, `₹${mrp - product.price} சேமிப்பு`)}
            </span>
          </div>

          {/* Clean 1-Tap Add to Cart Button (fits perfectly, never cut off) */}
          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-95 text-white text-[10.5px] sm:text-xs font-semibold flex items-center gap-1 shadow-2xs transition-all cursor-pointer flex-shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C29043]" />
            <span>{t('Add', 'சேர்க்க')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
