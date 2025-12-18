import 'dotenv/config';
import { defineConfig } from 'prisma/config';

import { databaseUrl } from './src/database/prisma/client';

const prismaDir = './src/database/prisma';

export default defineConfig({
  schema: `${prismaDir}/schema.prisma`,
  migrations: {
    path: `${prismaDir}/migrations`,
  },
  datasource: {
    url: databaseUrl,
  },
});
