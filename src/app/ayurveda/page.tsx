import React from 'react';
import { Metadata } from 'next';
import AyurvedaCatalogClient from '@/app/ayurveda/AyurvedaCatalogClient';
import { getProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Classical Ayurveda Medicines | 64 Master Formulations | Ruthra Medicines',
  description: 'Explore 64 classical Ayurveda formulations across 8 traditional dosage forms including Churna, Vati, Tailam, Ghritam, and Asavam prepared per Ayurvedic Formulary of India (AFI).'
};

export default async function AyurvedaPage() {
  const ayurvedaProducts = await getProducts({ medicalSystem: 'ayurveda' });

  return <AyurvedaCatalogClient products={ayurvedaProducts} />;
}
