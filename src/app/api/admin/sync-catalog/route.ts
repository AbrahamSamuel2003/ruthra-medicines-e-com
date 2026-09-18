import { NextRequest, NextResponse } from 'next/server';
import { syncProductCatalog } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const result = await syncProductCatalog();
    return NextResponse.json({
      success: true,
      message: 'Master catalog synchronized and pruned in PostgreSQL successfully',
      result
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to sync product catalog';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  return GET(request);
}
