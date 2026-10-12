import crypto from 'crypto';
import { PRODUCTS } from '@/data/products';
import { calculateShippingFee } from '@/utils/deliveryEstimator';
import { calculateItemDiscountPercent } from '@/utils/pricingPolicy';

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_Tmvd0qOLxg3HsW';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'rN9nxh3gA6ydaLLy9zCxbLE2';

export interface RazorpayOrderResponse {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: string;
  attempts: number;
  notes: Record<string, string>;
  created_at: number;
}

export interface RazorpayPaymentDetails {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  status: string;
  order_id: string;
  method: string;
  captured: boolean;
  email?: string;
  contact?: string;
}

/**
 * Creates an order directly with Razorpay API (amount in INR converted to paise)
 */
export async function createRazorpayOrder({
  amount,
  receipt,
  notes = {}
}: {
  amount: number; // in INR
  receipt: string;
  notes?: Record<string, string>;
}): Promise<RazorpayOrderResponse> {
  const amountInPaise = Math.round(amount * 100);

  const authHeader = 'Basic ' + Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authHeader
    },
    body: JSON.stringify({
      amount: amountInPaise,
      currency: 'INR',
      receipt: receipt.slice(0, 40),
      notes
    })
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody?.error?.description || `Razorpay order creation failed with status ${response.status}`;
    console.error('[Razorpay:CreateOrderError]', errorBody);
    throw new Error(message);
  }

  return await response.json();
}

/**
 * Fetches verified payment details directly from Razorpay's API to confirm amount, currency, and capture status.
 */
export async function fetchRazorpayPayment(paymentId: string): Promise<RazorpayPaymentDetails> {
  const authHeader = 'Basic ' + Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

  const response = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
    method: 'GET',
    headers: {
      Authorization: authHeader
    }
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody?.error?.description || `Failed to fetch payment status: ${response.status}`;
    console.error('[Razorpay:FetchPaymentError]', errorBody);
    throw new Error(message);
  }

  return await response.json();
}

/**
 * Cryptographically verifies Razorpay payment signature using HMAC SHA256 (Constant-Time Safe)
 */
export function verifyRazorpaySignature({
  orderId,
  paymentId,
  signature
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  try {
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');

    const expectedBuf = Buffer.from(expectedSignature, 'utf-8');
    const signatureBuf = Buffer.from(signature, 'utf-8');

    if (expectedBuf.length !== signatureBuf.length) {
      return false;
    }

    return crypto.timingSafeEqual(expectedBuf, signatureBuf);
  } catch (err) {
    console.error('[Razorpay:SignatureVerificationError]', err);
    return false;
  }
}

/**
 * STRICT SERVER-SIDE CART VALIDATION & TOTAL RE-CALCULATION
 * Prevents client-side price modification, quantity tampering, or discount forging.
 */
export function calculateServerOrderTotal(
  items: Array<{ productId: string; quantity: number }>,
  state?: string,
  pincode?: string
) {
  if (!items || items.length === 0) {
    throw new Error('Cart cannot be empty');
  }

  let subtotal = 0;
  let discountTotal = 0;
  const verifiedItems: Array<{
    productId: string;
    productName: string;
    tamilName?: string;
    formulation: string;
    packSize: string;
    quantity: number;
    price: number;
    originalPrice: number;
  }> = [];

  for (const item of items) {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) {
      throw new Error(`Invalid product in cart: ID ${item.productId} does not exist in master catalog`);
    }

    if (product.isComingSoon || !product.inStock) {
      throw new Error(`Product "${product.name}" is currently unavailable or out of stock`);
    }

    const qty = Math.max(1, Math.floor(Number(item.quantity) || 1));
    const linePrice = product.price;
    const itemSubtotal = linePrice * qty;

    const discountPercent = calculateItemDiscountPercent(qty);
    const itemDiscount = Math.round((itemSubtotal * discountPercent) / 100);

    subtotal += itemSubtotal;
    discountTotal += itemDiscount;

    verifiedItems.push({
      productId: product.id,
      productName: product.name,
      tamilName: product.tamilName,
      formulation: product.formulation,
      packSize: product.packSize,
      quantity: qty,
      price: linePrice,
      originalPrice: product.originalPrice || linePrice
    });
  }

  const discountedSubtotal = subtotal - discountTotal;
  const shippingCalculation = calculateShippingFee(discountedSubtotal, state, pincode);
  const shippingFee = shippingCalculation.fee;
  const finalTotal = discountedSubtotal + shippingFee;

  return {
    subtotal,
    discountTotal,
    discountedSubtotal,
    shippingFee,
    finalTotal,
    verifiedItems
  };
}
