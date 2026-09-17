import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:samdani2028@127.0.0.1:5432/ss40_network?schema=ruthra';

let schema = 'ruthra';
try {
  const url = new URL(connectionString.replace('postgresql://', 'http://'));
  const s = url.searchParams.get('schema');
  if (s) schema = s;
} catch {
  // fallback
}

const isCloud = connectionString.includes('supabase') || connectionString.includes('pooler');
const cleanConnectionString = connectionString.replace(/[?&]sslmode=[^&]+/g, '');

const pool = new Pool({ 
  connectionString: cleanConnectionString,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
  ...(isCloud ? { ssl: { rejectUnauthorized: false } } : {})
});

const adapter = new PrismaPg(pool, { schema });

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };


export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
