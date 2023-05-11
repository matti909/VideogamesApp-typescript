import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IGenre } from 'src/interfaces/genre.interface';
import { BaseEntity } from 'src/config/base.entity';

@Entity({ name: 'genre' })
export class GenreEntity extends BaseEntity implements IGenre {
  @Column()
  id: number;
  @Column()
  name: string;
}
