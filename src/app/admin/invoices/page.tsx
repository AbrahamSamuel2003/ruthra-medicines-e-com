'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  FileText, 
  Calendar, 
  Download, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  Archive, 
  RefreshCw, 
  Search, 
  ArrowRight,
  CreditCard,
  Banknote,
  Receipt
} from 'lucide-react';
import { Order } from '@/types/admin';
import { generateOrderInvoicePdf, generateInvoicesZip } from '@/lib/invoiceGenerator';

export default function AdminInvoicesPage() {
  const todayStr = new Date().toISOString().split('T')[0];
  const lastWeekStr = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];

  const [fromDate, setFromDate] = useState(lastWeekStr);
  const [toDate, setToDate] = useState(todayStr);
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentFilter, setPaymentFilter] = useState<'ALL' | 'PAID' | 'PENDING'>('ALL');
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingZip, setIsGeneratingZip] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchInvoices = async (from: string, to: string) => {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const res = await fetch(`/api/admin/invoices?fromDate=${from}&toDate=${to}`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      } else {
        setOrders([]);
      }
    } catch {
      setOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices(fromDate, toDate);
  }, []);

  const handleApplyFilter = (e: React.FormEvent) => {
    e.preventDefault();
    fetchInvoices(fromDate, toDate);
  };

  const handleQuickPreset = (preset: 'today' | 'yesterday' | 'last7' | 'thisMonth') => {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    let from = today;
    let to = today;

    if (preset === 'today') {
      from = today;
      to = today;
    } else if (preset === 'yesterday') {
      const y = new Date(now.getTime() - 86400000).toISOString().split('T')[0];
      from = y;
      to = y;
    } else if (preset === 'last7') {
      from = new Date(now.getTime() - 7 * 86400000).toISOString().split('T')[0];
      to = today;
    } else if (preset === 'thisMonth') {
      from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
      to = today;
    }

    setFromDate(from);
    setToDate(to);
    fetchInvoices(from, to);
  };

  // Client-side filtering for fast searching & status filter
  const filteredOrders = useMemo(() => {
    let list = [...orders];

    if (paymentFilter !== 'ALL') {
      list = list.filter((o) => o.payment.status === paymentFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (o) =>
          o.orderNumber.toLowerCase().includes(q) ||
          (o.invoice?.invoiceNumber && o.invoice.invoiceNumber.toLowerCase().includes(q)) ||
          o.customer.fullName.toLowerCase().includes(q) ||
          o.customer.phone.includes(q) ||
          (o.customer.email && o.customer.email.toLowerCase().includes(q)) ||
          o.shippingSnapshot?.city.toLowerCase().includes(q)
      );
    }

    return list;
  }, [orders, paymentFilter, searchQuery]);

  // Bulk ZIP Download
  const handleBulkZipDownload = async () => {
    if (filteredOrders.length === 0) return;
    setIsGeneratingZip(true);
    try {
      const zipBlob = await generateInvoicesZip(filteredOrders);
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Ruthra_Invoices_${fromDate}_to_${toDate}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error creating ZIP archive:', err);
    } finally {
      setIsGeneratingZip(false);
    }
  };

  // Single PDF Invoice Download
  const handleSingleInvoiceDownload = (order: Order) => {
    const doc = generateOrderInvoicePdf(order);
    const safeCustomer = order.customer.fullName.replace(/[^a-zA-Z0-9]/g, '_');
    doc.save(`Invoice_${order.orderNumber}_${safeCustomer}.pdf`);
  };

  const totalInvoiceAmount = filteredOrders.reduce((sum, o) => sum + o.finalTotal, 0);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#16382B]/10 pb-4">
        <div>
          <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            Tax Invoices &amp; Billing Management
          </h1>
          <p className="text-xs sm:text-sm text-[#3D5A68] mt-0.5">
            Filter invoices by date range, search by customer/order, and download individual or bulk ZIP PDF invoices.
          </p>
        </div>
      </div>

      {/* DATE RANGE & PRESETS CARD */}
      <div className="bg-white p-5 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#16382B]/10 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C29043]" />
            <h2 className="font-serif-brand font-bold text-sm sm:text-base text-[#16382B]">
              Invoice Date Range
            </h2>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 text-xs flex-wrap">
            <button
              type="button"
              onClick={() => handleQuickPreset('today')}
              className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer transition-colors"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => handleQuickPreset('yesterday')}
              className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer transition-colors"
            >
              Yesterday
            </button>
            <button
              type="button"
              onClick={() => handleQuickPreset('last7')}
              className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer transition-colors"
            >
              Last 7 Days
            </button>
            <button
              type="button"
              onClick={() => handleQuickPreset('thisMonth')}
              className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] font-semibold border border-[#16382B]/10 cursor-pointer transition-colors"
            >
              This Month
            </button>
          </div>
        </div>

        {/* Date Form & Live Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16382B] mb-1">
              From Date:
            </label>
            <input
              type="date"
              required
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full py-2 px-3 border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] text-xs font-bold text-[#16382B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16382B] mb-1">
              To Date:
            </label>
            <input
              type="date"
              required
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full py-2 px-3 border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] text-xs font-bold text-[#16382B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16382B] mb-1">
              Payment Status:
            </label>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value as 'ALL' | 'PAID' | 'PENDING')}
              className="w-full py-2 px-3 border border-[#16382B]/20 rounded-xl bg-[#FAF8F5] text-xs font-bold text-[#16382B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043]"
            >
              <option value="ALL">All Payments</option>
              <option value="PAID">Paid Invoices Only</option>
              <option value="PENDING">COD (Pending Due) Only</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fetchInvoices(fromDate, toDate)}
              disabled={isLoading}
              className="w-full py-2 px-4 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all"
            >
              <Filter className="w-3.5 h-3.5 text-[#DFB36C]" />
              <span>{isLoading ? 'Scanning...' : 'Apply Date Filter'}</span>
            </button>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8A9B93] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer name, phone, email, invoice number, or order number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#16382B]/15 rounded-xl bg-[#FAF8F5] text-xs text-[#16382B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043]"
            />
          </div>
        </div>
      </div>

      {/* SUMMARY & BULK ZIP STRIP */}
      <div className="p-4 sm:p-5 rounded-3xl bg-[#FAF8F5] border border-[#16382B]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm ${
            filteredOrders.length > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
          }`}>
            {filteredOrders.length}
          </div>
          <div>
            <span className="font-bold text-sm text-[#16382B] block">
              {filteredOrders.length === 0
                ? 'No invoices match the current filter'
                : `${filteredOrders.length} ${filteredOrders.length === 1 ? 'Invoice' : 'Invoices'} • Total Value: ₹${totalInvoiceAmount}`}
            </span>
            <span className="text-[11px] text-[#3D5A68]">
              Period: {fromDate} through {toDate}
            </span>
          </div>
        </div>

        {filteredOrders.length > 0 && (
          <button
            type="button"
            onClick={handleBulkZipDownload}
            disabled={isGeneratingZip}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#C29043] hover:bg-[#a67a36] text-[#16382B] font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-70 active:scale-98"
          >
            <Archive className="w-4 h-4 text-[#16382B]" />
            <span>
              {isGeneratingZip
                ? 'Compiling ZIP Archive...'
                : `Download ${filteredOrders.length} Invoices as ZIP`}
            </span>
          </button>
        )}
      </div>

      {/* INVOICE REGISTRY CONTAINER */}
      <div className="bg-white rounded-3xl border border-[#16382B]/10 shadow-xs overflow-hidden">
        <div className="p-3.5 sm:p-4 border-b border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5]/50">
          <span className="text-xs font-bold text-[#16382B]">
            Invoice Registry ({filteredOrders.length})
          </span>
          <span className="text-[11px] text-[#8A9B93] hidden sm:inline">
            Click PDF to download individual official tax invoices
          </span>
        </div>

        {/* MOBILE CARD GRID (md:hidden) */}
        <div className="md:hidden p-3.5 space-y-3">
          {isLoading ? (
            <div className="py-12 text-center text-xs text-[#8A9B93]">Scanning database for invoices...</div>
          ) : filteredOrders.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#8A9B93]">
              {hasSearched ? (
                <div className="space-y-1">
                  <AlertCircle className="w-6 h-6 text-amber-600 mx-auto" />
                  <p className="font-bold text-[#16382B]">No invoices match your search or filter.</p>
                  <p className="text-[11px] text-[#8A9B93]">Try clearing the search query or adjusting the date range.</p>
                </div>
              ) : (
                'Select a date range and click Apply Date Filter.'
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredOrders.map((order) => {
                const invNum = order.invoice?.invoiceNumber || (order.orderNumber.startsWith('RM-') ? `INV-${order.orderNumber.slice(3)}` : `INV-${order.orderNumber}`);
                const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                });
                const isPaid = order.payment.status === 'PAID';

                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-2xl p-3.5 border border-[#16382B]/10 shadow-xs space-y-2.5 hover:border-[#C29043]/40 transition-all flex flex-col justify-between"
                  >
                    {/* Top Row: Invoice # + Download Button */}
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="font-mono font-bold text-[#16382B] text-xs block truncate">
                          {invNum}
                        </span>
                        <span className="text-[10px] text-[#8A9B93] block font-mono">
                          {order.orderNumber}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleSingleInvoiceDownload(order)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#16382B] hover:bg-[#204C3B] text-white text-[11px] font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors shadow-2xs flex-shrink-0"
                        title="Download Tax Invoice PDF"
                      >
                        <Download className="w-3.5 h-3.5 text-[#DFB36C]" />
                        <span>PDF</span>
                      </button>
                    </div>

                    {/* Middle: Customer Details & Date */}
                    <div className="space-y-1 text-xs pt-1 border-t border-[#16382B]/5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-[#16382B] truncate">{order.customer.fullName}</span>
                        <span className="text-[#8A9B93] text-[10px] flex-shrink-0">{orderDate}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10.5px] text-[#3D5A68]">
                        <span>{order.customer.phone}</span>
                        <span>{order.shippingSnapshot?.city || order.customer.city}</span>
                      </div>
                      <p className="text-[10.5px] text-[#8A9B93]">
                        {order.items.length} {order.items.length === 1 ? 'Formulation SKU' : 'Formulation SKUs'}
                      </p>
                    </div>

                    {/* Bottom Row: Status Tag + Total Amount */}
                    <div className="pt-2 border-t border-[#16382B]/5 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className={`px-2 py-0.5 rounded-md text-[9.5px] font-bold uppercase tracking-wider ${
                          isPaid
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          {order.payment.status}
                        </span>
                        <span className="text-[9.5px] text-[#8A9B93] uppercase font-mono">
                          {order.payment.method}
                        </span>
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
                <th className="py-3 px-4 font-bold text-[#16382B]">Invoice #</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Order #</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Date</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Customer &amp; Phone</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">City</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Items</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Total</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Payment</th>
                <th className="py-3 px-4 font-bold text-[#16382B] text-right">PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16382B]/5">
              {isLoading ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-xs text-[#8A9B93]">
                    Scanning database for invoices...
                  </td>
                </tr>
              ) : filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-xs text-[#8A9B93]">
                    {hasSearched ? (
                      <div className="space-y-1">
                        <AlertCircle className="w-6 h-6 text-amber-600 mx-auto" />
                        <p className="font-bold text-[#16382B]">No invoices match your search or filter.</p>
                        <p className="text-[11px] text-[#8A9B93]">Try clearing the search query or adjusting the date range.</p>
                      </div>
                    ) : (
                      'Select a date range and click Apply Date Filter.'
                    )}
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                  const invNum = order.invoice?.invoiceNumber || `INV-${order.orderNumber}`;
                  const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  });
                  const isPaid = order.payment.status === 'PAID';

                  return (
                    <tr key={order.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#16382B]">
                        {invNum}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[#8A9B93]">
                        {order.orderNumber}
                      </td>
                      <td className="py-3.5 px-4 text-[#3D5A68] whitespace-nowrap">
                        {orderDate}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-[#16382B] block">{order.customer.fullName}</span>
                        <span className="text-[10px] text-[#8A9B93] block">{order.customer.phone}</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#3D5A68]">
                        {order.shippingSnapshot?.city || order.customer.city}
                      </td>
                      <td className="py-3.5 px-4 text-[#3D5A68]">
                        {order.items.length} SKUs
                      </td>
                      <td className="py-3.5 px-4 font-serif-brand font-bold text-sm text-[#16382B]">
                        ₹{order.finalTotal}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                            isPaid
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {order.payment.status}
                          </span>
                          <span className="text-[10px] text-[#8A9B93] uppercase font-mono">
                            {order.payment.method}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleSingleInvoiceDownload(order)}
                          className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#16382B] text-[11px] font-semibold border border-[#16382B]/10 inline-flex items-center gap-1 cursor-pointer transition-colors"
                          title="Download individual PDF Tax Invoice"
                        >
                          <Download className="w-3 h-3 text-[#C29043]" />
                          <span>PDF</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
