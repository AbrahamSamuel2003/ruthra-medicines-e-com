'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, MessageCircle, Clock, AlertCircle } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart, getProductMRP } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addItem } = useCart();
  const { language, t } = useLanguage();

  const isComingSoon = Boolean(product.isComingSoon);
  const stockCount = product.stock !== undefined ? product.stock : 20;
  const isOutOfStock = !isComingSoon && (!product.inStock || stockCount <= 0);
  const isLowStock = !isComingSoon && !isOutOfStock && stockCount <= 5;

  const mrp = getProductMRP(product);
  const discountPercent = !isComingSoon && !isOutOfStock && mrp > product.price 
    ? Math.round(((mrp - product.price) / mrp) * 100) 
    : 0;

  const formulationText = language === 'ta' ? product.formulationTa : product.formulation;
  const packSizeText = language === 'ta' ? product.packSizeTa : product.packSize;
  const titleText = language === 'ta' ? product.tamilName : product.name;
  const roleText = language === 'ta' 
    ? (product.traditionalRoleTa || product.shortDescriptionTa || product.traditionalRole) 
    : (product.traditionalRole || product.shortDescription);

  const medicalSystemLabel = product.medicalSystem === 'ayurveda' 
    ? (language === 'ta' ? 'ஆயுர்வேதம்' : 'Ayurveda') 
    : product.medicalSystem === 'proprietary' 
    ? (language === 'ta' ? 'பிரத்தியேக தயாரிப்பு' : 'Proprietary') 
    : (language === 'ta' ? 'சித்த தயாரிப்பு' : 'Classical Siddha');

  const imageUrl = product.image 
    ? (product.image.includes('?') ? `${product.image}&v=ruthra-20260916-2` : `${product.image}?v=ruthra-20260916-2`) 
    : '/images/ruthra-icon.png';

  const whatsappMessage = encodeURIComponent(
    isComingSoon
      ? `Hello Ruthra Siddha Medicines, I would like to enquire about when ${product.name} (${product.tamilName}) will be available.`
      : isOutOfStock
      ? `Hello Ruthra Siddha Medicines, I would like to know when ${product.name} (${product.tamilName}) will be back in stock.`
      : `Hello Ruthra Siddha Medicines, I would like to enquire about the order for: ${product.name} (${product.tamilName}).`
  );
  const whatsappUrl = `https://wa.me/919171508042?text=${whatsappMessage}`;

  // ==========================================
  // LIST VIEW LAYOUT
  // ==========================================
  if (viewMode === 'list') {
    return (
      <div className="group bg-white rounded-2xl border border-[#16382B]/10 hover:border-[#C29043]/50 transition-all duration-200 p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xs hover:shadow-sm">
        {/* Left: Thumbnail & Formulation Badge */}
        <div className="flex items-center gap-3.5 flex-1 min-w-0">
          <Link
            href={`/product/${product.slug}`}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 flex-shrink-0 p-2 flex items-center justify-center overflow-hidden group-hover:bg-[#F4EFEA] transition-colors"
          >
            {isComingSoon ? (
              <span className="absolute top-1 left-1 z-10 text-[8px] font-bold text-amber-900 bg-amber-100/95 px-1.5 py-0.5 rounded shadow-2xs flex items-center gap-0.5">
                <Clock className="w-2 h-2 text-amber-800" />
                <span>{language === 'ta' ? 'தயாரிப்பில்' : 'Soon'}</span>
              </span>
            ) : isOutOfStock ? (
              <span className="absolute top-1 left-1 z-10 text-[8px] font-bold text-red-900 bg-red-100/95 px-1.5 py-0.5 rounded shadow-2xs">
                {language === 'ta' ? 'கையிருப்பு இல்லை' : 'Out of Stock'}
              </span>
            ) : isLowStock ? (
              <span className="absolute top-1 left-1 z-10 text-[8px] font-bold text-amber-900 bg-amber-100/95 px-1.5 py-0.5 rounded shadow-2xs flex items-center gap-0.5">
                <AlertCircle className="w-2 h-2 text-amber-800" />
                <span>{language === 'ta' ? `${stockCount} மட்டுமே` : `Only ${stockCount} left`}</span>
              </span>
            ) : discountPercent > 0 ? (
              <span className="absolute top-1 left-1 z-10 text-[8px] font-bold text-emerald-800 bg-emerald-100/95 px-1 py-0.5 rounded shadow-2xs">
                {discountPercent}% OFF
              </span>
            ) : null}

            <Image
              src={imageUrl}
              alt={product.name}
              width={80}
              height={80}
              unoptimized
              className="object-contain max-h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute bottom-1 left-1 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-white/95 border border-[#C29043]/30 text-[#16382B]">
              {formulationText}
            </span>
          </Link>

          {/* Center Info */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#8A9B93] mb-0.5">
              <span>{packSizeText}</span>
              <span>•</span>
              <span className="text-[#C29043] font-medium">
                {medicalSystemLabel}
              </span>
            </div>

            <Link href={`/product/${product.slug}`}>
              <h3 className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B] group-hover:text-[#C29043] transition-colors truncate">
                {titleText}
              </h3>
            </Link>

            <p className="text-[11px] sm:text-xs text-[#3D5A68] line-clamp-1 mt-0.5">
              {roleText}
            </p>

            {/* Ingredients pills preview */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="hidden sm:flex flex-wrap items-center gap-1.5 mt-2">
                {product.ingredients.slice(0, 3).map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#16382B]/10 text-[#3D5A68]"
                  >
                    {language === 'ta' ? ing.tamilName : ing.name}
                  </span>
                ))}
                {product.ingredients.length > 3 && (
                  <span className="text-[9px] text-[#8A9B93]">
                    +{product.ingredients.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: Price & Add to Cart / Enquire */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2.5 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#16382B]/10 flex-shrink-0">
          {isComingSoon || isOutOfStock ? (
            <>
              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase text-[#8A9B93] font-medium block leading-none">
                  {t('Status', 'நிலை')}
                </span>
                <span className="font-serif-brand text-xs sm:text-sm font-bold text-[#16382B]">
                  {isComingSoon 
                    ? (product.price > 0 ? `Est. ₹${product.price}` : t('Price on Request', 'விலை விபரம் கோரலாம்'))
                    : t('Out of Stock', 'கையிருப்பு இல்லை')}
                </span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="py-1.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#075E54] hover:text-white text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#25D366]/30 shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t('Enquire', 'விசாரிக்க')}</span>
              </a>
            </>
          ) : (
            <>
              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase text-[#8A9B93] font-medium block leading-none">
                  {t('Price', 'விலை')}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif-brand text-base sm:text-lg font-bold text-[#16382B]">
                    ₹{product.price}
                  </span>
                  {mrp > product.price && (
                    <span className="text-[10px] sm:text-xs text-[#8A9B93] line-through">
                      ₹{mrp}
                    </span>
                  )}
                </div>
                {mrp > product.price && (
                  <span className="text-[9px] font-semibold text-emerald-700">
                    {t(`Save ₹${mrp - product.price}`, `₹${mrp - product.price} சேமிப்பு`)}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => addItem(product, 1)}
                className="py-2 px-3.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-95 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#C29043]" />
                <span>{t('Add to Cart', 'சேர்')}</span>
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // ==========================================
  // GRID VIEW LAYOUT (DEFAULT)
  // ==========================================
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl border border-[#16382B]/10 hover:border-[#C29043]/50 transition-all duration-300 hover:shadow-md flex flex-col overflow-hidden h-full">
      {/* Product Image Area — Balanced mobile square / desktop 4:3 */}
      <Link
        href={`/product/${product.slug}`}
        className="relative block w-full aspect-square sm:aspect-[4/3] bg-[#FAF8F5] overflow-hidden border-b border-[#16382B]/5 group-hover:bg-[#F4EFEA] transition-colors"
      >
        {/* Top-Left: Discount Badge, Low Stock, Out of Stock, or Coming Soon Pill */}
        {isComingSoon ? (
          <span className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] font-bold text-amber-900 bg-amber-100/95 backdrop-blur-xs px-2 py-0.5 rounded-md border border-amber-300/70 shadow-2xs flex items-center gap-1">
            <Clock className="w-2.5 h-2.5 text-amber-800" />
            <span>{language === 'ta' ? 'தயாரிப்பில் உள்ளது' : 'Coming Soon'}</span>
          </span>
        ) : isOutOfStock ? (
          <span className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] font-bold text-red-900 bg-red-100/95 backdrop-blur-xs px-2 py-0.5 rounded-md border border-red-300/70 shadow-2xs">
            {language === 'ta' ? 'கையிருப்பு இல்லை' : 'Out of Stock'}
          </span>
        ) : isLowStock ? (
          <span className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] font-bold text-amber-900 bg-amber-100/95 backdrop-blur-xs px-1.5 py-0.5 rounded-md border border-amber-300/70 shadow-2xs flex items-center gap-1">
            <AlertCircle className="w-2.5 h-2.5 text-amber-800" />
            <span>{language === 'ta' ? `${stockCount} மட்டுமே` : `Only ${stockCount} left`}</span>
          </span>
        ) : discountPercent > 0 ? (
          <span className="absolute top-2 left-2 z-10 text-[9px] sm:text-[10px] font-bold text-emerald-800 bg-emerald-100/95 backdrop-blur-xs px-1.5 py-0.5 rounded-md border border-emerald-300/60 shadow-2xs">
            {discountPercent}% OFF
          </span>
        ) : null}

        {/* Top-Right: Formulation Pill */}
        <span className={`absolute top-2 right-2 z-10 text-[8.5px] sm:text-[9.5px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-md bg-white/95 text-[#16382B] border border-[#16382B]/10 shadow-2xs max-w-[95px] truncate ${language === 'ta' ? 'tracking-normal' : 'uppercase tracking-wider'}`}>
          {formulationText}
        </span>

        {/* Product Image — Direct clean render */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Pack size & Medical System meta */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#8A9B93] mb-1">
            <span className="truncate font-medium">{packSizeText}</span>
            <span className="text-[#C29043] font-medium text-[9px] sm:text-[10.5px] flex-shrink-0 ml-1">
              {medicalSystemLabel}
            </span>
          </div>

          {/* Product Name — Fixed 2.8rem height so 1-line and 2-line titles align perfectly across all columns */}
          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-serif-brand font-bold text-[13.5px] sm:text-base text-[#16382B] group-hover:text-[#C29043] transition-colors leading-[1.3] line-clamp-2 h-[2.7rem] sm:h-[2.85rem] flex items-center">
              {titleText}
            </h3>
          </Link>
        </div>

        {/* Price & Purchase Controls */}
        <div className="pt-2 sm:pt-2.5 mt-2 sm:mt-2.5 border-t border-[#16382B]/10 flex items-center justify-between gap-1">
          {isComingSoon || isOutOfStock ? (
            <>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-serif-brand font-bold text-xs sm:text-sm text-[#16382B]">
                  {isComingSoon
                    ? (product.price > 0 ? `Est. ₹${product.price}` : t('Price on Request', 'விலை விபரம் கோரலாம்'))
                    : t('Out of Stock', 'கையிருப்பு இல்லை')}
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] text-[#8A9B93]">
                  {isComingSoon ? t('Artisanal Preparation', 'பாரம்பரிய தயாரிப்பில்') : t('Enquire for restock', 'இருப்பு அறிய')}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#075E54] hover:text-white text-[10px] sm:text-xs font-bold flex items-center gap-1 transition-all cursor-pointer flex-shrink-0 border border-[#25D366]/30 shadow-2xs"
                title="Enquire on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t('Enquire', 'விசாரிக்க')}</span>
              </a>
            </>
          ) : (
            <>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif-brand font-bold text-xs sm:text-base md:text-lg text-[#16382B]">
                    ₹{product.price}
                  </span>
                  {mrp > product.price && (
                    <span className="text-[9px] sm:text-[11px] text-[#8A9B93] line-through">
                      ₹{mrp}
                    </span>
                  )}
                </div>
                <span className="text-[8.5px] sm:text-[10px] font-semibold text-emerald-700 truncate">
                  {t(`Save ₹${mrp - product.price}`, `₹${mrp - product.price} சேமிப்பு`)}
                </span>
              </div>

              {/* Clean 1-Tap Add to Cart Button */}
              <button
                type="button"
                onClick={() => addItem(product, 1)}
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#16382B] hover:bg-[#204C3B] active:scale-95 text-white text-[10.5px] sm:text-xs font-semibold flex items-center gap-1 shadow-2xs transition-all cursor-pointer flex-shrink-0"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#C29043]" />
                <span>{t('Add', 'சேர்க்க')}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

