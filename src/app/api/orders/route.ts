import { NextResponse } from 'next/server';
import { createOrder } from '@/lib/db';
import { sendInvoiceEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customer,
      items,
      subtotal,
      mrpTotal,
      discountTotal,
      shippingFee,
      totalAmount,
      deliveryMethod,
      paymentMethod,
      notes
    } = body;

    if (!customer?.fullName || !customer?.phone || !customer?.email || !customer?.address || !items?.length) {
      return NextResponse.json(
        { error: 'Missing required customer details. Full Name, Phone, Email, Address, and Items are required.' },
        { status: 400 }
      );
    }

    const order = await createOrder({
      customer: {
        fullName: customer.fullName.trim(),
        phone: customer.phone.trim(),
        email: customer.email?.trim() || '',
        address: customer.address.trim(),
        landmark: customer.landmark?.trim(),
        city: customer.city?.trim() || 'Tirunelveli',
        state: customer.state?.trim() || 'Tamil Nadu',
        pincode: customer.pincode?.trim() || '627001'
      },
      items,
      subtotal: Number(subtotal) || 0,
      discount: Number(discountTotal) || 0,
      deliveryCharge: Number(shippingFee) || 0,
      finalTotal: Number(totalAmount) || 0,
      deliveryMethod: deliveryMethod || 'Tamil Nadu Express Courier',
      paymentMethod: paymentMethod || 'upi',
      notes: notes?.trim()
    });

    // Asynchronously dispatch invoice email with PDF attachment
    if (order.customer.email || order.shippingSnapshot?.email) {
      sendInvoiceEmail({ order }).catch((err) => {
        console.error(`[OrderCreation:EmailError] Failed to send email for ${order.orderNumber}:`, err);
      });
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderNumber: order.orderNumber,
      invoiceNumber: order.invoice?.invoiceNumber,
      order
    });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to place order' },
      { status: 500 }
    );
  }
}
