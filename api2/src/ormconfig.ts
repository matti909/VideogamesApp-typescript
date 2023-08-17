import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_ACCOUNT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  ssl: true,
  namingStrategy: new SnakeNamingStrategy()
};

export const AppDS = new DataSource(DataSourceConfig);
