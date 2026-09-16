import { NextResponse } from 'next/server';
import { getInvoicesByDateRange } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const fromDate = searchParams.get('fromDate');
  const toDate = searchParams.get('toDate');

  if (!fromDate || !toDate) {
    return NextResponse.json(
      { error: 'Both fromDate and toDate query parameters are required' },
      { status: 400 }
    );
  }

  const orders = await getInvoicesByDateRange(fromDate, toDate);

  return NextResponse.json({
    fromDate,
    toDate,
    matchingCount: orders.length,
    orders
  });
}
