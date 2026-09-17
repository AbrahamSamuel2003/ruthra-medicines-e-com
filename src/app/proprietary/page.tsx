import React from 'react';
import { Metadata } from 'next';
import ProprietaryCatalogClient from '@/app/proprietary/ProprietaryCatalogClient';
import { getProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Proprietary Formulations | Ruthra Specialized Healthcare',
  description: 'Discover Ruthra’s 7 proprietary botanical formulations: Rej-Viyan Pain Relief Oil, Ulcera Wound Oil, Narshika Hair Oil, Nalpamaradi Taila, Sinocof Cough Syrup, Ramabaana Kashayam, and Esy-Swas Sinus Drops.'
};

export default async function ProprietaryPage() {
  const proprietaryProducts = await getProducts({ medicalSystem: 'proprietary' });

  return <ProprietaryCatalogClient products={proprietaryProducts} />;
}
