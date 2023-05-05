import { BaseEntity, Column, Entity } from 'typeorm';
import { IGenre } from 'src/interfaces/genre.interface';

@Entity({ name: 'genre' })
export class GenreEntity extends BaseEntity implements IGenre {
  @Column()
  id: number;
  @Column()
  name: string;
}
