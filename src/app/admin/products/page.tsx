'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { Search, Lock, ExternalLink, ShieldCheck, Filter } from 'lucide-react';

export default function AdminProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedFormulation, setSelectedFormulation] = useState('ALL');

  const formulations = useMemo(() => {
    const set = new Set(PRODUCTS.map(p => p.formulation));
    return ['ALL', ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchQuery = 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.tamilName.includes(search) ||
        p.id.toLowerCase().includes(search.toLowerCase());
      
      const matchForm = selectedFormulation === 'ALL' || p.formulation === selectedFormulation;
      return matchQuery && matchForm;
    });
  }, [search, selectedFormulation]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER & GOVERNANCE NOTICE */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C29043]">
              Authentic Formulary
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center gap-1">
              <Lock className="w-2.5 h-2.5" />
              Hardcoded &amp; Protected
            </span>
          </div>
          <h1 className="text-2xl font-serif-brand font-bold text-[#16382B]">
            Product Catalog Index ({PRODUCTS.length} SKUs)
          </h1>
          <p className="text-xs text-[#8A9B93] mt-0.5">
            Centralized master formulations defined in <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded font-mono text-[#16382B]">src/data/products.ts</code>.
          </p>
        </div>

        {/* Security / Immutability Banner */}
        <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#16382B]/10 px-3.5 py-2 rounded-xl text-xs text-[#16382B]">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Catalog is <strong>immutable</strong> (Admin cannot add/edit/delete products).</span>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#8A9B93] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search SKU by English / Tamil name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 focus:border-[#C29043] focus:outline-none text-[#16382B]"
          />
        </div>

        {/* Formulations Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <Filter className="w-3.5 h-3.5 text-[#8A9B93] shrink-0 mr-1" />
          {formulations.map((form) => (
            <button
              key={form}
              type="button"
              onClick={() => setSelectedFormulation(form)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFormulation === form
                  ? 'bg-[#16382B] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#3D5A68] hover:bg-[#E8F1EB] hover:text-[#16382B]'
              }`}
            >
              {form}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS DISPLAY CONTAINER */}
      <div className="bg-white rounded-3xl border border-[#16382B]/10 shadow-sm overflow-hidden">
        {/* MOBILE CARD GRID (md:hidden) */}
        <div className="md:hidden p-3.5 space-y-3">
          {filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-[#8A9B93] text-xs">
              No formulations match your search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProducts.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl p-3.5 border border-[#16382B]/10 shadow-xs space-y-2.5 hover:border-[#C29043]/40 transition-all flex flex-col justify-between"
                  >
                    {/* Top Row: SKU + Storefront Link */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[#16382B] text-xs bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#16382B]/10">
                        {p.id}
                      </span>
                      <Link
                        href={`/product/${p.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold text-[11px] border border-[#16382B]/10 transition-colors"
                      >
                        <span>Storefront</span>
                        <ExternalLink className="w-3 h-3 text-[#C29043]" />
                      </Link>
                    </div>

                    {/* Middle: Product image, titles, formulation & pack size */}
                    <div className="flex gap-2.5 items-start pt-1 border-t border-[#16382B]/5">
                      <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 shrink-0 overflow-hidden flex items-center justify-center p-1">
                        <Image
                          src={p.image}
                          alt={p.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <span className="font-bold text-[#16382B] block text-xs leading-tight line-clamp-2">
                          {p.name}
                        </span>
                        <span className="text-[10.5px] text-[#C29043] font-serif block truncate">
                          {p.tamilName}
                        </span>
                        <div className="flex items-center gap-1 pt-0.5 flex-wrap">
                          <span className="px-1.5 py-0.5 rounded bg-[#FAF8F5] border border-[#16382B]/10 text-[#16382B] font-semibold text-[9.5px]">
                            {p.formulation}
                          </span>
                          <span className="text-[10px] text-[#8A9B93]">
                            {p.packSize}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Price & Status */}
                    <div className="pt-2 border-t border-[#16382B]/5 flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif-brand font-bold text-sm text-[#16382B]">₹{p.price}</span>
                        {p.originalPrice && p.originalPrice > p.price && (
                          <span className="text-[10px] text-[#8A9B93] line-through">₹{p.originalPrice}</span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[9.5px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        In Stock
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* DESKTOP TABLE (hidden md:block) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#FAF8F5] text-[#8A9B93] uppercase font-bold text-[10px] tracking-wider border-b border-[#16382B]/10">
                <th className="py-3 px-4">SKU / ID</th>
                <th className="py-3 px-4">Product Name &amp; Tamil Title</th>
                <th className="py-3 px-4">Formulation</th>
                <th className="py-3 px-4">Pack Size</th>
                <th className="py-3 px-4">Selling Price / MRP</th>
                <th className="py-3 px-4">Storefront Status</th>
                <th className="py-3 px-4 text-right">Storefront Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16382B]/5">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-[#8A9B93]">
                    No formulations match your search criteria.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => {
                  return (
                    <tr key={p.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-[#16382B]">
                        {p.id}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#16382B]/10 relative shrink-0 overflow-hidden flex items-center justify-center p-1">
                            <Image
                              src={p.image}
                              alt={p.name}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <span className="font-bold text-[#16382B] block text-[13px]">{p.name}</span>
                            <span className="text-[11px] text-[#C29043] font-serif block">{p.tamilName}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#16382B]/10 text-[#16382B] font-semibold text-[11px]">
                          {p.formulation}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#3D5A68] font-medium">
                        {p.packSize}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif-brand font-bold text-sm text-[#16382B]">₹{p.price}</span>
                          {p.originalPrice && p.originalPrice > p.price && (
                            <span className="text-[10.5px] text-[#8A9B93] line-through">₹{p.originalPrice}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live on Store
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          href={`/product/${p.slug}`}
                          target="_blank"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold text-[11px] border border-[#16382B]/10 transition-colors"
                        >
                          <span>View SKU</span>
                          <ExternalLink className="w-3 h-3 text-[#C29043]" />
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
