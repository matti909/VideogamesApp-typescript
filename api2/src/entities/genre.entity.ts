import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Games } from './../entities/games.entity';

import { IGenre } from '../interfaces/game.interface';

@Entity({ name: 'genres' })
export class Genre implements IGenre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToMany(() => Games, (game) => game.genres)
  @JoinTable()
  games: Games[];
}
