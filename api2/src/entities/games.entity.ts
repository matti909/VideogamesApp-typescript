import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IGame } from 'src/interfaces/game.interface';
import { BaseEntity } from 'src/config/base.entity';
import { PlatformEntity } from './platform.entity';
import { GenreEntity } from './genre.entity';

@Entity({ name: 'games' })
export class GamesEntity extends BaseEntity implements IGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column({ name: 'background_image' })
  background_image: string;

  @Column()
  description: string;

  @Column()
  released: string;

  @Column()
  rating: number;

  @ManyToMany(() => PlatformEntity)
  @JoinTable()
  platforms: PlatformEntity[];

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}
