import { NextRequest, NextResponse } from 'next/server';
import { getProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const formulation = searchParams.get('formulation') || undefined;
    const concern = searchParams.get('concern') || undefined;
    const medicalSystem = searchParams.get('medicalSystem') || undefined;
    const featuredParam = searchParams.get('featured');
    const featured = featuredParam !== null ? featuredParam === 'true' : undefined;

    const summaryParam = searchParams.get('summary');
    const isSummary = summaryParam === 'true';

    const products = await getProducts({
      search,
      formulation,
      concern,
      medicalSystem,
      featured
    });

    const responseProducts = isSummary 
      ? products.map(p => ({
          id: p.id,
          name: p.name,
          tamilName: p.tamilName,
          slug: p.slug,
          medicalSystem: p.medicalSystem,
          formulation: p.formulation,
          formulationTa: p.formulationTa,
          categoryGroup: p.categoryGroup,
          concerns: p.concerns,
          price: p.price,
          originalPrice: p.originalPrice,
          packSize: p.packSize,
          packSizeTa: p.packSizeTa,
          shortDescription: p.shortDescription,
          shortDescriptionTa: p.shortDescriptionTa,
          badge: p.badge,
          badgeTa: p.badgeTa,
          image: p.image,
          isComingSoon: p.isComingSoon,
          featured: p.featured,
          inStock: (p as any).inStock ?? true,
          stockCount: (p as any).stockCount ?? 100,
          isLowStock: (p as any).isLowStock ?? false,
          isOutOfStock: (p as any).isOutOfStock ?? false,
        }))
      : products;

    return NextResponse.json(
      {
        success: true,
        total: responseProducts.length,
        products: responseProducts
      },
      {
        headers: {
          'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to fetch products';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
