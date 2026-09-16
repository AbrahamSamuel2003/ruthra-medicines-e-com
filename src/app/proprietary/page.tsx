import React from 'react';
import { Metadata } from 'next';
import ProprietaryCatalogClient from '@/app/proprietary/ProprietaryCatalogClient';
import { PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Proprietary Formulations | Ruthra Specialized Healthcare',
  description: 'Discover Ruthra’s 7 proprietary botanical formulations: Sinocof Cough Syrup, Rej-Viyan Pain Relief Oil, Narshika Hair Oil, Esy-Swas Sinus Drops, Ulcera Wound Oil, Ramabaana Kashayam, and Sagala Noi Chooranam.'
};

export default function ProprietaryPage() {
  const PROPRIETARY_SLUGS = [
    'ruthra-sinocof-cough-syrup',
    'ruthra-rej-viyan-pain-oil',
    'ruthra-narshika-hair-oil',
    'ruthra-esy-swas-drops',
    'ruthra-ulcera-wound-oil',
    'ruthra-ramabana-kashayam',
    'ruthra-sagala-noi-chooranam'
  ];

  const proprietaryProducts = PROPRIETARY_SLUGS
    .map(slug => PRODUCTS.find(p => p.slug === slug))
    .filter((p): p is typeof PRODUCTS[0] => p !== undefined);

  return <ProprietaryCatalogClient products={proprietaryProducts} />;
}
