const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const fs = require('fs');
const path = require('path');

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
  console.error('❌ ERROR: DATABASE_URL not found in environment or .env files.');
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

async function sync() {
  console.log('🔄 Syncing categories in PostgreSQL...');
  await prisma.category.upsert({
    where: { slug: 'softgel-capsules' },
    update: {
      title: 'Softgel Capsules',
      titleTa: 'சாஃப்ட்ஜெல் கேப்சூல்ஸ்',
      medicalSystem: 'AYURVEDA',
      description: 'Potentiated lipid-based soft gelatin herbal oil capsules',
      itemCount: 3
    },
    create: {
      slug: 'softgel-capsules',
      title: 'Softgel Capsules',
      titleTa: 'சாஃப்ட்ஜெல் கேப்சூல்ஸ்',
      medicalSystem: 'AYURVEDA',
      description: 'Potentiated lipid-based soft gelatin herbal oil capsules',
      itemCount: 3
    }
  });

  console.log('🔄 Reading master catalog from src/data/products.ts...');
  const code = fs.readFileSync('src/data/products.ts', 'utf8');
  const blocks = code.split(/(?=\{\s*(?:\r?\n\s*)id:\s*['"]prod-)/);

  let updatedCount = 0;
  let liveCount = 0;
  let comingSoonCount = 0;

  for (let i = 1; i < blocks.length; i++) {
    const b = blocks[i];
    const id = b.match(/id:\s*['"]([^'"]+)['"]/)?.[1];
    if (!id || id.startsWith('bundle-')) continue;

    const name = b.match(/name:\s*['"]([^'"]+)['"]/)?.[1] || '';
    const tamilName = b.match(/tamilName:\s*['"]([^'"]+)['"]/)?.[1] || name;
    const slug = b.match(/slug:\s*['"]([^'"]+)['"]/)?.[1] || id;
    const rawMedSys = b.match(/medicalSystem:\s*['"]([^'"]+)['"]/)?.[1] || 'siddha';
    const medicalSystem = rawMedSys.toUpperCase();
    const formulation = b.match(/formulation:\s*['"]([^'"]+)['"]/)?.[1] || 'Chooranam';
    const formulationTa = b.match(/formulationTa:\s*['"]([^'"]+)['"]/)?.[1] || 'சூரணம்';
    const categoryGroup = b.match(/categoryGroup:\s*['"]([^'"]+)['"]/)?.[1] || null;

    const price = Number(b.match(/price:\s*(\d+)/)?.[1] || 0);
    const originalPrice = Number(b.match(/originalPrice:\s*(\d+)/)?.[1] || price);
    const packSize = b.match(/packSize:\s*['"]([^'"]+)['"]/)?.[1] || '';
    const packSizeTa = b.match(/packSizeTa:\s*['"]([^'"]+)['"]/)?.[1] || '';

    const shortDescription = b.match(/shortDescription:\s*['"]([^'"]+)['"]/)?.[1] || name;
    const shortDescriptionTa = b.match(/shortDescriptionTa:\s*['"]([^'"]+)['"]/)?.[1] || tamilName;
    const description = b.match(/description:\s*['"]([^'"]+)['"]/)?.[1] || shortDescription;
    const descriptionTa = b.match(/descriptionTa:\s*['"]([^'"]+)['"]/)?.[1] || shortDescriptionTa;
    const traditionalRole = b.match(/traditionalRole:\s*['"]([^'"]+)['"]/)?.[1] || '';
    const traditionalRoleTa = b.match(/traditionalRoleTa:\s*['"]([^'"]+)['"]/)?.[1] || '';
    const badge = b.match(/badge:\s*['"]([^'"]+)['"]/)?.[1] || null;
    const badgeTa = b.match(/badgeTa:\s*['"]([^'"]+)['"]/)?.[1] || null;
    const image = b.match(/image:\s*['"]([^'"]+)['"]/)?.[1] || '/images/ruthra-icon.png';

    const isComingSoon = b.match(/isComingSoon:\s*(true|false)/)?.[1] === 'true';
    const inStock = b.match(/inStock:\s*(true|false)/)?.[1] === 'true';
    const featured = b.match(/featured:\s*(true|false)/)?.[1] === 'true';

    await prisma.product.upsert({
      where: { id },
      update: {
        name,
        tamilName,
        slug,
        medicalSystem,
        formulation,
        formulationTa,
        categoryGroup,
        price,
        originalPrice,
        packSize,
        packSizeTa,
        shortDescription,
        shortDescriptionTa,
        description,
        descriptionTa,
        traditionalRole,
        traditionalRoleTa,
        badge,
        badgeTa,
        image,
        images: [image],
        gallery: [image],
        isComingSoon,
        inStock,
        stock: inStock ? 25 : 0,
        featured
      },
      create: {
        id,
        name,
        tamilName,
        slug,
        medicalSystem,
        formulation,
        formulationTa,
        categoryGroup,
        price,
        originalPrice,
        packSize,
        packSizeTa,
        shortDescription,
        shortDescriptionTa,
        description,
        descriptionTa,
        traditionalRole,
        traditionalRoleTa,
        badge,
        badgeTa,
        image,
        images: [image],
        gallery: [image],
        isComingSoon,
        inStock,
        stock: inStock ? 25 : 0,
        featured
      }
    });

    updatedCount++;
    if (!isComingSoon && inStock) {
      liveCount++;
    } else {
      comingSoonCount++;
    }
  }

  const dbLive = await prisma.product.count({ where: { isComingSoon: false, inStock: true } });
  const dbComingSoon = await prisma.product.count({ where: { isComingSoon: true } });
  const dbTotal = await prisma.product.count();

  console.log('\n======================================================');
  console.log('✅ DATABASE SYNCED SUCCESSFULLY:');
  console.log(`• Updated/Upserted Products      : ${updatedCount}`);
  console.log(`• Live In-Stock Products         : ${dbLive} (Expected: 34)`);
  console.log(`• Coming Soon Products           : ${dbComingSoon} (Expected: 145)`);
  console.log(`• Total Products in Database     : ${dbTotal} (Expected: 179)`);
  console.log('======================================================\n');

  await prisma.$disconnect();
  await pool.end();
}

sync().catch(err => {
  console.error('❌ Error during sync:', err);
  process.exit(1);
});
