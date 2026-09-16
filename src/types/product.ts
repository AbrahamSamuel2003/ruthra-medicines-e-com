export type MedicalSystem = 'siddha' | 'ayurveda' | 'proprietary';

export type FormulationType = 
  // Siddha Formulations
  | 'Chooranam'
  | 'Kudineer'
  | 'Kudineer Chooranam'
  | 'Legiyam'
  | 'Maathirai'
  | 'Rasayanam'
  | 'Vadagam'
  | 'Nei'
  | 'Mezhugu'
  | 'Parpam'
  | 'Theeneer'
  | 'Manapagu'
  | 'Vennai'
  | 'Thailam'
  // Ayurveda Formulations
  | 'Churna'
  | 'Kwatha Churna'
  | 'Vati'
  | 'Lehyam'
  | 'Tailam'
  | 'Ghritam'
  | 'Asavam / Arishta'
  | 'Single Herb'
  // Proprietary & Specialty
  | 'Capsules'
  | 'Syrups'
  | 'Drops'
  | 'Syrup & Kashayam'
  | 'Personal Care'
  | 'Proprietary';

export type ConcernSlug = 
  | 'joint-mobility'
  | 'respiratory'
  | 'womens-wellness'
  | 'metabolic-wellness'
  | 'digestive-wellness'
  | 'skin-hair';

export interface IngredientItem {
  name: string;
  tamilName: string;
  botanicalName?: string;
  role: string;
  roleTa: string;
  amount?: string;
}

export interface UseStep {
  step: string;
  title: string;
  titleTa: string;
  instruction: string;
  instructionTa: string;
}

export interface ProductFaq {
  question: string;
  questionTa: string;
  answer: string;
  answerTa: string;
}

export interface Product {
  id: string;
  name: string;
  tamilName: string;
  slug: string;
  medicalSystem?: MedicalSystem;
  formulation: FormulationType;
  formulationTa: string;
  categoryGroup?: string;
  concerns: ConcernSlug[];
  price: number;
  originalPrice?: number;
  packSize: string;
  packSizeTa: string;
  shortDescription: string;
  shortDescriptionTa: string;
  description: string;
  descriptionTa: string;
  traditionalRole: string;
  traditionalRoleTa: string;
  badge?: string;
  badgeTa?: string;
  image: string;
  images?: string[];
  gallery?: string[];
  isComingSoon?: boolean;
  ingredients: IngredientItem[];
  howToUse: UseStep[];
  dosage: {
    amount: string;
    frequency: string;
    timing: string;
    vehicle: string; // anupanam (e.g. warm water, honey, milk)
    amountTa: string;
    frequencyTa: string;
    timingTa: string;
    vehicleTa: string;
  };
  safety: {
    pregnancy: string;
    pregnancyTa: string;
    children: string;
    childrenTa: string;
    interactions: string;
    interactionsTa: string;
    precautions: string[];
    precautionsTa: string[];
  };
  storage: {
    conditions: string;
    conditionsTa: string;
    shelfLife: string;
    shelfLifeTa: string;
  };
  faqs: ProductFaq[];
  searchKeywords: string[];
  tamilKeywords: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface ConcernCategory {
  slug: ConcernSlug;
  title: string;
  titleTa: string;
  tagline: string;
  taglineTa: string;
  description: string;
  descriptionTa: string;
  iconName: string;
  herbalKey: string;
  herbalKeyTa: string;
}

export interface FormulationCategory {
  slug: string;
  formulation: FormulationType;
  title: string;
  titleTa: string;
  tagline: string;
  taglineTa: string;
  description: string;
  descriptionTa: string;
  classicalContext: string;
  classicalContextTa: string;
}

export interface BundleItem {
  id: string;
  slug: string;
  title: string;
  titleTa: string;
  subtitle: string;
  subtitleTa: string;
  concern: ConcernSlug;
  productSlugs: string[];
  regularPrice: number;
  bundlePrice: number;
  savings: number;
  description: string;
  descriptionTa: string;
  badge: string;
}
