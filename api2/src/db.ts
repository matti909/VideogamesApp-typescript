import 'dotenv/config';
import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'matti',
  password: 'secret1234',
  database: 'videogames3',
  entities: [],
  logging: true,
  synchronize: true
});
