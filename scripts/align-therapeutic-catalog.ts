import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// 34 Official Therapeutic Index Formulations Definition
export const THERAPEUTIC_INDEX_PRODUCTS = [
  // --- CHOORANAM (12 Products - 30 Sachets) ---
  {
    name: 'Amirtha Sanjeevi Chooranam',
    tamilName: 'அமிர்த சஞ்சீவி சூரணம்',
    slug: 'ruthra-amirtha-sanjeevi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 234,
    price: 210, // 10% OFF
    indications: 'Pitha disorders, Genito urinary tract diseases, Leucorrhea, Gonorrhea, Osteomyelitis, Peripheral neuritis',
    indicationsTa: 'பித்த நோய்கள், சிறுநீரக பாதை நோய்கள், வெள்ளைப்படுதல், எலும்பு மச்சை அழற்சி, நரம்பு வலி'
  },
  {
    name: 'Madhurathi Chooranam',
    tamilName: 'மதுராதி சூரணம்',
    slug: 'ruthra-madhurathi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 249,
    price: 224, // 10% OFF
    indications: 'GERD, Giddiness, Nausea, Anorexia',
    indicationsTa: 'அமில எதிர்ப்புகை (GERD), தலைச்சுற்றல், குமட்டல், பசியின்மை'
  },
  {
    name: 'Megasanthi Chooranam',
    tamilName: 'மேகசாந்தி சூரணம்',
    slug: 'ruthra-megasanthi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 180,
    price: 162, // 10% OFF
    indications: 'Contraction of nerve or muscle, Skin disease due to venereal causes, Syphilitic ulcer, Pricking pain',
    indicationsTa: 'தசை/நரம்பு சுருக்கம், தோல் நோய்கள், வெட்டை புண்கள், குத்தல் வலி'
  },
  {
    name: 'Chandraganthi Chooranam',
    tamilName: 'சந்திரகாந்தி சூரணம்',
    slug: 'ruthra-chandraganthi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 300,
    price: 270, // 10% OFF
    indications: 'Oligospermia, Pitha disorders, Vaginosis, Genital disorders, Venereal diseases',
    indicationsTa: 'விந்தணு குறைபாடு, பித்த நோய்கள், பெண்குறி நோய்கள், பாலியல் உபாதைகள்'
  },
  {
    name: 'Sagala Noi Chooranam',
    tamilName: 'சகல நோய் சூரணம்',
    slug: 'ruthra-sagala-noi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 231,
    price: 208, // 10% OFF
    indications: 'Back pain, Head diseases, Pitha diseases, Indigestion, Burning sensation of eyes, Localized edema, Lithiasis, Arthritis, Skin diseases',
    indicationsTa: 'முதுகு வலி, தலை நோய்கள், பித்த உபாதைகள், அஜீரணம், கண் எரிச்சல், வீக்கம், சிறுநீரக கல், மூட்டு வலி, தோல் நோய்கள்'
  },
  {
    name: 'Madhura Chooranam',
    tamilName: 'மதுரா சூரணம்',
    slug: 'ruthra-madhura-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 375,
    price: 337, // 10% OFF
    indications: 'Type-II Diabetes & its complications',
    indicationsTa: 'சர்க்கரை நோய் (Type-II) மற்றும் அதன் பக்கவிளைவுகள்'
  },
  {
    name: 'Sarvanga Vatha Chooranam',
    tamilName: 'சர்வாங்க வாத சூரணம்',
    slug: 'ruthra-sarvanga-vatha-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 231,
    price: 208, // 10% OFF
    indications: 'Stabbing pain, Nerve compression pain, Intestinal pain, Arthralgia, All types of arthritis pain',
    indicationsTa: 'குத்தல் வலி, நரம்பு அழுத்த வலி, குடல் வலி, மூட்டு வலி, அனைத்து வாத வலிகள்'
  },
  {
    name: 'Sugabedhi Chooranam',
    tamilName: 'சுகபேதி சூரணம்',
    slug: 'ruthra-sugabedhi-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 276,
    price: 248, // 10% OFF
    indications: 'Relieves Constipation. Acts as a painless laxative',
    indicationsTa: 'மலச்சிக்கலை நீக்கும் எளிய மலமிளக்கி'
  },
  {
    name: 'Karanthai Chooranam',
    tamilName: 'கரந்தை சூரணம்',
    slug: 'ruthra-karanthai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 285,
    price: 256, // 10% OFF
    indications: 'Skin diseases, Leucoderma, Eczema, Oral cancer, Carbuncles, Psoriatic arthritis, Vaginal cancer, Anal fistula',
    indicationsTa: 'தோல் நோய்கள், வெண்புள்ளி, எக்சிமா, சொரியாசிஸ், பௌத்திரம், கழலைகள்'
  },
  {
    name: 'Sitopaladi Churna',
    tamilName: 'சிதோபலாதி சூரணம்',
    slug: 'ruthra-sitopaladi-churna',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'ayurveda',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 198,
    price: 178, // 10% OFF
    indications: 'Asthma, Flu, Common cold, Loss of appetite',
    indicationsTa: 'ஆஸ்துமா, காய்ச்சல், சளி, பசியின்மை'
  },
  {
    name: 'Pirandai Chooranam',
    tamilName: 'பிரண்டை சூரணம்',
    slug: 'ruthra-pirandai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 315,
    price: 283, // 10% OFF
    indications: 'Osteoporosis, Arthralgia, Psychiatric diseases, PMS',
    indicationsTa: 'எலும்பு தேய்மானம், மூட்டு வலி, மன உளைச்சல், மாதவிடாய் முன் உபாதைகள்'
  },
  {
    name: 'Bhavanakadukkai Chooranam',
    tamilName: 'பாவன கடுக்காய் சூரணம்',
    slug: 'ruthra-bhavanakadukkai-chooranam',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'classical_siddha',
    packSize: '30 Sachets',
    packSizeTa: '30 பாக்கெட்டுகள்',
    mrp: 360,
    price: 324, // 10% OFF
    indications: 'Gastritis, Visceral pain, Somatic pain, Colic Pain, Dyspepsia, Anorexia, Anemia, Hypertension',
    indicationsTa: 'வயிற்றுப்புண், குடல் வலி, அஜீரணம், பசியின்மை, ரத்த சோகை, உயர் ரத்த அழுத்தம்'
  },

  // --- KUDINEER CHOORANAM (10 Products - 100gm) ---
  {
    name: 'Manjal Noi Kudineer Chooranam',
    tamilName: 'மஞ்சள் நோய் குடிநீர் சூரணம்',
    slug: 'ruthra-manjal-noi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 200,
    price: 180, // 10% OFF
    indications: 'Jaundice, Anaemia, Dropsy, clinically effective in treatment of appetite loss, fatigue, nausea, lower abdomen pain',
    indicationsTa: 'மஞ்சள் காமாலை, ரத்த சோகை, வீக்கம், பசியின்மை, உடல் சோர்வு, குமட்டல், அடிவயிற்று வலி'
  },
  {
    name: 'Nilavembu Kudineer Chooranam',
    tamilName: 'நிலவேம்பு குடிநீர் சூரணம்',
    slug: 'ruthra-nilavembu-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 150,
    price: 135, // 10% OFF
    indications: 'Malarial fever, Bilious fever, Fevers with shivering',
    indicationsTa: 'மலேரியா காய்ச்சல், பித்த காய்ச்சல், நடுக்கத்துடன் கூடிய காய்ச்சல்'
  },
  {
    name: 'Kalladaipu Kudineer Chooranam',
    tamilName: 'கல்லடைப்பு குடிநீர் சூரணம்',
    slug: 'ruthra-kalladaipu-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 200,
    price: 180, // 10% OFF
    indications: 'Renal calculus, Lithotriptic action, Increases urine output, Reduces burning micturation',
    indicationsTa: 'சிறுநீரக கல், சிறுநீர் எரிச்சல், சிறுநீர் அடைப்பு நீக்கும்'
  },
  {
    name: 'Nochi Kudineer Chooranam',
    tamilName: 'நொச்சி குடிநீர் சூரணம்',
    slug: 'ruthra-nochi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 240,
    price: 216, // 10% OFF
    indications: 'Cough, Fever, Asthma',
    indicationsTa: 'இருமல், காய்ச்சல், ஆஸ்துமா, மூச்சுத்திணறல்'
  },
  {
    name: 'Pidangunaari Kudineer Chooranam',
    tamilName: 'பீடாங்குநாரி குடிநீர் சூரணம்',
    slug: 'ruthra-pidangunaari-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 240,
    price: 216, // 10% OFF
    indications: 'Hepatomegaly, Hepatitis, Splenomegaly, Spleen disorders',
    indicationsTa: 'கல்லீரல் வீக்கம், ஹெபடைடிஸ், மண்ணீரல் வீக்கம், மண்ணீரல் நோய்கள்'
  },
  {
    name: 'Soodhagathai Udaikkum Kudineer Chooranam',
    tamilName: 'சூதகத்தை உடைக்கும் குடிநீர் சூரணம்',
    slug: 'ruthra-soodhagathai-udaikkum-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 200,
    price: 180, // 10% OFF
    indications: 'Amennorhea, Dysmenorrhea, PCOS',
    indicationsTa: 'மாதவிடாய் தடை, வலி மிகுந்த மாதவிடாய், பிசிஓஎஸ் (PCOS)'
  },
  {
    name: 'Vathasura Kudineer Chooranam',
    tamilName: 'வாதசுர குடிநீர் சூரணம்',
    slug: 'ruthra-vathasura-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 240,
    price: 216, // 10% OFF
    indications: 'Fever due to aggravated vatham, Parkinsonism, Arthritis, Rheumatism',
    indicationsTa: 'வாத காய்ச்சல், நடுக்கு வாதம், மூட்டு வாதம், முடக்கு வாதம்'
  },
  {
    name: 'Pitha Sura Kudineer Chooranam',
    tamilName: 'பித்த சுர குடிநீர் சூரணம்',
    slug: 'ruthra-pitha-sura-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 162,
    price: 145, // 10% OFF
    indications: 'Fever due to aggravated pitha disorders',
    indicationsTa: 'பித்த அதிகரிப்பால் வரும் காய்ச்சல், உடல் வெப்பம்'
  },
  {
    name: 'Malattu Karpa Kudineer Chooranam',
    tamilName: 'மலட்டுக் கற்ப குடிநீர் சூரணம்',
    slug: 'ruthra-malattu-karpa-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 210,
    price: 189, // 10% OFF
    indications: 'Boosts male and female fertility',
    indicationsTa: 'ஆண் மற்றும் பெண் கருவுறுதல் ஆற்றலை மேம்படுத்தும்'
  },
  {
    name: 'Mandoorathi Kudineer Chooranam',
    tamilName: 'மண்டூராதி குடிநீர் சூரணம்',
    slug: 'ruthra-mandoorathi-kudineer-chooranam',
    formulation: 'Kudineer',
    formulationTa: 'குடிநீர்',
    medicalSystem: 'classical_siddha',
    packSize: '100gm',
    packSizeTa: '100 கிராம்',
    mrp: 180,
    price: 162, // 10% OFF
    indications: 'Anemia, Dropsy, Edema, Ascites, Liver and spleen diseases',
    indicationsTa: 'ரத்த சோகை, வீக்கம், உதர நோய், கல்லீரல் மற்றும் மண்ணீரல் நோய்கள்'
  },

  // --- SOFT GEL CAPSULES (3 Products - 600mg 60 Caps) ---
  {
    name: 'Dhanwantharam 101 Softgel Capsule',
    tamilName: 'தன்வந்தரம் 101 கேப்சூல்',
    slug: 'ruthra-dhanwantharam-101-capsule',
    formulation: 'Capsules',
    formulationTa: 'கேப்சூல்',
    medicalSystem: 'ayurveda',
    packSize: '600mg (60 Caps)',
    packSizeTa: '600மி.கி (60 கேப்சூல்கள்)',
    mrp: 450,
    price: 405, // 10% OFF
    indications: 'Neuromuscular disorders, Hemiplegia, Paraplegia, Quadriplegia, Wasting disorders, Trigeminal neuralgia, Osteoarthritis, Rheumatoid arthritis, Postpartum care',
    indicationsTa: 'நரம்பு தசை நோய்கள், பக்கவாதம், முடக்கு வாதம், மூட்டு தேய்மானம், பிரசவத்திற்குப் பின் பராமரிப்பு'
  },
  {
    name: 'Gandha Thylam Softgel Capsule',
    tamilName: 'கந்த தைலம் கேப்சூல்',
    slug: 'ruthra-gandha-thylam-capsule',
    formulation: 'Capsules',
    formulationTa: 'கேப்சூல்',
    medicalSystem: 'ayurveda',
    packSize: '600mg (60 Caps)',
    packSizeTa: '600மி.கி (60 கேப்சூல்கள்)',
    mrp: 504,
    price: 453, // 10% OFF
    indications: 'Osteoporosis, Stiffness of joints, Increases BMD, Back pain, Sacroilitis, Ligament injuries, Post viral fever, Bursitis, Hair growth, Fractures',
    indicationsTa: 'எலும்பு முறிவு, தசைநார் காயம், மூட்டு விறைப்பு, எலும்பு பலம் (BMD) அதிகரிப்பு, முதுகு வலி'
  },
  {
    name: 'Sahacharadi 21 Aavarti Softgel Capsule',
    tamilName: 'சகசராதி 21 ஆவர்த்தி கேப்சூல்',
    slug: 'ruthra-sahacharadi-21-aavarti-capsule',
    formulation: 'Capsules',
    formulationTa: 'கேப்சூல்',
    medicalSystem: 'ayurveda',
    packSize: '600mg (60 Caps)',
    packSizeTa: '600மி.கி (60 கேப்சூல்கள்)',
    mrp: 450,
    price: 405, // 10% OFF
    indications: 'Tremors, Neuroinflammatory disorders, Lumbago, Sciatica, Stiffness, Varicose veins, Numbness and tingling',
    indicationsTa: 'நடுக்கம், சியாட்டிகா நரம்பு வலி, இடுப்பு வலி, வெரிகோஸ் வெயின், மரத்துப்போதல்'
  },

  // --- THAILAM & ENNAI (4 Products - 100ml) ---
  {
    name: 'Rej-Viyan Pain Oil',
    tamilName: 'ருத்ரா ரெஜ்-வியான் வலி நிவாரண தைலம்',
    slug: 'ruthra-rej-viyan-pain-oil',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    medicalSystem: 'proprietary',
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    mrp: 200,
    price: 180, // 10% OFF
    indications: 'Pain- Neck, Shoulder, Knee, Heel, Back; Muscle spasms, Swelling, Sprains',
    indicationsTa: 'கழுத்து, தோள்பட்டை, முழங்கால், குதிகால், முதுகு வலி, தசை பிடிப்பு, சுளுக்கு, வீக்கம்'
  },
  {
    name: 'Ulcera Oil – The Wound Healer',
    tamilName: 'ருத்ரா அல்சரா புண் குணப்படுத்தும் எண்ணெய்',
    slug: 'ruthra-ulcera-oil',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    medicalSystem: 'proprietary',
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    mrp: 210,
    price: 189, // 10% OFF
    indications: 'Venous ulcers, Diabetic ulcers, Cuts & sores, Bedsores, Bruises, Non healing ulcers, Trauma wounds, Abrasions, Lacerations',
    indicationsTa: 'சர்க்கரை நோய் புண்கள், ரத்த நாள புண்கள், வெட்டுக்காயங்கள், படுக்கை புண்கள், நாள்பட்ட காயங்கள்'
  },
  {
    name: 'Narshika Hair Oil',
    tamilName: 'ருத்ரா நார்ஷிகா மூலிகை தலைமுடி எண்ணெய்',
    slug: 'ruthra-narshika-hair-oil',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    medicalSystem: 'proprietary',
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    mrp: 240,
    price: 216, // 10% OFF
    indications: 'Controls dandruff, Reduces hair fall, Strengthens hair roots, Increases density & helps to keep scalp nourished',
    indicationsTa: 'பொடுகு கட்டுப்பாடு, முடி உதிர்வை தடுத்தல், வேர்களுக்கு வலிமை, அடர்த்தியான கூந்தல் வளர்ச்சி'
  },
  {
    name: 'Nalpamaradi Taila',
    tamilName: 'நால்பாமராதி தைலம்',
    slug: 'ruthra-nalpamaradi-taila',
    formulation: 'Thailam',
    formulationTa: 'தைலம்',
    medicalSystem: 'ayurveda',
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    mrp: 180,
    price: 162, // 10% OFF
    indications: 'Skin diseases, Erysipelos, Eczema, Itching, Dryness of skin, Boils, Carbuncle, Abhyangam, For general body massage',
    indicationsTa: 'தோல் நோய்கள், எக்சிமா, நமைச்சல், வறண்ட தோல், கொப்பளங்கள், அபியங்கம் முழு உடல் மசாஜ்'
  },

  // --- SYRUP & KASHAYAM (3 Products) ---
  {
    name: 'Sinocof Cough Syrup',
    tamilName: 'சினோகாஃப் இருமல் சிரப்',
    slug: 'ruthra-sinocof-cough-syrup',
    formulation: 'Syrups',
    formulationTa: 'சிரப்',
    medicalSystem: 'proprietary',
    packSize: '100ml',
    packSizeTa: '100 மி.லி',
    mrp: 96,
    price: 86, // 10% OFF
    indications: 'Common cold, Cough- Dry, Wet, Allergic, Chest congestion, Bronchitis, Asthma',
    indicationsTa: 'சளி, வறட்டு இருமல், நெஞ்சு சளி, ஒவ்வாமை இருமல், ஆஸ்துமா, மூச்சுக்குழாய் அழற்சி'
  },
  {
    name: 'Ramabana Kashayam',
    tamilName: 'ராம்பாண கஷாயம்',
    slug: 'ruthra-ramabana-kashayam',
    formulation: 'Kashayam',
    formulationTa: 'கஷாயம்',
    medicalSystem: 'proprietary',
    packSize: '200ml',
    packSizeTa: '200 மி.லி',
    mrp: 240,
    price: 216, // 10% OFF
    indications: 'All types of fever, Clinically reduce symptoms of pyrexia such as muscle pain, joint pain, Burning sensation of eyes, Poor appetite, Clinically effective in infectious fevers, Helps to reduce increased WBC count & increase reduced platelets',
    indicationsTa: 'அனைத்து வகை காய்ச்சல், உடல் வலி, மூட்டு வலி, கண் எரிச்சல், பசியின்மை, பிளேட்லெட் எண்ணிக்கையை அதிகரிக்க உதவும்'
  },
  {
    name: 'Esy-swas Drops',
    tamilName: 'ஈஸி-ஸ்வாஸ் டிராப்ஸ்',
    slug: 'ruthra-esy-swas-drops',
    formulation: 'Drops',
    formulationTa: 'சொட்டு மருந்து',
    medicalSystem: 'proprietary',
    packSize: '50ml',
    packSizeTa: '50 மி.லி',
    mrp: 198,
    price: 178, // 10% OFF
    indications: 'Asthma, Wheezing, Arthralgia, URI, LRI, COPD, Fever',
    indicationsTa: 'ஆஸ்துமா, மூச்சிரைப்பு, வீசிங், சுவாச பாதை அழற்சி, மூட்டு வலி, காய்ச்சல்'
  },

  // --- SKIN AND HAIR CARE PRODUCTS (2 Products - 75 gms) ---
  {
    name: "Ruthra's Nalangu Maavu Powder",
    tamilName: 'ருத்ரா நலங்கு மாவு பொடி',
    slug: 'ruthra-nalangu-maavu-powder',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'proprietary',
    packSize: '75 gms',
    packSizeTa: '75 கிராம்',
    mrp: 120,
    price: 108, // 10% OFF
    indications: 'Face pack, Body wash, Removes hyperpigmentation, Enriches skin health',
    indicationsTa: 'முகப்பொலிவு பேக், மூலிகை குளியல் பொடி, கரும்புள்ளிகளை நீக்கும், சரும நலம் காக்கும்'
  },
  {
    name: "Ruthra's Shigakai Powder",
    tamilName: 'ருத்ரா சீயக்காய் பொடி',
    slug: 'ruthra-shigakai-powder',
    formulation: 'Chooranam',
    formulationTa: 'சூரணம்',
    medicalSystem: 'proprietary',
    packSize: '75 gms',
    packSizeTa: '75 கிராம்',
    mrp: 120,
    price: 108, // 10% OFF
    indications: 'Removes dandruff, Promotes healthy hair growth, Reduces body heat, Cleanses the scalp',
    indicationsTa: 'பொடுகு நீக்கும், அடர்த்தியான கூந்தல் வளர்ச்சி, உடல் சூடு தணிக்கும், தலையை சுத்தப்படுத்தும்'
  }
];

async function main() {
  console.log('====================================================');
  console.log('RUTHRA MEDICINES — THERAPEUTIC INDEX CATALOG SYNC');
  console.log(`Total Official Therapeutic Index Formulations: ${THERAPEUTIC_INDEX_PRODUCTS.length}`);
  console.log('====================================================\n');

  let connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    const envFiles = ['.env.local', '.env'];
    for (const ef of envFiles) {
      const p = path.resolve(process.cwd(), ef);
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, 'utf-8');
        const m = content.match(/DATABASE_URL=["']?([^"'\r\n]+)["']?/);
        if (m) {
          connectionString = m[1];
          break;
        }
      }
    }
  }

  if (!connectionString) {
    console.error('ERROR: DATABASE_URL not found.');
    process.exit(1);
  }

  let schema = 'ruthra';
  try {
    const url = new URL(connectionString.replace('postgresql://', 'http://'));
    const s = url.searchParams.get('schema');
    if (s) schema = s;
  } catch {}

  const isCloud = connectionString.includes('supabase') || connectionString.includes('pooler');
  const cleanConnectionString = connectionString.replace(/[?&]sslmode=[^&]+/g, '');

  const pool = new Pool({ 
    connectionString: cleanConnectionString,
    ...(isCloud ? { ssl: { rejectUnauthorized: false } } : {})
  });
  const adapter = new PrismaPg(pool, { schema });
  const prisma = new PrismaClient({ adapter });

  try {
    // 1. Mark all existing products as Coming Soon first
    console.log('Step 1: Setting non-index products to isComingSoon = true...');
    await prisma.product.updateMany({
      data: {
        isComingSoon: true,
        inStock: false
      }
    });

    // 2. Upsert each of the 34 official Therapeutic Index products as In-Stock
    console.log('\nStep 2: Syncing 34 Official Therapeutic Index Formulations into PostgreSQL...');
    let activeCount = 0;

    for (let i = 0; i < THERAPEUTIC_INDEX_PRODUCTS.length; i++) {
      const p = THERAPEUTIC_INDEX_PRODUCTS[i];
      const prodId = `prod-ti-${String(i + 1).padStart(2, '0')}`;

      const medSys = p.medicalSystem === 'ayurveda' 
        ? 'AYURVEDA' 
        : p.medicalSystem === 'proprietary' 
        ? 'PROPRIETARY' 
        : 'SIDDHA';

      const existing = await prisma.product.findFirst({
        where: {
          OR: [
            { slug: p.slug },
            { id: prodId }
          ]
        }
      });

      const dataToSave = {
        name: p.name,
        tamilName: p.tamilName,
        slug: p.slug,
        medicalSystem: medSys as any,
        formulation: p.formulation,
        formulationTa: p.formulationTa,
        categoryGroup: p.formulation.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        price: p.price,
        originalPrice: p.mrp,
        packSize: p.packSize,
        packSizeTa: p.packSizeTa,
        shortDescription: p.indications,
        shortDescriptionTa: p.indicationsTa,
        description: `${p.name} (${p.tamilName}) is an authentic formulation indicated for: ${p.indications}. Formulated according to strict classical methods with pure shodhana techniques.`,
        descriptionTa: `${p.tamilName} - ${p.indicationsTa}. திருநெல்வேலி பாரம்பரிய முறைப்படி தூய மூலிகைகளால் தயாரிக்கப்பட்டது.`,
        traditionalRole: p.indications,
        traditionalRoleTa: p.indicationsTa,
        isComingSoon: false,
        inStock: true,
        stock: 25,
        featured: i < 8,
        badge: i < 8 ? 'Bestseller' : null,
        badgeTa: i < 8 ? 'பிரபலமானது' : null,
        image: existing?.image || `/images/products/${p.slug}/front.jpg`,
        images: existing?.images && (existing.images as any).length > 0 ? existing.images : [`/images/products/${p.slug}/front.jpg`],
        gallery: existing?.gallery && (existing.gallery as any).length > 0 ? existing.gallery : [`/images/products/${p.slug}/front.jpg`],
        ingredients: [
          { name: 'Pure Botanical Shodhana Formulation', tamilName: 'தூய சுத்தி முறை மூலிகைகள்', botanicalName: 'Traditional Compound', role: p.indications, roleTa: p.indicationsTa, amount: '100%' }
        ] as any,
        howToUse: [
          { step: '01', title: 'Dosage Protocol', titleTa: 'மருந்து உட்கொள்ளும் முறை', instruction: 'Take as directed by physician with appropriate carrier (warm water/milk/honey).', instructionTa: 'மருத்துவர் ஆலோசனைப்படி வெந்நீர் அல்லது பாலுடன் உட்கொள்ளவும்.' }
        ] as any,
        dosage: {
          morning: '1 unit after food',
          evening: '1 unit after food',
          timing: 'After meals',
          with: 'Warm water or honey',
          morningTa: 'காலை உணவுக்குப் பின்',
          eveningTa: 'இரவு உணவுக்குப் பின்',
          timingTa: 'உணவுக்குப் பின்',
          withTa: 'வெந்நீர் அல்லது தேன்'
        } as any,
        safety: {
          precautions: 'Consult physician for custom therapeutic duration.',
          precautionsTa: 'தொடர் உபயோகத்திற்கு மருத்துவர் ஆலோசனை பெறவும்.'
        } as any,
        storage: {
          temperature: 'Store in a cool, dry place',
          precautions: 'Keep container tightly closed',
          temperatureTa: 'குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்',
          precautionsTa: 'ஈரப்பதம் படாமல் வைக்கவும்'
        } as any,
        searchKeywords: [p.name.toLowerCase(), p.formulation.toLowerCase(), ...p.indications.toLowerCase().split(', ')],
        tamilKeywords: [p.tamilName, p.formulationTa]
      };

      if (existing) {
        await prisma.product.update({
          where: { id: existing.id },
          data: dataToSave
        });
      } else {
        await prisma.product.create({
          data: {
            id: prodId,
            ...dataToSave
          }
        });
      }
      activeCount++;
      console.log(`[${activeCount}/${THERAPEUTIC_INDEX_PRODUCTS.length}] Synced: ${p.name} (MRP: ₹${p.mrp} -> ₹${p.price})`);
    }

    const totalInDb = await prisma.product.count();
    const activeInDb = await prisma.product.count({ where: { isComingSoon: false, inStock: true } });
    const comingSoonInDb = await prisma.product.count({ where: { isComingSoon: true } });

    console.log('\n====================================================');
    console.log('DATABASE SYNC COMPLETED SUCCESSFULLY:');
    console.log(`• Total Products in Database : ${totalInDb}`);
    console.log(`• Active Therapeutic Index   : ${activeInDb} (In-Stock with 10% Offer Price)`);
    console.log(`• Coming Soon Formulations   : ${comingSoonInDb}`);
    console.log('====================================================\n');
  } catch (err) {
    console.error('Fatal error during catalog sync:', err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
