import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { TipoComida } from 'src/tipo-comidas/entities/tipo-comida.entity';

@Entity()
export class Comida {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  descripcion: string;

  @Column()
  linkAReceta: string;

  @Column()
  idTipoComida: number;

  @ManyToOne((type) => TipoComida, (tipoComida) => tipoComida.id)
  @JoinColumn({ name: 'idTipoComida', referencedColumnName: 'id' })
  tipoComida: TipoComida;
}
