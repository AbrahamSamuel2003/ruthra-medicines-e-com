import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PRODUCTS } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map(prod => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} (${product.tamilName}) | Ruthra Medicines`,
    description: product.shortDescription,
    alternates: {
      canonical: `/product/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — Classical Siddha Formulation`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && p.concerns.some(c => product.concerns.includes(c))
  );

  // JSON-LD Product Schema
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    alternateName: product.tamilName,
    image: `https://ruthramedicos.com${product.image}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Ruthra Medicines'
    },
    offers: {
      '@type': 'Offer',
      url: `https://ruthramedicos.com/product/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Ruthra Siddha Herbals'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
