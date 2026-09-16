import fs from 'fs';
import path from 'path';
import { 
  Order, 
  Customer, 
  CustomerAddress,
  OrderItem, 
  Payment, 
  Invoice, 
  DashboardMetrics, 
  DailySummaryReport,
  OrderStatus,
  PaymentStatus,
  PaymentMethod
} from '@/types/admin';
import { Product } from '@/types/product';
import { PRODUCTS } from '@/data/products';

interface DatabaseSchema {
  products: Product[];
  customers: Customer[];
  addresses: CustomerAddress[];
  orders: Order[];
}

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'ruthra_store.json');

let memoryDb: DatabaseSchema | null = null;

function ensureDbDirectory() {
  if (!fs.existsSync(DB_DIR)) {
    try {
      fs.mkdirSync(DB_DIR, { recursive: true });
    } catch {
      // ignore
    }
  }
}

function getInitialSeedData(): DatabaseSchema {
  const now = new Date();
  const todayStr = now.toISOString();

  // 1. Initial Addresses
  const sampleAddresses: CustomerAddress[] = [
    {
      id: 'addr-101',
      customerId: 'cust-101',
      fullAddress: '42 South Car Street, Palayamkottai',
      landmark: 'Near Murugan Temple',
      city: 'Tirunelveli',
      state: 'Tamil Nadu',
      pincode: '627002',
      addressType: 'HOME',
      createdAt: new Date(now.getTime() - 10 * 86400000).toISOString(),
      updatedAt: todayStr
    },
    {
      id: 'addr-102',
      customerId: 'cust-102',
      fullAddress: '18 West Masi Street',
      landmark: 'Near Meenakshi Temple Tower',
      city: 'Madurai',
      state: 'Tamil Nadu',
      pincode: '625001',
      addressType: 'HOME',
      createdAt: new Date(now.getTime() - 6 * 86400000).toISOString(),
      updatedAt: todayStr
    },
    {
      id: 'addr-103',
      customerId: 'cust-103',
      fullAddress: '77 Anna Nagar 2nd Avenue',
      landmark: 'Opposite Roundtana',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600040',
      addressType: 'WORK',
      createdAt: new Date(now.getTime() - 15 * 86400000).toISOString(),
      updatedAt: todayStr
    }
  ];

  // 2. Initial Customers
  const sampleCustomers: Customer[] = [
    {
      id: 'cust-101',
      fullName: 'S. Ramasamy',
      phone: '+91 94431 22890',
      email: 'ramasamy.s@gmail.com',
      address: sampleAddresses[0].fullAddress,
      city: sampleAddresses[0].city,
      state: sampleAddresses[0].state,
      pincode: sampleAddresses[0].pincode,
      addresses: [sampleAddresses[0]],
      primaryAddress: sampleAddresses[0],
      totalOrders: 2,
      totalSpend: 1133,
      createdAt: new Date(now.getTime() - 10 * 86400000).toISOString(),
      updatedAt: todayStr
    },
    {
      id: 'cust-102',
      fullName: 'K. Meenakshi Sundaram',
      phone: '+91 98421 77341',
      email: 'meenakshi.sundar@yahoo.com',
      address: sampleAddresses[1].fullAddress,
      city: sampleAddresses[1].city,
      state: sampleAddresses[1].state,
      pincode: sampleAddresses[1].pincode,
      addresses: [sampleAddresses[1]],
      primaryAddress: sampleAddresses[1],
      totalOrders: 1,
      totalSpend: 530,
      createdAt: new Date(now.getTime() - 6 * 86400000).toISOString(),
      updatedAt: todayStr
    },
    {
      id: 'cust-103',
      fullName: 'Dr. V. Karthikeyan',
      phone: '+91 97890 54123',
      email: 'dr.karthi.ayur@gmail.com',
      address: sampleAddresses[2].fullAddress,
      city: sampleAddresses[2].city,
      state: sampleAddresses[2].state,
      pincode: sampleAddresses[2].pincode,
      addresses: [sampleAddresses[2]],
      primaryAddress: sampleAddresses[2],
      totalOrders: 1,
      totalSpend: 645,
      createdAt: new Date(now.getTime() - 15 * 86400000).toISOString(),
      updatedAt: todayStr
    }
  ];

  const p1 = PRODUCTS[0];  // Amirtha Sanjeevi Chooranam (234)
  const p2 = PRODUCTS[7];  // Maha Viyadhi Chooranam (240)
  const p3 = PRODUCTS[10]; // Ramabaana Kudineer (60)
  const p4 = PRODUCTS[12]; // Sinocof Syrup (135)
  const p5 = PRODUCTS[18]; // Rej-Viyan Pain Oil (135)

  const pastDate5 = new Date(now.getTime() - 5 * 86400000).toISOString();
  const pastDate8 = new Date(now.getTime() - 8 * 86400000).toISOString();

  // 3. Initial Orders with Immutable Snapshots
  const sampleOrders: Order[] = [
    {
      id: 'ord-1001',
      orderNumber: 'RM-2026-1001',
      customerId: 'cust-101',
      customer: sampleCustomers[0],
      addressId: 'addr-101',
      items: [
        {
          id: 'item-1001-1',
          orderId: 'ord-1001',
          productId: p1.id,
          productName: p1.name,
          tamilName: p1.tamilName,
          formulation: p1.formulation,
          packSize: p1.packSize,
          quantity: 2,
          unitPrice: p1.price,
          lineTotal: p1.price * 2
        },
        {
          id: 'item-1001-2',
          orderId: 'ord-1001',
          productId: p5.id,
          productName: p5.name,
          tamilName: p5.tamilName,
          formulation: p5.formulation,
          packSize: p5.packSize,
          quantity: 1,
          unitPrice: p5.price,
          lineTotal: p5.price
        }
      ],
      payment: {
        id: 'pay-1001',
        orderId: 'ord-1001',
        amount: 603,
        method: 'upi',
        status: 'PAID',
        transactionRef: 'UPI-REF-902341829',
        paidAt: pastDate5,
        createdAt: pastDate5,
        updatedAt: pastDate5
      },
      invoice: {
        id: 'inv-1001',
        invoiceNumber: 'INV-2026-1001',
        orderId: 'ord-1001',
        issueDate: pastDate5,
        subtotal: 603,
        discount: 0,
        deliveryCharge: 0,
        finalTotal: 603,
        customerName: sampleCustomers[0].fullName,
        customerPhone: sampleCustomers[0].phone,
        customerAddress: `${sampleAddresses[0].fullAddress}, ${sampleAddresses[0].city} - ${sampleAddresses[0].pincode}`,
        paymentMethod: 'upi',
        paymentStatus: 'PAID',
        createdAt: pastDate5
      },
      status: 'DELIVERED',
      subtotal: 603,
      discount: 0,
      deliveryCharge: 0,
      finalTotal: 603,
      deliveryMethod: 'Tamil Nadu Express Courier',
      shippingSnapshot: {
        fullName: sampleCustomers[0].fullName,
        phone: sampleCustomers[0].phone,
        email: sampleCustomers[0].email,
        address: sampleAddresses[0].fullAddress,
        landmark: sampleAddresses[0].landmark,
        city: sampleAddresses[0].city,
        state: sampleAddresses[0].state,
        pincode: sampleAddresses[0].pincode
      },
      notes: 'Tamper tape packaging required',
      createdAt: pastDate5,
      updatedAt: pastDate5
    },
    {
      id: 'ord-1002',
      orderNumber: 'RM-2026-1002',
      customerId: 'cust-102',
      customer: sampleCustomers[1],
      addressId: 'addr-102',
      items: [
        {
          id: 'item-1002-1',
          orderId: 'ord-1002',
          productId: p2.id,
          productName: p2.name,
          tamilName: p2.tamilName,
          formulation: p2.formulation,
          packSize: p2.packSize,
          quantity: 2,
          unitPrice: p2.price,
          lineTotal: p2.price * 2
        }
      ],
      payment: {
        id: 'pay-1002',
        orderId: 'ord-1002',
        amount: 530,
        method: 'cod',
        status: 'PAID',
        paidAt: pastDate8,
        createdAt: pastDate8,
        updatedAt: pastDate8
      },
      invoice: {
        id: 'inv-1002',
        invoiceNumber: 'INV-2026-1002',
        orderId: 'ord-1002',
        issueDate: pastDate8,
        subtotal: 480,
        discount: 0,
        deliveryCharge: 50,
        finalTotal: 530,
        customerName: sampleCustomers[1].fullName,
        customerPhone: sampleCustomers[1].phone,
        customerAddress: `${sampleAddresses[1].fullAddress}, ${sampleAddresses[1].city} - ${sampleAddresses[1].pincode}`,
        paymentMethod: 'cod',
        paymentStatus: 'PAID',
        createdAt: pastDate8
      },
      status: 'DELIVERED',
      subtotal: 480,
      discount: 0,
      deliveryCharge: 50,
      finalTotal: 530,
      deliveryMethod: 'Tamil Nadu Express Courier',
      shippingSnapshot: {
        fullName: sampleCustomers[1].fullName,
        phone: sampleCustomers[1].phone,
        email: sampleCustomers[1].email,
        address: sampleAddresses[1].fullAddress,
        landmark: sampleAddresses[1].landmark,
        city: sampleAddresses[1].city,
        state: sampleAddresses[1].state,
        pincode: sampleAddresses[1].pincode
      },
      createdAt: pastDate8,
      updatedAt: pastDate8
    },
    {
      id: 'ord-1003',
      orderNumber: 'RM-2026-1003',
      customerId: 'cust-103',
      customer: sampleCustomers[2],
      addressId: 'addr-103',
      items: [
        {
          id: 'item-1003-1',
          orderId: 'ord-1003',
          productId: p3.id,
          productName: p3.name,
          tamilName: p3.tamilName,
          formulation: p3.formulation,
          packSize: p3.packSize,
          quantity: 4,
          unitPrice: p3.price,
          lineTotal: p3.price * 4
        },
        {
          id: 'item-1003-2',
          orderId: 'ord-1003',
          productId: p4.id,
          productName: p4.name,
          tamilName: p4.tamilName,
          formulation: p4.formulation,
          packSize: p4.packSize,
          quantity: 3,
          unitPrice: p4.price,
          lineTotal: p4.price * 3
        }
      ],
      payment: {
        id: 'pay-1003',
        orderId: 'ord-1003',
        amount: 645,
        method: 'cards',
        status: 'PAID',
        transactionRef: 'CARD-TXN-884102',
        paidAt: new Date(now.getTime() - 2 * 86400000).toISOString(),
        createdAt: new Date(now.getTime() - 2 * 86400000).toISOString(),
        updatedAt: new Date(now.getTime() - 2 * 86400000).toISOString()
      },
      invoice: {
        id: 'inv-1003',
        invoiceNumber: 'INV-2026-1003',
        orderId: 'ord-1003',
        issueDate: new Date(now.getTime() - 2 * 86400000).toISOString(),
        subtotal: 645,
        discount: 0,
        deliveryCharge: 0,
        finalTotal: 645,
        customerName: sampleCustomers[2].fullName,
        customerPhone: sampleCustomers[2].phone,
        customerAddress: `${sampleAddresses[2].fullAddress}, ${sampleAddresses[2].city} - ${sampleAddresses[2].pincode}`,
        paymentMethod: 'cards',
        paymentStatus: 'PAID',
        createdAt: new Date(now.getTime() - 2 * 86400000).toISOString()
      },
      status: 'DELIVERED',
      subtotal: 645,
      discount: 0,
      deliveryCharge: 0,
      finalTotal: 645,
      deliveryMethod: 'Speed Post India',
      shippingSnapshot: {
        fullName: sampleCustomers[2].fullName,
        phone: sampleCustomers[2].phone,
        email: sampleCustomers[2].email,
        address: sampleAddresses[2].fullAddress,
        landmark: sampleAddresses[2].landmark,
        city: sampleAddresses[2].city,
        state: sampleAddresses[2].state,
        pincode: sampleAddresses[2].pincode
      },
      createdAt: new Date(now.getTime() - 2 * 86400000).toISOString(),
      updatedAt: new Date(now.getTime() - 1 * 86400000).toISOString()
    }
  ];

  return {
    products: [...PRODUCTS],
    customers: sampleCustomers,
    addresses: sampleAddresses,
    orders: sampleOrders
  };
}

function loadDatabase(): DatabaseSchema {
  if (memoryDb) return memoryDb;
  ensureDbDirectory();

  if (fs.existsSync(DB_FILE)) {
    try {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      memoryDb = JSON.parse(content);
      
      // Ensure all master products are always seeded and updated in existing DB
      if (!memoryDb!.products || memoryDb!.products.length < PRODUCTS.length) {
        memoryDb!.products = [...PRODUCTS];
        saveDatabase(memoryDb!);
      }
      return memoryDb!;
    } catch {
      // fallback
    }
  }

  const initial = getInitialSeedData();
  saveDatabase(initial);
  memoryDb = initial;
  return memoryDb;
}

function saveDatabase(db: DatabaseSchema) {
  memoryDb = db;
  ensureDbDirectory();
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch {
    // ignore
  }
}

/* =========================================================================
   PUBLIC DATABASE API METHODS
   ========================================================================= */

/**
 * Retrieves all catalog products seeded in the database with optional filtering
 */
export async function getProducts(filter?: {
  search?: string;
  formulation?: string;
  concern?: string;
  featured?: boolean;
}): Promise<Product[]> {
  const db = loadDatabase();
  let list = db.products && db.products.length > 0 ? [...db.products] : [...PRODUCTS];

  if (filter?.formulation && filter.formulation !== 'ALL') {
    list = list.filter(p => p.formulation === filter.formulation);
  }

  if (filter?.concern && filter.concern !== 'ALL') {
    list = list.filter(p => p.concerns && p.concerns.includes(filter.concern as any));
  }

  if (filter?.featured !== undefined) {
    list = list.filter(p => p.featured === filter.featured);
  }

  if (filter?.search) {
    const q = filter.search.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.tamilName.includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.searchKeywords?.some(k => k.toLowerCase().includes(q)) ||
      p.tamilKeywords?.some(k => k.includes(q))
    );
  }

  return list;
}

/**
 * Retrieves a single product by its unique SKU/ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  const db = loadDatabase();
  const list = db.products && db.products.length > 0 ? db.products : PRODUCTS;
  const product = list.find(p => p.id === id);
  return product || null;
}

/**
 * Retrieves a single product by its URL-friendly slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const db = loadDatabase();
  const list = db.products && db.products.length > 0 ? db.products : PRODUCTS;
  const product = list.find(p => p.slug === slug);
  return product || null;
}

/**
 * Ensures all master products are synchronized into the live database
 */
export async function syncProductCatalog(): Promise<{ totalProducts: number; updated: boolean }> {
  const db = loadDatabase();
  db.products = [...PRODUCTS];
  saveDatabase(db);
  return {
    totalProducts: db.products.length,
    updated: true
  };
}

export async function getOrders(filter?: {
  status?: string;
  paymentStatus?: string;
  search?: string;
  fromDate?: string;
  toDate?: string;
}): Promise<Order[]> {
  const db = loadDatabase();
  let list = [...db.orders];

  if (filter?.status && filter.status !== 'ALL') {
    list = list.filter(o => o.status === filter.status);
  }

  if (filter?.paymentStatus && filter.paymentStatus !== 'ALL') {
    list = list.filter(o => o.payment.status === filter.paymentStatus);
  }

  if (filter?.fromDate) {
    const fromTime = new Date(filter.fromDate).getTime();
    list = list.filter(o => new Date(o.createdAt).getTime() >= fromTime);
  }

  if (filter?.toDate) {
    const toTime = new Date(filter.toDate).getTime() + 86400000 - 1;
    list = list.filter(o => new Date(o.createdAt).getTime() <= toTime);
  }

  if (filter?.search) {
    const q = filter.search.toLowerCase().trim();
    list = list.filter(o => 
      o.orderNumber.toLowerCase().includes(q) ||
      o.customer.fullName.toLowerCase().includes(q) ||
      o.customer.phone.includes(q) ||
      o.shippingSnapshot.city.toLowerCase().includes(q)
    );
  }

  return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getOrderById(id: string): Promise<Order | null> {
  const db = loadDatabase();
  return db.orders.find(o => o.id === id || o.orderNumber === id) || null;
}

export async function createOrder(data: {
  customer: {
    fullName: string;
    phone: string;
    email?: string;
    address: string;
    landmark?: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: Array<{
    productId: string;
    productName: string;
    tamilName?: string;
    price: number;
    quantity: number;
    packSize: string;
    formulation: string;
  }>;
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  finalTotal: number;
  deliveryMethod?: string;
  paymentMethod: PaymentMethod;
  notes?: string;
}): Promise<Order> {
  const db = loadDatabase();
  const now = new Date();
  const nowStr = now.toISOString();

  // 1. Find or create customer
  let customer = db.customers.find(
    c => c.phone.replace(/\D/g, '') === data.customer.phone.replace(/\D/g, '')
  );

  const addressId = `addr-${Date.now()}`;
  const newAddress: CustomerAddress = {
    id: addressId,
    customerId: customer ? customer.id : `cust-${Date.now()}`,
    fullAddress: data.customer.address,
    landmark: data.customer.landmark,
    city: data.customer.city,
    state: data.customer.state,
    pincode: data.customer.pincode,
    addressType: 'HOME',
    createdAt: nowStr,
    updatedAt: nowStr
  };
  db.addresses.push(newAddress);

  if (customer) {
    customer.fullName = data.customer.fullName;
    customer.email = data.customer.email || customer.email;
    customer.address = data.customer.address;
    customer.landmark = data.customer.landmark;
    customer.city = data.customer.city;
    customer.state = data.customer.state;
    customer.pincode = data.customer.pincode;
    customer.totalOrders += 1;
    customer.totalSpend += data.finalTotal;
    customer.updatedAt = nowStr;
    if (!customer.addresses) customer.addresses = [];
    customer.addresses.push(newAddress);
    customer.primaryAddress = newAddress;
  } else {
    customer = {
      id: newAddress.customerId,
      fullName: data.customer.fullName,
      phone: data.customer.phone,
      email: data.customer.email || '',
      address: data.customer.address,
      landmark: data.customer.landmark,
      city: data.customer.city,
      state: data.customer.state,
      pincode: data.customer.pincode,
      addresses: [newAddress],
      primaryAddress: newAddress,
      totalOrders: 1,
      totalSpend: data.finalTotal,
      createdAt: nowStr,
      updatedAt: nowStr
    };
    db.customers.push(customer);
  }

  // 2. Generate unique order and invoice numbers
  const orderCount = db.orders.length + 1001;
  const orderNumber = `RM-${now.getFullYear()}-${orderCount}`;
  const orderId = `ord-${Date.now()}`;
  const invoiceNumber = `INV-${now.getFullYear()}-${orderCount}`;

  // 3. Create line items with IMMUTABLE snapshots
  const lineItems: OrderItem[] = data.items.map((it, idx) => ({
    id: `item-${orderId}-${idx + 1}`,
    orderId,
    productId: it.productId,
    productName: it.productName, // Snapshot
    tamilName: it.tamilName,
    formulation: it.formulation,
    packSize: it.packSize,
    quantity: it.quantity,
    unitPrice: it.price, // Snapshot
    lineTotal: it.price * it.quantity,
    createdAt: nowStr
  }));

  // 4. Create payment record
  const isPaidInitial = data.paymentMethod !== 'cod';
  const payment: Payment = {
    id: `pay-${orderId}`,
    orderId,
    amount: data.finalTotal,
    method: data.paymentMethod,
    status: isPaidInitial ? 'PAID' : 'PENDING',
    transactionRef: isPaidInitial ? `TXN-${Date.now()}` : undefined,
    paidAt: isPaidInitial ? nowStr : undefined,
    createdAt: nowStr,
    updatedAt: nowStr
  };

  // 5. Create invoice record
  const invoice: Invoice = {
    id: `inv-${orderId}`,
    invoiceNumber,
    orderId,
    issueDate: nowStr,
    subtotal: data.subtotal,
    discount: data.discount,
    deliveryCharge: data.deliveryCharge,
    finalTotal: data.finalTotal,
    customerName: customer.fullName,
    customerPhone: customer.phone,
    customerAddress: `${data.customer.address}, ${data.customer.city} - ${data.customer.pincode}`,
    paymentMethod: data.paymentMethod,
    paymentStatus: payment.status,
    createdAt: nowStr
  };

  // 6. Complete Order
  const newOrder: Order = {
    id: orderId,
    orderNumber,
    customerId: customer.id,
    customer,
    addressId: newAddress.id,
    items: lineItems,
    payment,
    invoice,
    status: isPaidInitial ? 'CONFIRMED' : 'PENDING',
    subtotal: data.subtotal,
    discount: data.discount,
    deliveryCharge: data.deliveryCharge,
    finalTotal: data.finalTotal,
    deliveryMethod: data.deliveryMethod || 'Tamil Nadu Express Courier',
    shippingSnapshot: {
      fullName: data.customer.fullName,
      phone: data.customer.phone,
      email: data.customer.email,
      address: data.customer.address,
      landmark: data.customer.landmark,
      city: data.customer.city,
      state: data.customer.state,
      pincode: data.customer.pincode
    },
    notes: data.notes,
    createdAt: nowStr,
    updatedAt: nowStr
  };

  db.orders.unshift(newOrder);
  saveDatabase(db);

  return newOrder;
}

export async function updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order | null> {
  const db = loadDatabase();
  const order = db.orders.find(o => o.id === orderId || o.orderNumber === orderId);
  if (!order) return null;

  order.status = status;
  const nowStr = new Date().toISOString();
  order.updatedAt = nowStr;

  // For COD orders: when status transitions to DELIVERED, cash payment has been collected
  if (status === 'DELIVERED' && order.payment.status === 'PENDING') {
    order.payment.status = 'PAID';
    order.payment.paidAt = nowStr;
    if (order.invoice) {
      order.invoice.paymentStatus = 'PAID';
    }
  }

  saveDatabase(db);
  return order;
}

export async function updatePaymentStatus(
  orderId: string, 
  status: PaymentStatus, 
  transactionRef?: string
): Promise<Order | null> {
  const db = loadDatabase();
  const order = db.orders.find(o => o.id === orderId || o.orderNumber === orderId);
  if (!order) return null;

  order.payment.status = status;
  if (transactionRef) {
    order.payment.transactionRef = transactionRef;
  }
  if (status === 'PAID' && !order.payment.paidAt) {
    order.payment.paidAt = new Date().toISOString();
    if (order.status === 'PENDING') {
      order.status = 'CONFIRMED';
    }
  }
  if (order.invoice) {
    order.invoice.paymentStatus = status;
  }
  order.updatedAt = new Date().toISOString();
  saveDatabase(db);
  return order;
}

export async function getCustomers(search?: string): Promise<Customer[]> {
  const db = loadDatabase();
  let list = [...db.customers];
  if (search) {
    const q = search.toLowerCase().trim();
    list = list.filter(c => 
      c.fullName.toLowerCase().includes(q) ||
      c.phone.includes(q) ||
      (c.email && c.email.toLowerCase().includes(q))
    );
  }
  return list.sort((a, b) => b.totalSpend - a.totalSpend);
}

export async function getCustomerById(id: string): Promise<{ customer: Customer; addresses: CustomerAddress[]; orders: Order[] } | null> {
  const db = loadDatabase();
  const customer = db.customers.find(c => c.id === id);
  if (!customer) return null;
  const addresses = db.addresses.filter(a => a.customerId === customer.id);
  const orders = db.orders.filter(o => o.customerId === customer.id);
  return { customer, addresses, orders };
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const db = loadDatabase();
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  let todayOrdersCount = 0;
  let todaySalesVolume = 0;
  let pendingOrdersCount = 0;
  let paidOrdersCount = 0;

  db.orders.forEach(o => {
    const oTime = new Date(o.createdAt).getTime();
    if (oTime >= startOfToday) {
      todayOrdersCount += 1;
      todaySalesVolume += o.finalTotal;
    }
    if (o.status === 'PENDING' || o.payment.status === 'PENDING') {
      pendingOrdersCount += 1;
    }
    if (o.payment.status === 'PAID') {
      paidOrdersCount += 1;
    }
  });

  return {
    todayOrdersCount,
    todaySalesVolume,
    pendingOrdersCount,
    paidOrdersCount,
    totalCustomersCount: db.customers.length,
    totalOrdersCount: db.orders.length,
    recentOrders: db.orders.slice(0, 8)
  };
}

export async function getInvoicesByDateRange(fromDate: string, toDate: string): Promise<Order[]> {
  return getOrders({ fromDate, toDate });
}

export async function getDailySummary(dateStr?: string): Promise<DailySummaryReport> {
  const db = loadDatabase();
  const targetDate = dateStr ? new Date(dateStr) : new Date();
  const startOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()).getTime();
  const endOfDay = startOfDay + 86400000 - 1;

  const dayOrders = db.orders.filter(o => {
    const t = new Date(o.createdAt).getTime();
    return t >= startOfDay && t <= endOfDay;
  });

  let totalSales = 0;
  let paidSales = 0;
  let pendingCodSales = 0;
  let paidOrders = 0;
  let pendingOrders = 0;
  let failedOrders = 0;
  const productCountMap: Record<string, { name: string; quantity: number; revenue: number }> = {};
  const urgentDispatches: Array<{ orderNumber: string; customerName: string; city: string; total: number }> = [];

  // Sort day orders chronologically
  const sortedDayOrders = [...dayOrders].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  sortedDayOrders.forEach(o => {
    totalSales += o.finalTotal;
    if (o.payment.status === 'PAID') {
      paidOrders += 1;
      paidSales += o.finalTotal;
    } else if (o.payment.status === 'PENDING') {
      pendingOrders += 1;
      pendingCodSales += o.finalTotal;
    } else if (o.payment.status === 'FAILED') {
      failedOrders += 1;
    }

    if (o.status === 'CONFIRMED' || o.status === 'PENDING') {
      urgentDispatches.push({
        orderNumber: o.orderNumber,
        customerName: o.customer.fullName,
        city: o.shippingSnapshot.city,
        total: o.finalTotal
      });
    }

    o.items.forEach(it => {
      if (!productCountMap[it.productName]) {
        productCountMap[it.productName] = { name: it.productName, quantity: 0, revenue: 0 };
      }
      productCountMap[it.productName].quantity += it.quantity;
      productCountMap[it.productName].revenue += it.lineTotal;
    });
  });

  const topProducts = Object.values(productCountMap).sort((a, b) => b.quantity - a.quantity).slice(0, 10);

  const newCustomers = db.customers.filter(c => {
    const t = new Date(c.createdAt).getTime();
    return t >= startOfDay && t <= endOfDay;
  }).length;

  return {
    date: targetDate.toISOString().split('T')[0],
    totalOrders: sortedDayOrders.length,
    paidOrders,
    pendingOrders,
    failedOrders,
    totalSales,
    paidAmount: paidSales,
    pendingCodAmount: pendingCodSales,
    orders: sortedDayOrders,
    topProducts,
    newCustomers,
    urgentDispatches
  };
}
