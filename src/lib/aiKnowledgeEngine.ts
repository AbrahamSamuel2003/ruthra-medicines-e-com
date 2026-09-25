import { PRODUCTS } from '@/data/products';
import { getDeliveryEstimate } from '@/utils/deliveryEstimator';

export interface AIQuickReply {
  labelEn: string;
  labelTa: string;
  query: string;
}

export interface AILink {
  labelEn: string;
  labelTa: string;
  url: string;
}

export interface AIResponse {
  reply: string;
  links?: AILink[];
  quickReplies: AIQuickReply[];
}

// 5 Main Top-Level Category Quick Replies
export const MAIN_CATEGORY_REPLIES: AIQuickReply[] = [
  { labelEn: 'Products', labelTa: 'தயாரிப்புகள்', query: 'Products' },
  { labelEn: 'Offers & Discounts', labelTa: 'சலுகைகள் & தள்ளுபடி', query: 'Offers & Discounts' },
  { labelEn: 'Delivery & Payment', labelTa: 'டெலிவரி & கட்டணம்', query: 'Delivery & Payment' },
  { labelEn: 'Orders', labelTa: 'ஆர்டர்கள்', query: 'Orders' },
  { labelEn: 'Contact & Support', labelTa: 'தொடர்பு & உதவி', query: 'Contact & Support' }
];

export function getInitialWelcome(language: 'en' | 'ta' = 'en'): { text: string; quickReplies: AIQuickReply[] } {
  const isTa = language === 'ta';
  return {
    text: isTa
      ? 'வணக்கம்! நான் ரூத்ரா மெடிசின்ஸ் உதவியாளர். இன்று உங்களுக்கு எவ்வாறு உதவ முடியும்?\n\nகீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்ந்தெடுக்கவும் அல்லது உங்கள் கேள்வியை தட்டச்சு செய்யவும்:'
      : 'Vanakkam! I am the Ruthra Medicines Assistant. How can I help you today?\n\nPlease select an option below or type your question:',
    quickReplies: MAIN_CATEGORY_REPLIES
  };
}

// Concern and formulation knowledge dictionary (strictly e-commerce product catalog guidance)
const PRODUCT_CONCERN_MAP: Record<
  string,
  {
    enKeywords: string[];
    taKeywords: string[];
    enAnswer: string;
    taAnswer: string;
    linkUrl: string;
    linkTitleEn: string;
    linkTitleTa: string;
    followUps: AIQuickReply[];
  }
> = {
  respiratory: {
    enKeywords: ['cough', 'cold', 'sinus', 'asthma', 'breathing', 'phlegm', 'throat', 'kabasura', 'fever', 'flu', 'congestion', 'respiratory care'],
    taKeywords: ['சளி', 'இருமல்', 'கபம்', 'சுவாசம்', 'ஆஸ்துமா', 'மூக்கடைப்பு', 'தொண்டை', 'காய்ச்சல்', 'கபசூர', 'நிலவேம்பு', 'சுவாச நலம்'],
    enAnswer:
      'Ruthra Respiratory & Cold Care Formulations:\n\n- Kabasura Kudineer: Traditional herbal decoction for respiratory defense.\n- Nilavembu Kudineer: Classical formulation for fevers and body warmth.\n- Sinocof Herbal Cough Syrup: Soothing relief for throat irritation and chest congestion.\n\nAll medicines are prepared under strict Siddha pharmacopoeia standards.',
    taAnswer:
      'ரூத்ரா சுவாச & சளி நிவாரண தயாரிப்புகள்:\n\n- கபசூர குடிநீர்: சுவாசப் பாதை ஆரோக்கியத்திற்கான பாரம்பரிய குடிநீர் சூரணம்.\n- நிலவேம்பு குடிநீர்: காய்ச்சல் மற்றும் நோய் எதிர்ப்பு சக்திக்கான மூலிகை முறை.\n- சினோகாஃப் சிரப்: தொண்டை எரிச்சல் மற்றும் இருமலுக்கான மூலிகை சிரப்.\n\nஅனைத்து மருந்துகளும் பாரம்பரிய முறையில் தூய்மையாக தயாரிக்கப்படுகின்றன.',
    linkUrl: '/shop?concern=respiratory',
    linkTitleEn: 'Browse Respiratory Range',
    linkTitleTa: 'சுவாச மருந்துகளை பார்க்க',
    followUps: [
      { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
      { labelEn: 'Free Shipping inside TN', labelTa: 'இலவச டெலிவரி', query: 'Delivery & Payment' },
      { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
    ]
  },
  jointMobility: {
    enKeywords: ['joint', 'pain', 'arthritis', 'knee', 'back pain', 'muscle', 'oil', 'thailam', 'vatham', 'sciatica', 'joint pain care', 'pain & joint care'],
    taKeywords: ['மூட்டு', 'வலி', 'வாத', 'முழங்கால்', 'இடுப்பு', 'வீக்கம்', 'தைலம்', 'தசை', 'கழுத்து வலி', 'மூட்டு & வலி மருந்துகள்', 'மூட்டு வலி'],
    enAnswer:
      'Ruthra Joint & Pain Relief Range:\n\n- Rej-Viyan Pain Oil: Concentrated herbal massage oil for stiff joints and muscles.\n- Pinda Thailam: Classical cooling oil for burning joint sensations.\n- Sarvanga Vatha Chooranam: Traditional internal powder for joint mobility.\n- Amukkara Chooranam: Vitality and neuromuscular support.',
    taAnswer:
      'ரூத்ரா மூட்டு & வலி நிவாரண தயாரிப்புகள்:\n\n- ரெஜ்-வியான் வலி தைலம்: மூட்டு வலி மற்றும் தசை பிடிப்புக்கான மூலிகை தைலம்.\n- பிண்ட தைலம்: பாரம்பரிய குளிர்ச்சி மற்றும் வலி நிவாரண தைலம்.\n- சர்வாங்க வாத சூரணம்: மூட்டு இயக்கம் மற்றும் வாத சமநிலைக்கான சூரணம்.\n- அமுக்கரா சூரணம்: தசை மற்றும் நரம்பு பலத்திற்கான மருந்து.',
    linkUrl: '/shop?concern=joint-mobility',
    linkTitleEn: 'Browse Joint & Pain Relief',
    linkTitleTa: 'மூட்டு வலி மருந்துகளை பார்க்க',
    followUps: [
      { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
      { labelEn: 'Delivery Details', labelTa: 'டெலிவரி விபரம்', query: 'Delivery & Payment' },
      { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
    ]
  },
  digestive: {
    enKeywords: ['digest', 'acidity', 'gas', 'constipation', 'stomach', 'bloating', 'indigestion', 'triphala', 'digestive care', 'digestive wellness'],
    taKeywords: ['செரிமானம்', 'அமிலம்', 'அசிடிட்டி', 'வாயு', 'மலச்சிக்கல்', 'வயிறு', 'திரிபலா', 'செரிமான நலம்'],
    enAnswer:
      'Ruthra Digestive Wellness Range:\n\n- Triphala Chooranam: Pure blend of Haritaki, Bibhitaki, and Amalaki for daily bowel regularity.\n- Ashta Chooranam: Traditional digestive powder for gas, appetite, and flatulence.\n- Eladi Chooranam: Soothing formulation for acidity and gastric comfort.',
    taAnswer:
      'ரூத்ரா செரிமான நலம் தயாரிப்புகள்:\n\n- திரிபலா சூரணம்: கடுக்காய், நெல்லிக்காய், தான்றிக்காய் அடங்கிய குடல் சுத்திகரிப்பு பொடி.\n- அஷ்ட சூரணம்: பசியின்மை, அஜீரணம் மற்றும் வாயுத்தொல்லைக்கான பாரம்பரிய சூரணம்.\n- ஏலாதி சூரணம்: நெஞ்செரிச்சல் மற்றும் அமிலத்தன்மையை தணிக்கும் மருந்து.',
    linkUrl: '/shop?concern=digestive-wellness',
    linkTitleEn: 'Browse Digestive Range',
    linkTitleTa: 'செரிமான மருந்துகளை பார்க்க',
    followUps: [
      { labelEn: 'Check 5+1 Scheme', labelTa: '5+1 சலுகை திட்டம்', query: 'Offers & Discounts' },
      { labelEn: 'Delivery Timeline', labelTa: 'டெலிவரி விபரம்', query: 'Delivery & Payment' },
      { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
    ]
  },
  metabolic: {
    enKeywords: ['diabetes', 'sugar', 'vitality', 'stamina', 'energy', 'amukkara', 'ashwagandha', 'madhura', 'immunity', 'sugar care'],
    taKeywords: ['சர்க்கரை', 'நீரிழிவு', 'பலம்', 'உடல்பலம்', 'அமுக்கரா', 'அஸ்வகந்தா', 'மதுரா', 'சர்க்கரை நலம்'],
    enAnswer:
      'Ruthra Vitality & Metabolic Formulations:\n\n- Madhura Powder: Synergistic botanical blend with Jamun, Meshashringi, Karela, and Vijaysar.\n- Amukkara Chooranam: Premium Ashwagandha formulation for strength and resilience.\n- Nilavembu Chooranam: Traditional tonic for natural immune defense.',
    taAnswer:
      'ரூத்ரா சர்க்கரை & உடல் பலம் தயாரிப்புகள்:\n\n- மதுரா பவுடர்: நாவல் விதை, சிறுகுறிஞ்சான், பாகற்காய் அடங்கிய இயற்கை கூட்டுப் பொடி.\n- அமுக்கரா சூரணம்: உடல் வலிமை மற்றும் புத்துணர்ச்சிக்கான அஸ்வகந்தா சூரணம்.\n- நிலவேம்பு சூரணம்: இயற்கை நோய் எதிர்ப்பு சக்திக்கான பாரம்பரிய மருந்து.',
    linkUrl: '/shop?concern=metabolic-wellness',
    linkTitleEn: 'Browse Vitality Range',
    linkTitleTa: 'சர்க்கரை & உடல் பலம் மருந்துகள்',
    followUps: [
      { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
      { labelEn: 'Support Desk', labelTa: 'உதவி மையம்', query: 'Contact & Support' },
      { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
    ]
  },
  skinHair: {
    enKeywords: ['skin', 'hair', 'hair fall', 'dandruff', 'eczema', 'itching', 'nalangu', 'shikakai', 'skin & hair care'],
    taKeywords: ['தோல்', 'கூந்தல்', 'முடி', 'பொடுகு', 'அரிப்பு', 'நலங்கு மாவு', 'சிகைக்காய்', 'தோல் & கூந்தல்'],
    enAnswer:
      'Ruthra Skin & Hair Care Formulations:\n\n- Nalangu Maavu Herbal Bath Powder: 100% natural, soap-free cleansing powder.\n- Pure Herbal Shikakai Powder: Traditional hair wash blend for scalp health.\n- Parangipattai Chooranam: Classical formulation for internal skin wellness.',
    taAnswer:
      'ரூத்ரா தோல் & கூந்தல் பராமரிப்பு தயாரிப்புகள்:\n\n- மூலிகை நலங்கு மாவு: சோப் இல்லாத 100% இயற்கை குளியல் பொடி.\n- தூய சிகைக்காய் பொடி: கூந்தல் ஆரோக்கியம் மற்றும் பொடுகு நீக்கத்திற்கான மூலிகைக் கலவை.\n- பரங்கிப்பட்டை சூரணம்: தோல் ஆரோக்கியத்திற்கான பாரம்பரிய மருந்து.',
    linkUrl: '/shop?concern=skin-hair',
    linkTitleEn: 'Browse Skin & Hair Range',
    linkTitleTa: 'தோல் & கூந்தல் மருந்துகள்',
    followUps: [
      { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
      { labelEn: 'Delivery Details', labelTa: 'டெலிவரி விபரம்', query: 'Delivery & Payment' },
      { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
    ]
  }
};

/**
 * Main Domain Knowledge Query Handler
 */
export function queryDomainKnowledge(userQuery: string, language: 'en' | 'ta' = 'en'): AIResponse {
  const raw = userQuery.trim().toLowerCase();
  const isTa = language === 'ta';

  // 1. MAIN MENU INTENT
  const isMainMenu =
    raw === 'main menu' ||
    raw === 'menu' ||
    raw === 'முதன்மை மெனு' ||
    raw === 'start over' ||
    raw === 'home';

  if (isMainMenu) {
    return {
      reply: isTa
        ? 'ரூத்ரா மெடிசின்ஸ் முதன்மை மெனு:\n\nதயவுசெய்து நீங்கள் அறிய விரும்பும் தலைப்பைத் தேர்ந்தெடுக்கவும்:'
        : 'Ruthra Medicines Main Menu:\n\nPlease select the topic you would like to explore:',
      quickReplies: MAIN_CATEGORY_REPLIES
    };
  }

  // 2. GREETINGS & HELP INTENT
  const isGreeting =
    raw === 'hi' ||
    raw === 'hello' ||
    raw === 'hey' ||
    raw === 'vanakkam' ||
    raw === 'வணக்கம்' ||
    raw === 'hi there' ||
    raw === 'good morning' ||
    raw === 'good afternoon' ||
    raw === 'good evening' ||
    raw === 'help' ||
    raw === 'உதவி';

  if (isGreeting) {
    return {
      reply: isTa
        ? 'வணக்கம்! இன்று உங்களுக்கு எவ்வாறு உதவ முடியும்? கீழே உள்ள தலைப்புகளில் ஒன்றைத் தேர்வு செய்யவும் அல்லது உங்கள் கேள்வியைக் கேட்கவும்:'
        : 'Vanakkam! How can I help you today? Please select one of the topics below or ask about any Ruthra product, offer, or delivery details:',
      quickReplies: MAIN_CATEGORY_REPLIES
    };
  }

  // 3. CATEGORY: PRODUCTS (Browse Products, Formulations, Catalogue)
  const isProductsCat =
    raw === 'products' ||
    raw === 'தயாரிப்புகள்' ||
    raw === 'browse products' ||
    raw === 'medicines' ||
    raw === 'catalogue' ||
    raw === 'catalog' ||
    raw === 'மருந்துகள்' ||
    raw.includes('show all products') ||
    raw.includes('all products');

  if (isProductsCat) {
    return {
      reply: isTa
        ? 'ரூத்ரா மெடிசின்ஸ் தயாரிப்பு பிரிவுகள்:\n\nஎங்கள் திருநெல்வேலி மையத்தில் தயாரிக்கப்படும் தூய சித்த மற்றும் ஆயுர்வேத மருந்துகள்:\n- குடிநீர் சூரணங்கள் (கபசூர, நிலவேம்பு)\n- மூலிகை சூரணங்கள் (திரிபலா, அமுக்கரா, அஷ்ட சூரணம்)\n- வலி நிவாரண தைலங்கள் (ரெஜ்-வியான், பிண்ட தைலம்)\n- சர்க்கரை மற்றும் உடல் பலம் மருந்துகள்\n- நலங்கு மாவு மற்றும் குளியல் பொடிகள்'
        : 'Ruthra Medicines Product Categories:\n\nAuthentic Siddha and Ayurveda formulations crafted in Tirunelveli:\n- Kudineer Decoctions (Kabasura, Nilavembu)\n- Herbal Chooranams (Triphala, Amukkara, Ashta)\n- Medicated Pain Oils & Thailams (Rej-Viyan, Pinda)\n- Sugar & Vitality Formulations (Madhura, Ashwagandha)\n- Natural Bath & Care Powders (Nalangu Maavu, Shikakai)',
      links: [
        { labelEn: 'Browse All Products', labelTa: 'அனைத்து தயாரிப்புகள்', url: '/shop' },
        { labelEn: 'Pain & Joint Care', labelTa: 'மூட்டு வலி மருந்துகள்', url: '/shop?concern=joint-mobility' },
        { labelEn: 'Respiratory Care', labelTa: 'சுவாச நலம் மருந்துகள்', url: '/shop?concern=respiratory' }
      ],
      quickReplies: [
        { labelEn: 'Pain & Joint Oils', labelTa: 'மூட்டு & வலி தைலங்கள்', query: 'Joint Pain Care' },
        { labelEn: 'Cough & Cold Range', labelTa: 'சளி & இருமல் மருந்துகள்', query: 'Respiratory Care' },
        { labelEn: 'Digestive Wellness', labelTa: 'செரிமான நலம்', query: 'Digestive Care' },
        { labelEn: '5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
        { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
      ]
    };
  }

  // 4. CATEGORY: OFFERS & DISCOUNTS (5+1, Volume Schemes, Bulk)
  const isOffersCat =
    raw === 'offers & discounts' ||
    raw === 'offers' ||
    raw === 'discounts' ||
    raw === 'சலுகைகள் & தள்ளுபடி' ||
    raw === 'சலுகைகள்' ||
    raw === 'தள்ளுபடி' ||
    raw.includes('offer') ||
    raw.includes('discount') ||
    raw.includes('5+1') ||
    raw.includes('free medicine') ||
    raw.includes('free gift') ||
    raw.includes('bulk') ||
    raw.includes('wholesale') ||
    raw.includes('ஆபர்');

  if (isOffersCat) {
    return {
      reply: isTa
        ? 'ரூத்ரா மெடிசின்ஸ் நேரடி தள்ளுபடி & இலவச மருந்து திட்டங்கள்:\n\n1. 5+1 திட்டம் (10% தள்ளுபடி):\n5 முதல் 29 மருந்துகள் வாங்கும்போது 10% நேரடி தள்ளுபடியுடன் ஒவ்வொரு 5 மருந்துகளுக்கும் 1 இலவச போனஸ் மருந்து கிடைக்கும்.\n\n2. 30+ மொத்த திட்டம் (20% தள்ளுபடி):\n30 முதல் 49 மருந்துகள் வாங்கும்போது 20% மொத்த தள்ளுபடியுடன் 6 முதல் 9 இலவச மருந்துகள் கிடைக்கும்.\n\n3. 50+ மெகா திட்டம்:\n50 அல்லது அதற்கு மேற்பட்ட ஆர்டர்களுக்கு 20% தள்ளுபடியுடன் 15+ இலவச மருந்துகள் பெறலாம்.\n\nஅனைத்து ஆர்டர்களுக்கும் தமிழ்நாடு முழுவதும் இலவச டெலிவரி உண்டு.'
        : 'Ruthra Direct Savings & Volume Schemes:\n\n1. 5+1 Tier (10% OFF):\nOrder 5 to 29 items to receive an instant 10% discount plus 1 Free bonus medicine for every 5 items.\n\n2. 30+ Bulk Tier (20% OFF):\nOrder 30 to 49 items to unlock 20% bill discount plus 6 to 9 free bonus medicines.\n\n3. 50+ Wholesale Mega Tier:\nOrder 50 or more items for 20% bill discount plus 15+ free bonus medicines.\n\nFree shipping inside TN applies automatically on all orders.',
      links: [
        { labelEn: 'View Full Offers Breakdown', labelTa: 'முழு சலுகை விபரங்கள்', url: '/offers' },
        { labelEn: 'Shop 5+1 Packs', labelTa: '5+1 மருந்துகள் வாங்க', url: '/shop' }
      ],
      quickReplies: [
        { labelEn: 'Delivery Timelines', labelTa: 'டெலிவரி கால அளவு', query: 'Delivery & Payment' },
        { labelEn: 'Browse Products', labelTa: 'தயாரிப்புகள்', query: 'Products' },
        { labelEn: 'Contact Support', labelTa: 'உதவி மையம்', query: 'Contact & Support' },
        { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
      ]
    };
  }

  // 5. CATEGORY: DELIVERY & PAYMENT (Shipping SLA, Pincode, Payment modes)
  const pinMatch = raw.match(/\b\d{6}\b/);
  const isDeliveryCat =
    raw === 'delivery & payment' ||
    raw === 'delivery' ||
    raw === 'payment' ||
    raw === 'shipping' ||
    raw === 'டெலிவரி & கட்டணம்' ||
    raw === 'டெலிவரி' ||
    raw === 'கட்டணம்' ||
    raw.includes('courier') ||
    raw.includes('pincode') ||
    raw.includes('pin code') ||
    raw.includes('cod') ||
    raw.includes('cash on delivery') ||
    raw.includes('free shipping') ||
    raw.includes('கொரியர்') ||
    pinMatch !== null;

  if (isDeliveryCat) {
    if (pinMatch) {
      const pin = pinMatch[0];
      const estimate = getDeliveryEstimate(pin);
      if (estimate && estimate.zone !== 'invalid') {
        const districtStr = isTa ? estimate.districtTa : estimate.district;
        const timeStr = isTa ? estimate.deliveryTimeTa : estimate.deliveryTimeEn;
        const partnerStr = isTa ? estimate.courierPartnerTa : estimate.courierPartnerEn;

        return {
          reply: isTa
            ? `அஞ்சல் குறியீடு ${pin} (${districtStr}) டெலிவரி விபரம்:\n\n- மதிப்பிடப்பட்ட காலம்: ${timeStr}\n- கூரியர் சேவை: ${partnerStr}\n- கட்டணம்: தமிழ்நாடு முழுவதும் 100% இலவச டெலிவரி\n- பணம் செலுத்தும் முறை: ஆன்லைன் பேமெண்ட் (UPI, Cards) மற்றும் கேஷ் ஆன் டெலிவரி (COD) வசதி உண்டு.`
            : `Delivery Details for PIN ${pin} (${districtStr}):\n\n- Estimated Timeline: ${timeStr}\n- Courier Partner: ${partnerStr}\n- Shipping Fee: Free Shipping inside TN\n- Payment Options: Online Payment (UPI, Cards, Net Banking) and Cash on Delivery (COD).`,
          links: [
            { labelEn: 'View Shipping Information', labelTa: 'டெலிவரி விபர பக்கம்', url: '/shipping' }
          ],
          quickReplies: [
            { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
            { labelEn: 'Browse Products', labelTa: 'தயாரிப்புகள்', query: 'Products' },
            { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
          ]
        };
      }
    }

    return {
      reply: isTa
        ? 'ரூத்ரா மெடிசின்ஸ் விநியோகம் & கட்டண விபரங்கள்:\n\n- தமிழ்நாடு முழுவதும் அனைத்து ஆர்டர்களுக்கும் 100% இலவச டெலிவரி உண்டு.\n- தென் மாவட்டங்கள் (திருநெல்வேலி, தென்காசி, மதுரை, தூத்துக்குடி): 24 மணி நேர டெலிவரி.\n- சென்னை, கோவை, திருச்சி உள்ளிட்ட இதர தமிழக மாவட்டங்கள்: 24 முதல் 48 மணி நேரம்.\n- பிற மாநிலங்கள்: 3 முதல் 5 வேலை நாட்கள்.\n- கட்டண முறைகள்: UPI, GPay, PhonePe, Debit/Credit Cards & கேஷ் ஆன் டெலிவரி (COD).\n\nதுல்லியமான நேரத்தை அறிய உங்கள் 6 இலக்க பின்கோடை தட்டச்சு செய்யவும்.'
        : 'Ruthra Medicines Delivery & Payment Details:\n\n- Free Shipping inside Tamil Nadu on all orders.\n- South TN Hub (Tirunelveli, Tenkasi, Madurai, Tuticorin): Next-day 24 Hours Delivery.\n- Central & North TN (Chennai, Coimbatore, Trichy, Salem): 24 to 48 Hours.\n- Rest of India: 3 to 5 Business Days.\n- Payment Options: UPI, GPay, PhonePe, Debit/Credit Cards, Net Banking & Cash on Delivery (COD).\n\nEnter your 6-digit PIN code for local delivery details.',
      links: [
        { labelEn: 'Shipping Policy Page', labelTa: 'டெலிவரி விபர பக்கம்', url: '/shipping' },
        { labelEn: 'Contact Support', labelTa: 'உதவி மையம்', url: '/contact' }
      ],
      quickReplies: [
        { labelEn: 'Check 600001 (Chennai)', labelTa: '600001 (சென்னை)', query: 'Delivery for 600001' },
        { labelEn: 'Check 627001 (Tirunelveli)', labelTa: '627001 (திருநெல்வேலி)', query: 'Delivery for 627001' },
        { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
        { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
      ]
    };
  }

  // 6. CATEGORY: ORDERS (How to order, Order status, Cart)
  const isOrdersCat =
    raw === 'orders' ||
    raw === 'order' ||
    raw === 'ஆர்டர்கள்' ||
    raw === 'ஆர்டர்' ||
    raw.includes('how to order') ||
    raw.includes('order status') ||
    raw.includes('track') ||
    raw.includes('cart') ||
    raw.includes('ஆர்டர் நிலை') ||
    raw.includes('ஆர்டர் செய்வது எப்படி');

  if (isOrdersCat) {
    return {
      reply: isTa
        ? 'ரூத்ரா ஆன்லைன் ஆர்டர் விபரங்கள்:\n\n1. ஆர்டர் செய்யும் முறை: உங்களுக்கு தேவையான மருந்துகளை கார்ட்டில் (Cart) சேர்த்து, உங்கள் முகவரியை உள்ளிட்டு பணம் செலுத்தி ஆர்டரை முடிக்கலாம்.\n2. உறுதிப்படுத்தல்: ஆர்டர் செய்யப்பட்டவுடன் WhatsApp மற்றும் SMS மூலம் உறுதிப்படுத்தல் தகவல் வரும்.\n3. ஆர்டர் உதவி: ஆர்டர் நிலை அறிய அல்லது மாற்றங்கள் செய்ய உங்கள் Order ID உடன் எங்கள் உதவி மையத்தை தொடர்பு கொள்ளலாம்.'
        : 'Ruthra Online Ordering & Assistance:\n\n1. How to Order: Browse our store, add items to cart, and proceed to checkout with your delivery address and payment choice.\n2. Confirmation: Instant confirmation details are sent via SMS and WhatsApp after checkout.\n3. Order Inquiries: For dispatch updates, address changes, or invoice copies, contact our Tirunelveli support desk with your Order ID.',
      links: [
        { labelEn: 'Go to Cart', labelTa: 'கார்ட்டுக்கு செல்ல', url: '/cart' },
        { labelEn: 'Browse Products', labelTa: 'மருந்துகளை பார்க்க', url: '/shop' },
        { labelEn: 'Contact Order Desk', labelTa: 'உதவி மையத்தை தொடர்பு கொள்ள', url: '/contact' }
      ],
      quickReplies: [
        { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
        { labelEn: 'Delivery & Payment', labelTa: 'டெலிவரி & கட்டணம்', query: 'Delivery & Payment' },
        { labelEn: 'Contact Support', labelTa: 'உதவி மையம்', query: 'Contact & Support' },
        { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
      ]
    };
  }

  // 7. CATEGORY: CONTACT & SUPPORT (Phone, Tirunelveli Clinic, Doctor Desk, WhatsApp)
  const isContactCat =
    raw === 'contact & support' ||
    raw === 'contact' ||
    raw === 'support' ||
    raw === 'தொடர்பு & உதவி' ||
    raw === 'தொடர்பு' ||
    raw === 'உதவி மையம்' ||
    raw.includes('phone') ||
    raw.includes('call') ||
    raw.includes('address') ||
    raw.includes('doctor') ||
    raw.includes('clinic') ||
    raw.includes('helpdesk') ||
    raw.includes('whatsapp') ||
    raw.includes('முகவரி') ||
    raw.includes('தொலைபேசி') ||
    raw.includes('மருத்துவர்') ||
    raw.includes('திருநெல்வேலி');

  if (isContactCat) {
    return {
      reply: isTa
        ? 'ரூத்ரா சித்த மருத்துவ உதவி மையம் (திருநெல்வேலி):\n\n- முகவரி: 7/213, எம்.ஜி.ஆர் நகர், வடக்கு அரியநாயகிபுரம் பேட்டை, திருநெல்வேலி, தமிழ்நாடு - 627010.\n- தொலைபேசி எண்கள்: +91 91715 08042 / +91 82201 90029\n- மின்னஞ்சல்: care@ruthramedicos.com\n- சேவை நேரம்: திங்கள் முதல் சனி வரை காலை 9:00 - இரவு 8:00 மணி வரை.\n- வாட்ஸ்அப் உதவி: மருத்துவர் ஆலோசனை மற்றும் ஆர்டர் விபரங்களுக்கு நேரடி வாட்ஸ்அப்பில் தொடர்பு கொள்ளலாம்.'
        : 'Ruthra Siddha Support Desk (Tirunelveli):\n\n- Address: 7/213, MGR Nagar, North Ariyanayagipuram, Petta, Tirunelveli, Tamil Nadu - 627010.\n- Phone Hotlines: +91 91715 08042 / +91 82201 90029\n- Email: care@ruthramedicos.com\n- Operating Hours: Monday to Saturday, 9:00 AM to 8:00 PM IST.\n- WhatsApp Support: Direct consultation and order assistance available.',
      links: [
        { labelEn: 'Go to Contact Page', labelTa: 'தொடர்பு பக்கத்திற்கு செல்ல', url: '/contact' }
      ],
      quickReplies: [
        { labelEn: 'Browse Products', labelTa: 'தயாரிப்புகள்', query: 'Products' },
        { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
        { labelEn: 'Delivery Details', labelTa: 'டெலிவரி விபரம்', query: 'Delivery & Payment' },
        { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
      ]
    };
  }

  // 8. DIRECT PRODUCT LOOKUP (by exact name / slug)
  const productMatch = PRODUCTS.find(p => {
    const n = p.name.toLowerCase();
    const tn = (p.tamilName || '').toLowerCase();
    const sl = p.slug.toLowerCase();
    return raw.includes(n) || (tn && raw.includes(tn)) || raw.includes(sl);
  });

  if (productMatch) {
    const title = isTa ? productMatch.tamilName : productMatch.name;
    const desc = isTa ? productMatch.descriptionTa : productMatch.description;
    const role = isTa ? productMatch.traditionalRoleTa : productMatch.traditionalRole;
    const pack = isTa ? productMatch.packSizeTa : productMatch.packSize;
    const form = isTa ? productMatch.formulationTa : productMatch.formulation;

    return {
      reply: isTa
        ? `${title} பற்றிய விபரம்:\n\n- வகை: ${form} (${pack})\n- விலை: ₹${productMatch.price}\n- பயன்கள்: ${role || desc}\n- விநியோகம்: திருநெல்வேலியிலிருந்து நேரடி விநியோகம் (தமிழ்நாடு முழுவதும் இலவச டெலிவரி).`
        : `Details for ${title}:\n\n- Formulation: ${form} (${pack})\n- Price: ₹${productMatch.price}\n- Traditional Benefits: ${role || desc}\n- Shipping: Direct dispatch from Tirunelveli with Free shipping inside TN.`,
      links: [
        {
          labelEn: `View ${productMatch.name} Page`,
          labelTa: `${productMatch.tamilName || productMatch.name} பக்கம்`,
          url: `/product/${productMatch.slug}`
        },
        { labelEn: 'Browse All Products', labelTa: 'அனைத்து மருந்துகள்', url: '/shop' }
      ],
      quickReplies: [
        { labelEn: 'Active 5+1 Offers', labelTa: '5+1 சலுகைகள்', query: 'Offers & Discounts' },
        { labelEn: 'Delivery Timelines', labelTa: 'டெலிவரி விபரம்', query: 'Delivery & Payment' },
        { labelEn: 'Main Menu', labelTa: 'முதன்மை மெனு', query: 'Main Menu' }
      ]
    };
  }

  // 9. CONCERN / CATEGORY LOOKUP
  for (const [, concernData] of Object.entries(PRODUCT_CONCERN_MAP)) {
    const matchedEn = concernData.enKeywords.some(kw => raw.includes(kw));
    const matchedTa = concernData.taKeywords.some(kw => raw.includes(kw));
    if (matchedEn || matchedTa) {
      return {
        reply: isTa ? concernData.taAnswer : concernData.enAnswer,
        links: [
          {
            labelEn: concernData.linkTitleEn,
            labelTa: concernData.linkTitleTa,
            url: concernData.linkUrl
          },
          { labelEn: 'View All Products', labelTa: 'அனைத்து தயாரிப்புகள்', url: '/shop' }
        ],
        quickReplies: concernData.followUps
      };
    }
  }

  // 10. POLITE FALLBACK (No hallucination, option-driven redirect)
  return {
    reply: isTa
      ? 'நான் ரூத்ரா மெடிசின்ஸ் தயாரிப்புகள், 5+1 சலுகைகள், டெலிவரி, ஆர்டர்கள் மற்றும் உதவி மையம் பற்றிய தகவல்களை வழங்க முடியும். தயவுசெய்து கீழே உள்ள தலைப்புகளில் ஒன்றைத் தேர்ந்தெடுக்கவும்:'
      : 'I can assist you with Ruthra Medicines products, 5+1 offers, delivery timelines, orders, and customer support. Please select one of the topics below:',
    quickReplies: MAIN_CATEGORY_REPLIES
  };
}
