import 'dotenv/config';
import { defineConfig } from 'prisma/config';

import { DATABASE_URL } from './src/database/prisma/config';

const prismaDir = './src/database/prisma';

export default defineConfig({
  schema: `${prismaDir}/schema.prisma`,
  migrations: {
    path: `${prismaDir}/migrations`,
  },
  datasource: {
    url: DATABASE_URL,
  },
});
