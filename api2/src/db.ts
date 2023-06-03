import 'dotenv/config';
import { DataSource } from 'typeorm';
import { GamesEntity } from './entities/games.entity';
import { GenreEntity } from './entities/genre.entity';
import { PlatformEntity } from './entities/platform.entity';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: '192.168.1.125',
  port: 4000,
  username: 'matti',
  password: 'secret34898525',
  database: 'videogames',
  entities: [GamesEntity, GenreEntity, PlatformEntity],
  logging: true,
  synchronize: true
});
