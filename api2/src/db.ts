import 'dotenv/config';
import { DataSource } from 'typeorm';
import { GamesEntity } from './entities/games.entity';
import { GenreEntity } from './entities/genre.entity';
import { PlatformEntity } from './entities/platform.entity';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'matti',
  password: 'secret1234',
  database: 'videogames3',
  entities: [GamesEntity, GenreEntity, PlatformEntity],
  logging: true,
  synchronize: true
});
