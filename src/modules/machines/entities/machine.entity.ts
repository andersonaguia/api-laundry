import { BaseEntity } from 'src/core/entities';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'command_machines' })
export class MachineEntity extends BaseEntity {
  @Column()
  machineGroup: number;

  @Column({ length: 50 })
  description: string;

  @Column({ default: false })
  isOn: boolean;
}
