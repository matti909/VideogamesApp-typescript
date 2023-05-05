import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoute from '@routes/index.route';

const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use('/', indexRoute);

app.get('/', (_req, res) => {
  res.json({ message: 'hello world' });
});

export default app;
