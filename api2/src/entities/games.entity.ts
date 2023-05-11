import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IGame } from 'src/interfaces/game.interface';
import { BaseEntity } from 'src/config/base.entity';
import { GenreEntity } from './genre.entity';

@Entity({ name: 'games' })
export class GamesEntity extends BaseEntity implements IGame {
  @Column()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @Column()
  released: string;
  @Column()
  rating: number;

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  GameGenre: GenreEntity[];
}
