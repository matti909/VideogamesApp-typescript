import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IPlatform } from 'src/interfaces/game.interface';

import { Games } from './games.entity';
import { BaseEntity } from './../config/base.entity';

@Entity({ name: 'platforms' })
export class PlatformEntity extends BaseEntity implements IPlatform {
  @PrimaryGeneratedColumn()
  name: string;

  @ManyToMany(() => Games, (game) => game.platforms)
  @JoinTable()
  games: Games[];
}
