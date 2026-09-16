export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'DISPATCHED' | 'DELIVERED' | 'CANCELLED';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED';
export type PaymentMethod = 'upi' | 'cards' | 'cod';
export type AddressType = 'HOME' | 'WORK' | 'OTHER';

export interface CustomerAddress {
  id: string;
  customerId: string;
  fullAddress: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
  addressType: AddressType;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  address?: string;
  landmark?: string;
  city?: string;
  state?: string;
  pincode?: string;
  addresses?: CustomerAddress[];
  primaryAddress?: CustomerAddress;
  totalOrders: number;
  totalSpend: number;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string; // Snapshot
  tamilName?: string;
  formulation: string;
  packSize: string;
  quantity: number;
  unitPrice: number; // Snapshot at purchase
  discount?: number;
  lineTotal: number;
  createdAt?: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionRef?: string;
  gatewayDetails?: Record<string, any>;
  paidAt?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string; // e.g. INV-2026-1001
  orderId: string;
  issueDate: string;
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  tax?: number;
  finalTotal: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  paymentMethod: PaymentMethod | string;
  paymentStatus: PaymentStatus | string;
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string; // e.g. RM-2026-1001
  customerId: string;
  customer: Customer;
  addressId?: string;
  items: OrderItem[];
  payment: Payment;
  invoice?: Invoice;
  status: OrderStatus;
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  tax?: number;
  finalTotal: number;
  deliveryMethod: string;
  shippingSnapshot: {
    fullName: string;
    phone: string;
    email?: string;
    address: string;
    landmark?: string;
    city: string;
    state: string;
    pincode: string;
  };
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN';
}

export interface DashboardMetrics {
  todayOrdersCount: number;
  todaySalesVolume: number;
  pendingOrdersCount: number;
  paidOrdersCount: number;
  totalCustomersCount: number;
  totalOrdersCount: number;
  recentOrders: Order[];
}

export interface DailySummaryReport {
  date: string;
  totalOrders: number;
  paidOrders: number;
  pendingOrders: number;
  failedOrders: number;
  totalSales: number;
  paidAmount: number;
  pendingCodAmount: number;
  orders: Order[];
  topProducts: { name: string; quantity: number; revenue: number }[];
  newCustomers: number;
  urgentDispatches: { orderNumber: string; customerName: string; city: string; total: number }[];
}
