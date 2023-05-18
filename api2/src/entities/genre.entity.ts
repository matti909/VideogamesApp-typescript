import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { GamesEntity } from './games.entity';
import { IGenre } from 'src/interfaces/game.interface';

@Entity({ name: 'genres' })
export class GenreEntity extends BaseEntity implements IGenre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({ name: 'image_background' })
  image_background: string;

  @ManyToMany(() => GamesEntity, (game) => game.genres)
  @JoinTable()
  games: GamesEntity[];
}