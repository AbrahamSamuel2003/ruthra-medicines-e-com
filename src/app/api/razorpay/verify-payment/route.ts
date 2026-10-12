import { NextRequest, NextResponse } from 'next/server';
import { 
  verifyRazorpaySignature, 
  fetchRazorpayPayment, 
  calculateServerOrderTotal 
} from '@/lib/razorpay';
import { prisma } from '@/lib/prisma';
import { createOrder } from '@/lib/db';
import { sendInvoiceEmail } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customer,
      items,
      freeGiftItems = [],
      deliveryMethod,
      notes
    } = body;

    // ------------------------------------------------------------------------
    // 🛡️ SECURITY DEFENSE 1: Parameter Existence Check
    // ------------------------------------------------------------------------
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Missing Razorpay verification tokens' },
        { status: 400 }
      );
    }

    if (!customer?.fullName || !customer?.phone || !customer?.address || !items?.length) {
      return NextResponse.json(
        { success: false, error: 'Invalid or missing customer shipping details' },
        { status: 400 }
      );
    }

    // ------------------------------------------------------------------------
    // 🛡️ SECURITY DEFENSE 2: Replay Attack Prevention
    // Ensure this payment ID has NOT already been used for any previous order.
    // ------------------------------------------------------------------------
    const existingPayment = await prisma.payment.findFirst({
      where: { transactionRef: razorpay_payment_id }
    });

    if (existingPayment) {
      console.warn(`[SecurityAlert:ReplayAttack] Blocked duplicate payment reuse for ID: ${razorpay_payment_id}`);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Security alert: This payment reference has already been used for an existing order.' 
        },
        { status: 409 }
      );
    }

    // ------------------------------------------------------------------------
    // 🛡️ SECURITY DEFENSE 3: Cryptographic HMAC-SHA256 Signature Verification
    // Constant-time comparison ensures zero timing attacks or key spoofing.
    // ------------------------------------------------------------------------
    const isValidSignature = verifyRazorpaySignature({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature
    });

    if (!isValidSignature) {
      console.error(`[SecurityAlert:SignatureMismatch] Invalid signature for payment: ${razorpay_payment_id}`);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Cryptographic signature verification failed. The transaction response was tampered with.' 
        },
        { status: 400 }
      );
    }

    // ------------------------------------------------------------------------
    // 🛡️ SECURITY DEFENSE 4: Direct Gateway API Verification (Server-to-Server)
    // Directly query Razorpay to guarantee the payment is authentic, captured, and belongs to our order.
    // ------------------------------------------------------------------------
    const paymentDetails = await fetchRazorpayPayment(razorpay_payment_id);

    if (paymentDetails.order_id !== razorpay_order_id) {
      console.error(`[SecurityAlert:OrderMismatch] Payment ${razorpay_payment_id} belongs to order ${paymentDetails.order_id}, not ${razorpay_order_id}`);
      return NextResponse.json(
        { success: false, error: 'Payment does not belong to the initialized order.' },
        { status: 400 }
      );
    }

    const isCapturedOrAuthorized = 
      paymentDetails.status === 'captured' || 
      paymentDetails.status === 'authorized' || 
      paymentDetails.captured === true;

    if (!isCapturedOrAuthorized) {
      return NextResponse.json(
        { success: false, error: `Payment is not successful (Current status: ${paymentDetails.status}).` },
        { status: 400 }
      );
    }

    if (paymentDetails.currency !== 'INR') {
      return NextResponse.json(
        { success: false, error: 'Invalid currency. Only INR payments are accepted.' },
        { status: 400 }
      );
    }

    // ------------------------------------------------------------------------
    // 🛡️ SECURITY DEFENSE 5: Server-Side Cart Re-Calculation & Exact Amount Matching
    // Calculate the authentic order total from the master database.
    // Compare against the EXACT amount charged by Razorpay in paise.
    // ------------------------------------------------------------------------
    const serverCalculation = calculateServerOrderTotal(
      items,
      customer.state,
      customer.pincode
    );

    const expectedAmountInPaise = Math.round(serverCalculation.finalTotal * 100);

    if (paymentDetails.amount !== expectedAmountInPaise) {
      console.error(
        `[SecurityAlert:AmountTampering] Amount mismatch! Paid: ${paymentDetails.amount} paise, Expected: ${expectedAmountInPaise} paise`
      );
      return NextResponse.json(
        { 
          success: false, 
          error: 'Security alert: Amount paid does not match the cart total. Transaction flagged for audit.' 
        },
        { status: 400 }
      );
    }

    // ------------------------------------------------------------------------
    // 🛡️ SECURITY DEFENSE 6: Build Verified Order Items Payload
    // Inject verified catalog prices, pack sizes, and formulations.
    // ------------------------------------------------------------------------
    const verifiedOrderItems = [
      ...serverCalculation.verifiedItems.map(it => ({
        productId: it.productId,
        productName: it.productName,
        tamilName: it.tamilName,
        price: it.price,
        mrp: it.originalPrice,
        quantity: it.quantity,
        packSize: it.packSize,
        formulation: it.formulation
      })),
      ...(Array.isArray(freeGiftItems) ? freeGiftItems : []).map(g => ({
        productId: g.product?.id || g.productId,
        productName: `${g.product?.name || g.productName || 'Bonus'} (Free Bonus)`,
        tamilName: `${g.product?.tamilName || g.tamilName || ''} (இலவச மருந்து)`,
        price: 0,
        mrp: g.product?.originalPrice || g.product?.price || 0,
        quantity: g.quantity || 1,
        packSize: g.product?.packSize || g.packSize || '',
        formulation: g.product?.formulation || g.formulation || ''
      }))
    ];

    // ------------------------------------------------------------------------
    // 🛡️ SECURITY DEFENSE 7: Persist Order as Confirmed & Dispatched PDF
    // ------------------------------------------------------------------------
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
      items: verifiedOrderItems,
      subtotal: serverCalculation.subtotal,
      discount: serverCalculation.discountTotal,
      deliveryCharge: serverCalculation.shippingFee,
      finalTotal: serverCalculation.finalTotal,
      deliveryMethod: deliveryMethod || 'Tamil Nadu Express Courier',
      paymentMethod: 'razorpay',
      transactionRef: razorpay_payment_id,
      notes: notes ? `${notes} | Razorpay: ${razorpay_payment_id}` : `Razorpay: ${razorpay_payment_id}`
    });

    // Asynchronously dispatch official tax invoice PDF
    sendInvoiceEmail({ order }).catch(err => {
      console.error(`[Razorpay:EmailError] Failed to send invoice email for ${order.orderNumber}:`, err);
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      orderNumber: order.orderNumber,
      invoiceNumber: order.invoice?.invoiceNumber,
      transactionRef: razorpay_payment_id,
      order
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Payment verification error';
    console.error('[API:RazorpayVerifyPayment:Exception]', error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
