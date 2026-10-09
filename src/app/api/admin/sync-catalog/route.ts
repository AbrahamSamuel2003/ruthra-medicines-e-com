import { NextResponse } from 'next/server';
import { syncProductCatalog } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const result = await syncProductCatalog();
    return NextResponse.json({
      success: true,
      message: 'Master catalog synchronized and pruned in PostgreSQL successfully',
      result
    });
  } catch (error: unknown) {
    console.error('Catalog sync error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to sync catalog' },
      { status: 500 }
    );
  }
}
