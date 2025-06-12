import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PlanesService } from './planes.service';
import { PlanSemanal } from './plan-semanal.entity';

@Controller('planes')
export class PlanesController {
  constructor(private readonly planesService: PlanesService) {}

  @Get('generar')
  generarPlanSemanal() {
    return this.planesService.generarPlanSemanal();
  }

  @Get()
  findAll(): Promise<PlanSemanal[]> {
    return this.planesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PlanSemanal> {
    return this.planesService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<PlanSemanal>) {
    return this.planesService.create(data);
  }

  @Put('cambiarComida/:id')
  cambiarComida(
    @Param('id') id: string,
    @Body() data: { dia: string; comida: string },
  ) {
    return this.planesService.cambiarComida(+id, data.dia, data.comida);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<PlanSemanal>) {
    return this.planesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planesService.remove(+id);
  }
}
