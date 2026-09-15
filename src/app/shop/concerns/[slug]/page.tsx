import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CONCERN_CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ConcernSlug } from '@/types/product';

interface ConcernPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CONCERN_CATEGORIES.map(cat => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: ConcernPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CONCERN_CATEGORIES.find(c => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.title} Formulations | Ruthra Medicines`,
    description: category.description,
  };
}

export default async function IndividualConcernPage({ params }: ConcernPageProps) {
  const { slug } = await params;
  const category = CONCERN_CATEGORIES.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  const products = PRODUCTS.filter(p => p.concerns.includes(slug as ConcernSlug));

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#8A9B93] mb-4 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#16382B]">Shop</Link>
          <span>/</span>
          <Link href="/shop/concerns" className="hover:text-[#16382B]">Concerns</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{category.title}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#16382B]/10 shadow-xs mb-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C29043]">
              Traditional Siddha Concern Category
            </span>
            <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#16382B]">
              {category.title}
            </h1>
            <p className="text-base text-[#16382B] font-medium">
              {category.tagline}
            </p>
            <p className="text-sm text-[#3D5A68] leading-relaxed">
              {category.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#16382B]">
              <span className="font-semibold">Key Classical Botanicals:</span>
              <span className="px-2.5 py-1 rounded-full bg-[#E8F1EB] font-medium">{category.herbalKey}</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#8A9B93]">
            <span>{products.length} classical formulation(s) available</span>
            <Link href="/shop" className="text-[#16382B] font-semibold hover:underline">
              ← View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
