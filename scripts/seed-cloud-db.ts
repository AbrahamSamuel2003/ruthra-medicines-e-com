import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PRODUCTS } from '../src/data/products';
import { SIDDHA_NAV_CATEGORIES, AYURVEDA_NAV_CATEGORIES } from '../src/data/categories';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('ERROR: DATABASE_URL environment variable is not defined.');
  console.error('Usage: DATABASE_URL="postgresql://..." npx ts-node scripts/seed-cloud-db.ts');
  process.exit(1);
}

let schema = 'ruthra';
try {
  const url = new URL(connectionString.replace('postgresql://', 'http://'));
  const s = url.searchParams.get('schema');
  if (s) schema = s;
} catch {
  // fallback
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool, { schema });
const prisma = new PrismaClient({ adapter });

async function seed() {
  console.log(`Starting Cloud DB Seed into schema: "${schema}"...`);
  console.log(`Total master formulations to sync: ${PRODUCTS.length}`);

  // 1. Create Categories
  console.log('Seeding Categories...');
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
  console.log(`Successfully synced ${allCategories.length} categories.`);

  // 2. Upsert Products
  console.log('Seeding 182 Formulations...');
  let count = 0;
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
        categoryGroup: p.categoryGroup || p.formulation.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        concerns: p.concerns || [],
        price: p.price,
        originalPrice: p.originalPrice || null,
        packSize: p.packSize,
        packSizeTa: p.packSizeTa,
        shortDescription: p.shortDescription,
        shortDescriptionTa: p.shortDescriptionTa,
        description: p.description,
        descriptionTa: p.descriptionTa,
        traditionalRole: p.traditionalRole || '',
        traditionalRoleTa: p.traditionalRoleTa || '',
        badge: p.badge || null,
        badgeTa: p.badgeTa || null,
        image: p.image,
        images: p.images || [],
        gallery: p.gallery || [],
        isComingSoon: Boolean(p.isComingSoon),
        inStock: Boolean(p.inStock),
        stock: p.stock !== undefined ? Number(p.stock) : 20,
        featured: Boolean(p.featured),
        ingredients: (p.ingredients || []) as any,
        howToUse: (p.howToUse || []) as any,
        dosage: (p.dosage || {}) as any,
        safety: (p.safety || {}) as any,
        storage: (p.storage || {}) as any,
        faqs: (p.faqs || []) as any,
        searchKeywords: p.searchKeywords || [],
        tamilKeywords: p.tamilKeywords || []
      },
      create: {
        id: p.id,
        name: p.name,
        tamilName: p.tamilName,
        slug: p.slug,
        medicalSystem: medSys,
        formulation: p.formulation,
        formulationTa: p.formulationTa,
        categoryGroup: p.categoryGroup || p.formulation.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        concerns: p.concerns || [],
        price: p.price,
        originalPrice: p.originalPrice || null,
        packSize: p.packSize,
        packSizeTa: p.packSizeTa,
        shortDescription: p.shortDescription,
        shortDescriptionTa: p.shortDescriptionTa,
        description: p.description,
        descriptionTa: p.descriptionTa,
        traditionalRole: p.traditionalRole || '',
        traditionalRoleTa: p.traditionalRoleTa || '',
        badge: p.badge || null,
        badgeTa: p.badgeTa || null,
        image: p.image,
        images: p.images || [],
        gallery: p.gallery || [],
        isComingSoon: Boolean(p.isComingSoon),
        inStock: Boolean(p.inStock),
        stock: p.stock !== undefined ? Number(p.stock) : 20,
        featured: Boolean(p.featured),
        ingredients: (p.ingredients || []) as any,
        howToUse: (p.howToUse || []) as any,
        dosage: (p.dosage || {}) as any,
        safety: (p.safety || {}) as any,
        storage: (p.storage || {}) as any,
        faqs: (p.faqs || []) as any,
        searchKeywords: p.searchKeywords || [],
        tamilKeywords: p.tamilKeywords || []
      }
    });
    count++;
  }

  console.log(`Cloud DB Seed Complete: ${count} products successfully synced.`);
}

seed()
  .catch(e => {
    console.error('Seed Failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
