import React from 'react';
import { Metadata } from 'next';
import SiddhaCatalogClient from './SiddhaCatalogClient';
import { getProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Classical Siddha Formulations | 111 Master Preparations | Ruthra Medicines',
  description: 'Explore authentic classical Siddha preparations across 14 traditional dosage forms including Chooranam, Kudineer, Legiyam, Thailam, Nei, and Parpam from Tirunelveli.'
};

export default async function SiddhaPage() {
  const siddhaProducts = await getProducts({ medicalSystem: 'siddha' });

  return <SiddhaCatalogClient products={siddhaProducts} />;
}
