'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  IndianRupee, 
  Download, 
  RefreshCw, 
  Mail, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  CreditCard,
  Send,
  AlertCircle,
  Clock
} from 'lucide-react';

interface ReportData {
  summary: {
    totalRevenue: number;
    totalOrders: number;
    totalCustomers: number;
    totalItemsSold: number;
    averageOrderValue: number;
  };
  formulationSales: Record<string, { count: number; revenue: number }>;
  paymentMethods: Record<string, { count: number; total: number }>;
  topProducts: Array<{ id: string; name: string; formulation: string; quantity: number; revenue: number }>;
  totalCatalogSkus: number;
}

export default function AdminReportsPage() {
  const [data, setData] = useState<ReportData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSendingSummary, setIsSendingSummary] = useState(false);
  const [summaryStatus, setSummaryStatus] = useState<string | null>(null);
  const [adminRecipientEmail, setAdminRecipientEmail] = useState('abrahamsamuel645@gmail.com');
  const [summaryDeliveryTime, setSummaryDeliveryTime] = useState('20:00');
  const [isSaved, setIsSaved] = useState(false);

  // Load custom summary preferences
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedEmail = localStorage.getItem('ruthra_admin_summary_email');
      const savedTime = localStorage.getItem('ruthra_admin_summary_time');
      if (savedEmail) setAdminRecipientEmail(savedEmail);
      if (savedTime) setSummaryDeliveryTime(savedTime);
    }
  }, []);

  const handleSaveSchedule = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ruthra_admin_summary_email', adminRecipientEmail);
      localStorage.setItem('ruthra_admin_summary_time', summaryDeliveryTime);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  const summaryDeliveryTimeLabel = {
    '18:00': '6:00 PM IST',
    '19:00': '7:00 PM IST',
    '20:00': '8:00 PM IST',
    '21:00': '9:00 PM IST',
    '22:00': '10:00 PM IST',
    '08:00': '8:00 AM IST',
    '09:00': '9:00 AM IST'
  }[summaryDeliveryTime] || '8:00 PM IST';

  const fetchReports = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/reports');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleTriggerDailySummary = async () => {
    setIsSendingSummary(true);
    setSummaryStatus(null);
    try {
      const queryEmail = encodeURIComponent(adminRecipientEmail.trim() || 'abrahamsamuel645@gmail.com');
      const res = await fetch(`/api/cron/daily-summary?email=${queryEmail}`);
      if (res.ok) {
        const result = await res.json();
        setSummaryStatus(`Summary compiled and dispatched to ${result.recipient || adminRecipientEmail} (${result.summary.totalOrders} orders processed • Total: ₹${result.summary.totalSales})`);
      } else {
        setSummaryStatus('Failed to compile summary.');
      }
    } catch {
      setSummaryStatus('Network error compiling summary.');
    } finally {
      setIsSendingSummary(false);
    }
  };

  const handleExportCsv = async () => {
    try {
      const res = await fetch('/api/admin/orders');
      if (!res.ok) return;
      const { orders } = await res.json();

      const headers = ['Order Number', 'Date', 'Customer Name', 'Phone', 'City', 'Pincode', 'Items Count', 'Payment Method', 'Payment Status', 'Order Status', 'Total (INR)'];
      const rows = orders.map((o: any) => [
        o.orderNumber,
        new Date(o.createdAt).toISOString().split('T')[0],
        `"${o.customer.fullName.replace(/"/g, '""')}"`,
        `"${o.customer.phone}"`,
        `"${o.customer.city}"`,
        `"${o.customer.pincode}"`,
        o.items.length,
        o.payment.method,
        o.payment.status,
        o.status,
        o.finalTotal
      ]);

      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r: any) => r.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `Ruthra_Orders_Report_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('CSV export failed:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#16382B]/10 pb-4">
        <div>
          <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            Sales Analytics &amp; Reports
          </h1>
          <p className="text-xs sm:text-sm text-[#3D5A68] mt-0.5">
            Business performance metrics, formulation share, payment distribution, and nightly automation.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={handleExportCsv}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#16382B]/15 text-[#16382B] text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#C29043]" />
            <span>Export Orders (CSV)</span>
          </button>

          <button
            type="button"
            onClick={fetchReports}
            disabled={isLoading}
            className="px-3.5 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#FAF3EB] border border-[#16382B]/10 text-[#16382B] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#C29043] ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* 4 CORE EXECUTIVE METRICS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block">Total Revenue</span>
          <span className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#16382B] block">
            ₹{(data?.summary.totalRevenue || 0).toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-emerald-700 font-medium block">Store Total</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block">Total Orders</span>
          <span className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#16382B] block">
            {data?.summary.totalOrders || 0}
          </span>
          <span className="text-[10px] text-[#3D5A68] block">Completed checkouts</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block">Avg Order Value</span>
          <span className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#16382B] block">
            ₹{data?.summary.averageOrderValue || 0}
          </span>
          <span className="text-[10px] text-[#3D5A68] block">Per transaction</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-[#8A9B93] uppercase tracking-wider block">Total Units Sold</span>
          <span className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#16382B] block">
            {data?.summary.totalItemsSold || 0}
          </span>
          <span className="text-[10px] text-[#3D5A68] block">Across 34 SKUs</span>
        </div>
      </div>

      {/* AUTOMATED DAILY SUMMARY EMAIL CONSOLE */}
      <div className="bg-white p-6 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#16382B]/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F1EB] text-[#16382B] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#C29043]" />
            </div>
            <div>
              <h2 className="font-serif-brand font-bold text-base text-[#16382B]">
                Daily Sales &amp; Order Summary Email
              </h2>
              <p className="text-xs text-[#3D5A68]">
                Automated daily report summarizing order volume, revenue, payment collections, and items pending dispatch.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleTriggerDailySummary}
            disabled={isSendingSummary}
            className="px-4 py-2 rounded-xl bg-[#16382B] hover:bg-[#204C3B] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs transition-all disabled:opacity-70"
          >
            <Send className="w-3.5 h-3.5 text-[#DFB36C]" />
            <span>{isSendingSummary ? 'Compiling Report...' : 'Send Summary Email Now'}</span>
          </button>
        </div>

        {summaryStatus && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{summaryStatus}</span>
          </div>
        )}

        {/* ADMIN CONFIGURABLE TIMING & RECIPIENT */}
        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 text-xs space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-[#16382B] mb-1">
                Admin Recipient Email
              </label>
              <input
                type="email"
                value={adminRecipientEmail}
                onChange={(e) => {
                  setAdminRecipientEmail(e.target.value);
                  setIsSaved(false);
                }}
                placeholder="admin@example.com"
                className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-white text-[#16382B] font-mono text-xs focus:border-[#C29043] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#16382B] mb-1">
                Scheduled Daily Dispatch Time
              </label>
              <select
                value={summaryDeliveryTime}
                onChange={(e) => {
                  setSummaryDeliveryTime(e.target.value);
                  setIsSaved(false);
                }}
                className="w-full px-3 py-2 rounded-xl border border-[#16382B]/15 bg-white text-[#16382B] font-semibold text-xs focus:border-[#C29043] focus:outline-none cursor-pointer"
              >
                <option value="18:00">6:00 PM IST (Evening Close)</option>
                <option value="19:00">7:00 PM IST (Post-Shift)</option>
                <option value="20:00">8:00 PM IST (Standard Nightly Close)</option>
                <option value="21:00">9:00 PM IST (Late Night)</option>
                <option value="22:00">10:00 PM IST (End of Day)</option>
                <option value="08:00">8:00 AM IST (Morning Digest)</option>
                <option value="09:00">9:00 AM IST (Opening Digest)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-[#16382B]/10">
            <div className="text-[11px] text-[#5C7368] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>
                Automated daily dispatch active • Delivery set for <strong>{summaryDeliveryTimeLabel}</strong> to <strong>{adminRecipientEmail}</strong>
              </span>
            </div>

            <button
              type="button"
              onClick={handleSaveSchedule}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-[#16382B]/15 text-[#16382B] font-semibold text-xs hover:bg-[#FAF8F5] transition-all cursor-pointer flex items-center gap-1 shadow-2xs"
            >
              {isSaved ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-800">Saved</span>
                </>
              ) : (
                <span>Save Timing &amp; Email</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2-COLUMN BREAKDOWN: FORMULATION SALES & PAYMENT METHODS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Formulation Breakdown */}
        <div className="bg-white p-5 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-3">
          <h3 className="font-serif-brand font-bold text-base text-[#16382B] flex items-center gap-2 border-b border-[#16382B]/10 pb-3">
            <Layers className="w-4 h-4 text-[#C29043]" />
            <span>Revenue by Formulation Type</span>
          </h3>

          <div className="space-y-2.5">
            {Object.entries(data?.formulationSales || {}).map(([form, stat]) => (
              <div key={form} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#16382B] block">{form}</span>
                  <span className="text-[10.5px] text-[#8A9B93]">{stat.count} units sold</span>
                </div>
                <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                  ₹{stat.revenue.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-5 rounded-3xl border border-[#16382B]/10 shadow-xs space-y-3">
          <h3 className="font-serif-brand font-bold text-base text-[#16382B] flex items-center gap-2 border-b border-[#16382B]/10 pb-3">
            <CreditCard className="w-4 h-4 text-[#C29043]" />
            <span>Payment Method Distribution</span>
          </h3>

          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/5 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[#16382B] block">UPI / QR Code</span>
                <span className="text-[10.5px] text-[#8A9B93]">
                  {data?.paymentMethods.upi?.count || 0} transactions
                </span>
              </div>
              <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                ₹{(data?.paymentMethods.upi?.total || 0).toLocaleString('en-IN')}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/5 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[#16382B] block">Debit / Credit Cards &amp; NetBanking</span>
                <span className="text-[10.5px] text-[#8A9B93]">
                  {data?.paymentMethods.cards?.count || 0} transactions
                </span>
              </div>
              <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                ₹{(data?.paymentMethods.cards?.total || 0).toLocaleString('en-IN')}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#16382B]/5 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[#16382B] block">Cash on Delivery (COD)</span>
                <span className="text-[10.5px] text-[#8A9B93]">
                  {data?.paymentMethods.cod?.count || 0} transactions
                </span>
              </div>
              <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                ₹{(data?.paymentMethods.cod?.total || 0).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TOP SELLING PRODUCTS TABLE */}
      <div className="bg-white rounded-3xl border border-[#16382B]/10 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5]/50">
          <span className="font-serif-brand font-bold text-sm text-[#16382B]">
            Top Formulations by Sales Volume
          </span>
          <span className="text-[11px] text-[#8A9B93]">
            Ranked by total revenue
          </span>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden p-3.5 space-y-2.5">
          {data?.topProducts.map((p, idx) => (
            <div
              key={p.id}
              className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-6 h-6 rounded-full bg-[#16382B] text-[#DFB36C] font-bold text-[11px] flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <span className="font-bold text-[#16382B] block truncate">{p.name}</span>
                  <div className="flex items-center gap-2 text-[10.5px] text-[#8A9B93] mt-0.5">
                    <span className="font-medium text-[#16382B]/70">{p.formulation}</span>
                    <span>•</span>
                    <span className="font-mono">{p.quantity} units</span>
                  </div>
                </div>
              </div>
              <span className="font-serif-brand font-bold text-sm text-[#16382B] flex-shrink-0">
                ₹{p.revenue.toLocaleString('en-IN')}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#16382B]/10 bg-[#FAF8F5] text-[#8A9B93] uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4 font-bold text-[#16382B]">Rank</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Formulation Name</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Category</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Units Sold</th>
                <th className="py-3 px-4 font-bold text-[#16382B] text-right">Total Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16382B]/5">
              {data?.topProducts.map((p, idx) => (
                <tr key={p.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                  <td className="py-3 px-4 font-bold text-[#C29043]">
                    #{idx + 1}
                  </td>
                  <td className="py-3 px-4 font-bold text-[#16382B]">
                    {p.name}
                  </td>
                  <td className="py-3 px-4 text-[#8A9B93]">
                    {p.formulation}
                  </td>
                  <td className="py-3 px-4 font-mono text-[#16382B]">
                    {p.quantity} units
                  </td>
                  <td className="py-3 px-4 font-serif-brand font-bold text-sm text-[#16382B] text-right">
                    ₹{p.revenue.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
