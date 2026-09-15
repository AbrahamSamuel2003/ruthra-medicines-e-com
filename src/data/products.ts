import { Product, ConcernCategory, FormulationCategory, BundleItem } from '@/types/product';

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. CHOORANAM (12 FORMULATIONS - 30 SACHETS)
  // ==========================================
  {
    id: 'prod-01',
    name: 'Ruthra Amirtha Sanjeevi Chooranam',
    tamilName: 'ருத்ரா அமிர்த சஞ்சீவி சூரணம்',
    slug: 'ruthra-amirtha-sanjeevi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness', 'womens-wellness'],
    price: 234,
    originalPrice: 260,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Potent classical Siddha formulation crafted to balance systemic Pitta, soothe genito-urinary tract distress, and nourish peripheral nerve tissues.',
    shortDescriptionTa: 'உடல் பித்த உபாதைகளை தணித்து, சிறுநீர் பாதை நோய்கள் மற்றும் நரம்பு வலிகளுக்கு உடனடி நிவாரணம் தரும் பாரம்பரிய சித்த சூரணம்.',
    description: 'Ruthra Amirtha Sanjeevi Chooranam is prepared in strict accordance with the classical Siddha formulary. Compounded with cooling and restorative botanicals, it pacifies deep-seated Pitta aggravation, relieves burning micturition, supports genito-urinary healing (including leucorrhea and inflammatory conditions), and eases peripheral neuritis and osteomyelitis discomfort.',
    descriptionTa: 'அமிர்த சஞ்சீவி சூரணம் பித்த தோஷத்தை சீராக்கி, சிறுநீர் எரிச்சல், வெள்ளைப்படுதல், எலும்பு மஜ்ஜை அழற்சி மற்றும் நரம்பு எரிச்சலை குணப்படுத்த உதவும் உன்னத தயாரிப்பு.',
    traditionalRole: 'Pacifies Pitta, relieves genito-urinary inflammation, leucorrhea, osteomyelitis, and peripheral nerve weakness.',
    traditionalRoleTa: 'பித்த சமநிலை, சிறுநீரக பாதை நோய்கள், வெள்ளைப்படுதல் மற்றும் நரம்பு வலுவின்மைக்கு பாரம்பரிய பயன்பாடு.',
    badge: 'Pitta & Urinary Care',
    badgeTa: 'பித்த & சிறுநீர் நலம்',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Nannari (Indian Sarsaparilla)', tamilName: 'நன்னாரி', botanicalName: 'Hemidesmus indicus', role: 'Calms internal thermal distress and cools blood', roleTa: 'உடல் உஷ்ணம் தணித்து ரத்தத்தை சுத்திகரிக்கும்', amount: '25%' },
      { name: 'Seenthil (Guduchi)', tamilName: 'சீந்தில்', botanicalName: 'Tinospora cordifolia', role: 'Immune modulator and tissue rejuvenator', roleTa: 'நோய் எதிர்ப்பு ஆற்றல் மற்றும் திசு பலம்', amount: '25%' },
      { name: 'Sirupeelai', tamilName: 'சிறுபீளை', botanicalName: 'Aerva lanata', role: 'Urinary soothing and lithotriptic support', roleTa: 'சிறுநீர் பாதை எரிச்சல் தணிக்கும்', amount: '20%' },
      { name: 'Chandanam', tamilName: 'சந்தனம்', botanicalName: 'Santalum album', role: 'Cooling astringent for mucous membranes', roleTa: 'குளிர்ச்சி தரும் மூலிகை', amount: '15%' },
      { name: 'Athimathuram', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Demulcent and nerve protector', roleTa: 'நரம்பு பாதுகாப்பு மற்றும் ஊட்டச்சத்து', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Take 1 single-dose sachet (2g - 3g).', instructionTa: 'ஒரு முழு பாக்கெட்டை எடுக்கவும்.' },
      { step: '02', title: 'Mix with Carrier', titleTa: 'வெந்நீர்/பாலில் கலக்கவும்', instruction: 'Blend into half a glass of warm water, raw honey, or milk.', instructionTa: 'அரை டம்ளர் வெதுவெதுப்பான நீர் அல்லது பாலில் கலக்கவும்.' },
      { step: '03', title: 'Consume Twice Daily', titleTa: 'தினமும் இருவேளை', instruction: 'Consume morning and night after food.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு பின் அருந்தவும்.' }
    ],
    dosage: {
      amount: '1 Sachet (2g - 3g)',
      frequency: 'Twice daily',
      timing: 'Post-prandial (30 mins after meals)',
      vehicle: 'Warm water, honey, or warm milk',
      amountTa: '1 பாக்கெட் (2 - 3 கிராம்)',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு 30 நிமிடம் கழித்து',
      vehicleTa: 'வெதுவெதுப்பான நீர், தேன் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult a qualified Siddha physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் உட்கொள்ளும் முன் மருத்துவரை அணுகவும்.',
      children: 'Suitable for children above 6 years under physician guidance.',
      childrenTa: '6 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு மருத்துவர் ஆலோசனைப்படி வழங்கவும்.',
      interactions: 'Maintain a 1-hour interval from allopathic drugs.',
      interactionsTa: 'பிற மருந்துகளுடன் 1 மணி நேர இடைவெளி பின்பற்றவும்.',
      precautions: ['Store in a dry location away from moisture.', 'Drink sufficient water throughout the day.'],
      precautionsTa: ['ஈரப்பதமில்லாத இடத்தில் வைக்கவும்.', 'சூரணம் உட்கொள்ளும் காலத்தில் போதுமான தண்ணீர் குடிக்கவும்.']
    },
    storage: {
      conditions: 'Store in a cool, dry place away from direct sunlight.',
      conditionsTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் பாதுகாக்கவும்.',
      shelfLife: '24 Months from manufacturing date',
      shelfLifeTa: 'உற்பத்தி தேதியிலிருந்து 24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'What are the main indications for Amirtha Sanjeevi Chooranam?',
        questionTa: 'அமிர்த சஞ்சீவி சூரணம் எதற்கு சிறந்தது?',
        answer: 'It is highly effective for genito-urinary tract infections, white discharge, burning sensation during urination, and peripheral nerve weakness.',
        answerTa: 'சிறுநீர் பாதை நோய்கள், வெள்ளைப்படுதல், எரிச்சல் மற்றும் நரம்பு பலவீனத்திற்கு மிகவும் சிறந்தது.'
      }
    ],
    searchKeywords: ['amirtha sanjeevi', 'chooranam', 'pitha', 'urinary tract', 'leucorrhea', 'peripheral neuritis'],
    tamilKeywords: ['அமிர்த சஞ்சீவி', 'சூரணம்', 'பித்தம்', 'சிறுநீர் எரிச்சல்', 'வெள்ளைப்படுதல்', 'நரம்பு வலி'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-02',
    name: 'Ruthra Madhurathi Chooranam',
    tamilName: 'ருத்ரா மதுராதி சூரணம்',
    slug: 'ruthra-madhurathi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['digestive-wellness'],
    price: 249,
    originalPrice: 280,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Soothing digestive powder sachet formulated for prompt relief from GERD, acid reflux, giddiness, nausea, and loss of appetite.',
    shortDescriptionTa: 'அமில எதிர்ப்புகை (GERD), நெஞ்செரிச்சல், தலைசுற்றல், குமட்டல் மற்றும் பசியின்மைக்கு உடனடி நிவாரணம் தரும் சூரணம்.',
    description: 'Ruthra Madhurathi Chooranam balances excessive gastric heat and stomach acid secretion. Formulated with liquorice root, coriander, and carminative spices, it coats the upper GI tract, soothes mucosal erosion, alleviates nausea and morning giddiness, and re-ignites wholesome digestive appetite.',
    descriptionTa: 'மதுராதி சூரணம் வயிற்றின் அதிகப்படியான அமில சுரப்பை சமப்படுத்தி, நெஞ்செரிச்சல், குடல் புண், குமட்டல், தலைசுற்றல் ஆகியவற்றை போக்கி ஆரோக்கியமான பசியை தூண்டுகிறது.',
    traditionalRole: 'Relieves GERD, acid reflux, gastric burning, giddiness, nausea, and anorexia.',
    traditionalRoleTa: 'அமில எதிர்ப்பு, நெஞ்செரிச்சல், தலைசுற்றல், குமட்டல் மற்றும் பசியின்மைக்கு தீர்வு.',
    badge: 'GERD & Acidity Care',
    badgeTa: 'அமில & செரிமான நலம்',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Athimathuram (Liquorice)', tamilName: 'அதிமதுரம்', botanicalName: 'Glycyrrhiza glabra', role: 'Soothes inflamed esophageal and gastric lining', roleTa: 'இரைப்பை மற்றும் குடல் புண்களை ஆற்றும்', amount: '35%' },
      { name: 'Kothumalli (Coriander Seed)', tamilName: 'கொத்தமல்லி', botanicalName: 'Coriandrum sativum', role: 'Calms gastric fire and prevents giddiness', roleTa: 'பித்தத்தை தணித்து தலைசுற்றலை தடுக்கும்', amount: '25%' },
      { name: 'Seeragam (Cumin)', tamilName: 'சீரகம்', botanicalName: 'Cuminum cyminum', role: 'Restores digestive enzyme harmony', roleTa: 'செரிமானத்தை சீராக்கும்', amount: '20%' },
      { name: 'Elakkai (Cardamom)', tamilName: 'ஏலக்காய்', botanicalName: 'Elettaria cardamomum', role: 'Relieves nausea and foul breath', roleTa: 'குமட்டலை போக்கி நறுமணம் தரும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Empty 1 sachet into a cup.', instructionTa: '1 பாக்கெட்டை கோப்பையில் இடவும்.' },
      { step: '02', title: 'Warm Water Mix', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Mix with 100ml warm water or milk.', instructionTa: '100 மி.லி வெந்நீர் அல்லது பாலில் கலக்கவும்.' },
      { step: '03', title: 'Consume Before Food', titleTa: 'உணவுக்கு முன்', instruction: 'Drink 20 minutes before meals twice daily.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு 20 நிமிடம் முன் பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet (2g - 3g)',
      frequency: 'Twice daily',
      timing: 'Pre-prandial (20 mins before food)',
      vehicle: 'Warm water or warm milk',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு 20 நிமிடம் முன்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Safe in standard dietary dosages; physician consult advised.',
      pregnancyTa: 'மருத்துவர் ஆலோசனையுடன் உட்கொள்ளலாம்.',
      children: 'Safe for children above 5 years in half dosage.',
      childrenTa: '5 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு அரை பாக்கெட் போதுமானது.',
      interactions: 'No known adverse interactions.',
      interactionsTa: 'பக்க விளைவுகள் அற்றது.',
      precautions: ['Avoid extremely spicy and fried street foods during therapy.'],
      precautionsTa: ['அதிக காரமான உணவுகளை தவிர்க்கவும்.']
    },
    storage: {
      conditions: 'Keep in an airtight container away from steam.',
      conditionsTa: 'ஈரக்காற்று படாமல் மூடி வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How quickly does it relieve GERD / acid reflux?',
        questionTa: 'நெஞ்செரிச்சல் எப்போது குறையும்?',
        answer: 'Most people feel soothing relief within 15 to 30 minutes of consumption.',
        answerTa: 'சாப்பிட்ட 15 முதல் 30 நிமிடங்களில் இதமான குணம் கிடைக்கும்.'
      }
    ],
    searchKeywords: ['madhurathi', 'gerd', 'acid reflux', 'nausea', 'giddiness', 'anorexia', 'acidity'],
    tamilKeywords: ['மதுராதி', 'சூரணம்', 'நெஞ்செரிச்சல்', 'அமில பித்தம்', 'குமட்டல்', 'தலைசுற்றல்', 'பசியின்மை'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-03',
    name: 'Ruthra Megasanthi Chooranam',
    tamilName: 'ருத்ரா மேகசாந்தி சூரணம்',
    slug: 'ruthra-megasanthi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness', 'skin-hair'],
    price: 180,
    originalPrice: 200,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Traditional sachet formulation to relieve muscle spasms, deep prickling pain, venereal skin eruptions, and chronic body heat.',
    shortDescriptionTa: 'தசை நரம்பு சுருக்கம், குத்து வலி, மேக புண்கள் மற்றும் கடுமையான உடல் சூட்டை போக்கும் சித்த சூரணம்.',
    description: 'Ruthra Megasanthi Chooranam is specially processed from Southern Tamil Nadu herbs known for deep tissue cooling and blood detoxification. It targets burning sensations in the palms and soles, muscle stiffness/contractions, venereal skin lesions, and deep neuralgic prickling discomfort.',
    descriptionTa: 'மேகசாந்தி சூரணம் உடலின் ஆழமான உஷ்ணத்தை குறைத்து, கை கால் எரிச்சல், தசை பிடிப்பு, மேகப்புண்கள் மற்றும் குத்தும் வலியை குணமாக்கும்.',
    traditionalRole: 'Relieves contraction of nerves/muscles, venereal ulcers, syphilitic eruptions, and pricking body pain.',
    traditionalRoleTa: 'தசை சுருக்கம், மேக புண்கள் மற்றும் குத்து வலியை தணிக்கும்.',
    badge: 'Tissue Cooling',
    badgeTa: 'உடல் உஷ்ண தணிப்பு',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Nannari Root', tamilName: 'நன்னாரி', botanicalName: 'Hemidesmus indicus', role: 'Deep blood purifier and cooling agent', roleTa: 'ரத்த சுத்திகரிப்பு மற்றும் குளிர்ச்சி', amount: '30%' },
      { name: 'Vetiver', tamilName: 'வெட்டிவேர்', botanicalName: 'Chrysopogon zizanioides', role: 'Calms systemic thermal distress', roleTa: 'அளவுக்கு அதிகமான உஷ்ணத்தை குறைக்கும்', amount: '25%' },
      { name: 'Sirupeelai', tamilName: 'சிறுபீளை', botanicalName: 'Aerva lanata', role: 'Diuretic and bladder cooling', roleTa: 'சிறுநீரக பாதை சமநிலை', amount: '25%' },
      { name: 'Chandanam', tamilName: 'சந்தனம்', botanicalName: 'Santalum album', role: 'Astringent for ulcer healing', roleTa: 'புண்களை ஆற்றும் தன்மை', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Sachet Dose', titleTa: 'பாக்கெட் அளவு', instruction: 'Take 1 sachet twice daily.', instructionTa: 'தினமும் 1 பாக்கெட் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Carrier Blend', titleTa: 'கலவை', instruction: 'Mix in lukewarm water or coconut water.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது இளநீரில் கலக்கவும்.' },
      { step: '03', title: 'Timing', titleTa: 'நேரம்', instruction: 'Consume after food.', instructionTa: 'உணவுக்குப் பின் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post-prandial (after food)',
      vehicle: 'Lukewarm water or coconut water',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது இளநீர்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Not advised under 6 years.',
      childrenTa: '6 வயதுக்கு கீழ் தவிர்க்கவும்.',
      interactions: 'Safe with other ayurvedic/siddha medicines.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Drink 2-3 litres of water daily.'],
      precautionsTa: ['தினமும் 2-3 லிட்டர் தண்ணீர் குடிக்கவும்.']
    },
    storage: {
      conditions: 'Store away from humidity.',
      conditionsTa: 'ஈரப்பதம் படாமல் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can this be taken for burning sensation in feet and hands?',
        questionTa: 'கை கால் எரிச்சலுக்கு இதை உட்கொள்ளலாமா?',
        answer: 'Yes, it is one of the most trusted traditional preparations for burning extremities caused by Pitta.',
        answerTa: 'ஆம், கை கால் எரிச்சல் மற்றும் உடல் உஷ்ணத்திற்கு மிகவும் உகந்தது.'
      }
    ],
    searchKeywords: ['megasanthi', 'chooranam', 'burning pain', 'muscle contraction', 'venereal ulcers', 'body heat'],
    tamilKeywords: ['மேகசாந்தி', 'சூரணம்', 'தசை சுருக்கம்', 'கை கால் எரிச்சல்', 'உடல் உஷ்ணம்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-04',
    name: 'Ruthra Chandraganthi Chooranam',
    tamilName: 'ருத்ரா சந்திரகாந்தி சூரணம்',
    slug: 'ruthra-chandraganthi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['womens-wellness', 'metabolic-wellness'],
    price: 300,
    originalPrice: 340,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Premier reproductive rejuvenation formulation for oligospermia, vigor, vaginosis, and genito-urinary thermal disorders.',
    shortDescriptionTa: 'விந்தணு குறைபாடு, தாது பலம், பிறப்புறுப்பு தொற்று மற்றும் பித்த உஷ்ண கோளாறுகளுக்கு உன்னத சூரணம்.',
    description: 'Ruthra Chandraganthi Chooranam is an esteemed Rasayana formulation in Siddha literature. It is specifically compounded to support male reproductive vitality (enhancing count and motility), while offering soothing antibacterial and cooling therapy for female vaginosis, white discharge, and genito-urinary tract irritation.',
    descriptionTa: 'சந்திரகாந்தி சூரணம் ஆண்களுக்கு தாது பலம் மற்றும் விந்தணு பெருக்கத்திற்கும், பெண்களுக்கு பிறப்புறுப்பு தொற்று, வெள்ளைப்படுதல் மற்றும் எரிச்சலை போக்கவும் உதவும் பாரம்பரிய ரசாயன தயாரிப்பு.',
    traditionalRole: 'Addresses oligospermia, male/female vitality, vaginosis, and reproductive thermal disorders.',
    traditionalRoleTa: 'தாது பலம், விந்தணு பெருக்கம், பிறப்புறுப்பு ஆரோக்கியம் மற்றும் பித்த சமநிலை.',
    badge: 'Vitality & Reproductive',
    badgeTa: 'தாது பலம் & நலம்',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Poonaikali (Velvet Bean)', tamilName: 'பூனைக்காலி', botanicalName: 'Mucuna pruriens', role: 'Nourishes reproductive tissue and vigor', roleTa: 'தாது புஷ்டி மற்றும் நரம்பு பலம்', amount: '30%' },
      { name: 'Thaneervittan Kizhangu (Shatavari)', tamilName: 'தண்ணீர்விட்டான்', botanicalName: 'Asparagus racemosus', role: 'Uterine cooling and hormonal balance', roleTa: 'கர்ப்பப்பை குளிர்ச்சி மற்றும் ஹார்மோன் சீராக்கம்', amount: '30%' },
      { name: 'Nilapanai Kizhangu', tamilName: 'நிலப்பனை', botanicalName: 'Curculigo orchioides', role: 'Aphrodisiac and restorative tonic', roleTa: 'உடல் உறுதி தரும் மூலிகை', amount: '20%' },
      { name: 'Salamisri', tamilName: 'சாளமிசிரி', botanicalName: 'Eulophia campestris', role: 'Rejuvenates vital essence (Ojas)', roleTa: 'ஆற்றல் மற்றும் உயிர் தாது பலம்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Warm Milk Mix', titleTa: 'பாலில் கலக்கவும்', instruction: 'Mix 1 sachet into a cup of warm boiled milk.', instructionTa: '1 பாக்கெட்டை காய்ச்சிய வெதுவெதுப்பான பாலில் கலக்கவும்.' },
      { step: '02', title: 'Add Honey/Candy', titleTa: 'பனங்கற்கண்டு சேர்க்கவும்', instruction: 'Optionally add palm sugar or raw honey.', instructionTa: 'விருப்பப்பட்டால் பனங்கற்கண்டு அல்லது தேன் சேர்க்கலாம்.' },
      { step: '03', title: 'Drink at Night', titleTa: 'இரவில் பருகவும்', instruction: 'Consume 30 minutes before sleep.', instructionTa: 'இரவு தூங்கும் முன் அருந்தவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Once or twice daily',
      timing: 'Bedtime or post-meals',
      vehicle: 'Warm cow’s milk or goat’s milk',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் ஒருமுறை அல்லது இருமுறை',
      timingTa: 'இரவு தூங்கும் முன்',
      vehicleTa: 'காய்ச்சிய பசும்பால் அல்லது ஆட்டுப்பால்'
    },
    safety: {
      pregnancy: 'Consult Siddha physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Not intended for young children.',
      childrenTa: 'சிறார்களுக்கு பரிந்துரைக்கப்படுவதில்லை.',
      interactions: 'Safe and natural.',
      interactionsTa: 'இயற்கையானது.',
      precautions: ['Follow a wholesome, nutritious diet during the course.'],
      precautionsTa: ['சத்தான உணவுகளுடன் உட்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Store in a cool and dry location.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is Chandraganthi Chooranam suitable for both men and women?',
        questionTa: 'சந்திரகாந்தி சூரணம் ஆண்கள் மற்றும் பெண்கள் இருவருக்கும் உகந்ததா?',
        answer: 'Yes, it supports male reproductive vigor and semen quality, as well as female gynecological cooling and tissue tone.',
        answerTa: 'ஆம், ஆண்களின் தாது பலத்திற்கும் பெண்களின் பிறப்புறுப்பு நலம் மற்றும் குளிர்ச்சிக்கும் உகந்தது.'
      }
    ],
    searchKeywords: ['chandraganthi', 'chooranam', 'oligospermia', 'vigor', 'vaginosis', 'vitality', 'sperm count'],
    tamilKeywords: ['சந்திரகாந்தி', 'சூரணம்', 'தாது பலம்', 'விந்தணு பெருக்கம்', 'பிறப்புறுப்பு நலம்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-05',
    name: 'Ruthra Sagala Noi Chooranam',
    tamilName: 'ருத்ரா சகல நோய் சூரணம்',
    slug: 'ruthra-sagala-noi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['joint-mobility', 'digestive-wellness'],
    price: 231,
    originalPrice: 260,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Master multi-system balancing powder indicated for lower back pain, chronic headaches, localized edema, lithiasis, arthritis, and indigestion.',
    shortDescriptionTa: 'இடுப்பு வலி, தலைவலி, மூட்டு வலி, வீக்கம், சிறுநீரக கல் மற்றும் செரிமான கோளாறுகளுக்கு உதவும் சர்வ நிவாரண சூரணம்.',
    description: 'Ruthra Sagala Noi Chooranam ("Universal Harmonizer") combines time-tested herbs that target systemic inflammation, sluggish metabolic digestion, and localized fluid retention. It relieves persistent lower lumbar discomfort, tension headaches, eye burning sensations, and urinary gravel.',
    descriptionTa: 'சகல நோய் சூரணம் வாதம், பித்தம், கபத்தை சமன் செய்து இடுப்பு வலி, தலைவலி, மூட்டு வீக்கம், கண் எரிச்சல் மற்றும் சிறுநீரக கற்களை கரைக்க உதவும் அற்புதமான தயாரிப்பு.',
    traditionalRole: 'Relieves back pain, headaches, eye heat, localized edema, lithiasis (stones), and arthritic aches.',
    traditionalRoleTa: 'முதுகு வலி, தலைவலி, மூட்டு வீக்கம், சிறுநீரக கல் மற்றும் செரிமான கோளாறுகளுக்கு நிவாரணம்.',
    badge: 'Universal Relief',
    badgeTa: 'சர்வ நிவாரணி',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Thiripala (Amla, Haritaki, Bibhitaki)', tamilName: 'திரிபலா', botanicalName: 'Triphala blend', role: 'Cleanses colon and dispels toxin accumulation', roleTa: 'குடல் கழிவுகளை நீக்கி நச்சுக்களை அகற்றும்', amount: '35%' },
      { name: 'Thirikadugu (Pepper, Long Pepper, Ginger)', tamilName: 'திரிகடுகம்', botanicalName: 'Trikatu blend', role: 'Ignites metabolic fire and reduces inflammation', roleTa: 'செரிமான தீயை தூண்டி வீக்கத்தை குறைக்கும்', amount: '30%' },
      { name: 'Sirupeelai', tamilName: 'சிறுபீளை', botanicalName: 'Aerva lanata', role: 'Lithotriptic action for kidney gravel', roleTa: 'சிறுநீரக கல்லை கரைக்கும் மூலிகை', amount: '20%' },
      { name: 'Chithiramoolam', tamilName: 'சித்திரமூலம்', botanicalName: 'Plumbago zeylanica', role: 'Relieves deep joint and muscular pain', roleTa: 'வாத வலிகளை நீக்கும்', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Single Sachet', titleTa: '1 பாக்கெட்', instruction: 'Take 1 sachet twice daily.', instructionTa: 'தினமும் 1 பாக்கெட் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Warm Water Mix', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Stir well in 150ml warm water or light buttermilk.', instructionTa: '150 மி.லி வெந்நீர் அல்லது மோரில் கலக்கவும்.' },
      { step: '03', title: 'After Food', titleTa: 'உணவுக்குப் பின்', instruction: 'Consume 30 minutes after meals.', instructionTa: 'உணவுக்கு 30 நிமிடம் கழித்து பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post-prandial (after meals)',
      vehicle: 'Warm water or buttermilk',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மோர்'
    },
    safety: {
      pregnancy: 'Consult physician before use during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Suitable above 8 years under guidance.',
      childrenTa: '8 வயதுக்கு மேற்பட்டோருக்கு உகந்தது.',
      interactions: 'Safe with all traditional therapies.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Drink ample warm water.'],
      precautionsTa: ['வெதுவெதுப்பான நீர் அதிகம் குடிக்கவும்.']
    },
    storage: {
      conditions: 'Store away from moisture and direct light.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Why is it named Sagala Noi Chooranam?',
        questionTa: 'சகல நோய் சூரணம் என்று ஏன் அழைக்கப்படுகிறது?',
        answer: 'Because of its broad-spectrum balancing effect across Vatha, Pitha, and Kapha disorders including pain, digestion, and urinary ease.',
        answerTa: 'வாதம், பித்தம், கபம் மூன்றையும் சமன் செய்து பல உபாதைகளுக்கு தீர்வளிப்பதால் இப்பெயர் பெற்றது.'
      }
    ],
    searchKeywords: ['sagala noi', 'universal chooranam', 'back pain', 'headache', 'edema', 'lithiasis', 'arthritis'],
    tamilKeywords: ['சகல நோய்', 'சூரணம்', 'முதுகு வலி', 'தலைவலி', 'வீக்கம்', 'சிறுநீரக கல்', 'மூட்டு வலி'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-06',
    name: 'Ruthra Madhura Chooranam',
    tamilName: 'ருத்ரா மதுரா சூரணம்',
    slug: 'ruthra-madhura-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['metabolic-wellness'],
    price: 375,
    originalPrice: 420,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Comprehensive botanical formula for Type-II Diabetes Mellitus and its secondary microvascular and neuropathic complications.',
    shortDescriptionTa: 'டைப்-2 சர்க்கரை நோய், உடல் சோர்வு மற்றும் சர்க்கரையினால் ஏற்படும் நரம்பு கோளாறுகளுக்கு உன்னத மூலிகை சூரணம்.',
    description: 'Ruthra Madhura Chooranam is formulated with bitter and astringent botanicals known in Siddha for balancing Madhumegham (diabetes). It supports natural insulin sensitivity, reduces post-prandial glucose spikes, protects kidney micro-vessels, and relieves chronic diabetic fatigue and leg cramps.',
    descriptionTa: 'மதுரா சூரணம் சர்க்கரை அளவை கட்டுக்குள் வைக்கவும், கணையத்தின் செயல்பாட்டை சீராக்கவும், சர்க்கரை நோயாளிகளுக்கு ஏற்படும் கால் நரம்பு குடைச்சல், சோர்வு மற்றும் கண் மங்கலை போக்கவும் உதவுகிறது.',
    traditionalRole: 'Supports Type-II Diabetes Mellitus management and prevents long-term diabetic complications.',
    traditionalRoleTa: 'டைப்-2 சர்க்கரை நோய் மேலாண்மை மற்றும் நரம்பு சோர்வு நீக்கம்.',
    badge: 'Diabetes Care Pro',
    badgeTa: 'சர்க்கரை மேலாண்மை',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Sirukurinjan (Gymnema)', tamilName: 'சிறுகுறிஞ்சான்', botanicalName: 'Gymnema sylvestre', role: 'Supports natural insulin production & curbs sugar cravings', roleTa: 'இனிப்பு விருப்பத்தை குறைத்து இன்சுலின் சுரப்பை தூண்டும்', amount: '30%' },
      { name: 'Naval Kottai (Jamun Seed)', tamilName: 'நாவல் விதை', botanicalName: 'Syzygium cumini', role: 'Slows carbohydrate conversion into glucose', roleTa: 'ரத்தத்தில் சர்க்கரை அதிகரிப்பதை தடுக்கும்', amount: '25%' },
      { name: 'Avarampoo', tamilName: 'ஆவாரம்பூ', botanicalName: 'Senna auriculata', role: 'Relieves diabetic thirst, fatigue, and burning sensations', roleTa: 'அதிக தாகம், உடல் சோர்வு மற்றும் எரிச்சலை நீக்கும்', amount: '25%' },
      { name: 'Keezhanelli', tamilName: 'கீழாநெல்லி', botanicalName: 'Phyllanthus niruri', role: 'Protects liver and renal microvasculature', roleTa: 'கல்லீரல் மற்றும் சிறுநீரக பாதுகாப்பு', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Take 1 sachet before morning and evening food.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு முன் 1 பாக்கெட் எடுக்கவும்.' },
      { step: '02', title: 'Mix in Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Stir in 100ml warm water.', instructionTa: '100 மி.லி வெதுவெதுப்பான நீரில் கலக்கவும்.' },
      { step: '03', title: 'Drink Pre-meal', titleTa: 'உணவுக்கு முன் பருகவும்', instruction: 'Drink 20 minutes before meals.', instructionTa: 'உணவுக்கு 20 நிமிடம் முன் பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Pre-prandial (20 mins before meals)',
      vehicle: 'Warm water',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு 20 நிமிடம் முன்',
      vehicleTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      pregnancy: 'Consult your physician.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Not indicated for children.',
      childrenTa: 'சிறார்களுக்கு பரிந்துரைக்கப்படுவதில்லை.',
      interactions: 'Monitor blood sugar levels regularly when taking along with oral hypoglycemics.',
      interactionsTa: 'சர்க்கரை அளவை சீராக பரிசோதித்து வரவும்.',
      precautions: ['Maintain regular walking and prescribed dietary restrictions.'],
      precautionsTa: ['உணவு கட்டுப்பாடு மற்றும் உடற்பயிற்சியை தொடரவும்.']
    },
    storage: {
      conditions: 'Keep tightly sealed in a dry environment.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can I take Madhura Chooranam alongside my current diabetes medicines?',
        questionTa: 'இதை வழக்கமான ஆங்கில மருந்துகளுடன் சேர்த்து சாப்பிடலாமா?',
        answer: 'Yes, keep a 45-minute interval and monitor blood sugar levels with your physician.',
        answerTa: 'ஆம், 45 நிமிடம் இடைவெளி விட்டு உட்கொள்ளலாம்; சர்க்கரை அளவை பரிசோதித்து வரவும்.'
      }
    ],
    searchKeywords: ['madhura chooranam', 'diabetes', 'sugar control', 'gymnema', 'jamun', 'blood sugar', 'metabolic'],
    tamilKeywords: ['மதுரா சூரணம்', 'சர்க்கரை நோய்', 'சர்க்கரை கட்டுப்பாடு', 'சிறுகுறிஞ்சான்', 'நாவல் விதை'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-07',
    name: 'Ruthra Sarvanga Vatha Chooranam',
    tamilName: 'ருத்ரா சர்வாங்க வாத சூரணம்',
    slug: 'ruthra-sarvanga-vatha-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['joint-mobility'],
    price: 231,
    originalPrice: 260,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Specialized neuromuscular formula for intense stabbing pain, nerve compression, arthralgia, intestinal colic, and all types of arthritis.',
    shortDescriptionTa: 'குத்தும் வலி, நரம்பு அழுத்த வலி, குடல் வலி, மூட்டு தேய்மானம் மற்றும் அனைத்து வாத வலிகளுக்கும் உடனடி நிவாரணம் தரும் சூரணம்.',
    description: 'Ruthra Sarvanga Vatha Chooranam is engineered specifically for deeply entrenched Vatha disorders. It penetrates congested joint cavities, pacifies aggravated nerve pathways, eases sciatica shooting pain, and relaxes intestinal cramps and visceral spasms.',
    descriptionTa: 'சர்வாங்க வாத சூரணம் நரம்பு தளர்ச்சி, சியாட்டிகா நரம்பு வலி, மூட்டு வீக்கம் மற்றும் குடல் வாத வலிகளை உடனடியாக தணிக்கக்கூடிய உன்னத மூலிகை தயாரிப்பு.',
    traditionalRole: 'Relieves stabbing nerve pain, sciatica, nerve compression, arthralgia, and intestinal colic.',
    traditionalRoleTa: 'நரம்பு குடைச்சல், மூட்டு வலி, சியாட்டிகா மற்றும் அனைத்து வாத வலிகளுக்கும் தீர்வு.',
    badge: 'Nerve & Joint Relief',
    badgeTa: 'நரம்பு & மூட்டு நிவாரணம்',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Amukkara (Ashwagandha)', tamilName: 'அமுக்கரா', botanicalName: 'Withania somnifera', role: 'Nerve rejuvenator and anti-inflammatory', roleTa: 'நரம்பு பலம் மற்றும் வீக்க எதிர்ப்பு', amount: '30%' },
      { name: 'Chithiramoolam', tamilName: 'கொடிவேலி', botanicalName: 'Plumbago indica', role: 'Penetrates deep joint blocks and dissolves vatha toxins', roleTa: 'வாத அடைப்புகளை நீக்கும்', amount: '25%' },
      { name: 'Perungayam (Asafoetida)', tamilName: 'பெருங்காயம்', botanicalName: 'Ferula foetida', role: 'Relieves spasms and intestinal colic pain', roleTa: 'குடல் பிடிப்பு மற்றும் வாயு வலிகளை நீக்கும்', amount: '20%' },
      { name: 'Chukku (Dry Ginger)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Digestive fire and systemic anti-inflammatory', roleTa: 'செரிமான தீ மற்றும் வலி நிவாரணம்', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Take 1 sachet with warm water.', instructionTa: '1 பாக்கெட்டை வெதுவெதுப்பான நீரில் எடுக்கவும்.' },
      { step: '02', title: 'Add Honey or Ghee', titleTa: 'தேன் அல்லது நெய்', instruction: 'Can also be taken mixed with pure cow ghee or honey.', instructionTa: 'சுத்தமான நெய் அல்லது தேனிலும் கலந்து உட்கொள்ளலாம்.' },
      { step: '03', title: 'Twice a Day', titleTa: 'இருவேளை', instruction: 'Take after meals morning and night.', instructionTa: 'காலை மற்றும் இரவு உணவுக்குப் பின் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post-prandial (after food)',
      vehicle: 'Warm water, ghee, or honey',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், நெய் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Avoid during pregnancy unless prescribed by physician.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Not advised for young children below 7 years.',
      childrenTa: '7 வயதுக்கு கீழ் தவிர்க்கவும்.',
      interactions: 'Safe with topical pain oils.',
      interactionsTa: 'வெளிப்புற தைலங்களுடன் சேர்த்து பயன்படுத்தலாம்.',
      precautions: ['For best results, pair with Ruthra Rej-Viyan Pain Oil externally.'],
      precautionsTa: ['சிறந்த பலனுக்கு ரெஜ்-வியான் தைலத்துடன் சேர்த்து பயன்படுத்தவும்.']
    },
    storage: {
      conditions: 'Store in an airtight container.',
      conditionsTa: 'ஈரப்பதம் படாமல் பாதுகாக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this help with Sciatica and nerve shooting pain?',
        questionTa: 'சியாட்டிகா நரம்பு வலிக்கு இது பலனளிக்குமா?',
        answer: 'Yes, Sarvanga Vatha Chooranam is specifically formulated for nerve compression and radiating neuralgia.',
        answerTa: 'ஆம், நரம்பு அழுத்தம் மற்றும் சியாட்டிகா வலிக்கு மிகச் சிறந்த பலனளிக்கும்.'
      }
    ],
    searchKeywords: ['sarvanga vatha', 'nerve pain', 'sciatica', 'arthralgia', 'arthritis', 'chooranam', 'stabbing pain'],
    tamilKeywords: ['சர்வாங்க வாதம்', 'சூரணம்', 'நரம்பு வலி', 'மூட்டு வலி', 'சியாட்டிகா', 'வாத குடைச்சல்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-08',
    name: 'Ruthra Sugabedhi Chooranam',
    tamilName: 'ருத்ரா சுகபேதி சூரணம்',
    slug: 'ruthra-sugabedhi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['digestive-wellness'],
    price: 276,
    originalPrice: 310,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Gentle, non-habit forming laxative sachet formulation to relieve chronic constipation, bloating, and colon sluggishness without stomach cramps.',
    shortDescriptionTa: 'வயிற்று வலி அல்லது பிடிப்பு இல்லாமல், குடல் கழிவுகளை மென்மையாக வெளியேற்றும் சுகபேதி சூரணம்.',
    description: 'Ruthra Sugabedhi Chooranam is formulated for painless, physiological colon cleansing. Unlike harsh purgatives, its classical synergistic blend stimulates peristaltic motion gently, restores natural bowel regularity, and relieves accumulated flatulence and toxic intestinal burden.',
    descriptionTa: 'சுகபேதி சூரணம் கடுமையான வயிற்று வலி இன்றி குடல் கழிவுகளை எளிதாக வெளியேற்றி, மலச்சிக்கல், வயிற்று உப்புசம் மற்றும் வாய்வு தொல்லையை தீர்க்கும் பாரம்பரிய மலமிளக்கி.',
    traditionalRole: 'Relieves chronic constipation, supports gentle painless elimination, and cleanses the lower bowel.',
    traditionalRoleTa: 'மலச்சிக்கல் தீர்வு, வலியற்ற குடல் சுத்திகரிப்பு மற்றும் செரிமான நலம்.',
    badge: 'Gentle Laxative',
    badgeTa: 'வலியற்ற மலமிளக்கி',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Nilavarai (Senna)', tamilName: 'நிலாவாரை', botanicalName: 'Senna alexandrina', role: 'Stimulates natural colon peristalsis', roleTa: 'குடல் இயக்கத்தை இயல்பாக்கும்', amount: '35%' },
      { name: 'Kadukkai (Haritaki)', tamilName: 'கடுக்காய்', botanicalName: 'Terminalia chebula', role: 'Tones colon walls and cleanses toxins', roleTa: 'குடல் தசைகளை பலப்படுத்தி கழிவுகளை நீக்கும்', amount: '30%' },
      { name: 'Chukku (Dry Ginger)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Prevents griping pain and flatulence', roleTa: 'வயிற்று பிடிப்பு மற்றும் வாயுவை தடுக்கும்', amount: '20%' },
      { name: 'Sombu (Fennel)', tamilName: 'சோம்பு', botanicalName: 'Foeniculum vulgare', role: 'Carminative and cooling for intestines', roleTa: 'குடலுக்கு இதமளிக்கும் மூலிகை', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Bedtime Dose', titleTa: 'இரவு நேரம்', instruction: 'Take 1 sachet at bedtime.', instructionTa: 'இரவு தூங்கும் முன் 1 பாக்கெட் எடுக்கவும்.' },
      { step: '02', title: 'Warm Water Mix', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Mix in 150ml warm water and stir well.', instructionTa: '150 மி.லி வெதுவெதுப்பான நீரில் கலக்கவும்.' },
      { step: '03', title: 'Smooth Morning', titleTa: 'காலை இலகுவான இயக்கம்', instruction: 'Experience effortless bowel movement next morning.', instructionTa: 'மறுநாள் காலையில் எவ்வித வலியுமின்றி மலம் வெளியேறும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Once daily at bedtime (as required)',
      timing: 'Bedtime',
      vehicle: 'Warm water',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தேவைக்கேற்ப இரவு தூங்கும் முன்',
      timingTa: 'இரவு படுக்கும் முன்',
      vehicleTa: 'வெதுவெதுப்பான நீர்'
    },
    safety: {
      pregnancy: 'Not recommended during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் தவிர்க்கவும்.',
      children: 'Not advised for children below 10 years.',
      childrenTa: '10 வயதுக்கு கீழ் பரிந்துரைக்கப்படுவதில்லை.',
      interactions: 'Safe when taken with adequate water.',
      interactionsTa: 'போதுமான தண்ணீர் குடிக்கவும்.',
      precautions: ['Do not use continuously for more than 14 days without physician review.'],
      precautionsTa: ['தொடர்ந்து 14 நாட்களுக்கு மேல் பயன்படுத்தும்போது மருத்துவர் ஆலோசனை பெறவும்.']
    },
    storage: {
      conditions: 'Keep in a moisture-free airtight container.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Will it cause watery diarrhea or abdominal cramps?',
        questionTa: 'இதனால் வயிற்று வலியோ அதிக நீர்ப்போக்கோ ஏற்படுமா?',
        answer: 'No, it is balanced with Ginger and Fennel to provide smooth, painless evacuation without severe griping.',
        answerTa: 'இல்லை, சுக்கு மற்றும் சோம்பு சேர்க்கப்பட்டுள்ளதால் வயிற்று வலி இன்றி இயல்பாக மலம் கழியும்.'
      }
    ],
    searchKeywords: ['sugabedhi', 'constipation', 'laxative', 'colon cleanse', 'chooranam', 'digestion'],
    tamilKeywords: ['சுகபேதி', 'சூரணம்', 'மலச்சிக்கல்', 'மலமிளக்கி', 'செரிமானம்', 'குடல் சுத்திகரிப்பு'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-09',
    name: 'Ruthra Karanthai Chooranam',
    tamilName: 'ருத்ரா கரந்தை சூரணம்',
    slug: 'ruthra-karanthai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['skin-hair', 'joint-mobility'],
    price: 285,
    originalPrice: 320,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Renowned blood purifier and regenerative sachet formulation for chronic eczema, leucoderma, psoriatic arthritis, carbuncles, and anal fistula.',
    shortDescriptionTa: 'தோல் நோய்கள், வெண்புள்ளி, எக்ஸிமா, தடிப்பு வாதம், கட்டிகள் மற்றும் பவுத்திரத்திற்கு உன்னத ரத்த சுத்திகரிப்பு சூரணம்.',
    description: 'Ruthra Karanthai Chooranam harnesses the deep detoxifying power of Kottaikaranthai (Sphaeranthus indicus) and supportive alterative botanicals. It purifies micro-capillaries, resolves chronic dermatological inflammation, clears resistant skin carbuncles, and supports tissue healing in anal fistula and psoriatic joints.',
    descriptionTa: 'கொட்டைக்கரந்தை மூலிகையின் மருத்துவ ஆற்றல் கொண்ட இந்த சூரணம், ரத்தத்தில் உள்ள நச்சுக்களை நீக்கி, வெண்புள்ளி, எக்ஸிமா, சோரியாசிஸ் மூட்டு வலி, கட்டிகள் மற்றும் பவுத்திர புண்களை ஆற்ற உதவுகிறது.',
    traditionalRole: 'Blood purification, chronic eczema, leucoderma, carbuncles, psoriatic arthritis, and anal fistula support.',
    traditionalRoleTa: 'ரத்த சுத்திகரிப்பு, தோல் நோய்கள், வெண்புள்ளி, எக்ஸிமா, பவுத்திரம் மற்றும் சோரியாசிஸ் வாதம்.',
    badge: 'Dermatological Detox',
    badgeTa: 'தோல் & ரத்த சுத்திகரிப்பு',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Kottaikaranthai (East Indian Globe Thistle)', tamilName: 'கொட்டைக்கரந்தை', botanicalName: 'Sphaeranthus indicus', role: 'Deep blood detoxifier and immune modulator', roleTa: 'ரத்த சுத்திகரிப்பு மற்றும் நோய் எதிர்ப்பு', amount: '40%' },
      { name: 'Parangichakkai (China Root)', tamilName: 'பறங்கிச்சக்கை', botanicalName: 'Smilax china', role: 'Alleviates chronic skin eruptions and psoriatic scaling', roleTa: 'தோல் தடிப்பு மற்றும் செதில்களை நீக்கும்', amount: '25%' },
      { name: 'Sivanar Vembu', tamilName: 'சிவனார் வேம்பு', botanicalName: 'Indigofera aspalathoides', role: 'Classical healing for carbuncles and fistula', roleTa: 'கட்டிகள் மற்றும் புண்களை ஆற்றும்', amount: '20%' },
      { name: 'Vembu (Neem Bark)', tamilName: 'வேம்பு பட்டை', botanicalName: 'Azadirachta indica', role: 'Broad-spectrum antibacterial and antifungal', roleTa: 'இயற்கை கிருமி நாசினி', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Take 1 sachet twice daily.', instructionTa: 'தினமும் 1 பாக்கெட் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Mix with Warm Water/Honey', titleTa: 'வெந்நீர் அல்லது தேன்', instruction: 'Mix in warm water or blend with honey.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது தேனில் கலந்து உட்கொள்ளவும்.' },
      { step: '03', title: 'Post Food', titleTa: 'உணவுக்குப் பின்', instruction: 'Consume 30 minutes after food.', instructionTa: 'உணவுக்கு 30 நிமிடம் கழித்து பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post-prandial',
      vehicle: 'Warm water or raw honey',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது தேன்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Not advised under 6 years.',
      childrenTa: '6 வயதுக்கு கீழ் தவிர்க்கவும்.',
      interactions: 'Safe with topical herbal oils like Nalpamaradi Taila.',
      interactionsTa: 'நால்பாமராதி தைலத்துடன் சேர்த்து பயன்படுத்தலாம்.',
      precautions: ['Avoid sour curds and fermented pickles during therapy.'],
      precautionsTa: ['அதிக புளிப்பு மற்றும் ஊறுகாயை தவிர்க்கவும்.']
    },
    storage: {
      conditions: 'Store in an airtight container.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can this be taken for chronic skin allergies and eczema?',
        questionTa: 'நாள்பட்ட தோல் அலர்ஜிக்கு இதை உட்கொள்ளலாமா?',
        answer: 'Yes, Karanthai Chooranam is widely prescribed in Siddha as a principal systemic blood purifier.',
        answerTa: 'ஆம், சித்த மருத்துவத்தில் தோல் அலர்ஜி மற்றும் எக்ஸிமாவிற்கு முதன்மையான மருந்தாகும்.'
      }
    ],
    searchKeywords: ['karanthai', 'eczema', 'skin diseases', 'leucoderma', 'psoriatic arthritis', 'anal fistula', 'blood purifier'],
    tamilKeywords: ['கரந்தை', 'சூரணம்', 'தோல் நோய்', 'வெண்புள்ளி', 'எக்ஸிமா', 'பவுத்திரம்', 'ரத்த சுத்தி'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-10',
    name: 'Ruthra Sitopaladi Churna',
    tamilName: 'ருத்ரா சிதோபலாதி சூரணம்',
    slug: 'ruthra-sitopaladi-churna',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['respiratory'],
    price: 198,
    originalPrice: 225,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Classic respiratory defense and throat soothing powder for bronchial asthma, flu, viral colds, cough, and low appetite.',
    shortDescriptionTa: 'ஆஸ்துமா, நெஞ்சு சளி, தும்மல், இருமல், காய்ச்சல் மற்றும் பசியின்மைக்கு நிவாரணம் தரும் சிதோபலாதி சூரணம்.',
    description: 'Ruthra Sitopaladi Churna combines crystalline sugar candy, bamboo manna (Vanslochan), long pepper (Thippili), cardamom, and cinnamon. It liquefies obstinate phlegm, calms bronchial hyperreactivity, dispels throat burning, and acts as a safe, comforting respiratory tonic for all ages.',
    descriptionTa: 'சிதோபலாதி சூரணம் மூங்கில் உப்பு, திப்பிலி, ஏலக்காய், இலவங்கப்பட்டை மற்றும் கற்கண்டு சேர்ந்த பாரம்பரிய மருந்து. இது நெஞ்சு சளியை இளக்கி வெளியேற்றி, ஆஸ்துமா, இருமல் மற்றும் தொண்டை எரிச்சலை குணமாக்கும்.',
    traditionalRole: 'Eases asthma, flu, seasonal cold, throat congestion, and revives natural appetite.',
    traditionalRoleTa: 'ஆஸ்துமா, சளி, இருமல், தொண்டை கரகரப்பு மற்றும் பசியின்மைக்கு தீர்வு.',
    badge: 'Respiratory Shield',
    badgeTa: 'சுவாச பாதுகாப்பு',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Vanslochan (Bamboo Manna)', tamilName: 'மூங்கில் உப்பு', botanicalName: 'Bambusa arundinacea', role: 'Soothes inflamed lungs and replenishes silica', roleTa: 'நுரையீரல் திசுக்களை தேற்றும் இயற்கை உப்பு', amount: '35%' },
      { name: 'Thippili (Long Pepper)', tamilName: 'திப்பிலி', botanicalName: 'Piper longum', role: 'Liquefies phlegm and enhances bio-availability', roleTa: 'நெஞ்சு சளியை இளக்கும் ஆற்றல்', amount: '25%' },
      { name: 'Elakkai (Cardamom)', tamilName: 'ஏலக்காய்', botanicalName: 'Elettaria cardamomum', role: 'Soothes throat irritation and bronchospasm', roleTa: 'தொண்டை எரிச்சலை தணிக்கும்', amount: '20%' },
      { name: 'Lavangapattai (Cinnamon)', tamilName: 'இலவங்கப்பட்டை', botanicalName: 'Cinnamomum verum', role: 'Antiviral warmth and respiratory tonic', roleTa: 'இயற்கை ஆன்டி-வைரல் கிருமி நாசினி', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Honey Mix', titleTa: 'தேனில் கலக்கவும்', instruction: 'Mix 1 sachet in a tablespoon of pure raw honey.', instructionTa: '1 பாக்கெட்டை ஒரு ஸ்பூன் சுத்தமான தேனில் கலக்கவும்.' },
      { step: '02', title: 'Lick Slowly', titleTa: 'மெதுவாக சுவைக்கவும்', instruction: 'Lick slowly so it coats the throat lining.', instructionTa: 'தொண்டையில் படும்படி மெதுவாக சுவைத்து விழுங்கவும்.' },
      { step: '03', title: 'Twice or Thrice Daily', titleTa: '2-3 வேளை', instruction: 'Take morning and evening after food.', instructionTa: 'காலை மற்றும் இரவு உணவுக்குப் பின் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: '2 to 3 times daily',
      timing: 'Post-prandial',
      vehicle: 'Pure honey or warm milk',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் 2-3 வேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'சுத்தமான தேன் அல்லது வெதுவெதுப்பான பால்'
    },
    safety: {
      pregnancy: 'Safe in prescribed dosages under physician guidance.',
      pregnancyTa: 'பாதுகாப்பானது; மருத்துவர் ஆலோசனை பெறலாம்.',
      children: 'Highly safe and palatable for children above 3 years.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு மிகவும் பாதுகாப்பானது.',
      interactions: 'Safe with modern cough syrups.',
      interactionsTa: 'பக்க விளைவுகள் அற்றது.',
      precautions: ['Avoid chilled foods and cold beverages during treatment.'],
      precautionsTa: ['குளிர்ந்த உணவுகள் மற்றும் குளிர்பானங்களை தவிர்க்கவும்.']
    },
    storage: {
      conditions: 'Keep in a dry environment tightly closed.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Is Sitopaladi Churna safe for children with cough?',
        questionTa: 'குழந்தைகளுக்கு இருமல் இருக்கும் போது இதை கொடுக்கலாமா?',
        answer: 'Yes, when mixed with honey, it is very pleasant-tasting and exceptionally gentle for children.',
        answerTa: 'ஆம், தேனில் கலந்து கொடுக்கும் போது குழந்தைகள் விரும்பி உண்பார்கள்; தொண்டைக்கு இதமளிக்கும்.'
      }
    ],
    searchKeywords: ['sitopaladi', 'cough', 'cold', 'asthma', 'flu', 'throat irritation', 'churna'],
    tamilKeywords: ['சிதோபலாதி', 'சூரணம்', 'இருமல்', 'சளி', 'ஆஸ்துமா', 'தொண்டை கரகரப்பு'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-11',
    name: 'Ruthra Pirandai Chooranam',
    tamilName: 'ருத்ரா பிரண்டை சூரணம்',
    slug: 'ruthra-pirandai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['joint-mobility', 'womens-wellness'],
    price: 315,
    originalPrice: 350,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Natural calcium-rich botanical sachet formulation for osteoporosis, bone fracture healing, joint arthralgia, and PMS cycle balance.',
    shortDescriptionTa: 'எலும்பு தேய்மானம், மூட்டு வலி, எலும்பு முறிவு குணமாக மற்றும் மாதவிடாய் முன் உபாதைகளுக்கு (PMS) உதவும் பிரண்டை சூரணம்.',
    description: 'Ruthra Pirandai Chooranam is prepared from freshly harvested Veldt Grape (Cissus quadrangularis). Rich in natural bio-available calcium, ketosteroids, and collagen-precursors, it accelerates bone mineralization, strengthens periosteal tissue, relieves joint crackling, and regulates hormonal mood changes during PMS.',
    descriptionTa: 'இயற்கை கால்சியம் சத்து நிறைந்த பிரண்டை கொண்டு தயாரிக்கப்படும் இந்த சூரணம், எலும்புகளுக்கு வலிமை சேர்த்து, மூட்டு தேய்மானத்தை தடுத்து, பெண்களின் மாதவிடாய் கால உபாதைகளை குறைக்கிறது.',
    traditionalRole: 'Supports bone mineral density, osteoporosis prevention, fracture healing, and PMS symptoms.',
    traditionalRoleTa: 'எலும்பு உறுதி, மூட்டு தேய்மானம் தடுப்பு, எலும்பு முறிவு குணம் மற்றும் மாதவிடாய் நலம்.',
    badge: 'Bone Mineral Care',
    badgeTa: 'எலும்பு & மூட்டு உறுதி',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Pirandai (Veldt Grape)', tamilName: 'பிரண்டை', botanicalName: 'Cissus quadrangularis', role: 'Accelerates osteoblast activity and bone mineralization', roleTa: 'எலும்பு வளர்ச்சி மற்றும் கால்சியம் சத்து தரும்', amount: '50%' },
      { name: 'Chukku (Dry Ginger)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Enhances intestinal calcium absorption', roleTa: 'கால்சியம் சத்தை உடல் உறிஞ்ச உதவும்', amount: '25%' },
      { name: 'Milagu (Black Pepper)', tamilName: 'மிளகு', botanicalName: 'Piper nigrum', role: 'Bio-enhancer for herbal alkaloids', roleTa: 'மருந்தின் வீரியத்தை அதிகரிக்கும்', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Take 1 sachet twice daily.', instructionTa: 'தினமும் 1 பாக்கெட் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Mix with Warm Water or Buttermilk', titleTa: 'வெந்நீர் அல்லது மோர்', instruction: 'Mix in warm water, warm milk, or light buttermilk.', instructionTa: 'வெந்நீர், பால் அல்லது மோரில் கலந்து குடிக்கவும்.' },
      { step: '03', title: 'Post-Meal', titleTa: 'உணவுக்குப் பின்', instruction: 'Consume 20 minutes after breakfast and dinner.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு பின் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post-prandial',
      vehicle: 'Warm water, milk, or buttermilk',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர், பால் அல்லது மோர்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Suitable for growing children above 7 years for bone strength.',
      childrenTa: '7 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு எலும்பு உறுதிக்கு உகந்தது.',
      interactions: 'Safe with other health supplements.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Consume regularly for 45-60 days for bone density improvement.'],
      precautionsTa: ['எலும்பு பலத்திற்கு தொடர்ந்து 45-60 நாட்கள் உட்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Store in a dry location.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How does Pirandai help in bone health?',
        questionTa: 'பிரண்டை எலும்பு ஆரோக்கியத்திற்கு எவ்வாறு உதவுகிறது?',
        answer: 'Pirandai is clinically established in Siddha for stimulating bone-forming osteoblasts and speeding up fracture knit.',
        answerTa: 'பிரண்டையில் இயற்கை கால்சியம் மற்றும் கொலாஜன் சத்துக்கள் அதிகம் உள்ளதால் எலும்பை வலுவாக்கும்.'
      }
    ],
    searchKeywords: ['pirandai', 'cissus quadrangularis', 'osteoporosis', 'bone density', 'fracture healing', 'joint pain'],
    tamilKeywords: ['பிரண்டை', 'சூரணம்', 'எலும்பு பலம்', 'கால்சியம்', 'மூட்டு தேய்மானம்', 'முறிவு குணம்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-12',
    name: 'Ruthra Bhavanakadukkai Chooranam',
    tamilName: 'ருத்ரா பாவனாக்கடுக்காய் சூரணம்',
    slug: 'ruthra-bhavanakadukkai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    concerns: ['digestive-wellness'],
    price: 360,
    originalPrice: 400,
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    shortDescription: 'Master processed Haritaki formulation for severe chronic gastritis, colic pain, visceral distress, dyspepsia, anemia, and hypertension.',
    shortDescriptionTa: 'தீவிர இரைப்பை அழற்சி (Gastritis), வயிற்று வலி, செரிமானமின்மை, ரத்த சோகை மற்றும் ரத்த அழுத்தத்தை சீராக்கும் பாவனாக்கடுக்காய் சூரணம்.',
    description: 'Ruthra Bhavanakadukkai Chooranam is prepared through an elaborate traditional Bhavana process where select Haritaki fruits are repeatedly soaked and macerated in fresh herbal citrus and carminative juices. It repairs gastric ulcers, stops sharp visceral spasms, stimulates iron assimilation to combat anemia, and aids blood pressure stabilization.',
    descriptionTa: 'பாவனா முறையில் பிரத்யேகமாக பக்குவம் செய்யப்பட்ட கடுக்காய் சூரணம், குடல் புண்களை ஆற்றி, கடுமையான வயிற்று வலி, அஜீரணம் மற்றும் ரத்த சோகையை போக்கும் சக்தி வாய்ந்தது.',
    traditionalRole: 'Relieves chronic gastritis, colic pain, visceral distress, dyspepsia, anemia, and hypertension.',
    traditionalRoleTa: 'இரைப்பை அழற்சி, குடல் வலி, அஜீரணம், ரத்த சோகை மற்றும் ரத்த அழுத்த சீராக்கம்.',
    badge: 'Master Gastric Tonic',
    badgeTa: 'முழுமையான இரைப்பை நலம்',
    image: '/images/products/herbal_powder_pouch.png',
    ingredients: [
      { name: 'Bhavana Kadukkai (Processed Haritaki)', tamilName: 'பாவனா கடுக்காய்', botanicalName: 'Terminalia chebula', role: 'Restores mucosal integrity and gently tones bowels', roleTa: 'குடல் புண்களை ஆற்றி பலப்படுத்தும்', amount: '60%' },
      { name: 'Elumichai Saaru (Lemon Juice Extract)', tamilName: 'எலுமிச்சை சாறு', botanicalName: 'Citrus limon', role: 'Digestive catalyst and vitamin C source', roleTa: 'செரிமானத்தை தூண்டி வைட்டமின் சி தரும்', amount: '20%' },
      { name: 'Indhuppu (Rock Salt)', tamilName: 'இந்துப்பு', botanicalName: 'Rock Salt', role: 'Dispels gas, colic spasms, and enhances Agni', roleTa: 'வாயு மற்றும் வயிற்று வலியை நீக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Open Sachet', titleTa: 'பாக்கெட்டை எடுக்கவும்', instruction: 'Take 1 sachet twice daily.', instructionTa: 'தினமும் 1 பாக்கெட் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Warm Water Mix', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Mix in 100ml warm water or light warm buttermilk.', instructionTa: '100 மி.லி வெந்நீர் அல்லது மோரில் கலக்கவும்.' },
      { step: '03', title: 'Post Meals', titleTa: 'உணவுக்குப் பின்', instruction: 'Consume 20 minutes after breakfast and dinner.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு 20 நிமிடம் பின் பருகவும்.' }
    ],
    dosage: {
      amount: '1 Sachet',
      frequency: 'Twice daily',
      timing: 'Post-prandial',
      vehicle: 'Warm water or buttermilk',
      amountTa: '1 பாக்கெட்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது மோர்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Suitable for children above 8 years in half dose.',
      childrenTa: '8 வயதுக்கு மேற்பட்டோருக்கு அரை பாக்கெட் போதுமானது.',
      interactions: 'Safe with all dietary routines.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Follow a balanced fiber-rich diet.'],
      precautionsTa: ['நார்ச்சத்து நிறைந்த உணவுகளை உட்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Keep tightly closed away from moisture.',
      conditionsTa: 'ஈரப்பதம் படாமல் மூடி வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How is Bhavanakadukkai different from regular Kadukkai powder?',
        questionTa: 'வழக்கமான கடுக்காய் பொடியை விட இது எவ்வாறு சிறந்தது?',
        answer: 'The traditional Bhavana process enhances bio-absorption and removes astringent harshness, making it much more potent for stomach ulcers.',
        answerTa: 'பாவனா முறை மூலம் கடுக்காயின் உஷ்ணம் நீக்கப்பட்டு, குடல் புண்களை ஆற்றும் திறன் பன்மடங்கு அதிகரிக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ['bhavanakadukkai', 'gastritis', 'colic pain', 'dyspepsia', 'anemia', 'hypertension', 'chooranam'],
    tamilKeywords: ['பாவனாக்கடுக்காய்', 'சூரணம்', 'இரைப்பை அழற்சி', 'வயிற்று வலி', 'அஜீரணம்', 'ரத்த சோகை'],
    inStock: true,
    featured: false
  },

  // ==========================================
  // 2. KUDINEER CHOORANAM (10 DECOCTIONS - 100GM)
  // ==========================================
  {
    id: 'prod-13',
    name: 'Ruthra Manjal Noi Kudineer Chooranam',
    tamilName: 'ருத்ரா மஞ்சள் நோய் குடிநீர் சூரணம்',
    slug: 'ruthra-manjal-noi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['digestive-wellness', 'metabolic-wellness'],
    price: 200,
    originalPrice: 230,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Authentic classical decoction for jaundice, hepatic congestion, anemia, dropsy, appetite loss, and chronic liver fatigue.',
    shortDescriptionTa: 'மஞ்சள் காமாலை, கல்லீரல் வீக்கம், ரத்த சோகை, பசியின்மை மற்றும் உடல் சோர்வை போக்கும் பாரம்பரிய கஷாய சூரணம்.',
    description: 'Ruthra Manjal Noi Kudineer Chooranam is prepared with proven hepatoprotective botanicals like Keezhanelli, Karisalai, and Nilavembu. It gently normalizes elevated serum bilirubin levels, stimulates hepatic regeneration, reduces lower abdominal pain, and combats jaundice-induced fatigue.',
    descriptionTa: 'மஞ்சள் நோய் குடிநீர் சூரணம் கீழாநெல்லி மற்றும் கரிசலாங்கண்ணி கொண்டு தயாரிக்கப்படுகிறது. இது கல்லீரலை பாதுகாத்து, மஞ்சள் காமாலையை குணமாக்கி பசியையும் உடல் வலிமையையும் மீட்கிறது.',
    traditionalRole: 'Clinically indicated for jaundice, anemia, dropsy, liver fatigue, and lower abdominal pain.',
    traditionalRoleTa: 'மஞ்சள் காமாலை, கல்லீரல் நலம், ரத்த சோகை மற்றும் பசியின்மைக்கு தீர்வு.',
    badge: 'Liver Defense',
    badgeTa: 'கல்லீரல் பாதுகாப்பு',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Keezhanelli', tamilName: 'கீழாநெல்லி', botanicalName: 'Phyllanthus niruri', role: 'Potent antiviral and hepatic cell regenerator', roleTa: 'கல்லீரல் செல்களை புதுப்பிக்கும்', amount: '40%' },
      { name: 'Karisalanganni (Bringaraja)', tamilName: 'கரிசலாங்கண்ணி', botanicalName: 'Eclipta prostrata', role: 'Bile secretion regulator and blood purifier', roleTa: 'பித்த நீரை சீராக்கி ரத்தத்தை சுத்திகரிக்கும்', amount: '30%' },
      { name: 'Seenthil (Guduchi)', tamilName: 'சீந்தில்', botanicalName: 'Tinospora cordifolia', role: 'Reduces systemic inflammation and toxicity', roleTa: 'உடல் நச்சுக்களை அகற்றும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil with Water', titleTa: 'நீரில் கொதிக்க வைக்கவும்', instruction: 'Add 5g (1 tsp) powder to 240ml (1 glass) water.', instructionTa: '5 கிராம் பொடியை 1 டம்ளர் நீரில் சேர்க்கவும்.' },
      { step: '02', title: 'Reduce to 1/4th', titleTa: 'நான்கில் ஒன்றாக சுண்ட வைக்கவும்', instruction: 'Boil and reduce down to 60ml (1/4th glass).', instructionTa: 'நான்கில் ஒரு பங்காக சுண்டக்காய்ச்சவும்.' },
      { step: '03', title: 'Filter & Drink Warm', titleTa: 'வடிகட்டி குடிக்கவும்', instruction: 'Filter and drink warm before food twice daily.', instructionTa: 'வடிகட்டி உணவுக்கு முன் வெதுவெதுப்பாக பருகவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml reduced decoction',
      frequency: 'Twice daily',
      timing: 'Empty stomach / before meals',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன் வெறும் வயிற்றில்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult Siddha physician.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Safe above 6 years (30ml decoction).',
      childrenTa: '6 வயதுக்கு மேல் 30 மி.லி போதுமானது.',
      interactions: 'Safe with standard medical care.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Follow a strictly bland, oil-free diet during jaundice recovery.'],
      precautionsTa: ['எண்ணெய் இல்லாத பத்திய உணவை பின்பற்றவும்.']
    },
    storage: {
      conditions: 'Keep in an airtight jar.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How long should this Kudineer be taken for jaundice?',
        questionTa: 'மஞ்சள் காமாலைக்கு எத்தனை நாட்கள் குடிக்க வேண்டும்?',
        answer: 'Typically taken for 7 to 14 days along with a strict dietary regimen under medical supervision.',
        answerTa: 'பொதுவாக 7 முதல் 14 நாட்கள் பத்திய உணவோடு குடிக்க பரிந்துரைக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ['manjal noi', 'jaundice', 'liver', 'kudineer', 'keezhanelli', 'hepatitis', 'dropsy'],
    tamilKeywords: ['மஞ்சள் நோய்', 'குடிநீர்', 'மஞ்சள் காமாலை', 'கல்லீரல்', 'கீழாநெல்லி', 'ரத்த சோகை'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-14',
    name: 'Ruthra Nilavembu Kudineer Chooranam',
    tamilName: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம்',
    slug: 'ruthra-nilavembu-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['respiratory'],
    price: 150,
    originalPrice: 175,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Government-recognized antiviral and antipyretic decoction for malarial fevers, bilious fevers, fevers with shivering, and dengue recovery.',
    shortDescriptionTa: 'மலேரியா, டெங்கு, குளிர் காய்ச்சல் மற்றும் வைரஸ் காய்ச்சல்களுக்கு புகழ்பெற்ற நிலவேம்பு குடிநீர் சூரணம்.',
    description: 'Ruthra Nilavembu Kudineer Chooranam is compounded from 9 classical botanical treasures led by Andrographis paniculata (Nilavembu). Renowned across Tamil Nadu as the sovereign shield against infectious fevers, it reduces severe body aches, shivering, headaches, and supports platelet stabilization.',
    descriptionTa: 'நிலவேம்பு குடிநீர் 9 வகை மூலிகைகள் சேர்ந்தது. இது உடலின் வெப்பத்தை தணித்து, நடுக்கம், தலைவலி, உடல் வலியை போக்கி காய்ச்சலில் இருந்து விரைவாக குணமடைய வைக்கிறது.',
    traditionalRole: 'Antipyretic defense for malaria, viral fevers, bilious fevers, and dengue recovery.',
    traditionalRoleTa: 'வைரஸ் காய்ச்சல், மலேரியா, நடுக்க காய்ச்சல் மற்றும் டெங்கு தடுப்பு.',
    badge: 'Fever Shield',
    badgeTa: 'காய்ச்சல் நிவாரணி',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Nilavembu (Andrographis)', tamilName: 'நிலவேம்பு', botanicalName: 'Andrographis paniculata', role: 'Supreme antipyretic and antiviral bitter', roleTa: 'காய்ச்சல் மற்றும் வைரஸ் எதிர்ப்பு', amount: '30%' },
      { name: 'Vettiver', tamilName: 'வெட்டிவேர்', botanicalName: 'Chrysopogon zizanioides', role: 'Cools internal thermal spikes', roleTa: 'உடல் சூட்டை தணிக்கும்', amount: '15%' },
      { name: 'Vilamichanver', tamilName: 'விலாமிச்சன் வேர்', botanicalName: 'Plectranthus vettiveroides', role: 'Calms fever thirst and burning eyes', roleTa: 'தாகம் மற்றும் கண் எரிச்சலை தணிக்கும்', amount: '15%' },
      { name: 'Santhanam', tamilName: 'சந்தனம்', botanicalName: 'Santalum album', role: 'Soothes blood and prevents heat stroke', roleTa: 'ரத்த கொதிப்பை தணிக்கும்', amount: '15%' },
      { name: 'Peipudal', tamilName: 'பேய்புடல்', botanicalName: 'Trichosanthes cucumerina', role: 'Relieves bilious fevers and nausea', roleTa: 'பித்த காய்ச்சலை நீக்கும்', amount: '15%' },
      { name: 'Chukku & Milagu', tamilName: 'சுக்கு & மிளகு', botanicalName: 'Zingiber & Piper', role: 'Enhances diaphoresis and digestion', roleTa: 'வியர்வை பெருக்கி சளியை போக்கும்', amount: '10%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Powder', titleTa: 'கொதிக்க வைக்கவும்', instruction: 'Take 5g powder in 240ml water.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் சேர்க்கவும்.' },
      { step: '02', title: 'Reduce to 60ml', titleTa: 'சுண்ட வைக்கவும்', instruction: 'Boil down to one-fourth (60ml).', instructionTa: 'நான்கில் ஒன்றாக (60 மி.லி) சுண்டக்காய்ச்சவும்.' },
      { step: '03', title: 'Drink Twice Daily', titleTa: 'இருவேளை பருகவும்', instruction: 'Drink warm on an empty stomach.', instructionTa: 'வெதுவெதுப்பாக உணவுக்கு முன் பருகவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml reduced decoction',
      frequency: 'Twice daily',
      timing: 'Pre-prandial',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult Siddha physician.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Children 3-12 years: 25ml - 30ml decoction.',
      childrenTa: '3-12 வயது குழந்தைகளுக்கு 25-30 மி.லி போதுமானது.',
      interactions: 'Safe with standard medical therapies.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Drink freshly boiled warm decoction.'],
      precautionsTa: ['புதிதாக காய்ச்சிய கஷாயத்தை பருகவும்.']
    },
    storage: {
      conditions: 'Store in an airtight moisture-free pouch.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can Nilavembu Kudineer be taken as a preventive for viral fevers?',
        questionTa: 'காய்ச்சல் வராமல் தடுக்க இதை முன்னெச்சரிக்கையாக குடிக்கலாமா?',
        answer: 'Yes, taking it once weekly during seasonal transitions strengthens broad-spectrum viral immunity.',
        answerTa: 'ஆம், பருவ கால மாற்றங்களின் போது வாரம் ஒருமுறை குடிப்பது நோய் எதிர்ப்பாற்றலை தரும்.'
      }
    ],
    searchKeywords: ['nilavembu', 'kudineer', 'fever', 'dengue', 'malaria', 'viral fever', 'andrographis'],
    tamilKeywords: ['நிலவேம்பு', 'குடிநீர்', 'காய்ச்சல்', 'டெங்கு', 'மலேரியா', 'வைரஸ் காய்ச்சல்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-15',
    name: 'Ruthra Kalladaipu Kudineer Chooranam',
    tamilName: 'ருத்ரா கல்லடைப்பு குடிநீர் சூரணம்',
    slug: 'ruthra-kalladaipu-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['metabolic-wellness'],
    price: 200,
    originalPrice: 230,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Potent lithotriptic decoction to disintegrate kidney stones, promote abundant diuresis, and stop burning micturition.',
    shortDescriptionTa: 'சிறுநீரக கற்களை (Renal Stones) கரைக்கவும், சிறுநீர் எரிச்சலை நீக்கி தாராளமாக பிரியவும் உதவும் உன்னத குடிநீர்.',
    description: 'Ruthra Kalladaipu Kudineer Chooranam is compounded from revered lithotriptic plants including Sirupeelai, Nerunjil, and Mookirattai. It breaks down crystalline oxalate and urate deposits into fine gravel, lubricates the ureteric channels, and prevents recurrent stone formation.',
    descriptionTa: 'கல்லடைப்பு குடிநீர் சிறுபீளை, நெருஞ்சில், மூக்கிரட்டை கொண்டு தயாரிக்கப்படுகிறது. இது சிறுநீரக கற்களை உடைத்து கரைத்து வெளியேற்றி, சிறுநீர் கழிக்கும் போது ஏற்படும் கடுமையான வலியை நீக்குகிறது.',
    traditionalRole: 'Renal calculus, lithotriptic action, increases urine output, and eases burning micturition.',
    traditionalRoleTa: 'சிறுநீரக கல் கரைப்பு, சிறுநீர் எரிச்சல் நீக்கம் மற்றும் சிறுநீர் பெருக்குதல்.',
    badge: 'Kidney Stone Care',
    badgeTa: 'சிறுநீரக கல் கரைப்பு',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Sirupeelai (Mountain Knotgrass)', tamilName: 'சிறுபீளை', botanicalName: 'Aerva lanata', role: 'Master lithotriptic herb that dissolves stones', roleTa: 'சிறுநீரக கற்களை கரைக்கும் முதன்மை மூலிகை', amount: '40%' },
      { name: 'Nerunjil (Small Caltrops)', tamilName: 'நெருஞ்சில்', botanicalName: 'Tribulus terrestris', role: 'Diuretic and soothes urinary mucosa', roleTa: 'சிறுநீர் பெருக்கி மற்றும் எரிச்சல் தணிக்கும்', amount: '30%' },
      { name: 'Mookirattai (Punarnava)', tamilName: 'மூக்கிரட்டை', botanicalName: 'Boerhavia diffusa', role: 'Reduces renal edema and flushing toxins', roleTa: 'சிறுநீரக வீக்கத்தை குறைக்கும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g in 240ml water until reduced to 60ml.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் இட்டு 60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '02', title: 'Filter Warm', titleTa: 'வடிகட்டவும்', instruction: 'Strain and drink warm on an empty stomach.', instructionTa: 'வடிகட்டி வெறும் வயிற்றில் குடிக்கவும்.' },
      { step: '03', title: 'Hydrate Well', titleTa: 'தண்ணீர் குடிக்கவும்', instruction: 'Drink 3+ litres of water throughout the day.', instructionTa: 'நாள் முழுவதும் 3 லிட்டருக்கு மேல் தண்ணீர் குடிக்கவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Empty stomach (Morning & Evening)',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'வெறும் வயிற்றில்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Not intended for young children.',
      childrenTa: 'சிறார்களுக்கு பரிந்துரைக்கப்படுவதில்லை.',
      interactions: 'Safe with allopathic antibiotics.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Maintain high daily water and coconut water intake.'],
      precautionsTa: ['இளநீர் மற்றும் தண்ணீர் அதிகம் குடிக்கவும்.']
    },
    storage: {
      conditions: 'Keep tightly sealed in a cool, dry place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How long should I take this to clear kidney stones?',
        questionTa: 'சிறுநீரக கல் கரைய எத்தனை நாட்கள் குடிக்க வேண்டும்?',
        answer: 'Usually taken for 21 to 30 days along with plenty of fluid intake.',
        answerTa: 'வழக்கமாக 21 முதல் 30 நாட்கள் போதுமான தண்ணீருடன் குடிக்க பரிந்துரைக்கப்படுகிறது.'
      }
    ],
    searchKeywords: ['kalladaipu', 'kidney stone', 'lithotriptic', 'kudineer', 'sirupeelai', 'nerunjil', 'burning urine'],
    tamilKeywords: ['கல்லடைப்பு', 'குடிநீர்', 'சிறுநீரக கல்', 'சிறுநீர் எரிச்சல்', 'சிறுபீளை', 'நெருஞ்சில்'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-16',
    name: 'Ruthra Nochi Kudineer Chooranam',
    tamilName: 'ருத்ரா நொச்சி குடிநீர் சூரணம்',
    slug: 'ruthra-nochi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['respiratory'],
    price: 240,
    originalPrice: 270,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Time-tested aromatic decoction for severe productive cough, sinus headache, seasonal fevers, and bronchial asthma.',
    shortDescriptionTa: 'விடாத சளி, இருமல், ஆஸ்துமா, சைனஸ் தலைபாரம் மற்றும் காய்ச்சலை போக்கும் நொச்சி குடிநீர் சூரணம்.',
    description: 'Ruthra Nochi Kudineer Chooranam is formulated with Vitex negundo (Nochi) alongside Adathodai and Thulasi. It clears accumulated mucus from the bronchioles, relieves congestive sinus pressure, soothes persistent coughing spasms, and reduces inflammation across respiratory airways.',
    descriptionTa: 'நொச்சி இலை, ஆடாதோடை மற்றும் துளசி கொண்டு தயாரிக்கப்படும் நொச்சி குடிநீர், நெஞ்சு சளியை முழுமையாக வெளியேற்றி, சைனஸ் தலைபாரம், மூக்கடைப்பு மற்றும் இருமலை குணமாக்கும்.',
    traditionalRole: 'Indicated for cough, fever, bronchial asthma, and sinus headache relief.',
    traditionalRoleTa: 'இருமல், காய்ச்சல், ஆஸ்துமா மற்றும் சைனஸ் தலைபாரம் நீக்கம்.',
    badge: 'Sinus & Phlegm Clear',
    badgeTa: 'சளி & சைனஸ் நிவாரணம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Nochi (Five-Leaved Chaste Tree)', tamilName: 'நொச்சி', botanicalName: 'Vitex negundo', role: 'Supreme mucolytic and sinus decongestant', roleTa: 'சளியை இளக்கி சைனஸ் பாரத்தை நீக்கும்', amount: '45%' },
      { name: 'Adathodai (Malabar Nut)', tamilName: 'ஆடாதோடை', botanicalName: 'Justicia adhatoda', role: 'Bronchodilator and eases breathing', roleTa: 'சுவாச குழாயை விரிவடைய செய்து மூச்சு விட உதவும்', amount: '30%' },
      { name: 'Thulasi (Holy Basil)', tamilName: 'துளசி', botanicalName: 'Ocimum sanctum', role: 'Antiviral and respiratory immunity', roleTa: 'வைரஸ் எதிர்ப்பு மற்றும் நோய் எதிர்ப்பு', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil 5g Powder', titleTa: '5 கிராம் பொடி', instruction: 'Boil 5g powder in 240ml water.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் சேர்க்கவும்.' },
      { step: '02', title: 'Reduce to 1/4th', titleTa: 'சுண்ட வைக்கவும்', instruction: 'Simmer until reduced to 60ml.', instructionTa: '60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '03', title: 'Drink Warm with Honey', titleTa: 'தேனுடன் பருகவும்', instruction: 'Strain and add 1 tsp honey if desired.', instructionTa: 'வடிகட்டி விருப்பப்பட்டால் தேன் சேர்த்து குடிக்கவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Post-prandial',
      vehicle: 'Warm decoction with honey',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult physician.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Safe above 5 years (25ml decoction).',
      childrenTa: '5 வயதுக்கு மேல் 25 மி.லி போதுமானது.',
      interactions: 'Safe with all traditional preparations.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Can also be used for steam inhalation.'],
      precautionsTa: ['ஆவி பிடிக்கவும் பயன்படுத்தலாம்.']
    },
    storage: {
      conditions: 'Keep in an airtight container.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can this Kudineer be used for steam inhalation?',
        questionTa: 'இதை ஆவி பிடிக்க பயன்படுத்தலாமா?',
        answer: 'Yes, inhaling steam while boiling Nochi Kudineer provides dramatic relief from sinus congestion.',
        answerTa: 'ஆம், நொச்சி குடிநீரை கொதிக்க வைத்து ஆவி பிடிக்கும் போது தலைபாரம் உடனடியாக நீங்கும்.'
      }
    ],
    searchKeywords: ['nochi', 'kudineer', 'cough', 'asthma', 'sinus', 'headache', 'adathodai', 'phlegm'],
    tamilKeywords: ['நொச்சி', 'குடிநீர்', 'இருமல்', 'ஆஸ்துமா', 'சைனஸ்', 'தலைபாரம்', 'நெஞ்சு சளி'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-17',
    name: 'Ruthra Pidangunaari Kudineer Chooranam',
    tamilName: 'ருத்ரா பிடங்குநாரி குடிநீர் சூரணம்',
    slug: 'ruthra-pidangunaari-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['digestive-wellness'],
    price: 240,
    originalPrice: 275,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Targeted visceral decoction for hepatomegaly (liver enlargement), splenomegaly (spleen disorders), and chronic hepatitis.',
    shortDescriptionTa: 'கல்லீரல் வீக்கம், மண்ணீரல் வீக்கம் மற்றும் ஹெபடைடிஸ் கல்லீரல் அழற்சிக்கு உன்னத குடிநீர் சூரணம்.',
    description: 'Ruthra Pidangunaari Kudineer Chooranam is compounded from rare Siddha plants traditionally used to resolve visceral organ hypertrophy. It decongests sluggish liver and spleen parenchyma, enhances micro-circulation in the portal system, and resolves abdominal fullness and dragging discomfort.',
    descriptionTa: 'பிடங்குநாரி குடிநீர் கல்லீரல் மற்றும் மண்ணீரல் வீக்கத்தை குறைத்து, செரிமான ஆற்றலை சீராக்கவும், அடிவயிற்று கனத்தை போக்கவும் உதவும் பிரத்யேக தயாரிப்பு.',
    traditionalRole: 'Indicated for hepatomegaly, splenomegaly, hepatitis, and chronic spleen congestion.',
    traditionalRoleTa: 'கல்லீரல் மற்றும் மண்ணீரல் வீக்கம், அழற்சி மற்றும் செரிமான மந்தம்.',
    badge: 'Hepato-Splenic Care',
    badgeTa: 'கல்லீரல் & மண்ணீரல் நலம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Pidangunaari', tamilName: 'பிடங்குநாரி', botanicalName: 'Premna tomentosa', role: 'Decongests hepatic and splenic parenchyma', roleTa: 'கல்லீரல் மற்றும் மண்ணீரல் வீக்கத்தை குறைக்கும்', amount: '50%' },
      { name: 'Karisalai', tamilName: 'கரிசாலை', botanicalName: 'Eclipta alba', role: 'Restores healthy liver cell metabolism', roleTa: 'கல்லீரல் செல்களை தேற்றும்', amount: '25%' },
      { name: 'Keezhanelli', tamilName: 'கீழாநெல்லி', botanicalName: 'Phyllanthus niruri', role: 'Antiviral protection for hepatocytes', roleTa: 'கல்லீரல் வைரஸ் பாதுகாப்பு', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g in 240ml water down to 60ml.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் இட்டு 60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '02', title: 'Filter', titleTa: 'வடிகட்டவும்', instruction: 'Filter through a clean cloth or strainer.', instructionTa: 'சுத்தமான வடிகட்டியில் வடிகட்டவும்.' },
      { step: '03', title: 'Drink Pre-meal', titleTa: 'உணவுக்கு முன் பருகவும்', instruction: 'Drink warm 30 minutes before food twice daily.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு முன் பருகவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Pre-prandial',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult physician.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Not advised for young children below 8 years.',
      childrenTa: '8 வயதுக்கு கீழ் தவிர்க்கவும்.',
      interactions: 'Safe with standard liver supplements.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Avoid heavy fatty foods and alcohol.'],
      precautionsTa: ['அதிக கொழுப்பு உணவுகளை தவிர்க்கவும்.']
    },
    storage: {
      conditions: 'Keep in an airtight jar.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'What symptoms indicate Pidangunaari Kudineer?',
        questionTa: 'இந்த குடிநீர் எந்த அறிகுறிகளுக்கு பயன்படும்?',
        answer: 'Upper abdominal dragging sensation, enlarged liver/spleen confirmed on ultrasound, and sluggish digestion.',
        answerTa: 'கல்லீரல் அல்லது மண்ணீரல் வீக்கம் மற்றும் அடிவயிற்று பாரத்திற்கு பயன்படும்.'
      }
    ],
    searchKeywords: ['pidangunaari', 'hepatomegaly', 'splenomegaly', 'hepatitis', 'spleen', 'liver enlargement'],
    tamilKeywords: ['பிடங்குநாரி', 'குடிநீர்', 'கல்லீரல் வீக்கம்', 'மண்ணீரல் வீக்கம்', 'கல்லீரல் நலம்'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-18',
    name: 'Ruthra Soodhagathai Udaikkum Kudineer Chooranam',
    tamilName: 'ருத்ரா சூதகத்தை உடைக்கும் குடிநீர் சூரணம்',
    slug: 'ruthra-soodhagathai-udaikkum-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['womens-wellness'],
    price: 200,
    originalPrice: 230,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Foremost Siddha gynecological decoction for amenorrhea, dysmenorrhea (painful cramps), PCOS/PCOD, and hormonal cycle irregularity.',
    shortDescriptionTa: 'மாதவிடாய் தடை, கடுமையான வயிற்று வலி, பிசிஓடி (PCOS/PCOD) மற்றும் மாதவிடாய் சுழற்சி கோளாறுகளுக்கு நிவாரணம் தரும் சூரணம்.',
    description: 'Ruthra Soodhagathai Udaikkum Kudineer Chooranam ("Cycle Restorer") is traditionally formulated to break menstrual stagnation. It stimulates healthy uterine blood flow, clears ovarian follicular cystic stagnation, dissolves clots, and relieves lower back and pelvic pain during monthly cycles.',
    descriptionTa: 'சூதகத்தை உடைக்கும் குடிநீர் பெண்களின் தடைபட்ட மாதவிடாயை சீராக்கி, பிசிஓடி நீர்க்கட்டிகளை கரைக்கவும், மாதவிடாய் காலத்தில் ஏற்படும் அடிவயிற்று வலியை போக்கவும் உதவுகிறது.',
    traditionalRole: 'Regulates menstrual cycles, relieves amenorrhea, dysmenorrhea, and supports PCOS management.',
    traditionalRoleTa: 'மாதவிடாய் சுழற்சி சீராக்கம், மாதவிடாய் வலி நீக்கம் மற்றும் பிசிஓடி நலம்.',
    badge: 'Uterine Rhythm',
    badgeTa: 'மாதவிடாய் சீராக்கி',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Kattuvazhai', tamilName: 'காட்டுவாழை', botanicalName: 'Ensete superbum', role: 'Uterine tonic and cycle regularizer', roleTa: 'கர்ப்பப்பை தசைகளை பலப்படுத்தும்', amount: '40%' },
      { name: 'Maruthampattai (Arjuna Bark)', tamilName: 'மருதம்பட்டை', botanicalName: 'Terminalia arjuna', role: 'Improves pelvic micro-circulation', roleTa: 'கருப்பை ரத்த ஓட்டத்தை சீராக்கும்', amount: '30%' },
      { name: 'Perungayam (Asafoetida)', tamilName: 'பெருங்காயம்', botanicalName: 'Ferula foetida', role: 'Relieves uterine spasms and menstrual cramps', roleTa: 'கருப்பை தசை பிடிப்பை நீக்கும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g in 240ml water down to 60ml.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் இட்டு 60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '02', title: 'Filter Warm', titleTa: 'வடிகட்டவும்', instruction: 'Strain and drink warm before food.', instructionTa: 'வடிகட்டி உணவுக்கு முன் வெதுவெதுப்பாக குடிக்கவும்.' },
      { step: '03', title: 'Cycle Timing', titleTa: 'சுழற்சி நேரம்', instruction: 'Start 5 days prior to expected period date.', instructionTa: 'மாதவிடாய் தேதிக்கு 5 நாட்களுக்கு முன்னதாக தொடங்கவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Pre-prandial',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'STRICTLY CONTRAINDICATED IN PREGNANCY (Do not use if pregnant).',
      pregnancyTa: 'கர்ப்ப காலத்தில் முற்றிலும் உட்கொள்ளக் கூடாது.',
      children: 'Not intended for prepubertal children.',
      childrenTa: 'சிறார்களுக்கு பரிந்துரைக்கப்படுவதில்லை.',
      interactions: 'Safe with other hormonal therapies.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Stop usage once normal menstrual flow begins.'],
      precautionsTa: ['மாதவிடாய் உதிரப்போக்கு தொடங்கியவுடன் நிறுத்தவும்.']
    },
    storage: {
      conditions: 'Keep in a cool and dry location.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'When should I start taking Soodhagathai Udaikkum Kudineer?',
        questionTa: 'இதை எப்போது குடிக்க தொடங்க வேண்டும்?',
        answer: 'Take twice daily for 5-7 days prior to your expected menstrual date, or as advised by your Siddha physician for PCOS.',
        answerTa: 'மாதவிடாய் வர வேண்டிய தேதிக்கு 5-7 நாட்களுக்கு முன்னதாக குடிக்க தொடங்கவும்.'
      }
    ],
    searchKeywords: ['soodhagathai', 'pcos', 'pcod', 'amenorrhea', 'dysmenorrhea', 'menstrual cramps', 'period delay'],
    tamilKeywords: ['சூதகத்தை உடைக்கும்', 'குடிநீர்', 'பிசிஓடி', 'மாதவிடாய் வலி', 'மாதவிடாய் சுழற்சி', 'பெண்கள் நலம்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-19',
    name: 'Ruthra Vathasura Kudineer Chooranam',
    tamilName: 'ருத்ரா வாதசுர குடிநீர் சூரணம்',
    slug: 'ruthra-vathasura-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['joint-mobility', 'respiratory'],
    price: 240,
    originalPrice: 270,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Specialized decoction for fevers with joint pain, Parkinsonism tremors, rheumatoid aches, and acute aggravated Vatha states.',
    shortDescriptionTa: 'மூட்டு வலியுடன் கூடிய காய்ச்சல், வாத நடுக்கம், மூட்டு வாதம் மற்றும் உடல் நடுக்கத்திற்கு நிவாரணம் தரும் குடிநீர்.',
    description: 'Ruthra Vathasura Kudineer Chooranam is compounded for fevers driven by aggravated Vatha dosha accompanied by acute body aches, joint swelling, shivering, and muscular stiffness. It calms neuromuscular tremors, restores mobility, and brings down fevers.',
    descriptionTa: 'வாதசுர குடிநீர் கடுமையான மூட்டு வலி, உடல் நடுக்கம், வாத காய்ச்சல் மற்றும் பார்கின்சன் போன்ற நரம்பு தளர்ச்சி உபாதைகளை போக்க உதவும் உன்னத மருந்து.',
    traditionalRole: 'Indicated for Vatha fevers, Parkinsonism, arthritis, rheumatism, and acute joint aches.',
    traditionalRoleTa: 'வாத காய்ச்சல், மூட்டு வாதம், நடுக்கம் மற்றும் நரம்பு வலி நிவாரணம்.',
    badge: 'Vatha Fever Relief',
    badgeTa: 'வாத சுர நிவாரணி',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Mudakathan (Balloon Vine)', tamilName: 'முடக்கத்தான்', botanicalName: 'Cardiospermum halicacabum', role: 'Master anti-rheumatic and vatha pacifier', roleTa: 'வாதத்தை முடக்கும் உன்னத மூலிகை', amount: '40%' },
      { name: 'Chithiramoolam', tamilName: 'சித்திரமூலம்', botanicalName: 'Plumbago zeylanica', role: 'Ignites metabolic fire and clears deep joint pain', roleTa: 'மூட்டு வலிகளை நீக்கும்', amount: '30%' },
      { name: 'Amukkara (Ashwagandha)', tamilName: 'அமுக்கரா', botanicalName: 'Withania somnifera', role: 'Relieves tremors and strengthens nerve conductivity', roleTa: 'நரம்பு பலம் மற்றும் நடுக்கம் போக்கும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g in 240ml water down to 60ml.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் இட்டு 60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '02', title: 'Filter', titleTa: 'வடிகட்டவும்', instruction: 'Filter and drink warm.', instructionTa: 'வடிகட்டி வெதுவெதுப்பாக பருகவும்.' },
      { step: '03', title: 'Twice Daily', titleTa: 'இருவேளை', instruction: 'Drink before food morning and night.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு முன் குடிக்கவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Pre-prandial',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult physician.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Suitable above 8 years under supervision.',
      childrenTa: '8 வயதுக்கு மேற்பட்டோருக்கு உகந்தது.',
      interactions: 'Safe with topical pain oils.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Keep the body warm and avoid cold water baths.'],
      precautionsTa: ['வெந்நீரில் குளிக்கவும்; உடல் சூட்டை பராமரிக்கவும்.']
    },
    storage: {
      conditions: 'Keep in an airtight jar away from moisture.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this help with viral fever body aches and joint pain?',
        questionTa: 'வைரஸ் காய்ச்சலுக்கு பின் வரும் மூட்டு வலிக்கு இது உதவுமா?',
        answer: 'Yes, it is extremely beneficial for post-viral arthralgia and joint stiffness.',
        answerTa: 'ஆம், காய்ச்சலுக்கு பின் ஏற்படும் மூட்டு வலி மற்றும் நரம்பு சோர்வுக்கு மிகவும் நல்லது.'
      }
    ],
    searchKeywords: ['vathasura', 'vatha fever', 'parkinsonism', 'rheumatism', 'arthritis', 'joint pain', 'kudineer'],
    tamilKeywords: ['வாதசுர', 'குடிநீர்', 'வாத காய்ச்சல்', 'மூட்டு வலி', 'நடுக்கம்', 'மூட்டு வீக்கம்'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-20',
    name: 'Ruthra Pitha Sura Kudineer Chooranam',
    tamilName: 'ருத்ரா பித்த சுர குடிநீர் சூரணம்',
    slug: 'ruthra-pitha-sura-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['respiratory', 'digestive-wellness'],
    price: 162,
    originalPrice: 190,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Cooling antipyretic decoction for fevers due to aggravated Pitta, high body heat, burning eyes, and hyperpyrexia.',
    shortDescriptionTa: 'பித்த காய்ச்சல், கண் எரிச்சல், அதீத உடல் உஷ்ணம் மற்றும் நாவறட்சியை தணிக்கும் பித்த சுர குடிநீர் சூரணம்.',
    description: 'Ruthra Pitha Sura Kudineer Chooranam cools systemic inflammatory heat caused by exacerbated Pitta dosha. It reduces burning sensation across the eyes and extremities, stops bitter vomiting and bilious diarrhea, and normalizes high body temperatures safely.',
    descriptionTa: 'பித்த சுர குடிநீர் உடலின் பித்தத்தை சமன் செய்து, அதிக காய்ச்சல், கண் எரிச்சல், கசப்பு வாந்தி மற்றும் பித்த மயக்கத்தை நீக்க உதவும் பாரம்பரிய குடிநீர்.',
    traditionalRole: 'Indicated for Pitta fevers, hyperpyrexia, eye burning, and excess body heat.',
    traditionalRoleTa: 'பித்த காய்ச்சல், உடல் உஷ்ணம், கண் எரிச்சல் மற்றும் பித்த வாந்தி நீக்கம்.',
    badge: 'Pitta Fever Cooling',
    badgeTa: 'பித்த சுர தணிப்பு',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Santhanam (Sandalwood)', tamilName: 'சந்தனம்', botanicalName: 'Santalum album', role: 'Calms fever heat and blood toxicity', roleTa: 'உடல் உஷ்ணம் மற்றும் ரத்த கொதிப்பை தணிக்கும்', amount: '35%' },
      { name: 'Vettiver', tamilName: 'வெட்டிவேர்', botanicalName: 'Chrysopogon zizanioides', role: 'Restores tissue cooling and halts thirst', roleTa: 'அளவுக்கு அதிகமான தாகத்தை தணிக்கும்', amount: '35%' },
      { name: 'Kothumalli (Coriander)', tamilName: 'கொத்தமல்லி', botanicalName: 'Coriandrum sativum', role: 'Pacifies bile and eases burning sensations', roleTa: 'பித்தத்தை சமன் செய்யும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil 5g', titleTa: '5 கிராம் பொடி', instruction: 'Boil 5g powder in 240ml water down to 60ml.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் இட்டு 60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '02', title: 'Filter', titleTa: 'வடிகட்டவும்', instruction: 'Filter and let cool to lukewarm.', instructionTa: 'வடிகட்டி வெதுவெதுப்பாக ஆற வைக்கவும்.' },
      { step: '03', title: 'Drink Pre-meal', titleTa: 'உணவுக்கு முன்', instruction: 'Drink twice daily before meals.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு முன் குடிக்கவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Pre-prandial',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult physician.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Safe above 4 years (25ml decoction).',
      childrenTa: '4 வயதுக்கு மேல் 25 மி.லி போதுமானது.',
      interactions: 'Safe with all therapies.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Drink tender coconut water for added hydration.'],
      precautionsTa: ['இளநீர் அதிகம் குடிக்கவும்.']
    },
    storage: {
      conditions: 'Store in a dry location.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How does it help during high fever with burning eyes?',
        questionTa: 'கண் எரிச்சலுடன் கூடிய காய்ச்சலுக்கு இது எவ்வாறு உதவுகிறது?',
        answer: 'Sandalwood and Vetiver naturally eliminate deep vascular heat, cooling the eyes and nervous system.',
        answerTa: 'சந்தனம் மற்றும் வெட்டிவேர் ரத்தத்தின் வெப்பத்தை குறைத்து கண் எரிச்சலை உடனடியாக தணிக்கும்.'
      }
    ],
    searchKeywords: ['pitha sura', 'pitta fever', 'body heat', 'burning eyes', 'hyperpyrexia', 'kudineer'],
    tamilKeywords: ['பித்த சுர', 'குடிநீர்', 'பித்த காய்ச்சல்', 'கண் எரிச்சல்', 'உடல் உஷ்ணம்', 'பித்த வாந்தி'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-21',
    name: 'Ruthra Malattu Karpa Kudineer Chooranam',
    tamilName: 'ருத்ரா மலட்டு கர்ப்ப குடிநீர் சூரணம்',
    slug: 'ruthra-malattu-karpa-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['womens-wellness', 'metabolic-wellness'],
    price: 210,
    originalPrice: 240,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Esteemed conception and fertility booster decoction for both male and female reproductive vitality and uterine readiness.',
    shortDescriptionTa: 'ஆண் மற்றும் பெண் கருத்தரிப்பு திறனை அதிகரிக்கவும், கர்ப்பப்பையை வலுப்படுத்தவும் உதவும் உன்னத மலட்டு கர்ப்ப குடிநீர்.',
    description: 'Ruthra Malattu Karpa Kudineer Chooranam is formulated following ancient Siddha texts on Garbha Raksha and Rasayana therapy. It cleanses the fallopian and uterine pathways, balances reproductive hormones, nourishes ovum development, and enhances sperm motility and viability.',
    descriptionTa: 'மலட்டு கர்ப்ப குடிநீர் தம்பதியர் கருத்தரிக்கும் ஆற்றலை பெருக்கவும், கர்ப்பப்பை நச்சுக்களை நீக்கி பலப்படுத்தவும், விந்தணு மற்றும் சினை முட்டை தரத்தை உயர்த்தவும் உதவும் பாரம்பரிய தயாரிப்பு.',
    traditionalRole: 'Boosts male and female fertility, supports uterine readiness, and promotes healthy conception.',
    traditionalRoleTa: 'கருத்தரிப்பு ஆதரவு, விந்தணு மற்றும் சினை முட்டை வளர்ச்சி, கர்ப்பப்பை பலம்.',
    badge: 'Fertility & Conception',
    badgeTa: 'கருத்தரிப்பு & கர்ப்பப்பை பலம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Thaneervittan Kizhangu (Shatavari)', tamilName: 'தண்ணீர்விட்டான்', botanicalName: 'Asparagus racemosus', role: 'Nourishes female ovarian follicles and endometrium', roleTa: 'சினை முட்டை வளர்ச்சி மற்றும் கர்ப்பப்பை பலம்', amount: '35%' },
      { name: 'Poonaikali Vidhai', tamilName: 'பூனைக்காலி விதை', botanicalName: 'Mucuna pruriens', role: 'Boosts male sperm count, vitality, and libido', roleTa: 'விந்தணு உற்பத்தி மற்றும் தாது புஷ்டி', amount: '35%' },
      { name: 'Seenthil (Guduchi)', tamilName: 'சீந்தில்', botanicalName: 'Tinospora cordifolia', role: 'Clears metabolic toxins from reproductive channels', roleTa: 'கருப்பாதை நச்சுக்களை நீக்கும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g in 240ml water down to 60ml.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் இட்டு 60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '02', title: 'Filter Warm', titleTa: 'வடிகட்டவும்', instruction: 'Strain and drink warm before food.', instructionTa: 'வடிகட்டி உணவுக்கு முன் பருகவும்.' },
      { step: '03', title: 'Couple Therapy', titleTa: 'இருவரும் உட்கொள்ளலாம்', instruction: 'Can be consumed by both partners.', instructionTa: 'தம்பதியர் இருவரும் தொடர்ந்து உட்கொள்ளலாம்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Pre-prandial',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Discontinue once pregnancy is clinically confirmed.',
      pregnancyTa: 'கர்ப்பம் உறுதியான பின் உட்கொள்வதை நிறுத்தவும்.',
      children: 'Not intended for children.',
      childrenTa: 'சிறார்களுக்கு அல்ல.',
      interactions: 'Safe with nutritional vitamins.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Follow a healthy balanced diet with fresh fruits and nuts.'],
      precautionsTa: ['சத்தான பழங்கள் மற்றும் உலர் பருப்புகளுடன் உட்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Keep in an airtight jar away from dampness.',
      conditionsTa: 'ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can both husband and wife take this Kudineer?',
        questionTa: 'கணவன் மனைவி இருவரும் இதை குடிக்கலாமா?',
        answer: 'Yes, it contains balanced botanicals that support both spermatogenesis and healthy ovulation.',
        answerTa: 'ஆம், இருவரின் இனப்பெருக்க உறுப்புகளையும் வலுப்படுத்த உகந்தது.'
      }
    ],
    searchKeywords: ['malattu karpa', 'fertility', 'conception', 'pregnancy support', 'sperm count', 'ovulation', 'kudineer'],
    tamilKeywords: ['மலட்டு கர்ப்ப', 'குடிநீர்', 'கருத்தரிப்பு', 'கர்ப்பப்பை பலம்', 'விந்தணு பெருக்கம்', 'சினை முட்டை'],
    inStock: true,
    featured: false
  },
  {
    id: 'prod-22',
    name: 'Ruthra Mandoorathi Kudineer Chooranam',
    tamilName: 'ருத்ரா மண்டூராதி குடிநீர் சூரணம்',
    slug: 'ruthra-mandoorathi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    concerns: ['metabolic-wellness', 'digestive-wellness'],
    price: 180,
    originalPrice: 210,
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    shortDescription: 'Classical iron-enhancing and anti-edema decoction for chronic anemia, dropsy, ascites, and liver-spleen enlargement.',
    shortDescriptionTa: 'ரத்த சோகை (Anemia), உடல் வீக்கம் (Edema), மகோதரம் (Ascites) மற்றும் கல்லீரல் மண்ணீரல் கோளாறுகளுக்கு உன்னத குடிநீர்.',
    description: 'Ruthra Mandoorathi Kudineer Chooranam is compounded with purified Mandooram (iron ore derivative) synergy and herbal catalysts. It stimulates red blood cell production, increases hemoglobin levels, flushes interstitial fluid edema from the legs and abdomen, and decongests hepatic tissues.',
    descriptionTa: 'மண்டூராதி குடிநீர் ரத்த சிவப்பணுக்களை பெருக்கி, ரத்த சோகையை போக்கி, கை கால் மற்றும் முக வீக்கங்களை வடிய வைக்க உதவும் பாரம்பரிய சித்த தயாரிப்பு.',
    traditionalRole: 'Indicated for anemia, dropsy, edema, ascites, and liver and spleen disorders.',
    traditionalRoleTa: 'ரத்த சோகை, உடல் வீக்கம், நீர்க்கோர்வை மற்றும் கல்லீரல் மண்ணீரல் பலவீனம்.',
    badge: 'Anemia & Edema Care',
    badgeTa: 'ரத்த சோகை & வீக்கம் நீக்கம்',
    image: '/images/products/kudineer-pack.svg',
    ingredients: [
      { name: 'Ayakaantha / Mandoora Synergy', tamilName: 'மண்டூரம்', botanicalName: 'Purified Iron Calx synergy', role: 'Bio-available iron donor for hemoglobin synthesis', roleTa: 'ரத்தத்தில் ஹீமோகுளோபின் அளவை உயர்த்தும்', amount: '35%' },
      { name: 'Thiripala (Triphala)', tamilName: 'திரிபலா', botanicalName: 'Triphala blend', role: 'Enhances iron uptake and eliminates edema', roleTa: 'வீக்கத்தை வடிய வைத்து கழிவுகளை நீக்கும்', amount: '35%' },
      { name: 'Chukku (Dry Ginger)', tamilName: 'சுக்கு', botanicalName: 'Zingiber officinale', role: 'Ignites metabolic absorption fire', roleTa: 'செரிமானத்தை சீராக்கும்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Boil Decoction', titleTa: 'கஷாயம் காய்ச்சவும்', instruction: 'Boil 5g in 240ml water down to 60ml.', instructionTa: '5 கிராம் பொடியை 240 மி.லி நீரில் இட்டு 60 மி.லி ஆக சுண்டக்காய்ச்சவும்.' },
      { step: '02', title: 'Filter', titleTa: 'வடிகட்டவும்', instruction: 'Filter and drink warm.', instructionTa: 'வடிகட்டி வெதுவெதுப்பாக பருகவும்.' },
      { step: '03', title: 'Twice Daily', titleTa: 'இருவேளை', instruction: 'Drink before breakfast and dinner.', instructionTa: 'காலை மற்றும் இரவு உணவுக்கு முன் குடிக்கவும்.' }
    ],
    dosage: {
      amount: '50ml - 60ml decoction',
      frequency: 'Twice daily',
      timing: 'Pre-prandial',
      vehicle: 'Warm decoction',
      amountTa: '50 - 60 மி.லி கஷாயம்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்கு முன்',
      vehicleTa: 'வெதுவெதுப்பான கஷாயம்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Suitable above 6 years (25ml decoction).',
      childrenTa: '6 வயதுக்கு மேல் 25 மி.லி போதுமானது.',
      interactions: 'Safe with dietary iron supplements.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Take with meals if mild gastric sensitivity occurs.'],
      precautionsTa: ['உணவுக்குப் பின்னும் உட்கொள்ளலாம்.']
    },
    storage: {
      conditions: 'Store in a dry location.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'How quickly does it improve hemoglobin levels in anemia?',
        questionTa: 'ஹீமோகுளோபின் அளவு எத்தனை நாட்களில் உயரும்?',
        answer: 'Noticeable improvement in energy and hemoglobin is typically observed within 3 to 4 weeks of consistent therapy.',
        answerTa: '3 முதல் 4 வாரங்களில் ரத்த சோகை நீங்கி உற்சாகம் ஏற்படும்.'
      }
    ],
    searchKeywords: ['mandoorathi', 'anemia', 'edema', 'dropsy', 'hemoglobin', 'ascites', 'kudineer'],
    tamilKeywords: ['மண்டூராதி', 'குடிநீர்', 'ரத்த சோகை', 'உடல் வீக்கம்', 'ஹீமோகுளோபின்', 'மகோதரம்'],
    inStock: true,
    featured: false
  },

  // ==========================================
  // 3. SOFT GEL CAPSULES (3 ITEMS - 600MG 60 CAPS)
  // ==========================================
  {
    id: 'prod-23',
    name: 'Ruthra Dhanwantharam 101 Soft Gel Capsules',
    tamilName: 'ருத்ரா தன்வந்தரம் 101 சாப்ட் ஜெல் கேப்சூல்',
    slug: 'ruthra-dhanwantharam-101-capsules',
    formulation: 'Capsules',
    formulationTa: 'சாப்ட் ஜெல் கேப்சூல்',
    concerns: ['joint-mobility', 'womens-wellness'],
    price: 450,
    originalPrice: 500,
    packSize: '60 Capsules (600mg)',
    packSizeTa: '60 கேப்சூல்கள் (600 மி.கி)',
    shortDescription: 'Classical 101-times processed neuromuscular soft gel capsules for hemiplegia, paraplegia, trigeminal neuralgia, osteoarthritis, and postpartum recovery.',
    shortDescriptionTa: '101 முறை பக்குவப்படுத்தப்பட்ட பக்கவாதம், நரம்பு தளர்ச்சி, மூட்டு தேய்மானம், மூட்டு வாதம் மற்றும் பிரசவத்திற்கு பின் உடலை தேற்றும் உன்னத கேப்சூல்.',
    description: 'Ruthra Dhanwantharam 101 Soft Gel Capsules encapsulate the pinnacle of classical lipid processing (Aavarti). Cooked 101 times with Balamoola (Sida cordifolia) and 40+ rejuvenative botanicals, it penetrates deep into motor neuron pathways, repairs myelin sheath damage, reverses muscular wasting, and restores tone after delivery.',
    descriptionTa: 'தன்வந்தரம் 101 கேப்சூல் நரம்பு மண்டலத்தை புதுப்பித்து, பக்கவாதம், முகவாதம், சியாட்டிகா மற்றும் கடுமையான மூட்டு வலிகளை போக்கி, பெண்களுக்கு பிரசவத்திற்கு பின் இடுப்பு வலி நீங்க உதவுகிறது.',
    traditionalRole: 'Neuromuscular rehabilitation, hemiplegia, paraplegia, trigeminal neuralgia, severe osteoarthritis, and postpartum tonification.',
    traditionalRoleTa: 'பக்கவாதம், நரம்பு மண்டல பலவீனம், மூட்டு தேய்மானம் மற்றும் பிரசவ நலம்.',
    badge: '101x Processed Care',
    badgeTa: '101 முறை பக்குவம்',
    image: '/images/products/capsules-bottle.svg',
    ingredients: [
      { name: 'Balamoola (Sida cordifolia)', tamilName: 'சிற்றாமுட்டி வேர்', botanicalName: 'Sida cordifolia', role: 'Supreme neuromuscular strengthening tonic', roleTa: 'நரம்பு மற்றும் தசை பலம் தரும் முதன்மை மூலிகை', amount: '45%' },
      { name: 'Ksheeram (Cow Milk)', tamilName: 'பசும்பால்', botanicalName: 'Cow Milk', role: 'Provides lipid nourishment for myelin sheaths', roleTa: 'நரம்புகளுக்கு ஊட்டச்சத்து தரும்', amount: '30%' },
      { name: 'Dashamoola Synergy', tamilName: 'தசமூலம்', botanicalName: 'Ten Root Formulation', role: 'Calms Vatha, dispels inflammation, and relieves spasms', roleTa: 'வாதத்தை தணித்து வீக்கத்தை நீக்கும்', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Take Capsule', titleTa: 'கேப்சூல் அளவு', instruction: 'Take 1 to 2 capsules twice daily.', instructionTa: '1 அல்லது 2 கேப்சூல் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Warm Milk / Water', titleTa: 'பால் அல்லது வெந்நீர்', instruction: 'Swallow with warm milk or lukewarm water.', instructionTa: 'வெதுவெதுப்பான பால் அல்லது நீரில் விழுங்கவும்.' },
      { step: '03', title: 'After Meals', titleTa: 'உணவுக்குப் பின்', instruction: 'Take 30 minutes after breakfast and dinner.', instructionTa: 'காலை மற்றும் இரவு உணவுக்குப் பின் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 - 2 Soft Gel Capsules (600mg)',
      frequency: 'Twice daily',
      timing: 'Post-prandial',
      vehicle: 'Warm cow’s milk or warm water',
      amountTa: '1 - 2 கேப்சூல்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான பால் அல்லது நீர்'
    },
    safety: {
      pregnancy: 'Highly beneficial in postpartum period; during pregnancy consult physician.',
      pregnancyTa: 'பிரசவத்திற்கு பின் மிகவும் நல்லது; கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Suitable above 10 years in 1 capsule dosage.',
      childrenTa: '10 வயதுக்கு மேல் 1 கேப்சூல் போதுமானது.',
      interactions: 'Safe with physical therapy and rehabilitation.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Consistent 60-90 day course recommended for neuromuscular recovery.'],
      precautionsTa: ['நரம்பு பலத்திற்கு 60-90 நாட்கள் உட்கொள்ளவும்.']
    },
    storage: {
      conditions: 'Store below 25°C in a dry place away from sunlight.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'What is the significance of 101 Aavarti?',
        questionTa: '101 ஆவர்த்தி என்பதன் சிறப்பு என்ன?',
        answer: 'It means the medicated oil is cooked and extracted 101 consecutive cycles, drastically increasing bio-availability and cellular penetration.',
        answerTa: '101 முறை மீண்டும் மீண்டும் காய்ச்சி எடுக்கப்படுவதால் மருந்து நரம்புகளில் மிக ஆழமாக ஊடுருவி பலனளிக்கும்.'
      }
    ],
    searchKeywords: ['dhanwantharam 101', 'soft gel capsules', 'paralysis', 'hemiplegia', 'osteoarthritis', 'postpartum', 'nerve damage'],
    tamilKeywords: ['தன்வந்தரம் 101', 'கேப்சூல்', 'பக்கவாதம்', 'நரம்பு தளர்ச்சி', 'மூட்டு தேய்மானம்', 'பிரசவ நலம்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-24',
    name: 'Ruthra Gandha Thylam Soft Gel Capsules',
    tamilName: 'ருத்ரா கந்த தைலம் சாப்ட் ஜெல் கேப்சூல்',
    slug: 'ruthra-gandha-thylam-capsules',
    formulation: 'Capsules',
    formulationTa: 'சாப்ட் ஜெல் கேப்சூல்',
    concerns: ['joint-mobility', 'skin-hair'],
    price: 504,
    originalPrice: 560,
    packSize: '60 Capsules (600mg)',
    packSizeTa: '60 கேப்சூல்கள் (600 மி.கி)',
    shortDescription: 'Sovereign bone and joint mineralization soft gel for osteoporosis, increasing Bone Mineral Density (BMD), back pain, sacroiliitis, fractures, and ligament tears.',
    shortDescriptionTa: 'எலும்பு தேய்மானம், மூட்டு பலவீனம், எலும்பு முறிவு, தசைநார் கிழிவு (Ligament Injury) மற்றும் இடுப்பு வாதத்திற்கு உன்னத கந்த தைல கேப்சூல்.',
    description: 'Ruthra Gandha Thylam Soft Gel Capsules contain the legendary classical formulation revered for strengthening bone matrix and cartilage. It enhances osteoblast regeneration, increases Bone Mineral Density (BMD), speeds up fracture reunion, resolves sacroiliac joint inflammation, and strengthens hair roots.',
    descriptionTa: 'கந்த தைல கேப்சூல் எலும்பு அடர்த்தியை அதிகரிக்கவும், எலும்பு முறிவுகளை விரைவாக இணைக்கவும், மூட்டு தசைநார் காயங்களை ஆற்றவும், இடுப்பு மற்றும் முதுகு வலியை போக்கவும் உதவும் தலைசிறந்த மருந்து.',
    traditionalRole: 'Increases BMD, strengthens bone matrix, heals fractures, resolves ligament sprains, and relieves sacroiliitis.',
    traditionalRoleTa: 'எலும்பு அடர்த்தி பெருக்கம், முறிவு குணம், தசைநார் காயம் ஆற்றுதல் மற்றும் முதுகு வலி.',
    badge: 'BMD & Bone Matrix',
    badgeTa: 'எலும்பு அடர்த்தி & உறுதி',
    image: '/images/products/capsules-bottle.svg',
    ingredients: [
      { name: 'Tila (Pure Black Sesame Seed)', tamilName: 'கருப்பு எள்', botanicalName: 'Sesamum indicum', role: 'Richest natural source of bio-available calcium and minerals', roleTa: 'இயற்கை கால்சியம் மற்றும் தாது சத்துக்கள் நிறைந்தது', amount: '40%' },
      { name: 'Ksheeram (Cow Milk)', tamilName: 'பசும்பால்', botanicalName: 'Cow Milk', role: 'Deep nourishment for Asthi (bone) and Majja (marrow)', roleTa: 'எலும்பு மற்றும் மஜ்ஜைக்கு ஊட்டச்சத்து', amount: '30%' },
      { name: 'Gandha Botanical Complex', tamilName: 'நறுமண மூலிகைகள்', botanicalName: 'Classical Herbal Synergy', role: 'Collagen synthesis and tissue regeneration', roleTa: 'கொலாஜன் வளர்ச்சி மற்றும் திசு புதுப்பித்தல்', amount: '30%' }
    ],
    howToUse: [
      { step: '01', title: 'Take Capsule', titleTa: 'கேப்சூல் அளவு', instruction: 'Take 1 to 2 capsules twice daily.', instructionTa: '1 அல்லது 2 கேப்சூல் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'With Warm Milk', titleTa: 'பாலுடன் விழுங்கவும்', instruction: 'Swallow with warm milk for optimal bone absorption.', instructionTa: 'வெதுவெதுப்பான பாலில் விழுங்கவும்.' },
      { step: '03', title: 'Twice a Day', titleTa: 'தினமும் இருவேளை', instruction: 'Take after breakfast and dinner.', instructionTa: 'காலை மற்றும் இரவு உணவுக்குப் பின் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 - 2 Soft Gel Capsules (600mg)',
      frequency: 'Twice daily',
      timing: 'Post-prandial',
      vehicle: 'Warm milk or warm water',
      amountTa: '1 - 2 கேப்சூல்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான பால் அல்லது நீர்'
    },
    safety: {
      pregnancy: 'Consult physician during pregnancy.',
      pregnancyTa: 'கர்ப்ப காலத்தில் மருத்துவர் ஆலோசனையுடன் உட்கொள்ளவும்.',
      children: 'Suitable above 8 years under practitioner advice.',
      childrenTa: '8 வயதுக்கு மேல் மருத்துவர் ஆலோசனைப்படி வழங்கலாம்.',
      interactions: 'Safe with calcium and Vitamin D3 supplements.',
      interactionsTa: 'வைட்டமின் டி மற்றும் கால்சியம் மருந்துகளுடன் பாதுகாப்பானது.',
      precautions: ['Recommended for elderly individuals with osteopenia / osteoporosis.'],
      precautionsTa: ['வயதானவர்களின் எலும்பு தேய்மானத்திற்கு மிகவும் நல்லது.']
    },
    storage: {
      conditions: 'Store in a cool, dry place below 25°C.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can Gandha Thylam help in healing bone fractures faster?',
        questionTa: 'எலும்பு முறிவு விரைவாக கூட இது உதவுமா?',
        answer: 'Yes, Gandha Thylam is the foremost classical formulation indicated for accelerating callus formation and fracture knitting.',
        answerTa: 'ஆம், எலும்பு முறிவை விரைவாக இணைக்க பாரம்பரியமாக பயன்படுத்தப்படும் முதன்மை மருந்து.'
      }
    ],
    searchKeywords: ['gandha thylam', 'osteoporosis', 'bmd', 'bone fracture', 'sacroiliitis', 'ligament tear', 'back pain'],
    tamilKeywords: ['கந்த தைலம்', 'கேப்சூல்', 'எலும்பு தேய்மானம்', 'எலும்பு முறிவு', 'தசைநார் காயம்', 'இடுப்பு வலி'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-25',
    name: 'Ruthra Sahacharadi 21 Aavarti Soft Gel Capsules',
    tamilName: 'ருத்ரா சகசராதி 21 ஆவர்த்தி சாப்ட் ஜெல் கேப்சூல்',
    slug: 'ruthra-sahacharadi-21-aavarti-capsules',
    formulation: 'Capsules',
    formulationTa: 'சாப்ட் ஜெல் கேப்சூல்',
    concerns: ['joint-mobility'],
    price: 450,
    originalPrice: 500,
    packSize: '60 Capsules (600mg)',
    packSizeTa: '60 கேப்சூல்கள் (600 மி.கி)',
    shortDescription: 'Advanced 21-times processed formulation for Sciatica (Gridhrasi), lumbar spondylosis, tremors, varicose veins, numbness, and tingling extremities.',
    shortDescriptionTa: 'சியாட்டிகா நரம்பு வலி, இடுப்பு வாதம், நடுக்கம், வெரிகோஸ் வெயின் (Varicose Veins) மற்றும் கை கால் மரத்துப்போதலுக்கு உன்னத 21 ஆவர்த்தி கேப்சூல்.',
    description: 'Ruthra Sahacharadi 21 Aavarti Soft Gel Capsules are prepared by infusing Sahachara (Strobilanthes ciliatus) and Dashamoola across 21 rigorous medicinal cooking cycles. It decompresses pinched lumbar nerve roots, clears venous stasis in varicose veins, stops lower limb tingling, and relieves lower back stiffness.',
    descriptionTa: 'சகசராதி 21 ஆவர்த்தி கேப்சூல் இடுப்பு நரம்பு அழுத்தத்தை நீக்கி, சியாட்டிகா வலி, கால்களில் ரத்த நாள வீக்கம் (வெரிகோஸ் வெயின்), நடுக்கம் மற்றும் உணர்வின்மையை குணமாக்கும்.',
    traditionalRole: 'Decompresses sciatic nerve, relieves lumbago, resolves varicose veins, tremors, and lower extremity numbness.',
    traditionalRoleTa: 'சியாட்டிகா வலி, இடுப்பு வாதம், வெரிகோஸ் வெயின் மற்றும் நரம்பு மரத்துப்போதல் நிவாரணம்.',
    badge: 'Sciatica & Vein Care',
    badgeTa: 'சியாட்டிகா & நரம்பு நலம்',
    image: '/images/products/capsules-bottle.svg',
    ingredients: [
      { name: 'Sahachara (Strobilanthes)', tamilName: 'சகசரா / குறிஞ்சி', botanicalName: 'Strobilanthes ciliatus', role: 'Specific vascular and neural tonic for lower limbs', roleTa: 'கால் நரம்புகள் மற்றும் ரத்த நாளங்களை வலுப்படுத்தும்', amount: '45%' },
      { name: 'Dashamoola Complex', tamilName: 'தசமூலம்', botanicalName: 'Dashamoola Blend', role: 'Pacifies severe lower spinal Vatha aggravation', roleTa: 'இடுப்பு வாதம் மற்றும் வலிகளை நீக்கும்', amount: '30%' },
      { name: 'Eranda Thailam & Sesame Base', tamilName: 'ஆமணக்கு & நல்லெண்ணெய்', botanicalName: 'Castor & Sesame Oil', role: 'Lubricates intervertebral discs and nerve sheath', roleTa: 'தண்டுவட நரம்புகளுக்கு மென்மை தரும்', amount: '25%' }
    ],
    howToUse: [
      { step: '01', title: 'Take Capsule', titleTa: 'கேப்சூல் அளவு', instruction: 'Take 1 to 2 capsules twice daily.', instructionTa: '1 அல்லது 2 கேப்சூல் இருவேளை எடுக்கவும்.' },
      { step: '02', title: 'Warm Water / Milk', titleTa: 'வெந்நீர் அல்லது பாலில்', instruction: 'Swallow with warm water or warm milk.', instructionTa: 'வெதுவெதுப்பான நீர் அல்லது பாலில் விழுங்கவும்.' },
      { step: '03', title: 'After Food', titleTa: 'உணவுக்குப் பின்', instruction: 'Take after meals morning and night.', instructionTa: 'காலை மற்றும் இரவு உணவுக்குப் பின் உட்கொள்ளவும்.' }
    ],
    dosage: {
      amount: '1 - 2 Soft Gel Capsules (600mg)',
      frequency: 'Twice daily',
      timing: 'Post-prandial',
      vehicle: 'Warm water or warm milk',
      amountTa: '1 - 2 கேப்சூல்',
      frequencyTa: 'தினமும் இருவேளை',
      timingTa: 'உணவுக்குப் பின்',
      vehicleTa: 'வெதுவெதுப்பான நீர் அல்லது பால்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Not intended for young children.',
      childrenTa: 'சிறார்களுக்கு அல்ல.',
      interactions: 'Safe with external pain oils.',
      interactionsTa: 'பாதுகாப்பானது.',
      precautions: ['Avoid prolonged heavy lifting during acute sciatica.'],
      precautionsTa: ['கடுமையான வலி இருக்கும் போது அதிக எடையை தூக்க வேண்டாம்.']
    },
    storage: {
      conditions: 'Store below 25°C in a dry place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does it help with burning and tingling sensations in the legs?',
        questionTa: 'கால்களில் ஏற்படும் மரத்துப்போதல் மற்றும் எரிச்சலுக்கு இது பலனளிக்குமா?',
        answer: 'Yes, Sahacharadi is the premier classical formulation for lower extremity neuropathy, tingling, and sciatica.',
        answerTa: 'ஆம், கால் நரம்பு குடைச்சல், மரத்துப்போதல் மற்றும் சியாட்டிகா வலிக்கு முதன்மையான மருந்து.'
      }
    ],
    searchKeywords: ['sahacharadi 21', 'sciatica', 'varicose veins', 'lumbago', 'tremors', 'numbness', 'tingling'],
    tamilKeywords: ['சகசராதி 21', 'கேப்சூல்', 'சியாட்டிகா', 'இடுப்பு வலி', 'வெரிகோஸ் வெயின்', 'மரத்துப்போதல்'],
    inStock: true,
    featured: true
  },

  // ==========================================
  // 4. THAILAM & ENNAI (4 MEDICATED OILS - 100ML)
  // ==========================================
  {
    id: 'prod-26',
    name: 'Ruthra Rej-Viyan Pain Oil',
    tamilName: 'ருத்ரா ரெஜ்-வியான் வலி நிவாரண தைலம்',
    slug: 'ruthra-rej-viyan-pain-oil',
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
    image: '/images/products/rej_viyan_pain_oil.png',
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
    tamilKeywords: ['ரெஜ்-வியான்', 'வலி தைலம்', 'முழங்கால் வலி', 'இடுப்பு வலி', 'கழுத்து வலி', 'சுளுக்கு'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-27',
    name: 'Ruthra Ulcera Oil – The Wound Healer',
    tamilName: 'ருத்ரா அல்சரா புண் ஆற்று தைலம்',
    slug: 'ruthra-ulcera-wound-oil',
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
    image: '/images/products/thailam-bottle.svg',
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
    image: '/images/products/harshika_hair_oil.png',
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
    image: '/images/products/nalpamaradi_taila.png',
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
    searchKeywords: ['nalpamaradi', 'taila', 'skin glow', 'eczema', 'pigmentation', 'bridal massage', 'itching'],
    tamilKeywords: ['நால்பாமராதி', 'தைலம்', 'சரும பொலிவு', 'தேமல்', 'கரும்புள்ளிகள்', 'தோல் அரிப்பு', 'மஞ்சள்'],
    inStock: true,
    featured: true
  },

  // ==========================================
  // 5. SYRUP, KASHAYAM & DROPS (3 PRODUCTS)
  // ==========================================
  {
    id: 'prod-30',
    name: 'Ruthra Sinocof Cough Syrup',
    tamilName: 'ருத்ரா சினோகாஃப் இருமல் சிரப்',
    slug: 'ruthra-sinocof-cough-syrup',
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
    image: '/images/products/sinocof_cough_syrup.png',
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
    searchKeywords: ['sinocof', 'cough syrup', 'cold', 'bronchitis', 'dry cough', 'non drowsy', 'adathodai'],
    tamilKeywords: ['சினோகாஃப்', 'இருமல் சிரப்', 'வறட்டு இருமல்', 'சளி', 'தொண்டை கரகரப்பு', 'ஆடாதோடை'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-31',
    name: 'Ruthra Ramabana Kashayam',
    tamilName: 'ருத்ரா ராமபாண கஷாயம்',
    slug: 'ruthra-ramabana-kashayam',
    formulation: 'Syrup & Kashayam',
    formulationTa: 'கஷாய திரவம்',
    concerns: ['respiratory'],
    price: 240,
    originalPrice: 275,
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    shortDescription: 'Clinically proven concentrated liquid kashayam for all types of fevers, pyrexia joint & muscle aches, eye burning, elevated WBC reduction, and platelet recovery.',
    shortDescriptionTa: 'அனைத்து வகை காய்ச்சல்கள், காய்ச்சல் உடல் வலி, கண் எரிச்சல், வெள்ளை அணுக்கள் சீராக்கம் மற்றும் பிளேட்லெட் எண்ணிக்கையை உயர்த்தும் ராமபாண கஷாயம்.',
    description: 'Ruthra Ramabana Kashayam is a ready-to-consume liquid antipyretic elixir formulated according to classical Siddha emergency febrifuge recipes. It clinically reduces symptoms of pyrexia including severe muscle and joint pain, burning eyes, and loss of appetite. It is proven effective in infectious fevers, helping reduce elevated WBC count while supporting healthy platelet counts.',
    descriptionTa: 'ராமபாண கஷாயம் கொதிக்க வைக்க தேவையில்லாத ரெடிமேட் கஷாய திரவம். இது கடுமையான காய்ச்சல், தலைவலி, உடல் குடைச்சல், கண் எரிச்சலை உடனடியாக தணித்து, ரத்தத்தில் வெள்ளை அணுக்களை சீராக்கி பிளேட்லெட்டுகளை உயர்த்த உதவுகிறது.',
    traditionalRole: 'Clinically reduces pyrexia symptoms, muscle/joint aches, eye burning, helps reduce elevated WBC count, and boosts reduced platelets.',
    traditionalRoleTa: 'காய்ச்சல் நிவாரணம், உடல் வலி நீக்கம், பிளேட்லெட் பெருக்கம் மற்றும் வெள்ளை அணுக்கள் சீராக்கம்.',
    badge: 'Platelet & Fever Shield',
    badgeTa: 'பிளேட்லெட் & காய்ச்சல் நிவாரணி',
    image: '/images/products/ramabaana_kashayam.png',
    ingredients: [
      { name: 'Nilavembu (Andrographis)', tamilName: 'நிலவேம்பு', botanicalName: 'Andrographis paniculata', role: 'Broad-spectrum antiviral and antipyretic', roleTa: 'வைரஸ் எதிர்ப்பு மற்றும் காய்ச்சல் தணிப்பு', amount: '30%' },
      { name: 'Seenthil (Guduchi)', tamilName: 'சீந்தில்', botanicalName: 'Tinospora cordifolia', role: 'Boosts platelet count and regulates immune WBC response', roleTa: 'பிளேட்லெட் எண்ணிக்கையை பெருக்கும்', amount: '25%' },
      { name: 'Papali Ilai Extract (Papaya Leaf)', tamilName: 'பப்பாளி இலை சாறு', botanicalName: 'Carica papaya', role: 'Rapid thrombocyte / platelet booster', roleTa: 'பிளேட்லெட் அணுக்களை வேகமாக உயர்த்தும்', amount: '25%' },
      { name: 'Vettiver & Santhanam', tamilName: 'வெட்டிவேர் & சந்தனம்', botanicalName: 'Cooling Synergy', role: 'Calms eye burning, thirst, and internal pyrexia heat', roleTa: 'கண் எரிச்சல் மற்றும் உடல் உஷ்ணத்தை தணிக்கும்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Measure Kashayam', titleTa: 'அளவு', instruction: 'Take 15ml to 30ml liquid kashayam.', instructionTa: '15 முதல் 30 மி.லி கஷாயத்தை எடுக்கவும்.' },
      { step: '02', title: 'Mix with Warm Water', titleTa: 'வெந்நீரில் கலக்கவும்', instruction: 'Mix with equal parts (30ml) warm water.', instructionTa: 'சம அளவு (30 மி.லி) வெந்நீரில் கலக்கவும்.' },
      { step: '03', title: 'Drink Twice or Thrice', titleTa: '2-3 வேளை', instruction: 'Drink before or after meals during fever.', instructionTa: 'காய்ச்சல் இருக்கும் போது தினமும் 2-3 வேளை பருகவும்.' }
    ],
    dosage: {
      amount: '15ml - 30ml with warm water',
      frequency: '2 to 3 times daily',
      timing: 'Pre or post food',
      vehicle: 'Equal part warm water',
      amountTa: '15 - 30 மி.லி',
      frequencyTa: 'தினமும் 2-3 வேளை',
      timingTa: 'உணவுக்கு முன் அல்லது பின்',
      vehicleTa: 'சம அளவு வெதுவெதுப்பான நீருடன்'
    },
    safety: {
      pregnancy: 'Consult physician before use.',
      pregnancyTa: 'மருத்துவர் ஆலோசனை பெறவும்.',
      children: 'Children 5-12 years: 10ml with warm water.',
      childrenTa: '5-12 வயது குழந்தைகளுக்கு 10 மி.லி போதுமானது.',
      interactions: 'Safe with allopathic fever medication with a 1-hour gap.',
      interactionsTa: '1 மணி நேர இடைவெளியில் பிற மருந்துகளுடன் உட்கொள்ளலாம்.',
      precautions: ['Check platelet counts via blood tests during dengue or high fever.'],
      precautionsTa: ['டெங்கு காய்ச்சலின் போது ரத்த பரிசோதனை செய்து வரவும்.']
    },
    storage: {
      conditions: 'Keep tightly closed in a cool, dark place.',
      conditionsTa: 'குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்.',
      shelfLife: '36 Months',
      shelfLifeTa: '36 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this help to increase low platelet count during fevers?',
        questionTa: 'காய்ச்சலின் போது குறையும் பிளேட்லெட்டுகளை இது அதிகரிக்குமா?',
        answer: 'Yes! Formulated with Guduchi and Papaya leaf extracts, it is clinically renowned for platelet recovery.',
        answerTa: 'ஆம், சீந்தில் மற்றும் பப்பாளி இலை சாறு உள்ளதால் பிளேட்லெட்டுகளை விரைவாக உயர்த்தும்.'
      }
    ],
    searchKeywords: ['ramabana', 'kashayam', 'fever', 'platelet booster', 'wbc count', 'dengue', 'pyrexia'],
    tamilKeywords: ['ராமபாண', 'கஷாயம்', 'காய்ச்சல்', 'பிளேட்லெட்', 'உடல் வலி', 'டெங்கு', 'வெள்ளை அணுக்கள்'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-32',
    name: 'Ruthra Esy-swas Drops',
    tamilName: 'ருத்ரா ஈஸி-ஸ்வாஸ் சொட்டு மருந்து',
    slug: 'ruthra-esy-swas-drops',
    formulation: 'Drops',
    formulationTa: 'சொட்டு மருந்து',
    concerns: ['respiratory', 'joint-mobility'],
    price: 198,
    originalPrice: 225,
    packSize: '50ml',
    packSizeTa: '50 மி.லி',
    shortDescription: 'Multi-action aromatic drops for instant steam inhalation and internal/external relief from asthma, wheezing, COPD, URI/LRI, arthralgia, and fever.',
    shortDescriptionTa: 'ஆஸ்துமா, மூச்சிரைப்பு, சைனஸ் அடைப்பு, வீசிங் (Wheezing), மூட்டு வலி மற்றும் ஆவி பிடிக்க உதவும் பலநோக்கு சொட்டு மருந்து.',
    description: 'Ruthra Esy-swas Drops is a high-potency volatile aromatic distillation of Camphor, Thymol, Menthol, Nilgiri, and Lemongrass. When inhaled via steam or applied to pulse points, it instantly clears blocked nasal channels, relaxes constricted bronchial airways, relieves wheezing spasms, and eases arthritic tension.',
    descriptionTa: 'ஈஸி-ஸ்வாஸ் சொட்டு மருந்து கற்பூரம், ஓமம், புதினா மற்றும் நீலகிரி எண்ணெய் சேர்ந்த சக்தி வாய்ந்த தயாரிப்பு. இது ஆவி பிடிக்கும் போது மூக்கடைப்பை உடனடியாக திறந்து, ஆஸ்துமா, மூச்சிரைப்பு மற்றும் சைனஸ் தலைபாரத்தை நொடியில் போக்கும்.',
    traditionalRole: 'Instant relief from asthma, wheezing, COPD, upper and lower respiratory infections, arthralgia, and fever.',
    traditionalRoleTa: 'ஆஸ்துமா, வீசிங், மூக்கடைப்பு, சைனஸ் தலைபாரம் மற்றும் மூட்டு வலி நீக்கம்.',
    badge: 'Instant Airways Opener',
    badgeTa: 'உடனடி சுவாச நிவாரணம்',
    image: '/images/products/drops-bottle.svg',
    ingredients: [
      { name: 'Omathu Dravagam (Thymol)', tamilName: 'ஓம திராவகம்', botanicalName: 'Trachyspermum ammi', role: 'Relieves bronchial spasm and clears phlegm', roleTa: 'சுவாச குழாய் பிடிப்பை தளர்த்தும்', amount: '30%' },
      { name: 'Pudhina Uppu (Menthol)', tamilName: 'புதினா உப்பு', botanicalName: 'Mentha arvensis', role: 'Cooling nasal channel decongestant', roleTa: 'நாசி அடைப்பை உடனடியாக திறக்கும்', amount: '25%' },
      { name: 'Pachai Karpooram (Camphor)', tamilName: 'பச்சை கற்பூரம்', botanicalName: 'Cinnamomum camphora', role: 'Deep airway opening aroma', roleTa: 'ஆழ்ந்த சுவாச புத்துணர்ச்சி', amount: '25%' },
      { name: 'Nilgiri Ennai (Eucalyptus)', tamilName: 'நீலகிரி எண்ணெய்', botanicalName: 'Eucalyptus globulus', role: 'Mucus clearing and chest easing', roleTa: 'நெஞ்சு சளியை இளக்கும் நறுமணம்', amount: '20%' }
    ],
    howToUse: [
      { step: '01', title: 'Steam Inhalation', titleTa: 'ஆவி பிடித்தல்', instruction: 'Add 3-5 drops to a bowl of boiling hot water and inhale steam.', instructionTa: '3-5 சொட்டுகளை கொதிக்கும் வெந்நீரில் விட்டு ஆவி பிடிக்கவும்.' },
      { step: '02', title: 'Chest / Forehead Application', titleTa: 'மார்பில் தடவுதல்', instruction: 'Apply 2-3 drops on forehead, chest, or handkerchief.', instructionTa: '2-3 சொட்டுகளை நெற்றி அல்லது மார்பில் லேசாக தடவவும்.' },
      { step: '03', title: 'Internal Use (As Advised)', titleTa: 'உள் பயன்பாடு', instruction: '1-2 drops in warm water under physician guidance.', instructionTa: 'மருத்துவர் ஆலோசனைப்படி 1-2 சொட்டுகள் வெந்நீரில் அருந்தலாம்.' }
    ],
    dosage: {
      amount: '3 - 5 drops for steam / 2 drops for pulse points',
      frequency: '2 to 3 times daily as needed',
      timing: 'Inhalation / External',
      vehicle: 'Steam water or direct topical application',
      amountTa: '3 - 5 சொட்டுகள் ஆவி பிடிக்க',
      frequencyTa: 'தேவைக்கேற்ப தினமும் 2-3 முறை',
      timingTa: 'ஆவி பிடித்தல் / தடவுதல்',
      vehicleTa: 'வெந்நீரில் விடவும்'
    },
    safety: {
      pregnancy: 'Safe for steam inhalation and external use.',
      pregnancyTa: 'ஆவி பிடிக்க முற்றிலும் பாதுகாப்பானது.',
      children: 'For children above 3 years, use for steam inhalation under supervision.',
      childrenTa: '3 வயதுக்கு மேற்பட்டோருக்கு ஆவி பிடிக்க பயன்படுத்தலாம்.',
      interactions: 'Safe with oral medicines.',
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
  // 6. PERSONAL CARE & TRADITIONAL POWDERS (2 PRODUCTS - 75G)
  // ==========================================
  {
    id: 'prod-33',
    name: 'RUTHRA’S Nalangu Maavu Powder',
    tamilName: 'ருத்ராவின் நலங்கு மாவு பொடி',
    slug: 'ruthra-nalangu-maavu-powder',
    formulation: 'Personal Care',
    formulationTa: 'பாரம்பரிய பராமரிப்பு',
    concerns: ['skin-hair'],
    price: 120,
    originalPrice: 140,
    packSize: '75 gms',
    packSizeTa: '75 கிராம்',
    shortDescription: 'Traditional 12-herb royal herbal bath powder & face pack for radiant glowing skin, hyperpigmentation removal, and tan clearance.',
    shortDescriptionTa: 'மேனி பொலிவு, கரும்புள்ளி மற்றும் வெயில் கருமை நீங்க, 12 மூலிகைகள் சேர்ந்த பாரம்பரிய நலங்கு மாவு குளியல் பொடி.',
    description: 'RUTHRA’S Nalangu Maavu Powder is an authentic bridal and daily bath formulation pulverized with Wild Turmeric, Rose Petals, Poolankizhangu, Korai Kizhangu, Green Gram, and Vetiver. It acts as a 100% soap-free natural cleanser, exfoliates dead epidermal cells, fades sun spots and acne marks, and imparts a long-lasting natural fragrance.',
    descriptionTa: 'ருத்ராவின் நலங்கு மாவு கஸ்தூரி மஞ்சள், ரோஜா இதழ்கள், பூலாங்கிழங்கு, கோரைக்கிழங்கு, பாசிப்பயறு மற்றும் வெட்டிவேர் சேர்ந்தது. இது ரசாயன சோப்புகளுக்கு மாற்றாக சருமத்திற்கு பொலிவையும், நறுமணத்தையும் தந்து கரும்புள்ளிகளை நீக்குகிறது.',
    traditionalRole: 'Natural herbal body wash, facial pack, removes hyperpigmentation, clears tan, and enriches skin vitality.',
    traditionalRoleTa: 'மூலிகை குளியல் பொடி, முக பொலிவு பேக், கரும்புள்ளிகள் மற்றும் வெயில் கருமை நீக்கம்.',
    badge: '100% Herbal Bath',
    badgeTa: 'தூய மூலிகை குளியல்',
    image: '/images/products/personal-care.svg',
    ingredients: [
      { name: 'Kasthuri Manjal (Wild Turmeric)', tamilName: 'கஸ்தூரி மஞ்சள்', botanicalName: 'Curcuma aromatica', role: 'Complexion enhancer and antiseptic', roleTa: 'மேனி பளபளப்பு மற்றும் கிருமி நாசினி', amount: '25%' },
      { name: 'Poolankizhangu (White Turmeric)', tamilName: 'பூலாங்கிழங்கு', botanicalName: 'Curcuma zedoaria', role: 'Deep fragrance and skin brightening', roleTa: 'சரும பொலிவு மற்றும் நறுமணம்', amount: '20%' },
      { name: 'Roja Idhഴgal (Damask Rose Petals)', tamilName: 'ரோஜா இதழ்கள்', botanicalName: 'Rosa damascena', role: 'Soothes skin redness and shrinks pores', roleTa: 'சருமத்தை மென்மையாக்கும்', amount: '20%' },
      { name: 'Korai Kizhangu', tamilName: 'கோரைக்கிழங்கு', botanicalName: 'Cyperus rotundus', role: 'Fades hyperpigmentation and clears blemishes', roleTa: 'கரும்புள்ளிகள் மற்றும் தழும்புகளை நீக்கும்', amount: '20%' },
      { name: 'Paasi Payaru (Green Gram Flour)', tamilName: 'பாசிப்பயறு', botanicalName: 'Vigna radiata', role: 'Natural gentle soap-free cleanser', roleTa: 'இயற்கை அழுக்கு நீக்கி', amount: '15%' }
    ],
    howToUse: [
      { step: '01', title: 'Make Paste', titleTa: 'பேஸ்ட் செய்யவும்', instruction: 'Mix 2 tablespoons with rose water, milk, or plain water.', instructionTa: '2 ஸ்பூன் பொடியை பன்னீர், பால் அல்லது நீரில் பேஸ்ட் போல கலக்கவும்.' },
      { step: '02', title: 'Apply on Skin', titleTa: 'சருமத்தில் பூசவும்', instruction: 'Apply evenly on face and body as a pack or bath scrub.', instructionTa: 'முகம் மற்றும் உடல் முழுவதும் மென்மையாக தேய்க்கவும்.' },
      { step: '03', title: 'Rinse with Water', titleTa: 'நீரில் கழுவவும்', instruction: 'Gently scrub and rinse with lukewarm water.', instructionTa: '5 நிமிடம் கழித்து வெதுவெதுப்பான நீரில் கழுவவும்.' }
    ],
    dosage: {
      amount: '1 to 2 tablespoons per use',
      frequency: 'Daily during bath or twice weekly as face pack',
      timing: 'Bath time',
      vehicle: 'Rose water, raw milk, or pure water',
      amountTa: '1 - 2 ஸ்பூன்',
      frequencyTa: 'தினமும் குளிக்கும் போது',
      timingTa: 'குளியல் நேரம்',
      vehicleTa: 'பன்னீர், பால் அல்லது நீர்'
    },
    safety: {
      pregnancy: 'Completely safe for pregnant and nursing mothers.',
      pregnancyTa: 'முற்றிலும் பாதுகாப்பானது.',
      children: 'Gentle and safe for babies and children.',
      childrenTa: 'குழந்தைகளுக்கு மிகவும் சிறந்தது.',
      interactions: 'Replaces chemical soaps effectively.',
      interactionsTa: 'சோப்புகளுக்கு சிறந்த இயற்கை மாற்று.',
      precautions: ['100% natural, free of sulfates, parabens, and artificial perfumes.'],
      precautionsTa: ['ரசாயனங்கள் கலக்கப்படாத தூய மூலிகை பொடி.']
    },
    storage: {
      conditions: 'Keep in an airtight dry jar.',
      conditionsTa: 'ஈரப்பதம் படாமல் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Can I use this daily instead of bath soap?',
        questionTa: 'இதை சோப்பிற்கு பதிலாக தினமும் பயன்படுத்தலாமா?',
        answer: 'Yes! It cleanses naturally without stripping your skin of essential moisture.',
        answerTa: 'ஆம்! சருமத்தின் ஈரப்பதம் குறையாமல் சுத்தமாக பராமரிக்கலாம்.'
      }
    ],
    searchKeywords: ['nalangu maavu', 'herbal bath powder', 'skin glow', 'face pack', 'pigmentation', 'soap free', 'tan removal'],
    tamilKeywords: ['நலங்கு மாவு', 'குளியல் பொடி', 'சரும பொலிவு', 'கரும்புள்ளிகள்', 'கஸ்தூரி மஞ்சள்', 'முகப்பரு தழும்பு'],
    inStock: true,
    featured: true
  },
  {
    id: 'prod-34',
    name: 'RUTHRA’S Shigakai Powder',
    tamilName: 'ருத்ராவின் சிகைக்காய் பொடி',
    slug: 'ruthra-shigakai-powder',
    formulation: 'Personal Care',
    formulationTa: 'பாரம்பரிய பராமரிப்பு',
    concerns: ['skin-hair'],
    price: 120,
    originalPrice: 140,
    packSize: '75 gms',
    packSizeTa: '75 கிராம்',
    shortDescription: 'Pure traditional botanical hair cleanser for dandruff elimination, root stimulation, scalp cooling, and healthy lustrous hair growth.',
    shortDescriptionTa: 'பொடுகு நீங்க, கூந்தல் வேர்கள் உறுதியாக, தலைச்சூடு தணிய மற்றும் இயற்கை பளபளப்பு தரும் தூய சிகைக்காய் பொடி.',
    description: 'RUTHRA’S Shigakai Powder is traditionally compounded with Acacia concinna (Shigakai), Soapnut (Reetha), Amla (Nellikkai), Hibiscus (Sembaruthi), Fenugreek (Vendhayam), and Vettiver. It naturally foams to lift away dirt and excess scalp sebum, keeps hair roots nourished, and prevents premature greying.',
    descriptionTa: 'ருத்ராவின் சிகைக்காய் பொடி சிகைக்காய், பூவந்திக்கொட்டை, நெல்லிக்காய், செம்பருத்தி, வெந்தயம் மற்றும் வெட்டிவேர் சேர்ந்தது. இது கூந்தலை வறண்டு போகாமல் மென்மையாகவும் அடர்த்தியாகவும் வைத்திருக்க உதவுகிறது.',
    traditionalRole: 'Removes stubborn dandruff, stimulates healthy hair growth, reduces body and scalp heat, and cleanses roots.',
    traditionalRoleTa: 'பொடுகு நீக்கம், கூந்தல் வளர்ச்சி, தலைச்சூடு தணிப்பு மற்றும் ஆரோக்கியமான கூந்தல்.',
    badge: 'Pure Hair Cleanser',
    badgeTa: 'இயற்கை கூந்தல் சுத்திகரிப்பு',
    image: '/images/products/personal-care.svg',
    ingredients: [
      { name: 'Shigakai (Acacia concinna)', tamilName: 'சிகைக்காய்', botanicalName: 'Acacia concinna', role: 'Natural gentle surfactant with low pH', roleTa: 'இயற்கை நுரை தந்து அழுக்கை நீக்கும்', amount: '35%' },
      { name: 'Poovanthikottai (Reetha / Soapnut)', tamilName: 'பூவந்திக்கொட்டை', botanicalName: 'Sapindus mukorossi', role: 'Rich natural saponin cleanser', roleTa: 'கூந்தலுக்கு பளபளப்பு தரும்', amount: '20%' },
      { name: 'Sembaruthi (Hibiscus Flower & Leaves)', tamilName: 'செம்பருத்தி', botanicalName: 'Hibiscus rosa-sinensis', role: 'Natural deep conditioner and root strengthener', roleTa: 'இயற்கை கண்டிஷனர் மற்றும் வேர் பலம்', amount: '20%' },
      { name: 'Nellikkai (Amla)', tamilName: 'நெல்லிக்காய்', botanicalName: 'Phyllanthus emblica', role: 'Prevents premature greying and hair thinning', roleTa: 'இளநரை மற்றும் முடி உதிர்வை தடுக்கும்', amount: '15%' },
      { name: 'Vendhayam (Fenugreek)', tamilName: 'வெந்தயம்', botanicalName: 'Trigonella foenum-graecum', role: 'Scalp cooling and dandruff control', roleTa: 'தலை குளிர்ச்சி மற்றும் பொடுகு தடுப்பு', amount: '10%' }
    ],
    howToUse: [
      { step: '01', title: 'Mix with Water', titleTa: 'நீரில் கலக்கவும்', instruction: 'Take 2-3 tablespoons in a bowl and mix with warm water into a smooth paste.', instructionTa: '2-3 ஸ்பூன் பொடியை வெதுவெதுப்பான நீரில் பேஸ்ட் போல கலக்கவும்.' },
      { step: '02', title: 'Apply on Scalp', titleTa: 'மண்டையோட்டில் பூசவும்', instruction: 'Apply over wet hair and scalp, massaging gently.', instructionTa: 'ஈரமான கூந்தல் மற்றும் மண்டையோட்டில் தேய்க்கவும்.' },
      { step: '03', title: 'Rinse Thoroughly', titleTa: 'நன்றாக அலசவும்', instruction: 'Rinse thoroughly with clean water.', instructionTa: 'சுத்தமான நீரில் நன்றாக அலசி குளிக்கவும்.' }
    ],
    dosage: {
      amount: '2 to 3 tablespoons per wash',
      frequency: '2 to 3 times a week',
      timing: 'Hair wash during bath',
      vehicle: 'Warm water paste / Rice water',
      amountTa: '2 - 3 ஸ்பூன்',
      frequencyTa: 'வாரம் 2-3 முறை',
      timingTa: 'தலைக்கு குளிக்கும் போது',
      vehicleTa: 'வெந்நீர் அல்லது கஞ்சித்தண்ணீர்'
    },
    safety: {
      pregnancy: 'Completely safe during pregnancy.',
      pregnancyTa: 'முற்றிலும் பாதுகாப்பானது.',
      children: 'Safe for children above 3 years.',
      childrenTa: '3 வயதுக்கு மேற்பட்ட குழந்தைகளுக்கு பாதுகாப்பானது.',
      interactions: 'Pair with Ruthra Narshika Hair Oil for complete hair care.',
      interactionsTa: 'நார்ஷிகா கூந்தல் தைலத்துடன் பயன்படுத்த உகந்தது.',
      precautions: ['Close eyes tightly while rinsing to prevent mild stinging.'],
      precautionsTa: ['கண்களில் படாமல் அலசவும்.']
    },
    storage: {
      conditions: 'Store in an airtight container away from water.',
      conditionsTa: 'ஈரப்பதம் படாமல் வைக்கவும்.',
      shelfLife: '24 Months',
      shelfLifeTa: '24 மாதங்கள்'
    },
    faqs: [
      {
        question: 'Does this dry out the hair like some powder washes?',
        questionTa: 'இது முடியை வறண்டு போக செய்யுமா?',
        answer: 'No, because it contains Hibiscus and Fenugreek which naturally condition and soften the hair shaft.',
        answerTa: 'இல்லை, செம்பருத்தி மற்றும் வெந்தயம் உள்ளதால் முடி மென்மையாகவும் பளபளப்பாகவும் இருக்கும்.'
      }
    ],
    searchKeywords: ['shigakai', 'hair wash', 'herbal shampoo', 'dandruff', 'scalp cooling', 'amla', 'hibiscus'],
    tamilKeywords: ['சிகைக்காய்', 'பொடி', 'பொடுகு', 'கூந்தல் சுத்திகரிப்பு', 'செம்பருத்தி', 'வெந்தயம்', 'நெல்லிக்காய்'],
    inStock: true,
    featured: true
  }
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
