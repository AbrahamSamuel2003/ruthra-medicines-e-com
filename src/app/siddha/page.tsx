import React from 'react';
import { Metadata } from 'next';
import SiddhaCatalogClient from './SiddhaCatalogClient';
import { PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Classical Siddha Formulations | 111 Master Preparations | Ruthra Medicines',
  description: 'Explore 111 authentic classical Siddha preparations across 14 traditional dosage forms including Chooranam, Kudineer, Legiyam, Thailam, Nei, and Parpam from Tirunelveli.'
};

export default function SiddhaPage() {
  const siddhaProducts = PRODUCTS.filter(p => p.medicalSystem === 'siddha' || (!p.medicalSystem && p.formulation !== 'Capsules' && p.formulation !== 'Tailam'));

  return <SiddhaCatalogClient products={siddhaProducts} />;
}
