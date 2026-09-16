import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { Order, DailySummaryReport } from '@/types/admin';
import { generateOrderInvoicePdfBuffer } from './invoiceGenerator';
import { STORE_CONFIG } from './config';

interface SendInvoiceEmailOptions {
  order: Order;
  recipientEmail?: string;
  recipientName?: string;
  isStatusUpdate?: boolean;
}

interface SendDailySummaryEmailOptions {
  summary: DailySummaryReport;
  recipientEmail?: string;
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  mode: 'resend' | 'smtp' | 'simulated';
  recipient: string;
  previewUrl?: string;
  previewFilePath?: string;
  error?: string;
}

/**
 * Creates an SMTP Transporter if environment variables are configured
 */
function getSmtpTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
  }

  return null;
}

/**
 * Builds the official Ruthra responsive HTML email template for order invoices
 */
function buildInvoiceEmailHtml(order: Order, recipientName: string): string {
  const isPaid = order.payment.status === 'PAID';
  const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const itemsRows = order.items
    .map(
      (item) => `
      <tr style="border-bottom: 1px solid #E8F1EB;">
        <td style="padding: 10px 8px; font-size: 13px; color: #16382B;">
          <strong>${item.productName}</strong>
          ${item.tamilName ? `<div style="font-size: 11px; color: #3D5A68;">${item.tamilName}</div>` : ''}
          <div style="font-size: 11px; color: #8A9B93;">Pack: ${item.packSize} • ${item.formulation}</div>
        </td>
        <td style="padding: 10px 8px; font-size: 13px; text-align: center; color: #3D5A68;">${item.quantity}</td>
        <td style="padding: 10px 8px; font-size: 13px; text-align: right; color: #3D5A68;">₹${item.unitPrice}</td>
        <td style="padding: 10px 8px; font-size: 13px; text-align: right; font-weight: bold; color: #16382B;">₹${item.lineTotal}</td>
      </tr>
    `
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Ruthra Medicines Invoice</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #264653; line-height: 1.5;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(22, 56, 43, 0.1); box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- BRAND HEADER -->
    <div style="background-color: #16382B; padding: 28px 24px; text-align: center; color: #ffffff;">
      <div style="display: inline-block; width: 44px; height: 44px; line-height: 44px; border-radius: 12px; background: linear-gradient(135deg, #DFB36C, #C29043); color: #16382B; font-weight: bold; font-size: 22px; font-family: serif; margin-bottom: 8px;">
        R
      </div>
      <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 0.5px; color: #ffffff;">RUTHRA MEDICINES</h1>
      <p style="margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #DFB36C;">
        Siddha &amp; Ayurveda Dispensary • Tirunelveli
      </p>
    </div>

    <!-- MAIN BODY -->
    <div style="padding: 24px 24px 16px 24px;">
      <p style="font-size: 15px; margin-top: 0; color: #16382B;">
        Vanakkam <strong>${recipientName || 'Valued Customer'}</strong>,
      </p>
      
      <p style="font-size: 14px; color: #3D5A68; margin-bottom: 20px;">
        Thank you for ordering your classical Siddha formulations with Ruthra Medicines. Your official tax invoice (<strong>${order.invoice?.invoiceNumber || `INV-${order.orderNumber}`}</strong>) is attached to this email as a PDF.
      </p>

      <!-- PAYMENT STATUS CARD -->
      <div style="background-color: ${isPaid ? '#E8F1EB' : '#FEF3C7'}; border: 1px solid ${isPaid ? '#22C55E' : '#F59E0B'}; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 11px; text-transform: uppercase; font-weight: bold; color: ${isPaid ? '#166534' : '#92400E'}; margin-bottom: 4px;">
          ${isPaid ? 'Payment Received & Verified' : 'Cash On Delivery (Payment Due)'}
        </div>
        <div style="font-size: 16px; font-weight: bold; color: ${isPaid ? '#14532D' : '#78350F'};">
          ${isPaid ? `Amount Paid: ₹${order.finalTotal}` : `Amount to Pay at Delivery: ₹${order.finalTotal}`}
        </div>
        <div style="font-size: 12px; color: ${isPaid ? '#166534' : '#92400E'}; margin-top: 4px;">
          ${
            isPaid
              ? `Paid via ${order.payment.method.toUpperCase()} ${order.payment.transactionRef ? `(Ref: ${order.payment.transactionRef})` : ''}`
              : 'Please keep the exact cash amount ready at the time of doorstep courier delivery.'
          }
        </div>
      </div>

      <!-- ORDER DETAILS METADATA -->
      <table style="width: 100%; font-size: 12px; margin-bottom: 20px; color: #3D5A68; border-collapse: collapse;">
        <tr>
          <td style="padding: 4px 0;"><strong>Order Number:</strong> ${order.orderNumber}</td>
          <td style="padding: 4px 0; text-align: right;"><strong>Date:</strong> ${orderDate}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0;"><strong>Delivery Partner:</strong> ${order.deliveryMethod}</td>
          <td style="padding: 4px 0; text-align: right;"><strong>Status:</strong> ${order.status}</td>
        </tr>
      </table>

      <!-- ITEMS TABLE -->
      <div style="border: 1px solid #E8F1EB; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background-color: #E8F1EB; color: #16382B; font-size: 11px; text-transform: uppercase;">
              <th style="padding: 8px;">Product</th>
              <th style="padding: 8px; text-align: center;">Qty</th>
              <th style="padding: 8px; text-align: right;">Price</th>
              <th style="padding: 8px; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsRows}
          </tbody>
        </table>
      </div>

      <!-- PRICE SUMMARY -->
      <table style="width: 100%; font-size: 13px; color: #3D5A68; margin-bottom: 24px;">
        <tr>
          <td style="text-align: right; padding: 3px 0;">Subtotal:</td>
          <td style="text-align: right; padding: 3px 0; width: 90px;">₹${order.subtotal}</td>
        </tr>
        ${
          order.discount > 0
            ? `<tr>
                <td style="text-align: right; padding: 3px 0; color: #166534;">Discount:</td>
                <td style="text-align: right; padding: 3px 0; color: #166534;">-₹${order.discount}</td>
              </tr>`
            : ''
        }
        <tr>
          <td style="text-align: right; padding: 3px 0;">Delivery:</td>
          <td style="text-align: right; padding: 3px 0;">${order.deliveryCharge === 0 ? 'FREE' : `₹${order.deliveryCharge}`}</td>
        </tr>
        <tr style="border-top: 2px solid #16382B; font-size: 15px; font-weight: bold; color: #16382B;">
          <td style="text-align: right; padding: 8px 0 0 0;">Total:</td>
          <td style="text-align: right; padding: 8px 0 0 0;">₹${order.finalTotal}</td>
        </tr>
      </table>

      <!-- SHIPPING ADDRESS CARD -->
      <div style="background-color: #FAF8F5; border: 1px solid rgba(22, 56, 43, 0.1); border-radius: 10px; padding: 14px; font-size: 12px; color: #3D5A68; margin-bottom: 24px;">
        <strong style="color: #16382B; text-transform: uppercase; font-size: 11px; display: block; margin-bottom: 4px;">Delivering To:</strong>
        ${order.shippingSnapshot?.fullName || order.customer.fullName}<br>
        ${order.shippingSnapshot?.address || order.customer.address}, ${order.shippingSnapshot?.city || order.customer.city} - ${order.shippingSnapshot?.pincode || order.customer.pincode}<br>
        Phone: ${order.shippingSnapshot?.phone || order.customer.phone}
      </div>

      <!-- WHATSAPP & SUPPORT CTA -->
      <div style="text-align: center; padding: 16px; background-color: #F3F7F5; border-radius: 12px; margin-bottom: 12px;">
        <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: bold; color: #16382B;">
          Need doctor dosage guidance or courier tracking?
        </p>
        <a href="https://wa.me/919171508042?text=Vanakkam%20Ruthra,%20I%20have%20an%20inquiry%20regarding%20my%20order%20${order.orderNumber}"
           style="display: inline-block; background-color: #16382B; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 12px; font-weight: bold;">
          Chat with Ruthra on WhatsApp (+91 91715 08042)
        </a>
      </div>

    </div>

    <!-- FOOTER -->
    <div style="background-color: #FAF8F5; border-top: 1px solid rgba(22, 56, 43, 0.08); padding: 16px 24px; text-align: center; font-size: 11px; color: #8A9B93;">
      <p style="margin: 0 0 4px 0;">Ruthra Medicines &amp; Polyclinic, Tirunelveli, Tamil Nadu</p>
      <p style="margin: 0;">GMP Certified • Traditional Classical Siddha Shodhana Protocols</p>
    </div>

  </div>
</body>
</html>
  `.trim();
}

/**
 * Builds the official 8:00 PM Daily Sales & Order Summary HTML email for the Client/Admin
 */
function buildDailySummaryEmailHtml(summary: DailySummaryReport): string {
  const formattedDate = new Date(summary.date).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Mobile-friendly stacked order cards
  const ordersCards = (summary.orders || [])
    .map((order, idx) => {
      const orderTime = new Date(order.createdAt).toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit'
      });
      const isPaid = order.payment.status === 'PAID';

      const itemsListHtml = order.items
        .map(
          (it) => `
          <div style="font-size: 12px; color: #334155; margin-top: 3px; line-height: 1.4;">
            • <strong>${it.productName}</strong> <span style="color: #64748B;">(x${it.quantity})</span> — <span style="font-weight: bold; color: #0F172A;">₹${it.lineTotal}</span> <span style="font-size: 11px; color: #94A3B8;">(${it.packSize})</span>
          </div>
        `
        )
        .join('');

      return `
        <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <!-- Top Row: Order Number + Time + Total + Status -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            <tr>
              <td style="vertical-align: top; text-align: left;">
                <span style="font-family: monospace; font-weight: bold; font-size: 13px; color: #0F172A;">#${idx + 1} • ${order.orderNumber}</span>
                <span style="font-size: 11px; color: #64748B; margin-left: 6px;">${orderTime} IST</span>
              </td>
              <td style="vertical-align: top; text-align: right;">
                <span style="font-size: 15px; font-weight: bold; color: #0F172A;">₹${order.finalTotal}</span>
              </td>
            </tr>
          </table>

          <!-- Customer Info -->
          <div style="font-size: 12px; color: #1E293B; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px dashed #E2E8F0;">
            <strong>${order.customer.fullName}</strong> <span style="color: #64748B;">• ${order.customer.phone} • ${order.shippingSnapshot?.city || order.customer.city}</span>
            <div style="margin-top: 4px;">
              <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; text-transform: uppercase; border: 1px solid ${
                isPaid ? '#CBD5E1' : '#CBD5E1'
              }; color: #1E293B; background-color: #F8FAFC;">
                ${order.payment.method.toUpperCase()} • ${order.payment.status}
              </span>
            </div>
          </div>

          <!-- Items Ordered -->
          <div style="padding-top: 2px;">
            <span style="font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: bold; letter-spacing: 0.5px;">Formulations:</span>
            ${itemsListHtml}
          </div>
        </div>
      `;
    })
    .join('');

  const topProductsRows = summary.topProducts
    .map(
      (p, idx) => `
      <tr style="border-bottom: 1px solid #E2E8F0; font-size: 12px;">
        <td style="padding: 8px 8px; color: #64748B;">#${idx + 1}</td>
        <td style="padding: 8px 8px; color: #0F172A; font-weight: bold;">${p.name}</td>
        <td style="padding: 8px 8px; text-align: center; color: #334155;">${p.quantity} units</td>
        <td style="padding: 8px 8px; text-align: right; font-weight: bold; color: #0F172A;">₹${p.revenue}</td>
      </tr>
    `
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Operations & Sales Summary - Ruthra Medicines</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B; line-height: 1.5;">
  <div style="max-width: 620px; margin: 16px auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- BRAND HEADER (Minimal Dark Banner) -->
    <div style="background-color: #0F172A; padding: 24px 20px; color: #FFFFFF;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="vertical-align: middle;">
            <div style="display: inline-block; width: 36px; height: 36px; line-height: 36px; text-align: center; border-radius: 8px; background-color: #DFB36C; color: #0F172A; font-weight: bold; font-size: 18px; font-family: serif;">
              R
            </div>
          </td>
          <td style="padding-left: 12px; vertical-align: middle;">
            <h1 style="margin: 0; font-size: 18px; font-weight: bold; color: #FFFFFF; letter-spacing: 0.5px;">RUTHRA MEDICINES</h1>
            <p style="margin: 2px 0 0 0; font-size: 11px; color: #DFB36C; text-transform: uppercase; letter-spacing: 1px;">
              Daily Order &amp; Sales Summary • 8:00 PM IST
            </p>
          </td>
        </tr>
      </table>
      <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #94A3B8;">
        Report Date: <strong style="color: #FFFFFF;">${formattedDate}</strong>
      </div>
    </div>

    <!-- MAIN BODY -->
    <div style="padding: 20px;">
      
      <!-- FINANCIAL METRICS OVERVIEW (Clean Neutral Boxes Without Color Fills) -->
      <h3 style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748B;">
        Today's Summary Overview
      </h3>

      <table style="width: 100%; border-collapse: separate; border-spacing: 8px; margin-bottom: 20px;">
        <tr>
          <td style="width: 50%; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px; text-align: left;">
            <span style="font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: bold; display: block;">Total Gross Sales</span>
            <span style="font-size: 22px; font-weight: bold; color: #0F172A; display: block; margin-top: 4px;">₹${summary.totalSales}</span>
            <span style="font-size: 11px; color: #64748B;">${summary.totalOrders} total orders received</span>
          </td>
          <td style="width: 50%; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px; text-align: left;">
            <span style="font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: bold; display: block;">Collected Online (Paid)</span>
            <span style="font-size: 22px; font-weight: bold; color: #0F172A; display: block; margin-top: 4px;">₹${summary.paidAmount || 0}</span>
            <span style="font-size: 11px; color: #64748B;">${summary.paidOrders} verified payments</span>
          </td>
        </tr>
        <tr>
          <td style="width: 50%; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px; text-align: left;">
            <span style="font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: bold; display: block;">COD Due on Delivery</span>
            <span style="font-size: 22px; font-weight: bold; color: #0F172A; display: block; margin-top: 4px;">₹${summary.pendingCodAmount || 0}</span>
            <span style="font-size: 11px; color: #64748B;">${summary.pendingOrders} cash parcels to collect</span>
          </td>
          <td style="width: 50%; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 14px; text-align: left;">
            <span style="font-size: 11px; text-transform: uppercase; color: #64748B; font-weight: bold; display: block;">Customer Growth</span>
            <span style="font-size: 22px; font-weight: bold; color: #0F172A; display: block; margin-top: 4px;">+${summary.newCustomers}</span>
            <span style="font-size: 11px; color: #64748B;">New customer profiles added</span>
          </td>
        </tr>
      </table>

      <!-- ITEMIZED ORDERS LIST (Mobile Responsive Stacked Cards) -->
      <h3 style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748B;">
        Itemized Orders Received Today (${summary.totalOrders})
      </h3>

      <div style="margin-bottom: 24px;">
        ${ordersCards || '<div style="padding: 16px; text-align: center; color: #64748B; border: 1px solid #E2E8F0; border-radius: 10px;">No orders placed today.</div>'}
      </div>

      <!-- TOP SELLING FORMULATIONS -->
      ${
        summary.topProducts && summary.topProducts.length > 0
          ? `
        <h3 style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748B;">
          Top Selling Formulations Today
        </h3>
        <div style="border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden; margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
              <tr style="background-color: #F8FAFC; color: #64748B; font-size: 10px; text-transform: uppercase; border-bottom: 1px solid #E2E8F0;">
                <th style="padding: 8px;">Rank</th>
                <th style="padding: 8px;">Formulation</th>
                <th style="padding: 8px; text-align: center;">Qty</th>
                <th style="padding: 8px; text-align: right;">Revenue</th>
              </tr>
            </thead>
            <tbody>
              ${topProductsRows}
            </tbody>
          </table>
        </div>
      `
          : ''
      }

      <!-- ADMIN CONSOLE LINK -->
      <div style="text-align: center; padding: 14px; background-color: #F8FAFC; border-radius: 10px; border: 1px solid #E2E8F0;">
        <span style="font-size: 12px; color: #64748B;">Ruthra Admin Operations Console: </span>
        <a href="http://localhost:3000/admin/orders" style="color: #0F172A; font-weight: bold; text-decoration: underline; font-size: 12px;">
          View Live Orders
        </a>
      </div>

    </div>

    <!-- FOOTER -->
    <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 14px 20px; text-align: center; font-size: 11px; color: #94A3B8;">
      <p style="margin: 0 0 2px 0;">Automated 8:00 PM IST Daily Business Report • Ruthra Medicines, Tirunelveli</p>
      <p style="margin: 0;">Recipient: <strong>${STORE_CONFIG.adminNotificationEmail}</strong></p>
    </div>

  </div>
</body>
</html>
  `.trim();
}

/**
 * Dispatches the official Invoice PDF via Email to the customer
 */
export async function sendInvoiceEmail({
  order,
  recipientEmail,
  recipientName
}: SendInvoiceEmailOptions): Promise<EmailResult> {
  const targetEmail = recipientEmail || order.shippingSnapshot?.email || order.customer.email;
  const targetName = recipientName || order.shippingSnapshot?.fullName || order.customer.fullName || 'Customer';

  if (!targetEmail) {
    console.warn(`[Mailer] No email address associated with Order ${order.orderNumber}. Skipping email dispatch.`);
    return {
      success: false,
      recipient: '',
      mode: 'simulated',
      error: 'No customer email provided'
    };
  }

  try {
    const pdfBuffer = generateOrderInvoicePdfBuffer(order);
    const invoiceFilename = `Invoice_${order.orderNumber}.pdf`;
    const isPaid = order.payment.status === 'PAID';
    const subject = isPaid
      ? `Tax Invoice & Order Confirmation: ${order.orderNumber} - Ruthra Medicines`
      : `Order Confirmed (Cash on Delivery): ${order.orderNumber} - Ruthra Medicines`;

    const htmlContent = buildInvoiceEmailHtml(order, targetName);

    // 1. Check SMTP Transporter (e.g. Gmail / SendGrid / SES)
    const smtp = getSmtpTransporter();
    if (smtp) {
      const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_USER || 'orders@ruthramedicos.com';
      const info = await smtp.sendMail({
        from: `"Ruthra Medicines" <${fromAddress}>`,
        to: targetEmail,
        subject,
        html: htmlContent,
        attachments: [
          {
            filename: invoiceFilename,
            content: pdfBuffer,
            contentType: 'application/pdf'
          }
        ]
      });

      console.log(`[Mailer:SMTP] Dispatched invoice for ${order.orderNumber} to ${targetEmail} (ID: ${info.messageId})`);
      return {
        success: true,
        recipient: targetEmail,
        messageId: info.messageId,
        mode: 'smtp'
      };
    }

    // 2. Check Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const fromAddress = process.env.EMAIL_FROM || 'Ruthra Medicines <orders@ruthramedicos.com>';
      const pdfBase64 = pdfBuffer.toString('base64');
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [targetEmail],
          subject,
          html: htmlContent,
          attachments: [
            {
              filename: invoiceFilename,
              content: pdfBase64
            }
          ]
        })
      });

      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.message || 'Resend API returned an error');
      }

      console.log(`[Mailer:Resend] Dispatched invoice email for ${order.orderNumber} to ${targetEmail} (ID: ${resData.id})`);
      return {
        success: true,
        recipient: targetEmail,
        messageId: resData.id,
        mode: 'resend'
      };
    }

    // 3. Simulated local delivery
    console.log(
      `[Mailer:Simulated] Successfully prepared invoice email for Order ${order.orderNumber} to ${targetEmail} (Attachment: ${invoiceFilename}, Size: ${pdfBuffer.length} bytes)`
    );
    return {
      success: true,
      recipient: targetEmail,
      messageId: `sim_${Date.now()}`,
      mode: 'simulated'
    };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown mailer error';
    console.error(`[Mailer:Error] Failed to send invoice for Order ${order.orderNumber}:`, errorMsg);
    return {
      success: false,
      recipient: targetEmail,
      mode: 'simulated',
      error: errorMsg
    };
  }
}

/**
 * Dispatches the 8:00 PM Daily Sales & Order Summary Email to the Client / Admin Email
 */
export async function sendDailySummaryEmail({
  summary,
  recipientEmail
}: SendDailySummaryEmailOptions): Promise<EmailResult> {
  const targetEmail = recipientEmail || STORE_CONFIG.adminNotificationEmail;
  const subject = `[Ruthra Daily Summary] 8:00 PM Sales & Order Report - ${summary.date} (Gross: ₹${summary.totalSales})`;
  const htmlContent = buildDailySummaryEmailHtml(summary);

  // Save latest preview HTML for local browser inspection
  const previewDir = path.join(process.cwd(), 'data');
  const previewPath = path.join(previewDir, 'latest_daily_summary_email.html');
  try {
    if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir, { recursive: true });
    fs.writeFileSync(previewPath, htmlContent, 'utf-8');
  } catch {
    // ignore
  }

  try {
    // 1. Check SMTP Transporter (e.g. Gmail / SendGrid / SES)
    const smtp = getSmtpTransporter();
    if (smtp) {
      const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_USER || 'reports@ruthramedicos.com';
      const info = await smtp.sendMail({
        from: `"Ruthra Medicines Reporting" <${fromAddress}>`,
        to: targetEmail,
        subject,
        html: htmlContent
      });

      console.log(`[Mailer:SMTP] Dispatched 8:00 PM summary to ${targetEmail} (Message ID: ${info.messageId})`);
      return {
        success: true,
        recipient: targetEmail,
        messageId: info.messageId,
        mode: 'smtp',
        previewFilePath: previewPath
      };
    }

    // 2. Check Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const fromAddress = process.env.EMAIL_FROM || 'Ruthra Reporting <reports@ruthramedicos.com>';
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [targetEmail],
          subject,
          html: htmlContent
        })
      });

      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.message || 'Resend API returned an error');
      }

      console.log(`[Mailer:Resend] Dispatched 8:00 PM report to client (${targetEmail}) via Resend (ID: ${resData.id})`);
      return {
        success: true,
        recipient: targetEmail,
        messageId: resData.id,
        mode: 'resend',
        previewFilePath: previewPath
      };
    }

    // 3. Simulated local delivery (Saved to data/latest_daily_summary_email.html)
    console.log(
      `[Mailer:DailySummary] Compiled 8:00 PM Daily Sales Report for ${summary.date} to client ${targetEmail} (Total Sales: ₹${summary.totalSales}, Orders: ${summary.totalOrders}) -> Saved preview to: ${previewPath}`
    );
    return {
      success: true,
      recipient: targetEmail,
      messageId: `sim_summary_${Date.now()}`,
      mode: 'simulated',
      previewFilePath: previewPath
    };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown mailer error';
    console.error(`[Mailer:DailySummary:Error] Failed to dispatch summary report to ${targetEmail}:`, errorMsg);
    return {
      success: false,
      recipient: targetEmail,
      mode: 'simulated',
      previewFilePath: previewPath,
      error: errorMsg
    };
  }
}
