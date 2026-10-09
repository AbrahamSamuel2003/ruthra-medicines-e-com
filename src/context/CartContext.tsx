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
 * Calculates volume discount percentage on a SINGLE product's quantity:
 * - 1 to 4: 0%
 * - 5 to 29: 10% OFF
 * - 30+: 20% OFF
 */
export const calculateItemDiscountPercent = (quantity: number): number => {
  if (quantity >= 30) return 20;
  if (quantity >= 5) return 10;
  return 0;
};

/**
 * Calculates free formulation bonus slots earned on a SINGLE product's quantity:
 * - 1 to 4: 0
 * - 5 to 49: 1 free for every 5 units (floor(Q / 5))
 *   5-9: 1, 10-14: 2, 15-19: 3, 20-24: 4, 25-29: 5, 30-34: 6, 35-39: 7, 40-44: 8, 45-49: 9
 * - 50+: Exact client approved matrix
 *   50-54: 15 (Mega Bulk Jump), 55-59: 16, 60-64: 18, 65-69: 19, 70-74: 21,
 *   75-79: 22, 80-84: 24, 85-89: 25, 90-94: 27, 95-99: 28, 100+: 30 (+1 per 5)
 */
export const calculateItemFreeGifts = (quantity: number): number => {
  if (quantity < 5) return 0;
  if (quantity < 50) {
    return Math.floor(quantity / 5);
  }
  if (quantity < 55) return 15; // 50-54
  if (quantity < 60) return 16; // 55-59
  if (quantity < 65) return 18; // 60-64
  if (quantity < 70) return 19; // 65-69
  if (quantity < 75) return 21; // 70-74
  if (quantity < 80) return 22; // 75-79
  if (quantity < 85) return 24; // 80-84
  if (quantity < 90) return 25; // 85-89
  if (quantity < 95) return 27; // 90-94
  if (quantity < 100) return 28; // 95-99
  return 30 + Math.floor((quantity - 100) / 5);
};

/**
 * Returns the next milestone info for a single product quantity
 */
export const getItemNextMilestone = (quantity: number) => {
  if (quantity < 5) {
    return {
      nextCount: 5,
      needed: 5 - quantity,
      rewardText: '10% OFF + 1 FREE Bonus Medicine',
      rewardTextTa: '10% தள்ளுபடி + 1 இலவச மருந்து',
      progressPercent: Math.round((quantity / 5) * 100)
    };
  }
  if (quantity < 30) {
    const nextTier = Math.floor(quantity / 5) * 5 + 5;
    return {
      nextCount: nextTier,
      needed: nextTier - quantity,
      rewardText: nextTier === 30 ? '20% Bulk Discount + 6 FREE Gifts' : `+1 More FREE Gift (${calculateItemFreeGifts(nextTier)} Total)`,
      rewardTextTa: nextTier === 30 ? '20% மொத்த தள்ளுபடி + 6 இலவசம்' : `+1 இலவச மருந்து (மொத்தம் ${calculateItemFreeGifts(nextTier)})`,
      progressPercent: Math.round(((quantity % 5) / 5) * 100)
    };
  }
  if (quantity < 50) {
    const nextTier = Math.floor(quantity / 5) * 5 + 5;
    return {
      nextCount: nextTier,
      needed: nextTier - quantity,
      rewardText: nextTier === 50 ? 'Mega Bulk Jump: 15 FREE Medicines!' : `+1 More FREE Gift (${calculateItemFreeGifts(nextTier)} Total)`,
      rewardTextTa: nextTier === 50 ? 'மெகா ஜம்ப்: 15 இலவச மருந்துகள்!' : `+1 இலவச மருந்து (மொத்தம் ${calculateItemFreeGifts(nextTier)})`,
      progressPercent: Math.round(((quantity % 5) / 5) * 100)
    };
  }
  const nextTier = Math.floor(quantity / 5) * 5 + 5;
  return {
    nextCount: nextTier,
    needed: nextTier - quantity,
    rewardText: `Next Bonus: ${calculateItemFreeGifts(nextTier)} FREE Medicines`,
    rewardTextTa: `அடுத்த இலக்கு: ${calculateItemFreeGifts(nextTier)} இலவச மருந்துகள்`,
    progressPercent: Math.round(((quantity % 5) / 5) * 100)
  };
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
  
  // Free Gift System (Selected strictly from purchased cart items with qty >= 5)
  freeGiftItems: FreeGiftItem[];
  addFreeGift: (product: Product) => { success: boolean; message: string };
  removeFreeGift: (productId: string) => void;
  freeSlotsEarned: number;
  totalFreeGiftsSelected: number;
  freeSlotsRemaining: number;
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

  // Calculations for Paid Items (Item-level volume discounts)
  const paidItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Sum of item-level volume discounts (applied per individual product count)
  const discountAmount = items.reduce((sum, item) => {
    const itemPercent = calculateItemDiscountPercent(item.quantity);
    const itemTotal = item.product.price * item.quantity;
    return sum + Math.round((itemTotal * itemPercent) / 100);
  }, 0);

  const discountedSubtotal = subtotal - discountAmount;
  const discountPercent = subtotal > 0 ? Math.round((discountAmount / subtotal) * 100) : 0;

  // Free Gift Calculations (Strictly earned per individual product count >= 5)
  const freeSlotsEarned = items.reduce((sum, item) => {
    return sum + calculateItemFreeGifts(item.quantity);
  }, 0);

  const totalFreeGiftsSelected = freeGiftItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeSlotsRemaining = Math.max(0, freeSlotsEarned - totalFreeGiftsSelected);

  // Automatically validate and trim free gifts:
  // Each free gift must strictly belong to a product with quantity >= 5 in the cart,
  // and cannot exceed calculateItemFreeGifts(item.quantity) for that specific product
  useEffect(() => {
    if (!isLoaded) return;
    const cartProductMap = new Map(items.map(i => [i.product.id, i.quantity]));
    
    let validGifts: FreeGiftItem[] = [];
    for (const gift of freeGiftItems) {
      const cartQty = cartProductMap.get(gift.product.id);
      if (cartQty && cartQty >= 5) {
        const maxAllowed = calculateItemFreeGifts(cartQty);
        const take = Math.min(gift.quantity, maxAllowed);
        if (take > 0) {
          validGifts.push({ product: gift.product, quantity: take });
        }
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

    setToastNotification({
      product,
      quantity,
      id: Date.now()
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
    setFreeGiftItems(prev => prev.filter(item => item.product.id !== productId));
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

  // Add Free Gift (Strictly allowed only for products in cart with quantity >= 5, up to earned quota)
  const addFreeGift = (product: Product): { success: boolean; message: string } => {
    const cartItem = items.find(item => item.product.id === product.id);
    if (!cartItem) {
      return { success: false, message: 'Free bonus units can only be chosen from formulations currently in your cart.' };
    }

    if (cartItem.quantity < 5) {
      return { success: false, message: 'This formulation requires a purchase of 5 or more units to earn free bonus units.' };
    }

    const itemMaxFree = calculateItemFreeGifts(cartItem.quantity);
    const currentSelectedForThisProduct = freeGiftItems.find(g => g.product.id === product.id)?.quantity || 0;

    if (currentSelectedForThisProduct >= itemMaxFree) {
      return { success: false, message: `You have claimed all ${itemMaxFree} free bonus units earned for ${product.name}.` };
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

    return { success: true, message: `Added 1 Free ${product.name} to your order!` };
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

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openGiftModal = () => setIsGiftModalOpen(true);
  const closeGiftModal = () => setIsGiftModalOpen(false);

  const mrpSubtotal = items.reduce(
    (sum, item) => sum + getProductMRP(item.product) * item.quantity,
    0
  );
  const mrpSavings = Math.max(0, mrpSubtotal - subtotal);

  const freeGiftSavings = freeGiftItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalSavings = mrpSavings + discountAmount + freeGiftSavings;
  const shippingFee = STANDARD_SHIPPING_FEE;
  const total = discountedSubtotal + shippingFee;

  const totalItemCount = paidItemCount + totalFreeGiftsSelected;
  const itemCount = totalItemCount;

  const freeShippingThreshold = 0;
  const amountNeededForFreeShipping = 0;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        paidItemCount,
        totalItemCount,
        subtotal,
        discountPercent,
        discountAmount,
        discountedSubtotal,
        mrpSubtotal,
        mrpSavings,
        freeGiftItems,
        addFreeGift,
        removeFreeGift,
        freeSlotsEarned,
        totalFreeGiftsSelected,
        freeSlotsRemaining,
        freeGiftSavings,
        isGiftModalOpen,
        openGiftModal,
        closeGiftModal,
        totalSavings,
        shippingFee,
        total,
        freeShippingThreshold,
        amountNeededForFreeShipping,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        isSearchOpen,
        openSearch,
        closeSearch,
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
