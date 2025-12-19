import { PrismaLibSql } from '@prisma/adapter-libsql';

import { DATABASE_URL } from './config';
import { PrismaClient } from './generated/client';

const adapter = new PrismaLibSql({
  url: DATABASE_URL,
});

const prismaClient = new PrismaClient({
  adapter,
  log: ['query', 'info', 'warn', 'error'],
});

export default prismaClient;
