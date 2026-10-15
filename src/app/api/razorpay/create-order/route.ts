import { NextRequest, NextResponse } from 'next/server';
import { createRazorpayOrder, calculateServerOrderTotal } from '@/lib/razorpay';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, state, pincode, customerName, customerPhone } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Cannot create order for an empty cart.' },
        { status: 400 }
      );
    }

    // 🛡️ SECURITY DEFENSE: Recalculate true order total on server using database catalog
    // Client-provided amount is intentionally NEVER trusted.
    const calculated = calculateServerOrderTotal(items, state, pincode);

    const razorpayOrder = await createRazorpayOrder({
      amount: calculated.finalTotal,
      receipt: `rcpt_${Date.now()}`.slice(0, 40),
      notes: {
        customerName: String(customerName || '').slice(0, 40),
        customerPhone: String(customerPhone || '').slice(0, 20),
        serverSubtotal: String(calculated.subtotal),
        serverDiscount: String(calculated.discountTotal),
        serverShipping: String(calculated.shippingFee),
        serverFinalTotal: String(calculated.finalTotal)
      }
    });

    return NextResponse.json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount, // in paise
      amountInRupees: calculated.finalTotal,
      currency: razorpayOrder.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || ''
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to create Razorpay order';
    console.error('[API:RazorpayCreateOrder:SecurityCheck]', error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
