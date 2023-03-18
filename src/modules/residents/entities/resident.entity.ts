import { ApartmentEntity } from 'src/core/entities';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../core/entities/base.entity';

@Entity({ name: 'residents' })
export class ResidentEntity extends BaseEntity {
  @Column({ nullable: false, length: 100 })
  name: string;

  @Column({ nullable: false, length: 100 })
  email: string;

  @Column({ nullable: false, length: 12 })
  phone: string;

  @OneToOne(() => ApartmentEntity, (apartment) => apartment.id)
  @JoinColumn({
    name: 'apartment_id',
  })
  apartment: ApartmentEntity;
}
