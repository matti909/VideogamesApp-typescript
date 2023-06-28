import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Games } from './games.entity';

import { IGenre } from 'src/interfaces/game.interface';
import { BaseEntity } from './../config/base.entity';

@Entity({ name: 'genres' })
export class Genre extends BaseEntity implements IGenre {
  @PrimaryGeneratedColumn()
  name: string;

  @ManyToMany(() => Games, (game) => game.genres)
  @JoinTable()
  games: Games[];
}
