'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Activity,
  Wind,
  Flame,
  Heart,
  Droplets,
  ShieldCheck,
  Leaf,
  SlidersHorizontal, 
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  RotateCcw,
  LayoutGrid,
  LayoutList,
  Truck,
  X,
  Search,
  Sparkles,
  FlaskConical,
  Check
} from 'lucide-react';
import { Product, ConcernCategory, ConcernSlug } from '@/types/product';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/components/ProductCard';
import { CONCERN_CATEGORIES } from '@/data/products';

interface ConcernCatalogClientProps {
  category: ConcernCategory;
  products: Product[];
  allConcernCounts?: Record<string, number>;
}

const PRICE_FILTERS = [
  { id: 'all', label: 'All Prices', labelTa: 'அனைத்து விலை' },
  { id: 'under-200', label: '< ₹200', labelTa: '< ₹200' },
  { id: '200-300', label: '₹200 - ₹300', labelTa: '₹200 - ₹300' },
  { id: 'above-300', label: '> ₹300', labelTa: '> ₹300' }
];

export function getConcernIcon(slug: string, className = "w-4 h-4") {
  switch (slug) {
    case 'joint-mobility':
      return <Activity className={className} />;
    case 'respiratory':
      return <Wind className={className} />;
    case 'digestive-wellness':
      return <Flame className={className} />;
    case 'womens-wellness':
      return <Heart className={className} />;
    case 'skin-hair':
      return <Droplets className={className} />;
    case 'metabolic-wellness':
      return <ShieldCheck className={className} />;
    default:
      return <Leaf className={className} />;
  }
}

export default function ConcernCatalogClient({ category, products, allConcernCounts = {} }: ConcernCatalogClientProps) {
  const { language, t } = useLanguage();

  const [selectedSystem, setSelectedSystem] = useState<string>('all');
  const [selectedFormulation, setSelectedFormulation] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');
  const [perPage, setPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSystem, selectedFormulation, selectedPrice, inStockOnly, searchQuery, sortBy, perPage]);

  // Lock body scroll on mobile filter open
  useEffect(() => {
    if (showMobileFilter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileFilter]);

  // Available dosage formulations present in these products
  const availableFormulations = useMemo(() => {
    const map = new Map<string, { name: string; nameTa: string; count: number }>();
    products.forEach(p => {
      const key = p.formulation || 'General';
      const existing = map.get(key);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(key, {
          name: p.formulation,
          nameTa: p.formulationTa || p.formulation,
          count: 1
        });
      }
    });
    return Array.from(map.entries())
      .map(([key, data]) => ({ slug: key, ...data }))
      .sort((a, b) => b.count - a.count);
  }, [products]);

  // System counts (Siddha / Ayurveda / Proprietary)
  const systemCounts = useMemo(() => {
    return {
      all: products.length,
      siddha: products.filter(p => p.medicalSystem === 'siddha').length,
      ayurveda: products.filter(p => p.medicalSystem === 'ayurveda').length,
      proprietary: products.filter(p => p.medicalSystem === 'proprietary').length
    };
  }, [products]);

  // Price counts
  const priceCounts = useMemo(() => {
    return {
      all: products.length,
      'under-200': products.filter(p => p.price < 200).length,
      '200-300': products.filter(p => p.price >= 200 && p.price <= 300).length,
      'above-300': products.filter(p => p.price > 300).length
    };
  }, [products]);

  const hasActiveFilters = 
    selectedSystem !== 'all' || 
    selectedFormulation !== 'all' || 
    selectedPrice !== 'all' || 
    inStockOnly || 
    searchQuery.trim() !== '' || 
    sortBy !== 'featured';

  const resetFilters = () => {
    setSelectedSystem('all');
    setSelectedFormulation('all');
    setSelectedPrice('all');
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
    setPerPage(12);
    setCurrentPage(1);
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // System filter
      if (selectedSystem !== 'all' && p.medicalSystem !== selectedSystem) {
        return false;
      }

      // Formulation filter
      if (selectedFormulation !== 'all' && p.formulation !== selectedFormulation) {
        return false;
      }

      // Price filter
      if (selectedPrice === 'under-200' && p.price >= 200) return false;
      if (selectedPrice === '200-300' && (p.price < 200 || p.price > 300)) return false;
      if (selectedPrice === 'above-300' && p.price <= 300) return false;

      // In-stock filter
      if (inStockOnly && p.isComingSoon) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const match = 
          p.name.toLowerCase().includes(q) ||
          p.tamilName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.formulation.toLowerCase().includes(q) ||
          p.searchKeywords?.some(k => k.toLowerCase().includes(q));
        if (!match) return false;
      }

      return true;
    });
  }, [products, selectedSystem, selectedFormulation, selectedPrice, inStockOnly, searchQuery]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [filteredProducts, sortBy]);

  // Pagination computations
  const totalItems = sortedProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);
  const paginatedProducts = useMemo(() => {
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, startIndex, endIndex]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 220, behavior: 'smooth' });
    }
  };

  // Render Filter Body (used in desktop sidebar & mobile drawer)
  const renderFilterBody = (isMobile = false) => (
    <div className="flex flex-col gap-5">
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#16382B]/10">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#16382B]" />
          <span className="font-serif-brand font-bold text-base text-[#16382B]">
            {t('Filter Catalog', 'வடிகட்டுதல்')}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[11px] text-[#C29043] hover:text-[#16382B] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t('Reset', 'மீட்டமை')}</span>
            </button>
          )}
          {isMobile && (
            <button
              onClick={() => setShowMobileFilter(false)}
              className="p-1 rounded-lg text-[#8A9B93] hover:text-[#16382B] cursor-pointer"
              aria-label="Close filter"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 1. MEDICAL SYSTEM FILTER */}
      <div>
        <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block mb-2.5">
          {t('Medical Tradition', 'மருத்துவ முறை')}
        </span>
        <div className="flex flex-col gap-1">
          {[
            { id: 'all', label: 'All Traditions', labelTa: 'அனைத்து முறைகள்', count: systemCounts.all, icon: Leaf },
            { id: 'siddha', label: 'Classical Siddha', labelTa: 'பாரம்பரிய சித்தம்', count: systemCounts.siddha, icon: Leaf },
            { id: 'ayurveda', label: 'Classical Ayurveda', labelTa: 'பாரம்பரிய ஆயுர்வேதம்', count: systemCounts.ayurveda, icon: Droplets },
            { id: 'proprietary', label: 'Proprietary Formulations', labelTa: 'பிரத்தியேக மருந்துகள்', count: systemCounts.proprietary, icon: FlaskConical }
          ].map(sys => {
            if (sys.count === 0 && sys.id !== 'all') return null;
            const isActive = selectedSystem === sys.id;
            const SysIcon = sys.icon;
            return (
              <button
                key={sys.id}
                onClick={() => { setSelectedSystem(sys.id); if (isMobile) setShowMobileFilter(false); }}
                className={`w-full px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#16382B] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <SysIcon className={`w-3.5 h-3.5 ${isActive ? 'text-[#DFB36C]' : 'text-[#16382B]'}`} />
                  <span>{language === 'ta' ? sys.labelTa : sys.label}</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-[#C29043] text-white' : 'bg-[#E8F1EB] text-[#16382B]'
                }`}>
                  {sys.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. DOSAGE FORM FILTER */}
      {availableFormulations.length > 0 && (
        <div className="pt-3 border-t border-[#16382B]/10">
          <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block mb-2.5">
            {t('Dosage Forms', 'மருந்து வடிவங்கள்')}
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => { setSelectedFormulation('all'); if (isMobile) setShowMobileFilter(false); }}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                selectedFormulation === 'all'
                  ? 'bg-[#16382B] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/5'
              }`}
            >
              <span>{t('All Forms', 'அனைத்தும்')}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                selectedFormulation === 'all' ? 'bg-[#C29043] text-white' : 'bg-[#E8F1EB] text-[#16382B]'
              }`}>
                {products.length}
              </span>
            </button>
            {availableFormulations.map(form => {
              const isActive = selectedFormulation === form.slug;
              return (
                <button
                  key={form.slug}
                  onClick={() => { setSelectedFormulation(form.slug); if (isMobile) setShowMobileFilter(false); }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#16382B] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/5'
                  }`}
                >
                  <span className="truncate max-w-[130px]">{language === 'ta' ? form.nameTa : form.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#C29043] text-white' : 'bg-[#E8F1EB] text-[#16382B]'
                  }`}>
                    {form.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. PRICE RANGE */}
      <div className="pt-3 border-t border-[#16382B]/10">
        <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block mb-2.5">
          {t('Price Range', 'விலை வரம்பு')}
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          {PRICE_FILTERS.map(pf => {
            const isActive = selectedPrice === pf.id;
            const count = (priceCounts as any)[pf.id];
            return (
              <button
                key={pf.id}
                onClick={() => { setSelectedPrice(pf.id); if (isMobile) setShowMobileFilter(false); }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#16382B] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/5'
                }`}
              >
                <span>{language === 'ta' ? pf.labelTa : pf.label}</span>
                {count !== undefined && (
                  <span className={`text-[9.5px] px-1 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#C29043] text-white' : 'bg-[#E8F1EB] text-[#16382B]'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. IN-STOCK ONLY TOGGLE */}
      <div className="pt-3 border-t border-[#16382B]/10 flex items-center justify-between">
        <span className="text-xs font-bold text-[#16382B]">
          {t('In-Stock Only', 'இருப்பில் உள்ளவை')}
        </span>
        <button
          type="button"
          onClick={() => setInStockOnly(!inStockOnly)}
          className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
            inStockOnly ? 'bg-[#16382B]' : 'bg-[#8A9B93]/30'
          }`}
          aria-label="Toggle in stock filter"
        >
          <span
            className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform shadow-xs ${
              inStockOnly ? 'left-6 bg-[#C29043]' : 'left-1'
            }`}
          />
        </button>
      </div>

      {/* 5. OTHER HEALTH CONCERNS QUICK SWITCH */}
      <div className="pt-3 border-t border-[#16382B]/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block">
            {t('Other Health Indications', 'பிற உடல் உபாதைகள்')}
          </span>
          <Link href="/shop/concerns" className="text-[10px] font-bold text-[#C29043] hover:underline">
            {t('All', 'அனைத்தும்')}
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          {CONCERN_CATEGORIES.map(otherCat => {
            const isCurrent = otherCat.slug === category.slug;
            const otherCount = allConcernCounts[otherCat.slug];
            return (
              <Link
                key={otherCat.slug}
                href={`/shop/concerns/${otherCat.slug}`}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                  isCurrent
                    ? 'bg-[#E8F1EB] text-[#16382B] border border-[#16382B]/20 font-bold'
                    : 'text-[#264653] hover:bg-[#FAF8F5] hover:text-[#16382B]'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  {getConcernIcon(otherCat.slug, `w-3.5 h-3.5 ${isCurrent ? 'text-[#C29043]' : 'text-[#8A9B93]'}`)}
                  <span className="truncate">{language === 'ta' ? otherCat.titleTa : otherCat.title}</span>
                </div>
                {otherCount !== undefined && (
                  <span className="text-[10px] text-[#8A9B93] font-medium ml-1">
                    ({otherCount})
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* 6. SHIPPING PROMO BADGE */}
      <div className="pt-3 border-t border-[#16382B]/10">
        <div className="p-2.5 rounded-xl bg-[#E8F1EB] border border-[#16382B]/10 flex items-center justify-between text-xs text-[#16382B]">
          <div className="flex items-center gap-1.5 font-bold">
            <Truck className="w-4 h-4 text-[#C29043]" />
            <span>{t('Free TN Shipping on ₹500+', '₹500+ இலவச அஞ்சல் விநியோகம்')}</span>
          </div>
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#16382B] text-white rounded-md">
            TN
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20">
      {/* ========================================= */}
      {/* 1. HERO HEADER STRIP (DEEP EMERALD #16382B) */}
      {/* ========================================= */}
      <section className="bg-[#16382B] text-white pt-6 pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#C29043]/30">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs text-[#DFB36C] mb-3">
            <Link href="/" className="hover:underline opacity-80">{t('Home', 'முகப்பு')}</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <Link href="/shop" className="hover:underline opacity-80">{t('Shop', 'மருந்துகள்')}</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <Link href="/shop/concerns" className="hover:underline opacity-80">{t('Health Concerns', 'உடல் நலம்')}</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span className="font-semibold text-white">
              {language === 'ta' ? category.titleTa : category.title}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F1EB]/15 border border-[#C29043]/40 text-xs text-[#DFB36C] font-semibold mb-2.5">
                {getConcernIcon(category.slug, "w-3.5 h-3.5 text-[#DFB36C]")}
                <span>{t('Therapeutic Health Indication', 'பாரம்பரிய மருத்துவ தீர்வு')}</span>
                <span className="text-white/40">•</span>
                <span>{products.length} {t('Formulations', 'தயாரிப்புகள்')}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {language === 'ta' ? category.titleTa : category.title}
              </h1>

              {/* Tagline & Description */}
              <p className="text-xs sm:text-sm text-[#DFB36C] font-medium mt-1">
                {language === 'ta' ? category.taglineTa : category.tagline}
              </p>
              <p className="text-xs sm:text-sm text-white/80 mt-1.5 leading-relaxed max-w-2xl">
                {language === 'ta' ? category.descriptionTa : category.description}
              </p>

              {/* Botanicals highlight */}
              <div className="pt-3 flex items-center gap-2 text-xs text-[#DFB36C]">
                <span className="font-semibold text-white/90">{t('Key Classical Botanicals:', 'முக்கிய மூலிகைகள்:')}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#DFB36C] font-medium border border-[#C29043]/30">
                  {language === 'ta' ? category.herbalKeyTa : category.herbalKey}
                </span>
              </div>
            </div>

            {/* Right Trust Badges */}
            <div className="flex flex-row lg:flex-col items-start gap-2 bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/15 text-xs text-[#DFB36C]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#DFB36C] flex-shrink-0" />
                <span className="font-semibold text-white">
                  {t('Siddha & Ayurveda Formulations', 'சித்த & ஆயுர்வேத நெறிமுறைகள்')}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-[11.5px]">
                <Sparkles className="w-3.5 h-3.5 text-[#DFB36C] flex-shrink-0" />
                <span>{t('Free TN Delivery ₹500+ • Direct Dispatch', '₹500+ இலவச அஞ்சல் • நேரடி விநியோகம்')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. MAIN TWO-COLUMN CONTENT AREA */}
      {/* ========================================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* Desktop Left Sticky Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 bg-white rounded-2xl border border-[#16382B]/10 p-5 shadow-2xs">
            {renderFilterBody(false)}
          </aside>

          {/* Mobile Filter Modal Slide-over */}
          {showMobileFilter && (
            <div className="fixed inset-0 z-50 lg:hidden flex bg-black/50 backdrop-blur-xs" role="dialog" aria-modal="true">
              <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col border-r border-[#16382B]/10 p-5 overflow-y-auto animate-in slide-in-from-left duration-200">
                {renderFilterBody(true)}
              </div>
              <div className="flex-1" onClick={() => setShowMobileFilter(false)} />
            </div>
          )}

          {/* Right Main Catalog Content */}
          <main className="flex-1 w-full min-w-0">
            
            {/* Top Toolbar: Search, Sort, Per-Page, and View Mode */}
            <div className="bg-white rounded-2xl border border-[#16382B]/10 p-3 sm:p-4 mb-5 shadow-2xs">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                
                {/* Search Box */}
                <div className="relative flex-1 min-w-0">
                  <Search className="w-4 h-4 text-[#8A9B93] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'ta' 
                      ? `தேடுங்கள் (${filteredProducts.length} தயாரிப்புகள்)...` 
                      : `Search ${filteredProducts.length} formulations by name or herb...`}
                    className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs sm:text-sm text-[#16382B] placeholder-[#8A9B93] focus:outline-none focus:border-[#C29043] focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A9B93] hover:text-[#16382B]"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Controls: Mobile Filter Button, Sort, Per-Page, and View Mode */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap justify-between sm:justify-start">
                  
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowMobileFilter(true)}
                    className="lg:hidden px-3 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#E8F1EB] border border-[#16382B]/10 text-xs font-bold text-[#16382B] flex items-center gap-1.5 cursor-pointer transition-colors"
                    aria-label="Open filter menu"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#C29043]" />
                    <span>{t('Filter', 'வடிகட்டு')}</span>
                  </button>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    aria-label="Sort formulations"
                    className="px-2.5 sm:px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs font-semibold text-[#16382B] focus:outline-none cursor-pointer"
                  >
                    <option value="featured">{t('Featured', 'முக்கிய மருந்துகள்')}</option>
                    <option value="price-low">{t('Price: Low to High', 'விலை: குறைவு முதல் அதிகம்')}</option>
                    <option value="price-high">{t('Price: High to Low', 'விலை: அதிகம் முதல் குறைவு')}</option>
                    <option value="name">{t('Name: A to Z', 'பெயர்: அகரவரிசை')}</option>
                  </select>

                  {/* Per Page Selector */}
                  <select
                    value={perPage}
                    onChange={(e) => setPerPage(Number(e.target.value))}
                    aria-label="Items per page"
                    className="px-2.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs font-semibold text-[#16382B] focus:outline-none cursor-pointer hidden md:block"
                  >
                    <option value={12}>12 / page</option>
                    <option value={24}>24 / page</option>
                    <option value={48}>48 / page</option>
                    <option value={totalItems || 100}>All ({totalItems})</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 p-0.5">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        viewMode === 'grid' ? 'bg-[#16382B] text-white shadow-2xs' : 'text-[#8A9B93] hover:text-[#16382B]'
                      }`}
                      aria-label="Grid View"
                      title="Grid View"
                    >
                      <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        viewMode === 'list' ? 'bg-[#16382B] text-white shadow-2xs' : 'text-[#8A9B93] hover:text-[#16382B]'
                      }`}
                      aria-label="List View"
                      title="List View"
                    >
                      <LayoutList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                </div>
              </div>

              {/* Status & Active Chips */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#16382B]/5 text-xs text-[#8A9B93]">
                <span>
                  {totalItems > 0 ? (
                    t(
                      `Showing ${startIndex + 1}–${endIndex} of ${totalItems} formulations`,
                      `${totalItems} தயாரிப்புகளில் ${startIndex + 1}–${endIndex} காட்டப்படுகிறது`
                    )
                  ) : (
                    t('0 formulations found', '0 மருந்துகள் கண்டறியப்பட்டன')
                  )}
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] text-[#C29043] hover:text-[#16382B] font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>{t('Clear Filters', 'வடிகட்டிகளை நீக்கு')}</span>
                  </button>
                )}
              </div>
            </div>

            {/* ========================================= */}
            {/* 3. PRODUCT DISPLAY: RESPONSIVE GRID / LIST */}
            {/* ========================================= */}
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#16382B]/10 p-12 text-center my-6">
                <Leaf className="w-10 h-10 text-[#8A9B93] mx-auto mb-3" />
                <h3 className="font-serif-brand text-lg font-bold text-[#16382B]">
                  {t('No formulations matched your filters', 'தேர்ந்தெடுக்கப்பட்ட வடிகட்டிகளில் மருந்துகள் இல்லை')}
                </h3>
                <p className="text-xs text-[#8A9B93] mt-1 mb-4">
                  {t('Try adjusting your search terms or clearing selected filters.', 'தேடல் சொல் அல்லது வடிகட்டிகளை மாற்றி முயற்சிக்கவும்.')}
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-[#16382B] text-white text-xs font-bold hover:bg-[#204C3B] transition-colors cursor-pointer"
                >
                  {t('Clear All Filters', 'அனைத்து வடிகட்டிகளையும் நீக்கு')}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Product Grid / List (Mobile 2-column grid, Desktop 3-column) */}
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5' 
                  : 'space-y-3'
                }>
                  {paginatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                  ))}
                </div>

                {/* Scalable Pagination Controls */}
                {totalPages > 1 && (
                  <div className="bg-white rounded-2xl border border-[#16382B]/10 p-4 sm:p-5 shadow-2xs">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      {/* Progress info */}
                      <div className="text-[#3D5A68] text-center sm:text-left">
                        <span className="font-semibold text-[#16382B]">
                          {t(`Page ${currentPage} of ${totalPages}`, `பக்கம் ${currentPage} / ${totalPages}`)}
                        </span>
                        <span className="mx-2 text-[#8A9B93]">•</span>
                        <span>
                          {t(
                            `Showing ${startIndex + 1}–${endIndex} of ${totalItems} formulations`,
                            `${totalItems} தயாரிப்புகளில் ${startIndex + 1}–${endIndex}`
                          )}
                        </span>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex items-center gap-1.5 flex-wrap justify-center">
                        {/* First Page */}
                        <button
                          type="button"
                          onClick={() => handlePageChange(1)}
                          disabled={currentPage === 1}
                          className="p-2 rounded-lg border border-[#16382B]/15 text-[#16382B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          title="First Page"
                          aria-label="First Page"
                        >
                          <ChevronsLeft className="w-4 h-4" />
                        </button>

                        {/* Previous Page */}
                        <button
                          type="button"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="p-2 rounded-lg border border-[#16382B]/15 text-[#16382B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          title="Previous Page"
                          aria-label="Previous Page"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1 px-1">
                          {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
                            .map((pageNum, idx, arr) => {
                              const prevPage = arr[idx - 1];
                              const hasGap = prevPage && pageNum - prevPage > 1;

                              return (
                                <React.Fragment key={pageNum}>
                                  {hasGap && <span className="px-1 text-[#8A9B93]">...</span>}
                                  <button
                                    type="button"
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                      currentPage === pageNum
                                        ? 'bg-[#16382B] text-white shadow-2xs'
                                        : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                                    }`}
                                  >
                                    {pageNum}
                                  </button>
                                </React.Fragment>
                              );
                            })}
                        </div>

                        {/* Next Page */}
                        <button
                          type="button"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="p-2 rounded-lg border border-[#16382B]/15 text-[#16382B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          title="Next Page"
                          aria-label="Next Page"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Last Page */}
                        <button
                          type="button"
                          onClick={() => handlePageChange(totalPages)}
                          disabled={currentPage === totalPages}
                          className="p-2 rounded-lg border border-[#16382B]/15 text-[#16382B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                          title="Last Page"
                          aria-label="Last Page"
                        >
                          <ChevronsRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
