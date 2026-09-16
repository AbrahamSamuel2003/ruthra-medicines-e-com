import { NextResponse } from 'next/server';
import { getCustomers } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || undefined;

  const customers = await getCustomers(search);
  return NextResponse.json({ customers, totalCount: customers.length });
}
