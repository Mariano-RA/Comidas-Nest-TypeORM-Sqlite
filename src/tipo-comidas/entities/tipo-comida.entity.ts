import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Comida } from 'src/comidas/entities/comida.entity';

@Entity()
export class TipoComida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @OneToMany((type) => TipoComida, (comida) => comida.id)
  @JoinColumn()
  comida: Comida[];
}
