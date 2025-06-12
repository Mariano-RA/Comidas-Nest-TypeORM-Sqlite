import { Module } from '@nestjs/common';
import { RecetasController } from './recetas.controller';
import { RecetasService } from './recetas.service';
import { Receta } from './receta.entity';
import { Ingrediente } from '../ingredientes/ingrediente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RecetasController],
  providers: [RecetasService],
  imports: [TypeOrmModule.forFeature([Receta, Ingrediente])],
  exports: [RecetasService],
})
export class RecetasModule {}
