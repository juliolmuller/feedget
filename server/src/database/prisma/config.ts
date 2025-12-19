const DEFAULT_DATABASE_URL = 'file:./database/sqlite/db.sqlite';

export const DATABASE_URL = process.env.DATABASE_URL || DEFAULT_DATABASE_URL;
