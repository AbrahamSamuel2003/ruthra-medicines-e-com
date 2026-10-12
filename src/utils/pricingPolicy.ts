import { Product } from '@/types/product';

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
