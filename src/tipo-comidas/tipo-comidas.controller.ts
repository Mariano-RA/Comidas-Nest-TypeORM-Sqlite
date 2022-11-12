import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoComidasService } from './tipo-comidas.service';
import { CreateTipoComidaDto } from './dto/create-tipo-comida.dto';
import { UpdateTipoComidaDto } from './dto/update-tipo-comida.dto';

@Controller('tipo-comida')
export class TipoComidasController {
  constructor(private readonly tipoComidasService: TipoComidasService) {}

  @Post()
  create(@Body() createTipoComidaDto: CreateTipoComidaDto) {
    return this.tipoComidasService.create(createTipoComidaDto);
  }

  @Get()
  findAll() {
    return this.tipoComidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoComidasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTipoComidaDto: UpdateTipoComidaDto,
  ) {
    return this.tipoComidasService.update(+id, updateTipoComidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoComidasService.remove(+id);
  }
}
