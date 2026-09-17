import { NextRequest, NextResponse } from 'next/server';
import { getProducts, createProduct, syncProductCatalog } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const formulation = searchParams.get('formulation') || undefined;
    const medicalSystem = searchParams.get('medicalSystem') || undefined;

    const products = await getProducts({ search, formulation, medicalSystem });

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    if (body && body.action === 'create' && body.product) {
      const created = await createProduct(body.product);
      return NextResponse.json({
        success: true,
        message: 'Product created successfully',
        product: created
      });
    }

    const result = await syncProductCatalog();
    return NextResponse.json({
      success: true,
      message: 'Product catalog synchronized with PostgreSQL database successfully',
      ...result
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to process admin product request';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
