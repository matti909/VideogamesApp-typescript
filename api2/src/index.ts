import express from 'express';
import morgan from 'morgan';
import indexRoute from '@routes/index.route';

const app = express();
app.use(morgan('dev'));

app.use('/', indexRoute);

app.get('/', (_req, res) => {
  res.json({ message: 'hello world' });
});

app.listen(4000, () => {
  console.log('Server running OK!!');
});
