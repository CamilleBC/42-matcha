import 'dotenv/config';
import pgp from 'pg-promise';

const initOptions = {
  error(error, e) {
    if (e.cn) {
      // A connection-related error;
      //
      // Connections are reported back with the password hashed,
      // for safe errors logging, without exposing passwords.
      console.log('CN:', e.cn);
      console.log('EVENT:', error.message || error);
    }
  }
};

const pgpInit = pgp(initOptions);
const matchaDb = {
  host: process.env.DB_URL,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};
export const db = pgpInit(matchaDb);
export default db;
