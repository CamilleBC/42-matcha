import 'dotenv/config';
import { Client } from 'pg';

export async function connect() {
  // Create an instance of db
  const matchaDb = new Client({
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });

  try {
    await matchaDb.connect();
    console.log('matcha-db: connected');
    console.log('matcha-db: ' + matchaDb);
  } catch (err) {
    console.error('matcha-db: connection error', err.stack);
  }

  return matchaDb;
}

export default connect;
