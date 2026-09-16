import { NextRequest, NextResponse } from 'next/server';
import { getProducts, syncProductCatalog } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const formulation = searchParams.get('formulation') || undefined;

    const products = await getProducts({ search, formulation });

    return NextResponse.json({
      success: true,
      total: products.length,
      products
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to fetch admin products';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

export async function POST() {
  try {
    const result = await syncProductCatalog();
    return NextResponse.json({
      success: true,
      message: 'Product catalog synchronized with database successfully',
      ...result
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to sync product catalog';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
