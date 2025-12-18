import 'dotenv/config';
import { defineConfig } from 'prisma/config';

const prismaDir = './src/database/prisma';
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Environment variable "DATABASE_URL" not set');
}

export default defineConfig({
  schema: `${prismaDir}/schema.prisma`,
  migrations: {
    path: `${prismaDir}/migrations`,
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
