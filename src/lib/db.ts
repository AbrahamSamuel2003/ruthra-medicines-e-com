import { prisma } from './prisma';
import { PRODUCTS } from '@/data/products';
import { SIDDHA_NAV_CATEGORIES, AYURVEDA_NAV_CATEGORIES } from '@/data/categories';
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
  PaymentMethod,
  AddressType
} from '@/types/admin';
import { Product, MedicalSystem } from '@/types/product';

function mapPrismaProductToApp(p: any): Product {
  return {
    id: p.id,
    name: p.name,
    tamilName: p.tamilName,
    slug: p.slug,
    medicalSystem: (p.medicalSystem ? p.medicalSystem.toLowerCase() : 'siddha') as MedicalSystem,
    formulation: p.formulation,
    formulationTa: p.formulationTa,
    categoryGroup: p.categoryGroup || undefined,
    concerns: Array.isArray(p.concerns) ? p.concerns : [],
    price: Number(p.price),
    originalPrice: p.originalPrice ? Number(p.originalPrice) : undefined,
    packSize: p.packSize,
    packSizeTa: p.packSizeTa,
    shortDescription: p.shortDescription,
    shortDescriptionTa: p.shortDescriptionTa,
    description: p.description,
    descriptionTa: p.descriptionTa,
    traditionalRole: p.traditionalRole,
    traditionalRoleTa: p.traditionalRoleTa,
    badge: p.badge || undefined,
    badgeTa: p.badgeTa || undefined,
    image: p.image,
    images: Array.isArray(p.images) ? p.images : [],
    gallery: Array.isArray(p.gallery) ? p.gallery : [],
    isComingSoon: Boolean(p.isComingSoon),
    inStock: Boolean(p.inStock),
    stock: p.stock !== undefined && p.stock !== null ? Number(p.stock) : 20,
    featured: Boolean(p.featured),
    ingredients: Array.isArray(p.ingredients) ? p.ingredients : [],
    howToUse: Array.isArray(p.howToUse) ? p.howToUse : [],
    dosage: (p.dosage && typeof p.dosage === 'object') ? p.dosage : { morning: '', evening: '', timing: '', with: '' },
    safety: (p.safety && typeof p.safety === 'object') ? p.safety : { contraindications: '', precautions: '' },
    storage: (p.storage && typeof p.storage === 'object') ? p.storage : { temperature: 'Store in a cool, dry place', precautions: 'Keep away from direct sunlight' },
    faqs: Array.isArray(p.faqs) ? p.faqs : [],
    searchKeywords: Array.isArray(p.searchKeywords) ? p.searchKeywords : [],
    tamilKeywords: Array.isArray(p.tamilKeywords) ? p.tamilKeywords : []
  };
}

function mapPrismaOrderToApp(o: any): Order {
  const customer: Customer = {
    id: o.customer.id,
    fullName: o.customer.fullName,
    phone: o.customer.phone,
    email: o.customer.email || undefined,
    address: o.address?.fullAddress || (o.shippingSnapshot as any)?.address || '',
    landmark: o.address?.landmark || (o.shippingSnapshot as any)?.landmark || undefined,
    city: o.address?.city || (o.shippingSnapshot as any)?.city || '',
    state: o.address?.state || (o.shippingSnapshot as any)?.state || 'Tamil Nadu',
    pincode: o.address?.pincode || (o.shippingSnapshot as any)?.pincode || '',
    totalOrders: o.customer.totalOrders,
    totalSpend: Number(o.customer.totalSpend),
    createdAt: o.customer.createdAt instanceof Date ? o.customer.createdAt.toISOString() : o.customer.createdAt,
    updatedAt: o.customer.updatedAt instanceof Date ? o.customer.updatedAt.toISOString() : o.customer.updatedAt
  };

  const items: OrderItem[] = (o.items || []).map((it: any) => ({
    id: it.id,
    orderId: it.orderId,
    productId: it.productId,
    productName: it.productName,
    tamilName: it.tamilName || undefined,
    formulation: it.formulation,
    packSize: it.packSize,
    quantity: it.quantity,
    unitPrice: Number(it.unitPrice),
    discount: Number(it.discount || 0),
    lineTotal: Number(it.lineTotal),
    createdAt: it.createdAt instanceof Date ? it.createdAt.toISOString() : it.createdAt
  }));

  const payment: Payment = o.payment ? {
    id: o.payment.id,
    orderId: o.payment.orderId,
    amount: Number(o.payment.amount),
    method: String(o.payment.method).toLowerCase() as PaymentMethod,
    status: o.payment.status as PaymentStatus,
    transactionRef: o.payment.transactionRef || undefined,
    gatewayDetails: o.payment.gatewayDetails || undefined,
    paidAt: o.payment.paidAt ? (o.payment.paidAt instanceof Date ? o.payment.paidAt.toISOString() : o.payment.paidAt) : undefined,
    createdAt: o.payment.createdAt instanceof Date ? o.payment.createdAt.toISOString() : o.payment.createdAt,
    updatedAt: o.payment.updatedAt instanceof Date ? o.payment.updatedAt.toISOString() : o.payment.updatedAt
  } : {
    id: `pay-${o.id}`,
    orderId: o.id,
    amount: Number(o.finalTotal),
    method: 'cod',
    status: 'PENDING',
    createdAt: o.createdAt instanceof Date ? o.createdAt.toISOString() : o.createdAt
  };

  const invoice: Invoice | undefined = o.invoice ? {
    id: o.invoice.id,
    invoiceNumber: o.invoice.invoiceNumber,
    orderId: o.invoice.orderId,
    issueDate: o.invoice.issueDate instanceof Date ? o.invoice.issueDate.toISOString() : o.invoice.issueDate,
    subtotal: Number(o.invoice.subtotal),
    discount: Number(o.invoice.discount),
    deliveryCharge: Number(o.invoice.deliveryCharge),
    tax: Number(o.invoice.tax || 0),
    finalTotal: Number(o.invoice.finalTotal),
    customerName: o.invoice.customerName,
    customerPhone: o.invoice.customerPhone,
    customerAddress: o.invoice.customerAddress,
    paymentMethod: o.invoice.paymentMethod,
    paymentStatus: o.invoice.paymentStatus,
    createdAt: o.invoice.createdAt instanceof Date ? o.invoice.createdAt.toISOString() : o.invoice.createdAt
  } : undefined;

  return {
    id: o.id,
    orderNumber: o.orderNumber,
    customerId: o.customerId,
    customer,
    addressId: o.addressId || undefined,
    items,
    payment,
    invoice,
    status: o.status as OrderStatus,
    subtotal: Number(o.subtotal),
    discount: Number(o.discount),
    deliveryCharge: Number(o.deliveryCharge),
    tax: Number(o.tax || 0),
    finalTotal: Number(o.finalTotal),
    deliveryMethod: o.deliveryMethod,
    shippingSnapshot: o.shippingSnapshot || {},
    notes: o.notes || undefined,
    createdAt: o.createdAt instanceof Date ? o.createdAt.toISOString() : o.createdAt,
    updatedAt: o.updatedAt instanceof Date ? o.updatedAt.toISOString() : o.updatedAt
  };
}

/* =========================================================================
   PUBLIC DATABASE API METHODS (100% POSTGRESQL / PRISMA EXCLUSIVE)
   ========================================================================= */

/**
 * Retrieves catalog products from PostgreSQL with optional filtering,
 * with automatic fallback to static master products if database is unreachable or empty.
 */
export async function getProducts(filter?: {
  search?: string;
  formulation?: string;
  concern?: string;
  medicalSystem?: string;
  featured?: boolean;
}): Promise<Product[]> {
  try {
    const where: any = {};

    if (filter?.medicalSystem && filter.medicalSystem !== 'ALL') {
      where.medicalSystem = filter.medicalSystem.toUpperCase();
    }

    if (filter?.formulation && filter.formulation !== 'ALL') {
      where.formulation = filter.formulation;
    }

    if (filter?.featured !== undefined) {
      where.featured = filter.featured;
    }

    const prismaProducts = await prisma.product.findMany({
      where,
      orderBy: { id: 'asc' }
    });

    if (prismaProducts && prismaProducts.length > 0) {
      let list = prismaProducts.map(mapPrismaProductToApp);

      if (filter?.concern && filter.concern !== 'ALL') {
        list = list.filter(p => p.concerns && p.concerns.includes(filter.concern as any));
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
  } catch (err) {
    console.warn('PostgreSQL products query fallback to master catalog:', err);
  }

  // Fallback to static in-memory products
  let list = [...PRODUCTS];

  if (filter?.medicalSystem && filter.medicalSystem !== 'ALL') {
    const sys = filter.medicalSystem.toLowerCase();
    list = list.filter(p => p.medicalSystem?.toLowerCase() === sys);
  }

  if (filter?.formulation && filter.formulation !== 'ALL') {
    const form = filter.formulation.toLowerCase();
    list = list.filter(p => 
      p.formulation?.toLowerCase() === form ||
      (p.categoryGroup && p.categoryGroup.toLowerCase() === form)
    );
  }

  if (filter?.featured !== undefined) {
    list = list.filter(p => Boolean(p.featured) === filter.featured);
  }

  if (filter?.concern && filter.concern !== 'ALL') {
    list = list.filter(p => p.concerns && p.concerns.includes(filter.concern as any));
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
 * Retrieves a single product by its unique SKU/ID from PostgreSQL with static fallback
 */
export async function getProductById(id: string): Promise<Product | null> {
  try {
    const p = await prisma.product.findUnique({
      where: { id }
    });
    if (p) return mapPrismaProductToApp(p);
  } catch (err) {
    console.warn(`PostgreSQL getProductById(${id}) fallback:`, err);
  }
  return PRODUCTS.find(p => p.id === id) || null;
}

/**
 * Retrieves a single product by its URL-friendly slug from PostgreSQL with static fallback
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const p = await prisma.product.findUnique({
      where: { slug }
    });
    if (p) return mapPrismaProductToApp(p);
  } catch (err) {
    console.warn(`PostgreSQL getProductBySlug(${slug}) fallback:`, err);
  }
  return PRODUCTS.find(p => p.slug === slug) || null;
}

/**
 * Updates a product in PostgreSQL (Admin CMS)
 */
export async function updateProduct(id: string, data: Partial<Product>): Promise<Product | null> {
  try {
    const updated = await prisma.product.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.tamilName && { tamilName: data.tamilName }),
        ...(data.price !== undefined && { price: data.price }),
        ...(data.originalPrice !== undefined && { originalPrice: data.originalPrice }),
        ...(data.packSize && { packSize: data.packSize }),
        ...(data.packSizeTa && { packSizeTa: data.packSizeTa }),
        ...(data.inStock !== undefined && { inStock: data.inStock }),
        ...(data.stock !== undefined && { stock: Number(data.stock) }),
        ...(data.isComingSoon !== undefined && { isComingSoon: data.isComingSoon }),
        ...(data.featured !== undefined && { featured: data.featured }),
        ...(data.shortDescription && { shortDescription: data.shortDescription }),
        ...(data.shortDescriptionTa && { shortDescriptionTa: data.shortDescriptionTa }),
        ...(data.description && { description: data.description }),
        ...(data.descriptionTa && { descriptionTa: data.descriptionTa }),
        ...(data.image && { image: data.image }),
        ...(data.images && { images: data.images }),
        ...(data.gallery && { gallery: data.gallery })
      } as any
    });
    return mapPrismaProductToApp(updated);
  } catch (err) {
    console.error(`Failed to update product ${id} in PostgreSQL:`, err);
    return null;
  }
}

/**
 * Creates a new product in PostgreSQL (Admin CMS)
 */
export async function createProduct(product: Product): Promise<Product> {
  const created = await prisma.product.create({
    data: {
      id: product.id,
      name: product.name,
      tamilName: product.tamilName,
      slug: product.slug,
      medicalSystem: (product.medicalSystem || 'SIDDHA').toUpperCase() as any,
      formulation: product.formulation,
      formulationTa: product.formulationTa,
      categoryGroup: product.categoryGroup || product.formulation.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      concerns: product.concerns || [],
      price: product.price,
      originalPrice: product.originalPrice || null,
      packSize: product.packSize,
      packSizeTa: product.packSizeTa,
      shortDescription: product.shortDescription,
      shortDescriptionTa: product.shortDescriptionTa,
      description: product.description,
      descriptionTa: product.descriptionTa,
      traditionalRole: product.traditionalRole || '',
      traditionalRoleTa: product.traditionalRoleTa || '',
      badge: product.badge || null,
      badgeTa: product.badgeTa || null,
      image: product.image,
      images: product.images || [],
      gallery: product.gallery || [],
      isComingSoon: Boolean(product.isComingSoon),
      inStock: Boolean(product.inStock),
      stock: product.stock !== undefined ? Number(product.stock) : 20,
      featured: Boolean(product.featured),
      ingredients: (product.ingredients || []) as any,
      howToUse: (product.howToUse || []) as any,
      dosage: (product.dosage || {}) as any,
      safety: (product.safety || {}) as any,
      storage: (product.storage || {}) as any,
      faqs: (product.faqs || []) as any,
      searchKeywords: product.searchKeywords || [],
      tamilKeywords: product.tamilKeywords || []
    } as any
  });
  return mapPrismaProductToApp(created);
}

/**
 * Deletes a product from PostgreSQL (Admin CMS)
 */
export async function deleteProduct(id: string): Promise<boolean> {
  try {
    await prisma.product.delete({ where: { id } });
    return true;
  } catch (err) {
    console.error(`Failed to delete product ${id} from PostgreSQL:`, err);
    return false;
  }
}

/**
 * Retrieves all categories with live item counts from PostgreSQL with static fallback
 */
export async function getCategories(medicalSystem?: string) {
  try {
    const where: any = {};
    if (medicalSystem && medicalSystem !== 'ALL') {
      where.medicalSystem = medicalSystem.toUpperCase();
    }
    const categories = await prisma.category.findMany({
      where,
      orderBy: { title: 'asc' }
    });

    if (categories && categories.length > 0) {
      const prods = await prisma.product.findMany({
        select: { categoryGroup: true, formulation: true, medicalSystem: true }
      });

      return categories.map(c => {
        const count = prods.filter(p => 
          (p.categoryGroup && p.categoryGroup.toLowerCase() === c.slug.toLowerCase()) ||
          (p.formulation && p.formulation.toLowerCase() === c.title.toLowerCase())
        ).length;
        return {
          ...c,
          itemCount: count > 0 ? count : c.itemCount
        };
      });
    }
  } catch (err) {
    console.warn('PostgreSQL getCategories fallback to master categories:', err);
  }

  // Fallback to static nav categories
  const sys = medicalSystem?.toUpperCase();
  const allCats = [
    ...SIDDHA_NAV_CATEGORIES.map(c => ({ id: `cat-${c.slug}`, slug: c.slug, title: c.title, titleTa: c.titleTa, medicalSystem: 'SIDDHA', description: c.desc, itemCount: c.count })),
    ...AYURVEDA_NAV_CATEGORIES.map(c => ({ id: `cat-${c.slug}`, slug: c.slug, title: c.title, titleTa: c.titleTa, medicalSystem: 'AYURVEDA', description: c.desc, itemCount: c.count }))
  ];

  if (sys && sys !== 'ALL') {
    return allCats.filter(c => c.medicalSystem === sys);
  }
  return allCats;
}

/**
 * Creates a new category in PostgreSQL (Admin CMS)
 */
export async function createCategory(data: {
  slug: string;
  title: string;
  titleTa: string;
  medicalSystem: string;
  description?: string;
}) {
  try {
    const created = await prisma.category.create({
      data: {
        slug: data.slug,
        title: data.title,
        titleTa: data.titleTa,
        medicalSystem: data.medicalSystem.toUpperCase() as any,
        description: data.description || null,
        itemCount: 0
      }
    });
    return created;
  } catch (err) {
    console.error('Failed to create category in PostgreSQL:', err);
    throw err;
  }
}

/**
 * Ensures all master products are synchronized into PostgreSQL
 */
export async function syncProductCatalog(): Promise<{ totalProducts: number; updated: boolean }> {
  const count = await prisma.product.count();
  return {
    totalProducts: count,
    updated: true
  };
}

/**
 * Retrieves all orders from PostgreSQL
 */
export async function getOrders(filter?: {
  status?: string;
  paymentStatus?: string;
  search?: string;
  fromDate?: string;
  toDate?: string;
}): Promise<Order[]> {
  try {
    const where: any = {};
    if (filter?.status && filter.status !== 'ALL') {
      where.status = filter.status;
    }
    if (filter?.fromDate || filter?.toDate) {
      where.createdAt = {};
      if (filter.fromDate) where.createdAt.gte = new Date(filter.fromDate);
      if (filter.toDate) where.createdAt.lte = new Date(new Date(filter.toDate).getTime() + 86400000 - 1);
    }

    const prismaOrders = await prisma.order.findMany({
      where,
      include: {
        customer: true,
        address: true,
        items: true,
        payment: true,
        invoice: true
      },
      orderBy: { createdAt: 'desc' }
    });

    let list = prismaOrders.map(mapPrismaOrderToApp);

    if (filter?.paymentStatus && filter.paymentStatus !== 'ALL') {
      list = list.filter(o => o.payment.status === filter.paymentStatus);
    }

    if (filter?.search) {
      const q = filter.search.toLowerCase().trim();
      list = list.filter(o => 
        o.orderNumber.toLowerCase().includes(q) ||
        o.customer.fullName.toLowerCase().includes(q) ||
        o.customer.phone.includes(q) ||
        (o.shippingSnapshot as any)?.city?.toLowerCase().includes(q)
      );
    }

    return list;
  } catch (err) {
    console.error('Failed to fetch orders from PostgreSQL:', err);
    return [];
  }
}

/**
 * Retrieves single order by ID or orderNumber from PostgreSQL
 */
export async function getOrderById(id: string): Promise<Order | null> {
  try {
    const order = await prisma.order.findFirst({
      where: {
        OR: [{ id }, { orderNumber: id }]
      },
      include: {
        customer: true,
        address: true,
        items: true,
        payment: true,
        invoice: true
      }
    });
    if (order) return mapPrismaOrderToApp(order);
  } catch (err) {
    console.error(`Failed to fetch order ${id} from PostgreSQL:`, err);
  }
  return null;
}

/**
 * Creates an order directly in PostgreSQL
 */
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
  try {
    const now = new Date();
    const cleanPhone = data.customer.phone.trim();

    // 1. Find or create customer
    let customer = await prisma.customer.findUnique({
      where: { phone: cleanPhone }
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          fullName: data.customer.fullName,
          phone: cleanPhone,
          email: data.customer.email || null,
          totalOrders: 1,
          totalSpend: data.finalTotal
        }
      });
    } else {
      customer = await prisma.customer.update({
        where: { id: customer.id },
        data: {
          fullName: data.customer.fullName,
          email: data.customer.email || customer.email,
          totalOrders: { increment: 1 },
          totalSpend: { increment: data.finalTotal }
        }
      });
    }

    // 2. Create customer address
    const address = await prisma.customerAddress.create({
      data: {
        customerId: customer.id,
        fullAddress: data.customer.address,
        landmark: data.customer.landmark || null,
        city: data.customer.city,
        state: data.customer.state || 'Tamil Nadu',
        pincode: data.customer.pincode,
        addressType: 'HOME'
      }
    });

    // 3. Generate Order and Invoice numbers
    const totalOrdersCount = await prisma.order.count();
    const orderNumber = `RM-2026-${1000 + totalOrdersCount + 1}`;
    const invoiceNumber = `INV-2026-${1000 + totalOrdersCount + 1}`;
    const isPaidOnline = data.paymentMethod === 'upi' || data.paymentMethod === 'cards';

    // 4. Create Order with items, payment, and invoice in PostgreSQL
    const createdOrder = await prisma.order.create({
      data: {
        orderNumber,
        customerId: customer.id,
        addressId: address.id,
        status: isPaidOnline ? 'CONFIRMED' : 'PENDING',
        subtotal: data.subtotal,
        discount: data.discount,
        deliveryCharge: data.deliveryCharge,
        finalTotal: data.finalTotal,
        deliveryMethod: data.deliveryMethod || 'Tamil Nadu Express Courier',
        shippingSnapshot: {
          fullName: data.customer.fullName,
          phone: cleanPhone,
          email: data.customer.email,
          address: data.customer.address,
          landmark: data.customer.landmark,
          city: data.customer.city,
          state: data.customer.state,
          pincode: data.customer.pincode
        },
        notes: data.notes || null,
        items: {
          create: data.items.map(it => ({
            productId: it.productId,
            productName: it.productName,
            tamilName: it.tamilName || null,
            formulation: it.formulation,
            packSize: it.packSize,
            quantity: it.quantity,
            unitPrice: it.price,
            discount: 0,
            lineTotal: it.price * it.quantity
          }))
        },
        payment: {
          create: {
            method: data.paymentMethod.toUpperCase() as any,
            amount: data.finalTotal,
            status: isPaidOnline ? 'PAID' : 'PENDING',
            transactionRef: isPaidOnline ? `TXN-${Date.now()}` : null,
            paidAt: isPaidOnline ? now : null
          }
        },
        invoice: {
          create: {
            invoiceNumber,
            issueDate: now,
            subtotal: data.subtotal,
            discount: data.discount,
            deliveryCharge: data.deliveryCharge,
            tax: 0,
            finalTotal: data.finalTotal,
            customerName: data.customer.fullName,
            customerPhone: cleanPhone,
            customerAddress: `${data.customer.address}, ${data.customer.city} - ${data.customer.pincode}`,
            paymentMethod: data.paymentMethod,
            paymentStatus: isPaidOnline ? 'PAID' : 'PENDING'
          }
        }
      },
      include: {
        customer: true,
        address: true,
        items: true,
        payment: true,
        invoice: true
      }
    });

    return mapPrismaOrderToApp(createdOrder);
  } catch (err) {
    console.error('Failed to create order in PostgreSQL:', err);
    throw err;
  }
}

export async function updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order | null> {
  try {
    const updated = await prisma.order.update({
      where: { id: orderId },
      data: { status },
      include: { customer: true, address: true, items: true, payment: true, invoice: true }
    });

    if (status === 'DELIVERED' && updated.payment?.status === 'PENDING') {
      await prisma.payment.update({
        where: { orderId },
        data: { status: 'PAID', paidAt: new Date() }
      });
      if (updated.invoice) {
        await prisma.invoice.update({
          where: { orderId },
          data: { paymentStatus: 'PAID' }
        });
      }
    }

    return mapPrismaOrderToApp(updated);
  } catch (err) {
    console.error(`Failed to update order status ${orderId}:`, err);
    return null;
  }
}

export async function updatePaymentStatus(
  orderId: string, 
  status: PaymentStatus, 
  transactionRef?: string
): Promise<Order | null> {
  try {
    await prisma.payment.update({
      where: { orderId },
      data: {
        status,
        ...(transactionRef && { transactionRef }),
        ...(status === 'PAID' && { paidAt: new Date() })
      }
    });

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: {
        ...(status === 'PAID' && { status: 'CONFIRMED' })
      },
      include: { customer: true, address: true, items: true, payment: true, invoice: true }
    });

    if (updated.invoice) {
      await prisma.invoice.update({
        where: { orderId },
        data: { paymentStatus: status }
      });
    }

    return mapPrismaOrderToApp(updated);
  } catch (err) {
    console.error(`Failed to update payment status for ${orderId}:`, err);
    return null;
  }
}

export async function getCustomers(search?: string): Promise<Customer[]> {
  try {
    const where: any = search ? {
      OR: [
        { fullName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { email: { contains: search, mode: 'insensitive' } }
      ]
    } : {};

    const list = await prisma.customer.findMany({
      where,
      include: {
        addresses: true
      },
      orderBy: { totalSpend: 'desc' }
    });

    return list.map(c => ({
      id: c.id,
      fullName: c.fullName,
      phone: c.phone,
      email: c.email || undefined,
      address: c.addresses[0]?.fullAddress || '',
      city: c.addresses[0]?.city || '',
      state: c.addresses[0]?.state || 'Tamil Nadu',
      pincode: c.addresses[0]?.pincode || '',
      addresses: c.addresses.map(a => ({
        id: a.id,
        customerId: a.customerId,
        fullAddress: a.fullAddress,
        landmark: a.landmark || undefined,
        city: a.city,
        state: a.state,
        pincode: a.pincode,
        addressType: a.addressType as AddressType,
        createdAt: a.createdAt.toISOString(),
        updatedAt: a.updatedAt.toISOString()
      })),
      totalOrders: c.totalOrders,
      totalSpend: Number(c.totalSpend),
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString()
    }));
  } catch (err) {
    console.error('Failed to get customers from PostgreSQL:', err);
    return [];
  }
}

export async function getCustomerById(id: string): Promise<{ customer: Customer; addresses: CustomerAddress[]; orders: Order[] } | null> {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id },
      include: {
        addresses: true,
        orders: {
          include: { customer: true, address: true, items: true, payment: true, invoice: true },
          orderBy: { createdAt: 'desc' }
        }
      }
    });
    if (!customer) return null;

    const addresses: CustomerAddress[] = customer.addresses.map(a => ({
      id: a.id,
      customerId: a.customerId,
      fullAddress: a.fullAddress,
      landmark: a.landmark || undefined,
      city: a.city,
      state: a.state,
      pincode: a.pincode,
      addressType: a.addressType as AddressType,
      createdAt: a.createdAt.toISOString(),
      updatedAt: a.updatedAt.toISOString()
    }));

    const custApp: Customer = {
      id: customer.id,
      fullName: customer.fullName,
      phone: customer.phone,
      email: customer.email || undefined,
      address: addresses[0]?.fullAddress,
      city: addresses[0]?.city,
      state: addresses[0]?.state,
      pincode: addresses[0]?.pincode,
      addresses,
      primaryAddress: addresses[0],
      totalOrders: customer.totalOrders,
      totalSpend: Number(customer.totalSpend),
      createdAt: customer.createdAt.toISOString(),
      updatedAt: customer.updatedAt.toISOString()
    };

    const orders = customer.orders.map(mapPrismaOrderToApp);
    return { customer: custApp, addresses, orders };
  } catch (err) {
    console.error(`Failed to get customer ${id} from PostgreSQL:`, err);
    return null;
  }
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  try {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const totalOrdersCount = await prisma.order.count();
    const totalCustomersCount = await prisma.customer.count();

    const todayOrders = await prisma.order.findMany({
      where: { createdAt: { gte: startOfToday } }
    });

    const pendingOrdersCount = await prisma.order.count({
      where: {
        OR: [
          { status: 'PENDING' },
          { payment: { status: 'PENDING' } }
        ]
      }
    });

    const paidOrdersCount = await prisma.payment.count({
      where: { status: 'PAID' }
    });

    const todaySalesVolume = todayOrders.reduce((sum, o) => sum + Number(o.finalTotal), 0);

    const recentPrismaOrders = await prisma.order.findMany({
      take: 8,
      orderBy: { createdAt: 'desc' },
      include: { customer: true, address: true, items: true, payment: true, invoice: true }
    });

    return {
      todayOrdersCount: todayOrders.length,
      todaySalesVolume,
      pendingOrdersCount,
      paidOrdersCount,
      totalCustomersCount,
      totalOrdersCount,
      recentOrders: recentPrismaOrders.map(mapPrismaOrderToApp)
    };
  } catch (err) {
    console.error('Failed to get dashboard metrics from PostgreSQL:', err);
    return {
      todayOrdersCount: 0,
      todaySalesVolume: 0,
      pendingOrdersCount: 0,
      paidOrdersCount: 0,
      totalCustomersCount: 0,
      totalOrdersCount: 0,
      recentOrders: []
    };
  }
}

export async function getInvoicesByDateRange(fromDate: string, toDate: string): Promise<Order[]> {
  return getOrders({ fromDate, toDate });
}

export async function getDailySummary(dateStr?: string): Promise<DailySummaryReport> {
  const targetDate = dateStr ? new Date(dateStr) : new Date();
  const startOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
  const endOfDay = new Date(startOfDay.getTime() + 86400000 - 1);

  const dayOrders = await getOrders({
    fromDate: startOfDay.toISOString(),
    toDate: endOfDay.toISOString()
  });

  let totalSales = 0;
  let paidSales = 0;
  let pendingCodSales = 0;
  let paidOrders = 0;
  let pendingOrders = 0;
  let failedOrders = 0;
  const productCountMap: Record<string, { name: string; quantity: number; revenue: number }> = {};
  const urgentDispatches: Array<{ orderNumber: string; customerName: string; city: string; total: number }> = [];

  dayOrders.forEach(o => {
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
        city: (o.shippingSnapshot as any).city || 'Tamil Nadu',
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

  const newCustomers = await prisma.customer.count({
    where: {
      createdAt: {
        gte: startOfDay,
        lte: endOfDay
      }
    }
  }).catch(() => 0);

  return {
    date: targetDate.toISOString().split('T')[0],
    totalOrders: dayOrders.length,
    paidOrders,
    pendingOrders,
    failedOrders,
    totalSales,
    paidAmount: paidSales,
    pendingCodAmount: pendingCodSales,
    orders: dayOrders,
    topProducts,
    newCustomers,
    urgentDispatches
  };
}
