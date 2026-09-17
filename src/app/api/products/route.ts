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

    const products = await getProducts({
      search,
      formulation,
      concern,
      medicalSystem,
      featured
    });

    return NextResponse.json({
      success: true,
      total: products.length,
      products
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to fetch products';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
