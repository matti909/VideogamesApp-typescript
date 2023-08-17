import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IGame } from '../../src/interfaces/game.interface';
import { Platform } from './../entities/platform.entity';
import { Genre } from './../entities/genre.entity';
import { BaseEntity } from './base.entity';

@Entity({ name: 'games' })
export class Games extends BaseEntity implements IGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'background_image', type: 'varchar' })
  background_image: string;

  @Column({ name: 'description', type: 'text' })
  description: string;

  @Column({ name: 'released', type: 'varchar' })
  released: string;

  @Column({ name: 'rating', type: 'float' })
  rating: number;

  @ManyToMany(() => Platform, (platform) => platform.games) // Relación ManyToMany con Platform
  @JoinTable()
  platforms: Platform[];

  @ManyToMany(() => Genre, (genre) => genre.games) // Relación ManyToMany con Genre
  @JoinTable()
  genres: Genre[];
}
