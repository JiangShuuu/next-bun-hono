import { config } from "dotenv"
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import * as schema from './schema';
config({ path: ".env.local" })

export const connection = await postgres({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

export const db = drizzle(connection, { schema });
