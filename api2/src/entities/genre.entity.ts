import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { GamesEntity } from './games.entity';
import { BaseEntity } from 'src/config/base.entity';
import { IGenre } from 'src/interfaces/game.interface';

@Entity({ name: 'genres' })
export class GenreEntity extends BaseEntity implements IGenre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => GamesEntity, (game) => game.genres)
  @JoinTable()
  games: GamesEntity[];
}
