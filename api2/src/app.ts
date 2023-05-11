import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './routes';
import db from './config/mongo';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors());

app.use(router);

db().then(() => console.log('mongo ready'));

export default app;
