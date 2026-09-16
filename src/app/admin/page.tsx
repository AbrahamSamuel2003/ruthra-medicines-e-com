'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  IndianRupee, 
  Clock, 
  CheckCircle2, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  RefreshCw,
  FileText,
  Truck,
  ExternalLink
} from 'lucide-react';
import { DashboardMetrics, Order } from '@/types/admin';
import { generateOrderInvoicePdf } from '@/lib/invoiceGenerator';

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const fetchMetrics = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/dashboard');
      if (res.ok) {
        const data = await res.json();
        setMetrics(data);
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const handleDownloadInvoice = (order: Order) => {
    const doc = generateOrderInvoicePdf(order);
    doc.save(`Invoice_${order.orderNumber}.pdf`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Title & Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#16382B]/10 pb-4">
        <div>
          <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            Store Operations Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#3D5A68] mt-0.5">
            Real-time overview of customer orders, revenue, and daily logistics.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={fetchMetrics}
            disabled={isLoading}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#16382B]/15 text-[#16382B] text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#C29043] ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh Data</span>
          </button>

          <Link
            href="/admin/orders"
            className="px-4 py-2 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
          >
            <span>View All Orders</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#DFB36C]" />
          </Link>
        </div>
      </div>

      {/* 5 CORE BUSINESS KPIS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {/* Today's Orders */}
        <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider">Today&apos;s Orders</span>
            <div className="w-8 h-8 rounded-lg bg-[#E8F1EB] text-[#16382B] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#16382B]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif-brand font-bold text-2xl text-[#16382B]">
              {isLoading ? '...' : metrics?.todayOrdersCount || 0}
            </span>
            <span className="text-[10.5px] font-medium text-emerald-700 flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> Live
            </span>
          </div>
        </div>

        {/* Today's Sales Volume */}
        <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider">Today&apos;s Sales</span>
            <div className="w-8 h-8 rounded-lg bg-[#FAF3EB] text-[#C29043] flex items-center justify-center">
              <IndianRupee className="w-4 h-4 text-[#C29043]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-serif-brand font-bold text-2xl text-[#16382B]">
              ₹{isLoading ? '...' : (metrics?.todaySalesVolume || 0).toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider">Pending Action</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif-brand font-bold text-2xl text-amber-700">
              {isLoading ? '...' : metrics?.pendingOrdersCount || 0}
            </span>
            <span className="text-[10px] text-[#8A9B93]">awaiting dispatch</span>
          </div>
        </div>

        {/* Paid Orders */}
        <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider">Verified Paid</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif-brand font-bold text-2xl text-emerald-800">
              {isLoading ? '...' : metrics?.paidOrdersCount || 0}
            </span>
            <span className="text-[10px] text-[#8A9B93]">settled</span>
          </div>
        </div>

        {/* Total Customers */}
        <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs space-y-2 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider">Total Customers</span>
            <div className="w-8 h-8 rounded-lg bg-[#E8F1EB] text-[#16382B] flex items-center justify-center">
              <Users className="w-4 h-4 text-[#16382B]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-serif-brand font-bold text-2xl text-[#16382B]">
              {isLoading ? '...' : metrics?.totalCustomersCount || 0}
            </span>
            <span className="text-[10px] text-[#8A9B93]">profiles</span>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS BANNER */}
      <div className="p-4 rounded-2xl bg-[#E8F1EB]/80 border border-[#16382B]/15 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#16382B] text-[#DFB36C] flex items-center justify-center">
            <Truck className="w-5 h-5 text-[#DFB36C]" />
          </div>
          <div>
            <span className="font-bold text-xs sm:text-sm text-[#16382B] block">Express Courier Dispatch Window</span>
            <span className="text-[11px] text-[#3D5A68]">Tirunelveli central hub handoff cutoff is 5:30 PM IST daily.</span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Link
            href="/admin/invoices"
            className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#16382B]/15 text-[#16382B] text-xs font-semibold text-center shadow-2xs"
          >
            Bulk Invoices (ZIP)
          </Link>
          <Link
            href="/admin/reports"
            className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold text-center"
          >
            Sales Analytics
          </Link>
        </div>
      </div>

      {/* RECENT ORDERS CONTAINER */}
      <div className="bg-white rounded-3xl border border-[#16382B]/10 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5]/50">
          <div>
            <h2 className="font-serif-brand font-bold text-base sm:text-lg text-[#16382B]">
              Recent Orders
            </h2>
            <p className="text-xs text-[#8A9B93]">Latest transactions received from the storefront.</p>
          </div>

          <Link
            href="/admin/orders"
            className="text-xs font-bold text-[#C29043] hover:text-[#16382B] transition-colors"
          >
            View All ({metrics?.totalOrdersCount || 0}) →
          </Link>
        </div>

        {/* MOBILE RECENT ORDERS CARD GRID (md:hidden) */}
        <div className="md:hidden p-3.5 space-y-3">
          {isLoading ? (
            <div className="py-8 text-center text-xs text-[#8A9B93]">Loading recent orders...</div>
          ) : !metrics?.recentOrders?.length ? (
            <div className="py-8 text-center text-xs text-[#8A9B93]">No orders placed yet.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {metrics.recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl p-3.5 border border-[#16382B]/10 shadow-xs space-y-2.5 hover:border-[#C29043]/40 transition-all flex flex-col justify-between"
                >
                  {/* Top Row: Order # + Actions */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[#16382B] text-xs">
                      {order.orderNumber}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setSelectedOrder(order)}
                        className="px-2 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] text-[11px] font-semibold border border-[#16382B]/10 transition-colors cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDownloadInvoice(order)}
                        className="p-1 rounded-lg hover:bg-[#FAF8F5] text-[#C29043] hover:text-[#16382B] border border-transparent hover:border-[#16382B]/10 transition-colors cursor-pointer"
                        title="Download PDF Invoice"
                      >
                        <FileText className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Middle: Customer info */}
                  <div className="space-y-0.5 text-xs pt-1 border-t border-[#16382B]/5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#16382B] truncate">{order.customer.fullName}</span>
                      <span className="text-[10.5px] text-[#8A9B93]">{order.customer.city}</span>
                    </div>
                    <p className="text-[10.5px] text-[#3D5A68]">
                      {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                    </p>
                  </div>

                  {/* Bottom Row: Status Tag + Amount */}
                  <div className="pt-2 border-t border-[#16382B]/5 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider ${
                        order.status === 'DELIVERED'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'DISPATCHED'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'CONFIRMED'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                      ₹{order.finalTotal}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP TABLE (hidden md:block) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#16382B]/10 bg-[#FAF8F5] text-[#8A9B93] uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4 font-bold text-[#16382B]">Order ID</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Customer</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Items</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Total</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Payment</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Status</th>
                <th className="py-3 px-4 font-bold text-[#16382B] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16382B]/5">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-xs text-[#8A9B93]">
                    Loading recent orders...
                  </td>
                </tr>
              ) : !metrics?.recentOrders?.length ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-xs text-[#8A9B93]">
                    No orders placed yet.
                  </td>
                </tr>
              ) : (
                metrics.recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#16382B]">
                      {order.orderNumber}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-[#16382B] block">{order.customer.fullName}</span>
                      <span className="text-[10px] text-[#8A9B93] block">{order.customer.city}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#3D5A68]">
                      {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                    </td>
                    <td className="py-3.5 px-4 font-serif-brand font-bold text-[#16382B]">
                      ₹{order.finalTotal}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        order.payment.status === 'PAID'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {order.payment.status} ({order.payment.method})
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        order.status === 'DELIVERED'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'DISPATCHED'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'CONFIRMED'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelectedOrder(order)}
                          className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] text-[11px] font-semibold border border-[#16382B]/10 transition-colors cursor-pointer"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDownloadInvoice(order)}
                          className="p-1 rounded-lg hover:bg-[#FAF8F5] text-[#C29043] hover:text-[#16382B] border border-transparent hover:border-[#16382B]/10 transition-colors cursor-pointer"
                          title="Download PDF Invoice"
                        >
                          <FileText className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: QUICK ORDER VIEW */}
      {selectedOrder && (
        <div 
          onClick={() => setSelectedOrder(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 backdrop-blur-2xs animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full flex flex-col max-h-[90vh] overflow-hidden border border-[#16382B]/10 shadow-2xl animate-in zoom-in-95 duration-150"
          >
            {/* Modal Header */}
            <div className="p-5 pb-3 border-b border-[#16382B]/10 flex items-center justify-between flex-shrink-0 bg-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C29043]">Order Details</span>
                <h3 className="font-serif-brand font-bold text-lg text-[#16382B]">
                  {selectedOrder.orderNumber}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="w-7 h-7 rounded-full bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#8A9B93] hover:text-[#16382B] flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1 overscroll-contain">
              {/* Customer Details */}
              <div className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#16382B]/10 text-xs space-y-1">
                <span className="font-bold text-[#16382B] block">{selectedOrder.shippingSnapshot?.fullName || selectedOrder.customer.fullName}</span>
                <p className="text-[#3D5A68]">Phone: {selectedOrder.shippingSnapshot?.phone || selectedOrder.customer.phone}</p>
                <p className="text-[#3D5A68]">
                  Address: {selectedOrder.shippingSnapshot?.address || ''}, {selectedOrder.shippingSnapshot?.city || ''} - {selectedOrder.shippingSnapshot?.pincode || ''}
                </p>
              </div>

              {/* Itemized list */}
              <div className="space-y-2 border-t border-b border-[#16382B]/10 py-3 text-xs">
                <span className="font-bold text-[#16382B] block">Ordered Items ({selectedOrder.items.length})</span>
                <div className="divide-y divide-[#16382B]/5">
                  {selectedOrder.items.map((it) => (
                    <div key={it.id} className="py-1.5 flex justify-between">
                      <div>
                        <span className="font-semibold text-[#16382B] block">{it.productName}</span>
                        <span className="text-[10px] text-[#8A9B93]">{it.quantity} × ₹{it.unitPrice} ({it.packSize})</span>
                      </div>
                      <span className="font-bold text-[#16382B]">₹{it.lineTotal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total breakdown */}
              <div className="flex justify-between items-center text-sm font-bold text-[#16382B]">
                <span>Total Payable</span>
                <span className="font-serif-brand text-lg text-[#16382B]">₹{selectedOrder.finalTotal}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 border-t border-[#16382B]/10 bg-[#FAF8F5]/90 flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => handleDownloadInvoice(selectedOrder)}
                className="flex-1 py-2.5 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4 text-[#DFB36C]" />
                <span>Download Invoice PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF3EB] text-[#16382B] text-xs font-semibold border border-[#16382B]/10 cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
