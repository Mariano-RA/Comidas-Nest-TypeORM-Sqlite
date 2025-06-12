import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RecetasService } from './recetas.service';
import { Receta } from './receta.entity';
import { RecetaDto } from './dto/receta.dto';

@Controller('recetas')
export class RecetasController {
  constructor(private readonly recetasService: RecetasService) {}

  @Get()
  findAll(): Promise<Receta[]> {
    return this.recetasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Receta> {
    return this.recetasService.findOne(+id);
  }

  @Post()
  create(@Body() receta: Partial<Receta>) {
    return this.recetasService.create(receta);
  }

  @Post('lote')
  createMultiple(@Body() recetas: Partial<RecetaDto>[]) {
    return this.recetasService.createMultiple(recetas);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() receta: Partial<Receta>) {
    return this.recetasService.update(+id, receta);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recetasService.remove(+id);
  }
}
