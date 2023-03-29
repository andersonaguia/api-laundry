import { ApartmentEntity, BaseEntity } from 'src/core/entities';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ResidentEntity } from './resident.entity';

@Entity({ name: 'resident_cash' })
export class ResidentCashEntity extends BaseEntity {
  @Column({ nullable: false })
  cash: number;

  @ManyToOne(() => ResidentEntity, (resident) => resident.id)
  @JoinColumn({
    name: 'resident_id',
  })
  resident: ResidentEntity;

  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.id)
  @JoinColumn({
    name: 'apartment_id',
  })
  apartment: ApartmentEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;
}
