import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Games } from './../entities/games.entity';

import { IGenre } from '../interfaces/game.interface';
import { BaseEntity } from './base.entity';

@Entity({ name: 'genres' })
export class Genre extends BaseEntity implements IGenre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToMany(() => Games, (game) => game.genres)
  @JoinTable()
  games: Games[];
}
