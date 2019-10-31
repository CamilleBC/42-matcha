import cors from 'cors';
import { createUser } from './user';

export function assignRoutes(app, req, res, next) {
  const corsOptions = {
    methods: ['GET', 'PUT', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  app.get('/', (req, res) => res.send('42-matcha'));

  app.options('/users', cors(corsOptions));
  app.post('/users', cors(corsOptions), (req, res, next) =>
    createUser(req, res, next)
  );
}

export default assignRoutes;
