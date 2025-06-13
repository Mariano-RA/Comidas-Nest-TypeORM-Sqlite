import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetasModule } from './recetas/recetas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { PlanesModule } from './planes/planes.module';
import { Receta } from './recetas/receta.entity';
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { PlanSemanal } from './planes/plan-semanal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/Comidas.db',
      entities: [Receta, Ingrediente, PlanSemanal],
      synchronize: true,
    }),
    RecetasModule,
    IngredientesModule,
    PlanesModule,
  ],
})
export class AppModule {}
