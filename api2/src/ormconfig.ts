import 'dotenv/config';
import { DataSource } from 'typeorm';
const entitiesPath = __dirname + process.env.POSTGRES_ENTITIES;

export const appDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_ACCOUNT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: false,
  entities: [entitiesPath]
});
