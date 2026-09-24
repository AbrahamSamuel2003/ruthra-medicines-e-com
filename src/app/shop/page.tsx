'use client';

import React, { useState, useMemo, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import {
  Filter,
  SlidersHorizontal,
  RefreshCw,
  Search,
  X,
  Grid3X3,
  LayoutList,
  Truck,
  Layers,
  ShoppingBag,
  Leaf,
  ArrowUpDown,
  CheckCircle2,
  Award,
  PackageCheck,
  ShieldCheck,
  Heart,
  Activity,
  Wind,
  Flame,
  Droplets,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CONCERN_CATEGORIES, FORMULATION_CATEGORIES } from '@/data/products';
import { Product, ConcernSlug } from '@/types/product';

// Price range & sort options
type PriceRange = 'all' | 'under-200' | '200-300' | 'above-300';
type SortOption = 'featured' | 'price-low' | 'price-high' | 'name';
type ViewMode = 'grid' | 'list';

const sortOptions: { id: SortOption; labelEn: string; labelTa: string }[] = [
  { id: 'featured', labelEn: 'Featured Formulations', labelTa: 'பரிந்துரைக்கப்பட்டவை' },
  { id: 'price-low', labelEn: 'Price: Low to High', labelTa: 'விலை: குறைந்தது முதல்' },
  { id: 'price-high', labelEn: 'Price: High to Low', labelTa: 'விலை: அதிகம் முதல்' },
  { id: 'name', labelEn: 'Name (A-Z)', labelTa: 'பெயர் வரிசை (A-Z)' },
];

const ITEMS_PER_PAGE_OPTIONS = [12, 24, 48, 96];

function ShopContent() {
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();
  const { addItem, openDrawer } = useCart();
  const catalogTopRef = useRef<HTMLDivElement>(null);

  // URL query param initial state
  const initialConcern = searchParams.get('concern') || 'all';
  const initialFormulation = searchParams.get('formulation') || 'all';

  const [selectedConcern, setSelectedConcern] = useState<string>(initialConcern);
  const [selectedFormulation, setSelectedFormulation] = useState<string>(initialFormulation);
  const [priceRange, setPriceRange] = useState<PriceRange>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Scalable Pagination state (handles 1,000+ products seamlessly)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(24);

  // Lock body scroll when mobile filter modal is open
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

  const [productList, setProductList] = useState<Product[]>(PRODUCTS);

  // Sync latest catalog from PostgreSQL
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.products) && data.products.length > 0) {
          setProductList(data.products);
        }
      })
      .catch(() => {});
  }, []);

  // Reset page to 1 whenever any filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedConcern, selectedFormulation, priceRange, inStockOnly, searchQuery, sortBy, itemsPerPage]);

  // Dynamic Item Counts
  const formulationCounts = useMemo(() => {
    const counts: Record<string, number> = { all: productList.length };
    productList.forEach(p => {
      counts[p.formulation] = (counts[p.formulation] || 0) + 1;
    });
    return counts;
  }, [productList]);

  const concernCounts = useMemo(() => {
    const counts: Record<string, number> = { all: productList.length };
    productList.forEach(p => {
      p.concerns?.forEach(c => {
        counts[c] = (counts[c] || 0) + 1;
      });
    });
    return counts;
  }, [productList]);

  const priceCounts = useMemo(() => {
    return {
      all: productList.length,
      'under-200': productList.filter(p => p.price < 200).length,
      '200-300': productList.filter(p => p.price >= 200 && p.price <= 300).length,
      'above-300': productList.filter(p => p.price > 300).length,
    };
  }, [productList]);

  // Pre-indexed and memoized filtered products (sub-millisecond filtering for 1,000+ items)
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return productList.filter(p => {
      // Concern Filter
      if (selectedConcern !== 'all' && !p.concerns?.includes(selectedConcern as ConcernSlug)) {
        return false;
      }
      // Formulation Filter
      if (selectedFormulation !== 'all' && p.formulation !== selectedFormulation) {
        return false;
      }
      // In Stock Filter
      if (inStockOnly && !p.inStock) {
        return false;
      }
      // Price Range Filter
      if (priceRange === 'under-200' && p.price >= 200) return false;
      if (priceRange === '200-300' && (p.price < 200 || p.price > 300)) return false;
      if (priceRange === 'above-300' && p.price <= 300) return false;

      // Live In-Page Search across multiple indexed fields
      if (query) {
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesTaName = p.tamilName.toLowerCase().includes(query);
        const matchesDesc =
          p.shortDescription.toLowerCase().includes(query) ||
          (p.shortDescriptionTa && p.shortDescriptionTa.toLowerCase().includes(query));
        const matchesFormulation =
          p.formulation.toLowerCase().includes(query) ||
          (p.formulationTa && p.formulationTa.toLowerCase().includes(query));
        const matchesKeywords = p.searchKeywords?.some(k => k.toLowerCase().includes(query));
        const matchesTaKeywords = p.tamilKeywords?.some(k => k.toLowerCase().includes(query));
        const matchesIngredients = p.ingredients.some(
          i =>
            i.name.toLowerCase().includes(query) ||
            i.tamilName.toLowerCase().includes(query) ||
            (i.botanicalName && i.botanicalName.toLowerCase().includes(query))
        );

        if (
          !matchesName &&
          !matchesTaName &&
          !matchesDesc &&
          !matchesFormulation &&
          !matchesKeywords &&
          !matchesTaKeywords &&
          !matchesIngredients
        ) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedConcern, selectedFormulation, priceRange, inStockOnly, searchQuery, sortBy]);

  // Pagination Calculations
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Sliced products for current view batch (Prevents DOM overload for 1,000+ items)
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, startIndex, endIndex]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedConcern !== 'all') count++;
    if (selectedFormulation !== 'all') count++;
    if (priceRange !== 'all') count++;
    if (inStockOnly) count++;
    if (searchQuery.trim() !== '') count++;
    return count;
  }, [selectedConcern, selectedFormulation, priceRange, inStockOnly, searchQuery]);

  const resetFilters = () => {
    setSelectedConcern('all');
    setSelectedFormulation('all');
    setPriceRange('all');
    setInStockOnly(false);
    setSearchQuery('');
    setSortBy('featured');
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (catalogTopRef.current) {
      const yOffset = -140;
      const y = catalogTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Helper icons for categories
  const getConcernIcon = (slug: string) => {
    switch (slug) {
      case 'joint-mobility': return <Activity className="w-3.5 h-3.5" />;
      case 'respiratory': return <Wind className="w-3.5 h-3.5" />;
      case 'womens-wellness': return <Heart className="w-3.5 h-3.5" />;
      case 'metabolic-wellness': return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'digestive-wellness': return <Flame className="w-3.5 h-3.5" />;
      case 'skin-hair': return <Droplets className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  // Add to cart with drawer
  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    openDrawer();
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-24 md:pb-20">
      {/* 1. EDITORIAL BOTANICAL HEADER — HIGH IMPACT */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#16382B]/10 via-[#FAF8F5] to-[#FAF8F5] pt-4 pb-4 sm:pt-6 sm:pb-6 border-b border-[#16382B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#8A9B93] mb-2 flex items-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-[#16382B] transition-colors">{t('Home', 'முகப்பு')}</Link>
            <span>/</span>
            <span className="text-[#16382B] font-semibold">{t('Formulation Catalog', 'மருந்துகள் களஞ்சியம்')}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Pharmacopeia Gold Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 border border-[#C29043]/40 shadow-2xs mb-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C29043]" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#16382B] tracking-wide uppercase">
                {t('Tirunelveli Classical Pharmacopeia', 'திருநெல்வேலி பாரம்பரிய சித்த மருந்தகம்')}
              </span>
              <span className="text-[9.5px] sm:text-[10px] text-[#C29043] font-semibold">• {PRODUCTS.length} Formulations</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#16382B] tracking-tight leading-tight">
              {t('Siddha Formulation Catalog', 'சித்த மருந்துகள் களஞ்சியம்')}
            </h1>

            <p className="text-xs sm:text-sm text-[#3D5A68] mt-1.5 leading-relaxed">
              {t(
                'Direct from Tirunelveli, southern Tamil Nadu. Classical Siddha preparations crafted with Shodhana-purified botanicals, authentic anupanam vehicles, and dispatch across all 38 districts.',
                'தென் தமிழகத்தின் திருநெல்வேலியிலிருந்து பாரம்பரிய முறைப்படி சுத்தி செய்யப்பட்ட மூலிகைகள், துணைப்பொருட்களுடன் கூடிய சித்த மருந்துகள்.'
              )}
            </p>

            {/* Pharmacopeia Trust Highlights */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mt-3 pt-2.5 border-t border-[#16382B]/10 text-xs text-[#16382B]">
              <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-white/80 border border-[#16382B]/10 font-medium text-[10.5px] sm:text-xs">
                <Leaf className="w-3.5 h-3.5 text-[#16382B]" />
                <span>{t('100% Herbal Botanicals', '100% இயற்கை மூலிகைகள்')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-white/80 border border-[#16382B]/10 font-medium text-[10.5px] sm:text-xs">
                <Award className="w-3.5 h-3.5 text-[#C29043]" />
                <span>{t('Classical Siddha Ratios', 'பாரம்பரிய அளவுமுறை')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-white/80 border border-[#16382B]/10 font-medium text-[10.5px] sm:text-xs">
                <Truck className="w-3.5 h-3.5 text-[#16382B]" />
                <span>{t('Free TN Delivery on ₹500+', '₹500க்கு மேல் இலவச விநியோகம்')}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-white/80 border border-[#16382B]/10 font-medium text-[10.5px] sm:text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C29043]" />
                <span>{t('Lab Purity Tested', 'தூய்மை பரிசோதிக்கப்பட்டது')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor for smooth page scrolling */}
      <div ref={catalogTopRef} className="-mt-2" />

      {/* 2. MAIN CATALOG WORKSPACE (2-COLUMN LAYOUT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT SIDEBAR FILTER PANEL (Sticky, Locks in View Beside Products at top-[128px]) */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-[128px] lg:self-start lg:max-h-[calc(100vh-148px)] lg:overflow-y-auto pr-1">
            <div className="bg-white rounded-2xl border border-[#16382B]/10 p-3.5 xl:p-4 shadow-xs space-y-3 select-none">
              {/* Filter Card Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[#16382B]/10">
                <div className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#C29043]" />
                  <span className="font-serif-brand text-sm font-bold text-[#16382B]">
                    {t('Filter Catalog', 'வடிகட்டுதல்')}
                  </span>
                  {activeFiltersCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-[#C29043] text-[#16382B] text-[9.5px] font-bold">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>

                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-[11px] text-[#C29043] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-2.5 h-2.5" />
                    {t('Reset', 'மீட்டமை')}
                  </button>
                )}
              </div>

              {/* Formulation Type (Compact 2-Column Grid) */}
              <div>
                <label className="text-[10px] uppercase font-bold text-[#8A9B93] tracking-wider block mb-1.5">
                  {t('Formulation Type', 'மருந்து வடிவம்')}
                </label>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setSelectedFormulation('all')}
                    className={`px-2 py-1 rounded-lg text-[11px] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      selectedFormulation === 'all'
                        ? 'bg-[#16382B] text-white font-semibold shadow-2xs'
                        : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                    }`}
                  >
                    <span className="truncate">{t('All Forms', 'அனைத்தும்')}</span>
                    <span className={`text-[9.5px] px-1 py-0.2 rounded ${
                      selectedFormulation === 'all' ? 'bg-white/20 text-white' : 'text-[#8A9B93]'
                    }`}>
                      {formulationCounts.all}
                    </span>
                  </button>
                  {FORMULATION_CATEGORIES.map(form => {
                    const isSelected = selectedFormulation === form.formulation;
                    const count = formulationCounts[form.formulation] || 0;
                    return (
                      <button
                        key={form.slug}
                        type="button"
                        onClick={() => setSelectedFormulation(form.formulation)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#16382B] text-white font-semibold shadow-2xs'
                            : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                        }`}
                        title={language === 'ta' ? form.titleTa : form.title}
                      >
                        <span className="truncate">{language === 'ta' ? form.titleTa : form.title}</span>
                        <span className={`text-[9.5px] px-1 py-0.2 rounded shrink-0 ml-0.5 ${
                          isSelected ? 'bg-white/20 text-white' : 'text-[#8A9B93]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Health Indication / Concerns (Compact 2-Column Grid) */}
              <div className="pt-2.5 border-t border-[#16382B]/10">
                <label className="text-[10px] uppercase font-bold text-[#8A9B93] tracking-wider block mb-1.5">
                  {t('Health Indication', 'உபாதைகள் & நலம்')}
                </label>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setSelectedConcern('all')}
                    className={`col-span-2 px-2 py-1 rounded-lg text-[11px] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      selectedConcern === 'all'
                        ? 'bg-[#16382B] text-white font-semibold shadow-2xs'
                        : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                    }`}
                  >
                    <span>{t('All Concerns', 'அனைத்து உபாதைகள்')}</span>
                    <span className={`text-[9.5px] px-1 py-0.2 rounded ${
                      selectedConcern === 'all' ? 'bg-white/20 text-white' : 'text-[#8A9B93]'
                    }`}>
                      {concernCounts.all}
                    </span>
                  </button>

                  {CONCERN_CATEGORIES.map(cat => {
                    const isSelected = selectedConcern === cat.slug;
                    const count = concernCounts[cat.slug] || 0;
                    return (
                      <button
                        key={cat.slug}
                        type="button"
                        onClick={() => setSelectedConcern(cat.slug)}
                        className={`px-1.5 py-1 rounded-lg text-[10.5px] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#16382B] text-white font-semibold shadow-2xs'
                            : 'bg-[#FAF8F5] text-[#264653] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                        }`}
                        title={language === 'ta' ? cat.titleTa : cat.title}
                      >
                        <span className="flex items-center gap-1 truncate min-w-0">
                          <span className={isSelected ? 'text-[#DFB36C]' : 'text-[#8A9B93] shrink-0'}>
                            {getConcernIcon(cat.slug)}
                          </span>
                          <span className="truncate">{language === 'ta' ? cat.titleTa : cat.title}</span>
                        </span>
                        <span className={`text-[9px] px-1 py-0.2 rounded shrink-0 ml-0.5 ${
                          isSelected ? 'bg-white/20 text-white' : 'text-[#8A9B93]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range (Compact 2x2 Segmented Grid) */}
              <div className="pt-2.5 border-t border-[#16382B]/10">
                <label className="text-[10px] uppercase font-bold text-[#8A9B93] tracking-wider block mb-1.5">
                  {t('Price Range', 'விலை வரம்பு')}
                </label>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setPriceRange('all')}
                    className={`px-1.5 py-1 rounded-lg text-[10.5px] font-medium text-center transition-colors cursor-pointer ${
                      priceRange === 'all'
                        ? 'bg-[#16382B] text-white font-semibold'
                        : 'bg-[#FAF8F5] text-[#3D5A68] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                    }`}
                  >
                    {t('All Prices', 'அனைத்தும்')}
                  </button>

                  <button
                    type="button"
                    onClick={() => setPriceRange('under-200')}
                    className={`px-1.5 py-1 rounded-lg text-[10.5px] font-medium text-center transition-colors cursor-pointer ${
                      priceRange === 'under-200'
                        ? 'bg-[#16382B] text-white font-semibold'
                        : 'bg-[#FAF8F5] text-[#3D5A68] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                    }`}
                  >
                    {t('< ₹200', '₹200க்குள்')} ({priceCounts['under-200']})
                  </button>

                  <button
                    type="button"
                    onClick={() => setPriceRange('200-300')}
                    className={`px-1.5 py-1 rounded-lg text-[10.5px] font-medium text-center transition-colors cursor-pointer ${
                      priceRange === '200-300'
                        ? 'bg-[#16382B] text-white font-semibold'
                        : 'bg-[#FAF8F5] text-[#3D5A68] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                    }`}
                  >
                    ₹200 - ₹300 ({priceCounts['200-300']})
                  </button>

                  <button
                    type="button"
                    onClick={() => setPriceRange('above-300')}
                    className={`px-1.5 py-1 rounded-lg text-[10.5px] font-medium text-center transition-colors cursor-pointer ${
                      priceRange === 'above-300'
                        ? 'bg-[#16382B] text-white font-semibold'
                        : 'bg-[#FAF8F5] text-[#3D5A68] hover:bg-[#E8F1EB] border border-[#16382B]/10'
                    }`}
                  >
                    {t('> ₹300', '₹300+')} ({priceCounts['above-300']})
                  </button>
                </div>
              </div>

              {/* In-Stock Toggle */}
              <div className="pt-2.5 border-t border-[#16382B]/10 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#264653]">
                  {t('In-Stock Only', 'இருப்பில் உள்ளவை')}
                </span>
                <button
                  type="button"
                  onClick={() => setInStockOnly(!inStockOnly)}
                  className={`w-7 h-4 rounded-full p-0.5 transition-colors cursor-pointer ${
                    inStockOnly ? 'bg-[#16382B]' : 'bg-[#16382B]/20'
                  }`}
                  aria-label="Toggle in-stock only"
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-white transition-transform ${
                      inStockOnly ? 'translate-x-3' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Fast Delivery Assurance */}
              <div className="pt-2.5 border-t border-[#16382B]/10">
                <div className="w-full py-1.5 px-2 rounded-lg bg-[#E8F1EB] text-[#16382B] text-[10.5px] font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#C29043]" />
                    <span>{t('Free TN Shipping on ₹500+', '₹500+ ஆர்டருக்கு இலவச டெலிவரி')}</span>
                  </span>
                  <span className="text-[9px] bg-white px-1.5 py-0.2 rounded font-bold text-emerald-800">TN</span>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT PRODUCT CATALOG WORKSPACE */}
          <div className="lg:col-span-9 space-y-4 sm:space-y-5">
            {/* STICKY TOP INTERACTIVE CONTROL BAR (Locks in View at top-[86px] mobile / top-[128px] desktop) */}
            <div className="sticky top-[86px] md:top-[128px] z-20 bg-[#FAF8F5]/95 backdrop-blur-md pb-2 -mt-1 pt-1">
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-2.5">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
                  {/* In-Page Live Search Box */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9B93]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder={t(
                        `Search ${PRODUCTS.length} formulations by name, Tamil name, or herbs...`,
                        `மருந்தின் பெயர், தமிழ் பெயர், மூலிகைகள் தேட...`
                      )}
                      className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B] placeholder:text-[#8A9B93] focus:outline-none focus:border-[#16382B] focus:ring-1 focus:ring-[#16382B]/20 transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A9B93] hover:text-[#16382B] p-1 cursor-pointer"
                        title="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Right controls: Mobile filter trigger + Sort + Items Per Page + View Mode */}
                  <div className="flex items-center gap-1.5 sm:gap-2 justify-between sm:justify-end flex-wrap sm:flex-nowrap">
                    {/* Mobile Filter Button */}
                    <button
                      type="button"
                      onClick={() => setShowMobileFilter(true)}
                      className="lg:hidden flex-1 sm:flex-initial py-2 px-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/15 text-xs font-semibold text-[#16382B] flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#E8F1EB] transition-colors active:scale-98 shadow-2xs"
                    >
                      <Filter className="w-3.5 h-3.5 text-[#C29043]" />
                      <span>{t('Filter', 'வடிகட்டு')}</span>
                      {activeFiltersCount > 0 && (
                        <span className="w-4 h-4 rounded-full bg-[#16382B] text-white text-[10px] flex items-center justify-center font-bold">
                          {activeFiltersCount}
                        </span>
                      )}
                    </button>

                    {/* Sort Dropdown */}
                    <div className="flex-1 sm:flex-initial flex items-center gap-1 bg-[#FAF8F5] px-2 py-1 rounded-xl border border-[#16382B]/15 shadow-2xs">
                      <ArrowUpDown className="w-3.5 h-3.5 text-[#8A9B93] hidden sm:block flex-shrink-0" />
                      <select
                        value={sortBy}
                        onChange={e => setSortBy(e.target.value as SortOption)}
                        className="w-full sm:w-auto text-xs py-1 bg-transparent text-[#16382B] font-medium outline-none cursor-pointer"
                        aria-label="Sort Formulations"
                      >
                        {sortOptions.map(s => (
                          <option key={s.id} value={s.id}>
                            {language === 'ta' ? s.labelTa : s.labelEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Items Per Page Selector */}
                    <div className="hidden sm:flex items-center gap-1 bg-[#FAF8F5] px-2 py-1 rounded-xl border border-[#16382B]/15 shadow-2xs text-xs text-[#264653]">
                      <span className="text-[10.5px] text-[#8A9B93]">{t('Per page:', 'பக்கம்:')}</span>
                      <select
                        value={itemsPerPage}
                        onChange={e => setItemsPerPage(Number(e.target.value))}
                        className="text-xs bg-transparent text-[#16382B] font-bold outline-none cursor-pointer"
                        aria-label="Items per page"
                      >
                        {ITEMS_PER_PAGE_OPTIONS.map(num => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center bg-[#FAF8F5] p-0.5 rounded-xl border border-[#16382B]/15 flex-shrink-0 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => setViewMode('grid')}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          viewMode === 'grid'
                            ? 'bg-[#16382B] text-white shadow-2xs'
                            : 'text-[#8A9B93] hover:text-[#16382B]'
                        }`}
                        title="Grid View"
                        aria-label="Grid View"
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode('list')}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          viewMode === 'list'
                            ? 'bg-[#16382B] text-white shadow-2xs'
                            : 'text-[#8A9B93] hover:text-[#16382B]'
                        }`}
                        title="List View"
                        aria-label="List View"
                      >
                        <LayoutList className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Active Filter Chips Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#16382B]/10 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[#3D5A68] font-medium mr-1 text-[11px] sm:text-xs">
                      {totalItems > 0 ? (
                        t(
                          `Showing ${startIndex + 1}–${endIndex} of ${totalItems} formulations`,
                          `${startIndex + 1}–${endIndex} / ${totalItems} சித்த மருந்துகள்`
                        )
                      ) : (
                        t('0 formulations found', '0 மருந்துகள் கண்டறியப்பட்டன')
                      )}
                    </span>

                    {/* Formulation Chip */}
                    {selectedFormulation !== 'all' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] font-semibold text-[11px] border border-[#16382B]/10">
                        <span>{selectedFormulation}</span>
                        <button
                          type="button"
                          onClick={() => setSelectedFormulation('all')}
                          className="hover:text-red-600 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {/* Concern Chip */}
                    {selectedConcern !== 'all' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] font-semibold text-[11px] border border-[#16382B]/10">
                        <span>{CONCERN_CATEGORIES.find(c => c.slug === selectedConcern)?.title || selectedConcern}</span>
                        <button
                          type="button"
                          onClick={() => setSelectedConcern('all')}
                          className="hover:text-red-600 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {/* Price Chip */}
                    {priceRange !== 'all' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] font-semibold text-[11px] border border-[#16382B]/10">
                        <span>
                          {priceRange === 'under-200' ? '< ₹200' : priceRange === '200-300' ? '₹200 - ₹300' : '> ₹300'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setPriceRange('all')}
                          className="hover:text-red-600 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {/* In Stock Chip */}
                    {inStockOnly && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8F1EB] text-[#16382B] font-semibold text-[11px] border border-[#16382B]/10">
                        <span>In-Stock Only</span>
                        <button
                          type="button"
                          onClick={() => setInStockOnly(false)}
                          className="hover:text-red-600 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}

                    {/* Search Query Chip */}
                    {searchQuery && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#C29043]/15 text-[#16382B] font-semibold text-[11px] border border-[#C29043]/30">
                        <span>&quot;{searchQuery}&quot;</span>
                        <button
                          type="button"
                          onClick={() => setSearchQuery('')}
                          className="hover:text-red-600 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>

                  {activeFiltersCount > 0 && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-xs text-[#C29043] font-bold hover:underline cursor-pointer ml-auto flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>{t('Clear All Filters', 'அனைத்தையும் நீக்கு')}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* PRODUCT CATALOG RESULTS */}
            {totalItems === 0 ? (
              /* Elevated Empty State */
              <div className="text-center py-16 px-6 bg-white rounded-2xl border border-[#16382B]/10 space-y-4 shadow-xs">
                <div className="w-14 h-14 rounded-full bg-[#E8F1EB] text-[#16382B] flex items-center justify-center mx-auto">
                  <Leaf className="w-7 h-7 text-[#C29043]" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B]">
                    {t('No Formulations Matched Your Criteria', 'பொருந்தும் சித்த மருந்துகள் எதுவும் இல்லை')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D5A68] mt-1 max-w-md mx-auto">
                    {t(
                      'Try clearing your search query, switching formulation filters, or resetting price thresholds.',
                      'தேடல் சொல்லை நீக்கவோ அல்லது வேறு மருந்து வடிவத்தை தேர்ந்தெடுக்கவோ முயற்சி செய்யுங்கள்.'
                    )}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="px-5 py-2 rounded-full bg-[#16382B] text-white text-xs font-semibold hover:bg-[#16382B]/90 transition-colors cursor-pointer"
                  >
                    {t('Reset All Filters', 'அனைத்து வடிகட்டிகளையும் நீக்கு')}
                  </button>
                  <button
                    type="button"
                    onClick={() => { resetFilters(); setSelectedFormulation('Chooranam'); }}
                    className="px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#16382B]/15 text-xs font-medium text-[#16382B] hover:bg-[#E8F1EB] cursor-pointer"
                  >
                    {t('Browse Chooranam', 'சூரணம் பார்க்க')}
                  </button>
                </div>
              </div>
            ) : viewMode === 'grid' ? (
              /* Standard 3-Column Desktop / 2-Column Mobile Grid */
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
                {paginatedProducts.map(prod => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              /* Detailed Clinical List View */
              <div className="space-y-3">
                {paginatedProducts.map(prod => (
                  <div
                    key={prod.id}
                    className="group bg-white rounded-2xl border border-[#16382B]/10 hover:border-[#C29043]/50 transition-all duration-200 p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xs hover:shadow-sm"
                  >
                    {/* Left: Thumbnail & Badges */}
                    <div className="flex items-center gap-3.5 flex-1 min-w-0">
                      <Link
                        href={`/product/${prod.slug}`}
                        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 flex-shrink-0 p-2 flex items-center justify-center overflow-hidden group-hover:bg-[#F4EFEA] transition-colors"
                      >
                        <Image
                          src={prod.image || '/images/ruthra-icon.png'}
                          alt={prod.name}
                          width={80}
                          height={80}
                          className="object-contain max-h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute bottom-1 left-1 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-sm bg-white/95 border border-[#C29043]/30 text-[#16382B]">
                          {prod.formulation}
                        </span>
                      </Link>

                      {/* Center Info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[10px] text-[#8A9B93] mb-0.5">
                          <span>{language === 'ta' ? prod.packSizeTa : prod.packSize}</span>
                          <span>•</span>
                          <span className="text-[#C29043] font-medium">
                            {language === 'ta' ? 'சித்த தயாரிப்பு' : 'Classical Siddha'}
                          </span>
                        </div>

                        <Link href={`/product/${prod.slug}`}>
                          <h3 className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B] group-hover:text-[#C29043] transition-colors truncate">
                            {language === 'ta' ? prod.tamilName : prod.name}
                          </h3>
                        </Link>

                        <p className="text-[11px] text-[#3D5A68] line-clamp-1 mt-0.5">
                          {language === 'ta' ? prod.traditionalRoleTa : prod.traditionalRole}
                        </p>

                        {/* Top ingredients pills preview */}
                        <div className="hidden sm:flex flex-wrap items-center gap-1.5 mt-2">
                          {prod.ingredients.slice(0, 3).map((ing, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#16382B]/10 text-[#3D5A68]"
                            >
                              {language === 'ta' ? ing.tamilName : ing.name}
                            </span>
                          ))}
                          {prod.ingredients.length > 3 && (
                            <span className="text-[9px] text-[#8A9B93]">
                              +{prod.ingredients.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right: Price & Add to Cart */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#16382B]/10 flex-shrink-0">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] uppercase text-[#8A9B93] font-medium block leading-none">
                          {t('Price', 'விலை')}
                        </span>
                        <span className="font-serif-brand text-lg font-bold text-[#16382B]">
                          ₹{prod.price}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(prod)}
                        className="py-2 px-4 rounded-xl bg-[#16382B] text-white hover:bg-[#C29043] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{t('Add to Cart', 'சேர்')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SCALABLE PAGINATION & BATCH CONTROLS (Seamlessly navigates 1,000+ items) */}
            {totalPages > 1 && (
              <div className="bg-white rounded-2xl border border-[#16382B]/10 p-4 sm:p-5 shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  {/* Progress info */}
                  <div className="text-[#3D5A68] text-center sm:text-left">
                    <span className="font-semibold text-[#16382B]">
                      {t(`Page ${currentPage} of ${totalPages}`, `பக்கம் ${currentPage} / ${totalPages}`)}
                    </span>
                    <span className="mx-2 text-[#8A9B93]">•</span>
                    <span>
                      {t(
                        `Showing ${startIndex + 1}–${endIndex} of ${totalItems} products`,
                        `${totalItems} மருந்துகளில் ${startIndex + 1}–${endIndex}`
                      )}
                    </span>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-1.5">
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
                                    ? 'bg-[#16382B] text-white shadow-xs'
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

                {/* Visual Progress Bar */}
                <div className="w-full bg-[#FAF8F5] h-1.5 rounded-full overflow-hidden border border-[#16382B]/10">
                  <div
                    className="bg-[#C29043] h-full transition-all duration-300"
                    style={{ width: `${(endIndex / totalItems) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* 5+1 & 10+2 Volume Scheme Spotlight Strip */}
            <div className="mt-8 bg-gradient-to-r from-[#16382B] via-[#1E4D3B] to-[#16382B] text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#C29043]/30 shadow-md relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 z-10 max-w-xl text-center sm:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C29043] text-[#16382B] text-[10px] font-bold uppercase tracking-wider">
                  {t('Classical Volume Scheme', 'இலவச சித்த மருந்து திட்டம்')}
                </span>
                <h4 className="font-serif-brand font-bold text-lg sm:text-xl text-white">
                  {t('5+1 & 10+2 Customer-Choice Free Medicines', '5+1 & 10+2 இலவச மருந்து திட்டம்')}
                </h4>
                <p className="text-xs text-[#FAF8F5]/85 leading-relaxed">
                  {t(
                    'Order any 5 or more products in your cart to select 100% FREE bonus formulations across all 176 items.',
                    'எந்தவொரு 5 மருந்துகளை வாங்கும் போதும் உங்களுக்கு விருப்பமான 1 மருந்து முற்றிலும் இலவசமாக தேர்வு செய்யலாம்.'
                  )}
                </p>
              </div>

              <div className="flex items-center gap-4 z-10 flex-shrink-0">
                <Link
                  href="/offers"
                  className="py-2.5 px-5 rounded-xl bg-[#DFB36C] hover:bg-[#C29043] text-[#16382B] text-xs font-bold transition-all shadow-xs"
                >
                  {t('Explore 5+1 Scheme Details', 'சலுகை விபரம் பார்க்க')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MOBILE NATIVE BOTTOM SHEET (FILTER MODAL) */}
      {showMobileFilter && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs transition-opacity lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Filter Formulations"
        >
          {/* Backdrop click to dismiss */}
          <div className="flex-1" onClick={() => setShowMobileFilter(false)} />

          {/* Native Bottom Sheet Container */}
          <div className="w-full max-h-[85vh] bg-[#FAF8F5] rounded-t-3xl shadow-2xl flex flex-col border-t border-[#16382B]/10 animate-in slide-in-from-bottom duration-250">
            {/* Top Native Grab Handle */}
            <div className="pt-2.5 pb-1 flex justify-center">
              <div className="w-10 h-1 rounded-full bg-[#16382B]/20" />
            </div>

            {/* Bottom Sheet Header */}
            <div className="px-5 py-3 bg-white border-b border-[#16382B]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#C29043]" />
                <h3 className="font-serif-brand text-base font-bold text-[#16382B]">
                  {t('Filter Catalog', 'வடிகட்டுதல்')}
                </h3>
                {activeFiltersCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#16382B] text-white text-[10px] font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowMobileFilter(false)}
                className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#8A9B93] hover:text-[#16382B] cursor-pointer"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Filter Options */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {/* Formulation Type */}
              <div>
                <label className="text-xs uppercase font-bold text-[#8A9B93] tracking-wider block mb-2.5">
                  {t('Formulation Type', 'மருந்து வடிவம்')}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedFormulation('all')}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left flex items-center justify-between transition-all ${
                      selectedFormulation === 'all'
                        ? 'bg-[#16382B] text-white shadow-xs'
                        : 'bg-white border border-[#16382B]/10 text-[#264653]'
                    }`}
                  >
                    <span>{t('All Forms', 'அனைத்தும்')}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedFormulation === 'all' ? 'bg-[#C29043] text-[#16382B] font-bold' : 'bg-[#16382B]/10 text-[#16382B]'
                    }`}>
                      {formulationCounts.all}
                    </span>
                  </button>
                  {FORMULATION_CATEGORIES.map(form => {
                    const isSelected = selectedFormulation === form.formulation;
                    const count = formulationCounts[form.formulation] || 0;
                    return (
                      <button
                        key={form.slug}
                        type="button"
                        onClick={() => setSelectedFormulation(form.formulation)}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-left flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-[#16382B] text-white shadow-xs'
                            : 'bg-white border border-[#16382B]/10 text-[#264653]'
                        }`}
                      >
                        <span className="truncate">{language === 'ta' ? form.titleTa : form.title}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected ? 'bg-[#C29043] text-[#16382B] font-bold' : 'bg-[#16382B]/10 text-[#16382B]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Health & Wellness Concerns */}
              <div className="pt-4 border-t border-[#16382B]/10">
                <label className="text-xs uppercase font-bold text-[#8A9B93] tracking-wider block mb-2.5">
                  {t('Wellness Concern', 'உபாதைகள்')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedConcern('all')}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left flex items-center justify-between transition-all ${
                      selectedConcern === 'all'
                        ? 'bg-[#16382B] text-white shadow-xs'
                        : 'bg-white border border-[#16382B]/10 text-[#264653]'
                    }`}
                  >
                    <span>{t('All Concerns', 'அனைத்து உபாதைகள்')}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedConcern === 'all' ? 'bg-[#C29043] text-[#16382B] font-bold' : 'bg-[#16382B]/10 text-[#16382B]'
                    }`}>
                      {concernCounts.all}
                    </span>
                  </button>
                  {CONCERN_CATEGORIES.map(cat => {
                    const isSelected = selectedConcern === cat.slug;
                    const count = concernCounts[cat.slug] || 0;
                    return (
                      <button
                        key={cat.slug}
                        type="button"
                        onClick={() => setSelectedConcern(cat.slug)}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-left flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-[#16382B] text-white shadow-xs'
                            : 'bg-white border border-[#16382B]/10 text-[#264653]'
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span className={isSelected ? 'text-[#DFB36C]' : 'text-[#8A9B93]'}>
                            {getConcernIcon(cat.slug)}
                          </span>
                          <span className="truncate">{language === 'ta' ? cat.titleTa : cat.title}</span>
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected ? 'bg-[#C29043] text-[#16382B] font-bold' : 'bg-[#16382B]/10 text-[#16382B]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div className="pt-4 border-t border-[#16382B]/10">
                <label className="text-xs uppercase font-bold text-[#8A9B93] tracking-wider block mb-2.5">
                  {t('Price Range', 'விலை வரம்பு')}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPriceRange('all')}
                    className={`p-2.5 rounded-xl text-xs font-medium text-center ${
                      priceRange === 'all' ? 'bg-[#16382B] text-white font-semibold' : 'bg-white border border-[#16382B]/10 text-[#264653]'
                    }`}
                  >
                    {t('All Prices', 'அனைத்தும்')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPriceRange('under-200')}
                    className={`p-2.5 rounded-xl text-xs font-medium text-center ${
                      priceRange === 'under-200' ? 'bg-[#16382B] text-white font-semibold' : 'bg-white border border-[#16382B]/10 text-[#264653]'
                    }`}
                  >
                    {t('Under ₹200', '₹200க்குள்')} ({priceCounts['under-200']})
                  </button>
                  <button
                    type="button"
                    onClick={() => setPriceRange('200-300')}
                    className={`p-2.5 rounded-xl text-xs font-medium text-center ${
                      priceRange === '200-300' ? 'bg-[#16382B] text-white font-semibold' : 'bg-white border border-[#16382B]/10 text-[#264653]'
                    }`}
                  >
                    ₹200 - ₹300 ({priceCounts['200-300']})
                  </button>
                  <button
                    type="button"
                    onClick={() => setPriceRange('above-300')}
                    className={`p-2.5 rounded-xl text-xs font-medium text-center ${
                      priceRange === 'above-300' ? 'bg-[#16382B] text-white font-semibold' : 'bg-white border border-[#16382B]/10 text-[#264653]'
                    }`}
                  >
                    {t('Above ₹300', '₹300க்கு மேல்')} ({priceCounts['above-300']})
                  </button>
                </div>
              </div>

              {/* In-Stock Only Switch */}
              <div className="pt-4 border-t border-[#16382B]/10 flex items-center justify-between bg-white p-3.5 rounded-2xl border border-[#16382B]/10">
                <span className="text-xs font-bold text-[#16382B]">
                  {t('In-Stock Formulations Only', 'இருப்பில் உள்ளவை மட்டும்')}
                </span>
                <button
                  type="button"
                  onClick={() => setInStockOnly(!inStockOnly)}
                  className={`w-10 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                    inStockOnly ? 'bg-[#16382B]' : 'bg-[#16382B]/20'
                  }`}
                  aria-label="Toggle in-stock only"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      inStockOnly ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Sticky Native Bottom Actions */}
            <div className="p-4 bg-white border-t border-[#16382B]/10 flex items-center gap-3 pb-6">
              <button
                type="button"
                onClick={resetFilters}
                className="flex-1 py-3 px-4 rounded-xl border border-[#16382B]/20 text-xs font-semibold text-[#16382B] text-center hover:bg-[#FAF8F5] active:scale-95 transition-all cursor-pointer"
              >
                {t('Reset All', 'மீட்டமை')}
              </button>
              <button
                type="button"
                onClick={() => setShowMobileFilter(false)}
                className="flex-[2] py-3 px-4 rounded-xl bg-[#16382B] text-white text-xs font-bold text-center hover:bg-[#204C3B] active:scale-95 transition-all shadow-md cursor-pointer"
              >
                {t(`Show ${totalItems} Formulations`, `${totalItems} மருந்துகளைக் காட்டு`)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. BOTTOM PHARMACOPEIA TRUST & DISPATCH STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-20">
        <div className="bg-white rounded-3xl border border-[#16382B]/10 p-6 sm:p-8 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C29043]">
              {t('Siddha Pharmacopeia Assurance', 'சித்த மருந்தக உத்தரவாதம்')}
            </span>
            <h3 className="font-serif-brand text-lg sm:text-xl font-bold text-[#16382B] mt-1">
              {t('Standardized Preparation & Direct Dispatch', 'தரமான தயாரிப்பு & நேரடி அஞ்சல்')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs text-[#3D5A68]">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/5 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#E8F1EB] text-[#16382B] flex items-center justify-center font-bold">
                <Leaf className="w-4 h-4 text-[#16382B]" />
              </div>
              <h4 className="font-bold text-[#16382B] text-sm">{t('Shodhana Purification', 'சுத்தி செய்யப்பட்ட மூலிகைகள்')}</h4>
              <p className="text-[11px] leading-relaxed">
                {t(
                  'Every botanical undergoes classical cleansing with goat milk, tender coconut water, or lime water.',
                  'பாரம்பரிய சுத்தி முறைகளின்படி பக்குவப்படுத்தப்பட்ட மூலிகைகள் மட்டுமே பயன்படுத்தப்படுகின்றன.'
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/5 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#E8F1EB] text-[#16382B] flex items-center justify-center font-bold">
                <Truck className="w-4 h-4 text-[#16382B]" />
              </div>
              <h4 className="font-bold text-[#16382B] text-sm">{t('All 38 TN Districts', '38 மாவட்டங்களுக்கும் அஞ்சல்')}</h4>
              <p className="text-[11px] leading-relaxed">
                {t(
                  'Dispatched within 24-48 hours via Tamil Nadu Express Courier with live SMS tracking.',
                  '24-48 மணிநேரத்தில் தமிழ்நாடு விரைவு அஞ்சல் மூலம் அனுப்பி வைக்கப்படுகிறது.'
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/5 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#E8F1EB] text-[#16382B] flex items-center justify-center font-bold">
                <PackageCheck className="w-4 h-4 text-[#16382B]" />
              </div>
              <h4 className="font-bold text-[#16382B] text-sm">{t('Tamper-Evident Pack', 'பாதுகாப்பான பொட்டலம்')}</h4>
              <p className="text-[11px] leading-relaxed">
                {t(
                  'Moisture-shielded sachets and medical amber bottles to preserve essential volatile oils.',
                  'மூலிகை வீரியம் குறையாமல் இருக்க ஈரப்பதம் புகாத சிறப்பு பொட்டலங்கள்.'
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/5 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#E8F1EB] text-[#16382B] flex items-center justify-center font-bold">
                <Truck className="w-4 h-4 text-[#16382B]" />
              </div>
              <h4 className="font-bold text-[#16382B] text-sm">{t('All 38 TN Districts', '38 மாவட்டங்களுக்கும் டெலிவரி')}</h4>
              <p className="text-[11px] leading-relaxed">
                {t(
                  'Orders packed within 24 hours with reliable courier dispatch and tracking.',
                  '24 மணி நேரத்தில் அனுப்பப்பட்டு தமிழகம் முழுவதும் விரைவான விநியோகம்.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Fallback skeleton while Suspense resolves
function ShopLoadingSkeleton() {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-10 px-4 max-w-7xl mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 rounded-lg w-64 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-96 mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="hidden lg:block lg:col-span-3 h-96 bg-gray-200 rounded-2xl" />
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-72 bg-gray-200 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoadingSkeleton />}>
      <ShopContent />
    </Suspense>
  );
}
