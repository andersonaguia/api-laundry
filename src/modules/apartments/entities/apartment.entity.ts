import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../core/entities/base.entity';

@Entity({ name: 'apartments' })
export class ApartmentEntity extends BaseEntity {
  @Column({ nullable: false, unique: true })
  apartment: number;
}
