import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { FORMULATION_CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface FormulationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return FORMULATION_CATEGORIES.map(form => ({
    slug: form.slug,
  }));
}

export async function generateMetadata({ params }: FormulationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const form = FORMULATION_CATEGORIES.find(f => f.slug === slug);
  if (!form) return {};

  return {
    title: `${form.title} Formulations | Ruthra Medicines`,
    description: form.description,
  };
}

export default async function IndividualFormulationPage({ params }: FormulationPageProps) {
  const { slug } = await params;
  const form = FORMULATION_CATEGORIES.find(f => f.slug === slug);

  if (!form) {
    notFound();
  }

  const products = PRODUCTS.filter(p => p.formulation === form.formulation);

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#8A9B93] mb-4 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#16382B]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#16382B]">Shop</Link>
          <span>/</span>
          <Link href="/shop/formulations" className="hover:text-[#16382B]">Formulations</Link>
          <span>/</span>
          <span className="text-[#16382B] font-semibold">{form.title}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#16382B]/10 shadow-xs mb-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C29043]">
              Traditional Siddha Administration Form
            </span>
            <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#16382B]">
              {form.title}
            </h1>
            <p className="text-base text-[#16382B] font-medium">
              {form.tagline}
            </p>
            <p className="text-sm text-[#3D5A68] leading-relaxed">
              {form.description}
            </p>
            <div className="p-3.5 bg-[#FAF8F5] rounded-xl text-xs text-[#264653] border border-[#16382B]/10">
              <span className="font-semibold text-[#16382B]">Classical Preparation Context: </span>
              {form.classicalContext}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#8A9B93]">
            <span>{products.length} formulation(s) in this classical category</span>
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
