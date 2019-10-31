import "dotenv/config";
import { Client } from "pg";
import Pusher from "pusher";

export async function connect() {
  // Create an instance of db
  const matchaDb = new Client({
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });

  // Create an instance of Pusher
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
  });

  try {
    await matchaDb.connect();
    console.log("matcha-db: connected");
  } catch (err) {
    console.error("matcha-db: connection error", err.stack);
  }
}

export default connect;
