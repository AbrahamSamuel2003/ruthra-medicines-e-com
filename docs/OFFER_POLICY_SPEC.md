# Ruthra Medicines — Revised Offers & Free Product Policy Specification

> **Status**: Awaiting Client Final Approval  
> **Date**: September 24, 2026  
> **Target System**: Ruthra Medicines E-Commerce Platform

---

## 1. Executive Summary of Changes

1. **Universal Customer Applicability**:
   - Offers and volume discounts apply directly to **all regular customers** without requiring doctor authentication or private coupons.
2. **Order Percentage Discounts**:
   - **5 to 29 items**: **10% OFF** order subtotal.
   - **30+ items**: **20% OFF** order subtotal (10% base + 10% extra bulk discount).
3. **Free Bonus Products (Tiered System)**:
   - **5 to 49 items**: Standard **5+1** scheme (1 free product for every 5 items ordered: $\lfloor Q / 5 \rfloor$).
   - **50+ items**: Jump to **Bulk Free Scheme** starting at **15 Free Products** for 50 items, adding **+3 Free Products for every 10 items** thereafter ($\lfloor Q / 10 \rfloor \times 3$).
4. **Product Selection Restriction**:
   - Free products **cannot** be picked from the entire 176-item catalog.
   - Customers can **only choose free products from the items already present in their order / cart**.

---

## 2. Complete Pricing & Free Product Matrix

| Order Quantity (Paid Units) | Cash Discount (% Off Bill) | Free Bonus Products (From Ordered Items Only) | Total Units Received | Benefit Summary |
| :--- | :---: | :---: | :---: | :--- |
| **1 – 4 items** | **0%** | **0 Free** | 1 – 4 items | Regular retail price |
| **5 – 9 items** | **10% OFF** | **1 FREE** | 6 – 10 items | 10% Discount + 1 Free item (5+1) |
| **10 – 14 items** | **10% OFF** | **2 FREE** | 12 – 16 items | 10% Discount + 2 Free items (10+2) |
| **15 – 19 items** | **10% OFF** | **3 FREE** | 18 – 22 items | 10% Discount + 3 Free items (15+3) |
| **20 – 24 items** | **10% OFF** | **4 FREE** | 24 – 28 items | 10% Discount + 4 Free items (20+4) |
| **25 – 29 items** | **10% OFF** | **5 FREE** | 30 – 34 items | 10% Discount + 5 Free items (25+5) |
| **30 – 34 items** | **20% OFF** *(Extra 10%)* | **6 FREE** | 36 – 40 items | **20% Bulk Discount** + 6 Free items |
| **35 – 39 items** | **20% OFF** | **7 FREE** | 42 – 46 items | **20% Bulk Discount** + 7 Free items |
| **40 – 44 items** | **20% OFF** | **8 FREE** | 48 – 52 items | **20% Bulk Discount** + 8 Free items |
| **45 – 49 items** | **20% OFF** | **9 FREE** | 54 – 58 items | **20% Bulk Discount** + 9 Free items |
| **50 – 59 items** | **20% OFF** | **15 FREE** *(Bulk Jump)* | 65 – 74 items | **20% Bulk Discount + 15 Free items** |
| **60 – 69 items** | **20% OFF** | **18 FREE** | 78 – 87 items | **20% Bulk Discount + 18 Free items** |
| **70 – 79 items** | **20% OFF** | **21 FREE** | 91 – 100 items | **20% Bulk Discount + 21 Free items** |
| **80 – 89 items** | **20% OFF** | **24 FREE** | 104 – 113 items | **20% Bulk Discount + 24 Free items** |
| **90 – 99 items** | **20% OFF** | **27 FREE** | 117 – 126 items | **20% Bulk Discount + 27 Free items** |
| **100+ items** | **20% OFF** | **30 FREE** *(+3 per 10)* | 130+ items | **20% Bulk Discount + 30+ Free items** |

---

## 3. Mathematical & Algorithmic Formulation

### 3.1 Discount Calculation Formula
Let $Q$ be the total paid quantity in the cart:

$$\text{Discount Rate } D(Q) = 
\begin{cases} 
0\% & \text{if } Q < 5 \\
10\% & \text{if } 5 \le Q < 30 \\
20\% & \text{if } Q \ge 30 
\end{cases}$$

$$\text{Discount Amount} = \text{Subtotal} \times D(Q)$$
$$\text{Payable Subtotal} = \text{Subtotal} - \text{Discount Amount}$$

### 3.2 Free Slots Calculation Formula
$$\text{Free Slots Earned } F(Q) = 
\begin{cases} 
0 & \text{if } Q < 5 \\
\lfloor Q / 5 \rfloor & \text{if } 5 \le Q < 50 \\
\lfloor Q / 10 \rfloor \times 3 & \text{if } Q \ge 50 
\end{cases}$$

### 3.3 Next Milestone Target Logic
- If $Q < 5$: Next milestone is **5 items** (Unlocks 10% OFF + 1 Free).
- If $5 \le Q < 30$: Next discount milestone is **30 items** (Unlocks 20% OFF); next gift milestone is $(\lfloor Q/5 \rfloor + 1) \times 5$.
- If $30 \le Q < 50$: Next gift milestone is $(\lfloor Q/5 \rfloor + 1) \times 5$; next major bulk jump is **50 items** (Unlocks 15 Free items).
- If $Q \ge 50$: Next milestone is $(\lfloor Q/10 \rfloor + 1) \times 10$ (Unlocks +3 Free items).

---

## 4. Affected Files & Implementation Checklist (Upon Approval)

1. `src/context/CartContext.tsx`:
   - Add `discountPercent`, `discountAmount`, `netSubtotal` properties.
   - Update `freeSlotsEarned` with piecewise formula ($Q \ge 50 \implies \lfloor Q/10 \rfloor \times 3$, else $\lfloor Q/5 \rfloor$).
   - Expose `eligibleGiftProducts` (derived strictly from `items.map(i => i.product)`).
2. `src/components/FreeGiftSelectorModal.tsx`:
   - Replace catalog browsing with cart-only item selection list.
   - Allow increment/decrement allocation of free bonus units for each ordered formulation.
3. `src/components/CartDrawer.tsx` & `src/app/cart/page.tsx`:
   - Update progress bar indicators for 10% off (5+), 20% off (30+), and 15 free items (50+).
   - Display explicit line items for Catalog MRP savings, Tier Discount savings (10%/20%), and 100% Free Formulation value.
4. `src/app/checkout/page.tsx`:
   - Display total discount and free gifts in order summary breakdown.
   - Pass discount metadata to `/api/orders`.
5. `src/app/offers/page.tsx`:
   - Update tier cards, interactive simulator, and banners to reflect the verified matrix.
6. `src/app/api/orders/route.ts` & `src/lib/invoiceGenerator.ts`:
   - Ensure backend validation recalculates discount and free items accurately on order placement.
