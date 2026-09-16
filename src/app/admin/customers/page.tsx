'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Users, 
  Search, 
  RefreshCw, 
  ShoppingBag, 
  IndianRupee, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Eye,
  FileText
} from 'lucide-react';
import { Customer, Order } from '@/types/admin';
import { generateOrderInvoicePdf } from '@/lib/invoiceGenerator';

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomerData, setSelectedCustomerData] = useState<{ customer: Customer; orders: Order[] } | null>(null);
  const [isFetchingDetail, setIsFetchingDetail] = useState(false);

  const fetchCustomers = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append('search', searchQuery.trim());

      const res = await fetch(`/api/admin/customers?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setCustomers(data.customers || []);
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  // Lock body scroll and handle Escape key to close modal
  useEffect(() => {
    if (!selectedCustomerData) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCustomerData(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCustomerData]);

  const handleViewCustomer = async (customerId: string) => {
    setIsFetchingDetail(true);
    try {
      const res = await fetch(`/api/admin/customers/${customerId}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedCustomerData(data);
      }
    } catch {
      // ignore
    } finally {
      setIsFetchingDetail(false);
    }
  };

  const handleDownloadInvoice = (order: Order) => {
    const doc = generateOrderInvoicePdf(order);
    doc.save(`Invoice_${order.orderNumber}.pdf`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#16382B]/10 pb-4">
        <div>
          <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#16382B]">
            Customer Directory &amp; CRM
          </h1>
          <p className="text-xs sm:text-sm text-[#3D5A68] mt-0.5">
            Profiles, lifetime spending, order history, and contact details across Tamil Nadu.
          </p>
        </div>

        <button
          type="button"
          onClick={() => fetchCustomers()}
          disabled={isLoading}
          className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#16382B]/15 text-[#16382B] text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#C29043] ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="bg-white p-4 rounded-2xl border border-[#16382B]/10 shadow-xs flex items-center gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8A9B93]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search customers by name, phone number, email, or city..."
            className="block w-full pl-9 pr-3 py-2.5 border border-[#16382B]/15 rounded-xl bg-[#FAF8F5] text-xs text-[#16382B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C29043] focus:border-transparent font-medium"
          />
        </div>
      </div>

      {/* CUSTOMER DIRECTORY CONTAINER */}
      <div className="bg-white rounded-3xl border border-[#16382B]/10 shadow-xs overflow-hidden">
        <div className="p-3.5 sm:p-4 border-b border-[#16382B]/10 flex items-center justify-between bg-[#FAF8F5]/50">
          <span className="text-xs font-bold text-[#16382B]">
            {customers.length} Registered Customer {customers.length === 1 ? 'Profile' : 'Profiles'}
          </span>
          <span className="text-[11px] text-[#8A9B93] hidden sm:inline">
            Ranked by lifetime purchase volume
          </span>
        </div>

        {/* MOBILE CARD GRID (md:hidden) */}
        <div className="md:hidden p-3.5 space-y-3">
          {isLoading ? (
            <div className="py-12 text-center text-xs text-[#8A9B93]">Loading customer profiles...</div>
          ) : customers.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#8A9B93]">No customers found matching your search.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {customers.map((cust) => {
                const joinedDate = new Date(cust.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                });

                return (
                  <div
                    key={cust.id}
                    className="bg-white rounded-2xl p-3.5 border border-[#16382B]/10 shadow-xs space-y-2.5 hover:border-[#C29043]/40 transition-all flex flex-col justify-between"
                  >
                    {/* Top Row: Name + History Action Button */}
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="font-bold text-[#16382B] text-xs block truncate">
                          {cust.fullName}
                        </span>
                        <span className="text-[10px] text-[#8A9B93] block font-mono">
                          {cust.id}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleViewCustomer(cust.id)}
                        disabled={isFetchingDetail}
                        className="p-1.5 rounded-lg bg-[#16382B] hover:bg-[#204C3B] text-[#DFB36C] transition-colors cursor-pointer shadow-2xs flex-shrink-0"
                        title="View Order History"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Middle: Contact & Location */}
                    <div className="space-y-1 text-xs pt-1 border-t border-[#16382B]/5">
                      <div className="text-[11px] text-[#16382B] font-medium flex items-center justify-between">
                        <span>{cust.phone}</span>
                        <span className="text-[#8A9B93] text-[10px]">{joinedDate}</span>
                      </div>
                      {cust.email && (
                        <p className="text-[11px] text-[#3D5A68] truncate" title={cust.email}>
                          {cust.email}
                        </p>
                      )}
                      <p className="text-[10.5px] text-[#8A9B93]">
                        {cust.city}, {cust.state} - {cust.pincode}
                      </p>
                    </div>

                    {/* Bottom Row: Total Orders + Lifetime Spend */}
                    <div className="pt-2 border-t border-[#16382B]/5 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-bold text-[10px]">
                        • {cust.totalOrders} {cust.totalOrders === 1 ? 'Order' : 'Orders'}
                      </span>
                      <div className="text-right">
                        <span className="text-[9.5px] text-[#8A9B93] block">Lifetime Spend</span>
                        <span className="font-serif-brand font-bold text-sm text-[#16382B]">
                          ₹{cust.totalSpend.toLocaleString('en-IN')}
                        </span>
                      </div>
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
                <th className="py-3 px-4 font-bold text-[#16382B]">Customer Name</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Contact</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Location</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Total Orders</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">Lifetime Spend</th>
                <th className="py-3 px-4 font-bold text-[#16382B]">First Joined</th>
                <th className="py-3 px-4 font-bold text-[#16382B] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16382B]/5">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-xs text-[#8A9B93]">
                    Loading customer profiles...
                  </td>
                </tr>
              ) : customers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-xs text-[#8A9B93]">
                    No customers found matching your search.
                  </td>
                </tr>
              ) : (
                customers.map((cust) => {
                  const joinedDate = new Date(cust.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  });

                  return (
                    <tr key={cust.id} className="hover:bg-[#FAF8F5]/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-[#16382B] block text-sm">{cust.fullName}</span>
                        <span className="text-[10px] text-[#8A9B93] font-mono">{cust.id}</span>
                      </td>
                      <td className="py-3.5 px-4 text-[#3D5A68]">
                        <span className="font-medium text-[#16382B] block">{cust.phone}</span>
                        {cust.email && <span className="text-[10.5px] text-[#8A9B93] block">{cust.email}</span>}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-[#16382B] block">{cust.city}</span>
                        <span className="text-[10px] text-[#8A9B93] block">{cust.state} - {cust.pincode}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E8F1EB] text-[#16382B] font-bold text-[11px]">
                          {cust.totalOrders} {cust.totalOrders === 1 ? 'Order' : 'Orders'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-serif-brand font-bold text-sm text-[#16382B]">
                        ₹{cust.totalSpend.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 px-4 text-[#8A9B93] whitespace-nowrap">
                        {joinedDate}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleViewCustomer(cust.id)}
                          className="px-3 py-1 rounded-lg bg-[#16382B] hover:bg-[#204C3B] text-white text-[11px] font-semibold flex items-center gap-1 ml-auto cursor-pointer shadow-2xs"
                        >
                          <Eye className="w-3 h-3 text-[#DFB36C]" />
                          <span>History</span>
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

      {/* CUSTOMER HISTORY & PROFILE MODAL */}
      {selectedCustomerData && (
        <div 
          onClick={() => setSelectedCustomerData(null)}
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
                  Customer Order History
                </span>
                <h3 className="font-serif-brand font-bold text-xl text-[#16382B]">
                  {selectedCustomerData.customer.fullName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCustomerData(null)}
                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#E8F1EB] text-[#8A9B93] hover:text-[#16382B] flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Modal Body (Properly Fit) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 overscroll-contain">
              {/* Profile Overview Card */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#16382B]/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-[#8A9B93] block text-[10.5px]">Phone Number</span>
                  <span className="font-bold text-[#16382B]">{selectedCustomerData.customer.phone}</span>
                </div>
                <div>
                  <span className="text-[#8A9B93] block text-[10.5px]">Email Address</span>
                  <span className="font-bold text-[#16382B] truncate block">
                    {selectedCustomerData.customer.email || '—'}
                  </span>
                </div>
                <div>
                  <span className="text-[#8A9B93] block text-[10.5px]">Primary District</span>
                  <span className="font-bold text-[#16382B]">{selectedCustomerData.customer.city}</span>
                </div>
                <div>
                  <span className="text-[#8A9B93] block text-[10.5px]">Total Orders Placed</span>
                  <span className="font-bold text-[#16382B]">{selectedCustomerData.orders.length} Orders</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#8A9B93] block text-[10.5px]">Lifetime Store Revenue</span>
                  <span className="font-serif-brand font-bold text-base text-[#16382B]">
                    ₹{selectedCustomerData.customer.totalSpend.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="p-3.5 bg-[#FAF8F5]/60 rounded-2xl border border-[#16382B]/10 text-xs">
                <span className="font-bold text-[#16382B] block text-[10.5px] uppercase text-[#C29043]">
                  Saved Delivery Address:
                </span>
                <p className="text-[#3D5A68] mt-0.5">
                  {selectedCustomerData.customer.address}, {selectedCustomerData.customer.city}, {selectedCustomerData.customer.state} - {selectedCustomerData.customer.pincode}
                </p>
              </div>

              {/* Order History Timeline */}
              <div className="space-y-2 border-t border-b border-[#16382B]/10 py-3">
                <h4 className="font-serif-brand font-bold text-sm text-[#16382B]">
                  Order Records ({selectedCustomerData.orders.length})
                </h4>

                {selectedCustomerData.orders.length === 0 ? (
                  <p className="text-xs text-[#8A9B93] py-4 text-center">No orders recorded for this customer.</p>
                ) : (
                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {selectedCustomerData.orders.map((ord) => (
                      <div
                        key={ord.id}
                        className="p-3 bg-[#FAF8F5] rounded-xl border border-[#16382B]/10 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#16382B]">{ord.orderNumber}</span>
                            <span className="text-[10px] text-[#8A9B93]">
                              {new Date(ord.createdAt).toLocaleDateString('en-IN')}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#3D5A68] mt-0.5">
                            {ord.items.map(i => `${i.productName} (x${i.quantity})`).join(', ')}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="font-serif-brand font-bold text-[#16382B]">₹{ord.finalTotal}</span>
                          <button
                            type="button"
                            onClick={() => handleDownloadInvoice(ord)}
                            className="p-1.5 rounded-lg bg-white hover:bg-[#E8F1EB] text-[#C29043] hover:text-[#16382B] border border-[#16382B]/10 cursor-pointer"
                            title="Download Invoice"
                          >
                            <FileText className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Fixed Action Footer */}
            <div className="p-4 sm:px-6 border-t border-[#16382B]/10 bg-[#FAF8F5]/90 text-right flex-shrink-0">
              <button
                type="button"
                onClick={() => setSelectedCustomerData(null)}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF3EB] text-[#16382B] text-xs font-semibold border border-[#16382B]/10 cursor-pointer transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
