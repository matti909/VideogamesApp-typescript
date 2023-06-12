import 'dotenv/config';
import { DataSource } from 'typeorm';
const entitiesPath = __dirname + process.env.PG_ENTITIES;

export const appDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: 5432,
  username: process.env.PG_ACCOUNT,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: true,
  logging: false,
  entities: [entitiesPath]
});
