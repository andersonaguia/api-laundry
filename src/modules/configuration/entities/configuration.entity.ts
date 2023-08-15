import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/core/entities';
import { UserEntity } from 'src/modules/users/entities/user.entity';

@Entity({ name: 'system_config' })
export class ConfigurationEntity extends BaseEntity {
  @Column({ nullable: false })
  startTime: Date;

  @Column({ nullable: false })
  closingTime: Date;

  @Column({ nullable: false, name: 'minUsageTime' })
  minimumUsageTime: number;

  @Column({ nullable: false , name: 'maxUsageTime'})
  maximumUsageTimeInHours: number;

  @Column({ type: 'float', precision: 10, scale: 2, nullable: false })
  price: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;
}
