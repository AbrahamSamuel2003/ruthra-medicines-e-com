import React from 'react';
import { Metadata } from 'next';
import AyurvedaCatalogClient from '@/app/ayurveda/AyurvedaCatalogClient';
import { PRODUCTS } from '@/data/products';
import { AYURVEDA_NAV_CATEGORIES } from '@/components/Header';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catObj = AYURVEDA_NAV_CATEGORIES.find(c => c.slug === category);
  const title = catObj ? `${catObj.title} (${catObj.titleTa}) - Classical Ayurveda | Ruthra Medicines` : 'Ayurveda Formulations | Ruthra Medicines';
  return {
    title,
    description: catObj ? `Explore authentic classical Ayurveda ${catObj.title} formulations prepared per Ayurvedic Formulary of India (AFI).` : 'Authentic Ayurveda preparations.'
  };
}

export default async function AyurvedaCategoryPage({ params }: Props) {
  const { category } = await params;
  const ayurvedaProducts = PRODUCTS.filter(p => p.medicalSystem === 'ayurveda');

  return <AyurvedaCatalogClient products={ayurvedaProducts} initialCategory={category} />;
}
