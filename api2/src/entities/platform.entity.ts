import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import { IPlatform } from 'src/interfaces/game.interface';

import { GamesEntity } from './games.entity';
import { BaseEntity } from '../../src/config/base.entity';

@Entity({ name: 'platforms' })
export class PlatformEntity extends BaseEntity implements IPlatform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => GamesEntity, (game) => game.platforms)
  @JoinTable()
  games: GamesEntity[];
}
