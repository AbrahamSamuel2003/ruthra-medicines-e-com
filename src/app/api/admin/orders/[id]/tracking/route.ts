import { NextResponse } from 'next/server';
import { getOrderById, updateOrderTracking } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import { sendOrderDispatchedEmail } from '@/lib/mailer';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized: Admin session required' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const { trackingUrl } = body;

  if (!trackingUrl || typeof trackingUrl !== 'string' || !trackingUrl.trim()) {
    return NextResponse.json({ success: false, error: 'Valid tracking link is required' }, { status: 400 });
  }

  const existingOrder = await getOrderById(id);
  if (!existingOrder) {
    return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
  }

  // Update order tracking and automatically mark status as DISPATCHED
  const updatedOrder = await updateOrderTracking(id, trackingUrl);
  if (!updatedOrder) {
    return NextResponse.json({ success: false, error: 'Failed to update order tracking' }, { status: 500 });
  }

  // Dispatch customer email with tracking link
  let emailResult = null;
  const customerEmail = updatedOrder.shippingSnapshot?.email || updatedOrder.customer.email;
  if (customerEmail) {
    emailResult = await sendOrderDispatchedEmail({
      order: updatedOrder,
      trackingUrl: updatedOrder.trackingUrl || trackingUrl,
      recipientEmail: customerEmail
    });
  }

  return NextResponse.json({
    success: true,
    order: updatedOrder,
    emailSent: Boolean(emailResult?.success),
    emailResult
  });
}
