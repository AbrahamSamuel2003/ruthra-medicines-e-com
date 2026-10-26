import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import fs from 'fs';
import path from 'path';

let connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  const envFiles = ['.env.local', '.env'];
  for (const ef of envFiles) {
    const p = path.resolve(process.cwd(), ef);
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf-8');
      const m = content.match(/DATABASE_URL=["']?([^"'\r\n]+)["']?/);
      if (m) {
        connectionString = m[1];
        break;
      }
    }
  }
}

if (!connectionString) {
  console.error('ERROR: DATABASE_URL is not defined in environment or .env files.');
  process.exit(1);
}

let schema = 'ruthra';
try {
  const url = new URL(connectionString.replace('postgresql://', 'http://'));
  const s = url.searchParams.get('schema');
  if (s) schema = s;
} catch {}

const isCloud = connectionString.includes('supabase') || connectionString.includes('pooler');
const cleanConnectionString = connectionString.replace(/[?&]sslmode=[^&]+/g, '');

const pool = new Pool({
  connectionString: cleanConnectionString,
  ...(isCloud ? { ssl: { rejectUnauthorized: false } } : {})
});
const adapter = new PrismaPg(pool, { schema });
const prisma = new PrismaClient({ adapter });

const CUSTOMERS = [
  {
    fullName: 'Dr. Senthil Kumar, B.A.M.S.',
    phone: '+91 98401 23456',
    email: 'dr.senthil.kumar@gmail.com',
    fullAddress: 'No. 42, 4th Cross Street, Anna Nagar West',
    landmark: 'Near Tower Park',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600040'
  },
  {
    fullName: 'Ananya Sundaram',
    phone: '+91 98840 98765',
    email: 'ananya.sundaram@outlook.com',
    fullAddress: 'Flat 3B, Emerald Heights, Race Course Road',
    landmark: 'Opp. Police Club',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641018'
  },
  {
    fullName: 'K. R. Natarajan',
    phone: '+91 94432 11223',
    email: 'kr.natarajan.madurai@gmail.com',
    fullAddress: '15/2, West Veli Street',
    landmark: 'Near Meenakshi Temple West Tower',
    city: 'Madurai',
    state: 'Tamil Nadu',
    pincode: '625001'
  },
  {
    fullName: 'Dr. Meenakshi Raman',
    phone: '+91 94431 55667',
    email: 'dr.meenakshi.ayur@gmail.com',
    fullAddress: '88, High Ground Road, Palayamkottai',
    landmark: 'Behind St. Xavier’s College',
    city: 'Tirunelveli',
    state: 'Tamil Nadu',
    pincode: '627002'
  },
  {
    fullName: 'Venkatesh Prasad',
    phone: '+91 99001 77889',
    email: 'venkatesh.prasad@techcorp.in',
    fullAddress: 'Villa 14, Palm Meadows, Whitefield',
    landmark: 'Near ITPL',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560066'
  },
  {
    fullName: 'Priya Swaminathan',
    phone: '+91 98424 33445',
    email: 'priya.swami@gmail.com',
    fullAddress: '24, Williams Road, Cantonment',
    landmark: 'Near Central Bus Stand',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    pincode: '620001'
  },
  {
    fullName: 'Rajeshwari Sridhar',
    phone: '+91 97890 22334',
    email: 'rajeshwari.s@yahoo.com',
    fullAddress: '56, Cherry Road, Hasthampatti',
    landmark: 'Near Vincent Bus Stop',
    city: 'Salem',
    state: 'Tamil Nadu',
    pincode: '636007'
  },
  {
    fullName: 'Karthik Subramanian',
    phone: '+91 98408 66778',
    email: 'karthik.subramanian@gmail.com',
    fullAddress: '102, Harrington Road, Chetpet',
    landmark: 'Opp. MCC School',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600031'
  },
  {
    fullName: 'Divya Chandrasekaran',
    phone: '+91 94421 88990',
    email: 'divya.chandran@gmail.com',
    fullAddress: '12, Perundurai Road',
    landmark: 'Near Collectorate',
    city: 'Erode',
    state: 'Tamil Nadu',
    pincode: '638011'
  },
  {
    fullName: 'M. Alagappan',
    phone: '+91 94433 44556',
    email: 'alagappan.chet@gmail.com',
    fullAddress: '7, Subbiah Chettiar Street, Kottaiyur',
    landmark: 'Near Sivan Temple',
    city: 'Karaikudi',
    state: 'Tamil Nadu',
    pincode: '630106'
  },
  {
    fullName: 'Lakshmi Narayanan',
    phone: '+91 97911 33221',
    email: 'lakshmi.narayan.tjr@gmail.com',
    fullAddress: '45, South Rampart',
    landmark: 'Near Royal Palace',
    city: 'Thanjavur',
    state: 'Tamil Nadu',
    pincode: '613001'
  },
  {
    fullName: 'Suresh Balakrishnan',
    phone: '+91 98200 12345',
    email: 'suresh.bala.mumbai@gmail.com',
    fullAddress: '402, Sea Pearl Apartments, Matunga East',
    landmark: 'Near Ruia College',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400019'
  }
];

const ORDER_TEMPLATES = [
  // TODAY'S ORDERS (3 orders)
  {
    daysAgo: 0,
    hoursAgo: 2,
    customerIdx: 0,
    status: 'CONFIRMED' as const,
    deliveryMethod: 'Tamil Nadu Express Courier',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Urgent clinic dispatch for arthritic patients.',
    items: [
      { productId: 'prod-26', productName: 'Rejviyan Oil', tamilName: 'ரெஜ்-வியான் வலி நிவாரண தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 6, unitPrice: 180 },
      { productId: 'prod-prop-01', productName: 'Madhura Powder', tamilName: 'மதுரா பவுடர்', formulation: 'Chooranam', packSize: '30 Sachets', quantity: 2, unitPrice: 338 }
    ]
  },
  {
    daysAgo: 0,
    hoursAgo: 4,
    customerIdx: 1,
    status: 'PENDING' as const,
    deliveryMethod: 'Tamil Nadu Express Courier',
    paymentMethod: 'COD' as const,
    paymentStatus: 'PENDING' as const,
    deliveryCharge: 0,
    notes: 'Please call before delivery.',
    items: [
      { productId: 'prod-ti-01', productName: 'Pirandai Chooranam', tamilName: 'பிரண்டை சூரணம்', formulation: 'Chooranam', packSize: '100g', quantity: 2, unitPrice: 160 },
      { productId: 'prod-prop-07', productName: 'Narshika Oil', tamilName: 'நார்ஷிகா கூந்தல் தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 2, unitPrice: 180 }
    ]
  },
  {
    daysAgo: 0,
    hoursAgo: 6,
    customerIdx: 4,
    status: 'CONFIRMED' as const,
    deliveryMethod: 'India Post Speed Post',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Deliver to apartment reception.',
    items: [
      { productId: 'prod-prop-01', productName: 'Madhura Powder', tamilName: 'மதுரா பவுடர்', formulation: 'Chooranam', packSize: '30 Sachets', quantity: 3, unitPrice: 338 },
      { productId: 'prod-prop-02', productName: 'Navara Tablet', tamilName: 'நவரா மாத்திரை', formulation: 'Maathirai', packSize: '60 Tablets', quantity: 2, unitPrice: 240 }
    ]
  },

  // RECENT DISPATCHED ORDERS (4 orders)
  {
    daysAgo: 1,
    hoursAgo: 14,
    customerIdx: 2,
    status: 'DISPATCHED' as const,
    deliveryMethod: 'ST Courier',
    trackingUrl: 'https://stcourier.com/track/STC-TN-9842103',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Dispatched via ST Courier Express.',
    items: [
      { productId: 'prod-ti-03', productName: 'Nilavembu Kudineer', tamilName: 'நிலவேம்பு குடிநீர்', formulation: 'Kudineer', packSize: '100g', quantity: 5, unitPrice: 140 },
      { productId: 'prod-prop-03', productName: 'Sinocof Syrup', tamilName: 'சினோகாஃப் சிரப்', formulation: 'Syrups', packSize: '100ml', quantity: 3, unitPrice: 145 }
    ]
  },
  {
    daysAgo: 2,
    hoursAgo: 18,
    customerIdx: 3,
    status: 'DISPATCHED' as const,
    deliveryMethod: 'Professional Couriers',
    trackingUrl: 'https://tpcindia.com/track/TPC-8472910',
    paymentMethod: 'CARDS' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Annual seasonal monsoon care stock for family.',
    items: [
      { productId: 'prod-ti-04', productName: 'Kaba Sura Kudineer', tamilName: 'கப சுர குடிநீர்', formulation: 'Kudineer', packSize: '100g', quantity: 4, unitPrice: 150 },
      { productId: 'prod-26', productName: 'Rejviyan Oil', tamilName: 'ரெஜ்-வியான் வலி நிவாரண தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 4, unitPrice: 180 }
    ]
  },
  {
    daysAgo: 2,
    hoursAgo: 22,
    customerIdx: 5,
    status: 'DISPATCHED' as const,
    deliveryMethod: 'Tamil Nadu Express Courier',
    trackingUrl: 'https://stcourier.com/track/STC-TN-9842188',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Doctor prescription order.',
    items: [
      { productId: 'prod-ti-05', productName: 'Sathavari Legiyam', tamilName: 'சதாவரி லேகியம்', formulation: 'Legiyam', packSize: '250g', quantity: 2, unitPrice: 220 },
      { productId: 'prod-prop-05', productName: 'Ulcera Oil', tamilName: 'அல்சரா புண் தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 2, unitPrice: 175 }
    ]
  },
  {
    daysAgo: 3,
    hoursAgo: 10,
    customerIdx: 7,
    status: 'DISPATCHED' as const,
    deliveryMethod: 'India Post Speed Post',
    trackingUrl: 'https://indiapost.gov.in/speedpost/ET948102941IN',
    paymentMethod: 'COD' as const,
    paymentStatus: 'PENDING' as const,
    deliveryCharge: 0,
    notes: 'COD dispatched, courier instructed to collect ₹1,120.',
    items: [
      { productId: 'prod-26', productName: 'Rejviyan Oil', tamilName: 'ரெஜ்-வியான் வலி நிவாரண தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 4, unitPrice: 180 },
      { productId: 'prod-prop-04', productName: 'Esyswas Drops', tamilName: 'ஈஸிஸ்வாஸ் ஆவி சொட்டு மருந்து', formulation: 'Drops', packSize: '15ml', quantity: 4, unitPrice: 100 }
    ]
  },

  // DELIVERED ORDERS OVER PAST 3 WEEKS (15 orders)
  {
    daysAgo: 4,
    hoursAgo: 16,
    customerIdx: 0,
    status: 'DELIVERED' as const,
    deliveryMethod: 'Tamil Nadu Express Courier',
    trackingUrl: 'https://stcourier.com/track/STC-TN-9839912',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Delivered in Anna Nagar.',
    items: [
      { productId: 'prod-26', productName: 'Rejviyan Oil', tamilName: 'ரெஜ்-வியான் வலி நிவாரண தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 10, unitPrice: 180 },
      { productId: 'prod-ti-01', productName: 'Pirandai Chooranam', tamilName: 'பிரண்டை சூரணம்', formulation: 'Chooranam', packSize: '100g', quantity: 5, unitPrice: 160 }
    ]
  },
  {
    daysAgo: 5,
    hoursAgo: 12,
    customerIdx: 6,
    status: 'DELIVERED' as const,
    deliveryMethod: 'Professional Couriers',
    trackingUrl: 'https://tpcindia.com/track/TPC-8461902',
    paymentMethod: 'CARDS' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Delivered successfully.',
    items: [
      { productId: 'prod-26', productName: 'Rejviyan Oil', tamilName: 'ரெஜ்-வியான் வலி நிவாரண தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 3, unitPrice: 180 },
      { productId: 'prod-prop-02', productName: 'Navara Tablet', tamilName: 'நவரா மாத்திரை', formulation: 'Maathirai', packSize: '60 Tablets', quantity: 2, unitPrice: 240 }
    ]
  },
  {
    daysAgo: 7,
    hoursAgo: 15,
    customerIdx: 8,
    status: 'DELIVERED' as const,
    deliveryMethod: 'ST Courier',
    trackingUrl: 'https://stcourier.com/track/STC-TN-9831092',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Delivered in Erode.',
    items: [
      { productId: 'prod-prop-07', productName: 'Narshika Oil', tamilName: 'நார்ஷிகா கூந்தல் தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 4, unitPrice: 180 },
      { productId: 'prod-prop-09', productName: 'Nalanguma Powder', tamilName: 'நலங்கு மாவு', formulation: 'Personal Care', packSize: '200g', quantity: 3, unitPrice: 150 }
    ]
  },
  {
    daysAgo: 9,
    hoursAgo: 11,
    customerIdx: 9,
    status: 'DELIVERED' as const,
    deliveryMethod: 'India Post Speed Post',
    trackingUrl: 'https://indiapost.gov.in/speedpost/ET947291044IN',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Chettinad heritage household order.',
    items: [
      { productId: 'prod-ti-02', productName: 'Amukkara Chooranam', tamilName: 'அமுக்கரா சூரணம்', formulation: 'Chooranam', packSize: '100g', quantity: 4, unitPrice: 160 },
      { productId: 'prod-ti-06', productName: 'Thirikadugu Chooranam', tamilName: 'திரிகடுகு சூரணம்', formulation: 'Chooranam', packSize: '100g', quantity: 4, unitPrice: 140 }
    ]
  },
  {
    daysAgo: 11,
    hoursAgo: 14,
    customerIdx: 10,
    status: 'DELIVERED' as const,
    deliveryMethod: 'ST Courier',
    trackingUrl: 'https://stcourier.com/track/STC-TN-9828104',
    paymentMethod: 'COD' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Cash collected upon delivery at Thanjavur.',
    items: [
      { productId: 'prod-ti-03', productName: 'Nilavembu Kudineer', tamilName: 'நிலவேம்பு குடிநீர்', formulation: 'Kudineer', packSize: '100g', quantity: 6, unitPrice: 140 },
      { productId: 'prod-prop-08', productName: 'Ramabaana Kasayam', tamilName: 'ராமபாண கஷாயம்', formulation: 'Syrups', packSize: '200ml', quantity: 2, unitPrice: 180 }
    ]
  },
  {
    daysAgo: 14,
    hoursAgo: 9,
    customerIdx: 11,
    status: 'DELIVERED' as const,
    deliveryMethod: 'Delhivery Air Express',
    trackingUrl: 'https://delhivery.com/track/DEL-MUM-891024',
    paymentMethod: 'CARDS' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Interstate shipment to Mumbai Matunga.',
    items: [
      { productId: 'prod-26', productName: 'Rejviyan Oil', tamilName: 'ரெஜ்-வியான் வலி நிவாரண தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 6, unitPrice: 180 },
      { productId: 'prod-ti-07', productName: 'Pinda Thailam', tamilName: 'பிண்ட தைலம்', formulation: 'Thailam', packSize: '200ml', quantity: 3, unitPrice: 250 }
    ]
  },
  {
    daysAgo: 16,
    hoursAgo: 17,
    customerIdx: 1,
    status: 'DELIVERED' as const,
    deliveryMethod: 'Tamil Nadu Express Courier',
    trackingUrl: 'https://stcourier.com/track/STC-TN-9817742',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Delivered in Coimbatore.',
    items: [
      { productId: 'prod-prop-05', productName: 'Ulcera Oil', tamilName: 'அல்சரா புண் தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 3, unitPrice: 175 },
      { productId: 'prod-ti-01', productName: 'Pirandai Chooranam', tamilName: 'பிரண்டை சூரணம்', formulation: 'Chooranam', packSize: '100g', quantity: 2, unitPrice: 160 }
    ]
  },
  {
    daysAgo: 18,
    hoursAgo: 13,
    customerIdx: 3,
    status: 'DELIVERED' as const,
    deliveryMethod: 'Local Vaidya Messenger',
    trackingUrl: 'Local Dispatch Tirunelveli',
    paymentMethod: 'UPI' as const,
    paymentStatus: 'PAID' as const,
    deliveryCharge: 0,
    notes: 'Hand delivered to Palayamkottai clinic.',
    items: [
      { productId: 'prod-prop-01', productName: 'Madhura Powder', tamilName: 'மதுரா பவுடர்', formulation: 'Chooranam', packSize: '30 Sachets', quantity: 5, unitPrice: 338 },
      { productId: 'prod-26', productName: 'Rejviyan Oil', tamilName: 'ரெஜ்-வியான் வலி நிவாரண தைலம்', formulation: 'Thailam', packSize: '100ml', quantity: 5, unitPrice: 180 }
    ]
  }
];

async function seedDemoData() {
  console.log('🚀 Starting Enterprise Demo Data Seeding...');
  console.log(`Connecting to: ${cleanConnectionString.replace(/:[^:@]+@/, ':****@')}`);
  console.log(`Schema target: "${schema}"`);

  // 1. Seed or Upsert Customers
  console.log('\n👤 Seeding Customer Profiles...');
  const customerMap = new Map<number, { id: string; addressId: string; customer: typeof CUSTOMERS[0] }>();

  for (let i = 0; i < CUSTOMERS.length; i++) {
    const c = CUSTOMERS[i];
    let customer = await prisma.customer.findUnique({
      where: { phone: c.phone },
      include: { addresses: true }
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          fullName: c.fullName,
          phone: c.phone,
          email: c.email,
          totalOrders: 0,
          totalSpend: 0.0,
          addresses: {
            create: {
              fullAddress: c.fullAddress,
              landmark: c.landmark,
              city: c.city,
              state: c.state,
              pincode: c.pincode,
              addressType: 'HOME'
            }
          }
        },
        include: { addresses: true }
      });
      console.log(`  ✓ Created customer: ${c.fullName} (${c.city})`);
    } else {
      console.log(`  ✓ Existing customer: ${c.fullName} (${c.city})`);
    }

    customerMap.set(i, {
      id: customer.id,
      addressId: customer.addresses[0]?.id,
      customer: c
    });
  }

  // 2. Seed Realistic Orders, Items, Payments & Invoices
  console.log('\n📦 Seeding Realistic Orders & GST Invoices...');
  let totalOrderSpend = 0;
  let orderCounter = 1001;

  for (const tpl of ORDER_TEMPLATES) {
    const custInfo = customerMap.get(tpl.customerIdx)!;
    const orderNumber = `RM-2026-${orderCounter}`;
    const invoiceNumber = `INV-2026-${orderCounter}`;
    orderCounter++;

    // Calculate dates
    const orderDate = new Date();
    orderDate.setDate(orderDate.getDate() - tpl.daysAgo);
    orderDate.setHours(orderDate.getHours() - tpl.hoursAgo);

    // Calculate financials
    const subtotal = tpl.items.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const totalUnits = tpl.items.reduce((sum, item) => sum + item.quantity, 0);
    
    // Apply 10% volume discount if 5+ units
    const discount = totalUnits >= 5 ? Math.round(subtotal * 0.10) : 0;
    const finalTotal = subtotal - discount + tpl.deliveryCharge;
    totalOrderSpend += finalTotal;

    const shippingSnapshot = {
      fullName: custInfo.customer.fullName,
      phone: custInfo.customer.phone,
      email: custInfo.customer.email,
      address: custInfo.customer.fullAddress,
      landmark: custInfo.customer.landmark,
      city: custInfo.customer.city,
      state: custInfo.customer.state,
      pincode: custInfo.customer.pincode
    };

    // Upsert Order
    const existingOrder = await prisma.order.findUnique({
      where: { orderNumber }
    });

    if (existingOrder) {
      console.log(`  - Order ${orderNumber} already exists. Skipping.`);
      continue;
    }

    const order = await prisma.order.create({
      data: {
        orderNumber,
        customerId: custInfo.id,
        addressId: custInfo.addressId,
        status: tpl.status,
        subtotal,
        discount,
        deliveryCharge: tpl.deliveryCharge,
        tax: 0,
        finalTotal,
        deliveryMethod: tpl.deliveryMethod,
        shippingSnapshot,
        notes: tpl.notes,
        trackingUrl: tpl.trackingUrl || null,
        dispatchedAt: tpl.status === 'DISPATCHED' || tpl.status === 'DELIVERED' ? orderDate : null,
        createdAt: orderDate,
        updatedAt: orderDate,
        items: {
          create: tpl.items.map(item => ({
            productId: item.productId,
            productName: item.productName,
            tamilName: item.tamilName,
            formulation: item.formulation,
            packSize: item.packSize,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            lineTotal: item.unitPrice * item.quantity,
            createdAt: orderDate
          }))
        },
        payment: {
          create: {
            method: tpl.paymentMethod,
            amount: finalTotal,
            status: tpl.paymentStatus,
            transactionRef: tpl.paymentStatus === 'PAID' ? `pay_Rzp${Math.floor(1000000000 + Math.random() * 9000000000)}` : null,
            paidAt: tpl.paymentStatus === 'PAID' ? orderDate : null,
            createdAt: orderDate,
            updatedAt: orderDate
          }
        },
        invoice: {
          create: {
            invoiceNumber,
            issueDate: orderDate,
            subtotal,
            discount,
            deliveryCharge: tpl.deliveryCharge,
            tax: 0,
            finalTotal,
            customerName: custInfo.customer.fullName,
            customerPhone: custInfo.customer.phone,
            customerAddress: `${custInfo.customer.fullAddress}, ${custInfo.customer.city} - ${custInfo.customer.pincode}`,
            paymentMethod: tpl.paymentMethod,
            paymentStatus: tpl.paymentStatus,
            createdAt: orderDate
          }
        }
      }
    });

    // Update customer spend summary
    await prisma.customer.update({
      where: { id: custInfo.id },
      data: {
        totalOrders: { increment: 1 },
        totalSpend: { increment: finalTotal }
      }
    });

    console.log(`  ✓ Seeded Order #${order.orderNumber} (₹${finalTotal}) | Status: ${tpl.status} | Customer: ${custInfo.customer.fullName}`);
  }

  // 3. Ensure Master Admin Account Exists
  const bcrypt = require('bcryptjs');
  const passwordHash = await bcrypt.hash('admin1234', 10);
  await prisma.admin.upsert({
    where: { email: 'admin1234@gmail.com' },
    update: { passwordHash, name: 'Ruthra Master Admin' },
    create: { email: 'admin1234@gmail.com', passwordHash, name: 'Ruthra Master Admin' }
  });
  console.log('\n🔐 Master Admin Configured: admin1234@gmail.com / admin1234');

  console.log('\n==========================================');
  console.log('🎉 Enterprise Demo Data Seeding Complete!');
  console.log(`- Customers: ${CUSTOMERS.length}`);
  console.log(`- Total Orders Seeded: ${ORDER_TEMPLATES.length}`);
  console.log(`- Total Sales Generated: ₹${totalOrderSpend.toLocaleString('en-IN')}`);
  console.log('==========================================\n');
}

seedDemoData()
  .catch(err => {
    console.error('❌ Seeding failed with error:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
