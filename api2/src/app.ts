import 'reflect-metadata';

import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import helmet from 'helmet';
import { router } from './../src/routes/';

require('dotenv').config();

const app: Application = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/', router);

export { app };
