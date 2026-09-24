'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FreeGiftItem {
  product: Product;
  quantity: number;
}

export const getProductMRP = (product: Product): number => {
  if (product.originalPrice && product.originalPrice > product.price) {
    return product.originalPrice;
  }
  // Standard calibrated MRP (12% to 18% above selling price rounded to nearest 5)
  return Math.max(product.price + 20, Math.round((product.price * 1.15) / 5) * 5);
};

export interface CartToastData {
  product: Product;
  quantity: number;
  id: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  paidItemCount: number;
  totalItemCount: number;
  subtotal: number;
  mrpSubtotal: number;
  mrpSavings: number;
  
  // 5+1 / 10+2 Free Gift System
  freeGiftItems: FreeGiftItem[];
  addFreeGift: (product: Product) => { success: boolean; message: string };
  removeFreeGift: (productId: string) => void;
  freeSlotsEarned: number;
  totalFreeGiftsSelected: number;
  freeSlotsRemaining: number;
  nextMilestoneCount: number;
  itemsNeededForNextMilestone: number;
  progressPercent: number;
  freeGiftSavings: number;
  isGiftModalOpen: boolean;
  openGiftModal: () => void;
  closeGiftModal: () => void;

  totalSavings: number;
  shippingFee: number;
  total: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toastNotification: CartToastData | null;
  dismissToast: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 500;
const STANDARD_SHIPPING_FEE = 40;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [freeGiftItems, setFreeGiftItems] = useState<FreeGiftItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [toastNotification, setToastNotification] = useState<CartToastData | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart and free gifts from localStorage strictly after hydration
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('ruthra_cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedGifts = localStorage.getItem('ruthra_free_gifts');
      if (savedGifts) {
        setFreeGiftItems(JSON.parse(savedGifts));
      }
    } catch {
      // ignore
    }
    setIsLoaded(true);
  }, []);

  // Sync to localStorage only after initial load from localStorage completes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('ruthra_cart', JSON.stringify(items));
      localStorage.setItem('ruthra_free_gifts', JSON.stringify(freeGiftItems));
    } catch {
      // ignore
    }
  }, [items, freeGiftItems, isLoaded]);

  // Calculations for Paid Items
  const paidItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // 5+1 / 10+2 Free Gift Calculations
  const freeSlotsEarned = Math.floor(paidItemCount / 5);
  const totalFreeGiftsSelected = freeGiftItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeSlotsRemaining = Math.max(0, freeSlotsEarned - totalFreeGiftsSelected);
  
  const nextMilestoneCount = (Math.floor(paidItemCount / 5) + 1) * 5;
  const itemsNeededForNextMilestone = nextMilestoneCount - paidItemCount;
  const currentTierBase = Math.floor(paidItemCount / 5) * 5;
  const progressPercent = Math.min(100, Math.round(((paidItemCount - currentTierBase) / 5) * 100));

  // Automatically trim free gifts if paidItemCount was reduced
  useEffect(() => {
    if (!isLoaded) return;
    if (totalFreeGiftsSelected > freeSlotsEarned) {
      if (freeSlotsEarned === 0) {
        setFreeGiftItems([]);
      } else {
        // Trim excess free gift units
        let allowed = freeSlotsEarned;
        const trimmed: FreeGiftItem[] = [];
        for (const gift of freeGiftItems) {
          if (allowed <= 0) break;
          const take = Math.min(gift.quantity, allowed);
          trimmed.push({ product: gift.product, quantity: take });
          allowed -= take;
        }
        setFreeGiftItems(trimmed);
      }
    }
  }, [paidItemCount, freeSlotsEarned, totalFreeGiftsSelected, isLoaded]);

  const dismissToast = () => {
    setToastNotification(null);
    setToastMessage(null);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addItem = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    // Trigger instant top-right toast notification
    setToastNotification({
      product,
      quantity,
      id: Date.now()
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setFreeGiftItems([]);
  };

  // Add Free Gift item
  const addFreeGift = (product: Product): { success: boolean; message: string } => {
    if (freeSlotsRemaining <= 0) {
      return {
        success: false,
        message: 'All free gift slots are already claimed. Add more products to unlock additional free formulations.'
      };
    }

    setFreeGiftItems(prev => {
      const existing = prev.find(g => g.product.id === product.id);
      if (existing) {
        return prev.map(g =>
          g.product.id === product.id ? { ...g, quantity: g.quantity + 1 } : g
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    showToast(`Added ${product.name} as your free formulation bonus!`);
    return {
      success: true,
      message: `${product.name} added as free bonus.`
    };
  };

  const removeFreeGift = (productId: string) => {
    setFreeGiftItems(prev => {
      const existing = prev.find(g => g.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity > 1) {
        return prev.map(g =>
          g.product.id === productId ? { ...g, quantity: g.quantity - 1 } : g
        );
      }
      return prev.filter(g => g.product.id !== productId);
    });
  };

  // Total Item Counts
  const totalItemCount = paidItemCount + totalFreeGiftsSelected;

  // MRP Subtotal & Direct MRP Savings
  const mrpSubtotal = items.reduce((sum, item) => {
    const mrp = getProductMRP(item.product);
    return sum + mrp * item.quantity;
  }, 0);
  const mrpSavings = Math.max(0, mrpSubtotal - subtotal);

  // Free Gift Financial Value Savings
  const freeGiftSavings = freeGiftItems.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  // Shipping Calculation (Standard Tamil Nadu Express Courier)
  const shippingFee = subtotal === 0 ? 0 : STANDARD_SHIPPING_FEE;

  // Total payable amount (Paid subtotal + standard shipping)
  const total = Math.max(0, subtotal + shippingFee);

  // Total savings customer receives on this order (Catalog MRP savings + 100% Free Gift Value)
  const totalSavings = mrpSavings + freeGiftSavings;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount: totalItemCount,
        paidItemCount,
        totalItemCount,
        subtotal,
        mrpSubtotal,
        mrpSavings,

        // Free gift system
        freeGiftItems,
        addFreeGift,
        removeFreeGift,
        freeSlotsEarned,
        totalFreeGiftsSelected,
        freeSlotsRemaining,
        nextMilestoneCount,
        itemsNeededForNextMilestone,
        progressPercent,
        freeGiftSavings,
        isGiftModalOpen,
        openGiftModal: () => setIsGiftModalOpen(true),
        closeGiftModal: () => setIsGiftModalOpen(false),

        totalSavings,
        shippingFee,
        total,
        freeShippingThreshold: 0,
        amountNeededForFreeShipping: 0,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        toastNotification,
        dismissToast,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
