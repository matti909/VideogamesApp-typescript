import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { GamesEntity } from './games.entity';
import { IPlatform } from 'src/interfaces/game.interface';
import { BaseEntity } from 'src/config/base.entity';

@Entity({ name: 'platforms' })
export class PlatformEntity extends BaseEntity implements IPlatform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  image_background: string;

  @Column({ nullable: true, name: 'year_end' })
  yearEnd: number;

  @Column({ nullable: true, name: 'year_start' })
  yearStart: number;

  @ManyToMany(() => GamesEntity, (game) => game.platforms)
  @JoinTable()
  games: GamesEntity[];
}