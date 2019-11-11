import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import assignRoutes from './routes/assignRoutes';
import clearDb from './db/clearDb';
import populateDb from './db/populateDb';
import db from './db/getDb';

const app = express();
const port = process.env.PORT || 3000;

const initDb = async () => {
  await clearDb(db);
  await populateDb(db);
};

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initDb().then(
  () => {
    console.log('DB initialised.');
  },
  () => {
    console.log('Could not populate dB.');
  }
);
assignRoutes(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
