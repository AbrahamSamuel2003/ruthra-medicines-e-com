'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export const getProductMRP = (product: Product): number => {
  if (product.originalPrice && product.originalPrice > product.price) {
    return product.originalPrice;
  }
  // Standard calibrated MRP (12% to 18% above selling price rounded to nearest ₹5)
  return Math.max(product.price + 20, Math.round((product.price * 1.15) / 5) * 5);
};

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  mrpSubtotal: number;
  mrpSavings: number;
  multiPackSavings: number;
  couponCode: string | null;
  couponDiscount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
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
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 500;
const STANDARD_SHIPPING_FEE = 40;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart and coupon from localStorage strictly after hydration
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('ruthra_cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedCoupon = localStorage.getItem('ruthra_coupon');
      if (savedCoupon) {
        setCouponCode(savedCoupon);
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
    } catch {
      // ignore
    }
  }, [items, isLoaded]);

  // Sync coupon to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      if (couponCode) {
        localStorage.setItem('ruthra_coupon', couponCode);
      } else {
        localStorage.removeItem('ruthra_coupon');
      }
    } catch {
      // ignore
    }
  }, [couponCode, isLoaded]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
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
    showToast(`Added ${product.name} to cart`);
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
    setCouponCode(null);
  };

  // Calculations
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  // MRP Subtotal & Direct MRP Savings
  const mrpSubtotal = items.reduce((sum, item) => {
    const mrp = getProductMRP(item.product);
    return sum + mrp * item.quantity;
  }, 0);
  const mrpSavings = Math.max(0, mrpSubtotal - subtotal);

  // 5% Extra Multi-Pack Volume Savings for items with quantity >= 2
  const multiPackSavings = items.reduce((sum, item) => {
    if (item.quantity >= 2) {
      return sum + Math.round(item.product.price * item.quantity * 0.05);
    }
    return sum;
  }, 0);

  // Coupon handling
  let couponDiscount = 0;
  if (couponCode === 'RUTHRA10') {
    couponDiscount = Math.round(subtotal * 0.1);
  } else if (couponCode === 'SIDDHA25') {
    couponDiscount = Math.min(subtotal, 25);
  } else if (couponCode === 'TNEXPRESS') {
    // Free shipping code
    couponDiscount = 0;
  }

  const applyCoupon = (code: string): { success: boolean; message: string } => {
    const formatted = code.trim().toUpperCase();
    if (formatted === 'RUTHRA10') {
      setCouponCode('RUTHRA10');
      showToast('Coupon RUTHRA10 applied (10% OFF)!');
      return { success: true, message: '10% Inaugural Siddha Discount applied!' };
    }
    if (formatted === 'SIDDHA25') {
      setCouponCode('SIDDHA25');
      showToast('Coupon SIDDHA25 applied (₹25 OFF)!');
      return { success: true, message: '₹25 Wellness Discount applied!' };
    }
    if (formatted === 'TNEXPRESS') {
      setCouponCode('TNEXPRESS');
      showToast('Coupon TNEXPRESS applied (Free Shipping)!');
      return { success: true, message: 'Free Tamil Nadu Express Shipping unlocked!' };
    }
    return { success: false, message: 'Invalid coupon code. Try RUTHRA10 or SIDDHA25.' };
  };

  const removeCoupon = () => {
    setCouponCode(null);
    showToast('Coupon removed');
  };

  // Shipping Calculation
  const isFreeShippingViaCoupon = couponCode === 'TNEXPRESS';
  const qualifiesForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || isFreeShippingViaCoupon;
  const shippingFee = subtotal === 0 || qualifiesForFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Total payable amount
  const total = Math.max(0, subtotal - multiPackSavings - couponDiscount + shippingFee);

  // Total savings customer receives on this order
  const shippingSavings = (shippingFee === 0 && subtotal > 0 && qualifiesForFreeShipping) ? STANDARD_SHIPPING_FEE : 0;
  const totalSavings = mrpSavings + multiPackSavings + couponDiscount + shippingSavings;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        mrpSubtotal,
        mrpSavings,
        multiPackSavings,
        couponCode,
        couponDiscount,
        applyCoupon,
        removeCoupon,
        totalSavings,
        shippingFee,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
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
