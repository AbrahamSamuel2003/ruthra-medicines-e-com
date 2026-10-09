import { NextResponse } from 'next/server';
import { getOrderById, updateOrderStatus, updatePaymentStatus, deleteOrder } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import { OrderStatus, PaymentStatus } from '@/types/admin';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const order = await getOrderById(id);
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  return NextResponse.json({ order });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const { status, paymentStatus, transactionRef } = body;

  let order = await getOrderById(id);
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  if (status) {
    order = await updateOrderStatus(id, status as OrderStatus);
  }

  if (paymentStatus) {
    order = await updatePaymentStatus(id, paymentStatus as PaymentStatus, transactionRef);
  }

  return NextResponse.json({ success: true, order });
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
  const success = await deleteOrder(id);
  if (!success) {
    return NextResponse.json({ success: false, error: 'Order deletion failed or not found' }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: 'Order deleted successfully' });
}
