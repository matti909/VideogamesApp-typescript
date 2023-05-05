import { BaseEntity, Column, Entity } from 'typeorm';
import { IPlatform } from 'src/interfaces/platform.interface';

@Entity({ name: 'genre' })
export class PlatformEntity extends BaseEntity implements IPlatform {
  @Column()
  name: string;
}
