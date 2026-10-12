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
  console.log('🔄 Reading master catalog from src/data/products.ts...');
  const code = fs.readFileSync('src/data/products.ts', 'utf8');
  const blocks = code.split(/(?=\{\s*(?:\r?\n\s*)id:\s*['"]prod-)/);

  let updatedCount = 0;
  let liveCount = 0;
  let comingSoonCount = 0;

  for (let i = 1; i < blocks.length; i++) {
    const b = blocks[i];
    const id = b.match(/id:\s*['"]([^'"]+)['"]/)?.[1];
    const name = b.match(/name:\s*['"]([^'"]+)['"]/)?.[1];
    const price = Number(b.match(/price:\s*(\d+)/)?.[1] || 0);
    const originalPrice = Number(b.match(/originalPrice:\s*(\d+)/)?.[1] || price);
    const packSize = b.match(/packSize:\s*['"]([^'"]+)['"]/)?.[1] || '';
    const packSizeTa = b.match(/packSizeTa:\s*['"]([^'"]+)['"]/)?.[1] || '';
    const isComingSoon = b.match(/isComingSoon:\s*(true|false)/)?.[1] === 'true';
    const inStock = b.match(/inStock:\s*(true|false)/)?.[1] === 'true';

    if (id) {
      await prisma.product.update({
        where: { id },
        data: {
          price,
          originalPrice,
          packSize,
          packSizeTa,
          isComingSoon,
          inStock,
          stock: inStock ? 25 : 0
        }
      });
      updatedCount++;
      if (!isComingSoon && inStock) {
        liveCount++;
      } else {
        comingSoonCount++;
      }
    }
  }

  const dbLive = await prisma.product.count({ where: { isComingSoon: false, inStock: true } });
  const dbComingSoon = await prisma.product.count({ where: { isComingSoon: true } });
  const dbTotal = await prisma.product.count();

  console.log('\n======================================================');
  console.log('✅ DATABASE SYNCED SUCCESSFULLY:');
  console.log(`• Updated Products in Database   : ${updatedCount}`);
  console.log(`• Live In-Stock Products         : ${dbLive} (Expected: 31)`);
  console.log(`• Coming Soon Products           : ${dbComingSoon} (Expected: 145)`);
  console.log(`• Total Products in Database     : ${dbTotal} (Expected: 176)`);
  console.log('======================================================\n');

  await prisma.$disconnect();
  await pool.end();
}

sync().catch(err => {
  console.error('❌ Error during sync:', err);
  process.exit(1);
});
