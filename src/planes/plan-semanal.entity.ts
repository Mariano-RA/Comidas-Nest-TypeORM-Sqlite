import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PlanSemanal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semana: string;

  @Column('simple-json')
  comidas: {
    [dia: string]: {
      almuerzo: {
        principal: { id: number; nombre: string };
        guarnicion: { id: number; nombre: string };
      };
      cena: {
        principal: { id: number; nombre: string };
        guarnicion: { id: number; nombre: string };
      };
    };
  };
}
