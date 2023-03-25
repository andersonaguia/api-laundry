import { BaseEntity } from 'src/core/entities';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'command_machines' })
export class MachineEntity extends BaseEntity {
  @Column()
  group1: boolean;

  @Column()
  group2: boolean;

  @Column()
  group3: boolean;

  @Column()
  group4: boolean;
}
