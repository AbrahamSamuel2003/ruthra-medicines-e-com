import { NextResponse } from 'next/server';
import { getOrders } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || undefined;
  const paymentStatus = searchParams.get('paymentStatus') || undefined;
  const search = searchParams.get('search') || undefined;
  const fromDate = searchParams.get('fromDate') || undefined;
  const toDate = searchParams.get('toDate') || undefined;

  const orders = await getOrders({
    status,
    paymentStatus,
    search,
    fromDate,
    toDate
  });

  return NextResponse.json({ orders, totalCount: orders.length });
}
