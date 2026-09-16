import { NextResponse } from 'next/server';
import { getOrders, getCustomers } from '@/lib/db';
import { PRODUCTS } from '@/data/products';
import { getAdminSession } from '@/lib/auth';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const orders = await getOrders();
  const customers = await getCustomers();

  let totalRevenue = 0;
  let totalItemsSold = 0;
  const formulationSales: Record<string, { count: number; revenue: number }> = {};
  const paymentMethods: Record<string, { count: number; total: number }> = {
    upi: { count: 0, total: 0 },
    cards: { count: 0, total: 0 },
    cod: { count: 0, total: 0 }
  };
  const productSalesMap: Record<string, { id: string; name: string; formulation: string; quantity: number; revenue: number }> = {};

  orders.forEach(o => {
    totalRevenue += o.finalTotal;
    
    // Payment method breakdown
    const method = o.payment.method;
    if (paymentMethods[method]) {
      paymentMethods[method].count += 1;
      paymentMethods[method].total += o.finalTotal;
    }

    // Line items breakdown
    o.items.forEach(it => {
      totalItemsSold += it.quantity;

      // Formulation breakdown
      const form = it.formulation || 'Classical';
      if (!formulationSales[form]) {
        formulationSales[form] = { count: 0, revenue: 0 };
      }
      formulationSales[form].count += it.quantity;
      formulationSales[form].revenue += it.lineTotal;

      // Top products
      if (!productSalesMap[it.productId]) {
        productSalesMap[it.productId] = {
          id: it.productId,
          name: it.productName,
          formulation: it.formulation,
          quantity: 0,
          revenue: 0
        };
      }
      productSalesMap[it.productId].quantity += it.quantity;
      productSalesMap[it.productId].revenue += it.lineTotal;
    });
  });

  const topProducts = Object.values(productSalesMap)
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10);

  return NextResponse.json({
    summary: {
      totalRevenue,
      totalOrders: orders.length,
      totalCustomers: customers.length,
      totalItemsSold,
      averageOrderValue: orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0
    },
    formulationSales,
    paymentMethods,
    topProducts,
    totalCatalogSkus: PRODUCTS.length
  });
}
