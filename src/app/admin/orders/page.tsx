'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  RefreshCw, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Truck, 
  XCircle,
  Eye,
  AlertCircle,
  Send,
  ExternalLink,
  Link2
} from 'lucide-react';
import { Order, OrderStatus, PaymentStatus } from '@/types/admin';
import { generateOrderInvoicePdf } from '@/lib/invoiceGenerator';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [paymentFilter, setPaymentFilter] = useState('ALL');
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [trackingInput, setTrackingInput] = useState('');
  const [isSendingTracking, setIsSendingTracking] = useState(false);
  const [trackingFeedback, setTrackingFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    if (activeOrder) {
      setTrackingInput(activeOrder.trackingUrl || '');
      setTrackingFeedback(null);
    }
  }, [activeOrder]);

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'ALL') params.append('status', statusFilter);
      if (paymentFilter !== 'ALL') params.append('paymentStatus', paymentFilter);
      if (searchQuery.trim()) params.append('search', searchQuery.trim());

      const res = await fetch(`/api/admin/orders?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  }, [statusFilter, paymentFilter, searchQuery]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // Lock body scroll and handle Escape key to close modal
  useEffect(() => {
    if (!activeOrder) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveOrder(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeOrder]);

  const handleSendTracking = async () => {
    if (!activeOrder) return;
    if (!trackingInput.trim()) {
      setTrackingFeedback({ type: 'error', message: 'Please paste a valid tracking link before sending.' });
      return;
    }

    setIsSendingTracking(true);
    setTrackingFeedback(null);

    try {
      const res = await fetch(`/api/admin/orders/${activeOrder.id}/tracking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingUrl: trackingInput.trim() })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setActiveOrder(data.order);
        setTrackingFeedback({
          type: 'success',
          message: data.emailSent 
            ? 'Tracking link emailed to customer and order marked as DISPATCHED.'
            : 'Order marked as DISPATCHED with tracking link.'
        });
        fetchOrders();
      } else {
        setTrackingFeedback({
          type: 'error',
          message: data.error || 'Failed to send tracking link.'
        });
      }
    } catch {
      setTrackingFeedback({
        type: 'error',
        message: 'Network error occurred while sending tracking link.'
      });
    } finally {
      setIsSendingTracking(false);
    }
  };

  const handleUpdateStatus = async (orderId: string, newStatus: OrderStatus) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (res.ok) {
        const data = await res.json();
        setActiveOrder(data.order);
        fetchOrders();
      }
    } catch {
      // ignore
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdatePayment = async (orderId: string, newPaymentStatus: PaymentStatus) => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentStatus: newPaymentStatus })
      });

      if (res.ok) {
        const data = await res.json();
        setActiveOrder(data.order);
        fetchOrders();
      }
    } catch {
      // ignore
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDownloadInvoice = (order: Order) => {
    const doc = generateOrderInvoicePdf(order);
    doc.save(`Invoice_${order.orderNumber}.pdf`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#16382B]/10 pb-4">
        <div>
          <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            Orders Management
          </h1>
          <p className="text-xs sm:text-sm text-[#3D5A68] mt-0.5">
            Track customer orders, verify payments, manage shipping status, and generate invoices.
          </p>
        </div>

        <button
          type="button"
          onClick={() => fetchOrders()}
          disabled={isLoading}
          className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#16382B]/15 text-[#16382B] text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#C29043] ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* FILTER & SEARCH STRIP */}
      <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
        {/* Search */}
        <div className="relative sm:col-span-2 lg:col-span-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8A9B93]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by order #, customer name, phone or city..."
            className="block w-full pl-9 pr-3 py-2 border border-[#16382B]/15 rounded-xl bg-[#FAF8F5] text-xs text-[#16382B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043] focus:border-transparent"
          />
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full py-2 px-3 border border-[#16382B]/15 rounded-xl bg-[#FAF8F5] text-xs text-[#16382B] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043]"
          >
            <option value="ALL">All Order Statuses</option>
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="DISPATCHED">Dispatched</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        {/* Payment Filter */}
        <div>
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="w-full py-2 px-3 border border-[#16382B]/15 rounded-xl bg-[#FAF8F5] text-xs text-[#16382B] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043]"
          >
            <option value="ALL">All Payment Statuses</option>
            <option value="PAID">Paid (Verified)</option>
            <option value="PENDING">Pending Payment</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>
      </div>

      {/* ORDERS DISPLAY CONTAINER */}
      <div className="bg-white rounded-3xl border border-[#16382B]/10 shadow-xs overflow-hidden">
        <div className="p-3.5 sm:p-4 border-b border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5]/50">
          <span className="text-xs font-bold text-[#16382B]">
            Showing {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
          </span>
          <span className="text-[11px] text-[#8A9B93] hidden sm:inline">
            Click &apos;Manage&apos; to view full details and update status
          </span>
        </div>

        {/* MOBILE CARD GRID (md:hidden) */}
        <div className="md:hidden p-3.5 space-y-3">
          {isLoading ? (
            <div className="py-12 text-center text-xs text-[#8A9B93]">Loading orders...</div>
          ) : orders.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#8A9B93]">No orders match the selected filters.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {orders.map((order) => {
                const dateFormatted = new Date(order.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit'
                });

                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-2xl p-3.5 border border-[#16382B]/10 shadow-xs space-y-2.5 hover:border-[#C29043]/40 transition-all flex flex-col justify-between"
                  >
                    {/* Top Row: Order # + Actions */}
                    <div className="flex items-center justify-between">
                      <div className="min-w-0">
                        <span className="font-mono font-bold text-[#16382B] text-xs block truncate">
                          {order.orderNumber}
                        </span>
                        <span className="text-[10px] text-[#8A9B93] block">
                          {dateFormatted}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => setActiveOrder(order)}
                          className="p-1.5 rounded-lg bg-[#16382B] hover:bg-[#204C3B] text-[#DFB36C] transition-colors cursor-pointer shadow-2xs"
                          title="Manage Order"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDownloadInvoice(order)}
                          className="p-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#C29043] hover:text-[#16382B] border border-[#16382B]/10 transition-colors cursor-pointer"
                          title="Download Tax Invoice"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Middle: Customer & Formulations details */}
                    <div className="space-y-1 text-xs pt-1 border-t border-[#16382B]/5">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#16382B] truncate">{order.customer.fullName}</span>
                        <span className="text-[11px] text-[#8A9B93] flex-shrink-0">{order.shippingSnapshot?.city || order.customer.city}</span>
                      </div>
                      <p className="text-[11px] text-[#3D5A68] line-clamp-2">
                        {order.items.map(i => `${i.productName} (x${i.quantity})`).join(', ')}
                      </p>
                    </div>

                    {/* Bottom Row: Status Badge & Total Amount */}
                    <div className="pt-2 border-t border-[#16382B]/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider ${
                          order.status === 'DELIVERED'
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'DISPATCHED'
                            ? 'bg-blue-100 text-blue-800'
                            : order.status === 'CONFIRMED'
                            ? 'bg-purple-100 text-purple-800'
                            : order.status === 'CANCELLED'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {order.status}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase ${
                          order.payment.status === 'PAID'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          {order.payment.method.toUpperCase()}
                        </span>
                        {order.trackingUrl && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            <span>Tracked</span>
                          </span>
                        )}
                      </div>
                      <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                        ₹{order.finalTotal}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* DESKTOP TABLE (hidden md:block) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#16382B]/10 bg-[#FAF8F5] text-[#8A9B93] uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4 font-bold text-[#16382B]">Order #</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Date</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Customer</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Items</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Total</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Payment</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Order Status</th>
                <th className="py-3 px-4 font-bold text-[#16382B] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16382B]/5">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-xs text-[#8A9B93]">
                    Loading orders...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-xs text-[#8A9B93]">
                    No orders match the selected filters.
                  </td>
                </tr>
              ) : (
                orders.map((order) => {
                  const dateFormatted = new Date(order.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return (
                    <tr key={order.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#16382B]">
                        {order.orderNumber}
                      </td>
                      <td className="py-3.5 px-4 text-[#8A9B93] whitespace-nowrap">
                        {dateFormatted}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-[#16382B] block">{order.customer.fullName}</span>
                        <span className="text-[10px] text-[#8A9B93] block">{order.customer.phone}</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#3D5A68]">
                        {order.items.reduce((acc, it) => acc + it.quantity, 0)} units
                        <span className="block text-[10px] text-[#8A9B93]">({order.items.length} SKUs)</span>
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
                            : order.status === 'CANCELLED'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {order.status}
                        </span>
                        {order.trackingUrl && (
                          <span className="block text-[9.5px] text-emerald-700 font-semibold mt-1 flex items-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            <span>Tracking Sent</span>
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setActiveOrder(order)}
                            className="px-2.5 py-1 rounded-lg bg-[#16382B] hover:bg-[#204C3B] text-white text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                          >
                            <Eye className="w-3 h-3 text-[#DFB36C]" />
                            <span>Manage</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDownloadInvoice(order)}
                            className="p-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#C29043] hover:text-[#16382B] border border-[#16382B]/10 transition-colors cursor-pointer"
                            title="Download Tax Invoice"
                          >
                            <FileText className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* FULL ORDER MANAGEMENT MODAL / DRAWER */}
      {activeOrder && (
        <div 
          onClick={() => setActiveOrder(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 backdrop-blur-2xs animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full flex flex-col max-h-[90vh] overflow-hidden border border-[#16382B]/10 shadow-2xl animate-in zoom-in-95 duration-150"
          >
            {/* Fixed Modal Header */}
            <div className="p-5 sm:p-6 pb-3.5 border-b border-[#16382B]/10 flex items-center justify-between flex-shrink-0 bg-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C29043]">
                  Order Management Console
                </span>
                <h3 className="font-serif-brand font-bold text-xl text-[#16382B] flex items-center gap-2">
                  <span>{activeOrder.orderNumber}</span>
                  <span className="text-xs font-mono font-normal text-[#8A9B93]">
                    ({new Date(activeOrder.createdAt).toLocaleDateString('en-IN')})
                  </span>
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveOrder(null)}
                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#8A9B93] hover:text-[#16382B] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Modal Body (Properly Fit with Clean Margins) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 overscroll-contain">
              {/* Quick Status Control Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10">
                {/* Order Status Updater */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#16382B] mb-1">
                    Order Dispatch Status:
                  </label>
                  <select
                    value={activeOrder.status}
                    disabled={isUpdating}
                    onChange={(e) => handleUpdateStatus(activeOrder.id, e.target.value as OrderStatus)}
                    className="w-full py-1.5 px-2.5 border border-[#16382B]/20 rounded-xl bg-white text-xs font-bold text-[#16382B] focus:outline-none focus:ring-2 focus:ring-[#C29043]"
                  >
                    <option value="PENDING">PENDING (Awaiting Review)</option>
                    <option value="CONFIRMED">CONFIRMED (Ready to Pack)</option>
                    <option value="DISPATCHED">DISPATCHED (Courier Handed Off)</option>
                    <option value="DELIVERED">DELIVERED (Fulfilled)</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>

                {/* Payment Status Updater */}
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#16382B] mb-1">
                    Payment Verification:
                  </label>
                  <select
                    value={activeOrder.payment.status}
                    disabled={isUpdating}
                    onChange={(e) => handleUpdatePayment(activeOrder.id, e.target.value as PaymentStatus)}
                    className="w-full py-1.5 px-2.5 border border-[#16382B]/20 rounded-xl bg-white text-xs font-bold text-[#16382B] focus:outline-none focus:ring-2 focus:ring-[#C29043]"
                  >
                    <option value="PAID">PAID (Verified)</option>
                    <option value="PENDING">PENDING (Cash on Delivery)</option>
                    <option value="FAILED">FAILED / DECLINED</option>
                  </select>
                </div>
              </div>

              {/* Customer & Shipping Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5]/60 border border-[#16382B]/10 space-y-1">
                  <span className="font-bold uppercase tracking-wider text-[10px] block text-[#C29043]">
                    Customer Contact
                  </span>
                  <p className="font-bold text-[#16382B] text-sm">{activeOrder.customer.fullName}</p>
                  <p className="text-[#3D5A68]">Phone: {activeOrder.customer.phone}</p>
                  {activeOrder.customer.email && <p className="text-[#3D5A68]">Email: {activeOrder.customer.email}</p>}
                  <p className="text-[#8A9B93]">Customer ID: {activeOrder.customerId}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF8F5]/60 border border-[#16382B]/10 space-y-1">
                  <span className="font-bold uppercase tracking-wider text-[10px] block text-[#C29043]">
                    Delivery Address
                  </span>
                  <p className="text-[#16382B] font-medium leading-snug">
                    {activeOrder.shippingSnapshot?.address || ''}
                  </p>
                  {activeOrder.shippingSnapshot?.landmark && (
                    <p className="text-[#8A9B93]">Landmark: {activeOrder.shippingSnapshot.landmark}</p>
                  )}
                  <p className="font-bold text-[#16382B]">
                    {activeOrder.shippingSnapshot?.city || ''}, {activeOrder.shippingSnapshot?.state || ''} - {activeOrder.shippingSnapshot?.pincode || ''}
                  </p>
                </div>
              </div>

              {/* Courier Tracking Dispatch Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#16382B]/15 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#16382B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#16382B]">
                      Courier Tracking & Dispatch
                    </span>
                  </div>
                  {activeOrder.trackingSentAt ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Tracking Sent ({new Date(activeOrder.trackingSentAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })})</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-600">
                      No Tracking Sent Yet
                    </span>
                  )}
                </div>

                {activeOrder.trackingUrl && (
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs flex items-center justify-between gap-2">
                    <div className="truncate text-[#3D5A68]">
                      <span className="font-semibold text-[#16382B] block text-[10.5px] uppercase tracking-wider">Active Tracking Link:</span>
                      <a 
                        href={activeOrder.trackingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#16382B] font-mono text-[11px] underline truncate block hover:text-[#C29043]"
                      >
                        {activeOrder.trackingUrl}
                      </a>
                    </div>
                    <a
                      href={activeOrder.trackingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white border border-[#16382B]/15 text-[#16382B] hover:bg-[#FAF8F5] flex-shrink-0"
                      title="Open tracking link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold text-[#16382B]">
                    Paste Courier Tracking Link:
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={trackingInput}
                        onChange={(e) => setTrackingInput(e.target.value)}
                        placeholder="e.g. https://stcourier.com/track?no=123456789"
                        className="w-full py-2 px-3 pl-8 border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] text-xs text-[#16382B] placeholder:text-[#8A9B93] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#16382B]"
                      />
                      <Link2 className="w-3.5 h-3.5 text-[#8A9B93] absolute left-2.5 top-1/2 -translate-y-1/2" />
                    </div>
                    <button
                      type="button"
                      disabled={isSendingTracking || !trackingInput.trim()}
                      onClick={handleSendTracking}
                      className="px-4 py-2 rounded-xl bg-[#16382B] hover:bg-[#204C3B] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer flex-shrink-0 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5 text-[#DFB36C]" />
                      <span>{isSendingTracking ? 'Sending...' : 'Send Tracking'}</span>
                    </button>
                  </div>
                  <p className="text-[10.5px] text-[#8A9B93]">
                    Pasting and clicking Send will email the tracking link to {activeOrder.shippingSnapshot?.email || activeOrder.customer.email || 'the customer'} and automatically change status to DISPATCHED.
                  </p>
                </div>

                {trackingFeedback && (
                  <div className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                    trackingFeedback.type === 'success' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {trackingFeedback.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                    )}
                    <span>{trackingFeedback.message}</span>
                  </div>
                )}
              </div>

              {/* Itemized Table */}
              <div className="space-y-2 border-t border-b border-[#16382B]/10 py-3">
                <span className="text-xs font-bold text-[#16382B] uppercase tracking-wider block">
                  Order Items ({activeOrder.items.length})
                </span>
                <div className="divide-y divide-[#16382B]/5 text-xs">
                  {activeOrder.items.map((it) => (
                    <div key={it.id} className="py-2 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#16382B] block">{it.productName}</span>
                        <span className="text-[11px] text-[#8A9B93]">
                          {it.formulation} • {it.packSize} • Qty: {it.quantity} × ₹{it.unitPrice}
                        </span>
                      </div>
                      <span className="font-bold text-[#16382B]">₹{it.lineTotal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Summary */}
              <div className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#16382B]/10 space-y-1.5 text-xs text-[#3D5A68]">
                <div className="flex justify-between">
                  <span>Subtotal (Items)</span>
                  <span>₹{activeOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-green-700 font-medium">
                  <span>Direct Savings</span>
                  <span>-₹{activeOrder.discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Courier Delivery</span>
                  <span>{activeOrder.deliveryCharge === 0 ? 'FREE' : `₹${activeOrder.deliveryCharge}`}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#16382B] pt-1.5 border-t border-[#16382B]/10">
                  <span>Total Amount</span>
                  <span className="font-serif-brand text-base text-[#16382B]">₹{activeOrder.finalTotal}</span>
                </div>
              </div>
            </div>

            {/* Fixed Action Footer */}
            <div className="p-4 sm:px-6 border-t border-[#16382B]/10 bg-[#FAF8F5]/90 flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => handleDownloadInvoice(activeOrder)}
                className="flex-1 py-2.5 sm:py-3 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-colors"
              >
                <FileText className="w-4 h-4 text-[#DFB36C]" />
                <span>Download Official Tax Invoice PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveOrder(null)}
                className="px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-[#FAF3EB] text-[#16382B] text-xs font-semibold border border-[#16382B]/10 cursor-pointer transition-colors"
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
