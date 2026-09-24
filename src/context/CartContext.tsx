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

/**
 * Calculates volume discount percentage on total ordered quantity:
 * - 1 to 4: 0%
 * - 5 to 29: 10% OFF
 * - 30+: 20% OFF (10% base + 10% extra)
 */
export const calculateDiscountPercent = (paidCount: number): number => {
  if (paidCount >= 30) return 20;
  if (paidCount >= 5) return 10;
  return 0;
};

/**
 * Calculates free formulation bonus slots earned:
 * - 1 to 4: 0
 * - 5 to 49: 1 free for every 5 items (floor(Q / 5))
 * - 50+: 15 free at 50, +1 per 5 items (15 at 50-54, 16 at 55-59, 18 at 60-64, etc.)
 */
export const calculateFreeGiftsEarned = (paidCount: number): number => {
  if (paidCount < 5) return 0;
  if (paidCount < 50) {
    return Math.floor(paidCount / 5);
  }
  const baseTens = Math.floor(paidCount / 10) * 3; // 50->15, 60->18, 70->21, 80->24...
  const remainderFive = (paidCount % 10) >= 5 ? 1 : 0; // +1 for 55-59, 65-69...
  return baseTens + remainderFive;
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
  discountPercent: number;
  discountAmount: number;
  discountedSubtotal: number;
  mrpSubtotal: number;
  mrpSavings: number;
  
  // Free Gift System (Selected strictly from purchased cart items)
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

const STANDARD_SHIPPING_FEE = 0;

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

  // Volume Discounts
  const discountPercent = calculateDiscountPercent(paidItemCount);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const discountedSubtotal = subtotal - discountAmount;

  // Free Gift Calculations
  const freeSlotsEarned = calculateFreeGiftsEarned(paidItemCount);
  const totalFreeGiftsSelected = freeGiftItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeSlotsRemaining = Math.max(0, freeSlotsEarned - totalFreeGiftsSelected);
  
  // Milestone & Progression Logic
  let nextMilestoneCount = 5;
  let currentTierBase = 0;
  let stepSize = 5;

  if (paidItemCount < 5) {
    nextMilestoneCount = 5;
    currentTierBase = 0;
    stepSize = 5;
  } else if (paidItemCount < 50) {
    currentTierBase = Math.floor(paidItemCount / 5) * 5;
    nextMilestoneCount = currentTierBase + 5;
    stepSize = 5;
  } else {
    if ((paidItemCount % 10) < 5) {
      currentTierBase = Math.floor(paidItemCount / 10) * 10;
      nextMilestoneCount = currentTierBase + 5;
      stepSize = 5;
    } else {
      currentTierBase = Math.floor(paidItemCount / 10) * 10 + 5;
      nextMilestoneCount = currentTierBase + 5;
      stepSize = 5;
    }
  }

  const itemsNeededForNextMilestone = Math.max(1, nextMilestoneCount - paidItemCount);
  const progressPercent = Math.min(
    100,
    Math.round(((paidItemCount - currentTierBase) / stepSize) * 100)
  );

  // Automatically validate and trim free gifts:
  // 1. Remove free gifts for products no longer in the cart
  // 2. Trim excess free gift units if paidItemCount was reduced
  useEffect(() => {
    if (!isLoaded) return;
    const cartProductIds = new Set(items.map(i => i.product.id));
    
    // Filter out free gifts for products not in the cart
    let validGifts = freeGiftItems.filter(g => cartProductIds.has(g.product.id));
    
    const currentSelected = validGifts.reduce((sum, g) => sum + g.quantity, 0);
    if (currentSelected > freeSlotsEarned) {
      if (freeSlotsEarned === 0) {
        validGifts = [];
      } else {
        let allowed = freeSlotsEarned;
        const trimmed: FreeGiftItem[] = [];
        for (const gift of validGifts) {
          if (allowed <= 0) break;
          const take = Math.min(gift.quantity, allowed);
          trimmed.push({ product: gift.product, quantity: take });
          allowed -= take;
        }
        validGifts = trimmed;
      }
    }

    if (JSON.stringify(validGifts) !== JSON.stringify(freeGiftItems)) {
      setFreeGiftItems(validGifts);
    }
  }, [items, freeSlotsEarned, freeGiftItems, isLoaded]);

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

  // Add Free Gift item (Restricted to products currently in the customer's cart)
  const addFreeGift = (product: Product): { success: boolean; message: string } => {
    const isProductInCart = items.some(i => i.product.id === product.id);
    if (!isProductInCart) {
      return {
        success: false,
        message: 'Free formulation bonus can only be chosen from products currently in your cart.'
      };
    }

    if (freeSlotsRemaining <= 0) {
      return {
        success: false,
        message: 'All free gift slots are already claimed. Add more products to unlock additional free bonus medicines.'
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

    showToast(`Added free bonus unit of ${product.name}!`);
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

  // Total payable amount (Discounted subtotal + shipping)
  const total = Math.max(0, discountedSubtotal + shippingFee);

  // Total savings customer receives on this order (Catalog MRP savings + Volume discount + Free Gift Value)
  const totalSavings = mrpSavings + discountAmount + freeGiftSavings;

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
        discountPercent,
        discountAmount,
        discountedSubtotal,
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
        openGiftModal: () => {
          setIsDrawerOpen(false);
          setIsGiftModalOpen(true);
        },
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
