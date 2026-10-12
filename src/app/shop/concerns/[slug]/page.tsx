import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CONCERN_CATEGORIES } from '@/data/products';
import { ConcernSlug } from '@/types/product';
import { getProducts } from '@/lib/db';
import ConcernCatalogClient from './ConcernCatalogClient';

export const dynamic = 'force-dynamic';

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
    title: `${category.title} (${category.titleTa}) Formulations | Ruthra Medicines`,
    description: category.description,
  };
}

export default async function IndividualConcernPage({ params }: ConcernPageProps) {
  const { slug } = await params;
  const category = CONCERN_CATEGORIES.find(c => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Fetch real-time products from DB / store
  const allProducts = await getProducts();
  const concernProducts = allProducts.filter(p => p.concerns && p.concerns.includes(slug as ConcernSlug));

  // Compute counts for all concerns so sidebar links display accurate badges
  const allConcernCounts: Record<string, number> = {};
  CONCERN_CATEGORIES.forEach(c => {
    allConcernCounts[c.slug] = allProducts.filter(p => p.concerns && p.concerns.includes(c.slug as ConcernSlug)).length;
  });

  return (
    <ConcernCatalogClient 
      category={category} 
      products={concernProducts} 
      allConcernCounts={allConcernCounts} 
    />
  );
}
