import { NextRequest, NextResponse } from 'next/server';
import { getProductById, updateProduct, deleteProduct } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = await getProductById(id);
    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, product });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to fetch product';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updated = await updateProduct(id, body);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Product update failed or not found' }, { status: 400 });
    }
    return NextResponse.json({ success: true, product: updated });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to update product';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const success = await deleteProduct(id);
    if (!success) {
      return NextResponse.json({ success: false, error: 'Product delete failed or not found' }, { status: 400 });
    }
    return NextResponse.json({ success: true, message: 'Product deleted successfully' });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to delete product';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
