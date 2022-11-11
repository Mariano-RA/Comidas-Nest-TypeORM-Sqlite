import { PartialType } from '@nestjs/mapped-types';
import { CreateComidaDto } from './create-comida.dto';

export default class UpdateComidaDto extends PartialType(CreateComidaDto) {}
