import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { connect as connectDb } from './db/connect';
import assignRoutes from './routes/assignRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Session middleware

// connectDb();
assignRoutes(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
