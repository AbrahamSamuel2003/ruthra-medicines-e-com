export interface NavCategory {
  slug: string;
  title: string;
  titleTa: string;
  count: number;
  desc: string;
}

export interface NavConcern {
  slug: string;
  title: string;
  titleTa: string;
  desc: string;
  count: number;
}

// Siddha Master Categories from Manufacturing Poster (111 Formulations across 14 Categories)
export const SIDDHA_NAV_CATEGORIES: NavCategory[] = [
  { slug: 'chooranam', title: 'Chooranam', titleTa: 'சூரணம்', count: 41, desc: 'Herbal powders & sachets' },
  { slug: 'kudineer-chooranam', title: 'Kudineer Chooranam', titleTa: 'குடிநீர் சூரணம்', count: 16, desc: 'Decoction powders' },
  { slug: 'kudineer', title: 'Kudineer', titleTa: 'குடிநீர்', count: 1, desc: 'Ready boiled decoctions' },
  { slug: 'manapagu', title: 'Manapagu', titleTa: 'மணப்பாகு', count: 2, desc: 'Herbal syrup cordials' },
  { slug: 'legiyam', title: 'Legiyam', titleTa: 'லேகியம்', count: 11, desc: 'Herbal jams & electuaries' },
  { slug: 'maathirai', title: 'Maathirai', titleTa: 'மாத்திரை', count: 4, desc: 'Classical pills' },
  { slug: 'rasayanam', title: 'Rasayanam', titleTa: 'ரசாயனம்', count: 4, desc: 'Rejuvenative tonics' },
  { slug: 'vadagam', title: 'Vadagam', titleTa: 'வடகம்', count: 4, desc: 'Chewable herbal tablets' },
  { slug: 'nei', title: 'Nei', titleTa: 'நெய்', count: 8, desc: 'Medicated herbal ghee' },
  { slug: 'mezhugu', title: 'Mezhugu', titleTa: 'மெழுகு', count: 4, desc: 'Waxy resinous compounds' },
  { slug: 'parpam', title: 'Parpam', titleTa: 'பற்பம்', count: 5, desc: 'Calcinated nano preparations' },
  { slug: 'theeneer', title: 'Theeneer', titleTa: 'தீநீர்', count: 1, desc: 'Distilled herbal hydro-sol' },
  { slug: 'thailam', title: 'Thailam', titleTa: 'தைலம்', count: 9, desc: 'Medicated body & hair oils' },
  { slug: 'vennai', title: 'Vennai', titleTa: 'வெண்ணெய்', count: 1, desc: 'Herbal medicated butters' }
];

// Ayurveda Master Categories from Manufacturing Poster (55 Formulations across 7 Categories)
export const AYURVEDA_NAV_CATEGORIES: NavCategory[] = [
  { slug: 'churna', title: 'Churna', titleTa: 'சூர்ணம்', count: 25, desc: 'Classical herbal powders' },
  { slug: 'kvatha-churna', title: 'Kvatha Churna', titleTa: 'க்வாத சூர்ணம்', count: 19, desc: 'Decoction powders' },
  { slug: 'lehya', title: 'Lehya', titleTa: 'லேஹ்யம்', count: 2, desc: 'Nourishing herbal electuaries' },
  { slug: 'ghrita', title: 'Ghrita', titleTa: 'கிருதம்', count: 1, desc: 'Medicated cow ghee' },
  { slug: 'arishtam', title: 'Arishtam / Asava', titleTa: 'ஆஸவம் / அரிஷ்டம்', count: 4, desc: 'Naturally fermented elixirs' },
  { slug: 'guggulu', title: 'Guggulu / Vati', titleTa: 'வடி / குக்குலு', count: 3, desc: 'Classical herbal tablets' },
  { slug: 'taila', title: 'Taila', titleTa: 'தைலம்', count: 1, desc: 'Medicated oils & massage' }
];

// Health Indication Categories
export const CONCERN_NAV_ITEMS: NavConcern[] = [
  { slug: 'joint-mobility', title: 'Joint & Muscle Mobility', titleTa: 'மூட்டு & தசை நலம்', desc: 'Arthritis, spondylosis & pain relief', count: 24 },
  { slug: 'respiratory', title: 'Respiratory & Cough Care', titleTa: 'சுவாச & சளி நலம்', desc: 'Sinusitis, cough & bronchial ease', count: 21 },
  { slug: 'digestive-wellness', title: 'Digestive & Acidity Care', titleTa: 'செரிமான & அமில நலம்', desc: 'GERD, ulcers & bowel regularity', count: 32 },
  { slug: 'womens-wellness', title: "Women's Health & Harmony", titleTa: 'மகளிர் நலம்', desc: 'Hormonal balance & uterine care', count: 19 },
  { slug: 'skin-hair', title: 'Skin, Hair & Beauty', titleTa: 'தோல் & கூந்தல் நலம்', desc: 'Complexion, eczema & hair growth', count: 26 },
  { slug: 'metabolic-wellness', title: 'Metabolic & Vitality Care', titleTa: 'உடல் பலம் & ரத்த சுத்தி', desc: 'Liver detox, stamina & hemoglobin', count: 38 }
];
