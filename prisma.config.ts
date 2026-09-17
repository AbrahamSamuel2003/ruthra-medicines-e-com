import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:samdani2028@127.0.0.1:5432/ss40_network?schema=ruthra',
  },
});
