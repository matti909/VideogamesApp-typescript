import { BaseEntity, Column, Entity } from 'typeorm';
import { IGame } from 'src/interfaces/game.interface';

@Entity({ name: 'games' })
export class GamesEntity extends BaseEntity implements IGame {
  @Column()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  released: string;
  @Column()
  rating: number;
}
