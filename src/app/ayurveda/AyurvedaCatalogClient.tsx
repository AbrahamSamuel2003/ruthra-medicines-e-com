'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Droplets, 
  Search, 
  ShieldCheck, 
  SlidersHorizontal, 
  Award, 
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Sparkles,
  RotateCcw,
  LayoutGrid,
  LayoutList,
  Truck,
  Activity,
  Wind,
  Heart,
  Flame,
  Check,
  X,
  Info
} from 'lucide-react';
import { Product, ConcernSlug } from '@/types/product';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/components/ProductCard';
import { AYURVEDA_NAV_CATEGORIES } from '@/data/categories';

interface AyurvedaCatalogClientProps {
  products: Product[];
  initialCategory?: string;
}

const CONCERN_FILTERS: { slug: string; name: string; nameTa: string; icon: any }[] = [
  { slug: 'all', name: 'All Concerns', nameTa: 'அனைத்து நலம்', icon: Activity },
  { slug: 'joint-mobility', name: 'Joint & Muscle', nameTa: 'மூட்டு & தசை நலம்', icon: Activity },
  { slug: 'respiratory', name: 'Respiratory & Cough', nameTa: 'சுவாச & சளி நலம்', icon: Wind },
  { slug: 'digestive-wellness', name: 'Digestive & Acidity', nameTa: 'செரிமான நலம்', icon: Flame },
  { slug: 'womens-wellness', name: "Women's Wellness", nameTa: 'மகளிர் நலம்', icon: Heart },
  { slug: 'skin-hair', name: 'Skin, Hair & Beauty', nameTa: 'தோல் & கூந்தல்', icon: Droplets },
  { slug: 'metabolic-wellness', name: 'Metabolic & Vitality', nameTa: 'உடல் பலம் & ரத்த சுத்தி', icon: Sparkles }
];

const PRICE_FILTERS = [
  { id: 'all', label: 'All Prices', labelTa: 'அனைத்து விலை' },
  { id: 'under-200', label: '< ₹200', labelTa: '< ₹200' },
  { id: '200-300', label: '₹200 - ₹300', labelTa: '₹200 - ₹300' },
  { id: 'above-300', label: '> ₹300', labelTa: '> ₹300' }
];

// Robust matching helper for Ayurveda dosage forms
export function matchAyurvedaCategory(p: Product, categorySlug: string): boolean {
  if (categorySlug === 'all') return true;
  return p.categoryGroup === categorySlug || p.formulation.toLowerCase() === categorySlug.toLowerCase();
}

export default function AyurvedaCatalogClient({ products, initialCategory }: AyurvedaCatalogClientProps) {
  const { language, t } = useLanguage();
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedConcern, setSelectedConcern] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');
  const [perPage, setPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Reset currentPage to 1 whenever any filter, search, sort, or perPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedConcern, selectedPrice, inStockOnly, searchQuery, sortBy, perPage]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    AYURVEDA_NAV_CATEGORIES.forEach(cat => {
      counts[cat.slug] = products.filter(p => matchAyurvedaCategory(p, cat.slug)).length;
    });
    return counts;
  }, [products]);

  // Compute concern counts
  const concernCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    CONCERN_FILTERS.forEach(cf => {
      if (cf.slug === 'all') return;
      counts[cf.slug] = products.filter(p => p.concerns?.includes(cf.slug as ConcernSlug)).length;
    });
    return counts;
  }, [products]);

  // Compute price counts
  const priceCounts = useMemo(() => {
    return {
      'all': products.length,
      'under-200': products.filter(p => p.price < 200).length,
      '200-300': products.filter(p => p.price >= 200 && p.price <= 300).length,
      'above-300': products.filter(p => p.price > 300).length
    };
  }, [products]);

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedConcern('all');
    setSelectedPrice('all');
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
    setPerPage(12);
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedConcern !== 'all' || selectedPrice !== 'all' || inStockOnly || searchQuery.trim() !== '' || sortBy !== 'featured';

  // Filter products based on criteria
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (!matchAyurvedaCategory(p, selectedCategory)) return false;
      }

      // Concern filter
      if (selectedConcern !== 'all') {
        if (!p.concerns?.includes(selectedConcern as ConcernSlug)) return false;
      }

      // Price filter
      if (selectedPrice === 'under-200' && p.price >= 200) return false;
      if (selectedPrice === '200-300' && (p.price < 200 || p.price > 300)) return false;
      if (selectedPrice === 'above-300' && p.price <= 300) return false;

      // In stock filter
      if (inStockOnly && p.isComingSoon) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q) ||
                          p.tamilName.toLowerCase().includes(q) ||
                          p.shortDescription.toLowerCase().includes(q) ||
                          p.formulation.toLowerCase().includes(q) ||
                          p.searchKeywords?.some(k => k.toLowerCase().includes(q));
        if (!matchName) return false;
      }

      return true;
    });
  }, [products, selectedCategory, selectedConcern, selectedPrice, inStockOnly, searchQuery]);

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
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  // Group products by category only when viewing All with no active filters, default sort, and perPage >= totalItems
  const isGroupedView = selectedCategory === 'all' && selectedConcern === 'all' && selectedPrice === 'all' && !inStockOnly && !searchQuery.trim() && sortBy === 'featured' && perPage >= totalItems;

  const groupedCategories = useMemo(() => {
    if (!isGroupedView) return [];
    return AYURVEDA_NAV_CATEGORIES.map(cat => {
      const items = sortedProducts.filter(p => matchAyurvedaCategory(p, cat.slug));
      return {
        ...cat,
        items
      };
    }).filter(cat => cat.items.length > 0);
  }, [isGroupedView, sortedProducts]);

  const activeCategoryMeta = AYURVEDA_NAV_CATEGORIES.find(c => c.slug === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20">
      {/* Header Banner */}
      <section className="bg-[#16382B] text-white pt-7 pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#C29043]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-1.5 text-xs text-[#DFB36C] mb-2.5">
            <Link href="/" className="hover:underline opacity-80">{t('Home', 'முகப்பு')}</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span className="font-semibold text-white">{t('Ayurveda Medicines', 'ஆயுர்வேத மருந்துகள்')}</span>
            {activeCategoryMeta && (
              <>
                <ChevronRight className="w-3 h-3 text-white/40" />
                <span className="font-semibold text-[#DFB36C]">
                  {language === 'ta' ? activeCategoryMeta.titleTa : activeCategoryMeta.title}
                </span>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F1EB]/15 border border-[#C29043]/40 text-xs text-[#DFB36C] font-semibold mb-2">
                <Droplets className="w-3.5 h-3.5" />
                <span>{t('Classical Ayurvedic Formulary of India (55 SKUs)', 'இந்திய ஆயுர்வேத பார்முலரி (55 தயாரிப்புகள்)')}</span>
              </div>
              <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold tracking-tight">
                {activeCategoryMeta 
                  ? (language === 'ta' ? activeCategoryMeta.titleTa : activeCategoryMeta.title)
                  : t('Classical Ayurveda Formulations', 'பாரம்பரிய ஆயுர்வேத மருந்துகள்')}
              </h1>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#DFB36C]">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('Authentic AFI Standards • Traditional Potentiation', 'AFI நெறிமுறைகள் • பாரம்பரிய தயாரிப்பு')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* ========================================= */}
          {/* 1. LEFT STICKY FILTER SIDEBAR */}
          {/* ========================================= */}
          <aside className="w-full lg:w-68 xl:w-72 flex-shrink-0 lg:sticky lg:top-24 self-start max-h-[calc(100vh-7rem)] lg:overflow-y-auto pr-0 lg:pr-2 custom-scrollbar">
            <div className="bg-white rounded-2xl border border-[#16382B]/10 p-4 sm:p-5 shadow-xs flex flex-col gap-5">
              
              {/* Filter Catalog Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#16382B]/10">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#16382B]" />
                  <span className="font-serif-brand font-bold text-base text-[#16382B]">
                    {t('Filter Catalog', 'வடிகட்டுதல்')}
                  </span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] text-[#C29043] hover:text-[#16382B] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{t('Reset', 'மீட்டமை')}</span>
                  </button>
                )}
              </div>

              {/* Section: FORMULATION TYPE */}
              <div>
                <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block mb-2.5">
                  {t('Formulation Type', 'மருந்து வடிவம்')}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between gap-2 transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-[#16382B] text-white shadow-xs'
                        : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/5'
                    }`}
                  >
                    <span>{t('All Forms', 'அனைத்து வடிவங்கள்')}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      selectedCategory === 'all' ? 'bg-[#C29043] text-white' : 'bg-[#E8F1EB] text-[#16382B]'
                    }`}>
                      {categoryCounts['all'] || products.length}
                    </span>
                  </button>

                  {AYURVEDA_NAV_CATEGORIES.map(cat => {
                    const count = categoryCounts[cat.slug] || 0;
                    if (count === 0) return null;
                    const isActive = selectedCategory === cat.slug;
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#16382B] text-white shadow-xs'
                            : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/5'
                        }`}
                      >
                        <span className="truncate max-w-[120px]">
                          {language === 'ta' ? cat.titleTa : cat.title}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isActive ? 'bg-[#C29043] text-white' : 'bg-[#E8F1EB] text-[#16382B]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section: HEALTH INDICATION */}
              <div className="pt-3 border-t border-[#16382B]/10">
                <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block mb-2.5">
                  {t('Health Indication', 'உடல் நலம்')}
                </span>
                <div className="flex flex-col gap-1">
                  {CONCERN_FILTERS.map(cf => {
                    const count = concernCounts[cf.slug] || 0;
                    const isActive = selectedConcern === cf.slug;
                    const Icon = cf.icon;
                    return (
                      <button
                        key={cf.slug}
                        onClick={() => setSelectedConcern(cf.slug)}
                        className={`w-full px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#16382B] text-white shadow-xs'
                            : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/5'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C29043]' : 'text-[#16382B]'}`} />
                          <span className="truncate">{language === 'ta' ? cf.nameTa : cf.name}</span>
                        </div>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isActive ? 'bg-[#C29043] text-white' : 'bg-[#E8F1EB] text-[#16382B]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section: PRICE RANGE */}
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
                        onClick={() => setSelectedPrice(pf.id)}
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

              {/* Section: IN-STOCK ONLY TOGGLE */}
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

              {/* Free TN Shipping Promo Card */}
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
          </aside>

          {/* ========================================= */}
          {/* 2. RIGHT MAIN CONTENT AREA */}
          {/* ========================================= */}
          <main className="flex-1 min-w-0">
            
            {/* Top Sticky Search & Controls Bar */}
            <div className="bg-white rounded-2xl border border-[#16382B]/10 p-3 sm:p-4 mb-5 shadow-xs sticky top-20 z-20">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#8A9B93] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'ta' 
                      ? `தேடுங்கள் (${filteredProducts.length} ஆயுர்வேத தயாரிப்புகள்)...` 
                      : `Search ${filteredProducts.length} formulations by name, Tamil name, or herbs...`}
                    className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs sm:text-sm text-[#16382B] placeholder-[#8A9B93] focus:outline-none focus:border-[#C29043] focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A9B93] hover:text-[#16382B]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Controls: Sort By & Per Page & Layout */}
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    aria-label="Sort formulations"
                    className="px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs font-semibold text-[#16382B] focus:outline-none cursor-pointer"
                  >
                    <option value="featured">{t('Featured Formulations', 'முக்கிய மருந்துகள்')}</option>
                    <option value="price-low">{t('Price: Low to High', 'விலை: குறைவு முதல் அதிகம்')}</option>
                    <option value="price-high">{t('Price: High to Low', 'விலை: அதிகம் முதல் குறைவு')}</option>
                    <option value="name">{t('Name: A to Z', 'பெயர்: அகரவரிசை')}</option>
                  </select>

                  {/* Per Page Selector */}
                  <select
                    value={perPage}
                    onChange={(e) => setPerPage(Number(e.target.value))}
                    aria-label="Items per page"
                    className="px-2.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs font-semibold text-[#16382B] focus:outline-none cursor-pointer hidden sm:block"
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
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        viewMode === 'list' ? 'bg-[#16382B] text-white shadow-2xs' : 'text-[#8A9B93] hover:text-[#16382B]'
                      }`}
                      aria-label="List View"
                      title="List View"
                    >
                      <LayoutList className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>

              {/* Status & Active Chips */}
              <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-[#16382B]/5 text-xs text-[#8A9B93]">
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
                  <span className="text-[11px] text-[#C29043] font-bold">
                    {t('Filters applied', 'வடிகட்டிகள் பயன்படுத்தப்பட்டுள்ளன')}
                  </span>
                )}
              </div>
            </div>

            {/* ========================================= */}
            {/* 3. PRODUCT DISPLAY: CATEGORY GROUPED OR PAGINATED GRID/LIST */}
            {/* ========================================= */}
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#16382B]/10 p-12 text-center my-6">
                <Droplets className="w-10 h-10 text-[#8A9B93] mx-auto mb-3" />
                <h3 className="font-serif-brand text-lg font-bold text-[#16382B]">
                  {t('No Ayurveda formulations matched your filters', 'தேர்ந்தெடுக்கப்பட்ட வடிகட்டிகளில் மருந்துகள் இல்லை')}
                </h3>
                <p className="text-xs text-[#8A9B93] mt-1 mb-4">
                  {t('Try adjusting your search terms or clearing selected categories.', 'தேடல் சொல் அல்லது வடிகட்டிகளை மாற்றி முயற்சிக்கவும்.')}
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-[#16382B] text-white text-xs font-bold hover:bg-[#204C3B] transition-colors cursor-pointer"
                >
                  {t('Clear All Filters', 'அனைத்து வடிகட்டிகளையும் நீக்கு')}
                </button>
              </div>
            ) : isGroupedView ? (
              /* Grouped by Dosage Form Sections on All mode */
              <div className="space-y-10">
                {groupedCategories.map(cat => (
                  <section key={cat.slug} id={cat.slug} className="scroll-mt-32">
                    {/* Category Section Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#16382B]/15">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full bg-[#C29043]" />
                        <div>
                          <h2 className="font-serif-brand text-xl sm:text-2xl font-bold text-[#16382B]">
                            {language === 'ta' ? cat.titleTa : cat.title}
                          </h2>
                          <p className="text-xs text-[#8A9B93]">
                            {cat.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 bg-[#E8F1EB] text-[#16382B] rounded-full border border-[#16382B]/10">
                        {cat.items.length} {t('SKUs', 'மருந்துகள்')}
                      </span>
                    </div>

                    {/* Products Grid or List for this category */}
                    <div className={viewMode === 'grid' ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5' : 'space-y-3'}>
                      {cat.items.map(product => (
                        <ProductCard key={product.id} product={product} viewMode={viewMode} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              /* Filtered / Paginated Grid or List */
              <div className="space-y-6">
                <div className={viewMode === 'grid' ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5' : 'space-y-3'}>
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
