import { PrismaLibSql } from '@prisma/adapter-libsql';

import { PrismaClient } from './generated/client';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Environment variable "DATABASE_URL" not set');
}

const adapter = new PrismaLibSql({
  url: databaseUrl,
});

export const prismaClient = new PrismaClient({
  adapter,
  log: ['query', 'info', 'warn', 'error'],
});

export default prismaClient;
