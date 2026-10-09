# Ruthra Medicines — Authoritative Client Requirements & Business Rules (Memory File)

## 1. Catalog & Therapeutic Index Rules
- **Active In-Stock Products (34 Formulations)**:
  - Synchronized from the official **Ruthra Medicines Therapeutic Index**.
  - All 34 items display their official strike-through MRP and a **10% discounted selling price**.
  - Users can purchase, add to cart, and claim volume offers on these 34 items.
- **Coming Soon Formulations (166 Formulations)**:
  - All remaining catalog items must have `isComingSoon: true`.
  - **Prices must NOT be displayed anywhere** (catalog cards, product detail page, search results).
  - Instead of a price, they display a **"Coming Soon"** (`விரைவில் கிடைக்கும்`) badge with an **"Enquire on WhatsApp"** CTA button.
  - They cannot be added to the cart directly.

---

## 2. Volume Discount Scheme (Calculated Per-Product Quantity)
Volume discounts are computed **strictly on each individual product's quantity in the cart** (not across the entire mixed cart count):

| Product Count | Discount on This Product | Free Bonus Units Earned for This Product |
| :--- | :--- | :--- |
| **1 – 4 Units** | **0% OFF** | **0 Free** |
| **5 – 29 Units** | **10% OFF** | **1 – 5 Free Bonus Units** (1 Free for every 5 units: 5→1, 10→2, 15→3, 20→4, 25→5) |
| **30 – 49 Units** | **20% OFF** | **6 – 9 Free Bonus Units** (30→6, 35→7, 40→8, 45→9) |
| **50 – 54 Units** | **20% OFF** | **15 Free Bonus Units** (Mega Bulk Jump) |
| **55 – 99 Units** | **20% OFF** | **16 – 28 Free Bonus Units** (Exact approved matrix: 55→16, 60→18, 65→19, 70→21, 75→22, 80→24, 85→25, 90→27, 95→28) |
| **100+ Units** | **20% OFF** | **30+ Free Bonus Units** (30 + 1 per 5 units above 100) |

---

## 3. Free Formulation Bonus Selection System
1. **Per-Product Selection Restriction**:
   - Customers can **only claim Free Bonus units for the specific individual formulations in their cart that reached quantity $\ge 5$**.
   - If a customer buys **5 units of Kabasura Kudineer** and **1 unit of Madhurathi Chooranam**, they can **only choose Kabasura Kudineer** as their free bonus (up to 1 unit). Madhurathi Chooranam is NOT selectable.
2. **Quota Cap**:
   - The customer cannot exceed the earned quota for that specific formulation (`calculateItemFreeGifts(quantity)`).
3. **Cart UI Progress Bar**:
   - Renders a full-width buying progress bar for each product card in Cart Drawer and Cart Page showing active discount, unlocked free bonus count, and distance to next bulk milestone.
   - Clean, decluttered design without `Sparkles` icons.

---

## 4. Checkout, Tax Invoice & Automated Email Dispatch
1. **Customer Data Collection**:
   - Captures Full Name, Phone, Email (`*` required), Address, Landmark, City, State, and Pincode.
2. **Invoice Generation**:
   - Every confirmed order automatically generates an official PDF tax invoice with Tamil & English itemized tables, volume discounts, free gift rows (`₹0.00`), and zero shipping fees.
3. **Email Dispatch**:
   - `POST /api/orders` triggers `sendInvoiceEmail({ order })`.
   - Sends the branded HTML confirmation email with the **PDF invoice attached** to the customer's email via SMTP / Resend.
   - RFC 5322 compliant sender formatting (`Ruthra Medicines <orders@ruthramedicines.com>`).

---

## 5. Admin Panel Operations & Security
1. **Credentials & Authentication**:
   - Master login at `/admin/login`.
   - Fallback credentials `admin1234@gmail.com` / `admin1234` or custom values from `.env`.
   - Admin routes protected via JWT HTTP-only session cookies.
2. **Catalog Synchronization**:
   - `/admin/products` reflects live PostgreSQL data for all 200 products with status filters (`Active In Stock (34)` vs `Coming Soon (166)`).
