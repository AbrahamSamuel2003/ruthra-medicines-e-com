import { NextRequest, NextResponse } from 'next/server';
import { getProducts, createProduct, syncProductCatalog } from '@/lib/db';
import { revalidatePath } from 'next/cache';

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
      
      // Instant cache revalidation across entire storefront (0 latency)
      try {
        revalidatePath('/', 'layout');
        revalidatePath('/shop');
        revalidatePath(`/product/${created.slug}`);
      } catch (revErr) {
        console.warn('Cache revalidation notice:', revErr);
      }

      return NextResponse.json({
        success: true,
        message: 'Product created successfully',
        product: created
      });
    }

    const result = await syncProductCatalog();
    try {
      revalidatePath('/', 'layout');
    } catch {
      // ignore
    }
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
