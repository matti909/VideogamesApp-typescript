import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IPlatform } from 'src/interfaces/platform.interface';
import { BaseEntity } from 'src/config/base.entity';

@Entity({ name: 'platform' })
export class PlatformEntity extends BaseEntity implements IPlatform {
  @PrimaryGeneratedColumn()
  name: string;
}
