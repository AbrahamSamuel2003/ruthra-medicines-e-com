import React from 'react';
import { Metadata } from 'next';
import ProprietaryCatalogClient from '@/app/proprietary/ProprietaryCatalogClient';
import { getProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Proprietary Formulations | Ruthra Specialized Healthcare',
  description: "Discover Ruthra's 10 proprietary botanical formulations: Madhura Powder, Navara Tablet, Sinocof Syrup, Esyswas Drops, Ulcera Oil, Rejviyan Oil, Narshika Oil, Ramabaana Kasayam, Nalanguma Powder, and Shigakai Powder."
};

export default async function ProprietaryPage() {
  const proprietaryProducts = await getProducts({ medicalSystem: 'proprietary' });

  return <ProprietaryCatalogClient products={proprietaryProducts} />;
}
