/* eslint-disable prettier/prettier */
import { TipoComida } from 'src/tipo-comidas/entities/tipo-comida.entity';

export class ComidaDto {
  id: number;

  descripcion: string;

  linkAReceta: string;

  tipoComida: TipoComida;
}