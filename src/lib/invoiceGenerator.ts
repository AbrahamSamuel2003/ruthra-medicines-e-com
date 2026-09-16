import { jsPDF } from 'jspdf';
import JSZip from 'jszip';
import { Order } from '@/types/admin';

/**
 * Sanitizes strings for standard PDF WinAnsi / ASCII encoding.
 * Strips non-ASCII Unicode characters that cause font corruption in standard jsPDF Helvetica.
 */
function sanitizePdfText(text?: string | null): string {
  if (!text) return '';
  return text
    .replace(/[^\x20-\x7E\n\r\t]/g, '') // Keep standard printable ASCII
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Formats currency into clean, standard Indian Currency notation (e.g. "Rs. 1,146")
 */
function formatInr(amount: number): string {
  const num = Math.round(amount);
  return `Rs. ${num.toLocaleString('en-IN')}`;
}

/**
 * Generates a publication-grade, professional A4 Tax Invoice PDF for Ruthra Medicines.
 */
export function generateOrderInvoicePdf(order: Order): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm
  let y = 14;

  const isPaid = order.payment.status === 'PAID';
  const isCod = order.payment.method === 'cod';

  // ---------------------------------------------------------------------------
  // 1. BRAND & HEADER BANNER (Executive Dark Green #16382B)
  // ---------------------------------------------------------------------------
  const headerHeight = 26;
  doc.setFillColor(22, 56, 43); // #16382B
  doc.roundedRect(margin, y, contentWidth, headerHeight, 3, 3, 'F');

  // Left Brand Details
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('RUTHRA MEDICINES', margin + 6, y + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(223, 179, 108); // #DFB36C Accent Gold
  doc.text('SIDDHA & AYURVEDA PHARMACOPEIA • TIRUNELVELI', margin + 6, y + 14);

  doc.setFontSize(7);
  doc.setTextColor(220, 235, 228);
  doc.text('Support & WhatsApp: +91 91715 08042 | Email: orders@ruthramedicos.com', margin + 6, y + 20);

  // Right Header Metadata (Tax Invoice Title, Invoice #, Date)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(255, 255, 255);
  doc.text(isPaid ? 'TAX INVOICE' : 'PROFORMA / COD INVOICE', pageWidth - margin - 6, y + 8, { align: 'right' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(223, 179, 108);
  const invoiceNum = sanitizePdfText(order.invoice?.invoiceNumber) || (order.orderNumber.startsWith('RM-') ? `INV-${order.orderNumber.slice(3)}` : `INV-${order.orderNumber}`);
  doc.text(invoiceNum, pageWidth - margin - 6, y + 14, { align: 'right' });

  const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(220, 235, 228);
  doc.text(`Date: ${orderDate}`, pageWidth - margin - 6, y + 20, { align: 'right' });

  y += headerHeight + 5;

  // ---------------------------------------------------------------------------
  // 2. PAYMENT STATUS BANNER (High-Contrast Full-Width Tag)
  // ---------------------------------------------------------------------------
  const statusBannerHeight = 8;
  if (isPaid) {
    doc.setFillColor(236, 253, 245); // Emerald-50
    doc.roundedRect(margin, y, contentWidth, statusBannerHeight, 2, 2, 'F');
    doc.setDrawColor(167, 243, 208); // Emerald-200
    doc.roundedRect(margin, y, contentWidth, statusBannerHeight, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(6, 95, 70); // Emerald-800
    const txnText = order.payment.transactionRef ? ` | Ref: ${sanitizePdfText(order.payment.transactionRef)}` : '';
    const statusText = `PAYMENT STATUS: PAID IN FULL (${formatInr(order.finalTotal)}) via ${order.payment.method.toUpperCase()}${txnText}`;
    doc.text(statusText, margin + 4, y + 5.3);
  } else {
    doc.setFillColor(254, 243, 199); // Amber-50
    doc.roundedRect(margin, y, contentWidth, statusBannerHeight, 2, 2, 'F');
    doc.setDrawColor(253, 230, 138); // Amber-200
    doc.roundedRect(margin, y, contentWidth, statusBannerHeight, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(146, 64, 14); // Amber-800
    doc.text(`PAYMENT STATUS: CASH ON DELIVERY (COD) DUE | Amount to Collect at Doorstep: ${formatInr(order.finalTotal)}`, margin + 4, y + 5.3);
  }

  y += statusBannerHeight + 5;

  // ---------------------------------------------------------------------------
  // 3. TWO-COLUMN METADATA CARDS (Customer & Order Info)
  // ---------------------------------------------------------------------------
  const cardGap = 5;
  const cardWidth = (contentWidth - cardGap) / 2; // 88.5mm
  const cardHeight = 38;

  // Left Card: Billed & Delivered To
  doc.setFillColor(248, 250, 252); // Slate-50
  doc.roundedRect(margin, y, cardWidth, cardHeight, 2, 2, 'F');
  doc.setDrawColor(226, 232, 240); // Slate-200
  doc.roundedRect(margin, y, cardWidth, cardHeight, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(22, 56, 43);
  doc.text('BILLED & DELIVERED TO:', margin + 4, y + 6);

  const customerName = sanitizePdfText(order.shippingSnapshot?.fullName || order.customer.fullName);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(customerName, margin + 4, y + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  const phone = sanitizePdfText(order.shippingSnapshot?.phone || order.customer.phone);
  doc.text(`Phone: ${phone}`, margin + 4, y + 17.5);

  const email = sanitizePdfText(order.shippingSnapshot?.email || order.customer.email);
  if (email) {
    doc.text(`Email: ${email}`, margin + 4, y + 22.5);
  }

  const rawAddress = sanitizePdfText(order.shippingSnapshot?.address || order.customer.address);
  const rawCity = sanitizePdfText(order.shippingSnapshot?.city || order.customer.city);
  const rawState = sanitizePdfText(order.shippingSnapshot?.state || order.customer.state) || 'Tamil Nadu';
  const rawPincode = sanitizePdfText(order.shippingSnapshot?.pincode || order.customer.pincode);
  const addressLine = `${rawAddress}, ${rawCity}, ${rawState} - ${rawPincode}`;

  const splitAddr = doc.splitTextToSize(addressLine, cardWidth - 8);
  const addrStartY = email ? y + 27.5 : y + 23;
  doc.text(splitAddr.slice(0, 2), margin + 4, addrStartY);

  // Right Card: Order & Dispatch Metadata
  const col2X = margin + cardWidth + cardGap;
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(col2X, y, cardWidth, cardHeight, 2, 2, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(col2X, y, cardWidth, cardHeight, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(22, 56, 43);
  doc.text('ORDER & DISPATCH METADATA:', col2X + 4, y + 6);

  const metaLabels = [
    { label: 'Order Number:', val: sanitizePdfText(order.orderNumber), isBold: true },
    { label: 'Order Date:', val: `${orderDate}`, isBold: false },
    { label: 'Delivery Carrier:', val: sanitizePdfText(order.deliveryMethod) || 'Tamil Nadu Express Courier', isBold: false },
    { label: 'Payment Mode:', val: sanitizePdfText(order.payment.method).toUpperCase(), isBold: true },
    { label: 'Order Status:', val: sanitizePdfText(order.status), isBold: true }
  ];

  let metaY = y + 12;
  metaLabels.forEach((m) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(m.label, col2X + 4, metaY);

    doc.setFont('helvetica', m.isBold ? 'bold' : 'normal');
    doc.setTextColor(15, 23, 42);
    doc.text(m.val, col2X + 32, metaY);
    metaY += 5;
  });

  y += cardHeight + 6;

  // ---------------------------------------------------------------------------
  // 4. STRUCTURED PRODUCT TABLE (Clean, Professional 7-Column Layout)
  // ---------------------------------------------------------------------------
  // Column definitions (Sum = 182mm)
  const c1 = margin;            // S.No (10mm)
  const c2 = margin + 10;       // Product Name (66mm)
  const c3 = margin + 76;       // Formulation (28mm)
  const c4 = margin + 104;      // Pack Size (24mm)
  const c5 = margin + 128;      // Qty (14mm)
  const c6 = margin + 142;      // Unit Price (20mm)
  const c7 = margin + 162;      // Total (20mm) - ends at margin + 182

  const tableHeaderHeight = 7.5;
  doc.setFillColor(22, 56, 43); // #16382B Dark Green Header
  doc.rect(margin, y, contentWidth, tableHeaderHeight, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);

  doc.text('#', c1 + 4, y + 5, { align: 'center' });
  doc.text('Product Name', c2 + 2, y + 5);
  doc.text('Formulation', c3 + 2, y + 5);
  doc.text('Pack Size', c4 + 2, y + 5);
  doc.text('Qty', c5 + 7, y + 5, { align: 'center' });
  doc.text('Unit Price', c6 + 18, y + 5, { align: 'right' });
  doc.text('Total', margin + contentWidth - 2, y + 5, { align: 'right' });

  y += tableHeaderHeight;

  // Item Rows
  order.items.forEach((item, idx) => {
    const isEven = idx % 2 === 0;
    const cleanProductName = sanitizePdfText(item.productName) || 'Siddha Herbal Formulation';
    const cleanFormulation = sanitizePdfText(item.formulation) || 'Chooranam';
    const cleanPackSize = sanitizePdfText(item.packSize) || 'Standard';

    // Wrap product name if needed
    const nameLines = doc.splitTextToSize(cleanProductName, 62);
    const rowHeight = Math.max(7.5, nameLines.length * 4.2 + 3);

    // Row Background
    if (isEven) {
      doc.setFillColor(255, 255, 255);
    } else {
      doc.setFillColor(248, 250, 252); // Slate-50
    }
    doc.rect(margin, y, contentWidth, rowHeight, 'F');

    // Bottom Border
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y + rowHeight, margin + contentWidth, y + rowHeight);

    // S.No
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text(String(idx + 1), c1 + 4, y + 5, { align: 'center' });

    // Product Name (Wrapped cleanly)
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(nameLines, c2 + 2, y + 4.5);

    // Formulation
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(cleanFormulation, c3 + 2, y + 5);

    // Pack Size
    doc.text(cleanPackSize, c4 + 2, y + 5);

    // Qty
    doc.setFont('helvetica', 'bold');
    doc.text(String(item.quantity), c5 + 7, y + 5, { align: 'center' });

    // Unit Price
    doc.setFont('helvetica', 'normal');
    doc.text(formatInr(item.unitPrice), c6 + 18, y + 5, { align: 'right' });

    // Line Total
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(formatInr(item.lineTotal), margin + contentWidth - 2, y + 5, { align: 'right' });

    y += rowHeight;
  });

  y += 5;

  // ---------------------------------------------------------------------------
  // 5. FINANCIAL SUMMARY & TOTALS (Right-Aligned Executive Box)
  // ---------------------------------------------------------------------------
  const summaryWidth = 78;
  const summaryX = pageWidth - margin - summaryWidth;
  const summaryHeight = 36;

  doc.setFillColor(248, 250, 252);
  doc.roundedRect(summaryX, y, summaryWidth, summaryHeight, 2, 2, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(summaryX, y, summaryWidth, summaryHeight, 2, 2, 'S');

  // Subtotal
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Subtotal:', summaryX + 4, y + 6);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(formatInr(order.subtotal), summaryX + summaryWidth - 4, y + 6, { align: 'right' });

  // Direct Discount
  if (order.discount > 0) {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(6, 95, 70); // Green
    doc.text('Direct Discount:', summaryX + 4, y + 12);
    doc.setFont('helvetica', 'bold');
    doc.text(`- ${formatInr(order.discount)}`, summaryX + summaryWidth - 4, y + 12, { align: 'right' });
  } else {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('Direct Discount:', summaryX + 4, y + 12);
    doc.text('Rs. 0', summaryX + summaryWidth - 4, y + 12, { align: 'right' });
  }

  // Delivery Charge
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Delivery Charge:', summaryX + 4, y + 18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(order.deliveryCharge === 0 ? 'FREE' : formatInr(order.deliveryCharge), summaryX + summaryWidth - 4, y + 18, { align: 'right' });

  // Separator Line
  doc.setDrawColor(203, 213, 225);
  doc.line(summaryX + 4, y + 22, summaryX + summaryWidth - 4, y + 22);

  // Grand Total
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(22, 56, 43); // Dark Green
  doc.text(isPaid ? 'Total Paid:' : 'Total Payable (COD):', summaryX + 4, y + 29);
  doc.text(formatInr(order.finalTotal), summaryX + summaryWidth - 4, y + 29, { align: 'right' });

  // ---------------------------------------------------------------------------
  // 6. CLINICAL ASSURANCE & SIDDHA PHARMACOPEIA NOTE (Left Side Box)
  // ---------------------------------------------------------------------------
  const leftNoteWidth = contentWidth - summaryWidth - 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(22, 56, 43);
  doc.text('Classical Siddha & Traditional Pharmacopeia Guarantee', margin, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(71, 85, 105);
  doc.text('All formulations are compounded in Tirunelveli adhering strictly to', margin, y + 12);
  doc.text('classical Siddha Shodhana purification methods and GMP safety standards.', margin, y + 16);
  doc.text('For clinical consultation or dosage advice: WhatsApp +91 91715 08042', margin, y + 20);

  // ---------------------------------------------------------------------------
  // 7. FOOTER & AUTHORIZED SIGNATORY (Bottom of A4)
  // ---------------------------------------------------------------------------
  const footerY = 280;
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, footerY, pageWidth - margin, footerY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Ruthra Medicines • Computer Generated Tax Invoice • Tirunelveli, Tamil Nadu', margin, footerY + 5);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(71, 85, 105);
  doc.text('Authorized Signatory for Ruthra Medicines', pageWidth - margin, footerY + 5, { align: 'right' });

  return doc;
}

/**
 * Generates a binary Buffer representation of the PDF invoice for server-side email attachments
 */
export function generateOrderInvoicePdfBuffer(order: Order): Buffer {
  const doc = generateOrderInvoicePdf(order);
  const arrayBuffer = doc.output('arraybuffer');
  return Buffer.from(arrayBuffer);
}

/**
 * Packages multiple PDF invoices into one compressed ZIP file for date-range bulk download
 */
export async function generateInvoicesZip(orders: Order[]): Promise<Blob> {
  const zip = new JSZip();

  for (const order of orders) {
    const doc = generateOrderInvoicePdf(order);
    const pdfBlob = doc.output('blob');
    
    // Clean safe filename
    const safeCustomerName = sanitizePdfText(order.customer.fullName).replace(/[^a-zA-Z0-9]/g, '_') || 'Customer';
    const filename = `Invoice_${order.orderNumber}_${safeCustomerName}.pdf`;

    zip.file(filename, pdfBlob);
  }

  return await zip.generateAsync({ type: 'blob' });
}
