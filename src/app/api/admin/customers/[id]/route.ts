import { NextResponse } from 'next/server';
import { getCustomerById, deleteCustomer } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const data = await getCustomerById(id);
  if (!data) {
    return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const success = await deleteCustomer(id);
  if (!success) {
    return NextResponse.json({ success: false, error: 'Failed to delete customer' }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: 'Customer deleted successfully' });
}
