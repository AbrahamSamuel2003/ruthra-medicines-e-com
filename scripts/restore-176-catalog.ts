import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PRODUCTS } from '../src/data/products';
import { SIDDHA_NAV_CATEGORIES, AYURVEDA_NAV_CATEGORIES } from '../src/data/categories';
import fs from 'fs';
import path from 'path';

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

let schema = 'ruthra';
try {
  const url = new URL(connectionString!.replace('postgresql://', 'http://'));
  const s = url.searchParams.get('schema');
  if (s) schema = s;
} catch {}

const isCloud = connectionString!.includes('supabase') || connectionString!.includes('pooler');
const cleanConnectionString = connectionString!.replace(/[?&]sslmode=[^&]+/g, '');

const pool = new Pool({ 
  connectionString: cleanConnectionString,
  max: 5,
  connectionTimeoutMillis: 15000,
  ...(isCloud ? { ssl: { rejectUnauthorized: false } } : {})
});

const adapter = new PrismaPg(pool, { schema });
const prisma = new PrismaClient({ adapter });

// Define the 34 Official Therapeutic Index in-stock items with direct mapping to original 176 IDs
const THERAPEUTIC_INDEX_34 = [
  // Chooranam 12 Items (30 Sachets)
  { id: 'prod-siddha-001', name: 'Amirtha Sanjeevi Chooranam', tamilName: 'அமிர்த சஞ்சீவி சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 234, price: 210, indications: 'Pitha disorders, Genito urinary tract diseases, Leucorrhea, Gonorrhea, Osteomyelitis, Peripheral neuritis' },
  { id: 'prod-siddha-019', name: 'Madhurathi Chooranam', tamilName: 'மதுராதி சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 249, price: 224, indications: 'GERD, Giddiness, Nausea, Anorexia' },
  { id: 'prod-siddha-022', name: 'Megasanthi Chooranam', tamilName: 'மேகசாந்தி சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 180, price: 162, indications: 'Contraction of nerve or muscle, Skin disease due to venereal causes, Syphilitic ulcer, Pricking pain' },
  { id: 'prod-siddha-007', name: 'Chandraganthi Chooranam', tamilName: 'சந்திரகாந்தி சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 300, price: 270, indications: 'Oligospermia, Pitha disorders, Vaginosis, Genital disorders, Venereal diseases' },
  { id: 'prod-siddha-033', name: 'Sagala Noi Chooranam', tamilName: 'சகல நோய் சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 231, price: 208, indications: 'Back pain, Head diseases, Pitha diseases, Indigestion, Burning sensation of eyes, Localized edema, Lithiasis, Arthritis, Skin diseases' },
  { id: 'prod-prop-01', name: 'Madhura Chooranam', tamilName: 'மதுரா சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 375, price: 337, indications: 'Type-II Diabetes & its complications' },
  { id: 'prod-siddha-034', name: 'Sarvanga Vatha Chooranam', tamilName: 'சர்வாங்க வாத சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 231, price: 208, indications: 'Peripheral neuritis, Myalgia, Stiffness of joints, Facial paralysis' },
  { id: 'prod-siddha-037', name: 'Sugabedhi Chooranam', tamilName: 'சுகபேதி சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 276, price: 248, indications: 'Constipation, Pitha disorders' },
  { id: 'prod-siddha-006', name: 'Bhavanakadukkai Chooranam', tamilName: 'பாவன கடுக்காய் சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 360, price: 324, indications: 'Constipation, Indigestion, Flatulence, Piles' },
  { id: 'prod-ayurveda-023', name: 'Sitopaladi Churna', tamilName: 'சிதோபலாதி சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 198, price: 178, indications: 'Cough, Cold, Bronchitis, Fever, Burning sensation in extremities' },
  { id: 'prod-siddha-029', name: 'Pirandai Chooranam', tamilName: 'பிரண்டை சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 315, price: 283, indications: 'Piles, Indigestion, Gastric ulcer, Joint pain, Calcium deficiency' },
  { id: 'prod-siddha-015', name: 'Karanthai Chooranam', tamilName: 'கரந்தை சூரணம்', packSize: '30 Sachets', packSizeTa: '30 பாக்கெட்டுகள்', mrp: 285, price: 256, indications: 'Skin diseases, Blood purification, Syphilis, Scabies, Eczema' },

  // Proprietary Liquids & Oils (6 Items)
  { id: 'prod-26', name: 'Ruthra Rejviyan Pain Oil', tamilName: 'ருத்ரா ரெஜ்-வியான் வலி நிவாரண தைலம்', packSize: '100ml', packSizeTa: '100 மி.லி', mrp: 230, price: 200, indications: 'Instant relief from joint pain, back pain, muscular stiffness, arthritis, and sciatica.' },
  { id: 'prod-27', name: 'Ruthra Ulcera Oil', tamilName: 'ருத்ரா அல்சரா புண் ஆற்று தைலம்', packSize: '100ml', packSizeTa: '100 மி.லி', mrp: 240, price: 210, indications: 'Healing external ulcers, diabetic foot ulcers, chronic wounds, burns, and skin lesions.' },
  { id: 'prod-28', name: 'Ruthra Narshika Herbal Hair Oil', tamilName: 'ருத்ரா நார்ஷிகா மூலிகை கூந்தல் தைலம்', packSize: '100ml', packSizeTa: '100 மி.லி', mrp: 280, price: 240, indications: 'Hair fall control, dandruff prevention, promoting rich hair regrowth and cooling scalp.' },
  { id: 'prod-30', name: 'Ruthra Sinocof Herbal Cough Syrup', tamilName: 'ருத்ரா சினோகாஃப் இருமல் சிரப்', packSize: '100ml', packSizeTa: '100 மி.லி', mrp: 110, price: 96, indications: 'Soothes dry and productive cough, relieves throat congestion, bronchitis, and allergic cold.' },
  { id: 'prod-31', name: 'Ruthra Ramabaana Liquid Kasayam', tamilName: 'ருத்ரா ராமபாண திரவ கஷாயம்', packSize: '200ml', packSizeTa: '200 மி.லி', mrp: 280, price: 240, indications: 'Powerful immune-booster, rapid recovery from chronic viral fevers, fatigue, and systemic inflammation.' },
  { id: 'prod-32', name: 'Ruthra Esyswas Herbal Drops', tamilName: 'ருத்ரா ஈஸி-ஸ்வாஸ் சொட்டு மருந்து', packSize: '50ml', packSizeTa: '50 மி.லி', mrp: 220, price: 198, indications: 'Sinus congestion, nasal blockage, headache due to sinusitis, allergic rhinitis, and wheezing.' },

  // Proprietary Tablets & Powders (3 Items)
  { id: 'prod-prop-02', name: 'Ruthra Navara Tablet', tamilName: 'ருத்ரா நவரா மாத்திரை', packSize: '60 Tablets', packSizeTa: '60 மாத்திரைகள்', mrp: 380, price: 320, indications: 'Nervous weakness, vitality enhancement, tissue rejuvenation, and physical strength.' },
  { id: 'prod-prop-09', name: "Ruthra's Nalangu Maavu Powder", tamilName: 'ருத்ரா நலங்கு மாவு பொடி', formulation: 'Powder', formulationTa: 'பொடி', packSize: '75 gms', packSizeTa: '75 கிராம்', mrp: 120, price: 108, indications: 'Natural herbal bath powder for radiant skin, blemishes, body odor, and acne.' },
  { id: 'prod-prop-10', name: "Ruthra's Shigakai Powder", tamilName: 'ருத்ரா சீயக்காய் பொடி', formulation: 'Powder', formulationTa: 'பொடி', packSize: '75 gms', packSizeTa: '75 கிராம்', mrp: 120, price: 108, indications: 'Natural botanical hair cleanser for silky strong hair, removing excess scalp oil and dandruff.' },

  // Classical Kudineer Formulations (4 Items)
  { id: 'prod-siddha-042', name: 'Ruthra Adathodai Kudineer Chooranam', tamilName: 'ருத்ரா ஆடாதோடை குடிநீர் சூரணம்', packSize: '100g', packSizeTa: '100 கிராம்', mrp: 185, price: 160, indications: 'Bronchial asthma, chronic cough, respiratory congestion, and hemoptysis.' },
  { id: 'prod-siddha-043', name: 'Ruthra Kabasura Kudineer Chooranam', tamilName: 'ருத்ரா கபசூர குடிநீர் சூரணம்', packSize: '100g', packSizeTa: '100 கிராம்', mrp: 185, price: 160, indications: 'Viral fevers, respiratory illness, acute phlegm congestion, flu symptoms.' },
  { id: 'prod-siddha-051', name: 'Ruthra Nilavembu Kudineer Chooranam', tamilName: 'ருத்ரா நிலவேம்பு குடிநீர் சூரணம்', packSize: '100g', packSizeTa: '100 கிராம்', mrp: 185, price: 160, indications: 'All types of fevers including dengue, chikungunya, intermittent fevers, and body aches.' },
  { id: 'prod-siddha-052', name: 'Ruthra Nochi Kudineer Chooranam', tamilName: 'ருத்ரா நொச்சி குடிநீர் சூரணம்', packSize: '100g', packSizeTa: '100 கிராம்', mrp: 185, price: 160, indications: 'Sinusitis, headache, generalized vatha pain, and upper respiratory tract disorders.' },

  // Classical Legiyam & Rasayanam (5 Items)
  { id: 'prod-siddha-061', name: 'Ruthra Aswagandhi Legiyam', tamilName: 'ருத்ரா அஸ்வகந்தி லேகியம்', packSize: '200g', packSizeTa: '200 கிராம்', mrp: 275, price: 240, indications: 'Nerve tonic, physical stamina, emaciation, stress, and general debility.' },
  { id: 'prod-siddha-062', name: 'Ruthra Inji Legiyam', tamilName: 'ருத்ரா இஞ்சி லேகியம்', packSize: '200g', packSizeTa: '200 கிராம்', mrp: 275, price: 240, indications: 'Indigestion, dyspepsia, morning sickness, anorexia, and abdominal discomfort.' },
  { id: 'prod-siddha-065', name: 'Ruthra Karunai Legiyam', tamilName: 'ருத்ரா கருணை லேகியம்', packSize: '200g', packSizeTa: '200 கிராம்', mrp: 275, price: 240, indications: 'Bleeding and non-bleeding piles, fistula, chronic constipation, and anal fissures.' },
  { id: 'prod-siddha-067', name: 'Ruthra Mudakathan Legiyam', tamilName: 'ருத்ரா முடக்கத்தான் லேகியம்', packSize: '200g', packSizeTa: '200 கிராம்', mrp: 275, price: 240, indications: 'Joint stiffness, osteoarthritis, rheumatoid arthritis, gout, and neuromuscular pain.' },
  { id: 'prod-siddha-079', name: 'Ruthra Thippili Rasayanam', tamilName: 'ருத்ரா திப்பிலி ரசாயனம்', packSize: '200g', packSizeTa: '200 கிராம்', mrp: 290, price: 250, indications: 'Chronic respiratory infections, asthma, digestive weakness, and hiccup.' },

  // Classical Vadagam, Nei, Mezhugu & Parpam (4 Items)
  { id: 'prod-siddha-082', name: 'Ruthra Karuvepilai Vadagam', tamilName: 'ருத்ரா கறிவேப்பிலை வடகம்', packSize: '50g', packSizeTa: '50 கிராம்', mrp: 165, price: 140, indications: 'Vomiting, morning sickness, hyperacidity, anorexia, and gastric irritation.' },
  { id: 'prod-siddha-089', name: 'Ruthra Serankottai Nei', tamilName: 'ருத்ரா சேராங்கொட்டை நெய்', packSize: '100ml', packSizeTa: '100 மி.லி', mrp: 325, price: 280, indications: 'Severe rheumatoid arthritis, bronchial asthma, chronic skin ailments, and nerve pain.' },
  { id: 'prod-siddha-095', name: 'Ruthra Rasagandhi Mezhugu', tamilName: 'ருத்ரா ரசகந்தி மெழுகு', packSize: '30g', packSizeTa: '30 கிராம்', mrp: 380, price: 320, indications: 'Chronic non-healing ulcers, deep fungal skin diseases, carbuncles, glandular swellings, arthritis.' },
  { id: 'prod-siddha-100', name: 'Ruthra Sangu Parpam', tamilName: 'ருத்ரா சங்கு பற்பம்', packSize: '10g', packSizeTa: '10 கிராம்', mrp: 340, price: 290, indications: 'Gastric ulcers, GERD, hyperacidity, duodenal ulcers, pimples, and calcium deficiency.' }
];

async function main() {
  console.log('🔄 1. Deleting all non-standard and extra prod-ti-* products...');
  const validIds = PRODUCTS.map(p => p.id);
  const deletedExtra = await prisma.product.deleteMany({
    where: {
      id: { notIn: validIds }
    }
  });
  console.log(`✅ Pruned ${deletedExtra.count} extra/non-standard product records.`);

  console.log(`🔄 2. Syncing all ${PRODUCTS.length} authentic products into PostgreSQL...`);
  for (const p of PRODUCTS) {
    const medSys = (p.medicalSystem ? p.medicalSystem.toUpperCase() : 'SIDDHA') as 'SIDDHA' | 'AYURVEDA' | 'PROPRIETARY';
    await prisma.product.upsert({
      where: { id: p.id },
      update: {
        name: p.name,
        tamilName: p.tamilName,
        slug: p.slug,
        medicalSystem: medSys,
        formulation: p.formulation,
        formulationTa: p.formulationTa,
        categoryGroup: p.categoryGroup || (p.formulation ? p.formulation.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'general'),
        concerns: p.concerns || [],
        price: p.price,
        originalPrice: p.originalPrice || p.price,
        packSize: p.packSize,
        packSizeTa: p.packSizeTa,
        shortDescription: p.shortDescription || '',
        shortDescriptionTa: p.shortDescriptionTa || '',
        description: p.description || '',
        descriptionTa: p.descriptionTa || '',
        traditionalRole: p.traditionalRole || '',
        traditionalRoleTa: p.traditionalRoleTa || '',
        badge: p.badge || null,
        badgeTa: p.badgeTa || null,
        image: p.image || '',
        images: p.images || [p.image || ''],
        gallery: p.gallery || [],
        isComingSoon: true,
        inStock: false,
        stock: 0,
        featured: false,
        ingredients: (p.ingredients || []) as any,
        howToUse: (p.howToUse || []) as any,
        dosage: (p.dosage || {}) as any,
        safety: (p.safety || {}) as any,
        storage: (p.storage || {}) as any,
        faqs: (p.faqs || []) as any,
        searchKeywords: p.searchKeywords || [],
      },
      create: {
        id: p.id,
        name: p.name,
        tamilName: p.tamilName,
        slug: p.slug,
        medicalSystem: medSys,
        formulation: p.formulation,
        formulationTa: p.formulationTa,
        categoryGroup: p.categoryGroup || (p.formulation ? p.formulation.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'general'),
        concerns: p.concerns || [],
        price: p.price,
        originalPrice: p.originalPrice || p.price,
        packSize: p.packSize,
        packSizeTa: p.packSizeTa,
        shortDescription: p.shortDescription || '',
        shortDescriptionTa: p.shortDescriptionTa || '',
        description: p.description || '',
        descriptionTa: p.descriptionTa || '',
        traditionalRole: p.traditionalRole || '',
        traditionalRoleTa: p.traditionalRoleTa || '',
        badge: p.badge || null,
        badgeTa: p.badgeTa || null,
        image: p.image || '',
        images: p.images || [p.image || ''],
        gallery: p.gallery || [],
        isComingSoon: true,
        inStock: false,
        stock: 0,
        featured: false,
        ingredients: (p.ingredients || []) as any,
        howToUse: (p.howToUse || []) as any,
        dosage: (p.dosage || {}) as any,
        safety: (p.safety || {}) as any,
        storage: (p.storage || {}) as any,
        faqs: (p.faqs || []) as any,
        searchKeywords: p.searchKeywords || [],
      }
    });
  }
  console.log(`✅ All ${PRODUCTS.length} authentic formulations populated.`);

  console.log('🔄 3. Updating the 34 Official Therapeutic Index formulations to In-Stock & 10% OFF...');
  let updatedCount = 0;
  for (let i = 0; i < THERAPEUTIC_INDEX_34.length; i++) {
    const item = THERAPEUTIC_INDEX_34[i];
    const res = await prisma.product.update({
      where: { id: item.id },
      data: {
        price: item.price,
        originalPrice: item.mrp,
        packSize: item.packSize,
        packSizeTa: item.packSizeTa,
        shortDescription: item.indications,
        isComingSoon: false,
        inStock: true,
        stock: 25,
        featured: i < 8,
        badge: i < 8 ? 'Bestseller' : null,
        badgeTa: i < 8 ? 'பிரபலமானது' : null,
        ...(item.formulation ? { formulation: item.formulation, formulationTa: item.formulationTa } : {})
      }
    });
    if (res) updatedCount++;
  }
  console.log(`✅ Successfully activated ${updatedCount} official products as Live In-Stock.`);

  // 4. Sync Categories
  console.log('🔄 4. Syncing Category metadata...');
  const allCategories = [
    ...SIDDHA_NAV_CATEGORIES.map(c => ({
      slug: c.slug,
      title: c.title,
      titleTa: c.titleTa,
      medicalSystem: 'SIDDHA' as const,
      description: c.desc,
      itemCount: c.count
    })),
    ...AYURVEDA_NAV_CATEGORIES.map(c => ({
      slug: c.slug,
      title: c.title,
      titleTa: c.titleTa,
      medicalSystem: 'AYURVEDA' as const,
      description: c.desc,
      itemCount: c.count
    }))
  ];

  for (const cat of allCategories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        title: cat.title,
        titleTa: cat.titleTa,
        medicalSystem: cat.medicalSystem,
        description: cat.description,
        itemCount: cat.itemCount
      },
      create: {
        slug: cat.slug,
        title: cat.title,
        titleTa: cat.titleTa,
        medicalSystem: cat.medicalSystem,
        description: cat.description,
        itemCount: cat.itemCount
      }
    });
  }

  // 5. Final Catalog Audit
  const total = await prisma.product.count();
  const active = await prisma.product.count({ where: { isComingSoon: false } });
  const comingSoon = await prisma.product.count({ where: { isComingSoon: true } });
  const siddha = await prisma.product.count({ where: { medicalSystem: 'SIDDHA' } });
  const ayurveda = await prisma.product.count({ where: { medicalSystem: 'AYURVEDA' } });
  const proprietary = await prisma.product.count({ where: { medicalSystem: 'PROPRIETARY' } });

  console.log('\n=======================================');
  console.log('📊 FINAL RESTORED CATALOG METRICS:');
  console.log(`Total SKUs: ${total} (Target: 176)`);
  console.log(`- Siddha Formulations: ${siddha} (Target: 111)`);
  console.log(`- Ayurveda Formulations: ${ayurveda} (Target: 55)`);
  console.log(`- Proprietary Range: ${proprietary} (Target: 10)`);
  console.log(`---------------------------------------`);
  console.log(`Live In-Stock (Price Visible): ${active} (Target: 34)`);
  console.log(`Coming Soon (Price Hidden): ${comingSoon} (Target: 142)`);
  console.log('=======================================\n');
}

main()
  .catch((e) => {
    console.error('❌ Error during restoration:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
