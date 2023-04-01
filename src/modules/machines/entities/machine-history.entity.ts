import { ApartmentEntity, BaseEntity } from 'src/core/entities';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MachineEntity } from './machine.entity';

@Entity({ name: 'machine_history' })
export class MachineHistoryEntity extends BaseEntity {
  @Column({ nullable: false })
  isOn: boolean;

  @ManyToOne(() => MachineEntity, (apartment) => apartment.id)
  @JoinColumn({
    name: 'machine_id',
  })
  machine: MachineEntity;

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
