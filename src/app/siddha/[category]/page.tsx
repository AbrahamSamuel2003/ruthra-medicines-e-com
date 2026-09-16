import React from 'react';
import { Metadata } from 'next';
import SiddhaCatalogClient from '../SiddhaCatalogClient';
import { PRODUCTS } from '@/data/products';
import { SIDDHA_NAV_CATEGORIES } from '@/components/Header';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catObj = SIDDHA_NAV_CATEGORIES.find(c => c.slug === category);
  const title = catObj ? `${catObj.title} (${catObj.titleTa}) - Classical Siddha | Ruthra Medicines` : 'Siddha Formulations | Ruthra Medicines';
  return {
    title,
    description: catObj ? `Explore authentic classical Siddha ${catObj.title} formulations prepared in Tirunelveli per ancient Agathiyar manuscripts.` : 'Authentic Siddha preparations.'
  };
}

export default async function SiddhaCategoryPage({ params }: Props) {
  const { category } = await params;
  const siddhaProducts = PRODUCTS.filter(p => p.medicalSystem === 'siddha' || (!p.medicalSystem && p.formulation !== 'Capsules' && p.formulation !== 'Tailam'));

  return <SiddhaCatalogClient products={siddhaProducts} initialCategory={category} />;
}
