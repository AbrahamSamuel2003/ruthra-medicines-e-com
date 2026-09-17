'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  ExternalLink, 
  Check, 
  X, 
  Loader2, 
  Package, 
  Database,
  Sparkles,
  Layers,
  FolderPlus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Tag,
  Upload,
  Image as ImageIcon,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  Camera,
  Link2
} from 'lucide-react';
import { Product, MedicalSystem } from '@/types/product';

interface CategoryItem {
  id: string;
  slug: string;
  title: string;
  titleTa: string;
  medicalSystem: string;
  description?: string;
  itemCount: number;
}

const INITIAL_NEW_PRODUCT: Partial<Product> = {
  name: '',
  tamilName: '',
  slug: '',
  medicalSystem: 'siddha',
  formulation: 'Chooranam',
  formulationTa: 'சூரணம்',
  packSize: '',
  packSizeTa: '',
  price: undefined,
  originalPrice: undefined,
  inStock: true,
  stock: 20,
  isComingSoon: false,
  featured: false,
  shortDescription: '',
  shortDescriptionTa: '',
  description: '',
  descriptionTa: '',
  image: '',
  images: [],
  concerns: []
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [medicalSystemFilter, setMedicalSystemFilter] = useState<'ALL' | 'SIDDHA' | 'AYURVEDA' | 'PROPRIETARY'>('ALL');
  const [selectedFormulation, setSelectedFormulation] = useState('ALL');
  const [viewMode, setViewMode] = useState<'grouped' | 'table'>('table');
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [validationAlert, setValidationAlert] = useState<{ title: string; message: string } | null>(null);

  // Drawer & Modal States
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [originalProductImage, setOriginalProductImage] = useState<string>('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imageTabMode, setImageTabMode] = useState<'upload' | 'url'>('upload');
  const [newProdImageTabMode, setNewProdImageTabMode] = useState<'upload' | 'url'>('upload');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // New Category Form State
  const [newCategory, setNewCategory] = useState({
    title: '',
    titleTa: '',
    slug: '',
    medicalSystem: 'SIDDHA',
    description: ''
  });

  // New Product Form State (Defaults to completely empty image and clean fields)
  const [newProduct, setNewProduct] = useState<Partial<Product>>(INITIAL_NEW_PRODUCT);

  // Fetch products & categories from PostgreSQL
  const loadData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes] = await Promise.all([
        fetch('/api/admin/products'),
        fetch('/api/admin/categories')
      ]);

      const prodData = await prodRes.json();
      const catData = await catRes.json();

      if (prodData.success && Array.isArray(prodData.products)) {
        setProducts(prodData.products);
      }
      if (catData.success && Array.isArray(catData.categories)) {
        setCategories(catData.categories);
      }
    } catch (err) {
      console.error('Failed to load data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle ESC key to dismiss any active drawer or modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (validationAlert) setValidationAlert(null);
        else if (editingProduct) setEditingProduct(null);
        else if (isAddingProduct) setIsAddingProduct(false);
        else if (isAddingCategory) setIsAddingCategory(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [validationAlert, editingProduct, isAddingProduct, isAddingCategory]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Toggle in-stock status directly in PostgreSQL
  const handleToggleStock = async (product: Product) => {
    try {
      setIsUpdating(product.id);
      const newStock = !product.inStock;
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inStock: newStock })
      });
      const data = await res.json();
      if (data.success) {
        setProducts(prev => prev.map(p => p.id === product.id ? { ...p, inStock: newStock } : p));
        showToast(`${product.name} is now ${newStock ? 'IN STOCK' : 'OUT OF STOCK'}`);
      } else {
        setValidationAlert({ title: 'Stock Update Failed', message: data.error || 'Failed to update stock.' });
      }
    } catch (err) {
      console.error(err);
      setValidationAlert({ title: 'Network Error', message: 'Network error updating stock.' });
    } finally {
      setIsUpdating(null);
    }
  };

  // Toggle Coming Soon status directly in PostgreSQL
  const handleToggleComingSoon = async (product: Product) => {
    try {
      setIsUpdating(product.id);
      const newStatus = !product.isComingSoon;
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isComingSoon: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setProducts(prev => prev.map(p => p.id === product.id ? { ...p, isComingSoon: newStatus } : p));
        showToast(`${product.name} marked as ${newStatus ? 'COMING SOON' : 'ACTIVE CATALOG'}`);
      } else {
        setValidationAlert({ title: 'Status Update Failed', message: data.error || 'Failed to update Coming Soon status.' });
      }
    } catch (err) {
      console.error(err);
      setValidationAlert({ title: 'Network Error', message: 'Network error updating Coming Soon status.' });
    } finally {
      setIsUpdating(null);
    }
  };

  // Open Product Edit Drawer with initial image tracking
  const handleOpenEdit = (product: Product) => {
    setEditingProduct({ ...product });
    setOriginalProductImage(product.image || '');
    setImageTabMode('upload');
  };

  // Open Add Product Modal with clean fresh state
  const handleOpenAddProduct = () => {
    setNewProduct({ ...INITIAL_NEW_PRODUCT });
    setNewProdImageTabMode('upload');
    setIsAddingProduct(true);
  };

  // Image Upload Handler
  const handleImageUpload = async (file: File, isNew = false) => {
    try {
      setIsUploadingImage(true);
      const formData = new FormData();
      formData.append('file', file);
      
      const slug = isNew 
        ? (newProduct.slug || newProduct.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'new-sku')
        : (editingProduct?.slug || 'sku');
        
      formData.append('slug', slug);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (data.success && data.url) {
        if (isNew) {
          setNewProduct(prev => ({ ...prev, image: data.url, images: [data.url] }));
        } else if (editingProduct) {
          setEditingProduct(prev => prev ? { 
            ...prev, 
            image: data.url,
            images: prev.images && prev.images.length > 0 ? [data.url, ...prev.images.slice(1)] : [data.url]
          } : null);
        }
        showToast('Image uploaded! Click Save to apply changes.');
      } else {
        alert(data.error || 'Failed to upload image');
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading image file');
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Save product edits to PostgreSQL
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    const stockNum = editingProduct.stock !== undefined ? Number(editingProduct.stock) : 20;
    if (isNaN(stockNum) || stockNum < 0) {
      setValidationAlert({
        title: 'Invalid Stock Count',
        message: 'Please enter a valid stock count (0 or higher). Negative stock values are not allowed.'
      });
      return;
    }

    try {
      setIsSaving(true);
      const productPayload = {
        ...editingProduct,
        stock: stockNum,
        inStock: stockNum > 0 ? Boolean(editingProduct.inStock) : false
      };

      const res = await fetch(`/api/admin/products/${editingProduct.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productPayload)
      });
      const data = await res.json();
      if (data.success) {
        setProducts(prev => prev.map(p => p.id === editingProduct.id ? data.product : p));
        showToast(`Successfully updated ${editingProduct.name}`);
        setEditingProduct(null);
      } else {
        setValidationAlert({ title: 'Save Failed', message: data.error || 'Failed to save product changes.' });
      }
    } catch (err) {
      console.error(err);
      setValidationAlert({ title: 'Network Error', message: 'Unable to connect to database server.' });
    } finally {
      setIsSaving(false);
    }
  };

  // Create new product in PostgreSQL
  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.tamilName || !newProduct.price) {
      setValidationAlert({
        title: 'Missing Required Fields',
        message: 'Please fill in the Product Name, Tamil Name, and Selling Price.'
      });
      return;
    }

    const stockNum = newProduct.stock !== undefined ? Number(newProduct.stock) : 20;
    if (isNaN(stockNum) || stockNum < 0) {
      setValidationAlert({
        title: 'Invalid Stock Count',
        message: 'Please enter a valid initial stock count (0 or higher).'
      });
      return;
    }

    try {
      setIsSaving(true);
      const slug = newProduct.slug || newProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const newId = `prod-${Date.now().toString().slice(-6)}`;
      
      const payload: Product = {
        id: newId,
        name: newProduct.name,
        tamilName: newProduct.tamilName,
        slug,
        medicalSystem: newProduct.medicalSystem || 'siddha',
        formulation: newProduct.formulation || 'Chooranam',
        formulationTa: newProduct.formulationTa || 'சூரணம்',
        packSize: newProduct.packSize || '100g',
        packSizeTa: newProduct.packSizeTa || '100 கிராம்',
        price: Number(newProduct.price),
        originalPrice: newProduct.originalPrice ? Number(newProduct.originalPrice) : undefined,
        shortDescription: newProduct.shortDescription || '',
        shortDescriptionTa: newProduct.shortDescriptionTa || '',
        description: newProduct.description || newProduct.shortDescription || '',
        descriptionTa: newProduct.descriptionTa || newProduct.shortDescriptionTa || '',
        traditionalRole: '',
        traditionalRoleTa: '',
        image: newProduct.image || '',
        images: newProduct.image ? [newProduct.image] : [],
        gallery: newProduct.image ? [newProduct.image] : [],
        inStock: stockNum > 0 ? (newProduct.inStock ?? true) : false,
        stock: stockNum,
        isComingSoon: Boolean(newProduct.isComingSoon),
        featured: Boolean(newProduct.featured),
        concerns: [],
        ingredients: [],
        howToUse: [],
        dosage: { morning: '', evening: '', timing: '', with: '' } as any,
        safety: { contraindications: '', precautions: '' } as any,
        storage: { temperature: 'Store in a cool, dry place', precautions: 'Keep away from direct sunlight' } as any,
        faqs: [],
        searchKeywords: [newProduct.name.toLowerCase(), slug],
        tamilKeywords: [newProduct.tamilName]
      };

      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'create', product: payload })
      });

      const data = await res.json();
      if (data.success && data.product) {
        setProducts(prev => [data.product, ...prev]);
        showToast(`Created ${payload.name} in catalog`);
        setIsAddingProduct(false);
        setNewProduct({ ...INITIAL_NEW_PRODUCT });
      } else {
        setValidationAlert({ title: 'Creation Failed', message: data.error || 'Failed to create product in database.' });
      }
    } catch (err) {
      console.error(err);
      setValidationAlert({ title: 'Network Error', message: 'Unable to connect to database server.' });
    } finally {
      setIsSaving(false);
    }
  };

  // Create new Category in PostgreSQL
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.title || !newCategory.titleTa) {
      alert('Please enter category title in English and Tamil');
      return;
    }

    try {
      setIsSaving(true);
      const slug = newCategory.slug || newCategory.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newCategory, slug })
      });
      const data = await res.json();
      if (data.success && data.category) {
        setCategories(prev => [...prev, data.category]);
        showToast(`Added new category: ${data.category.title}`);
        setIsAddingCategory(false);
        setNewCategory({ title: '', titleTa: '', slug: '', medicalSystem: 'SIDDHA', description: '' });
      } else {
        alert(data.error || 'Failed to create category');
      }
    } catch (err) {
      console.error(err);
      alert('Network error creating category');
    } finally {
      setIsSaving(false);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) return;

    try {
      setIsUpdating(id);
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProducts(prev => prev.filter(p => p.id !== id));
        showToast(`Deleted ${name} from database`);
      } else {
        alert(data.error || 'Failed to delete product');
      }
    } catch (err) {
      console.error(err);
      alert('Network error deleting product');
    } finally {
      setIsUpdating(null);
    }
  };

  // System Counts
  const counts = useMemo(() => {
    const siddha = products.filter(p => p.medicalSystem === 'siddha').length;
    const ayurveda = products.filter(p => p.medicalSystem === 'ayurveda').length;
    const prop = products.filter(p => p.medicalSystem === 'proprietary').length;
    return { all: products.length, siddha, ayurveda, prop };
  }, [products]);

  // Formulations list with real counts
  const formulations = useMemo(() => {
    let list = products;
    if (medicalSystemFilter !== 'ALL') {
      list = list.filter(p => (p.medicalSystem || 'siddha').toUpperCase() === medicalSystemFilter);
    }
    const map = new Map<string, number>();
    list.forEach(p => {
      map.set(p.formulation, (map.get(p.formulation) || 0) + 1);
    });

    const arr = Array.from(map.entries()).map(([form, count]) => ({ form, count }));
    return [{ form: 'ALL', count: list.length }, ...arr];
  }, [products, medicalSystemFilter]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSys = medicalSystemFilter === 'ALL' || (p.medicalSystem || 'siddha').toUpperCase() === medicalSystemFilter;
      const matchForm = selectedFormulation === 'ALL' || p.formulation === selectedFormulation;
      const q = search.toLowerCase().trim();
      const matchQuery = !q || 
        p.name.toLowerCase().includes(q) ||
        p.tamilName.includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q);
      return matchSys && matchForm && matchQuery;
    });
  }, [products, medicalSystemFilter, selectedFormulation, search]);

  // Grouped products by formulation
  const groupedProducts = useMemo(() => {
    const groups: Record<string, Product[]> = {};
    filteredProducts.forEach(p => {
      if (!groups[p.formulation]) groups[p.formulation] = [];
      groups[p.formulation].push(p);
    });
    return groups;
  }, [filteredProducts]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16382B] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#C29043]/40 animate-fade-in">
          <Sparkles className="w-5 h-5 text-[#C29043]" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* HEADER WITH ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold tracking-wider flex items-center gap-1">
              <Database className="w-3 h-3 text-emerald-600" />
              Live Catalog
            </span>
            <span className="text-xs text-[#8A9B93]">Status: <strong>Active</strong></span>
          </div>
          <h1 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#16382B] mt-1">
            Product &amp; Category CMS ({counts.all} SKUs)
          </h1>
          <p className="text-xs text-[#8A9B93] mt-0.5">
            Manage authentic formulations, prices, pack sizes, stock levels, and categories synchronized directly with the store.
          </p>
        </div>

        {/* TOP BUTTONS */}
        <div className="grid grid-cols-2 sm:flex items-center gap-2.5">
          <button
            onClick={() => setIsAddingCategory(true)}
            className="justify-center px-4 py-2.5 rounded-xl bg-white border border-[#16382B]/15 text-[#16382B] text-xs font-bold hover:bg-[#FAF8F5] transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <FolderPlus className="w-4 h-4 text-[#C29043]" />
            Add Category
          </button>
          <button
            onClick={handleOpenAddProduct}
            className="justify-center px-4 py-2.5 rounded-xl bg-[#16382B] text-white text-xs font-bold hover:bg-[#1f4e3c] transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#C29043]" />
            Add Product
          </button>
        </div>
      </div>

      {/* COMPACT ALL-IN-ONE CONTROL CENTER FOR MEDICAL SYSTEMS & FILTERS */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#16382B]/10 shadow-sm space-y-3">
        {/* 1. MEDICAL SYSTEM SELECTOR: COMPACT 4-GRID ON MOBILE, PILLS ON DESKTOP */}
        <div>
          {/* Mobile 4-Column Segmented Control (Zero Scroll, 100% Selectable) */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-[#FAF8F5] rounded-xl sm:hidden border border-[#16382B]/10">
            {[
              { key: 'ALL', shortLabel: 'All', count: counts.all },
              { key: 'SIDDHA', shortLabel: 'Siddha', count: counts.siddha },
              { key: 'AYURVEDA', shortLabel: 'Ayurveda', count: counts.ayurveda },
              { key: 'PROPRIETARY', shortLabel: 'Prop.', count: counts.prop },
            ].map(tab => (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setMedicalSystemFilter(tab.key as any);
                  setSelectedFormulation('ALL');
                }}
                className={`py-2 px-1 rounded-lg text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  medicalSystemFilter === tab.key
                    ? 'bg-[#16382B] text-white shadow-xs font-bold'
                    : 'text-[#5C7368] hover:text-[#16382B] hover:bg-white/60'
                }`}
              >
                <span className="text-[11px] leading-tight font-bold">{tab.shortLabel}</span>
                <span className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-mono ${
                  medicalSystemFilter === tab.key ? 'bg-white/20 text-white font-bold' : 'text-[#8A9B93]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Desktop Pills Layout (md: and above) */}
          <div className="hidden sm:flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { key: 'ALL', label: 'All Products', count: counts.all },
                { key: 'SIDDHA', label: 'Siddha Formulations', count: counts.siddha },
                { key: 'AYURVEDA', label: 'Ayurveda Formulations', count: counts.ayurveda },
                { key: 'PROPRIETARY', label: 'Proprietary Range', count: counts.prop },
              ].map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setMedicalSystemFilter(tab.key as any);
                    setSelectedFormulation('ALL');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    medicalSystemFilter === tab.key
                      ? 'bg-[#16382B] text-white shadow-xs'
                      : 'text-[#5C7368] hover:text-[#16382B] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    medicalSystemFilter === tab.key ? 'bg-white/20 text-white' : 'bg-[#FAF8F5] text-[#16382B]'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop View Mode Toggle */}
            <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#16382B]/10">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-[#16382B] text-white' : 'text-[#5C7368]'
                }`}
              >
                Table View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grouped')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === 'grouped' ? 'bg-[#16382B] text-white' : 'text-[#5C7368]'
                }`}
              >
                Grouped View
              </button>
            </div>
          </div>
        </div>

        {/* 2. SEARCH BAR */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-[#8A9B93] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by English name, Tamil (தமிழ்), SKU, or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 text-xs rounded-xl sm:rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 focus:border-[#C29043] focus:outline-none text-[#16382B]"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8A9B93] hover:text-[#16382B] cursor-pointer"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 3. MOBILE CONTROLS BAR: FORMULATION DROPDOWN + VIEW TOGGLE (ZERO HORIZONTAL SCROLL) */}
        <div className="grid grid-cols-1 sm:hidden gap-2 pt-1 border-t border-[#16382B]/10">
          <div className="grid grid-cols-2 gap-2">
            {/* Compact Formulation Dropdown */}
            <div className="relative">
              <select
                value={selectedFormulation}
                onChange={(e) => setSelectedFormulation(e.target.value)}
                className="w-full pl-2.5 pr-7 py-2 rounded-xl bg-[#FAF8F5] border border-[#16382B]/15 text-xs font-bold text-[#16382B] appearance-none focus:outline-none focus:border-[#C29043] cursor-pointer truncate"
              >
                {formulations.map(({ form, count }) => (
                  <option key={form} value={form}>
                    {form === 'ALL' ? `All Formulations (${count})` : `${form} (${count})`}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#8A9B93] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Compact Mobile View Toggle */}
            <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#16382B]/10">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-colors cursor-pointer text-center ${
                  viewMode === 'table' ? 'bg-[#16382B] text-white shadow-2xs' : 'text-[#5C7368]'
                }`}
              >
                Flat
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grouped')}
                className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-colors cursor-pointer text-center ${
                  viewMode === 'grouped' ? 'bg-[#16382B] text-white shadow-2xs' : 'text-[#5C7368]'
                }`}
              >
                Grouped
              </button>
            </div>
          </div>

          {/* Results Summary and Reset */}
          <div className="flex items-center justify-between text-[11px] text-[#5C7368] px-1 pt-0.5">
            <span>
              Showing <strong>{filteredProducts.length}</strong> of {counts.all} formulations
            </span>
            {(selectedFormulation !== 'ALL' || search || medicalSystemFilter !== 'ALL') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedFormulation('ALL');
                  setSearch('');
                  setMedicalSystemFilter('ALL');
                }}
                className="text-[#C29043] font-bold hover:underline cursor-pointer flex items-center gap-1"
              >
                <RefreshCw className="w-2.5 h-2.5" />
                Reset All
              </button>
            )}
          </div>
        </div>

        {/* 4. DESKTOP FORMULATION CHIPS (sm: and above) */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none border-t border-[#16382B]/10">
          <Filter className="w-3.5 h-3.5 text-[#8A9B93] shrink-0 mr-1" />
          {formulations.map(({ form, count }) => (
            <button
              key={form}
              type="button"
              onClick={() => setSelectedFormulation(form)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 ${
                selectedFormulation === form
                  ? 'bg-[#C29043] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#3D5A68] hover:bg-[#E8F1EB] hover:text-[#16382B]'
              }`}
            >
              <span>{form}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedFormulation === form ? 'bg-black/20 text-white' : 'bg-white text-[#5C7368]'
              }`}>
                {count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS DISPLAY CONTAINER */}
      {loading ? (
        <div className="py-24 bg-white rounded-2xl sm:rounded-3xl border border-[#16382B]/10 flex flex-col items-center justify-center gap-3 text-[#5C7368]">
          <Loader2 className="w-8 h-8 animate-spin text-[#C29043]" />
          <span className="text-xs font-medium">Fetching catalog from database...</span>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="py-16 bg-white rounded-2xl sm:rounded-3xl border border-[#16382B]/10 text-center text-[#8A9B93] text-xs">
          No formulations match your search criteria.
        </div>
      ) : viewMode === 'grouped' ? (
        /* GROUPED BY CATEGORY VIEW */
        <div className="space-y-6">
          {Object.entries(groupedProducts).map(([formulationName, prods]) => (
            <div key={formulationName} className="bg-white rounded-2xl sm:rounded-3xl border border-[#16382B]/10 shadow-sm overflow-hidden">
              <div className="bg-[#FAF8F5] px-4 sm:px-6 py-3.5 border-b border-[#16382B]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#C29043]" />
                  <h2 className="text-sm font-serif-brand font-bold text-[#16382B]">{formulationName}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#16382B]/10 text-[#16382B] text-[11px] font-mono font-bold">
                    {prods.length} SKUs
                  </span>
                </div>
              </div>

              {/* Mobile Card List (< md) */}
              <div className="p-3 space-y-3 md:hidden bg-[#FAF8F5]/40">
                {prods.map(p => (
                  <ProductMobileCard
                    key={p.id}
                    p={p}
                    isUpdating={isUpdating}
                    onToggleStock={handleToggleStock}
                    onToggleComingSoon={handleToggleComingSoon}
                    onEdit={handleOpenEdit}
                    onDelete={handleDeleteProduct}
                  />
                ))}
              </div>

              {/* Desktop Table View (>= md) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#16382B]/5 text-[10px] font-bold uppercase tracking-wider text-[#8A9B93]">
                      <th className="py-2.5 px-4">Product Name</th>
                      <th className="py-2.5 px-4">Pack Size</th>
                      <th className="py-2.5 px-4">Price (₹)</th>
                      <th className="py-2.5 px-4 text-center">Stock</th>
                      <th className="py-2.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#16382B]/5 text-xs text-[#16382B]">
                    {prods.map(p => (
                      <ProductTableRow
                        key={p.id}
                        p={p}
                        isUpdating={isUpdating}
                        onToggleStock={handleToggleStock}
                        onToggleComingSoon={handleToggleComingSoon}
                        onEdit={handleOpenEdit}
                        onDelete={handleDeleteProduct}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* FLAT VIEW */
        <div className="space-y-3">
          {/* Mobile Card List (< md) */}
          <div className="space-y-3 md:hidden">
            {filteredProducts.map((p) => (
              <ProductMobileCard
                key={p.id}
                p={p}
                isUpdating={isUpdating}
                onToggleStock={handleToggleStock}
                onToggleComingSoon={handleToggleComingSoon}
                onEdit={handleOpenEdit}
                onDelete={handleDeleteProduct}
              />
            ))}
          </div>

          {/* Desktop Flat Table (>= md) */}
          <div className="hidden md:block bg-white rounded-3xl border border-[#16382B]/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#16382B]/10 text-[11px] font-bold uppercase tracking-wider text-[#5C7368]">
                    <th className="py-3 px-4">Product Formulation</th>
                    <th className="py-3 px-4">System / Category</th>
                    <th className="py-3 px-4">Pack Size</th>
                    <th className="py-3 px-4">Price (₹)</th>
                    <th className="py-3 px-4 text-center">Stock & Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#16382B]/5 text-xs text-[#16382B]">
                  {filteredProducts.map((p) => (
                    <ProductTableRow
                      key={p.id}
                      p={p}
                      isUpdating={isUpdating}
                      onToggleStock={handleToggleStock}
                      onToggleComingSoon={handleToggleComingSoon}
                      onEdit={handleOpenEdit}
                      onDelete={handleDeleteProduct}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* EDIT PRODUCT DRAWER */}
      {editingProduct && (
        <div 
          onClick={() => setEditingProduct(null)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-end"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-slide-in-right"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#16382B]/10">
                <div>
                  <h2 className="text-lg font-serif-brand font-bold text-[#16382B]">Edit Product</h2>
                  <p className="text-xs text-[#8A9B93] font-mono">{editingProduct.id}</p>
                </div>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="p-2 rounded-xl hover:bg-[#FAF8F5] text-[#5C7368]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form id="edit-prod-form" onSubmit={handleSaveProduct} className="py-4 space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Product Name (English)</label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Tamil Name (தமிழ் பெயர்)</label>
                  <input
                    type="text"
                    value={editingProduct.tamilName}
                    onChange={(e) => setEditingProduct({ ...editingProduct, tamilName: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B] font-tamil"
                  />
                </div>

                {/* PRODUCT IMAGERY STUDIO (LIVE PREVIEW & UPLOAD) */}
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#16382B]/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-[#16382B] flex items-center gap-1.5 text-xs">
                      <ImageIcon className="w-4 h-4 text-[#C29043]" />
                      Product Image
                    </label>
                    <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#16382B]/10 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setImageTabMode('upload')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          imageTabMode === 'upload' ? 'bg-[#16382B] text-white' : 'text-[#5C7368] hover:text-[#16382B]'
                        }`}
                      >
                        Upload File
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageTabMode('url')}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          imageTabMode === 'url' ? 'bg-[#16382B] text-white' : 'text-[#5C7368] hover:text-[#16382B]'
                        }`}
                      >
                        Asset Path / URL
                      </button>
                    </div>
                  </div>

                  {/* CURRENT DB IMAGE PREVIEW */}
                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#16382B]/10">
                    <div className="relative w-16 h-16 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 overflow-hidden shrink-0 flex items-center justify-center">
                      {editingProduct.image ? (
                        <Image
                          src={editingProduct.image}
                          alt={editingProduct.name || 'Product'}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                          onError={(e) => {
                            (e.target as any).src = '/images/brand/icon.svg';
                          }}
                        />
                      ) : (
                        <ImageIcon className="w-6 h-6 text-[#8A9B93]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        {editingProduct.image !== originalProductImage ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                            <Sparkles className="w-3 h-3" /> Replaced (Pending Save)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            <Check className="w-3 h-3 text-emerald-600" /> Current Product Image
                          </span>
                        )}
                      </div>

                      <p className="text-[10px] font-mono text-[#5C7368] truncate" title={editingProduct.image}>
                        {editingProduct.image || 'No image configured'}
                      </p>

                      {editingProduct.image !== originalProductImage && originalProductImage && (
                        <button
                          type="button"
                          onClick={() => setEditingProduct({ ...editingProduct, image: originalProductImage })}
                          className="text-[10px] text-red-600 hover:underline flex items-center gap-1 font-semibold pt-0.5 cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" /> Revert to Original DB Image
                        </button>
                      )}
                    </div>
                  </div>

                  {/* UPLOAD DROPZONE */}
                  {imageTabMode === 'upload' ? (
                    <div>
                      <label className={`border-2 border-dashed rounded-xl p-3 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                        isUploadingImage 
                          ? 'border-[#C29043] bg-[#C29043]/5' 
                          : 'border-[#16382B]/20 hover:border-[#16382B]/50 bg-white hover:bg-[#FAF8F5]'
                      }`}>
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/svg+xml,image/avif"
                          className="hidden"
                          disabled={isUploadingImage}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(file, false);
                          }}
                        />
                        {isUploadingImage ? (
                          <div className="flex items-center gap-2 text-[#C29043] py-1">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-[11px] font-bold">Uploading & saving new photo to server...</span>
                          </div>
                        ) : (
                          <>
                            <div className="w-7 h-7 rounded-full bg-[#16382B]/5 flex items-center justify-center text-[#16382B]">
                              <Upload className="w-3.5 h-3.5" />
                            </div>
                            <div className="text-center">
                              <span className="font-bold text-[#16382B] text-[11px]">Choose replacement photo or drag & drop</span>
                              <p className="text-[9px] text-[#8A9B93]">Uploads JPG, PNG, WEBP directly to public directory and syncs to DB</p>
                            </div>
                          </>
                        )}
                      </label>
                    </div>
                  ) : (
                    /* MANUAL URL / PATH MODE */
                    <div>
                      <input
                        type="text"
                        value={editingProduct.image}
                        onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                        placeholder="/images/products/slug/front.jpg or https://..."
                        className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-white text-[#16382B] font-mono text-[11px]"
                      />
                      <p className="text-[9px] text-[#8A9B93] mt-1">Direct public path or external image URL</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#16382B] mb-1">Selling Price (₹)</label>
                    <input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || 0 })}
                      required
                      className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#16382B] mb-1">Original / MRP Price (₹)</label>
                    <input
                      type="number"
                      value={editingProduct.originalPrice || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, originalPrice: parseFloat(e.target.value) || undefined })}
                      className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#16382B] mb-1">Pack Size (e.g. 50g, 100ml)</label>
                    <input
                      type="text"
                      value={editingProduct.packSize}
                      onChange={(e) => setEditingProduct({ ...editingProduct, packSize: e.target.value })}
                      required
                      className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#16382B] mb-1">Pack Size (Tamil)</label>
                    <input
                      type="text"
                      value={editingProduct.packSizeTa}
                      onChange={(e) => setEditingProduct({ ...editingProduct, packSizeTa: e.target.value })}
                      required
                      className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B] font-tamil"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    value={editingProduct.shortDescription}
                    onChange={(e) => setEditingProduct({ ...editingProduct, shortDescription: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Full Description</label>
                  <textarea
                    rows={3}
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] text-[#16382B]"
                  />
                </div>

                {/* INVENTORY & STOCK MANAGEMENT */}
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#16382B]/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-[#16382B] flex items-center gap-1.5 text-xs">
                      <Package className="w-4 h-4 text-[#C29043]" />
                      Inventory & Stock Control
                    </label>
                    <div className="flex items-center gap-1 text-[11px]">
                      <span className="text-[#5C7368] font-medium">Quick Presets:</span>
                      {[5, 10, 25, 50, 100].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setEditingProduct({ ...editingProduct, stock: preset, inStock: preset > 0 })}
                          className="px-2 py-0.5 rounded-md bg-white border border-[#16382B]/10 hover:border-[#16382B]/40 text-[#16382B] font-semibold text-[10px] cursor-pointer"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#16382B] mb-1">Available Stock (Units)</label>
                      <input
                        type="number"
                        min={0}
                        value={editingProduct.stock ?? 20}
                        onChange={(e) => {
                          const val = e.target.value === '' ? '' : parseInt(e.target.value, 10);
                          const num = typeof val === 'number' ? val : 0;
                          setEditingProduct({
                            ...editingProduct,
                            stock: val as any,
                            inStock: num > 0
                          });
                        }}
                        className={`w-full px-3 py-2 rounded-xl border bg-white font-mono font-bold text-sm ${
                          (editingProduct.stock ?? 20) < 0 
                            ? 'border-red-500 text-red-700 bg-red-50' 
                            : (editingProduct.stock ?? 20) === 0 
                            ? 'border-red-300 text-red-700' 
                            : (editingProduct.stock ?? 20) <= 5 
                            ? 'border-amber-400 text-amber-800' 
                            : 'border-[#16382B]/15 text-[#16382B]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16382B] mb-1">Catalog Status</label>
                      <div className="h-[38px] flex items-center px-3 rounded-xl bg-white border border-[#16382B]/15 text-xs font-bold">
                        {editingProduct.isComingSoon ? (
                          <span className="flex items-center gap-1.5 text-amber-800">
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            Coming Soon (தயாரிப்பில்)
                          </span>
                        ) : (editingProduct.stock ?? 20) <= 0 || !editingProduct.inStock ? (
                          <span className="flex items-center gap-1.5 text-red-700">
                            <X className="w-3.5 h-3.5 text-red-600" />
                            Out of Stock
                          </span>
                        ) : (editingProduct.stock ?? 20) <= 5 ? (
                          <span className="flex items-center gap-1.5 text-amber-700">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            Low Stock ({editingProduct.stock} units)
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-emerald-800">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            In Stock ({editingProduct.stock ?? 20} units)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Real-time Notifications & Warnings */}
                  {(editingProduct.stock ?? 20) < 0 && (
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[11px] flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Invalid Stock Value</p>
                        <p>Stock cannot be negative. Please enter a valid count of 0 or higher.</p>
                      </div>
                    </div>
                  )}

                  {(editingProduct.stock ?? 20) === 0 && (
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[11px] flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Out of Stock Notice</p>
                        <p>Direct cart purchases will be disabled on the live storefront and routed to WhatsApp enquiry.</p>
                      </div>
                    </div>
                  )}

                  {(editingProduct.stock ?? 20) > 0 && (editingProduct.stock ?? 20) <= 5 && (
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Low Stock Warning</p>
                        <p>Storefront will show urgency indicator: &quot;Only {editingProduct.stock} left in stock - order soon&quot;.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* STATUS TOGGLES */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-3">
                  <label className="font-bold text-[#16382B] flex items-center gap-1.5 text-xs">
                    <Tag className="w-4 h-4 text-[#C29043]" />
                    Product Tags & Visibility Controls
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16382B]/10 hover:border-[#16382B]/30 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        checked={editingProduct.isComingSoon || false}
                        onChange={(e) => setEditingProduct({ ...editingProduct, isComingSoon: e.target.checked })}
                        className="w-4 h-4 rounded text-[#16382B] accent-[#16382B]"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#16382B] block">Coming Soon</span>
                        <span className="text-[10px] text-[#5C7368]">தயாரிப்பில் உள்ளது</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16382B]/10 hover:border-[#16382B]/30 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        checked={editingProduct.inStock}
                        onChange={(e) => setEditingProduct({ ...editingProduct, inStock: e.target.checked })}
                        className="w-4 h-4 rounded text-[#16382B] accent-[#16382B]"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#16382B] block">In Stock Active</span>
                        <span className="text-[10px] text-[#5C7368]">Purchasing enabled</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16382B]/10 hover:border-[#16382B]/30 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        checked={editingProduct.featured}
                        onChange={(e) => setEditingProduct({ ...editingProduct, featured: e.target.checked })}
                        className="w-4 h-4 rounded text-[#16382B] accent-[#16382B]"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#16382B] block">Featured SKU</span>
                        <span className="text-[10px] text-[#5C7368]">Homepage highlight</span>
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="pt-4 border-t border-[#16382B]/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="px-4 py-2 rounded-xl border border-[#16382B]/15 text-[#5C7368] font-semibold hover:bg-[#FAF8F5]"
              >
                Cancel
              </button>
              <button
                form="edit-prod-form"
                type="submit"
                disabled={isSaving}
                className="px-5 py-2 rounded-xl bg-[#16382B] text-white font-bold hover:bg-[#1f4e3c] flex items-center gap-2 disabled:opacity-50"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD PRODUCT MODAL */}
      {isAddingProduct && (
        <div 
          onClick={() => setIsAddingProduct(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl max-h-[88vh] flex flex-col overflow-hidden animate-scale-up border border-[#16382B]/10"
          >
            {/* FIXED MODAL HEADER */}
            <div className="px-6 py-4 border-b border-[#16382B]/10 flex items-center justify-between shrink-0 bg-white">
              <div>
                <h2 className="text-lg font-serif-brand font-bold text-[#16382B]">Add New Product</h2>
                <p className="text-xs text-[#8A9B93]">Create a new classical or proprietary product</p>
              </div>
              <button 
                type="button"
                onClick={() => setIsAddingProduct(false)} 
                className="p-2 rounded-xl hover:bg-[#FAF8F5] text-[#5C7368] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SCROLLABLE FORM BODY */}
            <form id="add-prod-form" onSubmit={handleCreateProduct} className="p-6 overflow-y-auto flex-1 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Medical System</label>
                  <select
                    value={newProduct.medicalSystem}
                    onChange={(e) => setNewProduct({ ...newProduct, medicalSystem: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                  >
                    <option value="siddha">Classical Siddha</option>
                    <option value="ayurveda">Classical Ayurveda</option>
                    <option value="proprietary">Proprietary</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Formulation Category</label>
                  <input
                    type="text"
                    value={newProduct.formulation || ''}
                    onChange={(e) => setNewProduct({ ...newProduct, formulation: e.target.value as any })}
                    placeholder="e.g. Chooranam, Legiyam, Churna"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#16382B] mb-1">Product Name (English)</label>
                <input
                  type="text"
                  value={newProduct.name || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g. Ruthra Amirtha Sanjeevi Chooranam"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#16382B] mb-1">Tamil Name (தமிழ் பெயர்)</label>
                <input
                  type="text"
                  value={newProduct.tamilName || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, tamilName: e.target.value })}
                  placeholder="எ.கா. ருத்ரா அமிர்த சஞ்சீவி சூரணம்"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] font-tamil"
                />
              </div>

              {/* ADD PRODUCT IMAGERY STUDIO */}
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#16382B]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[#16382B] flex items-center gap-1.5 text-xs">
                    <ImageIcon className="w-4 h-4 text-[#C29043]" />
                    Product Image (Optional)
                  </label>
                  <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#16382B]/10 text-[10px]">
                    <button
                      type="button"
                      onClick={() => setNewProdImageTabMode('upload')}
                      className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                        newProdImageTabMode === 'upload' ? 'bg-[#16382B] text-white' : 'text-[#5C7368] hover:text-[#16382B]'
                      }`}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewProdImageTabMode('url')}
                      className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                        newProdImageTabMode === 'url' ? 'bg-[#16382B] text-white' : 'text-[#5C7368] hover:text-[#16382B]'
                      }`}
                    >
                      Asset Path / URL
                    </button>
                  </div>
                </div>

                {/* IF IMAGE IS UPLOADED OR PROVIDED: SHOW PREVIEW */}
                {newProduct.image ? (
                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#16382B]/10">
                    <div className="relative w-16 h-16 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 overflow-hidden shrink-0 flex items-center justify-center">
                      <Image
                        src={newProduct.image}
                        alt={newProduct.name || 'New Product'}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                        onError={(e) => {
                          (e.target as any).src = '/images/brand/icon.svg';
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          <Check className="w-3 h-3 text-emerald-600" /> Image Attached
                        </span>
                      </div>
                      <p className="text-[10px] font-mono text-[#5C7368] truncate" title={newProduct.image}>
                        {newProduct.image}
                      </p>
                      <button
                        type="button"
                        onClick={() => setNewProduct(prev => ({ ...prev, image: '', images: [] }))}
                        className="text-[10px] text-red-600 hover:underline flex items-center gap-1 font-semibold pt-0.5 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" /> Remove image
                      </button>
                    </div>
                  </div>
                ) : null}

                {/* UPLOAD DROPZONE (SHOWN WHEN IN UPLOAD MODE OR CHANGING) */}
                {newProdImageTabMode === 'upload' ? (
                  <div>
                    <label className={`border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      isUploadingImage 
                        ? 'border-[#C29043] bg-[#C29043]/5' 
                        : 'border-[#16382B]/20 hover:border-[#16382B]/50 bg-white hover:bg-[#FAF8F5]'
                    }`}>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/svg+xml,image/avif"
                        className="hidden"
                        disabled={isUploadingImage}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(file, true);
                        }}
                      />
                      {isUploadingImage ? (
                        <div className="flex items-center gap-2 text-[#C29043] py-1">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-[11px] font-bold">Uploading new image...</span>
                        </div>
                      ) : (
                        <>
                          <div className="w-8 h-8 rounded-full bg-[#16382B]/5 flex items-center justify-center text-[#16382B]">
                            <Upload className="w-4 h-4" />
                          </div>
                          <div className="text-center">
                            <span className="font-bold text-[#16382B] text-[11px]">
                              {newProduct.image ? 'Replace product image' : 'Upload product image or drag & drop'}
                            </span>
                            <p className="text-[9px] text-[#8A9B93]">JPG, PNG, WEBP (saved to catalog & linked)</p>
                          </div>
                        </>
                      )}
                    </label>
                  </div>
                ) : (
                  /* MANUAL URL / PATH MODE */
                  <div>
                    <input
                      type="text"
                      value={newProduct.image || ''}
                      onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                      placeholder="/images/products/slug/front.jpg or https://..."
                      className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-white text-[#16382B] font-mono text-[11px]"
                    />
                    <p className="text-[9px] text-[#8A9B93] mt-1">Direct public path or external image URL</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Selling Price (₹)</label>
                  <input
                    type="number"
                    value={newProduct.price ?? ''}
                    onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })}
                    placeholder="e.g. 150"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#16382B] mb-1">MRP Price (₹)</label>
                  <input
                    type="number"
                    value={newProduct.originalPrice ?? ''}
                    onChange={(e) => setNewProduct({ ...newProduct, originalPrice: parseFloat(e.target.value) || undefined })}
                    placeholder="e.g. 180 (Optional)"
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Pack Size (EN)</label>
                  <input
                    type="text"
                    value={newProduct.packSize || ''}
                    onChange={(e) => setNewProduct({ ...newProduct, packSize: e.target.value })}
                    placeholder="e.g. 50g, 100ml"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#16382B] mb-1">Pack Size (Tamil)</label>
                  <input
                    type="text"
                    value={newProduct.packSizeTa || ''}
                    onChange={(e) => setNewProduct({ ...newProduct, packSizeTa: e.target.value })}
                    placeholder="எ.கா. 50 கிராம்"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] font-tamil"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#16382B] mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={newProduct.shortDescription || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, shortDescription: e.target.value })}
                  placeholder="Key therapeutic indication summary..."
                  className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                />
              </div>

              {/* INVENTORY & STOCK MANAGEMENT */}
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#16382B]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[#16382B] flex items-center gap-1.5 text-xs">
                    <Package className="w-4 h-4 text-[#C29043]" />
                    Initial Stock & Inventory Units
                  </label>
                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="text-[#5C7368] font-medium">Presets:</span>
                    {[5, 10, 25, 50, 100].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setNewProduct({ ...newProduct, stock: preset, inStock: preset > 0 })}
                        className="px-2 py-0.5 rounded-md bg-white border border-[#16382B]/10 hover:border-[#16382B]/40 text-[#16382B] font-semibold text-[10px] cursor-pointer"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#16382B] mb-1">Starting Stock Count</label>
                    <input
                      type="number"
                      min={0}
                      value={newProduct.stock ?? 20}
                      onChange={(e) => {
                        const val = e.target.value === '' ? '' : parseInt(e.target.value, 10);
                        const num = typeof val === 'number' ? val : 0;
                        setNewProduct({
                          ...newProduct,
                          stock: val as any,
                          inStock: num > 0
                        });
                      }}
                      className={`w-full px-3 py-2 rounded-xl border bg-white font-mono font-bold text-sm ${
                        (newProduct.stock ?? 20) < 0 
                          ? 'border-red-500 text-red-700 bg-red-50' 
                          : (newProduct.stock ?? 20) === 0 
                          ? 'border-red-300 text-red-700' 
                          : (newProduct.stock ?? 20) <= 5 
                          ? 'border-amber-400 text-amber-800' 
                          : 'border-[#16382B]/15 text-[#16382B]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#16382B] mb-1">Initial Status</label>
                    <div className="h-[38px] flex items-center px-3 rounded-xl bg-white border border-[#16382B]/15 text-xs font-bold">
                      {newProduct.isComingSoon ? (
                        <span className="flex items-center gap-1.5 text-amber-800">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          Coming Soon (தயாரிப்பில்)
                        </span>
                      ) : (newProduct.stock ?? 20) <= 0 ? (
                        <span className="flex items-center gap-1.5 text-red-700">
                          <X className="w-3.5 h-3.5 text-red-600" />
                          Out of Stock
                        </span>
                      ) : (newProduct.stock ?? 20) <= 5 ? (
                        <span className="flex items-center gap-1.5 text-amber-700">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                          Low Stock ({newProduct.stock} units)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-emerald-800">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          In Stock ({newProduct.stock ?? 20} units)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {(newProduct.stock ?? 20) < 0 && (
                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Invalid Stock Value</p>
                      <p>Stock cannot be negative. Please enter a valid count of 0 or higher.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* STATUS TOGGLES */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 space-y-3">
                <label className="font-bold text-[#16382B] flex items-center gap-1.5 text-xs">
                  <Tag className="w-4 h-4 text-[#C29043]" />
                  Product Tags & Visibility Controls
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16382B]/10 hover:border-[#16382B]/30 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={newProduct.isComingSoon || false}
                      onChange={(e) => setNewProduct({ ...newProduct, isComingSoon: e.target.checked })}
                      className="w-4 h-4 rounded text-[#16382B] accent-[#16382B]"
                    />
                    <div>
                      <span className="font-bold text-xs text-[#16382B] block">Coming Soon</span>
                      <span className="text-[10px] text-[#5C7368]">தயாரிப்பில் உள்ளது</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16382B]/10 hover:border-[#16382B]/30 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={newProduct.inStock ?? true}
                      onChange={(e) => setNewProduct({ ...newProduct, inStock: e.target.checked })}
                      className="w-4 h-4 rounded text-[#16382B] accent-[#16382B]"
                    />
                    <div>
                      <span className="font-bold text-xs text-[#16382B] block">In Stock Active</span>
                      <span className="text-[10px] text-[#5C7368]">Purchasing enabled</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#16382B]/10 hover:border-[#16382B]/30 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={newProduct.featured || false}
                      onChange={(e) => setNewProduct({ ...newProduct, featured: e.target.checked })}
                      className="w-4 h-4 rounded text-[#16382B] accent-[#16382B]"
                    />
                    <div>
                      <span className="font-bold text-xs text-[#16382B] block">Featured SKU</span>
                      <span className="text-[10px] text-[#5C7368]">Homepage highlight</span>
                    </div>
                  </label>
                </div>
              </div>
            </form>

            {/* FIXED MODAL FOOTER */}
            <div className="px-6 py-3.5 border-t border-[#16382B]/10 flex items-center justify-end gap-3 shrink-0 bg-[#FAF8F5]">
              <button
                type="button"
                onClick={() => setIsAddingProduct(false)}
                className="px-4 py-2 rounded-xl border border-[#16382B]/15 text-[#5C7368] font-semibold hover:bg-white transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                form="add-prod-form"
                type="submit"
                disabled={isSaving}
                className="px-5 py-2 rounded-xl bg-[#16382B] text-white font-bold hover:bg-[#1f4e3c] flex items-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                Create Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD CATEGORY MODAL */}
      {isAddingCategory && (
        <div 
          onClick={() => setIsAddingCategory(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl max-h-[88vh] flex flex-col overflow-hidden animate-scale-up border border-[#16382B]/10"
          >
            {/* FIXED CATEGORY MODAL HEADER */}
            <div className="px-6 py-4 border-b border-[#16382B]/10 flex items-center justify-between shrink-0 bg-white">
              <div>
                <h2 className="text-lg font-serif-brand font-bold text-[#16382B]">Add New Category</h2>
                <p className="text-xs text-[#8A9B93]">Create new product category</p>
              </div>
              <button 
                type="button"
                onClick={() => setIsAddingCategory(false)} 
                className="p-2 rounded-xl hover:bg-[#FAF8F5] text-[#5C7368] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SCROLLABLE CATEGORY FORM BODY */}
            <form id="add-cat-form" onSubmit={handleCreateCategory} className="p-6 overflow-y-auto flex-1 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#16382B] mb-1">Medical System</label>
                <select
                  value={newCategory.medicalSystem}
                  onChange={(e) => setNewCategory({ ...newCategory, medicalSystem: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                >
                  <option value="SIDDHA">Classical Siddha</option>
                  <option value="AYURVEDA">Classical Ayurveda</option>
                  <option value="PROPRIETARY">Proprietary</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#16382B] mb-1">Category Title (English)</label>
                <input
                  type="text"
                  value={newCategory.title}
                  onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
                  placeholder="e.g. Chooranam, Legiyam, Thailam"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#16382B] mb-1">Tamil Title (தமிழ் பெயர்)</label>
                <input
                  type="text"
                  value={newCategory.titleTa}
                  onChange={(e) => setNewCategory({ ...newCategory, titleTa: e.target.value })}
                  placeholder="எ.கா. சூரணம், லேகியம், தைலம்"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5] font-tamil"
                />
              </div>

              <div>
                <label className="block font-bold text-[#16382B] mb-1">Description (Optional)</label>
                <textarea
                  rows={2}
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  placeholder="Short description of this category form..."
                  className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-[#FAF8F5]"
                />
              </div>
            </form>

            {/* FIXED CATEGORY MODAL FOOTER */}
            <div className="px-6 py-3.5 border-t border-[#16382B]/10 flex items-center justify-end gap-3 shrink-0 bg-[#FAF8F5]">
              <button
                type="button"
                onClick={() => setIsAddingCategory(false)}
                className="px-4 py-2 rounded-xl border border-[#16382B]/15 text-[#5C7368] font-semibold hover:bg-white transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                form="add-cat-form"
                type="submit"
                disabled={isSaving}
                className="px-5 py-2 rounded-xl bg-[#16382B] text-white font-bold hover:bg-[#1f4e3c] flex items-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
              >
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <FolderPlus className="w-4 h-4" />}
                Save Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VALIDATION ALERT MODAL / POPUP */}
      {validationAlert && (
        <div 
          onClick={() => setValidationAlert(null)}
          className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 border border-red-200 animate-scale-up space-y-4 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#16382B]">{validationAlert.title}</h3>
              <p className="text-xs text-[#5C7368] mt-1 leading-relaxed">{validationAlert.message}</p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setValidationAlert(null)}
                className="w-full py-2.5 rounded-xl bg-[#16382B] text-white font-bold text-xs hover:bg-[#1f4e3c] transition-colors cursor-pointer"
              >
                Understood, I will correct it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Subcomponent for Table Row
function ProductTableRow({
  p,
  isUpdating,
  onToggleStock,
  onToggleComingSoon,
  onEdit,
  onDelete
}: {
  p: Product;
  isUpdating: string | null;
  onToggleStock: (p: Product) => void;
  onToggleComingSoon: (p: Product) => void;
  onEdit: (p: Product) => void;
  onDelete: (id: string, name: string) => void;
}) {
  const stockCount = p.stock !== undefined ? p.stock : 20;

  return (
    <tr className="hover:bg-[#FAF8F5]/60 transition-colors">
      {/* PRODUCT INFO */}
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 relative overflow-hidden shrink-0">
            {p.image ? (
              <Image
                src={p.image}
                alt={p.name || 'Product'}
                fill
                sizes="48px"
                className="object-contain p-1"
                onError={(e) => {
                  (e.target as any).src = '/images/brand/icon.svg';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#8A9B93]">
                <Package className="w-5 h-5 opacity-40" />
              </div>
            )}
          </div>
          <div>
            <div className="font-serif-brand font-bold text-sm text-[#16382B]">{p.name}</div>
            <div className="font-tamil text-xs text-[#5C7368]">{p.tamilName}</div>
            <div className="text-[10px] text-[#8A9B93] font-mono mt-0.5">{p.id}</div>
          </div>
        </div>
      </td>

      {/* MEDICAL SYSTEM & FORMULATION */}
      <td className="py-3.5 px-4">
        <div className="flex flex-col gap-1">
          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider w-fit ${
            p.medicalSystem === 'siddha' 
              ? 'bg-amber-100 text-amber-900' 
              : p.medicalSystem === 'ayurveda' 
              ? 'bg-emerald-100 text-emerald-900' 
              : 'bg-purple-100 text-purple-900'
          }`}>
            {p.medicalSystem}
          </span>
          <span className="text-[11px] text-[#5C7368] font-medium">{p.formulation}</span>
        </div>
      </td>

      {/* PACK SIZE */}
      <td className="py-3.5 px-4">
        <span className="bg-[#FAF8F5] px-2 py-1 rounded-md text-[11px] font-semibold text-[#16382B] border border-[#16382B]/5">
          {p.packSize}
        </span>
      </td>

      {/* PRICE */}
      <td className="py-3.5 px-4">
        <div className="font-bold text-sm text-[#16382B]">₹{p.price}</div>
        {p.originalPrice && (
          <div className="text-[10px] text-[#8A9B93] line-through">₹{p.originalPrice}</div>
        )}
      </td>

      {/* STOCK & COMING SOON STATUS */}
      <td className="py-3.5 px-4">
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1.5">
            {/* COMING SOON TOGGLE BADGE */}
            <button
              type="button"
              onClick={() => onToggleComingSoon(p)}
              disabled={isUpdating === p.id}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                p.isComingSoon
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
              }`}
              title="Click to toggle Coming Soon status"
            >
              {p.isComingSoon ? (
                <>
                  <Clock className="w-2.5 h-2.5 text-amber-700" />
                  Coming Soon
                </>
              ) : (
                <>
                  <Tag className="w-2.5 h-2.5 text-slate-500" />
                  Live
                </>
              )}
            </button>

            {/* IN STOCK BUTTON */}
            <button
              onClick={() => onToggleStock(p)}
              disabled={isUpdating === p.id}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                p.inStock && stockCount > 0
                  ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                  : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              {isUpdating === p.id ? (
                <Loader2 className="w-2.5 h-2.5 animate-spin" />
              ) : p.inStock && stockCount > 0 ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  In Stock
                </>
              ) : (
                <>
                  <X className="w-2.5 h-2.5 text-red-600" />
                  Out of Stock
                </>
              )}
            </button>
          </div>

          {/* STOCK COUNT PILL */}
          <div className="text-[10px] font-mono font-semibold">
            {stockCount <= 0 || !p.inStock ? (
              <span className="text-red-600">0 units</span>
            ) : stockCount <= 5 ? (
              <span className="text-amber-700 flex items-center gap-0.5">
                <AlertCircle className="w-2.5 h-2.5 text-amber-600" /> {stockCount} units (low)
              </span>
            ) : (
              <span className="text-[#5C7368]">{stockCount} units</span>
            )}
          </div>
        </div>
      </td>

      {/* ACTIONS */}
      <td className="py-3.5 px-4 text-right">
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={() => onEdit({ ...p })}
            className="p-2 rounded-xl hover:bg-[#FAF8F5] text-[#5C7368] hover:text-[#16382B] transition-colors cursor-pointer"
            title="Edit Product"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <Link
            href={`/product/${p.slug}`}
            target="_blank"
            className="p-2 rounded-xl hover:bg-[#FAF8F5] text-[#5C7368] hover:text-[#C29043] transition-colors"
            title="Preview on Storefront"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
          <button
            onClick={() => onDelete(p.id, p.name)}
            className="p-2 rounded-xl hover:bg-red-50 text-[#8A9B93] hover:text-red-600 transition-colors cursor-pointer"
            title="Delete Product"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

// Subcomponent for Mobile Cards (< md screens)
function ProductMobileCard({
  p,
  isUpdating,
  onToggleStock,
  onToggleComingSoon,
  onEdit,
  onDelete
}: {
  p: Product;
  isUpdating: string | null;
  onToggleStock: (p: Product) => void;
  onToggleComingSoon: (p: Product) => void;
  onEdit: (p: Product) => void;
  onDelete: (id: string, name: string) => void;
}) {
  const stockCount = p.stock !== undefined ? p.stock : 20;

  return (
    <div className="bg-white rounded-2xl border border-[#16382B]/10 p-3.5 shadow-xs space-y-3">
      {/* Top Header: Image + Title + Badges */}
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 relative overflow-hidden shrink-0 flex items-center justify-center">
          {p.image ? (
            <Image
              src={p.image}
              alt={p.name || 'Product'}
              fill
              sizes="56px"
              className="object-contain p-1"
              onError={(e) => {
                (e.target as any).src = '/images/brand/icon.svg';
              }}
            />
          ) : (
            <Package className="w-6 h-6 text-[#8A9B93] opacity-40" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider ${
              p.medicalSystem === 'siddha' 
                ? 'bg-amber-100 text-amber-900' 
                : p.medicalSystem === 'ayurveda' 
                ? 'bg-emerald-100 text-emerald-900' 
                : 'bg-purple-100 text-purple-900'
            }`}>
              {p.medicalSystem}
            </span>
            <span className="text-[10px] text-[#5C7368] font-medium">{p.formulation}</span>
          </div>

          <h3 className="font-serif-brand font-bold text-sm text-[#16382B] leading-tight truncate">
            {p.name}
          </h3>
          <p className="font-tamil text-xs text-[#5C7368] truncate mt-0.5">{p.tamilName}</p>
          <span className="text-[9px] text-[#8A9B93] font-mono">{p.id}</span>
        </div>
      </div>

      {/* Middle Grid: Pack Size, Price & Stock Level */}
      <div className="grid grid-cols-3 gap-2 bg-[#FAF8F5] p-2 rounded-xl border border-[#16382B]/5 text-center text-xs">
        <div>
          <span className="text-[9px] uppercase font-bold text-[#8A9B93] block">Pack</span>
          <span className="font-semibold text-[#16382B] truncate block text-[11px] mt-0.5">{p.packSize}</span>
        </div>
        <div>
          <span className="text-[9px] uppercase font-bold text-[#8A9B93] block">Price</span>
          <div className="flex items-baseline justify-center gap-1 mt-0.5">
            <span className="font-bold text-[#16382B] text-[11px]">₹{p.price}</span>
            {p.originalPrice && (
              <span className="text-[9px] text-[#8A9B93] line-through">₹{p.originalPrice}</span>
            )}
          </div>
        </div>
        <div>
          <span className="text-[9px] uppercase font-bold text-[#8A9B93] block">Stock</span>
          <span className={`font-bold font-mono text-[11px] block mt-0.5 ${
            stockCount <= 0 || !p.inStock 
              ? 'text-red-600' 
              : stockCount <= 5 
              ? 'text-amber-700' 
              : 'text-emerald-700'
          }`}>
            {stockCount} units
          </span>
        </div>
      </div>

      {/* Bottom Controls: Toggles & Quick Actions */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#16382B]/10">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Coming Soon Toggle */}
          <button
            type="button"
            onClick={() => onToggleComingSoon(p)}
            disabled={isUpdating === p.id}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
              p.isComingSoon
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {p.isComingSoon ? (
              <>
                <Clock className="w-2.5 h-2.5 text-amber-700" />
                Coming Soon
              </>
            ) : (
              <>
                <Tag className="w-2.5 h-2.5 text-slate-500" />
                Live
              </>
            )}
          </button>

          {/* In Stock Toggle */}
          <button
            type="button"
            onClick={() => onToggleStock(p)}
            disabled={isUpdating === p.id}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
              p.inStock && stockCount > 0
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {isUpdating === p.id ? (
              <Loader2 className="w-2.5 h-2.5 animate-spin" />
            ) : p.inStock && stockCount > 0 ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                In Stock
              </>
            ) : (
              <>
                <X className="w-2.5 h-2.5 text-red-600" />
                Out of Stock
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onEdit({ ...p })}
            className="p-2 rounded-xl bg-[#FAF8F5] text-[#16382B] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
            title="Edit Product"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
          <Link
            href={`/product/${p.slug}`}
            target="_blank"
            className="p-2 rounded-xl bg-[#FAF8F5] text-[#5C7368] hover:text-[#C29043] hover:bg-[#E8F1EB] transition-colors"
            title="Preview on Storefront"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => onDelete(p.id, p.name)}
            className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
            title="Delete Product"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
