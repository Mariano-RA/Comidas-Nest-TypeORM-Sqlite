import { CreateComidaDto } from './create-comida.dto';

export class ComidaDto {
  id: number;

  descripcion: string;

  linkAReceta: string;

  TipoComida: CreateComidaDto;
}
