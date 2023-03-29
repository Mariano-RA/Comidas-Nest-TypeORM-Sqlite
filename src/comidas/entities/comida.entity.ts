import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Comidas')
export class Comida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ingredientes: string;

  @Column()
  receta: string;
}
