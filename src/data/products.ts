import { Product, ConcernCategory, FormulationCategory, BundleItem } from '@/types/product';

export const PRODUCTS: Product[] = [

  // ==========================================
  // 1. RUTHRA FLAGSHIP PROPRIETARY FORMULATIONS (7 SKUs)
  // ==========================================
  {
    id: 'prod-26',
    name: 'Ruthra Rej-Viyan Pain Oil',
    tamilName: 'ருத்ரா ரெஜ்-வியான் வலி நிவாரண தைலம்',
    slug: 'ruthra-rej-viyan-pain-oil',
    medicalSystem: 'proprietary',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['joint-mobility'],
    price: 200,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Fast-penetrating classical botanical massage oil for rapid relief from neck, shoulder, knee, heel, and lower back pain, muscle spasms, and sprains.',
    shortDescriptionTa: 'கழுத்து, தோள்பட்டை, முழங்கால், குதிகால் மற்றும் இடுப்பு வலி, சுளுக்கு மற்றும் தசை பிடிப்புகளுக்கு உடனடி நிவாரணம் தரும் மூலிகை வலி தைலம்.',
    description: 'Ruthra Rej-Viyan Pain Oil is crafted by slow-cooking anti-inflammatory botanicals including Mudakathan, Vatha Narayana, Nilgiri oil, and Camphor in pure unrefined sesame oil. It delivers deep transdermal penetration to pacify inflamed joint capsules, resolve swelling, relax locked muscle fibers, and restore smooth mobility.',
    descriptionTa: 'ரெஜ்-வியான் வலி தைலம் முடக்கத்தான், வாத நாராயணன், கற்பூரம், தைல இலை எண்ணெய் கொண்டு பாரம்பரிய முறைப்படி காய்ச்சப்படுகிறது. இது மூட்டுகளில் ஆழமாக ஊடுருவி, வீக்கத்தை குறைத்து, கடுமையான வலியை உடனடியாக போக்கும்.',
    traditionalRole: 'Topical analgesic for neck, shoulder, knee, heel, back pain, muscle spasms, and sprains.',
    traditionalRoleTa: 'கழுத்து, தோள்பட்டை, மூட்டு, இடுப்பு, குதிகால் வலி மற்றும் சுளுக்கு நிவாரணம்.',
    badge: 'Top Selling Pain Oil',
    badgeTa: 'முதன்மையான வலி தைலம்',
    image: '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
    images: [
      '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/angle.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-rej-viyan-pain-oil/front.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/angle.jpg',
      '/images/products/ruthra-rej-viyan-pain-oil/back.jpg'
    ],
    ingredients: [
      { name: 'Mudakathan (Balloon Vine)', tamilName: 'முடக்கத்தான்', botanicalName: 'Cardiospermum halicacabum', role: 'Dissolves uric acid crystals and joint stiffness', roleTa: 'மூட்டு பிடிப்பு மற்றும் வாதத்தை போக்கும்', amount: '30%' },
      { name: 'Vathanarayana', tamilName: 'வாத நாராயணன்', botanicalName: 'Delonix elata', role: 'Calms acute neuropathic shooting pain', roleTa: 'நரம்பு குடைச்சலை நீக்கும்', amount: '25%' },
      { name: 'Karpooram (Camphor)', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Promotes rapid micro-vascular absorption and cooling relief', roleTa: 'விரைவாக ஊடுருவி உடனடி நிவாரணம் தரும்', amount: '15%' },
      { name: 'Nilgiri Thailam (Eucalyptus Oil)', tamilName: 'நீலகிரி தைலம்', botanicalName: 'Eucalyptus globulus', role: 'Warming analgesic for tense muscle fibers', roleTa: 'தசை வலிகளை தளர்த்தும்', amount: '15%' },
      { name: 'Nalla Ennai (Pure Sesame Oil Base)', tamilName: 'நல்லெண்ணெய்', botanicalName: 'Sesamum indicum', role: 'Deep penetrating transdermal lipid base', roleTa: 'ஆழமாக ஊடுருவும் தூய நல்லெண்ணெய்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply Generously', titleTa: 'எண்ணெய் தடவவும்', instruction: 'Pour 5-10ml oil on the affected painful joint.', instructionTa: '5-10 மி.லி எண்ணெயை வலி உள்ள இடத்தில் விடவும்.' },
      { step: '02', title: 'Gentle Massage', titleTa: 'மென்மையாக மசாஜ்', instruction: 'Massage gently in circular motions for 5 minutes.', instructionTa: '5 நிமிடம் மென்மையாக வட்ட வடிவில் தேய்க்கவும்.' },
      { step: '03', title: 'Fomentation (Optional)', titleTa: 'ஒத்தடம் (விருப்பப்பட்டால்)', instruction: 'Apply warm fomentation for deeper therapeutic benefit.', instructionTa: 'சிறந்த பலனுக்கு லேசான வெந்நீர் ஒத்தடம் கொடுக்கலாம்.' }
    ],
    dosage: {
      amount: '5ml - 10ml as needed',
      frequency: '2 to 3 times daily',
      timing: 'External application',
      vehicle: 'Direct gentle massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'தினமும் 2-3 முறை',
      timingTa: 'வெளிப்புற பயன்பாடு',
      vehicleTa: 'மென்மையாக தேய்க்கவும்'
    },
    safety: {
      pregnancy: 'Safe for external application on back and limbs.',
      pregnancyTa: 'வெளிப்புறமாக பயன்படுத்த பாதுகாப்பானது.',
      children: 'Safe for children above 4 years for sprains.',
      childrenTa: '4 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு உகந்தது.',
      interactions: 'Can be combined with Sarvanga Vatha Chooranam internally.',
      interactionsTa: 'உள் மருந்துகளுடன் சேர்த்து பயன்படுத்தலாம்.',
      precautions: ['FOR EXTERNAL APPLICATION ONLY. Do not apply on open broken skin.'],
      precautionsTa: ['வெளிப்புற பயன்பாட்டிற்கு மட்டும். திறந்த புண்களில் தடவ வேண்டாம்.']
    },
    storage: {
      conditions: 'Keep bottle tightly capped away from direct heat.',
      conditionsTa: 'நேரடி வெப்பம் படாமல் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How quickly does Rej-Viyan Pain Oil work?',
        questionTa: 'ரெஜ்-வியான் தைலம் எவ்வளவு நேரத்தில் பலன் தரும்?',
        answer: 'Most users experience soothing warmth and pain relief within 10 to 15 minutes of gentle massage.',
        answerTa: 'மசாஜ் செய்த 10 முதல் 15 நிமிடங்களில் வலி குறைந்து சுகமான நிவாரணம் கிடைக்கும்.'
      }
    ],
    searchKeywords: ['rej-viyan', 'pain oil', 'thailam', 'knee pain', 'back pain', 'joint pain', 'muscle spasm', 'sprain'],
    tamilKeywords: ['ரெஜ்-வியான்', 'வலி தைலம்', 'மூட்டு வலி', 'இடுப்பு வலி', 'சுளுக்கு', 'கழுத்து வலி'],
    inStock: true,
    featured: true
  },

  {
    id: 'prod-27',
    name: 'Ruthra Ulcera Oil – The Wound Healer',
    tamilName: 'ருத்ரா அல்சரா புண் ஆற்று தைலம்',
    slug: 'ruthra-ulcera-wound-oil',
    medicalSystem: 'proprietary',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 210,
    originalPrice: 240,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Clinically esteemed topical wound healing oil for venous ulcers, diabetic non-healing ulcers, cuts, bedsores, bruises, trauma wounds, and lacerations.',
    shortDescriptionTa: 'ஆறாத சர்க்கரை புண்கள் (Diabetic Ulcers), நரம்பு புண்கள் (Venous Ulcers), படுக்கை புண்கள் (Bedsores) மற்றும் காயங்களை விரைவாக ஆற்றும் உன்னத தைலம்.',
    description: 'Ruthra Ulcera Oil is processed with potent wound-cleansing (Vrana Shodhana) and tissue-generating (Vrana Ropana) Siddha botanicals. It clears necrotic slough, suppresses bacterial biofilm, stimulates healthy pink granulation tissue, and dramatically accelerates wound closure in chronic diabetic and venous ulcers.',
    descriptionTa: 'அல்சரா புண் ஆற்று தைலம் சர்க்கரை நோயாளிகளுக்கு ஏற்படும் ஆறாத கால் புண்கள், வெட்டுக்காயங்கள், படுக்கை புண்கள் மற்றும் தீக்காயங்களை எவ்வித வடுவும் இன்றி விரைவாக ஆற்றும் மருத்துவ குணம் கொண்டது.',
    traditionalRole: 'Accelerates wound healing for diabetic ulcers, venous stasis ulcers, bedsores, cuts, bruises, and abrasions.',
    traditionalRoleTa: 'சர்க்கரை புண்கள், படுக்கை புண்கள், வெட்டுக்காயங்கள் மற்றும் ஆறாத புண்களை ஆற்றுதல்.',
    badge: 'Clinical Wound Care',
    badgeTa: 'ஆறாத புண் நிவாரணம்',
    image: '/images/products/ruthra-ulcera-wound-oil/front.jpg',
    images: [
      '/images/products/ruthra-ulcera-wound-oil/front.jpg',
      '/images/products/ruthra-ulcera-wound-oil/angle.jpg',
      '/images/products/ruthra-ulcera-wound-oil/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ulcera-wound-oil/front.jpg',
      '/images/products/ruthra-ulcera-wound-oil/angle.jpg',
      '/images/products/ruthra-ulcera-wound-oil/back.jpg'
    ],
    ingredients: [
      { name: 'Kuppaimeni', tamilName: 'குப்பைமேனி', botanicalName: 'Acalypha indica', role: 'Potent antimicrobial and wound purifier', roleTa: 'கிருமி நாசினி மற்றும் புண் சுத்திகரிப்பு', amount: '35%' },
      { name: 'Kasthuri Manjal (Wild Turmeric)', tamilName: 'கஸ்தூரி மஞ்சள்', botanicalName: 'Curcuma aromatica', role: 'Accelerates granulation and tissue regeneration', roleTa: 'புதிய திசுக்களை உருவாக்கி புண்ணை ஆற்றும்', amount: '25%' },
      { name: 'Vembu Ennai (Pure Neem Oil)', tamilName: 'வேப்பெண்ணெய்', botanicalName: 'Azadirachta indica', role: 'Suppresses bacterial biofilms and fungal infection', roleTa: 'புற்று மற்றும் பாக்டீரியா தொற்று தடுப்பு', amount: '20%' },
      { name: 'Coconut Oil Base', tamilName: 'தூய தேங்காய் எண்ணெய்', botanicalName: 'Cocos nucifera', role: 'Cooling emollient base for non-stick dressing', roleTa: 'குளிர்ச்சி தந்து புண்ணை மென்மையாக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Cleanse Wound', titleTa: 'புண்ணை சுத்தம் செய்யவும்', instruction: 'Clean the wound with sterile saline water.', instructionTa: 'புண்ணை சுத்தமான நீரால் கழுவி துடைக்கவும்.' },
      { step: '02', title: 'Apply Oil', titleTa: 'எண்ணெய் தடவவும்', instruction: 'Apply oil gently using sterile gauze or clean cotton.', instructionTa: 'சுத்தமான பஞ்சு அல்லது காஸ் துணியில் நனைத்து தடவவும்.' },
      { step: '03', title: 'Dress Gently', titleTa: 'டிரெஸ்ஸிங் செய்யவும்', instruction: 'Bandage lightly or leave exposed as advised twice daily.', instructionTa: 'லேசாக கட்டுப்போடவும்; தினமும் இருவேளை மாற்றவும்.' }
    ],
    dosage: {
      amount: 'A few drops to coat the wound surface',
      frequency: 'Twice daily',
      timing: 'External dressing',
      vehicle: 'Direct topical application / sterile gauze',
      amountTa: 'தேவைக்கேற்ப சில துளிகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'வெளிப்புற டிரெஸ்ஸிங்',
      vehicleTa: 'சுத்தமான பஞ்சால் தடவவும்'
    },
    safety: {
      pregnancy: 'Safe for external application.',
      pregnancyTa: 'வெளிப்புற பயன்பாட்டிற்கு முற்றிலும் பாதுகாப்பானது.',
      children: 'Safe for minor cuts and scrapes in children.',
      childrenTa: 'குழந்தைகளின் சிராய்ப்பு மற்றும் காயங்களுக்கு உகந்தது.',
      interactions: 'Can be used alongside oral antibiotics if prescribed.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Maintain clean sterile dressing practices for diabetic ulcers.'],
      precautionsTa: ['சர்க்கரை புண்களை சுத்தமாக பராமரிக்கவும்.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool, dark place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is it effective for non-healing chronic diabetic foot ulcers?',
        questionTa: 'சர்க்கரை நோயாளிகளின் ஆறாத கால் புண்களுக்கு இது பலனளிக்குமா?',
        answer: 'Yes, Ulcera Oil is specially formulated for chronic, sluggish ulcers by stimulating rapid healthy granulation.',
        answerTa: 'ஆம், சர்க்கரை நோயாளிகளுக்கு ஏற்படும் ஆறாத நாள்பட்ட புண்களை ஆற்ற பிரத்யேகமாக தயாரிக்கப்பட்டது.'
      }
    ],
    searchKeywords: ['ulcera oil', 'wound healer', 'diabetic ulcer', 'venous ulcer', 'bedsores', 'cuts', 'healing oil'],
    tamilKeywords: ['அல்சரா', 'புண் ஆற்று தைலம்', 'சர்க்கரை புண்', 'படுக்கை புண்', 'காயம்', 'வெட்டுக்காயம்'],
    inStock: true,
    featured: true
  },

  {
    id: 'prod-28',
    name: 'Ruthra Narshika Hair Oil',
    tamilName: 'ருத்ரா நார்ஷிகா மூலிகை கூந்தல் தைலம்',
    slug: 'ruthra-narshika-hair-oil',
    medicalSystem: 'proprietary',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 240,
    originalPrice: 280,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Nutrient-rich traditional botanical hair oil that eradicates stubborn dandruff, controls severe hair fall, strengthens roots, and stimulates dense hair growth.',
    shortDescriptionTa: 'பொடுகு தொல்லையை முழுமையாக நீக்கி, முடி உதிர்வை தடுத்து, வேர்களை பலப்படுத்தி அடர்த்தியான கூந்தல் வளர்ச்சியை தரும் மூலிகை தைலம்.',
    description: 'Ruthra Narshika Hair Oil is processed with 15+ native botanical extracts including Bringaraja (Karisalankanni), Amla (Nellikkai), Henna, Poduthalai, and Vetiver infused into unrefined cold-pressed coconut oil. It cools an overheated scalp, nourishes micro-follicles, stops premature greying, and leaves hair lustrous and thick.',
    descriptionTa: 'நார்ஷிகா கூந்தல் தைலம் கரிசலாங்கண்ணி, நெல்லிக்காய், பொடுதலை, மருதாணி, வெட்டிவேர் உள்ளிட்ட மூலிகைகளைக் கொண்டு தேங்காய் எண்ணெயில் காய்ச்சப்படுகிறது. இது தலைச்சூட்டை தணித்து, பொடுகை போக்கி, முடி உதிர்வை நிறுத்தி அடர்த்தியாக வளரச் செய்கிறது.',
    traditionalRole: 'Controls dandruff, reduces hair fall, stimulates micro-follicles, and keeps scalp deeply nourished.',
    traditionalRoleTa: 'பொடுகு கட்டுப்பாடு, முடி உதிர்வு தடுப்பு, கூந்தல் வேர் பலம் மற்றும் அடர்த்தி.',
    badge: 'Herbal Hair Regrowth',
    badgeTa: 'மூலிகை கூந்தல் வளர்ச்சி',
    image: '/images/products/ruthra-narshika-hair-oil/front.jpg',
    images: [
      '/images/products/ruthra-narshika-hair-oil/front.jpg',
      '/images/products/ruthra-narshika-hair-oil/angle.jpg',
      '/images/products/ruthra-narshika-hair-oil/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-narshika-hair-oil/front.jpg',
      '/images/products/ruthra-narshika-hair-oil/angle.jpg',
      '/images/products/ruthra-narshika-hair-oil/back.jpg'
    ],
    ingredients: [
      { name: 'Karisalanganni (Bringaraja)', tamilName: 'கரிசலாங்கண்ணி', botanicalName: 'Eclipta prostrata', role: 'Reactivates dormant hair follicles and darkens pigment', roleTa: 'கூந்தல் வேர்களை தூண்டி கருமையை தரும்', amount: '30%' },
      { name: 'Poduthalai', tamilName: 'பொடுதலை', botanicalName: 'Phyla nodiflora', role: 'Sovereign anti-dandruff and scalp antifungal herb', roleTa: 'பொடுகு மற்றும் தலையில் அரிப்பை நீக்கும்', amount: '25%' },
      { name: 'Nellikkai (Amla)', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Vitamin C antioxidant booster for follicle strength', roleTa: 'வைட்டமின் சி மற்றும் கூந்தல் வேர் ஊட்டச்சத்து', amount: '20%' },
      { name: 'Vettiver & Kasthuri Manjal', tamilName: 'வெட்டிவேர் & கஸ்தூரி மஞ்சள்', botanicalName: 'Aromatics', role: 'Scalp cooling and natural fragrance', roleTa: 'தலை குளிர்ச்சி மற்றும் நறுமணம்', amount: '15%' },
      { name: 'Marakakku Coconut Oil Base', tamilName: 'மரச்செக்கு தேங்காய் எண்ணெய்', botanicalName: 'Cocos nucifera', role: 'Cold-pressed virgin lipid base', roleTa: 'மரச்செக்கு தூய தேங்காய் எண்ணெய்', amount: '10%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply to Scalp', titleTa: 'மண்டையோட்டில் வைக்கவும்', instruction: 'Part hair and apply 5-10ml oil directly onto scalp roots.', instructionTa: 'முடியை வகிடு எடுத்து 5-10 மி.லி எண்ணெயை வேர்களில் வைக்கவும்.' },
      { step: '02', title: 'Gentle Massage', titleTa: 'மென்மையாக மசாஜ்', instruction: 'Massage gently with fingertips for 5 minutes.', instructionTa: 'விரல் நுனிகளால் 5 நிமிடம் மென்மையாக மசாஜ் செய்யவும்.' },
      { step: '03', title: 'Leave on / Wash', titleTa: 'ஊற வைத்து குளிக்கவும்', instruction: 'Leave on overnight or wash after 1 hour with Shigakai Powder.', instructionTa: 'இரவு முழுவதும் வைக்கலாம் அல்லது 1 மணி நேரம் கழித்து சிகைக்காய் போட்டு குளிக்கவும்.' }
    ],
    dosage: {
      amount: '5ml - 10ml per application',
      frequency: 'Daily or 3 times a week',
      timing: 'Scalp application',
      vehicle: 'Direct scalp massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'தினமும் அல்லது வாரம் 3 முறை',
      timingTa: 'மண்டையோடு மசாஜ்',
      vehicleTa: 'விரல்களால் தேய்க்கவும்'
    },
    safety: {
      pregnancy: 'Completely safe during pregnancy and lactation.',
      pregnancyTa: 'முற்றிலும் பாதுகாப்பானது.',
      children: 'Safe for children above 3 years.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பாதுகாப்பானது.',
      interactions: 'Pair with Ruthra Shigakai Powder for best natural cleansing.',
      interactionsTa: 'ருத்ராவின் சிகைக்காய் பொடியுடன் பயன்படுத்த சிறந்த பலன் தரும்.',
      precautions: ['Natural herbal oil with no mineral oils or synthetic fragrances.'],
      precautionsTa: ['மினரல் ஆயில் அல்லது செயற்கை நறுமணம் சேர்க்கப்படாதது.']
    },
    storage: {
      conditions: 'Keep in a cool place tightly sealed.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does it cause a cold when applied daily?',
        questionTa: 'தினமும் தேய்த்தால் சளி பிடிக்குமா?',
        answer: 'No, it is balanced with warming spices like Black Pepper and Vetiver to prevent excess phlegm while keeping the scalp cool.',
        answerTa: 'இல்லை, சமச்சீரான மூலிகைகள் உள்ளதால் சளி பிடிக்காமல் தலைச்சூட்டை மட்டும் தணிக்கும்.'
      }
    ],
    searchKeywords: ['narshika', 'hair oil', 'hair fall', 'dandruff', 'bringaraja', 'amla', 'hair growth'],
    tamilKeywords: ['நார்ஷிகா', 'கூந்தல் தைலம்', 'முடி உதிர்வு', 'பொடுகு', 'கரிசலாங்கண்ணி', 'கூந்தல் வளர்ச்சி'],
    inStock: true,
    featured: true
  },

  {
    id: 'prod-29',
    name: 'Ruthra Nalpamaradi Taila',
    tamilName: 'ருத்ரா நால்பாமராதி தைலம்',
    slug: 'ruthra-nalpamaradi-taila',
    medicalSystem: 'proprietary',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    concerns: ['skin-hair'],
    price: 180,
    originalPrice: 210,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Golden classical Ayurvedic & Siddha radiance and skin therapy oil for eczema, erysipelas, itching, boils, carbuncles, hyperpigmentation, and bridal Abhyangam.',
    shortDescriptionTa: 'தோல் நோய்கள், அரிப்பு, தடிப்பு, கட்டிகள், மேனி கருமை நீக்கம் மற்றும் பொலிவான சருமத்திற்கு பாரம்பரிய நால்பாமராதி தைலம்.',
    description: 'Ruthra Nalpamaradi Taila is brewed from the Four Sacred Ficus Barks (Nalpamara: Athi, Ithi, Arayal, Peral) combined with pure Turmeric (Manjal) and cooling Triphala. Revered as the sovereign skin beautifier and dermatological healer, it clears tanning, cures skin itching and boils, and restores luminous complexion.',
    descriptionTa: 'நால்பாமராதி தைலம் அத்தி, இத்தி, அரசு, ஆல் ஆகிய நான்கு மரப்பட்டைகள் மற்றும் கஸ்தூரி மஞ்சள் கொண்டு காய்ச்சப்படுகிறது. இது தோல் அரிப்பு, படர்தாமரை, தேமல், கரும்புள்ளிகளை போக்கி சருமத்திற்கு இயற்கை பொலிவையும் பளபளப்பையும் தருகிறது.',
    traditionalRole: 'Addresses eczema, erysipelas, itching, boils, carbuncles, hyperpigmentation, and full body Abhyangam massage.',
    traditionalRoleTa: 'தோல் நோய்கள், அரிப்பு, தேமல், கரும்புள்ளிகள் நீக்கம் மற்றும் பொலிவான சருமம்.',
    badge: 'Radiance & Skin Therapy',
    badgeTa: 'சரும பொலிவு & தேமல் நீக்கம்',
    image: '/images/products/ruthra-nalpamaradi-taila/front.jpg',
    images: [
      '/images/products/ruthra-nalpamaradi-taila/front.jpg',
      '/images/products/ruthra-nalpamaradi-taila/angle.jpg',
      '/images/products/ruthra-nalpamaradi-taila/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nalpamaradi-taila/front.jpg',
      '/images/products/ruthra-nalpamaradi-taila/angle.jpg',
      '/images/products/ruthra-nalpamaradi-taila/back.jpg'
    ],
    ingredients: [
      { name: 'Nalpamara (Four Sacred Ficus Barks)', tamilName: 'நால்பாமரம் (அத்தி, இத்தி, அரசு, ஆல்)', botanicalName: 'Ficus Tree Complex', role: 'Astringent and sovereign skin tone clarifier', roleTa: 'தோல் சுருக்கம் மற்றும் நோய்களை போக்கும்', amount: '40%' },
      { name: 'Manjal (Pure Turmeric)', tamilName: 'மஞ்சள்', botanicalName: 'Curcuma longa', role: 'Natural antibacterial and complexion enhancer', roleTa: 'கிருமி நாசினி மற்றும் மேனி பொலிவு', amount: '25%' },
      { name: 'Thiripala Complex', tamilName: 'திரிபலா', botanicalName: 'Triphala Blend', role: 'Detoxifies skin pores and soothes boils', roleTa: 'தோல் துவாரங்களை சுத்திகரிக்கும்', amount: '20%' },
      { name: 'Sesame & Coconut Oil Base', tamilName: 'எண்ணெய் கலவை', botanicalName: 'Lipid Base', role: 'Deep transdermal nourishment', roleTa: 'தோலுக்கு மென்மை தரும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Apply on Skin', titleTa: 'சருமத்தில் தடவவும்', instruction: 'Take 5-10ml oil and massage over face and body.', instructionTa: '5-10 மி.லி எண்ணெயை முகம் மற்றும் உடலில் தடவி மசாஜ் செய்யவும்.' },
      { step: '02', title: 'Leave on for 30 mins', titleTa: '30 நிமிடம் ஊற வைக்கவும்', instruction: 'Allow the golden botanicals to penetrate for 30 minutes.', instructionTa: '30 நிமிடம் தோலில் ஊற விடவும்.' },
      { step: '03', title: 'Wash with Nalangu Maavu', titleTa: 'நலங்கு மாவு போட்டு குளிக்கவும்', instruction: 'Wash off with warm water and Ruthra Nalangu Maavu Powder.', instructionTa: 'ருத்ராவின் நலங்கு மாவு தேய்த்து வெதுவெதுப்பான நீரில் குளிக்கவும்.' }
    ],
    dosage: {
      amount: '5ml - 10ml per application',
      frequency: 'Daily or before bath',
      timing: 'Pre-bath body massage',
      vehicle: 'Direct skin massage',
      amountTa: '5 - 10 மி.லி',
      frequencyTa: 'தினமும் குளிப்பதற்கு முன்',
      timingTa: 'முழு உடல் மசாஜ்',
      vehicleTa: 'மென்மையாக தேய்க்கவும்'
    },
    safety: {
      pregnancy: 'Completely safe during pregnancy and for newborn baby massage.',
      pregnancyTa: 'கர்ப்பிணிகள் மற்றும் பச்சிளம் குழந்தைகளுக்கு மிகவும் பாதுகாப்பானது.',
      children: 'Highly recommended for infant skin glow and protection.',
      childrenTa: 'குழந்தைகளுக்கு மிகவும் உகந்தது.',
      interactions: 'Wash with natural herbal powder like Nalangu Maavu rather than harsh chemical soaps.',
      interactionsTa: 'நலங்கு மாவு கொண்டு குளிப்பது சிறந்த பலன் தரும்.',
      precautions: ['Natural turmeric may stain white clothes temporarily.'],
      precautionsTa: ['மஞ்சள் உள்ளதால் வெள்ளை ஆடைகளில் படாமல் பார்த்துக்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is Nalpamaradi Taila good for bridal glow and hyperpigmentation?',
        questionTa: 'மணப்பெண் பொலிவு மற்றும் கரும்புள்ளிகளுக்கு இது நல்லதா?',
        answer: 'Yes, it is the most famous classical formula for removing sun tan, blemishes, and achieving a golden glowing complexion.',
        answerTa: 'ஆம், சூரிய ஒளி கருமை, கரும்புள்ளிகளை நீக்கி மேனிக்கு பொலிவு தரும் தலைசிறந்த தைலம்.'
      }
    ],
    searchKeywords: ['nalpamaradi', 'taila', 'skin glow', 'eczema', 'itching', 'turmeric oil', 'bridal massage'],
    tamilKeywords: ['நால்பாமராதி', 'தைலம்', 'மேனி பொலிவு', 'கரும்புள்ளிகள்', 'தோல் நோய்', 'அரிப்பு', 'மஞ்சள் தைலம்'],
    inStock: true,
    featured: true
  },

  {
    id: 'prod-30',
    name: 'Ruthra Sinocof Cough Syrup',
    tamilName: 'ருத்ரா சினோகாஃப் இருமல் சிரப்',
    slug: 'ruthra-sinocof-cough-syrup',
    medicalSystem: 'proprietary',
    formulation: 'Syrups',
    formulationTa: 'சிரப்',
    concerns: ['respiratory'],
    price: 96,
    originalPrice: 110,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: '100% Non-drowsy herbal cough elixir for common cold, dry, wet, and allergic cough, chest congestion, bronchitis, and throat irritation.',
    shortDescriptionTa: 'தூக்க கலக்கம் இல்லாத (Non-Drowsy) வறட்டு இருமல், சளி இருமல், தொண்டை கரகரப்பு, நெஞ்சு சளி மற்றும் ஆஸ்துமாவுக்கான இயற்கை இருமல் சிரப்.',
    description: 'Ruthra Sinocof Cough Syrup brings together Adathodai, Thulasi, Kantakari, Thippili, and Licorice in a soothing herbal syrup base. It quickly soothes tickling throat raw sensations, liquefies tough bronchial phlegm, relieves spasm-induced coughing bouts, and keeps airways completely open without causing daytime sleepiness.',
    descriptionTa: 'சினோகாஃப் இருமல் சிரப் ஆடாதோடை, துளசி, கண்டங்கத்திரி, திப்பிலி மற்றும் அதிமதுரம் சேர்ந்த உன்னத கலவை. இது தொண்டை கரகரப்பை போக்கி, நெஞ்சு சளியை இளக்கி வெளியேற்றும். தூக்க கலக்கம் ஏற்படுத்தாது.',
    traditionalRole: 'Relieves common cold, dry, wet, allergic cough, chest congestion, and bronchitis with zero drowsiness.',
    traditionalRoleTa: 'வறட்டு இருமல், சளி இருமல், தொண்டை கரகரப்பு மற்றும் ஆஸ்துமா நிவாரணம்.',
    badge: 'Non-Drowsy Cough Care',
    badgeTa: 'தூக்க கலக்கமில்லாத இருமல் சிரப்',
    image: '/images/products/ruthra-sinocof-cough-syrup/front.jpg',
    images: [
      '/images/products/ruthra-sinocof-cough-syrup/front.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/angle.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sinocof-cough-syrup/front.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/angle.jpg',
      '/images/products/ruthra-sinocof-cough-syrup/back.jpg'
    ],
    ingredients: [
      { name: 'Adathodai (Vasaka)', tamilName: 'ஆடாதோடை', botanicalName: 'Justicia adhatoda', role: 'Liquefies tenacious bronchial sputum', roleTa: 'நெஞ்சு சளியை இளக்கும் முதன்மை மூலிகை', amount: '30%' },
      { name: 'Thulasi (Holy Basil)', tamilName: 'துளசி', botanicalName: 'Ocimum sanctum', role: 'Antiviral, antibacterial, and immune support', roleTa: 'கிருமி நாசினி மற்றும் நோய் எதிர்ப்பு', amount: '25%' },
      { name: 'Athimathuram (Liquorice)', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Coats and soothes raw, inflamed throat membranes', roleTa: 'தொண்டை புண்களை ஆற்றும் இதமான மூலிகை', amount: '25%' },
      { name: 'Kantakari & Thippili', tamilName: 'கண்டங்கத்திரி & திப்பிலி', botanicalName: 'Herbal Bio-actives', role: 'Bronchodilator and eases breathing', roleTa: 'சுவாச குழாயை தளர்த்தி எளிதாக மூச்சு விட உதவும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Dose Measurement', titleTa: 'அளவு', instruction: 'Take 5ml to 10ml (1 to 2 tsp).', instructionTa: '5 முதல் 10 மி.லி (1-2 ஸ்பூன்) எடுக்கவும்.' },
      { step: '02', title: 'Sip Directly', titleTa: 'நேரடியாக பருகவும்', instruction: 'Sip slowly, preferably with a little warm water.', instructionTa: 'மெதுவாக பருகவும்; வெதுவெதுப்பான நீருடன் அருந்தலாம்.' },
      { step: '03', title: 'Frequency', titleTa: 'வேளை', instruction: 'Take 2 to 3 times daily after food.', instructionTa: 'காலை, மதியம், இரவு உணவுக்குப் பின் பருகவும்.' }
    ],
    dosage: {
      amount: 'Adults: 10ml; Children: 5ml',
      frequency: '2 to 3 times daily',
      timing: 'Post-prandial',
      vehicle: 'Direct or with warm water',
      amountTa: 'பெரியவர்களுக்கு 10 மி.லி; சிறார்களுக்கு 5 மி.லி',
      frequencyTa: 'தினமும் 2-3 வேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'நேரடியாக அல்லது வெதுவெதுப்பான நீருடன்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Highly safe and tasty for children above 2 years.',
      childrenTa: '2 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு மிகவும் பாதுகாப்பானது.',
      interactions: 'Safe with all therapies.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Non-drowsy, alcohol-free, and non-habit forming.'],
      precautionsTa: ['தூக்க கலக்கமோ ஆல்கஹாலோ இல்லாதது.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool place away from sunlight.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does Sinocof cause drowsiness or dizziness?',
        questionTa: 'சினோகாஃப் சிரப் குடித்தால் தூக்கம் வருமா?',
        answer: 'No! It is 100% herbal, alcohol-free, and completely non-drowsy, making it safe for working adults and drivers.',
        answerTa: 'இல்லை! இது 100% தூக்க கலக்கம் இல்லாத இயற்கை மூலிகை சிரப்.'
      }
    ],
    searchKeywords: ['sinocof', 'cough syrup', 'cold', 'cough', 'asthma', 'bronchitis', 'non-drowsy', 'adathodai', 'thulasi'],
    tamilKeywords: ['சினோகாஃப்', 'இருமல் சிரப்', 'சளி', 'இருமல்', 'ஆஸ்துமா', 'ஆடாதோடை', 'துளசி'],
    inStock: true,
    featured: true
  },

  {
    id: 'prod-31',
    name: 'Ruthra Ramabana Kashayam',
    tamilName: 'ருத்ரா ராமபாண திரவ கஷாயம்',
    slug: 'ruthra-ramabana-kashayam',
    medicalSystem: 'proprietary',
    formulation: 'Syrup & Kashayam',
    formulationTa: 'திரவ கஷாயம்',
    concerns: ['respiratory'],
    price: 240,
    originalPrice: 280,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Potent liquid kashayam for all acute and infectious fevers, reducing pyrexia symptoms, body ache, eye burning, elevated WBC, and restoring low platelet counts.',
    shortDescriptionTa: 'அனைத்து வகை விஷக் காய்ச்சல், குளிர் காய்ச்சல், உடல் வலி, கண் எரிச்சல் மற்றும் குறைந்த இரத்த தட்டணுக்களை (Platelets) விரைவாக உயர்த்தும் திரவ கஷாயம்.',
    description: 'Ruthra Ramabana Kashayam is a clinical liquid decoction containing Nilavembu, Papaya leaf extract, Seenthil (Guduchi), Vettiver, and Peiperatti. Proven to rapidly pacify infectious fevers, ease heavy limb and joint pain, normalize elevated white blood cell counts, and naturally elevate declining platelet levels in dengue and viral infections.',
    descriptionTa: 'ராமபாண திரவ கஷாயம் நிலவேம்பு, பப்பாளி இலை சாறு, சீந்தில், வெட்டிவேர் மற்றும் பேய்புடல் உள்ளிட்ட மூலிகைகளால் காய்ச்சப்படுகிறது. இது விஷக்காய்ச்சல், டெங்கு, சிக்குன்குனியா போன்ற நோய்களில் குறையும் இரத்த தட்டணுக்களை (Platelets) விரைவாக உயர்த்தும்.',
    traditionalRole: 'Reduces high fever, bodily burning sensation, restores low platelet counts, and speeds convalescence.',
    traditionalRoleTa: 'காய்ச்சல் நிவாரணம், தட்டணுக்கள் உயர்வு (Platelet Booster) மற்றும் உடல் சோர்வு நீக்கம்.',
    badge: 'Clinical Fever & Platelet Care',
    badgeTa: 'காய்ச்சல் & தட்டணுக்கள் உயர்வு',
    image: '/images/products/ruthra-ramabana-kashayam/front.jpg',
    images: [
      '/images/products/ruthra-ramabana-kashayam/front.jpg',
      '/images/products/ruthra-ramabana-kashayam/angle.jpg',
      '/images/products/ruthra-ramabana-kashayam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ramabana-kashayam/front.jpg',
      '/images/products/ruthra-ramabana-kashayam/angle.jpg',
      '/images/products/ruthra-ramabana-kashayam/back.jpg'
    ],
    ingredients: [
      { name: 'Nilavembu (Kalmegh)', tamilName: 'நிலவேம்பு', botanicalName: 'Andrographis paniculata', role: 'Broad-spectrum antiviral and antipyretic', roleTa: 'காய்ச்சலை கட்டுப்படுத்தும் முதன்மை மூலிகை', amount: '30%' },
      { name: 'Papali Ilai (Papaya Leaf)', tamilName: 'பப்பாளி இலை சாறு', botanicalName: 'Carica papaya', role: 'Stimulates thrombopoiesis and elevates platelet counts', roleTa: 'இரத்த தட்டணுக்களை (Platelets) அதிகரிக்கும்', amount: '25%' },
      { name: 'Seenthil (Guduchi / Giloy)', tamilName: 'சீந்தில் கொடி', botanicalName: 'Tinospora cordifolia', role: 'Immunomodulator and cellular vitality protector', roleTa: 'நோய் எதிர்ப்பு சக்தியை பலப்படுத்தும்', amount: '25%' },
      { name: 'Vettiver & Sandanam Base', tamilName: 'வெட்டிவேர் & சந்தனம்', botanicalName: 'Cooling Botanicals', role: 'Calms internal morbid heat and burning sensation', roleTa: 'உடல் சூடு மற்றும் கண் எரிச்சலை தணிக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Measure Dosage', titleTa: 'அளவு', instruction: 'Take 10ml to 15ml decoction.', instructionTa: '10 முதல் 15 மி.லி எடுக்கவும்.' },
      { step: '02', title: 'Dilute with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Mix with 30ml warm water.', instructionTa: '30 மி.லி வெதுவெதுப்பான நீரில் கலந்து பருகவும்.' },
      { step: '03', title: 'Take Post Meals', titleTa: 'உணவுக்கு பின்', instruction: 'Take twice or thrice daily before or after food as needed.', instructionTa: 'தினமும் 2-3 வேளை பருகவும்.' }
    ],
    dosage: {
      amount: 'Adults: 15ml; Children: 5ml - 7.5ml',
      frequency: '2 to 3 times daily',
      timing: 'Pre/Post meal',
      vehicle: 'Diluted with equal warm water',
      amountTa: 'பெரியவர்களுக்கு 15 மி.லி; சிறார்களுக்கு 5 - 7.5 மி.லி',
      frequencyTa: 'தினமும் 2-3 முறை',
      timingTa: 'உணவுக்கு முன் அல்லது பின்',
      vehicleTa: 'சம அளவு வெதுவெதுப்பான நீரில் கலந்து'
    },
    safety: {
      pregnancy: 'Physician guidance advised during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Safe in pediatric doses for viral fevers.',
      childrenTa: 'குழந்தைகளுக்கு காய்ச்சலின் போது மருத்துவர் ஆலோசனைப்படி வழங்கலாம்.',
      interactions: 'Can be taken alongside paracetamol with a 1-hour interval.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணிநேர இடைவெளியில் உட்கொள்ளலாம்.',
      precautions: ['Check CBC platelet count periodically in viral fevers.'],
      precautionsTa: ['காய்ச்சல் உள்ள போது தட்டணுக்கள் பரிசோதனை செய்யவும்.']
    },
    storage: {
      conditions: 'Store in a cool dry place away from heat.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does Ramabana Kashayam help increase low platelets in dengue?',
        questionTa: 'டெங்கு காய்ச்சலில் குறையும் பிளேட்லெட்டுகளை இது அதிகரிக்குமா?',
        answer: 'Yes, clinical extracts of Carica papaya leaf and Nilavembu act synergistically to boost platelet counts naturally.',
        answerTa: 'ஆம், பப்பாளி இலை மற்றும் நிலவேம்பு சாறு இரத்த தட்டணுக்களை விரைவாக உயர்த்த பெரிதும் உதவும்.'
      }
    ],
    searchKeywords: ['ramabana kashayam', 'fever', 'platelets', 'dengue', 'nilavembu', 'papaya leaf', 'viral fever'],
    tamilKeywords: ['ராமபாண கஷாயம்', 'காய்ச்சல்', 'பிளேட்லெட்', 'டெங்கு', 'நிலவேம்பு', 'பப்பாளி இலை'],
    inStock: true,
    featured: true
  },

  {
    id: 'prod-32',
    name: 'Ruthra Esy-swas Drops',
    tamilName: 'ருத்ரா ஈஸி-ஸ்வாஸ் சொட்டு மருந்து',
    slug: 'ruthra-esy-swas-drops',
    medicalSystem: 'proprietary',
    formulation: 'Drops',
    formulationTa: 'சொட்டு மருந்து',
    concerns: ['respiratory'],
    price: 198,
    originalPrice: 220,
    packSize: '50ml',
    packSizeTa: '50 மி.லி',
    shortDescription: 'High-potency aromatic steam inhalation drops & chest rub for instant relief from blocked nose, sinus congestion, wheezing, and asthma.',
    shortDescriptionTa: 'மூக்கடைப்பு, சைனஸ் பாரம், ஆஸ்துமா, வீசிங் மற்றும் கடுமையான சளி தொல்லையிலிருந்து உடனடியாக நிவாரணம் தரும் ஆவி பிடிக்கும் மூலிகை சொட்டு மருந்து.',
    description: 'Ruthra Esy-swas Drops is a therapeutic aromatic botanical formulation composed of Nilgiri oil (Eucalyptus), Pudina Sathuva (Menthol crystals), Karpooram (Camphor), and Ajwain extracts. Just 3-5 drops in boiling water releases penetrating vapors that immediately unblock congested sinus cavities, dissolve upper respiratory phlegm, and restore free breathing.',
    descriptionTa: 'ஈஸி-ஸ்வாஸ் சொட்டு மருந்து நீலகிரி தைலம், புதினா உப்பு, பச்சை கற்பூரம் மற்றும் ஓம திரவம் சேர்ந்த சக்திவாய்ந்த மருந்து. சுடுநீரில் சில துளிகள் விட்டு ஆவி பிடித்தால் அடைத்த மூக்கு உடனடியாக திறந்து சுவாசப்பாதை சுத்தமாகும்.',
    traditionalRole: 'Aromatic steam inhalation & rubefacient for nasal block, sinusitis, wheezing, COPD, and head heaviness.',
    traditionalRoleTa: 'மூக்கடைப்பு, சைனஸ் தலைபாரம், ஆஸ்துமா மற்றும் மூச்சுத்திணறல் நிவாரணம்.',
    badge: 'Instant Sinus Relief',
    badgeTa: 'உடனடி சைனஸ் நிவாரணம்',
    image: '/images/products/ruthra-esy-swas-drops/front.jpg',
    images: [
      '/images/products/ruthra-esy-swas-drops/front.jpg',
      '/images/products/ruthra-esy-swas-drops/angle.jpg',
      '/images/products/ruthra-esy-swas-drops/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-esy-swas-drops/front.jpg',
      '/images/products/ruthra-esy-swas-drops/angle.jpg',
      '/images/products/ruthra-esy-swas-drops/back.jpg'
    ],
    ingredients: [
      { name: 'Nilgiri Thailam (Pure Eucalyptus Oil)', tamilName: 'நீலகிரி தைலம்', botanicalName: 'Eucalyptus globulus', role: 'Potent decongestant and bronchodilator', roleTa: 'மூக்கடைப்பை நீக்கி சுவாசத்தை சீராக்கும்', amount: '35%' },
      { name: 'Pudina Sathuva (Menthol Crystals)', tamilName: 'புதினா உப்பு', botanicalName: 'Mentha piperita', role: 'Cooling airflow enhancer and opens nasal passages', roleTa: 'குளிர்ச்சியான தடையற்ற சுவாசத்தை தரும்', amount: '25%' },
      { name: 'Karpooram (Purified Camphor)', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Soothes sinus inflammation and head heaviness', roleTa: 'தலைபாரத்தை போக்கும் கற்பூரம்', amount: '25%' },
      { name: 'Omam (Ajwain Extract)', tamilName: 'ஓம திரவம்', botanicalName: 'Trachyspermum ammi', role: 'Antispasmodic for wheezing and tight chest', roleTa: 'நெஞ்சு இறுக்கத்தை தளர்த்தும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Steam Inhalation', titleTa: 'ஆவி பிடித்தல்', instruction: 'Add 3-5 drops to a bowl of steaming hot water.', instructionTa: 'கொதிக்கும் வெந்நீரில் 3 முதல் 5 துளிகள் விடவும்.' },
      { step: '02', title: 'Inhale Deeply', titleTa: 'ஆழமாக சுவாசிக்கவும்', instruction: 'Inhale vapors deeply for 5-10 minutes with eyes closed.', instructionTa: 'கண்களை மூடிக்கொண்டு 5-10 நிமிடங்கள் ஆழமாக சுவாசிக்கவும்.' },
      { step: '03', title: 'Topical Rub (Optional)', titleTa: 'லேசாக தடவவும்', instruction: 'Can also apply 1-2 drops directly onto chest and throat.', instructionTa: '1-2 துளிகள் மார்பு மற்றும் தொண்டையில் லேசாக தடவலாம்.' }
    ],
    dosage: {
      amount: '3 to 5 drops per inhalation session',
      frequency: '2 to 3 times daily',
      timing: 'As needed for congestion',
      vehicle: 'Boiling steam water or direct topical smear',
      amountTa: '3 முதல் 5 துளிகள்',
      frequencyTa: 'தினமும் 2-3 முறை',
      timingTa: 'தேவைப்படும் போது',
      vehicleTa: 'ஆவி பிடிக்க சுடுநீரில் அல்லது மார்பில் தடவ'
    },
    safety: {
      pregnancy: 'Completely safe for steam inhalation.',
      pregnancyTa: 'ஆவி பிடிக்க முற்றிலும் பாதுகாப்பானது.',
      children: 'Safe for children above 3 years under parental supervision.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பெரியவர்கள் முன்னிலையில் கொடுக்கலாம்.',
      interactions: 'Safe with all internal oral medications.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Avoid direct contact with eyes.'],
      precautionsTa: ['கண்களில் படாமல் பார்த்துக்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Keep bottle tightly sealed to prevent evaporation.',
      conditionsTa: 'ஆவியாகாமல் இருக்க பாட்டிலை நன்றாக மூடி வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How quickly does it open a blocked nose or sinus?',
        questionTa: 'மூக்கடைப்பு மற்றும் சைனஸ் பாரம் எவ்வளவு நேரத்தில் நீங்கும்?',
        answer: 'Within 60 seconds of steam inhalation, nasal air passages open up clearly.',
        answerTa: 'ஆவி பிடித்த 1 நிமிடத்தில் மூக்கடைப்பு நீங்கி எளிதாக சுவாசிக்க முடியும்.'
      }
    ],
    searchKeywords: ['esy-swas', 'drops', 'steam inhalation', 'asthma', 'wheezing', 'copd', 'blocked nose', 'sinusitis'],
    tamilKeywords: ['ஈஸி-ஸ்வாஸ்', 'சொட்டு மருந்து', 'ஆவி பிடித்தல்', 'ஆஸ்துமா', 'வீசிங்', 'மூக்கடைப்பு', 'சைனஸ்'],
    inStock: true,
    featured: true
  },

  // ==========================================
  // 2. CLASSICAL SIDDHA MASTER CATALOG (111 SKUs across 14 categories)
  // Strictly aligned with Ruthra Medicines Manufacturing Poster
  // ==========================================

  // ==========================================
  // SIDDHA: CHOORANAM (41 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-001',
    name: 'Ruthra Amirtha Sanjeevi Chooranam',
    tamilName: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம்',
    slug: 'ruthra-amirtha-sanjeevi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pacifies Pitta, relieves genito-urinary inflammation, leucorrhea, and peripheral burning sensation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த சமநிலை, சிறுநீரக பாதை நோய்கள், வெள்ளைப்படுதல் மற்றும் உடல் எரிச்சலுக்கு பாரம்பரிய பயன்பாடு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amirtha Sanjeevi Chooranam (அமிர்த சஞ்சீவி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pacifies Pitta, relieves genito-urinary inflammation, leucorrhea, and peripheral burning sensation.',
    traditionalRoleTa: 'பித்த சமநிலை, சிறுநீரக பாதை நோய்கள், வெள்ளைப்படுதல் மற்றும் உடல் எரிச்சலுக்கு பாரம்பரிய பயன்பாடு.',
    badge: 'Pitta & Urinary Care',
    badgeTa: 'பித்த & சிறுநீர் நலம்',
    image: '/images/products/ruthra-amirtha-sanjeevi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/front.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/angle.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/front.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/angle.jpg',
      '/images/products/ruthra-amirtha-sanjeevi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Amirtha Sanjeevi Chooranam Classical Compound', tamilName: 'அமிர்த சஞ்சீவி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amirtha Sanjeevi Chooranam prepared?',
        questionTa: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amirtha sanjeevi chooranam","ruthra amirtha sanjeevi chooranam","chooranam","amirtha","sanjeevi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமிர்த சஞ்சீவி சூரணம்","ருத்ரா அமிர்த சஞ்சீவி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-002',
    name: 'Ruthra Amukkara Chooranam',
    tamilName: 'ருத்ரா அமுக்கரா சூரணம்',
    slug: 'ruthra-amukkara-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical adaptogen, strengthens nervous system, relieves vatha ailments, chronic fatigue, and insomnia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாத உபாதைகள், நரம்பு தளர்ச்சி, தூக்கமின்மை மற்றும் உடல் பலவீனத்திற்கு பாரம்பரிய பயன்பாடு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amukkara Chooranam (அமுக்கரா சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமுக்கரா சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical adaptogen, strengthens nervous system, relieves vatha ailments, chronic fatigue, and insomnia.',
    traditionalRoleTa: 'வாத உபாதைகள், நரம்பு தளர்ச்சி, தூக்கமின்மை மற்றும் உடல் பலவீனத்திற்கு பாரம்பரிய பயன்பாடு.',
    badge: 'Vitality & Nerve Tonic',
    badgeTa: 'நரம்பு & உடல் பலம்',
    image: '/images/products/ruthra-amukkara-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-amukkara-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amukkara-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Amukkara Chooranam Classical Compound', tamilName: 'அமுக்கரா சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amukkara Chooranam prepared?',
        questionTa: 'ருத்ரா அமுக்கரா சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amukkara chooranam","ruthra amukkara chooranam","chooranam","amukkara","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமுக்கரா சூரணம்","ருத்ரா அமுக்கரா சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-003',
    name: 'Ruthra Amukkara Kizhangu Chooranam',
    tamilName: 'ருத்ரா அமுக்கரா கிழங்கு சூரணம்',
    slug: 'ruthra-amukkara-kizhangu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure root formulation for deep tissue rejuvenation, physical stamina, and musculoskeletal strength. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தூய கிழங்கு சூரணம், தசை வலிமை, விந்து விருத்தி மற்றும் உடல் தேற்றத்திற்கு உகந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amukkara Kizhangu Chooranam (அமுக்கரா கிழங்கு சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமுக்கரா கிழங்கு சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pure root formulation for deep tissue rejuvenation, physical stamina, and musculoskeletal strength.',
    traditionalRoleTa: 'தூய கிழங்கு சூரணம், தசை வலிமை, விந்து விருத்தி மற்றும் உடல் தேற்றத்திற்கு உகந்தது.',
    badge: 'Pure Root Adaptogen',
    badgeTa: 'தூய மூலிகை சூரணம்',
    image: '/images/products/ruthra-amukkara-kizhangu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-amukkara-kizhangu-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amukkara-kizhangu-chooranam/front.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/angle.jpg',
      '/images/products/ruthra-amukkara-kizhangu-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Amukkara Kizhangu Chooranam Classical Compound', tamilName: 'அமுக்கரா கிழங்கு சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amukkara Kizhangu Chooranam prepared?',
        questionTa: 'ருத்ரா அமுக்கரா கிழங்கு சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amukkara kizhangu chooranam","ruthra amukkara kizhangu chooranam","chooranam","amukkara","kizhangu","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமுக்கரா கிழங்கு சூரணம்","ருத்ரா அமுக்கரா கிழங்கு சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-004',
    name: 'Ruthra Athimathura Chooranam',
    tamilName: 'ருத்ரா அதிமதுர சூரணம்',
    slug: 'ruthra-athimathura-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Demulcent and mucosal protector for dry cough, throat irritation, gastric hyperacidity, and ulcer healing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இருமல், தொண்டை கரகரப்பு, அமிலத்தன்மை மற்றும் குடல் புண்களுக்கு உன்னத நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Athimathura Chooranam (அதிமதுர சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அதிமதுர சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Demulcent and mucosal protector for dry cough, throat irritation, gastric hyperacidity, and ulcer healing.',
    traditionalRoleTa: 'இருமல், தொண்டை கரகரப்பு, அமிலத்தன்மை மற்றும் குடல் புண்களுக்கு உன்னத நிவாரணம்.',
    badge: 'Throat & Ulcer Relief',
    badgeTa: 'தொண்டை & வயிற்றுப்புண்',
    image: '/images/products/ruthra-athimathura-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-athimathura-chooranam/front.jpg',
      '/images/products/ruthra-athimathura-chooranam/angle.jpg',
      '/images/products/ruthra-athimathura-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-athimathura-chooranam/front.jpg',
      '/images/products/ruthra-athimathura-chooranam/angle.jpg',
      '/images/products/ruthra-athimathura-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Athimathura Chooranam Classical Compound', tamilName: 'அதிமதுர சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Athimathura Chooranam prepared?',
        questionTa: 'ருத்ரா அதிமதுர சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["athimathura chooranam","ruthra athimathura chooranam","chooranam","athimathura","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அதிமதுர சூரணம்","ருத்ரா அதிமதுர சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-005',
    name: 'Ruthra Attathi Chooranam',
    tamilName: 'ருத்ரா அட்டாதி சூரணம்',
    slug: 'ruthra-attathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Potent eight-ingredient classical carminative for severe indigestion, loss of appetite, and chronic flatulence. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மந்தம், அஜீரணம், பசியின்மை மற்றும் வாயு தொல்லைகளை போக்கும் எட்டு மூலிகை கலவை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Attathi Chooranam (அட்டாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அட்டாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent eight-ingredient classical carminative for severe indigestion, loss of appetite, and chronic flatulence.',
    traditionalRoleTa: 'மந்தம், அஜீரணம், பசியின்மை மற்றும் வாயு தொல்லைகளை போக்கும் எட்டு மூலிகை கலவை.',
    badge: 'Digestive Fire Booster',
    badgeTa: 'செரிமான தீ தீபம்',
    image: '/images/products/ruthra-attathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-attathi-chooranam/front.jpg',
      '/images/products/ruthra-attathi-chooranam/angle.jpg',
      '/images/products/ruthra-attathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-attathi-chooranam/front.jpg',
      '/images/products/ruthra-attathi-chooranam/angle.jpg',
      '/images/products/ruthra-attathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Attathi Chooranam Classical Compound', tamilName: 'அட்டாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Attathi Chooranam prepared?',
        questionTa: 'ருத்ரா அட்டாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["attathi chooranam","ruthra attathi chooranam","chooranam","attathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அட்டாதி சூரணம்","ருத்ரா அட்டாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-006',
    name: 'Ruthra Bhavanakadukkai Chooranam',
    tamilName: 'ருத்ரா பாவனக்கடுக்காய் சூரணம்',
    slug: 'ruthra-bhavanakadukkai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Processed Chebulic Myrobalan formulation for gentle bowel cleansing, liver stimulation, and digestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குடல் கழிவுகளை நீக்கி, மலக்கட்டு மற்றும் பித்த மந்தத்தை போக்கும் பாவனக்கடுக்காய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Bhavanakadukkai Chooranam (பாவனக்கடுக்காய் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பாவனக்கடுக்காய் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Processed Chebulic Myrobalan formulation for gentle bowel cleansing, liver stimulation, and digestion.',
    traditionalRoleTa: 'குடல் கழிவுகளை நீக்கி, மலக்கட்டு மற்றும் பித்த மந்தத்தை போக்கும் பாவனக்கடுக்காய்.',
    badge: 'Bowel Regulator',
    badgeTa: 'மலக்குடல் சுத்திகரிப்பு',
    image: '/images/products/ruthra-bhavanakadukkai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-bhavanakadukkai-chooranam/front.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/angle.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-bhavanakadukkai-chooranam/front.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/angle.jpg',
      '/images/products/ruthra-bhavanakadukkai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Bhavanakadukkai Chooranam Classical Compound', tamilName: 'பாவனக்கடுக்காய் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Bhavanakadukkai Chooranam prepared?',
        questionTa: 'ருத்ரா பாவனக்கடுக்காய் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["bhavanakadukkai chooranam","ruthra bhavanakadukkai chooranam","chooranam","bhavanakadukkai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பாவனக்கடுக்காய் சூரணம்","ருத்ரா பாவனக்கடுக்காய் சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-007',
    name: 'Ruthra Chandragandhi Chooranam',
    tamilName: 'ருத்ரா சந்திரகாந்தி சூரணம்',
    slug: 'ruthra-chandragandhi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["womens-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cooling formulation for internal heat dissipation, menstrual burning sensations, and skin radiance. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் உஷ்ணம் தணித்து, மாதவிடாய் உபாதைகள் மற்றும் முக வசீகரத்திற்கு உதவும் குளிர்ச்சி சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Chandragandhi Chooranam (சந்திரகாந்தி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சந்திரகாந்தி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cooling formulation for internal heat dissipation, menstrual burning sensations, and skin radiance.',
    traditionalRoleTa: 'உடல் உஷ்ணம் தணித்து, மாதவிடாய் உபாதைகள் மற்றும் முக வசீகரத்திற்கு உதவும் குளிர்ச்சி சூரணம்.',
    badge: 'Body Coolant',
    badgeTa: 'உடல் குளிர்ச்சி',
    image: '/images/products/ruthra-chandragandhi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-chandragandhi-chooranam/front.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/angle.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chandragandhi-chooranam/front.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/angle.jpg',
      '/images/products/ruthra-chandragandhi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Chandragandhi Chooranam Classical Compound', tamilName: 'சந்திரகாந்தி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Chandragandhi Chooranam prepared?',
        questionTa: 'ருத்ரா சந்திரகாந்தி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["chandragandhi chooranam","ruthra chandragandhi chooranam","chooranam","chandragandhi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சந்திரகாந்தி சூரணம்","ருத்ரா சந்திரகாந்தி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-008',
    name: 'Ruthra Chundaivatral Chooranam',
    tamilName: 'ருத்ரா சுண்டைவற்றல் சூரணம்',
    slug: 'ruthra-chundaivatral-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical intestinal astringent for sprue, chronic diarrhea, dysentery, and worm infestation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கிரஹணி, வயிற்றுப்போக்கு, சீதபேதி மற்றும் குடற்புழுக்களை போக்கும் பாரம்பரிய தயாரிப்பு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Chundaivatral Chooranam (சுண்டைவற்றல் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சுண்டைவற்றல் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical intestinal astringent for sprue, chronic diarrhea, dysentery, and worm infestation.',
    traditionalRoleTa: 'கிரஹணி, வயிற்றுப்போக்கு, சீதபேதி மற்றும் குடற்புழுக்களை போக்கும் பாரம்பரிய தயாரிப்பு.',
    badge: 'Gut & Sprue Care',
    badgeTa: 'குடல் & பேதி நலம்',
    image: '/images/products/ruthra-chundaivatral-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-chundaivatral-chooranam/front.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/angle.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chundaivatral-chooranam/front.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/angle.jpg',
      '/images/products/ruthra-chundaivatral-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Chundaivatral Chooranam Classical Compound', tamilName: 'சுண்டைவற்றல் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Chundaivatral Chooranam prepared?',
        questionTa: 'ருத்ரா சுண்டைவற்றல் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["chundaivatral chooranam","ruthra chundaivatral chooranam","chooranam","chundaivatral","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சுண்டைவற்றல் சூரணம்","ருத்ரா சுண்டைவற்றல் சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-009',
    name: 'Ruthra Drakshadhi Chooranam',
    tamilName: 'ருத்ரா திராட்சாதி சூரணம்',
    slug: 'ruthra-drakshadhi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Grape-infused formulation relieving chronic Pitta flare-ups, thirst, dizziness, and hyperacidity. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த மயக்கம், அதீத தாகம், நெஞ்செரிச்சல் மற்றும் அஜீரணத்தை தணிக்கும் திராட்சை சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Drakshadhi Chooranam (திராட்சாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திராட்சாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Grape-infused formulation relieving chronic Pitta flare-ups, thirst, dizziness, and hyperacidity.',
    traditionalRoleTa: 'பித்த மயக்கம், அதீத தாகம், நெஞ்செரிச்சல் மற்றும் அஜீரணத்தை தணிக்கும் திராட்சை சூரணம்.',
    badge: 'Pitta Pacifier',
    badgeTa: 'பித்த சமநிலை',
    image: '/images/products/ruthra-drakshadhi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-drakshadhi-chooranam/front.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/angle.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-drakshadhi-chooranam/front.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/angle.jpg',
      '/images/products/ruthra-drakshadhi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Drakshadhi Chooranam Classical Compound', tamilName: 'திராட்சாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Drakshadhi Chooranam prepared?',
        questionTa: 'ருத்ரா திராட்சாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["drakshadhi chooranam","ruthra drakshadhi chooranam","chooranam","drakshadhi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திராட்சாதி சூரணம்","ருத்ரா திராட்சாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-010',
    name: 'Ruthra Elathi Chooranam',
    tamilName: 'ருத்ரா ஏலாதி சூரணம்',
    slug: 'ruthra-elathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cardamom-centric blend for respiratory health, bronchitis, skin itching, and digestive fire. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுவாச குழாய் நலம், இளைப்பு, தோல் அரிப்பு மற்றும் செரிமானத்திற்கு உகந்த ஏலக்காய் கலவை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Elathi Chooranam (ஏலாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஏலாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cardamom-centric blend for respiratory health, bronchitis, skin itching, and digestive fire.',
    traditionalRoleTa: 'சுவாச குழாய் நலம், இளைப்பு, தோல் அரிப்பு மற்றும் செரிமானத்திற்கு உகந்த ஏலக்காய் கலவை.',
    badge: 'Aromatic Balancer',
    badgeTa: 'நறுமண சுவாச நலம்',
    image: '/images/products/ruthra-elathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-elathi-chooranam/front.jpg',
      '/images/products/ruthra-elathi-chooranam/angle.jpg',
      '/images/products/ruthra-elathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-elathi-chooranam/front.jpg',
      '/images/products/ruthra-elathi-chooranam/angle.jpg',
      '/images/products/ruthra-elathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Elathi Chooranam Classical Compound', tamilName: 'ஏலாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Elathi Chooranam prepared?',
        questionTa: 'ருத்ரா ஏலாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["elathi chooranam","ruthra elathi chooranam","chooranam","elathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஏலாதி சூரணம்","ருத்ரா ஏலாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-011',
    name: 'Ruthra Gunma Uppu Chooranam',
    tamilName: 'ருத்ரா குன்ம உப்பு சூரணம்',
    slug: 'ruthra-gunma-uppu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Specialized mineral-salt formulation for intense abdominal colic, peptic ulcers, and bloating. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குன்ம வலி, வயிற்று உப்புசம், வாய்வு பிடிப்பு மற்றும் கடுமையான வயிற்று வலிகளுக்கு பிரத்யேக உப்பு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gunma Uppu Chooranam (குன்ம உப்பு சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குன்ம உப்பு சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized mineral-salt formulation for intense abdominal colic, peptic ulcers, and bloating.',
    traditionalRoleTa: 'குன்ம வலி, வயிற்று உப்புசம், வாய்வு பிடிப்பு மற்றும் கடுமையான வயிற்று வலிகளுக்கு பிரத்யேக உப்பு.',
    badge: 'Abdominal Colic Care',
    badgeTa: 'குன்ம வலி நிவாரணம்',
    image: '/images/products/ruthra-gunma-uppu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-gunma-uppu-chooranam/front.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/angle.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gunma-uppu-chooranam/front.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/angle.jpg',
      '/images/products/ruthra-gunma-uppu-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Gunma Uppu Chooranam Classical Compound', tamilName: 'குன்ம உப்பு சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gunma Uppu Chooranam prepared?',
        questionTa: 'ருத்ரா குன்ம உப்பு சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gunma uppu chooranam","ruthra gunma uppu chooranam","chooranam","gunma","uppu","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குன்ம உப்பு சூரணம்","ருத்ரா குன்ம உப்பு சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-012',
    name: 'Ruthra Jeeraga Chooranam',
    tamilName: 'ருத்ரா சீரக சூரணம்',
    slug: 'ruthra-jeeraga-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cumin compound for soothing gastric inflammation, bile reflux, nausea, and restoring appetite. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த வாந்தி, பித்த கிறுகிறுப்பு, பசியின்மை மற்றும் அஜீரணம் போக்கும் சீரக கூட்டு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Jeeraga Chooranam (சீரக சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சீரக சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cumin compound for soothing gastric inflammation, bile reflux, nausea, and restoring appetite.',
    traditionalRoleTa: 'பித்த வாந்தி, பித்த கிறுகிறுப்பு, பசியின்மை மற்றும் அஜீரணம் போக்கும் சீரக கூட்டு.',
    badge: 'Bile & Gastric Soother',
    badgeTa: 'பித்த வாந்தி நிவாரணம்',
    image: '/images/products/ruthra-jeeraga-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-jeeraga-chooranam/front.jpg',
      '/images/products/ruthra-jeeraga-chooranam/angle.jpg',
      '/images/products/ruthra-jeeraga-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-jeeraga-chooranam/front.jpg',
      '/images/products/ruthra-jeeraga-chooranam/angle.jpg',
      '/images/products/ruthra-jeeraga-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Jeeraga Chooranam Classical Compound', tamilName: 'சீரக சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Jeeraga Chooranam prepared?',
        questionTa: 'ருத்ரா சீரக சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["jeeraga chooranam","ruthra jeeraga chooranam","chooranam","jeeraga","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சீரக சூரணம்","ருத்ரா சீரக சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-013',
    name: 'Ruthra Kaatukarunai Chooranam',
    tamilName: 'ருத்ரா காட்டுக்கருணை சூரணம்',
    slug: 'ruthra-kaatukarunai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Targeted botanical remedy for external/internal hemorrhoids, bleeding piles, and anal fissures. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மூல நோய், உள் மூலம், வெளி மூலம், ரத்த மூலம் மற்றும் ஆசனவாய் எரிச்சலுக்கு சிறந்த தீர்வு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kaatukarunai Chooranam (காட்டுக்கருணை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா காட்டுக்கருணை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Targeted botanical remedy for external/internal hemorrhoids, bleeding piles, and anal fissures.',
    traditionalRoleTa: 'மூல நோய், உள் மூலம், வெளி மூலம், ரத்த மூலம் மற்றும் ஆசனவாய் எரிச்சலுக்கு சிறந்த தீர்வு.',
    badge: 'Hemorrhoid & Piles Care',
    badgeTa: 'மூல நோய் நிவாரணம்',
    image: '/images/products/ruthra-kaatukarunai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kaatukarunai-chooranam/front.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/angle.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kaatukarunai-chooranam/front.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/angle.jpg',
      '/images/products/ruthra-kaatukarunai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kaatukarunai Chooranam Classical Compound', tamilName: 'காட்டுக்கருணை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kaatukarunai Chooranam prepared?',
        questionTa: 'ருத்ரா காட்டுக்கருணை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kaatukarunai chooranam","ruthra kaatukarunai chooranam","chooranam","kaatukarunai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["காட்டுக்கருணை சூரணம்","ருத்ரா காட்டுக்கருணை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-014',
    name: 'Ruthra Kabangusa Chooranam',
    tamilName: 'ருத்ரா கபாங்குச சூரணம்',
    slug: 'ruthra-kabangusa-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical Kapha expelling formulation for severe sinusitis, phlegm congestion, and wheezing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கப நோய்கள், பீனிசம், சளி கட்டு, மார்பு சளி மற்றும் இரைப்பு நோய்களுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kabangusa Chooranam (கபாங்குச சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கபாங்குச சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical Kapha expelling formulation for severe sinusitis, phlegm congestion, and wheezing.',
    traditionalRoleTa: 'கப நோய்கள், பீனிசம், சளி கட்டு, மார்பு சளி மற்றும் இரைப்பு நோய்களுக்கு அருமருந்து.',
    badge: 'Kapha Dissolver',
    badgeTa: 'கப நிவார்த்தி',
    image: '/images/products/ruthra-kabangusa-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kabangusa-chooranam/front.jpg',
      '/images/products/ruthra-kabangusa-chooranam/angle.jpg',
      '/images/products/ruthra-kabangusa-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kabangusa-chooranam/front.jpg',
      '/images/products/ruthra-kabangusa-chooranam/angle.jpg',
      '/images/products/ruthra-kabangusa-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kabangusa Chooranam Classical Compound', tamilName: 'கபாங்குச சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kabangusa Chooranam prepared?',
        questionTa: 'ருத்ரா கபாங்குச சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kabangusa chooranam","ruthra kabangusa chooranam","chooranam","kabangusa","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கபாங்குச சூரணம்","ருத்ரா கபாங்குச சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-015',
    name: 'Ruthra Karanthai Chooranam',
    tamilName: 'ருத்ரா கரந்தை சூரணம்',
    slug: 'ruthra-karanthai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Karanthai-based rasayana for purifying blood, treating skin allergies, and enhancing longevity. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த சுத்தி, தோல் வியாதிகள், படை மற்றும் உடல் காயகற்பத்திற்கு பயன்படும் கரந்தை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karanthai Chooranam (கரந்தை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கரந்தை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Karanthai-based rasayana for purifying blood, treating skin allergies, and enhancing longevity.',
    traditionalRoleTa: 'ரத்த சுத்தி, தோல் வியாதிகள், படை மற்றும் உடல் காயகற்பத்திற்கு பயன்படும் கரந்தை.',
    badge: 'Blood Purifier',
    badgeTa: 'ரத்த சுத்தி',
    image: '/images/products/ruthra-karanthai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-karanthai-chooranam/front.jpg',
      '/images/products/ruthra-karanthai-chooranam/angle.jpg',
      '/images/products/ruthra-karanthai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karanthai-chooranam/front.jpg',
      '/images/products/ruthra-karanthai-chooranam/angle.jpg',
      '/images/products/ruthra-karanthai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Karanthai Chooranam Classical Compound', tamilName: 'கரந்தை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karanthai Chooranam prepared?',
        questionTa: 'ருத்ரா கரந்தை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karanthai chooranam","ruthra karanthai chooranam","chooranam","karanthai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கரந்தை சூரணம்","ருத்ரா கரந்தை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-016',
    name: 'Ruthra Kazharchi Chooranam',
    tamilName: 'ருத்ரா கழற்சி சூரணம்',
    slug: 'ruthra-kazharchi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["womens-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Bonduc nut formulation for hydrocele, ovarian cysts, PCOS, and uterine spasm relief. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'விதை வீக்கம், சினைப்பை நீர்க்கட்டிகள் (PCOS), கருப்பை வீக்கம் போக்கும் கழற்சிக்காய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kazharchi Chooranam (கழற்சி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கழற்சி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Bonduc nut formulation for hydrocele, ovarian cysts, PCOS, and uterine spasm relief.',
    traditionalRoleTa: 'விதை வீக்கம், சினைப்பை நீர்க்கட்டிகள் (PCOS), கருப்பை வீக்கம் போக்கும் கழற்சிக்காய்.',
    badge: 'PCOS & Swelling Care',
    badgeTa: 'நீர்க்கட்டி & விதை வீக்கம்',
    image: '/images/products/ruthra-kazharchi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kazharchi-chooranam/front.jpg',
      '/images/products/ruthra-kazharchi-chooranam/angle.jpg',
      '/images/products/ruthra-kazharchi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kazharchi-chooranam/front.jpg',
      '/images/products/ruthra-kazharchi-chooranam/angle.jpg',
      '/images/products/ruthra-kazharchi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kazharchi Chooranam Classical Compound', tamilName: 'கழற்சி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kazharchi Chooranam prepared?',
        questionTa: 'ருத்ரா கழற்சி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kazharchi chooranam","ruthra kazharchi chooranam","chooranam","kazharchi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கழற்சி சூரணம்","ருத்ரா கழற்சி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-017',
    name: 'Ruthra Kumatti Chooranam',
    tamilName: 'ருத்ரா குமட்டி சூரணம்',
    slug: 'ruthra-kumatti-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Bitter apple formulation for chronic abdominal obstructions, splenomegaly, and liver congestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வயிற்றுக் கட்டிகள், மண்ணீரல் வீக்கம், கல்லீரல் மந்தம் மற்றும் பெருவயிறு நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kumatti Chooranam (குமட்டி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குமட்டி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Bitter apple formulation for chronic abdominal obstructions, splenomegaly, and liver congestion.',
    traditionalRoleTa: 'வயிற்றுக் கட்டிகள், மண்ணீரல் வீக்கம், கல்லீரல் மந்தம் மற்றும் பெருவயிறு நிவாரணம்.',
    badge: 'Hepatosplenic Care',
    badgeTa: 'கல்லீரல் & மண்ணீரல்',
    image: '/images/products/ruthra-kumatti-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kumatti-chooranam/front.jpg',
      '/images/products/ruthra-kumatti-chooranam/angle.jpg',
      '/images/products/ruthra-kumatti-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kumatti-chooranam/front.jpg',
      '/images/products/ruthra-kumatti-chooranam/angle.jpg',
      '/images/products/ruthra-kumatti-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kumatti Chooranam Classical Compound', tamilName: 'குமட்டி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kumatti Chooranam prepared?',
        questionTa: 'ருத்ரா குமட்டி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kumatti chooranam","ruthra kumatti chooranam","chooranam","kumatti","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குமட்டி சூரணம்","ருத்ரா குமட்டி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-018',
    name: 'Ruthra Lavangathi Chooranam',
    tamilName: 'ருத்ரா லவங்காதி சூரணம்',
    slug: 'ruthra-lavangathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Clove and spice combination relieving persistent spasmodic cough, nausea, and poor digestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தொடர் இருமல், கக்குவான், நெஞ்சு சளி மற்றும் பசியின்மை போக்கும் லவங்க சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Lavangathi Chooranam (லவங்காதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா லவங்காதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Clove and spice combination relieving persistent spasmodic cough, nausea, and poor digestion.',
    traditionalRoleTa: 'தொடர் இருமல், கக்குவான், நெஞ்சு சளி மற்றும் பசியின்மை போக்கும் லவங்க சூரணம்.',
    badge: 'Cough & Spasm Reliever',
    badgeTa: 'இருமல் & சளி நிவாரணம்',
    image: '/images/products/ruthra-lavangathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-lavangathi-chooranam/front.jpg',
      '/images/products/ruthra-lavangathi-chooranam/angle.jpg',
      '/images/products/ruthra-lavangathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-lavangathi-chooranam/front.jpg',
      '/images/products/ruthra-lavangathi-chooranam/angle.jpg',
      '/images/products/ruthra-lavangathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Lavangathi Chooranam Classical Compound', tamilName: 'லவங்காதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Lavangathi Chooranam prepared?',
        questionTa: 'ருத்ரா லவங்காதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["lavangathi chooranam","ruthra lavangathi chooranam","chooranam","lavangathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["லவங்காதி சூரணம்","ருத்ரா லவங்காதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-019',
    name: 'Ruthra Madhuradhi Chooranam',
    tamilName: 'ருத்ரா மதுராதி சூரணம்',
    slug: 'ruthra-madhuradhi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Sweet demulcent digestive for hyperacidity, peptic distress, burning chest, and emaciation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நெஞ்செரிச்சல், குடல் புண், பித்த எரிச்சல் மற்றும் உடல் மெலிவு போக்கும் மதுராதி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Madhuradhi Chooranam (மதுராதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மதுராதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Sweet demulcent digestive for hyperacidity, peptic distress, burning chest, and emaciation.',
    traditionalRoleTa: 'நெஞ்செரிச்சல், குடல் புண், பித்த எரிச்சல் மற்றும் உடல் மெலிவு போக்கும் மதுராதி.',
    badge: 'Soothing Digestant',
    badgeTa: 'நெஞ்செரிச்சல் நிவாரணம்',
    image: '/images/products/ruthra-madhuradhi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-madhuradhi-chooranam/front.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/angle.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-madhuradhi-chooranam/front.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/angle.jpg',
      '/images/products/ruthra-madhuradhi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Madhuradhi Chooranam Classical Compound', tamilName: 'மதுராதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Madhuradhi Chooranam prepared?',
        questionTa: 'ருத்ரா மதுராதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["madhuradhi chooranam","ruthra madhuradhi chooranam","chooranam","madhuradhi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மதுராதி சூரணம்","ருத்ரா மதுராதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-020',
    name: 'Ruthra Maruthampattai Chooranam',
    tamilName: 'ருத்ரா மருதம்பட்டை சூரணம்',
    slug: 'ruthra-maruthampattai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Terminalia arjuna bark formula supporting cardiac muscle strength, healthy circulation, and BP. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இதய நலம், ரத்த அழுத்த கட்டுப்பாடு மற்றும் இதய தசைகளை பலப்படுத்தும் மருதம்பட்டை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Maruthampattai Chooranam (மருதம்பட்டை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மருதம்பட்டை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Terminalia arjuna bark formula supporting cardiac muscle strength, healthy circulation, and BP.',
    traditionalRoleTa: 'இதய நலம், ரத்த அழுத்த கட்டுப்பாடு மற்றும் இதய தசைகளை பலப்படுத்தும் மருதம்பட்டை.',
    badge: 'Cardio Protective',
    badgeTa: 'இதய நலம்',
    image: '/images/products/ruthra-maruthampattai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-maruthampattai-chooranam/front.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/angle.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-maruthampattai-chooranam/front.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/angle.jpg',
      '/images/products/ruthra-maruthampattai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Maruthampattai Chooranam Classical Compound', tamilName: 'மருதம்பட்டை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Maruthampattai Chooranam prepared?',
        questionTa: 'ருத்ரா மருதம்பட்டை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["maruthampattai chooranam","ruthra maruthampattai chooranam","chooranam","maruthampattai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மருதம்பட்டை சூரணம்","ருத்ரா மருதம்பட்டை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-021',
    name: 'Ruthra Mayiliragathi Chooranam',
    tamilName: 'ருத்ரா மயிலிறகாதி சூரணம்',
    slug: 'ruthra-mayiliragathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Calcinated peacock quill formula for intractable hiccough, severe vomiting, and breathlessness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தீராத விக்கல், தொடர் வாந்தி, ஆஸ்துமா மற்றும் மூச்சு திணறலுக்கு உடனடி நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mayiliragathi Chooranam (மயிலிறகாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மயிலிறகாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Calcinated peacock quill formula for intractable hiccough, severe vomiting, and breathlessness.',
    traditionalRoleTa: 'தீராத விக்கல், தொடர் வாந்தி, ஆஸ்துமா மற்றும் மூச்சு திணறலுக்கு உடனடி நிவாரணம்.',
    badge: 'Hiccough Reliever',
    badgeTa: 'விக்கல் & வாந்தி நிவாரணம்',
    image: '/images/products/ruthra-mayiliragathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-mayiliragathi-chooranam/front.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/angle.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mayiliragathi-chooranam/front.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/angle.jpg',
      '/images/products/ruthra-mayiliragathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Mayiliragathi Chooranam Classical Compound', tamilName: 'மயிலிறகாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mayiliragathi Chooranam prepared?',
        questionTa: 'ருத்ரா மயிலிறகாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mayiliragathi chooranam","ruthra mayiliragathi chooranam","chooranam","mayiliragathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மயிலிறகாதி சூரணம்","ருத்ரா மயிலிறகாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-022',
    name: 'Ruthra Megasanthi Chooranam',
    tamilName: 'ருத்ரா மேகசாந்தி சூரணம்',
    slug: 'ruthra-megasanthi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical formula for pacifying mega diseases, burning micturition, diabetic heat, and genital discharge. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மேக நோய்கள், பிரமேகம், சிறுநீர் எரிச்சல், வெள்ளை ஒழுக்கு மற்றும் மேக உஷ்ணம் தணிக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Megasanthi Chooranam (மேகசாந்தி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மேகசாந்தி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical formula for pacifying mega diseases, burning micturition, diabetic heat, and genital discharge.',
    traditionalRoleTa: 'மேக நோய்கள், பிரமேகம், சிறுநீர் எரிச்சல், வெள்ளை ஒழுக்கு மற்றும் மேக உஷ்ணம் தணிக்கும்.',
    badge: 'Mega Disease Pacifier',
    badgeTa: 'மேக ரோக நிவாரணம்',
    image: '/images/products/ruthra-megasanthi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-megasanthi-chooranam/front.jpg',
      '/images/products/ruthra-megasanthi-chooranam/angle.jpg',
      '/images/products/ruthra-megasanthi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-megasanthi-chooranam/front.jpg',
      '/images/products/ruthra-megasanthi-chooranam/angle.jpg',
      '/images/products/ruthra-megasanthi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Megasanthi Chooranam Classical Compound', tamilName: 'மேகசாந்தி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Megasanthi Chooranam prepared?',
        questionTa: 'ருத்ரா மேகசாந்தி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["megasanthi chooranam","ruthra megasanthi chooranam","chooranam","megasanthi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மேகசாந்தி சூரணம்","ருத்ரா மேகசாந்தி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-023',
    name: 'Ruthra Nelli Chooranam',
    tamilName: 'ருத்ரா நெல்லி சூரணம்',
    slug: 'ruthra-nelli-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Emblic Myrobalan antioxidant rich powder for immunity, hair nourishment, and Pitta balance. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நோய் எதிர்ப்பு சக்தி, முடி வளர்ச்சி, ரத்த சுத்தி மற்றும் இளமை காக்கும் நெல்லி சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nelli Chooranam (நெல்லி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நெல்லி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Emblic Myrobalan antioxidant rich powder for immunity, hair nourishment, and Pitta balance.',
    traditionalRoleTa: 'நோய் எதிர்ப்பு சக்தி, முடி வளர்ச்சி, ரத்த சுத்தி மற்றும் இளமை காக்கும் நெல்லி சூரணம்.',
    badge: 'Immunity & Hair Health',
    badgeTa: 'நோய் எதிர்ப்பு & கூந்தல்',
    image: '/images/products/ruthra-nelli-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nelli-chooranam/front.jpg',
      '/images/products/ruthra-nelli-chooranam/angle.jpg',
      '/images/products/ruthra-nelli-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nelli-chooranam/front.jpg',
      '/images/products/ruthra-nelli-chooranam/angle.jpg',
      '/images/products/ruthra-nelli-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nelli Chooranam Classical Compound', tamilName: 'நெல்லி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nelli Chooranam prepared?',
        questionTa: 'ருத்ரா நெல்லி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nelli chooranam","ruthra nelli chooranam","chooranam","nelli","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நெல்லி சூரணம்","ருத்ரா நெல்லி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-024',
    name: 'Ruthra Nilavarai Chooranam',
    tamilName: 'ருத்ரா நிலாவரை சூரணம்',
    slug: 'ruthra-nilavarai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Natural senna botanical compound for habitual constipation, bowel detox, and skin clearing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நாள்பட்ட மலச்சிக்கல், குடல் நச்சுக்கள் மற்றும் பித்த கழிவுகளை நீக்கும் மென்மையான மலமிளக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nilavarai Chooranam (நிலாவரை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நிலாவரை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Natural senna botanical compound for habitual constipation, bowel detox, and skin clearing.',
    traditionalRoleTa: 'நாள்பட்ட மலச்சிக்கல், குடல் நச்சுக்கள் மற்றும் பித்த கழிவுகளை நீக்கும் மென்மையான மலமிளக்கி.',
    badge: 'Natural Laxative',
    badgeTa: 'இயற்கை மலமிளக்கி',
    image: '/images/products/ruthra-nilavarai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nilavarai-chooranam/front.jpg',
      '/images/products/ruthra-nilavarai-chooranam/angle.jpg',
      '/images/products/ruthra-nilavarai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nilavarai-chooranam/front.jpg',
      '/images/products/ruthra-nilavarai-chooranam/angle.jpg',
      '/images/products/ruthra-nilavarai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nilavarai Chooranam Classical Compound', tamilName: 'நிலாவரை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nilavarai Chooranam prepared?',
        questionTa: 'ருத்ரா நிலாவரை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nilavarai chooranam","ruthra nilavarai chooranam","chooranam","nilavarai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நிலாவரை சூரணம்","ருத்ரா நிலாவரை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-025',
    name: 'Ruthra Panchadeepakini Chooranam',
    tamilName: 'ருத்ரா பஞ்சதீபாகினி சூரணம்',
    slug: 'ruthra-panchadeepakini-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Five-spice digestive formula igniting sluggish Jataragni, improving nutrient absorption. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுக்கு, மிளகு, திப்பிலி, ஏலம், சீரகம் சேர்ந்த ஐந்து மூலிகை செரிமான தீயை தூண்டும் சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchadeepakini Chooranam (பஞ்சதீபாகினி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பஞ்சதீபாகினி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Five-spice digestive formula igniting sluggish Jataragni, improving nutrient absorption.',
    traditionalRoleTa: 'சுக்கு, மிளகு, திப்பிலி, ஏலம், சீரகம் சேர்ந்த ஐந்து மூலிகை செரிமான தீயை தூண்டும் சூரணம்.',
    badge: 'Five-Spice Digestant',
    badgeTa: 'பஞ்ச தீபனி',
    image: '/images/products/ruthra-panchadeepakini-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-panchadeepakini-chooranam/front.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchadeepakini-chooranam/front.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Panchadeepakini Chooranam Classical Compound', tamilName: 'பஞ்சதீபாகினி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchadeepakini Chooranam prepared?',
        questionTa: 'ருத்ரா பஞ்சதீபாகினி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchadeepakini chooranam","ruthra panchadeepakini chooranam","chooranam","panchadeepakini","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பஞ்சதீபாகினி சூரணம்","ருத்ரா பஞ்சதீபாகினி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-026',
    name: 'Ruthra Parangichakkai Chooranam',
    tamilName: 'ருத்ரா பறங்கிச்சக்கை சூரணம்',
    slug: 'ruthra-parangichakkai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair","joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Smilax china formula for chronic skin eruptions, psoriasis, venereal afflictions, and joint toxins. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சரும நோய்கள், சோரியாசிஸ், கரப்பான், மூட்டு வாதம் மற்றும் ரத்த தூய்மைக்கு உகந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Parangichakkai Chooranam (பறங்கிச்சக்கை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பறங்கிச்சக்கை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Smilax china formula for chronic skin eruptions, psoriasis, venereal afflictions, and joint toxins.',
    traditionalRoleTa: 'சரும நோய்கள், சோரியாசிஸ், கரப்பான், மூட்டு வாதம் மற்றும் ரத்த தூய்மைக்கு உகந்தது.',
    badge: 'Skin & Detoxifying Tonic',
    badgeTa: 'தோல் & மூட்டு நலம்',
    image: '/images/products/ruthra-parangichakkai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-parangichakkai-chooranam/front.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/angle.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangichakkai-chooranam/front.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/angle.jpg',
      '/images/products/ruthra-parangichakkai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Parangichakkai Chooranam Classical Compound', tamilName: 'பறங்கிச்சக்கை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Parangichakkai Chooranam prepared?',
        questionTa: 'ருத்ரா பறங்கிச்சக்கை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["parangichakkai chooranam","ruthra parangichakkai chooranam","chooranam","parangichakkai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பறங்கிச்சக்கை சூரணம்","ருத்ரா பறங்கிச்சக்கை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-027',
    name: 'Ruthra Parangipattai Chooranam',
    tamilName: 'ருத்ரா பறங்கிப்பட்டை சூரணம்',
    slug: 'ruthra-parangipattai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure bark preparation for dermal wellness, deep blood purification, and metabolic detox. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தோல் அலர்ஜி, அரிப்பு, புண்கள் மற்றும் ரத்தத்தில் உள்ள நச்சுக்களை நீக்கும் பட்டை சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Parangipattai Chooranam (பறங்கிப்பட்டை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பறங்கிப்பட்டை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pure bark preparation for dermal wellness, deep blood purification, and metabolic detox.',
    traditionalRoleTa: 'தோல் அலர்ஜி, அரிப்பு, புண்கள் மற்றும் ரத்தத்தில் உள்ள நச்சுக்களை நீக்கும் பட்டை சூரணம்.',
    badge: 'Dermal Cleanser',
    badgeTa: 'தோல் சுத்தி',
    image: '/images/products/ruthra-parangipattai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-parangipattai-chooranam/front.jpg',
      '/images/products/ruthra-parangipattai-chooranam/angle.jpg',
      '/images/products/ruthra-parangipattai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangipattai-chooranam/front.jpg',
      '/images/products/ruthra-parangipattai-chooranam/angle.jpg',
      '/images/products/ruthra-parangipattai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Parangipattai Chooranam Classical Compound', tamilName: 'பறங்கிப்பட்டை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Parangipattai Chooranam prepared?',
        questionTa: 'ருத்ரா பறங்கிப்பட்டை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["parangipattai chooranam","ruthra parangipattai chooranam","chooranam","parangipattai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பறங்கிப்பட்டை சூரணம்","ருத்ரா பறங்கிப்பட்டை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-028',
    name: 'Ruthra Peisori Chooranam',
    tamilName: 'ருத்ரா பேய்சொறி சூரணம்',
    slug: 'ruthra-peisori-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Specialized Siddha formulation for persistent scabies, eczema, dermatitis, and fungal skin lesions. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பேய்சொறி, சிரங்கு, படர்தாமரை, நமைச்சல் மற்றும் நாள்பட்ட தோல் அரிப்புக்கு பிரத்யேக சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Peisori Chooranam (பேய்சொறி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பேய்சொறி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized Siddha formulation for persistent scabies, eczema, dermatitis, and fungal skin lesions.',
    traditionalRoleTa: 'பேய்சொறி, சிரங்கு, படர்தாமரை, நமைச்சல் மற்றும் நாள்பட்ட தோல் அரிப்புக்கு பிரத்யேக சூரணம்.',
    badge: 'Eczema & Scabies Care',
    badgeTa: 'சொறி & சிரங்கு நிவாரணம்',
    image: '/images/products/ruthra-peisori-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-peisori-chooranam/front.jpg',
      '/images/products/ruthra-peisori-chooranam/angle.jpg',
      '/images/products/ruthra-peisori-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-peisori-chooranam/front.jpg',
      '/images/products/ruthra-peisori-chooranam/angle.jpg',
      '/images/products/ruthra-peisori-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Peisori Chooranam Classical Compound', tamilName: 'பேய்சொறி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Peisori Chooranam prepared?',
        questionTa: 'ருத்ரா பேய்சொறி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["peisori chooranam","ruthra peisori chooranam","chooranam","peisori","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பேய்சொறி சூரணம்","ருத்ரா பேய்சொறி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-029',
    name: 'Ruthra Pirandai Chooranam',
    tamilName: 'ருத்ரா பிரண்டை சூரணம்',
    slug: 'ruthra-pirandai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["joint-mobility","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cissus quadrangularis powder for accelerating bone healing, joint lubrication, and piles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'எலும்பு முறிவு குணமாக, மூட்டு தேய்மானம், பசியின்மை மற்றும் மூல நோய்க்கு சிறந்த பிரண்டை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pirandai Chooranam (பிரண்டை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பிரண்டை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cissus quadrangularis powder for accelerating bone healing, joint lubrication, and piles.',
    traditionalRoleTa: 'எலும்பு முறிவு குணமாக, மூட்டு தேய்மானம், பசியின்மை மற்றும் மூல நோய்க்கு சிறந்த பிரண்டை.',
    badge: 'Bone & Joint Strength',
    badgeTa: 'எலும்பு & மூட்டு பலம்',
    image: '/images/products/ruthra-pirandai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pirandai-chooranam/front.jpg',
      '/images/products/ruthra-pirandai-chooranam/angle.jpg',
      '/images/products/ruthra-pirandai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pirandai-chooranam/front.jpg',
      '/images/products/ruthra-pirandai-chooranam/angle.jpg',
      '/images/products/ruthra-pirandai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pirandai Chooranam Classical Compound', tamilName: 'பிரண்டை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pirandai Chooranam prepared?',
        questionTa: 'ருத்ரா பிரண்டை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pirandai chooranam","ruthra pirandai chooranam","chooranam","pirandai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பிரண்டை சூரணம்","ருத்ரா பிரண்டை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-030',
    name: 'Ruthra Ponnavarai Chooranam',
    tamilName: 'ருத்ரா பொன்னாவரை சூரணம்',
    slug: 'ruthra-ponnavarai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cassia sophera formula for hepatic cleansing, mild laxation, and skin discolouration. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கல்லீரல் சுத்திகரிப்பு, மலச்சிக்கல், தோல் பளபளப்பு மற்றும் பித்த ரோகங்களுக்கு பயன்படும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Ponnavarai Chooranam (பொன்னாவரை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பொன்னாவரை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cassia sophera formula for hepatic cleansing, mild laxation, and skin discolouration.',
    traditionalRoleTa: 'கல்லீரல் சுத்திகரிப்பு, மலச்சிக்கல், தோல் பளபளப்பு மற்றும் பித்த ரோகங்களுக்கு பயன்படும்.',
    badge: 'Hepatic & Skin Tonic',
    badgeTa: 'கல்லீரல் & தோல் நலம்',
    image: '/images/products/ruthra-ponnavarai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-ponnavarai-chooranam/front.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/angle.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ponnavarai-chooranam/front.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/angle.jpg',
      '/images/products/ruthra-ponnavarai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Ponnavarai Chooranam Classical Compound', tamilName: 'பொன்னாவரை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Ponnavarai Chooranam prepared?',
        questionTa: 'ருத்ரா பொன்னாவரை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["ponnavarai chooranam","ruthra ponnavarai chooranam","chooranam","ponnavarai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பொன்னாவரை சூரணம்","ருத்ரா பொன்னாவரை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-031',
    name: 'Ruthra Poonaikali Vidhai Chooranam',
    tamilName: 'ருத்ரா பூனைக்காலி விதை சூரணம்',
    slug: 'ruthra-poonaikali-vidhai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Mucuna pruriens seed formula for neuro-protection, Parkinsonian tremors, and reproductive vigor. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நரம்பு தளர்ச்சி, நடுக்கு வாதம், விந்து விருத்தி மற்றும் ஆண்மை பலத்திற்கு உன்னத பூனைக்காலி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Poonaikali Vidhai Chooranam (பூனைக்காலி விதை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பூனைக்காலி விதை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Mucuna pruriens seed formula for neuro-protection, Parkinsonian tremors, and reproductive vigor.',
    traditionalRoleTa: 'நரம்பு தளர்ச்சி, நடுக்கு வாதம், விந்து விருத்தி மற்றும் ஆண்மை பலத்திற்கு உன்னத பூனைக்காலி.',
    badge: 'Neuro & Vitality Booster',
    badgeTa: 'நரம்பு & தாது விருத்தி',
    image: '/images/products/ruthra-poonaikali-vidhai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-poonaikali-vidhai-chooranam/front.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/angle.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-poonaikali-vidhai-chooranam/front.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/angle.jpg',
      '/images/products/ruthra-poonaikali-vidhai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Poonaikali Vidhai Chooranam Classical Compound', tamilName: 'பூனைக்காலி விதை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Poonaikali Vidhai Chooranam prepared?',
        questionTa: 'ருத்ரா பூனைக்காலி விதை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["poonaikali vidhai chooranam","ruthra poonaikali vidhai chooranam","chooranam","poonaikali","vidhai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பூனைக்காலி விதை சூரணம்","ருத்ரா பூனைக்காலி விதை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-032',
    name: 'Ruthra Pungampoo Chooranam',
    tamilName: 'ருத்ரா புங்கம்பூ சூரணம்',
    slug: 'ruthra-pungampoo-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pongamia pinnata flower powder for regulating blood sugar, leucorrhea, and excessive thirst. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீரிழிவு சர்க்கரை கட்டுப்பாடு, அதிமூத்திரம், வெள்ளைப்படுதல் மற்றும் உடல் சூடு தணிக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pungampoo Chooranam (புங்கம்பூ சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா புங்கம்பூ சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pongamia pinnata flower powder for regulating blood sugar, leucorrhea, and excessive thirst.',
    traditionalRoleTa: 'நீரிழிவு சர்க்கரை கட்டுப்பாடு, அதிமூத்திரம், வெள்ளைப்படுதல் மற்றும் உடல் சூடு தணிக்கும்.',
    badge: 'Glycemic & Coolant',
    badgeTa: 'சர்க்கரை & உடல் நலம்',
    image: '/images/products/ruthra-pungampoo-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pungampoo-chooranam/front.jpg',
      '/images/products/ruthra-pungampoo-chooranam/angle.jpg',
      '/images/products/ruthra-pungampoo-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pungampoo-chooranam/front.jpg',
      '/images/products/ruthra-pungampoo-chooranam/angle.jpg',
      '/images/products/ruthra-pungampoo-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pungampoo Chooranam Classical Compound', tamilName: 'புங்கம்பூ சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pungampoo Chooranam prepared?',
        questionTa: 'ருத்ரா புங்கம்பூ சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pungampoo chooranam","ruthra pungampoo chooranam","chooranam","pungampoo","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["புங்கம்பூ சூரணம்","ருத்ரா புங்கம்பூ சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-033',
    name: 'Ruthra Sagalanoi Chooranam',
    tamilName: 'ருத்ரா சகலநோய் சூரணம்',
    slug: 'ruthra-sagalanoi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Panacea compound formula for restoring digestive equilibrium, general debility, and fever convalescence. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் அசதி, பொது பலவீனம், அஜீரணம் மற்றும் அனைத்து வகையான உடல் சோர்வை போக்கும் கூட்டு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sagalanoi Chooranam (சகலநோய் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சகலநோய் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Panacea compound formula for restoring digestive equilibrium, general debility, and fever convalescence.',
    traditionalRoleTa: 'உடல் அசதி, பொது பலவீனம், அஜீரணம் மற்றும் அனைத்து வகையான உடல் சோர்வை போக்கும் கூட்டு.',
    badge: 'Universal Restorative',
    badgeTa: 'சகல நோய் நிவாரணி',
    image: '/images/products/ruthra-sagalanoi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sagalanoi-chooranam/front.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/angle.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sagalanoi-chooranam/front.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/angle.jpg',
      '/images/products/ruthra-sagalanoi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sagalanoi Chooranam Classical Compound', tamilName: 'சகலநோய் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sagalanoi Chooranam prepared?',
        questionTa: 'ருத்ரா சகலநோய் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sagalanoi chooranam","ruthra sagalanoi chooranam","chooranam","sagalanoi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சகலநோய் சூரணம்","ருத்ரா சகலநோய் சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-034',
    name: 'Ruthra Sarvangavatha Chooranam',
    tamilName: 'ருத்ரா சர்வாங்கவாத சூரணம்',
    slug: 'ruthra-sarvangavatha-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["joint-mobility"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Comprehensive Vatha pacifier for generalized body aches, rheumatoid arthritis, and muscular stiffness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சர்வாங்க வாதம், மூட்டு வீக்கம், உடல் குடைச்சல் மற்றும் தசை பிடிப்புகளுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sarvangavatha Chooranam (சர்வாங்கவாத சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சர்வாங்கவாத சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Comprehensive Vatha pacifier for generalized body aches, rheumatoid arthritis, and muscular stiffness.',
    traditionalRoleTa: 'சர்வாங்க வாதம், மூட்டு வீக்கம், உடல் குடைச்சல் மற்றும் தசை பிடிப்புகளுக்கு அருமருந்து.',
    badge: 'Whole Body Vatha Care',
    badgeTa: 'முழு உடல் வாத நிவாரணம்',
    image: '/images/products/ruthra-sarvangavatha-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sarvangavatha-chooranam/front.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/angle.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sarvangavatha-chooranam/front.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/angle.jpg',
      '/images/products/ruthra-sarvangavatha-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sarvangavatha Chooranam Classical Compound', tamilName: 'சர்வாங்கவாத சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sarvangavatha Chooranam prepared?',
        questionTa: 'ருத்ரா சர்வாங்கவாத சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sarvangavatha chooranam","ruthra sarvangavatha chooranam","chooranam","sarvangavatha","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சர்வாங்கவாத சூரணம்","ருத்ரா சர்வாங்கவாத சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-035',
    name: 'Ruthra Sirupeelai Chooranam',
    tamilName: 'ருத்ரா சிறுபீளை சூரணம்',
    slug: 'ruthra-sirupeelai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["metabolic-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Renowned lithotriptic botanical for dissolving kidney stones, dysuria, and urinary gravel. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீரக கற்கள், சிறுநீர் தாரை அடைப்பு, எரிச்சல் மற்றும் நீர்க்கட்டு போக்கும் சிறந்த மூலிகை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sirupeelai Chooranam (சிறுபீளை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சிறுபீளை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Renowned lithotriptic botanical for dissolving kidney stones, dysuria, and urinary gravel.',
    traditionalRoleTa: 'சிறுநீரக கற்கள், சிறுநீர் தாரை அடைப்பு, எரிச்சல் மற்றும் நீர்க்கட்டு போக்கும் சிறந்த மூலிகை.',
    badge: 'Kidney Stone Dissolver',
    badgeTa: 'சிறுநீரக கல் கரைப்பான்',
    image: '/images/products/ruthra-sirupeelai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sirupeelai-chooranam/front.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/angle.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sirupeelai-chooranam/front.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/angle.jpg',
      '/images/products/ruthra-sirupeelai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sirupeelai Chooranam Classical Compound', tamilName: 'சிறுபீளை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sirupeelai Chooranam prepared?',
        questionTa: 'ருத்ரா சிறுபீளை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sirupeelai chooranam","ruthra sirupeelai chooranam","chooranam","sirupeelai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சிறுபீளை சூரணம்","ருத்ரா சிறுபீளை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-036',
    name: 'Ruthra Sivathai Chooranam',
    tamilName: 'ருத்ரா சிவத்தை சூரணம்',
    slug: 'ruthra-sivathai-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Operculina turpethum purgative compound for deep systemic detox, ascites, and chronic obstipation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் நச்சு கழிவுகளை வெளியேற்றும் பேதி சூரணம், பித்த நீக்கம் மற்றும் வயிற்று மந்தம் நீக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sivathai Chooranam (சிவத்தை சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சிவத்தை சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Operculina turpethum purgative compound for deep systemic detox, ascites, and chronic obstipation.',
    traditionalRoleTa: 'உடல் நச்சு கழிவுகளை வெளியேற்றும் பேதி சூரணம், பித்த நீக்கம் மற்றும் வயிற்று மந்தம் நீக்கி.',
    badge: 'Purgative Detox',
    badgeTa: 'பேதி & கழிவகற்றி',
    image: '/images/products/ruthra-sivathai-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sivathai-chooranam/front.jpg',
      '/images/products/ruthra-sivathai-chooranam/angle.jpg',
      '/images/products/ruthra-sivathai-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sivathai-chooranam/front.jpg',
      '/images/products/ruthra-sivathai-chooranam/angle.jpg',
      '/images/products/ruthra-sivathai-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sivathai Chooranam Classical Compound', tamilName: 'சிவத்தை சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sivathai Chooranam prepared?',
        questionTa: 'ருத்ரா சிவத்தை சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sivathai chooranam","ruthra sivathai chooranam","chooranam","sivathai","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சிவத்தை சூரணம்","ருத்ரா சிவத்தை சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-037',
    name: 'Ruthra Sugabethi Chooranam',
    tamilName: 'ருத்ரா சுகபேதி சூரணம்',
    slug: 'ruthra-sugabethi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Gentle, spasm-free laxative formulation for seasonal gut evacuation and cooling internal heat. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வயிற்று வலி இல்லாத சுகமான மலக்கழிவு மற்றும் பித்த உஷ்ணம் தணிக்கும் இயற்கை பேதி மருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sugabethi Chooranam (சுகபேதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சுகபேதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Gentle, spasm-free laxative formulation for seasonal gut evacuation and cooling internal heat.',
    traditionalRoleTa: 'வயிற்று வலி இல்லாத சுகமான மலக்கழிவு மற்றும் பித்த உஷ்ணம் தணிக்கும் இயற்கை பேதி மருந்து.',
    badge: 'Gentle Purgative',
    badgeTa: 'சுக பேதி நிவாரணம்',
    image: '/images/products/ruthra-sugabethi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sugabethi-chooranam/front.jpg',
      '/images/products/ruthra-sugabethi-chooranam/angle.jpg',
      '/images/products/ruthra-sugabethi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sugabethi-chooranam/front.jpg',
      '/images/products/ruthra-sugabethi-chooranam/angle.jpg',
      '/images/products/ruthra-sugabethi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sugabethi Chooranam Classical Compound', tamilName: 'சுகபேதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sugabethi Chooranam prepared?',
        questionTa: 'ருத்ரா சுகபேதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sugabethi chooranam","ruthra sugabethi chooranam","chooranam","sugabethi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சுகபேதி சூரணம்","ருத்ரா சுகபேதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-038',
    name: 'Ruthra Thaleesathi Chooranam',
    tamilName: 'ருத்ரா தாளீசாதி சூரணம்',
    slug: 'ruthra-thaleesathi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical Taxus baccata compound for chronic cough, asthma, bronchitis, anorexia, and digestive weakness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இளைப்பு, ஆஸ்துமா, நாள்பட்ட இருமல், ஈளை மற்றும் பசியின்மை போக்கும் தலைசிறந்த சூரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thaleesathi Chooranam (தாளீசாதி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா தாளீசாதி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical Taxus baccata compound for chronic cough, asthma, bronchitis, anorexia, and digestive weakness.',
    traditionalRoleTa: 'இளைப்பு, ஆஸ்துமா, நாள்பட்ட இருமல், ஈளை மற்றும் பசியின்மை போக்கும் தலைசிறந்த சூரணம்.',
    badge: 'Respiratory & Lung Tonic',
    badgeTa: 'சுவாச & நுரையீரல் நலம்',
    image: '/images/products/ruthra-thaleesathi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thaleesathi-chooranam/front.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/angle.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thaleesathi-chooranam/front.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/angle.jpg',
      '/images/products/ruthra-thaleesathi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Thaleesathi Chooranam Classical Compound', tamilName: 'தாளீசாதி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thaleesathi Chooranam prepared?',
        questionTa: 'ருத்ரா தாளீசாதி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thaleesathi chooranam","ruthra thaleesathi chooranam","chooranam","thaleesathi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["தாளீசாதி சூரணம்","ருத்ரா தாளீசாதி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-039',
    name: 'Ruthra Thayirchundi Chooranam',
    tamilName: 'ருத்ரா தயிர்ச்சுண்டி சூரணம்',
    slug: 'ruthra-thayirchundi-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Buttermilk-processed dry ginger formula for irritable bowel, chronic diarrhea, and gastric hypermotility. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சீதபேதி, வயிற்று கடுப்பு, அஜீரண கழிச்சல் மற்றும் குடல் இரைச்சலை கட்டுப்படுத்தும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thayirchundi Chooranam (தயிர்ச்சுண்டி சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா தயிர்ச்சுண்டி சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Buttermilk-processed dry ginger formula for irritable bowel, chronic diarrhea, and gastric hypermotility.',
    traditionalRoleTa: 'சீதபேதி, வயிற்று கடுப்பு, அஜீரண கழிச்சல் மற்றும் குடல் இரைச்சலை கட்டுப்படுத்தும்.',
    badge: 'IBS & Diarrhea Care',
    badgeTa: 'சீதபேதி & குடல் நலம்',
    image: '/images/products/ruthra-thayirchundi-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thayirchundi-chooranam/front.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/angle.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thayirchundi-chooranam/front.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/angle.jpg',
      '/images/products/ruthra-thayirchundi-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Thayirchundi Chooranam Classical Compound', tamilName: 'தயிர்ச்சுண்டி சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thayirchundi Chooranam prepared?',
        questionTa: 'ருத்ரா தயிர்ச்சுண்டி சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thayirchundi chooranam","ruthra thayirchundi chooranam","chooranam","thayirchundi","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["தயிர்ச்சுண்டி சூரணம்","ருத்ரா தயிர்ச்சுண்டி சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-040',
    name: 'Ruthra Thirikadugu Chooranam',
    tamilName: 'ருத்ரா திரிகடுக சூரணம்',
    slug: 'ruthra-thirikadugu-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["respiratory","digestive-wellness"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Sunthi, Maricha, Pippali trio enhancing bio-availability, relieving sinusitis, colds, and gas. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த முக்கூட்டு; சளி, இருமல், ஆஸ்துமா மற்றும் செரிமான தீ தூண்டி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thirikadugu Chooranam (திரிகடுக சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திரிகடுக சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Sunthi, Maricha, Pippali trio enhancing bio-availability, relieving sinusitis, colds, and gas.',
    traditionalRoleTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த முக்கூட்டு; சளி, இருமல், ஆஸ்துமா மற்றும் செரிமான தீ தூண்டி.',
    badge: 'Tri-Spice Bio-Enhancer',
    badgeTa: 'முக்கூட்டு செரிமானம்',
    image: '/images/products/ruthra-thirikadugu-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thirikadugu-chooranam/front.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/angle.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thirikadugu-chooranam/front.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/angle.jpg',
      '/images/products/ruthra-thirikadugu-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Thirikadugu Chooranam Classical Compound', tamilName: 'திரிகடுக சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thirikadugu Chooranam prepared?',
        questionTa: 'ருத்ரா திரிகடுக சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thirikadugu chooranam","ruthra thirikadugu chooranam","chooranam","thirikadugu","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திரிகடுக சூரணம்","ருத்ரா திரிகடுக சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-041',
    name: 'Ruthra Thiripala Chooranam',
    tamilName: 'ருத்ரா திரிபலா சூரணம்',
    slug: 'ruthra-thiripala-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    categoryGroup: 'chooranam',
    concerns: ["digestive-wellness","metabolic-wellness","skin-hair"],
    price: 130,
    originalPrice: 150,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Haritaki, Bibhitaki, Amalaki formulation for colon cleansing, vision, antioxidant health, and detox. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய் சேர்ந்த கல்ப மருந்து; மலக்குடல் சுத்தி, கண் பார்வை, ரத்த சுத்தி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thiripala Chooranam (திரிபலா சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திரிபலா சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Haritaki, Bibhitaki, Amalaki formulation for colon cleansing, vision, antioxidant health, and detox.',
    traditionalRoleTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய் சேர்ந்த கல்ப மருந்து; மலக்குடல் சுத்தி, கண் பார்வை, ரத்த சுத்தி.',
    badge: 'Tri-Herb Rasayana',
    badgeTa: 'திரிபலா காயகற்பம்',
    image: '/images/products/ruthra-thiripala-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-thiripala-chooranam/front.jpg',
      '/images/products/ruthra-thiripala-chooranam/angle.jpg',
      '/images/products/ruthra-thiripala-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thiripala-chooranam/front.jpg',
      '/images/products/ruthra-thiripala-chooranam/angle.jpg',
      '/images/products/ruthra-thiripala-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Thiripala Chooranam Classical Compound', tamilName: 'திரிபலா சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 grams', instructionTa: '1-2 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or warm milk.', instructionTa: 'வெந்நீர், தேன் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1-2 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர், தேன் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thiripala Chooranam prepared?',
        questionTa: 'ருத்ரா திரிபலா சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thiripala chooranam","ruthra thiripala chooranam","chooranam","thiripala","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திரிபலா சூரணம்","ருத்ரா திரிபலா சூரணம்","சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: KUDINEER CHOORANAM (16 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-042',
    name: 'Ruthra Adathodai Kudineer Chooranam',
    tamilName: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம்',
    slug: 'ruthra-adathodai-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Vasaka decoction for acute and chronic bronchitis, dry cough, hemoptysis, and chest congestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மார்பு சளி, ஆஸ்துமா, இருமல், கபக்கட்டு மற்றும் சுவாச தடையை நீக்கும் ஆடாதோடை குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Adathodai Kudineer Chooranam (ஆடாதோடை குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Vasaka decoction for acute and chronic bronchitis, dry cough, hemoptysis, and chest congestion.',
    traditionalRoleTa: 'மார்பு சளி, ஆஸ்துமா, இருமல், கபக்கட்டு மற்றும் சுவாச தடையை நீக்கும் ஆடாதோடை குடிநீர்.',
    badge: 'Bronchial & Lung Care',
    badgeTa: 'மார்பு சளி & இருமல்',
    image: '/images/products/ruthra-adathodai-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-adathodai-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-adathodai-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-adathodai-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Adathodai Kudineer Chooranam Classical Compound', tamilName: 'ஆடாதோடை குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Adathodai Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["adathodai kudineer chooranam","ruthra adathodai kudineer chooranam","kudineer chooranam","adathodai","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஆடாதோடை குடிநீர் சூரணம்","ருத்ரா ஆடாதோடை குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-043',
    name: 'Ruthra Kabasura Kudineer Chooranam',
    tamilName: 'ருத்ரா கபசூர குடிநீர் சூரணம்',
    slug: 'ruthra-kabasura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Celebrated 15-herb Siddha immunomodulatory decoction for respiratory viral fevers, flu, and cough. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'காய்ச்சல், சளி, இருமல், வைரஸ் தொற்று மற்றும் நோய் எதிர்ப்பு சக்திக்கு தலைசிறந்த 15 மூலிகை குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kabasura Kudineer Chooranam (கபசூர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கபசூர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Celebrated 15-herb Siddha immunomodulatory decoction for respiratory viral fevers, flu, and cough.',
    traditionalRoleTa: 'காய்ச்சல், சளி, இருமல், வைரஸ் தொற்று மற்றும் நோய் எதிர்ப்பு சக்திக்கு தலைசிறந்த 15 மூலிகை குடிநீர்.',
    badge: 'Immune & Viral Fever Shield',
    badgeTa: 'காய்ச்சல் & நோய் எதிர்ப்பு',
    image: '/images/products/ruthra-kabasura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kabasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kabasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kabasura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kabasura Kudineer Chooranam Classical Compound', tamilName: 'கபசூர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kabasura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா கபசூர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kabasura kudineer chooranam","ruthra kabasura kudineer chooranam","kudineer chooranam","kabasura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கபசூர குடிநீர் சூரணம்","ருத்ரா கபசூர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-044',
    name: 'Ruthra Kalladaippu Kudineer Chooranam',
    tamilName: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம்',
    slug: 'ruthra-kalladaippu-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Specialized renal diuretic decoction for disintegrating and expelling urinary and bladder stones. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீரக கற்கள், சிறுநீர் அடைப்பு, எரிச்சல் மற்றும் மூத்திர தாரை வலிகளுக்கு பிரத்யேக குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kalladaippu Kudineer Chooranam (கல்லடைப்பு குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized renal diuretic decoction for disintegrating and expelling urinary and bladder stones.',
    traditionalRoleTa: 'சிறுநீரக கற்கள், சிறுநீர் அடைப்பு, எரிச்சல் மற்றும் மூத்திர தாரை வலிகளுக்கு பிரத்யேக குடிநீர்.',
    badge: 'Renal Calculus Expeller',
    badgeTa: 'சிறுநீரக கல் கரைப்பான்',
    image: '/images/products/ruthra-kalladaippu-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-kalladaippu-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Kalladaippu Kudineer Chooranam Classical Compound', tamilName: 'கல்லடைப்பு குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kalladaippu Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kalladaippu kudineer chooranam","ruthra kalladaippu kudineer chooranam","kudineer chooranam","kalladaippu","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கல்லடைப்பு குடிநீர் சூரணம்","ருத்ரா கல்லடைப்பு குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-045',
    name: 'Ruthra Malattukarpa Kudineer Chooranam',
    tamilName: 'ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம்',
    slug: 'ruthra-malattukarpa-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["womens-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Uterine restorative decoction supporting female fertility, ovulatory health, and menstrual rhythm. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கருப்பை பலவீனம், சினை முட்டை வளர்ச்சி, மலட்டுத்தன்மை நீக்கம் மற்றும் மகளிர் கருத்தரிப்பு நலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Malattukarpa Kudineer Chooranam (மலட்டுக்கற்ப குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Uterine restorative decoction supporting female fertility, ovulatory health, and menstrual rhythm.',
    traditionalRoleTa: 'கருப்பை பலவீனம், சினை முட்டை வளர்ச்சி, மலட்டுத்தன்மை நீக்கம் மற்றும் மகளிர் கருத்தரிப்பு நலம்.',
    badge: 'Fertility & Uterine Care',
    badgeTa: 'கருப்பை & கருத்தரிப்பு நலம்',
    image: '/images/products/ruthra-malattukarpa-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-malattukarpa-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Malattukarpa Kudineer Chooranam Classical Compound', tamilName: 'மலட்டுக்கற்ப குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Malattukarpa Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["malattukarpa kudineer chooranam","ruthra malattukarpa kudineer chooranam","kudineer chooranam","malattukarpa","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மலட்டுக்கற்ப குடிநீர் சூரணம்","ருத்ரா மலட்டுக்கற்ப குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-046',
    name: 'Ruthra Mandurathi Kudineer Chooranam',
    tamilName: 'ருத்ரா மண்டூராதி குடிநீர் சூரணம்',
    slug: 'ruthra-mandurathi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Iron-synergistic botanical decoction for severe anemia, edema, swelling, and liver enlargement. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த சோகை, பாண்டு நோய், உடல் வீக்கம் மற்றும் சோகைக்கு உகந்த மண்டூர குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mandurathi Kudineer Chooranam (மண்டூராதி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மண்டூராதி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Iron-synergistic botanical decoction for severe anemia, edema, swelling, and liver enlargement.',
    traditionalRoleTa: 'ரத்த சோகை, பாண்டு நோய், உடல் வீக்கம் மற்றும் சோகைக்கு உகந்த மண்டூர குடிநீர்.',
    badge: 'Anemia & Edema Relief',
    badgeTa: 'ரத்த சோகை & உடல் வீக்கம்',
    image: '/images/products/ruthra-mandurathi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-mandurathi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mandurathi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-mandurathi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Mandurathi Kudineer Chooranam Classical Compound', tamilName: 'மண்டூராதி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mandurathi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா மண்டூராதி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mandurathi kudineer chooranam","ruthra mandurathi kudineer chooranam","kudineer chooranam","mandurathi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மண்டூராதி குடிநீர் சூரணம்","ருத்ரா மண்டூராதி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-047',
    name: 'Ruthra Manjal Noi Kudineer Chooranam',
    tamilName: 'ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம்',
    slug: 'ruthra-manjal-noi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Hepatoprotective decoction for infectious jaundice, elevated bilirubin, and sluggish liver function. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மஞ்சள் காமாலை, கல்லீரல் வீக்கம், பசியின்மை மற்றும் பித்த கழிவு நீக்கத்திற்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Manjal Noi Kudineer Chooranam (மஞ்சள் நோய் குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Hepatoprotective decoction for infectious jaundice, elevated bilirubin, and sluggish liver function.',
    traditionalRoleTa: 'மஞ்சள் காமாலை, கல்லீரல் வீக்கம், பசியின்மை மற்றும் பித்த கழிவு நீக்கத்திற்கு அருமருந்து.',
    badge: 'Jaundice & Liver Care',
    badgeTa: 'மஞ்சள் காமாலை நிவாரணம்',
    image: '/images/products/ruthra-manjal-noi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-manjal-noi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Manjal Noi Kudineer Chooranam Classical Compound', tamilName: 'மஞ்சள் நோய் குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Manjal Noi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["manjal noi kudineer chooranam","ruthra manjal noi kudineer chooranam","kudineer chooranam","manjal","noi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மஞ்சள் நோய் குடிநீர் சூரணம்","ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-048',
    name: 'Ruthra Naakupoochi Kudineer Chooranam',
    tamilName: 'ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம்',
    slug: 'ruthra-naakupoochi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["digestive-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Anthelmintic decoction for eradicating roundworms, pinworms, tapeworms, and abdominal bloating. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நாக்குப்பூச்சி, கீரிப்பூச்சி, கொக்கிப்புழு போன்ற குடற்புழுக்களை வெளியேற்றும் மூலிகை குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Naakupoochi Kudineer Chooranam (நாக்குப்பூச்சி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Anthelmintic decoction for eradicating roundworms, pinworms, tapeworms, and abdominal bloating.',
    traditionalRoleTa: 'நாக்குப்பூச்சி, கீரிப்பூச்சி, கொக்கிப்புழு போன்ற குடற்புழுக்களை வெளியேற்றும் மூலிகை குடிநீர்.',
    badge: 'Intestinal Worm Expeller',
    badgeTa: 'குடற்புழு நீக்கி',
    image: '/images/products/ruthra-naakupoochi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-naakupoochi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Naakupoochi Kudineer Chooranam Classical Compound', tamilName: 'நாக்குப்பூச்சி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Naakupoochi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["naakupoochi kudineer chooranam","ruthra naakupoochi kudineer chooranam","kudineer chooranam","naakupoochi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நாக்குப்பூச்சி குடிநீர் சூரணம்","ருத்ரா நாக்குப்பூச்சி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-049',
    name: 'Ruthra Nannari Kudineer Chooranam',
    tamilName: 'ருத்ரா நன்னாரி குடிநீர் சூரணம்',
    slug: 'ruthra-nannari-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Hemidesmus indicus cooling decoction for burning urination, body heat dissipation, and blood purifying. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் உஷ்ணம், சிறுநீர் எரிச்சல், பித்த அழற்சி மற்றும் ரத்த சுத்திக்கு சிறந்த நன்னாரி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nannari Kudineer Chooranam (நன்னாரி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நன்னாரி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Hemidesmus indicus cooling decoction for burning urination, body heat dissipation, and blood purifying.',
    traditionalRoleTa: 'உடல் உஷ்ணம், சிறுநீர் எரிச்சல், பித்த அழற்சி மற்றும் ரத்த சுத்திக்கு சிறந்த நன்னாரி.',
    badge: 'Herbal Body Coolant',
    badgeTa: 'உடல் உஷ்ண நிவாரணம்',
    image: '/images/products/ruthra-nannari-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nannari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nannari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nannari-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nannari Kudineer Chooranam Classical Compound', tamilName: 'நன்னாரி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nannari Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நன்னாரி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nannari kudineer chooranam","ruthra nannari kudineer chooranam","kudineer chooranam","nannari","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நன்னாரி குடிநீர் சூரணம்","ருத்ரா நன்னாரி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-050',
    name: 'Ruthra Neermulli Kudineer Chooranam',
    tamilName: 'ருத்ரா நீர்முள்ளி குடிநீர் சூரணம்',
    slug: 'ruthra-neermulli-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Potent diuretic decoction for ascites, generalized dropsy, pedal edema, and kidney flushing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீர் கட்டு, கால் வீக்கம், பெருவயிறு மற்றும் சிறுநீரக கழிவுகளை வெளியேற்றும் நீர்முள்ளி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Neermulli Kudineer Chooranam (நீர்முள்ளி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நீர்முள்ளி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent diuretic decoction for ascites, generalized dropsy, pedal edema, and kidney flushing.',
    traditionalRoleTa: 'நீர் கட்டு, கால் வீக்கம், பெருவயிறு மற்றும் சிறுநீரக கழிவுகளை வெளியேற்றும் நீர்முள்ளி.',
    badge: 'Diuretic & Dropsy Care',
    badgeTa: 'நீர்க்கட்டு & கால் வீக்கம்',
    image: '/images/products/ruthra-neermulli-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-neermulli-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-neermulli-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-neermulli-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Neermulli Kudineer Chooranam Classical Compound', tamilName: 'நீர்முள்ளி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Neermulli Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நீர்முள்ளி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["neermulli kudineer chooranam","ruthra neermulli kudineer chooranam","kudineer chooranam","neermulli","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நீர்முள்ளி குடிநீர் சூரணம்","ருத்ரா நீர்முள்ளி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-051',
    name: 'Ruthra Nilavembu Kudineer Chooranam',
    tamilName: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம்',
    slug: 'ruthra-nilavembu-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical antipyretic 9-herb blend for dengue, chikungunya, intermittent fevers, and viral fatigue. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'டெங்கு, சிக்குன்குனியா, அனைத்து வகை விஷ காய்ச்சல்கள் மற்றும் உடல் சோர்வு போக்கும் நிலவேம்பு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nilavembu Kudineer Chooranam (நிலவேம்பு குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical antipyretic 9-herb blend for dengue, chikungunya, intermittent fevers, and viral fatigue.',
    traditionalRoleTa: 'டெங்கு, சிக்குன்குனியா, அனைத்து வகை விஷ காய்ச்சல்கள் மற்றும் உடல் சோர்வு போக்கும் நிலவேம்பு.',
    badge: 'Antipyretic & Fever Shield',
    badgeTa: 'விஷ காய்ச்சல் நிவாரணம்',
    image: '/images/products/ruthra-nilavembu-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nilavembu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nilavembu-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nilavembu-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nilavembu Kudineer Chooranam Classical Compound', tamilName: 'நிலவேம்பு குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nilavembu Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nilavembu kudineer chooranam","ruthra nilavembu kudineer chooranam","kudineer chooranam","nilavembu","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நிலவேம்பு குடிநீர் சூரணம்","ருத்ரா நிலவேம்பு குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-052',
    name: 'Ruthra Nochi Kudineer Chooranam',
    tamilName: 'ருத்ரா நொச்சி குடிநீர் சூரணம்',
    slug: 'ruthra-nochi-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","joint-mobility"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Vitex negundo decoction for heavy sinus congestion, vatha headaches, and muscular soreness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பீனிசம், தலைபாரம், சளி அடைப்பு, மூக்கடைப்பு மற்றும் வாத வலிகளுக்கு சிறந்த நொச்சி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nochi Kudineer Chooranam (நொச்சி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நொச்சி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Vitex negundo decoction for heavy sinus congestion, vatha headaches, and muscular soreness.',
    traditionalRoleTa: 'பீனிசம், தலைபாரம், சளி அடைப்பு, மூக்கடைப்பு மற்றும் வாத வலிகளுக்கு சிறந்த நொச்சி.',
    badge: 'Sinus & Headache Relief',
    badgeTa: 'சைனஸ் & தலைபாரம்',
    image: '/images/products/ruthra-nochi-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-nochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nochi-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-nochi-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Nochi Kudineer Chooranam Classical Compound', tamilName: 'நொச்சி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nochi Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா நொச்சி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nochi kudineer chooranam","ruthra nochi kudineer chooranam","kudineer chooranam","nochi","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நொச்சி குடிநீர் சூரணம்","ருத்ரா நொச்சி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-053',
    name: 'Ruthra Pidangunari Kudineer Chooranam',
    tamilName: 'ருத்ரா பிடங்குநாரி குடிநீர் சூரணம்',
    slug: 'ruthra-pidangunari-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["respiratory","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical formulation for childhood chronic fevers, deep respiratory rattles, and indigestion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குழந்தைகளின் நாள்பட்ட காய்ச்சல், மாந்தம், கபக்கட்டு மற்றும் மார்பு சளி போக்கும் குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pidangunari Kudineer Chooranam (பிடங்குநாரி குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பிடங்குநாரி குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical formulation for childhood chronic fevers, deep respiratory rattles, and indigestion.',
    traditionalRoleTa: 'குழந்தைகளின் நாள்பட்ட காய்ச்சல், மாந்தம், கபக்கட்டு மற்றும் மார்பு சளி போக்கும் குடிநீர்.',
    badge: 'Pediatric Fever & Phlegm',
    badgeTa: 'குழந்தை காய்ச்சல் & மாந்தம்',
    image: '/images/products/ruthra-pidangunari-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pidangunari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pidangunari-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pidangunari-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pidangunari Kudineer Chooranam Classical Compound', tamilName: 'பிடங்குநாரி குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pidangunari Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா பிடங்குநாரி குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pidangunari kudineer chooranam","ruthra pidangunari kudineer chooranam","kudineer chooranam","pidangunari","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பிடங்குநாரி குடிநீர் சூரணம்","ருத்ரா பிடங்குநாரி குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-054',
    name: 'Ruthra Pithasura Kudineer Chooranam',
    tamilName: 'ருத்ரா பித்தசுர குடிநீர் சூரணம்',
    slug: 'ruthra-pithasura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Targeted cooling decoction for bilious fevers, intense thirst, bitter mouth taste, and dizziness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த காய்ச்சல், நாக்கு கசப்பு, தலைச்சுற்றல், வாந்தி மற்றும் அதீத தாகத்தை தணிக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pithasura Kudineer Chooranam (பித்தசுர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பித்தசுர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Targeted cooling decoction for bilious fevers, intense thirst, bitter mouth taste, and dizziness.',
    traditionalRoleTa: 'பித்த காய்ச்சல், நாக்கு கசப்பு, தலைச்சுற்றல், வாந்தி மற்றும் அதீத தாகத்தை தணிக்கும்.',
    badge: 'Bilious Fever Pacifier',
    badgeTa: 'பித்த காய்ச்சல் நிவாரணம்',
    image: '/images/products/ruthra-pithasura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-pithasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pithasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-pithasura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Pithasura Kudineer Chooranam Classical Compound', tamilName: 'பித்தசுர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pithasura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா பித்தசுர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pithasura kudineer chooranam","ruthra pithasura kudineer chooranam","kudineer chooranam","pithasura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பித்தசுர குடிநீர் சூரணம்","ருத்ரா பித்தசுர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-055',
    name: 'Ruthra Sarvasura Kudineer Chooranam',
    tamilName: 'ருத்ரா சர்வசுர குடிநீர் சூரணம்',
    slug: 'ruthra-sarvasura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["metabolic-wellness","respiratory"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Universal antipyretic compound effective across acute, chronic, and periodic pyrexia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சகல சுரங்கள், முறை காய்ச்சல், நடுக்க காய்ச்சல் மற்றும் உடல் வலிகளை போக்கும் சர்வசுர குடிநீர். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sarvasura Kudineer Chooranam (சர்வசுர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சர்வசுர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Universal antipyretic compound effective across acute, chronic, and periodic pyrexia.',
    traditionalRoleTa: 'சகல சுரங்கள், முறை காய்ச்சல், நடுக்க காய்ச்சல் மற்றும் உடல் வலிகளை போக்கும் சர்வசுர குடிநீர்.',
    badge: 'Universal Antipyretic',
    badgeTa: 'சர்வ சுரம் போக்கி',
    image: '/images/products/ruthra-sarvasura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-sarvasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sarvasura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-sarvasura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Sarvasura Kudineer Chooranam Classical Compound', tamilName: 'சர்வசுர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sarvasura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா சர்வசுர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sarvasura kudineer chooranam","ruthra sarvasura kudineer chooranam","kudineer chooranam","sarvasura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சர்வசுர குடிநீர் சூரணம்","ருத்ரா சர்வசுர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-056',
    name: 'Ruthra Soodhagathai Udaikum Kudineer Chooranam',
    tamilName: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம்',
    slug: 'ruthra-soodhagathai-udaikum-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["womens-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Emmenagogue decoction for delayed periods, secondary amenorrhea, and menstrual blockages. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சூதக தடை, தாமதமான மாதவிடாய், அடிவயிற்று வலி மற்றும் மாதவிடாய் சுழற்சி ஒழுங்குபடுத்தி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Soodhagathai Udaikum Kudineer Chooranam (சூதகத்தை உடைக்கும் குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Emmenagogue decoction for delayed periods, secondary amenorrhea, and menstrual blockages.',
    traditionalRoleTa: 'சூதக தடை, தாமதமான மாதவிடாய், அடிவயிற்று வலி மற்றும் மாதவிடாய் சுழற்சி ஒழுங்குபடுத்தி.',
    badge: 'Menstrual Regulator',
    badgeTa: 'மாதவிடாய் தூண்டி',
    image: '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-soodhagathai-udaikum-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Soodhagathai Udaikum Kudineer Chooranam Classical Compound', tamilName: 'சூதகத்தை உடைக்கும் குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Soodhagathai Udaikum Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["soodhagathai udaikum kudineer chooranam","ruthra soodhagathai udaikum kudineer chooranam","kudineer chooranam","soodhagathai","udaikum","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சூதகத்தை உடைக்கும் குடிநீர் சூரணம்","ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-057',
    name: 'Ruthra Vatha Sura Kudineer Chooranam',
    tamilName: 'ருத்ரா வாத சுர குடிநீர் சூரணம்',
    slug: 'ruthra-vatha-sura-kudineer-chooranam',
    medicalSystem: 'siddha',
    formulation: 'Kudineer Chooranam',
    formulationTa: 'குடிநீர் சூரணம்',
    categoryGroup: 'kudineer-chooranam',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 160,
    originalPrice: 185,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Specific decoction for fevers accompanied by intense joint agony, shivering, and body stiffness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாத சுரம், மூட்டு வலிகளுடன் கூடிய காய்ச்சல், நடுக்கம் மற்றும் உடம்பு குடைச்சல் போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vatha Sura Kudineer Chooranam (வாத சுர குடிநீர் சூரணம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வாத சுர குடிநீர் சூரணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specific decoction for fevers accompanied by intense joint agony, shivering, and body stiffness.',
    traditionalRoleTa: 'வாத சுரம், மூட்டு வலிகளுடன் கூடிய காய்ச்சல், நடுக்கம் மற்றும் உடம்பு குடைச்சல் போக்கி.',
    badge: 'Rheumatic Fever Relief',
    badgeTa: 'வாத காய்ச்சல் நிவாரணம்',
    image: '/images/products/ruthra-vatha-sura-kudineer-chooranam/front.jpg',
    images: [
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/front.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/angle.jpg',
      '/images/products/ruthra-vatha-sura-kudineer-chooranam/back.jpg'
    ],
    ingredients: [
      { name: 'Vatha Sura Kudineer Chooranam Classical Compound', tamilName: 'வாத சுர குடிநீர் சூரணம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams boiled in 240ml water reduced to 60ml', instructionTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Decoction (Kashayam).', instructionTa: 'குடிநீர் கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 grams boiled in 240ml water reduced to 60ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Decoction (Kashayam)',
      amountTa: '5-10 கிராம் பொடியை 240 மி.லி தண்ணீரில் இட்டு 60 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'குடிநீர் கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vatha Sura Kudineer Chooranam prepared?',
        questionTa: 'ருத்ரா வாத சுர குடிநீர் சூரணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vatha sura kudineer chooranam","ruthra vatha sura kudineer chooranam","kudineer chooranam","vatha","sura","kudineer","chooranam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வாத சுர குடிநீர் சூரணம்","ருத்ரா வாத சுர குடிநீர் சூரணம்","குடிநீர் சூரணம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: KUDINEER (1 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-058',
    name: 'Ruthra Oma Kudineer',
    tamilName: 'ருத்ரா ஓம குடிநீர்',
    slug: 'ruthra-oma-kudineer',
    medicalSystem: 'siddha',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    categoryGroup: 'kudineer',
    concerns: ["digestive-wellness"],
    price: 110,
    originalPrice: 130,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Ready liquid ajwain extract for instant gas relief, acute colic, dyspepsia, and infantile gripes. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாயு தொல்லை, அஜீரணம், வயிற்று வலி, பொருமல் மற்றும் குழந்தைகளுக்கு மாந்த நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Oma Kudineer (ஓம குடிநீர்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஓம குடிநீர் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Ready liquid ajwain extract for instant gas relief, acute colic, dyspepsia, and infantile gripes.',
    traditionalRoleTa: 'வாயு தொல்லை, அஜீரணம், வயிற்று வலி, பொருமல் மற்றும் குழந்தைகளுக்கு மாந்த நிவாரணம்.',
    badge: 'Instant Digestive Water',
    badgeTa: 'ஓம செரிமான நீர்',
    image: '/images/products/ruthra-oma-kudineer/front.jpg',
    images: [
      '/images/products/ruthra-oma-kudineer/front.jpg',
      '/images/products/ruthra-oma-kudineer/angle.jpg',
      '/images/products/ruthra-oma-kudineer/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-oma-kudineer/front.jpg',
      '/images/products/ruthra-oma-kudineer/angle.jpg',
      '/images/products/ruthra-oma-kudineer/back.jpg'
    ],
    ingredients: [
      { name: 'Oma Kudineer Classical Compound', tamilName: 'ஓம குடிநீர் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-30 ml', instructionTa: '15-30 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Direct or diluted with equal quantity of warm water.', instructionTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '15-30 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Direct or diluted with equal quantity of warm water',
      amountTa: '15-30 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Oma Kudineer prepared?',
        questionTa: 'ருத்ரா ஓம குடிநீர் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["oma kudineer","ruthra oma kudineer","kudineer","oma","kudineer","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஓம குடிநீர்","ருத்ரா ஓம குடிநீர்","குடிநீர்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: MANAPAGU (2 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-059',
    name: 'Ruthra Nannar Manapagu',
    tamilName: 'ருத்ரா நன்னாரி மணப்பாகு',
    slug: 'ruthra-nannar-manapagu',
    medicalSystem: 'siddha',
    formulation: 'Manapagu',
    formulationTa: 'மணப்பாகு',
    categoryGroup: 'manapagu',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 175,
    originalPrice: 200,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Delicious cooling herbal syrup for internal heat, burning urine, dehydration, and prickly heat. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுவையான மூலிகை நன்னாரி சிரப்; உடல் சூடு, சிறுநீர் எரிச்சல், நீர்வேட்கை மற்றும் வேனிற்கட்டி போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nannar Manapagu (நன்னாரி மணப்பாகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நன்னாரி மணப்பாகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Delicious cooling herbal syrup for internal heat, burning urine, dehydration, and prickly heat.',
    traditionalRoleTa: 'சுவையான மூலிகை நன்னாரி சிரப்; உடல் சூடு, சிறுநீர் எரிச்சல், நீர்வேட்கை மற்றும் வேனிற்கட்டி போக்கி.',
    badge: 'Cooling Herbal Cordial',
    badgeTa: 'நன்னாரி மூலிகை சிரப்',
    image: '/images/products/ruthra-nannar-manapagu/front.jpg',
    images: [
      '/images/products/ruthra-nannar-manapagu/front.jpg',
      '/images/products/ruthra-nannar-manapagu/angle.jpg',
      '/images/products/ruthra-nannar-manapagu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nannar-manapagu/front.jpg',
      '/images/products/ruthra-nannar-manapagu/angle.jpg',
      '/images/products/ruthra-nannar-manapagu/back.jpg'
    ],
    ingredients: [
      { name: 'Nannar Manapagu Classical Compound', tamilName: 'நன்னாரி மணப்பாகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or milk.', instructionTa: 'வெந்நீர் அல்லது பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or milk',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nannar Manapagu prepared?',
        questionTa: 'ருத்ரா நன்னாரி மணப்பாகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nannar manapagu","ruthra nannar manapagu","manapagu","nannar","manapagu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நன்னாரி மணப்பாகு","ருத்ரா நன்னாரி மணப்பாகு","மணப்பாகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-060',
    name: 'Ruthra Thurinj Manapagu',
    tamilName: 'ருத்ரா துரிஞ்சி மணப்பாகு',
    slug: 'ruthra-thurinj-manapagu',
    medicalSystem: 'siddha',
    formulation: 'Manapagu',
    formulationTa: 'மணப்பாகு',
    categoryGroup: 'manapagu',
    concerns: ["digestive-wellness","womens-wellness"],
    price: 175,
    originalPrice: 200,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Citrus medica cordial for morning sickness, pregnancy nausea, loss of taste, and bile regurgitation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கர்ப்பிணிகளின் வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் பித்த நெஞ்செரிச்சலை போக்கும் துரிஞ்சி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thurinj Manapagu (துரிஞ்சி மணப்பாகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா துரிஞ்சி மணப்பாகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Citrus medica cordial for morning sickness, pregnancy nausea, loss of taste, and bile regurgitation.',
    traditionalRoleTa: 'கர்ப்பிணிகளின் வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் பித்த நெஞ்செரிச்சலை போக்கும் துரிஞ்சி.',
    badge: 'Nausea & Morning Sickness',
    badgeTa: 'வாந்தி & பித்த மயக்கம்',
    image: '/images/products/ruthra-thurinj-manapagu/front.jpg',
    images: [
      '/images/products/ruthra-thurinj-manapagu/front.jpg',
      '/images/products/ruthra-thurinj-manapagu/angle.jpg',
      '/images/products/ruthra-thurinj-manapagu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thurinj-manapagu/front.jpg',
      '/images/products/ruthra-thurinj-manapagu/angle.jpg',
      '/images/products/ruthra-thurinj-manapagu/back.jpg'
    ],
    ingredients: [
      { name: 'Thurinj Manapagu Classical Compound', tamilName: 'துரிஞ்சி மணப்பாகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or milk.', instructionTa: 'வெந்நீர் அல்லது பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or milk',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெந்நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thurinj Manapagu prepared?',
        questionTa: 'ருத்ரா துரிஞ்சி மணப்பாகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thurinj manapagu","ruthra thurinj manapagu","manapagu","thurinj","manapagu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["துரிஞ்சி மணப்பாகு","ருத்ரா துரிஞ்சி மணப்பாகு","மணப்பாகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: LEGIYAM (11 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-061',
    name: 'Ruthra Aswagandhi Legiyam',
    tamilName: 'ருத்ரா அஸ்வகந்தி லேகியம்',
    slug: 'ruthra-aswagandhi-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Premier nutritive electuary for physical strength, muscle mass building, nervous debility, and stamina. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'உடல் பலம், தசை வளர்ச்சி, நரம்பு தளர்ச்சி போக்கி, ஆண்மை மற்றும் விந்து விருத்திக்கு உன்னத லேகியம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Aswagandhi Legiyam (அஸ்வகந்தி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Premier nutritive electuary for physical strength, muscle mass building, nervous debility, and stamina.',
    traditionalRoleTa: 'உடல் பலம், தசை வளர்ச்சி, நரம்பு தளர்ச்சி போக்கி, ஆண்மை மற்றும் விந்து விருத்திக்கு உன்னத லேகியம்.',
    badge: 'Nutritive Strength Tonic',
    badgeTa: 'உடல் பலம் & தாது புஷ்டி',
    image: '/images/products/ruthra-aswagandhi-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-aswagandhi-legiyam/front.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/angle.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aswagandhi-legiyam/front.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/angle.jpg',
      '/images/products/ruthra-aswagandhi-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Aswagandhi Legiyam Classical Compound', tamilName: 'அஸ்வகந்தி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Aswagandhi Legiyam prepared?',
        questionTa: 'ருத்ரா அஸ்வகந்தி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["aswagandhi legiyam","ruthra aswagandhi legiyam","legiyam","aswagandhi","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அஸ்வகந்தி லேகியம்","ருத்ரா அஸ்வகந்தி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-062',
    name: 'Ruthra Inji Legiyam',
    tamilName: 'ருத்ரா இஞ்சி லேகியம்',
    slug: 'ruthra-inji-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Ginger-based electuary for sluggish digestion, gas accumulation, nausea, and morning heaviness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'செரிமான மந்தம், பித்த வாந்தி, பசியின்மை, நெஞ்செரிச்சல் மற்றும் வாயு தொல்லை போக்கும் இஞ்சி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Inji Legiyam (இஞ்சி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா இஞ்சி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Ginger-based electuary for sluggish digestion, gas accumulation, nausea, and morning heaviness.',
    traditionalRoleTa: 'செரிமான மந்தம், பித்த வாந்தி, பசியின்மை, நெஞ்செரிச்சல் மற்றும் வாயு தொல்லை போக்கும் இஞ்சி.',
    badge: 'Digestive & Appetizer Jam',
    badgeTa: 'செரிமானம் & பசி தூண்டி',
    image: '/images/products/ruthra-inji-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-inji-legiyam/front.jpg',
      '/images/products/ruthra-inji-legiyam/angle.jpg',
      '/images/products/ruthra-inji-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-inji-legiyam/front.jpg',
      '/images/products/ruthra-inji-legiyam/angle.jpg',
      '/images/products/ruthra-inji-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Inji Legiyam Classical Compound', tamilName: 'இஞ்சி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Inji Legiyam prepared?',
        questionTa: 'ருத்ரா இஞ்சி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["inji legiyam","ruthra inji legiyam","legiyam","inji","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["இஞ்சி லேகியம்","ருத்ரா இஞ்சி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-063',
    name: 'Ruthra Kandathri Legiyam',
    tamilName: 'ருத்ரா கண்டங்கத்திரி லேகியம்',
    slug: 'ruthra-kandathri-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["respiratory"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Solanum surattense jam for bronchial asthma, chronic productive cough, wheezing, and rib cage tightness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஆஸ்துமா, ஈளை இருமல், மார்பு சளி, இரைப்பு மற்றும் சுவாச கோளாறுகளுக்கு சிறந்த லேகியம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kandathri Legiyam (கண்டங்கத்திரி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கண்டங்கத்திரி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Solanum surattense jam for bronchial asthma, chronic productive cough, wheezing, and rib cage tightness.',
    traditionalRoleTa: 'ஆஸ்துமா, ஈளை இருமல், மார்பு சளி, இரைப்பு மற்றும் சுவாச கோளாறுகளுக்கு சிறந்த லேகியம்.',
    badge: 'Bronchial & Asthma Care',
    badgeTa: 'ஆஸ்துமா & சளி நிவாரணம்',
    image: '/images/products/ruthra-kandathri-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-kandathri-legiyam/front.jpg',
      '/images/products/ruthra-kandathri-legiyam/angle.jpg',
      '/images/products/ruthra-kandathri-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kandathri-legiyam/front.jpg',
      '/images/products/ruthra-kandathri-legiyam/angle.jpg',
      '/images/products/ruthra-kandathri-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Kandathri Legiyam Classical Compound', tamilName: 'கண்டங்கத்திரி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kandathri Legiyam prepared?',
        questionTa: 'ருத்ரா கண்டங்கத்திரி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kandathri legiyam","ruthra kandathri legiyam","legiyam","kandathri","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கண்டங்கத்திரி லேகியம்","ருத்ரா கண்டங்கத்திரி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-064',
    name: 'Ruthra Karisalai Legiyam',
    tamilName: 'ருத்ரா கரிசலாங்கண்ணி லேகியம்',
    slug: 'ruthra-karisalai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Eclipta prostrata liver rejuvenator for anemia, jaundice recovery, hepatic detox, and hair vitality. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கல்லீரல் பலம், காமாலை குணமாக, ரத்த சோகை நீக்கம் மற்றும் கூந்தல் வளர்ச்சிக்கு கரிசாலை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karisalai Legiyam (கரிசலாங்கண்ணி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கரிசலாங்கண்ணி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Eclipta prostrata liver rejuvenator for anemia, jaundice recovery, hepatic detox, and hair vitality.',
    traditionalRoleTa: 'கல்லீரல் பலம், காமாலை குணமாக, ரத்த சோகை நீக்கம் மற்றும் கூந்தல் வளர்ச்சிக்கு கரிசாலை.',
    badge: 'Hepatic Rejuvenator',
    badgeTa: 'கல்லீரல் & ரத்த சோகை',
    image: '/images/products/ruthra-karisalai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-karisalai-legiyam/front.jpg',
      '/images/products/ruthra-karisalai-legiyam/angle.jpg',
      '/images/products/ruthra-karisalai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karisalai-legiyam/front.jpg',
      '/images/products/ruthra-karisalai-legiyam/angle.jpg',
      '/images/products/ruthra-karisalai-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Karisalai Legiyam Classical Compound', tamilName: 'கரிசலாங்கண்ணி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karisalai Legiyam prepared?',
        questionTa: 'ருத்ரா கரிசலாங்கண்ணி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karisalai legiyam","ruthra karisalai legiyam","legiyam","karisalai","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கரிசலாங்கண்ணி லேகியம்","ருத்ரா கரிசலாங்கண்ணி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-065',
    name: 'Ruthra Karunai Legiyam',
    tamilName: 'ருத்ரா கருணை லேகியம்',
    slug: 'ruthra-karunai-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Elephant foot yam jam for bleeding/non-bleeding piles, fistula, anal fissure pain, and constipation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மூல நோய், உள் மூலம், வெளி மூலம், பவுத்திரம், ஆசனவாய் எரிச்சல் மற்றும் ரத்த மூலத்திற்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karunai Legiyam (கருணை லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கருணை லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Elephant foot yam jam for bleeding/non-bleeding piles, fistula, anal fissure pain, and constipation.',
    traditionalRoleTa: 'மூல நோய், உள் மூலம், வெளி மூலம், பவுத்திரம், ஆசனவாய் எரிச்சல் மற்றும் ரத்த மூலத்திற்கு அருமருந்து.',
    badge: 'Piles & Fissure Jam',
    badgeTa: 'மூல நோய் நிவாரணம்',
    image: '/images/products/ruthra-karunai-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-karunai-legiyam/front.jpg',
      '/images/products/ruthra-karunai-legiyam/angle.jpg',
      '/images/products/ruthra-karunai-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karunai-legiyam/front.jpg',
      '/images/products/ruthra-karunai-legiyam/angle.jpg',
      '/images/products/ruthra-karunai-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Karunai Legiyam Classical Compound', tamilName: 'கருணை லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karunai Legiyam prepared?',
        questionTa: 'ருத்ரா கருணை லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karunai legiyam","ruthra karunai legiyam","legiyam","karunai","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கருணை லேகியம்","ருத்ரா கருணை லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-066',
    name: 'Ruthra Madhanasanjeevi Legiyam',
    tamilName: 'ருத்ரா மதனசஞ்சீவி லேகியம்',
    slug: 'ruthra-madhanasanjeevi-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Aphrodisiac and restorative jam for premature exhaustion, vitality restoration, and virility. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தாது பலவீனம், விந்து அணுக்கள் பெருக்கம், ஆண்மை குறைபாடு மற்றும் நரம்பு சோர்வு போக்கும் மதனசஞ்சீவி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Madhanasanjeevi Legiyam (மதனசஞ்சீவி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மதனசஞ்சீவி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Aphrodisiac and restorative jam for premature exhaustion, vitality restoration, and virility.',
    traditionalRoleTa: 'தாது பலவீனம், விந்து அணுக்கள் பெருக்கம், ஆண்மை குறைபாடு மற்றும் நரம்பு சோர்வு போக்கும் மதனசஞ்சீவி.',
    badge: 'Virility & Stamina Jam',
    badgeTa: 'ஆண்மை & தாது விருத்தி',
    image: '/images/products/ruthra-madhanasanjeevi-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-madhanasanjeevi-legiyam/front.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/angle.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-madhanasanjeevi-legiyam/front.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/angle.jpg',
      '/images/products/ruthra-madhanasanjeevi-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Madhanasanjeevi Legiyam Classical Compound', tamilName: 'மதனசஞ்சீவி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Madhanasanjeevi Legiyam prepared?',
        questionTa: 'ருத்ரா மதனசஞ்சீவி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["madhanasanjeevi legiyam","ruthra madhanasanjeevi legiyam","legiyam","madhanasanjeevi","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மதனசஞ்சீவி லேகியம்","ருத்ரா மதனசஞ்சீவி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-067',
    name: 'Ruthra Mudakathan Legiyam',
    tamilName: 'ருத்ரா முடக்கத்தான் லேகியம்',
    slug: 'ruthra-mudakathan-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["joint-mobility"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Cardiospermum halicacabum electuary for osteoarthritis, joint stiffness, sciatica, and gout pain. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'முடக்கு வாதம், மூட்டு தேய்மானம், இடுப்பு வலி, சந்து வாதம் மற்றும் தசை பிடிப்புகளுக்கு சிறந்த மருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mudakathan Legiyam (முடக்கத்தான் லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா முடக்கத்தான் லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cardiospermum halicacabum electuary for osteoarthritis, joint stiffness, sciatica, and gout pain.',
    traditionalRoleTa: 'முடக்கு வாதம், மூட்டு தேய்மானம், இடுப்பு வலி, சந்து வாதம் மற்றும் தசை பிடிப்புகளுக்கு சிறந்த மருந்து.',
    badge: 'Anti-Arthritic Jam',
    badgeTa: 'மூட்டு வாதம் & மூட்டு பலம்',
    image: '/images/products/ruthra-mudakathan-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-mudakathan-legiyam/front.jpg',
      '/images/products/ruthra-mudakathan-legiyam/angle.jpg',
      '/images/products/ruthra-mudakathan-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mudakathan-legiyam/front.jpg',
      '/images/products/ruthra-mudakathan-legiyam/angle.jpg',
      '/images/products/ruthra-mudakathan-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Mudakathan Legiyam Classical Compound', tamilName: 'முடக்கத்தான் லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mudakathan Legiyam prepared?',
        questionTa: 'ருத்ரா முடக்கத்தான் லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mudakathan legiyam","ruthra mudakathan legiyam","legiyam","mudakathan","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["முடக்கத்தான் லேகியம்","ருத்ரா முடக்கத்தான் லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-068',
    name: 'Ruthra Narasimma Legiyam',
    tamilName: 'ருத்ரா நரசிம்ம லேகியம்',
    slug: 'ruthra-narasimma-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Potent rasayana for premature greying, hair thinning, skin luster, and emaciation recovery. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இளநரை, முடி கொட்டுதல், உடல் மெலிவு நீங்கி தசைகள் பெருக மற்றும் தேக வசீகரத்திற்கு நரசிம்ம லேகியம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Narasimma Legiyam (நரசிம்ம லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நரசிம்ம லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent rasayana for premature greying, hair thinning, skin luster, and emaciation recovery.',
    traditionalRoleTa: 'இளநரை, முடி கொட்டுதல், உடல் மெலிவு நீங்கி தசைகள் பெருக மற்றும் தேக வசீகரத்திற்கு நரசிம்ம லேகியம்.',
    badge: 'Hair & Muscle Rasayana',
    badgeTa: 'கூந்தல் & தேக பலம்',
    image: '/images/products/ruthra-narasimma-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-narasimma-legiyam/front.jpg',
      '/images/products/ruthra-narasimma-legiyam/angle.jpg',
      '/images/products/ruthra-narasimma-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-narasimma-legiyam/front.jpg',
      '/images/products/ruthra-narasimma-legiyam/angle.jpg',
      '/images/products/ruthra-narasimma-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Narasimma Legiyam Classical Compound', tamilName: 'நரசிம்ம லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Narasimma Legiyam prepared?',
        questionTa: 'ருத்ரா நரசிம்ம லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["narasimma legiyam","ruthra narasimma legiyam","legiyam","narasimma","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நரசிம்ம லேகியம்","ருத்ரா நரசிம்ம லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-069',
    name: 'Ruthra Panchadeepakini Legiyam',
    tamilName: 'ருத்ரா பஞ்சதீபாகினி லேகியம்',
    slug: 'ruthra-panchadeepakini-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Five pungent spices electuary treating chronic anorexia, flatulence, and malabsorption syndrome. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பசியின்மை, செரிமான குறைபாடு, உண்ணாமை மற்றும் குடல் மந்தத்தை போக்கும் பஞ்சதீபாகினி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchadeepakini Legiyam (பஞ்சதீபாகினி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பஞ்சதீபாகினி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Five pungent spices electuary treating chronic anorexia, flatulence, and malabsorption syndrome.',
    traditionalRoleTa: 'பசியின்மை, செரிமான குறைபாடு, உண்ணாமை மற்றும் குடல் மந்தத்தை போக்கும் பஞ்சதீபாகினி.',
    badge: 'Digestive Fire Jam',
    badgeTa: 'செரிமான தீபனி லேகியம்',
    image: '/images/products/ruthra-panchadeepakini-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-panchadeepakini-legiyam/front.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchadeepakini-legiyam/front.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/angle.jpg',
      '/images/products/ruthra-panchadeepakini-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Panchadeepakini Legiyam Classical Compound', tamilName: 'பஞ்சதீபாகினி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchadeepakini Legiyam prepared?',
        questionTa: 'ருத்ரா பஞ்சதீபாகினி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchadeepakini legiyam","ruthra panchadeepakini legiyam","legiyam","panchadeepakini","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பஞ்சதீபாகினி லேகியம்","ருத்ரா பஞ்சதீபாகினி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-070',
    name: 'Ruthra Perumbadu Legiyam',
    tamilName: 'ருத்ரா பெரும்பாடு லேகியம்',
    slug: 'ruthra-perumbadu-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["womens-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Specialized gynecological electuary for menorrhagia, excessive menstrual flooding, and weakness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பெரும்பாடு, அதிக உதிரப்போக்கு, கருப்பை பலவீனம் மற்றும் இடுப்பு வலிக்கு பிரத்யேக தீர்வு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Perumbadu Legiyam (பெரும்பாடு லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பெரும்பாடு லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Specialized gynecological electuary for menorrhagia, excessive menstrual flooding, and weakness.',
    traditionalRoleTa: 'பெரும்பாடு, அதிக உதிரப்போக்கு, கருப்பை பலவீனம் மற்றும் இடுப்பு வலிக்கு பிரத்யேக தீர்வு.',
    badge: 'Menorrhagia Relief',
    badgeTa: 'அதிக உதிரப்போக்கு கட்டுப்பாடு',
    image: '/images/products/ruthra-perumbadu-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-perumbadu-legiyam/front.jpg',
      '/images/products/ruthra-perumbadu-legiyam/angle.jpg',
      '/images/products/ruthra-perumbadu-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-perumbadu-legiyam/front.jpg',
      '/images/products/ruthra-perumbadu-legiyam/angle.jpg',
      '/images/products/ruthra-perumbadu-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Perumbadu Legiyam Classical Compound', tamilName: 'பெரும்பாடு லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Perumbadu Legiyam prepared?',
        questionTa: 'ருத்ரா பெரும்பாடு லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["perumbadu legiyam","ruthra perumbadu legiyam","legiyam","perumbadu","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பெரும்பாடு லேகியம்","ருத்ரா பெரும்பாடு லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-071',
    name: 'Ruthra Vilvathi Legiyam',
    tamilName: 'ருத்ரா வில்வாதி லேகியம்',
    slug: 'ruthra-vilvathi-legiyam',
    medicalSystem: 'siddha',
    formulation: 'Legiyam',
    formulationTa: 'லேகியம்',
    categoryGroup: 'legiyam',
    concerns: ["digestive-wellness"],
    price: 240,
    originalPrice: 275,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Bael fruit electuary for chronic diarrhea, irritable bowel, hyperacidity, and vomiting sensation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வயிற்றுப்போக்கு, அஜீரணம், பித்த வாந்தி, நெஞ்செரிச்சல் மற்றும் குடல் புண்களை ஆற்றும் வில்வம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vilvathi Legiyam (வில்வாதி லேகியம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வில்வாதி லேகியம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Bael fruit electuary for chronic diarrhea, irritable bowel, hyperacidity, and vomiting sensation.',
    traditionalRoleTa: 'வயிற்றுப்போக்கு, அஜீரணம், பித்த வாந்தி, நெஞ்செரிச்சல் மற்றும் குடல் புண்களை ஆற்றும் வில்வம்.',
    badge: 'Bael Fruit Gut Healer',
    badgeTa: 'வில்வ குடல் பாதுகாப்பு',
    image: '/images/products/ruthra-vilvathi-legiyam/front.jpg',
    images: [
      '/images/products/ruthra-vilvathi-legiyam/front.jpg',
      '/images/products/ruthra-vilvathi-legiyam/angle.jpg',
      '/images/products/ruthra-vilvathi-legiyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vilvathi-legiyam/front.jpg',
      '/images/products/ruthra-vilvathi-legiyam/angle.jpg',
      '/images/products/ruthra-vilvathi-legiyam/back.jpg'
    ],
    ingredients: [
      { name: 'Vilvathi Legiyam Classical Compound', tamilName: 'வில்வாதி லேகியம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vilvathi Legiyam prepared?',
        questionTa: 'ருத்ரா வில்வாதி லேகியம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vilvathi legiyam","ruthra vilvathi legiyam","legiyam","vilvathi","legiyam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வில்வாதி லேகியம்","ருத்ரா வில்வாதி லேகியம்","லேகியம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: MAATHIRAI (4 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-072',
    name: 'Ruthra Chithiramoolathi Kuligai',
    tamilName: 'ருத்ரா சித்திரமூலாதி குளிகை',
    slug: 'ruthra-chithiramoolathi-kuligai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["joint-mobility","digestive-wellness"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Plumbago-based classical pill for acute vatha disorders, joint pain, abdominal lumps, and colic. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாத நோய்கள், மூட்டு பிடிப்பு, குன்மக்கட்டி மற்றும் வயிற்று வலிகளுக்கு அருமருந்தான குளிகை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Chithiramoolathi Kuligai (சித்திரமூலாதி குளிகை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சித்திரமூலாதி குளிகை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Plumbago-based classical pill for acute vatha disorders, joint pain, abdominal lumps, and colic.',
    traditionalRoleTa: 'வாத நோய்கள், மூட்டு பிடிப்பு, குன்மக்கட்டி மற்றும் வயிற்று வலிகளுக்கு அருமருந்தான குளிகை.',
    badge: 'Vatha & Colic Pill',
    badgeTa: 'வாத & வயிற்றுவலி குளிகை',
    image: '/images/products/ruthra-chithiramoolathi-kuligai/front.jpg',
    images: [
      '/images/products/ruthra-chithiramoolathi-kuligai/front.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/angle.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chithiramoolathi-kuligai/front.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/angle.jpg',
      '/images/products/ruthra-chithiramoolathi-kuligai/back.jpg'
    ],
    ingredients: [
      { name: 'Chithiramoolathi Kuligai Classical Compound', tamilName: 'சித்திரமூலாதி குளிகை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Chithiramoolathi Kuligai prepared?',
        questionTa: 'ருத்ரா சித்திரமூலாதி குளிகை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["chithiramoolathi kuligai","ruthra chithiramoolathi kuligai","maathirai","chithiramoolathi","kuligai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சித்திரமூலாதி குளிகை","ருத்ரா சித்திரமூலாதி குளிகை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-073',
    name: 'Ruthra Kalludaikudri Mathirai',
    tamilName: 'ருத்ரா கல்லுடைக்குடி மாத்திரை',
    slug: 'ruthra-kalludaikudri-mathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["metabolic-wellness"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Targeted lithotriptic tablet for fracturing urinary gravel and relieving painful micturition. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீரக கல்லை உடைத்து வெளியேற்றும், சிறுநீர் தாரை எரிச்சல் மற்றும் அடைப்பு நீக்கும் மாத்திரை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kalludaikudri Mathirai (கல்லுடைக்குடி மாத்திரை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கல்லுடைக்குடி மாத்திரை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Targeted lithotriptic tablet for fracturing urinary gravel and relieving painful micturition.',
    traditionalRoleTa: 'சிறுநீரக கல்லை உடைத்து வெளியேற்றும், சிறுநீர் தாரை எரிச்சல் மற்றும் அடைப்பு நீக்கும் மாத்திரை.',
    badge: 'Renal Stone Pill',
    badgeTa: 'சிறுநீரக கல் மாத்திரை',
    image: '/images/products/ruthra-kalludaikudri-mathirai/front.jpg',
    images: [
      '/images/products/ruthra-kalludaikudri-mathirai/front.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/angle.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kalludaikudri-mathirai/front.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/angle.jpg',
      '/images/products/ruthra-kalludaikudri-mathirai/back.jpg'
    ],
    ingredients: [
      { name: 'Kalludaikudri Mathirai Classical Compound', tamilName: 'கல்லுடைக்குடி மாத்திரை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kalludaikudri Mathirai prepared?',
        questionTa: 'ருத்ரா கல்லுடைக்குடி மாத்திரை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kalludaikudri mathirai","ruthra kalludaikudri mathirai","maathirai","kalludaikudri","mathirai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கல்லுடைக்குடி மாத்திரை","ருத்ரா கல்லுடைக்குடி மாத்திரை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-074',
    name: 'Ruthra Neerkovai Mathirai',
    tamilName: 'ருத்ரா நீர்க்கோவை மாத்திரை',
    slug: 'ruthra-neerkovai-mathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["respiratory"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'External application tablet for acute sinus headaches, running nose, forehead heaviness, and colds. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தலைபாரம், சைனஸ் தலைவலி, சளி நீர்க்கோவைக்கு நெற்றியில் பற்று போட பயன்படும் மாத்திரை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Neerkovai Mathirai (நீர்க்கோவை மாத்திரை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நீர்க்கோவை மாத்திரை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'External application tablet for acute sinus headaches, running nose, forehead heaviness, and colds.',
    traditionalRoleTa: 'தலைபாரம், சைனஸ் தலைவலி, சளி நீர்க்கோவைக்கு நெற்றியில் பற்று போட பயன்படும் மாத்திரை.',
    badge: 'Sinus Headache Relief',
    badgeTa: 'தலைபாரம் பற்று மாத்திரை',
    image: '/images/products/ruthra-neerkovai-mathirai/front.jpg',
    images: [
      '/images/products/ruthra-neerkovai-mathirai/front.jpg',
      '/images/products/ruthra-neerkovai-mathirai/angle.jpg',
      '/images/products/ruthra-neerkovai-mathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-neerkovai-mathirai/front.jpg',
      '/images/products/ruthra-neerkovai-mathirai/angle.jpg',
      '/images/products/ruthra-neerkovai-mathirai/back.jpg'
    ],
    ingredients: [
      { name: 'Neerkovai Mathirai Classical Compound', tamilName: 'நீர்க்கோவை மாத்திரை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Neerkovai Mathirai prepared?',
        questionTa: 'ருத்ரா நீர்க்கோவை மாத்திரை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["neerkovai mathirai","ruthra neerkovai mathirai","maathirai","neerkovai","mathirai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நீர்க்கோவை மாத்திரை","ருத்ரா நீர்க்கோவை மாத்திரை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-075',
    name: 'Ruthra Swasakudori Mathirai',
    tamilName: 'ருத்ரா சுவாசகுடோரி மாத்திரை',
    slug: 'ruthra-swasakudori-mathirai',
    medicalSystem: 'siddha',
    formulation: 'Maathirai',
    formulationTa: 'மாத்திரை',
    categoryGroup: 'maathirai',
    concerns: ["respiratory"],
    price: 180,
    originalPrice: 210,
    packSize: '50 Tablets',
    packSizeTa: '50 மாத்திரைகள்',
    shortDescription: 'Potent bronchodilator tablet for acute asthma paroxysms, chronic cough, and bronchial spasm. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மூச்சு திணறல், ஆஸ்துமா இளைப்பு, மார்பு சளி கட்டு மற்றும் ஈளை இருமலை போக்கும் மாத்திரை. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Swasakudori Mathirai (சுவாசகுடோரி மாத்திரை) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சுவாசகுடோரி மாத்திரை திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent bronchodilator tablet for acute asthma paroxysms, chronic cough, and bronchial spasm.',
    traditionalRoleTa: 'மூச்சு திணறல், ஆஸ்துமா இளைப்பு, மார்பு சளி கட்டு மற்றும் ஈளை இருமலை போக்கும் மாத்திரை.',
    badge: 'Bronchial Spasm Pill',
    badgeTa: 'சுவாச இளைப்பு மாத்திரை',
    image: '/images/products/ruthra-swasakudori-mathirai/front.jpg',
    images: [
      '/images/products/ruthra-swasakudori-mathirai/front.jpg',
      '/images/products/ruthra-swasakudori-mathirai/angle.jpg',
      '/images/products/ruthra-swasakudori-mathirai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-swasakudori-mathirai/front.jpg',
      '/images/products/ruthra-swasakudori-mathirai/angle.jpg',
      '/images/products/ruthra-swasakudori-mathirai/back.jpg'
    ],
    ingredients: [
      { name: 'Swasakudori Mathirai Classical Compound', tamilName: 'சுவாசகுடோரி மாத்திரை மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or prescribed anupanam.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or prescribed anupanam',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மருத்துவர் பரிந்துரைத்த துணை மருந்து'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Swasakudori Mathirai prepared?',
        questionTa: 'ருத்ரா சுவாசகுடோரி மாத்திரை எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["swasakudori mathirai","ruthra swasakudori mathirai","maathirai","swasakudori","mathirai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சுவாசகுடோரி மாத்திரை","ருத்ரா சுவாசகுடோரி மாத்திரை","மாத்திரை","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: RASAYANAM (4 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-076',
    name: 'Ruthra Gandhaga Rasayanam',
    tamilName: 'ருத்ரா கந்தக ரசாயனம்',
    slug: 'ruthra-gandhaga-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Purified sulfur rasayana for chronic eczema, psoriasis, scabies, blood toxicity, and skin eruptions. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சோரியாசிஸ், கரப்பான், படை, அரிப்பு, ரத்த நச்சுக்கள் மற்றும் தோல் வியாதிகளை வேரறுக்கும் கந்தகம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gandhaga Rasayanam (கந்தக ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கந்தக ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified sulfur rasayana for chronic eczema, psoriasis, scabies, blood toxicity, and skin eruptions.',
    traditionalRoleTa: 'சோரியாசிஸ், கரப்பான், படை, அரிப்பு, ரத்த நச்சுக்கள் மற்றும் தோல் வியாதிகளை வேரறுக்கும் கந்தகம்.',
    badge: 'Dermal & Blood Purifier',
    badgeTa: 'கந்தக தோல் ரசாயனம்',
    image: '/images/products/ruthra-gandhaga-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-gandhaga-rasayanam/front.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/angle.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gandhaga-rasayanam/front.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/angle.jpg',
      '/images/products/ruthra-gandhaga-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Gandhaga Rasayanam Classical Compound', tamilName: 'கந்தக ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gandhaga Rasayanam prepared?',
        questionTa: 'ருத்ரா கந்தக ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gandhaga rasayanam","ruthra gandhaga rasayanam","rasayanam","gandhaga","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கந்தக ரசாயனம்","ருத்ரா கந்தக ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-077',
    name: 'Ruthra Kadhali Rasayanam',
    tamilName: 'ருத்ரா கதலி ரசாயனம்',
    slug: 'ruthra-kadhali-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["womens-wellness","metabolic-wellness"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Plantain-based rasayana for leucorrhea, uterine burning, excessive body heat, and emaciation. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வெள்ளைப்படுதல், உடல் மெலிவு, மகளிர் பலவீனம், அதிக உஷ்ணம் போக்கி உடலை தேற்றும் கதலி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kadhali Rasayanam (கதலி ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கதலி ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Plantain-based rasayana for leucorrhea, uterine burning, excessive body heat, and emaciation.',
    traditionalRoleTa: 'வெள்ளைப்படுதல், உடல் மெலிவு, மகளிர் பலவீனம், அதிக உஷ்ணம் போக்கி உடலை தேற்றும் கதலி.',
    badge: 'Uterine Restorative',
    badgeTa: 'மகளிர் பலம் & குளிர்ச்சி',
    image: '/images/products/ruthra-kadhali-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-kadhali-rasayanam/front.jpg',
      '/images/products/ruthra-kadhali-rasayanam/angle.jpg',
      '/images/products/ruthra-kadhali-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kadhali-rasayanam/front.jpg',
      '/images/products/ruthra-kadhali-rasayanam/angle.jpg',
      '/images/products/ruthra-kadhali-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Kadhali Rasayanam Classical Compound', tamilName: 'கதலி ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kadhali Rasayanam prepared?',
        questionTa: 'ருத்ரா கதலி ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kadhali rasayanam","ruthra kadhali rasayanam","rasayanam","kadhali","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கதலி ரசாயனம்","ருத்ரா கதலி ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-078',
    name: 'Ruthra Parangi Rasayanam',
    tamilName: 'ருத்ரா பறங்கி ரசாயனம்',
    slug: 'ruthra-parangi-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["skin-hair","joint-mobility"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Smilax rasayana for deep-seated venereal toxins, intractable dermatosis, and rheumatoid arthritis. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நாள்பட்ட தோல் நோய்கள், மேக ரோகங்கள், மூட்டு வீக்கம் மற்றும் ரத்த தூய்மைக்கு தலைசிறந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Parangi Rasayanam (பறங்கி ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பறங்கி ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Smilax rasayana for deep-seated venereal toxins, intractable dermatosis, and rheumatoid arthritis.',
    traditionalRoleTa: 'நாள்பட்ட தோல் நோய்கள், மேக ரோகங்கள், மூட்டு வீக்கம் மற்றும் ரத்த தூய்மைக்கு தலைசிறந்தது.',
    badge: 'Deep Dermal Detox',
    badgeTa: 'பறங்கி மேக ரசாயனம்',
    image: '/images/products/ruthra-parangi-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-parangi-rasayanam/front.jpg',
      '/images/products/ruthra-parangi-rasayanam/angle.jpg',
      '/images/products/ruthra-parangi-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-parangi-rasayanam/front.jpg',
      '/images/products/ruthra-parangi-rasayanam/angle.jpg',
      '/images/products/ruthra-parangi-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Parangi Rasayanam Classical Compound', tamilName: 'பறங்கி ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Parangi Rasayanam prepared?',
        questionTa: 'ருத்ரா பறங்கி ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["parangi rasayanam","ruthra parangi rasayanam","rasayanam","parangi","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பறங்கி ரசாயனம்","ருத்ரா பறங்கி ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-079',
    name: 'Ruthra Thippili Rasayanam',
    tamilName: 'ருத்ரா திப்பிலி ரசாயனம்',
    slug: 'ruthra-thippili-rasayanam',
    medicalSystem: 'siddha',
    formulation: 'Rasayanam',
    formulationTa: 'ரசாயனம்',
    categoryGroup: 'rasayanam',
    concerns: ["respiratory","digestive-wellness"],
    price: 250,
    originalPrice: 290,
    packSize: '200g',
    packSizeTa: '200 கிராம்',
    shortDescription: 'Long pepper rejuvenator for chronic bronchitis, bronchial asthma, poor metabolism, and spleen care. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஈளை, இருமல், ஆஸ்துமா, பசியின்மை மற்றும் மண்ணீரல் நோய்களுக்கு அருமருந்தான திப்பிலி ரசாயனம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thippili Rasayanam (திப்பிலி ரசாயனம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா திப்பிலி ரசாயனம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Long pepper rejuvenator for chronic bronchitis, bronchial asthma, poor metabolism, and spleen care.',
    traditionalRoleTa: 'ஈளை, இருமல், ஆஸ்துமா, பசியின்மை மற்றும் மண்ணீரல் நோய்களுக்கு அருமருந்தான திப்பிலி ரசாயனம்.',
    badge: 'Lung Rejuvenator',
    badgeTa: 'திப்பிலி சுவாச ரசாயனம்',
    image: '/images/products/ruthra-thippili-rasayanam/front.jpg',
    images: [
      '/images/products/ruthra-thippili-rasayanam/front.jpg',
      '/images/products/ruthra-thippili-rasayanam/angle.jpg',
      '/images/products/ruthra-thippili-rasayanam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thippili-rasayanam/front.jpg',
      '/images/products/ruthra-thippili-rasayanam/angle.jpg',
      '/images/products/ruthra-thippili-rasayanam/back.jpg'
    ],
    ingredients: [
      { name: 'Thippili Rasayanam Classical Compound', tamilName: 'திப்பிலி ரசாயனம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-6 grams (1 teaspoon)', instructionTa: '3-6 கிராம் (1 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-6 grams (1 teaspoon)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '3-6 கிராம் (1 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thippili Rasayanam prepared?',
        questionTa: 'ருத்ரா திப்பிலி ரசாயனம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thippili rasayanam","ruthra thippili rasayanam","rasayanam","thippili","rasayanam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["திப்பிலி ரசாயனம்","ருத்ரா திப்பிலி ரசாயனம்","ரசாயனம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: VADAGAM (4 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-080',
    name: 'Ruthra Imbooral Vadagam',
    tamilName: 'ருத்ரா இம்பூரல் வடகம்',
    slug: 'ruthra-imbooral-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["respiratory"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Oldenlandia chewable lozenge for hemoptysis, blood in sputum, chest pain, and dry hacking cough. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த வாந்தி, சளியில் ரத்தம் வருதல், வறட்டு இருமல் மற்றும் மார்பு வலியை போக்கும் இம்பூரல். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Imbooral Vadagam (இம்பூரல் வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா இம்பூரல் வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Oldenlandia chewable lozenge for hemoptysis, blood in sputum, chest pain, and dry hacking cough.',
    traditionalRoleTa: 'ரத்த வாந்தி, சளியில் ரத்தம் வருதல், வறட்டு இருமல் மற்றும் மார்பு வலியை போக்கும் இம்பூரல்.',
    badge: 'Hemoptysis & Cough Lozenge',
    badgeTa: 'ரத்த இருமல் & மார்பு நலம்',
    image: '/images/products/ruthra-imbooral-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-imbooral-vadagam/front.jpg',
      '/images/products/ruthra-imbooral-vadagam/angle.jpg',
      '/images/products/ruthra-imbooral-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-imbooral-vadagam/front.jpg',
      '/images/products/ruthra-imbooral-vadagam/angle.jpg',
      '/images/products/ruthra-imbooral-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Imbooral Vadagam Classical Compound', tamilName: 'இம்பூரல் வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Imbooral Vadagam prepared?',
        questionTa: 'ருத்ரா இம்பூரல் வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["imbooral vadagam","ruthra imbooral vadagam","vadagam","imbooral","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["இம்பூரல் வடகம்","ருத்ரா இம்பூரல் வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-081',
    name: 'Ruthra Kadukkai Vadagam',
    tamilName: 'ருத்ரா கடுக்காய் வடகம்',
    slug: 'ruthra-kadukkai-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["digestive-wellness","respiratory"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Chebulic Myrobalan chewable tablet for chronic hoarseness, throat congestion, and sluggish bowels. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குரல் கம்மல், தொண்டை வலி, இருமல் மற்றும் செரிமான மந்தத்தை போக்கும் கடுக்காய் வடகம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kadukkai Vadagam (கடுக்காய் வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கடுக்காய் வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Chebulic Myrobalan chewable tablet for chronic hoarseness, throat congestion, and sluggish bowels.',
    traditionalRoleTa: 'குரல் கம்மல், தொண்டை வலி, இருமல் மற்றும் செரிமான மந்தத்தை போக்கும் கடுக்காய் வடகம்.',
    badge: 'Throat & Voice Soother',
    badgeTa: 'குரல் கம்மல் & தொண்டை நலம்',
    image: '/images/products/ruthra-kadukkai-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-kadukkai-vadagam/front.jpg',
      '/images/products/ruthra-kadukkai-vadagam/angle.jpg',
      '/images/products/ruthra-kadukkai-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kadukkai-vadagam/front.jpg',
      '/images/products/ruthra-kadukkai-vadagam/angle.jpg',
      '/images/products/ruthra-kadukkai-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Kadukkai Vadagam Classical Compound', tamilName: 'கடுக்காய் வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kadukkai Vadagam prepared?',
        questionTa: 'ருத்ரா கடுக்காய் வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kadukkai vadagam","ruthra kadukkai vadagam","vadagam","kadukkai","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கடுக்காய் வடகம்","ருத்ரா கடுக்காய் வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-082',
    name: 'Ruthra Karuvepilai Vadagam',
    tamilName: 'ருத்ரா கறிவேப்பிலை வடகம்',
    slug: 'ruthra-karuvepilai-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Curry leaf chewable for morning sickness, loss of taste, vomiting sensation, and bile balance. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பித்த வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் செரிமான கோளாறுகளுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karuvepilai Vadagam (கறிவேப்பிலை வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கறிவேப்பிலை வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Curry leaf chewable for morning sickness, loss of taste, vomiting sensation, and bile balance.',
    traditionalRoleTa: 'பித்த வாந்தி, மயக்கம், நாவில் சுவையின்மை மற்றும் செரிமான கோளாறுகளுக்கு அருமருந்து.',
    badge: 'Nausea & Taste Restorer',
    badgeTa: 'பித்த வாந்தி & சுவை தூண்டி',
    image: '/images/products/ruthra-karuvepilai-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-karuvepilai-vadagam/front.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/angle.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karuvepilai-vadagam/front.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/angle.jpg',
      '/images/products/ruthra-karuvepilai-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Karuvepilai Vadagam Classical Compound', tamilName: 'கறிவேப்பிலை வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karuvepilai Vadagam prepared?',
        questionTa: 'ருத்ரா கறிவேப்பிலை வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karuvepilai vadagam","ruthra karuvepilai vadagam","vadagam","karuvepilai","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கறிவேப்பிலை வடகம்","ருத்ரா கறிவேப்பிலை வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-083',
    name: 'Ruthra Thalisathy Vadagam',
    tamilName: 'ருத்ரா தாளீசாதி வடகம்',
    slug: 'ruthra-thalisathy-vadagam',
    medicalSystem: 'siddha',
    formulation: 'Vadagam',
    formulationTa: 'வடகம்',
    categoryGroup: 'vadagam',
    concerns: ["respiratory","digestive-wellness"],
    price: 140,
    originalPrice: 165,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Chewable pastille for tickling throat cough, bronchitis, dyspnea, and restoring digestive fire. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தொண்டை கரகரப்பு, இருமல், ஆஸ்துமா, வாய் கசப்பு மற்றும் பசியின்மை போக்கும் தாளீசாதி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Thalisathy Vadagam (தாளீசாதி வடகம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா தாளீசாதி வடகம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Chewable pastille for tickling throat cough, bronchitis, dyspnea, and restoring digestive fire.',
    traditionalRoleTa: 'தொண்டை கரகரப்பு, இருமல், ஆஸ்துமா, வாய் கசப்பு மற்றும் பசியின்மை போக்கும் தாளீசாதி.',
    badge: 'Respiratory Lozenge',
    badgeTa: 'இருமல் & தொண்டை கரகரப்பு',
    image: '/images/products/ruthra-thalisathy-vadagam/front.jpg',
    images: [
      '/images/products/ruthra-thalisathy-vadagam/front.jpg',
      '/images/products/ruthra-thalisathy-vadagam/angle.jpg',
      '/images/products/ruthra-thalisathy-vadagam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-thalisathy-vadagam/front.jpg',
      '/images/products/ruthra-thalisathy-vadagam/angle.jpg',
      '/images/products/ruthra-thalisathy-vadagam/back.jpg'
    ],
    ingredients: [
      { name: 'Thalisathy Vadagam Classical Compound', tamilName: 'தாளீசாதி வடகம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 pastilles chewable', instructionTa: '1-2 வடகம் மென்று விழுங்கவும்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Chew slowly in mouth.', instructionTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 pastilles chewable',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Chew slowly in mouth',
      amountTa: '1-2 வடகம் மென்று விழுங்கவும்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வாயில் அடக்கி மெதுவாக சுவைக்கவும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Thalisathy Vadagam prepared?',
        questionTa: 'ருத்ரா தாளீசாதி வடகம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["thalisathy vadagam","ruthra thalisathy vadagam","vadagam","thalisathy","vadagam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["தாளீசாதி வடகம்","ருத்ரா தாளீசாதி வடகம்","வடகம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: NEI (8 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-084',
    name: 'Ruthra Aavarai Nei',
    tamilName: 'ருத்ரா ஆவாரை நெய்',
    slug: 'ruthra-aavarai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cassia auriculata medicated ghee for diabetic heat, excessive thirst, leucorrhea, and burning soles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீரிழிவு எரிச்சல், மேக உஷ்ணம், வெள்ளைப்படுதல், பாத எரிச்சல் போக்கும் ஆவாரை நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Aavarai Nei (ஆவாரை நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஆவாரை நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cassia auriculata medicated ghee for diabetic heat, excessive thirst, leucorrhea, and burning soles.',
    traditionalRoleTa: 'நீரிழிவு எரிச்சல், மேக உஷ்ணம், வெள்ளைப்படுதல், பாத எரிச்சல் போக்கும் ஆவாரை நெய்.',
    badge: 'Diabetic & Coolant Ghee',
    badgeTa: 'ஆவாரை மேக நெய்',
    image: '/images/products/ruthra-aavarai-nei/front.jpg',
    images: [
      '/images/products/ruthra-aavarai-nei/front.jpg',
      '/images/products/ruthra-aavarai-nei/angle.jpg',
      '/images/products/ruthra-aavarai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aavarai-nei/front.jpg',
      '/images/products/ruthra-aavarai-nei/angle.jpg',
      '/images/products/ruthra-aavarai-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Aavarai Nei Classical Compound', tamilName: 'ஆவாரை நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Aavarai Nei prepared?',
        questionTa: 'ருத்ரா ஆவாரை நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["aavarai nei","ruthra aavarai nei","nei","aavarai","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஆவாரை நெய்","ருத்ரா ஆவாரை நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-085',
    name: 'Ruthra Kalyanagritham',
    tamilName: 'ருத்ரா கல்யாண கிருதம்',
    slug: 'ruthra-kalyanagritham',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Classical poly-herbal ghee for psychological equilibrium, fertility, auspicious vitality, and complexion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'மன அமைதி, கருத்தரிப்பு வாய்ப்பு அதிகரிப்பு, தாது பலம் மற்றும் தேக பொலிவுக்கு உன்னத கிருதம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kalyanagritham (கல்யாண கிருதம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கல்யாண கிருதம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical poly-herbal ghee for psychological equilibrium, fertility, auspicious vitality, and complexion.',
    traditionalRoleTa: 'மன அமைதி, கருத்தரிப்பு வாய்ப்பு அதிகரிப்பு, தாது பலம் மற்றும் தேக பொலிவுக்கு உன்னத கிருதம்.',
    badge: 'Fertility & Mind Tonic Ghee',
    badgeTa: 'கல்யாண நெய்',
    image: '/images/products/ruthra-kalyanagritham/front.jpg',
    images: [
      '/images/products/ruthra-kalyanagritham/front.jpg',
      '/images/products/ruthra-kalyanagritham/angle.jpg',
      '/images/products/ruthra-kalyanagritham/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kalyanagritham/front.jpg',
      '/images/products/ruthra-kalyanagritham/angle.jpg',
      '/images/products/ruthra-kalyanagritham/back.jpg'
    ],
    ingredients: [
      { name: 'Kalyanagritham Classical Compound', tamilName: 'கல்யாண கிருதம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kalyanagritham prepared?',
        questionTa: 'ருத்ரா கல்யாண கிருதம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kalyanagritham","ruthra kalyanagritham","nei","kalyanagritham","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கல்யாண கிருதம்","ருத்ரா கல்யாண கிருதம்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-086',
    name: 'Ruthra Keezhanelli Ghritham',
    tamilName: 'ருத்ரா கீழாநெல்லி கிருதம்',
    slug: 'ruthra-keezhanelli-ghritham',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Phyllanthus niruri medicated ghee for liver protection, convalescent jaundice, and bile cooling. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கல்லீரல் பாதுகாப்பு, காமாலை குணமாக, பித்த தாகம் தணிய மற்றும் ரத்த சுத்திக்கு கீழாநெல்லி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Keezhanelli Ghritham (கீழாநெல்லி கிருதம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கீழாநெல்லி கிருதம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Phyllanthus niruri medicated ghee for liver protection, convalescent jaundice, and bile cooling.',
    traditionalRoleTa: 'கல்லீரல் பாதுகாப்பு, காமாலை குணமாக, பித்த தாகம் தணிய மற்றும் ரத்த சுத்திக்கு கீழாநெல்லி.',
    badge: 'Hepatic Medicated Ghee',
    badgeTa: 'கீழாநெல்லி நெய்',
    image: '/images/products/ruthra-keezhanelli-ghritham/front.jpg',
    images: [
      '/images/products/ruthra-keezhanelli-ghritham/front.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/angle.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-keezhanelli-ghritham/front.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/angle.jpg',
      '/images/products/ruthra-keezhanelli-ghritham/back.jpg'
    ],
    ingredients: [
      { name: 'Keezhanelli Ghritham Classical Compound', tamilName: 'கீழாநெல்லி கிருதம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Keezhanelli Ghritham prepared?',
        questionTa: 'ருத்ரா கீழாநெல்லி கிருதம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["keezhanelli ghritham","ruthra keezhanelli ghritham","nei","keezhanelli","ghritham","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கீழாநெல்லி கிருதம்","ருத்ரா கீழாநெல்லி கிருதம்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-087',
    name: 'Ruthra Naaval Nei',
    tamilName: 'ருத்ரா நாவல் நெய்',
    slug: 'ruthra-naaval-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Jamun fruit and seed infused ghee for chronic polyuria, diabetes mellitus, and burning bladder. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'அதிமூத்திரம், நீரிழிவு சர்க்கரை நோய் மற்றும் சிறுநீரக எரிச்சலை கட்டுப்படுத்தும் நாவல் நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Naaval Nei (நாவல் நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நாவல் நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Jamun fruit and seed infused ghee for chronic polyuria, diabetes mellitus, and burning bladder.',
    traditionalRoleTa: 'அதிமூத்திரம், நீரிழிவு சர்க்கரை நோய் மற்றும் சிறுநீரக எரிச்சலை கட்டுப்படுத்தும் நாவல் நெய்.',
    badge: 'Polyuria & Diabetes Ghee',
    badgeTa: 'நாவல் நெய்',
    image: '/images/products/ruthra-naaval-nei/front.jpg',
    images: [
      '/images/products/ruthra-naaval-nei/front.jpg',
      '/images/products/ruthra-naaval-nei/angle.jpg',
      '/images/products/ruthra-naaval-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-naaval-nei/front.jpg',
      '/images/products/ruthra-naaval-nei/angle.jpg',
      '/images/products/ruthra-naaval-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Naaval Nei Classical Compound', tamilName: 'நாவல் நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Naaval Nei prepared?',
        questionTa: 'ருத்ரா நாவல் நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["naaval nei","ruthra naaval nei","nei","naaval","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நாவல் நெய்","ருத்ரா நாவல் நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-088',
    name: 'Ruthra Nilapanai Nei',
    tamilName: 'ருத்ரா நிலப்பனை நெய்',
    slug: 'ruthra-nilapanai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Curculigo orchioides ghee for reproductive vigor, lumbar backache, and physical stamina. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இடுப்பு வலி, விந்து நலிவு, ஆண்மை பலவீனம் மற்றும் உடல் பலத்திற்கு நிலப்பனை கிழங்கு நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nilapanai Nei (நிலப்பனை நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நிலப்பனை நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Curculigo orchioides ghee for reproductive vigor, lumbar backache, and physical stamina.',
    traditionalRoleTa: 'இடுப்பு வலி, விந்து நலிவு, ஆண்மை பலவீனம் மற்றும் உடல் பலத்திற்கு நிலப்பனை கிழங்கு நெய்.',
    badge: 'Vitality & Backache Ghee',
    badgeTa: 'நிலப்பனை நெய்',
    image: '/images/products/ruthra-nilapanai-nei/front.jpg',
    images: [
      '/images/products/ruthra-nilapanai-nei/front.jpg',
      '/images/products/ruthra-nilapanai-nei/angle.jpg',
      '/images/products/ruthra-nilapanai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nilapanai-nei/front.jpg',
      '/images/products/ruthra-nilapanai-nei/angle.jpg',
      '/images/products/ruthra-nilapanai-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Nilapanai Nei Classical Compound', tamilName: 'நிலப்பனை நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nilapanai Nei prepared?',
        questionTa: 'ருத்ரா நிலப்பனை நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nilapanai nei","ruthra nilapanai nei","nei","nilapanai","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நிலப்பனை நெய்","ருத்ரா நிலப்பனை நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-089',
    name: 'Ruthra Serankottai Nei',
    tamilName: 'ருத்ரா சேராங்கொட்டை நெய்',
    slug: 'ruthra-serankottai-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["skin-hair","joint-mobility"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Purified Semecarpus anacardium ghee for intractable skin ulcers, arthritis, tumors, and asthma. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சுத்தி செய்த சேராங்கொட்டை நெய்; நாள்பட்ட தோல் புண்கள், மூட்டு வீக்கம், புற்று கட்டிகளுக்கு சிறந்தது. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Serankottai Nei (சேராங்கொட்டை நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சேராங்கொட்டை நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified Semecarpus anacardium ghee for intractable skin ulcers, arthritis, tumors, and asthma.',
    traditionalRoleTa: 'சுத்தி செய்த சேராங்கொட்டை நெய்; நாள்பட்ட தோல் புண்கள், மூட்டு வீக்கம், புற்று கட்டிகளுக்கு சிறந்தது.',
    badge: 'Cellular Care & Arthritic Ghee',
    badgeTa: 'சேராங்கொட்டை நெய்',
    image: '/images/products/ruthra-serankottai-nei/front.jpg',
    images: [
      '/images/products/ruthra-serankottai-nei/front.jpg',
      '/images/products/ruthra-serankottai-nei/angle.jpg',
      '/images/products/ruthra-serankottai-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-serankottai-nei/front.jpg',
      '/images/products/ruthra-serankottai-nei/angle.jpg',
      '/images/products/ruthra-serankottai-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Serankottai Nei Classical Compound', tamilName: 'சேராங்கொட்டை நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Serankottai Nei prepared?',
        questionTa: 'ருத்ரா சேராங்கொட்டை நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["serankottai nei","ruthra serankottai nei","nei","serankottai","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சேராங்கொட்டை நெய்","ருத்ரா சேராங்கொட்டை நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-090',
    name: 'Ruthra Soodhaga Sanni Nei',
    tamilName: 'ருத்ரா சூதக சன்னி நெய்',
    slug: 'ruthra-soodhaga-sanni-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Post-partum medicated ghee preventing puerperal convulsions, uterine sepsis, and pelvic spasms. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பிரசவத்திற்கு பின் வரும் சூதக சன்னி, வலிப்பு, காய்ச்சல் மற்றும் கருப்பை தொற்று தடுக்கும் நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Soodhaga Sanni Nei (சூதக சன்னி நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சூதக சன்னி நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Post-partum medicated ghee preventing puerperal convulsions, uterine sepsis, and pelvic spasms.',
    traditionalRoleTa: 'பிரசவத்திற்கு பின் வரும் சூதக சன்னி, வலிப்பு, காய்ச்சல் மற்றும் கருப்பை தொற்று தடுக்கும் நெய்.',
    badge: 'Post-Natal Ghee',
    badgeTa: 'சூதக சன்னி நெய்',
    image: '/images/products/ruthra-soodhaga-sanni-nei/front.jpg',
    images: [
      '/images/products/ruthra-soodhaga-sanni-nei/front.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/angle.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-soodhaga-sanni-nei/front.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/angle.jpg',
      '/images/products/ruthra-soodhaga-sanni-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Soodhaga Sanni Nei Classical Compound', tamilName: 'சூதக சன்னி நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Soodhaga Sanni Nei prepared?',
        questionTa: 'ருத்ரா சூதக சன்னி நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["soodhaga sanni nei","ruthra soodhaga sanni nei","nei","soodhaga","sanni","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சூதக சன்னி நெய்","ருத்ரா சூதக சன்னி நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-091',
    name: 'Ruthra Venpoosani Nei',
    tamilName: 'ருத்ரா வெண்பூசணி நெய்',
    slug: 'ruthra-venpoosani-nei',
    medicalSystem: 'siddha',
    formulation: 'Nei',
    formulationTa: 'நெய்',
    categoryGroup: 'nei',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 280,
    originalPrice: 325,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Ash gourd cooling ghee for burning micturition, internal hemorrhage, emaciation, and nervousness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சிறுநீர் எரிச்சல், உஷ்ண வெள்ளை, ரத்த கசிவு மற்றும் உடல் மெலிவு போக்கும் வெண்பூசணி நெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Venpoosani Nei (வெண்பூசணி நெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வெண்பூசணி நெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Ash gourd cooling ghee for burning micturition, internal hemorrhage, emaciation, and nervousness.',
    traditionalRoleTa: 'சிறுநீர் எரிச்சல், உஷ்ண வெள்ளை, ரத்த கசிவு மற்றும் உடல் மெலிவு போக்கும் வெண்பூசணி நெய்.',
    badge: 'Cooling Ash Gourd Ghee',
    badgeTa: 'வெண்பூசணி நெய்',
    image: '/images/products/ruthra-venpoosani-nei/front.jpg',
    images: [
      '/images/products/ruthra-venpoosani-nei/front.jpg',
      '/images/products/ruthra-venpoosani-nei/angle.jpg',
      '/images/products/ruthra-venpoosani-nei/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-venpoosani-nei/front.jpg',
      '/images/products/ruthra-venpoosani-nei/angle.jpg',
      '/images/products/ruthra-venpoosani-nei/back.jpg'
    ],
    ingredients: [
      { name: 'Venpoosani Nei Classical Compound', tamilName: 'வெண்பூசணி நெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Early morning and evening before food.', instructionTa: 'காலை மற்றும் மாலை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Early morning and evening before food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'காலை மற்றும் மாலை உணவுக்கு முன்',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Venpoosani Nei prepared?',
        questionTa: 'ருத்ரா வெண்பூசணி நெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["venpoosani nei","ruthra venpoosani nei","nei","venpoosani","nei","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வெண்பூசணி நெய்","ருத்ரா வெண்பூசணி நெய்","நெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: MEZHUGU (4 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-092',
    name: 'Ruthra Ganthi Mezhugu',
    tamilName: 'ருத்ரா காந்தி மெழுகு',
    slug: 'ruthra-ganthi-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["skin-hair","joint-mobility"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Classical purified mineral waxy compound for severe toxic eruptions, deep abscesses, and arthritis. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கட்டிகள், புண்கள், தோல் ரணங்கள், மேக நோய்கள் மற்றும் வாத வீக்கங்களை கரைக்கும் உன்னத மெழுகு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Ganthi Mezhugu (காந்தி மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா காந்தி மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Classical purified mineral waxy compound for severe toxic eruptions, deep abscesses, and arthritis.',
    traditionalRoleTa: 'கட்டிகள், புண்கள், தோல் ரணங்கள், மேக நோய்கள் மற்றும் வாத வீக்கங்களை கரைக்கும் உன்னத மெழுகு.',
    badge: 'Deep Tissue Healing Wax',
    badgeTa: 'காந்தி மெழுகு',
    image: '/images/products/ruthra-ganthi-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-ganthi-mezhugu/front.jpg',
      '/images/products/ruthra-ganthi-mezhugu/angle.jpg',
      '/images/products/ruthra-ganthi-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ganthi-mezhugu/front.jpg',
      '/images/products/ruthra-ganthi-mezhugu/angle.jpg',
      '/images/products/ruthra-ganthi-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Ganthi Mezhugu Classical Compound', tamilName: 'காந்தி மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Ganthi Mezhugu prepared?',
        questionTa: 'ருத்ரா காந்தி மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["ganthi mezhugu","ruthra ganthi mezhugu","mezhugu","ganthi","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["காந்தி மெழுகு","ருத்ரா காந்தி மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-093',
    name: 'Ruthra Gunmakudori Mezhugu',
    tamilName: 'ருத்ரா குன்மக்குடோரி மெழுகு',
    slug: 'ruthra-gunmakudori-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["digestive-wellness"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Intensive compound for intractable peptic ulcers, abdominal tumors, chronic colic, and hyperacidity. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தீராத குன்ம வலி, வயிற்றுப்புண், வயிற்றுக் கட்டிகள் மற்றும் கடுமையான வாயு பிடிப்பு போக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gunmakudori Mezhugu (குன்மக்குடோரி மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குன்மக்குடோரி மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Intensive compound for intractable peptic ulcers, abdominal tumors, chronic colic, and hyperacidity.',
    traditionalRoleTa: 'தீராத குன்ம வலி, வயிற்றுப்புண், வயிற்றுக் கட்டிகள் மற்றும் கடுமையான வாயு பிடிப்பு போக்கும்.',
    badge: 'Intractable Colic Wax',
    badgeTa: 'குன்மக்குடோரி மெழுகு',
    image: '/images/products/ruthra-gunmakudori-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-gunmakudori-mezhugu/front.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/angle.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gunmakudori-mezhugu/front.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/angle.jpg',
      '/images/products/ruthra-gunmakudori-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Gunmakudori Mezhugu Classical Compound', tamilName: 'குன்மக்குடோரி மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gunmakudori Mezhugu prepared?',
        questionTa: 'ருத்ரா குன்மக்குடோரி மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gunmakudori mezhugu","ruthra gunmakudori mezhugu","mezhugu","gunmakudori","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குன்மக்குடோரி மெழுகு","ருத்ரா குன்மக்குடோரி மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-094',
    name: 'Ruthra Malakkutara Mezhugu',
    tamilName: 'ருத்ரா மலக்குடார மெழுகு',
    slug: 'ruthra-malakkutara-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["digestive-wellness"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Potent mineral-herbal resin for severe chronic obstipation, fecal impaction, and piles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கடும் மலச்சிக்கல், குடல் அடைப்பு, மூலக்கட்டி மற்றும் மந்த நச்சுக்களை வெளியேற்றும் மெழுகு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Malakkutara Mezhugu (மலக்குடார மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மலக்குடார மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Potent mineral-herbal resin for severe chronic obstipation, fecal impaction, and piles.',
    traditionalRoleTa: 'கடும் மலச்சிக்கல், குடல் அடைப்பு, மூலக்கட்டி மற்றும் மந்த நச்சுக்களை வெளியேற்றும் மெழுகு.',
    badge: 'Bowel Obstruction Care',
    badgeTa: 'மலக்குடார மெழுகு',
    image: '/images/products/ruthra-malakkutara-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-malakkutara-mezhugu/front.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/angle.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-malakkutara-mezhugu/front.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/angle.jpg',
      '/images/products/ruthra-malakkutara-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Malakkutara Mezhugu Classical Compound', tamilName: 'மலக்குடார மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Malakkutara Mezhugu prepared?',
        questionTa: 'ருத்ரா மலக்குடார மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["malakkutara mezhugu","ruthra malakkutara mezhugu","mezhugu","malakkutara","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மலக்குடார மெழுகு","ருத்ரா மலக்குடார மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-095',
    name: 'Ruthra Rasagandhi Mezhugu',
    tamilName: 'ருத்ரா ரசகந்தி மெழுகு',
    slug: 'ruthra-rasagandhi-mezhugu',
    medicalSystem: 'siddha',
    formulation: 'Mezhugu',
    formulationTa: 'மெழுகு',
    categoryGroup: 'mezhugu',
    concerns: ["skin-hair","joint-mobility"],
    price: 320,
    originalPrice: 380,
    packSize: '30g',
    packSizeTa: '30 கிராம்',
    shortDescription: 'Crown jewel of Siddha mineralogy for cervical spondylosis, malignant growths, arthritis, and fistula. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'சித்த மருத்துவத்தின் தலைசிறந்த மருந்து; புற்று நோய்கள், நாள்பட்ட தோல் நோய்கள், பவுத்திரம், வாதத்திற்கு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Rasagandhi Mezhugu (ரசகந்தி மெழுகு) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ரசகந்தி மெழுகு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Crown jewel of Siddha mineralogy for cervical spondylosis, malignant growths, arthritis, and fistula.',
    traditionalRoleTa: 'சித்த மருத்துவத்தின் தலைசிறந்த மருந்து; புற்று நோய்கள், நாள்பட்ட தோல் நோய்கள், பவுத்திரம், வாதத்திற்கு.',
    badge: 'Crown Mineral Compound',
    badgeTa: 'ரசகந்தி மெழுகு',
    image: '/images/products/ruthra-rasagandhi-mezhugu/front.jpg',
    images: [
      '/images/products/ruthra-rasagandhi-mezhugu/front.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/angle.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-rasagandhi-mezhugu/front.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/angle.jpg',
      '/images/products/ruthra-rasagandhi-mezhugu/back.jpg'
    ],
    ingredients: [
      { name: 'Rasagandhi Mezhugu Classical Compound', tamilName: 'ரசகந்தி மெழுகு மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '250mg - 500mg', instructionTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Palm jaggery, honey, or ghee.', instructionTa: 'பனைவெல்லம், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '250mg - 500mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Palm jaggery, honey, or ghee',
      amountTa: '250 மி.கி - 500 மி.கி (பயறு அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'பனைவெல்லம், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Rasagandhi Mezhugu prepared?',
        questionTa: 'ருத்ரா ரசகந்தி மெழுகு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["rasagandhi mezhugu","ruthra rasagandhi mezhugu","mezhugu","rasagandhi","mezhugu","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ரசகந்தி மெழுகு","ருத்ரா ரசகந்தி மெழுகு","மெழுகு","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: PARPAM (5 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-096',
    name: 'Ruthra Karasooda Sathu Parpam',
    tamilName: 'ருத்ரா காரசூட சத்து பற்பம்',
    slug: 'ruthra-karasooda-sathu-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Purified camphor mineral calx for acute vatha nerve tremors, pain, and respiratory collapse support. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நரம்பு தளர்ச்சி, வாத வலிகள், சுவாச அடைப்பு மற்றும் இதய பலவீனத்தை போக்கும் பற்பம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karasooda Sathu Parpam (காரசூட சத்து பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா காரசூட சத்து பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified camphor mineral calx for acute vatha nerve tremors, pain, and respiratory collapse support.',
    traditionalRoleTa: 'நரம்பு தளர்ச்சி, வாத வலிகள், சுவாச அடைப்பு மற்றும் இதய பலவீனத்தை போக்கும் பற்பம்.',
    badge: 'Calcinated Camphor Essence',
    badgeTa: 'காரசூட பற்பம்',
    image: '/images/products/ruthra-karasooda-sathu-parpam/front.jpg',
    images: [
      '/images/products/ruthra-karasooda-sathu-parpam/front.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/angle.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karasooda-sathu-parpam/front.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/angle.jpg',
      '/images/products/ruthra-karasooda-sathu-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Karasooda Sathu Parpam Classical Compound', tamilName: 'காரசூட சத்து பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karasooda Sathu Parpam prepared?',
        questionTa: 'ருத்ரா காரசூட சத்து பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karasooda sathu parpam","ruthra karasooda sathu parpam","parpam","karasooda","sathu","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["காரசூட சத்து பற்பம்","ருத்ரா காரசூட சத்து பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-097',
    name: 'Ruthra Karuvanga Parpam',
    tamilName: 'ருத்ரா கருவங்க பற்பம்',
    slug: 'ruthra-karuvanga-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["metabolic-wellness","womens-wellness"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Calcinated tin mineral preparation for diabetes mellitus, leucorrhea, nocturnal emissions, and gonorrhea. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நீரிழிவு சர்க்கரை நோய், வெள்ளைப்படுதல், விந்து நலிவு மற்றும் மேக நோய்களை குணப்படுத்தும் பற்பம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karuvanga Parpam (கருவங்க பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கருவங்க பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Calcinated tin mineral preparation for diabetes mellitus, leucorrhea, nocturnal emissions, and gonorrhea.',
    traditionalRoleTa: 'நீரிழிவு சர்க்கரை நோய், வெள்ளைப்படுதல், விந்து நலிவு மற்றும் மேக நோய்களை குணப்படுத்தும் பற்பம்.',
    badge: 'Purified Tin Calx',
    badgeTa: 'கருவங்க பற்பம்',
    image: '/images/products/ruthra-karuvanga-parpam/front.jpg',
    images: [
      '/images/products/ruthra-karuvanga-parpam/front.jpg',
      '/images/products/ruthra-karuvanga-parpam/angle.jpg',
      '/images/products/ruthra-karuvanga-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karuvanga-parpam/front.jpg',
      '/images/products/ruthra-karuvanga-parpam/angle.jpg',
      '/images/products/ruthra-karuvanga-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Karuvanga Parpam Classical Compound', tamilName: 'கருவங்க பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karuvanga Parpam prepared?',
        questionTa: 'ருத்ரா கருவங்க பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karuvanga parpam","ruthra karuvanga parpam","parpam","karuvanga","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கருவங்க பற்பம்","ருத்ரா கருவங்க பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-098',
    name: 'Ruthra Naga Parpam',
    tamilName: 'ருத்ரா நாக பற்பம்',
    slug: 'ruthra-naga-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Calcinated zinc calx for bleeding hemorrhoids, anal fissures, chronic ulcers, and eye diseases. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ரத்த மூலம், உள் மூலம், பவுத்திரம், ஆசனவாய் பிளவு மற்றும் ஆறாத புண்களுக்கு அருமருந்து. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Naga Parpam (நாக பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா நாக பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Calcinated zinc calx for bleeding hemorrhoids, anal fissures, chronic ulcers, and eye diseases.',
    traditionalRoleTa: 'ரத்த மூலம், உள் மூலம், பவுத்திரம், ஆசனவாய் பிளவு மற்றும் ஆறாத புண்களுக்கு அருமருந்து.',
    badge: 'Calcinated Zinc Oxide',
    badgeTa: 'நாக பற்பம்',
    image: '/images/products/ruthra-naga-parpam/front.jpg',
    images: [
      '/images/products/ruthra-naga-parpam/front.jpg',
      '/images/products/ruthra-naga-parpam/angle.jpg',
      '/images/products/ruthra-naga-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-naga-parpam/front.jpg',
      '/images/products/ruthra-naga-parpam/angle.jpg',
      '/images/products/ruthra-naga-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Naga Parpam Classical Compound', tamilName: 'நாக பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Naga Parpam prepared?',
        questionTa: 'ருத்ரா நாக பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["naga parpam","ruthra naga parpam","parpam","naga","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["நாக பற்பம்","ருத்ரா நாக பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-099',
    name: 'Ruthra Panchalavana Parpam',
    tamilName: 'ருத்ரா பஞ்சலவண பற்பம்',
    slug: 'ruthra-panchalavana-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["digestive-wellness"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Five purified classical salts calx for intense dyspepsia, abdominal distension, and spleen disorders. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஐந்து வகை உப்புகள் சேர்ந்த பற்பம்; வயிற்று வலி, உப்புசம், குன்மம் மற்றும் மண்ணீரல் வீக்கம் போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchalavana Parpam (பஞ்சலவண பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா பஞ்சலவண பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Five purified classical salts calx for intense dyspepsia, abdominal distension, and spleen disorders.',
    traditionalRoleTa: 'ஐந்து வகை உப்புகள் சேர்ந்த பற்பம்; வயிற்று வலி, உப்புசம், குன்மம் மற்றும் மண்ணீரல் வீக்கம் போக்கி.',
    badge: 'Five-Salt Calx',
    badgeTa: 'பஞ்சலவண பற்பம்',
    image: '/images/products/ruthra-panchalavana-parpam/front.jpg',
    images: [
      '/images/products/ruthra-panchalavana-parpam/front.jpg',
      '/images/products/ruthra-panchalavana-parpam/angle.jpg',
      '/images/products/ruthra-panchalavana-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchalavana-parpam/front.jpg',
      '/images/products/ruthra-panchalavana-parpam/angle.jpg',
      '/images/products/ruthra-panchalavana-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Panchalavana Parpam Classical Compound', tamilName: 'பஞ்சலவண பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchalavana Parpam prepared?',
        questionTa: 'ருத்ரா பஞ்சலவண பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchalavana parpam","ruthra panchalavana parpam","parpam","panchalavana","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["பஞ்சலவண பற்பம்","ருத்ரா பஞ்சலவண பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-100',
    name: 'Ruthra Sangu Parpam',
    tamilName: 'ருத்ரா சங்கு பற்பம்',
    slug: 'ruthra-sangu-parpam',
    medicalSystem: 'siddha',
    formulation: 'Parpam',
    formulationTa: 'பற்பம்',
    categoryGroup: 'parpam',
    concerns: ["digestive-wellness","skin-hair"],
    price: 290,
    originalPrice: 340,
    packSize: '10g',
    packSizeTa: '10 கிராம்',
    shortDescription: 'Purified conch shell calx for hyperacidity, duodenal ulcers, GERD, pimples, and melasma. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குடல் புண், நெஞ்செரிச்சல், அசிடிட்டி, முகப்பரு, கரும்புள்ளிகள் மற்றும் தோல் நோய்களுக்கு சங்கு பற்பம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sangu Parpam (சங்கு பற்பம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சங்கு பற்பம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified conch shell calx for hyperacidity, duodenal ulcers, GERD, pimples, and melasma.',
    traditionalRoleTa: 'குடல் புண், நெஞ்செரிச்சல், அசிடிட்டி, முகப்பரு, கரும்புள்ளிகள் மற்றும் தோல் நோய்களுக்கு சங்கு பற்பம்.',
    badge: 'Purified Conch Calx',
    badgeTa: 'சங்கு பற்பம்',
    image: '/images/products/ruthra-sangu-parpam/front.jpg',
    images: [
      '/images/products/ruthra-sangu-parpam/front.jpg',
      '/images/products/ruthra-sangu-parpam/angle.jpg',
      '/images/products/ruthra-sangu-parpam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sangu-parpam/front.jpg',
      '/images/products/ruthra-sangu-parpam/angle.jpg',
      '/images/products/ruthra-sangu-parpam/back.jpg'
    ],
    ingredients: [
      { name: 'Sangu Parpam Classical Compound', tamilName: 'சங்கு பற்பம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '100mg - 200mg', instructionTa: '100 - 200 மி.கி (அரிசி எடை அளவு)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Honey, ghee, or milk.', instructionTa: 'தேன், நெய் அல்லது பசும்பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '100mg - 200mg',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Honey, ghee, or milk',
      amountTa: '100 - 200 மி.கி (அரிசி எடை அளவு)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'தேன், நெய் அல்லது பசும்பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sangu Parpam prepared?',
        questionTa: 'ருத்ரா சங்கு பற்பம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sangu parpam","ruthra sangu parpam","parpam","sangu","parpam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சங்கு பற்பம்","ருத்ரா சங்கு பற்பம்","பற்பம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: THEENEER (1 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-101',
    name: 'Ruthra Oma Theeneer',
    tamilName: 'ருத்ரா ஓம தீநீர்',
    slug: 'ruthra-oma-theeneer',
    medicalSystem: 'siddha',
    formulation: 'Theeneer',
    formulationTa: 'தீநீர்',
    categoryGroup: 'theeneer',
    concerns: ["digestive-wellness"],
    price: 120,
    originalPrice: 140,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Steam-distilled pure Trachyspermum ammi hydrosol for instant gas relief, cholera, and infantile gripes. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வாலை வடித்த தூய ஓம தீநீர்; அஜீரணம், வயிற்று வலி, வாந்தி பேதி மற்றும் குழந்தைகளுக்கு மாந்தம் போக்கி. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Oma Theeneer (ஓம தீநீர்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா ஓம தீநீர் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Steam-distilled pure Trachyspermum ammi hydrosol for instant gas relief, cholera, and infantile gripes.',
    traditionalRoleTa: 'வாலை வடித்த தூய ஓம தீநீர்; அஜீரணம், வயிற்று வலி, வாந்தி பேதி மற்றும் குழந்தைகளுக்கு மாந்தம் போக்கி.',
    badge: 'Distilled Ajwain Hydrosol',
    badgeTa: 'ஓம தீநீர்',
    image: '/images/products/ruthra-oma-theeneer/front.jpg',
    images: [
      '/images/products/ruthra-oma-theeneer/front.jpg',
      '/images/products/ruthra-oma-theeneer/angle.jpg',
      '/images/products/ruthra-oma-theeneer/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-oma-theeneer/front.jpg',
      '/images/products/ruthra-oma-theeneer/angle.jpg',
      '/images/products/ruthra-oma-theeneer/back.jpg'
    ],
    ingredients: [
      { name: 'Oma Theeneer Classical Compound', tamilName: 'ஓம தீநீர் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-30 ml', instructionTa: '15-30 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Direct or diluted with equal quantity of warm water.', instructionTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '15-30 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Direct or diluted with equal quantity of warm water',
      amountTa: '15-30 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'நேரடியாக அல்லது சம அளவு வெந்நீருடன்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Oma Theeneer prepared?',
        questionTa: 'ருத்ரா ஓம தீநீர் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["oma theeneer","ruthra oma theeneer","theeneer","oma","theeneer","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["ஓம தீநீர்","ருத்ரா ஓம தீநீர்","தீநீர்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: THAILAM (9 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-102',
    name: 'Ruthra Amirthakumari Thailam',
    tamilName: 'ருத்ரா அமிர்தகுமாரி தைலம்',
    slug: 'ruthra-amirthakumari-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cooling head application oil for reducing cranial heat, promoting deep restorative sleep, and scalp wellness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'தலைச்சூடு, தூக்கமின்மை, கண் எரிச்சல் மற்றும் முடி உதிர்வை தடுக்கும் அமிர்தகுமாரி தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amirthakumari Thailam (அமிர்தகுமாரி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா அமிர்தகுமாரி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cooling head application oil for reducing cranial heat, promoting deep restorative sleep, and scalp wellness.',
    traditionalRoleTa: 'தலைச்சூடு, தூக்கமின்மை, கண் எரிச்சல் மற்றும் முடி உதிர்வை தடுக்கும் அமிர்தகுமாரி தைலம்.',
    badge: 'Cranial Coolant Oil',
    badgeTa: 'அமிர்தகுமாரி தைலம்',
    image: '/images/products/ruthra-amirthakumari-thailam/front.jpg',
    images: [
      '/images/products/ruthra-amirthakumari-thailam/front.jpg',
      '/images/products/ruthra-amirthakumari-thailam/angle.jpg',
      '/images/products/ruthra-amirthakumari-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amirthakumari-thailam/front.jpg',
      '/images/products/ruthra-amirthakumari-thailam/angle.jpg',
      '/images/products/ruthra-amirthakumari-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Amirthakumari Thailam Classical Compound', tamilName: 'அமிர்தகுமாரி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amirthakumari Thailam prepared?',
        questionTa: 'ருத்ரா அமிர்தகுமாரி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amirthakumari thailam","ruthra amirthakumari thailam","thailam","amirthakumari","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["அமிர்தகுமாரி தைலம்","ருத்ரா அமிர்தகுமாரி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-103',
    name: 'Ruthra Citramutti Madakku Tailam',
    tamilName: 'ருத்ரா சிற்றாமுட்டி மடக்கு தைலம்',
    slug: 'ruthra-citramutti-madakku-tailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Pavonia zeylanica multi-boiled oil for severe neurological deficits, facial palsy, and hemi-plegia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'பக்கவாதம், முகவாதம், மூட்டு முடக்கம் மற்றும் தீவிர நரம்பு வலிகளுக்கு சிறந்த மடக்கு தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Citramutti Madakku Tailam (சிற்றாமுட்டி மடக்கு தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா சிற்றாமுட்டி மடக்கு தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Pavonia zeylanica multi-boiled oil for severe neurological deficits, facial palsy, and hemi-plegia.',
    traditionalRoleTa: 'பக்கவாதம், முகவாதம், மூட்டு முடக்கம் மற்றும் தீவிர நரம்பு வலிகளுக்கு சிறந்த மடக்கு தைலம்.',
    badge: 'Intensive Neuro Oil',
    badgeTa: 'சிற்றாமுட்டி மடக்கு தைலம்',
    image: '/images/products/ruthra-citramutti-madakku-tailam/front.jpg',
    images: [
      '/images/products/ruthra-citramutti-madakku-tailam/front.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/angle.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-citramutti-madakku-tailam/front.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/angle.jpg',
      '/images/products/ruthra-citramutti-madakku-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Citramutti Madakku Tailam Classical Compound', tamilName: 'சிற்றாமுட்டி மடக்கு தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Citramutti Madakku Tailam prepared?',
        questionTa: 'ருத்ரா சிற்றாமுட்டி மடக்கு தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["citramutti madakku tailam","ruthra citramutti madakku tailam","thailam","citramutti","madakku","tailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["சிற்றாமுட்டி மடக்கு தைலம்","ருத்ரா சிற்றாமுட்டி மடக்கு தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-104',
    name: 'Ruthra Garudankizhangu Ennai',
    tamilName: 'ருத்ரா கருடன்கிழங்கு எண்ணெய்',
    slug: 'ruthra-garudankizhangu-ennai',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility","skin-hair"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Corallocarpus epigaeus oil for acute inflammatory swellings, venomous stings, and toxic boils. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'நச்சுக்கடி, வீக்கங்கள், கட்டிகள் மற்றும் கடுமையான மூட்டு வலிகளுக்கு சிறந்த வெளிப்புற எண்ணெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Garudankizhangu Ennai (கருடன்கிழங்கு எண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா கருடன்கிழங்கு எண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Corallocarpus epigaeus oil for acute inflammatory swellings, venomous stings, and toxic boils.',
    traditionalRoleTa: 'நச்சுக்கடி, வீக்கங்கள், கட்டிகள் மற்றும் கடுமையான மூட்டு வலிகளுக்கு சிறந்த வெளிப்புற எண்ணெய்.',
    badge: 'Anti-Toxic Inflammatory Oil',
    badgeTa: 'கருடன்கிழங்கு எண்ணெய்',
    image: '/images/products/ruthra-garudankizhangu-ennai/front.jpg',
    images: [
      '/images/products/ruthra-garudankizhangu-ennai/front.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/angle.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-garudankizhangu-ennai/front.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/angle.jpg',
      '/images/products/ruthra-garudankizhangu-ennai/back.jpg'
    ],
    ingredients: [
      { name: 'Garudankizhangu Ennai Classical Compound', tamilName: 'கருடன்கிழங்கு எண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Garudankizhangu Ennai prepared?',
        questionTa: 'ருத்ரா கருடன்கிழங்கு எண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["garudankizhangu ennai","ruthra garudankizhangu ennai","thailam","garudankizhangu","ennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["கருடன்கிழங்கு எண்ணெய்","ருத்ரா கருடன்கிழங்கு எண்ணெய்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-105',
    name: 'Ruthra Kulirthamarai Thailam',
    tamilName: 'ருத்ரா குளிர்தாமரை தைலம்',
    slug: 'ruthra-kulirthamarai-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Lotus flower medicated cooling oil for burning eyes, sinusitis headaches, and mental exhaustion. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கண் எரிச்சல், உடல் உஷ்ணம், மன அழுத்தம் மற்றும் தலைபாரம் போக்கும் குளிர் தாமரை தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kulirthamarai Thailam (குளிர்தாமரை தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குளிர்தாமரை தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Lotus flower medicated cooling oil for burning eyes, sinusitis headaches, and mental exhaustion.',
    traditionalRoleTa: 'கண் எரிச்சல், உடல் உஷ்ணம், மன அழுத்தம் மற்றும் தலைபாரம் போக்கும் குளிர் தாமரை தைலம்.',
    badge: 'Lotus Soothing Oil',
    badgeTa: 'குளிர்தாமரை தைலம்',
    image: '/images/products/ruthra-kulirthamarai-thailam/front.jpg',
    images: [
      '/images/products/ruthra-kulirthamarai-thailam/front.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/angle.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kulirthamarai-thailam/front.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/angle.jpg',
      '/images/products/ruthra-kulirthamarai-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Kulirthamarai Thailam Classical Compound', tamilName: 'குளிர்தாமரை தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kulirthamarai Thailam prepared?',
        questionTa: 'ருத்ரா குளிர்தாமரை தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kulirthamarai thailam","ruthra kulirthamarai thailam","thailam","kulirthamarai","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குளிர்தாமரை தைலம்","ருத்ரா குளிர்தாமரை தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-106',
    name: 'Ruthra Kumari Thailam',
    tamilName: 'ருத்ரா குமரி தைலம்',
    slug: 'ruthra-kumari-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Aloe vera hair and scalp oil for dandruff, premature greying, cooling eyes, and dense hair growth. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'கற்றாழை தைலம்; பொடுகு, இளநரை, முடி உதிர்வு நீங்கி அடர்த்தியான முடி வளர்ச்சிக்கு. பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kumari Thailam (குமரி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா குமரி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Aloe vera hair and scalp oil for dandruff, premature greying, cooling eyes, and dense hair growth.',
    traditionalRoleTa: 'கற்றாழை தைலம்; பொடுகு, இளநரை, முடி உதிர்வு நீங்கி அடர்த்தியான முடி வளர்ச்சிக்கு.',
    badge: 'Aloe Scalp Nourisher',
    badgeTa: 'குமரி தைலம்',
    image: '/images/products/ruthra-kumari-thailam/front.jpg',
    images: [
      '/images/products/ruthra-kumari-thailam/front.jpg',
      '/images/products/ruthra-kumari-thailam/angle.jpg',
      '/images/products/ruthra-kumari-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kumari-thailam/front.jpg',
      '/images/products/ruthra-kumari-thailam/angle.jpg',
      '/images/products/ruthra-kumari-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Kumari Thailam Classical Compound', tamilName: 'குமரி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kumari Thailam prepared?',
        questionTa: 'ருத்ரா குமரி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kumari thailam","ruthra kumari thailam","thailam","kumari","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["குமரி தைலம்","ருத்ரா குமரி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-107',
    name: 'Ruthra Meni Thilam',
    tamilName: 'ருத்ரா மேனி தைலம்',
    slug: 'ruthra-meni-thilam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["skin-hair"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Acalypha indica herbal oil for chronic eczema, fungal dermatitis, skin scabies, and wound healing. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'குப்பைமேனி மூலிகை தைலம்; சிரங்கு, கரப்பான், படை மற்றும் தோல் அரிப்புகளை போக்கும். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Meni Thilam (மேனி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மேனி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Acalypha indica herbal oil for chronic eczema, fungal dermatitis, skin scabies, and wound healing.',
    traditionalRoleTa: 'குப்பைமேனி மூலிகை தைலம்; சிரங்கு, கரப்பான், படை மற்றும் தோல் அரிப்புகளை போக்கும்.',
    badge: 'Dermal Care Oil',
    badgeTa: 'மேனி தைலம்',
    image: '/images/products/ruthra-meni-thilam/front.jpg',
    images: [
      '/images/products/ruthra-meni-thilam/front.jpg',
      '/images/products/ruthra-meni-thilam/angle.jpg',
      '/images/products/ruthra-meni-thilam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-meni-thilam/front.jpg',
      '/images/products/ruthra-meni-thilam/angle.jpg',
      '/images/products/ruthra-meni-thilam/back.jpg'
    ],
    ingredients: [
      { name: 'Meni Thilam Classical Compound', tamilName: 'மேனி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Meni Thilam prepared?',
        questionTa: 'ருத்ரா மேனி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["meni thilam","ruthra meni thilam","thailam","meni","thilam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மேனி தைலம்","ருத்ரா மேனி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-108',
    name: 'Ruthra Merugulli Thailam',
    tamilName: 'ருத்ரா மெழுகுள்ளி தைலம்',
    slug: 'ruthra-merugulli-thailam',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Garlic and wax compound oil for chronic earache, otitis media, deafness prevention, and vatha pain. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'காது வலி, காதில் சீழ் வடிதல், காது இரைச்சல் மற்றும் வாத வலிகளுக்கு வெளிப்புற தைலம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Merugulli Thailam (மெழுகுள்ளி தைலம்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா மெழுகுள்ளி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Garlic and wax compound oil for chronic earache, otitis media, deafness prevention, and vatha pain.',
    traditionalRoleTa: 'காது வலி, காதில் சீழ் வடிதல், காது இரைச்சல் மற்றும் வாத வலிகளுக்கு வெளிப்புற தைலம்.',
    badge: 'Ear & Joint Oil',
    badgeTa: 'மெழுகுள்ளி தைலம்',
    image: '/images/products/ruthra-merugulli-thailam/front.jpg',
    images: [
      '/images/products/ruthra-merugulli-thailam/front.jpg',
      '/images/products/ruthra-merugulli-thailam/angle.jpg',
      '/images/products/ruthra-merugulli-thailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-merugulli-thailam/front.jpg',
      '/images/products/ruthra-merugulli-thailam/angle.jpg',
      '/images/products/ruthra-merugulli-thailam/back.jpg'
    ],
    ingredients: [
      { name: 'Merugulli Thailam Classical Compound', tamilName: 'மெழுகுள்ளி தைலம் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Merugulli Thailam prepared?',
        questionTa: 'ருத்ரா மெழுகுள்ளி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["merugulli thailam","ruthra merugulli thailam","thailam","merugulli","thailam","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["மெழுகுள்ளி தைலம்","ருத்ரா மெழுகுள்ளி தைலம்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-109',
    name: 'Ruthra Veezhi Ennai',
    tamilName: 'ருத்ரா வீழி எண்ணெய்',
    slug: 'ruthra-veezhi-ennai',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility","respiratory"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cadaba trifoliata oil for deep-seated vatha joint contractures, wheezing, and muscular stiffness. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'வீழி இலை எண்ணெய்; மூட்டு பிடிப்பு, தசை இறுக்கம் மற்றும் சுவாச கோளாறுகளுக்கு நிவாரணம். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Veezhi Ennai (வீழி எண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வீழி எண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cadaba trifoliata oil for deep-seated vatha joint contractures, wheezing, and muscular stiffness.',
    traditionalRoleTa: 'வீழி இலை எண்ணெய்; மூட்டு பிடிப்பு, தசை இறுக்கம் மற்றும் சுவாச கோளாறுகளுக்கு நிவாரணம்.',
    badge: 'Joint Contracture Oil',
    badgeTa: 'வீழி எண்ணெய்',
    image: '/images/products/ruthra-veezhi-ennai/front.jpg',
    images: [
      '/images/products/ruthra-veezhi-ennai/front.jpg',
      '/images/products/ruthra-veezhi-ennai/angle.jpg',
      '/images/products/ruthra-veezhi-ennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-veezhi-ennai/front.jpg',
      '/images/products/ruthra-veezhi-ennai/angle.jpg',
      '/images/products/ruthra-veezhi-ennai/back.jpg'
    ],
    ingredients: [
      { name: 'Veezhi Ennai Classical Compound', tamilName: 'வீழி எண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Veezhi Ennai prepared?',
        questionTa: 'ருத்ரா வீழி எண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["veezhi ennai","ruthra veezhi ennai","thailam","veezhi","ennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வீழி எண்ணெய்","ருத்ரா வீழி எண்ணெய்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-siddha-110',
    name: 'Ruthra Vizhuthi Ennai',
    tamilName: 'ருத்ரா விழுதி எண்ணெய்',
    slug: 'ruthra-vizhuthi-ennai',
    medicalSystem: 'siddha',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'thailam',
    concerns: ["joint-mobility"],
    price: 195,
    originalPrice: 230,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cadaba fruticosa oil for lumbar spondylosis, sciatica, joint immobility, and neuralgia. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'இடுப்பு வலி, சியாட்டிகா, மூட்டு வாதம் மற்றும் நரம்பு வலிகளுக்கு சிறந்த விழுதி எண்ணெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vizhuthi Ennai (விழுதி எண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா விழுதி எண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Cadaba fruticosa oil for lumbar spondylosis, sciatica, joint immobility, and neuralgia.',
    traditionalRoleTa: 'இடுப்பு வலி, சியாட்டிகா, மூட்டு வாதம் மற்றும் நரம்பு வலிகளுக்கு சிறந்த விழுதி எண்ணெய்.',
    badge: 'Sciatica & Spine Oil',
    badgeTa: 'விழுதி எண்ணெய்',
    image: '/images/products/ruthra-vizhuthi-ennai/front.jpg',
    images: [
      '/images/products/ruthra-vizhuthi-ennai/front.jpg',
      '/images/products/ruthra-vizhuthi-ennai/angle.jpg',
      '/images/products/ruthra-vizhuthi-ennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vizhuthi-ennai/front.jpg',
      '/images/products/ruthra-vizhuthi-ennai/angle.jpg',
      '/images/products/ruthra-vizhuthi-ennai/back.jpg'
    ],
    ingredients: [
      { name: 'Vizhuthi Ennai Classical Compound', tamilName: 'விழுதி எண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vizhuthi Ennai prepared?',
        questionTa: 'ருத்ரா விழுதி எண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vizhuthi ennai","ruthra vizhuthi ennai","thailam","vizhuthi","ennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["விழுதி எண்ணெய்","ருத்ரா விழுதி எண்ணெய்","தைலம்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // SIDDHA: VENNAI (1 SKUs)
  // ==========================================
  {
    id: 'prod-siddha-111',
    name: 'Ruthra Vanga Vennai',
    tamilName: 'ருத்ரா வங்க வெண்ணெய்',
    slug: 'ruthra-vanga-vennai',
    medicalSystem: 'siddha',
    formulation: 'Vennai',
    formulationTa: 'வெண்ணெய்',
    categoryGroup: 'vennai',
    concerns: ["skin-hair"],
    price: 210,
    originalPrice: 245,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified lead butter ointment for intractable non-healing bedsores, diabetic gangrenous ulcers, and carbuncles. Prepared in strict adherence to classical Siddha Pharmacopoeia.',
    shortDescriptionTa: 'ஆறாத புண்கள், படுக்கை புண்கள், சர்க்கரை நோய் ரணங்கள் மற்றும் வெட்டுக்காயங்களை ஆற்றும் வங்க வெண்ணெய். பாரம்பரிய சித்த மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vanga Vennai (வங்க வெண்ணெய்) is a classical Siddha formulation crafted by Ruthra Medicines under certified GMP standards in Tirunelveli, Tamil Nadu. Prepared using authentically sourced, wildcrafted botanicals and minerals purified through traditional Shodhana procedures.',
    descriptionTa: 'ருத்ரா வங்க வெண்ணெய் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத சித்த மருந்து.',
    traditionalRole: 'Purified lead butter ointment for intractable non-healing bedsores, diabetic gangrenous ulcers, and carbuncles.',
    traditionalRoleTa: 'ஆறாத புண்கள், படுக்கை புண்கள், சர்க்கரை நோய் ரணங்கள் மற்றும் வெட்டுக்காயங்களை ஆற்றும் வங்க வெண்ணெய்.',
    badge: 'Ulcer & Wound Healing Butter',
    badgeTa: 'வங்க வெண்ணெய்',
    image: '/images/products/ruthra-vanga-vennai/front.jpg',
    images: [
      '/images/products/ruthra-vanga-vennai/front.jpg',
      '/images/products/ruthra-vanga-vennai/angle.jpg',
      '/images/products/ruthra-vanga-vennai/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vanga-vennai/front.jpg',
      '/images/products/ruthra-vanga-vennai/angle.jpg',
      '/images/products/ruthra-vanga-vennai/back.jpg'
    ],
    ingredients: [
      { name: 'Vanga Vennai Classical Compound', tamilName: 'வங்க வெண்ணெய் மூலிகைக் கூட்டு', role: 'Active classical therapeutic synergy', roleTa: 'பாரம்பரிய கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for external application', instructionTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply gently over affected area 1-2 times daily.', instructionTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for external application',
      frequency: 'Twice daily',
      timing: 'Apply gently over affected area 1-2 times daily',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற பயன்பாட்டிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'பாதிக்கப்பட்ட பகுதியில் தினமும் 1-2 முறை மெதுவாக தடவவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No known adverse drug interactions with standard therapies.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vanga Vennai prepared?',
        questionTa: 'ருத்ரா வங்க வெண்ணெய் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to classical Siddha texts using purified wildcrafted ingredients in our GMP facility.',
        answerTa: 'தூய மூலிகைகளை கொண்டு பாரம்பரிய முறைப்படி ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vanga vennai","ruthra vanga vennai","vennai","vanga","vennai","siddha medicine","classical formulation","ruthra medicines"],
    tamilKeywords: ["வங்க வெண்ணெய்","ருத்ரா வங்க வெண்ணெய்","வெண்ணெய்","சித்த மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // 3. CLASSICAL AYURVEDA MASTER CATALOG (64 SKUs across 8 categories)
  // Strictly aligned with Ruthra Medicines Manufacturing Poster
  // ==========================================

  // ==========================================
  // AYURVEDA: CHURNA (28 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-001',
    name: 'Ruthra Amalaki Churna',
    tamilName: 'ருத்ரா ஆமலகி சூர்ணம்',
    slug: 'ruthra-amalaki-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure Indian Gooseberry rasayana, rich in natural Vitamin C, balances Tridosha, strengthens vision and hair. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'நெல்லிக்காய் சூர்ணம்; வைட்டமின் சி நிறைந்தது, திரிதோஷ சமநிலை, பார்வை மற்றும் கூந்தல் வளர்ச்சிக்கு உகந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amalaki Churna (ஆமலகி சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா ஆமலகி சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Pure Indian Gooseberry rasayana, rich in natural Vitamin C, balances Tridosha, strengthens vision and hair.',
    traditionalRoleTa: 'நெல்லிக்காய் சூர்ணம்; வைட்டமின் சி நிறைந்தது, திரிதோஷ சமநிலை, பார்வை மற்றும் கூந்தல் வளர்ச்சிக்கு உகந்தது.',
    badge: 'Vitamin C & Rasayana',
    badgeTa: 'வைட்டமின் சி & காயகற்பம்',
    image: '/images/products/ruthra-amalaki-churna/front.jpg',
    images: [
      '/images/products/ruthra-amalaki-churna/front.jpg',
      '/images/products/ruthra-amalaki-churna/angle.jpg',
      '/images/products/ruthra-amalaki-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amalaki-churna/front.jpg',
      '/images/products/ruthra-amalaki-churna/angle.jpg',
      '/images/products/ruthra-amalaki-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Amalaki Churna Classical Composition', tamilName: 'ஆமலகி சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amalaki Churna prepared?',
        questionTa: 'ருத்ரா ஆமலகி சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amalaki churna","ruthra amalaki churna","churna","amalaki","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["ஆமலகி சூர்ணம்","ருத்ரா ஆமலகி சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-002',
    name: 'Ruthra Arjuna Churna',
    tamilName: 'ருத்ரா அர்ஜுன சூர்ணம்',
    slug: 'ruthra-arjuna-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["metabolic-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Terminalia arjuna bark powder supporting cardiovascular wellness, arterial elasticity, and normal blood pressure. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'மருதம்பட்டை சூர்ணம்; இதய தசைகளை பலப்படுத்தி ரத்த ஓட்டத்தை சீராக்கும் தலைசிறந்த இதய டானிக். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Arjuna Churna (அர்ஜுன சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா அர்ஜுன சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Terminalia arjuna bark powder supporting cardiovascular wellness, arterial elasticity, and normal blood pressure.',
    traditionalRoleTa: 'மருதம்பட்டை சூர்ணம்; இதய தசைகளை பலப்படுத்தி ரத்த ஓட்டத்தை சீராக்கும் தலைசிறந்த இதய டானிக்.',
    badge: 'Cardio Tonic',
    badgeTa: 'இதய நலம்',
    image: '/images/products/ruthra-arjuna-churna/front.jpg',
    images: [
      '/images/products/ruthra-arjuna-churna/front.jpg',
      '/images/products/ruthra-arjuna-churna/angle.jpg',
      '/images/products/ruthra-arjuna-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-arjuna-churna/front.jpg',
      '/images/products/ruthra-arjuna-churna/angle.jpg',
      '/images/products/ruthra-arjuna-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Arjuna Churna Classical Composition', tamilName: 'அர்ஜுன சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Arjuna Churna prepared?',
        questionTa: 'ருத்ரா அர்ஜுன சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["arjuna churna","ruthra arjuna churna","churna","arjuna","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["அர்ஜுன சூர்ணம்","ருத்ரா அர்ஜுன சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-003',
    name: 'Ruthra Asvagandha Churna',
    tamilName: 'ருத்ரா அஸ்வகந்தா சூர்ணம்',
    slug: 'ruthra-asvagandha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Premier adaptogen and nerve rejuvenator for physical endurance, chronic stress, muscle building, and restful sleep. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'அமுக்கரா சூர்ணம்; நரம்பு பலவீனம், மன அழுத்தம், தசை வலிமை மற்றும் உடல் தேற்றத்திற்கு அருமருந்து. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Asvagandha Churna (அஸ்வகந்தா சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தா சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Premier adaptogen and nerve rejuvenator for physical endurance, chronic stress, muscle building, and restful sleep.',
    traditionalRoleTa: 'அமுக்கரா சூர்ணம்; நரம்பு பலவீனம், மன அழுத்தம், தசை வலிமை மற்றும் உடல் தேற்றத்திற்கு அருமருந்து.',
    badge: 'Stress & Muscle Rejuvenator',
    badgeTa: 'மன அழுத்தம் & உடல் பலம்',
    image: '/images/products/ruthra-asvagandha-churna/front.jpg',
    images: [
      '/images/products/ruthra-asvagandha-churna/front.jpg',
      '/images/products/ruthra-asvagandha-churna/angle.jpg',
      '/images/products/ruthra-asvagandha-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-asvagandha-churna/front.jpg',
      '/images/products/ruthra-asvagandha-churna/angle.jpg',
      '/images/products/ruthra-asvagandha-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Asvagandha Churna Classical Composition', tamilName: 'அஸ்வகந்தா சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Asvagandha Churna prepared?',
        questionTa: 'ருத்ரா அஸ்வகந்தா சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["asvagandha churna","ruthra asvagandha churna","churna","asvagandha","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["அஸ்வகந்தா சூர்ணம்","ருத்ரா அஸ்வகந்தா சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-004',
    name: 'Ruthra Atmagupta Churna',
    tamilName: 'ருத்ரா ஆத்மகுப்தா சூர்ணம்',
    slug: 'ruthra-atmagupta-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Mucuna pruriens seed powder for neuro-motor vitality, Parkinsonian tremors, libido, and stamina. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'பூனைக்காலி விதை சூர்ணம்; நரம்பு மண்டல புத்துணர்ச்சி, நடுக்கு வாதம் மற்றும் தாது புஷ்டிக்கு சிறந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Atmagupta Churna (ஆத்மகுப்தா சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா ஆத்மகுப்தா சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Mucuna pruriens seed powder for neuro-motor vitality, Parkinsonian tremors, libido, and stamina.',
    traditionalRoleTa: 'பூனைக்காலி விதை சூர்ணம்; நரம்பு மண்டல புத்துணர்ச்சி, நடுக்கு வாதம் மற்றும் தாது புஷ்டிக்கு சிறந்தது.',
    badge: 'Neuro & Vitality Tonic',
    badgeTa: 'நரம்பு & தாது பலம்',
    image: '/images/products/ruthra-atmagupta-churna/front.jpg',
    images: [
      '/images/products/ruthra-atmagupta-churna/front.jpg',
      '/images/products/ruthra-atmagupta-churna/angle.jpg',
      '/images/products/ruthra-atmagupta-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-atmagupta-churna/front.jpg',
      '/images/products/ruthra-atmagupta-churna/angle.jpg',
      '/images/products/ruthra-atmagupta-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Atmagupta Churna Classical Composition', tamilName: 'ஆத்மகுப்தா சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Atmagupta Churna prepared?',
        questionTa: 'ருத்ரா ஆத்மகுப்தா சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["atmagupta churna","ruthra atmagupta churna","churna","atmagupta","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["ஆத்மகுப்தா சூர்ணம்","ருத்ரா ஆத்மகுப்தா சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-005',
    name: 'Ruthra Avipattikara Churna',
    tamilName: 'ருத்ரா அவிபத்திகர சூர்ணம்',
    slug: 'ruthra-avipattikara-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical Pitta pacifier for severe hyperacidity, GERD, heartburn, sour belching, and bilious headaches. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'அசிடிட்டி, நெஞ்செரிச்சல், புளித்த ஏப்பம் மற்றும் பித்த தலைவலியை போக்கும் பாரம்பரிய சூர்ணம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Avipattikara Churna (அவிபத்திகர சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா அவிபத்திகர சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Classical Pitta pacifier for severe hyperacidity, GERD, heartburn, sour belching, and bilious headaches.',
    traditionalRoleTa: 'அசிடிட்டி, நெஞ்செரிச்சல், புளித்த ஏப்பம் மற்றும் பித்த தலைவலியை போக்கும் பாரம்பரிய சூர்ணம்.',
    badge: 'Hyperacidity & GERD Care',
    badgeTa: 'அசிடிட்டி & நெஞ்செரிச்சல்',
    image: '/images/products/ruthra-avipattikara-churna/front.jpg',
    images: [
      '/images/products/ruthra-avipattikara-churna/front.jpg',
      '/images/products/ruthra-avipattikara-churna/angle.jpg',
      '/images/products/ruthra-avipattikara-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-avipattikara-churna/front.jpg',
      '/images/products/ruthra-avipattikara-churna/angle.jpg',
      '/images/products/ruthra-avipattikara-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Avipattikara Churna Classical Composition', tamilName: 'அவிபத்திகர சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Avipattikara Churna prepared?',
        questionTa: 'ருத்ரா அவிபத்திகர சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["avipattikara churna","ruthra avipattikara churna","churna","avipattikara","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["அவிபத்திகர சூர்ணம்","ருத்ரா அவிபத்திகர சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-006',
    name: 'Ruthra Baskara Lavana Churna',
    tamilName: 'ருத்ரா பாஸ்கர லவண சூர்ணம்',
    slug: 'ruthra-baskara-lavana-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Mineral salt appetizer stimulating sluggish digestive enzyme secretion, relieving chronic flatulence and colic. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'செரிமான தீயை தூண்டி, பசியின்மை, வாயு பிடிப்பு மற்றும் வயிற்று உப்புசத்தை போக்கும் லவண சூர்ணம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Baskara Lavana Churna (பாஸ்கர லவண சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா பாஸ்கர லவண சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Mineral salt appetizer stimulating sluggish digestive enzyme secretion, relieving chronic flatulence and colic.',
    traditionalRoleTa: 'செரிமான தீயை தூண்டி, பசியின்மை, வாயு பிடிப்பு மற்றும் வயிற்று உப்புசத்தை போக்கும் லவண சூர்ணம்.',
    badge: 'Appetizer & Carminative',
    badgeTa: 'பசி தூண்டி & வாயு நிவாரணி',
    image: '/images/products/ruthra-baskara-lavana-churna/front.jpg',
    images: [
      '/images/products/ruthra-baskara-lavana-churna/front.jpg',
      '/images/products/ruthra-baskara-lavana-churna/angle.jpg',
      '/images/products/ruthra-baskara-lavana-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-baskara-lavana-churna/front.jpg',
      '/images/products/ruthra-baskara-lavana-churna/angle.jpg',
      '/images/products/ruthra-baskara-lavana-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Baskara Lavana Churna Classical Composition', tamilName: 'பாஸ்கர லவண சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Baskara Lavana Churna prepared?',
        questionTa: 'ருத்ரா பாஸ்கர லவண சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["baskara lavana churna","ruthra baskara lavana churna","churna","baskara","lavana","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["பாஸ்கர லவண சூர்ணம்","ருத்ரா பாஸ்கர லவண சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-007',
    name: 'Ruthra Dadimastaka Churna',
    tamilName: 'ருத்ரா தாடிமாஷ்டக சூர்ணம்',
    slug: 'ruthra-dadimastaka-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pomegranate-based intestinal astringent for irritable bowel syndrome (IBS), chronic diarrhea, and sprue. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'மாதுளை கூட்டு சூர்ணம்; நாள்பட்ட கழிச்சல், கிரஹணி மற்றும் குடல் பலவீனத்தை போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Dadimastaka Churna (தாடிமாஷ்டக சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா தாடிமாஷ்டக சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Pomegranate-based intestinal astringent for irritable bowel syndrome (IBS), chronic diarrhea, and sprue.',
    traditionalRoleTa: 'மாதுளை கூட்டு சூர்ணம்; நாள்பட்ட கழிச்சல், கிரஹணி மற்றும் குடல் பலவீனத்தை போக்கும்.',
    badge: 'IBS & Gut Restorer',
    badgeTa: 'குடல் கழிச்சல் நிவாரணம்',
    image: '/images/products/ruthra-dadimastaka-churna/front.jpg',
    images: [
      '/images/products/ruthra-dadimastaka-churna/front.jpg',
      '/images/products/ruthra-dadimastaka-churna/angle.jpg',
      '/images/products/ruthra-dadimastaka-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-dadimastaka-churna/front.jpg',
      '/images/products/ruthra-dadimastaka-churna/angle.jpg',
      '/images/products/ruthra-dadimastaka-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Dadimastaka Churna Classical Composition', tamilName: 'தாடிமாஷ்டக சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Dadimastaka Churna prepared?',
        questionTa: 'ருத்ரா தாடிமாஷ்டக சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["dadimastaka churna","ruthra dadimastaka churna","churna","dadimastaka","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["தாடிமாஷ்டக சூர்ணம்","ருத்ரா தாடிமாஷ்டக சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-008',
    name: 'Ruthra Dashamoola Churna',
    tamilName: 'ருத்ரா தசமூல சூர்ணம்',
    slug: 'ruthra-dashamoola-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["joint-mobility","respiratory"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Ten-sacred-roots compound for balancing Vata-Kapha, post-fever convalescence, and neuromuscular aches. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'பத்து மூலிகைகளின் வேர் கலவை; வாத நோய்கள், காய்ச்சலுக்கு பின் வரும் உடல் சோர்வு மற்றும் மூட்டு வலி போக்கி. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Dashamoola Churna (தசமூல சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா தசமூல சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Ten-sacred-roots compound for balancing Vata-Kapha, post-fever convalescence, and neuromuscular aches.',
    traditionalRoleTa: 'பத்து மூலிகைகளின் வேர் கலவை; வாத நோய்கள், காய்ச்சலுக்கு பின் வரும் உடல் சோர்வு மற்றும் மூட்டு வலி போக்கி.',
    badge: 'Ten Roots Vata Tonic',
    badgeTa: 'தசமூல வாத நிவாரணம்',
    image: '/images/products/ruthra-dashamoola-churna/front.jpg',
    images: [
      '/images/products/ruthra-dashamoola-churna/front.jpg',
      '/images/products/ruthra-dashamoola-churna/angle.jpg',
      '/images/products/ruthra-dashamoola-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-dashamoola-churna/front.jpg',
      '/images/products/ruthra-dashamoola-churna/angle.jpg',
      '/images/products/ruthra-dashamoola-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Dashamoola Churna Classical Composition', tamilName: 'தசமூல சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Dashamoola Churna prepared?',
        questionTa: 'ருத்ரா தசமூல சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["dashamoola churna","ruthra dashamoola churna","churna","dashamoola","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["தசமூல சூர்ணம்","ருத்ரா தசமூல சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-009',
    name: 'Ruthra Eladi Churna',
    tamilName: 'ருத்ரா ஏலாதி சூர்ணம்',
    slug: 'ruthra-eladi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["respiratory","digestive-wellness","skin-hair"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Cardamom formulation for soothing upper respiratory congestion, throat irritation, and improving skin complexion. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'ஏலக்காய் கலவை; தொண்டை கரகரப்பு, இருமல், பித்த உஷ்ணம் மற்றும் தோல் பொலிவுக்கு உகந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Eladi Churna (ஏலாதி சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா ஏலாதி சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Cardamom formulation for soothing upper respiratory congestion, throat irritation, and improving skin complexion.',
    traditionalRoleTa: 'ஏலக்காய் கலவை; தொண்டை கரகரப்பு, இருமல், பித்த உஷ்ணம் மற்றும் தோல் பொலிவுக்கு உகந்தது.',
    badge: 'Throat & Complexion',
    badgeTa: 'தொண்டை & தோல் நலம்',
    image: '/images/products/ruthra-eladi-churna/front.jpg',
    images: [
      '/images/products/ruthra-eladi-churna/front.jpg',
      '/images/products/ruthra-eladi-churna/angle.jpg',
      '/images/products/ruthra-eladi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-eladi-churna/front.jpg',
      '/images/products/ruthra-eladi-churna/angle.jpg',
      '/images/products/ruthra-eladi-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Eladi Churna Classical Composition', tamilName: 'ஏலாதி சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Eladi Churna prepared?',
        questionTa: 'ருத்ரா ஏலாதி சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["eladi churna","ruthra eladi churna","churna","eladi","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["ஏலாதி சூர்ணம்","ருத்ரா ஏலாதி சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-010',
    name: 'Ruthra Gandhakadhi Churna',
    tamilName: 'ருத்ரா கந்தகாதி சூர்ணம்',
    slug: 'ruthra-gandhakadhi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified sulfur botanical blend for chronic skin dermatoses, eczema, scabies, and systemic blood purification. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கந்தக கலவை; சோரியாசிஸ், கரப்பான், அரிப்பு மற்றும் ரத்தத்தில் உள்ள நச்சுக்களை நீக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gandhakadhi Churna (கந்தகாதி சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா கந்தகாதி சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified sulfur botanical blend for chronic skin dermatoses, eczema, scabies, and systemic blood purification.',
    traditionalRoleTa: 'கந்தக கலவை; சோரியாசிஸ், கரப்பான், அரிப்பு மற்றும் ரத்தத்தில் உள்ள நச்சுக்களை நீக்கும்.',
    badge: 'Blood & Skin Purifier',
    badgeTa: 'ரத்த சுத்தி & தோல் நலம்',
    image: '/images/products/ruthra-gandhakadhi-churna/front.jpg',
    images: [
      '/images/products/ruthra-gandhakadhi-churna/front.jpg',
      '/images/products/ruthra-gandhakadhi-churna/angle.jpg',
      '/images/products/ruthra-gandhakadhi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gandhakadhi-churna/front.jpg',
      '/images/products/ruthra-gandhakadhi-churna/angle.jpg',
      '/images/products/ruthra-gandhakadhi-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Gandhakadhi Churna Classical Composition', tamilName: 'கந்தகாதி சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gandhakadhi Churna prepared?',
        questionTa: 'ருத்ரா கந்தகாதி சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gandhakadhi churna","ruthra gandhakadhi churna","churna","gandhakadhi","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["கந்தகாதி சூர்ணம்","ருத்ரா கந்தகாதி சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-011',
    name: 'Ruthra Hingvastaka Churna',
    tamilName: 'ருத்ரா இங்வாஷ்டக சூர்ணம்',
    slug: 'ruthra-hingvastaka-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Eight-ingredient asafoetida compound relieving severe abdominal distension, gas cramps, and indigestion. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'பெருங்காய கூட்டு; வயிற்று உப்புசம், வாயு பிடிப்பு, செரிமான மந்தம் மற்றும் குடல் இரைச்சல் போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Hingvastaka Churna (இங்வாஷ்டக சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா இங்வாஷ்டக சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Eight-ingredient asafoetida compound relieving severe abdominal distension, gas cramps, and indigestion.',
    traditionalRoleTa: 'பெருங்காய கூட்டு; வயிற்று உப்புசம், வாயு பிடிப்பு, செரிமான மந்தம் மற்றும் குடல் இரைச்சல் போக்கும்.',
    badge: 'Gas & Bloating Relief',
    badgeTa: 'வாயு & செரிமான நலம்',
    image: '/images/products/ruthra-hingvastaka-churna/front.jpg',
    images: [
      '/images/products/ruthra-hingvastaka-churna/front.jpg',
      '/images/products/ruthra-hingvastaka-churna/angle.jpg',
      '/images/products/ruthra-hingvastaka-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-hingvastaka-churna/front.jpg',
      '/images/products/ruthra-hingvastaka-churna/angle.jpg',
      '/images/products/ruthra-hingvastaka-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Hingvastaka Churna Classical Composition', tamilName: 'இங்வாஷ்டக சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Hingvastaka Churna prepared?',
        questionTa: 'ருத்ரா இங்வாஷ்டக சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["hingvastaka churna","ruthra hingvastaka churna","churna","hingvastaka","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["இங்வாஷ்டக சூர்ணம்","ருத்ரா இங்வாஷ்டக சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-012',
    name: 'Ruthra Jatyadi Churna',
    tamilName: 'ருத்ரா ஜாத்யாதி சூர்ணம்',
    slug: 'ruthra-jatyadi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["skin-hair"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Herbal compound for external wound dusting, cleansing non-healing ulcers, anal fissures, and eczema. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'ஆறாத புண்கள், வெட்டுக்காயங்கள், ஆசனவாய் பிளவு மற்றும் தோல் ரணங்களை ஆற்றும் சூர்ணம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Jatyadi Churna (ஜாத்யாதி சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா ஜாத்யாதி சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Herbal compound for external wound dusting, cleansing non-healing ulcers, anal fissures, and eczema.',
    traditionalRoleTa: 'ஆறாத புண்கள், வெட்டுக்காயங்கள், ஆசனவாய் பிளவு மற்றும் தோல் ரணங்களை ஆற்றும் சூர்ணம்.',
    badge: 'Wound Dusting Powder',
    badgeTa: 'புண் ஆற்றும் சூர்ணம்',
    image: '/images/products/ruthra-jatyadi-churna/front.jpg',
    images: [
      '/images/products/ruthra-jatyadi-churna/front.jpg',
      '/images/products/ruthra-jatyadi-churna/angle.jpg',
      '/images/products/ruthra-jatyadi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-jatyadi-churna/front.jpg',
      '/images/products/ruthra-jatyadi-churna/angle.jpg',
      '/images/products/ruthra-jatyadi-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Jatyadi Churna Classical Composition', tamilName: 'ஜாத்யாதி சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Jatyadi Churna prepared?',
        questionTa: 'ருத்ரா ஜாத்யாதி சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["jatyadi churna","ruthra jatyadi churna","churna","jatyadi","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["ஜாத்யாதி சூர்ணம்","ருத்ரா ஜாத்யாதி சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-013',
    name: 'Ruthra Katuki Churna',
    tamilName: 'ருத்ரா கடுகிரோகிணி சூர்ணம்',
    slug: 'ruthra-katuki-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["metabolic-wellness","digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Picrorhiza kurroa root powder for hepatic detox, balancing Pitta-Kapha, fever reduction, and liver health. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கல்லீரல் செயல்பாடு மேன்மை, மஞ்சள் காமாலை தற்காப்பு, பித்த கழிவு நீக்கம் மற்றும் காய்ச்சல் தணிக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Katuki Churna (கடுகிரோகிணி சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா கடுகிரோகிணி சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Picrorhiza kurroa root powder for hepatic detox, balancing Pitta-Kapha, fever reduction, and liver health.',
    traditionalRoleTa: 'கல்லீரல் செயல்பாடு மேன்மை, மஞ்சள் காமாலை தற்காப்பு, பித்த கழிவு நீக்கம் மற்றும் காய்ச்சல் தணிக்கும்.',
    badge: 'Hepatic Cleanser',
    badgeTa: 'கல்லீரல் சுத்திகரிப்பு',
    image: '/images/products/ruthra-katuki-churna/front.jpg',
    images: [
      '/images/products/ruthra-katuki-churna/front.jpg',
      '/images/products/ruthra-katuki-churna/angle.jpg',
      '/images/products/ruthra-katuki-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-katuki-churna/front.jpg',
      '/images/products/ruthra-katuki-churna/angle.jpg',
      '/images/products/ruthra-katuki-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Katuki Churna Classical Composition', tamilName: 'கடுகிரோகிணி சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Katuki Churna prepared?',
        questionTa: 'ருத்ரா கடுகிரோகிணி சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["katuki churna","ruthra katuki churna","churna","katuki","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["கடுகிரோகிணி சூர்ணம்","ருத்ரா கடுகிரோகிணி சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-014',
    name: 'Ruthra Kumaryasava Churna',
    tamilName: 'ருத்ரா குமார்யாசவ சூர்ணம்',
    slug: 'ruthra-kumaryasava-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["womens-wellness","digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Aloe vera infused powder for female hormonal harmony, amenorrhea, liver sluggishness, and anemia. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கற்றாழை கூட்டு சூர்ணம்; மகளிர் மாதவிடாய் ஒழுங்குபடுத்தி, கல்லீரல் பலம் மற்றும் ரத்த சோகை நீக்கி. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kumaryasava Churna (குமார்யாசவ சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா குமார்யாசவ சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Aloe vera infused powder for female hormonal harmony, amenorrhea, liver sluggishness, and anemia.',
    traditionalRoleTa: 'கற்றாழை கூட்டு சூர்ணம்; மகளிர் மாதவிடாய் ஒழுங்குபடுத்தி, கல்லீரல் பலம் மற்றும் ரத்த சோகை நீக்கி.',
    badge: 'Hormonal & Liver Balance',
    badgeTa: 'மகளிர் & கல்லீரல் நலம்',
    image: '/images/products/ruthra-kumaryasava-churna/front.jpg',
    images: [
      '/images/products/ruthra-kumaryasava-churna/front.jpg',
      '/images/products/ruthra-kumaryasava-churna/angle.jpg',
      '/images/products/ruthra-kumaryasava-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kumaryasava-churna/front.jpg',
      '/images/products/ruthra-kumaryasava-churna/angle.jpg',
      '/images/products/ruthra-kumaryasava-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Kumaryasava Churna Classical Composition', tamilName: 'குமார்யாசவ சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kumaryasava Churna prepared?',
        questionTa: 'ருத்ரா குமார்யாசவ சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kumaryasava churna","ruthra kumaryasava churna","churna","kumaryasava","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["குமார்யாசவ சூர்ணம்","ருத்ரா குமார்யாசவ சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-015',
    name: 'Ruthra Lodhra Churna',
    tamilName: 'ருத்ரா லோத்ரா சூர்ணம்',
    slug: 'ruthra-lodhra-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["womens-wellness","skin-hair"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Symplocos racemosa bark for excessive uterine bleeding, leucorrhea, acne, and firming loose skin tissues. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'வெள்ளைப்படுதல், அதிக உதிரப்போக்கு, கருப்பை பலவீனம் மற்றும் முகப்பருக்களை போக்கும் லோத்ரா. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Lodhra Churna (லோத்ரா சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா லோத்ரா சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Symplocos racemosa bark for excessive uterine bleeding, leucorrhea, acne, and firming loose skin tissues.',
    traditionalRoleTa: 'வெள்ளைப்படுதல், அதிக உதிரப்போக்கு, கருப்பை பலவீனம் மற்றும் முகப்பருக்களை போக்கும் லோத்ரா.',
    badge: 'Uterine Astringent',
    badgeTa: 'மகளிர் கருப்பை நலம்',
    image: '/images/products/ruthra-lodhra-churna/front.jpg',
    images: [
      '/images/products/ruthra-lodhra-churna/front.jpg',
      '/images/products/ruthra-lodhra-churna/angle.jpg',
      '/images/products/ruthra-lodhra-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-lodhra-churna/front.jpg',
      '/images/products/ruthra-lodhra-churna/angle.jpg',
      '/images/products/ruthra-lodhra-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Lodhra Churna Classical Composition', tamilName: 'லோத்ரா சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Lodhra Churna prepared?',
        questionTa: 'ருத்ரா லோத்ரா சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["lodhra churna","ruthra lodhra churna","churna","lodhra","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["லோத்ரா சூர்ணம்","ருத்ரா லோத்ரா சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-016',
    name: 'Ruthra Musta Churna',
    tamilName: 'ருத்ரா முஸ்தா (கோரைக்கிழங்கு) சூர்ணம்',
    slug: 'ruthra-musta-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Nutgrass root powder for chronic enteritis, infantile diarrhea, fever thirst, and digestive assimilation. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கோரைக்கிழங்கு சூர்ணம்; குழந்தைகளுக்கு மாந்த கழிச்சல், காய்ச்சல் தாகம் மற்றும் குடல் புண் ஆற்றும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Musta Churna (முஸ்தா (கோரைக்கிழங்கு) சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா முஸ்தா (கோரைக்கிழங்கு) சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Nutgrass root powder for chronic enteritis, infantile diarrhea, fever thirst, and digestive assimilation.',
    traditionalRoleTa: 'கோரைக்கிழங்கு சூர்ணம்; குழந்தைகளுக்கு மாந்த கழிச்சல், காய்ச்சல் தாகம் மற்றும் குடல் புண் ஆற்றும்.',
    badge: 'Digestive & Anti-Diarrheal',
    badgeTa: 'செரிமானம் & பேதி கட்டுப்பாடு',
    image: '/images/products/ruthra-musta-churna/front.jpg',
    images: [
      '/images/products/ruthra-musta-churna/front.jpg',
      '/images/products/ruthra-musta-churna/angle.jpg',
      '/images/products/ruthra-musta-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-musta-churna/front.jpg',
      '/images/products/ruthra-musta-churna/angle.jpg',
      '/images/products/ruthra-musta-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Musta Churna Classical Composition', tamilName: 'முஸ்தா (கோரைக்கிழங்கு) சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Musta Churna prepared?',
        questionTa: 'ருத்ரா முஸ்தா (கோரைக்கிழங்கு) சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["musta churna","ruthra musta churna","churna","musta","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["முஸ்தா (கோரைக்கிழங்கு) சூர்ணம்","ருத்ரா முஸ்தா (கோரைக்கிழங்கு) சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-017',
    name: 'Ruthra Nimba Churna',
    tamilName: 'ருத்ரா நிம்ப (வேம்பு) சூர்ணம்',
    slug: 'ruthra-nimba-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure Neem leaf powder for deep microbial defense, blood detoxification, acne, and managing blood glucose. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'வேப்பிலை சூர்ணம்; கிருமி நாசினி, ரத்த சுத்தி, சரும நோய்கள் மற்றும் சர்க்கரை அளவு சமநிலைக்கு. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Nimba Churna (நிம்ப (வேம்பு) சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா நிம்ப (வேம்பு) சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Pure Neem leaf powder for deep microbial defense, blood detoxification, acne, and managing blood glucose.',
    traditionalRoleTa: 'வேப்பிலை சூர்ணம்; கிருமி நாசினி, ரத்த சுத்தி, சரும நோய்கள் மற்றும் சர்க்கரை அளவு சமநிலைக்கு.',
    badge: 'Antimicrobial & Glucose Balance',
    badgeTa: 'கிருமி நாசினி & ரத்த சுத்தி',
    image: '/images/products/ruthra-nimba-churna/front.jpg',
    images: [
      '/images/products/ruthra-nimba-churna/front.jpg',
      '/images/products/ruthra-nimba-churna/angle.jpg',
      '/images/products/ruthra-nimba-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-nimba-churna/front.jpg',
      '/images/products/ruthra-nimba-churna/angle.jpg',
      '/images/products/ruthra-nimba-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Nimba Churna Classical Composition', tamilName: 'நிம்ப (வேம்பு) சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Nimba Churna prepared?',
        questionTa: 'ருத்ரா நிம்ப (வேம்பு) சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["nimba churna","ruthra nimba churna","churna","nimba","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["நிம்ப (வேம்பு) சூர்ணம்","ருத்ரா நிம்ப (வேம்பு) சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-018',
    name: 'Ruthra Panchakola Churna',
    tamilName: 'ருத்ரா பஞ்சகோல சூர்ணம்',
    slug: 'ruthra-panchakola-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness","respiratory"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pippali, Pippalimula, Chavya, Chitraka, Nagara compound igniting profound digestive power and clearing Kapha. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'ஐந்து மூலிகை கூட்டு; கடுமையான அஜீரணம், மந்தம், பசியின்மை மற்றும் கப அடைப்பை போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchakola Churna (பஞ்சகோல சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா பஞ்சகோல சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Pippali, Pippalimula, Chavya, Chitraka, Nagara compound igniting profound digestive power and clearing Kapha.',
    traditionalRoleTa: 'ஐந்து மூலிகை கூட்டு; கடுமையான அஜீரணம், மந்தம், பசியின்மை மற்றும் கப அடைப்பை போக்கும்.',
    badge: 'Profound Digestive Catalyst',
    badgeTa: 'தீவிர செரிமான தூண்டி',
    image: '/images/products/ruthra-panchakola-churna/front.jpg',
    images: [
      '/images/products/ruthra-panchakola-churna/front.jpg',
      '/images/products/ruthra-panchakola-churna/angle.jpg',
      '/images/products/ruthra-panchakola-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchakola-churna/front.jpg',
      '/images/products/ruthra-panchakola-churna/angle.jpg',
      '/images/products/ruthra-panchakola-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Panchakola Churna Classical Composition', tamilName: 'பஞ்சகோல சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchakola Churna prepared?',
        questionTa: 'ருத்ரா பஞ்சகோல சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchakola churna","ruthra panchakola churna","churna","panchakola","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["பஞ்சகோல சூர்ணம்","ருத்ரா பஞ்சகோல சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-019',
    name: 'Ruthra Pippali Churna',
    tamilName: 'ருத்ரா திப்பிலி சூர்ணம்',
    slug: 'ruthra-pippali-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["respiratory","digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Long pepper rasayana for chronic asthma, productive cough, spleen enlargement, and metabolic enhancement. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'திப்பிலி சூர்ணம்; ஆஸ்துமா, நாள்பட்ட இருமல், இரைப்பு மற்றும் செரிமான தீயை தூண்டும் காயகற்பம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pippali Churna (திப்பிலி சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திப்பிலி சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Long pepper rasayana for chronic asthma, productive cough, spleen enlargement, and metabolic enhancement.',
    traditionalRoleTa: 'திப்பிலி சூர்ணம்; ஆஸ்துமா, நாள்பட்ட இருமல், இரைப்பு மற்றும் செரிமான தீயை தூண்டும் காயகற்பம்.',
    badge: 'Respiratory Rasayana',
    badgeTa: 'சுவாச காயகற்பம்',
    image: '/images/products/ruthra-pippali-churna/front.jpg',
    images: [
      '/images/products/ruthra-pippali-churna/front.jpg',
      '/images/products/ruthra-pippali-churna/angle.jpg',
      '/images/products/ruthra-pippali-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pippali-churna/front.jpg',
      '/images/products/ruthra-pippali-churna/angle.jpg',
      '/images/products/ruthra-pippali-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Pippali Churna Classical Composition', tamilName: 'திப்பிலி சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pippali Churna prepared?',
        questionTa: 'ருத்ரா திப்பிலி சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pippali churna","ruthra pippali churna","churna","pippali","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திப்பிலி சூர்ணம்","ருத்ரா திப்பிலி சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-020',
    name: 'Ruthra Pippalimula Churna',
    tamilName: 'ருத்ரா திப்பிலி மூலம் (கண்டந்திப்பிலி) சூர்ணம்',
    slug: 'ruthra-pippalimula-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness","respiratory"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Roots of long pepper for relieving chronic insomnia, abdominal flatulence, body aches, and deep cough. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கண்டந்திப்பிலி சூர்ணம்; தூக்கமின்மை, வாயு பிடிப்பு, நெஞ்சு சளி மற்றும் உடல் வலிகளை போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pippalimula Churna (திப்பிலி மூலம் (கண்டந்திப்பிலி) சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திப்பிலி மூலம் (கண்டந்திப்பிலி) சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Roots of long pepper for relieving chronic insomnia, abdominal flatulence, body aches, and deep cough.',
    traditionalRoleTa: 'கண்டந்திப்பிலி சூர்ணம்; தூக்கமின்மை, வாயு பிடிப்பு, நெஞ்சு சளி மற்றும் உடல் வலிகளை போக்கும்.',
    badge: 'Deep Rest & Carminative',
    badgeTa: 'தூக்கமின்மை & வாயு நிவாரணம்',
    image: '/images/products/ruthra-pippalimula-churna/front.jpg',
    images: [
      '/images/products/ruthra-pippalimula-churna/front.jpg',
      '/images/products/ruthra-pippalimula-churna/angle.jpg',
      '/images/products/ruthra-pippalimula-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pippalimula-churna/front.jpg',
      '/images/products/ruthra-pippalimula-churna/angle.jpg',
      '/images/products/ruthra-pippalimula-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Pippalimula Churna Classical Composition', tamilName: 'திப்பிலி மூலம் (கண்டந்திப்பிலி) சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pippalimula Churna prepared?',
        questionTa: 'ருத்ரா திப்பிலி மூலம் (கண்டந்திப்பிலி) சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pippalimula churna","ruthra pippalimula churna","churna","pippalimula","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திப்பிலி மூலம் (கண்டந்திப்பிலி) சூர்ணம்","ருத்ரா திப்பிலி மூலம் (கண்டந்திப்பிலி) சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-021',
    name: 'Ruthra Pushyanuga Churna',
    tamilName: 'ருத்ரா புஷ்யானுக சூர்ணம்',
    slug: 'ruthra-pushyanuga-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["womens-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Classical multi-herb gynecological astringent for menorrhagia, metrorrhagia, leucorrhea, and hemorrhoids. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'மகளிர் உதிரப்போக்கு, வெள்ளைப்படுதல், கருப்பை வீக்கம் மற்றும் மூல நோய்க்கு சிறந்த பாரம்பரிய சூர்ணம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Pushyanuga Churna (புஷ்யானுக சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா புஷ்யானுக சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Classical multi-herb gynecological astringent for menorrhagia, metrorrhagia, leucorrhea, and hemorrhoids.',
    traditionalRoleTa: 'மகளிர் உதிரப்போக்கு, வெள்ளைப்படுதல், கருப்பை வீக்கம் மற்றும் மூல நோய்க்கு சிறந்த பாரம்பரிய சூர்ணம்.',
    badge: 'Women’s Classical Care',
    badgeTa: 'மகளிர் உதிரப்போக்கு நிவாரணம்',
    image: '/images/products/ruthra-pushyanuga-churna/front.jpg',
    images: [
      '/images/products/ruthra-pushyanuga-churna/front.jpg',
      '/images/products/ruthra-pushyanuga-churna/angle.jpg',
      '/images/products/ruthra-pushyanuga-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-pushyanuga-churna/front.jpg',
      '/images/products/ruthra-pushyanuga-churna/angle.jpg',
      '/images/products/ruthra-pushyanuga-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Pushyanuga Churna Classical Composition', tamilName: 'புஷ்யானுக சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Pushyanuga Churna prepared?',
        questionTa: 'ருத்ரா புஷ்யானுக சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["pushyanuga churna","ruthra pushyanuga churna","churna","pushyanuga","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["புஷ்யானுக சூர்ணம்","ருத்ரா புஷ்யானுக சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-022',
    name: 'Ruthra Shatavari Churna',
    tamilName: 'ருத்ரா சதாவரி (தண்ணீர்விட்டான்) சூர்ணம்',
    slug: 'ruthra-shatavari-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["womens-wellness","metabolic-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Asparagus racemosus root powder for female reproductive nourishment, lactation, cooling Pitta, and vitality. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'தண்ணீர்விட்டான் கிழங்கு; தாய்ப்பால் பெருக்கி, பெண் ஹார்மோன் சமநிலை, உடல் குளிர்ச்சி மற்றும் தேக பலம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Shatavari Churna (சதாவரி (தண்ணீர்விட்டான்) சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா சதாவரி (தண்ணீர்விட்டான்) சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Asparagus racemosus root powder for female reproductive nourishment, lactation, cooling Pitta, and vitality.',
    traditionalRoleTa: 'தண்ணீர்விட்டான் கிழங்கு; தாய்ப்பால் பெருக்கி, பெண் ஹார்மோன் சமநிலை, உடல் குளிர்ச்சி மற்றும் தேக பலம்.',
    badge: 'Female Tonic & Lactation',
    badgeTa: 'மகளிர் டானிக் & தாய்ப்பால்',
    image: '/images/products/ruthra-shatavari-churna/front.jpg',
    images: [
      '/images/products/ruthra-shatavari-churna/front.jpg',
      '/images/products/ruthra-shatavari-churna/angle.jpg',
      '/images/products/ruthra-shatavari-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-shatavari-churna/front.jpg',
      '/images/products/ruthra-shatavari-churna/angle.jpg',
      '/images/products/ruthra-shatavari-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Shatavari Churna Classical Composition', tamilName: 'சதாவரி (தண்ணீர்விட்டான்) சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Shatavari Churna prepared?',
        questionTa: 'ருத்ரா சதாவரி (தண்ணீர்விட்டான்) சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["shatavari churna","ruthra shatavari churna","churna","shatavari","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["சதாவரி (தண்ணீர்விட்டான்) சூர்ணம்","ருத்ரா சதாவரி (தண்ணீர்விட்டான்) சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-023',
    name: 'Ruthra Shigru Churna',
    tamilName: 'ருத்ரா ஷிக்ரு (முருங்கை) சூர்ணம்',
    slug: 'ruthra-shigru-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Moringa oleifera leaf powder packed with antioxidants, calcium, and minerals for joint strength and vitality. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'முருங்கை இலை சூர்ணம்; மூட்டு வலி நிவாரணம், எலும்பு வலிமை, ரத்த சோகை நீக்கம் மற்றும் இயற்கை சத்துக்கள். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Shigru Churna (ஷிக்ரு (முருங்கை) சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா ஷிக்ரு (முருங்கை) சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Moringa oleifera leaf powder packed with antioxidants, calcium, and minerals for joint strength and vitality.',
    traditionalRoleTa: 'முருங்கை இலை சூர்ணம்; மூட்டு வலி நிவாரணம், எலும்பு வலிமை, ரத்த சோகை நீக்கம் மற்றும் இயற்கை சத்துக்கள்.',
    badge: 'Superfood & Joint Strength',
    badgeTa: 'இயற்கை சத்து & மூட்டு பலம்',
    image: '/images/products/ruthra-shigru-churna/front.jpg',
    images: [
      '/images/products/ruthra-shigru-churna/front.jpg',
      '/images/products/ruthra-shigru-churna/angle.jpg',
      '/images/products/ruthra-shigru-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-shigru-churna/front.jpg',
      '/images/products/ruthra-shigru-churna/angle.jpg',
      '/images/products/ruthra-shigru-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Shigru Churna Classical Composition', tamilName: 'ஷிக்ரு (முருங்கை) சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Shigru Churna prepared?',
        questionTa: 'ருத்ரா ஷிக்ரு (முருங்கை) சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["shigru churna","ruthra shigru churna","churna","shigru","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["ஷிக்ரு (முருங்கை) சூர்ணம்","ருத்ரா ஷிக்ரு (முருங்கை) சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-024',
    name: 'Ruthra Sunthi Churna',
    tamilName: 'ருத்ரா சுக்கு சூர்ணம்',
    slug: 'ruthra-sunthi-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness","respiratory"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified dry ginger powder for chronic dyspepsia, motion sickness, colds, nausea, and joint pain. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சுக்கு சூர்ணம்; அஜீரணம், தலைபாரம், சளி, பித்த வாந்தி மற்றும் மூட்டு வலிகளை போக்கும் அருமருந்து. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Sunthi Churna (சுக்கு சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா சுக்கு சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified dry ginger powder for chronic dyspepsia, motion sickness, colds, nausea, and joint pain.',
    traditionalRoleTa: 'சுக்கு சூர்ணம்; அஜீரணம், தலைபாரம், சளி, பித்த வாந்தி மற்றும் மூட்டு வலிகளை போக்கும் அருமருந்து.',
    badge: 'Universal Digestive Root',
    badgeTa: 'சகல செரிமான நிவாரணி',
    image: '/images/products/ruthra-sunthi-churna/front.jpg',
    images: [
      '/images/products/ruthra-sunthi-churna/front.jpg',
      '/images/products/ruthra-sunthi-churna/angle.jpg',
      '/images/products/ruthra-sunthi-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-sunthi-churna/front.jpg',
      '/images/products/ruthra-sunthi-churna/angle.jpg',
      '/images/products/ruthra-sunthi-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Sunthi Churna Classical Composition', tamilName: 'சுக்கு சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Sunthi Churna prepared?',
        questionTa: 'ருத்ரா சுக்கு சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["sunthi churna","ruthra sunthi churna","churna","sunthi","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["சுக்கு சூர்ணம்","ருத்ரா சுக்கு சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-025',
    name: 'Ruthra Tankana Churna',
    tamilName: 'ருத்ரா வெண்கார சூர்ணம்',
    slug: 'ruthra-tankana-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["respiratory","digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Borax compound for thick phlegm expectoration, stomatitis mouth ulcers, and urinary gravel. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சுத்தி செய்த வெண்காரம்; தொண்டை சளி அடைப்பு, வாய் புண்கள் மற்றும் சிறுநீரக அடைப்பு போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Tankana Churna (வெண்கார சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா வெண்கார சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified Borax compound for thick phlegm expectoration, stomatitis mouth ulcers, and urinary gravel.',
    traditionalRoleTa: 'சுத்தி செய்த வெண்காரம்; தொண்டை சளி அடைப்பு, வாய் புண்கள் மற்றும் சிறுநீரக அடைப்பு போக்கும்.',
    badge: 'Purified Borax Calx',
    badgeTa: 'வெண்கார சூர்ணம்',
    image: '/images/products/ruthra-tankana-churna/front.jpg',
    images: [
      '/images/products/ruthra-tankana-churna/front.jpg',
      '/images/products/ruthra-tankana-churna/angle.jpg',
      '/images/products/ruthra-tankana-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-tankana-churna/front.jpg',
      '/images/products/ruthra-tankana-churna/angle.jpg',
      '/images/products/ruthra-tankana-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Tankana Churna Classical Composition', tamilName: 'வெண்கார சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Tankana Churna prepared?',
        questionTa: 'ருத்ரா வெண்கார சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["tankana churna","ruthra tankana churna","churna","tankana","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["வெண்கார சூர்ணம்","ருத்ரா வெண்கார சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-026',
    name: 'Ruthra Trikatu Churna',
    tamilName: 'ருத்ரா திரிகடு சூர்ணம்',
    slug: 'ruthra-trikatu-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["respiratory","digestive-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Sunthi, Maricha, Pippali trio accelerating metabolic rate, clearing sinus congestion, and boosting bioavailability. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த முக்கூட்டு; சளி, இருமல், செரிமான குறைபாடு போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Trikatu Churna (திரிகடு சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திரிகடு சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Sunthi, Maricha, Pippali trio accelerating metabolic rate, clearing sinus congestion, and boosting bioavailability.',
    traditionalRoleTa: 'சுக்கு, மிளகு, திப்பிலி சேர்ந்த முக்கூட்டு; சளி, இருமல், செரிமான குறைபாடு போக்கும்.',
    badge: 'Metabolic & Respiratory Fire',
    badgeTa: 'திரிகடுகு செரிமானம்',
    image: '/images/products/ruthra-trikatu-churna/front.jpg',
    images: [
      '/images/products/ruthra-trikatu-churna/front.jpg',
      '/images/products/ruthra-trikatu-churna/angle.jpg',
      '/images/products/ruthra-trikatu-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-trikatu-churna/front.jpg',
      '/images/products/ruthra-trikatu-churna/angle.jpg',
      '/images/products/ruthra-trikatu-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Trikatu Churna Classical Composition', tamilName: 'திரிகடு சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Trikatu Churna prepared?',
        questionTa: 'ருத்ரா திரிகடு சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["trikatu churna","ruthra trikatu churna","churna","trikatu","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திரிகடு சூர்ணம்","ருத்ரா திரிகடு சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-027',
    name: 'Ruthra Triphala Churna',
    tamilName: 'ருத்ரா திரிபலா சூர்ணம்',
    slug: 'ruthra-triphala-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness","metabolic-wellness","skin-hair"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Haritaki, Bibhitaki, Amalaki compound for gentle colon detox, digestive rejuvenation, and ocular health. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய்; மலக்குடல் சுத்தி, கண் பார்வை, ரத்த சுத்தி மற்றும் இளமை காக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Triphala Churna (திரிபலா சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திரிபலா சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Haritaki, Bibhitaki, Amalaki compound for gentle colon detox, digestive rejuvenation, and ocular health.',
    traditionalRoleTa: 'கடுக்காய், நெல்லிக்காய், தான்றிக்காய்; மலக்குடல் சுத்தி, கண் பார்வை, ரத்த சுத்தி மற்றும் இளமை காக்கும்.',
    badge: 'Master Colon Cleanser',
    badgeTa: 'திரிபலா கல்ப சூர்ணம்',
    image: '/images/products/ruthra-triphala-churna/front.jpg',
    images: [
      '/images/products/ruthra-triphala-churna/front.jpg',
      '/images/products/ruthra-triphala-churna/angle.jpg',
      '/images/products/ruthra-triphala-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-triphala-churna/front.jpg',
      '/images/products/ruthra-triphala-churna/angle.jpg',
      '/images/products/ruthra-triphala-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Triphala Churna Classical Composition', tamilName: 'திரிபலா சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Triphala Churna prepared?',
        questionTa: 'ருத்ரா திரிபலா சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["triphala churna","ruthra triphala churna","churna","triphala","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திரிபலா சூர்ணம்","ருத்ரா திரிபலா சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-028',
    name: 'Ruthra Vidanga Churna',
    tamilName: 'ருத்ரா வாய்விடங்க சூர்ணம்',
    slug: 'ruthra-vidanga-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Churna',
    formulationTa: 'சூர்ணம்',
    categoryGroup: 'churna',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 135,
    originalPrice: 160,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Embelia ribes powder, the supreme Ayurvedic anthelmintic for expelling intestinal worms and cleansing skin. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'வாய்விடங்கம் சூர்ணம்; குடற்புழுக்கள், நாக்குப்பூச்சிகளை அகற்றி குடல் ஆரோக்கியம் காக்கும் சிறந்த மருந்து. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vidanga Churna (வாய்விடங்க சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா வாய்விடங்க சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Embelia ribes powder, the supreme Ayurvedic anthelmintic for expelling intestinal worms and cleansing skin.',
    traditionalRoleTa: 'வாய்விடங்கம் சூர்ணம்; குடற்புழுக்கள், நாக்குப்பூச்சிகளை அகற்றி குடல் ஆரோக்கியம் காக்கும் சிறந்த மருந்து.',
    badge: 'Supreme Anthelmintic',
    badgeTa: 'குடற்புழு நாசினி',
    image: '/images/products/ruthra-vidanga-churna/front.jpg',
    images: [
      '/images/products/ruthra-vidanga-churna/front.jpg',
      '/images/products/ruthra-vidanga-churna/angle.jpg',
      '/images/products/ruthra-vidanga-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vidanga-churna/front.jpg',
      '/images/products/ruthra-vidanga-churna/angle.jpg',
      '/images/products/ruthra-vidanga-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Vidanga Churna Classical Composition', tamilName: 'வாய்விடங்க சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vidanga Churna prepared?',
        questionTa: 'ருத்ரா வாய்விடங்க சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vidanga churna","ruthra vidanga churna","churna","vidanga","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["வாய்விடங்க சூர்ணம்","ருத்ரா வாய்விடங்க சூர்ணம்","சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // AYURVEDA: KWATHA CHURNA (2 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-029',
    name: 'Ruthra Dashamoola Kwatha Churna',
    tamilName: 'ருத்ரா தசமூல க்வாத சூர்ணம்',
    slug: 'ruthra-dashamoola-kwatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kwatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kwatha-churna',
    concerns: ["joint-mobility","respiratory"],
    price: 155,
    originalPrice: 180,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Coarse ten-root decoction blend for severe neuromuscular disorders, sciatica, cervical spondylosis, and cough. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'பத்து மூலிகை வேர் கஷாய தூள்; வாத நோய்கள், இடுப்பு வலி, சியாட்டிகா, ஆஸ்துமா மற்றும் மூட்டு வீக்கம் போக்கி. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Dashamoola Kwatha Churna (தசமூல க்வாத சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா தசமூல க்வாத சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Coarse ten-root decoction blend for severe neuromuscular disorders, sciatica, cervical spondylosis, and cough.',
    traditionalRoleTa: 'பத்து மூலிகை வேர் கஷாய தூள்; வாத நோய்கள், இடுப்பு வலி, சியாட்டிகா, ஆஸ்துமா மற்றும் மூட்டு வீக்கம் போக்கி.',
    badge: 'Ten Roots Decoction',
    badgeTa: 'தசமூல கஷாயம்',
    image: '/images/products/ruthra-dashamoola-kwatha-churna/front.jpg',
    images: [
      '/images/products/ruthra-dashamoola-kwatha-churna/front.jpg',
      '/images/products/ruthra-dashamoola-kwatha-churna/angle.jpg',
      '/images/products/ruthra-dashamoola-kwatha-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-dashamoola-kwatha-churna/front.jpg',
      '/images/products/ruthra-dashamoola-kwatha-churna/angle.jpg',
      '/images/products/ruthra-dashamoola-kwatha-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Dashamoola Kwatha Churna Classical Composition', tamilName: 'தசமூல க்வாத சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '10-15 grams boiled in 200ml water reduced to 50ml', instructionTa: '10-15 கிராம் பொடியை 200 மி.லி தண்ணீரில் இட்டு 50 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Fresh warm decoction.', instructionTa: 'புதிய வெதுவெதுப்பான கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '10-15 grams boiled in 200ml water reduced to 50ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Fresh warm decoction',
      amountTa: '10-15 கிராம் பொடியை 200 மி.லி தண்ணீரில் இட்டு 50 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'புதிய வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Dashamoola Kwatha Churna prepared?',
        questionTa: 'ருத்ரா தசமூல க்வாத சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["dashamoola kwatha churna","ruthra dashamoola kwatha churna","kwatha churna","dashamoola","kwatha","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["தசமூல க்வாத சூர்ணம்","ருத்ரா தசமூல க்வாத சூர்ணம்","க்வாத சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-030',
    name: 'Ruthra Triphala Kwatha Churna',
    tamilName: 'ருத்ரா திரிபலா க்வாத சூர்ணம்',
    slug: 'ruthra-triphala-kwatha-churna',
    medicalSystem: 'ayurveda',
    formulation: 'Kwatha Churna',
    formulationTa: 'க்வாத சூர்ணம்',
    categoryGroup: 'kwatha-churna',
    concerns: ["digestive-wellness","skin-hair"],
    price: 155,
    originalPrice: 180,
    packSize: '100g',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Coarse myrobalan blend for preparing fresh decoctions for eye wash, wound cleaning, and internal colon detox. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'திரிபலா கஷாய தூள்; கண் கழுவுதல், ஆறாத புண்களை கழுவுதல் மற்றும் குடல் சுத்திகரிப்புக்கு உகந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Triphala Kwatha Churna (திரிபலா க்வாத சூர்ணம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திரிபலா க்வாத சூர்ணம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Coarse myrobalan blend for preparing fresh decoctions for eye wash, wound cleaning, and internal colon detox.',
    traditionalRoleTa: 'திரிபலா கஷாய தூள்; கண் கழுவுதல், ஆறாத புண்களை கழுவுதல் மற்றும் குடல் சுத்திகரிப்புக்கு உகந்தது.',
    badge: 'Eye Wash & Detox Decoction',
    badgeTa: 'திரிபலா கஷாயம்',
    image: '/images/products/ruthra-triphala-kwatha-churna/front.jpg',
    images: [
      '/images/products/ruthra-triphala-kwatha-churna/front.jpg',
      '/images/products/ruthra-triphala-kwatha-churna/angle.jpg',
      '/images/products/ruthra-triphala-kwatha-churna/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-triphala-kwatha-churna/front.jpg',
      '/images/products/ruthra-triphala-kwatha-churna/angle.jpg',
      '/images/products/ruthra-triphala-kwatha-churna/back.jpg'
    ],
    ingredients: [
      { name: 'Triphala Kwatha Churna Classical Composition', tamilName: 'திரிபலா க்வாத சூர்ணம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '10-15 grams boiled in 200ml water reduced to 50ml', instructionTa: '10-15 கிராம் பொடியை 200 மி.லி தண்ணீரில் இட்டு 50 மி.லியாக வற்றவைத்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Fresh warm decoction.', instructionTa: 'புதிய வெதுவெதுப்பான கஷாயம் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily before food.', instructionTa: 'தினமும் இருவேளை உணவுக்கு முன்.' }
    ],
    dosage: {
      amount: '10-15 grams boiled in 200ml water reduced to 50ml',
      frequency: 'Twice daily',
      timing: 'Twice daily before food',
      vehicle: 'Fresh warm decoction',
      amountTa: '10-15 கிராம் பொடியை 200 மி.லி தண்ணீரில் இட்டு 50 மி.லியாக வற்றவைத்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்கு முன்',
      vehicleTa: 'புதிய வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Triphala Kwatha Churna prepared?',
        questionTa: 'ருத்ரா திரிபலா க்வாத சூர்ணம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["triphala kwatha churna","ruthra triphala kwatha churna","kwatha churna","triphala","kwatha","churna","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திரிபலா க்வாத சூர்ணம்","ருத்ரா திரிபலா க்வாத சூர்ணம்","க்வாத சூர்ணம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // AYURVEDA: VATI (3 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-031',
    name: 'Ruthra Triphala Guggulu',
    tamilName: 'ருத்ரா திரிபலா குக்குலு',
    slug: 'ruthra-triphala-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Vati',
    formulationTa: 'வடி / குக்குலு',
    categoryGroup: 'vati-guggulu',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 195,
    originalPrice: 230,
    packSize: '60 Tablets',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Purified Commiphora mukul and Triphala for hemorrhoids, anal fistula, inflammatory swellings, and weight detox. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'மூல நோய், பவுத்திரம், ஆசனவாய் வீக்கம் மற்றும் ரத்த கொழுப்பை குறைக்க உதவும் குக்குலு மாத்திரை. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Triphala Guggulu (திரிபலா குக்குலு) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திரிபலா குக்குலு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified Commiphora mukul and Triphala for hemorrhoids, anal fistula, inflammatory swellings, and weight detox.',
    traditionalRoleTa: 'மூல நோய், பவுத்திரம், ஆசனவாய் வீக்கம் மற்றும் ரத்த கொழுப்பை குறைக்க உதவும் குக்குலு மாத்திரை.',
    badge: 'Piles & Fistula Care',
    badgeTa: 'மூலம் & பவுத்திர நிவாரணம்',
    image: '/images/products/ruthra-triphala-guggulu/front.jpg',
    images: [
      '/images/products/ruthra-triphala-guggulu/front.jpg',
      '/images/products/ruthra-triphala-guggulu/angle.jpg',
      '/images/products/ruthra-triphala-guggulu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-triphala-guggulu/front.jpg',
      '/images/products/ruthra-triphala-guggulu/angle.jpg',
      '/images/products/ruthra-triphala-guggulu/back.jpg'
    ],
    ingredients: [
      { name: 'Triphala Guggulu Classical Composition', tamilName: 'திரிபலா குக்குலு மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or milk.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or milk',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Triphala Guggulu prepared?',
        questionTa: 'ருத்ரா திரிபலா குக்குலு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["triphala guggulu","ruthra triphala guggulu","vati","triphala","guggulu","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திரிபலா குக்குலு","ருத்ரா திரிபலா குக்குலு","வடி / குக்குலு","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-032',
    name: 'Ruthra Kaishora Guggulu',
    tamilName: 'ருத்ரா கைஷோர குக்குலு',
    slug: 'ruthra-kaishora-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Vati',
    formulationTa: 'வடி / குக்குலு',
    categoryGroup: 'vati-guggulu',
    concerns: ["joint-mobility","skin-hair"],
    price: 195,
    originalPrice: 230,
    packSize: '60 Tablets',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Celebrated compound for high uric acid, gouty arthritis, chronic skin inflammation, and blood purification. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'யூரிக் அமிலம் குறைப்பு, மூட்டு வாதம், கவுட் வலி, தோல் நோய்கள் மற்றும் ரத்த தூய்மைக்கு கைஷோர குக்குலு. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kaishora Guggulu (கைஷோர குக்குலு) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா கைஷோர குக்குலு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Celebrated compound for high uric acid, gouty arthritis, chronic skin inflammation, and blood purification.',
    traditionalRoleTa: 'யூரிக் அமிலம் குறைப்பு, மூட்டு வாதம், கவுட் வலி, தோல் நோய்கள் மற்றும் ரத்த தூய்மைக்கு கைஷோர குக்குலு.',
    badge: 'Uric Acid & Gout Relief',
    badgeTa: 'யூரிக் அமிலம் & மூட்டு வாதம்',
    image: '/images/products/ruthra-kaishora-guggulu/front.jpg',
    images: [
      '/images/products/ruthra-kaishora-guggulu/front.jpg',
      '/images/products/ruthra-kaishora-guggulu/angle.jpg',
      '/images/products/ruthra-kaishora-guggulu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kaishora-guggulu/front.jpg',
      '/images/products/ruthra-kaishora-guggulu/angle.jpg',
      '/images/products/ruthra-kaishora-guggulu/back.jpg'
    ],
    ingredients: [
      { name: 'Kaishora Guggulu Classical Composition', tamilName: 'கைஷோர குக்குலு மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or milk.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or milk',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kaishora Guggulu prepared?',
        questionTa: 'ருத்ரா கைஷோர குக்குலு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kaishora guggulu","ruthra kaishora guggulu","vati","kaishora","guggulu","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["கைஷோர குக்குலு","ருத்ரா கைஷோர குக்குலு","வடி / குக்குலு","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-033',
    name: 'Ruthra Yogaraja Guggulu',
    tamilName: 'ருத்ரா யோகராஜ குக்குலு',
    slug: 'ruthra-yogaraja-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Vati',
    formulationTa: 'வடி / குக்குலு',
    categoryGroup: 'vati-guggulu',
    concerns: ["joint-mobility"],
    price: 195,
    originalPrice: 230,
    packSize: '60 Tablets',
    packSizeTa: '60 மாத்திரைகள்',
    shortDescription: 'Potent Vata pacifier for severe rheumatoid arthritis, osteoarthritis, chronic back pain, and joint stiffness. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'முடக்கு வாதம், மூட்டு தேய்மானம், முதுகு தண்டுவட வலி மற்றும் தசை இறுக்கத்தை போக்கும் யோகராஜ குக்குலு. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Yogaraja Guggulu (யோகராஜ குக்குலு) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா யோகராஜ குக்குலு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Potent Vata pacifier for severe rheumatoid arthritis, osteoarthritis, chronic back pain, and joint stiffness.',
    traditionalRoleTa: 'முடக்கு வாதம், மூட்டு தேய்மானம், முதுகு தண்டுவட வலி மற்றும் தசை இறுக்கத்தை போக்கும் யோகராஜ குக்குலு.',
    badge: 'Vata & Joint Mobility',
    badgeTa: 'முடக்கு வாத நிவாரணம்',
    image: '/images/products/ruthra-yogaraja-guggulu/front.jpg',
    images: [
      '/images/products/ruthra-yogaraja-guggulu/front.jpg',
      '/images/products/ruthra-yogaraja-guggulu/angle.jpg',
      '/images/products/ruthra-yogaraja-guggulu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-yogaraja-guggulu/front.jpg',
      '/images/products/ruthra-yogaraja-guggulu/angle.jpg',
      '/images/products/ruthra-yogaraja-guggulu/back.jpg'
    ],
    ingredients: [
      { name: 'Yogaraja Guggulu Classical Composition', tamilName: 'யோகராஜ குக்குலு மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '1-2 Tablets', instructionTa: '1-2 மாத்திரைகள்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water or milk.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது பால் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '1-2 Tablets',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water or milk',
      amountTa: '1-2 மாத்திரைகள்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Yogaraja Guggulu prepared?',
        questionTa: 'ருத்ரா யோகராஜ குக்குலு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["yogaraja guggulu","ruthra yogaraja guggulu","vati","yogaraja","guggulu","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["யோகராஜ குக்குலு","ருத்ரா யோகராஜ குக்குலு","வடி / குக்குலு","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // AYURVEDA: LEHYAM (4 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-034',
    name: 'Ruthra Chyavanaprasham',
    tamilName: 'ருத்ரா சியவனபிராசம் லேஹ்யம்',
    slug: 'ruthra-chyavanaprasham',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ["metabolic-wellness","respiratory"],
    price: 260,
    originalPrice: 300,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Premier classical Ayurvedic rasayana with 50+ herbs for supreme immunity, vitality, lung strength, and longevity. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: '50+ மூலிகைகள் சேர்ந்த உன்னத காயகற்ப லேகியம்; நோய் எதிர்ப்பு சக்தி, சுவாச பலம் மற்றும் நீண்ட ஆயுள் தரும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Chyavanaprasham (சியவனபிராசம் லேஹ்யம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா சியவனபிராசம் லேஹ்யம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Premier classical Ayurvedic rasayana with 50+ herbs for supreme immunity, vitality, lung strength, and longevity.',
    traditionalRoleTa: '50+ மூலிகைகள் சேர்ந்த உன்னத காயகற்ப லேகியம்; நோய் எதிர்ப்பு சக்தி, சுவாச பலம் மற்றும் நீண்ட ஆயுள் தரும்.',
    badge: 'Immunity & Longevity Jam',
    badgeTa: 'நோய் எதிர்ப்பு காயகற்பம்',
    image: '/images/products/ruthra-chyavanaprasham/front.jpg',
    images: [
      '/images/products/ruthra-chyavanaprasham/front.jpg',
      '/images/products/ruthra-chyavanaprasham/angle.jpg',
      '/images/products/ruthra-chyavanaprasham/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-chyavanaprasham/front.jpg',
      '/images/products/ruthra-chyavanaprasham/angle.jpg',
      '/images/products/ruthra-chyavanaprasham/back.jpg'
    ],
    ingredients: [
      { name: 'Chyavanaprasham Classical Composition', tamilName: 'சியவனபிராசம் லேஹ்யம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams (1-2 teaspoons)', instructionTa: '5-10 கிராம் (1-2 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 grams (1-2 teaspoons)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 கிராம் (1-2 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Chyavanaprasham prepared?',
        questionTa: 'ருத்ரா சியவனபிராசம் லேஹ்யம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["chyavanaprasham","ruthra chyavanaprasham","lehyam","chyavanaprasham","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["சியவனபிராசம் லேஹ்யம்","ருத்ரா சியவனபிராசம் லேஹ்யம்","லேஹ்யம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-035',
    name: 'Ruthra Aswagandha Lehyam',
    tamilName: 'ருத்ரா அஸ்வகந்தா லேஹ்யம்',
    slug: 'ruthra-aswagandha-lehyam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 260,
    originalPrice: 300,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Nourishing botanical jam for general weakness, muscle building, stamina restoration, and nervous vitality. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'உடல் தேற்ற லேகியம்; நரம்பு தளர்ச்சி, தசை வளர்ச்சி, சோர்வு நீக்கம் மற்றும் ஆண்மை பலம் அளிக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Aswagandha Lehyam (அஸ்வகந்தா லேஹ்யம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தா லேஹ்யம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Nourishing botanical jam for general weakness, muscle building, stamina restoration, and nervous vitality.',
    traditionalRoleTa: 'உடல் தேற்ற லேகியம்; நரம்பு தளர்ச்சி, தசை வளர்ச்சி, சோர்வு நீக்கம் மற்றும் ஆண்மை பலம் அளிக்கும்.',
    badge: 'Nourishing Strength Jam',
    badgeTa: 'உடல் பலம் & நரம்பு சக்தி',
    image: '/images/products/ruthra-aswagandha-lehyam/front.jpg',
    images: [
      '/images/products/ruthra-aswagandha-lehyam/front.jpg',
      '/images/products/ruthra-aswagandha-lehyam/angle.jpg',
      '/images/products/ruthra-aswagandha-lehyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aswagandha-lehyam/front.jpg',
      '/images/products/ruthra-aswagandha-lehyam/angle.jpg',
      '/images/products/ruthra-aswagandha-lehyam/back.jpg'
    ],
    ingredients: [
      { name: 'Aswagandha Lehyam Classical Composition', tamilName: 'அஸ்வகந்தா லேஹ்யம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams (1-2 teaspoons)', instructionTa: '5-10 கிராம் (1-2 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 grams (1-2 teaspoons)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 கிராம் (1-2 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Aswagandha Lehyam prepared?',
        questionTa: 'ருத்ரா அஸ்வகந்தா லேஹ்யம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["aswagandha lehyam","ruthra aswagandha lehyam","lehyam","aswagandha","lehyam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["அஸ்வகந்தா லேஹ்யம்","ருத்ரா அஸ்வகந்தா லேஹ்யம்","லேஹ்யம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-036',
    name: 'Ruthra Drakshavalehyam',
    tamilName: 'ருத்ரா திராட்சாவலேஹ்யம்',
    slug: 'ruthra-drakshavalehyam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 260,
    originalPrice: 300,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Grape and iron synergist for post-fever weakness, jaundice convalescence, anemia, hyperacidity, and dizziness. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'திராட்சை லேகியம்; மஞ்சள் காமாலை குணமாக, ரத்த சோகை நீக்கம், பித்த தலைச்சுற்றல் மற்றும் நெஞ்செரிச்சல் போக்கி. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Drakshavalehyam (திராட்சாவலேஹ்யம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திராட்சாவலேஹ்யம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Grape and iron synergist for post-fever weakness, jaundice convalescence, anemia, hyperacidity, and dizziness.',
    traditionalRoleTa: 'திராட்சை லேகியம்; மஞ்சள் காமாலை குணமாக, ரத்த சோகை நீக்கம், பித்த தலைச்சுற்றல் மற்றும் நெஞ்செரிச்சல் போக்கி.',
    badge: 'Anemia & Liver Restorative',
    badgeTa: 'ரத்த சோகை & கல்லீரல் நலம்',
    image: '/images/products/ruthra-drakshavalehyam/front.jpg',
    images: [
      '/images/products/ruthra-drakshavalehyam/front.jpg',
      '/images/products/ruthra-drakshavalehyam/angle.jpg',
      '/images/products/ruthra-drakshavalehyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-drakshavalehyam/front.jpg',
      '/images/products/ruthra-drakshavalehyam/angle.jpg',
      '/images/products/ruthra-drakshavalehyam/back.jpg'
    ],
    ingredients: [
      { name: 'Drakshavalehyam Classical Composition', tamilName: 'திராட்சாவலேஹ்யம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams (1-2 teaspoons)', instructionTa: '5-10 கிராம் (1-2 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 grams (1-2 teaspoons)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 கிராம் (1-2 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Drakshavalehyam prepared?',
        questionTa: 'ருத்ரா திராட்சாவலேஹ்யம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["drakshavalehyam","ruthra drakshavalehyam","lehyam","drakshavalehyam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திராட்சாவலேஹ்யம்","ருத்ரா திராட்சாவலேஹ்யம்","லேஹ்யம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-037',
    name: 'Ruthra Vidaryadi Lehyam',
    tamilName: 'ருத்ரா விதார்யாதி லேஹ்யம்',
    slug: 'ruthra-vidaryadi-lehyam',
    medicalSystem: 'ayurveda',
    formulation: 'Lehyam',
    formulationTa: 'லேஹ்யம்',
    categoryGroup: 'lehyam',
    concerns: ["metabolic-wellness","respiratory"],
    price: 260,
    originalPrice: 300,
    packSize: '250g',
    packSizeTa: '250 கிராம்',
    shortDescription: 'Restorative nutritive electuary promoting healthy weight gain, cardiac strength, and emaciation recovery. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'விதாரி லேகியம்; உடல் எடை அதிகரிக்க, இதய பலம், நுரையீரல் உறுதி மற்றும் தேக புஷ்டிக்கு உகந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vidaryadi Lehyam (விதார்யாதி லேஹ்யம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா விதார்யாதி லேஹ்யம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Restorative nutritive electuary promoting healthy weight gain, cardiac strength, and emaciation recovery.',
    traditionalRoleTa: 'விதாரி லேகியம்; உடல் எடை அதிகரிக்க, இதய பலம், நுரையீரல் உறுதி மற்றும் தேக புஷ்டிக்கு உகந்தது.',
    badge: 'Weight Gain & Vitality',
    badgeTa: 'உடல் எடை & தாது பலம்',
    image: '/images/products/ruthra-vidaryadi-lehyam/front.jpg',
    images: [
      '/images/products/ruthra-vidaryadi-lehyam/front.jpg',
      '/images/products/ruthra-vidaryadi-lehyam/angle.jpg',
      '/images/products/ruthra-vidaryadi-lehyam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vidaryadi-lehyam/front.jpg',
      '/images/products/ruthra-vidaryadi-lehyam/angle.jpg',
      '/images/products/ruthra-vidaryadi-lehyam/back.jpg'
    ],
    ingredients: [
      { name: 'Vidaryadi Lehyam Classical Composition', tamilName: 'விதார்யாதி லேஹ்யம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 grams (1-2 teaspoons)', instructionTa: '5-10 கிராம் (1-2 தேக்கரண்டி)' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பசும்பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '5-10 grams (1-2 teaspoons)',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 கிராம் (1-2 தேக்கரண்டி)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'சூடான பசும்பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vidaryadi Lehyam prepared?',
        questionTa: 'ருத்ரா விதார்யாதி லேஹ்யம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vidaryadi lehyam","ruthra vidaryadi lehyam","lehyam","vidaryadi","lehyam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["விதார்யாதி லேஹ்யம்","ருத்ரா விதார்யாதி லேஹ்யம்","லேஹ்யம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // AYURVEDA: TAILAM (6 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-038',
    name: 'Ruthra Mahanarayana Tailam',
    tamilName: 'ருத்ரா மகாநாராயண தைலம்',
    slug: 'ruthra-mahanarayana-tailam',
    medicalSystem: 'ayurveda',
    formulation: 'Tailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'tailam',
    concerns: ["joint-mobility"],
    price: 210,
    originalPrice: 245,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Classical royal massage oil for osteoarthritis, paralysis, frozen shoulder, spondylosis, and muscle stiffness. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'மூட்டு தேய்மானம், பக்கவாதம், தோள்பட்டை இறுக்கம், தண்டுவட வலி மற்றும் வாத வலிகளுக்கு சிறந்த மசாஜ் தைலம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mahanarayana Tailam (மகாநாராயண தைலம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா மகாநாராயண தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Classical royal massage oil for osteoarthritis, paralysis, frozen shoulder, spondylosis, and muscle stiffness.',
    traditionalRoleTa: 'மூட்டு தேய்மானம், பக்கவாதம், தோள்பட்டை இறுக்கம், தண்டுவட வலி மற்றும் வாத வலிகளுக்கு சிறந்த மசாஜ் தைலம்.',
    badge: 'Royal Joint Massage Oil',
    badgeTa: 'மூட்டு & பக்கவாத தைலம்',
    image: '/images/products/ruthra-mahanarayana-tailam/front.jpg',
    images: [
      '/images/products/ruthra-mahanarayana-tailam/front.jpg',
      '/images/products/ruthra-mahanarayana-tailam/angle.jpg',
      '/images/products/ruthra-mahanarayana-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mahanarayana-tailam/front.jpg',
      '/images/products/ruthra-mahanarayana-tailam/angle.jpg',
      '/images/products/ruthra-mahanarayana-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Mahanarayana Tailam Classical Composition', tamilName: 'மகாநாராயண தைலம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for gentle external massage', instructionTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply warmed oil and massage gently 30-45 minutes before bath.', instructionTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for gentle external massage',
      frequency: 'Twice daily',
      timing: 'Apply warmed oil and massage gently 30-45 minutes before bath',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mahanarayana Tailam prepared?',
        questionTa: 'ருத்ரா மகாநாராயண தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mahanarayana tailam","ruthra mahanarayana tailam","tailam","mahanarayana","tailam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["மகாநாராயண தைலம்","ருத்ரா மகாநாராயண தைலம்","தைலம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-039',
    name: 'Ruthra Karpasasthyadi Tailam',
    tamilName: 'ருத்ரா கார்ப்பாசாஸ்த்யாதி தைலம்',
    slug: 'ruthra-karpasasthyadi-tailam',
    medicalSystem: 'ayurveda',
    formulation: 'Tailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'tailam',
    concerns: ["joint-mobility"],
    price: 210,
    originalPrice: 245,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cotton seed infused medicated oil for hemiplegia, facial palsy, cervical spondylosis, and upper body numbness. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'பக்கவாதம், முக வாதம், கழுத்து வலி மற்றும் நரம்பு மரத்துப்போதலுக்கு உன்னத வெளிப்புற தைலம். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Karpasasthyadi Tailam (கார்ப்பாசாஸ்த்யாதி தைலம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா கார்ப்பாசாஸ்த்யாதி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Cotton seed infused medicated oil for hemiplegia, facial palsy, cervical spondylosis, and upper body numbness.',
    traditionalRoleTa: 'பக்கவாதம், முக வாதம், கழுத்து வலி மற்றும் நரம்பு மரத்துப்போதலுக்கு உன்னத வெளிப்புற தைலம்.',
    badge: 'Neurological Deficit Oil',
    badgeTa: 'முக வாத & நரம்பு தைலம்',
    image: '/images/products/ruthra-karpasasthyadi-tailam/front.jpg',
    images: [
      '/images/products/ruthra-karpasasthyadi-tailam/front.jpg',
      '/images/products/ruthra-karpasasthyadi-tailam/angle.jpg',
      '/images/products/ruthra-karpasasthyadi-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-karpasasthyadi-tailam/front.jpg',
      '/images/products/ruthra-karpasasthyadi-tailam/angle.jpg',
      '/images/products/ruthra-karpasasthyadi-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Karpasasthyadi Tailam Classical Composition', tamilName: 'கார்ப்பாசாஸ்த்யாதி தைலம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for gentle external massage', instructionTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply warmed oil and massage gently 30-45 minutes before bath.', instructionTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for gentle external massage',
      frequency: 'Twice daily',
      timing: 'Apply warmed oil and massage gently 30-45 minutes before bath',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Karpasasthyadi Tailam prepared?',
        questionTa: 'ருத்ரா கார்ப்பாசாஸ்த்யாதி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["karpasasthyadi tailam","ruthra karpasasthyadi tailam","tailam","karpasasthyadi","tailam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["கார்ப்பாசாஸ்த்யாதி தைலம்","ருத்ரா கார்ப்பாசாஸ்த்யாதி தைலம்","தைலம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-040',
    name: 'Ruthra Bala Tailam',
    tamilName: 'ருத்ரா பலா தைலம்',
    slug: 'ruthra-bala-tailam',
    medicalSystem: 'ayurveda',
    formulation: 'Tailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'tailam',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 210,
    originalPrice: 245,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Sida cordifolia oil for musculoskeletal emaciation, nerve weakness, arthritis, and postnatal body massage. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சிற்றாமுட்டி தைலம்; தசை பலவீனம், மூட்டு வலி, நரம்பு சோர்வு மற்றும் பிரசவத்திற்கு பின் தாய்மார்கள் மசாஜ் செய்ய. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Bala Tailam (பலா தைலம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா பலா தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Sida cordifolia oil for musculoskeletal emaciation, nerve weakness, arthritis, and postnatal body massage.',
    traditionalRoleTa: 'சிற்றாமுட்டி தைலம்; தசை பலவீனம், மூட்டு வலி, நரம்பு சோர்வு மற்றும் பிரசவத்திற்கு பின் தாய்மார்கள் மசாஜ் செய்ய.',
    badge: 'Muscle Nourishing Oil',
    badgeTa: 'தசை பலம் & மசாஜ் தைலம்',
    image: '/images/products/ruthra-bala-tailam/front.jpg',
    images: [
      '/images/products/ruthra-bala-tailam/front.jpg',
      '/images/products/ruthra-bala-tailam/angle.jpg',
      '/images/products/ruthra-bala-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-bala-tailam/front.jpg',
      '/images/products/ruthra-bala-tailam/angle.jpg',
      '/images/products/ruthra-bala-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Bala Tailam Classical Composition', tamilName: 'பலா தைலம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for gentle external massage', instructionTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply warmed oil and massage gently 30-45 minutes before bath.', instructionTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for gentle external massage',
      frequency: 'Twice daily',
      timing: 'Apply warmed oil and massage gently 30-45 minutes before bath',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Bala Tailam prepared?',
        questionTa: 'ருத்ரா பலா தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["bala tailam","ruthra bala tailam","tailam","bala","tailam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["பலா தைலம்","ருத்ரா பலா தைலம்","தைலம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-041',
    name: 'Ruthra Kshirabala Tailam',
    tamilName: 'ருத்ரா க்ஷீரபலா தைலம்',
    slug: 'ruthra-kshirabala-tailam',
    medicalSystem: 'ayurveda',
    formulation: 'Tailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'tailam',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 210,
    originalPrice: 245,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Cow’s milk and Bala processed oil for peripheral neuropathy, insomnia, burning feet, and sciatica pain. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'பால் மற்றும் சிற்றாமுட்டி சேர்ந்த தைலம்; நரம்பு எரிச்சல், தூக்கமின்மை, பாத எரிச்சல் மற்றும் வாத வலி போக்கி. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kshirabala Tailam (க்ஷீரபலா தைலம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா க்ஷீரபலா தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Cow’s milk and Bala processed oil for peripheral neuropathy, insomnia, burning feet, and sciatica pain.',
    traditionalRoleTa: 'பால் மற்றும் சிற்றாமுட்டி சேர்ந்த தைலம்; நரம்பு எரிச்சல், தூக்கமின்மை, பாத எரிச்சல் மற்றும் வாத வலி போக்கி.',
    badge: 'Nerve Soothing & Sleep Oil',
    badgeTa: 'நரம்பு & பாத எரிச்சல் தைலம்',
    image: '/images/products/ruthra-kshirabala-tailam/front.jpg',
    images: [
      '/images/products/ruthra-kshirabala-tailam/front.jpg',
      '/images/products/ruthra-kshirabala-tailam/angle.jpg',
      '/images/products/ruthra-kshirabala-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kshirabala-tailam/front.jpg',
      '/images/products/ruthra-kshirabala-tailam/angle.jpg',
      '/images/products/ruthra-kshirabala-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Kshirabala Tailam Classical Composition', tamilName: 'க்ஷீரபலா தைலம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for gentle external massage', instructionTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply warmed oil and massage gently 30-45 minutes before bath.', instructionTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for gentle external massage',
      frequency: 'Twice daily',
      timing: 'Apply warmed oil and massage gently 30-45 minutes before bath',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kshirabala Tailam prepared?',
        questionTa: 'ருத்ரா க்ஷீரபலா தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kshirabala tailam","ruthra kshirabala tailam","tailam","kshirabala","tailam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["க்ஷீரபலா தைலம்","ருத்ரா க்ஷீரபலா தைலம்","தைலம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-042',
    name: 'Ruthra Dhanwantharam Tailam',
    tamilName: 'ருத்ரா தன்வந்தரம் தைலம்',
    slug: 'ruthra-dhanwantharam-tailam',
    medicalSystem: 'ayurveda',
    formulation: 'Tailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'tailam',
    concerns: ["joint-mobility","womens-wellness"],
    price: 210,
    originalPrice: 245,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Universal Ayurvedic analgesic oil for rheumatoid pains, sprains, sports injuries, and prenatal/postnatal care. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'தன்வந்தரி அருளிய உன்னத தைலம்; மூட்டு வலி, சுளுக்கு, வீக்கம் மற்றும் மகளிரின் பிரசவ கால பராமரிப்புக்கு. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Dhanwantharam Tailam (தன்வந்தரம் தைலம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா தன்வந்தரம் தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Universal Ayurvedic analgesic oil for rheumatoid pains, sprains, sports injuries, and prenatal/postnatal care.',
    traditionalRoleTa: 'தன்வந்தரி அருளிய உன்னத தைலம்; மூட்டு வலி, சுளுக்கு, வீக்கம் மற்றும் மகளிரின் பிரசவ கால பராமரிப்புக்கு.',
    badge: 'Universal Vata Relief Oil',
    badgeTa: 'தன்வந்தரம் வாத தைலம்',
    image: '/images/products/ruthra-dhanwantharam-tailam/front.jpg',
    images: [
      '/images/products/ruthra-dhanwantharam-tailam/front.jpg',
      '/images/products/ruthra-dhanwantharam-tailam/angle.jpg',
      '/images/products/ruthra-dhanwantharam-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-dhanwantharam-tailam/front.jpg',
      '/images/products/ruthra-dhanwantharam-tailam/angle.jpg',
      '/images/products/ruthra-dhanwantharam-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Dhanwantharam Tailam Classical Composition', tamilName: 'தன்வந்தரம் தைலம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for gentle external massage', instructionTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply warmed oil and massage gently 30-45 minutes before bath.', instructionTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for gentle external massage',
      frequency: 'Twice daily',
      timing: 'Apply warmed oil and massage gently 30-45 minutes before bath',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Dhanwantharam Tailam prepared?',
        questionTa: 'ருத்ரா தன்வந்தரம் தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["dhanwantharam tailam","ruthra dhanwantharam tailam","tailam","dhanwantharam","tailam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["தன்வந்தரம் தைலம்","ருத்ரா தன்வந்தரம் தைலம்","தைலம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-043',
    name: 'Ruthra Neelibhringadi Tailam',
    tamilName: 'ருத்ரா நீலிப்ரிங்காதி தைலம்',
    slug: 'ruthra-neelibhringadi-tailam',
    medicalSystem: 'ayurveda',
    formulation: 'Tailam',
    formulationTa: 'தைலம்',
    categoryGroup: 'tailam',
    concerns: ["skin-hair"],
    price: 210,
    originalPrice: 245,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Premier classical hair tonic oil for arresting premature greying, cooling head heat, and promoting thick hair growth. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'தலைசிறந்த கூந்தல் தைலம்; இளநரை தடுத்து, தலைச்சூடு நீக்கி, முடி உதிர்வை கட்டுப்படுத்தி அடர்த்தியாக வளரச் செய்யும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Neelibhringadi Tailam (நீலிப்ரிங்காதி தைலம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா நீலிப்ரிங்காதி தைலம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Premier classical hair tonic oil for arresting premature greying, cooling head heat, and promoting thick hair growth.',
    traditionalRoleTa: 'தலைசிறந்த கூந்தல் தைலம்; இளநரை தடுத்து, தலைச்சூடு நீக்கி, முடி உதிர்வை கட்டுப்படுத்தி அடர்த்தியாக வளரச் செய்யும்.',
    badge: 'Crown Hair Regrowth Oil',
    badgeTa: 'நீலிப்ரிங்காதி கூந்தல் தைலம்',
    image: '/images/products/ruthra-neelibhringadi-tailam/front.jpg',
    images: [
      '/images/products/ruthra-neelibhringadi-tailam/front.jpg',
      '/images/products/ruthra-neelibhringadi-tailam/angle.jpg',
      '/images/products/ruthra-neelibhringadi-tailam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-neelibhringadi-tailam/front.jpg',
      '/images/products/ruthra-neelibhringadi-tailam/angle.jpg',
      '/images/products/ruthra-neelibhringadi-tailam/back.jpg'
    ],
    ingredients: [
      { name: 'Neelibhringadi Tailam Classical Composition', tamilName: 'நீலிப்ரிங்காதி தைலம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: 'Sufficient quantity for gentle external massage', instructionTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with External application only.', instructionTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Apply warmed oil and massage gently 30-45 minutes before bath.', instructionTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்.' }
    ],
    dosage: {
      amount: 'Sufficient quantity for gentle external massage',
      frequency: 'Twice daily',
      timing: 'Apply warmed oil and massage gently 30-45 minutes before bath',
      vehicle: 'External application only',
      amountTa: 'தேவையான அளவு வெளிப்புற மசாஜிற்கு',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'லேசாக சூடாக்கி தேய்த்து 30-45 நிமிடம் கழித்து குளிக்கவும்',
      vehicleTa: 'வெளிப்புற பயன்பாட்டிற்கு மட்டும்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Neelibhringadi Tailam prepared?',
        questionTa: 'ருத்ரா நீலிப்ரிங்காதி தைலம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["neelibhringadi tailam","ruthra neelibhringadi tailam","tailam","neelibhringadi","tailam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["நீலிப்ரிங்காதி தைலம்","ருத்ரா நீலிப்ரிங்காதி தைலம்","தைலம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // AYURVEDA: GHRITAM (3 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-044',
    name: 'Ruthra Mahatikta Ghritam',
    tamilName: 'ருத்ரா மஹாதிக்த கிருதம்',
    slug: 'ruthra-mahatikta-ghritam',
    medicalSystem: 'ayurveda',
    formulation: 'Ghritam',
    formulationTa: 'கிருதம்',
    categoryGroup: 'ghritam',
    concerns: ["skin-hair","metabolic-wellness"],
    price: 295,
    originalPrice: 340,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Bitter herbs medicated ghee for chronic psoriasis, eczema, deep skin ulcers, liver detox, and high Pitta. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கசப்பு மூலிகைகள் சேர்ந்த நெய்; சோரியாசிஸ், நாள்பட்ட தோல் வியாதிகள், ரத்த நச்சுக்கள் மற்றும் பித்த அழற்சி போக்கி. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Mahatikta Ghritam (மஹாதிக்த கிருதம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா மஹாதிக்த கிருதம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Bitter herbs medicated ghee for chronic psoriasis, eczema, deep skin ulcers, liver detox, and high Pitta.',
    traditionalRoleTa: 'கசப்பு மூலிகைகள் சேர்ந்த நெய்; சோரியாசிஸ், நாள்பட்ட தோல் வியாதிகள், ரத்த நச்சுக்கள் மற்றும் பித்த அழற்சி போக்கி.',
    badge: 'Bitter Skin Healing Ghee',
    badgeTa: 'மஹாதிக்த தோல் நெய்',
    image: '/images/products/ruthra-mahatikta-ghritam/front.jpg',
    images: [
      '/images/products/ruthra-mahatikta-ghritam/front.jpg',
      '/images/products/ruthra-mahatikta-ghritam/angle.jpg',
      '/images/products/ruthra-mahatikta-ghritam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-mahatikta-ghritam/front.jpg',
      '/images/products/ruthra-mahatikta-ghritam/angle.jpg',
      '/images/products/ruthra-mahatikta-ghritam/back.jpg'
    ],
    ingredients: [
      { name: 'Mahatikta Ghritam Classical Composition', tamilName: 'மஹாதிக்த கிருதம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily on an empty stomach or as prescribed.', instructionTa: 'தினமும் இருவேளை வெறும் வயிற்றில் அல்லது மருத்துவர் பரிந்துரைப்படி.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily on an empty stomach or as prescribed',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை வெறும் வயிற்றில் அல்லது மருத்துவர் பரிந்துரைப்படி',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Mahatikta Ghritam prepared?',
        questionTa: 'ருத்ரா மஹாதிக்த கிருதம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["mahatikta ghritam","ruthra mahatikta ghritam","ghritam","mahatikta","ghritam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["மஹாதிக்த கிருதம்","ருத்ரா மஹாதிக்த கிருதம்","கிருதம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-045',
    name: 'Ruthra Panchagavya Ghritam',
    tamilName: 'ருத்ரா பஞ்சகவ்ய கிருதம்',
    slug: 'ruthra-panchagavya-ghritam',
    medicalSystem: 'ayurveda',
    formulation: 'Ghritam',
    formulationTa: 'கிருதம்',
    categoryGroup: 'ghritam',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 295,
    originalPrice: 340,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Five sacred cow derivatives processed ghee for cognitive clarity, memory, neurological stability, and detox. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'பஞ்சகவ்ய நெய்; மூளை நரம்புகள் புத்துணர்ச்சி, நினைவாற்றல் பெருக்கம் மற்றும் நரம்பு மண்டல சமநிலைக்கு. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Panchagavya Ghritam (பஞ்சகவ்ய கிருதம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா பஞ்சகவ்ய கிருதம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Five sacred cow derivatives processed ghee for cognitive clarity, memory, neurological stability, and detox.',
    traditionalRoleTa: 'பஞ்சகவ்ய நெய்; மூளை நரம்புகள் புத்துணர்ச்சி, நினைவாற்றல் பெருக்கம் மற்றும் நரம்பு மண்டல சமநிலைக்கு.',
    badge: 'Neuro-Cognitive Ghee',
    badgeTa: 'பஞ்சகவ்ய நெய்',
    image: '/images/products/ruthra-panchagavya-ghritam/front.jpg',
    images: [
      '/images/products/ruthra-panchagavya-ghritam/front.jpg',
      '/images/products/ruthra-panchagavya-ghritam/angle.jpg',
      '/images/products/ruthra-panchagavya-ghritam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-panchagavya-ghritam/front.jpg',
      '/images/products/ruthra-panchagavya-ghritam/angle.jpg',
      '/images/products/ruthra-panchagavya-ghritam/back.jpg'
    ],
    ingredients: [
      { name: 'Panchagavya Ghritam Classical Composition', tamilName: 'பஞ்சகவ்ய கிருதம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily on an empty stomach or as prescribed.', instructionTa: 'தினமும் இருவேளை வெறும் வயிற்றில் அல்லது மருத்துவர் பரிந்துரைப்படி.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily on an empty stomach or as prescribed',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை வெறும் வயிற்றில் அல்லது மருத்துவர் பரிந்துரைப்படி',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Panchagavya Ghritam prepared?',
        questionTa: 'ருத்ரா பஞ்சகவ்ய கிருதம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["panchagavya ghritam","ruthra panchagavya ghritam","ghritam","panchagavya","ghritam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["பஞ்சகவ்ய கிருதம்","ருத்ரா பஞ்சகவ்ய கிருதம்","கிருதம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-046',
    name: 'Ruthra Saraswatha Ghritam',
    tamilName: 'ருத்ரா சரஸ்வத கிருதம்',
    slug: 'ruthra-saraswatha-ghritam',
    medicalSystem: 'ayurveda',
    formulation: 'Ghritam',
    formulationTa: 'கிருதம்',
    categoryGroup: 'ghritam',
    concerns: ["metabolic-wellness"],
    price: 295,
    originalPrice: 340,
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    shortDescription: 'Brahmi-infused medicated ghee enhancing intellect, speech eloquence, memory retention, and mental acuity. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சரஸ்வதி நெய்; குழந்தைகளின் பேச்சு திறன், நினைவாற்றல், கற்கும் திறன் மற்றும் மூளை கூர்மைக்கு உகந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Saraswatha Ghritam (சரஸ்வத கிருதம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா சரஸ்வத கிருதம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Brahmi-infused medicated ghee enhancing intellect, speech eloquence, memory retention, and mental acuity.',
    traditionalRoleTa: 'சரஸ்வதி நெய்; குழந்தைகளின் பேச்சு திறன், நினைவாற்றல், கற்கும் திறன் மற்றும் மூளை கூர்மைக்கு உகந்தது.',
    badge: 'Intellect & Speech Ghee',
    badgeTa: 'சரஸ்வத நினைவாற்றல் நெய்',
    image: '/images/products/ruthra-saraswatha-ghritam/front.jpg',
    images: [
      '/images/products/ruthra-saraswatha-ghritam/front.jpg',
      '/images/products/ruthra-saraswatha-ghritam/angle.jpg',
      '/images/products/ruthra-saraswatha-ghritam/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-saraswatha-ghritam/front.jpg',
      '/images/products/ruthra-saraswatha-ghritam/angle.jpg',
      '/images/products/ruthra-saraswatha-ghritam/back.jpg'
    ],
    ingredients: [
      { name: 'Saraswatha Ghritam Classical Composition', tamilName: 'சரஸ்வத கிருதம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '5-10 ml', instructionTa: '5-10 மி.லி' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm milk or warm water.', instructionTa: 'சூடான பால் அல்லது வெந்நீர் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily on an empty stomach or as prescribed.', instructionTa: 'தினமும் இருவேளை வெறும் வயிற்றில் அல்லது மருத்துவர் பரிந்துரைப்படி.' }
    ],
    dosage: {
      amount: '5-10 ml',
      frequency: 'Twice daily',
      timing: 'Twice daily on an empty stomach or as prescribed',
      vehicle: 'Warm milk or warm water',
      amountTa: '5-10 மி.லி',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை வெறும் வயிற்றில் அல்லது மருத்துவர் பரிந்துரைப்படி',
      vehicleTa: 'சூடான பால் அல்லது வெந்நீர்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Saraswatha Ghritam prepared?',
        questionTa: 'ருத்ரா சரஸ்வத கிருதம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["saraswatha ghritam","ruthra saraswatha ghritam","ghritam","saraswatha","ghritam","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["சரஸ்வத கிருதம்","ருத்ரா சரஸ்வத கிருதம்","கிருதம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // AYURVEDA: ASAVAM / ARISHTA (5 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-047',
    name: 'Ruthra Aswagandharishta',
    tamilName: 'ருத்ரா அஸ்வகந்தாரிஷ்டம்',
    slug: 'ruthra-aswagandharishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 225,
    originalPrice: 260,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Naturally fermented elixir for chronic nervous exhaustion, insomnia, anxiety, and physical emaciation. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'அஸ்வகந்தா அரிஷ்டம்; நரம்பு தளர்ச்சி, தூக்கமின்மை, மன சோர்வு மற்றும் பொது பலவீனத்தை போக்கும் உன்னத டானிக். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Aswagandharishta (அஸ்வகந்தாரிஷ்டம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா அஸ்வகந்தாரிஷ்டம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Naturally fermented elixir for chronic nervous exhaustion, insomnia, anxiety, and physical emaciation.',
    traditionalRoleTa: 'அஸ்வகந்தா அரிஷ்டம்; நரம்பு தளர்ச்சி, தூக்கமின்மை, மன சோர்வு மற்றும் பொது பலவீனத்தை போக்கும் உன்னத டானிக்.',
    badge: 'Nerve & Vitality Elixir',
    badgeTa: 'நரம்பு & தேக பல அரிஷ்டம்',
    image: '/images/products/ruthra-aswagandharishta/front.jpg',
    images: [
      '/images/products/ruthra-aswagandharishta/front.jpg',
      '/images/products/ruthra-aswagandharishta/angle.jpg',
      '/images/products/ruthra-aswagandharishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-aswagandharishta/front.jpg',
      '/images/products/ruthra-aswagandharishta/angle.jpg',
      '/images/products/ruthra-aswagandharishta/back.jpg'
    ],
    ingredients: [
      { name: 'Aswagandharishta Classical Composition', tamilName: 'அஸ்வகந்தாரிஷ்டம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-25 ml with equal quantity of water', instructionTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Diluted with equal quantity of drinking water.', instructionTa: 'சம அளவு குடிநீருடன் கலந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily immediately after meals.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக.' }
    ],
    dosage: {
      amount: '15-25 ml with equal quantity of water',
      frequency: 'Twice daily',
      timing: 'Twice daily immediately after meals',
      vehicle: 'Diluted with equal quantity of drinking water',
      amountTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக',
      vehicleTa: 'சம அளவு குடிநீருடன் கலந்து'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Aswagandharishta prepared?',
        questionTa: 'ருத்ரா அஸ்வகந்தாரிஷ்டம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["aswagandharishta","ruthra aswagandharishta","asavam / arishta","aswagandharishta","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["அஸ்வகந்தாரிஷ்டம்","ருத்ரா அஸ்வகந்தாரிஷ்டம்","ஆஸவம் / அரிஷ்டம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-048',
    name: 'Ruthra Draksharishta',
    tamilName: 'ருத்ரா திராட்சாரிஷ்டம்',
    slug: 'ruthra-draksharishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ["respiratory","digestive-wellness"],
    price: 225,
    originalPrice: 260,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Fermented raisin tonic for chronic cough, breathlessness, poor appetite, intestinal sluggishness, and anemia. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'திராட்சை அரிஷ்டம்; தொடர் இருமல், இரைப்பு, பசியின்மை, செரிமான மந்தம் மற்றும் ரத்த விருத்தி தரும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Draksharishta (திராட்சாரிஷ்டம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திராட்சாரிஷ்டம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Fermented raisin tonic for chronic cough, breathlessness, poor appetite, intestinal sluggishness, and anemia.',
    traditionalRoleTa: 'திராட்சை அரிஷ்டம்; தொடர் இருமல், இரைப்பு, பசியின்மை, செரிமான மந்தம் மற்றும் ரத்த விருத்தி தரும்.',
    badge: 'Appetite & Lung Elixir',
    badgeTa: 'பசி & சுவாச அரிஷ்டம்',
    image: '/images/products/ruthra-draksharishta/front.jpg',
    images: [
      '/images/products/ruthra-draksharishta/front.jpg',
      '/images/products/ruthra-draksharishta/angle.jpg',
      '/images/products/ruthra-draksharishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-draksharishta/front.jpg',
      '/images/products/ruthra-draksharishta/angle.jpg',
      '/images/products/ruthra-draksharishta/back.jpg'
    ],
    ingredients: [
      { name: 'Draksharishta Classical Composition', tamilName: 'திராட்சாரிஷ்டம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-25 ml with equal quantity of water', instructionTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Diluted with equal quantity of drinking water.', instructionTa: 'சம அளவு குடிநீருடன் கலந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily immediately after meals.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக.' }
    ],
    dosage: {
      amount: '15-25 ml with equal quantity of water',
      frequency: 'Twice daily',
      timing: 'Twice daily immediately after meals',
      vehicle: 'Diluted with equal quantity of drinking water',
      amountTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக',
      vehicleTa: 'சம அளவு குடிநீருடன் கலந்து'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Draksharishta prepared?',
        questionTa: 'ருத்ரா திராட்சாரிஷ்டம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["draksharishta","ruthra draksharishta","asavam / arishta","draksharishta","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திராட்சாரிஷ்டம்","ருத்ரா திராட்சாரிஷ்டம்","ஆஸவம் / அரிஷ்டம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-049',
    name: 'Ruthra Kumaryasava',
    tamilName: 'ருத்ரா குமார்யாஸவம்',
    slug: 'ruthra-kumaryasava',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ["womens-wellness","digestive-wellness"],
    price: 225,
    originalPrice: 260,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Aloe vera fermented cordial for delayed menstruation, PCOS, liver congestion, abdominal gas, and anemia. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'கற்றாழை ஆஸவம்; மகளிர் மாதவிடாய் கோளாறுகள், சினைப்பை நீர்க்கட்டி, கல்லீரல் மந்தம் மற்றும் ரத்த சோகை நீக்கி. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Kumaryasava (குமார்யாஸவம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா குமார்யாஸவம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Aloe vera fermented cordial for delayed menstruation, PCOS, liver congestion, abdominal gas, and anemia.',
    traditionalRoleTa: 'கற்றாழை ஆஸவம்; மகளிர் மாதவிடாய் கோளாறுகள், சினைப்பை நீர்க்கட்டி, கல்லீரல் மந்தம் மற்றும் ரத்த சோகை நீக்கி.',
    badge: 'Women’s Cycle & Liver Elixir',
    badgeTa: 'மகளிர் & கல்லீரல் ஆஸவம்',
    image: '/images/products/ruthra-kumaryasava/front.jpg',
    images: [
      '/images/products/ruthra-kumaryasava/front.jpg',
      '/images/products/ruthra-kumaryasava/angle.jpg',
      '/images/products/ruthra-kumaryasava/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-kumaryasava/front.jpg',
      '/images/products/ruthra-kumaryasava/angle.jpg',
      '/images/products/ruthra-kumaryasava/back.jpg'
    ],
    ingredients: [
      { name: 'Kumaryasava Classical Composition', tamilName: 'குமார்யாஸவம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-25 ml with equal quantity of water', instructionTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Diluted with equal quantity of drinking water.', instructionTa: 'சம அளவு குடிநீருடன் கலந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily immediately after meals.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக.' }
    ],
    dosage: {
      amount: '15-25 ml with equal quantity of water',
      frequency: 'Twice daily',
      timing: 'Twice daily immediately after meals',
      vehicle: 'Diluted with equal quantity of drinking water',
      amountTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக',
      vehicleTa: 'சம அளவு குடிநீருடன் கலந்து'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Kumaryasava prepared?',
        questionTa: 'ருத்ரா குமார்யாஸவம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["kumaryasava","ruthra kumaryasava","asavam / arishta","kumaryasava","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["குமார்யாஸவம்","ருத்ரா குமார்யாஸவம்","ஆஸவம் / அரிஷ்டம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-050',
    name: 'Ruthra Lodhrasava',
    tamilName: 'ருத்ரா லோத்ராஸவம்',
    slug: 'ruthra-lodhrasava',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ["womens-wellness","skin-hair"],
    price: 225,
    originalPrice: 260,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Symplocos fermented elixir treating menorrhagia, leucorrhea, obesity, metabolic sluggishness, and skin spots. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'லோத்ரா ஆஸவம்; அதிக உதிரப்போக்கு, வெள்ளைப்படுதல், உடல் பருமன் மற்றும் தோல் மங்கு நீக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Lodhrasava (லோத்ராஸவம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா லோத்ராஸவம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Symplocos fermented elixir treating menorrhagia, leucorrhea, obesity, metabolic sluggishness, and skin spots.',
    traditionalRoleTa: 'லோத்ரா ஆஸவம்; அதிக உதிரப்போக்கு, வெள்ளைப்படுதல், உடல் பருமன் மற்றும் தோல் மங்கு நீக்கும்.',
    badge: 'Menorrhagia & Metabolic Elixir',
    badgeTa: 'உதிரப்போக்கு & லோத்ரா ஆஸவம்',
    image: '/images/products/ruthra-lodhrasava/front.jpg',
    images: [
      '/images/products/ruthra-lodhrasava/front.jpg',
      '/images/products/ruthra-lodhrasava/angle.jpg',
      '/images/products/ruthra-lodhrasava/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-lodhrasava/front.jpg',
      '/images/products/ruthra-lodhrasava/angle.jpg',
      '/images/products/ruthra-lodhrasava/back.jpg'
    ],
    ingredients: [
      { name: 'Lodhrasava Classical Composition', tamilName: 'லோத்ராஸவம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-25 ml with equal quantity of water', instructionTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Diluted with equal quantity of drinking water.', instructionTa: 'சம அளவு குடிநீருடன் கலந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily immediately after meals.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக.' }
    ],
    dosage: {
      amount: '15-25 ml with equal quantity of water',
      frequency: 'Twice daily',
      timing: 'Twice daily immediately after meals',
      vehicle: 'Diluted with equal quantity of drinking water',
      amountTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக',
      vehicleTa: 'சம அளவு குடிநீருடன் கலந்து'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Lodhrasava prepared?',
        questionTa: 'ருத்ரா லோத்ராஸவம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["lodhrasava","ruthra lodhrasava","asavam / arishta","lodhrasava","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["லோத்ராஸவம்","ருத்ரா லோத்ராஸவம்","ஆஸவம் / அரிஷ்டம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-051',
    name: 'Ruthra Arjunarishta',
    tamilName: 'ருத்ரா அர்ஜுனாரிஷ்டம்',
    slug: 'ruthra-arjunarishta',
    medicalSystem: 'ayurveda',
    formulation: 'Asavam / Arishta',
    formulationTa: 'ஆஸவம் / அரிஷ்டம்',
    categoryGroup: 'asavam-arishta',
    concerns: ["metabolic-wellness"],
    price: 225,
    originalPrice: 260,
    packSize: '450ml',
    packSizeTa: '450 மி.லி',
    shortDescription: 'Terminalia arjuna fermented cordial nourishing cardiac rhythm, relieving palpitations, and promoting stamina. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'அர்ஜுனா அரிஷ்டம்; இதய படபடப்பு, ரத்த அழுத்த சமநிலை, இதய தசைகள் பலம் மற்றும் ரத்த ஓட்டத்தை சீராக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Arjunarishta (அர்ஜுனாரிஷ்டம்) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா அர்ஜுனாரிஷ்டம் திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Terminalia arjuna fermented cordial nourishing cardiac rhythm, relieving palpitations, and promoting stamina.',
    traditionalRoleTa: 'அர்ஜுனா அரிஷ்டம்; இதய படபடப்பு, ரத்த அழுத்த சமநிலை, இதய தசைகள் பலம் மற்றும் ரத்த ஓட்டத்தை சீராக்கும்.',
    badge: 'Cardiac Strength Elixir',
    badgeTa: 'இதய நலம் தரும் அரிஷ்டம்',
    image: '/images/products/ruthra-arjunarishta/front.jpg',
    images: [
      '/images/products/ruthra-arjunarishta/front.jpg',
      '/images/products/ruthra-arjunarishta/angle.jpg',
      '/images/products/ruthra-arjunarishta/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-arjunarishta/front.jpg',
      '/images/products/ruthra-arjunarishta/angle.jpg',
      '/images/products/ruthra-arjunarishta/back.jpg'
    ],
    ingredients: [
      { name: 'Arjunarishta Classical Composition', tamilName: 'அர்ஜுனாரிஷ்டம் மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '15-25 ml with equal quantity of water', instructionTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Diluted with equal quantity of drinking water.', instructionTa: 'சம அளவு குடிநீருடன் கலந்து உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily immediately after meals.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக.' }
    ],
    dosage: {
      amount: '15-25 ml with equal quantity of water',
      frequency: 'Twice daily',
      timing: 'Twice daily immediately after meals',
      vehicle: 'Diluted with equal quantity of drinking water',
      amountTa: '15-25 மி.லி சம அளவு தண்ணீருடன் கலந்து',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின் உடனடியாக',
      vehicleTa: 'சம அளவு குடிநீருடன் கலந்து'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Arjunarishta prepared?',
        questionTa: 'ருத்ரா அர்ஜுனாரிஷ்டம் எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["arjunarishta","ruthra arjunarishta","asavam / arishta","arjunarishta","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["அர்ஜுனாரிஷ்டம்","ருத்ரா அர்ஜுனாரிஷ்டம்","ஆஸவம் / அரிஷ்டம்","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },

  // ==========================================
  // AYURVEDA: SINGLE HERB (13 SKUs)
  // ==========================================
  {
    id: 'prod-ayurveda-052',
    name: 'Ruthra Hingu',
    tamilName: 'ருத்ரா பெருங்காயம் (ஹிங்கு)',
    slug: 'ruthra-hingu',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["digestive-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Ferula foetida resin powder, supreme carminative for instant gas relief, bloating, and spasmodic colic. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சுத்தி செய்த பெருங்காயம்; வயிற்று வலி, வாயு பிடிப்பு, நெஞ்செரிச்சல் மற்றும் செரிமான மந்தத்தை போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Hingu (பெருங்காயம் (ஹிங்கு)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா பெருங்காயம் (ஹிங்கு) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified Ferula foetida resin powder, supreme carminative for instant gas relief, bloating, and spasmodic colic.',
    traditionalRoleTa: 'சுத்தி செய்த பெருங்காயம்; வயிற்று வலி, வாயு பிடிப்பு, நெஞ்செரிச்சல் மற்றும் செரிமான மந்தத்தை போக்கும்.',
    badge: 'Pure Ferula Resin',
    badgeTa: 'சுத்தமான பெருங்காயம்',
    image: '/images/products/ruthra-hingu/front.jpg',
    images: [
      '/images/products/ruthra-hingu/front.jpg',
      '/images/products/ruthra-hingu/angle.jpg',
      '/images/products/ruthra-hingu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-hingu/front.jpg',
      '/images/products/ruthra-hingu/angle.jpg',
      '/images/products/ruthra-hingu/back.jpg'
    ],
    ingredients: [
      { name: 'Hingu Classical Composition', tamilName: 'பெருங்காயம் (ஹிங்கு) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Hingu prepared?',
        questionTa: 'ருத்ரா பெருங்காயம் (ஹிங்கு) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["hingu","ruthra hingu","single herb","hingu","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["பெருங்காயம் (ஹிங்கு)","ருத்ரா பெருங்காயம் (ஹிங்கு)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-053',
    name: 'Ruthra Tankana',
    tamilName: 'ருத்ரா வெண்காரம் (டங்கண)',
    slug: 'ruthra-tankana',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["respiratory","digestive-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Borax mineral powder for clearing tenacious bronchitic phlegm, mouth ulcers, and dysuria. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சுத்தி செய்த வெண்கார பற்பம்; தொண்டை சளி அடைப்பு, வாய் புண் மற்றும் சிறுநீர் பாதையை சுத்தப்படுத்தும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Tankana (வெண்காரம் (டங்கண)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா வெண்காரம் (டங்கண) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified Borax mineral powder for clearing tenacious bronchitic phlegm, mouth ulcers, and dysuria.',
    traditionalRoleTa: 'சுத்தி செய்த வெண்கார பற்பம்; தொண்டை சளி அடைப்பு, வாய் புண் மற்றும் சிறுநீர் பாதையை சுத்தப்படுத்தும்.',
    badge: 'Purified Mineral Salt',
    badgeTa: 'சுத்தி வெண்காரம்',
    image: '/images/products/ruthra-tankana/front.jpg',
    images: [
      '/images/products/ruthra-tankana/front.jpg',
      '/images/products/ruthra-tankana/angle.jpg',
      '/images/products/ruthra-tankana/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-tankana/front.jpg',
      '/images/products/ruthra-tankana/angle.jpg',
      '/images/products/ruthra-tankana/back.jpg'
    ],
    ingredients: [
      { name: 'Tankana Classical Composition', tamilName: 'வெண்காரம் (டங்கண) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Tankana prepared?',
        questionTa: 'ருத்ரா வெண்காரம் (டங்கண) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["tankana","ruthra tankana","single herb","tankana","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["வெண்காரம் (டங்கண)","ருத்ரா வெண்காரம் (டங்கண)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-054',
    name: 'Ruthra Shilajitu',
    tamilName: 'ருத்ரா சுத்த சிலாஜித் (ஷிலாஜித்து)',
    slug: 'ruthra-shilajitu',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Himalayan asphaltum rich in fulvic acid, enhances cellular energy, stamina, virility, and immunity. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'இமயமலை சுத்த சிலாஜித்; தாது பலம், உடல் ஆற்றல், சர்க்கரை கட்டுப்பாடு மற்றும் நீண்ட ஆயுள் தரும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Shilajitu (சுத்த சிலாஜித் (ஷிலாஜித்து)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா சுத்த சிலாஜித் (ஷிலாஜித்து) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified Himalayan asphaltum rich in fulvic acid, enhances cellular energy, stamina, virility, and immunity.',
    traditionalRoleTa: 'இமயமலை சுத்த சிலாஜித்; தாது பலம், உடல் ஆற்றல், சர்க்கரை கட்டுப்பாடு மற்றும் நீண்ட ஆயுள் தரும்.',
    badge: 'Himalayan Fulvic Mineral',
    badgeTa: 'சுத்த சிலாஜித்',
    image: '/images/products/ruthra-shilajitu/front.jpg',
    images: [
      '/images/products/ruthra-shilajitu/front.jpg',
      '/images/products/ruthra-shilajitu/angle.jpg',
      '/images/products/ruthra-shilajitu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-shilajitu/front.jpg',
      '/images/products/ruthra-shilajitu/angle.jpg',
      '/images/products/ruthra-shilajitu/back.jpg'
    ],
    ingredients: [
      { name: 'Shilajitu Classical Composition', tamilName: 'சுத்த சிலாஜித் (ஷிலாஜித்து) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Shilajitu prepared?',
        questionTa: 'ருத்ரா சுத்த சிலாஜித் (ஷிலாஜித்து) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["shilajitu","ruthra shilajitu","single herb","shilajitu","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["சுத்த சிலாஜித் (ஷிலாஜித்து)","ருத்ரா சுத்த சிலாஜித் (ஷிலாஜித்து)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-055',
    name: 'Ruthra Shuddha Guggulu',
    tamilName: 'ருத்ரா சுத்த குக்குலு',
    slug: 'ruthra-shuddha-guggulu',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["joint-mobility","metabolic-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Purified Commiphora resin reducing joint inflammation, clearing arterial lipid plaques, and easing arthritis. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சுத்தி செய்த குக்குலு பிசின்; மூட்டு வீக்கம், கொலஸ்ட்ரால் குறைப்பு மற்றும் உடல் பருமனை குறைக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Shuddha Guggulu (சுத்த குக்குலு) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா சுத்த குக்குலு திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Purified Commiphora resin reducing joint inflammation, clearing arterial lipid plaques, and easing arthritis.',
    traditionalRoleTa: 'சுத்தி செய்த குக்குலு பிசின்; மூட்டு வீக்கம், கொலஸ்ட்ரால் குறைப்பு மற்றும் உடல் பருமனை குறைக்கும்.',
    badge: 'Purified Commiphora Resin',
    badgeTa: 'சுத்த குக்குலு',
    image: '/images/products/ruthra-shuddha-guggulu/front.jpg',
    images: [
      '/images/products/ruthra-shuddha-guggulu/front.jpg',
      '/images/products/ruthra-shuddha-guggulu/angle.jpg',
      '/images/products/ruthra-shuddha-guggulu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-shuddha-guggulu/front.jpg',
      '/images/products/ruthra-shuddha-guggulu/angle.jpg',
      '/images/products/ruthra-shuddha-guggulu/back.jpg'
    ],
    ingredients: [
      { name: 'Shuddha Guggulu Classical Composition', tamilName: 'சுத்த குக்குலு மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Shuddha Guggulu prepared?',
        questionTa: 'ருத்ரா சுத்த குக்குலு எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["shuddha guggulu","ruthra shuddha guggulu","single herb","shuddha","guggulu","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["சுத்த குக்குலு","ருத்ரா சுத்த குக்குலு","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-056',
    name: 'Ruthra Yashtimadhu',
    tamilName: 'ருத்ரா அதிமதுரம் (யஷ்டிமது)',
    slug: 'ruthra-yashtimadhu',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["respiratory","digestive-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure Glycyrrhiza glabra root powder soothing throat mucosal irritation, dry cough, and gastric ulcers. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'தூய அதிமதுர பொடி; இருமல், தொண்டை கரகரப்பு, வயிற்றுப்புண் மற்றும் குரல் வளத்திற்கு உகந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Yashtimadhu (அதிமதுரம் (யஷ்டிமது)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா அதிமதுரம் (யஷ்டிமது) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Pure Glycyrrhiza glabra root powder soothing throat mucosal irritation, dry cough, and gastric ulcers.',
    traditionalRoleTa: 'தூய அதிமதுர பொடி; இருமல், தொண்டை கரகரப்பு, வயிற்றுப்புண் மற்றும் குரல் வளத்திற்கு உகந்தது.',
    badge: 'Throat & Ulcer Demulcent',
    badgeTa: 'அதிமதுர பொடி',
    image: '/images/products/ruthra-yashtimadhu/front.jpg',
    images: [
      '/images/products/ruthra-yashtimadhu/front.jpg',
      '/images/products/ruthra-yashtimadhu/angle.jpg',
      '/images/products/ruthra-yashtimadhu/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-yashtimadhu/front.jpg',
      '/images/products/ruthra-yashtimadhu/angle.jpg',
      '/images/products/ruthra-yashtimadhu/back.jpg'
    ],
    ingredients: [
      { name: 'Yashtimadhu Classical Composition', tamilName: 'அதிமதுரம் (யஷ்டிமது) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Yashtimadhu prepared?',
        questionTa: 'ருத்ரா அதிமதுரம் (யஷ்டிமது) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["yashtimadhu","ruthra yashtimadhu","single herb","yashtimadhu","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["அதிமதுரம் (யஷ்டிமது)","ருத்ரா அதிமதுரம் (யஷ்டிமது)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-057',
    name: 'Ruthra Trivrit',
    tamilName: 'ருத்ரா திரிவ்ரித் (சிவத்தை வேர்)',
    slug: 'ruthra-trivrit',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["digestive-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Operculina turpethum pure root powder for gentle system detox, clearing Pitta congestion, and constipation. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சிவத்தை வேர் பொடி; மென்மையான மலமிளக்கி, பித்த கழிவு நீக்கம் மற்றும் குடல் சுத்திக்கு சிறந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Trivrit (திரிவ்ரித் (சிவத்தை வேர்)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா திரிவ்ரித் (சிவத்தை வேர்) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Operculina turpethum pure root powder for gentle system detox, clearing Pitta congestion, and constipation.',
    traditionalRoleTa: 'சிவத்தை வேர் பொடி; மென்மையான மலமிளக்கி, பித்த கழிவு நீக்கம் மற்றும் குடல் சுத்திக்கு சிறந்தது.',
    badge: 'Natural Gentle Purgative',
    badgeTa: 'சிவத்தை வேர் பொடி',
    image: '/images/products/ruthra-trivrit/front.jpg',
    images: [
      '/images/products/ruthra-trivrit/front.jpg',
      '/images/products/ruthra-trivrit/angle.jpg',
      '/images/products/ruthra-trivrit/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-trivrit/front.jpg',
      '/images/products/ruthra-trivrit/angle.jpg',
      '/images/products/ruthra-trivrit/back.jpg'
    ],
    ingredients: [
      { name: 'Trivrit Classical Composition', tamilName: 'திரிவ்ரித் (சிவத்தை வேர்) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Trivrit prepared?',
        questionTa: 'ருத்ரா திரிவ்ரித் (சிவத்தை வேர்) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["trivrit","ruthra trivrit","single herb","trivrit","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["திரிவ்ரித் (சிவத்தை வேர்)","ருத்ரா திரிவ்ரித் (சிவத்தை வேர்)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-058',
    name: 'Ruthra Haritaki',
    tamilName: 'ருத்ரா கடுக்காய் (ஹரிதகி)',
    slug: 'ruthra-haritaki',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["digestive-wellness","metabolic-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'King of Ayurvedic herbs for gentle bowel regulation, eliminating cellular toxins, and ocular rejuvenation. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'தூய கடுக்காய் பொடி; குடல் நச்சு கழிவகற்றி, மலச்சிக்கல் நீக்கி, கண் பார்வை மற்றும் இளமை காக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Haritaki (கடுக்காய் (ஹரிதகி)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா கடுக்காய் (ஹரிதகி) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'King of Ayurvedic herbs for gentle bowel regulation, eliminating cellular toxins, and ocular rejuvenation.',
    traditionalRoleTa: 'தூய கடுக்காய் பொடி; குடல் நச்சு கழிவகற்றி, மலச்சிக்கல் நீக்கி, கண் பார்வை மற்றும் இளமை காக்கும்.',
    badge: 'King of Herbs Rasayana',
    badgeTa: 'கடுக்காய் பொடி',
    image: '/images/products/ruthra-haritaki/front.jpg',
    images: [
      '/images/products/ruthra-haritaki/front.jpg',
      '/images/products/ruthra-haritaki/angle.jpg',
      '/images/products/ruthra-haritaki/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-haritaki/front.jpg',
      '/images/products/ruthra-haritaki/angle.jpg',
      '/images/products/ruthra-haritaki/back.jpg'
    ],
    ingredients: [
      { name: 'Haritaki Classical Composition', tamilName: 'கடுக்காய் (ஹரிதகி) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Haritaki prepared?',
        questionTa: 'ருத்ரா கடுக்காய் (ஹரிதகி) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["haritaki","ruthra haritaki","single herb","haritaki","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["கடுக்காய் (ஹரிதகி)","ருத்ரா கடுக்காய் (ஹரிதகி)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-059',
    name: 'Ruthra Vibhitaki',
    tamilName: 'ருத்ரா தான்றிக்காய் (விபீதகி)',
    slug: 'ruthra-vibhitaki',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["respiratory","skin-hair"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Terminalia bellirica fruit powder for chronic cough, voice hoarseness, throat phlegm, and nourishing hair roots. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'தான்றிக்காய் பொடி; குரல் கம்மல், கப இருமல், தொண்டை சளி மற்றும் கூந்தல் வளர்ச்சிக்கு சிறந்தது. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Vibhitaki (தான்றிக்காய் (விபீதகி)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா தான்றிக்காய் (விபீதகி) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Terminalia bellirica fruit powder for chronic cough, voice hoarseness, throat phlegm, and nourishing hair roots.',
    traditionalRoleTa: 'தான்றிக்காய் பொடி; குரல் கம்மல், கப இருமல், தொண்டை சளி மற்றும் கூந்தல் வளர்ச்சிக்கு சிறந்தது.',
    badge: 'Throat & Hair Rasayana',
    badgeTa: 'தான்றிக்காய் பொடி',
    image: '/images/products/ruthra-vibhitaki/front.jpg',
    images: [
      '/images/products/ruthra-vibhitaki/front.jpg',
      '/images/products/ruthra-vibhitaki/angle.jpg',
      '/images/products/ruthra-vibhitaki/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-vibhitaki/front.jpg',
      '/images/products/ruthra-vibhitaki/angle.jpg',
      '/images/products/ruthra-vibhitaki/back.jpg'
    ],
    ingredients: [
      { name: 'Vibhitaki Classical Composition', tamilName: 'தான்றிக்காய் (விபீதகி) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Vibhitaki prepared?',
        questionTa: 'ருத்ரா தான்றிக்காய் (விபீதகி) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["vibhitaki","ruthra vibhitaki","single herb","vibhitaki","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["தான்றிக்காய் (விபீதகி)","ருத்ரா தான்றிக்காய் (விபீதகி)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-060',
    name: 'Ruthra Amlaki',
    tamilName: 'ருத்ரா நெல்லிக்காய் (ஆமலகி)',
    slug: 'ruthra-amlaki',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["metabolic-wellness","skin-hair"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Pure Emblica officinalis fruit powder for antioxidant defense, liver support, anti-aging, and radiant skin. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'நெல்லிக்காய் பொடி; வைட்டமின் சி, நோய் எதிர்ப்பு சக்தி, கல்லீரல் பலம் மற்றும் தோல் பொலிவு தரும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Amlaki (நெல்லிக்காய் (ஆமலகி)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா நெல்லிக்காய் (ஆமலகி) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Pure Emblica officinalis fruit powder for antioxidant defense, liver support, anti-aging, and radiant skin.',
    traditionalRoleTa: 'நெல்லிக்காய் பொடி; வைட்டமின் சி, நோய் எதிர்ப்பு சக்தி, கல்லீரல் பலம் மற்றும் தோல் பொலிவு தரும்.',
    badge: 'Pure Amla Antioxidant',
    badgeTa: 'நெல்லிக்காய் பொடி',
    image: '/images/products/ruthra-amlaki/front.jpg',
    images: [
      '/images/products/ruthra-amlaki/front.jpg',
      '/images/products/ruthra-amlaki/angle.jpg',
      '/images/products/ruthra-amlaki/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-amlaki/front.jpg',
      '/images/products/ruthra-amlaki/angle.jpg',
      '/images/products/ruthra-amlaki/back.jpg'
    ],
    ingredients: [
      { name: 'Amlaki Classical Composition', tamilName: 'நெல்லிக்காய் (ஆமலகி) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Amlaki prepared?',
        questionTa: 'ருத்ரா நெல்லிக்காய் (ஆமலகி) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["amlaki","ruthra amlaki","single herb","amlaki","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["நெல்லிக்காய் (ஆமலகி)","ருத்ரா நெல்லிக்காய் (ஆமலகி)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-061',
    name: 'Ruthra Gokshura',
    tamilName: 'ருத்ரா நெருஞ்சில் (கோக்ஷுரா)',
    slug: 'ruthra-gokshura',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["metabolic-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Tribulus terrestris fruit powder supporting urinary flow, kidney stone flushing, and male reproductive vitality. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'நெருஞ்சில் பொடி; சிறுநீரக கற்கள் கரைப்பான், சிறுநீர் எரிச்சல் நீக்கி மற்றும் ஆண்மை சக்தி அளிக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Gokshura (நெருஞ்சில் (கோக்ஷுரா)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா நெருஞ்சில் (கோக்ஷுரா) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Tribulus terrestris fruit powder supporting urinary flow, kidney stone flushing, and male reproductive vitality.',
    traditionalRoleTa: 'நெருஞ்சில் பொடி; சிறுநீரக கற்கள் கரைப்பான், சிறுநீர் எரிச்சல் நீக்கி மற்றும் ஆண்மை சக்தி அளிக்கும்.',
    badge: 'Renal & Vitality Botanical',
    badgeTa: 'நெருஞ்சில் பொடி',
    image: '/images/products/ruthra-gokshura/front.jpg',
    images: [
      '/images/products/ruthra-gokshura/front.jpg',
      '/images/products/ruthra-gokshura/angle.jpg',
      '/images/products/ruthra-gokshura/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-gokshura/front.jpg',
      '/images/products/ruthra-gokshura/angle.jpg',
      '/images/products/ruthra-gokshura/back.jpg'
    ],
    ingredients: [
      { name: 'Gokshura Classical Composition', tamilName: 'நெருஞ்சில் (கோக்ஷுரா) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Gokshura prepared?',
        questionTa: 'ருத்ரா நெருஞ்சில் (கோக்ஷுரா) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["gokshura","ruthra gokshura","single herb","gokshura","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["நெருஞ்சில் (கோக்ஷுரா)","ருத்ரா நெருஞ்சில் (கோக்ஷுரா)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-062',
    name: 'Ruthra Punarnava',
    tamilName: 'ருத்ரா மூக்கிரட்டை (புனர்நவா)',
    slug: 'ruthra-punarnava',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["metabolic-wellness","joint-mobility"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Boerhavia diffusa whole herb powder for systemic fluid drainage, pedal edema, liver renewal, and kidney health. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'மூக்கிரட்டை பொடி; நீர் வீக்கம், கால் வீக்கம் குறைத்து சிறுநீரகம் மற்றும் கல்லீரலை புத்துணர்ச்சியாக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Punarnava (மூக்கிரட்டை (புனர்நவா)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா மூக்கிரட்டை (புனர்நவா) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Boerhavia diffusa whole herb powder for systemic fluid drainage, pedal edema, liver renewal, and kidney health.',
    traditionalRoleTa: 'மூக்கிரட்டை பொடி; நீர் வீக்கம், கால் வீக்கம் குறைத்து சிறுநீரகம் மற்றும் கல்லீரலை புத்துணர்ச்சியாக்கும்.',
    badge: 'Cellular Renewal & Diuretic',
    badgeTa: 'மூக்கிரட்டை பொடி',
    image: '/images/products/ruthra-punarnava/front.jpg',
    images: [
      '/images/products/ruthra-punarnava/front.jpg',
      '/images/products/ruthra-punarnava/angle.jpg',
      '/images/products/ruthra-punarnava/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-punarnava/front.jpg',
      '/images/products/ruthra-punarnava/angle.jpg',
      '/images/products/ruthra-punarnava/back.jpg'
    ],
    ingredients: [
      { name: 'Punarnava Classical Composition', tamilName: 'மூக்கிரட்டை (புனர்நவா) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Punarnava prepared?',
        questionTa: 'ருத்ரா மூக்கிரட்டை (புனர்நவா) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["punarnava","ruthra punarnava","single herb","punarnava","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["மூக்கிரட்டை (புனர்நவா)","ருத்ரா மூக்கிரட்டை (புனர்நவா)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-063',
    name: 'Ruthra Shatapushpa',
    tamilName: 'ருத்ரா சதகுப்பை (சதபுஷ்பா)',
    slug: 'ruthra-shatapushpa',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["womens-wellness","digestive-wellness"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Anethum sowa seed powder for menstrual cramp relief, regulating ovulatory flow, and relieving digestive colic. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'சதகுப்பை பொடி; மாதவிடாய் வலி, அடிவயிற்று பிடிப்பு மற்றும் செரிமான வாயுவை போக்கும். இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Shatapushpa (சதகுப்பை (சதபுஷ்பா)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா சதகுப்பை (சதபுஷ்பா) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Anethum sowa seed powder for menstrual cramp relief, regulating ovulatory flow, and relieving digestive colic.',
    traditionalRoleTa: 'சதகுப்பை பொடி; மாதவிடாய் வலி, அடிவயிற்று பிடிப்பு மற்றும் செரிமான வாயுவை போக்கும்.',
    badge: 'Menstrual & Digestive Herb',
    badgeTa: 'சதகுப்பை பொடி',
    image: '/images/products/ruthra-shatapushpa/front.jpg',
    images: [
      '/images/products/ruthra-shatapushpa/front.jpg',
      '/images/products/ruthra-shatapushpa/angle.jpg',
      '/images/products/ruthra-shatapushpa/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-shatapushpa/front.jpg',
      '/images/products/ruthra-shatapushpa/angle.jpg',
      '/images/products/ruthra-shatapushpa/back.jpg'
    ],
    ingredients: [
      { name: 'Shatapushpa Classical Composition', tamilName: 'சதகுப்பை (சதபுஷ்பா) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Shatapushpa prepared?',
        questionTa: 'ருத்ரா சதகுப்பை (சதபுஷ்பா) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["shatapushpa","ruthra shatapushpa","single herb","shatapushpa","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["சதகுப்பை (சதபுஷ்பா)","ருத்ரா சதகுப்பை (சதபுஷ்பா)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
  {
    id: 'prod-ayurveda-064',
    name: 'Ruthra Ajwain (Yavani)',
    tamilName: 'ருத்ரா ஓமம் (யவானி)',
    slug: 'ruthra-ajwain-yavani',
    medicalSystem: 'ayurveda',
    formulation: 'Single Herb',
    formulationTa: 'தனி மூலிகை / தாது',
    categoryGroup: 'single-herbs',
    concerns: ["digestive-wellness","respiratory"],
    price: 150,
    originalPrice: 175,
    packSize: '50g',
    packSizeTa: '50 கிராம்',
    shortDescription: 'Trachyspermum ammi seed powder for rapid digestive colic relief, abdominal heaviness, and clearing chest gas. Prepared in strict accordance with the Ayurvedic Formulary of India (AFI).',
    shortDescriptionTa: 'ஓமப் பொடி; உடனடி வாயு நிவாரணம், அஜீரணம், மாந்தம் மற்றும் நெஞ்சு சளியை போக்கும் சிறந்த மருந்து. இந்திய ஆயுர்வேத மருத்துவ நெறிமுறைகளின்படி தூய முறையில் தயாரிக்கப்பட்டது.',
    description: 'Ruthra Ajwain (Yavani) (ஓமம் (யவானி)) is prepared by Ruthra Medicines in Tirunelveli under certified GMP standards following authentic classical Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Sharangadhara Samhita). Compounded using sustainably harvested botanicals and minerals purified through traditional Shodhana.',
    descriptionTa: 'ருத்ரா ஓமம் (யவானி) திருநெல்வேலியில் உள்ள ஜி.எம்.பி (GMP) சான்றளிக்கப்பட்ட ருத்ரா மெடிசின்ஸ் நிறுவனத்தால் பாரம்பரிய ஆயுர்வேத சுத்தி நெறிமுறைகளின்படி தயாரிக்கப்பட்ட உன்னத ஆயுர்வேத மருந்து.',
    traditionalRole: 'Trachyspermum ammi seed powder for rapid digestive colic relief, abdominal heaviness, and clearing chest gas.',
    traditionalRoleTa: 'ஓமப் பொடி; உடனடி வாயு நிவாரணம், அஜீரணம், மாந்தம் மற்றும் நெஞ்சு சளியை போக்கும் சிறந்த மருந்து.',
    badge: 'Instant Carminative Seed',
    badgeTa: 'தூய ஓமப் பொடி',
    image: '/images/products/ruthra-ajwain-yavani/front.jpg',
    images: [
      '/images/products/ruthra-ajwain-yavani/front.jpg',
      '/images/products/ruthra-ajwain-yavani/angle.jpg',
      '/images/products/ruthra-ajwain-yavani/back.jpg'
    ],
    gallery: [
      '/images/products/ruthra-ajwain-yavani/front.jpg',
      '/images/products/ruthra-ajwain-yavani/angle.jpg',
      '/images/products/ruthra-ajwain-yavani/back.jpg'
    ],
    ingredients: [
      { name: 'Ajwain (Yavani) Classical Composition', tamilName: 'ஓமம் (யவானி) மூலிகைக் கூட்டு', role: 'Active Ayurvedic therapeutic synergy', roleTa: 'பாரம்பரிய ஆயுர்வேத கூட்டு மருத்துவ குணம்', amount: '100%' }
    ],
    howToUse: [
      { step: '01', title: 'Dosage', titleTa: 'அளவு', instruction: '3-5 grams', instructionTa: '3-5 கிராம்' },
      { step: '02', title: 'Adjuvant', titleTa: 'துணை மருந்து', instruction: 'Take with Warm water, honey, or ghee.', instructionTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய் உடன் உட்கொள்ளவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Twice daily after food.', instructionTa: 'தினமும் இருவேளை உணவுக்குப் பின்.' }
    ],
    dosage: {
      amount: '3-5 grams',
      frequency: 'Twice daily',
      timing: 'Twice daily after food',
      vehicle: 'Warm water, honey, or ghee',
      amountTa: '3-5 கிராம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'தினமும் இருவேளை உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது நெய்'
    },
    safety: {
      pregnancy: 'Consult an Ayurvedic doctor before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவரின் ஆலோசனை பெற்று உட்கொள்ளவும்.',
      children: 'Safe in adjusted pediatric dosage under physician supervision.',
      childrenTa: 'மருத்துவர் வழிகாட்டலின்படி குழந்தைகளுக்கு குறைந்த அளவில் கொடுக்கலாம்.',
      interactions: 'No adverse interactions with standard health supplements.',
      interactionsTa: 'பிற மருந்துகளுடன் எந்தவித எதிர்மறை விளைவுகளும் இல்லை.',
      precautions: ['Store in a cool dry place away from moisture', 'Keep container tightly closed after use'],
      precautionsTa: ['ஈரப்பதமில்லாத குளிர்ந்த இடத்தில் வைக்கவும்', 'பயன்பாட்டிற்குப் பின் மூடியை இறுக்கமாக மூடவும்']
    },
    storage: {
      conditions: 'Store in an airtight container at room temperature away from direct sunlight.',
      conditionsTa: 'நேரடி சூரிய ஒளி படாதவாறு காற்றுப்புகாத டப்பாவில் வைக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'தயாரிப்பு தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Ruthra Ajwain (Yavani) prepared?',
        questionTa: 'ருத்ரா ஓமம் (யவானி) எவ்வாறு தயாரிக்கப்படுகிறது?',
        answer: 'Prepared in strict adherence to the Ayurvedic Pharmacopoeia of India using Shodhana purified ingredients in our GMP facility.',
        answerTa: 'பாரம்பரிய ஆயுர்வேத சுத்தி முறைப்படி தூய மூலிகைகளை கொண்டு ஜிஎம்பி சான்றளிக்கப்பட்ட ஆய்வகத்தில் தயாரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ["ajwain (yavani)","ruthra ajwain (yavani)","single herb","ajwain","(yavani)","ayurveda medicine","classical ayurveda","ruthra medicines"],
    tamilKeywords: ["ஓமம் (யவானி)","ருத்ரா ஓமம் (யவானி)","தனி மூலிகை / தாது","ஆயுர்வேத மருந்து","பாரம்பரிய தயாரிப்பு"],
    inStock: true
  },
];

export const CONCERN_CATEGORIES: ConcernCategory[] = [
  {
    slug: 'joint-mobility',
    title: 'Joint & Musculoskeletal Mobility',
    titleTa: 'மூட்டு & வாத நலம்',
    tagline: 'Deep joint relief, nerve restoration & cartilage support',
    taglineTa: 'வாத உபாதைகள் மற்றும் மூட்டு வலி நிவாரணம்',
    description: 'Time-honored Siddha oils, mineralized herbal sachets, and 101-processed soft gels designed to alleviate Vatha aggravation, nerve compression, sciatica, and joint stiffness.',
    descriptionTa: 'முடக்கத்தான், சிற்றாமுட்டி, கந்த தைலம் கொண்டு மூட்டு தேய்மானம், சியாட்டிகா மற்றும் நரம்பு வலிகளை தீர்க்கும் பாரம்பரிய சித்த மருத்துவம்.',
    iconName: 'Activity',
    herbalKey: 'Mudakathan & Balamoola',
    herbalKeyTa: 'முடக்கத்தான் & சிற்றாமுட்டி'
  },
  {
    slug: 'respiratory',
    title: 'Respiratory & Immune Defense',
    titleTa: 'சுவாச நலம் & நோய் எதிர்ப்பு',
    tagline: 'Clear airways, soothing cough elixirs & sinus decongestion',
    taglineTa: 'சுவாசப் பாதை சீரமைப்பு மற்றும் சைனஸ் நிவாரணம்',
    description: 'Classical Siddha decoctions, non-drowsy syrups, platelet-boosting kashayams, and volatile inhalation drops crafted with Adathodai, Nochi, Thulasi, and Nilavembu.',
    descriptionTa: 'ஆடாதோடை, நொச்சி, துளசி, நிலவேம்பு கொண்டு நெஞ்சு சளியை இளக்கி, காய்ச்சல் மற்றும் ஆஸ்துமாவை போக்கும் பாரம்பரிய முறை.',
    iconName: 'Wind',
    herbalKey: 'Adathodai & Nochi',
    herbalKeyTa: 'ஆடாதோடை & நொச்சி'
  },
  {
    slug: 'digestive-wellness',
    title: 'Digestive, Acidity & Liver Care',
    titleTa: 'செரிமானம் & கல்லீரல் நலம்',
    tagline: 'Soothe gut fire (Agni), relieve GERD & restore liver vitality',
    taglineTa: 'செரிமான தீயை தூண்டி கல்லீரல் நலம் பேணும்',
    description: 'Processed Haritaki, gentle laxatives, and hepatoprotective decoctions synergized to dispel gastric acidity, resolve constipation, and rejuvenate liver parenchyma.',
    descriptionTa: 'கடுக்காய், கீழாநெல்லி, அதிமதுரம் கொண்டு நெஞ்செரிச்சல், மலச்சிக்கல் மற்றும் கல்லீரல் கோளாறுகளை போக்கும் தயாரிப்புகள்.',
    iconName: 'Flame',
    herbalKey: 'Kadukkai & Keezhanelli',
    herbalKeyTa: 'கடுக்காய் & கீழாநெல்லி'
  },
  {
    slug: 'womens-wellness',
    title: "Women's Wellness & Hormonal Care",
    titleTa: 'பெண்கள் நலம் & கர்ப்பப்பை பராமரிப்பு',
    tagline: 'Rhythmic cycle harmony, PCOS care & fertility support',
    taglineTa: 'மாதவிடாய் சுழற்சி மற்றும் கர்ப்பப்பை ஆரோக்கியம்',
    description: 'Specialized Siddha gynecological formulations that break menstrual stagnation, soothe PCOS cramps, and replenish vital reproductive tissue nourishment.',
    descriptionTa: 'பெண்களின் மாதவிடாய் சுழற்சியை சீராக்கவும், பிசிஓடி நீர்க்கட்டிகளை கரைக்கவும், கர்ப்பப்பை தசைகளை பலப்படுத்தவும் உதவும் சித்த மருந்துகள்.',
    iconName: 'Heart',
    herbalKey: 'Kattuvazhai & Shatavari',
    herbalKeyTa: 'காட்டுவாழை & தண்ணீர்விட்டான்'
  },
  {
    slug: 'skin-hair',
    title: 'Skin, Hair & Wound Healing',
    titleTa: 'சருமம், கூந்தல் & புண் ஆற்றுதல்',
    tagline: 'Botanical radiance, rapid wound closure & dandruff control',
    taglineTa: 'மேனி பொலிவு, புண் ஆற்றுதல் மற்றும் கூந்தல் வளர்ச்சி',
    description: 'Golden Nalpamaradi oils, diabetic wound healing oils, Bringaraja hair tonics, and royal herbal bath scrubs formulated for luminous skin and dense hair growth.',
    descriptionTa: 'நால்பாமரம், குப்பைமேனி, கரிசலாங்கண்ணி கொண்டு தயாரிக்கப்படும் தோல் நோய், ஆறாத புண்கள் மற்றும் கூந்தல் பராமரிப்பு தயாரிப்புகள்.',
    iconName: 'Droplets',
    herbalKey: 'Nalpamara & Bringaraja',
    herbalKeyTa: 'நால்பாமரம் & கரிசலாங்கண்ணி'
  },
  {
    slug: 'metabolic-wellness',
    title: 'Metabolic, Sugar & Vitality Balance',
    titleTa: 'சர்க்கரை, சிறுநீரகம் & தாது பலம்',
    tagline: 'Support glucose pathways, renal kidney stone ease & vitality',
    taglineTa: 'சர்க்கரை கட்டுப்பாடு, சிறுநீரக கல் மற்றும் தாது பலம்',
    description: 'Potent botanical extracts utilizing Gymnema, Jamun, Sirupeelai, and Mucuna to maintain blood sugar harmony, dissolve renal stones, and build systemic vitality.',
    descriptionTa: 'சிறுகுறிஞ்சான், நாவல் விதை, சிறுபீளை, பூனைக்காலி கொண்டு சர்க்கரையை கட்டுப்படுத்தி சிறுநீரக கல்லை கரைக்கும் மருந்துகள்.',
    iconName: 'ShieldCheck',
    herbalKey: 'Sirukurinjan & Sirupeelai',
    herbalKeyTa: 'சிறுகுறிஞ்சான் & சிறுபீளை'
  }
];

export const FORMULATION_CATEGORIES: FormulationCategory[] = [
  {
    slug: 'chooranam',
    formulation: 'Chooranam',
    title: 'Chooranam (Powders & Sachets)',
    titleTa: 'சூரணம் (பாக்கெட்டுகள்)',
    tagline: 'Fine botanical powders & measured single-dose sachets',
    taglineTa: 'தூய மூலிகைப் பொடிகள் மற்றும் பாக்கெட்டுகள்',
    description: 'Traditional herbal powders pulverized through meticulous cloth filtration (Vasthirakkayam) for maximum bio-potency and measured single-dose ease.',
    descriptionTa: 'மூலிகைகளை நிழலில் உலர்த்தி வஸ்திரக்காயம் செய்து சலித்து எடுக்கப்படும் உன்னத சித்த சூரணம்.',
    classicalContext: 'Classical powdered form allowing easy blending into carriers like warm water, honey, or ghee.',
    classicalContextTa: 'வெந்நீர், தேன் அல்லது நெய்யில் கலந்து எளிதில் உட்கொள்ளும் பாரம்பரிய முறை.'
  },
  {
    slug: 'kudineer',
    formulation: 'Kudineer',
    title: 'Kudineer Chooranam (Decoctions)',
    titleTa: 'குடிநீர் (கஷாய பொடிகள்)',
    tagline: 'Herbal decoction preparations boiled fresh',
    taglineTa: 'கொதிக்க வைத்து காய்ச்சும் கஷாய தயாரிப்புகள்',
    description: 'Coarse herbal blends formulated specifically to be boiled in water and reduced to one-fourth volume, unlocking water-soluble phytochemicals.',
    descriptionTa: 'தண்ணீரில் இட்டு நான்கில் ஒன்றாக சுண்டக்காய்ச்சி உட்கொள்ளும் பாரம்பரிய கஷாய முறை.',
    classicalContext: 'Direct, rapid assimilation of volatile and bio-active water-soluble herbal constituents.',
    classicalContextTa: 'உடலில் உடனடியாக உட்கிரகிக்கப்படும் சக்தி வாய்ந்த மூலிகை நீர்.'
  },
  {
    slug: 'capsules',
    formulation: 'Capsules',
    title: 'Soft Gel Capsules',
    titleTa: 'சாப்ட் ஜெல் கேப்சூல்கள்',
    tagline: 'Multi-processed classical lipid extractions in modern soft gels',
    taglineTa: 'பலமுறை பக்குவப்படுத்தப்பட்ட சாப்ட் ஜெல் வடிவம்',
    description: 'High-potency classical formulations like 101-processed Dhanwantharam, Gandha Thylam, and Sahacharadi 21 encapsulated in tasteless, convenient soft gels.',
    descriptionTa: '101 மற்றும் 21 முறை காய்ச்சப்பட்ட அதிதீவிர தைலங்கள் எளிய கேப்சூல் வடிவில்.',
    classicalContext: 'Enhanced lipid-soluble bioavailability and targeted cellular absorption.',
    classicalContextTa: 'நரம்புகள் மற்றும் எலும்புகளில் ஆழமாக இறங்கி பலனளிக்கும் நவீன வடிவம்.'
  },
  {
    slug: 'thailam',
    formulation: 'Thailam',
    title: 'Thailam & Ennai (Medicated Oils)',
    titleTa: 'தைலம் & எண்ணெய்',
    tagline: 'Slow-cooked botanical medicated oils for deep massage & healing',
    taglineTa: 'பக்குவமாக காய்ச்சப்பட்ட மூலிகை தைலங்கள்',
    description: 'Classical lipid preparations where herbal juices and extracts are slowly heated with unrefined sesame or coconut oil until medicinal Pakam is attained.',
    descriptionTa: 'நல்லெண்ணெய் அல்லது தேங்காய் எண்ணெயில் மூலிகை சாறுகளை சேர்த்து பக்குவமாக காய்ச்சப்படும் தைலங்கள்.',
    classicalContext: 'Enables deep transdermal delivery across dermal layers, joint capsules, and hair roots.',
    classicalContextTa: 'தோல் மற்றும் மூட்டுகளில் ஆழமாக இறங்கி பலனளிக்கும் வெளிப்புற முறை.'
  },
  {
    slug: 'syrup-kashayam',
    formulation: 'Syrup & Kashayam',
    title: 'Syrups, Kashayam & Drops',
    titleTa: 'சிரப், கஷாயம் & சொட்டு மருந்து',
    tagline: 'Ready-to-take natural syrups, elixirs & aromatic inhalants',
    taglineTa: 'உடனடியாக பருகக்கூடிய இயற்கை திரவங்கள்',
    description: 'Non-drowsy cough syrups, ready-to-drink antipyretic kashayams, and volatile inhalation drops designed for instant airway and fever relief.',
    descriptionTa: 'தொண்டை, நெஞ்சு சளி மற்றும் காய்ச்சலுக்கு இதமளிக்கும் எளிய திரவ வடிவங்கள்.',
    classicalContext: 'Immediate soothing of mucosal membranes and olfactory channels.',
    classicalContextTa: 'உடனடியாக பருகக்கூடிய தொண்டைக்கும் சுவாசத்திற்கும் இதமளிக்கும் வடிவம்.'
  },
  {
    slug: 'personal-care',
    formulation: 'Personal Care',
    title: 'Personal Care & Traditional Powders',
    titleTa: 'பாரம்பரிய பராமரிப்பு பொடிகள்',
    tagline: '100% Soap-free herbal bath & scalp cleansing formulations',
    taglineTa: 'தூய மூலிகை குளியல் மற்றும் கூந்தல் பொடிகள்',
    description: 'Nalangu Maavu and Shigakai powder crafted with wild botanicals to protect the skin barrier and nourish hair roots naturally.',
    descriptionTa: 'ரசாயனம் இல்லாத தூய மூலிகை குளியல் மற்றும் கூந்தல் பராமரிப்பு பொடிகள்.',
    classicalContext: 'Zero chemicals, sulfates, or artificial fragrances for daily family hygiene.',
    classicalContextTa: 'தினசரி குடும்ப பயன்பாட்டிற்கு உகந்த இயற்கை பராமரிப்பு.'
  }
];

export const BUNDLES: BundleItem[] = [
  {
    id: 'bundle-01',
    slug: 'pain-and-mobility-collection',
    title: 'Pain & Mobility Dual Action Kit',
    titleTa: 'மூட்டு & வாத நலம் இரட்டை தொகுப்பு',
    subtitle: 'Dual action: Deep topical Rej-Viyan Oil + Internal Sarvanga Vatha Chooranam',
    subtitleTa: 'வெளிப்புற தைல மசாஜ் + உள் சூரணம் இரட்டை பலன்',
    concern: 'joint-mobility',
    productSlugs: ['ruthra-rej-viyan-pain-oil', 'ruthra-sarvanga-vatha-chooranam'],
    regularPrice: 431,
    bundlePrice: 389,
    savings: 42,
    description: 'Combines Ruthra Rej-Viyan Pain Oil (100ml) for topical pain relief with Ruthra Sarvanga Vatha Chooranam (30 Sachets) for internal neuromuscular calming.',
    descriptionTa: 'ரெஜ்-வியான் வலி தைலம் (100 மி.லி) மற்றும் சர்வாங்க வாத சூரணம் (30 பாக்கெட்) அடங்கிய சிறப்பு சலுகை தொகுப்பு.',
    badge: 'Popular Combo'
  },
  {
    id: 'bundle-02',
    slug: 'respiratory-wellness-collection',
    title: 'Complete Respiratory Care Kit',
    titleTa: 'முழுமையான சுவாச பாதுகாப்பு தொகுப்பு',
    subtitle: 'Triple synergy: Non-drowsy Sinocof Syrup + Ramabana Kashayam + Inhalation Drops',
    subtitleTa: 'இருமல் சிரப் + ராமபாண கஷாயம் + ஈஸி ஸ்வாஸ் சொட்டு மருந்து',
    concern: 'respiratory',
    productSlugs: ['ruthra-sinocof-cough-syrup', 'ruthra-ramabana-kashayam', 'ruthra-esy-swas-drops'],
    regularPrice: 534,
    bundlePrice: 479,
    savings: 55,
    description: 'Complete family respiratory defense featuring Sinocof Cough Syrup (100ml), Ramabana Kashayam (200ml), and Esy-swas Drops (50ml).',
    descriptionTa: 'சினோகாஃப் இருமல் சிரப் + ராமபாண கஷாயம் + ஈஸி ஸ்வாஸ் சொட்டு மருந்து அடங்கிய முழுமையான குடும்ப சுவாச தொகுப்பு.',
    badge: 'Seasonal Essential'
  }
];

// Helper Query Functions for High-Performance Scalable Stores (1000+ products ready)
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByConcern(concernSlug: string): Product[] {
  return PRODUCTS.filter(p => p.concerns.includes(concernSlug as any));
}

export function getProductsByFormulation(formulationSlug: string): Product[] {
  const normalized = formulationSlug.toLowerCase();
  return PRODUCTS.filter(p => p.formulation.toLowerCase().includes(normalized));
}

export function getFeaturedProducts(limit = 8): Product[] {
  return PRODUCTS.filter(p => p.featured).slice(0, limit);
}
