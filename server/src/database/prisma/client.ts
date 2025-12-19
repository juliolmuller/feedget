import { PrismaLibSql } from '@prisma/adapter-libsql';

import { PrismaClient } from './generated/client';

export const DEFAULT_DATABASE_URL = 'file:./database/sqlite/db.sqlite';
export const databaseUrl = process.env.DATABASE_URL || DEFAULT_DATABASE_URL;

const adapter = new PrismaLibSql({
  url: databaseUrl,
});

export const prismaClient = new PrismaClient({
  adapter,
  log: ['query', 'info', 'warn', 'error'],
});

export default prismaClient;
