import { Ingrediente } from '../ingredientes/ingrediente.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ default: false })
  guarnicion: boolean;

  @Column('simple-json')
  pasos: string;

  @OneToMany(() => Ingrediente, (ingrediente) => ingrediente.receta, {
    cascade: true,
  })
  ingredientes: Ingrediente[];
}
