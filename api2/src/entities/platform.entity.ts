import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IPlatform } from '../interfaces/game.interface';

import { Games } from './../entities/games.entity';

@Entity({ name: 'platforms' })
export class Platform implements IPlatform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToMany(() => Games, (game) => game.platforms)
  @JoinTable()
  games: Games[];
}
